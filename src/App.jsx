import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence, motion, useInView, useMotionTemplate, useMotionValue,
  useScroll, useSpring, useTransform, animate,
} from 'framer-motion'
import { contact, facts, services, projects, pastClients, steps, stack } from './data'

const ease = [0.22, 1, 0.36, 1]
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } }

function Reveal({ children, className = '' }) {
  return (
    <motion.div className={className} variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }}>
      {children}
    </motion.div>
  )
}

/* ---------- icons ---------- */
function Icon({ name, className = 'h-6 w-6' }) {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', className, viewBox: '0 0 24 24' }
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
    default: return null
  }
}

/* ---------- nav ---------- */
const navLinks = [
  ['services', 'الخدمات'],
  ['work', 'الأعمال'],
  ['process', 'طريقة العمل'],
]

function useActiveSection(ids) {
  const [active, setActive] = useState('')
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [ids])
  return active
}

function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(['services', 'work', 'process', 'contact'])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5 ${scrolled ? 'glass shadow-2xl shadow-black/40' : 'border border-transparent'}`}>
        <a href="#top" className="flex items-center gap-2.5" aria-label="الصفحة الرئيسية">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-mint-400 to-sky-500 text-sm font-black text-night-950">AT</span>
          <span className="text-lg font-bold text-white">أيوب تقي</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className={`relative rounded-lg px-4 py-2 text-sm font-semibold transition ${active === id ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
                {active === id && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-lg bg-white/[0.07]" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                )}
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden rounded-xl bg-white px-4 py-2 text-sm font-bold text-night-950 transition hover:bg-mint-300 sm:inline-block">
            تواصل معي
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl text-white glass md:hidden"
            aria-expanded={open}
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl p-3 glass md:hidden"
          >
            {[...navLinks, ['contact', 'تواصل معي']].map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3.5 text-base font-semibold text-slate-200 hover:bg-white/5">
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

/* ---------- hero ---------- */
function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.6, ease, onUpdate: (v) => setVal(Math.round(v)) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref} className="tabular-nums">{val}{suffix}</span>
}

function HeroVisual() {
  const bars = [38, 62, 45, 78, 56, 90, 72]
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ delay: 0.6, duration: 1, ease }}
      className="relative mx-auto w-full max-w-md lg:mx-0"
      aria-hidden
    >
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-mint-500/20 via-sky-500/10 to-amber-400/10 blur-2xl" />
      <div className="grad-border relative rounded-3xl bg-night-800/80 p-5 shadow-2xl shadow-black/50 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-white/15" /><span className="h-3 w-3 rounded-full bg-white/15" /><span className="h-3 w-3 rounded-full bg-white/15" />
          </div>
          <span className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-slate-400" dir="ltr">store.salla.sa / dashboard</span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white/[0.04] p-4">
            <p className="text-xs text-slate-400">صافي الربح</p>
            <p className="mt-1 text-2xl font-extrabold text-white" dir="ltr">SAR 48.2K</p>
            <p className="mt-1 text-xs font-bold text-mint-400">▲ 18%</p>
          </div>
          <div className="rounded-2xl bg-white/[0.04] p-4">
            <p className="text-xs text-slate-400">الطلبات اليوم</p>
            <p className="mt-1 text-2xl font-extrabold text-white">312</p>
            <p className="mt-1 text-xs font-bold text-sky-400">متزامن ✓</p>
          </div>
        </div>

        <div className="mt-3 rounded-2xl bg-white/[0.04] p-4">
          <div className="flex items-end gap-2" style={{ height: 96 }}>
            {bars.map((h, i) => (
              <motion.span
                key={i}
                className="flex-1 rounded-t-md bg-gradient-to-t from-mint-500/40 to-mint-300"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 1 + i * 0.08, duration: 0.8, ease }}
              />
            ))}
          </div>
        </div>

        <div className="mt-3 space-y-2">
          {[['ربط واتساب', 'mint'], ['مزامنة المحاسبة', 'sky'], ['تقرير أسبوعي آلي', 'amber']].map(([t, c], i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 + i * 0.15 }}
              className="flex items-center justify-between rounded-xl bg-white/[0.03] px-3 py-2.5 text-sm"
            >
              <span className="text-slate-300">{t}</span>
              <span className={`h-2 w-2 rounded-full ${c === 'mint' ? 'bg-mint-400' : c === 'sky' ? 'bg-sky-400' : 'bg-amber-400'} shadow-[0_0_12px] shadow-current`} />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.1, type: 'spring' }}
        className="absolute -bottom-5 -right-4 rounded-2xl bg-amber-400 px-4 py-2.5 text-sm font-extrabold text-night-950 shadow-xl shadow-amber-400/20 sm:-right-8"
      >
        تسليم باسم وكالتك ✦
      </motion.div>
    </motion.div>
  )
}

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="top" ref={ref} className="noise relative overflow-hidden pb-24 pt-32 sm:pt-40 lg:pb-32">
      <div aria-hidden className="pointer-events-none absolute -left-40 -top-20 h-[34rem] w-[34rem] rounded-full bg-mint-500/20 blur-[120px] animate-float" />
      <div aria-hidden className="pointer-events-none absolute -right-32 top-40 h-[28rem] w-[28rem] rounded-full bg-sky-500/15 blur-[120px] animate-float-slow" />
      <div aria-hidden className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <motion.div style={{ y, opacity }} className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-mint-300 glass"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint-400" />
            </span>
            متاح لمشاريع جديدة هذا الشهر
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { delayChildren: 0.25, staggerChildren: 0.12 } } }}
            className="mt-7 text-[2.6rem] font-black leading-[1.35] text-white sm:text-6xl sm:leading-[1.3] lg:text-[4.1rem]"
          >
            {['فريق التنفيذ', 'التقني لوكالتك،', <span key="g" className="text-gradient">يعمل باسمك.</span>].map((line, i) => (
              <motion.span key={i} className="block" variants={{ hidden: { opacity: 0, y: 40, filter: 'blur(8px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease } } }}>
                {line}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-7 max-w-xl text-lg leading-9 text-slate-400"
          >
            أنفّذ لوكالات الخليج مشاريع <span className="font-bold text-white">سلة وزد</span>، ربط الأنظمة، لوحات البيانات والأتمتة. أنتم تتعاملون مع العميل، وأنا أسلّم العمل جاهزاً بهوية وكالتكم.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a href="#contact" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-l from-mint-400 to-sky-400 px-7 py-4 text-base font-extrabold text-night-950 shadow-lg shadow-mint-500/25 transition hover:shadow-mint-500/50">
              <span className="relative z-10">ابدأ بمشروع تجريبي</span>
              <Icon name="arrow" className="relative z-10 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-full" />
            </a>
            <a href="#work" className="inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-base font-bold text-white transition glass hover:bg-white/[0.07]">
              شاهد الأعمال
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-14 flex flex-wrap gap-x-10 gap-y-6"
          >
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="text-3xl font-black text-white">
                  {f.num ? <Counter to={f.num} suffix={f.suffix} /> : f.value}
                </dt>
                <dd className="mt-1 text-sm text-slate-400">{f.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <HeroVisual />
      </motion.div>
    </section>
  )
}

/* ---------- sections ---------- */
function SectionTitle({ eyebrow, title, text }) {
  return (
    <motion.div variants={fadeUp} className="mb-14 max-w-2xl">
      <p className="inline-flex items-center gap-2 text-sm font-bold text-mint-400">
        <span className="h-px w-8 bg-mint-400" />{eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-lg leading-8 text-slate-400">{text}</p>}
    </motion.div>
  )
}

function SpotlightCard({ children, className = '' }) {
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const bg = useMotionTemplate`radial-gradient(380px circle at ${x}px ${y}px, rgba(62,230,179,0.13), transparent 70%)`
  return (
    <motion.div
      variants={fadeUp}
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); x.set(e.clientX - r.left); y.set(e.clientY - r.top) }}
      onMouseLeave={() => { x.set(-200); y.set(-200) }}
      className={`group grad-border relative overflow-hidden rounded-3xl bg-night-800/60 ${className}`}
    >
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: bg }} />
      {children}
    </motion.div>
  )
}

function Services() {
  const layout = ['lg:col-span-4', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-4']
  const accent = ['text-mint-400 bg-mint-400/10', 'text-sky-400 bg-sky-400/10', 'text-amber-400 bg-amber-400/10', 'text-mint-300 bg-mint-300/10']
  return (
    <section id="services" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-28">
      <Reveal>
        <SectionTitle eyebrow="الخدمات" title="ماذا أنفّذ لكم" text="أربع خدمات تقنية تحتاجها كل وكالة تعمل مع متاجر الخليج، بجودة ثابتة وتسليم في الموعد." />
        <div className="grid gap-5 lg:grid-cols-6">
          {services.map((s, i) => (
            <SpotlightCard key={s.title} className={`${layout[i]} p-7 sm:p-8`}>
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <span className={`grid h-14 w-14 place-items-center rounded-2xl ${accent[i]} transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110`}>
                    <Icon name={s.icon} className="h-7 w-7" />
                  </span>
                  <span className="text-5xl font-black text-white/[0.06]">0{i + 1}</span>
                </div>
                <h3 className="mt-8 text-2xl font-extrabold text-white">{s.title}</h3>
                <p className="mt-3 leading-8 text-slate-400">{s.text}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.points.map((pt) => (
                    <li key={pt} className="rounded-full bg-white/[0.05] px-3 py-1 text-xs font-semibold text-slate-300">{pt}</li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

function ProjectVisual({ type }) {
  if (type === 'store')
    return (
      <div className="relative h-full w-full p-5">
        <div className="h-full rounded-xl bg-night-950/70 p-3">
          <div className="mb-3 flex gap-1"><span className="h-2 w-2 rounded-full bg-white/20" /><span className="h-2 w-2 rounded-full bg-white/20" /><span className="h-2 w-2 rounded-full bg-white/20" /></div>
          <div className="h-8 rounded-md bg-gradient-to-l from-amber-400/40 to-amber-300/10" />
          <div className="mt-2 flex gap-2 overflow-hidden">
            {[0, 1, 2, 3].map((i) => <motion.div key={i} className="h-16 w-20 shrink-0 rounded-md bg-white/10" animate={{ x: [0, -88] }} transition={{ repeat: Infinity, duration: 4, ease: 'linear' }} />)}
          </div>
          <div className="mt-2 grid grid-cols-3 gap-2">{[0, 1, 2].map((i) => <div key={i} className="h-10 rounded-md bg-white/[0.06]" />)}</div>
        </div>
      </div>
    )
  if (type === 'theme')
    return (
      <div className="relative grid h-full w-full place-items-center p-5">
        <div className="grid w-full grid-cols-4 gap-2">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <motion.div key={i} animate={{ y: [0, i % 2 ? -4 : 4, 0] }} transition={{ repeat: Infinity, duration: 3, delay: i * 0.2 }} className="h-[4.25rem] rounded-lg bg-gradient-to-br from-sky-400/30 to-white/5 p-2">
              <div className="h-1/2 rounded bg-white/15" /><div className="mt-1.5 h-1.5 w-2/3 rounded bg-white/20" />
            </motion.div>
          ))}
        </div>
      </div>
    )
  if (type === 'audio')
    return (
      <div className="flex h-full w-full items-center justify-center gap-1 px-6">
        {Array.from({ length: 28 }).map((_, i) => (
          <motion.span key={i} className="w-1.5 rounded-full bg-gradient-to-t from-mint-500 to-sky-400"
            animate={{ height: [8, 14 + ((i * 37) % 50), 8] }}
            transition={{ repeat: Infinity, duration: 1.2 + (i % 5) * 0.15, ease: 'easeInOut', delay: i * 0.04 }} />
        ))}
      </div>
    )
  return (
    <div className="grid h-full w-full place-items-center">
      <div className="relative">
        {[0, 1, 2].map((i) => <div key={i} className="mb-1.5 h-6 w-28 rounded-[50%] border border-mint-400/40 bg-mint-400/10" />)}
        <motion.div className="absolute -inset-6 rounded-full border border-dashed border-white/10 animate-spin-slow" />
      </div>
    </div>
  )
}

function Work() {
  return (
    <section id="work" className="relative scroll-mt-24 border-y border-white/[0.06] bg-night-900">
      <div className="mx-auto max-w-6xl px-5 py-28">
        <Reveal>
          <SectionTitle eyebrow="الأعمال" title="أعمال مختارة" text="مشاريع حقيقية على سلة، وأدوات ذكاء اصطناعي، وإدارة بيانات لمرفق عام." />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <motion.article
                key={p.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="group grad-border flex flex-col overflow-hidden rounded-3xl bg-night-800/70"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-night-700 to-night-900">
                  <ProjectVisual type={p.visual} />
                  <span className="absolute right-4 top-4 rounded-full bg-night-950/70 px-3 py-1 text-xs font-bold text-mint-300 backdrop-blur">{p.kind}</span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-extrabold text-white">{p.title}</h3>
                    <span className="shrink-0 text-xs text-slate-500">{p.sub}</span>
                  </div>
                  <p className="mt-3 flex-1 leading-8 text-slate-400">{p.text}</p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5" dir="ltr">
                      {p.tags.map((t) => <span key={t} className="rounded-md border border-white/10 px-2 py-0.5 text-[11px] font-semibold text-slate-400">{t}</span>)}
                    </div>
                    {p.link && (
                      <a href={p.link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-bold text-mint-400 hover:text-mint-300">
                        <span dir="ltr">{p.link.label}</span><Icon name="external" className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-16 rounded-3xl p-7 glass sm:p-9">
            <p className="text-sm font-bold text-slate-400">عملت أيضاً مع</p>
            <div className="mt-6 grid gap-8 md:grid-cols-3">
              {pastClients.map((c) => (
                <div key={c.title} className="border-r-2 border-mint-400/40 pr-4">
                  <h3 className="font-extrabold text-white">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-7 text-slate-400">{c.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}

function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  return (
    <section id="process" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <SectionTitle eyebrow="طريقة العمل" title="بسيطة وواضحة من أول رسالة" text="لا اجتماعات طويلة ولا مفاجآت في السعر. ترسلون المهمة، وتستلمون النتيجة." />
        </Reveal>
        <div ref={ref} className="relative">
          <div className="absolute bottom-0 right-6 top-0 w-px bg-white/10" />
          <motion.div style={{ scaleY }} className="absolute bottom-0 right-6 top-0 w-px origin-top bg-gradient-to-b from-mint-400 to-sky-400" />
          <Reveal className="space-y-10">
            {steps.map((s, i) => (
              <motion.div key={s.title} variants={fadeUp} className="relative pr-20">
                <span className="absolute right-0 top-0 grid h-12 w-12 place-items-center rounded-2xl border border-mint-400/30 bg-night-900 text-lg font-black text-mint-300">{i + 1}</span>
                <div className="rounded-2xl p-6 glass">
                  <h3 className="text-xl font-extrabold text-white">{s.title}</h3>
                  <p className="mt-2 leading-8 text-slate-400">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Stack() {
  const half = Math.ceil(stack.length / 2)
  const rows = [stack.slice(0, half), stack.slice(half)]
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-night-900 py-14" aria-label="الأدوات والتقنيات">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-night-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-night-900 to-transparent" />
      {rows.map((r, idx) => (
        <div key={idx} className={`flex w-max gap-3 ${idx ? 'mt-3 [animation-direction:reverse]' : ''} animate-marquee`} dir="ltr">
          {[...r, ...r, ...r, ...r].map((t, i) => (
            <span key={i} className="whitespace-nowrap rounded-2xl px-6 py-3 text-sm font-bold text-slate-300 glass">{t}</span>
          ))}
        </div>
      ))}
      <p className="relative z-10 mx-auto mt-8 max-w-6xl px-5 text-center text-sm text-slate-500">
        حاصل على شهادة Microsoft Certified: Azure Database Administrator Associate (2025)
      </p>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(contact.email); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch { /* ignore */ }
  }
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-28">
      <Reveal>
        <motion.div variants={fadeUp} className="noise grad-border relative overflow-hidden rounded-[2rem] bg-night-800 px-7 py-14 text-center sm:px-14 sm:py-20">
          <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-mint-500/30 via-sky-500/25 to-amber-400/20 blur-[100px]" />
          <div className="relative">
            <span className="inline-block rounded-full bg-amber-400/10 px-4 py-1.5 text-sm font-bold text-amber-300">أول مشروع بسعر مخفّض</span>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-6xl">
              عندكم مهمة متأخرة؟ <span className="text-gradient">أرسلوها لي.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">
              نبدأ بمشروع صغير لنختبر العمل معاً. إذا ناسبكم الأسلوب والجودة، نكمل على باقي المشاريع.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-extrabold text-night-950 transition hover:bg-mint-300">
                <Icon name="mail" className="h-5 w-5" />
                راسلني بالبريد
              </a>
              <button type="button" onClick={copy} className="inline-flex items-center gap-2 rounded-2xl px-6 py-4 font-bold text-white transition glass hover:bg-white/[0.07]">
                <Icon name={copied ? 'check' : 'copy'} className={`h-5 w-5 ${copied ? 'text-mint-400' : ''}`} />
                <span dir="ltr">{copied ? 'تم النسخ' : contact.email}</span>
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm font-bold">
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-white">LinkedIn ↗</a>
              <span className="h-4 w-px bg-white/10" />
              <a href={contact.github} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-white">GitHub ↗</a>
            </div>
          </div>
        </motion.div>
      </Reveal>
    </section>
  )
}

function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const f = () => setShow(window.scrollY > 900)
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#top"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          className="fixed bottom-6 left-6 z-40 grid h-12 w-12 place-items-center rounded-2xl text-white glass hover:bg-white/10"
          aria-label="العودة للأعلى"
        >
          <Icon name="up" className="h-5 w-5" />
        </motion.a>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  return (
    <>
      <motion.div style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-right bg-gradient-to-l from-mint-400 via-sky-400 to-amber-400" />
      <Nav />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Stack />
        <Contact />
      </main>
      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/[0.06] px-5 py-8 text-sm text-slate-500 sm:flex-row">
        <span>© {new Date().getFullYear()} أيوب تقي · مطوّر ومهندس بيانات</span>
        <span>المغرب · GMT+1</span>
      </footer>
      <BackToTop />
    </>
  )
}
