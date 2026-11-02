import { motion, useScroll, useSpring } from 'framer-motion'
import { contact, facts, services, projects, pastClients, steps, stack } from './data'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }

function Reveal({ children, className = '', as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </Tag>
  )
}

function Icon({ name }) {
  const common = 'h-6 w-6'
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
  if (name === 'store')
    return (<svg viewBox="0 0 24 24" className={common} {...p}><path d="M3 9l1.5-5h15L21 9" /><path d="M4 9v11h16V9" /><path d="M3 9a3 3 0 006 0 3 3 0 006 0 3 3 0 006 0" /><path d="M10 20v-5h4v5" /></svg>)
  if (name === 'plug')
    return (<svg viewBox="0 0 24 24" className={common} {...p}><path d="M9 2v5M15 2v5" /><path d="M6 7h12v4a6 6 0 01-12 0V7z" /><path d="M12 17v5" /></svg>)
  if (name === 'chart')
    return (<svg viewBox="0 0 24 24" className={common} {...p}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg>)
  return (<svg viewBox="0 0 24 24" className={common} {...p}><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" /><path d="M19 17l.8 2.2L22 20l-2.2.8L19 23l-.8-2.2L16 20l2.2-.8L19 17z" /></svg>)
}

function Nav() {
  const links = [
    ['#services', 'الخدمات'],
    ['#work', 'الأعمال'],
    ['#process', 'طريقة العمل'],
  ]
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/70 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-display text-lg font-semibold text-white">أيوب تقي</a>
        <div className="hidden items-center gap-7 text-sm text-white/70 sm:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="transition hover:text-white">{label}</a>
          ))}
        </div>
        <a href="#contact" className="rounded-lg bg-teal-400 px-4 py-2 text-sm font-semibold text-ink transition hover:bg-white">
          تواصل معي
        </a>
      </div>
    </motion.nav>
  )
}

