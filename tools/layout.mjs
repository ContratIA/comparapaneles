export const SITE = 'https://www.comparapaneles.com';
export const DATE = '2026-10-30';
export const DATE_ES = '30 de octubre de 2026';
export const NAME = 'ComparaPaneles';
// AdSense: queda apagado hasta que exista ADSENSE_CLIENT (ca-pub-XXXXXXXXXXXXXXXX), el ID real que da Google al aprobar la cuenta.
export const ADSENSE = /^ca-pub-\d{10,20}$/.test(process.env.ADSENSE_CLIENT || '') ? process.env.ADSENSE_CLIENT : '';
const adSlot = (pos) => (ADSENSE ? `<aside class="ad-slot" data-pos="${pos}" aria-label="Publicidad"><span class="ad-label">Publicidad</span><ins class="adsbygoogle" style="display:block" data-ad-client="${ADSENSE}" data-ad-format="auto" data-full-width-responsive="true"></ins></aside>` : '');
export const assets = {}; // la rellena build.mjs con los nombres con hash

const NAV = [
  ['/calculadora-ahorro-placas-solares/', 'Calculadora'],
  ['/subvenciones-placas-solares/', 'Ayudas'],
  ['/deduccion-irpf-placas-solares/', 'IRPF'],
  ['/blog/', 'Blog'],
  ['/noticias/', 'Noticias'],
];

export const dateEs = (iso) => new Date(iso + 'T12:00:00Z').toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const plain = (s) => s.replace(/<[^>]+>/g, '');

// Fotos: las mismas de siempre, servidas desde /assets/img/ en WebP
const IMG = { 9875449: [2000, 1500], 2800832: [2000, 1123], 9875441: [2000, 1500], 356036: [2000, 1315], 259588: [2000, 1332] };
export const IMG_WIDTHS = { 9875449: [640, 1280, 1920], 2800832: [640, 1000], 9875441: [640, 1000], 356036: [640, 1000], 259588: [640, 1000] };
export function img(id, alt, { sizes = '100vw', cls = '', eager = false } = {}) {
  const ws = IMG_WIDTHS[id], [w, h] = IMG[id], big = ws[ws.length - 1];
  const srcset = ws.map((x) => `/assets/img/${id}-${x}.webp ${x}w`).join(', ');
  return `<img${cls ? ` class="${cls}"` : ''} src="/assets/img/${id}-${big}.webp" srcset="${srcset}" sizes="${sizes}" width="${big}" height="${Math.round(big * h / w)}" alt="${esc(alt)}"${eager ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"'}>`;
}

export function page({ url, title, desc, h1, body = '', after = '', kind = 'plain', crumbs = [], faq = [], noindex = false, wide = false, lede = '', home = '', scripts = [], preloadImg = '', date = DATE, updated = DATE, words = 0, image = '', noMeta = false }) {
  const canonical = SITE + url;
  const ld = [];
  if (kind === 'home') ld.push({ '@context': 'https://schema.org', '@type': 'WebSite', name: NAME, url: SITE + '/', inLanguage: 'es-ES' });
  if (kind === 'article' && !noMeta) {
    ld.push({
      '@context': 'https://schema.org', '@type': 'Article', headline: plain(h1), description: desc, inLanguage: 'es-ES',
      ...(image ? { image: [SITE + image] } : {}), ...(words ? { wordCount: words } : {}),
      datePublished: date, dateModified: updated, mainEntityOfPage: canonical,
      author: { '@type': 'Organization', name: NAME, url: SITE + '/' },
      publisher: { '@type': 'Organization', name: NAME, url: SITE + '/' },
    });
  }
  if (url === '/calculadora-ahorro-placas-solares/') {
    ld.push({ '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Calculadora de ahorro con placas solares', url: canonical, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any', browserRequirements: 'Requiere JavaScript', inLanguage: 'es-ES', isAccessibleForFree: true, offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, publisher: { '@type': 'Organization', name: NAME, url: SITE + '/' } });
  }
  const hasCrumbs = kind === 'article';
  if (hasCrumbs) {
    ld.push({
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [['Inicio', '/'], ...crumbs, [plain(h1), url]].map(([n, u], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: SITE + u })),
    });
  }
  if (faq.length) {
    ld.push({
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: plain(a) } })),
    });
  }
  const crumbHtml = hasCrumbs
    ? `<nav class="crumbs" aria-label="Migas de pan"><a href="/">Inicio</a> › ${crumbs.map(([n, u]) => `<a href="${u}">${esc(n)}</a> › `).join('')}<span>${plain(h1)}</span></nav>`
    : '';
  const inner = kind === 'home'
    ? home
    : `<main id="contenido"><header class="phead${wide ? ' wide' : ''}"><div class="wrap">${crumbHtml}<h1>${h1}</h1>${lede ? `<p class="lede">${lede}</p>` : ''}${kind === 'article' && !noMeta ? `<p class="meta">Publicado el ${dateEs(date)} · Revisado el ${dateEs(updated)}</p>` : ''}</div></header>${wide ? body : `<div class="pbody">${kind === 'article' || /subvenciones|deduccion|calculadora/.test(url) ? adSlot('top') : ''}<article class="prose">${body}</article>${after}</div>`}</main>`;
  const js = [`/assets/${assets.app}`, ...scripts.map((s) => `/assets/${assets[s]}`)];

  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
