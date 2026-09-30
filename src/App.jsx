import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
// Add page imports here
import Inicio from './pages/Inicio';
import MitteSignum from './pages/MitteSignum';
import LicuadoScriptorium from './pages/LicuadoScriptorium';
import Nuntium from './pages/Nuntium';
import Editor from './pages/Editor';

// ── Rutas de la web (publicada en Cloudflare Pages, 100 % estática) ──
// No hay login ni Base44: cualquier visitante entra directamente.
// Cada pantalla es una página propia con su URL:
//   /                      → Inicio (LICUADO)
//   /Mitte signum          → Envía una señal
//   /LICUADO Scriptorium   → Galería del Scriptorium
//   /nuntium               → Notícias
//   /editor                → Editor privado (sin ningún enlace público;
//                            solo se llega escribiendo la URL directamente)
// Los enlaces internos del HTML usan las URLs reales, así que funcionan tanto
// con navegación SPA (React Router) como con recarga directa de la página.

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Mitte signum" element={<MitteSignum />} />
          <Route path="/LICUADO Scriptorium" element={<LicuadoScriptorium />} />
          <Route path="/nuntium" element={<Nuntium />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
