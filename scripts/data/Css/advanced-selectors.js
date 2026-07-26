export const advancedSelectorsData = [
    {
        id: 'css-selector-has',
        name: ':has() (The Parent Selector)',
        shortDescription: 'المحدد الأب الثوري واستهداف الآباء بناءً على محتواهم الداخلي وحالتهم.',
        longDescription: 'الفئة الوهمية الأكثر ثورية في تاريخ CSS؛ تتيح استهداف العنصر الأب وتغيير تنسيقه بناءً على وجود عناصر فرعية محددة بالداخل (مثل :has(img)) أو بناءً على حالة الأبناء التفاعلية.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `/* تغيير خلفية حقل الإدخال الأب فور حدوث خطأ بالحقل الداخلي */
.form-group:has(input:invalid) {
  border-color: #ef4444;
  background-color: rgba(239, 68, 68, 0.05);
}

/* تحول الكرت لتخطيط بعمودين إذا كان يحتوي على صورة بالداخل */
.card:has(.card-media) {
  display: grid;
  grid-template-columns: 200px 1fr;
}`
        ],
        expectedOutput: [
            'تطبيق التنسيق التلقائي على الحاوية الأب فور تحقق الشرط في أطفالها بـ CSS الصرف دون JS.'
        ],
        professionalTips: 'المحدد :has() يمنحك قدرة التنسيق الشرطي العكسي (Relational Selector)، ويلغي الحاجة لكتابة سكربتات JS كانت تُكتب فقط لتعديل كلاس الأب.',
        commonMistakes: {
            wrong: `/* الإفراط في تداخل :has() العميق جداً مما يرهق محرك المطابقة بـ CSS */
html:has(body:has(.main:has(.card))) { background: red; }`,
            right: `.card:has(.badge) { border-color: gold; }`,
            explanation: 'التداخل المفرط العميق لـ :has() يبطئ سرعة معالجة الريندر؛ استخدمها حصراً على مستوى المكونات المباشرة.'
        },
        thinkingWay: 'اعتبار :has() بمستشعر عين السحر المطلع على داخل الصندوق؛ يغير لون الصندوق الخارجي بناءً على العينات بالداخل.',
        relatedMethods: ['css-selector-is', 'css-selector-where'],
        keywords: [':has()', 'parent selector', 'relational selector', 'conditional CSS', 'modern CSS']
    },
    {
        id: 'css-selector-is',
        name: ':is() Selector',
        shortDescription: 'اختصار وتجميع محددات متعددة في جملة واحدة وتبني أعلى درجة تحديد.',
        longDescription: 'دالة تحديد منطقية تقبل قائمة محددات متباينة وتطبق التنسيق على أي عنصر يطابق أحداً منها، مع تبني درجة قوة التحديد (Specificity) للأعلى وزناً بين مدخلاتها.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* اختصار استهداف العناوين بداخل الهيدر والفوتر والمقالات بكسرة سطر */
:is(header, footer, article) :is(h1, h2, h3) {
  color: #3b82f6;
  margin-block-end: 1rem;
}`
        ],
        expectedOutput: [
            'تطبيق التنسيقات على كافة العناوين المحددة بالكتل الثلاث بأقل عدد ممكن من سطور الـ CSS.'
        ],
        professionalTips: 'تتميز :is() بخاصية التسامح (Forgiving Selector)؛ إذا احتوت القائمة على محدد خاطئ أو غير مدعوم، فلن تتوقف الدالة بل تتجاهله وتنفذ باقي القواعد بنجاح.',
        commonMistakes: {
            wrong: `/* تكرار المسارات الطويلة بدون اختصارها بـ :is() */
.card h1, .card h2, .card h3 { color: blue; }`,
            right: `.card :is(h1, h2, h3) { color: blue; }`,
            explanation: 'الدالة :is() تمنع تكرار المسارات العريضة وتجعل ملفات التنسيق أنظف وأخف وزناً.'
        },
        thinkingWay: 'فكر في :is() كحافلة الركاب المجمعة؛ تجمع الركاب المتجهين لنفس المحطة في رحلة واحدة.',
        relatedMethods: ['css-selector-where', 'css-selector-has'],
        keywords: [':is()', 'is selector', 'grouping selectors', 'DRY CSS', 'forgiving selector']
    },
    {
        id: 'css-selector-where',
        name: ':where() Selector',
        shortDescription: 'تجميع المحددات المترابطة بقوة تحديد صفري (Specificity Zero) لتسهيل التجاوز.',
        longDescription: 'دالة مطابقة تماماً لـ :is() في طريقة التجميع والربط، ولكنها تتميز بإلغاء وتصفير قوة التحديد تماماً (0,0,0,0)، مما يسمح لأي كلاس بسيط بتجاوز تنسيقاتها بسهولة.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* تعيين تنسيقات افتراضية محايدة تماماً بدون زيادة نقاط التحديد */
:where(h1, h2, h3) {
  color: var(--text-primary);
  line-height: 1.2;
}`
        ],
        expectedOutput: [
            'تطبيق التنسيقات الأساسية مع السماح لأي كلاس فرعي بسيط بتجاوز هذه القواعد دون حروب أولوية.'
        ],
        professionalTips: 'استخدم :where() بكثرة عند بناء المكتبات والقواعد الابتدائية (CSS Reset / Base Styles)؛ لتضمن عدم إجهاد المطورين الآخرين عند التعديل بـ Class بسيط.',
        commonMistakes: {
            wrong: `/* استخدام :is() في قواعد الـ reset فتجعل التعديل عليها صليباً بالصفحات */
:is(h1, h2, #main-title) { margin: 0; }`,
            right: `:where(h1, h2, #main-title) { margin: 0; }`,
            explanation: 'الـ :is تتبنى نقاط أعلى عنصر (ID هنا)، بينما :where تجعل نقاط القائمة كلياً صفراً.'
        },
        thinkingWay: 'اعتبر :where() بالرسم المكتوب بقلم الرصاص الخفيف؛ يظهر بوضوح لكن يسهل مسحه وتجاوزه فوراً.',
        relatedMethods: ['css-selector-is'],
        keywords: [':where()', 'where selector', 'zero specificity', 'CSS reset helper', 'flexible CSS']
    },
    {
        id: 'css-selector-focus-visible',
        name: ':focus-visible Selector',
        shortDescription: 'إظهار إطار التركيز الذكي لمستخدمي الكيبورد وإخفائه عند النقر بالماوس.',
        longDescription: 'فئة وهمية معاصرة تحل محل :focus التقليدي؛ تظهر حدود التحديد (Focus Ring) فقط عندما يتنقل المستخدم بمفتاح Tab بالكيبورد، وتخفيها عند النقر بالماوس لحماية المظهر البصري.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* إظهار حدود التركيز الذكية المخصصة لوجهة الوصولية */
button:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 3px;
}`
        ],
        expectedOutput: [
            'رسم إطار أزرق متوهج حول الزر عند وصول Tab إليه، مع إخفائه كلياً عند نقره بالماوس.'
        ],
        professionalTips: 'لا تلغِ حدود التركيز باستخدام outline: none دون توفير بديل صريح بـ :focus-visible؛ لأن ذلك يمنع مستخدمي الكيبورد من التنقل المتاح (WCAG Violation).',
        commonMistakes: {
            wrong: `/* مسح حدود التركيز بـ :focus وتخريب تجربة مستخدمي لوحة المفاتيح */
