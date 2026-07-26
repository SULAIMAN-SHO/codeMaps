export const documentSetupData = [
    {
        id: 'html-doctype',
        name: '<!DOCTYPE html>',
        shortDescription: 'إعلان نوع المستند القياسي لفرض وضع المعايير الحديثة (Standard Mode) في المتصفحات.',
        longDescription: 'إعلان إلزامي يُكتب في بداية المستند لتوجيه محرك الرندر بالمتصفح لترجمة الكود وفق أحدث معايير W3C وتجنب التراجع التلقائي إلى وضع التوافق القديم (Quirks Mode).',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>المستند القياسي</title>
</head>
<body>
    <h1>تفعيل المعايير الحديثة</h1>
</body>
</html>`
        ],
        expectedOutput: [
            'تفعيل وضع المعايير القياسية (Standard Mode) وتطبيق حسابات النماذج الهيكلية بدقة.'
        ],
        professionalTips: 'في المشاريع الكبيرة، غياب هذا الإعلان يسبب تفكك التنسيقات وتراجع المتصفحات لمعالجة الأكواد بأسلوب أواخر التسعينات، مما يربك حسابات الهوامش وأبعاد عناصر التخطيط.',
        commonMistakes: {
            wrong: `<!-- كتابة تعليقات أو مسافات قبل إعلان الدوكتايب -->
<!DOCTYPE html>`,
            right: `<!DOCTYPE html>
<html lang="ar" dir="rtl">`,
            explanation: 'يجب أن يكون إعلان DOCTYPE في السطر الأول دون أي مسافات أو تعليقات قبله إطلاقاً لضمان عدم تفعيل وضع Quirks Mode.'
        },
        thinkingWay: 'اعتبر إعلان DOCTYPE بمثابة ممرر الأوامر الأول للمتصفح لتحديد العصر البرمجي الذي سينفذ فيه كودك.',
        relatedMethods: [
            'html-lang-dir',
            'html-charset'
        ],
        keywords: [
            'DOCTYPE',
            '<!DOCTYPE html>',
            'Standard Mode',
            'Quirks Mode',
            'W3C',
            'HTML5'
        ]
    },
    {
        id: 'html-lang-dir',
        name: '<html lang="ar" dir="rtl">',
        shortDescription: 'العنصر الجذر لتحديد لغة المستند واتجاه تدفق المحتوى بصرياً وتنظيمياً.',
        longDescription: 'الوسم الأب لكافة عناصر الصفحة، تُحدد سمة lang اللغة الرئيسية لتيسير الترجمة وقارئات الشاشة، بينما تضمن سمة dir توجيه تدفق الواجهة بالكامل من اليمين إلى اليسار.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>صفحة عربية</title>
</head>
<body>
    <p>المحتوى يتدفق تلقائياً من اليمين إلى اليسار.</p>
</body>
</html>`
        ],
        expectedOutput: [
            'ضبط اتجاه الواجهة من اليمين إلى اليسار تلقائياً وتمكين قارئات الشاشة من قراءة النصوص العربية.'
        ],
        professionalTips: 'تحديد lang و dir على مستوى الوسم الجذر يضمن توافق مكتبات التنسيق الحديثة مثل Tailwind CSS مع الخصائص المنطقية (CSS Logical Properties) وتجنب مشاكل المحاذاة.',
        commonMistakes: {
            wrong: `<html lang="ar">
  <!-- الاعتماد على CSS فقط لتحديد الاتجاه -->
  <body style="direction: rtl;">`,
            right: `<html lang="ar" dir="rtl">
  <body>`,
            explanation: 'تحديد الاتجاه عبر CSS لا يفهمه قارئ الشاشة ولا محركات البحث في مرحلة التحليل الأولى؛ يجب أن يتم الضبط دلالياً داخل وسم html.'
        },
        thinkingWay: 'فكر في سمات الوسم الجذر كإعدادات الإقليم والمنطقة الرئيسية للمشروع التي تبنى عليها بقية العناصر.',
        relatedMethods: [
            'html-doctype',
            'html-charset'
        ],
        keywords: [
            'html',
            'lang',
            'dir',
            'rtl',
            'ltr',
            'accessibility'
        ]
    },
    {
        id: 'html-charset',
        name: '<meta charset="UTF-8">',
        shortDescription: 'ترميز الأحرف الموحد لضمان عرض المحتوى العربي والرموز الخاصة دون تشويه.',
        longDescription: 'وسم وصفي يحدد نظام ترميز المحارف المعتمد داخل المستند، حيث يضمن UTF-8 دعم كافة لغات العالم والرموز التعبيرية والشفرات دون ظهور رموز مبهمة.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<head>
    <meta charset="UTF-8">
    <title>منصة كود ماب 🚀</title>
</head>`
        ],
        expectedOutput: [
            'عرض كافة الحروف العربية والرموز الخاصة مثل (©, 🚀, ★) بنقاء تام.'
        ],
        professionalTips: 'يجب وضع هذا الوسم في أعلى رأس المستند <head> مباشرة، ليتمكن المتصفح من فك تشفير أول 1024 بايت من الصفحة فوراً قبل قراءة باقي الوسوم.',
        commonMistakes: {
            wrong: `<head>
    <title>عنوان الصفحة</title>
    <!-- تأخير charset بعد العناوين والنصوص -->
    <meta charset="UTF-8">
</head>`,
            right: `<head>
    <meta charset="UTF-8">
    <title>عنوان الصفحة</title>
</head>`,
            explanation: 'تأخير وسم charset يتسبب في إعادة تحليل وقراءة النصوص والسكربتات بترميز خاطئ مما يؤثر على أداء التحميل.'
        },
        thinkingWay: 'اعتبر وسم charset بمثابة المترجم الفوري الذي يجب تهيئته أولاً قبل قراءة أي حرف داخل المستند.',
        relatedMethods: [
            'html-viewport',
            'html-title'
        ],
        keywords: [
            'UTF-8',
            'meta charset',
            'encoding',
            'character set',
            'arabic'
        ]
    },
    {
        id: 'html-viewport',
        name: '<meta name="viewport">',
        shortDescription: 'تهيئة مساحة العرض المتجاوبة للتحكم في مقياس وأبعاد الصفحة على الشاشات المختلفة.',
        longDescription: 'وسم محوري للتصميم المتجاوب (Responsive Design) يوجه متصفحات الهواتف لاحتساب عرض منفذ الرؤية بناءً على العرض الفعلي لشاشة الجهاز وبدرجة تكبير ابتدائية 100%.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>`
        ],
        expectedOutput: [
            'عرض الواجهة بمقياس متناسق على الهواتف دون الحاجة للتكبير اليدوي أو ظهور شريط تمرير أفقي.'
        ],
        professionalTips: 'بدون هذا الوسم، تفترض متصفحات الهواتف أن الصفحة مصممة لشاشات الحواسيب بسعة 980px وتقوم بتقزيم العناصر، مما يدمر تجربة الاستخدام.',
        commonMistakes: {
            wrong: `<!-- تعطيل التكبير اليدوي على المستخدم -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">`,
            right: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
            explanation: 'استخدام user-scalable=no يمنع ذوي الإعاقة البصرية من تكبير النصوص، مما يخالف معايير إمكانية الوصول (WCAG).'
        },
        thinkingWay: 'فكر في وسم viewport كمنظم لعدسة الكاميرا الذي يضبط المقاسات التلقائية لتلائم حجم الشاشة.',
        relatedMethods: [
            'html-charset',
            'html-title'
        ],
        keywords: [
            'viewport',
            'responsive',
            'mobile-first',
            'initial-scale',
            'media queries'
        ]
    },
    {
        id: 'html-title',
        name: '<title>',
        shortDescription: 'عنوان الصفحة الرئيسي الذي يظهر في ألسنة المتصفح ونتائج محركات البحث.',
        longDescription: 'عنصر دلالي أساسي يحدد عنوان الصفحة في شريط تبويب المتصفح، قائمة المفضلات، والسطر الرئيسي في نتائج محركات البحث (SEO).',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<head>
    <title>كود ماب | المرجع المعماري لتقنيات الويب</title>
</head>`
        ],
        expectedOutput: [
            'ظهور النص "كود ماب | المرجع المعماري لتقنيات الويب" في أعلى التبويب ونتائج البحث.'
        ],
        professionalTips: 'تعتمد الشركات صيغة موحدة للعناوين: [اسم الصفحة] | [اسم الشركة]، مع جعل الطول بين 50 إلى 60 حرفاً لتجنب اقتطاعه بـ (...) في نتائج البحث.',
        commonMistakes: {
            wrong: `<title>الصفحة الرئيسية</title>`,
            right: `<title>لوحة التحكم | منصة إدارة المبيعات</title>`,
            explanation: 'العناوين المبهمة تضعف تصنيف الصفحة في محركات البحث وتصعب التمييز بين التبويبات المفتوحة.'
        },
        thinkingWay: 'عنوان الصفحة هو الواجهة الأولى والكتاب المعرف لهوية موقعك أمام المستخدم ومحركات البحث.',
        relatedMethods: [
            'html-description',
            'html-favicon'
        ],
        keywords: [
            'title',
            'SEO',
            'tab title',
            'search engine',
            'head'
        ]
    },
    {
        id: 'html-description',
        name: '<meta name="description">',
        shortDescription: 'الملخص الوصفي لمحتوى الصفحة الموجه لمحركات البحث وشبكات التواصل.',
        longDescription: 'وسم وصفي يقدم خلاصة مقتضبة عن محتوى الصفحة، تعتمد عليه محركات البحث مثل Google للظهور كفقرة توضيحية أسفل العنوان في نتائج البحث.',
        difficulty: 'medium',
        importance: 'normal',
        examples: [
            `<head>
    <meta name="description" content="تعلم هندسة الويب الحديثة وتأهل لسوق العمل عبر خرائط تفاعلية وأمثلة عملية معمارية.">
</head>`
        ],
        expectedOutput: [
            'عرض الفقرة التوضيحية أسفل عنوان الموقع في قائمة نتائج محركات البحث.'
        ],
        professionalTips: 'احرص على أن يتراوح طول الوصف بين 130 و 160 حرفاً، وأن يحتوي على الكلمات المفتاحية الرئيسية بأسلوب جذاب يشجع الزائر على النقر.',
        commonMistakes: {
            wrong: `<meta name="description" content="كود, برمجة, تعلم, HTML, CSS, JS">`,
            right: `<meta name="description" content="منصة تعليمية متكاملة لشرح معايير تطوير واجهات الويب العصرية بأسلوب معماري محترف.">`,
            explanation: 'حشو الكلمات المفتاحية بدون جملة مفيدة يضر بمصداقية الموقع لدى محركات البحث وقد يتسبب في معاقبته.'
        },
        thinkingWay: 'الوصف هو نص الإعلان الترويجي المجاني الذي يقرؤه الزائر قبل اتخاذ قرار دخول موقعك من محرك البحث.',
        relatedMethods: [
            'html-title',
            'html-favicon'
        ],
        keywords: [
            'meta description',
            'SEO',
            'snippet',
            'search engine',
            'click-through rate'
        ]
    },
    {
        id: 'html-favicon',
        name: '<link rel="icon">',
        shortDescription: 'أيقونة الموقع المصغرة (Favicon) الظاهرة في ألسنة المتصفح وقوائم الإشارات المرجعية.',
        longDescription: 'وسم ربط مخصص لتحديد الأيقونة المصغرة للموقع التي تعزز الهوية البصرية بجانب العنوان في التبويبات وقوائم المفضلات.',
        difficulty: 'easy',
        importance: 'normal',
        examples: [
            `<head>
    <link rel="icon" href="./assets/icons/favicon.svg" type="image/svg+xml">
</head>`
        ],
        expectedOutput: [
            'عرض أيقونة الشعار الملونة بجانب عنوان الصفحة في شريط تبويب المتصفح.'
        ],
        professionalTips: 'يُفضل استخدام صيغة SVG للأيقونات في المشاريع الحديثة لخفتها ودعمها للتجاوب مع الوضع الداكن (Dark Mode) عبر CSS مدمجة.',
        commonMistakes: {
            wrong: `<!-- استخدام مسارات محلية مطلقة تنكسر عند النشر -->
<link rel="icon" href="C:/images/favicon.ico">`,
            right: `<link rel="icon" href="./assets/icons/favicon.svg" type="image/svg+xml">`,
            explanation: 'المسارات المحلية المطلقة تنكسر فور رفع الموقع للسيرفر، بينما توفر الصيغ الحديثة كـ SVG مرونة أعلى.'
        },
        thinkingWay: 'الأيقونة المصغرة هي البصمة البصرية التي تتيح للمستخدم العثور على تبويب موقعك فوراً بين عشرات التبويبات.',
        relatedMethods: [
            'html-title',
            'html-description'
        ],
        keywords: [
            'favicon',
            'link rel="icon"',
            'SVG favicon',
            'browser tab',
            'brand icon'
        ]
    }
];