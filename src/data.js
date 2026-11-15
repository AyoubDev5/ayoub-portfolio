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

/* ---------- /business page (local businesses in Oujda), FR + AR ---------- */
// To show a real photo: put it in public/ (e.g. public/ayoub.jpg, ~400px, under 60 KB)
// and set photo: '/ayoub.jpg'. While it is null, the page shows the initials "AT".
export const businessPhoto = null

export const businessPage = {
  fr: {
    dir: 'ltr',
    title: 'Ayoub Taqi — Sites web pour commerces à Oujda',
    other: 'العربية',
    nav: { whatsapp: 'WhatsApp' },
    heroEyebrow: 'Oujda · Maroc',
    heroTitle: ['Ayoub Taqi,', 'développeur web à Oujda'],
    heroText: 'Je crée des sites simples et rapides pour les commerces d’Oujda, avec les réservations envoyées directement sur votre WhatsApp.',
    ctaWhatsapp: 'Écrire sur WhatsApp',
    ctaDemos: 'Voir les démos',
    waMsg: 'Bonjour Ayoub, j’ai vu votre page. Je voudrais un site pour mon commerce.',
    demosEyebrow: 'Démos',
    demosTitle: 'Deux exemples pour des agences de location',
    demosText: 'Les noms sont inventés : ce sont des démos, pas des clients. Votre site aura votre nom, vos voitures et vos prix.',
    demoBadge: 'Démo — marque fictive, pas un client',
    demoCta: 'Voir la démo',
    stepsEyebrow: 'Comment ça marche',
    stepsTitle: 'Vous voyez votre site avant de payer',
    includedEyebrow: 'Ce qui est inclus',
    includedTitle: 'Tout ce qu’il faut, rien de compliqué',
    included: [
      ['page', 'Site d’une page', 'Vos services, vos prix et vos contacts, au même endroit.'],
      ['whatsapp', 'Réservation WhatsApp', 'Le client remplit le formulaire, vous recevez le message.'],
      ['globe', 'Français + arabe', 'Deux langues, un bouton pour passer de l’une à l’autre.'],
      ['mobile', 'Adapté au téléphone', 'Lisible et facile à utiliser sur tous les téléphones.'],
      ['pin', 'Lien sur Google Maps', 'J’ajoute le lien du site sur votre fiche Google Maps.'],
      ['edit', 'Modifications simples', 'Un prix ou une voiture change ? Envoyez-moi un message.'],
    ],
    priceEyebrow: 'Prix',
    priceFrom: 'À partir de',
    priceValue: '1 500 DH',
    priceNote: 'Le prix exact dépend de votre commerce. Vous le connaissez avant que je commence.',
    priceMonthly: 'Hébergement et petites modifications : option mensuelle',
    aboutEyebrow: 'Qui je suis',
    aboutLines: [
      'Je m’appelle Ayoub Taqi, je suis développeur web à Oujda.',
      'C’est moi qui fais votre site et qui vous réponds sur WhatsApp, sans intermédiaire.',
      'Vous voyez votre site et vous le testez avant de payer quoi que ce soit.',
    ],
    contactTitle: 'Parlons de votre site',
    contactText: 'Envoyez-moi le nom de votre commerce sur WhatsApp. Je vous réponds moi-même.',
    phone: 'Téléphone',
    email: 'E-mail',
    footer: 'Développeur web · Oujda',
  },
  ar: {
    dir: 'rtl',
    title: 'أيوب تاقي — مواقع إلكترونية للمحلات في وجدة',
    other: 'Français',
    nav: { whatsapp: 'واتساب' },
    heroEyebrow: 'وجدة · المغرب',
    heroTitle: ['أيوب تاقي،', 'مطوّر مواقع في وجدة'],
    heroText: 'أصمّم مواقع بسيطة وسريعة للمحلات في وجدة، والحجوزات تصلكم مباشرة على واتساب.',
    ctaWhatsapp: 'راسلني على واتساب',
    ctaDemos: 'شاهد النماذج',
    waMsg: 'السلام عليكم أيوب، شفت الصفحة ديالك وبغيت موقع للمحل ديالي.',
    demosEyebrow: 'نماذج',
    demosTitle: 'مثالان لوكالات كراء السيارات',
    demosText: 'الأسماء وهمية: هذه نماذج وليست لعملاء. موقعكم سيحمل اسمكم وسياراتكم وأثمنتكم.',
    demoBadge: 'نموذج — علامة وهمية، ليست عميلاً',
    demoCta: 'شاهد النموذج',
    stepsEyebrow: 'كيف تتم العملية',
    stepsTitle: 'ترون موقعكم قبل أن تدفعوا',
    includedEyebrow: 'ماذا يشمل',
    includedTitle: 'كل ما تحتاجونه، بدون تعقيد',
    included: [
      ['page', 'موقع من صفحة واحدة', 'خدماتكم وأثمنتكم ووسائل التواصل في مكان واحد.'],
      ['whatsapp', 'الحجز عبر واتساب', 'الزبون يملأ الاستمارة، وتصلكم الرسالة مباشرة.'],
      ['globe', 'بالفرنسية والعربية', 'لغتان، وزر واحد للتبديل بينهما.'],
      ['mobile', 'مناسب للهاتف', 'واضح وسهل الاستعمال على كل الهواتف.'],
      ['pin', 'رابط في خرائط Google', 'أضيف رابط الموقع في صفحتكم على خرائط Google.'],
      ['edit', 'تعديلات بسيطة', 'تغيّر ثمن أو سيارة؟ أرسلوا لي رسالة.'],
    ],
    priceEyebrow: 'الثمن',
    priceFrom: 'ابتداءً من',
    priceValue: '1500 درهم',
    priceNote: 'الثمن النهائي حسب نشاطكم، وتعرفونه قبل أن أبدأ.',
    priceMonthly: 'الاستضافة والتعديلات الصغيرة: اشتراك شهري اختياري',
    aboutEyebrow: 'من أنا',
    aboutLines: [
      'اسمي أيوب تاقي، مطوّر مواقع في وجدة.',
      'أنا من يصمّم موقعكم ومن يجيبكم على واتساب، بدون وسيط.',
      'ترون موقعكم وتجرّبونه قبل أن تدفعوا أي شيء.',
    ],
    contactTitle: 'لنتحدث عن موقعكم',
    contactText: 'أرسلوا لي اسم محلّكم على واتساب، وسأجيبكم بنفسي.',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    footer: 'مطوّر مواقع · وجدة',
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
