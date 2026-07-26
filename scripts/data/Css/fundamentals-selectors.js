export const cssFundamentalsSelectorsData = [
    {
        id: 'css-cascade-inheritance',
        name: 'Cascade & Inheritance',
        shortDescription: 'شلال التتابع وتوارث الخواص التنسيقية من الأبناء للآباء.',
        longDescription: 'الميكانيكية الأساسية لـ CSS؛ حيث يحدد التتابع (Cascade) أي التنسيقات تُطبق بناءً على الأولوية والترتيب، بينما تحدد الوراثة الخصائص (مثل الخطوط والألوان) التي تنقل آلياً من الأب للأبناء.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* تعيين الخط واللون على مستوى الجسم ليورث لكافة العناصر بالأسفل */
body {
  font-family: 'Segoe UI', sans-serif;
  color: #1e293b;
}`
        ],
        expectedOutput: [
            'تطبيق الخط واللون المحددين في body تلقائياً على جميع الفقرات والعناوين بالداخل.'
        ],
        professionalTips: 'الخصائص المتعلقة بالنصوص (مثل font-family, color, line-height) تورث تلقائياً، بينما خصائص الأبعاد والهوامش (مثل margin, padding, border) لا تورث أبداً.',
        commonMistakes: {
            wrong: `/* تكرار كتابة font-family داخل كل عنصر بالصفحة */
h1 { font-family: 'Segoe UI'; }
p { font-family: 'Segoe UI'; }`,
            right: `body { font-family: 'Segoe UI'; }`,
            explanation: 'تكرار الخصائص القابلة للوراثة يضخم حجم ملف الـ CSS؛ اكتبها مرة واحدة في الأب الرئيسي body.'
        },
        thinkingWay: 'اعتبر الوراثة في CSS بالصفات الوراثية العائلية؛ تنتقل اللون والخطوط من الجد والأب إلى جميع الأحفاد.',
        relatedMethods: ['css-specificity-important'],
        keywords: ['Cascade', 'Inheritance', 'CSS rules', 'font inheritance', 'style cascade']
    },
    {
        id: 'css-specificity-important',
        name: 'Specificity & !important',
        shortDescription: 'حساب قوة التحديد والأولوية، والتحذير الصارم من !important.',
        longDescription: 'نظام النقاط الترجيحي في CSS لحسم التعارض بين القواعد التنسيقية (Inline > ID > Class > Element)؛ مع توضيح خطورة استخدام !important القاسرة التي تدمر نظام التدرج.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* حساب النقاط: Inline (1000) | ID (100) | Class (10) | Element (1) */
.btn.primary { color: #3b82f6; } /* Specificity: 0,0,2,0 */
button { color: #000; }          /* Specificity: 0,0,0,1 */`
        ],
        expectedOutput: [
            'تغلب القاعدة ذات النقاط الأعلى (.btn.primary) وتطبيق اللون الأزرق على الزر.'
        ],
        professionalTips: 'تجنب استخدام !important تماماً في مشاريعك؛ لأنها تخلق حروب أولوية تجعل تعديل التنسيقات مستقبلاً معقداً جداً. استخدم كلاسات أخص بدلاً منها.',
        commonMistakes: {
            wrong: `/* اللجوء لـ !important لحل مشكلة أولوية كلاس قديم */
.title { color: red !important; }`,
            right: `/* زيادة تحديد الكلاس بذكاء دون كسر الشلال */
.card .title { color: red; }`,
            explanation: 'الـ !important تمنع أي كلاس جديد من التعديل إلا بكتابة !important أخرى، مما يدمر هيكلية الـ CSS.'
        },
        thinkingWay: 'فكر في Specificity كدرجات الرتب العسكرية؛ الرتبة الأعلى تحسم القرار، و !important كأمر الطوارئ الذي يوقف التسلسل.',
        relatedMethods: ['css-class-selector', 'css-id-selector'],
        keywords: ['Specificity', '!important', 'CSS priority', 'inline styles', 'CSS specificity score']
    },
    {
        id: 'css-universal-selector',
        name: 'Universal Selector (*)',
        shortDescription: 'محدد التعميم الكلي لاستهداف وتنسيق كافة عناصر الـ DOM.',
        longDescription: 'محدد يطابق جميع العناصر بالصفحة بلا استثناء؛ يُستخدم عادةً لإعادة تعيين الهوامش والخصائص الابتدائية (CSS Reset) مثل box-sizing.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* إعادة ضبط أبعاد كافة العناصر لحساب الحدود بداخل المساحة */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`
        ],
        expectedOutput: [
            'تصفير الهوامش الافتراضية المزعجة وتوحيد نمط حساب الأحجام لكافة عناصر المستند.'
        ],
        professionalTips: 'النمط المعتمد عالمياً هو استخدام المحدد العام * لتعيين box-sizing: border-box على كل المشروع؛ لمنع تمدد البوكس عند إضافة border أو padding.',
        commonMistakes: {
            wrong: `/* استخدام المحدد العام لتلوين النصوص كلياً */
* { color: black; }`,
            right: `body { color: black; }`,
            explanation: 'تأثير * على الألوان يلغي ميزة الوراثة الطبيعية ويمنع الأبناء من التأثر بتغير ألوان الآباء.'
        },
        thinkingWay: 'اعتبر الرمز * بمثابة مكنسة الرش؛ يطلي ويوحد الخصائص لكل جزيء في شجرة الـ DOM.',
        relatedMethods: ['css-element-selector'],
        keywords: ['*', 'Universal Selector', 'CSS Reset', 'border-box', 'box-sizing']
    },
    {
        id: 'css-element-selector',
        name: 'Element Selector',
        shortDescription: 'استهداف كافة العناصر التابعة لوسم HTML محدد باسمه المباشر.',
        longDescription: 'محدد يستهدف أوسام HTML باسمها الصريح (مثل h1, p, button)، ويطبق التنسيق على جميع الأوسام المماثلة بالصفحة، ويمتلك أدنى قوة تحديد (0,0,0,1).',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `h1 {
  font-size: 2rem;
  line-height: 1.2;
}`
        ],
        expectedOutput: [
            'تنسيق كافة العناوين الرئيسية <h1> بالصفحة بالحجم المكتوب.'
        ],
        professionalTips: 'استخدم محدد العناصر (Element Selector) لضبط التنسيقات الأساسية القياسية (Base Styles) بالمنصة، واعتمد على الكلاسات للتصميم الفرعي.',
        commonMistakes: {
            wrong: `/* إضافة تنسيقات حادة ومخصصة على اسم الوسم مباشرة */
button { background: blue; margin: 20px; }`,
            right: `.btn-primary { background: blue; margin: 20px; }`,
            explanation: 'تنسيق أسم الوسم المباشر يجبر كل أزرار الموقع على التلون باللون الأزرق حتى تلك التي داخل أشرطة البحث.'
        },
        thinkingWay: 'فكر في محدد الوسم كاستدعاء كل الأفراد المقيدين بنوع معين (مثل استدعاء كل الحراس).',
        relatedMethods: ['css-class-selector'],
        keywords: ['Element Selector', 'Tag Selector', 'HTML tag CSS', 'Type Selector']
    },
    {
        id: 'css-class-selector',
        name: 'Class Selector (.class)',
        shortDescription: 'المحدد الأكثر استقراراً وشيوعاً لاستهداف عناصر متعددة باسم فئة.',
        longDescription: 'محدد يستهدف العناصر عبر السمة class باستخدام بادئة النقطة (مثل .btn)، ويُعد المعيار الأساسي لبناء واجهات قابلة لإعادة الاستخدام بأسلوب BEM.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `.card {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
}`
        ],
        expectedOutput: [
            'تنسيق جميع العناصر الحاملة للفئة class="card" بتصميم البطاقة الزجاجية.'
        ],
        professionalTips: 'اعتمد على الكلاسات لبناء 95% من تنسيقات موقعك؛ لأنها تتميز بقوة تحديد متوازنة (0,0,1,0) وتتيح إعادة الاستخدام بمرونة فائقة.',
        commonMistakes: {
            wrong: `<!-- كتابة اسم الكلاس بالنقطة داخل سمة الـ HTML -->
