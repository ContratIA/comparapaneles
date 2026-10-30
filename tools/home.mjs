import { img, DATE_ES, dateEs, esc } from './layout.mjs';
import { PVGIS } from './pages.mjs';
import { articles, card, noticias } from './blog.mjs';

const field = (id, label, extra, hint = '') =>
  `<div class="cf"><label for="${id}">${label}</label><input id="${id}" type="number" inputmode="decimal" min="0" ${extra}>${hint ? `<small>${hint}</small>` : ''}</div>`;

// Calculadora completa: la usan la portada y su página propia
export const calcSection = (heading = '') => `<section class="calc-s" id="calculadora">
<div class="wrap">
${heading ? `<div class="ct rev"><span class="stag dk">Herramienta</span>${heading}<p>Los valores iniciales son ejemplos, no datos de mercado. Cámbialos por los de tu factura y tu presupuesto.</p></div>` : ''}
<div class="cg">
<div class="cin">
<h3>Tus datos</h3><p class="hint">Todo se calcula en tu navegador. No enviamos nada.</p>
${field('cons', 'Consumo eléctrico anual (kWh)', 'step="100" value="3500"', 'Lo encuentras en tu factura o en el área de cliente de tu distribuidora.')}
${field('price', 'Precio medio del kWh que pagas (€/kWh)', 'step="0.01" value="0.15"', 'Divide el término de energía de tu factura entre los kWh consumidos.')}
${field('kwp', 'Potencia de la instalación (kWp)', 'step="0.1" value="3"')}
${field('yld', 'Producción anual por kWp (kWh)', 'step="50" value="1500"', `Depende de zona, orientación e inclinación. Calcúlalo para tu tejado con <a href="${PVGIS}" rel="noopener">PVGIS</a>, la herramienta de la Comisión Europea.`)}
<div class="cf"><label for="share"><span>Parte de la producción que consumes en casa</span><strong id="shareV">40 %</strong></label><input id="share" type="range" min="10" max="90" step="5" value="40"><small>Es un supuesto: depende de tus horarios y de si hay batería.</small></div>
${field('comp', 'Valor de los excedentes (€/kWh)', 'step="0.01" value="0.06"', 'Pon 0 si no vierte excedentes o no tienes compensación. Pregunta el precio a tu comercializadora.')}
${field('cost', 'Coste total de la instalación (€, IVA incluido)', 'step="100" value="5000"', 'Usa el importe de tu presupuesto real.')}
${field('sub', 'Subvenciones directas recibidas (€)', 'step="100" value="0"', 'Se restan de la base de la deducción.')}
<div class="cf"><label for="irpf">Deducción del IRPF que te corresponde</label><select id="irpf"><option value="0">Ninguna</option><option value="10">10 % por instalar autoconsumo en 2026</option><option value="20">20 % por instalar autoconsumo en 2026 (vivienda en edificio residencial)</option><option value="40">40 % por eficiencia energética (con certificados)</option></select><small>El 10 % y el 20 % tienen base máxima de 5.000 € y solo valen si la instalación se hace y se paga en 2026. El 40 % tiene base máxima de 7.500 € y exige certificados de antes y después. <a href="/deduccion-irpf-placas-solares/">Ver requisitos</a>.</small></div>
</div>
<div class="cres" aria-live="polite">
<h3>Resultado estimado</h3>
<div class="rh"><div class="rhl">Ahorro del primer año</div><div class="rhv" id="oSave">–</div><div class="rhs">producción consumida + excedentes valorados</div></div>
<div class="rr"><span>Producción anual</span><strong id="oProd">–</strong></div>
<div class="rr"><span>Autoconsumo</span><strong id="oSelf">–</strong></div>
<div class="rr"><span>Excedente vertido</span><strong id="oSur">–</strong></div>
<div class="rr"><span>Importe tras subvenciones</span><strong id="oNet">–</strong></div>
<div class="rr"><span>Deducción IRPF</span><strong id="oDed">–</strong></div>
<div class="rr"><span>Amortización aproximada</span><strong class="sol" id="oPay">–</strong></div>
<div class="rr"><span>Balance neto a 25 años</span><strong class="sol" id="oGain">–</strong></div>
<div class="gfw"><div class="gft">Balance acumulado a 25 años</div><div class="gf" id="oChart"></div></div>
<p class="cn">Resultado orientativo. Los paneles pierden un 0,5 % de producción al año (supuesto fijo). No incluye mantenimiento, cambio de inversor, financiación ni variaciones del precio de la luz.</p>
</div>
</div>
${heading ? '<p class="cnote">Cada paso del cálculo está explicado en <a href="/calculadora-ahorro-placas-solares/#como-se-calcula">cómo se calcula</a>.</p>' : ''}
</div>
</section>`;

