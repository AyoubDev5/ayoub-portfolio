import { useEffect, useState } from 'react'
import { contact, carDemos, carDemoFeatures, carDemoSteps, businessPage, businessPhoto } from './data'
import { Icon, DemoCard } from './ui'

// 212681189317 -> "06 81 18 93 17" (the format people in Morocco recognise)
const localPhone = ('0' + contact.whatsapp.replace(/^212/, '')).replace(/(\d{2})(?=\d)/g, '$1 ').trim()
const telHref = `tel:+${contact.whatsapp}`

function initialLang() {
  try {
    const q = new URLSearchParams(window.location.search).get('lang')
    if (q === 'ar' || q === 'fr') return q
    const saved = localStorage.getItem('business-lang')
    if (saved === 'ar' || saved === 'fr') return saved
  } catch { /* storage blocked: fall back to French */ }
  return 'fr'
}

function Eyebrow({ children }) {
  return (
    <p className="inline-flex items-center gap-2 text-sm font-bold text-mint-400">
      <span className="h-px w-8 bg-mint-400" />{children}
    </p>
  )
}

function WhatsAppButton({ href, children, className = '' }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`inline-flex min-h-[56px] items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-7 py-4 text-lg font-extrabold text-night-950 shadow-lg shadow-[#25D366]/20 transition hover:-translate-y-0.5 hover:shadow-[#25D366]/40 ${className}`}>
      <Icon name="whatsapp" className="h-6 w-6" />{children}
    </a>
  )
}

