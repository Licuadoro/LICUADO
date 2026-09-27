// Almacén de notícias del proyecto LICUADO.
// Las notícias se guardan en localStorage (por navegador) y, si la app Base44 está
// configurada con la entidad "News", también se sincronizan en la nube para que
// cualquier visitante vea las mesmas notícias.

export const NEWS_LOCATIONS = [
  { id: 'home', label: 'Inicio (tarjeta de prévia en Sobre LICUADO)' },
  { id: 'recientes', label: 'Notícias › Más recientes' },
  { id: 'licuado', label: 'Notícias › Actualizaciones de LICUADO' },
  { id: 'kronos', label: 'Notícias › Actualizaciones de Kronos' },
  { id: 'teia', label: 'Notícias › Actualizaciones de Teia' },
  { id: 'creatorius', label: 'Notícias › Notícias de Creatorius' },
  { id: 'todas', label: 'Notícias › Todas las notícias' },
];

export const EXTRA_STYLES = [
  { id: 'none', label: 'Sin botón' },
  { id: 'kronos', label: 'Botón «Ir a Kronos» (azul)' },
  { id: 'teia', label: 'Botón «Ir a Teia» (morado)' },
  { id: 'creatorius', label: 'Botón «Creatorius» (naranja)' },
  { id: 'news', label: 'Botón «Notícias» (rojo, vuelve a la sección de notícias)' },
  { id: 'scriptorium', label: 'Botón «LICUADO Scriptorium» (dorado)' },
  { id: 'signal', label: 'Botón «Envía una señal» (verde)' },
  { id: 'custom', label: 'Enlace personalizado (escribe el texto y la URL abajo)' },
];

const LS_KEY = 'licuado_news_v1';
const LS_MIGRATED_KEY = 'licuado_news_migrated_v1';

/* ── Noticias iniciales (las mismas que estaban fijas en la página) ── */
const SEED_DATE_1 = '7 sep 2026';
const FUROR_TEXT =
  'En esta actualización agregué una nueva sección que anuncia creatorius, un servicio que estoy ofreciendo para financiar el proyecto LICUADO, donde me describes tu idea, y yo hago tu web por encargo. Además, agregué una nova notícia sobre creatorius, aunque no sé por qué sigo diciendo en las notícias que puse notícias jajaja. Y pues como ya es constumbre, nuevos manifiestos conspiranóicos que hago cuando me aburro.';
const CREATORIUS_TEXT =
  '¡Por fin creo que LICUADO está teniendo una fuente de ingresos más estable! Y es que ya abri mi negocio Creatorius. Consiste básicamente en que tú me describes una idea y yo la construyo como web a cambio de dinero. Yo investigué qué precio le suelen poner a estos servicios, y yo lo puse un poco más bajo. Bueno, si quieres apoyar el proyecto LICUADO, siempre puedes pedirme una web. El precio es negociable.';
const ACT_102_TEXT =
  '¡En esta actualización añadí varias cosas! Tales como:<br><br>\n-Una notícia revelando que Teia ya está publicado y funcionando.<br>\n-Dos accesos directos a Teia.<br>\n-Y como no puede faltar, más textos conspiranóicos ocultos jajaja.';
const TEIA_TEXT =
  '¡Ya publicada y funcionando! Ya publiqué Teia, una herramienta donde podrás subir los archivos de tu proyecto y ver una vista previa. En mi caso, es bastante útil para no tener que publicar cada vez que hago cambios en mis webs sin saber si va a ser la versión definitiva. Y, sobra decir que es totalmente gratis, al igual que Kronos, y mis próximas herramientas.';
const MAGNETRON_TEXT =
  'En esta actualización añadí una nova notícia de Kronos y más textos conspiranóicos sin ningún tipo de fundamento (Lo digo así por mi propia seguridad)';
const KRONOS_TEXT =
  'Bueno, esta no es la primera actualización de Kronos, pero como no le llevo registro voy a decir que es la primera. Básicamente ahora la página tiene ícono en la pestaña del navegador.';
