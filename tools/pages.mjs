import { DATE_ES } from './layout.mjs';

export const PVGIS = 'https://re.jrc.ec.europa.eu/pvg_tools/es/';
const BOE_RDL = 'https://www.boe.es/buscar/act.php?id=BOE-A-2026-6544';
const AEAT_2026 = 'https://sede.agenciatributaria.gob.es/Sede/irpf/novedades-impuesto/novedades-normativa-2026/principales-novedades-tributarias-introducidas-real-marzo.html';
const AEAT_RESUMEN = 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c16-deducciones-generales-cuota/deducciones-obras-mejora-eficiencia-energetica-viviendas/cuadro-resumen-deducciones-obras-eficiencia-viviendas.html';

const SRC_IRPF = `<h2>Fuentes</h2><ul class="src">
<li><a href="${BOE_RDL}" rel="noopener">BOE: Real Decreto-ley 7/2026, de 20 de marzo (BOE-A-2026-6544), artículo 36</a></li>
<li><a href="${AEAT_2026}" rel="noopener">Agencia Tributaria: novedades de normativa 2026, Real Decreto-ley 7/2026</a></li>
<li><a href="${AEAT_RESUMEN}" rel="noopener">Agencia Tributaria: cuadro-resumen de deducciones por obras de mejora de eficiencia energética en viviendas</a></li></ul>`;

export const pages = [];

/* ---------- IRPF ---------- */
const irpfFaq = [
  ['¿Cuánto puedo deducir en el IRPF por instalar placas solares en 2026?', 'La deducción nueva por instalar autoconsumo renovable es del 10 % de lo pagado, o del 20 % si eres propietario de una vivienda en un edificio de uso predominantemente residencial, con una base máxima de 5.000 euros. Eso deja un máximo de 500 o 1.000 euros.'],
  ['¿Hasta cuándo hay que hacer la instalación?', 'La instalación debe realizarse y terminarse en 2026, y las cantidades tienen que pagarse entre el 1 de enero y el 31 de diciembre de 2026. La deducción se aplica en el periodo en el que finaliza la instalación.'],
  ['¿Puedo aplicar la deducción por eficiencia energética y la nueva a la vez?', 'No para la misma instalación en el mismo inmueble: son incompatibles. La deducción por eficiencia energética exige además certificados de antes y después de las obras.'],
  ['¿Puedo pagar en efectivo?', 'No. Para deducir hay que pagar con tarjeta, transferencia, cheque nominativo o ingreso en cuenta. El efectivo queda excluido.'],
];
pages.push({
  url: '/deduccion-irpf-placas-solares/', kind: 'article', date: '2026-10-30', faq: irpfFaq,
  title: 'Deducción IRPF por placas solares en 2026: 10 % y 20 %, requisitos | ComparaPaneles',
  desc: 'Qué dice la Agencia Tributaria sobre la deducción del IRPF por instalar autoconsumo en 2026 (10 % y 20 %) y sobre las deducciones por eficiencia energética: bases, requisitos y plazos.',
  h1: 'Deducción en el IRPF por placas solares: requisitos y límites',
  lede: 'Resumen de las dos deducciones que pueden aplicarse a una instalación de autoconsumo, con fuentes oficiales.',
  body: `<p class="lead">Desde marzo de 2026 existe una deducción en el IRPF pensada específicamente para quien instala autoconsumo renovable. Convive con la deducción por obras de eficiencia energética, más antigua y con otros requisitos. Aquí tienes las dos en una página. El análisis completo, con ejemplos, está en <a href="/blog/deduccion-irpf-placas-solares-2026/">Deducción en el IRPF por instalar placas solares en 2026</a>.</p>
<div class="box ok"><p><strong>Resumen.</strong> Instalación hecha, terminada y pagada en 2026: deducción del <strong>10 %</strong> (o <strong>20 %</strong> si tu vivienda está en un edificio de uso predominantemente residencial), sobre una base máxima de <strong>5.000 euros</strong>. Como máximo, 500 o 1.000 euros.</p></div>
<nav class="toc" aria-label="Contenido"><strong>En esta página</strong><ol><li><a href="#nueva">La deducción por instalar autoconsumo</a></li><li><a href="#eficiencia">La deducción por eficiencia energética</a></li><li><a href="#elegir">Cuál aplicar</a></li><li><a href="#preguntas">Preguntas frecuentes</a></li></ol></nav>
<h2 id="nueva">La deducción por instalar autoconsumo (2026)</h2>
<p>La creó el Real Decreto-ley 7/2026, de 20 de marzo. Según la Agencia Tributaria, solo se aplica si la instalación se realiza y finaliza en 2026 y las cantidades se pagan también en 2026.</p>
<div class="tablewrap"><table>
<thead><tr><th>Modalidad</th><th>Porcentaje</th><th>Base máxima anual</th><th>Máximo deducible</th></tr></thead>
<tbody>
<tr><td>Instalación en un inmueble de tu propiedad</td><td class="num">10 %</td><td class="num">5.000 €</td><td class="num">500 €</td></tr>
<tr><td>Vivienda tuya en un edificio de uso predominantemente residencial</td><td class="num">20 %</td><td class="num">5.000 €</td><td class="num">1.000 €</td></tr>
</tbody></table></div>
<ul>
<li>La base incluye equipos, materiales, gastos de instalación y obras necesarias. Puede incluir sistemas de almacenamiento.</li>
<li>Se resta de la base cualquier subvención pública que hayas recibido o vayas a recibir.</li>
<li>El pago debe hacerse con tarjeta, transferencia, cheque nominativo o ingreso en cuenta, no en efectivo.</li>
<li>Hace falta contar con todos los permisos vigentes y con el Certificado de Instalaciones Eléctricas.</li>
<li>No se aplica si el sistema está afecto a una actividad económica.</li>
<li>Es incompatible con la deducción por eficiencia energética para la misma instalación en el mismo inmueble.</li>
</ul>
<h2 id="eficiencia">La deducción por eficiencia energética</h2>
<p>Existe desde 2021 y la Agencia Tributaria ha ampliado sus plazos. No es específica de las placas solares: depende de que los certificados de eficiencia energética de antes y después de la obra acrediten la mejora exigida.</p>
<div class="tablewrap"><table>
<thead><tr><th>Deducción</th><th>Porcentaje</th><th>Base máxima</th><th>Mejora que hay que acreditar</th></tr></thead>
<tbody>
<tr><td>Reducción de la demanda de calefacción y refrigeración</td><td class="num">20 %</td><td class="num">5.000 € al año</td><td>Reducir al menos un 7 % la suma de los indicadores de demanda.</td></tr>
<tr><td>Reducción del consumo de energía primaria no renovable</td><td class="num">40 %</td><td class="num">7.500 € al año</td><td>Reducir al menos un 30 % ese indicador, o alcanzar calificación energética A o B.</td></tr>
<tr><td>Rehabilitación energética de edificios residenciales</td><td class="num">60 %</td><td class="num">5.000 € al año (15.000 € acumulados)</td><td>La misma que la anterior, sobre el certificado del edificio.</td></tr>
</tbody></table></div>
<p>Plazos según la Agencia Tributaria: las obras de las deducciones del 20 % y del 40 % pueden realizarse hasta el <strong>31 de diciembre de 2026</strong> (con el certificado posterior expedido antes del 1 de enero de 2027). En edificios residenciales, la del 60 % admite pagos hasta el 31 de diciembre de 2027.</p>
<h2 id="elegir">Cuál aplicar</h2>
<p>Para una instalación fotovoltaica en una vivienda, la deducción nueva es más sencilla: no pide certificados de eficiencia energética, solo la documentación de la instalación y el pago por medios bancarios. La de eficiencia energética puede dar más euros (hasta 3.000 al año con el 40 % sobre 7.500 de base) pero exige acreditar la mejora con certificados y no está garantizada. Como no se pueden combinar para la misma instalación, si dudas, pide a un técnico que te diga si tu vivienda alcanzaría el umbral y compara con la calculadora.</p>
<p>Prueba los escenarios en la <a href="/calculadora-ahorro-placas-solares/">calculadora</a>, que te deja elegir cada deducción.</p>
<h2 id="preguntas">Preguntas frecuentes</h2>
${irpfFaq.map(([q, a]) => `<h3>${q}</h3><p>${a}</p>`).join('')}
<p class="src">Esta página es informativa y no sustituye el asesoramiento de un profesional. Revisada el ${DATE_ES}. Los plazos se han prorrogado varias veces: confirma siempre el vigente en la Agencia Tributaria antes de contratar.</p>
${SRC_IRPF}`,
  crumbs: [['Subvenciones', '/subvenciones-placas-solares/']],
});

