// Fotos reales de Pexels (licencia Pexels: uso libre, sin atribución obligatoria; se acredita igualmente).
// Las de artículos se recortan a 3:2 y se redimensionan a 640 y 1200 px de ancho.
const P = 'https://www.pexels.com/photo/';

export const articlePhotos = {
  'cuanto-produce-1-kwp-espana': { id: 27863809, author: 'Budget Bizar', page: P + 'a-roof-with-solar-panels-on-it-27863809/', alt: 'Paneles solares sobre un tejado de teja, vistos desde arriba' },
  'deduccion-irpf-placas-solares-2026': { id: 5900226, author: 'Kaboompics.com', page: P + 'close-up-of-a-person-using-a-calculator-5900226/', alt: 'Mano con un bolígrafo dorado sobre una calculadora azul' },
  'bonificacion-ibi-icio-placas-solares': { id: 18235766, author: 'Abdulrhman Alkady', page: P + 'facade-of-the-valencia-town-hall-plaza-del-ayuntamiento-valencia-spain-18235766/', alt: 'Cúpula y torre de la fachada del Ayuntamiento de Valencia', cap: 'Ayuntamiento de Valencia. Imagen ilustrativa: solo muestra un ayuntamiento y no indica que Valencia aplique esta bonificación.' },
  'autoconsumo-colectivo-rdl-7-2026': { id: 7339349, author: 'Tom Fisk', page: P + 'aerial-view-of-a-residential-area-7339349/', alt: 'Vista aérea de bloques de viviendas con paneles solares en las cubiertas' },
  'produccion-solar-mes-a-mes-madrid-barcelona': { id: 12243093, author: 'Robert So', page: P + 'a-house-with-solar-panel-on-the-roof-12243093/', alt: 'Casa con paneles solares en el tejado y una ladera con viviendas al fondo' },
  'autoconsumo-con-excedentes-compensacion-simplificada': { id: 22032343, author: 'Vladimir Srajber', page: P + 'a-building-with-solar-panels-22032343/', alt: 'Fila de paneles solares en la cubierta de un edificio, con cielo azul y nubes' },
  'tramites-instalar-placas-solares': { id: 8482646, author: 'Thirdman', page: P + 'a-man-in-black-long-sleeve-shirt-holding-white-paper-on-concrete-wall-8482646/', alt: 'Hombre con casco y mascarilla señalando un plano pegado en una pared' },
  'leer-factura-luz-dimensionar-instalacion': { id: 29576210, author: 'Евгений Качин', page: P + 'electric-meters-on-brick-wall-in-kaliningrad-29576210/', alt: 'Cinco contadores eléctricos y una caja de protección en una pared de ladrillo pintado' },
  'si-compensa-instalar-placas-2026': { id: 9875685, author: 'Kindel Media', page: P + 'aerial-view-of-two-houses-with-roof-tiles-9875685/', alt: 'Vista aérea de tejados de viviendas, con paneles solares en uno de ellos' },
  'baterias-solares-cuando-compensan': { id: 39057090, author: 'Elite Power Group', page: P + 'electrician-installing-residential-battery-storage-39057090/', alt: 'Técnico de espaldas junto a una batería doméstica blanca montada en una pared de ladrillo' },
  'bateria-virtual-que-es-y-cuando-compensa': { id: 259588, w: 1000, author: 'Pixabay', page: P + 'beige-bungalow-house-259588/', alt: 'Vivienda unifamiliar de ladrillo con jardín y camino de entrada', cap: 'Una vivienda cualquiera: la batería virtual no se instala, vive en la factura.' },
  'errores-al-comparar-presupuestos-placas-solares': { id: 8730976, author: 'Mikhail Nilov', page: P + 'a-close-up-shot-of-a-person-pointing-on-a-document-using-a-pen-8730976/', alt: 'Mano señalando con un bolígrafo un párrafo de un documento impreso' },
};

// Fotos de la portada (las originales de la web)
export const homePhotos = [
  { id: 9875449, author: 'Kindel Media', page: P + 'a-person-carrying-a-solar-panel-9875449/', use: 'Portada: cabecera y franja de foto', alt: 'Operario con guante amarillo sujetando un panel solar fotovoltaico' },
  { id: 2800832, author: 'K', page: P + 'top-view-photo-of-solar-panels-2800832/', use: 'Portada: sección de ayudas', alt: 'Vista aérea de filas de paneles solares sobre césped' },
  { id: 9875441, author: 'Kindel Media', page: P + 'a-person-in-black-shirt-holding-a-solar-panel-while-standing-on-the-roof-9875441/', use: 'Portada: sección de presupuestos', alt: 'Operario con guantes cargando un panel solar sobre un tejado de teja' },
  { id: 356036, author: 'Pixabay', page: P + 'blue-solar-panel-board-356036/', use: 'Portada: sección del blog', alt: 'Paneles solares bajo un cielo azul con nubes' },
  { id: 259588, author: 'Pixabay', page: P + 'beige-bungalow-house-259588/', use: 'Portada: sección «cómo usar esta web»', alt: 'Vivienda unifamiliar de ladrillo con jardín y camino de entrada' },
];
