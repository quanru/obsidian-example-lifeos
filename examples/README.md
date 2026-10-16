# Multilingual open-source LifeOS vaults

Choose `examples/<language>/LifeOS Vault` to explore the workflow, or `LifeOS Blank Vault` to start with your own notes. Supported languages: `en`, `zh-cn`, `zh-tw`, `de`, `es`, `fr`, `pt`, `ja`, `ko`, `ar`.

Open the chosen folder as a vault in Obsidian. Install LifeOS 1.29.2 or newer (`periodic-para`) and Dataview from Community plugins and enable them. Read `INSTALL.md` and the localized starting guide. The free plugin works independently of Pro; quick capture, theme creation and native theme lists work without Dataview; task, record and resource queries require it.

The 1.19.0 packages remain compatible with LifeOS 1.28.2. Releases 1.28.1 and 1.28.2 changed capture behavior and layout without changing starter templates or folder settings. Updating the plugin does not require replacing an existing vault.

The template language is recorded in `.lifeos/template-profile.json`. Changing the display language does not rename existing notes or convert their content. Initialization adds missing files and preserves edits. Each generated vault has localized folder paths and section headers in its LifeOS settings.

## Maintenance

`i18n/starter.json` is an export of public open-source starter content, maintained independently of Pro. Before refreshing it, choose a published plugin tag and use a clean source snapshot of that tag. Do not export an unrelated checkout with uncommitted changes. Record the tag and commit in the verification notes.

To refresh it after the plugin’s starter templates have been released, run from that source snapshot:

```bash
node scripts/export-example-copy.mjs ../obsidian-example-lifeos/i18n/starter.json
```

Then, in this repository:

```bash
node scripts/examples/generate.mjs
node scripts/examples/generate.mjs --check
python3 scripts/examples/package.py
```

Generated files belong under `examples/`. The generator never reads or copies the developer vault’s `.obsidian` directory, bundled plugins, personal settings, or historical article translations. Packages contain only the generated starter vaults; output ZIPs are in ignored `dist/`.

Historical templates remain in the root and `i18n/<language>/` and are no longer the release packaging input. Archive names remain compatible with existing download links, with `LifeOS_KO.zip` added for Korean.

A plugin patch that only changes capture interaction, styling, or bug fixes does not require a new example release. Update and release example packages when template content, folder settings, required plugin versions, or the documented starting workflow changes. Compare a fresh export with `i18n/starter.json` before regenerating files. Coordinate workflow changes with the matching plugin release; unpublished feature removals must not change existing downloads prematurely.

## Open-source plugin compatibility

Use LifeOS 1.29.2 or newer. New generated starter queries use `LifeOSOpen` so they select the open-source implementation when Pro is also installed. Existing notes are not rewritten. Choose `LifeOS Theme Vault` for a working theme example or `LifeOS Theme Blank Vault` to start with your own content.

The plugin ribbon provides Quick capture. Plain records do not require a theme or Dataview; aggregation queries require Dataview. Theme indexes need a `tags` property.

生成的示例库使用开源版独立语法 `LifeOSOpen`，请安装 LifeOS 1.29.2 或更新版本。主题索引需填写 `tags`；普通记录不需要关联主题，聚合查询需启用 Dataview。

## Theme overview examples

The Chinese and English `LifeOS Theme Vault` folders now include two complete workflows: learning TypeScript and launching a personal site. Start with [主题汇总上手](<zh-cn/LifeOS Theme Vault/主题汇总上手.md>) or [Theme overview walkthrough](<en/LifeOS Theme Vault/Theme overview walkthrough.md>). Each has an index, one open task, one completed task, a record and a tagged resource; the learning example also includes a habit task that must stay out of its overview.

这些示例需要开源版 LifeOS 1.29.2 或更新版本，任务汇总默认只显示未完成项。普通主题既能用来学习，也能推进项目，无需切到 PARA。空白库仍保持空白，不添加演示数据。

The standalone scenario source is `scripts/examples/theme-scenarios.mjs`; the full generator also includes it for these two populated theme vaults. It does not replace the published starter export. To update or check only these examples:

```bash
node scripts/examples/theme-scenarios.mjs
node scripts/examples/theme-scenarios.mjs --check
```

Examples 1.21.0 is coordinated with open-source LifeOS 1.29.2.

The 1.21.0 starter export is bound to open-source plugin tag `1.29.2` (`5151e148323338b703f13864400861c346e18716`). The bundled Aino theme is optional and requires Obsidian 1.10.6 or newer.