const DECEPTIO_TEXT =
  'En esta actualización hice varios cambios, como añadir el nuevo apartado de notícias, añadir más frases filosóficas ocultas, añadir más líneas distintas de código que sale en el fondo, y eliminar ese orbe verde que salía en la tarjeta de Lúmen. Me gustaría decir que no tengo claro cuantas versiones y actualizaciones hice de la página hasta ahora, por lo que le pondré a esta 1.00, pero no es la primera. Sin embargo, a partir de ahora, todas las actualizaciones quedarán registradas aquí.<br><br>\nTambién hice una pequeña corrección de color, poniendo el pie de página de LICUADO Scriptorium de color dorado, y, añadí una tarjeta en el inicio, con la notícia más reciente, de momento esta, pero puede que cuando tú la leas ya no sea la más reciente.';

function seedNews() {
  return [
    {
      id: 'seed-furor-divinus',
      title: 'Furor divinus',
      date: SEED_DATE_1,
      text: FUROR_TEXT,
      extraStyle: 'none',
      linkText: '',
      linkUrl: '',
      locations: ['home', 'recientes', 'licuado', 'todas'],
      createdAt: '2026-09-07T00:00:00.000Z',
      updatedAt: '2026-09-07T00:00:00.000Z',
    },
    {
      id: 'seed-creatorius',
      title: 'Creatorius',
      date: SEED_DATE_1,
      text: CREATORIUS_TEXT,
      extraStyle: 'creatorius',
      linkText: '',
      linkUrl: '',
      locations: ['recientes', 'creatorius', 'todas'],
      createdAt: '2026-09-07T00:00:00.000Z',
      updatedAt: '2026-09-07T00:00:00.000Z',
    },
    {
      id: 'seed-licuado-102',
      title: 'Actualización LICUADO 1.02: Religio dominans',
      date: '18 Ago 2026',
      text: ACT_102_TEXT,
      extraStyle: 'none',
      linkText: '',
      linkUrl: '',
      locations: ['recientes', 'licuado', 'todas'],
      createdAt: '2026-08-18T00:00:00.000Z',
      updatedAt: '2026-08-18T00:00:00.000Z',
    },
    {
      id: 'seed-teia',
      title: 'Teia',
      date: '18 Ago 2026',
      text: TEIA_TEXT,
      extraStyle: 'teia',
      linkText: '',
      linkUrl: '',
      locations: ['recientes', 'teia', 'todas'],
      createdAt: '2026-08-18T00:00:00.000Z',
      updatedAt: '2026-08-18T00:00:00.000Z',
    },
    {
      id: 'seed-licuado-101',
      title: 'Actualización LICUADO 1.01: Magnetrón',
      date: '10 Ago 2026',
      text: MAGNETRON_TEXT,
      extraStyle: 'none',
      linkText: '',
      linkUrl: '',
      locations: ['recientes', 'licuado', 'todas'],
      createdAt: '2026-08-10T00:00:00.000Z',
      updatedAt: '2026-08-10T00:00:00.000Z',
    },
    {
      id: 'seed-kronos-100',
      title: 'Actualización Kronos 1.00: Εικόνισμα',
      date: '10 Ago 2026',
      text: KRONOS_TEXT,
      extraStyle: 'kronos',
      linkText: '',
      linkUrl: '',
      locations: ['recientes', 'kronos', 'todas'],
      createdAt: '2026-08-10T00:00:00.000Z',
      updatedAt: '2026-08-10T00:00:00.000Z',
    },
    {
      id: 'seed-licuado-100',
      title: 'Actualización LICUADO 1.00: Deceptio?',
      date: '7 ago 2026',
      text: DECEPTIO_TEXT,
      extraStyle: 'none',
      linkText: '',
      linkUrl: '',
      locations: ['licuado', 'todas'],
      createdAt: '2026-08-07T00:00:00.000Z',
      updatedAt: '2026-08-07T00:00:00.000Z',
    },
  ];
}

/* ── Utilidades ── */
function genId() {
  return 'news-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
}

function normalize(item) {
  return {
    id: item.id || genId(),
    title: String(item.title ?? ''),
    date: String(item.date ?? ''),
    text: String(item.text ?? ''),
    extraStyle: EXTRA_STYLES.some((e) => e.id === item.extraStyle) ? item.extraStyle : 'none',
    linkText: String(item.linkText ?? ''),
    linkUrl: String(item.linkUrl ?? ''),
    locations: Array.isArray(item.locations) ? item.locations.filter((l) => NEWS_LOCATIONS.some((n) => n.id === l)) : [],
    createdAt: item.createdAt || new Date().toISOString(),
    updatedAt: item.updatedAt || item.createdAt || new Date().toISOString(),
  };
}

