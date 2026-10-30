import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { parseFront, mdToHtml, wordCount } from './md.mjs';
import { articlePhotos, homePhotos } from './photos.mjs';
import { dateEs, esc } from './layout.mjs';

const DIR = join(dirname(fileURLToPath(import.meta.url)), 'content/blog');

// Orden de aparición y categoría de cada artículo
const ORDER = [
  ['si-compensa-instalar-placas-2026', 'Decidir'],
  ['deduccion-irpf-placas-solares-2026', 'Ayudas e impuestos'],
  ['cuanto-produce-1-kwp-espana', 'Datos solares'],
  ['leer-factura-luz-dimensionar-instalacion', 'Decidir'],
  ['baterias-solares-cuando-compensan', 'Decidir'],
  ['errores-al-comparar-presupuestos-placas-solares', 'Decidir'],
  ['autoconsumo-con-excedentes-compensacion-simplificada', 'Normativa'],
  ['tramites-instalar-placas-solares', 'Normativa'],
  ['bonificacion-ibi-icio-placas-solares', 'Ayudas e impuestos'],
  ['autoconsumo-colectivo-rdl-7-2026', 'Normativa'],
  ['produccion-solar-mes-a-mes-madrid-barcelona', 'Datos solares'],
];

export const articles = ORDER.map(([slug, cat]) => {
  const { meta, body } = parseFront(readFileSync(join(DIR, slug + '.md'), 'utf8'));
  const { html, toc } = mdToHtml(body);
  return { slug, cat, meta, html, toc, words: wordCount(html), photo: articlePhotos[slug], url: `/blog/${slug}/` };
});
const bySlug = Object.fromEntries(articles.map((a) => [a.slug, a]));

export const card = (a) => `<a class="gc" href="${a.url}"><div class="gc-b"><div class="gc-k">${a.cat}</div><h3>${esc(a.meta.title)}</h3><p>${esc(a.meta.description)}</p><span class="go">Leer artículo →</span></div></a>`;

function figure(a) {
  const p = a.photo;
  const cap = p.cap || 'Imagen ilustrativa.';
  return `<figure class="photo"><img src="/assets/img/blog/${a.slug}-1200.webp" srcset="/assets/img/blog/${a.slug}-640.webp 640w, /assets/img/blog/${a.slug}-1200.webp 1200w" sizes="(max-width:800px) 100vw, 760px" width="1200" height="800" alt="${esc(p.alt)}" fetchpriority="high"><figcaption>${esc(cap)} Foto: <a href="${p.page}" rel="noopener">${esc(p.author)}</a>, vía Pexels. Recortada y redimensionada. <a href="/creditos-fotos/">Créditos</a>.</figcaption></figure>`;
}

export function articlePage(a) {
  const related = (a.meta.related || '').split(',').map((s) => bySlug[s.trim()]).filter(Boolean);
  const toc = `<nav class="toc" aria-label="Contenido"><strong>En este artículo</strong><ol>${a.toc.map(([id, t]) => `<li><a href="#${id}">${esc(t)}</a></li>`).join('')}</ol></nav>`;
  const rel = related.length
    ? `<aside class="related"><h2 id="sigue-leyendo">Sigue leyendo</h2><ul>${related.map((r) => `<li><a href="${r.url}">${esc(r.meta.title)}</a></li>`).join('')}</ul><p><a href="/calculadora-ahorro-placas-solares/">Calculadora de ahorro</a> · <a href="/deduccion-irpf-placas-solares/">Deducción del IRPF</a> · <a href="/blog/">Todos los artículos</a></p></aside>`
    : '';
  return {
    url: a.url, kind: 'article', crumbs: [['Blog', '/blog/']],
    title: `${a.meta.title} | ComparaPaneles`, desc: a.meta.description, h1: esc(a.meta.title),
    date: a.meta.date, updated: a.meta.updated, words: a.words,
    image: `/assets/img/blog/${a.slug}-1200.webp`,
    body: figure(a) + toc + a.html + rel,
  };
}

export const blogIndex = () => ({
  url: '/blog/', kind: 'article', wide: true,
  title: 'Blog sobre placas solares y autoconsumo en España | ComparaPaneles',
  desc: 'Artículos con datos oficiales sobre autoconsumo solar: si compensa instalar placas, deducción del IRPF, bonificaciones de IBI e ICIO, baterías, trámites y producción por ciudades.',
  h1: 'Blog: placas solares y autoconsumo',
  lede: 'Artículos con fuentes oficiales enlazadas al final de cada uno. Lo que no se puede comprobar, no se escribe.',
  noMeta: true,
  body: `<div class="pbody"><div class="guide-grid">${articles.map(card).join('')}</div><p class="more-l"><a href="/noticias/">Ver las noticias</a></p></div>`,
});