/* ---------- SUBVENCIONES ---------- */
pages.push({
  url: '/subvenciones-placas-solares/', kind: 'article', date: '2026-10-30',
  title: 'Ayudas y subvenciones para placas solares 2026: cuáles están abiertas | ComparaPaneles',
  desc: 'Qué ayudas para placas solares están abiertas en 2026: IRPF, IBI e ICIO y convocatorias de País Vasco, Andalucía y Castilla-La Mancha, con fuentes oficiales.',
  h1: 'Ayudas y subvenciones para placas solares en 2026: qué hay abierto',
  body: `<p class="lead">No hay una única ayuda nacional que podamos prometerte. Lo que existe son tres capas que conviene distinguir, porque cada una se pide en un sitio distinto y con condiciones propias.</p>
<h2 id="resumen">Resumen: estado de las ayudas a ${DATE_ES}</h2>
<div class="tablewrap"><table>
<thead><tr><th>Ayuda</th><th>Para quién</th><th>Estado</th><th>Qué hay que saber</th></tr></thead>
<tbody>
<tr><td><a href="/deduccion-irpf-placas-solares/">Deducción del IRPF (estatal)</a></td><td>Propietarios de vivienda o inmueble</td><td>Vigente en 2026</td><td>10 % o 20 % sobre un máximo de 5.000 €. La instalación debe terminarse y pagarse antes del 31 de diciembre de 2026.</td></tr>
<tr><td><a href="/blog/bonificacion-ibi-icio-placas-solares/">IBI e ICIO (municipal)</a></td><td>Según la ordenanza de cada ayuntamiento</td><td>Depende del municipio</td><td>Hasta el 50 % del IBI y el 95 % del ICIO si el ayuntamiento lo aprueba.</td></tr>
<tr><td><a href="/blog/ayudas-placas-solares-pais-vasco-eguzki-hotz-2026/">País Vasco: Eguzki Hotz</a></td><td>Viviendas y comunidades</td><td>Abierta desde el 5 de noviembre de 2026</td><td>600 €/kWp individual. Por orden de llegada, como máximo hasta el 29 de septiembre de 2028.</td></tr>
<tr><td><a href="/blog/ayudas-placas-solares-andalucia-2026-convocatoria-inea/">Andalucía: Agencia Andaluza de la Energía</a></td><td>Particulares, comunidades y empresas</td><td>Abierta con suspensión parcial desde el 29 de octubre de 2026</td><td>Parte de las partidas agotó el crédito. Comprueba tu tipo de actuación en el portal de la Agencia.</td></tr>
<tr><td><a href="/blog/ayudas-placas-solares-castilla-la-mancha-comunidades-propietarios-2026/">Castilla-La Mancha</a></td><td>Comunidades de propietarios y energéticas</td><td>Abierta hasta el 8 de marzo de 2027</td><td>No sirve para vivienda unifamiliar. Mínimo cinco puntos de suministro.</td></tr>
<tr><td><a href="/blog/deducciones-autonomicas-placas-solares-irpf-valencia-murcia-baleares/">Deducciones autonómicas</a></td><td>Residentes en Valencia, Murcia y Baleares</td><td>Según el manual de Renta 2025</td><td>Se suman a la estatal en la declaración. Confirma las reglas de 2026 en la próxima campaña.</td></tr>
<tr><td>Illes Balears: FOTOPAR 2026</td><td>Personas físicas</td><td>Cerrada</td><td>El plazo terminó el 30 de abril de 2026, según la prensa especializada.</td></tr>
<tr><td>Galicia: Inega, fotovoltaica 2026 (IN421S)</td><td>Empresas y entidades locales, no particulares</td><td>Cerrada</td><td>El plazo de solicitudes terminó el 2 de marzo de 2026.</td></tr>
</tbody></table></div>
<div class="box ok"><p><strong>Si quieres la deducción estatal del IRPF de 2026</strong>, la instalación tiene que estar terminada y pagada este año. Si firmas ahora, pide por escrito la fecha de finalización y el Certificado de Instalaciones Eléctricas antes del 31 de diciembre.</p></div>
<div class="box"><p>Por eso <strong>no publicamos cifras del tipo «hasta X €»</strong> sin una convocatoria concreta detrás. Si una web te las promete sin enlazar la convocatoria oficial, desconfía.</p></div>
<h2>1. Deducción en el IRPF (estatal)</h2>
<p>Es la ayuda con información oficial más clara. Se aplica en la declaración de la renta y no se cobra por adelantado. Para instalaciones terminadas y pagadas en 2026, la deducción es del 10 % de lo pagado (20 % si eres propietario de una vivienda en un edificio de uso predominantemente residencial), con una base máxima de 5.000 euros. También existe la deducción por obras de eficiencia energética, que exige certificados. Detalle, plazos y fuentes en <a href="/deduccion-irpf-placas-solares/">Deducción en el IRPF por placas solares</a>. Algunas comunidades añaden su propia deducción: mira las de <a href="/blog/deducciones-autonomicas-placas-solares-irpf-valencia-murcia-baleares/">Valencia, Murcia y Baleares</a>.</p>
<h2>2. Bonificaciones municipales (IBI e ICIO)</h2>
<p>La ley permite que los ayuntamientos bonifiquen hasta el 50 % del IBI y hasta el 95 % del ICIO a quien instala placas solares, pero no les obliga. El porcentaje, la duración y los requisitos los fija cada ordenanza fiscal, así que cambian de un municipio a otro y algunos no ofrecen ninguna. Lo explicamos en <a href="/blog/bonificacion-ibi-icio-placas-solares/">Bonificación del IBI y del ICIO por instalar placas solares</a>.</p>
<h2>3. Ayudas directas de comunidades autónomas y ayuntamientos</h2>
<p>Se abren mediante convocatorias con plazos, presupuesto limitado y requisitos concretos. Pueden cerrarse en cuanto se agota el dinero. Algunas exigen solicitar la ayuda antes de empezar la instalación, así que no contrates sin leer las bases.</p>
<h2>Convocatorias recientes que hemos comprobado</h2>
<p>Estas están publicadas en boletines oficiales o en la web de la administración que las convoca, y las hemos leído en el texto original. Los plazos y el crédito cambian, así que mira siempre el estado actual antes de contratar.</p>
<ul>
<li><strong>País Vasco:</strong> el programa Eguzki Hotz del Ente Vasco de la Energía, con plazo abierto desde el 5 de noviembre de 2026 y 600 €/kWp para instalaciones individuales de hasta 10 kWp. <a href="/blog/ayudas-placas-solares-pais-vasco-eguzki-hotz-2026/">Ver requisitos y cuentas</a>.</li>
<li><strong>Andalucía:</strong> convocatoria de la Agencia Andaluza de la Energía abierta el 22 de octubre de 2026, con suspensión parcial el 29 de octubre por falta de crédito. <a href="/blog/ayudas-placas-solares-andalucia-2026-convocatoria-inea/">Qué dice el BOJA</a>.</li>
<li><strong>Castilla-La Mancha:</strong> 10,6 millones para placas solares en comunidades de propietarios y comunidades energéticas (no para vivienda unifamiliar), con solicitudes entre el 9 de septiembre de 2026 y el 8 de marzo de 2027. <a href="/blog/ayudas-placas-solares-castilla-la-mancha-comunidades-propietarios-2026/">Requisitos y fuentes</a>.</li>
<li><strong>Illes Balears:</strong> el programa FOTOPAR 2026, para personas físicas, se convocó en diciembre de 2025 (BOIB núm. 171) y amplió su crédito en junio de 2026 (BOIB núm. 69). Según la prensa especializada, el plazo de solicitud terminó el 30 de abril de 2026 y no hemos visto una nueva convocatoria. <a href="https://www.caib.es/seucaib/ca/tramites/tramite/6439804/" rel="noopener">Ficha oficial del trámite</a>.</li>
</ul>
<p>En Galicia, la convocatoria del Inega de fotovoltaica para 2026 (procedimiento IN421S, DOG núm. 12 del 20 de enero de 2026) era para empresas, autónomos, entidades locales y entidades sin ánimo de lucro, no para particulares, y su plazo terminó el 2 de marzo de 2026. <a href="https://www.inega.gal/sites/default/files/2026-05/AnuncioG0474-120526-0001_es.pdf" rel="noopener">Resolución del Inega de 12 de mayo de 2026</a>.</p>
<p>Ojo con las ayudas antiguas que siguen circulando por la web. La Comunidad de Madrid, por ejemplo, abrió en noviembre de 2021 una línea para instalar paneles solares con plazo hasta el 31 de diciembre de 2023. Si una página la presenta como vigente, está desactualizada.</p>
<h2>Cómo comprobar si hay una ayuda abierta hoy</h2>
<ol>
<li>Busca en el portal oficial de tu comunidad autónoma «ayudas autoconsumo» o «ayudas energías renovables» y revisa la fecha de la convocatoria.</li>
<li>Consulta la web de tu ayuntamiento: sección de impuestos, ordenanzas fiscales y ayudas.</li>
<li>Revisa los programas de ayuda en la web del <a href="https://www.idae.es/" rel="noopener">IDAE</a> (Instituto para la Diversificación y Ahorro de la Energía).</li>
<li>Lee las bases: quién puede pedirla, qué gastos cubre, si hay que pedirla antes de la obra y qué documentos hay que presentar.</li>
<li>Si un instalador te dice que «gestiona todas las ayudas», pídele por escrito cuáles y con qué convocatoria.</li>
</ol>
<h2>Cómo se combinan</h2>
<p>Las subvenciones directas que recibas se restan de la base de la deducción del IRPF. Cada convocatoria puede tener sus propias incompatibilidades, que figuran en las bases. Para ver el efecto conjunto con tus números, usa la <a href="/calculadora-ahorro-placas-solares/">calculadora</a>.</p>
<h2>Señales de alarma</h2>
<ul>
<li>Promesas de «hasta 6.000 €» (u otra cifra) sin convocatoria enlazada.</li>
<li>Presión para firmar «antes de que se acabe la ayuda» sin darte las bases.</li>
<li>Presupuestos que no desglosan la ayuda ni indican quién la solicita.</li>
</ul>
<p>Más criterios en <a href="/blog/errores-al-comparar-presupuestos-placas-solares/">Errores al comparar presupuestos de placas solares</a>.</p>
<p class="src">Información orientativa revisada el ${DATE_ES}. Las convocatorias cambian con frecuencia: verifica siempre en la fuente oficial.</p>
${SRC_IRPF}`,
});