export function parseDateFlexible(str) {
  if (!str) return null;
  // Formatos habituales escritos por el editor: "DD MMM YYYY" / "DD/MM/YYYY" / ISO
  const d = new Date(str);
  if (!isNaN(d.getTime())) return d;
  const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  const m = String(str).toLowerCase().match(/(\d{1,2})\s*[/\-\s]\s*([a-záéíóúüñ]+)\w*\s*(\d{4})/);
  if (m) {
    const mi = months.findIndex((x) => m[2].startsWith(x));
    if (mi >= 0) return new Date(Number(m[3]), mi, Number(m[1]));
  }
  return null;
}

export function newsTimestamp(item) {
  const parsed = parseDateFlexible(item.date);
  const t = parsed ? parsed.getTime() : Date.parse(item.createdAt || 0);
  return isNaN(t) ? 0 : t;
}

export function sortNews(list) {
  return [...list].sort((a, b) => newsTimestamp(b) - newsTimestamp(a) || String(b.createdAt).localeCompare(String(a.createdAt)));
}

/* ── Lectura / escritura local ── */
function readLocal() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!Array.isArray(data)) return null;
    return data.map(normalize);
  } catch {
    return null;
  }
}

function writeLocal(list) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(list));
  } catch {
    /* almacenamiento lleno o bloqueado */
  }
}

/* ── Sincronización opcional con la entidad News de Base44 ── */
async function getBase44() {
  try {
    const mod = await import('@/api/base44Client');
    const b44 = mod?.base44;
    if (!b44?.entities?.News) return null;
    // Comprobación rápida de que la entidad existe en la app
    await b44.entities.News.list('-created_date', 1);
    return b44;
  } catch {
    return null;
  }
}

let cachedB44;
async function base44Once() {
  if (cachedB44 === undefined) cachedB44 = await getBase44();
  return cachedB44;
}

async function loadFromBase44() {
  const b44 = await base44Once();
  if (!b44) return null;
  try {
    const rows = await b44.entities.News.list('', 500);
    if (!Array.isArray(rows)) return null;
    return rows.map((r) => normalize({ ...r, id: r.id || r._id }));
  } catch {
    return null;
  }
}

async function saveToBase44(list) {
  const b44 = await base44Once();
  if (!b44) return false;
  try {
    const rows = await b44.entities.News.list('', 500).catch(() => []);
    const existing = Array.isArray(rows) ? rows : [];
    const existingIds = new Set(existing.map((r) => r.id || r._id));
    for (const item of list) {
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
      if (existingIds.has(item.id)) await b44.entities.News.update(item.id, payload);
      else await b44.entities.News.create(payload);
    }
    for (const r of existing) {
      const rid = r.id || r._id;
      if (rid && !list.some((i) => i.id === rid)) await b44.entities.News.delete(rid).catch(() => {});
    }
    return true;
  } catch {
    return false;
  }
}

/* ── API pública ── */
export async function fetchNews() {
  let list = readLocal();
  if (!list) {
    const remote = await loadFromBase44();
    if (remote) {
      list = remote;
      writeLocal(list);
    } else if (!localStorage.getItem(LS_MIGRATED_KEY)) {
      list = seedNews();
      writeLocal(list);
      try {
        localStorage.setItem(LS_MIGRATED_KEY, '1');
      } catch { /* ignore */ }
    } else {
      list = [];
      writeLocal(list);
    }
  }
  // Si hay nube y aún no tenemos nada remoto, intentamos traerlo igualmente
  if (list.length === 0) {
    const remote = await loadFromBase44();
    if (remote && remote.length) {
      list = remote;
      writeLocal(list);
    }
  }
  return sortNews(list);
}

export async function saveNewsList(list) {
  const clean = list.map(normalize);
  writeLocal(clean);
  await saveToBase44(clean);
  return sortNews(clean);
}

export async function upsertNews(item) {
  const list = readLocal() ?? (await fetchNews());
  const norm = normalize({ ...item, id: item.id || genId() });
  const idx = list.findIndex((n) => n.id === norm.id);
  if (idx >= 0) list[idx] = { ...norm, createdAt: list[idx].createdAt, updatedAt: new Date().toISOString() };
  else list.push({ ...norm, updatedAt: new Date().toISOString() });
  return saveNewsList(list);
}

