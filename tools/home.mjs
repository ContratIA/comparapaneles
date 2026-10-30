import { img, DATE_ES } from './layout.mjs';
import { guides, guideCard, PVGIS } from './pages.mjs';

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
<div class="cf"><label class="chk" for="irpf"><input id="irpf" type="checkbox"><span>Cumplo los requisitos de la deducción del 40 % en el IRPF</span></label><small>Solo si tendrás certificados de eficiencia energética antes y después de la obra y acreditas la mejora exigida. <a href="/deduccion-irpf-placas-solares/">Ver requisitos</a>.</small></div>
</div>
<div class="cres" aria-live="polite">
<h3>Resultado estimado</h3>
<div class="rh"><div class="rhl">Ahorro del primer año</div><div class="rhv" id="oSave">–</div><div class="rhs">producción consumida + excedentes valorados</div></div>
<div class="rr"><span>Producción anual</span><strong id="oProd">–</strong></div>
<div class="rr"><span>Autoconsumo</span><strong id="oSelf">–</strong></div>
<div class="rr"><span>Excedente vertido</span><strong id="oSur">–</strong></div>
<div class="rr"><span>Importe tras subvenciones</span><strong id="oNet">–</strong></div>
<div class="rr"><span>Deducción IRPF (máx. 3.000 €)</span><strong id="oDed">–</strong></div>
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
<li><strong>Deducción IRPF</strong> (solo si marcas la casilla) = 40 % × el menor entre (coste − subvenciones) y 7.500 €.</li>
<li><strong>Amortización</strong>: años hasta que el ahorro acumulado cubre (coste − subvenciones − deducción). Cada año se produce un 0,5 % menos que el anterior. Es un supuesto habitual: comprueba la garantía de rendimiento del fabricante.</li>
<li><strong>Balance a 25 años</strong> = ahorro acumulado en 25 años − inversión neta.</li>
</ol>
<div class="box"><p>La calculadora resta la deducción del IRPF de golpe al principio. En la práctica llega con la declaración de la renta y solo cuenta la base de un ejercicio (máximo 7.500 €). El precio de la electricidad, tus hábitos y el estado del tejado cambian el resultado: úsala para comparar escenarios, no como promesa de ahorro. Antes de contratar, <a href="/guias/como-comparar-presupuestos-placas-solares/">compara varios presupuestos</a>.</p></div>
</div></div>`;

const faq = [
  ['¿Cuánto puedo deducir en el IRPF por instalar placas solares?', 'Si la instalación te permite aplicar la deducción del 40 % por reducir el consumo de energía primaria no renovable, la base máxima anual es de 7.500 €, por lo que la deducción máxima es de 3.000 €.'],
  ['¿Las placas solares dan derecho automático a deducción?', 'No. Hay que acreditar con certificados de eficiencia energética de antes y después de la obra la mejora mínima que exige la normativa.'],
  ['¿Hasta cuándo se pueden hacer las obras para aplicar la deducción?', 'Según la Agencia Tributaria, el Real Decreto-ley 16/2025 amplía hasta el 31 de diciembre de 2026 las obras de las deducciones del 20 % y del 40 %. Conviene confirmar el plazo vigente antes de contratar.'],
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

<div class="strip">${img(9875449, 'Operario con guante amarillo sujetando un panel solar fotovoltaico', { sizes: '100vw' })}<div class="strip-ov"></div>
<div class="strip-in"><div class="wrap"><div><div class="strip-k">Dato oficial</div><p class="strip-t">La deducción del 40 % del IRPF por eficiencia energética tiene un máximo de 3.000 € al año.</p></div><div class="strip-b"><b>40 %</b><span>base máxima 7.500 €</span></div></div></div></div>

<div class="tbar"><div class="wrap"><ul>
<li><span><strong>Gratis</strong> y sin registro</span></li>
<li><span><strong>Fuentes oficiales</strong> enlazadas</span></li>
<li><span><strong>Fórmulas</strong> y supuestos visibles</span></li>
<li><span><strong>Revisado</strong> el ${DATE_ES}</span></li>
</ul></div></div>

<div class="stats-b"><div class="wrap"><div class="sg">
<div class="si rev"><div class="sn">40 %</div><p class="sl">deducción en el IRPF por reducir el consumo de energía primaria no renovable</p></div>
<div class="si rev"><div class="sn">7.500 €</div><p class="sl">base máxima anual sobre la que se aplica</p></div>
<div class="si rev"><div class="sn">3.000 €</div><p class="sl">deducción máxima, si cumples los requisitos</p></div>
<div class="si rev"><div class="sn">31 dic 2026</div><p class="sl">fin del plazo de obras según la Agencia Tributaria</p></div>
</div></div></div>

${calcSection('<h2>Calcula tu <span>ahorro</span> con tus propios datos</h2>')}

<section class="sub-s" id="ayudas"><div class="wrap">
<div class="shg rev">
<div class="shi">${img(2800832, 'Vista aérea de filas de paneles solares sobre césped', { sizes: '(max-width:960px) 100vw, 520px' })}</div>
<div>
<span class="stag am">Ayudas</span>
<h2>Qué ayudas existen y cuáles puedes comprobar hoy</h2>
<div class="stot"><div class="stot-e">3.000 €</div><div class="stot-t">deducción máxima al año<br>en el IRPF (40 % de 7.500 €)</div></div>
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
<p>Se aplica en la declaración de la renta, no se cobra por adelantado y exige certificados de eficiencia energética de antes y después de la obra. Una instalación solar puede encajar en la del 40 %, pero no es automático.</p>
<div class="tablewrap"><table><thead><tr><th>Deducción</th><th>Porcentaje</th><th>Base máxima</th><th>Mejora que hay que acreditar</th></tr></thead><tbody>
<tr><td>Demanda de calefacción y refrigeración</td><td class="num">20 %</td><td class="num">5.000 € al año</td><td>Reducir al menos un 7 % la suma de los indicadores.</td></tr>
<tr><td>Consumo de energía primaria no renovable</td><td class="num">40 %</td><td class="num">7.500 € al año</td><td>Reducir al menos un 30 % ese indicador o alcanzar calificación A o B.</td></tr>
<tr><td>Rehabilitación energética de edificios</td><td class="num">60 %</td><td class="num">5.000 € al año (15.000 € acumulados)</td><td>La misma que la anterior, sobre el certificado del edificio.</td></tr>
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
<div class="how-img">${img(259588, 'Vivienda unifamiliar de ladrillo con jardín y camino de entrada', { sizes: '(max-width:960px) 100vw, 460px' })}</div>
<div>
<span class="stag am">Cómo usar esta web</span>
<h2>Cuatro pasos para decidir sin prisa</h2>
<ol class="how-list">
<li><h3>Calcula con tus datos</h3><p>Usa tu consumo real y el precio de tu factura. Si el resultado solo sale con supuestos optimistas, lo verás.</p></li>
<li><h3>Comprueba las ayudas</h3><p>Deducción en la renta, bonificaciones municipales y convocatorias abiertas. Cada una se pide en un sitio distinto.</p></li>
<li><h3>Pide tres presupuestos comparables</h3><p>Misma potencia, mismos equipos, mismas garantías. Entonces sí, compara el precio.</p></li>
<li><h3>Revisa trámites y garantías</h3><p>Permisos, certificados y quién responde si algo falla. <a href="/guias/tramites-instalar-placas-solares/">Ver los trámites</a>.</p></li>
</ol>
</div></div></div></section>

<section class="bud-s" id="presupuestos"><div class="wrap"><div class="bud rev">
<div class="bud-img">${img(9875441, 'Operario con guantes cargando un panel solar sobre un tejado de teja', { sizes: '(max-width:960px) 100vw, 400px' })}</div>
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
<p class="more"><a href="/guias/como-comparar-presupuestos-placas-solares/">Leer la guía completa para comparar presupuestos</a></p>
</div></div></div></section>

<section class="guides-s" id="guias"><div class="wrap">
<div class="sh rev"><span class="stag am">Guías</span><h2>Explicaciones prácticas, con fecha de revisión</h2><p class="ssub">Cinco guías para dimensionar la instalación, entender los excedentes, hacer los trámites y cuidar el equipo.</p></div>
<div class="gg rev">
<a class="gc big" href="/guias/${guides[1].slug}/"><div class="gc-img">${img(356036, 'Paneles solares bajo un cielo azul con nubes', { sizes: '(max-width:960px) 100vw, 480px' })}</div><div class="gc-b"><div class="gc-k">Guía</div><h3>${guides[1].title}</h3><p>${guides[1].desc}</p><span class="go">Leer guía →</span></div></a>
${[0, 2, 3, 4].map((i) => guideCard(guides[i])).join('')}
</div>
<p class="more-l"><a href="/guias/">Ver todas las guías</a></p>
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
