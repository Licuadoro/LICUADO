# Editor de notícias de LICUADO (2026-09-28)
- Ruta privada: `/editor` (Route en App.jsx). Sin enlaces públicos en Home/licuado.js.
- Store: `src/lib/newsStore.js` — localStorage (`licuado_news_v1`) con seed de las 7 notícias originales; sincronización opcional con entidad Base44 `News` si existe (campos: title, date, text, extra_style, link_text, link_url, locations).
- Ubicaciones (locations): home, recientes, licuado, kronos, teia, creatorius, todas.
- Extras/botones replicados exactamente: Ir a Kronos, Ir a Teia, Creatorius, Notícias, LICUADO Scriptorium, Envía una señal, enlace personalizado.
- Home.jsx renderiza dinámicamente: #lq-home-news-container (prévia) y #lq-news-dynamic (categorías); escucha evento 'storage' para refrescar entre pestañas.
