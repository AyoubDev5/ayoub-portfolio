import { useEffect, useRef, useState } from 'react'
import { contact, businessDemos, businessPage, businessPhoto } from './data'
import { Icon } from './ui'

// 212681189317 -> "06 81 18 93 17" (the format people in Morocco recognise)
const localPhone = ('0' + contact.whatsapp.replace(/^212/, '')).replace(/(\d{2})(?=\d)/g, '$1 ').trim()
const telHref = `tel:+${contact.whatsapp}`
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ---------- small pieces ---------- */

function Eyebrow({ children }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold text-taupe">
      <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />{children}
    </p>
  )
}

function SectionHead({ eyebrow, title, text, center = false }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="h-display mt-5 text-[2rem] font-semibold leading-[1.15] text-cream sm:text-[2.6rem]">{title}</h2>
      {text && <p className="mt-4 text-lg leading-8 text-taupe">{text}</p>}
    </div>
  )
}

/** Primary action: white pill, green WhatsApp mark (recognisable, calm). */
function WhatsAppButton({ href, children, className = '' }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`relative inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-cream px-7 text-base font-bold text-coal-950 shadow-[0_8px_30px_-8px_rgba(203,150,77,0.45)] hover:bg-white ${className}`}>
      <Icon name="whatsapp" className="h-5 w-5 text-[#1da851]" />{children}
    </a>
  )
}

function Card({ as: Tag = 'div', className = '', children, ...rest }) {
  return <Tag className={`rounded-[1.6rem] bg-coal-800/80 ring-1 ring-white/[0.07] ${className}`} {...rest}>{children}</Tag>
}

/* ---------- hero: phone with the WhatsApp booking + floating glass cards ---------- */

function ChatMock({ t }) {
  return (
    <div className="chat-phone relative mx-auto w-[17.5rem] sm:w-[19.5rem]" aria-hidden="true">
      <div className="relative overflow-hidden rounded-[2.2rem] border-[6px] border-[#25221f] bg-[#0b141a] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
        {/* phone status bar */}
        <div className="flex h-7 items-center justify-between bg-[#1f2c34] px-5 text-[11px] font-semibold text-[#e9edef]">
          <span dir="ltr">{t.clock}</span>
          <span className="flex items-center gap-1.5">
            <svg viewBox="0 0 16 10" className="h-2.5 w-4" fill="currentColor"><rect x="0" y="7" width="3" height="3" rx="0.5" /><rect x="4.3" y="5" width="3" height="5" rx="0.5" /><rect x="8.6" y="2.5" width="3" height="7.5" rx="0.5" /><rect x="12.9" y="0" width="3" height="10" rx="0.5" /></svg>
            <svg viewBox="0 0 24 12" className="h-3 w-6" fill="none" stroke="currentColor"><rect x="0.5" y="0.5" width="20" height="11" rx="3" /><rect x="2.5" y="2.5" width="13" height="7" rx="1.5" fill="currentColor" stroke="none" /><path d="M22.5 4v4" strokeLinecap="round" /></svg>
          </span>
        </div>
        {/* notification sliding in from the top */}
        <div className="chat-notif absolute inset-x-2 top-2 z-10 flex items-start gap-2.5 rounded-2xl bg-white/95 p-2.5 shadow-xl">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#25D366] text-white"><Icon name="whatsapp" className="h-5 w-5" /></span>
          <span className="min-w-0 flex-1">
            <span className="flex items-center justify-between gap-2 text-[11px] text-[#4b4f58]"><b className="font-bold text-[#15161b]">WhatsApp</b><span>{t.now}</span></span>
            <span className="block text-[0.8rem] font-bold leading-5 text-[#15161b]">{t.notif}</span>
          </span>
        </div>
        {/* chat header */}
        <div className="flex items-center gap-3 bg-[#1f2c34] px-4 pb-3 pt-1">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-600 text-white"><Icon name="store" className="h-5 w-5" /></span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm font-bold text-white">{t.contact}</span>
            <span className="block text-xs text-[#8696a0]">{t.status}</span>
          </span>
          <span className="rounded-md bg-gold-300 px-2 py-0.5 text-[11px] font-extrabold text-coal-950">{t.label}</span>
        </div>
        {/* chat body: fixed height, so nothing moves while it plays */}
        <div className="chat-bg relative h-[17.5rem] px-3 py-4">
          <div className="chat-typing absolute start-3 top-4 flex items-center gap-1.5 rounded-xl rounded-ss-sm bg-[#202c33] px-3.5 py-3">
            <span className="chat-dot" /><span className="chat-dot" /><span className="chat-dot" />
          </div>
          <div className="chat-msg max-w-[88%] rounded-xl rounded-ss-sm bg-[#202c33] px-3 py-2 text-[0.9rem] leading-6 text-[#e9edef] shadow">
            <p className="text-[11px] font-bold text-[#53bdeb]">{t.via}</p>
            <p className="mt-0.5">{t.message}</p>
            <p className="mt-1 text-end text-[11px] text-[#8696a0]" dir="ltr">{t.time}</p>
          </div>
          <div className="chat-sheet mt-3 flex items-center gap-2.5 rounded-xl bg-white px-3 py-2.5 text-[0.8rem] font-bold leading-5 text-[#15161b] shadow-lg">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#0f9d58] text-white"><Icon name="sheet" className="h-4 w-4" /></span>
            <span className="flex-1">{t.sheet}</span>
            <Icon name="check" className="h-5 w-5 shrink-0 text-[#0f9d58]" />
          </div>
        </div>
      </div>
    </div>
  )
}

