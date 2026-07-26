export const semanticLayoutData = [
    {
        id: 'html-header',
        name: '<header>',
        shortDescription: 'عنصر الترويسة التمهيدية المستقلة للمستند أو الأقسام الفرعية.',
        longDescription: 'وسم دلالي يُستخدم لتجميع عناصر المقدمة والترويسة التمهيدية للمستند أو المقالة. يحتوي عادةً على الشعار، عنوان الصفحة الرئيسي، نموذج البحث، أو قائمة التنقل.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<!-- ترويسة الموقع الرئيسية -->
<header>
  <img src="logo.svg" alt="شعار المنصة">
  <nav>
    <a href="#home">الرئيسية</a>
    <a href="#about">من نحن</a>
  </nav>
</header>`
        ],
        expectedOutput: [
            'تحديد منطقة الترويسة دلالياً في شجرة إمكانية الوصول (Accessibility Tree) ومساعدة قارئات الشاشة.'
        ],
        professionalTips: 'يمكن تكرار وسم <header> أكثر من مرة في نفس الصفحة إذا كان كل وسم يمثل ترويسة لقسم دلالي مستقل (مثل ترويسة رئيسية للموقع وترويسة فرعية داخل كل <article>).',
        commonMistakes: {
            wrong: `<!-- استخدام div تقليدي لتحديد الترويسة -->
<div class="top-header">
  <h1>عنوان الموقع</h1>
</div>`,
            right: `<header>
  <h1>عنوان الموقع</h1>
</header>`,
            explanation: 'الاعتماد على <div class="header"> يحرم محركات البحث وقارئات الشاشة من التعرف المباشر على منطقة الترويسة القياسية.'
        },
        thinkingWay: 'اعتبر <header> المدخل الرسمي أو البوابة التمهيدية التي تقدم فكرة سريعة عن المحتوى الذي يليه مباشرة.',
        relatedMethods: [
            'html-nav',
            'html-main',
            'html-footer'
        ],
        keywords: [
            'header',
            '<header>',
            'semantic layout',
            'accessibility',
            'SEO'
        ]
    },
    {
        id: 'html-nav',
        name: '<nav>',
        shortDescription: 'حاوية التنقل الرئيسية التي تضم أشرطة القوائم والروابط المحورية.',
        longDescription: 'وسم دلالي يحدد المجموعات الرئيسية من روابط التنقل داخل الموقع. يساعد محركات البحث وقارئات الشاشة على تمييز أشرطة التنقل المحورية عن باقي الروابط الفرعية داخل النصوص.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<nav aria-label="التنقل الرئيسي">
  <ul>
    <li><a href="/">الرئيسية</a></li>
    <li><a href="/courses">المسارات التعليمية</a></li>
    <li><a href="/contact">اتصل بنا</a></li>
  </ul>
</nav>`
        ],
        expectedOutput: [
            'تمكين مستخدمي قارئات الشاشة من القفز المباشر لشريط التنقل أو تجنبه للانتقال للمحتوى.'
        ],
        professionalTips: 'ليس كل مجموعة روابط تحتاج وسم <nav>؛ استخدمه حصرياً للقوائم المفصلية (مثل هيدر الصفحة أو فوتر الموقع). إذا احتوت الصفحة على أكثر من <nav>، أضف سمة aria-label للتمييز بينهما.',
        commonMistakes: {
            wrong: `<!-- وضع وسم nav حول كافة روابط الصفحة حتى الفرعية منها -->
<p>للمزيد من التفاصيل <nav><a href="/more">اضغط هنا</a></nav></p>`,
            right: `<p>للمزيد من التفاصيل <a href="/more">اضغط هنا</a></p>`,
            explanation: 'تغليف الروابط العادية داخل <nav> يربك قارئات الشاشة ويقلل من فائدة الوسم المخصص للقوائم الهيكلية.'
        },
        thinkingWay: 'فكر في <nav> كبوصلة الموقع الرئيسية؛ يُستخدم فقط للأشرطة التي تنقل المستخدم عبر محاور المنصة الأساسية.',
        relatedMethods: [
            'html-header',
            'html-footer'
        ],
        keywords: [
            'nav',
            '<nav>',
            'navigation',
            'accessibility',
            'links',
            'menu'
        ]
    },
    {
        id: 'html-main',
        name: '<main>',
        shortDescription: 'الحاوية الفريدة للمحتوى الأساسي والجوهري لصفحة الويب.',
        longDescription: 'عنصر دلالي يغلف المحتوى الرئيسي والمستقل للمستند. يضمن عزل المحتوى الجوهري عن الأجزاء المكررة عبر الصفحات مثل الشعار، القوائم الجانبية، أشرطة التنقل، والتذييل.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<!-- الحاوية الرئيسية الفريدة بالصفحة -->
<main>
  <h1>مسار تعلم إتش تي إم إل</h1>
  <p>المحتوى التعليمي الجوهري يوضع هنا...</p>
</main>`
        ],
        expectedOutput: [
            'تمكين تقنيات المساعدة ومحركات البحث من العثور على جوهر الصفحة وتجاهل القوائم المكررة.'
        ],
        professionalTips: 'يجب أن يكون وسم <main> فريداً ويُستخدم مرة واحدة فقط لكل صفحة مفتوحة، ولا يجوز إدراجه داخل أوسام <header> أو <nav> أو <aside> أو <footer> مطلقاً لضمان سلامة شجرة الوصول (Accessibility Tree).',
        commonMistakes: {
            wrong: `<!-- إدراج وسم main داخل وسم header أو تكراره في الصفحة -->
<header>
  <main><h1>المحتوى</h1></main>
</header>`,
            right: `<header><h1>ترويسة</h1></header>
<main><h1>المحتوى الرئيسي</h1></main>`,
            explanation: 'وضع <main> داخل أوسام دلالية أخرى يخالف المعايير القياسية ويمنع المتصفح من تحديد نطاق المحتوى الأصلي.'
        },
        thinkingWay: 'اعتبر <main> بمثابة مسرح العرض الرئيسي؛ كل ما يوضع داخله هو السبب الحقيقي لزيارة المستخدم لهذه الصفحة بالتحديد.',
        relatedMethods: [
            'html-header',
            'html-section',
            'html-article'
        ],
        keywords: [
            'main',
            '<main>',
            'main content',
            'SEO',
            'accessibility'
        ]
    },
    {
        id: 'html-section',
        name: '<section>',
        shortDescription: 'تقسيم موضوعي دلالي يجمع محتوى مترابطاً يحمل عنواناً رئيسياً.',
        longDescription: 'عنصر دلالي يمثل قسماً موضوعياً مستقلاً داخل المستند، يُستخدم لتجميع المحتويات المترابطة حول فكرة واحدة ويشترط عادةً أن يحتوي على عنوان توضيحي (h2-h6).',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `<!-- قسم موضوعي محدد بعنوان -->
<section>
  <h2>مميزات المنصة</h2>
  <p>نقدم خرائط تفاعلية وأمثلة برمجية محاكية لسوق العمل.</p>
</section>`
        ],
        expectedOutput: [
            'تقسيم بنية الصفحة إلى كتل معرفية واضحة يفهمها محرك البحث وقارئات الشاشة.'
        ],
        professionalTips: 'الفرق الجوهري بين <section> و <div> هو أن <div> حاوية غير دلالية مخصصة فقط للتنسيق والتصميم (CSS Container)، بينما <section> قسم دلالي يضيف معنى لمحركات البحث وقارئات الشاشة ويتطلب وجود عنوان توضيحي داخله.',
        commonMistakes: {
            wrong: `<!-- استخدام section كحاوية لتغليف العناصر لمجرد التنسيق بـ CSS -->
<section class="flex-container">
  <div>محتوى للتنسيق</div>
</section>`,
            right: `<!-- استخدام div للتنسيق و section للأقسام المعرفية ذات العنوان -->
<div class="flex-container">
  <section>
    <h2>خدماتنا</h2>
  </section>
</div>`,
            explanation: 'تجنب استخدام <section> بدلاً من <div> إذا كان الهدف مجرد إضافة تنسيق CSS؛ الوسم <section> مخصص فقط للمجموعات الدلالية التي تمتلك معنى وعنواناً.'
        },
        thinkingWay: 'فكر في <section> كفصل داخل كتاب؛ يجب أن يكون له عنوان واضح ويناقش موضوعاً فرعياً محدد من الفكرة الكلية.',
        relatedMethods: [
            'html-article',
            'html-main'
        ],
        keywords: [
            'section',
            '<section>',
            'section vs div',
            'semantic section',
            'structure'
        ]
    },
    {
        id: 'html-article',
        name: '<article>',
        shortDescription: 'وحدة محتوى مستقلة ذاتياً وقابلة للنشر وإعادة الاستخدام بمفردها.',
        longDescription: 'وسم دلالي يمثل محتوى قائماً بذاته ومستقلاً عن بقية الصفحة، ويمكن اقتطاعه ونشره في بيئة أخرى (مثل منشور مدونة، بطاقة منتج، خبر صحفي، أو تعليق مستخدم).',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `<!-- بطاقة خبرية مستقلة قابلة للنشر بمفردها -->
<article>
  <h2>إطلاق التحديث الجديد للمنصة</h2>
  <p>تم تفعيل مسار تعلم HTML مع دعم التفاعلية الكاملة...</p>
</article>`
        ],
        expectedOutput: [
            'تعريف محركات البحث بالوحدات الخبرية والمقالات القابلة للفهرسة المباشرة كـ RSS Feeds.'
        ],
        professionalTips: 'الفرق بين <article> و <section> هو التبعية والاستقلالية (Self-containment)؛ إذا كان بإمكانك أخذ الكود ونشره في موقع آخر كبطاقة مكتملة المعنى دون الحاجة لسياق الصفحة، فهو <article>. أما إذا كان جزءاً موضوعياً لا يكتمل معناه إلا بوجود بقية الصفحة، فهو <section>.',
        commonMistakes: {
            wrong: `<!-- استخدام article كحاوية عامة لتنسيق أجزاء الصفحة -->
<article class="hero-banner">
  <h2>مرحباً بكم في الموقع</h2>
</article>`,
            right: `<section class="hero-banner">
  <h2>مرحباً بكم في الموقع</h2>
</section>`,
            explanation: 'قسم الترحيب ليس مقالة أو وحدة مستقلة قائمة بذاتها، بل هو جزء من سياق الصفحة؛ لذا فإن <section> هو الخيار الصحيح.'
        },
        thinkingWay: 'اعتبر <article> بمثابة منشور مستقل على شبكات التواصل؛ يمكن قراءته وفهمه كاملاً بمفرده دون رؤية باقي المنشورات.',
        relatedMethods: [
            'html-section',
            'html-aside'
        ],
        keywords: [
            'article',
            '<article>',
            'article vs section',
            'independent content',
            'blog post'
        ]
    },
    {
        id: 'html-aside',
        name: '<aside>',
        shortDescription: 'محتوى جانبي مرتبط كلياً أو جزئياً بالمحتوى الرئيسي للمستند.',
        longDescription: 'عنصر دلالي يمثل محتوى ثانوياً أو توضيحياً يرتبط بالمحتوى المحيط به ولكنه ليس الجزء الأساسي (مثل شريط التصفية الجانبي Sidebar، الإعلانات، الروابط المقترحة، أو ملاحظات الهامش).',
        difficulty: 'medium',
        importance: 'normal',
        examples: [
            `<main>
  <article>
    <h1>شرح وسوم HTML</h1>
    <p>تساعد الوسوم الدلالية على تحسين الـ SEO...</p>
  </article>
  <aside>
    <h3>مقالات ذات صلة</h3>
    <ul>
      <li><a href="#">دليل تنسيقات CSS</a></li>
    </ul>
  </aside>
</main>`
        ],
        expectedOutput: [
            'عزل المحتوى الجانبي والإعلانات عن النص الرئيسي لمساعدة قارئات الشاشة ومحركات البحث.'
        ],
        professionalTips: 'إذا وُضع <aside> داخل <article> فإنه يعبر عن ملاحظة جانبية متعلقة بتلك المقالة بالتحديد. وإذا وُضع خارج المقالة داخل الصفحة مباشرة فإنه يعبر عن شريط جانبي عام للموقع.',
        commonMistakes: {
            wrong: `<!-- وضع المحتوى الرئيسي الجوهري داخل aside -->
<aside>
  <h1>الدرس الأول: قواعد البرمجة</h1>
</aside>`,
            right: `<main>
  <h1>الدرس الأول: قواعد البرمجة</h1>
</main>`,
            explanation: 'وضع المحتوى المحوري داخل <aside> يعطي إشارة لمحركات البحث وقارئات الشاشة بأن هذا المحتوى ثانوي ويمكن تجاهله.'
        },
        thinkingWay: 'فكر في <aside> كملاحظة في هامش الكتاب؛ توفر معلومات إضافية مفيدة لكن القصة الأصلية تستمر وتكتمل بدونها.',
        relatedMethods: [
            'html-main',
            'html-article'
        ],
        keywords: [
            'aside',
            '<aside>',
            'sidebar',
            'related links',
            'extra content'
        ]
    },
    {
        id: 'html-footer',
        name: '<footer>',
        shortDescription: 'تذييل المستند أو الأقسام يضم معلومات حقوق النشر والتواصل.',
        longDescription: 'وسم دلالي يمثل التذييل المتمم للمستند أو لقسم فرعي. يحتوي عادةً على معلومات الكاتب، حقوق النشر والطباعة، روابط سياسة الخصوصية، الشروط والأحكام، وروابط التواصل.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<!-- تذييل الموقع الرئيسي -->
<footer>
  <p>© 2026 جميع الحقوق محفوظة لمنصة كود ماب.</p>
  <a href="/privacy">سياسة الخصوصية</a>
</footer>`
        ],
        expectedOutput: [
            'تحديد التذييل الدلالي السفلي للصفحة بشكل واضح لقارئات الشاشة وخوارزميات الفهرسة.'
        ],
        professionalTips: 'يمكن استخدام <footer> في نهاية المستند كـ Site Footer، كما يمكن استخدامه داخل <article> أو <section> لعرض معلومات التاريخ أو الكاتب الخاصة بذاك المكون الفرعي.',
        commonMistakes: {
            wrong: `<!-- استخدام div بأسماء فئات عادية في نهاية الصفحة -->
<div class="bottom-footer">
  <p>حقوق النشر محفوظة</p>
</div>`,
            right: `<footer>
  <p>حقوق النشر محفوظة</p>
</footer>`,
            explanation: 'استخدام <div> بدلاً من <footer> يفقد الصفحة عنصر البنية الدلالية السفلية القياسي المعتمد لدى محركات البحث.'
        },
        thinkingWay: 'اعتبر <footer> بمثابة الخاتمة أو التوقيع النهائي في أسفل الرسالة؛ يثبت الملكية والمراجع وروابط التواصل.',
        relatedMethods: [
            'html-header',
            'html-main'
        ],
        keywords: [
            'footer',
            '<footer>',
            'copyright',
            'site footer',
            'semantic footer'
        ]
    },
    {
        id: 'html-figure',
        name: '<figure> & <figcaption>',
        shortDescription: 'ربط الوسائط والشروح التوضيحية بوحدة دلالية واحدة مستقلة.',
        longDescription: 'عنصران دلاليان متكاملان؛ يُستخدم <figure> لتغليف وسائط مستقلة (مثل صورة، رسم بياني، أو قطعة كود)، بينما يمثل <figcaption> الشرح والتوصيف النصي التوضيحي المباشر لتلك الصورة أو الرسم.',
        difficulty: 'easy',
        importance: 'normal',
        examples: [
            `<figure>
  <img src="html-tree.png" alt="رسم بياني لشجرة الـ DOM">
  <figcaption>الشكل 1: توضيح تسلسل عناصر شجرة الـ DOM في الصفحة.</figcaption>
</figure>`
        ],
        expectedOutput: [
            'ربط النص التوضيحي بالصورة دلالياً في الـ DOM وتعزيز ظهور الصورة في نتائج بحث الصور (Google Images).'
        ],
        professionalTips: 'يساعد وسم <figcaption> محركات البحث على فهم سياق الصور والرسوم البيانية بدقة وتصنيفها في نتائج البحث SEO، ويغني عن كتابة شروح غير دلالية باستخدام أوسام <span>.',
        commonMistakes: {
            wrong: `<!-- وضع الصورة والنص الوصفي داخل div دون ربط دلالي -->
<div>
  <img src="chart.png" alt="مخطط">
  <p>هذا هو المخطط البياني</p>
</div>`,
            right: `<figure>
  <img src="chart.png" alt="مخطط">
  <figcaption>هذا هو المخطط البياني</figcaption>
</figure>`,
            explanation: 'استخدام <div> و <p> لا يربط النص التوضيحي بالصورة تقنياً، بينما يضمن <figure> و <figcaption> هذا الترابط لمجموعات الوسائط.'
        },
        thinkingWay: 'فكر في <figure> كإطار الصورة المعلق على الجدار، و <figcaption> كاللوحة النحاسية الصغيرة المثبتة أسفله لشرح محتواه.',
        relatedMethods: [
            'html-media-assets'
        ],
        keywords: [
            'figure',
            'figcaption',
            '<figure>',
            '<figcaption>',
            'image caption',
            'semantic media'
        ]
    }
];