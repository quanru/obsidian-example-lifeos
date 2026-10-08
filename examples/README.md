# Multilingual open-source LifeOS vaults

Choose `examples/<language>/LifeOS Vault` to explore the workflow, or `LifeOS Blank Vault` to start with your own notes. Supported languages: `en`, `zh-cn`, `zh-tw`, `de`, `es`, `fr`, `pt`, `ja`, `ko`, `ar`.

Open the chosen folder as a vault in Obsidian. Install LifeOS 1.28.0 or newer (`periodic-para`) and Dataview from Community plugins and enable them. Read `INSTALL.md` and the localized starting guide. The free plugin works independently of Pro; initialization, quick capture, and weekly review do not require Dataview, while LifeOS query blocks do.

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