/* ---------- LEGAL Y EDITORIAL ---------- */
const TITULAR = 'Eloy Muros Roncero', NIF = '33512347J', DOMICILIO = 'Calle Cerro Blanco, 10, piso 02, puerta A, 28026 Madrid (España)';
pages.push({
  url: '/sobre-nosotros/', kind: 'plain', title: 'Sobre ComparaPaneles: criterios editoriales | ComparaPaneles',
  desc: 'Qué es ComparaPaneles, cómo elaboramos el contenido, cómo se financia el sitio y cómo corregimos errores.', h1: 'Sobre ComparaPaneles',
  body: `<p class="lead">ComparaPaneles es un sitio informativo sobre autoconsumo solar en España.</p>
<h2>Qué hacemos y qué no</h2>
<p>Explicamos cómo funcionan las placas solares, cómo calcular si te compensan y cómo comparar presupuestos. <strong>No vendemos ni instalamos placas solares, no intermediamos presupuestos y no recomendamos instaladores concretos.</strong></p>
<h2>Cómo elaboramos el contenido</h2>
<ul>
<li>Los datos legales y fiscales se contrastan con fuentes oficiales (BOE, Agencia Tributaria, Ministerio para la Transición Ecológica) y se enlazan al final de cada página.</li>
<li>Los datos de producción solar salen de PVGIS, la herramienta de la Comisión Europea, con los parámetros indicados en cada artículo.</li>
<li>Cuando un dato depende de tu comunidad autónoma, tu ayuntamiento o tu comercializadora, lo decimos en lugar de inventar una cifra.</li>
<li>Los ejemplos con números inventados están señalados como tales.</li>
<li>Cada página indica su fecha de publicación y de revisión.</li>
<li>Las fotografías son de archivos de uso libre, con sus créditos en la página de <a href="/creditos-fotos/">créditos de fotos</a>. Son imágenes ilustrativas: no muestran instalaciones ni clientes de ComparaPaneles.</li>
</ul>
<h2>Cómo se financia</h2>
<p>El sitio puede mostrar publicidad de terceros. Los anuncios no influyen en el contenido editorial.</p>
<h2>Errores y correcciones</h2>
<p>Si detectas una cifra desactualizada o un error, escríbenos desde la <a href="/contacto/">página de contacto</a> indicando la página y la fuente. Lo revisaremos y corregiremos.</p>
<p class="src">Esta web ofrece información general y no constituye asesoramiento fiscal, jurídico ni técnico.</p>`,
});
pages.push({
  url: '/contacto/', kind: 'plain', title: 'Contacto | ComparaPaneles', desc: 'Cómo contactar con ComparaPaneles para consultas, correcciones o ejercicio de derechos de protección de datos.', h1: 'Contacto',
  body: `<p>Puedes escribirnos a <a href="mailto:eloymuros@gmail.com">eloymuros@gmail.com</a> o usar el formulario para:</p>
<ul><li>Señalar un error o un dato desactualizado (indica la página y, si puedes, la fuente).</li><li>Ejercer tus derechos de protección de datos (ver <a href="/politica-de-privacidad/">política de privacidad</a>).</li><li>Consultas sobre el sitio.</li></ul>
<p>No podemos asesorarte sobre un presupuesto concreto ni recomendarte instaladores. Respondemos por orden de llegada.</p>
<form class="formbox" action="https://formspree.io/f/xaqlqvvw" method="POST" data-contact>
<div class="fg-grid">
<div class="fg"><label for="c-nombre">Nombre</label><input id="c-nombre" name="nombre" type="text" autocomplete="name" required></div>
<div class="fg"><label for="c-email">Correo electrónico</label><input id="c-email" name="email" type="email" autocomplete="email" required></div>
<div class="fg"><label for="c-msg">Mensaje</label><textarea id="c-msg" name="mensaje" required></textarea></div>
</div>
<div class="hp" aria-hidden="true"><label>No rellenar<input type="text" name="_gotcha" tabindex="-1" autocomplete="off"></label></div>
<label class="chk"><input type="checkbox" name="acepto_privacidad" value="si" required><span>He leído la <a href="/politica-de-privacidad/">política de privacidad</a> y acepto que se traten mis datos para responder a mi mensaje.</span></label>
<p style="margin-top:18px"><button class="btn" type="submit">Enviar mensaje</button></p>
<p class="msg" role="status" hidden></p>
</form>`,
});
pages.push({
  url: '/aviso-legal/', kind: 'plain', title: 'Aviso legal | ComparaPaneles', desc: 'Aviso legal de ComparaPaneles: titular, condiciones de uso y responsabilidad.', h1: 'Aviso legal',
  body: `<h2>Titular del sitio</h2>
<p>En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico:</p>
<ul><li><strong>Titular:</strong> ${TITULAR}</li><li><strong>NIF:</strong> ${NIF}</li><li><strong>Domicilio:</strong> ${DOMICILIO}</li><li><strong>Correo electrónico:</strong> eloymuros@gmail.com</li><li><strong>Dominio:</strong> comparapaneles.com</li></ul>
<h2>Objeto</h2>
<p>Este sitio ofrece información general sobre autoconsumo solar en España. El acceso es gratuito.</p>
<h2>Carácter informativo</h2>
<p>Los contenidos, cálculos y ejemplos son orientativos. No constituyen asesoramiento fiscal, jurídico, financiero ni técnico. Antes de tomar decisiones, contrasta la información con fuentes oficiales y con profesionales cualificados. Los resultados de la calculadora dependen de los datos que introduzcas y de supuestos editables.</p>
<h2>Publicidad</h2>
<p>El sitio puede mostrar publicidad de terceros. Los anuncios están identificados como tales y no forman parte del contenido editorial.</p>
<h2>Propiedad intelectual</h2>
<p>Los textos y el diseño del sitio están protegidos por la normativa de propiedad intelectual. Se permite citar fragmentos breves con enlace a la página de origen. Las fotografías pertenecen a sus autores y se usan con las licencias indicadas en la página de <a href="/creditos-fotos/">créditos de fotos</a>.</p>
<h2>Enlaces externos</h2>
<p>Enlazamos a páginas de terceros (organismos oficiales y otras fuentes). No controlamos su contenido ni respondemos de él.</p>
<h2>Responsabilidad</h2>
<p>Hacemos lo posible por mantener la información actualizada, pero las normas y ayudas cambian con frecuencia. No respondemos de las decisiones tomadas únicamente a partir de este contenido. Puedes comunicarnos errores desde la <a href="/contacto/">página de contacto</a>.</p>
<h2>Legislación aplicable</h2>
<p>Este aviso se rige por la legislación española.</p>`,
});
pages.push({
  url: '/politica-de-privacidad/', kind: 'plain', title: 'Política de privacidad | ComparaPaneles', desc: 'Qué datos trata ComparaPaneles, con qué finalidad, durante cuánto tiempo y cómo ejercer tus derechos.', h1: 'Política de privacidad',
  body: `<p>Última actualización: ${DATE_ES}.</p>
<h2>Responsable</h2>
<p>${TITULAR}, con NIF ${NIF} y domicilio en ${DOMICILIO} (consulta el <a href="/aviso-legal/">aviso legal</a> para los datos completos). Contacto: <a href="mailto:eloymuros@gmail.com">eloymuros@gmail.com</a>.</p>
<h2>Qué datos tratamos</h2>
<ul>
<li><strong>Navegación:</strong> el proveedor de alojamiento puede registrar datos técnicos de la conexión (como la dirección IP) por motivos de seguridad y funcionamiento.</li>
<li><strong>Estadísticas de visitas:</strong> usamos Vercel Web Analytics, que según su documentación mide visitas de forma agregada sin utilizar cookies.</li>
<li><strong>Mensajes que nos envíes:</strong> si usas el formulario de la <a href="/contacto/">página de contacto</a>, tratamos tu nombre, tu correo y el texto del mensaje para responderte. El formulario lo gestiona Formspree, Inc. (Estados Unidos), que actúa como encargado del tratamiento y puede implicar una transferencia internacional de datos; consulta su política de privacidad. Si nos escribes por correo electrónico, tratamos tu mensaje y tu dirección con la misma finalidad.</li>
</ul>
<p>El sitio no tiene registro de usuarios ni solicita datos personales para usar la calculadora: los valores que introduces se procesan en tu navegador y no se envían a ningún servidor.</p>
<h2>Finalidad y base jurídica</h2>
<p>Responder tus consultas (consentimiento al enviar el formulario o escribirnos), mantener la seguridad del sitio y conocer cómo se usa de forma agregada (interés legítimo).</p>
<h2>Publicidad</h2>
<p>Si activamos publicidad de terceros, Google y sus socios podrán usar cookies o identificadores para mostrar anuncios. En el Espacio Económico Europeo se hará solo si aceptas, mediante un aviso de consentimiento que podrás modificar en cualquier momento. Más información en la <a href="/politica-de-cookies/">política de cookies</a>.</p>
<h2>Conservación y destinatarios</h2>
<p>Conservamos los correos el tiempo necesario para atender tu consulta y las obligaciones legales aplicables. No vendemos tus datos. Pueden acceder a ellos los proveedores que nos prestan servicios (alojamiento, analítica y correo) en calidad de encargados del tratamiento.</p>
<h2>Tus derechos</h2>
<p>Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a eloymuros@gmail.com. Si consideras que no hemos tratado tus datos correctamente, puedes reclamar ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" rel="noopener">aepd.es</a>).</p>`,
});
pages.push({
  url: '/politica-de-cookies/', kind: 'plain', title: 'Política de cookies | ComparaPaneles', desc: 'Qué cookies y tecnologías similares usa ComparaPaneles y cómo gestionarlas.', h1: 'Política de cookies',
  body: `<p>Última actualización: ${DATE_ES}.</p>
<h2>Qué son</h2>
<p>Las cookies son pequeños archivos que un sitio guarda en tu dispositivo. Algunas son necesarias para que funcione y otras sirven para medir el uso o mostrar publicidad.</p>
<h2>Qué usamos hoy</h2>
<ul>
<li><strong>Cookies técnicas:</strong> el sitio no necesita guardar cookies propias para funcionar.</li>
<li><strong>Analítica:</strong> Vercel Web Analytics mide visitas de forma agregada y, según su documentación, sin utilizar cookies.</li>
</ul>
<h2>Publicidad</h2>
<p>Si activamos anuncios de Google AdSense, Google y sus socios podrán usar cookies o identificadores similares para personalizar o medir los anuncios. En el Espacio Económico Europeo solo lo harán con tu consentimiento, que podrás aceptar, rechazar o modificar desde el aviso de consentimiento del sitio. Esta página se actualizará cuando se active la publicidad, con la lista de cookies y finalidades.</p>
<h2>Cómo gestionarlas</h2>
<p>Puedes borrar o bloquear cookies desde la configuración de tu navegador. Consulta la ayuda de tu navegador para saber cómo hacerlo. Bloquear determinadas cookies puede afectar a cómo se muestran los anuncios.</p>
<p>Más información sobre el tratamiento de datos en la <a href="/politica-de-privacidad/">política de privacidad</a>.</p>`,
});

