// ── Bloques HTML de cada sección (extraídos de la página única original) ──
export const banner = `
  <section class="lq-banner">
    <img class="lq-banner-bg" aria-hidden="true" src="https://media.base44.com/images/public/6a68f46d82ce25dfe7a4b8fc/3e349e33f_1000056000.jpg" alt="">
    <div class="lq-glow"></div><div class="lq-scan"></div>
    <div class="lq-banner-content">
      <img class="lq-logo" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXP-6qctGhLz4Rh8QGRiqXE4yQcN94o48f8EQcei5yVWjaEn58I3GY6MXqyNDDmjaKtFhqeV2-6x6mKc6CsxGsq0Kom_SRC5v8yE_lsm9xdKO1bilb0_-8WK3eeVLujlXa1MdD3zf4z4Hir2UqlIAkx3J6_KsTMmFsg1ItgEAm_h2PVZvP9PvHN7yG_fRH/s16000/Licuado%20Logotipo.png" alt="LICUADO" id="lq-logo-img">
      <p class="lq-tagline">Un estudio de videojuegos con más ambición que personal</p>
      <div class="lq-divider"><div class="lq-line"></div><div class="lq-dot"></div><div class="lq-line r"></div></div>
      <p class="lq-sub">Estudio de videojuegos independiente</p>
      <div class="lq-actions">
        <a class="lq-btn" href="#lq-proyectos" data-lq-scroll="lq-proyectos">Ver proyectos <span>&#8595;</span></a>
        <a class="lq-btn" href="#lq-sobre" data-lq-scroll="lq-sobre">Sobre LICUADO <span>&#8595;</span></a>
      </div>
      <div class="lq-dropdown-wrapper" style="margin-top:2rem;opacity:0;animation:lq-fade-up 1s ease 1.55s forwards;position:relative;z-index:2;">
        <div class="lq-dropdown" id="lq-tools-dropdown">
          <button class="lq-dropdown-toggle" id="lq-toggle" aria-expanded="false" aria-haspopup="true">
            <span>Descubre mis propias herramientas</span>
            <span class="lq-arrow-icon" aria-hidden="true"></span>
          </button>
          <div class="lq-dropdown-menu" role="menu">
            <a class="lq-dropdown-item" href="https://kronos.licuado.workers.dev" target="_blank" rel="noopener" role="menuitem">Kronos</a>
            <a class="lq-dropdown-item" href="https://teia.licuado.workers.dev/" target="_blank" rel="noopener" role="menuitem">Teia</a>
            <a class="lq-dropdown-item" href="https://creatorius.licuado.workers.dev/" target="_blank" rel="noopener" role="menuitem">Creatorius</a>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

export const game = `
<section class="lq-game-section lq-proyectos" id="lq-proyectos">
    <div class="lq-game-inner">
      <div class="lq-game-narrative">
        <span class="lq-proy-label">En desarrollo</span>
        <h2 class="lq-game-title">Lúmen</h2>
        <blockquote class="lq-game-desc">Un metroidvania de exploración y combate frenético con ilustraciones tipo manga hechas a mano donde eres un diminuto ser hecho de savia que habita el interior de un árbol colosal y tiene como primer objetivo vengar a un miembro de su aldea.</blockquote>
        <div class="lq-game-tags">
          <span class="lq-tag">Metroidvania</span><span class="lq-tag">Exploración</span><span class="lq-tag">Combate intenso</span><span class="lq-tag">En desarrollo</span>
        </div>
      </div>
      <div class="lq-game-portal">
        <div class="lq-game-card" data-lq-open-modal>
          <div class="lq-game-card-glow"></div>
          <img class="lq-game-art" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3I7qjXeBTziyGW7c_4YjHbvlTQvt6_DqST71l3LTYImjxfi7LkKb_f9bTI0DJ_T7aRC2ld39X5L2GL-oIcGj9d7eLvsEgOequ5mqlfpfLCSpBxls9VfnViwBxByWHLF-rxu0wdJM81rO_d4dbpEsgdtMLSpZQ_5f8Vvgbr41taFywwZrLLFZ2-915FjA/s16000/L%C3%BAmen%20Ecos%20bajo%20la%20corteza%20+%20logotipo%20de%20LICUADO.png" alt="Portada de Lúmen: Ecos bajo la corteza">
          <div class="lq-game-card-overlay"><span>Ver más</span></div>
        </div>
      </div>
    </div>
  </section>

  <div class="lq-data-breach"></div>

  