export async function deleteNews(id) {
  const list = readLocal() ?? (await fetchNews());
  return saveNewsList(list.filter((n) => n.id !== id));
}

export function newsForLocation(list, locationId) {
  return sortNews(list.filter((n) => (n.locations || []).includes(locationId)));
}

/* ── Renderizado HTML de una notícia (fiel al diseño original) ── */
const ICONS = {
  kronos: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  teia: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
  creatorius: '<svg class="lq-btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
  news: '<svg class="lq-btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>',
  manuscript: '<svg class="lq-btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-4 0-9 2-12 7-2 3-3 6-3 9 3 0 6-1 9-3 5-3 7-8 7-12 0-.4-.4-1-1-1Z"/><path d="M9 15 4 20"/><path d="M13 8.5c-2 .3-4 1.6-5.3 3.6"/></svg>',
  signal: '<svg class="lq-btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 20v-6"/><path d="M8.5 15.5a5 5 0 0 1 0-7"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M5.5 18.5a9 9 0 0 1 0-13"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
};

export function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildExtra(item) {
  const style = item.extraStyle || 'none';
  if (style === 'none') return '';
  if (style === 'kronos') {
    const url = item.linkUrl || 'https://kronos.licuado.workers.dev';
    return `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" class="lq-kronos-btn">${ICONS.kronos}<span>${escapeHtml(item.linkText || 'Ir a Kronos')}</span></a>`;
  }
  if (style === 'teia') {
    const url = item.linkUrl || 'https://teia.licuado.workers.dev/';
    return `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" class="lq-teia-btn">${ICONS.teia}<span>${escapeHtml(item.linkText || 'Ir a Teia')}</span></a>`;
  }
  if (style === 'creatorius') {
    const url = item.linkUrl || 'https://creatorius.licuado.workers.dev/';
    return `<a class="lq-btn-scriptorium lq-btn-creatorius" href="${escapeHtml(url)}" target="_blank" rel="noopener">${ICONS.creatorius}${escapeHtml(item.linkText || 'Creatorius')}</a>`;
  }
  if (style === 'news') {
    return `<a href="#" class="lq-btn-scriptorium lq-btn-news" data-lq-screen="news">${ICONS.news}${escapeHtml(item.linkText || 'Notícias')}</a>`;
  }
  if (style === 'scriptorium') {
    return `<a href="#" class="lq-btn-scriptorium lq-btn-manuscript" data-lq-screen="gallery">${ICONS.manuscript}${escapeHtml(item.linkText || 'LICUADO Scriptorium')}</a>`;
  }
  if (style === 'signal') {
    return `<a href="#" class="lq-btn-scriptorium lq-btn-signal" data-lq-screen="scriptorium">${ICONS.signal}${escapeHtml(item.linkText || 'Envía una señal')}</a>`;
  }
  // custom
  if (!item.linkUrl) return '';
  return `<a class="lq-btn-scriptorium" href="${escapeHtml(item.linkUrl)}" target="_blank" rel="noopener">${ICONS.creatorius}${escapeHtml(item.linkText || item.linkUrl)}</a>`;
}

/**
 * Devuelve el HTML de la tarjeta de una notícia.
 * @param {object} item
 * @param {'card'|'excerpt'} mode  'excerpt' añade el botón «Notícias» de la prévia del inicio
 */
export function renderNewsCard(item, mode = 'card') {
  const bodyClass = mode === 'excerpt' ? 'lq-news-excerpt' : 'lq-news-text';
  const text = item.text.replace(/\r?\n/g, '<br>');
  let html =
    `<div class="lq-news-card lq-news-card-home">` +
    `<div class="lq-news-date">${escapeHtml(item.date)}</div>` +
    `<h3 class="lq-news-title">${escapeHtml(item.title)}</h3>` +
    `<p class="${bodyClass}">${text}</p>`;
  if (mode === 'excerpt') {
    html += `<a href="#" class="lq-btn-scriptorium lq-btn-news" data-lq-screen="news">${ICONS.news}Notícias</a>`;
  } else {
    html += buildExtra(item);
  }
  html += `</div>`;
  return html;
}
