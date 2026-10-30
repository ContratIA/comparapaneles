# Cómo se genera la web

Las páginas HTML se generan con `node tools/build.mjs` (solo Node, sin dependencias).

- `tools/src/` : CSS y JS fuente (el build los copia a `assets/` con hash en el nombre)
- `tools/layout.mjs` : cabecera, pie, metadatos y JSON-LD comunes
- `tools/home.mjs` : portada y calculadora
- `tools/pages.mjs` : resto de páginas (IRPF, ayudas, guías, legales)

El build también escribe sitemap.xml, robots.txt y vercel.json, y falla si hay enlaces o anclas rotas,
h1 repetidos o title/description duplicados. Las fotos WebP de `assets/img/` son las originales de Pexels.
