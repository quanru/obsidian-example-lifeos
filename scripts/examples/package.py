"""Package only validated, generated OSS starter vaults (never the developer vault)."""
from pathlib import Path
import json
import subprocess
import zipfile

root = Path(__file__).resolve().parents[2]
subprocess.run(['node', str(root / 'scripts/examples/generate.mjs'), '--check'], check=True)
manifest = json.loads((root / 'examples/manifest.json').read_text())
output = root / 'dist'
output.mkdir(exist_ok=True)
for locale, entry in manifest['languages'].items():
    archive = output / (entry['archiveName'] + '.zip')
    with zipfile.ZipFile(archive, 'w', zipfile.ZIP_DEFLATED) as bundle:
        for kind in ['example', 'blank', 'themeExample', 'themeBlank']:
            source = root / entry[kind]
            for file in sorted(source.rglob('*')):
                if file.is_file():
                    bundle.write(file, Path(entry['archiveName']) / source.name / file.relative_to(source))
    print(f'{locale}: {archive.name}')
