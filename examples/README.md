# Multilingual open-source LifeOS vaults

Choose `examples/<language>/LifeOS Vault` to explore the workflow, or `LifeOS Blank Vault` to start with your own notes. Supported languages: `en`, `zh-cn`, `zh-tw`, `de`, `es`, `fr`, `pt`, `ja`, `ko`, `ar`.

Open the chosen folder as a vault in Obsidian. Install LifeOS (`periodic-para`) and Dataview from Community plugins and enable them. Read `INSTALL.md` and the localized starting guide. The free plugin works independently of Pro; initialization, quick capture, and weekly review do not require Dataview, while LifeOS query blocks do.

The template language is recorded in `.lifeos/template-profile.json`. Changing the display language does not rename existing notes or convert their content. Initialization adds missing files and preserves edits. Each generated vault has localized folder paths and section headers in its LifeOS settings.

## Maintenance

`i18n/starter.json` is an export of public open-source starter content, maintained independently of Pro. To refresh it after changing the open-source plugin’s starter templates, run from the plugin checkout:

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