<div class=".card">...</div>`,
            right: `<div class="card">...</div>`,
            explanation: 'النقطة . تُكتب فقط بداخل ملف الـ CSS للإعلان عن الكلاس، وتُحذف داخل وسم الـ HTML.'
        },
        thinkingWay: 'اعتبر الكلاس بمثابة الزي الموحد (Uniform)؛ يمكنك إلباسه لأي عنصر بالصفحة ليرتدي نفس التنسيق.',
        relatedMethods: ['css-id-selector', 'css-element-selector'],
        keywords: ['.class', 'Class Selector', 'BEM', 'reusable styles', 'CSS class']
    },
    {
        id: 'css-id-selector',
        name: 'ID Selector (#id)',
        shortDescription: 'استهداف عنصر فريد واحد بالصفحة عبر معرفه الخاص برمز #.',
        longDescription: 'محدد يستهدف العنصر المحتوي على السمة id باستخدام بادئة #، ويمتلك قوة تحديد عالية جداً (0,1,0,0) تجعل التغلب عليه بـ CSS أمراً معقداً.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `#main-header {
  position: sticky;
  top: 0;
  z-index: 1000;
}`
        ],
        expectedOutput: [
            'تطبيق التنسيق حصراً على العنصر الفريد الذي يمتلك id="main-header".'
        ],
        professionalTips: 'تجنب استخدام محدد الـ ID للتنسيق في CSS إلا للضرورة القصوى؛ قوة تحديده العالية تجعل إعادة كتابة التنسيقات (Overriding) مجهدة لزملائك.',
        commonMistakes: {
            wrong: `/* تكرار نفس الـ ID على عناصر متعددة وتنسيقها بـ CSS */