export const calcExplain = `<div class="pbody"><div class="prose">
<h2 id="como-se-calcula">Cómo se calcula</h2>
<ol>
<li><strong>Producción anual</strong> = potencia (kWp) × producción por kWp.</li>
<li><strong>Autoconsumo</strong> = producción × porcentaje que consumes en casa, sin superar tu consumo anual.</li>
<li><strong>Excedente</strong> = producción − autoconsumo.</li>
<li><strong>Ahorro del primer año</strong> = autoconsumo × precio del kWh + excedente × valor de los excedentes.</li>
<li><strong>Deducción IRPF</strong> (solo si eliges una) = porcentaje × el menor entre (coste − subvenciones) y la base máxima: 5.000 € para el 10 % y el 20 %, 7.500 € para el 40 %.</li>
<li><strong>Amortización</strong>: años hasta que el ahorro acumulado cubre (coste − subvenciones − deducción). Cada año se produce un 0,5 % menos que el anterior. Es un supuesto habitual: comprueba la garantía de rendimiento del fabricante.</li>
<li><strong>Balance a 25 años</strong> = ahorro acumulado en 25 años − inversión neta.</li>
</ol>
<div class="box"><p>La calculadora resta la deducción del IRPF de golpe al principio. En la práctica llega con la declaración de la renta y solo cuenta la base de un ejercicio. El precio de la electricidad, tus hábitos y el estado del tejado cambian el resultado: úsala para comparar escenarios, no como promesa de ahorro. Antes de contratar, <a href="/blog/errores-al-comparar-presupuestos-placas-solares/">compara varios presupuestos</a>.</p></div>
</div></div>`;

const faq = [
  ['¿Cuánto puedo deducir en el IRPF por instalar placas solares en 2026?', 'La deducción nueva por instalar autoconsumo renovable es del 10 % de lo pagado, o del 20 % si eres propietario de una vivienda en un edificio de uso predominantemente residencial. La base máxima es de 5.000 euros, así que el tope es de 500 o 1.000 euros.'],
  ['¿Hasta cuándo hay que terminar la instalación para esa deducción?', 'La instalación debe realizarse y terminarse en 2026, y las cantidades tienen que pagarse entre el 1 de enero y el 31 de diciembre de 2026. No se admiten pagos en efectivo.'],
  ['¿Las placas solares dan derecho automático a la deducción por eficiencia energética?', 'No. Esa deducción exige acreditar con certificados de eficiencia energética de antes y después de la obra la mejora mínima que fija la normativa. Además, es incompatible con la nueva para la misma instalación.'],
  ['¿Cuántos presupuestos conviene pedir?', 'Tres suele ser un buen punto de partida. Permiten ver diferencias de potencia, materiales y condiciones, y descartar ofertas fuera de lo normal.'],
  ['¿Esta web vende placas o recomienda instaladores?', 'No. ComparaPaneles es un sitio informativo: no vendemos ni instalamos placas, no intermediamos presupuestos ni recomendamos empresas.'],
];
export const homeFaq = faq;

