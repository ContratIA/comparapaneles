export const SITE = 'https://www.comparapaneles.com';
export const DATE = '2026-10-30';
export const DATE_ES = '30 de octubre de 2026';
export const NAME = 'ComparaPaneles';

const NAV = [
  ['/calculadora-ahorro-placas-solares/', 'Calculadora'],
  ['/subvenciones-placas-solares/', 'Subvenciones'],
  ['/deduccion-irpf-placas-solares/', 'IRPF'],
  ['/guias/', 'Guías'],
  ['/sobre-nosotros/', 'Sobre nosotros'],
];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

export function page({ url, title, desc, h1, body, kind = 'plain', crumbs = [], faq = [], noindex = false }) {
  const canonical = SITE + url;
  const ld = [];
  if (kind === 'home') {
    ld.push({ '@context': 'https://schema.org', '@type': 'WebSite', name: NAME, url: SITE + '/', inLanguage: 'es-ES' });
  }
  if (kind === 'article') {
    ld.push({
      '@context': 'https://schema.org', '@type': 'Article', headline: h1, description: desc, inLanguage: 'es-ES',
      datePublished: DATE, dateModified: DATE, mainEntityOfPage: canonical,
      author: { '@type': 'Organization', name: NAME, url: SITE + '/' },
      publisher: { '@type': 'Organization', name: NAME, url: SITE + '/' },
    });
  }
  if (crumbs.length) {
    ld.push({
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [['Inicio', '/'], ...crumbs, [h1, url]].map(([n, u], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: SITE + u })),
    });
  }
  if (faq.length) {
    ld.push({
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') } })),
    });
  }
  const crumbHtml = crumbs.length
    ? `<nav class="crumbs" aria-label="Migas de pan"><a href="/">Inicio</a> › ${crumbs.map(([n, u]) => `<a href="${u}">${esc(n)}</a> › `).join('')}<span>${esc(h1)}</span></nav>`
    : '';
  const inner = kind === 'home'
    ? body
    : `<main id="contenido"><div class="col">${crumbHtml}<article><h1>${h1}</h1>${kind === 'article' ? `<p class="meta">Actualizado el ${DATE_ES} · Contenido informativo</p>` : ''}${body}</article></div></main>`;

  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow, max-snippet:-1, max-image-preview:large'}">
<meta name="theme-color" content="#f59e0b">
<meta property="og:type" content="${kind === 'article' ? 'article' : 'website'}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${canonical}">
<meta property="og:locale" content="es_ES">
<meta property="og:site_name" content="${NAME}">
<meta name="twitter:card" content="summary">
<link rel="stylesheet" href="/assets/style.css?v=20261030">
${ld.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n')}
<script>window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments)};</script>
<script defer src="/_vercel/insights/script.js"></script>
</head>
<body>
<a class="skip" href="#contenido">Saltar al contenido</a>
<header class="top"><div class="bar">
<a class="logo" href="/" aria-label="${NAME}, inicio">Compara<b>Paneles</b></a>
<nav class="main" aria-label="Principal">${NAV.map(([u, n]) => `<a href="${u}"${u === url ? ' aria-current="page"' : ''}>${n}</a>`).join('')}</nav>
</div></header>
${inner}
<footer class="foot"><div class="wrap">
<div class="fgrid">
<div><h4>${NAME}</h4><p>Sitio informativo independiente sobre autoconsumo solar en España. No vendemos ni instalamos placas solares y no recomendamos instaladores concretos.</p></div>
<div><h4>Contenido</h4><ul>
<li><a href="/calculadora-ahorro-placas-solares/">Calculadora de ahorro</a></li>
<li><a href="/subvenciones-placas-solares/">Subvenciones y ayudas</a></li>
<li><a href="/deduccion-irpf-placas-solares/">Deducción en el IRPF</a></li>
<li><a href="/guias/">Todas las guías</a></li></ul></div>
<div><h4>Legal</h4><ul>
<li><a href="/aviso-legal/">Aviso legal</a></li>
<li><a href="/politica-de-privacidad/">Política de privacidad</a></li>
<li><a href="/politica-de-cookies/">Política de cookies</a></li>
<li><a href="/contacto/">Contacto</a></li>
<li><a href="/sobre-nosotros/">Sobre nosotros</a></li></ul></div>
</div>
<p class="fine">© 2026 ${NAME}. La información es orientativa y no sustituye el asesoramiento fiscal, jurídico o técnico profesional. Última revisión de datos: ${DATE_ES}.</p>
</div></footer>
</body>
</html>`;
}

export const CALC_JS = `
(function(){
var $=function(i){return document.getElementById(i)};
var n=function(i){var v=parseFloat($(i).value);return isFinite(v)&&v>0?v:0};
var f=function(x){return Math.round(x).toLocaleString('es-ES')};
var f1=function(x){return x.toLocaleString('es-ES',{maximumFractionDigits:1})};
function run(){
  var cons=n('cons'),price=n('price'),kwp=n('kwp'),yld=n('yld'),share=n('share')/100,comp=n('comp'),cost=n('cost'),sub=n('sub');
  var irpf=$('irpf').checked,deg=0.005;
  $('shareV').textContent=Math.round(share*100)+' %';
  var prod=kwp*yld;
  var selfc=Math.min(prod*share,cons);
  var surplus=Math.max(prod-selfc,0);
  var save1=selfc*price+surplus*comp;
  var net=Math.max(cost-sub,0);
  var ded=irpf?0.4*Math.min(net,7500):0;
  var invest=Math.max(net-ded,0);
  var acc=0,pay=null,t;
  for(t=0;t<40;t++){acc+=save1*Math.pow(1-deg,t);if(pay===null&&acc>=invest&&save1>0){pay=t+1;}}
  var acc25=0;for(t=0;t<25;t++){acc25+=save1*Math.pow(1-deg,t);}
  $('oProd').textContent=f(prod)+' kWh';
  $('oSelf').textContent=f(selfc)+' kWh'+(cons>0?' ('+Math.round(selfc/cons*100)+' % de tu consumo)':'');
  $('oSur').textContent=f(surplus)+' kWh';
  $('oSave').textContent=f(save1)+' €';
  $('oNet').textContent=f(net)+' €';
  $('oDed').textContent=irpf?f(ded)+' €':'No incluida';
  $('oPay').textContent=pay===null?'Más de 40 años':'Unos '+pay+' años';
  $('oGain').textContent=f(acc25-invest)+' €';
  $('oGain').style.color=(acc25-invest)<0?'#b91c1c':'';
}
['cons','price','kwp','yld','share','comp','cost','sub','irpf'].forEach(function(i){$(i).addEventListener('input',run);$(i).addEventListener('change',run);});
run();
})();
`;