#user-avatar { width: 50px; }`,
            right: `.user-avatar { width: 50px; }`,
            explanation: 'الـ ID يجب أن يكون فريداً جداً وعنصراً واحداً بالصفحة؛ للتنسيقات المكررة استخدم دائماً Class.'
        },
        thinkingWay: 'فكر في ID كبصمة الأصبع الشخصية؛ تخص فرداً واحداً ولا تجوز لشخصين.',
        relatedMethods: ['css-class-selector'],
        keywords: ['#id', 'ID Selector', 'unique selector', 'CSS specificity']
    },
    {
        id: 'css-descendant-combinator',
        name: 'Descendant Combinator (A B)',
        shortDescription: 'استهداف العناصر الأبناء والأحفاد على أي عمق داخل الحاوية الأب.',
        longDescription: 'محدد مركّب يُكتب بوضع مسافة فارغة بين المحددين؛ يستهدف جميع العناصر B الواقعة بداخل العنصر A بغض النظر عن عمق التداخل في الشجرة.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* استهداف جميع أوسام a الواقعة داخل nav حتى لو كانت داخل ul و li */
nav a {
  color: #3b82f6;
  text-decoration: none;
}`
        ],
        expectedOutput: [
            'تلوين كافة الروابط الموجودة داخل nav باللون الأزرق بغض النظر عن عمق تداخلها.'
        ],
        professionalTips: 'انتبه من التداخل العميق مثل .card div ul li a؛ لأنه يضعف الأداء ويبطئ معالجة خوارزمية المطابقة (CSS Selector Matching Engine).',
        commonMistakes: {
            wrong: `/* استهداف متداخل طويل جداً ومجهد للمتصفح */
body div.container section.content article p span a { color: red; }`,
            right: `.article-link { color: red; }`,
            explanation: 'التداخلات الطويلة تجعل الكود هشاً (Brittle) وينكسر فور تغيير أي وسم فرعي بـ HTML.'
        },
        thinkingWay: 'اعتبر المسافة الفارغة تعني "أي حفيد أو ابن يعيش بداخل هذا البيت".',
        relatedMethods: ['css-child-combinator'],
        keywords: ['Descendant Combinator', 'space selector', 'nested selectors', 'CSS combinators']
    },
    {
        id: 'css-child-combinator',
        name: 'Child Combinator (A > B)',
        shortDescription: 'استهداف الأبناء المباشرين فقط في المستوى الأول أسفل الأب.',
        longDescription: 'محدد يرتكز على الرمز > لاستهداف العناصر B التي تقع أبناءً مباشرين في المستوى الأول فقط تحت العنصر A، ويتجاهل الأحفاد في المستويات الأعمق.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* استهداف عناصر li المباشرة لـ ul ومنع التأثير على القوائم المتداخلة الفرعية */
ul > li {
  padding: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}`
        ],
        expectedOutput: [
            'تطبيق الحدود المباشرة فقط على القائمة الأولى ودون التأثير على القوائم الفرعية المضمنة بالداخل.'
        ],
        professionalTips: 'استخدم > للتحكم في التنسيقات العلوية للهياكل المكررة لتفادي تسرب الخواص (Style Leaking) إلى القوائم المتداخلة بالداخل.',
        commonMistakes: {
            wrong: `/* استخدام المسافة الفارغة وتوقع تطبيق التنسيق على المستوى الأول فقط */
.menu li { border: 1px solid red; }`,
            right: `.menu > li { border: 1px solid red; }`,
            explanation: 'المسافة الفارغة تجعل الحدود تتسرب لكافة أطفال القوائم المتداخلة؛ والرمز > يضمن حظرها بالسطح الأول.'
        },
        thinkingWay: 'فكر في الرمز > كصلة القرابة المباشرة؛ يستهدف أبناءك المباشرين فقط دون أحفادك.',
        relatedMethods: ['css-descendant-combinator'],
        keywords: ['Child Combinator', '>', 'direct child', 'prevent style leak']
    },
    {
        id: 'css-adjacent-sibling',
        name: 'Adjacent Sibling Combinator (A + B)',
        shortDescription: 'استهداف العنصر الشقيق المباشر التالي فوراً بعد العنصر الأولي.',
        longDescription: 'محدد يرتكز على الرمز + لاستهداف العنصر B الشقيق المباشر الذي يلي العنصر A فوراً في نفس المستوى ومن نفس الأب.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `/* إعطاء مسافة رأسية للفقرة التي تأتي فوراً بعد العنوان الرئيسي */
h2 + p {
  margin-top: 0.5rem;
  color: #475569;
}`
        ],
        expectedOutput: [
            'إضافة الهامش العلوي المباشر حصراً للفقرة الملتصقة لأسفل العنوان h2 مباشرة.'
        ],
        professionalTips: 'ممتاز جداً لإنشاء مسافات متناسقة (Lobotomized Owl / Spacing) بين العناصر المتتالية مثل أزرار القوائم ونصوص العناوين.',
        commonMistakes: {
            wrong: `/* توقع تطبيق + على عناصر تفصل بينها عناصر أخرى */
h2 + p /* لن يعمل إذا كان هناك div أو img يفصل بين h2 و p */`,
            right: `h2 + p /* يعمل حصراً إذا كان p يتبع h2 مباشرة بالسطر التابع */`,
            explanation: 'الرمز + يشترط حتماً التلاصق المباشر بين العنصرين بالـ DOM دون وجود أي وسم آخر بينهما.'
        },
        thinkingWay: 'اعتبر الرمز + بمثابة الجار الملاصق لدارك مباشرة على نفس الشارع.',
        relatedMethods: ['css-general-sibling'],
        keywords: ['Adjacent Sibling', '+', 'next sibling', 'CSS sibling selector']
    },
    {
        id: 'css-general-sibling',
        name: 'General Sibling Combinator (A ~ B)',
        shortDescription: 'استهداف كافة الأخوة والأشقاء التالين للعنصر في نفس المستوى.',
        longDescription: 'محدد يستخدم الرمز ~ لاستهداف جميع العناصر B الشقيقة التي تأتي بعد العنصر A في نفس مستوى الشجرة بغض النظر عن وجود عناصر أخرى بينها.',
        difficulty: 'medium',
        importance: 'normal',
        examples: [
            `/* استهداف جميع الفقرات p التي تقع بعد العنوان h2 في نفس الحاوية */
h2 ~ p {
  line-height: 1.8;
}`
        ],
        expectedOutput: [
            'تنسيق كافة الفقرات اللاحقة للعنوان h2 بالارتفاع السطري المحدد.'
        ],
        professionalTips: 'مفيد جداً في بناء المكونات التفاعلية بدون جافا سكريبت (مثل تلوين كافة العناصر التالية لـ input:checked).',
        commonMistakes: {
            wrong: `/* محاولة استهداف عنصر شقيق يسبق العنصر الحالي */
p ~ h2 /* لا يعمل بـ CSS التقليدي */`,
            right: `h2 ~ p /* يعمل حصراً للأخوة اللاحقين */`,
            explanation: 'المحدد ~ يعمل في اتجاه واحد فقط للأمام، ولا يمكنه استهداف العناصر الشقيقة السابقة بالـ DOM.'
        },
        thinkingWay: 'فكر في ~ كشريط النور الذي يضيء كل المنازل الممتدة خلف منزلك على نفس السطر.',
        relatedMethods: ['css-adjacent-sibling'],
        keywords: ['General Sibling', '~', 'all siblings', 'subsequent siblings']
    },
    {
        id: 'css-pseudo-hover',
        name: ':hover',
        shortDescription: 'تطبيق التنسيقات التفاعلية عند تحريك مؤشر الماوس فوق العنصر.',
        longDescription: 'فئة وهمية تُفعل التنسيقات البصرية فور تحريك أو وقوف مؤشر الفأرة فوق العنصر التفاعلي (مثل تغيير لون الزر أو رفع الكرت).',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `.btn {
  background-color: #3b82f6;
  transition: background-color 0.2s ease;
}

.btn:hover {
  background-color: #1d4ed8;
}`
        ],
        expectedOutput: [
            'تغير لون الزر بسلاسة للأزرق الداكن فور الوقوف عليه بمؤشر الماوس.'
        ],
        professionalTips: 'اقرن دائماً التغيرات المطبقة بـ :hover مع خاصية transition؛ لمنح التفاعل انسيابية ومرونة بصرية بدلاً من الانقلاب اللحظي القاسي.',
        commonMistakes: {
            wrong: `/* كتابة مسافة بين اسم الكلاس والـ pseudo class */
.btn :hover { background: red; }`,
            right: `.btn:hover { background: red; }`,
            explanation: 'وضع مسافة يغير المعنى لاستهداف الأبناء داخل .btn الحاملين للـ hover بدلاً من استهداف الزر نفسه.'
        },
        thinkingWay: 'اعتبر :hover بمثابة ردة الفعل الترحيبية من العنصر فور إلقاء سلام الماوس عليه.',
        relatedMethods: ['css-pseudo-focus-visible'],
        keywords: [':hover', 'hover effect', 'interaction', 'CSS state', 'button hover']
    },
    {
        id: 'css-pseudo-focus-visible',
        name: ':focus-visible',
        shortDescription: 'إبراز حدود التركيز الذكية لمستخدمي لوحة المفاتيح دون إزعاج مستخدم الماوس.',
        longDescription: 'فئة وهمية معاصرة تحل محل :focus التقليدي؛ تظهر حدود التحديد (Focus Ring) فقط عندما يتنقل المستخدم بزر Tab بالكيبورد، وتخفيها عند النقر بالماوس.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* إبراز حدود التركيز لمستخدمي الكيبورد بأعلى معايير الوصولية */
button:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}`
        ],
        expectedOutput: [
            'رسم إطار أزرق متوهج حول الزر عند وصول مفتاح Tab إليه، وإخفائه عند النقر بالفأرة.'
        ],
        professionalTips: 'تجنب مسح إطار التركيز المباشر باستخدام outline: none دون توفير بديل بـ :focus-visible؛ لأن ذلك يمنع مستخدمي الكيبورد من معرفة مكان الوقوف.',
        commonMistakes: {
            wrong: `/* إلغاء حدود التركيز كلياً للحصول على شكل نظيف */
button:focus { outline: none; }`,
            right: `button:focus-visible { outline: 2px solid #3b82f6; }`,
            explanation: 'مسح outline يخرب إمكانية الوصول (Accessibility) ويمنع ذوي الاحتياجات من تتبع الزر المختار.'
        },
        thinkingWay: 'فكر في :focus-visible بمعدات التنقيب التي تضيء كشافها فقط عندما تستشعر وجود زائر يمشط الشاشة بالكيبورد.',
        relatedMethods: ['css-pseudo-hover'],
        keywords: [':focus-visible', 'accessibility focus', 'outline-offset', 'keyboard navigation', 'WCAG focus']
    },
    {
        id: 'html-pseudo-nth-child',
        name: ':nth-child()',
        shortDescription: 'استهداف العناصر بناءً على ترتيبها الرقمي أو النمطي داخل الأب.',
        longDescription: 'دالة تحديد وهمية تستهدف الأبناء برقم موقعهم الترتيبي (مثل :nth-child(2)) أو بأنماط رقمية رياضية (مثل :nth-child(even) للزوجي).',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* تلوين الصفوف الزوجية بالجدول بخلفية داكنة متعاقبة */
tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.03);
}`
        ],
        expectedOutput: [
            'تلوين الصف الصف الثاني والرابع والسادس بالجدول بخلفية رمادية ناعمة.'
        ],
        professionalTips: 'يمكنك استخدام النمط الرياضي :nth-child(3n) لاستهداف كل ثالث عنصر بالشبكة (مثل تطبيق هوامش للعمود الأخير في الشبكات).',
        commonMistakes: {
            wrong: `/* الاعتماد على :nth-child للبدء برقم 0 كما في اللغات البرمجية */