`;

export const sobre = `
<section class="lq-sobre" id="lq-sobre">
    <div class="lq-sobre-inner">
      <div class="lq-sobre-visual">
        <div class="lq-frame lq-frame-float">
          <span class="lq-frame-flourish tl"><svg viewBox="0 0 42 42" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 37 C 10 30, 16 27, 23 28 C 30 29, 33 24, 30 18 C 27 12, 31 7, 36 6"/><path d="M9 37 C 12 33, 16 31, 20 31"/><path d="M16 29 C 20 27, 24 27, 27 28"/><path d="M23 22 C 26 18, 29 15, 33 13"/><circle cx="35" cy="8" r="2" fill="currentColor"/><path d="M5 37 C 5 31, 8 27, 12 25"/><path d="M5 37 C 9 35, 13 34, 17 35"/></svg></span>
          <span class="lq-frame-flourish tr"><svg viewBox="0 0 42 42" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 37 C 10 30, 16 27, 23 28 C 30 29, 33 24, 30 18 C 27 12, 31 7, 36 6"/><path d="M9 37 C 12 33, 16 31, 20 31"/><path d="M16 29 C 20 27, 24 27, 27 28"/><path d="M23 22 C 26 18, 29 15, 33 13"/><circle cx="35" cy="8" r="2" fill="currentColor"/><path d="M5 37 C 5 31, 8 27, 12 25"/><path d="M5 37 C 9 35, 13 34, 17 35"/></svg></span>
          <span class="lq-frame-flourish br"><svg viewBox="0 0 42 42" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 37 C 10 30, 16 27, 23 28 C 30 29, 33 24, 30 18 C 27 12, 31 7, 36 6"/><path d="M9 37 C 12 33, 16 31, 20 31"/><path d="M16 29 C 20 27, 24 27, 27 28"/><path d="M23 22 C 26 18, 29 15, 33 13"/><circle cx="35" cy="8" r="2" fill="currentColor"/><path d="M5 37 C 5 31, 8 27, 12 25"/><path d="M5 37 C 9 35, 13 34, 17 35"/></svg></span>
          <span class="lq-frame-flourish bl"><svg viewBox="0 0 42 42" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 37 C 10 30, 16 27, 23 28 C 30 29, 33 24, 30 18 C 27 12, 31 7, 36 6"/><path d="M9 37 C 12 33, 16 31, 20 31"/><path d="M16 29 C 20 27, 24 27, 27 28"/><path d="M23 22 C 26 18, 29 15, 33 13"/><circle cx="35" cy="8" r="2" fill="currentColor"/><path d="M5 37 C 5 31, 8 27, 12 25"/><path d="M5 37 C 9 35, 13 34, 17 35"/></svg></span>
          <div class="lq-frame-inner">
            <img src="https://media.base44.com/images/public/6a68f46d82ce25dfe7a4b8fc/3e349e33f_1000056000.jpg" alt="Ilustración oficial de LICUADO">
          </div>
          <div class="lq-frame-plaque"><span class="lq-plaque-small">Lo más nuevo en</span>LICUADO&nbsp;&nbsp;Scriptorium</div>
        </div>
        <a href="/LICUADO Scriptorium" class="lq-btn-scriptorium lq-btn-manuscript lq-btn-script-lg"><svg class="lq-btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-4 0-9 2-12 7-2 3-3 6-3 9 3 0 6-1 9-3 5-3 7-8 7-12 0-.4-.4-1-1-1Z"/><path d="M9 15 4 20"/><path d="M13 8.5c-2 .3-4 1.6-5.3 3.6"/></svg>LICUADO Scriptorium</a>
        <div class="lq-news-preview" style="margin-top:1.5rem;opacity:0;animation:lq-fade-up 1s ease 1.8s forwards;position:relative;z-index:2;" id="lq-home-news-container"></div>
      </div>
      <div>
        <span class="lq-proy-label">El estudio</span>
        <h2 class="lq-sobre-titulo">Qué es <span>LICUADO</span></h2>
        <p class="lq-sobre-parrafo">Licuado no es un equipo, son solo los esfuerzos de un estudiante de instituto que un día quedó fascinado con Hollow Knight de Team Cherry. Los frutos de estar aburrido. Es el resultado de una obsesión por entregar algo que se quede en tu memoria y te cambie para bien, e incluso que te inspire a crear.</p>
        <p class="lq-sobre-parrafo">LICUADO existe porque los videojuegos pueden ser algo más que un producto. Los videojuegos están hechos para entregar una experiéncia y un mensaje, no solo para hacer dinero. No se puede desperdiciar así el máximo exponente del arte, porque si, los devs somos artistas, y los videojuegos no son un tipo de arte, son todas las artes.</p>
        <div class="lq-divider-soft"></div>
        <span class="lq-proy-label">Caribe Studios</span>
        <p class="lq-sobre-parrafo">Caribe Studios es un estudio independiente con el que tengo contacto, y están trabajando en un metroidvania. Me sorprende que un chico a penas mayor que yo ya consiguió reunir a tanta gente, ya que, si, Caribe Studios también está liderado por un estudiante.</p>
        <a class="lq-link" href="https://caribe-studios-portal-883042bb.base44.app/" target="_blank" rel="noopener">Ir a Caribe Studios &#8599;</a>
        <div class="lq-divider-soft"></div>
        <span class="lq-proy-label">Cuento finalista</span>
        <h3 class="lq-sobre-titulo" style="font-size:clamp(1.7rem,3.5vw,2.3rem);margin:.3rem 0 1rem">Cordura</h3>
        <p class="lq-sobre-parrafo">Cordura es un cuento que escribí para un concurso, y tras quedar finalista será publicado en el mes de octubre, en una compilación de cuentos llamada Inventario de fragmentos I, por parte de la editorial corazón de tinta, quienes organizaron el concurso. Los concursos de escritura de cuentos son parte de la financiación de este proyecto, o al menos eso espero, ya que en el concurso en el que participé con cordura no había un premio monetario más que la publicación del cuento en la compilación, por la cual no recibo ganancias al comprar un ejemplar. Sin embargo, me enorgullece que mis escrituras sean conocidas. Pero pienso participar en más concursos a futuro para conseguir presupuesto para el proyecto LICUADO.</p>
        
        <div class="lq-divider-soft"></div>
        <span class="lq-proy-label">Creatorius</span>
        <h3 class="lq-sobre-titulo" style="font-size:clamp(1.7rem,3.5vw,2.3rem);margin:.3rem 0 1rem">Creatorius</h3>
        <p class="lq-sobre-parrafo">Creatorius es un negocio que abrí para ganar dinero e impulsar el proyecto LICUADO. Consiste en que me describas una idea y yo hago una web con los elementos que me pidas, a cambio de dinero, y puedes agregar elementos que mezclan mis diferentes virtudes. Debo decir que no puse a Creatorius dentro de LICUADO, porque son cosas diferentes. Y es que LICUADO no es negocio, es el canal por donde salen las ideas que vierto en el teclado y el papel.</p>
        <a class="lq-link" href="https://creatorius.licuado.workers.dev" target="_blank" rel="noopener">Ir a Creatorius &#8599;</a>
        
        <div class="lq-sobre-facts">
          <div class="lq-fact"><span class="lq-fact-num">1</span><span class="lq-fact-label">Artista tras todo lo que ves</span></div>
          <div class="lq-fact"><span class="lq-fact-num">&#8734;</span><span class="lq-fact-label">Horas de volcar mis ideas en un computador</span></div>
        </div>
      </div>
    </div>
  </section>

  <div class="lq-data-breach"></div>

  
