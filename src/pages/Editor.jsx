import React, { useEffect, useMemo, useRef, useState } from 'react';
import '@/licuado.css';
import './editor.css';
import {
  NEWS_LOCATIONS,
  EXTRA_STYLES,
  fetchNews,
  upsertNews,
  deleteNews,
  cloudStatus,
  renderNewsCard,
} from '@/lib/newsStore';
import { NEWS_API_ENDPOINT } from '@/lib/newsApi';

/* ── Iconos minimalistas (SVG de línea, sin emojis) ── */
const ic = (d, extra) => (
  <svg className="ed-ic" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}{extra}</svg>
);
const IconEdit = () => ic(<><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></>);
const IconTrash = () => ic(<><path d="M3 6h18" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></>);
const IconPlus = () => ic(<><path d="M5 12h14" /><path d="M12 5v14" /></>);
const IconPen = () => ic(<><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></>);
const IconWarn = () => ic(<><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4.26 20h15.48a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></>);
const IconCheck = () => ic(<><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></>);
const IconBack = () => ic(<><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></>);
const IconExt = () => ic(<><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>);
const IconCloud = ({ on }) => ic(
  <>
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    {!on && <path d="m22 22-18.5-18.5" />}
  </>,
);

const emptyForm = () => ({
  id: '',
  title: '',
  date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }),
  text: '',
  extraStyle: 'none',
  linkText: '',
  linkUrl: '',
  locations: ['todas'],
});

