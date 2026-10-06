# LICUADO · News API (Cloudflare Worker + KV)

Backend compartido para las notícias del editor (`/editor`). Resuelve el problema
de que las notícias guardadas en `localStorage` solo se vieran en tu navegador:
aquí la fuente de verdad vive en la nube, así que **todos** los visitantes
(modo incógnito, móvil, otros dispositivos) ven as mesmas notícias.

Es 100 % compatible con publicar la web desde **Cloudflare Pages**: la web es
solo estática y llama a este Worker por HTTP. No necesita LICUADO API externo ni sesiones.

## Despliegue manual (recomendado, ~5 minutos)

1. **Worker**: Cloudflare Dashboard → *Workers & Pages* → *Create application* →
   *Start with Hello World* → nombre `licuado-news` → Edit code → pega el
   contenido de `worker.js` → Deploy.
2. **KV**: Dashboard → *Storage & Databases* → *KV namespace* → Create →
   nombre `LQ_NEWS`. En el Worker → *Settings → Bindings* → Add binding →
   KV namespace → binding name exactamente `LQ_NEWS`.
3. **Protección de escritura (opcional pero muy recomendable)**: en el Worker →
   *Settings → Variables and Secrets* → Add → *Secret text* → nombre
   `NEWS_TOKEN`, valor una contraseña larga que inventes.
4. **CORS**: abre `worker.js` y verifica que `ALLOWED_ORIGINS` incluya tu
   dominio real de Cloudflare Pages (p. ej. `https://licuado.pages.dev`) además
   de `https://licuado.licuado.workers.dev`. Vuelve a pegar y Deploy si lo cambias.
5. Copia la URL pública del Worker: `https://licuado-news.<tu-cuenta>.workers.dev`.

## Conectar la web (Cloudflare Pages)

En Cloudflare Pages → tu proyecto → *Settings → Environment variables*, añade:

| Variable            | Valor                                                        |
|---------------------|--------------------------------------------------------------|
| `VITE_NEWS_API_URL` | `https://licuado-news.<tu-cuenta>.workers.dev`               |
| `VITE_NEWS_TOKEN`   | La mesma contraseña que pusiste como secret `NEWS_TOKEN`      |

Reconstruye/redeploya Pages. A partir de ahí:

- El **editor** publica cada notícia en el Worker (POST).
- **Todos los visitantes** leen las notícias del Worker (GET), incluso en incógnito.

Si no defines las variables, el código usa el fallback
`https://licuado-news.licuado.workers.dev` definido en `src/lib/newsApi.js`
(solo funciona si ese es realmente el subdominio que obtuviste).

## Alternativa con wrangler (CLI)

```bash
cd cloudflare-worker
npx wrangler kv namespace create LQ_NEWS   # pega el id en wrangler.toml
npx wrangler secret put NEWS_TOKEN         # opcional
npx wrangler deploy
```

## Endpoints

- `GET /api/news` → `{ "news": [...] }` (público)
- `POST /api/news` → crea/actualiza por `id` (requiere `Authorization: Bearer <NEWS_TOKEN>` si el secret existe)
- `DELETE /api/news/:id` → borra (mismas reglas)

## Importante al publicar la web (Cloudflare Pages)

Ahora cada pantalla es una URL propia:

- `/` → Inicio
- `/Mitte signum` → Envía una señal
- `/LICUADO Scriptorium` → Galería del Scriptorium
- `/nuntium` → Notícias
- `/editor` → Editor privado (sin enlaces públicos hacia él)

El proyecto incluye un archivo `public/_redirects` con la regla
`/*  /index.html  200`, que Vite copia automáticamente a `dist/`.
Si publicas pegando/cargando la carpeta `dist` en Pages, ya viene incluido.
Si tu proyecto se construye desde el repositorio, Cloudflare Pages lo detecta
solo. Sin esa regla, abrir o recargar directamente estas URLs daría error 404.
