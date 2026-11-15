// Server entry used only at build time by scripts/prerender.mjs.
import { renderToString } from 'react-dom/server'
import BusinessPage from './BusinessPage.jsx'

export function render() {
  return renderToString(<BusinessPage initialLang="fr" />)
}