li:nth-child(0) { color: red; }`,
            right: `li:nth-child(1) { color: red; }`,
            explanation: 'الترتيب الترقيمي في CSS يبدأ برقم 1 للعنصر الأول وليس برقم 0 مثل المصفوفات.'
        },
        thinkingWay: 'اعتبر :nth-child بالنداء الصفي للطلاب؛ "قم يا طالب رقم 3" أو "قم يا أصحاب الأرقام الزوجية".',
        relatedMethods: ['css-element-selector'],
        keywords: [':nth-child', 'nth-child', 'striped table', 'even odd CSS', 'element index']
    },
    {
        id: 'css-pseudo-has',
        name: ':has() (The Parent Selector)',
        shortDescription: 'محدد الأب والشرط العكسي الثوري لتنسيق الحاوية بناءً على محتواها الداخلي.',
        longDescription: 'فئة وهمية ثورية في CSS المعاصرة تُعرف بـ "محدد الأب"؛ تتيح تنسيق العنصر الأب فقط إذا كان يحتوي على عنصر فرعي محدد أو حالة معينة.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `/* تغيير خلفية البطاقة بالكامل إذا كانت تحتوي على صورة بالداخل */
.card:has(img) {
  grid-template-columns: 1fr 2fr;
}

/* تنسيق حقل الإدخال الأب فور حدوث خطأ بالحقل الداخلي */
.form-group:has(input:invalid) {
  border-color: #ef4444;
}`
        ],
        expectedOutput: [
            'تحول البطاقة إلى شبكة بعمودين فور وجود صورة بالداخل آلياً بـ CSS فقط.'
        ],
        professionalTips: 'المحدد :has() ألغى الحاجة لعشرات سطور الجافا سكريبت التي كانت تُكتب فقط لفحص محتوى العناصر وتغيير كلاس الأب.',
        commonMistakes: {
            wrong: `/* كتابة تعقيدات بـ JS لتغيير كلاس الأب عند فتح قائمة داخلية */