/** Small glass card floating next to the phone (reference style: label, line, round icon, bar). */
function GlassCard({ label, title, icon, bar = false, className = '' }) {
  return (
    <div className={`glass-card absolute rounded-2xl bg-coal-700/85 p-4 ring-1 ring-white/[0.09] ${className}`} aria-hidden="true">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[11px] font-semibold text-taupe">{label}</span>
        <span className="grid h-7 w-7 place-items-center rounded-full bg-cream text-coal-950"><Icon name={icon} className="h-3.5 w-3.5" /></span>
      </div>
      <p className="mt-3 text-[0.95rem] font-bold leading-5 text-cream">{title}</p>
      {bar && <span className="mt-3 block h-1 overflow-hidden rounded-full bg-white/10"><span className="glass-bar block h-full rounded-full bg-cream" /></span>}
    </div>
  )
}

/* ---------- demos: card that switches desktop / phone ---------- */

const AUTO_SWITCH_MS = 4200

function DemoShowcase({ demo, lang, t, index }) {
  const [view, setView] = useState('desktop')
  const [manual, setManual] = useState(false) // the visitor chose a view: stop switching for them
  const [paused, setPaused] = useState(false) // hover, touch or keyboard focus
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  const touch = useRef(null)
  const resume = useRef(0)
  const views = [['desktop', 'monitor', t.desktop], ['mobile', 'mobile', t.mobile]]
  const other = (v) => (v === 'desktop' ? 'mobile' : 'desktop')

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.4 })
    io.observe(el)
    return () => { io.disconnect(); clearTimeout(resume.current) }
  }, [])

  // auto-switch only while on screen, not paused, not chosen by hand, motion allowed
  useEffect(() => {
    if (manual || paused || !visible || reduceMotion()) return
    const id = setTimeout(() => setView(other), AUTO_SWITCH_MS + index * 700)
    return () => clearTimeout(id)
  }, [view, manual, paused, visible, index])

  const choose = (v) => { setManual(true); setView(v) }
  const onTouchStart = (e) => {
    clearTimeout(resume.current)
    setPaused(true)
    touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }
  const onTouchEnd = (e) => {
    const s = touch.current
    touch.current = null
    resume.current = setTimeout(() => setPaused(false), 5000)
    if (!s) return
    const dx = e.changedTouches[0].clientX - s.x
    const dy = e.changedTouches[0].clientY - s.y
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.3) choose(other(view)) // horizontal swipe, any direction
  }

  return (
    <article
      className="reveal flex flex-col overflow-hidden rounded-[1.6rem] bg-coal-800/80 ring-1 ring-white/[0.07]"
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false) }}
    >
      <div className="p-3 sm:p-4">
        <div className="demo-stage relative aspect-[16/10.6] overflow-hidden rounded-[1.2rem] bg-coal-700" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div className={`demo-view absolute inset-0 flex flex-col overflow-hidden rounded-[1.2rem] bg-white ${view === 'desktop' ? 'is-on' : ''}`}>
            <span className="flex h-6 shrink-0 items-center gap-1 bg-[#efeae3] px-3" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-black/15" /><span className="h-2 w-2 rounded-full bg-black/15" /><span className="h-2 w-2 rounded-full bg-black/15" />
            </span>
            <img
              src={demo.images[0]}
              srcSet={`${demo.images[0].replace('.webp', '-640.webp')} 640w, ${demo.images[0]} 1280w`}
              sizes="(min-width: 768px) 34rem, 92vw"
              alt={`${demo.name} — ${t.shotDesktop}`} width="1280" height="800" loading="lazy" decoding="async"
              className="min-h-0 w-full flex-1 object-cover object-top"
            />
          </div>
          <div className={`demo-view absolute inset-0 flex justify-center py-3 ${view === 'mobile' ? 'is-on' : ''}`}>
            <span className="block h-full overflow-hidden rounded-[1.2rem] border-[4px] border-[#25221f] bg-black shadow-xl">
              <img
                src={demo.images[1]}
                srcSet={`${demo.images[1].replace('.webp', '-240.webp')} 240w, ${demo.images[1]} 390w`}
                sizes="(min-width: 768px) 140px, 96px"
                alt={`${demo.name} — ${t.shotMobile}`} width="390" height="844" loading="lazy" decoding="async"
                className="block h-full w-auto object-cover object-top"
              />
            </span>
          </div>
          <p className="pointer-events-none absolute start-3 top-3 z-10 max-w-[calc(100%-1.5rem)] rounded-full bg-coal-950/80 px-3 py-1 text-[11px] font-semibold text-cream ring-1 ring-white/10">{t.badge}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col px-6 pb-6 pt-2">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-400">{demo.sector[lang]}</p>
        <h3 className="mt-2 text-xl font-bold text-cream"><bdi>{demo.name}</bdi></h3>
        <p className="mt-2 flex-1 leading-7 text-taupe">{demo.text[lang]}</p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div role="group" aria-label={t.viewLabel} className="inline-flex rounded-full bg-coal-950/70 p-1 ring-1 ring-white/10">
            {views.map(([key, icon, label]) => (
              <button
                key={key}
                type="button"
                aria-pressed={view === key}
                onClick={() => choose(key)}
                className={`inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-4 text-sm font-semibold ${view === key ? 'bg-cream text-coal-950' : 'text-taupe hover:text-cream'}`}
              >
                <Icon name={icon} className="h-4 w-4" />{label}
              </button>
            ))}
          </div>
          <a href={demo.href} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/15 px-5 text-sm font-semibold text-cream hover:bg-white/[0.06]">
            {t.cta}
            <span className="grid h-6 w-6 place-items-center rounded-full bg-cream text-coal-950"><Icon name="external" className="h-3.5 w-3.5 rtl:-scale-x-100" /></span>
          </a>
        </div>
      </div>
    </article>
  )
}