/* ---------- Comparador de presupuestos ---------- */
const cmpFaq = [
  ['¿Cómo comparo presupuestos de placas solares?', 'Apunta para cada oferta el precio total con IVA, los kWp, la producción que promete, las garantías y si incluye batería y trámites. Divide el precio entre los kWp y compara la producción prometida con el dato de PVGIS para tu tejado. Después calcula la amortización con tus propios datos de consumo y de precio de la luz.'],
  ['¿Qué significa euros por kWp?', 'Es el precio total dividido entre la potencia instalada. Sirve como referencia entre ofertas parecidas, pero cambia con el tamaño de la instalación y con las condiciones del tejado, y no es comparable si una oferta incluye batería y otra no.'],
  ['¿La herramienta usa precios de instaladores?', 'No. No tenemos precios de empresas ni una fuente oficial que los fije. Solo calcula con las cifras que escribes tú, y todo ocurre en tu navegador: no se envía ningún dato.'],
  ['¿Por qué compara la producción prometida con PVGIS?', 'Porque una oferta que promete mucha más producción que PVGIS para tu zona, orientación e inclinación debería explicar de dónde sale esa cifra. PVGIS es la herramienta gratuita de la Comisión Europea.'],
];
const cmpOffer = (i, L) => `<div class="cmp-card"><h2>Oferta ${L}</h2>
<div class="fg"><label for="nm${i}">Nombre de la empresa (opcional)</label><input id="nm${i}" type="text" maxlength="40" autocomplete="off"></div>
<div class="fg"><label for="pr${i}">Precio total con IVA (€)</label><input id="pr${i}" type="number" min="0" step="100" inputmode="decimal"></div>
<div class="fg"><label for="kw${i}">Potencia (kWp)</label><input id="kw${i}" type="number" min="0" step="0.1" inputmode="decimal"></div>
<div class="fg"><label for="py${i}">Producción que promete (kWh por kWp y año)</label><input id="py${i}" type="number" min="0" step="50" inputmode="decimal"><small>Déjalo vacío si la oferta no la indica.</small></div>
<div class="fg"><label for="gi${i}">Garantía de la instalación (años)</label><input id="gi${i}" type="number" min="0" step="1" inputmode="numeric"></div>
<div class="fg"><label for="gv${i}">Garantía del inversor (años)</label><input id="gv${i}" type="number" min="0" step="1" inputmode="numeric"></div>
<label class="cmp-chk"><input id="bt${i}" type="checkbox"> Incluye batería</label>
<label class="cmp-chk"><input id="tr${i}" type="checkbox"> Incluye trámites y legalización</label>
</div>`;
const cmpTool = `<section class="cmp-s" id="comparador"><div class="cmp-wrap">
<form class="cmp-form" id="cmpForm" autocomplete="off">
<div class="cmp-offers">${cmpOffer('a', 'A')}${cmpOffer('b', 'B')}${cmpOffer('c', 'C')}</div>
<div class="cmp-shared"><h2>Tus datos y supuestos (iguales para las tres ofertas)</h2>
<div class="cmp-sgrid">
<div class="fg"><label for="cons">Consumo eléctrico anual (kWh)</label><input id="cons" type="number" min="0" step="100" value="3500" inputmode="decimal"><small>Lo encuentras en tu factura.</small></div>
<div class="fg"><label for="price">Precio medio del kWh (€/kWh)</label><input id="price" type="number" min="0" step="0.01" value="0.15" inputmode="decimal"><small>Término de energía dividido entre los kWh consumidos.</small></div>
<div class="fg"><label for="yld">Producción por kWp según PVGIS (kWh/año)</label><input id="yld" type="number" min="0" step="50" value="1500" inputmode="decimal"><small>Calcúlalo para tu tejado en <a href="${PVGIS}" rel="noopener">PVGIS</a>. El valor inicial es un ejemplo.</small></div>
<div class="fg"><label for="share">Parte de la producción que consumes en casa: <strong id="shareV">40 %</strong></label><input id="share" type="range" min="10" max="90" step="5" value="40"><small>Es un supuesto: depende de tus horarios y de si hay batería.</small></div>
<div class="fg"><label for="comp">Valor de los excedentes (€/kWh)</label><input id="comp" type="number" min="0" step="0.01" value="0.06" inputmode="decimal"><small>Pon 0 si no tienes compensación.</small></div>
<div class="fg"><label for="sub">Subvenciones directas (€)</label><input id="sub" type="number" min="0" step="100" value="0" inputmode="decimal"><small>Se restan del precio de cada oferta.</small></div>
<div class="fg full"><label for="irpf">Deducción del IRPF que te corresponde</label><select id="irpf"><option value="0">Ninguna</option><option value="10">10 % por instalar autoconsumo en 2026</option><option value="20">20 % por instalar autoconsumo en 2026 (vivienda en edificio residencial)</option><option value="40">40 % por eficiencia energética (con certificados)</option></select><small>Requisitos y plazos en la <a href="/deduccion-irpf-placas-solares/">página de la deducción</a>.</small></div>
</div></div>
<div class="cmp-actions"><button type="button" class="cmp-btn" id="cmpEx">Rellenar con un ejemplo</button><button type="button" class="cmp-btn" id="cmpClr">Borrar las ofertas</button></div>
<p class="cmp-note">El ejemplo usa cifras inventadas solo para ver cómo funciona la herramienta. No son precios de mercado ni de ninguna empresa.</p>
</form>
<div class="cmp-res" aria-live="polite"><h2>Resultado de la comparación</h2><div id="cmpOut"><p class="cmp-empty">Rellena al menos el precio y los kWp de una oferta para ver el resultado.</p></div></div>
</div></section>`;
const cmpBody = `<div class="pbody"><div class="prose">
<h2 id="como-usarlo">Cómo usar el comparador</h2>
<ol>
<li>Copia de cada presupuesto el precio total con IVA, los kWp y, si aparecen, la producción prometida y las garantías.</li>
<li>Calcula con <a href="${PVGIS}" rel="noopener">PVGIS</a> cuánto produce 1 kWp en tu tejado y ponlo en la casilla de producción. En nuestro análisis de <a href="/blog/cuanto-produce-1-kwp-espana/">cuánto produce 1 kWp en España</a> tienes valores de 12 ciudades como referencia.</li>
<li>Escribe tu consumo anual y el precio medio del kWh de tu factura.</li>
<li>Elige la deducción del IRPF que te corresponda y añade las subvenciones directas, si las tienes.</li>
<li>Mira qué oferta resulta mejor en euros por kWp, en amortización y en balance a 25 años.</li>
</ol>
<h2 id="que-mide">Qué mide la comparación y qué no</h2>
<p>Los euros por kWp son una referencia, no un veredicto. Una instalación pequeña sale más cara por kWp que una grande, y una oferta con batería no se puede comparar con otra sin ella. Por eso, cuando mezclas ofertas con y sin batería, la herramienta no marca el menor precio por kWp.</p>
<p>La amortización y el balance salen de las mismas fórmulas que la <a href="/calculadora-ahorro-placas-solares/#como-se-calcula">calculadora de ahorro</a>, con las cifras que escribes tú. El resultado depende de tu consumo, de cuánta producción aprovechas en casa y del precio de la electricidad, y nadie puede prometerte esas cifras de antemano.</p>
<div class="box"><p>No usamos precios de empresas ni guardamos tus datos: todo se calcula en tu navegador. Esta herramienta no es asesoramiento técnico, fiscal ni financiero. Antes de firmar, contrasta las cifras con el instalador y con las fuentes oficiales.</p></div>
<h2 id="pedir-por-escrito">Qué pedir por escrito a cada instalador</h2>
<ul>
<li>Marca y modelo concretos de paneles e inversor, y potencia total en kWp.</li>
<li>Los tres plazos de garantía: producto, rendimiento e instalación, y quién responde si la empresa desaparece.</li>
<li>Si el precio incluye trámites, legalización, batería y obra civil, y qué queda fuera.</li>
<li>Factura con IVA y forma de pago. La deducción del IRPF exige pago por tarjeta, transferencia, cheque nominativo o ingreso en cuenta, no en efectivo.</li>
<li>De dónde sale la producción anual que promete, si la indica.</li>
</ul>
<p>Los errores más habituales están explicados en <a href="/blog/errores-al-comparar-presupuestos-placas-solares/">errores al comparar presupuestos de placas solares</a>, y los pasos después de firmar, en la guía de <a href="/blog/tramites-instalar-placas-solares/">trámites para instalar placas solares</a>. Para saber si la inversión compensa en tu caso, mira <a href="/blog/si-compensa-instalar-placas-2026/">si compensa instalar placas en 2026</a>, y para ver las ayudas, la página de <a href="/subvenciones-placas-solares/">subvenciones</a>.</p>
<h2 id="preguntas">Preguntas frecuentes</h2>
${cmpFaq.map(([q, a]) => `<h3>${q}</h3><p>${a}</p>`).join('\n')}
<h2>Fuentes</h2><ul class="src">
<li><a href="${PVGIS}" rel="noopener">Comisión Europea: PVGIS, herramienta gratuita para estimar la producción fotovoltaica</a></li>
<li><a href="${AEAT_2026}" rel="noopener">Agencia Tributaria: novedades de normativa 2026, Real Decreto-ley 7/2026</a></li></ul>
</div></div>`;
pages.push({
  url: '/comparador-presupuestos-placas-solares/', kind: 'article', wide: true, noMeta: true, scripts: ['compare'], faq: cmpFaq,
  title: 'Comparador de placas solares: compara 3 presupuestos con tus datos | ComparaPaneles',
  desc: 'Compara hasta 3 presupuestos de placas solares: euros por kWp, ahorro, amortización y garantías con tus datos. Sin precios inventados.',
  h1: 'Comparador de presupuestos de placas solares',
  lede: 'Mete hasta tres ofertas y compara euros por kWp, ahorro, amortización y garantías con tus propios datos. Todo se calcula en tu navegador.',
  body: cmpTool + cmpBody,
});

export const notFound = { url: '/404.html', title: 'Página no encontrada | ComparaPaneles', desc: 'La página que buscas no existe.', h1: 'Página no encontrada', body: '<p>La dirección no existe o ha cambiado. Prueba con la <a href="/">página de inicio</a>, la <a href="/calculadora-ahorro-placas-solares/">calculadora</a> o el <a href="/blog/">blog</a>.</p>' };
