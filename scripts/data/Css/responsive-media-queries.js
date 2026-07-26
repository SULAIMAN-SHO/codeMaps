export const responsiveMediaQueriesData = [
    {
        id: 'css-media-queries-syntax',
        name: 'Media Queries Syntax (@media)',
        shortDescription: 'قاعدة استعلامات الشاشة التقليدية لتكييف التنسيق مع الشاشات المتباينة.',
        longDescription: 'القاعدة التاريخية والأساسية لبناء الواجهات المتجاوبة؛ تتيح تطبيق قواعد CSS استثنائية فور تحقق شرط محدد على أبعاد منفذ الرؤية (مثل min-width: 768px لشاشات الأجهزة اللوحية).',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* تطبيق تخطيط بعمودين فور تجاوز عرض الشاشة لـ 768px */
@media (min-width: 768px) {
  .cards-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}`
        ],
        expectedOutput: [
            'تحول العرض لعمودين تلقائياً على الأجهزة اللوحية وبقائه كعمود واحد بصفحة الموبايل.'
        ],
        professionalTips: 'استخدم وحدات em أو rem لنقاط الانكسار (Breakpoints) داخل @media بدلاً من البكسل px الصريح؛ لتتكيف استعلامات التجاوب مع خيارات تكبير خط المتصفح لدى المستخدم.',
        commonMistakes: {
            wrong: `/* وضع نقاط انكسار عشوائية مجهرية لكل نوع جوال */
@media (width: 375px) { ... }
@media (width: 414px) { ... }`,
            right: `@media (min-width: 640px) { ... }
@media (min-width: 1024px) { ... }`,
            explanation: 'الاعتماد على قياسات جوالات محددة كابوس صيانة؛ اعتمد نقاط انكسار معيارية تعتمد على اتساع المحتوى.'
        },
        thinkingWay: 'اعتبر @media كبوابة الحراسة على حدود الشاشة؛ تفتح التنسيقات المخصصة فقط لمن يمتلك العرض المطلوب.',
        relatedMethods: ['css-media-range-syntax', 'css-mobile-first-strategy'],
        keywords: ['@media', 'Media Queries', 'min-width', 'responsive design', 'breakpoints']
    },
    {
        id: 'css-media-range-syntax',
        name: 'Modern Range Syntax (width >= 768px)',
        shortDescription: 'الصيغة المعاصرة المختصرة والمباشرة لاستعلامات الميديا بـ CSS المعاصر.',
        longDescription: 'نمط معايير CSS الحديث المعترف به بـ 2026؛ يستبدل التعقيد المكتوب بـ min-width و max-width بعوامل المقارنة الحسابية المباشرة (مثل width >= 768px أو 400px <= width <= 900px).',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* استهداف النطاق المحصور بين شاشات الموبايل والشاشات العريضة */
@media (768px <= width <= 1200px) {
  .sidebar {
    display: none;
  }
}`
        ],
        expectedOutput: [
            'إخفاء القائمة الجانبية حصراً عندما يتراوح عرض الشاشة بين 768px و 1200px بأسلوب رياضي مقتضب.'
        ],
        professionalTips: 'الصيغة المعاصرة Range Syntax مدعومة كلياً بكل المتصفحات بـ 2026، وتلغي الإرباك الدائم الناتج عن التفكير بـ min-width و max-width.',
        commonMistakes: {
            wrong: `/* كتابة الصيغة القديمة المعقدة للنطاقات المحصورة */
@media (min-width: 768px) and (max-width: 1200px) { ... }`,
            right: `@media (768px <= width <= 1200px) { ... }`,
            explanation: 'الصيغة الجديدة أسهل بالقراءة وأقل عرضة للأخطاء الحسابية عند حواف النقاط.'
        },
        thinkingWay: 'فكر في Range Syntax كالمعادلات الرياضية الصريحة بكتب الحساب؛ تبين الحدود الدنيا والقصوى بسطر واحد.',
        relatedMethods: ['css-media-queries-syntax', 'css-media-logical-operators'],
        keywords: ['Range Syntax', 'width >= 768px', 'modern media queries', 'comparison syntax']
    },
    {
        id: 'css-media-logical-operators',
        name: 'Logical Operators in Media Queries',
        shortDescription: 'دمج الشروط المتباينة باستخدام المعاملات المنطقية (and, or, not).',
        longDescription: 'عوامل الربط المنطقي بداخل الاستعلامات؛ and تشترط تحقق كافة الشروط معاً، والفاصلة , تعمل كـ or لتحقق أحد الشروط، و not تعكس منطق الشرط كلياً.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `/* تطبيق التنسيق للشاشات العريضة بشرط أن تكون بالشكل الأفقي */
@media (width >= 1024px) and (orientation: landscape) {
  .hero-grid {
    grid-template-columns: 1fr 1fr;
  }
}`
        ],
        expectedOutput: [
            'تفعيل التخطيط بعمودين فقط إذا كانت الشاشة كبيرة وتم تدوير الجهاز أفقياً.'
        ],
        professionalTips: 'استخدم المعامل not بعناية واحرص على تغليف الاستعلام كاملاً بين أقواس؛ لتتجنب عكس جزء فرعي من الشرط بالخطأ.',
        commonMistakes: {
            wrong: `/* كتابة or بالكلمة الصريحة بدلاً من استخدام الفاصلة , */
@media (max-width: 600px) or (orientation: portrait) { ... }`,
            right: `@media (max-width: 600px), (orientation: portrait) { ... }`,
            explanation: 'لغة CSS تشترط استخدام الفاصلة , لتمثيل المعامل المنطقي OR بداخل استعلامات الميديا.'
        },
        thinkingWay: 'اعتبر المعاملات المنطقية كقواعد حارس البوابة؛ يطلب فحص الضغط وزاوية الرؤية معاً قبل إجازة الدخول.',
        relatedMethods: ['css-media-interaction-features'],
        keywords: ['and operator', 'or operator', 'not operator', 'logical CSS media', 'orientation']
    },
    {
        id: 'css-media-interaction-features',
        name: 'Interaction Features (hover & pointer)',
        shortDescription: 'فحص ميزات أجهزة الإدخال للتفريق بين شاشات اللمس والماوس الدقيق.',
        longDescription: 'استعلامات ميديا ذكية تبحث في طبيعة وسيلة التفاعل؛ (hover: hover) تفحص وجود ماوس حقيقي، و (pointer: coarse) تفحص ما إذا كان المدخل باللمس بالأصبع العريض بالهاتف.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `/* إظهار تأثيرات الـ hover حصراً لأجهزة الحاسوب المزودة بـ ماوس حقيقي */
@media (hover: hover) and (pointer: fine) {
  .card:hover {
    transform: translateY(-6px);
  }
}`
        ],
        expectedOutput: [
            'تشغيل تأثيرات الـ hover الناعمة على الحاسوب وإلغاؤها كلياً عن أجهزة اللمس بالموبايل.'
        ],
        professionalTips: 'إلغاء تأثيرات الـ hover عن أجهزة الهواتف المحمولة يمنع مشكلة "التأثير المعلق" (Sticky Hover Bug) الذي يظل ثابتاً فور لمس الشاشة بأصبع المستخدم.',
        commonMistakes: {
            wrong: `/* كتابة تأثيرات hover معقدة بدون فحص (hover: hover) فتتعطل على الموبايل */
.btn:hover { background: blue; }`,
            right: `@media (hover: hover) { .btn:hover { background: blue; } }`,
            explanation: 'شاشات اللمس تنفذ الـ hover عند اللمسة الأولى وتترك الكرت ثابتاً بحالته فيربك الزائر.'
        },
        thinkingWay: 'فكر في تفحص المدخلات بالمستشعر الذي يميز هل يدخل المستخدم بقلم دقيق أم بأصبع عريض على الزجاج.',
        relatedMethods: ['css-media-queries-syntax'],
        keywords: ['hover: hover', 'pointer: coarse', 'pointer: fine', 'touch device CSS', 'sticky hover fix']
    },
    {
        id: 'css-mobile-first-strategy',
        name: 'Mobile-First Strategy',
        shortDescription: 'فلسفة التطوير المعتمدة على تصميم الشاشات الصغيرة أولاً والتدرج للأعلى.',
        longDescription: 'المنهجية المعمارية القياسية لبناء الويب الحديث؛ تعتمد على كتابة التنسيقات الأساسية لشاشات الجوال المحدودة أولاً بدون استعلامات، ثم استخدام @media (min-width) بالتدرج للتوسع للشاشات الكبيرة.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* 1. التنسيق الافتراضي الأساسي الموجه للموبايل */
.nav-menu {
  display: flex;
  flex-direction: column;
}

/* 2. التوسع للشاشات العريضة بتدرج تصاعدي */
@media (min-width: 768px) {
  .nav-menu {
    flex-direction: row;
  }
}`
        ],
        expectedOutput: [
            'تحميل شفرة خفيفة جداً وسريعة للهواتف وتوفير استهلاك طاقة المعالج بـ 120fps.'
        ],
        professionalTips: 'فلسفة Mobile-First تجبرك على التركيز على المحتوى الجوهري وتلغي مئات سطور الـ CSS الزائدة، وتمنحك أفضل تقييم في مؤشرات الأداء الحيوية (Core Web Vitals).',
        commonMistakes: {
            wrong: `/* الاعتماد على Desktop-First بـ max-width والتنقل بالقص والتعطيل للموبايل */
@media (max-width: 1024px) { ... }
@media (max-width: 768px) { ... }`,
            right: `/* استخدام Mobile-First المعتمدة بـ min-width */
@media (min-width: 768px) { ... }`,
            explanation: 'الـ Desktop-First تجبر الهواتف الصغيرة على تنزيل وقراءة كافة تنسيقات الحاسوب الثقيلة ثم إلغائها بـ CSS إضافي.'
        },
        thinkingWay: 'اعتبر Mobile-First كبناء النواة الصلبة أولاً؛ تبني الحجرة الصغيرة الشاملة ثم تتوسع ببناء الصالات المجاورة.',
        relatedMethods: ['css-media-queries-syntax'],
        keywords: ['Mobile-First', 'Desktop-First', 'min-width strategy', 'responsive architecture', 'performance']
    },
    {
        id: 'css-modern-viewport-units',
        name: 'Modern Viewport Units (dvh, svh, lvh)',
        shortDescription: 'وحدات منفذ الرؤية الديناميكية المعالجة لمشاكل شريط العناوين بالموبايل.',
        longDescription: 'وحدات قياس معاصرة؛ dvh (Dynamic Viewport Height) تتكيف حياً مع اختفاء وظهور شريط العناوين بمتصفح الموبايل، بينما svh تعبر عن الارتفاع الأصغر و lvh تعبر عن الأكبر.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* قسم هيرو يغطي الشاشة كاملاً بطلاقة ودون قفز عند ظهور شريط Safari */
.full-screen-hero {
  min-height: 100dvh;
}`
        ],
        expectedOutput: [
            'تغطية كامل ارتفاع شاشة الموبايل بدقة متناهية دون قص الجزء السفلي خلف شريط الأدوات.'
        ],
        professionalTips: 'استبدل وحدة 100vh القديمة بـ 100dvh أو 100svh فوراً بجميع مشاريعك؛ لتلغي العقدة التاريخية لاختفاء أسفل الكروت خلف شريط متصفحات Safari و Chrome الجوالة.',
        commonMistakes: {
            wrong: `/* استخدام 100vh على الموبايل وتوقع عدم اختفاء أسفل القسم خلف شريط العنوان */
.hero { height: 100vh; }`,
            right: `.hero { min-height: 100dvh; }`,
            explanation: 'الوحدة القديمة vh تحسب الارتفاع كاملاً بوجود شريط المتصفح المفتوح، مما يتسبب في قص 60px السفلية من موقعك.'
        },
        thinkingWay: 'فكر في dvh كالشريط المطاطي الذكي؛ يتمدد فوراً فور اختفاء شريط المتصفح وينكمش بنعومة عند ظهوره.',
        relatedMethods: ['css-min-max-height'],
        keywords: ['dvh', 'svh', 'lvh', '100dvh', 'mobile viewport fix', 'safari address bar fix']
    },
    {
        id: 'css-container-queries',
        name: 'Container Queries (container-type & @container)',
        shortDescription: 'ثورة التجاوب المستقل للمكونات بناءً على عرض الحاوية الأب وليس الشاشة.',
        longDescription: 'التقنية الأكثر ثورية في CSS المعاصر؛ تتيح للكرت التجاوب والتغير التلقائي بناءً على العرض المتاح له بداخل الحاوية الأب (Container) بدلاً من الانصياع لعرض نافذة الشاشة الكلية.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `/* 1. إعلان الأب كحاوية استعلامات أفقية */
.card-wrapper {
  container-type: inline-size;
  container-name: card-container;
}

/* 2. تغيير شكل الكرت بناءً على اتساع مساحة الأب */
@container card-container (width >= 400px) {
  .card {
    display: grid;
    grid-template-columns: 150px 1fr;
  }
}`
        ],
        expectedOutput: [
            'تحول الكرت لشاشة بعمودين فور وضعه بداخل مساحة عريضة، وبقائه كعمود بداخل السايدبار الضيق.'
        ],
        professionalTips: 'تسمح لك Container Queries ببناء مكونات مستقلة ذاتياً (Self-contained Components) يمكن وضعها بداخل السايدبار أو بالمنتصف لتتلاءم مع المساحة المتاحة فوراً.',
        commonMistakes: {
            wrong: `/* نسيان تحديد container-type على الأب قبل كتابة @container */
@container (min-width: 300px) { .card { ... } }`,
            right: `.parent { container-type: inline-size; }
@container (width >= 300px) { .card { ... } }`,
            explanation: 'الاستعلام @container يتطلب حتماً تعيين السمة container-type: inline-size على الأب المحيط ليتعرف على أبعاده.'
        },
        thinkingWay: 'اعتبر Container Queries كحجم الملابس الشخصية؛ يتغير مقاس القميص بناءً على جسم الشخص الذي يرتديه وليس بناءً على حجم الغرفة.',
        relatedMethods: ['css-media-queries-syntax', 'css-media-range-syntax'],
        keywords: ['Container Queries', 'container-type', '@container', 'inline-size', 'modular CSS']
    },
    {
        id: 'css-responsive-images-object-fit',
        name: 'Responsive Images & object-fit',
        shortDescription: 'التحكم بالتقاط واحتواء الصور وتجاوبها دون تشويه أبعادها.',
        longDescription: 'تقنية حماية الصور من التمدد؛ تُستخدم max-width: 100% لمنع خروج الصورة عن الشاشة، واقترانها بـ object-fit: cover لقص الأطراف بنعومة والحفاظ على النسب البصرية.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* التهيئة المعيارية المتجاوبة لكافة صور المشروع */
img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}`
        ],
        expectedOutput: [
            'انكماش وتجاوب كافة الصور مع شاشات الهواتف المحمولة دون مطها أو الخروج عن الشاشة.'
        ],
        professionalTips: 'استخدم object-fit: cover مع تحديد aspect-ratio صريح؛ لضمان احتلال الصورة لمساحتها المحددة بدقة وتفادي ظاهرة اهتزاز التخطيط (CLS).',
        commonMistakes: {
            wrong: `/* تعيين width و height صلب بالبكسل على الصورة بدون max-width */
img { width: 800px; height: 400px; }`,
            right: `img { max-width: 100%; height: auto; object-fit: cover; }`,
            explanation: 'العرض الصلب يجبر الصورة على الخروج عن حدود شاشة الموبايل وإحداث سكرول أفقي مجهد.'
        },
        thinkingWay: 'فكر في object-fit: cover كصورة الشارع بداخل إطار النافذة؛ تقص الأطراف الزائدة وتملأ الإطار بالكامل بنقاء.',
        relatedMethods: ['css-aspect-ratio'],
        keywords: ['responsive images', 'max-width: 100%', 'object-fit', 'object-fit: cover', 'image overflow fix']
    }
];