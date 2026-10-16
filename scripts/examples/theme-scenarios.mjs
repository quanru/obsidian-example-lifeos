import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

// These scenarios are maintained independently of the exported starter templates.
export function addThemeScenarios(files, settings, locale) {
  if (!['zh-cn', 'en'].includes(locale)) return;
  const zh = locale === 'zh-cn';
  const themes = settings.themesPath, journal = settings.periodicNotesPath;
  const cases = zh ? [
    ['学习 TypeScript', 'learn/typescript', '用类型缩小避免不必要的类型断言。', '写一个联合类型的练习。', '读完入门介绍。', '类型缩小练习资料'],
    ['发布个人网站', 'project/website', '首页先说明服务对象，再给出作品入口。', '整理三个可以公开的作品。', '确定网站目标。', '首页内容清单'],
  ] : [
    ['Learn TypeScript', 'learn/typescript', 'Use narrowing to avoid unnecessary type assertions.', 'Write a union type exercise.', 'Read the introduction.', 'Type narrowing resources'],
    ['Launch a personal site', 'project/website', 'Explain who the site serves before showing the portfolio.', 'Choose three public portfolio pieces.', 'Define the site goal.', 'Homepage content checklist'],
  ];
  const block = name => `\`\`\`LifeOSOpen\n${name}\n\`\`\``;
  const overview = zh
    ? `## 未完成任务\n\n${block('TaskOpenListByTag')}\n\n## 记录\n\n${block('BulletListByTag')}\n\n## 资料\n\n${block('FileListByTag')}\n`
    : `## Open tasks\n\n${block('TaskOpenListByTag')}\n\n## Records\n\n${block('BulletListByTag')}\n\n## Resources\n\n${block('FileListByTag')}\n`;
  for (const [name, tag, record, task, done, resource] of cases) {
    files.set(`${themes}/${name}/README.md`, `---\ntags: [${tag}]\n---\n\n# ${name}\n\n${overview}`);
    files.set(`${themes}/${name}/${resource}.md`, `---\ntags: [${tag}]\n---\n\n# ${resource}\n\n${record}\n`);
  }
  files.set(`${journal}/2026/Daily/10/2026-10-15.md`, `# ${zh ? '日记' : 'Journal'}\n\n## ${settings.dailyRecordHeader}\n\n${cases.map(([, tag, record, task, done]) => `- ${record} #${tag}\n- [ ] ${task} #${tag}\n- [x] ${done} #${tag}`).join('\n\n')}\n\n## ${settings.habitHeader}\n\n- [ ] ${zh ? '这个习惯任务不应出现在主题汇总中。' : 'This habit must not appear in the theme overview.'} #learn/typescript\n`);
  const guide = zh ? '主题汇总上手.md' : 'Theme overview walkthrough.md';
  files.set(guide, zh
    ? `# 主题汇总上手\n\n此页示例需搭配开源版 LifeOS 1.29.2 或更新版本，任务汇总默认只显示未完成项。\n\n1. 打开 [[${themes}/${cases[0][0]}/README.md|学习 TypeScript]]，查看一条待办、一条记录和一篇资料。\n2. 勾选待办，再打开 [[${journal}/2026/Daily/10/2026-10-15.md|来源日记]]，确认原任务已完成；习惯任务不会收录。\n3. 打开 [[${themes}/${cases[1][0]}/README.md|发布个人网站]]：项目也可以是普通主题，不需要 PARA 目录。\n4. 在快速记录中关联其中一个主题，保存新内容后回到汇总页；展开“收录规则”查看标签和过滤范围。\n\n任务显示未完成项；记录链接返回来源，资料链接打开原笔记。两篇主题使用不同标签，彼此不会混入。\n\n旧主题页或已配置的模板可使用命令“LifeOS: 升级主题查询”，逐项预览并应用标准查询的改动。保留全部任务时不要勾选对应任务块。查询需要单独安装并启用 Dataview；快速记录、主题创建和原生主题列表不需要。\n`
    : `# Theme overview walkthrough\n\nThese examples require open-source LifeOS 1.29.2 or newer. Task overviews show unfinished items by default.\n\n1. Open [[${themes}/${cases[0][0]}/README.md|Learn TypeScript]] to see one open task, one record and one resource.\n2. Check the task, then open the [[${journal}/2026/Daily/10/2026-10-15.md|source journal]] to verify writeback. The habit task is excluded.\n3. Open [[${themes}/${cases[1][0]}/README.md|Launch a personal site]]. Projects can be plain themes without PARA folders.\n4. Associate either theme in Quick capture, save new content and return to its overview. Expand Inclusion rules to see tags and filters.\n\nTasks show unfinished items; record links return to their source and resource links open the original note. Distinct tags keep the two themes separate.\n\nFor an older theme index or configured template, run LifeOS: Upgrade theme queries and review the changes before applying. Leave a task block unselected to retain completed tasks. Queries require Dataview to be installed and enabled separately; Quick capture, theme creation and native theme lists do not.\n`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
  for (const locale of ['zh-cn', 'en']) {
    const target = path.join(root, 'examples', locale, 'LifeOS Theme Vault');
    const settings = JSON.parse(fs.readFileSync(path.join(target, '.obsidian/plugins/periodic-para/data.json'), 'utf8'));
    const files = new Map(); addThemeScenarios(files, settings, locale);
    for (const [relative, contents] of files) {
      const file = path.join(target, relative);
      if (process.argv.includes('--check')) assert.equal(fs.readFileSync(file, 'utf8'), contents, relative);
      else { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, contents); }
    }
  }
  console.log('Theme scenarios: Chinese and English validated.');
}