if (dropdown.isOpen) parent.classList.add('active');`,
            right: `.parent:has(.dropdown.open) { opacity: 1; }`,
            explanation: 'المحدد :has() يقدم حلاً مباشراً وسريع الأداء لتنسيق الأب بحسب الأبناء بـ CSS الصرف.'
        },
        thinkingWay: 'فكر في :has() بمستشعر الرادار بالأب؛ يفحص ما في داخل الغرف ليغير لون واجهة المنزل الخارجية.',
        relatedMethods: ['css-pseudo-is', 'css-pseudo-where'],
        keywords: [':has()', 'parent selector', 'CSS parent', 'conditional CSS', 'modern CSS']
    },
    {
        id: 'css-pseudo-is',
        name: ':is()',
        shortDescription: 'اختصار وتجميع محددات متعددة في جملة واحدة وتقليل التكرار.',
        longDescription: 'دالة تحديد وهمية تقبل مصفوفة محددات وتطبق التنسيق على أي منها، وتتبنى قوة التحديد (Specificity) للأعلى درجة بين مدخلاتها.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `/* بدلاً من كتابة h1, h2, h3 داخل المودال بشكل منفصل */
.modal :is(h1, h2, h3) {
  color: #3b82f6;
  margin-bottom: 1rem;
}`
        ],
        expectedOutput: [
            'تطبيق اللون والهامش على أي عنوان يقع داخل .modal بأقل كود ممكن.'
        ],
        professionalTips: 'تتميز :is() بخاصية التسامح المباشر (Forgiving Selector Parsing)؛ إذا كان أحد المحددات المكتوبة بالداخل خاطئاً، فلن تتوقف القواعد الأخرى بل تعمل بنجاح.',
        commonMistakes: {
            wrong: `/* تكرار المسارات الطويلة بدون استخدام :is */