`;

export const artbanner = `
<section class="lq-art-banner">
    <img class="lq-art-banner-img" aria-hidden="true" src="https://media.base44.com/images/public/6a68f46d82ce25dfe7a4b8fc/a3cd662d8_1000058723.jpg" alt="">
  </section>

  
`;

export const footer_home = `
<footer class="lq-footer lq-footer-home">
    <canvas class="lq-footer-mirror" id="lq-footer-mirror" aria-hidden="true"></canvas>
    <div class="lq-footer-shimmer" aria-hidden="true"></div>
    <div class="lq-footer-gloss" aria-hidden="true"></div>
    <div class="lq-fire-wrap" style="left:50%;transform:translateX(-50%)"><div class="lq-flame lq-flame-2"></div><div class="lq-flame lq-flame-3"></div><div class="lq-flame lq-flame-1"></div><div class="lq-flame lq-flame-core"></div><div class="lq-fire-spark" style="left:50%;bottom:30px;--delay:0s;--dx:-18px;--dy:-60px"></div><div class="lq-fire-spark" style="left:55%;bottom:28px;--delay:.4s;--dx:12px;--dy:-70px"></div></div>
    <div class="lq-fire-wrap lq-fire-sm" style="left:15%;transform:translateX(-50%)"><div class="lq-flame lq-flame-2"></div><div class="lq-flame lq-flame-3"></div><div class="lq-flame lq-flame-1"></div><div class="lq-flame lq-flame-core"></div></div>
    <div class="lq-fire-wrap lq-fire-sm" style="left:30%;transform:translateX(-50%)"><div class="lq-flame lq-flame-2"></div><div class="lq-flame lq-flame-3"></div><div class="lq-flame lq-flame-1"></div><div class="lq-flame lq-flame-core"></div></div>
    <div class="lq-fire-wrap lq-fire-sm" style="left:70%;transform:translateX(-50%)"><div class="lq-flame lq-flame-2"></div><div class="lq-flame lq-flame-3"></div><div class="lq-flame lq-flame-1"></div><div class="lq-flame lq-flame-core"></div></div>
    <div class="lq-fire-wrap lq-fire-sm" style="left:85%;transform:translateX(-50%)"><div class="lq-flame lq-flame-2"></div><div class="lq-flame lq-flame-3"></div><div class="lq-flame lq-flame-1"></div><div class="lq-flame lq-flame-core"></div></div>
    <div class="lq-fire-wrap lq-fire-sm" style="left:5%;transform:translateX(-50%);opacity:.6"><div class="lq-flame lq-flame-2"></div><div class="lq-flame lq-flame-1"></div><div class="lq-flame lq-flame-core"></div></div>
    <div class="lq-fire-wrap lq-fire-sm" style="left:95%;transform:translateX(-50%);opacity:.6"><div class="lq-flame lq-flame-3"></div><div class="lq-flame lq-flame-1"></div><div class="lq-flame lq-flame-core"></div></div>
    <div class="lq-footer-inner">
      <div class="lq-footer-brand">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXP-6qctGhLz4Rh8QGRiqXE4yQcN94o48f8EQcei5yVWjaEn58I3GY6MXqyNDDmjaKtFhqeV2-6x6mKc6CsxGsq0Kom_SRC5v8yE_lsm9xdKO1bilb0_-8WK3eeVLujlXa1MdD3zf4z4Hir2UqlIAkx3J6_KsTMmFsg1ItgEAm_h2PVZvP9PvHN7yG_fRH/s16000/Licuado%20Logotipo.png" alt="LICUADO">
        <p class="lq-footer-tagline">Pensando obsesionado,<br>porque la ventana me ha inspirado...</p>
      </div>
      <div>
        <p class="lq-footer-nav-title">Navegar</p>
        <ul class="lq-footer-nav">
          <li><a href="#lq-top" data-lq-scroll="lq-top">Inicio</a></li>
          <li><a href="#lq-proyectos" data-lq-lumen>Lúmen</a></li>
          <li><a href="https://caribe-studios-portal-883042bb.base44.app/" target="_blank" rel="noopener">Caribe Studios &#8599;</a></li>
          <li style="margin-top:.6rem"><a href="/Mitte signum" class="lq-btn-scriptorium lq-btn-signal"><svg class="lq-btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 20v-6"/><path d="M8.5 15.5a5 5 0 0 1 0-7"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M5.5 18.5a9 9 0 0 1 0-13"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>Envía una señal</a></li>
          <li><a href="/LICUADO Scriptorium" class="lq-btn-scriptorium lq-btn-manuscript"><svg class="lq-btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-4 0-9 2-12 7-2 3-3 6-3 9 3 0 6-1 9-3 5-3 7-8 7-12 0-.4-.4-1-1-1Z"/><path d="M9 15 4 20"/><path d="M13 8.5c-2 .3-4 1.6-5.3 3.6"/></svg>LICUADO Scriptorium</a></li>
          <li><a href="/nuntium" class="lq-btn-scriptorium lq-btn-news"><svg class="lq-btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>Notícias</a></li>
          <li><a class="lq-btn-scriptorium lq-btn-kronos" href="https://kronos.licuado.workers.dev" target="_blank" rel="noopener"><svg class="lq-btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><g class="lq-kronos-hand"><path d="M12 12 12 7"/><path d="M12 12 15.3 13.6"/></g></svg>Kronos</a></li>
          <li><a class="lq-btn-scriptorium lq-btn-teia" href="https://teia.licuado.workers.dev/" target="_blank" rel="noopener"><svg class="lq-btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>Teia</a></li>
          <li style="margin-top:.6rem"><a class="lq-btn-scriptorium lq-btn-creatorius" href="https://creatorius.licuado.workers.dev" target="_blank" rel="noopener"><svg class="lq-btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>Creatorius</a></li>
        </ul>
      </div>
    </div>
    <div class="lq-footer-bottom">
      <span class="lq-footer-copy">&copy; 2026 LICUADO. Todos los derechos reservados.</span>
      <button type="button" class="lq-footer-made lq-dios-link" data-lq-open-dios>Si crear un videojuego es como crear un mundo... ¿No estaría tomando el papel de un dios?</button>
    </div>
  </footer>

  