${kind === 'home' ? '<meta name="google-site-verification" content="zCbWy1iTLMJcu8lPUn6as-yO5nCLy4ZaQPWZZvR7TEU">\n' : ''}<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow, max-snippet:-1, max-image-preview:large'}">
<meta name="theme-color" content="#0f172a">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:type" content="${kind === 'article' ? 'article' : 'website'}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${canonical}">
<meta property="og:locale" content="es_ES">
<meta property="og:site_name" content="${NAME}">
<meta property="og:image" content="${SITE}/assets/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="ComparaPaneles: calculadora, ayudas y guías sobre placas solares en España">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${SITE}/assets/og.png">
<link rel="preload" href="/assets/fonts/dm-sans-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/playfair-display-latin.woff2" as="font" type="font/woff2" crossorigin>
${preloadImg}<link rel="stylesheet" href="/assets/${assets.css}">
${ld.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n')}
<script>document.documentElement.className+=' js';window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments)};</script>
<script defer src="/_vercel/insights/script.js"></script>
${ADSENSE && !noindex ? `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE}" crossorigin="anonymous"></script>` : ''}
</head>
<body>
<a class="skip" href="#contenido">Saltar al contenido</a>
<header class="top"><div class="bar">
<a class="logo" href="/" aria-label="${NAME}, inicio"><span class="logo-icon" aria-hidden="true">☀️</span><span class="logo-text">Compara<span>Paneles</span></span></a>
<nav aria-label="Principal"><ul class="nav-links">${NAV.map(([u, n]) => `<li><a href="${u}"${u === url ? ' aria-current="page"' : ''}>${n}</a></li>`).join('')}<li><a class="nav-cta" href="/calculadora-ahorro-placas-solares/#calculadora">Calcular ahorro</a></li></ul></nav>
<button class="ham" id="ham" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="mob-menu"><span></span><span></span><span></span></button>
</div></header>
<div class="mob-menu" id="mob-menu">${NAV.map(([u, n]) => `<a href="${u}"${u === url ? ' aria-current="page"' : ''}>${n}</a>`).join('')}<a class="btn" href="/calculadora-ahorro-placas-solares/#calculadora">Calcular ahorro</a></div>
${inner}
<footer><div class="wrap">
<div class="ftg">
<div><a class="logo" href="/" aria-label="${NAME}, inicio"><span class="logo-icon" aria-hidden="true">☀️</span><span class="logo-text">Compara<span>Paneles</span></span></a><p>Sitio informativo e independiente sobre autoconsumo solar en España. No vendemos ni instalamos placas solares y no recomendamos instaladores concretos.</p></div>
<div class="fc"><p class="fh">Contenido</p><ul>
<li><a href="/calculadora-ahorro-placas-solares/">Calculadora de ahorro</a></li>
<li><a href="/subvenciones-placas-solares/">Subvenciones y ayudas</a></li>
<li><a href="/deduccion-irpf-placas-solares/">Deducción en el IRPF</a></li>
<li><a href="/blog/">Blog</a></li>
<li><a href="/noticias/">Noticias</a></li></ul></div>
<div class="fc"><p class="fh">Sobre el sitio</p><ul>
<li><a href="/sobre-nosotros/">Sobre nosotros</a></li>
<li><a href="/contacto/">Contacto</a></li>
<li><a href="/creditos-fotos/">Créditos de fotos</a></li></ul></div>
<div class="fc"><p class="fh">Legal</p><ul>
<li><a href="/aviso-legal/">Aviso legal</a></li>
<li><a href="/politica-de-privacidad/">Política de privacidad</a></li>
<li><a href="/politica-de-cookies/">Política de cookies</a></li></ul></div>
</div>
<p class="fbot">© 2026 ${NAME}. La información es orientativa y no sustituye el asesoramiento fiscal, jurídico o técnico profesional. Última revisión de datos: ${DATE_ES}.</p>
</div></footer>
${js.map((s) => `<script src="${s}" defer></script>`).join('\n')}
${ADSENSE && !noindex ? '<script>document.querySelectorAll(".adsbygoogle").forEach(function(){(window.adsbygoogle=window.adsbygoogle||[]).push({})})</script>' : ''}
</body>
</html>`;
}
