// Inject the server-rendered French /business page into dist/business/index.html.
// Run after `vite build` and `vite build --ssr src/business-ssr.jsx --outDir dist-ssr`
// (npm run build does all three). Gives real HTML to visitors before JS loads,
// to link-preview crawlers, and a faster first paint.
import fs from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const ssrDir = `${root}dist-ssr`
const page = `${root}dist/business/index.html`

const { render } = await import(pathToFileURL(`${ssrDir}/business-ssr.js`).href)
const html = fs.readFileSync(page, 'utf-8')
const placeholder = '<div id="root"></div>'
if (!html.includes(placeholder)) throw new Error(`${page}: ${placeholder} not found`)

const app = render()
if (!app.includes('Ayoub Taqi')) throw new Error('prerender: unexpected output')
fs.writeFileSync(page, html.replace(placeholder, `<div id="root">${app}</div>`))
fs.rmSync(ssrDir, { recursive: true, force: true })
console.log(`prerendered dist/business/index.html (${Math.round(app.length / 1024)} KB of HTML)`)