button:focus { outline: none; }`,
            right: `button:focus-visible { outline: 2px solid #3b82f6; }`,
            explanation: 'مسح outline يخرب إمكانية الوصول؛ :focus-visible تحل المشكلة وتخدم الماوس والكيبورد معاً.'
        },
        thinkingWay: 'فكر في :focus-visible بالمساعد الذكي الذي يضيء الكشاف فقط عندما يشعر برجل يمشط الشاشة بالكي بورد.',
        relatedMethods: ['css-selector-focus-within', 'css-outline-property'],
        keywords: [':focus-visible', 'focus-visible', 'keyboard navigation', 'WCAG focus', 'accessibility outline']
    },
    {
        id: 'css-selector-focus-within',
        name: ':focus-within Selector',
        shortDescription: 'تنسيق الحاوية الأب فور استقبال أي عنصر فرعي بداخلها لتركيز الماوس أو الكيبورد.',
        longDescription: 'فئة وهمية تعمل على العنصر الأب؛ تُفعل التنسيقات على الحاوية الكلية عندما يحصل العنصر نفسه أو أي ابن من أبنائه الداخليين على التركيز (Focus) بـ Tab أو الكتابة.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* توهج مربع البحث بالكامل فور بدء الكتابة بداخل حقل input الداخلي */
.search-form:focus-within {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}`
        ],
        expectedOutput: [
            'تنشيط وتوهج الحدود الخارجية للنموذج كاملاً فور الوقوف على حقل الإدخال بالداخل.'
        ],
        professionalTips: 'استخدم :focus-within لتنسيق حقول الاستمارات المركبة (مربع البحث المحتوي على أيقونة وحقل وزر) لتبدو ككتلة واحدة متفاعلة بنعومة.',
        commonMistakes: {
            wrong: `/* كتابة JS لإضافة كلاس active للأب عند وقوف الماوس على input */
input.addEventListener('focus', () => parent.classList.add('active'));`,
            right: `.parent:focus-within { border-color: blue; }`,
            explanation: 'الخاصية :focus-within تقدم حلاً بائناً بـ CSS الصرف دون الحاجة لربط أحداث بـ JS.'
        },
        thinkingWay: 'اعتبر :focus-within بجرس الباب بالأب؛ يدق ويضيء المنزل كاملاً فور أن يلمس أحد الزوار زر الشقة الداخلية.',
        relatedMethods: ['css-selector-focus-visible', 'css-selector-has'],
        keywords: [':focus-within', 'focus-within', 'parent focus state', 'form group focus', 'CSS focus']
    },
    {
        id: 'css-selector-user-valid-invalid',
        name: ':user-valid & :user-invalid Selectors',
        shortDescription: 'فحص النماذج الذكي بعد تفاعل المستخدم المباشر ومنع تنبيهات الخطأ المبكرة.',
        longDescription: 'فئات وهمية معاصرة تحل محل :valid و :invalid القديمة؛ تتميز بتأجيل إظهار نتائج صحة أو خطأ المدخلات حتى يكمل المستخدم الكتابة ويغادر الحقل (Blur).',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* تلوين الحقل بالأحمر فقط بعد أن يكتب المستخدم إيميل خاطئ ويغادر الحقل */
input:user-invalid {
  border-color: #ef4444;
}

/* تلوين الحقل بالأخضر عند كتابة إيميل صحيح */
input:user-valid {
  border-color: #10b981;
}`
        ],
        expectedOutput: [
            'إخفاء رسائل الخطأ عند فتح الصفحة أول مرة، وإظهارها بنظافة فور تفاعل المستخدم المباشر مع الحقل.'
        ],
        professionalTips: 'استبدل :invalid القديمة بـ :user-invalid فوراً؛ لتتخلص من عقدة إحمرار كافة حقول الاستمارة باللون الأحمر المزعج فور فتح الصفحة وقبل أن يلمسها الزائر.',
        commonMistakes: {
            wrong: `/* استخدام :invalid القديمة فتظهر الاستمارة حمراء صريحة فور تحميل الصفحة */
input:invalid { border-color: red; }`,
            right: `input:user-invalid { border-color: red; }`,
            explanation: 'الخاصية القديمة :invalid تفحص الحقل المفرغ فوراً، بينما :user-invalid تنتظر تفاعل المستخدم الفعلي.'
        },
        thinkingWay: 'فكر في :user-invalid بكتم صوت المفتش حتى ينتهي الطالب من كتابة الإجابة ويُسلم الورقة.',
        relatedMethods: ['html-validation-attributes'],
        keywords: [':user-valid', ':user-invalid', 'user-invalid', 'form validation UX', 'modern form CSS']
    },
    {
        id: 'css-selector-nth-child-of-s',
        name: ':nth-child(An+B of S)',
        shortDescription: 'التصفية الرقمية المتقدمة المصحوبة بشرط تصفية الكلاس (Filtered nth-child).',
        longDescription: 'صيغة معاصرة فائقة القوة لدالة :nth-child()؛ تتيح تصفية وحساب الترتيب الرقمي حصراً على العناصر التي تطابق كلاس أو محدد معين (مثل :nth-child(2 of .active)).',
        difficulty: 'hard',
        importance: 'important',
        examples: [
            `/* استهداف الكرت النشط الثاني حصراً وتجاهل الكروت المخفية أو غير النشطة */
.card:nth-child(2 of .active) {
  border: 2px solid #3b82f6;
}`
        ],
        expectedOutput: [
            'تمييز ثاني كرت يحمل الكلاس .active بدقة متناهية دون التأثر بوجود عناصر أخرى بينها.'
        ],
        professionalTips: 'حلّت صيغة of S العقدة التاريخية في CSS القائلة بأن :nth-child تحسب رقم العنصر بغض النظر عن الكلاس المكتوب عليه.',
        commonMistakes: {
            wrong: `/* كتابة .active:nth-child(2) والتوقع بأنها ستختار ثاني عنصر نشط */
.active:nth-child(2) { color: red; } /* تختار العنصر إذا كان هو الابن الثاني بالـ DOM وكان active */`,
            right: `:nth-child(2 of .active) { color: red; }`,
            explanation: 'الصيغة القديمة تحسب رقم الابن المطلق بالـ DOM، بينما الصيغة الجديدة of S تفرز القائمة أولاً ثم تحسب رقم 2.'
        },
        thinkingWay: 'اعتبر of S بتصفية الطابور أولاً؛ يطلب من أصحاب القمصان الزرقاء الوقوف جانباً ثم ينادي على الطالب الثاني منهم.',
        relatedMethods: ['html-pseudo-nth-child'],
        keywords: [':nth-child of S', 'filtered nth-child', 'nth-child selector', 'CSS child filter', 'advanced CSS selector']
    }
];