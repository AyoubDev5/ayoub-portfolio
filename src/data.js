export const contact = {
  email: 'taqiayoub123@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ayoub-taqi-dev',
  github: 'https://github.com/AyoubDev5',
  whatsapp: '212681189317',
  whatsappDisplay: '+212 681 189 317',
}

export const facts = [
  { num: 4, suffix: '+', label: 'سنوات في الويب والبيانات' },
  { num: 3, label: 'دول عمل فيها عملائي' },
  { value: 'GMT+1', label: 'ساعتان فقط عن السعودية' },
]

export const services = [
  {
    title: 'تخصيص متاجر وقوالب سلة',
    text: 'تعديلات CSS وJavaScript على القوالب الجاهزة، وبناء قوالب كاملة بإطار Twilight.',
    icon: 'store',
    points: ['قوالب Twilight', 'CSS / JS', 'تحسين السرعة'],
  },
  {
    title: 'ربط المتجر بالأنظمة',
    text: 'ربط عبر API مع أنظمة المحاسبة والشحن والواتساب وجداول البيانات.',
    icon: 'plug',
    points: ['Salla API', 'واتساب', 'المحاسبة والشحن'],
  },
  {
    title: 'لوحات بيانات وتقارير',
    text: 'تجميع البيانات من أكثر من مصدر في لوحة واحدة تجيب عن أسئلة العميل الفعلية.',
    icon: 'chart',
    points: ['صافي الربح', 'تقارير آلية', 'مصادر متعددة'],
  },
  {
    title: 'أتمتة وذكاء اصطناعي بالعربية',
    text: 'أتمتة المهام المتكررة، وتفريغ الصوت وتحليل المحتوى باللهجات العربية.',
    icon: 'spark',
    points: ['تفريغ صوتي', 'لهجات عربية', 'أتمتة المهام'],
  },
]

export const projects = [
  {
    kind: 'متجر سلة',
    visual: 'store',
    images: ['/work/azwah-1.webp', '/work/azwah-2.webp'],
    sub: 'تخصيص قالب',
    title: 'متجر العزوة',
    text: 'تخصيص عميق لقالب «رائد» على منصة سلة: شريط صور متحرك تلقائي، خطوط وألوان خاصة بالهوية، وإصلاحات في الواجهة، مع ربط النطاق الخاص وضبطه كنطاق رئيسي.',
    link: { href: 'https://alazwah.com', label: 'alazwah.com' },
    tags: ['Salla', 'CSS', 'JavaScript', 'Custom domain'],
  },
  {
    kind: 'قالب سلة',
    visual: 'theme',
    images: ['/work/technova-1.webp', '/work/technova-2.webp'],
    sub: 'بناء من الصفر',
    title: 'قالب متاجر الإلكترونيات',
    text: 'قالب كامل لمتاجر الأجهزة والإلكترونيات، مبني بأداة Salla CLI وإطار Twilight، مع بناء ناجح على بوابة شركاء سلة.',
    tags: ['Twilight', 'Twig', 'React', 'Salla CLI'],
  },
  {
    kind: 'ذكاء اصطناعي',
    visual: 'audio',
    sub: 'صوت ولهجات',
    title: 'تفريغ وتحليل المحتوى باللهجة المحلية',
    text: 'أداة تفرّغ فيديوهات TikTok وInstagram باللهجة المغربية، وتترجمها وتحلّل محتواها. سبقها اختبار مقارن لمحركات تحويل الكلام إلى نص لاختيار الأدق للهجة.',
    tags: ['Python', 'Gemini', 'Speech-to-text', 'Apify'],
  },
  {
    kind: 'قواعد بيانات',
    visual: 'db',
    sub: '2023 – 2024',
    title: 'إدارة قواعد البيانات في RADEEF',
    text: 'إدارة قواعد بيانات تشغيلية لشركة توزيع الماء والكهرباء بفاس، مرفق عام يخدم مدينة كاملة: الأداء، النسخ الاحتياطي، وسلامة البيانات.',
    tags: ['SQL Server', 'Azure', 'Infrastructure'],
  },
]

