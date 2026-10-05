// ── API HTTP propio para as notícias compartidas de LICUADO ──
// El backend es un Cloudflare Worker con KV que tú despliegas una sola vez
// (el código está en /cloudflare-worker/worker.js de este repositorio).
// Una vez desplegado, define VITE_NEWS_API_URL (y opcionalmente VITE_NEWS_TOKEN)
// al construir la web, o pega el valor real directamente abajo como fallback.
//
// Este almacén remoto es la fuente de verdad para que TODOS los visitantes
// (incógnito, otros dispositivos, otros navegadores) vean las mesmas notícias.
// No requiere sesión ni Base44: es un fetch simple, compatible con
// Cloudflare Pages (hosting 100 % estático).

const ENDPOINT = import.meta.env.VITE_NEWS_API_URL || 'https://licuado-news.licuado.workers.dev';
const TOKEN = import.meta.env.VITE_NEWS_TOKEN || '';

/** Lee todas as notícias compartidas. Devuelve null si el API no está disponible. */
export async function apiFetchAll() {
  try {
    const res = await fetch(`${ENDPOINT}/api/news`, {
      headers: { accept: 'application/json' },
      cache: 'no-store',
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data?.news)) return null;
    return data.news;
  } catch (e) {
    console.warn('[newsApi] API no disponible:', e?.message || e);
    return null;
  }
}

/** Escribe una notícia completa en el API (crea ou actualiza por id). */
export async function apiPut(item) {
  const payload = {
    id: item.id,
    title: item.title,
    date: item.date,
    text: item.text,
    extra_style: item.extraStyle,
    link_text: item.linkText,
    link_url: item.linkUrl,
    locations: item.locations,
  };
  try {
    const res = await fetch(`${ENDPOINT}/api/news`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        ...(TOKEN ? { authorization: `Bearer ${TOKEN}` } : {}),
      },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch {
    return false;
  }
}

/** Borra unha notícia do API. */
export async function apiDelete(id) {
  try {
    const res = await fetch(
      `${ENDPOINT}/api/news/${encodeURIComponent(id)}`,
      {
        method: 'DELETE',
        headers: TOKEN ? { authorization: `Bearer ${TOKEN}` } : {},
      },
    );
    return res.ok;
  } catch {
    return false;
  }
}

/** URL base del API (para mostrar estado en el editor). */
export const NEWS_API_ENDPOINT = ENDPOINT;