/* ---------- page ---------- */

export default function BusinessPage({ initialLang = 'fr' }) {
  const [lang, setLang] = useState(initialLang)
  const t = businessPage[lang]
  const other = lang === 'fr' ? 'ar' : 'fr'
  const waLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(t.waMsg)}`
  const navItems = [['services', t.nav.services], ['demos', t.nav.demos], ['prix', t.nav.price], ['faq', t.nav.faq]]

  // language: <html> attributes, title, remembered choice, ?lang=ar in the URL
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = t.dir
    document.title = t.title
    try { localStorage.setItem('business-lang', lang) } catch { /* storage blocked */ }
    const url = new URL(window.location.href)
    if (lang === 'ar') url.searchParams.set('lang', 'ar')
    else url.searchParams.delete('lang')
    window.history.replaceState(null, '', url)
  }, [lang, t])

  // short scroll reveals. Content is visible by default; only hidden once JS runs.
  useEffect(() => {
    if (reduceMotion() || !('IntersectionObserver' in window)) return
    const els = [...document.querySelectorAll('.reveal')]
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { rootMargin: '0px 0px -8% 0px' })
    document.documentElement.classList.add('reveal-on')
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // pause the hero loops (chat, glow, floating cards, stars) while the hero is off screen
  const heroRef = useRef(null)
  useEffect(() => {
    const el = heroRef.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([e]) => el.classList.toggle('hero-paused', !e.isIntersecting))
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // steps: the line fills from step 1 to 3 as the list scrolls through the screen.
  // Without JS or with reduced motion the line stays full (--p defaults to 1 in CSS).
  const stepsRef = useRef(null)
  useEffect(() => {
    const box = stepsRef.current
    if (!box || reduceMotion()) return
    const items = [...box.querySelectorAll('li')]
    let raf = 0
    const update = () => {
      raf = 0
      const r = box.getBoundingClientRect()
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.72 - r.top) / r.height))
      box.style.setProperty('--p', p.toFixed(3))
      items.forEach((li, i) => li.classList.toggle('done', p >= i / Math.max(1, items.length - 1) - 0.02))
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    box.classList.add('steps-on')
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="biz min-h-screen overflow-x-clip bg-coal-900 text-cream">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:start-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-cream focus:px-5 focus:py-3 focus:font-bold focus:text-coal-950">{t.skip}</a>

      {/* The framed hero is two pieces with the same background: the top of the frame
          (site header) and the bottom of the frame (first section of <main>). */}
      <header className="frame frame-top mx-2 mt-2 rounded-t-[1.75rem] sm:mx-4 sm:mt-4 sm:rounded-t-[2.25rem]">
        <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-8 sm:py-6">
          <a href="#top" className="flex min-h-[44px] min-w-0 items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-mint-400 to-sky-500 text-sm font-black text-night-950" aria-hidden="true">AT</span>
            <span className="truncate text-base font-bold text-cream">{t.name}</span>
          </a>
          <nav aria-label={t.nav.label} className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navItems.map(([id, label]) => (
                <li key={id}><a href={`#${id}`} className="inline-flex min-h-[44px] items-center rounded-full px-4 text-sm font-medium text-taupe hover:text-cream">{label}</a></li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setLang(other)} lang={other} className="min-h-[44px] rounded-full bg-white/[0.06] px-4 text-sm font-semibold text-cream ring-1 ring-white/10 hover:bg-white/[0.1]">
              {t.other}
            </button>
            <a href={waLink} target="_blank" rel="noreferrer" aria-label={t.hero.ctaWhatsapp} className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-1.5 rounded-full bg-cream px-3 text-sm font-bold text-coal-950 sm:px-4">
              <Icon name="whatsapp" className="h-5 w-5 text-[#1da851]" /><span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* 1. hero: bottom of the frame */}
        <section id="top" ref={heroRef} className="frame frame-bottom relative mx-2 overflow-hidden rounded-b-[1.75rem] sm:mx-4 sm:rounded-b-[2.25rem]">
          <div className="relative mx-auto max-w-4xl px-5 pt-8 text-center sm:pt-14">
            <div className="hx flex justify-center" style={{ '--d': '0ms' }}><Eyebrow>{t.hero.eyebrow}</Eyebrow></div>
            {/* the title is the largest paint: shown at once, not faded in */}
            <h1 className="h-display mt-6 text-[2.2rem] font-semibold leading-[1.1] sm:text-[3.3rem] lg:text-[3.6rem]">
              <span className="text-gold-grad">{t.hero.name}</span>{' '}
              <span className="text-cream">{t.hero.title}</span>
            </h1>
            <p className="hx mx-auto mt-6 max-w-xl text-base leading-7 text-taupe sm:text-lg sm:leading-8" style={{ '--d': '120ms' }}>{t.hero.text}</p>
            <div className="hx mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ '--d': '220ms' }}>
              <WhatsAppButton href={waLink} className="w-full sm:w-auto">{t.hero.ctaWhatsapp}</WhatsAppButton>
              <a href="#demos" className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-white/15 px-7 text-base font-semibold text-cream hover:bg-white/[0.06] sm:w-auto">
                {t.hero.ctaWork}
              </a>
            </div>
          </div>

          {/* stage: glow ring + phone rising from the bottom edge + glass cards */}
          <div className="hx chat relative mx-auto mt-12 h-[21rem] max-w-5xl sm:mt-14 sm:h-[23rem]" style={{ '--d': '320ms' }}>
            <div className="hero-glow" aria-hidden="true" />
            <div className="hero-ring" aria-hidden="true" />
            <ChatMock t={t.chat} />
            <GlassCard label={t.chat.cardA.label} title={t.chat.cardA.title} icon="whatsapp" className="glass-a hidden w-[13rem] md:block md:start-[3%] md:top-[18%] lg:start-[9%]" />
            <GlassCard label={t.chat.cardB.label} title={t.chat.cardB.title} icon="sheet" bar className="glass-b end-2 top-[56%] w-[10.5rem] sm:end-[6%] md:end-[3%] md:top-[44%] md:w-[13rem] lg:end-[9%]" />
          </div>
        </section>
        <p className="mx-auto max-w-xl px-6 pt-4 text-center text-sm leading-6 text-taupe/80">{t.chat.caption}</p>

        {/* 2. services */}
        <section id="services" className="mx-auto max-w-6xl scroll-mt-8 px-4 py-20 sm:px-8 sm:py-28">
          <SectionHead eyebrow={t.services.eyebrow} title={t.services.title} />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {t.services.items.map((s, i) => (
              <Card as="li" key={s.title} className="reveal p-6 sm:p-7" style={{ '--i': i }}>
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs font-semibold text-taupe">{t.services.label} 0{i + 1}</span>
                  <span className="flex items-center gap-2">
                    {s.quote && <span className="rounded-full bg-gold-400/15 px-3 py-1 text-xs font-semibold text-gold-300">{t.services.quote}</span>}
                    <span className="svc-icon grid h-10 w-10 place-items-center rounded-full bg-cream text-coal-950"><Icon name={s.icon} className="h-5 w-5" /></span>
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-cream">{s.title}</h3>
                <p className="mt-1 text-sm text-taupe">{t.services.gets}</p>
                <ul className="mt-5 space-y-2.5 border-t border-white/[0.07] pt-5">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 leading-7 text-cream/90">
                      <Icon name="check" className="mt-1.5 h-4 w-4 shrink-0 text-gold-400" />{pt}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </ul>
        </section>

        {/* 3. demos */}
        <section id="demos" className="mx-auto max-w-6xl scroll-mt-8 px-4 pb-20 sm:px-8 sm:pb-28">
          <SectionHead eyebrow={t.demos.eyebrow} title={t.demos.title} text={t.demos.text} />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {businessDemos.map((d, i) => <DemoShowcase key={d.name} demo={d} lang={lang} t={t.demos} index={i} />)}
          </div>
        </section>

        {/* 4. how I work */}
        <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-8 sm:pb-28">
          <SectionHead eyebrow={t.steps.eyebrow} title={t.steps.title} />
          <div ref={stepsRef} className="steps relative mt-12">
            {/* progress line: vertical on phones, horizontal from md */}
            <span aria-hidden="true" className="steps-track steps-track-v md:hidden"><span className="steps-fill" /></span>
            <span aria-hidden="true" className="steps-track steps-track-h hidden md:block"><span className="steps-fill" /></span>
            <ol className="relative grid gap-9 md:grid-cols-3 md:gap-6">
              {t.steps.items.map((s, i) => (
                <li key={s.title} className="relative flex gap-5 md:flex-col md:gap-5">
                  <span className="step-badge relative grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold-400 text-lg font-bold text-coal-950">{i + 1}</span>
                  <div>
                    <h3 className="text-lg font-bold leading-7 text-cream">{s.title}</h3>
                    <p className="mt-1.5 leading-7 text-taupe">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 5. price: a second framed card */}
        <section id="prix" className="scroll-mt-8 px-2 pb-20 sm:px-4 sm:pb-28">
          <div className="frame frame-full relative mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] px-5 py-14 sm:rounded-[2.25rem] sm:px-10 sm:py-20">
            <div className="hero-glow hero-glow--low" aria-hidden="true" />
            <div className="relative">
              <SectionHead eyebrow={t.price.eyebrow} title={t.price.title} center />
              <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
                {t.price.cards.map((c) => (
                  <div key={c.label} className="reveal rounded-[1.4rem] bg-white/[0.04] p-7 ring-1 ring-white/[0.09]">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-taupe">{c.label}</p>
                      <span className="grid h-7 w-7 place-items-center rounded-full bg-cream text-coal-950" aria-hidden="true"><Icon name={c.from ? 'page' : 'sheet'} className="h-3.5 w-3.5" /></span>
                    </div>
                    {c.from && <p className="mt-6 text-sm text-taupe">{c.from}</p>}
                    <p className={`h-display ${c.from ? 'mt-1' : 'mt-6'} text-4xl font-semibold text-cream sm:text-5xl`}><bdi>{c.value}</bdi></p>
                    <p className="mt-5 leading-7 text-taupe">{c.note}</p>
                  </div>
                ))}
              </div>
              <p className="reveal mx-auto mt-4 flex max-w-4xl items-start gap-3 rounded-full bg-white/[0.04] px-5 py-4 text-sm font-semibold leading-6 text-cream ring-1 ring-white/[0.09] sm:text-base">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />{t.price.monthly}
              </p>
            </div>
          </div>
        </section>

        {/* 6. about */}
        <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-8 sm:pb-28">
          <Card className="flex flex-col gap-8 p-7 sm:flex-row sm:items-center sm:gap-12 sm:p-10">
            {businessPhoto ? (
              <img src={businessPhoto} alt={t.about.photoAlt} width="160" height="160" loading="lazy" decoding="async" className="h-36 w-36 shrink-0 rounded-[1.4rem] object-cover sm:h-40 sm:w-40" />
            ) : (
              <span className="grid h-36 w-36 shrink-0 place-items-center rounded-[1.4rem] bg-gradient-to-br from-mint-400 to-sky-500 text-5xl font-black text-night-950 sm:h-40 sm:w-40" aria-hidden="true">AT</span>
            )}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <Eyebrow>{t.about.eyebrow}</Eyebrow>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-cream ring-1 ring-white/10">
                  <Icon name="pin" className="h-3.5 w-3.5 text-gold-400" />{t.about.chip}
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {t.about.lines.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-lg leading-8 text-cream/90">
                    <Icon name="check" className="mt-2 h-5 w-5 shrink-0 text-gold-400" />{line}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </section>

        {/* 7. FAQ (native details: works without JS, keyboard and screen readers) */}
        <section id="faq" className="mx-auto max-w-3xl scroll-mt-8 px-4 pb-20 sm:px-8 sm:pb-28">
          <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} center />
          <div className="mt-10 space-y-3">
            {t.faq.items.map((f) => (
              <details key={f.q} className="group rounded-[1.4rem] bg-coal-800/80 ring-1 ring-white/[0.07] open:ring-white/[0.14]">
                <summary className="flex min-h-[60px] cursor-pointer items-center justify-between gap-4 rounded-[1.4rem] px-6 py-4 text-start text-base font-semibold text-cream sm:text-lg">
                  {f.q}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/[0.06] ring-1 ring-white/10">
                    <Icon name="chevron" className="h-4 w-4 text-cream transition-transform group-open:rotate-180" />
                  </span>
                </summary>
                <p className="px-6 pb-6 leading-7 text-taupe">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 8. final CTA + contact: third framed card */}
        <section id="contact" className="px-2 pb-4 sm:px-4">
          <div className="frame frame-full relative mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] px-5 py-16 text-center sm:rounded-[2.25rem] sm:px-12 sm:py-24">
            <div className="hero-glow hero-glow--low" aria-hidden="true" />
            <div className="relative">
              <h2 className="h-display text-[2.1rem] font-semibold leading-tight text-cream sm:text-6xl">{t.contact.title}</h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-taupe">{t.contact.text}</p>
              <WhatsAppButton href={waLink} className="mt-9 w-full sm:w-auto">{t.hero.ctaWhatsapp}</WhatsAppButton>
              <dl className="mx-auto mt-12 grid max-w-2xl gap-3 text-start sm:grid-cols-2">
                <div className="rounded-[1.4rem] bg-white/[0.04] p-5 ring-1 ring-white/[0.09]">
                  <dt className="flex items-center gap-2 text-sm text-taupe"><Icon name="phone" className="h-4 w-4" />{t.contact.phone}</dt>
                  <dd className="mt-1"><a href={telHref} className="inline-flex min-h-[44px] items-center text-xl font-bold text-cream" dir="ltr">{localPhone}</a></dd>
                </div>
                <div className="rounded-[1.4rem] bg-white/[0.04] p-5 ring-1 ring-white/[0.09]">
                  <dt className="flex items-center gap-2 text-sm text-taupe"><Icon name="mail" className="h-4 w-4" />{t.contact.email}</dt>
                  <dd className="mt-1"><a href={`mailto:${contact.email}`} className="inline-flex min-h-[44px] items-center break-all text-base font-semibold text-cream" dir="ltr">{contact.email}</a></dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-center gap-3 px-4 pb-28 pt-8 text-center text-sm text-taupe sm:flex-row sm:justify-center sm:gap-6 sm:pb-10">
        <span>© {new Date().getFullYear()} {t.name} · {t.footer}</span>
        <button type="button" onClick={() => setLang(other)} lang={other} className="min-h-[44px] rounded-full px-4 font-semibold text-cream ring-1 ring-white/10 hover:bg-white/[0.06]">{t.other}</button>
      </footer>

      {/* floating WhatsApp: sticky bar on phones, round button from sm. Each pulses once after 5 s (CSS). */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-coal-950/90 p-3 backdrop-blur-md sm:hidden">
        <WhatsAppButton href={waLink} className="wa-pulse w-full">{t.hero.ctaWhatsapp}</WhatsAppButton>
      </div>
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        aria-label={t.hero.ctaWhatsapp}
        className="wa-pulse fixed bottom-6 end-6 z-40 hidden h-14 w-14 place-items-center rounded-full bg-[#25D366] text-coal-950 shadow-xl shadow-black/40 hover:bg-[#2fe072] sm:grid"
      >
        <Icon name="whatsapp" className="h-7 w-7" />
      </a>
    </div>
  )
}
