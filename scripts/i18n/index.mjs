#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import { tmpdir } from "node:os";
import { dirname, extname, isAbsolute, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const repoRoot = join(__dirname, "../../");
const i18nDir = join(repoRoot, "i18n");
const manifestPath = join(i18nDir, "manifest.json");
const translationsDir = join(i18nDir, "translations");
const glossaryPath = join(i18nDir, "glossary.json");

const DEFAULT_BATCH_SIZE = 80;
const DEFAULT_BATCH_CHARS = 12_000;
const DEFAULT_CLAUDE_MODEL = process.env.EXAMPLES_I18N_CLAUDE_MODEL || "sonnet";
const CLAUDE_CLI_PROVIDER = "claude-cli";

const LANGUAGE_NAMES = {
  zh: "Simplified Chinese",
  "zh-tw": "Traditional Chinese",
  de: "German",
  es: "Spanish",
  fr: "French",
  pt: "Portuguese",
  ja: "Japanese",
  ar: "Arabic",
};

const STABLE_TERMS = [
  "LifeOS",
  "Obsidian",
  "PARA",
  "README",
  "usememos",
  "DeepAsk",
];

const AI_TRANSLATION_SYSTEM_INSTRUCTION = [
  "You translate user-visible English strings for an Obsidian example vault.",
  "Output only the requested translation JSON. Do not explain your choices.",
  "Translate naturally for native speakers instead of doing word-for-word literal translation.",
  "Preserve Markdown punctuation, placeholders, emoji, product names, file extensions, URLs, code-like tokens, and Obsidian block refs such as ^abc123.",
  "If a string is already best left in English, return it unchanged.",
].join(" ");

const CLAUDE_CLI_JSON_SCHEMA = {
  type: "object",
  properties: {
    translations: {
      type: "array",
      items: {
        type: "object",
        properties: {
          index: { type: "string" },
          translation: { type: "string" },
        },
        required: ["index", "translation"],
        additionalProperties: false,
      },
    },
  },
  required: ["translations"],
  additionalProperties: false,
};

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function readManifest() {
  return JSON.parse(fs.readFileSync(manifestPath, "utf8"));
}

function readTranslationGlossary() {
  if (!fs.existsSync(glossaryPath)) {
    return { sources: {} };
  }
  const glossary = JSON.parse(fs.readFileSync(glossaryPath, "utf8"));
  return glossary && typeof glossary === "object" ? glossary : { sources: {} };
}

function applyGlossaryOverrides(entries, targetLang) {
  const glossary = readTranslationGlossary();
  const sourceMap =
    glossary?.sources && typeof glossary.sources === "object"
      ? glossary.sources
      : {};

  return entries.map((entry) => {
    const overrides = sourceMap[entry.source];
    const translation = overrides?.[targetLang];
    if (typeof translation === "string" && translation.trim().length > 0) {
      return { ...entry, translation };
    }
    return entry;
  });
}

function parseCliArgs(argv) {
  const [command = "help", ...rest] = argv;
  let langs = [];
  let batchSize = DEFAULT_BATCH_SIZE;
  let batchChars = DEFAULT_BATCH_CHARS;
  let model = "";
  let overwrite = false;

  for (let index = 0; index < rest.length; index += 1) {
    const arg = rest[index];

    if (arg === "--lang" || arg === "--langs") {
      const value = rest[index + 1];
      if (value) {
        langs = value.split(",").map((s) => s.trim()).filter(Boolean);
        index += 1;
      }
      continue;
    }
    if (arg.startsWith("--lang=") || arg.startsWith("--langs=")) {
      const prefix = arg.startsWith("--langs=") ? "--langs=" : "--lang=";
      langs = arg.slice(prefix.length).split(",").map((s) => s.trim()).filter(Boolean);
      continue;
    }
    if (arg === "--batch-size") {
      const value = Number.parseInt(rest[index + 1] ?? "", 10);
      if (Number.isFinite(value)) { batchSize = value; index += 1; }
      continue;
    }
    if (arg === "--batch-chars") {
      const value = Number.parseInt(rest[index + 1] ?? "", 10);
      if (Number.isFinite(value)) { batchChars = value; index += 1; }
      continue;
    }
    if (arg === "--model") {
      const value = rest[index + 1];
      if (value) { model = value.trim(); index += 1; }
      continue;
    }
    if (arg.startsWith("--model=")) {
      model = arg.slice("--model=".length).trim();
      continue;
    }
    if (arg === "--overwrite") {
      overwrite = true;
    }
  }

  return { command, langs, batchSize, batchChars, model, overwrite };
}

function hasLetters(value) {
  return /\p{L}/u.test(value);
}

function shouldTranslateText(source) {
  const normalized = source.trim();
  if (normalized.length === 0) return false;
  return hasLetters(normalized);
}

function hasTranslatableCharacters(value) {
  return /\p{L}/u.test(value);
}

function buildSegmentId(relativePath, kind, index, source) {
  const hash = crypto
    .createHash("sha1")
    .update(`${relativePath}:${kind}:${index}:${source}`)
    .digest("hex")
    .slice(0, 12);
  return `${kind}:${hash}`;
}

function createSegmentRecorder(relativePath, lookups) {
  const entries = [];
  let segmentIndex = 0;

  return {
    entries,
    translate(source, kind) {
      const id = buildSegmentId(relativePath, kind, segmentIndex, source);
      segmentIndex += 1;

      const entry = { id, kind, file: relativePath, source };
      entries.push(entry);

      const translated = lookups.byId.get(id) ?? lookups.bySource.get(source);
      return translated && translated.trim().length > 0 ? translated : source;
    },
  };
}

function preserveWhitespace(rawText, transform) {
  const leading = rawText.match(/^\s*/u)?.[0] || "";
  const trailing = rawText.match(/\s*$/u)?.[0] || "";
  const core = rawText.slice(leading.length, rawText.length - trailing.length);
  if (!hasTranslatableCharacters(core)) return rawText;
  return `${leading}${transform(core)}${trailing}`;
}

function splitMarkdownPrefix(line) {
  let prefix = "";
  let rest = line;
  let matched = true;

  while (matched) {
    matched = false;
    const patterns = [
      /^(\s*>\s*)/,
      /^(\s*(?:[-*+]|\d+\.)\s+)/,
      /^(\[[ xX]\]\s+)/,
      /^(#{1,6}\s+)/,
    ];
    for (const pattern of patterns) {
      const match = rest.match(pattern);
      if (match) {
        prefix += match[0];
        rest = rest.slice(match[0].length);
        matched = true;
        break;
      }
    }
  }
  return { prefix, body: rest };
}

function translateInlineMarkdown(text, recorder) {
  const tokenPattern =
    /!?\[\[[^\]]+\]\]|!?\[[^\]]*\]\([^)]+\)|`[^`]*`|<\/?[^>]+>|#[\p{L}\p{N}_/-]+/gu;
  let result = "";
  let lastIndex = 0;

  for (const match of text.matchAll(tokenPattern)) {
    const [token] = match;
    const matchIndex = match.index ?? 0;
    const rawText = text.slice(lastIndex, matchIndex);
    result += preserveWhitespace(rawText, (core) =>
      recorder.translate(core, "text"),
    );

    if (token.includes("[[")) {
      const linkMatch = token.match(/^(!?)\[\[([^|\]]+)(?:\|([^\]]+))?\]\]$/u);
      if (linkMatch) {
        const [, bang, target, alias] = linkMatch;
        result += alias
          ? `${bang}[[${target}|${recorder.translate(alias, "wikilink-alias")}]]`
          : token;
      } else {
        result += token;
      }
    } else if (token.includes("](")) {
      const linkMatch = token.match(/^(!?)\[([^\]]*)\]\(([^)]+)\)$/u);
      if (linkMatch) {
        const [, bang, label, url] = linkMatch;
        result += `${bang}[${label ? recorder.translate(label, "link-label") : label}](${url})`;
      } else {
        result += token;
      }
    } else {
      result += token;
    }

    lastIndex = matchIndex + token.length;
  }

  result += preserveWhitespace(text.slice(lastIndex), (core) =>
    recorder.translate(core, "text"),
  );
  return result;
}

function translateMarkdownLineSegment(line, recorder, allowPrefix = true) {
  if (!allowPrefix) return translateInlineMarkdown(line, recorder);
  const { prefix, body } = splitMarkdownPrefix(line);
  return `${prefix}${translateInlineMarkdown(body, recorder)}`;
}

function translateLineWithComments(line, recorder, inComment = false) {
  let result = "";
  let remaining = line;
  let insideComment = inComment;
  let allowPrefix = true;

  while (true) {
    const markerIndex = remaining.indexOf("%%");
    const segment =
      markerIndex === -1 ? remaining : remaining.slice(0, markerIndex);

    result += insideComment
      ? translateInlineMarkdown(segment, recorder)
      : translateMarkdownLineSegment(segment, recorder, allowPrefix);

    if (!insideComment && segment.trim().length > 0) allowPrefix = false;
    if (markerIndex === -1) break;

    result += "%%";
    remaining = remaining.slice(markerIndex + 2);
    insideComment = !insideComment;
  }

  return { line: result, inComment: insideComment };
}

function transformMarkdownLikeContent(content, relativePath, lookups = { byId: new Map(), bySource: new Map() }) {
  const recorder = createSegmentRecorder(relativePath, lookups);
  const newline = content.includes("\r\n") ? "\r\n" : "\n";
  const hasTrailingNewline = content.endsWith("\n");
  const lines = content.split(/\r?\n/u);
  const output = [];

  let inFrontmatter = lines[0] === "---";
  let inFence = false;
  let inComment = false;

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const line = lines[lineIndex];

    if (lineIndex === 0 && line === "---") {
      output.push(line);
      continue;
    }

    if (inFrontmatter) {
      output.push(line);
      if (line === "---" || line === "...") inFrontmatter = false;
      continue;
    }

    const trimmed = line.trim();
    if (trimmed.startsWith("```") || trimmed.startsWith("~~~")) {
      inFence = !inFence;
      output.push(line);
      continue;
    }

    if (inFence) {
      output.push(line);
      continue;
    }

    const translatedLine = translateLineWithComments(line, recorder, inComment);
    inComment = translatedLine.inComment;
    output.push(translatedLine.line);
  }

  return {
    content: `${output.join(newline)}${hasTrailingNewline ? newline : ""}`,
    entries: recorder.entries,
  };
}

