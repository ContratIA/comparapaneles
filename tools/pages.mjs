import { DATE_ES } from './layout.mjs';

const AEAT_RESUMEN = 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c16-deducciones-generales-cuota/deducciones-obras-mejora-eficiencia-energetica-viviendas/cuadro-resumen-deducciones-obras-eficiencia-viviendas.html';
const AEAT_RDL = 'https://www3.agenciatributaria.gob.es/static_files/Sede/Actualidad/Novedades/2025/BOLINFORM_RDL_16_2025.pdf';
const AEAT_REHAB = 'https://sede.agenciatributaria.gob.es/Sede/irpf/campana-renta/deducciones-eficiencia-energetica/deduccion-obras-rehabilitacion-energetica.html';
const PVGIS = 'https://re.jrc.ec.europa.eu/pvg_tools/es/';

const SRC_IRPF = `<h2>Fuentes</h2><ul class="src">
<li><a href="${AEAT_RESUMEN}" rel="noopener">Agencia Tributaria — Cuadro-resumen: deducciones por obras de mejora de eficiencia energética en viviendas</a></li>
<li><a href="${AEAT_RDL}" rel="noopener">Agencia Tributaria — Boletín informativo sobre el Real Decreto-ley 16/2025 (ampliación de plazos)</a></li>
<li><a href="${AEAT_REHAB}" rel="noopener">Agencia Tributaria — Deducción por obras de rehabilitación energética</a></li></ul>`;

export const guides = [
  { slug: 'como-comparar-presupuestos-placas-solares', title: 'Cómo comparar presupuestos de placas solares', desc: 'Lista de comprobación para comparar presupuestos de instalación fotovoltaica: qué debe incluir, qué preguntar y qué señales de alarma evitar.' },
  { slug: 'cuantos-paneles-solares-necesito', title: 'Cuántos paneles solares necesito en casa', desc: 'Método paso a paso para calcular la potencia y el número de paneles a partir de tu consumo, con un ejemplo con cuentas.' },
  { slug: 'autoconsumo-con-excedentes-o-sin-excedentes', title: 'Autoconsumo con excedentes o sin excedentes', desc: 'Diferencias entre instalar placas con vertido a la red o sin él, y cómo funciona la compensación simplificada de excedentes.' },
  { slug: 'tramites-instalar-placas-solares', title: 'Trámites para instalar placas solares en una vivienda', desc: 'Pasos habituales para legalizar una instalación de autoconsumo: proyecto, permisos municipales, certificados y contrato con la comercializadora.' },
  { slug: 'mantenimiento-y-vida-util-placas-solares', title: 'Mantenimiento y vida útil de las placas solares', desc: 'Qué mantenimiento necesita una instalación fotovoltaica, cuánto suelen durar paneles e inversor y qué garantías conviene exigir.' },
];

export const guideCard = (g) => `<a class="gc" href="/guias/${g.slug}/"><div class="gc-b"><div class="gc-k">Guía</div><h3>${g.title}</h3><p>${g.desc}</p><span class="go">Leer guía →</span></div></a>`;

export const pages = [];
export { PVGIS };

