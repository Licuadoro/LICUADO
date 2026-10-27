/**
 * LICUADO · News API — Cloudflare Worker + KV
 * --------------------------------------------
 * Backend compartido para las notícias del editor de LICUADO.
 * Cualquier visitante (incógnito, otro dispositivo, otro navegador) lee las
 * mesmas notícias, porque la fuente de verdad está aquí, no en localStorage.
 *
 * DESPLIEGUE (5 minutos, gratis):
 * 1. Cloudflare Dashboard → Workers & Pages → Create application → Worker.
 * 2. Pega este código (o despliega con `npx wrangler deploy`).
 * 3. Crea un namespace KV (Dashboard → Storage & Databases → KV → Create)
 *    llamado p. ej. "LQ_NEWS" y asígnalo al Worker con binding name = "LQ_NEWS".
 * 4. (Opcional pero recomendado) Crea una variable secreta NEWS_TOKEN con una
 *    contraseña larga. Si existe, POST/DELETE exigirán Authorization: Bearer <token>.
 *    Pon la mesma contraseña como VITE_NEWS_TOKEN al construir tu web.
 * 5. Añade CORS para tus dominios en ALLOWED_ORIGINS abajo.
 * 6. Copia la URL del Worker (https://<nombre>.<cuenta>.workers.dev) y ponla
 *    como VITE_NEWS_API_URL al construir la web publicada en Cloudflare Pages.
 *
 * Endpoints:
 *   GET    /api/news        → { news: [...] }  (público, lectura para todos)
 *   POST   /api/news        → upsert por id    (requiere NEWS_TOKEN si está definido)
 *   DELETE /api/news/:id    → borra            (requiere NEWS_TOKEN si está definido)
 */

const ALLOWED_ORIGINS = [
  'https://licuado.licuado.workers.dev',
  'https://licuado.pages.dev',          // tu dominio de Cloudflare Pages (ajusta si usas otro)
  'http://localhost:5173',              // desarrollo local con Vite
];

// Cachea GET durante pocos segundos para reducir lecturas KV sin notar desfase.
const GET_CACHE_SECONDS = 10;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get('origin') || '';

    const corsHeaders = {
      'access-control-allow-origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
      'access-control-allow-methods': 'GET, POST, DELETE, OPTIONS',
      'access-control-allow-headers': 'content-type, authorization',
      'access-control-max-age': '86400',
      vary: 'Origin',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    const json = (obj, status = 200, extra = {}) =>
      new Response(JSON.stringify(obj), {
        status,
        headers: { 'content-type': 'application/json', ...corsHeaders, ...extra },
      });

    if (url.pathname === '/api/news' && request.method === 'GET') {
      const list = await readAll(env);
      return json({ news: list }, 200, {
        'cache-control': `public, max-age=${GET_CACHE_SECONDS}`,
      });
    }

    if (url.pathname === '/api/news' && request.method === 'POST') {
      if (!authorized(request, env)) return json({ error: 'unauthorized' }, 401);
      let item;
      try { item = await request.json(); } catch { return json({ error: 'invalid json' }, 400); }
      if (!item || !item.id || !item.title) return json({ error: 'id and title are required' }, 400);
      const list = await readAllRaw(env);
      const idx = list.findIndex((n) => n.id === item.id);
      const record = {
        id: String(item.id),
        title: String(item.title ?? ''),
        date: String(item.date ?? ''),
        text: String(item.text ?? ''),
        extra_style: String(item.extra_style ?? 'none'),
        link_text: String(item.link_text ?? ''),
        link_url: String(item.link_url ?? ''),
        locations: Array.isArray(item.locations) ? item.locations.map(String) : [],
        created_date: idx >= 0 ? (list[idx].created_date || new Date().toISOString()) : new Date().toISOString(),
        updated_date: new Date().toISOString(),
      };
      if (idx >= 0) list[idx] = record; else list.push(record);
      await writeAll(env, list);
      return json({ ok: true, news: record });
    }

    const delMatch = url.pathname.match(/^\/api\/news\/([^/]+)$/);
    if (delMatch && request.method === 'DELETE') {
      if (!authorized(request, env)) return json({ error: 'unauthorized' }, 401);
      const id = decodeURIComponent(delMatch[1]);
      const list = await readAllRaw(env);
      const next = list.filter((n) => n.id !== id);
      await writeAll(env, next);
      return json({ ok: true, deleted: id });
    }

    return json({ error: 'not found' }, 404);
  },
};

function authorized(request, env) {
  // Si no se configuró NEWS_TOKEN, se permite escribir (modo abierto).
  if (!env.NEWS_TOKEN) return true;
  const auth = request.headers.get('authorization') || '';
  return auth === `Bearer ${env.NEWS_TOKEN}`;
}

async function readAllRaw(env) {
  if (!env.LQ_NEWS) return [];
  const raw = await env.LQ_NEWS.get('news', { type: 'text' });
  if (!raw) return [];
  try {
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

async function readAll(env) {
  return readAllRaw(env);
}

async function writeAll(env, list) {
  if (!env.LQ_NEWS) throw new Error('KV namespace LQ_NEWS not bound');
  await env.LQ_NEWS.put('news', JSON.stringify(list));
}
