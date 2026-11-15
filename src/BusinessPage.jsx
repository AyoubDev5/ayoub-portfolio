import { useEffect, useState } from 'react'
import { contact, businessDemos, businessPage, businessPhoto } from './data'
import { Icon } from './ui'

// 212681189317 -> "06 81 18 93 17" (the format people in Morocco recognise)
const localPhone = ('0' + contact.whatsapp.replace(/^212/, '')).replace(/(\d{2})(?=\d)/g, '$1 ').trim()
const telHref = `tel:+${contact.whatsapp}`

/* ---------- small pieces ---------- */

function Eyebrow({ children, dark = false }) {
  return (
    <p className={`inline-flex items-center gap-2 text-sm font-bold ${dark ? 'text-mint-400' : 'text-clay-700'}`}>
      <span className={`h-px w-7 ${dark ? 'bg-mint-400' : 'bg-clay-600'}`} />{children}
    </p>
  )
}

function SectionHead({ eyebrow, title, text }) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-[1.9rem] font-black leading-tight text-ink-900 sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg leading-8 text-ink-600">{text}</p>}
    </div>
  )
}

function WhatsAppButton({ href, children, className = '' }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`inline-flex min-h-[56px] items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-7 py-4 text-lg font-extrabold text-ink-900 shadow-lg shadow-[#25D366]/25 transition hover:-translate-y-0.5 hover:bg-[#2fe072] ${className}`}>
      <Icon name="whatsapp" className="h-6 w-6" />{children}
    </a>
  )
}

/* ---------- hero: the WhatsApp booking mock (signature moment) ---------- */

function ChatMock({ t }) {
  return (
    <figure className="hx mx-auto w-full max-w-[20rem] lg:mx-0" style={{ '--d': '380ms' }}>
      <div className="overflow-hidden rounded-[2rem] border-[6px] border-[#1d2328] bg-[#0b141a] shadow-2xl shadow-black/50" aria-hidden="true">
        {/* chat header */}
        <div className="flex items-center gap-3 bg-[#1f2c34] px-4 py-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-mint-700 text-sm font-black text-white">
            <Icon name="store" className="h-5 w-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm font-bold text-white">{t.contact}</span>
            <span className="block text-xs text-[#8696a0]">{t.status}</span>
          </span>
          <span className="rounded-md bg-amber-300 px-2 py-0.5 text-[11px] font-extrabold text-ink-900">{t.label}</span>
        </div>
        {/* chat body: fixed height so nothing moves while the animation plays */}
        <div className="chat-bg relative h-[17.5rem] px-3 py-4">
          <div className="chat-typing absolute start-3 top-4 flex items-center gap-1.5 rounded-xl rounded-ss-sm bg-[#202c33] px-3.5 py-3">
            <span className="chat-dot" /><span className="chat-dot" /><span className="chat-dot" />
            <span className="sr-only">{t.typing}</span>
          </div>
          <div className="chat-msg max-w-[88%] rounded-xl rounded-ss-sm bg-[#202c33] px-3 py-2 text-[0.92rem] leading-6 text-[#e9edef] shadow">
            <p className="text-[11px] font-bold text-[#53bdeb]">{t.via}</p>
            <p className="mt-0.5">{t.message}</p>
            <p className="mt-1 text-end text-[11px] text-[#8696a0]" dir="ltr">{t.time}</p>
          </div>
          <div className="chat-sheet mt-3 flex items-center gap-2.5 rounded-xl bg-white px-3 py-2.5 text-[0.82rem] font-bold leading-5 text-ink-900 shadow-lg">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#0f9d58] text-white"><Icon name="sheet" className="h-4 w-4" /></span>
            <span className="flex-1">{t.sheet}</span>
            <Icon name="check" className="h-5 w-5 shrink-0 text-mint-700" />
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-sm leading-6 text-slate-400 lg:text-start">{t.caption}</figcaption>
    </figure>
  )
}

/* ---------- demos: card with desktop / phone switch ---------- */

