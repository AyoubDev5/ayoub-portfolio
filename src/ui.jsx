// Components shared by the home page (App.jsx) and the /oujda page (OujdaPage.jsx).
// No framer-motion here, so the /oujda page stays light.

export function Icon({ name, className = 'h-6 w-6' }) {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', className, viewBox: '0 0 24 24', 'aria-hidden': true }
  switch (name) {
    case 'store': return <svg {...p}><path d="M3 9l1.5-5h15L21 9" /><path d="M4 9v11h16V9" /><path d="M3 9a3 3 0 006 0 3 3 0 006 0 3 3 0 006 0" /><path d="M10 20v-5h4v5" /></svg>
    case 'plug': return <svg {...p}><path d="M9 2v5M15 2v5" /><path d="M6 7h12v4a6 6 0 01-12 0V7z" /><path d="M12 17v5" /></svg>
    case 'chart': return <svg {...p}><path d="M3 3v18h18" /><path d="M7 15l4-4 3 3 5-6" /></svg>
    case 'spark': return <svg {...p}><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" /><path d="M19 16l.7 1.8L21.5 18.5l-1.8.7L19 21l-.7-1.8-1.8-.7 1.8-.7L19 16z" /></svg>
    case 'arrow': return <svg {...p}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
    case 'external': return <svg {...p}><path d="M7 17L17 7M8 7h9v9" /></svg>
    case 'copy': return <svg {...p}><rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15V5a2 2 0 012-2h10" /></svg>
    case 'check': return <svg {...p}><path d="M5 12l5 5 9-11" /></svg>
    case 'menu': return <svg {...p}><path d="M4 7h16M4 12h16M4 17h10" /></svg>
    case 'close': return <svg {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
    case 'up': return <svg {...p}><path d="M12 19V5M6 11l6-6 6 6" /></svg>
    case 'mail': return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
    case 'expand': return <svg {...p}><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
    case 'phone': return <svg {...p}><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z" /></svg>
    case 'globe': return <svg {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" /></svg>
    case 'pin': return <svg {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" /><circle cx="12" cy="10" r="3" /></svg>
    case 'edit': return <svg {...p}><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z" /></svg>
    case 'mobile': return <svg {...p}><rect x="6" y="2" width="12" height="20" rx="2.5" /><path d="M11 18h2" /></svg>
    case 'page': return <svg {...p}><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>
    case 'whatsapp':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.1c-.24.68-1.42 1.3-1.95 1.35-.5.05-.97.23-3.27-.68-2.77-1.09-4.52-3.92-4.66-4.1-.13-.18-1.11-1.48-1.11-2.82 0-1.34.7-2 .95-2.27.25-.27.54-.34.72-.34h.52c.17 0 .39-.06.61.47.23.54.77 1.88.84 2.02.07.13.11.29.02.47-.09.18-.13.29-.27.45l-.4.47c-.13.13-.27.28-.12.55.16.27.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.27.13.43.11.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.23.61-.14.25.09 1.58.75 1.85.88.27.13.45.2.52.32.07.11.07.66-.17 1.33z" />
        </svg>
      )
    default: return null
  }
}

/**
 * Card for one car rental demo (desktop screenshot + phone screenshot on top).
 * Uses logical classes (start/end), so it works in RTL and LTR.
 *  - `as`: wrapper element (the home page passes motion.article)
 *  - `onOpen`: if given, the screenshots open a lightbox; otherwise they link to the demo
 *  - `stack`: tech tags; omit to hide them (the /oujda page does)
 */
export function DemoCard({ demo, text, badge, cta, features, stack, onOpen, as: Tag = 'article', className = '', ...rest }) {
  const visualClass = 'relative block bg-gradient-to-br from-night-700 to-night-900 px-5 pb-9 pt-5 text-start sm:px-6'
  const visual = (
    <>
      <span className="block overflow-hidden rounded-xl border border-white/10 bg-night-950 shadow-2xl shadow-black/40">
        <span className="flex gap-1 border-b border-white/10 px-3 py-2" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-white/20" /><span className="h-2 w-2 rounded-full bg-white/20" /><span className="h-2 w-2 rounded-full bg-white/20" />
        </span>
        <img src={demo.images[0]} alt="" loading="lazy" decoding="async" width="1280" height="800" className="block aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
      </span>
      <span className="absolute bottom-4 end-4 w-[24%] max-w-[7.5rem] overflow-hidden rounded-[1.1rem] border-[3px] border-night-950 bg-night-950 shadow-2xl shadow-black/60 ring-1 ring-white/15 sm:end-5">
        <img src={demo.images[1]} alt="" loading="lazy" decoding="async" width="390" height="844" className="block aspect-[390/844] w-full object-cover object-top" />
      </span>
      <span className="pointer-events-none absolute end-8 top-[2.6rem] max-w-[calc(100%-4rem)] rounded-full bg-amber-400 px-3 py-1 text-xs font-extrabold text-night-950 shadow-lg">{badge}</span>
    </>
  )
  return (
    <Tag className={`group grad-border flex flex-col overflow-hidden rounded-3xl bg-night-800/70 ${className}`} {...rest}>
      {onOpen ? (
        <button type="button" onClick={onOpen} className={`${visualClass} cursor-zoom-in`} aria-label={`${demo.name} — ${badge}`}>{visual}</button>
      ) : (
        <a href={demo.href} target="_blank" rel="noreferrer" className={visualClass} aria-label={`${demo.name} — ${cta}`} tabIndex={-1}>{visual}</a>
      )}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-extrabold text-white"><bdi>{demo.name}</bdi></h3>
        <p className="mt-3 leading-8 text-slate-400">{text}</p>
        <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm font-semibold text-slate-300">
              <Icon name="check" className="h-4 w-4 shrink-0 text-mint-400" />{f}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-1 flex-wrap items-end justify-between gap-3">
          {stack && (
            <div className="flex flex-wrap gap-1.5" dir="ltr">
              {stack.map((t) => <span key={t} className="rounded-md border border-white/10 px-2 py-0.5 text-[11px] font-semibold text-slate-400">{t}</span>)}
            </div>
          )}
          <a href={demo.href} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl bg-white/[0.06] px-4 py-2.5 text-sm font-bold text-mint-300 transition hover:bg-white/10 hover:text-white">
            {cta}<Icon name="external" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Tag>
  )
}
