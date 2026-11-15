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
- `/oujda/` — French + Arabic, for local businesses in Oujda (`oujda/index.html` → `src/OujdaPage.jsx`).
  Its Open Graph tags live in `oujda/index.html` (link previews do not run JS).
  Texts are in `oujda` in `src/data.js`; set `oujdaPhoto` there to show a real photo.
  `vercel.json` rewrites `/oujda` → `/oujda/index.html`.
