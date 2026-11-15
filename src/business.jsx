import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import './business.css'
import BusinessPage from './BusinessPage.jsx'

// The French page is pre-rendered into business/index.html at build time
// (scripts/prerender.mjs), so it shows even before / without JS.
// French visitors: hydrate it. Arabic (?lang=ar or saved choice): render fresh.
function detectLang() {
  try {
    const q = new URLSearchParams(window.location.search).get('lang')
    if (q === 'ar' || q === 'fr') return q
    const saved = localStorage.getItem('business-lang')
    if (saved === 'ar' || saved === 'fr') return saved
  } catch { /* storage blocked */ }
  return 'fr'
}

const lang = detectLang()
const root = document.getElementById('root')
const app = <StrictMode><BusinessPage initialLang={lang} /></StrictMode>

if (lang === 'fr' && root.hasChildNodes()) hydrateRoot(root, app)
else {
  root.textContent = ''
  createRoot(root).render(app)
}