function DemoShowcase({ demo, lang, t }) {
  const [view, setView] = useState('desktop')
  const views = [['desktop', 'monitor', t.desktop], ['mobile', 'mobile', t.mobile]]
  return (
    <article className="reveal flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-sand-300">
      <div className="bg-sand-200 p-4 sm:p-5">
        <p className="mb-3 inline-block rounded-full bg-ink-900 px-3 py-1 text-xs font-bold text-white">{t.badge}</p>
        <div className="relative aspect-[16/10.6] overflow-hidden rounded-xl">
          <div className={`absolute inset-0 flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-black/10 transition-opacity duration-200 ${view === 'desktop' ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
            <span className="flex h-6 shrink-0 items-center gap-1 bg-sand-50 px-3" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-sand-300" /><span className="h-2 w-2 rounded-full bg-sand-300" /><span className="h-2 w-2 rounded-full bg-sand-300" />
            </span>
            <img
              src={demo.images[0]}
              srcSet={`${demo.images[0].replace('.webp', '-640.webp')} 640w, ${demo.images[0]} 1280w`}
              sizes="(min-width: 768px) 34rem, 92vw"
              alt={`${demo.name} — ${t.shotDesktop}`} width="1280" height="800" loading="lazy" decoding="async"
              className="min-h-0 w-full flex-1 object-cover object-top"
            />
          </div>
          <div className={`absolute inset-0 flex justify-center transition-opacity duration-200 ${view === 'mobile' ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
            <span className="block h-full overflow-hidden rounded-[1.3rem] border-[5px] border-ink-900 bg-ink-900 shadow-xl">
              <img
                src={demo.images[1]}
                srcSet={`${demo.images[1].replace('.webp', '-240.webp')} 240w, ${demo.images[1]} 390w`}
                sizes="(min-width: 768px) 150px, 100px"
                alt={`${demo.name} — ${t.shotMobile}`} width="390" height="844" loading="lazy" decoding="async"
                className="block h-full w-auto object-cover object-top"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-bold text-clay-700">{demo.sector[lang]}</p>
        <h3 className="mt-1 text-xl font-extrabold text-ink-900"><bdi>{demo.name}</bdi></h3>
        <p className="mt-2 flex-1 leading-7 text-ink-600">{demo.text[lang]}</p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <div role="group" aria-label={t.viewLabel} className="inline-flex rounded-xl bg-sand-100 p-1 ring-1 ring-sand-300">
            {views.map(([key, icon, label]) => (
              <button
                key={key}
                type="button"
                aria-pressed={view === key}
                onClick={() => setView(key)}
                className={`inline-flex min-h-[44px] items-center gap-1.5 rounded-lg px-3 text-sm font-bold transition ${view === key ? 'bg-white text-ink-900 shadow-sm' : 'text-ink-600 hover:text-ink-900'}`}
              >
                <Icon name={icon} className="h-4 w-4" />{label}
              </button>
            ))}
          </div>
          <a href={demo.href} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl bg-mint-700 px-4 text-sm font-bold text-white transition hover:bg-mint-800">
            {t.cta}<Icon name="external" className="h-4 w-4 rtl:-scale-x-100" />
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
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const els = [...document.querySelectorAll('.reveal')]
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { rootMargin: '0px 0px -8% 0px' })
    document.documentElement.classList.add('reveal-on')
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="biz min-h-screen overflow-x-clip bg-sand-100 text-ink-900">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:start-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:font-bold focus:text-ink-900">{t.skip}</a>

      {/* top bar */}
      <header className="sticky top-0 z-40 border-b border-sand-300/70 bg-sand-100/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
          <a href="#top" className="flex min-h-[44px] min-w-0 items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-mint-400 to-sky-500 text-sm font-black text-night-950" aria-hidden="true">AT</span>
            <span className="truncate text-base font-extrabold text-ink-900">{t.name}</span>
          </a>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setLang(other)} lang={other} className="min-h-[44px] rounded-xl bg-white px-4 text-sm font-bold text-ink-900 ring-1 ring-sand-300 hover:bg-sand-50">
              {t.other}
            </button>
            <a href={waLink} target="_blank" rel="noreferrer" aria-label={t.hero.ctaWhatsapp} className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-3 text-sm font-extrabold text-ink-900">
              <Icon name="whatsapp" className="h-5 w-5" /><span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* 1. hero (dark band) */}
        <section id="top" className="noise relative overflow-hidden rounded-b-[2rem] bg-night-950 text-white sm:rounded-b-[3rem]">
          <div aria-hidden="true" className="pointer-events-none absolute -top-32 start-[-10rem] h-[26rem] w-[26rem] rounded-full bg-mint-500/20 blur-[110px]" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 end-[-8rem] h-[24rem] w-[24rem] rounded-full bg-amber-400/10 blur-[110px]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:pb-24">
            <div>
              <div className="hx" style={{ '--d': '0ms' }}><Eyebrow dark>{t.hero.eyebrow}</Eyebrow></div>
              <h1 className="mt-5 text-[2.15rem] font-black leading-[1.18] sm:text-5xl lg:text-[3.4rem]">
                {/* the title is the largest paint: shown at once, not faded in */}
                <span className="block text-mint-300">{t.hero.name}</span>
                <span className="block">{t.hero.title}</span>
              </h1>
              <p className="hx mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9" style={{ '--d': '200ms' }}>{t.hero.text}</p>
              <div className="hx mt-8 flex flex-col gap-3 sm:flex-row" style={{ '--d': '280ms' }}>
                <WhatsAppButton href={waLink}>{t.hero.ctaWhatsapp}</WhatsAppButton>
                <a href="#demos" className="inline-flex min-h-[56px] items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] px-7 py-4 text-lg font-bold text-white transition hover:bg-white/[0.12]">
                  {t.hero.ctaWork}
                </a>
              </div>
            </div>
            <ChatMock t={t.chat} />
          </div>
        </section>

        {/* 2. services */}
        <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
          <SectionHead eyebrow={t.services.eyebrow} title={t.services.title} />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {t.services.items.map((s) => (
              <li key={s.title} className="reveal rounded-3xl bg-white p-6 shadow-sm ring-1 ring-sand-300 sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint-700/10 text-mint-700"><Icon name={s.icon} className="h-6 w-6" /></span>
                  {s.quote && <span className="rounded-full bg-clay-600/10 px-3 py-1 text-xs font-bold text-clay-700">{t.services.quote}</span>}
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-ink-900">{s.title}</h3>
                <p className="mt-1 text-sm font-semibold text-ink-600">{t.services.gets}</p>
                <ul className="mt-4 space-y-2.5">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 leading-7 text-ink-700">
                      <Icon name="check" className="mt-1.5 h-4 w-4 shrink-0 text-mint-700" />{pt}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        {/* 3. demos */}
        <section id="demos" className="scroll-mt-16 bg-sand-200/60 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead eyebrow={t.demos.eyebrow} title={t.demos.title} text={t.demos.text} />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {businessDemos.map((d) => <DemoShowcase key={d.name} demo={d} lang={lang} t={t.demos} />)}
            </div>
          </div>
        </section>

        {/* 4. how I work */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <SectionHead eyebrow={t.steps.eyebrow} title={t.steps.title} />
          <ol className="relative mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
            <span aria-hidden="true" className="absolute bottom-6 start-6 top-6 w-px bg-sand-300 md:hidden" />
            {t.steps.items.map((s, i) => (
              <li key={s.title} className="reveal relative flex gap-5 md:flex-col md:gap-4">
                <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-clay-700 text-xl font-black text-white">{i + 1}</span>
                <div>
                  <h3 className="text-lg font-extrabold leading-7 text-ink-900">{s.title}</h3>
                  <p className="mt-1.5 leading-7 text-ink-600">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 5. price */}
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
          <SectionHead eyebrow={t.price.eyebrow} title={t.price.title} />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {t.price.cards.map((c) => (
              <div key={c.label} className="reveal rounded-3xl bg-white p-7 shadow-sm ring-1 ring-sand-300">
                <p className="font-bold text-ink-600">{c.label}</p>
                {c.from && <p className="mt-4 text-sm font-semibold text-ink-600">{c.from}</p>}
                <p className={`${c.from ? 'mt-1' : 'mt-4'} text-4xl font-black text-ink-900 sm:text-5xl`}><bdi>{c.value}</bdi></p>
                <p className="mt-4 leading-7 text-ink-600">{c.note}</p>
              </div>
            ))}
          </div>
          <p className="reveal mt-4 flex items-start gap-3 rounded-2xl bg-sand-200/70 p-4 font-semibold leading-7 text-ink-700">
            <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-mint-700" />{t.price.monthly}
          </p>
        </section>

        {/* 6. about */}
        <section className="bg-sand-200/60 py-16 sm:py-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-center sm:gap-12 sm:px-6">
            {businessPhoto ? (
              <img src={businessPhoto} alt={t.about.photoAlt} width="160" height="160" loading="lazy" decoding="async" className="h-36 w-36 shrink-0 rounded-3xl object-cover sm:h-40 sm:w-40" />
            ) : (
              <span className="grid h-36 w-36 shrink-0 place-items-center rounded-3xl bg-gradient-to-br from-mint-400 to-sky-500 text-5xl font-black text-night-950 sm:h-40 sm:w-40" aria-hidden="true">AT</span>
            )}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <Eyebrow>{t.about.eyebrow}</Eyebrow>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-sm font-bold text-ink-700 ring-1 ring-sand-300">
                  <Icon name="pin" className="h-4 w-4 text-clay-700" />{t.about.chip}
                </span>
              </div>
              <ul className="mt-5 space-y-3">
                {t.about.lines.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-lg leading-8 text-ink-700">
                    <Icon name="check" className="mt-2 h-5 w-5 shrink-0 text-mint-700" />{line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 7. FAQ (native details: works without JS, keyboard and screen readers) */}
        <section id="faq" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} />
          <div className="mt-8 space-y-3">
            {t.faq.items.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white ring-1 ring-sand-300 open:shadow-sm">
                <summary className="flex min-h-[56px] cursor-pointer items-center justify-between gap-4 rounded-2xl px-5 py-4 text-start text-lg font-bold text-ink-900">
                  {f.q}
                  <Icon name="chevron" className="h-5 w-5 shrink-0 text-ink-600 transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-5 pb-5 leading-7 text-ink-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 8. final CTA + contact (dark band) */}
        <section id="contact" className="px-3 pb-6 sm:px-6">
          <div className="noise relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-night-950 px-5 py-14 text-center text-white sm:px-12 sm:py-20">
            <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-mint-500/20 blur-[100px]" />
            <div className="relative">
              <h2 className="text-3xl font-black leading-tight sm:text-5xl">{t.contact.title}</h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-300">{t.contact.text}</p>
              <WhatsAppButton href={waLink} className="mt-8 w-full sm:w-auto">{t.hero.ctaWhatsapp}</WhatsAppButton>
              <dl className="mx-auto mt-10 grid max-w-2xl gap-3 text-start sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <dt className="flex items-center gap-2 text-sm text-slate-300"><Icon name="phone" className="h-4 w-4" />{t.contact.phone}</dt>
                  <dd className="mt-1"><a href={telHref} className="inline-flex min-h-[44px] items-center text-xl font-extrabold text-white" dir="ltr">{localPhone}</a></dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <dt className="flex items-center gap-2 text-sm text-slate-300"><Icon name="mail" className="h-4 w-4" />{t.contact.email}</dt>
                  <dd className="mt-1"><a href={`mailto:${contact.email}`} className="inline-flex min-h-[44px] items-center break-all text-base font-bold text-white" dir="ltr">{contact.email}</a></dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-4 pb-28 pt-6 text-center text-sm text-ink-600 sm:pb-10">
        © {new Date().getFullYear()} {t.name} · {t.footer}
      </footer>

      {/* sticky WhatsApp bar on phones */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sand-300 bg-sand-100/95 p-3 backdrop-blur-md sm:hidden">
        <WhatsAppButton href={waLink} className="w-full">{t.hero.ctaWhatsapp}</WhatsAppButton>
      </div>
    </div>
  )
}
