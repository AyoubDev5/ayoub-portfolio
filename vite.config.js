import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Two pages: / (Gulf agencies, Arabic) and /oujda/ (local businesses in Oujda, FR + AR).
// Each page is its own HTML file so link previews read its Open Graph tags without JS.

// In `vite dev` / `vite preview`, "/oujda" (no slash) would fall back to the home page.
// Redirect it to "/oujda/" so local testing matches production (vercel.json handles prod).
const oujdaSlash = () => {
  const redirect = (req, res, next) => {
    const [path, query] = req.url.split('?')
    if (path === '/oujda') {
      res.statusCode = 301
      res.setHeader('Location', '/oujda/' + (query ? `?${query}` : ''))
      return res.end()
    }
    next()
  }
  return {
    name: 'oujda-trailing-slash',
    configureServer: (server) => { server.middlewares.use(redirect) },
    configurePreviewServer: (server) => { server.middlewares.use(redirect) },
  }
}

export default defineConfig({
  plugins: [react(), oujdaSlash()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        oujda: fileURLToPath(new URL('./oujda/index.html', import.meta.url)),
      },
    },
  },
})
