export const seoPerformanceData = [
    {
        id: 'html-meta-description',
        name: '<meta name="description">',
        shortDescription: 'الملخص الوصفي الجذاب الظاهر في نتائج بحث جوجل وشبكات التواصل.',
        longDescription: 'وسم وصفي يزود محركات البحث بخلاصة مقتضبة تتراوح بين 130 إلى 160 حرفاً تظهر أسفل عنوان الموقع في نتائج البحث، وتشجع الزائر على النقر (CTR).',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<head>
  <meta name="description" content="تعلم هندسة الويب الحديثة وتأهل لسوق العمل عبر خرائط تفاعلية وأمثلة عملية معمارية.">
</head>`
        ],
        expectedOutput: [
            'عرض الفقرة الوصفية المباشرة أسفل عنوان الموقع في صفحة نتائج Google.'
        ],
        professionalTips: 'احرص على ألا يقل طول الوصف عن 120 حرفاً ولا يزيد عن 160 حرفاً؛ لتجنب اقتطاعه التلقائي بـ (...) في شاشات الجوال والحواسيب.',
        commonMistakes: {
            wrong: `<!-- حشو كلمات مفتاحية دون صياغة جملة مفيدة -->
<meta name="description" content="كود, برمجة, تعلم, HTML, CSS, JS">`,
            right: `<meta name="description" content="منصة تعليمية متكاملة لشرح معايير تطوير واجهات الويب العصرية بأسلوب معماري محترف.">`,
            explanation: 'حشو الكلمات المفتاحية عشوائياً يعتبر نمطاً مضاداً يقلل تقييم أرشفة موقعك لدى محركات البحث.'
        },
        thinkingWay: 'فكر في الوصف كنص الإعلان الترويجي المجاني الذي يغري المبتدئ بالدخول لموقعك من قائمة نتائج البحث.',
        relatedMethods: ['html-meta-viewport', 'html-og-tags'],
        keywords: ['<meta name="description">', 'SEO description', 'meta snippet', 'search ranking', 'click-through rate']
    },
    {
        id: 'html-meta-viewport',
        name: '<meta name="viewport">',
        shortDescription: 'تهيئة مقياس مساحة العرض للتجاوب التلقائي مع شاشات الهواتف.',
        longDescription: 'وسم محوري للتصميم المتجاوب؛ يربط عرض الصفحة بالعرض الفعلي لشاشة جهاز المستخدم بدرجة تكبير ابتدائية 100%، وتجنب السلوكيات القاسرة.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>`
        ],
        expectedOutput: [
            'ضبط أبعاد الصفحة تلقائياً لتناسب شاشة الهاتف دون الحاجة للتكبير اليدوي.'
        ],
        professionalTips: 'تحذير قطعي: لا تضف السمة user-scalable=no نهائياً؛ لأنها تمنع ضعاف البصر من تكبير الشاشة، مما يسبب خرقاً صارماً لقواعد الوصولية (WCAG).',
        commonMistakes: {
            wrong: `<!-- تعطيل التكبير والتصغير على مستخدم الهاتف -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">`,
            right: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
            explanation: 'تعطيل التكبير يضر بإمكانية الوصول ويتسبب في معاقبة الموقع في تقارير أداء Google Lighthouse.'
        },
        thinkingWay: 'اعتبر وسم viewport بمثابة المنظم الذكي الذي يضبط مقاس عدسة العرض لتلائم حجم الموبايل.',
        relatedMethods: ['html-meta-description'],
        keywords: ['viewport', 'responsive design', 'mobile-first', 'initial-scale', 'accessibility']
    },
    {
        id: 'html-link-canonical',
        name: '<link rel="canonical">',
        shortDescription: 'الرابط المعياري الأصلي لمنع عقوبات تكرار المحتوى بـ SEO.',
        longDescription: 'وسم يحدد الرابط الرسمي الأصلي للصفحة عندما تتوفر عدة روابط أو معلمات تجلب نفس المحتوى، لحماية أرشفة الموقع من العقوبات وتجميع قوة الرابط.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `<head>
  <link rel="canonical" href="https://codemap.dev/track/html">
</head>`
        ],
        expectedOutput: [
            'توجيه محركات البحث لأرشفة الرابط الأصلي المعتمد وتجاهل الروابط المكررة ذات المعلمات.'
        ],
        professionalTips: 'استخدم الرابط المعياري دائماً حتى لو لم يكن لديك صفحات مكررة؛ لمنع تشتت الفهرسة بسبب معلمات التتبع (مثل ?ref=facebook أو ?utm_source).',
        commonMistakes: {
            wrong: `<!-- كتابة رابط معياري نسبي بدلاً من المسار المطلق الكامل -->
<link rel="canonical" href="/track/html">`,
            right: `<link rel="canonical" href="https://codemap.dev/track/html">`,
            explanation: 'الرابط المعياري يجب أن يكون دائماً مساراً مطلقاً يشمل النطاق الكامل (https://...).'
        },
        thinkingWay: 'فكر في canonical كإعلان الملكية الفكرية الصريح؛ يخبر جوجل بالرابط الأصلي الحقيقي للصفحة.',
        relatedMethods: ['html-meta-description'],
        keywords: ['canonical', 'duplicate content', 'SEO URL', 'preferred URL', 'link rel canonical']
    },
    {
        id: 'html-og-tags',
        name: 'Open Graph Meta Tags (og:*)',
        shortDescription: 'تخصيص بطاقات العرض الفاخرة عند مشاركة رابط الموقع على منصات التواصل.',
        longDescription: 'بروتوكول طورته فيسبوك لإنشاء بطاقات تفاعلية غنية تضم الصورة والعنوان والوصف فور مشاركة الرابط على WhatsApp أو Facebook أو LinkedIn.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `<head>
  <meta property="og:title" content="منصة كود ماب المعمارية">
  <meta property="og:description" content="المرجع المعماري لتقنيات الويب العصرية.">
  <meta property="og:image" content="https://codemap.dev/og-cover.png">
  <meta property="og:url" content="https://codemap.dev">
  <meta property="og:type" content="website">
</head>`
        ],
        expectedOutput: [
            'رسم بطاقة معاينة جذابة بداخل تطبيقات التواصل تجمع الصورة الكبيرة والعنوان والوصف.'
        ],
        professionalTips: 'استخدم صورة og:image بأبعاد معيارية (1200x630 بكسل)؛ لضمان ظهورها بكامل العرض وبأعلى دقة دون قص غير مرغوب فيه على الواتساب وفيسبوك.',
        commonMistakes: {
            wrong: `<!-- استخدام مسار نسبي محلي للصورة og:image -->
<meta property="og:image" content="./images/og.png">`,
            right: `<meta property="og:image" content="https://codemap.dev/images/og.png">`,
            explanation: 'تطبيقات التواصل الاجتماعي تشترط مساراً مطلقاً كاملاً تبدأ بـ https:// لقراءة صورة البطاقة.'
        },
        thinkingWay: 'اعتبر Open Graph بمثابة البوستر الترويجي المطبوع الذي يظهر فور إرسال كرت دعوتك في الرسائل.',
        relatedMethods: ['html-twitter-cards', 'html-meta-description'],
        keywords: ['Open Graph', 'og:title', 'og:image', 'social media card', 'link preview']
    },
    {
        id: 'html-twitter-cards',
        name: 'Twitter / X Cards',
        shortDescription: 'تخصيص شكل بطاقة المعاينة التفاعلية المخصصة لمنصة Twitter / X.',
        longDescription: 'وسوم ميتا مخصصة لمنصة إكس (تويتر سابقاً) لتحديد حجم بطاقة العرض (مثل twitter:card content="summary_large_image") لإبراز الصورة والوصف.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `<head>
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="كود ماب - مسار HTML">
  <meta name="twitter:description" content="تصفح الأقسام المرجعية الأساسية لتطوير بنيتك المعمارية.">
  <meta name="twitter:image" content="https://codemap.dev/twitter-cover.png">
</head>`
        ],
        expectedOutput: [
            'إظهار التغريدة التي تحتوي رابطك في شكل بطاقة عريضة تحتل مساحة بصرية جبارة.'
        ],
        professionalTips: 'القيمة summary_large_image هي الخيار الأكثر احترافية للمنصات والمقالات لأنها تعرض الصورة بحجم كبير فوق العنوان.',
        commonMistakes: {
            wrong: `<!-- استخدام نوع summary المصغرة بدلاً من summary_large_image العريضة -->
<meta name="twitter:card" content="summary">`,
            right: `<meta name="twitter:card" content="summary_large_image">`,
            explanation: 'الخيار summary يظهر صورة مصغرة ضئيلة الحجم؛ بينما summary_large_image يمنحك التواجد البصري الأكبر.'
        },
        thinkingWay: 'فكر في Twitter Cards كشاشة العرض المخصصة لتغريدات رابطك لجذب الانتباه.',
        relatedMethods: ['html-og-tags'],
        keywords: ['twitter:card', 'Twitter Cards', 'X Card', 'summary_large_image', 'social preview']
    },
    {
        id: 'html-preconnect',
        name: '<link rel="preconnect">',
        shortDescription: 'تجهيز وإقامة الاتصال المسبق بالخوادم الخارجية لتسريع جلب الخطوط والموارد.',
        longDescription: 'وسم تحسين أداء يطلب من المتصفح فتح اتصال DNS و TLS المصافحة أمنياً مع سيرفر خارجي (مثل Google Fonts) مبكراً قبل الحاجة الفعلية لتنزيل الملفات.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `<head>
  <!-- فتح اتصال مبكر مع سيرفر الخطوط لتوفير 100-300ms -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
</head>`
        ],
        expectedOutput: [
            'تسريع وقت جلب الخطوط الخارجية والموارد الحرجة المعتمدة في الواجهة.'
        ],
        professionalTips: 'استخدم preconnect حصرياً مع الخوادم الحرجة جداً (التي جُلب منها أصول رئيسية في أول ثانيتين)؛ كثرة استخدام preconnect تستهلك طاقة المعالج بالاتصالات الزائدة.',
        commonMistakes: {
            wrong: `<!-- نسيان السمة crossorigin مع سيرفر الخطوط gstatic -->
<link rel="preconnect" href="https://fonts.gstatic.com">`,
            right: `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`,
            explanation: 'الخطوط تشترط طلبات crossorigin؛ نسيان هذه السمة يجعل المتصفح يتجاهل الاتصال المسبق المجهز.'
        },
        thinkingWay: 'اعتبر preconnect بمثابة الاتصال بالهاتف بحجز الطاولة في المطعم مسبقاً قبل وصولك؛ لتجد كل شيء جاهزاً فور دخولك.',
        relatedMethods: ['html-dns-prefetch', 'html-preload'],
        keywords: ['preconnect', 'web performance', 'Core Web Vitals', 'Google Fonts preconnect', 'latency']
    },
    {
        id: 'html-dns-prefetch',
        name: '<link rel="dns-prefetch">',
        shortDescription: 'فك ودقة عناوين IP للخوادم الخارجية في الخلفية مسبقاً.',
        longDescription: 'تقنية أداء احتياطية تقوم بتحويل اسم النطاق الخارجي إلى عنوان IP حقيقي في الخلفية لتوفير وقت الاستعلام لمصادر الميديا أو الإعلانات.',
        difficulty: 'medium',
        importance: 'normal',
        examples: [
            `<head>
  <!-- فك عنوان IP لخادم التحليلات في الخلفية -->
  <link rel="dns-prefetch" href="https://www.google-analytics.com">
</head>`
        ],
        expectedOutput: [
            'حل عنوان الـ DNS للخادم الخارجي مسبقاً في الخلفية دون استهلاك طاقة الاتصال الكبيرة.'
        ],
        professionalTips: 'استخدم dns-prefetch مع الخوادم ثانوية الأهمية (مثل أدوات التحليلات، الإعلانات، أو مشغلات الفيديو الخارجية) التي لن تُطلب فور فتح الصفحة.',
        commonMistakes: {
            wrong: `<!-- استخدام preconnect لجميع السيرفرات الثانوية بدلاً من dns-prefetch -->
<link rel="preconnect" href="https://analytics.com">`,
            right: `<link rel="dns-prefetch" href="https://analytics.com">`,
            explanation: 'الـ preconnect يستهلك موارد ثقيلة لفتح اتصالات قد لا تستغل؛ dns-prefetch أخف وأنسب للسيرفرات الثانوية.'
        },
        thinkingWay: 'فكر في dns-prefetch كالبحث عن عنوان صديقك في الخريطة وتدوينه جانباً قبل تحريك السيارة.',
        relatedMethods: ['html-preconnect'],
        keywords: ['dns-prefetch', 'DNS lookup', 'performance optimization', 'network latency']
    },
    {
        id: 'html-preload',
        name: '<link rel="preload">',
        shortDescription: 'التحميل المسبق الفوري للموارد الحرجة السريعة (خطوط، صور Hero، ملفات CSS).',
        longDescription: 'أمر أداء عالي الأولوية يجبر المتصفح على تنزيل الموارد المفصلية فوراً في اللحظة الأولى للتحميل، مما يحسن مؤشرات الأداء الحيوية (Core Web Vitals - LCP).',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `<head>
  <!-- تحميل الخط المعتمد بالواجهة فوراً قبل تحليل ملفات الـ CSS -->
  <link rel="preload" href="./fonts/custom-font.woff2" as="font" type="font/woff2" crossorigin>
</head>`
        ],
        expectedOutput: [
            'بدء طلب تنزيل الخط أو الصورة الرئيسية في أول بايت دون الانتظار لقراءة ملفات CSS.'
        ],
        professionalTips: 'حدد دائماً السمة as="font | image | style | script" بدقة عند استخدام preload؛ ليقوم المتصفح بتعيين الأولوية الصحيحة بال شبكة.',
        commonMistakes: {
            wrong: `<!-- إفراط استخدام preload لأكثر من 5 عناصر ثانوية بالصفحة -->
<link rel="preload" href="icon1.png" as="image">
<link rel="preload" href="icon2.png" as="image">`,
            right: `<!-- استخدام preload حصراً للصورة الرئيسية LCP والخط المباشر -->
<link rel="preload" href="hero-banner.jpg" as="image">`,
            explanation: 'الـ preload العشوائي يزحم نطاق الشبكة ويتسبب في تأخير تحميل ملفات JavaScript و CSS الأساسية.'
        },
        thinkingWay: 'اعتبر preload كشراء تذكرة المسار السريع الممتاز للمورد الأهم في الصفحة ليطير في مقدمة الطابور.',
        relatedMethods: ['html-preconnect', 'html-loading-lazy'],
        keywords: ['preload', 'as attribute', 'LCP', 'Core Web Vitals', 'critical resource']
    },
    {
        id: 'html-meta-robots',
        name: '<meta name="robots">',
        shortDescription: 'التحكم بتوجيهات زواحف وعناكب البحث بالفهرسة والتتبع.',
        longDescription: 'وسم توجيهي يعطي تعليمات صريحة لعناكب محركات البحث بإتاحة الفهرسة والتتبع (index, follow) أو منع أرشفة الصفحات الخاصة والداخليات بـ noindex.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `<!-- السماح الكامل بالفهرسة والتتبع (الوضع الافتراضي للموقع) -->
<meta name="robots" content="index, follow">

<!-- حظر أرشفة لوحة التحكم الخاصة -->
<!-- <meta name="robots" content="noindex, nofollow"> -->`
        ],
        expectedOutput: [
            'توجيه محرك البحث لإضافة الصفحة لفهرسه العام أو حجبها من نتائج البحث.'
        ],
        professionalTips: 'استخدم noindex للصفحات التي لا تود ظهورها في نتائج جوجل (مثل صفحات سلة الشراء، لوحات تحكم الإدارة، وسطح نصوص الملفات الشخصية).',
        commonMistakes: {
            wrong: `<!-- ترك الملاحة والفهرسة مفعلة في بيئات الاختبار التجريبية (Staging) -->
<meta name="robots" content="index, follow">`,
            right: `<meta name="robots" content="noindex, nofollow">`,
            explanation: 'ترك بيئة الاختبار بدون noindex يتسبب في أرشفة النسخة غير المكتملة وإلحاق الضرر بـ SEO الموقع الأصلي.'
        },
        thinkingWay: 'فكر في وسم robots كعلامة "ممنوع الدخول" أو "مرحباً بالزوار" المعلقة على باب الصفحة لعناكب الأرشفة.',
        relatedMethods: ['html-meta-description', 'html-link-canonical'],
        keywords: ['meta robots', 'noindex', 'nofollow', 'index follow', 'search engine crawler', 'indexing']
    },
    {
        id: 'html-app-icons',
        name: 'Favicon & Apple Touch Icon',
        shortDescription: 'أيقونات الهوية البصرية للتبويبات وتطبيقات الهواتف المضافة للشاشة الرئيسية.',
        longDescription: 'وسوم ربط تحدد أيقونة التبويب المصغرة (Favicon) وأيقونة العرض عالية الدقة الشبيهة بالتطبيقات الأصلية عند حفظ الموقع على شاشة أجهزة Apple وتطبيقات الهاتف.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `<head>
  <!-- أيقونة التبويب الحديثة بالـ SVG -->
  <link rel="icon" href="./assets/icons/favicon.svg" type="image/svg+xml">
  
  <!-- أيقونة أجهزة أبل عند الحفظ للشاشة الرئيسية -->
  <link rel="apple-touch-icon" href="./assets/icons/apple-touch-icon.png">
</head>`
        ],
        expectedOutput: [
            'عرض الأيقونة الملونة في تبويب المتصفح وعند حفظ الموقع كاختصار على شاشة آيفون.'
        ],
        professionalTips: 'استخدم صيغة SVG لأيقونة الـ Favicon؛ لأنها خفيفة جداً، تدعم التباين العالي، وتتأقلم مع الوضع الداكن (Dark Mode) بـ CSS مدمج.',
        commonMistakes: {
            wrong: `<!-- استخدام أيقونة بعرض صغير ضئيل كـ apple-touch-icon -->
<link rel="apple-touch-icon" href="small-16x16.png">`,
            right: `<link rel="apple-touch-icon" href="icon-180x180.png">`,
            explanation: 'أجهزة أبل تتطلب أيقونة عالية الدقة بحجم 180x180 بكسل على الأقل لتظهر بنقاء على شاشات Retina.'
        },
        thinkingWay: 'اعتبر هذه الأيقونات بمثابة شعار البراند المطبوع على واجهة التطبيق وفي أعلى التبويب.',
        relatedMethods: ['html-meta-description'],
        keywords: ['favicon', 'apple-touch-icon', 'browser icon', 'app icon', 'PWA icon']
    }
];