/* ---------- IRPF ---------- */
const irpfFaq = [
  ['¿Cuánto puedo deducir en el IRPF por instalar placas solares?', 'Si la instalación te permite aplicar la deducción del 40 % por reducir el consumo de energía primaria no renovable, la base máxima anual es de 7.500 €, por lo que la deducción máxima anual es de 3.000 €.'],
  ['¿Las placas solares dan derecho automático a deducción?', 'No. La deducción depende de acreditar, con certificados de eficiencia energética anterior y posterior a las obras, la mejora mínima exigida por la normativa.'],
  ['¿Hasta cuándo se pueden hacer las obras para aplicar la deducción?', 'Según la Agencia Tributaria, el Real Decreto-ley 16/2025 amplía hasta el 31 de diciembre de 2026 las obras de las dos primeras deducciones. Conviene confirmar el plazo vigente antes de contratar.'],
];
pages.push({
  url: '/deduccion-irpf-placas-solares/', kind: 'article', faq: irpfFaq,
  title: 'Deducción IRPF por placas solares: 40 %, límites y requisitos | ComparaPaneles',
  desc: 'Qué dice la Agencia Tributaria sobre las deducciones del 20 %, 40 % y 60 % por obras de eficiencia energética: bases máximas, requisitos, plazos y ejemplos de cálculo.',
  h1: 'Deducción en el IRPF por placas solares: requisitos y límites',
  body: `<p class="lead">Instalar placas solares no da, por sí solo, derecho a una deducción en la renta. Existen tres deducciones estatales por obras de mejora de la eficiencia energética de la vivienda, y una instalación fotovoltaica puede encajar si acredita la mejora exigida con certificados energéticos.</p>
<div class="box ok"><p><strong>Resumen.</strong> La deducción del 40 % tiene una base máxima de 7.500 € al año: como máximo, <strong>3.000 € de deducción anual</strong>. Exige certificado de eficiencia energética antes y después de las obras y una mejora mínima acreditada.</p></div>
<nav class="toc" aria-label="Contenido"><strong>En esta página</strong><ol><li><a href="#tres">Las tres deducciones</a></li><li><a href="#placas">¿Encajan las placas solares?</a></li><li><a href="#plazos">Plazos</a></li><li><a href="#calculo">Cómo se calcula</a></li><li><a href="#preguntas">Preguntas frecuentes</a></li></ol></nav>
<h2 id="tres">Las tres deducciones</h2>
<div class="tablewrap"><table>
<thead><tr><th>Deducción</th><th>Porcentaje</th><th>Base máxima</th><th>Mejora que hay que acreditar</th></tr></thead>
<tbody>
<tr><td>Reducción de la demanda de calefacción y refrigeración</td><td>20 %</td><td>5.000 € al año</td><td>Reducir al menos un 7 % la suma de los indicadores de demanda de calefacción y refrigeración.</td></tr>
<tr><td>Reducción del consumo de energía primaria no renovable</td><td>40 %</td><td>7.500 € al año</td><td>Reducir al menos un 30 % ese indicador, o alcanzar calificación energética A o B.</td></tr>
<tr><td>Rehabilitación energética de edificios residenciales</td><td>60 %</td><td>5.000 € al año, con un límite acumulado de 15.000 €</td><td>La misma que la anterior, referida al certificado del edificio.</td></tr>
</tbody></table></div>
<p>Las dos primeras se aplican a la vivienda habitual o a una vivienda alquilada (o en expectativa de alquiler). Quedan excluidas las segundas residencias, las viviendas turísticas, la parte afecta a una actividad económica y los garajes, trasteros, jardines, piscinas e instalaciones deportivas. En la tercera, si las obras las hace una comunidad de propietarios, se aplica tu coeficiente de participación.</p>
<h2 id="placas">¿Encajan las placas solares?</h2>
<p>La página de la Agencia Tributaria que resume estas deducciones no cita las placas fotovoltaicas de forma expresa: lo que decide es si los certificados de eficiencia energética de antes y después reflejan la mejora exigida. Una instalación de autoconsumo reduce la energía que tomas de la red, por lo que puede ser la vía para la deducción del 40 %, pero <strong>no es automático</strong>: depende de que el certificado posterior acredite una reducción de al menos el 30 % del indicador de consumo de energía primaria no renovable, o la calificación A o B.</p>
<p>Antes de firmar, pregunta al técnico que emitirá los certificados si tu vivienda alcanzaría ese umbral con la instalación prevista.</p>
<h2 id="plazos">Plazos</h2>
<p>El manual de la Renta 2025 recoge como plazo de las obras el 31 de diciembre de 2025. Después, según el boletín de la Agencia Tributaria sobre el Real Decreto-ley 16/2025, con efectos desde el 1 de enero de 2025:</p>
<ul>
<li>Las obras de las deducciones del 20 % y del 40 % pueden realizarse hasta el <strong>31 de diciembre de 2026</strong> (si la vivienda está en expectativa de alquiler, debe alquilarse antes del 31 de diciembre de 2027).</li>
<li>En edificios de uso predominantemente residencial (deducción del 60 %), cuentan las cantidades pagadas hasta el <strong>31 de diciembre de 2027</strong>.</li>
</ul>
<div class="box"><p>Estos plazos se han prorrogado varias veces. Comprueba siempre en la Agencia Tributaria el plazo vigente antes de contratar, y planifica la obra y el certificado posterior con margen.</p></div>
<h2 id="calculo">Cómo se calcula</h2>
<p>La base es lo que has pagado por las obras con un medio distinto del efectivo de curso legal. No incluye el coste de instalar o sustituir equipos que usen combustibles fósiles, y se resta el importe de las subvenciones recibidas.</p>
<ul>
<li>Obra de 6.000 € sin subvenciones: 40 % × 6.000 = <strong>2.400 €</strong> de deducción.</li>
<li>Obra de 12.000 € sin subvenciones: la base se limita a 7.500 €, así que 40 % × 7.500 = <strong>3.000 €</strong>.</li>
<li>Obra de 6.000 € con 2.000 € de subvención: base de 4.000 €, así que 40 % × 4.000 = <strong>1.600 €</strong>.</li>
</ul>
<p>Guarda los certificados energéticos, las facturas y los justificantes de pago. Puedes probar escenarios en la <a href="/calculadora-ahorro-placas-solares/">calculadora</a>.</p>
<h2 id="preguntas">Preguntas frecuentes</h2>
${irpfFaq.map(([q, a]) => `<h3>${q}</h3><p>${a}</p>`).join('')}
<p class="src">Esta página es informativa y no sustituye el asesoramiento de un profesional. Revisada el ${DATE_ES}.</p>
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
<p>Es la ayuda fiscal con más información oficial. Se aplica en la declaración de la renta, no se cobra por adelantado y exige certificados de eficiencia energética. La más relevante para una instalación solar es la del 40 %, con un máximo de 3.000 € de deducción al año. Detalle, plazos y fuentes en <a href="/deduccion-irpf-placas-solares/">Deducción en el IRPF por placas solares</a>.</p>
<h2>2. Bonificaciones municipales (IBI e ICIO)</h2>
<p>Algunos ayuntamientos bonifican el Impuesto sobre Bienes Inmuebles (IBI) y el Impuesto sobre Construcciones, Instalaciones y Obras (ICIO) a quien instala placas solares. El porcentaje, la duración y los requisitos los fija cada ordenanza fiscal, así que cambian de un municipio a otro y algunos no ofrecen ninguna. Lo más fiable es consultar la ordenanza fiscal de tu ayuntamiento o preguntar en su oficina de atención.</p>
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
<p>Más criterios en <a href="/guias/como-comparar-presupuestos-placas-solares/">Cómo comparar presupuestos de placas solares</a>.</p>
<p class="src">Información orientativa revisada el ${DATE_ES}. Las convocatorias cambian con frecuencia: verifica siempre en la fuente oficial.</p>
${SRC_IRPF}`,
});