// Noticias: solo fuentes oficiales, con fecha, enlace al original y resumen con palabras propias
export const noticias = [
  {
    date: '2026-10-13', fuente: 'La Moncloa, referencia del Consejo de Ministros', url: 'https://www.lamoncloa.gob.es/consejodeministros/referencias/paginas/2026/20261013-referencia-rueda-de-prensa-ministros.aspx',
    title: 'El Gobierno acelera dos reales decretos sobre autoconsumo y comunidades energéticas',
    text: 'El Consejo de Ministros del 13 de octubre de 2026 autorizó tramitar por vía de urgencia dos proyectos de real decreto del Ministerio para la Transición Ecológica: uno que desarrolla las comunidades de energías renovables y las comunidades ciudadanas de energía, y otro que modifica aspectos del autoconsumo eléctrico e impulsa el almacenamiento distribuido. Son proyectos: el texto definitivo no se conoce y las reglas actuales siguen vigentes hasta que se publiquen.',
  },
  {
    date: '2026-03-28', fuente: 'BOE, resolución del Congreso de los Diputados (BOE-A-2026-7125)', url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2026-7125',
    title: 'El Congreso convalida el Real Decreto-ley 7/2026',
    text: 'El BOE publica el 28 de marzo de 2026 el acuerdo de convalidación del Real Decreto-ley 7/2026, de 20 de marzo. Con ello se mantiene la deducción en el IRPF por instalar autoconsumo en 2026 y el cambio en las reglas de distancia del autoconsumo colectivo.',
  },
  {
    date: '2026-03-21', fuente: 'BOE, Real Decreto-ley 7/2026 (BOE-A-2026-6544)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2026-6544',
    title: 'Se publica el Real Decreto-ley 7/2026: nueva deducción por autoconsumo y distancia de 5 km',
    text: 'El 21 de marzo de 2026 el BOE publica el Real Decreto-ley 7/2026. Entre otras medidas, crea una deducción en el IRPF del 10 % o el 20 % por instalar autoconsumo renovable en 2026, con base máxima de 5.000 euros, y amplía a 5 kilómetros la distancia máxima entre generación y consumo en el autoconsumo colectivo. La Agencia Tributaria publicó el resumen de sus novedades tributarias.',
  },
];

export const noticiasPage = () => ({
  url: '/noticias/', kind: 'plain',
  title: 'Noticias sobre autoconsumo solar en España | ComparaPaneles',
  desc: 'Novedades oficiales sobre autoconsumo y placas solares en España, con fecha, resumen y enlace a la fuente original (BOE, La Moncloa, Agencia Tributaria).',
  h1: 'Noticias sobre autoconsumo solar',
  body: `<p class="lead">Solo publicamos novedades con fuente oficial. Cada una lleva su fecha, un resumen con palabras propias y el enlace al documento original.</p>
${noticias.map((n) => `<article class="news"><p class="news-d"><time datetime="${n.date}">${dateEs(n.date)}</time></p><h2>${esc(n.title)}</h2><p>${esc(n.text)}</p><p class="src">Fuente: <a href="${n.url}" rel="noopener">${esc(n.fuente)}</a></p></article>`).join('')}
<p class="src">Esta sección se actualiza cuando hay novedades verificables. Si ves una que falte, escríbenos desde la <a href="/contacto/">página de contacto</a> con el enlace oficial.</p>`,
});

export const creditosPage = () => ({
  url: '/creditos-fotos/', kind: 'plain',
  title: 'Créditos de las fotografías | ComparaPaneles',
  desc: 'Autor y enlace de origen de cada fotografía de ComparaPaneles. Todas son fotos reales de Pexels, usadas con la licencia de Pexels.',
  h1: 'Créditos de las fotografías',
  body: `<p class="lead">Todas las fotografías de este sitio son reales y proceden de <a href="https://www.pexels.com/" rel="noopener">Pexels</a>. No hay imágenes generadas con inteligencia artificial ni ilustraciones. Se usan con la <a href="https://www.pexels.com/license/" rel="noopener">licencia de Pexels</a>, que permite el uso libre. Las hemos recortado y redimensionado para la web.</p>
<p>Son imágenes ilustrativas: no muestran instalaciones ni clientes de ComparaPaneles.</p>
<h2>Artículos del blog</h2>
<div class="tablewrap"><table><thead><tr><th>Artículo</th><th>Autor</th><th>Foto original</th></tr></thead><tbody>
${articles.map((a) => `<tr><td><a href="${a.url}">${esc(a.meta.title)}</a></td><td>${esc(a.photo.author)}</td><td><a href="${a.photo.page}" rel="noopener">Pexels, n.º ${a.photo.id}</a></td></tr>`).join('')}
</tbody></table></div>
<h2>Portada</h2>
<div class="tablewrap"><table><thead><tr><th>Uso</th><th>Autor</th><th>Foto original</th></tr></thead><tbody>
${homePhotos.map((p) => `<tr><td>${esc(p.use)}</td><td>${esc(p.author)}</td><td><a href="${p.page}" rel="noopener">Pexels, n.º ${p.id}</a></td></tr>`).join('')}
</tbody></table></div>`,
});
