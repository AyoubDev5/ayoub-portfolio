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
- `/business` — French + Arabic, for local businesses in Oujda (`business/index.html` → `src/BusinessPage.jsx`).
  Its Open Graph tags live in `business/index.html` (link previews do not run JS).
  Texts are in `businessPage` in `src/data.js`; set `businessPhoto` there to show a real photo.
  `vercel.json` rewrites `/business` → `/business/index.html` and permanently redirects
  the old `/oujda` route (and `/oujda/...`) to `/business`, keeping `?lang=ar`.