/* ---------- GUIAS ---------- */
pages.push({
  url: '/guias/', kind: 'article',
  title: 'Guías sobre placas solares y autoconsumo | ComparaPaneles',
  desc: 'Guías prácticas sobre autoconsumo solar en España: comparar presupuestos, dimensionar la instalación, excedentes, trámites y mantenimiento.',
  h1: 'Guías sobre placas solares y autoconsumo',
  body: `<p class="lead">Explicaciones prácticas para decidir con criterio. Cada guía indica su fecha de revisión.</p>`, after: `<div class="guide-grid" style="margin-top:48px">${guides.map(guideCard).join('')}</div>`,
});

const G = {};
G['como-comparar-presupuestos-placas-solares'] = {
  faq: [
    ['¿Cuántos presupuestos conviene pedir?', 'Tres suele ser un buen punto de partida: permite detectar diferencias de potencia, materiales y condiciones, y descartar ofertas fuera de lo normal.'],
    ['¿Es mejor el presupuesto más barato?', 'No necesariamente. Compara siempre potencia (kWp), marca y modelo de paneles e inversor, garantías y qué trámites incluye, porque dos importes iguales pueden cubrir instalaciones distintas.'],
  ],
  body: `<p class="lead">Dos presupuestos con el mismo importe pueden describir instalaciones muy distintas. Esta lista te ayuda a comparar lo comparable.</p>
<h2>1. Compara con la misma vara</h2>
<p>Antes de mirar el precio, anota en una tabla para cada oferta: potencia total en kWp, número y modelo de paneles, marca y modelo del inversor, si incluye batería y la producción anual estimada. Divide el precio entre los kWp para tener una referencia de euros por kWp, pero ten en cuenta que cambia con el tamaño de la instalación y con las condiciones del tejado.</p>
<h2>2. Qué debe aparecer por escrito</h2>
<ul>
<li>Marca y modelo concretos de paneles e inversor (no «paneles de primera calidad»).</li>
<li>Estructura y anclajes, y cómo se resolverá la impermeabilización si se perfora la cubierta.</li>
<li>Protecciones eléctricas, cableado y monitorización.</li>
<li>Trámites incluidos: proyecto o memoria técnica, permisos municipales, certificado de instalación, registro y contrato con la comercializadora.</li>
<li>IVA o impuestos indicados de forma clara y forma de pago por hitos.</li>
<li>Plazo de ejecución y qué ocurre si se retrasa.</li>
</ul>
<h2>3. Garantías: distingue tres</h2>
<p>La garantía del producto (defectos de fabricación), la de rendimiento (potencia mínima garantizada tras los años que indique el fabricante) y la de la instalación (mano de obra). Pide los plazos de cada una por escrito y quién responde si el instalador desaparece: conviene saber si el fabricante atiende reclamaciones directas.</p>
<h2>4. Pide una visita técnica</h2>
<p>Un presupuesto serio parte de una visita o, al menos, de un estudio de tu tejado: orientación, inclinación, sombras, estado de la cubierta y cuadro eléctrico. Si te dan precio cerrado sin ver nada, desconfía.</p>
<h2>5. Señales de alarma</h2>
<ul>
<li>Descuentos «solo hoy» o presión para firmar en la primera visita.</li>
<li>Ahorros garantizados sin conocer tu consumo.</li>
<li>Ayudas prometidas sin indicar la convocatoria (<a href="/subvenciones-placas-solares/">cómo comprobarlas</a>).</li>
<li>Presupuestos sin desglosar o sin marcas y modelos.</li>
<li>Falta de datos de la empresa o imposibilidad de contactar tras la firma.</li>
</ul>
<h2>6. Haz tus propias cuentas</h2>
<p>Introduce el importe de cada oferta en la <a href="/calculadora-ahorro-placas-solares/">calculadora</a> y compara la amortización con tus datos reales de consumo. Si buscas deducir en el IRPF, revisa antes los <a href="/deduccion-irpf-placas-solares/">requisitos</a>, porque condicionan qué certificados necesitas.</p>`,
};
G['cuantos-paneles-solares-necesito'] = {
  faq: [['¿Cuántos paneles necesito para una vivienda?', 'Depende del consumo anual, de la producción por kWp en tu zona y de cuánto quieras cubrir. Se calcula dividiendo el consumo a cubrir entre la producción anual de un kWp y convirtiendo los kWp en paneles según su potencia.']],
  body: `<p class="lead">No hay un número válido para todas las casas. Se calcula a partir de tu consumo y de lo que produce un kWp en tu ubicación.</p>
<h2>Paso 1: tu consumo anual</h2>
<p>Suma los kWh de las facturas de los últimos doce meses, o consulta el histórico en el área de cliente de tu distribuidora. Mira también cuándo consumes: si estás fuera de casa durante el día, aprovecharás menos producción directamente.</p>
<h2>Paso 2: lo que produce un kWp en tu zona</h2>
<p>Un kWp es 1.000 vatios de potencia pico instalada. Lo que produce al año depende de la ubicación, la orientación y la inclinación. Usa <a href="${PVGIS}" rel="noopener">PVGIS</a>, la herramienta de la Comisión Europea, indicando tu dirección, la orientación del tejado y su inclinación. Te dará los kWh anuales por kWp.</p>
<h2>Paso 3: la potencia que necesitas</h2>
<p>Fórmula: <strong>potencia (kWp) = consumo que quieres cubrir (kWh/año) ÷ producción por kWp (kWh/año)</strong>.</p>
<div class="box"><p><strong>Ejemplo con números inventados para ilustrar el cálculo.</strong> Consumo de 3.500 kWh al año y una producción de 1.500 kWh por kWp. Si quieres generar el equivalente a todo tu consumo: 3.500 ÷ 1.500 ≈ 2,3 kWp. No todo lo producido se consume a la vez, por lo que muchas instalaciones se dimensionan en función del consumo diurno y no del total.</p></div>
<h2>Paso 4: de kWp a paneles</h2>
<p>Divide la potencia entre la de cada panel. Con paneles de 430 W (0,43 kWp), 2,3 kWp son unos 5 o 6 paneles. Un panel actual suele ocupar alrededor de 1,7 a 2 m², pero revisa la ficha técnica del modelo concreto.</p>
<h2>Qué más limita el tamaño</h2>
<ul>
<li>El espacio útil de la cubierta, sin sombras y con acceso para mantenimiento.</li>
<li>La potencia contratada y las limitaciones de la instalación eléctrica.</li>
<li>Si la instalación es con o sin excedentes (<a href="/guias/autoconsumo-con-excedentes-o-sin-excedentes/">ver diferencias</a>).</li>
<li>Tu presupuesto y la amortización que busques.</li>
</ul>
<p>Prueba distintos tamaños en la <a href="/calculadora-ahorro-placas-solares/">calculadora de ahorro</a> y compara cómo cambia el resultado.</p>`,
};
G['autoconsumo-con-excedentes-o-sin-excedentes'] = {
  faq: [['¿Qué son los excedentes en autoconsumo?', 'Es la energía que tu instalación produce y que no consumes en ese momento. Si estás conectado a la red, puede verterse y, según la modalidad, ser compensada en la factura.']],
  body: `<p class="lead">Una instalación de autoconsumo puede estar pensada para no verter nada a la red o para verter lo que sobra. La elección condiciona el equipo, los trámites y el ahorro.</p>
<h2>Autoconsumo sin excedentes</h2>
<p>Un sistema antivertido impide que la energía sobrante salga a la red. Es más sencillo en trámites, pero la producción que no consumes en ese momento se pierde, salvo que la almacenes en una batería. Suele tener sentido cuando se dimensiona ajustado al consumo diurno.</p>
<h2>Autoconsumo con excedentes</h2>
<p>La energía sobrante se vierte a la red. El Real Decreto 244/2019, que regula el autoconsumo en España, distingue dos modalidades dentro de esta opción:</p>
<ul>
<li><strong>Acogida a compensación simplificada</strong>: pensada para instalaciones de pequeña potencia (hasta 100 kW). Tu comercializadora descuenta en la factura el valor de los excedentes, con la limitación de que el resultado de la factura de energía no puede ser negativo.</li>
<li><strong>No acogida a compensación</strong>: los excedentes se venden en el mercado, con obligaciones adicionales, y no suele ser la opción para una vivienda.</li>
</ul>
<p>Las condiciones de la compensación (precio al que se valoran los excedentes, periodos de facturación) las fija tu comercializadora dentro del marco normativo: pídelas por escrito antes de decidir.</p>
<h2>Cómo elegir</h2>
<ul>
<li>Si consumes poco durante el día, los excedentes serán mayores y compensarlos tiene más peso en el cálculo.</li>
<li>Si el valor de los excedentes que te ofrecen es bajo, el ahorro depende sobre todo de lo que consumas directamente.</li>
<li>Una batería permite consumir por la noche parte de lo producido de día, pero añade coste: haz el cálculo con y sin ella.</li>
</ul>
<p>En la <a href="/calculadora-ahorro-placas-solares/">calculadora</a> puedes fijar a cero el valor de los excedentes (sin excedentes) o poner el que te ofrezca tu comercializadora, y ver cómo cambia la amortización.</p>
<p class="src">Referencia normativa: Real Decreto 244/2019, de 5 de abril, por el que se regulan las condiciones administrativas, técnicas y económicas del autoconsumo de energía eléctrica. Comprueba las condiciones vigentes en el BOE y con tu comercializadora.</p>`,
};
G['tramites-instalar-placas-solares'] = {
  faq: [['¿Quién hace los trámites de la instalación?', 'Normalmente los gestiona el instalador, pero debe figurar por escrito en el presupuesto qué trámites incluye y quién es el responsable de cada uno.']],
  body: `<p class="lead">Los pasos exactos varían según la comunidad autónoma, el ayuntamiento y la potencia de la instalación. Este es el recorrido habitual para que sepas qué pedir y qué revisar.</p>
<h2>1. Estudio previo y proyecto</h2>
<p>El instalador estudia tu tejado y tu consumo. Según la potencia y la normativa autonómica, hará una memoria técnica o un proyecto firmado por un técnico competente.</p>
<h2>2. Permisos municipales</h2>
<p>Muchos ayuntamientos piden licencia de obra, comunicación previa o declaración responsable, y pueden exigir el pago del ICIO. Algunas ordenanzas contemplan bonificaciones (<a href="/subvenciones-placas-solares/">más información</a>). Pregunta qué exige tu ayuntamiento y quién lo presenta.</p>
<h2>3. Comunidad de propietarios</h2>
<p>Si vives en un edificio y quieres instalar en zonas comunes, hay que seguir el procedimiento que marca la normativa de propiedad horizontal y la junta de propietarios. Pide asesoramiento al administrador de fincas.</p>
<h2>4. Instalación y certificado</h2>
<p>Terminada la obra, se emite la documentación técnica y el certificado de la instalación eléctrica correspondiente, que se registra ante el órgano competente de tu comunidad autónoma.</p>
<h2>5. Contrato con la distribuidora y la comercializadora</h2>
<p>Hay que comunicar la instalación a la distribuidora y, si vas a verter excedentes con compensación, formalizar el contrato correspondiente con tu comercializadora (<a href="/guias/autoconsumo-con-excedentes-o-sin-excedentes/">ver modalidades</a>).</p>
<h2>6. Documentos que debes guardar</h2>
<ul>
<li>Presupuesto aceptado, contrato y facturas.</li>
<li>Justificantes de pago (si buscas deducir en el IRPF, el pago no puede ser en efectivo).</li>
<li>Memoria técnica o proyecto y certificado de la instalación.</li>
<li>Certificados de eficiencia energética anterior y posterior, si piensas aplicar la <a href="/deduccion-irpf-placas-solares/">deducción</a>.</li>
<li>Garantías del fabricante y del instalador.</li>
</ul>
<p class="src">Consulta siempre los requisitos vigentes en tu comunidad autónoma y en tu ayuntamiento.</p>`,
};
G['mantenimiento-y-vida-util-placas-solares'] = {
  faq: [['¿Cuánto duran las placas solares?', 'Los fabricantes suelen ofrecer garantías de rendimiento de entre 25 y 30 años, con una pérdida gradual de potencia. El inversor suele ser el componente que antes puede necesitar sustitución. Comprueba las garantías concretas de cada equipo.']],
  body: `<p class="lead">Una instalación fotovoltaica requiere poco mantenimiento, pero no ninguno. Conviene saber qué revisar y qué garantías exigir.</p>
<h2>Qué mantenimiento necesita</h2>
<ul>
<li><strong>Limpieza</strong>: la lluvia limpia parte de la suciedad, pero el polvo, el polen o los excrementos de aves pueden reducir la producción. Limpia con agua y sin productos abrasivos, y nunca subas al tejado si no es seguro: contrata a profesionales.</li>
<li><strong>Inspección visual</strong>: revisa de vez en cuando que no haya sombras nuevas (árboles, antenas), paneles dañados, cables sueltos o humedades en la cubierta.</li>
<li><strong>Seguimiento de la producción</strong>: la mayoría de inversores ofrecen una aplicación. Una caída sostenida frente a lo esperado es la señal para llamar al instalador.</li>
<li><strong>Revisión eléctrica</strong>: algunas empresas ofrecen planes de mantenimiento periódicos; valora si compensa según el tamaño de la instalación.</li>
</ul>
<h2>Vida útil y garantías</h2>
<p>Los paneles pierden potencia de forma gradual. Los fabricantes suelen garantizar un rendimiento mínimo tras 25 o 30 años, y la pérdida anual típica se suele situar por debajo del uno por ciento, pero depende del modelo: comprueba la ficha técnica. El inversor suele tener una vida más corta que los paneles, así que conviene prever su posible sustitución durante la vida de la instalación. Las baterías tienen su propia garantía, normalmente definida por ciclos o por años.</p>
<h2>Qué pedir por escrito</h2>
<ul>
<li>Años de garantía de producto y de rendimiento de paneles, inversor y batería.</li>
<li>Garantía de la instalación y de la impermeabilización de la cubierta.</li>
<li>Quién atiende las averías y en qué plazos.</li>
<li>Si el fabricante responde directamente en caso de que el instalador cierre.</li>
</ul>
<p>Cuando compares ofertas, tenlo en cuenta: <a href="/guias/como-comparar-presupuestos-placas-solares/">guía para comparar presupuestos</a>. Y para incluir el mantenimiento en tus cuentas, ajusta el cálculo en la <a href="/calculadora-ahorro-placas-solares/">calculadora</a> con un coste de instalación más conservador.</p>`,
};