// Car rental website demos. Invented brands, NOT clients: never show real agency names here.
// TODO after deploy: confirm the two URLs below are live.
export const carDemos = [
  {
    name: 'Talvia Cars',
    images: ['/work/car-talvia-desktop.webp', '/work/car-talvia-mobile.webp'],
    text: {
      ar: 'موقع من صفحة واحدة لوكالة كراء سيارات: الأسطول بالأسعار، ونموذج حجز يرسل الطلب مباشرة إلى واتساب.',
      fr: "Site d'une page pour une agence de location : les voitures avec leurs prix, et un formulaire qui envoie la réservation sur WhatsApp.",
    },
    href: 'https://demo-atlas.oujdasites.workers.dev',
  },
  {
    name: 'Oriental Drive',
    images: ['/work/car-oriental-desktop.webp', '/work/car-oriental-mobile.webp'],
    text: {
      ar: 'القالب نفسه بهوية أخرى: لون وخط وترتيب أقسام مختلف، ليناسب شخصية كل وكالة.',
      fr: 'Le même modèle avec une autre identité : couleur, police et ordre des sections différents.',
    },
    href: 'https://demo-oriental.oujdasites.workers.dev',
  },
]

export const carDemoFeatures = {
  ar: ['الحجز عبر واتساب', 'بالفرنسية والعربية', 'مصمَّم للهاتف أولاً', 'تحميل سريع'],
  fr: ['Réservation WhatsApp', 'Français + arabe', 'Pensé pour le téléphone', 'Chargement rapide'],
}
export const carDemoStack = ['Astro', 'Tailwind', 'Cloudflare']

export const carDemoSteps = {
  ar: [
    { title: 'أجهّز نموذجاً بمعلوماتكم', text: 'اسم الوكالة، السيارات، الأسعار ورقم واتساب.' },
    { title: 'تجرّبونه', text: 'رابط حقيقي تفتحونه على الهاتف وتختبرون الحجز بأنفسكم.' },
    { title: 'تدفعون فقط إذا أعجبكم', text: 'لا دفعة مسبقة. إذا لم يناسبكم الموقع، لا تدفعون شيئاً.' },
  ],
  fr: [
    { title: 'Je prépare une maquette avec vos infos', text: "Nom du commerce, voitures, prix et numéro WhatsApp." },
    { title: 'Vous la testez', text: 'Vous recevez un lien et vous essayez la réservation sur votre téléphone.' },
    { title: 'Vous payez seulement si ça vous plaît', text: "Pas d'avance. Si le site ne vous convient pas, vous ne payez rien." },
  ],
}

/* ---------- /business page (small businesses in Morocco), FR + AR ---------- */
// Honesty rules for this page: no invented clients, testimonials, logos, ratings,
// numbers of projects or years. Demos must come from demo-* sites (fictional brands).

// To show a real photo: put it in public/ (e.g. public/ayoub.webp, ~320px, under 40 KB)
// and set businessPhoto = '/ayoub.webp'. While it is null, the page shows the initials "AT".
export const businessPhoto = null

// Demos shown on /business. Add a new demo-* site here (screenshots in public/work/).
export const businessDemos = carDemos.map((d) => ({
  ...d,
  sector: { fr: 'Location de voitures', ar: 'كراء السيارات' },
}))

