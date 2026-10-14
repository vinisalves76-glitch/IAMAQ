import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
const root = process.cwd();
const parts = Array.from({ length: 12 }, (_, i) =>
  fs.readFileSync(path.join(root, 'source', `index.html.gz.b64.${String(i + 1).padStart(2, '0')}`), 'utf8').trim()
);
fs.writeFileSync(path.join(root, 'index.html'), zlib.gunzipSync(Buffer.from(parts.join(''), 'base64')));
console.log('Fonte reconstruída em index.html para edição local.');