export const home = () => `<main id="contenido">
<section class="hero"><img class="hero-photo" src="/assets/img/9875449-1280.webp" srcset="/assets/img/9875449-640.webp 640w, /assets/img/9875449-1280.webp 1280w, /assets/img/9875449-1920.webp 1920w" sizes="100vw" width="1920" height="1440" alt="Operario con guante amarillo sujetando un panel solar fotovoltaico" fetchpriority="high"><div class="hero-ov"></div>
<div class="wrap hero-c"><div class="hero-in">
<span class="badge">Autoconsumo solar en España</span>
<h1>Calcula cuánto ahorrarías <span>con placas solares</span></h1>
<p class="hero-sub">Una calculadora con las cuentas a la vista, la deducción del IRPF explicada con fuentes de la Agencia Tributaria y guías para revisar un presupuesto antes de firmar.</p>
<div class="hform">
<h2>Estimación rápida</h2><p class="hint">Cambia los tres datos y mira el resultado.</p>
<div class="fg-grid">
<div class="fg"><label for="qCons">Consumo anual (kWh)</label><input id="qCons" type="number" inputmode="decimal" min="0" step="100" value="3500"></div>
<div class="fg"><label for="qPrice">Precio del kWh (€)</label><input id="qPrice" type="number" inputmode="decimal" min="0" step="0.01" value="0.15"></div>
<div class="fg full"><label for="qKwp">Potencia de la instalación (kWp)</label><input id="qKwp" type="number" inputmode="decimal" min="0" step="0.1" value="3"></div>
</div>
<div class="quick" aria-live="polite"><span>Ahorro del primer año</span><strong id="qSave">–</strong></div>
<a class="btn btn-block" href="#calculadora">Ajustar todos los supuestos</a>
<p class="form-n">Ejemplo con 1.500 kWh por kWp, 40 % de autoconsumo y excedentes a 0,06 €/kWh. Los datos no salen de tu navegador.</p>
</div></div></div></section>

<div class="strip">${img(9875449, 'Operario con guante amarillo sujetando un panel solar fotovoltaico', { sizes: '100vw' })}<div class="strip-ov"></div><span class="cap-on">Imagen ilustrativa</span>
<div class="strip-in"><div class="wrap"><div><div class="strip-k">Dato oficial</div><p class="strip-t">Instalar autoconsumo en 2026 permite deducir en el IRPF el 10 % o el 20 % de lo pagado.</p></div><div class="strip-b"><b>10 % o 20 %</b><span>base máxima 5.000 €</span></div></div></div></div>

<div class="tbar"><div class="wrap"><ul>
<li><span><strong>Gratis</strong> y sin registro</span></li>
<li><span><strong>Fuentes oficiales</strong> enlazadas</span></li>
<li><span><strong>Fórmulas</strong> y supuestos visibles</span></li>
<li><span><strong>Revisado</strong> el ${DATE_ES}</span></li>
</ul></div></div>

<div class="stats-b"><div class="wrap"><div class="sg">
<div class="si rev"><div class="sn">10 o 20 %</div><p class="sl">deducción en el IRPF por instalar autoconsumo en 2026</p></div>
<div class="si rev"><div class="sn">5.000 €</div><p class="sl">base máxima anual: tope de 500 o 1.000 € de deducción</p></div>
<div class="si rev"><div class="sn">31 dic 2026</div><p class="sl">fecha límite: instalación terminada y pagada</p></div>
<div class="si rev"><div class="sn">1.170 a 1.699</div><p class="sl">kWh al año que produce 1 kWp, de Bilbao a Málaga según PVGIS</p></div>
</div></div></div>

${calcSection('<h2>Calcula tu <span>ahorro</span> con tus propios datos</h2>')}

<section class="sub-s" id="ayudas"><div class="wrap">
<div class="shg rev">
<div class="shi">${img(2800832, 'Vista aérea de filas de paneles solares sobre césped', { sizes: '(max-width:960px) 100vw, 520px' })}<span class="cap-on">Imagen ilustrativa</span></div>
<div>
<span class="stag am">Ayudas</span>
<h2>Qué ayudas existen y cuáles puedes comprobar hoy</h2>
<div class="stot"><div class="stot-e">500 o 1.000 €</div><div class="stot-t">deducción máxima en el IRPF<br>por instalar autoconsumo en 2026</div></div>
<p>No hay una cifra global de ayudas que podamos prometerte. Existen tres capas distintas y cada una se pide en un sitio: la deducción en la renta, las bonificaciones de tu ayuntamiento y las convocatorias de tu comunidad autónoma.</p>
<p><a href="/subvenciones-placas-solares/">Leer la guía de subvenciones</a></p>
</div></div>
<div class="stw rev" data-tabs>
<h3 class="sub-h">Las tres capas, una por una</h3>
<div class="stabs" role="tablist" aria-label="Tipos de ayuda">
<button class="stab" role="tab" id="tab-irpf" aria-controls="p-irpf" aria-selected="true" type="button">Deducción IRPF</button>
<button class="stab" role="tab" id="tab-muni" aria-controls="p-muni" aria-selected="false" tabindex="-1" type="button">Bonificaciones municipales</button>
<button class="stab" role="tab" id="tab-auto" aria-controls="p-auto" aria-selected="false" tabindex="-1" type="button">Ayudas autonómicas</button>
</div>
<div class="sp" role="tabpanel" id="p-irpf" aria-labelledby="tab-irpf">
<p>Se aplica en la declaración de la renta y no se cobra por adelantado. Para una instalación hecha, terminada y pagada en 2026 hay una deducción específica. La de eficiencia energética es otra vía, con certificados, y las dos son incompatibles para la misma instalación.</p>
<div class="tablewrap"><table><thead><tr><th>Deducción</th><th>Porcentaje</th><th>Base máxima</th><th>Qué exige</th></tr></thead><tbody>
<tr><td>Instalar autoconsumo en un inmueble tuyo (2026)</td><td class="num">10 %</td><td class="num">5.000 €</td><td>Instalación y pago en 2026, pago bancario y Certificado de Instalaciones Eléctricas.</td></tr>
<tr><td>Instalar autoconsumo en una vivienda de un edificio residencial (2026)</td><td class="num">20 %</td><td class="num">5.000 €</td><td>Lo mismo.</td></tr>
<tr><td>Eficiencia energética: consumo de energía primaria no renovable</td><td class="num">40 %</td><td class="num">7.500 €</td><td>Certificados de antes y después que acrediten una mejora del 30 % o calificación A o B.</td></tr>
</tbody></table></div>
<p><a href="/deduccion-irpf-placas-solares/">Requisitos, plazos y fuentes</a></p>
</div>
<div class="sp" role="tabpanel" id="p-muni" aria-labelledby="tab-muni">
<p>Algunos ayuntamientos bonifican el Impuesto sobre Bienes Inmuebles (IBI) y el Impuesto sobre Construcciones, Instalaciones y Obras (ICIO) a quien instala placas. El porcentaje, la duración y los requisitos los fija cada ordenanza fiscal, así que cambian de un municipio a otro y algunos no ofrecen nada.</p>
<p>Lo más fiable es leer la ordenanza fiscal de tu ayuntamiento o preguntar en su oficina de atención.</p>
</div>
<div class="sp" role="tabpanel" id="p-auto" aria-labelledby="tab-auto">
<p>Las comunidades autónomas y algunos ayuntamientos abren convocatorias con plazos, presupuesto limitado y requisitos concretos. Pueden cerrarse en cuanto se agota el dinero y algunas exigen pedir la ayuda antes de empezar la obra.</p>
<p>No publicamos importes sin una convocatoria concreta detrás. Si una web te promete «hasta X €» sin enlazar las bases oficiales, desconfía.</p>
</div>
<h3 class="sub-h" style="margin-top:56px">Cómo comprobar si hay una ayuda abierta</h3>
<ol class="steps5">
<li><b>Tu comunidad</b>Busca «ayudas autoconsumo» en su portal oficial y mira la fecha de la convocatoria.</li>
<li><b>Tu ayuntamiento</b>Revisa impuestos, ordenanzas fiscales y ayudas.</li>
<li><b>IDAE</b>Consulta los programas en <a href="https://www.idae.es/" rel="noopener">idae.es</a>.</li>
<li><b>Las bases</b>Quién puede pedirla, qué cubre y si hay que pedirla antes.</li>
<li><b>Por escrito</b>Si un instalador «gestiona las ayudas», que diga cuáles y con qué convocatoria.</li>
</ol>
</div>
</div></section>

<section class="how-s"><div class="wrap"><div class="how rev">
<div class="how-img">${img(259588, 'Vivienda unifamiliar de ladrillo con jardín y camino de entrada', { sizes: '(max-width:960px) 100vw, 460px' })}<span class="cap-on">Imagen ilustrativa</span></div>
<div>
<span class="stag am">Cómo usar esta web</span>
<h2>Cuatro pasos para decidir sin prisa</h2>
<ol class="how-list">
<li><h3>Calcula con tus datos</h3><p>Usa tu consumo real y el precio de tu factura. Si el resultado solo sale con supuestos optimistas, lo verás.</p></li>
<li><h3>Comprueba las ayudas</h3><p>Deducción en la renta, bonificaciones municipales y convocatorias abiertas. Cada una se pide en un sitio distinto.</p></li>
<li><h3>Pide tres presupuestos comparables</h3><p>Misma potencia, mismos equipos, mismas garantías. Entonces sí, compara el precio.</p></li>
<li><h3>Revisa trámites y garantías</h3><p>Permisos, certificados y quién responde si algo falla. <a href="/blog/tramites-instalar-placas-solares/">Ver los trámites</a>.</p></li>
</ol>
</div></div></div></section>

<section class="bud-s" id="presupuestos"><div class="wrap"><div class="bud rev">
<div class="bud-img">${img(9875441, 'Operario con guantes cargando un panel solar sobre un tejado de teja', { sizes: '(max-width:960px) 100vw, 400px' })}<span class="cap-on">Imagen ilustrativa</span></div>
<div>
<span class="stag am">Antes de firmar</span>
<h2>Qué debe figurar por escrito en un presupuesto</h2>
<p class="ssub" style="margin-bottom:28px">Dos importes iguales pueden describir instalaciones muy distintas. Comprueba estos puntos en cada oferta.</p>
<div class="tablewrap"><table><thead><tr><th>Qué comparar</th><th>Qué pedir</th></tr></thead><tbody>
<tr><td>Potencia</td><td>kWp totales, número de paneles y potencia de cada uno.</td></tr>
<tr><td>Equipos</td><td>Marca y modelo concretos de paneles e inversor, no «primera calidad».</td></tr>
<tr><td>Garantías</td><td>Años de producto, de rendimiento y de instalación, por separado.</td></tr>
<tr><td>Trámites</td><td>Memoria o proyecto, permisos municipales, certificado y contrato con la comercializadora.</td></tr>
<tr><td>Ayudas</td><td>Qué convocatoria, quién la pide y qué pasa si se deniega.</td></tr>
<tr><td>Visita técnica</td><td>Estudio del tejado antes de dar un precio cerrado.</td></tr>
<tr><td>Pago e IVA</td><td>Pago por hitos e impuestos indicados de forma clara.</td></tr>
</tbody></table></div>
<p class="more"><a href="/blog/errores-al-comparar-presupuestos-placas-solares/">Leer: errores al comparar presupuestos</a></p>
</div></div></div></section>

<section class="guides-s" id="blog"><div class="wrap">
<div class="sh rev"><span class="stag am">Blog</span><h2>Artículos con datos oficiales y fecha de revisión</h2><p class="ssub">Cálculos, normativa y comprobaciones para decidir con criterio. Las fuentes van enlazadas al final de cada artículo.</p></div>
<div class="gg rev">
<a class="gc big" href="${articles[0].url}"><div class="gc-img">${img(356036, 'Paneles solares bajo un cielo azul con nubes', { sizes: '(max-width:960px) 100vw, 480px' })}</div><div class="gc-b"><div class="gc-k">${articles[0].cat}</div><h3>${esc(articles[0].meta.title)}</h3><p>${esc(articles[0].meta.description)}</p><span class="go">Leer artículo →</span></div></a>
${[1, 2, 3, 4].map((i) => card(articles[i])).join('')}
</div>
<p class="cap">Imagen ilustrativa.</p>
<p class="more-l"><a href="/blog/">Ver los ${articles.length} artículos</a></p>
</div></section>

<section class="news-s" id="noticias"><div class="wrap">
<div class="sh rev"><span class="stag az">Noticias</span><h2>Novedades oficiales sobre autoconsumo</h2><p class="ssub">Solo con fuente oficial, fecha y enlace al documento original.</p></div>
<ul class="news-l rev">
${noticias.map((n) => `<li><time datetime="${n.date}">${dateEs(n.date)}</time><div><a href="/noticias/">${esc(n.title)}</a><span>Fuente: ${esc(n.fuente)}</span></div></li>`).join('')}
</ul>
</div></section>

<section class="faq-s"><div class="wrap">
<div class="sh rev" style="text-align:center"><span class="stag am">Preguntas frecuentes</span><h2>Lo que más se pregunta</h2></div>
<div class="faq rev">${faq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>
</div></section>

<section class="cta-f"><div class="wrap">
<h2>Haz las cuentas con tus datos</h2>
<p>Lleva un par de minutos y no hace falta registrarse.</p>
<a class="btn btn-bl" href="#calculadora">Abrir la calculadora</a>
</div></section>
</main>`;