export default function Editor() {
  const [news, setNews] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [form, setForm] = useState(emptyForm());
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState(null); // { type: 'ok'|'warn', text }
  const [saving, setSaving] = useState(false);
  const [online, setOnline] = useState(null); // null = comprobando, true/false = estado del API
  const previewRef = useRef(null);

  useEffect(() => {
    fetchNews().then((list) => {
      setNews(list);
      setLoaded(true);
    });
    cloudStatus().then(setOnline);
  }, []);

  const flash = (text, type = 'ok') => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 5000);
  };

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const toggleLocation = (id) =>
    setForm((f) => ({
      ...f,
      locations: f.locations.includes(id) ? f.locations.filter((l) => l !== id) : [...f.locations, id],
    }));

  const editItem = (item) => {
    setForm({ ...emptyForm(), ...item, locations: [...(item.locations || [])] });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => setForm(emptyForm());

  const handleSave = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) return flash('Poner un título es obligatorio.', 'warn');
    setSaving(true);
    try {
      const saved = await upsertNews(form);
      setNews(saved);
      setForm(emptyForm());
      // Comprobar si de verdad llegó al API compartido
      const ok = await cloudStatus().catch(() => false);
      setOnline(ok);
      if (ok) {
        flash('Notícia publicada en la nube: ya la verán todos los usuarios al recargar la web.');
      } else {
        flash(
          `Guardada solo en este navegador: el API compartido no responde (${NEWS_API_ENDPOINT}). ` +
          'Despliega el Worker y define VITE_NEWS_API_URL (ver cloudflare-worker/README.md).',
          'warn',
        );
      }
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (item) => {
    if (!window.confirm(`¿Eliminar la notícia «${item.title}» de todas las secciones y para todos los usuarios?`)) return;
    const rest = await deleteNews(item.id);
    setNews(rest);
    if (form.id === item.id) resetForm();
    flash('Notícia eliminada.');
  };

  const filtered = useMemo(() => {
    let list = news;
    if (filter !== 'all') list = list.filter((n) => (n.locations || []).includes(filter));
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((n) => n.title.toLowerCase().includes(q) || n.text.toLowerCase().includes(q) || n.date.toLowerCase().includes(q));
    }
    return list;
  }, [news, filter, search]);

  // Vista prévia en vivo de la tarjeta
  useEffect(() => {
    if (!previewRef.current) return;
    previewRef.current.innerHTML = form.title || form.text ? renderNewsCard({ ...form, text: form.text || '…' }) : '';
  }, [form]);

  const locationLabel = (id) => NEWS_LOCATIONS.find((l) => l.id === id)?.label || id;

  return (
    <div className="lq-wrap ed-root">
      <div className="ed-shell">
        <header className="ed-header">
          <div className="ed-brand">
            <span className="ed-kicker">LICUADO</span>
            <h1 className="ed-title">Editor de Notícias</h1>
          </div>
          <div className="ed-header-actions">
            {online === true ? (
              <button type="button" className="ed-mini-btn ed-cloud-on" title={`API compartido conectado: ${NEWS_API_ENDPOINT}`}>
                <IconCloud on /> Nube conectada
              </button>
            ) : online === false ? (
              <button
                type="button"
                className="ed-mini-btn ed-cloud-off"
                title={`El API compartido no responde (${NEWS_API_ENDPOINT}). Despliega el Worker de cloudflare-worker/ y define VITE_NEWS_API_URL.`}
              >
                <IconCloud on={false} /> Sin nube (solo local)
              </button>
            ) : (
              <button type="button" className="ed-mini-btn" disabled>
                <IconCloud on={false} /> Comprobando nube…
              </button>
            )}
            <a className="ed-back-btn" href="/">
              <IconBack /> Volver a la web
            </a>
          </div>
        </header>

        {message && (
          <div className={`ed-toast ${message.type === 'warn' ? 'warn' : ''}`}>
            {message.type === 'warn' ? <IconWarn /> : <IconCheck />} {message.text}
          </div>
        )}

        {!loggedUser && loaded && (
          <div className="ed-notice">
            <IconWarn />
            <span>
              Para que las notícias lleguen a <strong>todos los usuarios</strong> deben guardarse con sesión iniciada.
              Si solo trabajas en tu navegador, usa «Guardar como invitado» y luego inicia sesión y vuelve a guardar.
            </span>
          </div>
        )}

        <form className="ed-card ed-form" onSubmit={handleSave}>
          <h2 className="ed-section-title">
            {form.id ? (<><IconPen /> Editando notícia existente</>) : (<><IconPlus /> Nova notícia</>)}
          </h2>

          <div className="ed-grid">
            <label className="ed-field">
              <span>Título *</span>
              <input value={form.title} onChange={set('title')} placeholder="Ej.: Actualización LICUADO 1.03" />
            </label>
            <label className="ed-field">
              <span>Fecha (se muestra tal cual)</span>
              <input value={form.date} onChange={set('date')} placeholder="Ej.: 28 sep 2026" />
            </label>
          </div>

          <label className="ed-field">
            <span>Texto de la notícia (puedes usar &lt;br&gt; para saltos de línea)</span>
            <textarea rows={7} value={form.text} onChange={set('text')} placeholder="Escribe aquí el contenido…" />
          </label>

          <div className="ed-grid">
            <label className="ed-field">
              <span>Extra (botón de la tarjeta)</span>
              <select value={form.extraStyle} onChange={set('extraStyle')}>
                {EXTRA_STYLES.map((x) => (
                  <option key={x.id} value={x.id}>
                    {x.label}
                  </option>
                ))}
              </select>
            </label>
            {(form.extraStyle === 'custom' || form.extraStyle !== 'none') && (
              <div className="ed-grid">
                <label className="ed-field">
                  <span>Texto del botón (opcional)</span>
                  <input value={form.linkText} onChange={set('linkText')} placeholder="Ej.: Ir a Kronos" />
                </label>
                <label className="ed-field">
                  <span>URL del botón (opcional)</span>
                  <input value={form.linkUrl} onChange={set('linkUrl')} placeholder="https://…" />
                </label>
              </div>
            )}
          </div>

          <div className="ed-field">
            <span>Secciones donde aparece la notícia *</span>
            <div className="ed-checks">
              {NEWS_LOCATIONS.map((loc) => (
                <label key={loc.id} className={`ed-check ${form.locations.includes(loc.id) ? 'on' : ''}`}>
                  <input type="checkbox" checked={form.locations.includes(loc.id)} onChange={() => toggleLocation(loc.id)} />
                  <span>{loc.label}</span>
                </label>
              ))}
            </div>
            <button type="button" className="ed-mini-btn" onClick={() => setForm((f) => ({ ...f, locations: NEWS_LOCATIONS.map((l) => l.id) }))}>
              Seleccionar todas
            </button>{' '}
            <button type="button" className="ed-mini-btn" onClick={() => setForm((f) => ({ ...f, locations: [] }))}>
              Quitar todas
            </button>
          </div>

          <div className="ed-actions">
            <button type="submit" className="ed-save-btn" disabled={saving}>
              {saving ? 'Publicando…' : form.id ? 'Guardar cambios' : 'Publicar notícia'}
            </button>
            {form.id && (
              <button type="button" className="ed-cancel-btn" onClick={resetForm}>
                Cancelar edición
              </button>
            )}
          </div>

          {(form.title || form.text) && (
            <div className="ed-preview-wrap">
              <span className="ed-preview-label">Vista prévia</span>
              <div ref={previewRef} className="ed-preview lq-news" style={{ display: 'flex' }} />
            </div>
          )}
        </form>

        <section className="ed-card">
          <h2 className="ed-section-title">Notícias existentes ({news.length})</h2>
          <div className="ed-toolbar">
            <input className="ed-search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar por título, texto o fecha…" />
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">Todas las secciones</option>
              {NEWS_LOCATIONS.map((loc) => (
                <option key={loc.id} value={loc.id}>
                  {loc.label}
                </option>
              ))}
            </select>
          </div>

          {!loaded && <p className="ed-empty">Cargando notícias…</p>}
          {loaded && filtered.length === 0 && <p className="ed-empty">No hay notícias que coincidan.</p>}

          <ul className="ed-list">
            {filtered.map((item) => (
              <li key={item.id} className={`ed-item ${form.id === item.id ? 'editing' : ''}`}>
                <div className="ed-item-head">
                  <strong className="ed-item-title">{item.title}</strong>
                  <span className="ed-item-date">{item.date}</span>
                </div>
                <p className="ed-item-text">{item.text.replace(/<br\s*\/?>/gi, ' ').slice(0, 160)}…</p>
                <div className="ed-item-tags">
                  {item.locations.length === 0 && <span className="ed-tag none">Sin sección</span>}
                  {item.locations.map((l) => (
                    <span key={l} className="ed-tag">{locationLabel(l).replace('Notícias › ', '').replace('Inicio (tarjeta de prévia en Sobre LICUADO)', 'Inicio')}</span>
                  ))}
                  {item.extraStyle !== 'none' && <span className="ed-tag extra">Extra: {EXTRA_STYLES.find((x) => x.id === item.extraStyle)?.label}</span>}
                </div>
                <div className="ed-item-actions">
                  <button type="button" className="ed-edit-btn" onClick={() => editItem(item)}>
                    <IconEdit /> Editar
                  </button>
                  <button type="button" className="ed-del-btn" onClick={() => handleDelete(item)}>
                    <IconTrash /> Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <footer className="ed-footer">
          <span>© 2026 LICUADO · Editor privado de notícias — esta página no aparece en la navegación pública.</span>
          <a href="/">Ir a licuado.licuado.workers.dev <IconExt /></a>
        </footer>
      </div>
    </div>
  );
}