`;

export const scriptorium = `
<section class="lq-scriptorium" id="lq-scriptorium">
    <a class="lq-btn lq-scriptorium-back" href="/">&#8592; Volver</a>
    <div class="lq-glow"></div>
    <div class="lq-scan"></div>
    <div class="lq-waterline"></div>
    <h2 class="lq-proy-title" style="position:relative;z-index:1;margin-bottom:.5rem">Envía una señal</h2>
    <div class="lq-divider"><div class="lq-line"></div><div class="lq-dot"></div><div class="lq-line r"></div></div>
    <div class="lq-scriptorium-cta">
      <a class="lq-discord-btn" href="https://discord.gg/zWeP5sBfwJ" target="_blank" rel="noopener">
        <img class="lq-discord-icon" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-white-icon.png" alt="">
        Entrar al Discord
      </a>
      <a class="lq-discord-btn" href="https://youtube.com/@licuado_scriptorium?si=8GNDObIl_y5xVzyq" target="_blank" rel="noopener">Visita el canal de YouTube</a>
      <a class="lq-discord-btn" href="https://x.com/LicuadoProject" target="_blank" rel="noopener" style="border-color:rgba(0,255,68,.4);background:linear-gradient(135deg,rgba(0,255,68,.12),rgba(0,50,20,.25))"><svg width="22" height="22" viewBox="0 0 24 24" fill="rgba(0,255,68,.9)" xmlns="http://www.w3.org/2000/svg" ><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>Sígueme en X</a>
      <a class="lq-discord-btn" href="https://www.instagram.com/licuado_project/" target="_blank" rel="noopener" style="border-color:rgba(0,255,68,.4);background:linear-gradient(135deg,rgba(0,255,68,.12),rgba(0,50,20,.25))"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>Instagram</a>
      <a class="lq-discord-btn" href="https://www.facebook.com/profile.php?id=61590552870419&locale=es_ES" target="_blank" rel="noopener" style="border-color:rgba(0,255,68,.4);background:linear-gradient(135deg,rgba(0,255,68,.12),rgba(0,50,20,.25))"><svg width="22" height="22" viewBox="0 0 24 24" fill="white" ><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>Facebook</a>
      <p class="lq-discord-note">Si quieres comunicarte conmigo, si quieres participar en el proyecto, contáctame...</p>
    </div>
  </section>

  
