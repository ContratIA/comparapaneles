import { mkdirSync, writeFileSync, readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { page, SITE, DATE } from './layout.mjs';
import { pages, notFound } from './content.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = (rel, data) => {
  const p = join(ROOT, rel);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, data);
};

// 1) Páginas
for (const p of pages) {
  const rel = p.url === '/' ? 'index.html' : p.url.replace(/^\//, '') + 'index.html';
  out(rel, page(p));
}
out('404.html', page({ ...notFound, kind: 'plain', noindex: true }));

// 2) sitemap, robots, vercel.json
const urls = pages.map((p) => p.url);
out('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE}${u}</loc><lastmod>${DATE}</lastmod></url>`).join('\n')}
</urlset>
`);
out('robots.txt', `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`);
out('vercel.json', JSON.stringify({
  trailingSlash: true,
  headers: [
    { source: '/(.*)', headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    ] },
    { source: '/assets/(.*)', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
  ],
}, null, 2) + '\n');

// 3) Validación de enlaces internos
const known = new Set(urls);
const walk = (d) => readdirSync(d).flatMap((n) => {
  if (['.git', 'tools', 'node_modules'].includes(n)) return [];
  const f = join(d, n);
  return statSync(f).isDirectory() ? walk(f) : [f];
});
const htmls = walk(ROOT).filter((f) => f.endsWith('.html'));
let bad = 0;
for (const f of htmls) {
  const html = readFileSync(f, 'utf8');
  for (const m of html.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[#?][^"]*)?"/g)) {
    const u = m[1];
    if (u.startsWith('/_vercel/')) continue;
    if (known.has(u)) continue;
    if (existsSync(join(ROOT, u.replace(/^\//, ''))) && statSync(join(ROOT, u.replace(/^\//, ''))).isFile()) continue;
    console.error(`ENLACE ROTO en ${f.replace(ROOT, '')}: ${u}`);
    bad++;
  }
  for (const m of html.matchAll(/href="#([^"]+)"/g)) {
    if (!html.includes(`id="${m[1]}"`)) { console.error(`ANCLA ROTA en ${f.replace(ROOT, '')}: #${m[1]}`); bad++; }
  }
}
const pend = htmls.filter((f) => readFileSync(f, 'utf8').includes('PENDIENTE'));
console.log(`Páginas generadas: ${pages.length + 1} | HTML revisados: ${htmls.length} | problemas: ${bad}`);
console.log('Páginas con datos legales PENDIENTES:', pend.map((f) => f.replace(ROOT, '')).join(', ') || 'ninguna');
process.exit(bad ? 1 : 0);
