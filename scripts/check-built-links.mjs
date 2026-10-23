import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve('apps/web/dist');
const files = fs.readdirSync(root, { recursive: true }).filter((f) => f.endsWith('.html'));
const broken = new Set();
let checked = 0;
for (const file of files) {
  const html = fs
    .readFileSync(path.join(root, file), 'utf8')
    .replace(/<link[^>]*rel="canonical"[^>]*>/g, '');
  const base = new URL(
    file.replaceAll('\\', '/').replace(/index\.html$/, ''),
    'https://open-coworking-stack.vercel.app/',
  );
  for (const match of html.matchAll(/\b(?:href|src)="([^"<>]+)"/g)) {
    const value = match[1].replaceAll('&amp;', '&');
    if (!value || /^(?:data:|mailto:|tel:|javascript:)/.test(value)) continue;
    const url = new URL(value, base);
    if (url.origin !== base.origin || url.pathname.startsWith('/pagefind/')) continue;
    const target = path.join(root, decodeURIComponent(url.pathname));
    checked++;
    if (!fs.existsSync(target) && !fs.existsSync(path.join(target, 'index.html')))
      broken.add(`${file}: ${value}`);
  }
}
console.log(
  JSON.stringify(
    { pages: files.length, internalLinksAndAssets: checked, broken: [...broken] },
    null,
    2,
  ),
);
process.exitCode = broken.size ? 1 : 0;