`;

export const foot_signum = `
<footer class="lq-footer lq-scriptorium-footer">
    <canvas class="lq-footer-mirror" aria-hidden="true"></canvas>
    <div class="lq-footer-shimmer" aria-hidden="true"></div>
    <div class="lq-footer-gloss" aria-hidden="true"></div>
    <div class="lq-footer-inner">
      <div class="lq-footer-brand">
        <p class="lq-footer-tagline">¿Te interesa el proyecto? Contáctame.</p>
      </div>
      <div>
        <p class="lq-footer-nav-title">Navegar</p>
        <ul class="lq-footer-nav">
          <li><a href="/">Volver a LICUADO</a></li>
          <li><a href="/nuntium">Notícias</a></li>
          <li><a href="/LICUADO Scriptorium">LICUADO Scriptorium</a></li>
        </ul>
      </div>
    </div>
    <div class="lq-footer-bottom">
      <span class="lq-footer-copy">&copy; 2026 LICUADO.</span>
      <button type="button" class="lq-footer-made lq-dios-link" data-lq-open-alma>¡No intentes hacerte spoilers haciendo un viaje astral!</button>
    </div>
  </footer>

  
`;

export const gallery = `
<section class="lq-gallery" id="lq-gallery">
    <a class="lq-btn lq-scriptorium-back" href="/">&#8592; Volver</a>
    <div class="lq-glow"></div>
    <div class="lq-scan"></div>
    <img class="lq-scriptorium-logo" src="https://blogger.googleusercontent.com/img/a/AVvXsEi6oGzPeDv1Pfc5h8v6rFfrOjPjL_p6bKyf0_qJpQ4TA3O9ZJsazWFa4PuhL0qzIXX6-tvyJiYGVSRqEkGENX7dU0M5zLfgPzPrWsbr5J1e_q2QP8G_QI_3YX8REA23UKfQRhzBvzmhlh-IlS-6k87n8vQ3k-YkLB9Avuu2MaDQc7UnuRmF9bnrYyrzlSuR=s16000" alt="LICUADO Scriptorium">
    <div class="lq-divider"><div class="lq-line"></div><div class="lq-dot"></div><div class="lq-line r"></div></div>
    <div class="lq-gallery-illustrations">
      <div class="lq-proy-header"><span class="lq-proy-label">Galería</span><h2 class="lq-proy-title">Ilustraciones oficiales de LICUADO</h2></div>
      <div style="display:flex;gap:1.5rem;justify-content:center;flex-wrap:wrap">
        <figure style="margin:0;flex:1 1 0;min-width:260px;max-width:460px">
          <img src="https://media.base44.com/images/public/6a68f46d82ce25dfe7a4b8fc/3e349e33f_1000056000.jpg" alt="LICUADO liberum industrium" style="width:100%;height:auto;border-radius:16px;border:1px solid rgba(215,170,61,.25);box-shadow:0 20px 60px rgba(0,0,0,.7),0 0 30px rgba(215,170,61,.1);display:block">
          <figcaption style="text-align:center;margin-top:.8rem;font-family:'Lilita One',cursive;font-size:.95rem;color:#f5f5f0">LICUADO liberum industrium</figcaption>
        </figure>
        <figure style="margin:0;flex:1 1 0;min-width:260px;max-width:460px">
          <img src="https://media.base44.com/images/public/6a68f46d82ce25dfe7a4b8fc/a3cd662d8_1000058723.jpg" alt="Libertas creandi emittitur" style="width:100%;height:auto;border-radius:16px;border:1px solid rgba(215,170,61,.25);box-shadow:0 20px 60px rgba(0,0,0,.7),0 0 30px rgba(215,170,61,.1);display:block">
          <figcaption style="text-align:center;margin-top:.8rem;font-family:'Lilita One',cursive;font-size:.95rem;color:#f5f5f5f0">Libertas creandi emittitur.</figcaption>
        </figure>
      </div>
    </div>
    <div class="lq-gallery-illustrations">
      <div class="lq-proy-header"><span class="lq-proy-label">Galería</span><h2 class="lq-proy-title">Ilustraciones oficiales de Lúmen</h2></div>
      <div class="lq-row-wrap">
        <button class="lq-arrow lq-arrow-left" type="button" data-lq-row="lq-illus-row" data-lq-dir="-1">&#8592;</button>
        <button class="lq-arrow lq-arrow-right" type="button" data-lq-row="lq-illus-row" data-lq-dir="1">&#8594;</button>
        <div class="lq-row" id="lq-illus-row">
          <div class="lq-poster lq-illus-card" data-lq-open-lightbox>
            <div class="lq-poster-img lq-cover-art-frame">
              <img class="lq-cover-art" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhD3CzrpqxYqmN-lEMaxaumMnyE7go66e336yjIKnlxT-FmJfzmXilLw5tfEfhsWK4nWxFgu_asKWVU1W6goXkZU8QFGQrXEr6c7yAhvZYHofl-_8bZat-I0Po7UaS6xRmwEFl8YgxbVKHHhS6LvbrFWF7jm1qPPwlKZ8gXn20vbc2a7FfafXsImqs0C38/s1600/EPSON010.JPG" alt="Un boceto de un enemigo de Lúmen">
              <div class="lq-poster-overlay"><span class="lq-poster-overlay-text">Ver imagen</span></div>
            </div>
            <div class="lq-poster-label">Un boceto de un enemigo</div>
          </div>
          <div class="lq-poster lq-illus-card" data-lq-open-lightbox>
            <div class="lq-poster-img lq-cover-art-frame">
              <img class="lq-cover-art" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAHIHpxxGHH1kSzsaPvfGHRMp2qW8G-8WmeOIHpLxCu8Ikmso_Xx6hdRRfSTOQ4j4CpChq4tFaR2ObFpvCFrv5U0jJNSP1LIT9CWh5CuqUDRNRp2DIr7DeuurJPJN5U3slUKjfFa1wWhmaQkM-slb7jqX2tvKSpRTuLw5jdHcVUk_vJsocEw56cehoiGs/s1600/Fondo%20men%C3%BA.JPG" alt="Fondo del menú inicial de Lúmen">
              <div class="lq-poster-overlay"><span class="lq-poster-overlay-text">Ver imagen</span></div>
            </div>
            <div class="lq-poster-label">Fondo del menú</div>
          </div>
          <div class="lq-poster lq-illus-card" data-lq-open-lightbox>
            <div class="lq-poster-img lq-cover-art-frame">
              <img class="lq-cover-art" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgjqWJcwSg62ctqengn2viRLfiCZ_clXaLIQhN68CCuPeusgVAbQMG_gUaVNKxoAsj55DIeYC0RyieqTS_bfhqx5CtgS_-PSlP_mBNmtGav9zGvSRZql7BQZkQQnnJotJtsksI3ANdyfJCgWAsX8JUWZ6tMVFFJVzBkWz55yNlEkKA8fmeyGzqrAvBZ3o/s1600/Boceto%20poster%20final.JPG" alt="Símplemente un boceto de un poster de Lúmen">
              <div class="lq-poster-overlay"><span class="lq-poster-overlay-text">Ver imagen</span></div>
            </div>
            <div class="lq-poster-label">Símplemente un boceto de un poster</div>
          </div>
          <div class="lq-poster lq-illus-card" data-lq-open-lightbox>
            <div class="lq-poster-img lq-cover-art-frame">
              <img class="lq-cover-art" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOUthM1oqRmMEZQFZ-jTsV4hkzkHWfTWZWMJrfNPJSH6AmLvkES1jjWxvjVmpotpajPCCTKTj4ElJw17k62DtfAbcybaED33cGRMc6JLeXcLnMk81VbwRa6QtK6uQD7H7oRrBWjn6WAbDl-n2K0uiE1Jbf9eAyUzI3Y4wj6j7bhEp7454Kzo7qQm5tt34/s1600/EPSON001.JPG" alt="Sprite del errante siendo golpeado de Lúmen">
              <div class="lq-poster-overlay"><span class="lq-poster-overlay-text">Ver imagen</span></div>
            </div>
            <div class="lq-poster-label">Sprite del errante siendo golpeado</div>
          </div>
          <div class="lq-poster lq-illus-card" data-lq-open-lightbox>
            <div class="lq-poster-img lq-cover-art-frame">
              <img class="lq-cover-art" src="https://pbs.twimg.com/media/HNeziANX0AE6iQu?format=jpg&name=4096x4096" alt="Ilustración de Lúmen">
              <div class="lq-poster-overlay"><span class="lq-poster-overlay-text">Ver imagen</span></div>
            </div>
            <div class="lq-poster-label">Solo un poster (Aún sin color)</div>
            <p class="lq-illust-note">Esta imagen no está en su máxima calidad / resolución.</p>
          </div>
          <div class="lq-poster lq-illus-card" data-lq-open-lightbox>
            <div class="lq-poster-img lq-cover-art-frame">
              <img class="lq-cover-art" src="https://media.base44.com/images/public/6a68f46d82ce25dfe7a4b8fc/adcc3a64f_IMG-20260728-WA0008.jpg" alt="Arte conceptual a lápiz del errante">
              <div class="lq-poster-overlay"><span class="lq-poster-overlay-text">Ver imagen</span></div>
            </div>
            <div class="lq-poster-label">Arte conceptual a lápiz del errante</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lq-gallery-illustrations" style="margin-top:5rem">
      <div class="lq-proy-header"><span class="lq-proy-label">Screenshots</span><h2 class="lq-proy-title">Capturas de pantalla de Lúmen</h2></div>
      <div class="lq-row-wrap">
        <div class="lq-row" id="lq-screenshots-row">
          <div class="lq-poster lq-illus-card" data-lq-open-lightbox>
            <div class="lq-poster-img lq-cover-art-frame">
              <img class="lq-cover-art" src="https://pbs.twimg.com/media/HJcD1WaWoAEX2hI?format=png&name=900x900" alt="Captura de pantalla de Lúmen">
              <div class="lq-poster-overlay"><span class="lq-poster-overlay-text">Ver imagen</span></div>
            </div>
            <div class="lq-poster-label">Errante en la primera habitación del juego</div>
            <p class="lq-illust-note">Esta imagen no está en su máxima calidad / resolución.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  