function Hero() {
  const words = 'أنفّذ مشاريع سلة وزد والأتمتة لوكالتكم، وتسلّمونها لعملائكم باسمكم'.split(' ')
  return (
    <header id="top" className="relative overflow-hidden bg-ink pb-20 pt-36 text-white sm:pb-28 sm:pt-44">
      <div aria-hidden className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-teal-600/40 blur-3xl animate-float" />
      <div aria-hidden className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal-400/20 blur-3xl animate-float-slow" />
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto max-w-6xl px-5">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-1 text-sm text-teal-400"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-teal-400" />
          متاح لمشاريع جديدة · white-label
        </motion.span>

        <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.5] sm:text-5xl lg:text-6xl">
          {words.map((w, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.35 + i * 0.06, duration: 0.5 }}
            >
              {w}&nbsp;
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-6 max-w-2xl text-lg leading-8 text-white/70"
        >
          مطوّر ويب ومهندس بيانات، أعمل مع الوكالات الرقمية في الخليج كفريق تنفيذ من الخلف: تخصيص المتاجر، ربط الأنظمة،
          لوحات البيانات والأتمتة. التواصل بالعربية، والتسليم بمواعيد واضحة.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl bg-teal-400 px-6 py-3 font-display font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-400/30">
            ابدأ بمشروع تجريبي
            <span className="transition group-hover:-translate-x-1">←</span>
          </a>
          <a href="#work" className="rounded-xl border border-white/20 px-6 py-3 font-display font-semibold text-white transition hover:bg-white/10">
            شاهد الأعمال
          </a>
        </motion.div>

        <motion.dl
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { delayChildren: 1.5, staggerChildren: 0.12 } } }}
          className="mt-16 grid max-w-3xl grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3"
        >
          {facts.map((f) => (
            <motion.div key={f.label} variants={fadeUp}>
              <dt className="font-display text-2xl font-semibold text-white">{f.value}</dt>
              <dd className="mt-1 text-sm text-white/60">{f.label}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </header>
  )
}

function SectionTitle({ eyebrow, title }) {
  return (
    <motion.div variants={fadeUp} className="mb-10">
      <p className="text-sm font-semibold text-teal-600">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
    </motion.div>
  )
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <SectionTitle eyebrow="الخدمات" title="ماذا أنفّذ لكم" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-xl hover:shadow-teal-600/10"
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-right scale-x-0 bg-teal-600 transition-transform duration-500 group-hover:scale-x-100" />
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-teal-50 text-teal-600 transition group-hover:bg-teal-600 group-hover:text-white">
                  <Icon name={s.icon} />
                </span>
                <span className="font-display text-sm tabular-nums text-ink/30">0{i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-7 text-ink/60">{s.text}</p>
            </motion.article>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="border-y border-line bg-white/60">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <SectionTitle eyebrow="الأعمال" title="أعمال مختارة" />
          <div className="flex flex-col gap-5">
            {projects.map((p) => (
              <motion.article
                key={p.title}
                variants={fadeUp}
                whileHover={{ scale: 1.01 }}
                className="grid gap-4 rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-lg sm:grid-cols-[170px_1fr] sm:gap-8 sm:p-8"
              >
                <div className="flex flex-row gap-3 sm:flex-col sm:gap-1">
                  <span className="font-display font-semibold text-teal-600">{p.kind}</span>
                  <span className="text-sm text-ink/50">{p.sub}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 leading-8 text-ink/65">{p.text}</p>
                  {p.link && (
                    <a href={p.link.href} target="_blank" rel="noreferrer" dir="ltr" className="mt-3 inline-block font-medium text-teal-600 underline decoration-teal-600/30 underline-offset-4 hover:decoration-teal-600">
                      {p.link.label} ↗
                    </a>
                  )}
                  <div className="mt-4 flex flex-wrap gap-2" dir="ltr">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-md border border-line px-2.5 py-0.5 text-xs text-ink/70">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.p variants={fadeUp} className="mb-5 mt-14 font-display text-lg font-semibold text-ink/60">مشاريع عملاء سابقة</motion.p>
          <div className="grid gap-5 md:grid-cols-3">
            {pastClients.map((c) => (
              <motion.div key={c.title} variants={fadeUp} className="rounded-2xl border border-line bg-sand p-6">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-ink/60">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <SectionTitle eyebrow="طريقة العمل" title="كيف نعمل معاً" />
        <ol className="relative grid gap-8 md:grid-cols-4">
          <div aria-hidden className="absolute right-0 top-5 hidden h-px w-full bg-line md:block" />
          {steps.map((s, i) => (
            <motion.li key={s.title} variants={fadeUp} className="relative">
              <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-ink font-display text-white ring-8 ring-sand">
                {i + 1}
              </span>
              <h3 className="mt-5 font-semibold">{s.title}</h3>
              <p className="mt-1 text-[15px] leading-7 text-ink/60">{s.text}</p>
            </motion.li>
          ))}
        </ol>
      </Reveal>
    </section>
  )
}

function Stack() {
  const row = [...stack, ...stack]
  return (
    <section className="overflow-hidden border-y border-line bg-ink py-10" aria-label="الأدوات والتقنيات">
      <div className="flex w-max animate-marquee gap-4" dir="ltr">
        {row.map((t, i) => (
          <span key={i} className="whitespace-nowrap rounded-full border border-white/15 px-5 py-2 text-sm text-white/80">{t}</span>
        ))}
      </div>
      <p className="mx-auto mt-6 max-w-6xl px-5 text-sm text-white/50">
        شهادة Microsoft Certified: Azure Database Administrator Associate (2025)
      </p>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <motion.div
          variants={fadeUp}
          className="relative overflow-hidden rounded-3xl bg-teal-700 p-8 text-white sm:p-14"
        >
          <div aria-hidden className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-teal-400/30 blur-3xl animate-float" />
          <div className="relative">
            <h2 className="text-3xl font-bold sm:text-4xl">لنبدأ بمشروع صغير</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
              أرسلوا لي مهمة متأخرة أو متكررة عندكم. أنفّذ أول مشروع بسعر مخفّض لنختبر العمل معاً، وإذا ناسبكم نكمل.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${contact.email}`} dir="ltr" className="rounded-xl bg-white px-5 py-3 font-semibold text-teal-700 transition hover:-translate-y-0.5">
                {contact.email}
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="rounded-xl border border-white/30 px-5 py-3 font-semibold transition hover:bg-white/10">
                LinkedIn
              </a>
              <a href={contact.github} target="_blank" rel="noreferrer" className="rounded-xl border border-white/30 px-5 py-3 font-semibold transition hover:bg-white/10">
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </Reveal>
    </section>
  )
}

export default function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  return (
    <>
      <motion.div style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-50 h-1 origin-right bg-teal-400" />
      <Nav />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Stack />
        <Contact />
      </main>
      <footer className="mx-auto max-w-6xl px-5 pb-10 text-sm text-ink/50">
        © {new Date().getFullYear()} أيوب تقي · مطوّر ومهندس بيانات · المغرب
      </footer>
    </>
  )
}
