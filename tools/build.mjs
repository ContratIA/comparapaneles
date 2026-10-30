// Genera todas las páginas estáticas. Uso: node tools/build.mjs
import { mkdirSync, writeFileSync, readFileSync, existsSync, readdirSync, statSync, unlinkSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { page, SITE, DATE, assets } from './layout.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = (rel, data) => {
  const p = join(ROOT, rel);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, data);
};

// 0) Recursos con hash en el nombre (caché inmutable)
for (const f of readdirSync(join(ROOT, 'assets'))) if (/^(style|app|calc)\.[0-9a-f]{8}\.(css|js)$/.test(f)) unlinkSync(join(ROOT, 'assets', f));
for (const [key, file] of [['css', 'style.css'], ['app', 'app.js'], ['calc', 'calc.js']]) {
  const src = readFileSync(join(ROOT, 'tools/src', file));
  const [name, ext] = file.split('.');
  const hash = createHash('sha1').update(src).digest('hex').slice(0, 8);
  assets[key] = `${name}.${hash}.${ext}`;
  out(`assets/${assets[key]}`, src);
}

const { pages, notFound } = await import('./pages.mjs');
const { home, homeFaq, calcSection, calcExplain } = await import('./home.mjs');
const { articles, articlePage, blogIndex, noticiasPage, creditosPage } = await import('./blog.mjs');

// 1) Portada y calculadora
const heroPreload = '<link rel="preload" as="image" href="/assets/img/9875449-1280.webp" imagesrcset="/assets/img/9875449-640.webp 640w, /assets/img/9875449-1280.webp 1280w, /assets/img/9875449-1920.webp 1920w" imagesizes="100vw" fetchpriority="high">\n';
const all = [
  {
    url: '/', kind: 'home', h1: 'Calcula cuánto ahorrarías con placas solares', faq: homeFaq, home: home(), scripts: ['calc'], preloadImg: heroPreload,
    title: 'Placas solares en España: calculadora, ayudas y guías | ComparaPaneles',
    desc: 'Calcula cuánto ahorrarías con placas solares, revisa la deducción del IRPF según la Agencia Tributaria y aprende a comparar presupuestos. Con las cuentas a la vista.',
  },
  {
    url: '/calculadora-ahorro-placas-solares/', kind: 'article', wide: true, scripts: ['calc'],
    title: 'Calculadora de ahorro con placas solares: fórmulas visibles | ComparaPaneles',
    desc: 'Calcula producción, ahorro anual y amortización de una instalación solar con tus datos. Todos los supuestos son editables y las fórmulas están explicadas.',
    h1: 'Calculadora de ahorro con placas solares', noMeta: true,
    lede: 'Introduce tus datos. Los valores iniciales son ejemplos: cámbialos por los de tu factura y tu presupuesto.',
    body: calcSection() + calcExplain,
  },
  ...pages,
  blogIndex(),
  ...articles.map(articlePage),
  noticiasPage(),
  creditosPage(),
];
for (const p of all) out(p.url === '/' ? 'index.html' : p.url.replace(/^\//, '') + 'index.html', page(p));
out('404.html', page({ ...notFound, kind: 'plain', noindex: true }));

// 2) sitemap, robots, vercel.json
const urls = all.map((p) => p.url);
out('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all.map((p) => `  <url><loc>${SITE}${p.url}</loc><lastmod>${p.updated || DATE}</lastmod></url>`).join('\n')}
</urlset>
`);
out('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
out('vercel.json', JSON.stringify({
  trailingSlash: true,
  headers: [
    { source: '/(.*)', headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    ] },
    { source: '/assets/(.*)', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
    { source: '/favicon.svg', headers: [{ key: 'Cache-Control', value: 'public, max-age=86400' }] },
  ],
}, null, 2) + '\n');
out('.vercelignore', 'tools\n');

// 3) Validación: enlaces, anclas, un h1, title y description únicos
const known = new Set(urls);
const walk = (d) => readdirSync(d).flatMap((n) => {
  if (['.git', 'tools', 'node_modules', '.vercel'].includes(n)) return [];
  const f = join(d, n);
  return statSync(f).isDirectory() ? walk(f) : [f];
});
const htmls = walk(ROOT).filter((f) => f.endsWith('.html'));
let bad = 0;
const fail = (m) => { console.error(m); bad++; };
const titles = new Map(), descs = new Map();
for (const f of htmls) {
  const rel = f.replace(ROOT, '');
  const html = readFileSync(f, 'utf8');
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) fail(`H1 (${h1s}) en ${rel}`);
  const t = html.match(/<title>([^<]*)<\/title>/)?.[1], d = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (titles.has(t)) fail(`TITLE repetido: ${rel} y ${titles.get(t)}`); titles.set(t, rel);
  if (descs.has(d)) fail(`DESCRIPTION repetida: ${rel} y ${descs.get(d)}`); descs.set(d, rel);
  for (const m of html.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[#?][^"]*)?"/g)) {
    const u = m[1];
    if (u.startsWith('/_vercel/') || known.has(u)) continue;
    const p = join(ROOT, u.replace(/^\//, ''));
    if (existsSync(p) && statSync(p).isFile()) continue;
    fail(`ENLACE ROTO en ${rel}: ${u}`);
  }
  for (const m of html.matchAll(/(?:href|\bimagesrcset)="(\/[^"?#]*)#([^"]+)"/g)) {
    const target = m[1] === '/' ? join(ROOT, 'index.html') : join(ROOT, m[1].replace(/^\//, ''), 'index.html');
    if (existsSync(target) && !readFileSync(target, 'utf8').includes(`id="${m[2]}"`)) fail(`ANCLA ROTA en ${rel}: ${m[1]}#${m[2]}`);
  }
  for (const m of html.matchAll(/href="#([^"]+)"/g)) if (!html.includes(`id="${m[1]}"`)) fail(`ANCLA ROTA en ${rel}: #${m[1]}`);
  for (const m of html.matchAll(/ srcset="([^"]+)"/g)) for (const s of m[1].split(',')) {
    const u = s.trim().split(' ')[0];
    if (!existsSync(join(ROOT, u.replace(/^\//, '')))) fail(`IMAGEN falta en ${rel}: ${u}`);
  }
}
for (const a of articles) { console.log(String(a.words).padStart(5), a.slug); if (a.words < 900 || a.words > 1500) fail(`PALABRAS fuera de 900-1500: ${a.slug} (${a.words})`); if (a.meta.description.length > 175) fail(`DESCRIPTION larga: ${a.slug} (${a.meta.description.length})`); }
const pend = htmls.filter((f) => readFileSync(f, 'utf8').includes('PENDIENTE')).map((f) => f.replace(ROOT, ''));
console.log(`Páginas: ${all.length + 1} | HTML revisados: ${htmls.length} | problemas: ${bad}`);
console.log('Datos legales PENDIENTES en:', pend.join(', ') || 'ninguna');
process.exit(bad ? 1 : 0);