export const businessPage = {
  fr: {
    dir: 'ltr',
    title: 'Ayoub Taqi — Sites web et automatisation pour entreprises',
    other: 'العربية',
    name: 'Ayoub Taqi',
    skip: 'Aller au contenu',
    hero: {
      eyebrow: 'Oujda · Maroc',
      name: 'Ayoub Taqi —',
      title: 'développeur web et automatisation pour les entreprises au Maroc',
      text: 'Je crée des sites web et des outils simples qui vous apportent des clients et vous font gagner du temps.',
      ctaWhatsapp: 'Écrire sur WhatsApp',
      ctaWork: 'Voir les réalisations',
    },
    chat: {
      label: 'Exemple',
      notif: 'Nouvelle réservation : Dacia Logan, du 12 au 15',
      now: 'maintenant',
      clock: '10:24',
      contact: 'Votre agence',
      status: 'en ligne',
      typing: 'en train d’écrire…',
      message: 'Bonjour, je veux réserver la Dacia Logan du 12 au 15 mars, avec livraison à l’aéroport.',
      via: 'Envoyé depuis votre site',
      time: '10:24',
      sheet: 'Ajoutée à votre tableau Google Sheets',
      caption: 'Exemple : une réservation envoyée depuis le site arrive sur WhatsApp et se range toute seule dans un tableau.',
    },
    waMsg: 'Bonjour Ayoub, j’ai vu votre page. Je voudrais parler de mon projet.',
    services: {
      eyebrow: 'Services',
      title: 'Ce que je fais pour votre entreprise',
      gets: 'Ce que vous obtenez',
      quote: 'Sur devis',
      items: [
        { icon: 'page', title: 'Site vitrine ou de réservation', points: ['Vos services, prix et horaires, clairs sur téléphone', 'Les réservations arrivent directement sur votre WhatsApp', 'En français et en arabe'] },
        { icon: 'pin', title: 'Présence sur Google', points: ['Votre site relié à votre fiche Google Maps', 'Adresse, horaires et téléphone à jour', 'Les clients vous trouvent et vous appellent en un clic'] },
        { icon: 'sheet', title: 'Automatisation', quote: true, points: ['Commandes et réservations rangées dans Google Sheets', 'Rappels automatiques à vos clients', 'Un tableau simple pour suivre vos ventes'] },
        { icon: 'store', title: 'Boutique en ligne simple', points: ['Mise en place sur YouCan, Shopify ou Salla', 'Vos produits, photos et prix bien présentés', 'Le thème personnalisé à votre image'] },
      ],
    },
    demos: {
      eyebrow: 'Réalisations',
      title: 'Des démos à tester vous-même',
      text: 'Ces sites sont des démos avec des marques inventées : ce ne sont pas des clients. Ouvrez-les sur votre téléphone et essayez la réservation.',
      badge: 'Démo — marque fictive, pas un client',
      cta: 'Voir la démo',
      viewLabel: 'Affichage',
      desktop: 'Ordinateur',
      mobile: 'Téléphone',
      shotDesktop: 'capture sur ordinateur',
      shotMobile: 'capture sur téléphone',
    },
    steps: {
      eyebrow: 'Comment je travaille',
      title: 'Vous voyez le résultat avant de payer',
      items: [
        { title: 'On discute de votre besoin', text: 'Sur WhatsApp, en français ou en arabe. Vous m’expliquez votre activité, je vous pose quelques questions.' },
        { title: 'Je prépare une maquette avec vos infos', text: 'Votre nom, vos services, vos prix et votre numéro WhatsApp.' },
        { title: 'Vous testez, vous payez seulement si ça vous plaît', text: 'Vous l’essayez sur votre téléphone. Si ça ne vous convient pas, vous ne payez rien.' },
      ],
    },
    price: {
      eyebrow: 'Prix',
      title: 'Des prix clairs, annoncés avant de commencer',
      cards: [
        { label: 'Sites web', from: 'À partir de', value: '1 500 DH', note: 'Le prix exact dépend de votre projet. Vous le connaissez avant que je commence.' },
        { label: 'Automatisations', from: '', value: 'Sur devis', note: 'Selon ce que vous voulez automatiser. Le devis est clair et fixé avant de commencer.' },
      ],
      monthly: 'Maintenance mensuelle en option : hébergement et petites modifications.',
    },
    about: {
      eyebrow: 'Qui je suis',
      chip: 'Basé à Oujda',
      photoAlt: 'Ayoub Taqi',
      lines: [
        'Je m’appelle Ayoub Taqi, je suis développeur web à Oujda.',
        'C’est moi qui fais votre projet et qui vous réponds sur WhatsApp, sans intermédiaire.',
        'Vous voyez le résultat et vous le testez avant de payer.',
      ],
    },
    faq: {
      eyebrow: 'Questions fréquentes',
      title: 'Vos questions, mes réponses',
      items: [
        { q: 'Combien de temps pour avoir mon site ?', a: 'Cela dépend de votre projet. Je vous donne un délai clair sur WhatsApp avant de commencer, et vous recevez d’abord une maquette à tester.' },
        { q: 'Comment se passe le paiement ?', a: 'Vous testez d’abord la maquette, et vous payez seulement si elle vous plaît. Le montant et le mode de paiement sont fixés ensemble avant de commencer.' },
        { q: 'Puis-je modifier mon site après ?', a: 'Oui. Une petite modification (un prix, une photo, un horaire) se demande par simple message WhatsApp. Ce qui est inclus est précisé avant de commencer.' },
        { q: 'Qui s’occupe de l’hébergement ?', a: 'Je peux m’occuper de l’hébergement et du nom de domaine pour vous, dans l’option mensuelle. Tout est expliqué avant de commencer.' },
        { q: 'Et si ça ne me plaît pas ?', a: 'Vous ne payez rien. Vous me dites ce qui ne va pas et je corrige la maquette. Si elle ne vous convient toujours pas, on s’arrête là.' },
      ],
    },
    contact: {
      title: 'Parlons de votre projet',
      text: 'Envoyez-moi un message WhatsApp avec le nom de votre activité. Je vous réponds moi-même.',
      phone: 'Téléphone',
      email: 'E-mail',
    },
    footer: 'Développeur web et automatisation · Oujda',
  },
  ar: {
    dir: 'rtl',
    title: 'أيوب تاقي — مواقع إلكترونية وأتمتة للشركات',
    other: 'Français',
    name: 'أيوب تاقي',
    skip: 'انتقل إلى المحتوى',
    hero: {
      eyebrow: 'وجدة · المغرب',
      name: 'أيوب تاقي —',
      title: 'مطوّر مواقع وأتمتة للشركات في المغرب',
      text: 'أصمّم مواقع إلكترونية وأدوات بسيطة تجلب لكم الزبائن وتوفّر عليكم الوقت.',
      ctaWhatsapp: 'راسلني على واتساب',
      ctaWork: 'شاهد الأعمال',
    },
    chat: {
      label: 'مثال',
      notif: 'حجز جديد: داسيا لوغان، من 12 إلى 15',
      now: 'الآن',
      clock: '10:24',
      contact: 'وكالتكم',
      status: 'متصل',
      typing: 'يكتب…',
      message: 'السلام عليكم، بغيت نحجز داسيا لوغان من 12 حتى 15 مارس، مع التوصيل للمطار.',
      via: 'أُرسلت من موقعكم',
      time: '10:24',
      sheet: 'أُضيفت إلى جدولكم في Google Sheets',
      caption: 'مثال: حجز يُرسل من الموقع يصل إلى واتساب ويُسجَّل تلقائياً في جدول.',
    },
    waMsg: 'السلام عليكم أيوب، شفت الصفحة ديالك وبغيت نتكلم معاك على مشروع.',
    services: {
      eyebrow: 'الخدمات',
      title: 'ماذا أقدّم لشركتكم',
      gets: 'ماذا تحصلون عليه',
      quote: 'حسب الطلب',
      items: [
        { icon: 'page', title: 'موقع تعريفي أو موقع حجز', points: ['خدماتكم وأثمنتكم وأوقاتكم، واضحة على الهاتف', 'الحجوزات تصلكم مباشرة على واتساب', 'بالفرنسية والعربية'] },
        { icon: 'pin', title: 'الظهور على Google', points: ['موقعكم مربوط بصفحتكم على خرائط Google', 'العنوان والأوقات والهاتف محدّثة', 'الزبائن يجدونكم ويتصلون بكم بنقرة واحدة'] },
        { icon: 'sheet', title: 'الأتمتة', quote: true, points: ['الطلبات والحجوزات تُسجَّل في Google Sheets', 'تذكيرات تلقائية لزبائنكم', 'جدول بسيط لمتابعة مبيعاتكم'] },
        { icon: 'store', title: 'متجر إلكتروني بسيط', points: ['الإعداد على YouCan أو Shopify أو سلة', 'منتجاتكم وصورها وأثمنتها معروضة بشكل جميل', 'تخصيص القالب على صورة علامتكم'] },
      ],
    },
    demos: {
      eyebrow: 'الأعمال',
      title: 'نماذج يمكنكم تجربتها بأنفسكم',
      text: 'هذه المواقع نماذج بأسماء تجارية وهمية، وليست لعملاء. افتحوها على هاتفكم وجرّبوا الحجز.',
      badge: 'نموذج — علامة وهمية، ليست عميلاً',
      cta: 'شاهد النموذج',
      viewLabel: 'طريقة العرض',
      desktop: 'الحاسوب',
      mobile: 'الهاتف',
      shotDesktop: 'لقطة على الحاسوب',
      shotMobile: 'لقطة على الهاتف',
    },
    steps: {
      eyebrow: 'كيف أعمل',
      title: 'ترون النتيجة قبل أن تدفعوا',
      items: [
        { title: 'نتحدث عن حاجتكم', text: 'على واتساب، بالفرنسية أو العربية. تشرحون لي نشاطكم، وأطرح عليكم بعض الأسئلة.' },
        { title: 'أجهّز نموذجاً بمعلوماتكم', text: 'اسمكم وخدماتكم وأثمنتكم ورقم واتساب.' },
        { title: 'تجرّبونه، وتدفعون فقط إذا أعجبكم', text: 'تجرّبونه على هاتفكم. إذا لم يناسبكم، لا تدفعون شيئاً.' },
      ],
    },
    price: {
      eyebrow: 'الثمن',
      title: 'أثمنة واضحة، تعرفونها قبل البدء',
      cards: [
        { label: 'المواقع الإلكترونية', from: 'ابتداءً من', value: '1500 درهم', note: 'الثمن النهائي حسب مشروعكم، وتعرفونه قبل أن أبدأ.' },
        { label: 'الأتمتة', from: '', value: 'حسب الطلب', note: 'حسب ما تريدون أتمتته. عرض ثمن واضح ومحدّد قبل البدء.' },
      ],
      monthly: 'صيانة شهرية اختيارية: الاستضافة والتعديلات الصغيرة.',
    },
    about: {
      eyebrow: 'من أنا',
      chip: 'مقيم في وجدة',
      photoAlt: 'أيوب تاقي',
      lines: [
        'اسمي أيوب تاقي، مطوّر مواقع في وجدة.',
        'أنا من ينجز مشروعكم ومن يجيبكم على واتساب، بدون وسيط.',
        'ترون النتيجة وتجرّبونها قبل أن تدفعوا.',
      ],
    },
    faq: {
      eyebrow: 'أسئلة شائعة',
      title: 'أسئلتكم وأجوبتي',
      items: [
        { q: 'كم من الوقت يلزم لإنجاز موقعي؟', a: 'حسب مشروعكم. أعطيكم مدة واضحة على واتساب قبل البدء، وتتوصلون أولاً بنموذج لتجربته.' },
        { q: 'كيف يتم الأداء؟', a: 'تجرّبون النموذج أولاً، ولا تدفعون إلا إذا أعجبكم. المبلغ وطريقة الأداء نتفق عليهما قبل البدء.' },
        { q: 'هل يمكنني تعديل موقعي لاحقاً؟', a: 'نعم. التعديل الصغير (ثمن، صورة، وقت العمل) تطلبونه برسالة واتساب. ما هو مشمول نحدّده قبل البدء.' },
        { q: 'من يتكفّل بالاستضافة؟', a: 'يمكنني التكفّل بالاستضافة واسم النطاق ضمن الاشتراك الشهري. كل شيء نوضّحه قبل البدء.' },
        { q: 'وإذا لم يعجبني؟', a: 'لا تدفعون شيئاً. تخبرونني بما لا يناسبكم وأعدّل النموذج. وإذا بقي لا يناسبكم، نتوقف عند هذا الحد.' },
      ],
    },
    contact: {
      title: 'لنتحدث عن مشروعكم',
      text: 'أرسلوا لي رسالة على واتساب باسم نشاطكم، وسأجيبكم بنفسي.',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
    },
    footer: 'مطوّر مواقع وأتمتة · وجدة',
  },
}