.header h1, .header h2, .header h3 { color: blue; }`,
            right: `.header :is(h1, h2, h3) { color: blue; }`,
            explanation: 'الوسم :is() يقلل حجم ملفات الـ CSS ويجعل القراءة والتحديث أسلس.'
        },
        thinkingWay: 'اعتبر :is() بحافلة تجميع الركاب؛ تفتح بابها لكل من ينتمي للقائمة وتوصلهم بنفس المكان.',
        relatedMethods: ['css-pseudo-where', 'css-pseudo-has'],
        keywords: [':is()', 'is selector', 'grouping selectors', 'CSS cleanup', 'DRY CSS']
    },
    {
        id: 'css-pseudo-where',
        name: ':where()',
        shortDescription: 'تجميع المحددات بقوة تحديد صفري (Specificity Zero) لسهولة التجاوز.',
        longDescription: 'دالة مطابقة تماماً لـ :is() في التجميع، ولكنها تتميز بإلغاء قوة التحديد وتصفيرها تماماً (0,0,0,0)، مما يجعل التغلب عليها بـ CSS بسيطاً جداً.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `/* تعيين تنسيقات افتراضية عامة دون رفع قوة التحديد */
:where(h1, h2, h3) {
  margin-top: 0;
  color: var(--text-primary);
}`
        ],
        expectedOutput: [
            'تطبيق التنسيق الأساسي مع السماح لأي كلاس بسيط بتجاوز هذه التنسيقات بسهولة.'
        ],
        professionalTips: 'استخدم :where() بكثرة عند بناء أطر العمل ومكتبات التنسيقات الابتدائية (CSS Reset / Base Styles)؛ لتسمح للمطورين بتجاوز التنسيقات بكلاس واحد.',
        commonMistakes: {
            wrong: `/* كتابة تنسيقات المكونات الابتدائية بـ ID يمنع تخصيصها مستقبلاً */
