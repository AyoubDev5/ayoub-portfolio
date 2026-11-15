# Ayoub Taqi — Portfolio

Arabic (RTL) portfolio for agency white-label work. Built with React, Vite, Tailwind CSS and Framer Motion.

```bash
npm install
npm run dev
npm run build
```

Content lives in `src/data.js`.

## Pages

- `/` — Arabic, for Gulf agencies (`index.html` → `src/App.jsx`).
- `/business` — French + Arabic, for small businesses in Morocco (`business/index.html` → `src/BusinessPage.jsx`,
  styles in `src/business.css`). Its Open Graph tags live in `business/index.html` (link previews do not run JS).
  Texts are in `businessPage` in `src/data.js`; set `businessPhoto` there to show a real photo.
  Demos come from `businessDemos` (add a demo-* site there; screenshots in `public/work/`, with `-640` / `-240` small versions).
  `npm run build` also pre-renders the French page into `dist/business/index.html`
  (`src/business-ssr.jsx` + `scripts/prerender.mjs`), so it shows before JS loads.
  `vercel.json` rewrites `/business` → `/business/index.html` and permanently redirects
  the old `/oujda` route (and `/oujda/...`) to `/business`, keeping `?lang=ar`.