export default function BusinessPage() {
  const [lang, setLang] = useState(initialLang)
  const t = businessPage[lang]
  const other = lang === 'fr' ? 'ar' : 'fr'
  const waLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(t.waMsg)}`

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = t.dir
    document.title = t.title
    try { localStorage.setItem('business-lang', lang) } catch { /* ignore */ }
    const url = new URL(window.location.href)
    if (lang === 'ar') url.searchParams.set('lang', 'ar')
    else url.searchParams.delete('lang')
    window.history.replaceState(null, '', url)
  }, [lang, t])

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* top bar */}
      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-night-950/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-5">
          <a href="#top" className="flex min-h-[44px] min-w-0 items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-mint-400 to-sky-500 text-sm font-black text-night-950" aria-hidden>AT</span>
            <span className="truncate text-base font-bold text-white">{lang === 'ar' ? 'أيوب تاقي' : 'Ayoub Taqi'}</span>
          </a>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLang(other)}
              lang={other}
              className="min-h-[44px] rounded-xl px-4 text-sm font-bold text-white glass hover:bg-white/[0.07]"
            >
              {t.other}
            </button>
            <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl bg-[#25D366] px-3.5 text-sm font-extrabold text-night-950" aria-label={t.ctaWhatsapp}>
              <Icon name="whatsapp" className="h-5 w-5" /><span className="hidden sm:inline">{t.nav.whatsapp}</span>
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* 1. hero */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute -top-24 start-[-8rem] h-80 w-80 rounded-full bg-mint-500/15 blur-[100px]" />
          <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-12 sm:px-5 sm:pb-24 sm:pt-20">
            <Eyebrow>{t.heroEyebrow}</Eyebrow>
            <h1 className="mt-5 text-[2.35rem] font-black leading-[1.2] text-white sm:text-6xl">
              {t.heroTitle[0]}<br /><span className="text-gradient">{t.heroTitle[1]}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">{t.heroText}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton href={waLink}>{t.ctaWhatsapp}</WhatsAppButton>
              <a href="#demos" className="inline-flex min-h-[56px] items-center justify-center rounded-2xl px-7 py-4 text-lg font-bold text-white glass hover:bg-white/[0.07]">
                {t.ctaDemos}
              </a>
            </div>
          </div>
        </section>

        {/* 2. demos */}
        <section id="demos" className="scroll-mt-20 border-y border-white/[0.06] bg-night-900">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-5 sm:py-20">
            <Eyebrow>{t.demosEyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">{t.demosTitle}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">{t.demosText}</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {carDemos.map((d) => (
                <DemoCard
                  key={d.name}
                  demo={d}
                  text={d.text[lang]}
                  badge={t.demoBadge}
                  cta={t.demoCta}
                  features={carDemoFeatures[lang]}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 3. how it works */}
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-5 sm:py-20">
          <Eyebrow>{t.stepsEyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">{t.stepsTitle}</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {carDemoSteps[lang].map((s, i) => (
              <li key={s.title} className="flex gap-4 rounded-2xl p-5 glass md:flex-col">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-mint-400/30 bg-night-900 text-xl font-black text-mint-300">{i + 1}</span>
                <div>
                  <h3 className="text-lg font-extrabold text-white">{s.title}</h3>
                  <p className="mt-1.5 leading-7 text-slate-400">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 4. what's included */}
        <section className="border-y border-white/[0.06] bg-night-900">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-5 sm:py-20">
            <Eyebrow>{t.includedEyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">{t.includedTitle}</h2>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {t.included.map(([icon, title, text]) => (
                <li key={title} className="flex gap-4 rounded-2xl bg-night-800/70 p-5">
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${icon === 'whatsapp' ? 'bg-[#25D366]/15 text-[#25D366]' : 'bg-mint-400/10 text-mint-400'}`}>
                    <Icon name={icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-extrabold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5. price */}
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-5 sm:py-20">
          <div className="grad-border relative overflow-hidden rounded-3xl bg-night-800 p-7 sm:p-10">
            <Eyebrow>{t.priceEyebrow}</Eyebrow>
            <p className="mt-5 text-lg font-semibold text-slate-300">{t.priceFrom}</p>
            <p className="mt-1 text-5xl font-black text-white sm:text-6xl"><bdi>{t.priceValue}</bdi></p>
            <p className="mt-5 max-w-xl leading-7 text-slate-400">{t.priceNote}</p>
            <p className="mt-6 flex items-start gap-3 rounded-2xl bg-white/[0.04] p-4 font-semibold text-slate-200">
              <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-mint-400" />{t.priceMonthly}
            </p>
          </div>
        </section>

        {/* 6. about */}
        <section className="border-y border-white/[0.06] bg-night-900">
          <div className="mx-auto flex max-w-5xl flex-col gap-7 px-4 py-16 sm:flex-row sm:items-center sm:gap-10 sm:px-5 sm:py-20">
            {businessPhoto ? (
              <img src={businessPhoto} alt={lang === 'ar' ? 'أيوب تاقي' : 'Ayoub Taqi'} width="160" height="160" loading="lazy" decoding="async" className="h-32 w-32 shrink-0 rounded-3xl object-cover sm:h-40 sm:w-40" />
            ) : (
              <span className="grid h-32 w-32 shrink-0 place-items-center rounded-3xl bg-gradient-to-br from-mint-400 to-sky-500 text-4xl font-black text-night-950 sm:h-40 sm:w-40" aria-hidden>AT</span>
            )}
            <div>
              <Eyebrow>{t.aboutEyebrow}</Eyebrow>
              <ul className="mt-5 space-y-3">
                {t.aboutLines.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-lg leading-8 text-slate-200">
                    <Icon name="check" className="mt-1.5 h-5 w-5 shrink-0 text-mint-400" />{line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 7. contact */}
        <section id="contact" className="mx-auto max-w-5xl px-4 py-16 sm:px-5 sm:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">{t.contactTitle}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-400">{t.contactText}</p>
            <WhatsAppButton href={waLink} className="mt-8 w-full sm:w-auto">{t.ctaWhatsapp}</WhatsAppButton>
          </div>
          <dl className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
            <div className="rounded-2xl p-5 glass">
              <dt className="flex items-center gap-2 text-sm text-slate-400"><Icon name="phone" className="h-4 w-4" />{t.phone}</dt>
              <dd className="mt-2"><a href={telHref} className="inline-flex min-h-[44px] items-center text-xl font-extrabold text-white" dir="ltr">{localPhone}</a></dd>
            </div>
            <div className="rounded-2xl p-5 glass">
              <dt className="flex items-center gap-2 text-sm text-slate-400"><Icon name="mail" className="h-4 w-4" />{t.email}</dt>
              <dd className="mt-2"><a href={`mailto:${contact.email}`} className="inline-flex min-h-[44px] items-center break-all text-base font-bold text-white" dir="ltr">{contact.email}</a></dd>
            </div>
          </dl>
        </section>
      </main>

      <footer className="border-t border-white/[0.06] px-4 py-8 pb-28 text-center text-sm text-slate-500 sm:pb-8">
        © {new Date().getFullYear()} {lang === 'ar' ? 'أيوب تاقي' : 'Ayoub Taqi'} · {t.footer}
      </footer>

      {/* sticky WhatsApp bar on phones */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.08] bg-night-950/90 p-3 backdrop-blur-md sm:hidden">
        <WhatsAppButton href={waLink} className="w-full">{t.ctaWhatsapp}</WhatsAppButton>
      </div>
    </div>
  )
}