`;

export const foot_script = `
<footer class="lq-footer lq-gallery-footer">
    <canvas class="lq-footer-mirror" aria-hidden="true"></canvas>
    <div class="lq-footer-shimmer" aria-hidden="true"></div>
    <div class="lq-footer-gloss" aria-hidden="true"></div>
    <div class="lq-footer-inner">
      <div class="lq-footer-brand">
        <img src="https://blogger.googleusercontent.com/img/a/AVvXsEi6oGzPeDv1Pfc5h8v6rFfrOjPjL_p6bKyf0_qJpQ4TA3O9ZJsazWFa4PuhL0qzIXX6-tvyJiYGVSRqEkGENX7dU0M5zLfgPzPrWsbr5J1e_q2QP8G_QI_3YX8REA23UKfQRhzBvzmhlh-IlS-6k87n8vQ3k-YkLB9Avuu2MaDQc7UnuRmF9bnrYyrzlSuR=s16000" alt="LICUADO Scriptorium">
        <p class="lq-footer-tagline">He aquí las pruebas de que este proyecto existe.</p>
      </div>
      <div>
        <p class="lq-footer-nav-title">Navegar</p>
        <ul class="lq-footer-nav">
          <li><a href="/">Volver a LICUADO</a></li>
        </ul>
      </div>
    </div>
    <div class="lq-footer-bottom">
      <span class="lq-footer-copy">&copy; 2026 LICUADO Scriptorium.</span>
      <button type="button" class="lq-footer-made lq-dios-link" data-lq-open-pipeline>Aburrimiento ➜ Idea ➜ Papel ➜ Motor ➜ Videojuego</button>
    </div>
  </footer>

  
