import React, { useEffect, useMemo, useRef, useState } from 'react';
import '@/licuado.css';
import './editor.css';
import {
  NEWS_LOCATIONS,
  EXTRA_STYLES,
  fetchNews,
  upsertNews,
  deleteNews,
  renderNewsCard,
} from '@/lib/newsStore';

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
  const [message, setMessage] = useState('');
  const previewRef = useRef(null);

  useEffect(() => {
    fetchNews().then((list) => {
      setNews(list);
      setLoaded(true);
    });
  }, []);

  const flash = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3500);
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
    if (!form.title.trim()) return flash('⚠ Poner un título es obligatorio.');
    const saved = await upsertNews(form);
    setNews(saved);
    setForm(emptyForm());
    flash('✔ Notícias guardadas. Ya puedes recargar la web y verás los cambios.');
  };

  const handleDelete = async (item) => {
    if (!window.confirm(`¿Eliminar la notícia «${item.title}» de todas las secciones?`)) return;
    const rest = await deleteNews(item.id);
    setNews(rest);
    if (form.id === item.id) resetForm();
    flash('🗑 Notícia eliminada.');
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
          <a className="ed-back-btn" href="/">
            ← Volver a la web
          </a>
        </header>

        {message && <div className="ed-toast">{message}</div>}

        <form className="ed-card ed-form" onSubmit={handleSave}>
          <h2 className="ed-section-title">{form.id ? '✎ Editando notícia existente' : '＋ Nova notícia'}</h2>

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
            <button type="submit" className="ed-save-btn">
              {form.id ? 'Guardar cambios' : 'Publicar notícia'}
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
                    ✎ Editar
                  </button>
                  <button type="button" className="ed-del-btn" onClick={() => handleDelete(item)}>
                    🗑 Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <footer className="ed-footer">
          <span>© 2026 LICUADO · Editor privado de notícias — esta página no aparece en la navegación pública.</span>
          <a href="/">Ir a licuado.licuado.workers.dev ↗</a>
        </footer>
      </div>
    </div>
  );
}