#base-style h1 { margin: 0; }`,
            right: `:where(#base-style) h1 { margin: 0; }`,
            explanation: 'الـ :where يجعل قوة التحديد صفراً مما يلغي الجمود ويتيح التعديل الخارجي بسهولة.'
        },
        thinkingWay: 'فكر في :where() كالطباشير الخفيف على السبورة؛ يكتب التنسيق بوضوح ولكن يتيح مسحه بأدنى لمسة.',
        relatedMethods: ['css-pseudo-is'],
        keywords: [':where()', 'where selector', 'zero specificity', 'CSS reset helper']
    },
    {
        id: 'css-pseudo-before',
        name: '::before',
        shortDescription: 'إنشاء عنصر وهمي شكلي يسبق المحتوى الداخلي للعنصر.',
        longDescription: 'عنصر وهمي يُولد مكاناً زائفاً قبل محتوى العنصر الأصلي، ويُشترط استخدام السمة content: "" لإعادة رسم الديكورات والأيقونات التجميلية بـ CSS.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* إضافة نقطة متوهجة تسبق عنوان الكرت */
.card-title::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: #10b981;
  border-radius: 50%;
  margin-left: 8px;
}`
        ],
        expectedOutput: [
            'رسم نقطة خضراء متوهجة مباشرة قبل نص العنوان بـ CSS الصرف.'
        ],
        professionalTips: 'تذكر دائماً كتابة النقطتين المزدوجتين ::before للتفريق المعماري الحديث بين العناصر الوهمية (Pseudo-elements) والفئات الوهمية.',
        commonMistakes: {
            wrong: `/* نسيان كتابة السمة content يجعل العنصر الوهمي لا يظهر مطلقاً */
