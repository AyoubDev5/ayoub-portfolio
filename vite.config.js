import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Two pages: / (Gulf agencies, Arabic) and /business/ (local businesses in Oujda, FR + AR).
// Each page is its own HTML file so link previews read its Open Graph tags without JS.

// Same redirects as vercel.json, for `vite dev` / `vite preview`:
//   /oujda, /oujda/  -> /business/   (old route, keeps old links working)
//   /business        -> /business/   (otherwise dev/preview fall back to the home page)
const pageRedirects = () => {
  const redirect = (req, res, next) => {
    const [path, query] = req.url.split('?')
    const target = path === '/oujda' || path === '/oujda/' || path === '/business' ? '/business/' : null
    if (target) {
      res.statusCode = 301
      res.setHeader('Location', target + (query ? `?${query}` : ''))
      return res.end()
    }
    next()
  }
  return {
    name: 'page-redirects',
    configureServer: (server) => { server.middlewares.use(redirect) },
    configurePreviewServer: (server) => { server.middlewares.use(redirect) },
  }
}

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), pageRedirects()],
  // The SSR build (src/business-ssr.jsx, used by scripts/prerender.mjs) takes its
  // input from the --ssr flag; only the client build needs the two HTML pages.
  build: isSsrBuild ? {} : {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        business: fileURLToPath(new URL('./business/index.html', import.meta.url)),
      },
    },
  },
}))
