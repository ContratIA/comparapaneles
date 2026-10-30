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
  url: '/deduccion-irpf-placas-solares/', kind: 'article', faq: irpfFaq,
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
  url: '/subvenciones-placas-solares/', kind: 'article',
  title: 'Subvenciones para placas solares: tipos de ayuda y cómo comprobarlas | ComparaPaneles',
  desc: 'Deducción en el IRPF, bonificaciones municipales y ayudas autonómicas para placas solares: qué existe, de qué depende y cómo comprobar si hay una convocatoria abierta.',
  h1: 'Subvenciones y ayudas para placas solares: qué existe y cómo comprobarlo',
  body: `<p class="lead">No hay una única ayuda nacional que podamos prometerte. Lo que existe son tres capas que conviene distinguir, porque cada una se pide en un sitio distinto y con condiciones propias.</p>
<div class="box"><p>Por eso <strong>no publicamos cifras del tipo «hasta X €»</strong> sin una convocatoria concreta detrás. Si una web te las promete sin enlazar la convocatoria oficial, desconfía.</p></div>
<h2>1. Deducción en el IRPF (estatal)</h2>
<p>Es la ayuda con información oficial más clara. Se aplica en la declaración de la renta y no se cobra por adelantado. Para instalaciones terminadas y pagadas en 2026, la deducción es del 10 % de lo pagado (20 % si eres propietario de una vivienda en un edificio de uso predominantemente residencial), con una base máxima de 5.000 euros. También existe la deducción por obras de eficiencia energética, que exige certificados. Detalle, plazos y fuentes en <a href="/deduccion-irpf-placas-solares/">Deducción en el IRPF por placas solares</a>.</p>
<h2>2. Bonificaciones municipales (IBI e ICIO)</h2>
<p>La ley permite que los ayuntamientos bonifiquen hasta el 50 % del IBI y hasta el 95 % del ICIO a quien instala placas solares, pero no les obliga. El porcentaje, la duración y los requisitos los fija cada ordenanza fiscal, así que cambian de un municipio a otro y algunos no ofrecen ninguna. Lo explicamos en <a href="/blog/bonificacion-ibi-icio-placas-solares/">Bonificación del IBI y del ICIO por instalar placas solares</a>.</p>
<h2>3. Ayudas directas de comunidades autónomas y ayuntamientos</h2>
<p>Se abren mediante convocatorias con plazos, presupuesto limitado y requisitos concretos. Pueden cerrarse en cuanto se agota el dinero. Algunas exigen solicitar la ayuda antes de empezar la instalación, así que no contrates sin leer las bases.</p>
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
  body: `<p>Puedes escribirnos a <a href="mailto:info@comparapaneles.com">info@comparapaneles.com</a> o usar el formulario para:</p>
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
<ul><li><strong>Titular:</strong> ${TITULAR}</li><li><strong>NIF:</strong> ${NIF}</li><li><strong>Domicilio:</strong> ${DOMICILIO}</li><li><strong>Correo electrónico:</strong> info@comparapaneles.com</li><li><strong>Dominio:</strong> comparapaneles.com</li></ul>
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
<p>${TITULAR}, con NIF ${NIF} y domicilio en ${DOMICILIO} (consulta el <a href="/aviso-legal/">aviso legal</a> para los datos completos). Contacto: <a href="mailto:info@comparapaneles.com">info@comparapaneles.com</a>.</p>
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
<p>Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a info@comparapaneles.com. Si consideras que no hemos tratado tus datos correctamente, puedes reclamar ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" rel="noopener">aepd.es</a>).</p>`,
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

export const notFound = { url: '/404.html', title: 'Página no encontrada | ComparaPaneles', desc: 'La página que buscas no existe.', h1: 'Página no encontrada', body: '<p>La dirección no existe o ha cambiado. Prueba con la <a href="/">página de inicio</a>, la <a href="/calculadora-ahorro-placas-solares/">calculadora</a> o el <a href="/blog/">blog</a>.</p>' };
