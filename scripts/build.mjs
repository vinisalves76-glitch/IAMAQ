import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const parts = Array.from({ length: 12 }, (_, i) =>
  fs.readFileSync(path.join(root, 'source', `index.html.gz.b64.${String(i + 1).padStart(2, '0')}`), 'utf8').trim()
);
const html = zlib.gunzipSync(Buffer.from(parts.join(''), 'base64')).toString('utf8');
const out = path.join(root, 'dist');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, 'index.html'), html);
for (const name of ['manifest.webmanifest', 'icon.svg', 'sw.js']) {
  fs.copyFileSync(path.join(root, name), path.join(out, name));
}
console.log(`Build concluído: dist/index.html (${Buffer.byteLength(html)} bytes)`);