`;

export const news = `
<section class="lq-news" id="lq-news">
    <a class="lq-btn lq-scriptorium-back" href="/">&#8592; Volver</a>
    <div class="lq-glow"></div>
    <div class="lq-scan"></div>
    <h2 class="lq-proy-title" style="position:relative;z-index:2">Notícias</h2>
    <div class="lq-divider"><div class="lq-line"></div><div class="lq-dot"></div><div class="lq-line r"></div></div>
    <div id="lq-news-dynamic" style="width:100%;display:flex;flex-direction:column;align-items:center;"></div>
  </section>

  
`;

export const foot_news = `
<footer class="lq-footer lq-news-footer">
    <canvas class="lq-footer-mirror" aria-hidden="true"></canvas>
    <div class="lq-footer-shimmer" aria-hidden="true"></div>
    <div class="lq-footer-gloss" aria-hidden="true"></div>
    <div class="lq-footer-inner">
      <div class="lq-footer-brand">
        <p class="lq-footer-tagline">Estas notícias si son reales y sin alteración, y como soy yo el mismo que hace las notícias y los hechos, casi te lo puedo asegurar.</p>
      </div>
      <div>
        <p class="lq-footer-nav-title">Navegar</p>
        <ul class="lq-footer-nav">
          <li><a href="/">Volver a LICUADO</a></li>
        </ul>
      </div>
    </div>
    <div class="lq-footer-bottom">
      <span class="lq-footer-copy">&copy; 2026 LICUADO Notícias.</span>
      <button type="button" class="lq-footer-made lq-dios-link" data-lq-open-verdad>¿Realmente es verdad lo que nos cuentan?</button>
    </div>
  </footer>

  
`;