export const pastClients = [
  { title: 'موقع شركة في مصر', text: 'تطوير موقع كامل بـ WordPress، عن بُعد (2024).' },
  { title: 'عميل في المملكة المتحدة', text: 'تطوير بـ Laravel وJavaScript، عن بُعد (2023).' },
  { title: 'وكالة ADMA.DIGITAL', text: 'مطوّر ويب ضمن فريق الوكالة بإطار Symfony ومنهجية Kanban (2023).' },
]

export const steps = [
  { title: 'ترسلون المطلوب', text: 'وصف المهمة وصلاحيات الوصول اللازمة فقط.' },
  { title: 'سعر ومدة ثابتان', text: 'عرض واضح قبل البدء، بلا مفاجآت.' },
  { title: 'التنفيذ والتسليم', text: 'تحديثات مختصرة أثناء العمل، وتسليم باسم وكالتكم.' },
  { title: 'دعم بعد التسليم', text: 'تعديلات وإصلاحات خلال فترة متفق عليها.' },
]

export const stack = [
  'Salla Twilight', 'Twig', 'JavaScript', 'React', 'Node.js', 'Laravel', 'Symfony',
  'WordPress', 'Shopify', 'Python', 'SQL Server', 'PostgreSQL', 'Azure', 'Docker', 'REST APIs',
]