for (const g of guides) {
  pages.push({
    url: `/guias/${g.slug}/`, kind: 'article', title: `${g.title} | ComparaPaneles`, desc: g.desc, h1: g.title,
    faq: G[g.slug].faq, crumbs: [['Guías', '/guias/']], body: G[g.slug].body,
  });
}

/* ---------- LEGAL Y EDITORIAL ---------- */
const PEND = '<strong>[PENDIENTE: completar antes de publicar]</strong>';
pages.push({
  url: '/sobre-nosotros/', kind: 'plain', title: 'Sobre ComparaPaneles: criterios editoriales | ComparaPaneles',
  desc: 'Qué es ComparaPaneles, cómo elaboramos el contenido, cómo se financia el sitio y cómo corregimos errores.', h1: 'Sobre ComparaPaneles',
  body: `<p class="lead">ComparaPaneles es un sitio informativo sobre autoconsumo solar en España.</p>
<h2>Qué hacemos y qué no</h2>
<p>Explicamos cómo funcionan las placas solares, cómo calcular si te compensan y cómo comparar presupuestos. <strong>No vendemos ni instalamos placas solares, no intermediamos presupuestos y no recomendamos instaladores concretos.</strong></p>
<h2>Cómo elaboramos el contenido</h2>
<ul>
<li>Las cifras fiscales se contrastan con fuentes oficiales, que enlazamos al final de cada página.</li>
<li>Cuando un dato depende de tu comunidad autónoma, tu ayuntamiento o tu comercializadora, lo decimos en lugar de inventar una cifra.</li>
<li>Los ejemplos con números están señalados como ejemplos.</li>
<li>Cada página indica su fecha de revisión.</li>
</ul>
<h2>Cómo se financia</h2>
<p>El sitio puede mostrar publicidad de terceros. Los anuncios no influyen en el contenido editorial.</p>
<h2>Errores y correcciones</h2>
<p>Si detectas una cifra desactualizada o un error, escríbenos desde la <a href="/contacto/">página de contacto</a> indicando la página y la fuente. Lo revisaremos y corregiremos.</p>
<p class="src">Esta web ofrece información general y no constituye asesoramiento fiscal, jurídico ni técnico.</p>`,
  crumbs: [],
});
pages.push({
  url: '/contacto/', kind: 'plain', title: 'Contacto | ComparaPaneles', desc: 'Cómo contactar con ComparaPaneles para consultas, correcciones o ejercicio de derechos de protección de datos.', h1: 'Contacto',
  body: `<p>Puedes escribirnos a <a href="mailto:info@comparapaneles.com">info@comparapaneles.com</a> para:</p>
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
  crumbs: [],
});
pages.push({
  url: '/aviso-legal/', kind: 'plain', title: 'Aviso legal | ComparaPaneles', desc: 'Aviso legal de ComparaPaneles: titular, condiciones de uso y responsabilidad.', h1: 'Aviso legal',
  body: `<h2>Titular del sitio</h2>
<p>En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico:</p>
<ul><li><strong>Titular:</strong> ${PEND}</li><li><strong>NIF:</strong> ${PEND}</li><li><strong>Domicilio:</strong> ${PEND}</li><li><strong>Correo electrónico:</strong> info@comparapaneles.com</li><li><strong>Dominio:</strong> comparapaneles.com</li></ul>
<h2>Objeto</h2>
<p>Este sitio ofrece información general sobre autoconsumo solar en España. El acceso es gratuito.</p>
<h2>Carácter informativo</h2>
<p>Los contenidos, cálculos y ejemplos son orientativos. No constituyen asesoramiento fiscal, jurídico, financiero ni técnico. Antes de tomar decisiones, contrasta la información con fuentes oficiales y con profesionales cualificados. Los resultados de la calculadora dependen de los datos que introduzcas y de supuestos editables.</p>
<h2>Publicidad</h2>
<p>El sitio puede mostrar publicidad de terceros. Los anuncios están identificados como tales y no forman parte del contenido editorial.</p>
<h2>Propiedad intelectual</h2>
<p>Los textos y el diseño del sitio están protegidos por la normativa de propiedad intelectual. Se permite citar fragmentos breves con enlace a la página de origen.</p>
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
<p>${PEND} (consulta el <a href="/aviso-legal/">aviso legal</a> para los datos completos). Contacto: <a href="mailto:info@comparapaneles.com">info@comparapaneles.com</a>.</p>
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

export const notFound = { url: '/404.html', title: 'Página no encontrada | ComparaPaneles', desc: 'La página que buscas no existe.', h1: 'Página no encontrada', body: '<p>La dirección no existe o ha cambiado. Prueba con la <a href="/">página de inicio</a>, la <a href="/calculadora-ahorro-placas-solares/">calculadora</a> o las <a href="/guias/">guías</a>.</p>' };
