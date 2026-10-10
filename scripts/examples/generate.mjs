#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const starter = JSON.parse(fs.readFileSync(path.join(root, 'i18n/starter.json'), 'utf8'));
const install = JSON.parse(fs.readFileSync(path.join(root, 'i18n/install.json'), 'utf8'));
const validate = process.argv.includes('--check');
const index = { schemaVersion: 1, source: 'Open-source LifeOS starter templates', languages: {} };
let checked = 0;
for (const [locale, language] of Object.entries(starter.languages)) {
  const suffix = locale === 'en' ? '' : '_' + ({ 'zh-cn': 'ZH', 'zh-tw': 'ZH_TW' }[locale] || locale.toUpperCase());
  index.languages[locale] = { label: language.label, example: `examples/${locale}/LifeOS Vault`, blank: `examples/${locale}/LifeOS Blank Vault`, themeExample: `examples/${locale}/LifeOS Theme Vault`, themeBlank: `examples/${locale}/LifeOS Theme Blank Vault`, archiveName: `LifeOS${suffix}` };
  for (const variant of ['LifeOS Vault', 'LifeOS Blank Vault', 'LifeOS Theme Vault', 'LifeOS Theme Blank Vault']) {
    const target = path.join(root, 'examples', locale, variant);
    const blank = variant.includes('Blank');
    const themeMode = variant.includes('Theme');
    const content = themeMode ? language.themes : language;
    if (!validate) fs.rmSync(target, { recursive: true, force: true });
    const files = new Map();
    const settings = { ...content.settings };
    for (const plan of content.plans) {
      if (blank && plan.role === 'example') continue;
      assert(!path.isAbsolute(plan.path) && !plan.path.split('/').includes('..'));
      files.set(plan.path, plan.content);
    }
    const copy = language.copy;
    for (const key of themeMode ? [] : ['projectsPath', 'areasPath', 'resourcesPath', 'archivesPath']) {
      // Keep every PARA folder visible even before notes are added.
      const title = settings[key].replace(/^\d+\. /, '');
      files.set(`${settings[key]}/README.md`, `# ${title}\n\n\`\`\`LifeOS\n${({ projectsPath: 'Project', areasPath: 'Area', resourcesPath: 'Resource', archivesPath: 'Archive' })[key]}ListByFolder\n\`\`\`\n`);
    }
    if (!blank) {
      const example = content.plans.find(plan => plan.role === 'example');
      const sampleLines = example.content.split('\n').filter(line => line.startsWith('- '));
      const tag=themeMode?'lifeos/first-theme':'lifeos/first-project';
      const rootFolder=themeMode?settings.themesPath:settings.projectsPath;
      const name=themeMode?'LifeOS':'First project';
      const body=files.get(`${rootFolder}/Template.md`);
      files.set(`${settings.periodicNotesPath}/2026/Daily/10/2026-10-07.md`, `# ${copy.templateDailyTitle}\n\n## ${settings.dailyRecordHeader}\n\n${sampleLines.map(line => `${line} #${tag}`).join('\n')}\n\n## ${themeMode?settings.themesPath:settings.projectListHeader}\n\n1. [[${rootFolder}/${name}/README.md|${name}]]\n\n## ${settings.habitHeader}\n\n- [ ] ${copy.templateTasks} #${tag}\n`);
      files.set(`${rootFolder}/${name}/README.md`, `---\ntags: [${tag}]\n---\n\n${body}`);
      if (themeMode) files.set(`${rootFolder}/${copy.templateRecords}/README.md`, `---\ntags: [lifeos/first-theme/notes]\n---\n\n${body}`);
      files.set(`${rootFolder}/${name}/Notes.md`, `---\ntags: [${tag}]\n---\n\n# ${copy.templateFiles}\n\n${sampleLines[0]}\n`);
    }
    files.set('.lifeos/template-profile.json', JSON.stringify({ schemaVersion: 1, template: themeMode ? 'theme' : 'para', locale, initializedAt: '2026-10-07T00:00:00.000Z' }, null, 2) + '\n');
    files.set('.obsidian/plugins/periodic-para/data.json', JSON.stringify(settings, null, 2) + '\n');
    files.set('.obsidian/community-plugins.json', '["periodic-para", "dataview"]\n');
    files.set('.obsidian/app.json', '{}\n');
    files.set('.obsidian/daily-notes.json', JSON.stringify({ folder: settings.periodicNotesPath, format: 'YYYY/[Daily]/MM/YYYY-MM-DD', template: `${settings.periodicNotesPath}/Templates/Daily.md` }, null, 2) + '\n');
    files.set('INSTALL.md', '# LifeOS\n\n' + install[locale].slice(0, 3).map((line, index) => `${index + 1}. ${line}`).join('\n') + '\n\n' + install[locale][3] + '\n');
    for (const [relative, contents] of files) {
      const file = path.join(target, relative);
      if (validate) assert.equal(fs.readFileSync(file, 'utf8'), contents, `Stale generated file: ${file}`);
      else { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, contents); }
      checked++;
    }
    if (validate) {
      assert(!fs.existsSync(path.join(target, '.obsidian/plugins/periodic-para/main.js')), 'Plugin binaries must be installed separately');
      assert.equal([...files.keys()].some(file => file.includes('/Daily/10/')), !blank);
      for (const key of themeMode ? ['periodicNotesPath','themesPath'] : ['periodicNotesPath', 'projectsPath', 'areasPath', 'resourcesPath', 'archivesPath']) assert(fs.statSync(path.join(target, settings[key])).isDirectory());
      for (const header of themeMode ? [settings.dailyRecordHeader,settings.habitHeader] : [settings.dailyRecordHeader, settings.projectListHeader, settings.habitHeader]) assert(files.get(`${settings.periodicNotesPath}/Templates/Daily.md`).includes(`## ${header}`));
    }
  }
}
const manifest = path.join(root, 'examples/manifest.json');
if (validate) assert.deepEqual(JSON.parse(fs.readFileSync(manifest, 'utf8')), index);
else fs.writeFileSync(manifest, JSON.stringify(index, null, 2) + '\n');
console.log(`${validate ? 'Validated' : 'Generated'} ${checked} files across ${Object.keys(index.languages).length} languages (PARA + themes, example + blank).`);