.btn::before {
  width: 10px;
  height: 10px;
}`,
            right: `.btn::before {
  content: '';
  width: 10px;
  height: 10px;
}`,
            explanation: 'بدون السمة content: "" يرفض المتصفح إنشاء العنصر الوهمي بالـ DOM.'
        },
        thinkingWay: 'اعتبر ::before بالخادم الشخصي الذي يسبقك بضع خطوات ليفتح لك البوابة أو يضع اللافتة.',
        relatedMethods: ['css-pseudo-after'],
        keywords: ['::before', 'before pseudo element', 'content attribute', 'CSS decoration']
    },
    {
        id: 'css-pseudo-after',
        name: '::after',
        shortDescription: 'إنشاء عنصر وهمي شكلي يتبع المحتوى الداخلي للعنصر.',
        longDescription: 'عنصر وهمي يُولد زاوية تجميلية بعد المحتوى الأصلي للعنصر، ويُستخدم لرسوم الشارات المضيئة، الخطوط الفاصلة، والزخارف.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* رسم خط سفلي ديكوري تحت العنوان */
.heading::after {
  content: '';
  display: block;
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  margin-top: 6px;
}`
        ],
        expectedOutput: [
            'رسم خط ملون متدرج في الأسفل يتبع نص العنوان مباشرة.'
        ],
        professionalTips: 'يمكنك استخدام ::after و ::before مع position: absolute لإنشاء خلفيات تفاعلية متحركة خلف الأزرار والبطاقات.',
        commonMistakes: {
            wrong: `/* استخدام ::after لإضافة نصوص جوهرية مطلوبة لـ SEO */
.title::after { content: ' - اسم الشركة'; }`,
            right: `<!-- كتابة النص الجوهري داخل HTML صراحة -->
<h2>العنوان - اسم الشركة</h2>`,
            explanation: 'المحتوى المكتوب بـ content في ::after لا تقرأه بعض محركات البحث ولا يمكن نسخه بـ Mouse.'
        },
        thinkingWay: 'فكر في ::after كالذيل التجميل المزين الممتد خلف الفستان أو البانر.',
        relatedMethods: ['css-pseudo-before'],
        keywords: ['::after', 'after pseudo element', 'CSS underlines', 'decorations']
    },
    {
        id: 'css-pseudo-placeholder',
        name: '::placeholder',
        shortDescription: 'تنسيق تلوين وحجم النص التوضيحي المساعد داخل حقول المدخلات.',
        longDescription: 'عنصر وهمي يستهدف التنسيق البصري للنص المؤقت (Placeholder) المكتوب داخل حقول <input> و <textarea> لتغيير لونه وحجم خطه.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `input::placeholder {
  color: #94a3b8;
  font-size: 0.85rem;
  opacity: 0.8;
}`
        ],
        expectedOutput: [
            'تغيير لون النص المؤقت الداخلي بالكامل للرمادي الناعم المريح للعين.'
        ],
        professionalTips: 'احرص على مراعاة نسبة التباين (Color Contrast Ratio) عند تلوين النص المؤقت؛ ليبقى مقروءاً ومطابقاً لقواعد الوصولية.',
        commonMistakes: {
            wrong: `/* محاولة تنسيق الـ placeholder بـ pseudo-class بنقطة واحدة */
input:placeholder { color: red; }`,
            right: `input::placeholder { color: red; }`,
            explanation: 'الـ placeholder هو عنصر وهمي (Pseudo-element)؛ لذا يشترط النقطتين المزدوجتين ::placeholder.'
        },
        thinkingWay: 'اعتبر ::placeholder بالمساعد الذي يكتب لك بالرصاص المائل داخل الخانة ليخبرك ماذا تسجل.',
        relatedMethods: ['html-input-text'],
        keywords: ['::placeholder', 'placeholder style', 'input placeholder', 'form CSS']
    },
    {
        id: 'css-pseudo-selection',
        name: '::selection',
        shortDescription: 'تخصيص لون الخلفية والنص المظلل عند تحديد الزائر للنصوص.',
        longDescription: 'عنصر وهمي يتيح التلاعب بلون الخلفية ولون النص الذي يحدده المستخدم بسحب الماوس بالصفحة لإضفاء هوية بصرية مخصصة للمنصة.',
        difficulty: 'easy',
        importance: 'normal',
        examples: [
            `/* تخصيص التظليل بألوان الشعار عند تحديد أي نص */
::selection {
  background-color: #3b82f6;
  color: #ffffff;
}`
        ],
        expectedOutput: [
            'تغير لون تظليل الماوس للون الأزرق الملكي فور سحب الماوس وتحديد الكلمات.'
        ],
        professionalTips: 'تنسيق ::selection يعطي المشروع لمسة فاخرة جداً تبرز اهتمامك بأصغر التفاصيل الهندسية للهوية البصرية.',
        commonMistakes: {
            wrong: `/* استخدام خصائص غير مدعومة مثل margin أو padding داخل ::selection */
::selection { margin: 10px; }`,
            right: `::selection { background-color: #3b82f6; color: #fff; }`,
            explanation: 'الـ ::selection لا يقبل سوى خصائص محدودة مثل color و background-color و text-shadow.'
        },
        thinkingWay: 'فكر في ::selection كقلم التظليل الفسفوري المخصص الذي تستخدمه عند القراءة في كتابك.',
        relatedMethods: ['css-universal-selector'],
        keywords: ['::selection', 'text selection color', 'highlight color', 'custom selection']
    }
];