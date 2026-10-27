# Editor de notícias de LICUADO (2026-09-30)
- Ruta privada: `/editor` (Route en App.jsx). Sin enlaces públicos en Home/licuado.js.
- Store: `src/lib/newsStore.js` — fuente de verdad = API remoto `src/lib/newsApi.js`
  (Cloudflare Worker + KV, código y guía en `cloudflare-worker/`). localStorage solo
  como caché/respaldo. Ya NO depende de Base44 ni sesiones (la web se publica desde
  Cloudflare Pages, estática). Config: VITE_NEWS_API_URL / VITE_NEWS_TOKEN.
- Ubicaciones (locations): home, recientes, licuado, kronos, teia, creatorius, todas.
- Extras/botones replicados exactamente: Ir a Kronos, Ir a Teia, Creatorius, Notícias, LICUADO Scriptorium, Envía una señal, enlace personalizado. Iconos SVG minimalistas (sin emojis).
- Home.jsx renderiza dinámicamente: #lq-home-news-container (prévia) y #lq-news-dynamic (categorías); escucha evento 'storage' para refrescar entre pestañas.
