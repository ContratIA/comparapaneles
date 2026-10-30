# Artículos nuevos para comparapaneles.com

Rama: `articulos-nuevos`. Cinco artículos en `content/articulos/`, datos de producción en `content/datos/pvgis-1kwp.json`, fotos en `content/fotos.json`.

Todo el contenido se ha contrastado con fuentes oficiales el 30/10/2026. No se ha inventado ninguna cifra, autor ni testimonio.

## Qué hay que hacer

1. Convierte cada `.md` en una página con la plantilla y el estilo actuales de la web. No cambies el diseño. La ruta sugerida es `/blog/<slug>`. Si usas otra, actualiza el enlace interno del artículo 5 (`/blog/cuanto-produce-1-kwp-espana`).
2. Descarga las fotos de `content/fotos.json` a `/assets/img/articulos/` con el nombre de `archivo`. Redimensiona a 1600 px de ancho como máximo y comprime.
3. Abre cada foto y confirma a ojo que coincide con su `alt`. Si no, corrige el `alt` y el pie. No inventes lo que no se ve.
4. Muestra bajo cada foto el pie de `fotos.json` con autor y licencia enlazados. Añade que la imagen está redimensionada. Crea una página «Créditos de imágenes» con las cinco.
5. Cada artículo: `<title>` y meta description del frontmatter, `<link rel="canonical">`, Open Graph, y JSON-LD `Article` con `datePublished` y `dateModified`. Sin autor inventado: usa la organización «Comparapaneles».
6. Añade las 5 URLs a `sitemap.xml` y un listado de artículos enlazado desde el menú.
7. Las tablas deben verse bien en móvil (scroll horizontal dentro de la tabla, sin romper la página).
8. Abre PR a `main` desde `articulos-nuevos`. No hagas merge.

## Reglas

- No cambies cifras ni textos legales. Si algo no cuadra, díselo a Eloy.
- No añadas testimonios, contadores, instaladores ni reseñas.
- No pongas anuncios dentro del primer pantallazo del artículo.

## Fuentes que sostienen cada artículo

| Artículo | Fuentes |
|---|---|
| 01 Producción de 1 kWp | PVGIS 5.3 (JRC), consulta del 30/10/2026, `content/datos/pvgis-1kwp.json` |
| 02 Deducción IRPF 2026 | RDL 7/2026 (BOE-A-2026-6544), art. 36; convalidación BOE-A-2026-7125; AEAT, novedades de normativa 2026 |
| 03 IBI e ICIO | RDL 2/2004 (BOE-A-2004-4214), arts. 74.5 y 103 |
| 04 Autoconsumo colectivo | RDL 7/2026, DF 14ª; RD 244/2019 consolidado (BOE-A-2019-5089), arts. 3, 4, 14 |
| 05 Producción mensual | PVGIS 5.3 (JRC), Madrid y Barcelona |

## Mantenimiento

El artículo 02 caduca el 31/12/2026 (la deducción solo vale para instalaciones terminadas en 2026). Revisarlo en enero de 2027 y avisar de que el plazo ha pasado o, si el Gobierno lo prorroga, actualizar con el BOE.