function transformCanvasContent(content, relativePath, lookups = { byId: new Map(), bySource: new Map() }) {
  const recorder = createSegmentRecorder(relativePath, lookups);
  const payload = JSON.parse(content);

  if (Array.isArray(payload.nodes)) {
    payload.nodes = payload.nodes.map((node) => {
      if (
        node?.type === "text" &&
        typeof node.text === "string" &&
        hasTranslatableCharacters(node.text)
      ) {
        const result = transformMarkdownLikeContent(node.text, `${relativePath}#node:${node.id}`, lookups);
        return { ...node, text: result.content };
      }
      return node;
    });
  }

  return {
    content: `${JSON.stringify(payload, null, "\t")}\n`,
    entries: recorder.entries,
  };
}

function transformFileContent(filePath, sourceRoot, lookups) {
  const relativePath = relative(sourceRoot, filePath).split("\\").join("/");
  const extension = extname(filePath).toLowerCase();
  const content = fs.readFileSync(filePath, "utf8");

  if (extension === ".canvas") {
    return transformCanvasContent(content, relativePath, lookups);
  }

  if (extension === ".md" || extension === ".txt") {
    return transformMarkdownLikeContent(content, relativePath, lookups);
  }

  return { content, entries: [] };
}

function walkFiles(dirPath, excludes = []) {
  const files = [];
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = join(dirPath, entry.name);
    if (excludes.includes(entry.name)) continue;
    if (entry.isDirectory()) {
      files.push(...walkFiles(fullPath, []));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

function readCatalog(catalogPath) {
  if (!fs.existsSync(catalogPath)) return null;
  return JSON.parse(fs.readFileSync(catalogPath, "utf8"));
}

function buildTranslationLookups(catalog) {
  const byId = new Map();
  const bySource = new Map();
  for (const entry of catalog?.entries || []) {
    if (typeof entry.translation !== "string" || entry.translation.trim().length === 0) continue;
    byId.set(entry.id, entry.translation);
    if (!bySource.has(entry.source)) bySource.set(entry.source, entry.translation);
  }
  return { byId, bySource };
}

function writeCatalog(catalogPath, targetLang, entries, existingCatalog = null) {
  fs.mkdirSync(dirname(catalogPath), { recursive: true });

  const previousById = new Map();
  const previousBySource = new Map();
  for (const entry of existingCatalog?.entries || []) {
    if (typeof entry.translation === "string" && entry.translation.trim().length > 0) {
      previousById.set(entry.id, entry.translation);
      if (!previousBySource.has(entry.source)) previousBySource.set(entry.source, entry.translation);
    }
  }

  const payload = {
    sourceLang: "en",
    targetLang,
    generatedAt: new Date().toISOString(),
    entries: entries.map((entry) => ({
      ...entry,
      translation: previousById.get(entry.id) ?? previousBySource.get(entry.source) ?? "",
    })),
  };

  payload.entries = applyGlossaryOverrides(payload.entries, targetLang);
  fs.writeFileSync(catalogPath, `${JSON.stringify(payload, null, 2)}\n`);
}

function getCatalogPath(lang) {
  return join(translationsDir, `${lang}.json`);
}

function getLanguageName(lang) {
  return LANGUAGE_NAMES[lang] || lang;
}

function getSourceFiles() {
  const manifest = readManifest();
  const sourceRoot = repoRoot;
  const excludes = manifest.sourceExcludes || [];
  return { sourceRoot, files: walkFiles(sourceRoot, excludes) };
}

function commandExists(command) {
  const result = spawnSync(command, ["--version"], { stdio: "ignore" });
  return !result.error && result.status === 0;
}

// --- Extract ---

function extractCatalogForLanguage(lang) {
  const { sourceRoot, files } = getSourceFiles();
  const entries = [];

  files.forEach((filePath) => {
    const extension = extname(filePath).toLowerCase();
    if (![".md", ".txt", ".canvas"].includes(extension)) return;

    const result = transformFileContent(filePath, sourceRoot, {
      byId: new Map(),
      bySource: new Map(),
    });
    entries.push(...result.entries);
  });

  const catalogPath = getCatalogPath(lang);
  const existingCatalog = readCatalog(catalogPath);
  writeCatalog(catalogPath, lang, entries, existingCatalog);
  console.log(`Wrote translation catalog: ${relative(repoRoot, catalogPath)}`);
}

// --- AI Translate ---

function buildTranslationBatches(entries, { maxEntries = DEFAULT_BATCH_SIZE, maxChars = DEFAULT_BATCH_CHARS } = {}) {
  const batches = [];
  let currentBatch = [];
  let currentChars = 0;

  entries.forEach((entry) => {
    const estimatedChars = (entry?.source?.length ?? 0) + 96;
    const exceedsCurrentBatch =
      currentBatch.length > 0 &&
      (currentBatch.length >= maxEntries || currentChars + estimatedChars > maxChars);

    if (exceedsCurrentBatch) {
      batches.push(currentBatch);
      currentBatch = [];
      currentChars = 0;
    }

    currentBatch.push(entry);
    currentChars += estimatedChars;
  });

  if (currentBatch.length > 0) batches.push(currentBatch);
  return batches;
}

function collectTranslatableSourceRows(catalog, { overwrite = false } = {}) {
  const seen = new Map();
  const candidates = [];

  for (const entry of catalog?.entries || []) {
    if (!shouldTranslateText(entry.source)) continue;
    if (!overwrite && typeof entry.translation === "string" && entry.translation.trim().length > 0) continue;
    if (seen.has(entry.source)) {
      const existing = seen.get(entry.source);
      existing.kinds.push(entry.kind);
      existing.files.push(entry.file);
      continue;
    }
    const row = { source: entry.source, kinds: [entry.kind], files: [entry.file] };
    seen.set(entry.source, row);
    candidates.push(row);
  }

  return candidates;
}

function buildAiTranslationBatchPrompt(targetLang, batch) {
  const targetLanguage = getLanguageName(targetLang);
  const records = batch.map((entry, index) => ({
    index: String(index),
    source: entry.source,
  }));

  return [
    `Translate the following English strings into ${targetLanguage} (${targetLang}) for a LifeOS / Obsidian example vault.`,
    "",
    "Rules:",
    `- Preserve these product terms: ${STABLE_TERMS.join(", ")}.`,
    "- Preserve Markdown, placeholders (xx, 5k, %), block refs (^abc123), URLs, and code fragments.",
    "- Translate naturally, not word-for-word.",
    "- If a string already reads best in English, return it unchanged.",
    "",
    "Input (array of {index, source}):",
    JSON.stringify(records, null, 2),
    "",
    "Output ONLY a JSON array of {index, translation} for each input record. Example output format:",
    '[{"index":"0","translation":"translated text"},{"index":"1","translation":"translated text"}]',
  ].join("\n");
}

function repairTranslationJson(text) {
  const lines = text.split("\n");
  const entries = [];

  for (const line of lines) {
    const trimmed = line.trim().replace(/,\s*$/, "");
    if (!trimmed.startsWith("{") || !trimmed.endsWith("}")) continue;

    // Extract index and translation using a non-greedy approach
    const idxMatch = trimmed.match(/"index"\s*:\s*"(\d+)"/);
    if (!idxMatch) continue;

    // Find the translation value: everything between "translation":"  and  "}
    const transPrefix = '"translation"';
    const transIdx = trimmed.indexOf(transPrefix);
    if (transIdx === -1) continue;

    const colonIdx = trimmed.indexOf(":", transIdx + transPrefix.length);
    if (colonIdx === -1) continue;

    // Find the opening quote of the value
    const openQuote = trimmed.indexOf('"', colonIdx + 1);
    if (openQuote === -1) continue;

    // The closing quote+brace is at the end: "}
    const closeQuoteBrace = trimmed.lastIndexOf('"}');
    if (closeQuoteBrace <= openQuote) continue;

    const rawValue = trimmed.slice(openQuote + 1, closeQuoteBrace);
    // Escape any unescaped double quotes in the value
    const escapedValue = rawValue.replace(/(?<!\\)"/g, '\u201c');
    entries.push({ index: idxMatch[1], translation: escapedValue });
  }

  return JSON.stringify(entries);
}

function extractJsonFromText(text) {
  let cleaned = text.trim();
  // Strip all markdown code fences
  cleaned = cleaned.replace(/^```[\w]*\s*\n/gm, "").replace(/\n```\s*$/gm, "").trim();
  if (cleaned.startsWith("```")) cleaned = cleaned.replace(/^```[\w]*\s*/, "");
  if (cleaned.endsWith("```")) cleaned = cleaned.replace(/```\s*$/, "");
  cleaned = cleaned.trim();

  // Try parsing directly
  try { return JSON.parse(cleaned); } catch {
    // Try repairing translation JSON (fix unescaped quotes)
    try {
      const repaired = repairTranslationJson(cleaned);
      return JSON.parse(repaired);
    } catch {}

    // Try finding JSON array or object
    for (const [open, close] of [["[", "]"], ["{", "}"]]) {
      const start = cleaned.indexOf(open);
      const end = cleaned.lastIndexOf(close);
      if (start !== -1 && end > start) {
        try { return JSON.parse(cleaned.slice(start, end + 1)); } catch {}
        try { return JSON.parse(repairTranslationJson(cleaned.slice(start, end + 1))); } catch {}
      }
    }
    throw new Error(`JSON parse failed after repair attempts. Text (first 300): ${cleaned.slice(0, 300)}`);
  }
}

async function requestClaudeCliBatchTranslation(targetLang, batch, config) {
  const prompt = buildAiTranslationBatchPrompt(targetLang, batch);
  const tmpFile = join(tmpdir(), `i18n-claude-${Date.now()}.txt`);
  fs.writeFileSync(tmpFile, prompt);

  try {
    const args = [
      "-p", prompt,
      "--output-format", "json",
      "--model", config.model || DEFAULT_CLAUDE_MODEL,
      "--max-turns", "1",
    ];

    const result = spawnSync("claude", args, {
      encoding: "utf8",
      maxBuffer: 50 * 1024 * 1024,
      timeout: 300_000,
    });

    assert(!result.error, `Claude CLI error: ${result.error?.message}`);

    let responseText = (result.stdout || "").trim();
    if (!responseText) {
      throw new Error(`Claude CLI returned empty output. stderr: ${result.stderr}`);
    }

    let parsed;
    try {
      parsed = JSON.parse(responseText);
    } catch {
      parsed = extractJsonFromText(responseText);
    }

    // Claude CLI --output-format json wraps in {result: "..."}
    const resultText = parsed?.result ?? parsed?.content ?? parsed;
    let translations;

    if (Array.isArray(resultText)) {
      translations = resultText;
    } else if (typeof resultText === "object" && Array.isArray(resultText?.translations)) {
      translations = resultText.translations;
    } else {
      try {
        const inner = typeof resultText === "string" ? extractJsonFromText(resultText) : resultText;
        translations = Array.isArray(inner) ? inner : inner.translations;
      } catch (parseErr) {
        console.error(`Parse error: ${parseErr.message}`);
        console.error(`resultText type: ${typeof resultText}, length: ${String(resultText).length}`);
        console.error(`First 300 chars: ${String(resultText).slice(0, 300)}`);
        throw new Error(`Cannot parse Claude response: ${String(resultText).slice(0, 200)}`);
      }
    }

    assert(Array.isArray(translations), "Claude response must contain translations array");

    const translationsByIndex = new Map();
    translations.forEach((item) => {
      translationsByIndex.set(String(item.index), item.translation);
    });

    return batch.map((entry, index) => {
      const translation = translationsByIndex.get(String(index));
      const trimmed = translation?.trim();
      return trimmed && trimmed.length > 0 ? trimmed : entry.source;
    });
  } finally {
    try { fs.unlinkSync(tmpFile); } catch {}
  }
}

async function aiTranslateCatalog(lang, { batchSize, batchChars, model, overwrite }) {
  const catalogPath = getCatalogPath(lang);
  const catalog = readCatalog(catalogPath);
  assert(catalog, `Missing catalog for "${lang}". Run extract first.`);

  const candidates = collectTranslatableSourceRows(catalog, { overwrite });
  if (candidates.length === 0) {
    console.log(`No pending AI translations for "${lang}".`);
    return;
  }

  assert(commandExists("claude"), "Claude CLI is not available. Install it first.");
  const aiConfig = { provider: CLAUDE_CLI_PROVIDER, model: model || DEFAULT_CLAUDE_MODEL };

  const batches = buildTranslationBatches(candidates, { maxEntries: batchSize, maxChars: batchChars });
  const nextCatalog = {
    ...catalog,
    generatedAt: new Date().toISOString(),
    aiTranslatedAt: new Date().toISOString(),
    aiTranslationProvider: aiConfig.provider,
    aiTranslationModel: aiConfig.model,
    entries: [...catalog.entries],
  };

  for (let batchIndex = 0; batchIndex < batches.length; batchIndex += 1) {
    const batch = batches[batchIndex];
    console.log(
      `AI translating "${lang}" batch ${batchIndex + 1}/${batches.length} (${batch.length} segments) with ${aiConfig.model}`,
    );

    const translations = await requestClaudeCliBatchTranslation(lang, batch, aiConfig);
    const batchTranslations = new Map();
    translations.forEach((translation, index) => {
      batchTranslations.set(batch[index].source, translation);
    });

    nextCatalog.entries = nextCatalog.entries.map((entry) => {
      if (!overwrite && typeof entry.translation === "string" && entry.translation.trim().length > 0) {
        return entry;
      }
      const translation = batchTranslations.get(entry.source);
      return translation ? { ...entry, translation } : entry;
    });
    nextCatalog.entries = applyGlossaryOverrides(nextCatalog.entries, lang);

    nextCatalog.aiTranslatedAt = new Date().toISOString();
    fs.mkdirSync(dirname(catalogPath), { recursive: true });
    fs.writeFileSync(catalogPath, `${JSON.stringify(nextCatalog, null, 2)}\n`);
  }

  console.log(`Updated AI translation catalog: ${relative(repoRoot, catalogPath)}`);
}

// --- Generate ---

const SITE_LOCALE_MAP = {
  zh: "zh",
  "zh-tw": "zh",
  ja: "ja",
  de: "de",
  es: "es",
  fr: "fr",
  pt: "pt",
  ar: "ar",
};

const LANG_NAMES_NATIVE = {
  en: "English",
  zh: "简体中文",
  "zh-tw": "繁體中文",
  ja: "日本語",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  pt: "Português",
  ar: "العربية",
};

function rewriteSiteUrls(content, lang) {
  const siteLocale = SITE_LOCALE_MAP[lang];
  if (!siteLocale) return content;

  // Rewrite lifeos.vip URLs to include locale prefix
  // Match https://lifeos.vip/path but NOT https://lifeos.vip/zh/ (already localized)
  return content.replace(
    /https:\/\/lifeos\.vip\/(?!(en|zh|ja|de|es|fr|pt|ar)\/)/g,
    `https://lifeos.vip/${siteLocale}/`,
  );
}

function rewriteReadmeLanguageSelector(content, lang) {
  const allLangs = Object.keys(LANG_NAMES_NATIVE);
  const links = allLangs.map((l) => {
    const name = LANG_NAMES_NATIVE[l];
    if (l === lang) return `<strong>${name}</strong>`;
    if (l === "en") return `<a href="https://github.com/quanru/obsidian-example-lifeos">${name}</a>`;
    return `<a href="https://github.com/quanru/obsidian-example-lifeos/tree/main/i18n/${l}">${name}</a>`;
  });

  // Replace old language selector line
  const selectorLine = `<p align="center">${links.join(" | ")}</p>`;
  return content.replace(/<p align="center">.*?<\/p>/s, selectorLine);
}

function rewriteDownloadLink(content, lang, archiveName) {
  if (lang === "en") return content;
  // Point download link to the language-specific release archive (latest)
  const releaseUrl = `https://github.com/quanru/obsidian-example-lifeos/releases/latest/download/${archiveName}.zip`;
  return content.replace(
    /https:\/\/github\.com\/quanru\/obsidian-example-lifeos\/archive\/refs\/heads\/[\w-]+\.zip/g,
    releaseUrl,
  );
}

function rewriteScreenshot(content, lang) {
  const siteLocale = SITE_LOCALE_MAP[lang] || "en";
  // If there are language-specific screenshots
  return content.replace(
    /periodic-para-plugin-en\.png/g,
    `periodic-para-plugin-${siteLocale === "zh" ? "zh" : "en"}.png`,
  );
}

function postProcessGeneratedFile(filePath, lang) {
  let content = fs.readFileSync(filePath, "utf8");
  const fileName = filePath.split("/").pop();

  content = rewriteSiteUrls(content, lang);

  // Top-level README.md of the generated vault
  if (fileName === "README.md" && filePath.endsWith(`/${lang}/README.md`)) {
    const manifest = readManifest();
    const archiveName = manifest.languages[lang]?.archiveName || `LifeOS_${lang}`;
    content = rewriteReadmeLanguageSelector(content, lang);
    content = rewriteDownloadLink(content, lang, archiveName);
    content = rewriteScreenshot(content, lang);
  }

  fs.writeFileSync(filePath, content);
}

function generateFromLegacyBranch(lang, langEntry) {
  const targetRoot = join(i18nDir, lang);
  const source = langEntry.legacySource || "";
  assert(source.startsWith("branch:"), `legacySource must start with "branch:", got: ${source}`);
  const branch = source.slice("branch:".length);

  fs.rmSync(targetRoot, { recursive: true, force: true });
  fs.mkdirSync(targetRoot, { recursive: true });

  // Use git archive to extract branch content into targetRoot
  const result = spawnSync(
    "bash",
    ["-c", `git archive ${branch} | tar -x -C '${targetRoot}'`],
    { cwd: repoRoot, encoding: "utf8" },
  );
  assert(result.status === 0, `Failed to extract branch "${branch}": ${result.stderr}`);

  // Post-process README to add language selector and rewrite URLs
  const files = walkFiles(targetRoot);
  files.forEach((filePath) => {
    const extension = extname(filePath).toLowerCase();
    if (![".md", ".txt"].includes(extension)) return;
    postProcessGeneratedFile(filePath, lang);
  });

  console.log(`Generated examples for "${lang}" from branch "${branch}" at i18n/${lang}/`);
}

function generateLanguageExamples(lang) {
  const manifest = readManifest();
  const langEntry = manifest.languages[lang];
  assert(langEntry, `Unknown language: ${lang}`);

  if (langEntry.role === "legacy") {
    return generateFromLegacyBranch(lang, langEntry);
  }

  const { sourceRoot, files: sourceFiles } = getSourceFiles();
  const catalogPath = getCatalogPath(lang);
  const catalog = readCatalog(catalogPath);
  assert(catalog, `Missing catalog for "${lang}". Run extract first.`);

  const targetRoot = join(i18nDir, lang);
  fs.rmSync(targetRoot, { recursive: true, force: true });
  fs.mkdirSync(targetRoot, { recursive: true });

  const excludes = new Set(manifest.sourceExcludes || []);

  for (const entry of fs.readdirSync(sourceRoot, { withFileTypes: true })) {
    if (excludes.has(entry.name)) continue;
    const src = join(sourceRoot, entry.name);
    const dest = join(targetRoot, entry.name);
    fs.cpSync(src, dest, { recursive: true, force: true });
  }

  const lookups = buildTranslationLookups(catalog);
  const files = walkFiles(targetRoot);

  files.forEach((filePath) => {
    const extension = extname(filePath).toLowerCase();
    if (![".md", ".txt", ".canvas"].includes(extension)) return;

    const result = transformFileContent(filePath, targetRoot, lookups);
    fs.writeFileSync(filePath, result.content);
  });

  // Post-process: rewrite URLs and README language selector
  files.forEach((filePath) => {
    const extension = extname(filePath).toLowerCase();
    if (![".md", ".txt"].includes(extension)) return;
    postProcessGeneratedFile(filePath, lang);
  });

  console.log(`Generated examples for "${lang}" at i18n/${lang}/`);
}

// --- Glossary ---

function syncGlossaryForLanguage(lang) {
  const catalogPath = getCatalogPath(lang);
  const catalog = readCatalog(catalogPath);
  assert(catalog, `Missing catalog for "${lang}". Run extract first.`);

  catalog.entries = applyGlossaryOverrides(catalog.entries, lang);
  catalog.generatedAt = new Date().toISOString();
  fs.writeFileSync(catalogPath, `${JSON.stringify(catalog, null, 2)}\n`);
  console.log(`Applied glossary overrides: ${relative(repoRoot, catalogPath)}`);
}

// --- Main ---

function getAllTargetLangs() {
  const manifest = readManifest();
  return Object.keys(manifest.languages).filter((l) => l !== "en");
}

function getCatalogLangs() {
  const manifest = readManifest();
  return Object.entries(manifest.languages)
    .filter(([lang, entry]) => lang !== "en" && entry.role !== "legacy")
    .map(([lang]) => lang);
}

function resolveLangs(langs) {
  return langs.length > 0 ? langs : getAllTargetLangs();
}

async function main() {
  const { command, langs: rawLangs, batchSize, batchChars, model, overwrite } = parseCliArgs(process.argv.slice(2));
  const manifest = readManifest();
  const isLegacy = (lang) => manifest.languages[lang]?.role === "legacy";
  const langs = resolveLangs(rawLangs);
  const catalogLangs = langs.filter((l) => !isLegacy(l));

  switch (command) {
    case "extract":
      for (const lang of catalogLangs) {
        extractCatalogForLanguage(lang);
      }
      break;

    case "translate":
      for (const lang of catalogLangs) {
        await aiTranslateCatalog(lang, { batchSize, batchChars, model, overwrite });
      }
      break;

    case "generate":
      for (const lang of langs) {
        generateLanguageExamples(lang);
      }
      break;

    case "glossary":
      for (const lang of catalogLangs) {
        syncGlossaryForLanguage(lang);
      }
      break;

    case "all":
      console.log("Step 1: Extract catalogs...");
      for (const lang of catalogLangs) {
        extractCatalogForLanguage(lang);
      }
      console.log("\nStep 2: AI translate...");
      for (const lang of catalogLangs) {
        await aiTranslateCatalog(lang, { batchSize, batchChars, model, overwrite });
      }
      console.log("\nStep 3: Apply glossary...");
      for (const lang of catalogLangs) {
        syncGlossaryForLanguage(lang);
      }
      console.log("\nStep 4: Generate localized vaults...");
      for (const lang of langs) {
        generateLanguageExamples(lang);
      }
      break;

    default:
      console.log(`Usage: node scripts/i18n/index.mjs <command> [options]

Commands:
  extract     Extract translatable strings to catalogs
  translate   Fill catalogs with AI translations
  glossary    Apply glossary overrides to catalogs
  generate    Generate localized vaults from catalogs
  all         Run extract → translate → glossary → generate

Options:
  --lang <code>       Target language(s), comma-separated (default: all)
  --model <name>      AI model to use (default: sonnet)
  --batch-size <n>    Max entries per AI batch (default: 80)
  --batch-chars <n>   Max chars per AI batch (default: 12000)
  --overwrite         Re-translate existing translations
`);
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
