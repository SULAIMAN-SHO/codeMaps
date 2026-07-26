export const displayPositioningData = [
    {
        id: 'css-display-block',
        name: 'display: block',
        shortDescription: 'جعل العنصر ينفرد بسطر كامل ويحتل 100% من عرض الحاوية.',
        longDescription: 'نمط العرض الكتلي الأساسي؛ يجعل العنصر يبدأ في سطر جديد ويمتد أفقياً ليشغل كامل عرض الحاوية الأب (100%)، ويقبل تعيين الأبعاد والهوامش بجميع اتجاهاتها.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* تحويل الرابط الداخلي إلى عنصر كتلوي ينفرد بسطر */
a.nav-link {
  display: block;
  padding: 1rem;
}`
        ],
        expectedOutput: [
            'انفراد العنصر بسطر كامل ودفع العناصر المجاورة لأسفل.'
        ],
        professionalTips: 'العناصر الكتلية (مثل <div> و <p> و <h2>) تكون display: block افتراضياً؛ تحويل الروابط إليها يوسع المساحة القابلة للنقر بشكل ممتاز على الهاتف.',
        commonMistakes: {
            wrong: `/* وضع display: block على عناصر داخلية وتوقع بقائها جنب بعضها أفقياً */
span { display: block; }`,
            right: `span { display: inline-block; }`,
            explanation: 'الـ block تجبر العنصر على كسر السطر والانتقال لأسفل، بينما inline-block تبقيه على نفس السطر.'
        },
        thinkingWay: 'اعتبر display: block كالطلاء الخرساني الثقيل؛ يأخذ عرض الشارع كاملاً ولا يسمح لأحد بالوقوف بجانبه.',
        relatedMethods: ['css-display-inline', 'css-display-inline-block'],
        keywords: ['display: block', 'block element', 'full width', 'block layout', 'CSS display']
    },
    {
        id: 'css-display-inline',
        name: 'display: inline',
        shortDescription: 'عرض العناصر متراصة جنب بعضها أفقياً مع رفض الأبعاد والمساحات الرأسية.',
        longDescription: 'نمط العرض السطري؛ يجعل العناصر تتراصف أفقياً جنب بعضها بحسب حجم محتواها فقط، ويحظر تعيين width أو height أو margins رأسية عليها.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `span.badge {
  display: inline;
  background-color: #3b82f6;
}`
        ],
        expectedOutput: [
            'تراصف العنصر بداخل الفقرة المكتوبة دون كسر السطر أو تمديد الارتفاع.'
        ],
        professionalTips: 'العناصر الضمنية (مثل <span> و <a> و <strong>) تكون display: inline افتراضياً؛ تذكر أنها ترفض العرض والارتفاع المباشر بـ CSS.',
        commonMistakes: {
            wrong: `/* محاولة وضع width و height على عنصر display: inline */
span { display: inline; width: 100px; height: 50px; }`,
            right: `span { display: inline-block; width: 100px; height: 50px; }`,
            explanation: 'العناصر الضمنية inline يتجاهل المتصفح خصائص الأبعاد المباشرة المكتوبة عليها.'
        },
        thinkingWay: 'فكر في inline كحروف الجملة المكتوبة بالقلم؛ تتجاور حرفاً بحرف على نفس السطر المكتوب.',
        relatedMethods: ['css-display-block', 'css-display-inline-block'],
        keywords: ['display: inline', 'inline element', 'text alignment', 'inline content']
    },
    {
        id: 'css-display-inline-block',
        name: 'display: inline-block',
        shortDescription: 'الدمج بين التراصف الأفقي وإمكانية استقبال الأبعاد والهوامش الرأسية.',
        longDescription: 'نمط العرض الهجين؛ يمنح العنصر ميزة التراصف الأفقي بجانب العناصر الأخرى كالـ inline، مع استعادة القدرة الكاملة على استقبال width و height و margins كالـ block.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `.btn-group button {
  display: inline-block;
  width: 150px;
  padding: 0.75rem;
}`
        ],
        expectedOutput: [
            'جعل الأزرار تتجاور أفقياً في سطر واحد مع احترام أبعاد العرض المحددة بـ 150px.'
        ],
        professionalTips: 'المكونات المنسقة بـ inline-block تترك فراغاً أفقياً صغيراً بحدود 4px بينها بسبب المسافات الفارغة بـ HTML؛ لتفادي هذا الفراغ استخدم Flexbox.',
        commonMistakes: {
            wrong: `/* استخدام inline-block لبناء شبكة متجاوبة والتفاجؤ بنزول العنصر الأخير بسبب الفراغ */
.col { display: inline-block; width: 50%; }`,
            right: `/* استخدام Flexbox المباشر للشبكات */
.parent { display: flex; } .col { flex: 1; }`,
            explanation: 'المسافات الفارغة بـ HTML تتسبب في جمع (50% + 50% + 4px) فيخرج العنصر عن السطر.'
        },
        thinkingWay: 'اعتبر inline-block كقطع البناء الخشبية؛ تجلس بجوار بعضها أفقياً ولكن كل قطعة يحدد المطور طولها وعرضها بحرية.',
        relatedMethods: ['css-display-block', 'css-display-inline'],
        keywords: ['display: inline-block', 'inline-block', 'button layout', 'hybrid display']
    },
    {
        id: 'css-display-none',
        name: 'display: none',
        shortDescription: 'إخفاء العنصر كلياً وإزالته من شجرة الريندر ومسح مساحته.',
        longDescription: 'خاصية تُخفي العنصر بصرياً وتلغي وجوده تماماً من شجرة الريندر (Render Tree)، مما تؤدي لتفريغ مساحته بالكامل وكأنه غير موجود في الـ HTML.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* إخفاء القائمة المنسدلة افتراضياً */
.dropdown-menu {
  display: none;
}`
        ],
        expectedOutput: [
            'إخفاء العنصر كلياً وانكماش المساحة المحيطة لتمتلئ بالعناصر المجاورة.'
        ],
        professionalTips: 'انتبه: display: none تحجب العنصر عن قارئات الشاشة وأجهزة الوصولية كلياً؛ ولا تسمح بتشغيل الانتقالات الانسيابية (CSS Transitions) عند الإظهار.',
        commonMistakes: {
            wrong: `/* محاولة عمل أنيميشن تحريك على عنصر يحمل display: none */
.box { display: none; transition: opacity 0.3s; }`,
            right: `.box { opacity: 0; visibility: hidden; transition: opacity 0.3s; }`,
            explanation: 'الـ display: none تقطع دورة التحريك البصري فوراً ولا يمكن عمل Fade-in عليها بدون مفاتيح خاصة بـ 2026.'
        },
        thinkingWay: 'فكر في display: none كإزالة الأثاث من الغرفة كلياً؛ ينتهي وجوده وتفرغ المساحة لأشياء أخرى.',
        relatedMethods: ['css-visibility-hidden', 'css-opacity-zero'],
        keywords: ['display: none', 'hide element', 'remove from render tree', 'DOM removal']
    },
    {
        id: 'css-display-contents',
        name: 'display: contents',
        shortDescription: 'إلغاء حاوية العنصر وتمرير أبنائه المباشرين للحاوية الأب بدونه.',
        longDescription: 'قيمة معاصرة تلغي وجود الحاوية البصرية للعنصر نفسه في الـ DOM دون مسح أبنائها، مما يجعل أبناء هذا العنصر يتصرفون وكأنهم أبناء مباشرون للأب الأعلى في Flexbox أو Grid.',
        difficulty: 'hard',
        importance: 'important',
        examples: [
            `/* إلغاء تأثير الـ wrapper ليدخل أطفاله في شبكة الـ Grid مباشرة */
.card-wrapper {
  display: contents;
}`
        ],
        expectedOutput: [
            'اختفاء الحاوية .card-wrapper وبروز العناصر الفرعية بداخلها كأعضاء مباشرة بداخل شبكة Grid الأب.'
        ],
        professionalTips: 'مفيدة جداً في حل مشاكل التغليف الفرعي المفرط (Over-wrapper Trap) عند بناء شبكات CSS Grid دون الحاجة لتعديل شجرة الـ HTML.',
        commonMistakes: {
            wrong: `/* وضع display: contents على عناصر تفاعلية مثل button أو input */
button { display: contents; }`,
            right: `/* استخدامها حصراً على الحاويات التجميعية div أو section */`,
            explanation: 'تطبيق contents على الأزرار يلغي وظيفتها البصرية وإمكانية النقر عليها.'
        },
        thinkingWay: 'اعتبر display: contents كإذابة جدار الصندوق؛ تختفي جدران الصندوق وتتوزع الألعاب داخل الغرفة مباشرة.',
        relatedMethods: ['css-display-block'],
        keywords: ['display: contents', 'CSS contents', 'unwrap container', 'grid helper', 'modern CSS display']
    },
    {
        id: 'css-position-static',
        name: 'position: static',
        shortDescription: 'نمط التموضع الافتراضي الخاضع للتسلسل والتدفق الطبيعي للمستند.',
        longDescription: 'القيمة الافتراضية لجميع عناصر الـ HTML؛ تجعل العنصر يتدفق بانتظام طبيعي في المستند، ويتجاهل خصائص الإزاحة top, right, bottom, left و z-index.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `.default-box {
  position: static; /* الوضع الافتراضي */
}`
        ],
        expectedOutput: [
            'تموضع العنصر في مكانه التسلسلي الطبيعي بالـ DOM دون أي إزاحات طافية.'
        ],
        professionalTips: 'تُستخدم static لإعادة تعيين تموضع عنصر تم تحريكه بـ absolute أو fixed في الشاشات الصغرى بداخل Media Queries.',
        commonMistakes: {
            wrong: `/* كتابة top و z-index على عنصر يحمل position: static */
.box { position: static; top: 20px; z-index: 100; }`,
            right: `.box { position: relative; top: 20px; z-index: 100; }`,
            explanation: 'القيمة static ترفض استجابة المحرك لخصائص top و z-index تماماً.'
        },
        thinkingWay: 'فكر في static كالقطار الملتزم بالسكة الحديدية؛ يسير بالترتيب الطبيعي دون إمكانية الطيران جانباً.',
        relatedMethods: ['css-position-relative', 'css-position-absolute'],
        keywords: ['position: static', 'default position', 'normal DOM flow', 'static positioning']
    },
    {
        id: 'css-position-relative',
        name: 'position: relative',
        shortDescription: 'التموضع النسبي المحتفظ بالمساحة الأصلية وتأسيس مرجع للأبناء.',
        longDescription: 'تموضع يتيح إزاحة العنصر عن مكانه الأصلي بخصائص top/left مع احتفاظه بمساحته الأصلية فارغة، والأهم: تحوله إلى نقطة مرجعية (Containing Block) لأبنائه المتموضعين بـ absolute.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* الأب المرجعي */
.card-parent {
  position: relative;
}

/* الابن المتموضع بناءً على حدود الأب */
.badge-child {
  position: absolute;
  top: 10px;
  left: 10px;
}`
        ],
        expectedOutput: [
            'ثبات الأب كحاوية مرجعية تجعل الشارة .badge-child تحسب إحداثياتها من زاوية الأب الداخلية.'
        ],
        professionalTips: 'القاعدة الذهبية في التموضع: "الأب Relative والابن Absolute"؛ لمنع الأبناء من الطيران والالتصاق بأطراف الشاشة الرئيسية كلياً.',
        commonMistakes: {
            wrong: `/* وضع absolute للابن دون وضع relative للأب فيطير الابن لزاوية الشاشة */
.parent { } .child { position: absolute; top: 0; }`,
            right: `.parent { position: relative; } .child { position: absolute; top: 0; }`,
            explanation: 'بدون relative على الأب، يستمر الابن في البحث عن أقرب أب مرجعي حتى يصل لوسم body.'
        },
        thinkingWay: 'اعتبر relative كالمرساة التي تثبت القارب بداخل مينائه الخاص لكي لا يجرفه التيار.',
        relatedMethods: ['css-position-absolute', 'css-position-static'],
        keywords: ['position: relative', 'relative positioning', 'containing block', 'parent reference']
    },
    {
        id: 'css-position-absolute',
        name: 'position: absolute',
        shortDescription: 'التموضع المطلق المعزول عن التدفق الطبيعي والمتموضع بحسب الأب.',
        longDescription: 'خاصية تنتزع العنصر كلياً من التدفق الطبيعي للـ DOM وتجعله يطير بلا حجم محجوز، ويتم تحديد موقعه بالبكسل بناءً على أقرب أب يمتلك position غير static.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `.close-button {
  position: absolute;
  top: 1rem;
  left: 1rem;
}`
        ],
        expectedOutput: [
            'طيران زر الإغلاق ليزين الزاوية العلوية للمودال دون التأثير على ترتيب النصوص بالأسفل.'
        ],
        professionalTips: 'استخدم position: absolute مع الأيقونات الطافية، وشارات الخصومات، ودبابيس التنبيهات الملتصقة بزوايا الكروت.',
        commonMistakes: {
            wrong: `/* استخدام absolute لبناء التخطيط المباشر للفقرات والكروت بالصفحة */
.card { position: absolute; top: 200px; }`,
            right: `/* استخدام Flexbox أو Grid للكتل والتخطيط */`,
            explanation: 'الـ absolute يرفع العناصر من شجرة التدفق، واستخدامه للتخطيط العادي يتسبب في تداخل الكروت فوق بعضها.'
        },
        thinkingWay: 'فكر في absolute كالملصق الشفاف (Sticker)؛ تلصقه في أي مكان على الصورة بدقة متناهية دون توسيع الورقة.',
        relatedMethods: ['css-position-relative', 'css-position-fixed'],
        keywords: ['position: absolute', 'absolute positioning', 'floating element', 'out of flow']
    },
    {
        id: 'css-position-fixed',
        name: 'position: fixed',
        shortDescription: 'التثبيت المطلق المباشر في الشاشة والمقاوم للتمرير (Viewport Fixed).',
        longDescription: 'خاصية تنتزع العنصر من تدفق المستند وتثبته بصفة دائمة في موقع محدد بالنسبة لشاشة المتصفح المباشرة (Viewport)، ويبقى ثابتاً في مكانه أثناء تمرير الزائر لأسفل.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* تثبيت الهيدر في أعلى الشاشة بصفة مستمرة */
.sticky-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}`
        ],
        expectedOutput: [
            'ثبات الهيدر في أعلى الشاشة كشريط مستمر حتى عند السكرول لأسفل الصفحة.'
        ],
        professionalTips: 'تذكر دائماً أن العنصر الـ fixed يرتفع عن الصفحات؛ لذا أضف padding-top لأعلى الصفحة بقيمة تعادل ارتفاع الهيدر لمنع اختفاء أول قسم خلفه.',
        commonMistakes: {
            wrong: `/* وضع transform على الأب فتتغير مرجعية fixed لتصبح بالنسبة للأب بدلاً من الشاشة */
.parent { transform: translate(0,0); } .child { position: fixed; }`,
            right: `/* إبعاد العناصر الـ fixed عن الآباء الحاملة للـ transform أو filter */`,
            explanation: 'وجود transform أو filter على الأب يغير بيئة عمل fixed من Viewport إلى إطار الأب.'
        },
        thinkingWay: 'اعتبر fixed كالطباعة المباشرة على زجاج الشاشة الخارجي؛ تتحرك المشاهد في الخلفية وتبقى الكلمة ثابتة بلمسة الزجاج.',
        relatedMethods: ['css-position-sticky', 'css-position-absolute'],
        keywords: ['position: fixed', 'fixed positioning', 'viewport fixed', 'fixed header', 'floating button']
    },
    {
        id: 'css-position-sticky',
        name: 'position: sticky',
        shortDescription: 'التموضع التكيّفي الشبيه بـ relative والتثبيت بـ fixed فور التمرير.',
        longDescription: 'نمط هجين ذكي؛ تتعامل الكتل كـ relative طبيعي حتى تصل لمسافة التمرير المحددة (مثل top: 0)، فتتحول فوراً إلى شريط مثبت كالـ fixed بداخل حدود حاويتها الأب.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `/* تثبيت ترويسة الجدول أثناء التمرير للأسفل */
th {
  position: sticky;
  top: 0;
  background-color: #0f172a;
}`
        ],
        expectedOutput: [
            'التحرك الطبيعي للجدول وتثبيت عناوين الصفوف في الأعلى فور وصولها لحافة الشاشة.'
        ],
        professionalTips: 'شرط حتمي لعمل sticky: يجب تحديد قيمة إزاحة مثل top: 0 أو bottom: 0، مع التأكد من عدم وجود overflow: hidden على أي أب محيط بها.',
        commonMistakes: {
            wrong: `/* وضع overflow: hidden على الأب والتساؤل عن سبب عطل position: sticky */
.parent { overflow: hidden; } .child { position: sticky; top: 0; }`,
            right: `.parent { overflow: visible; } .child { position: sticky; top: 0; }`,
            explanation: 'خاصية overflow: hidden أو auto على الأب تقطع مسار السكرول وتمنع الـ sticky من العمل.'
        },
        thinkingWay: 'فكر في sticky كالورقة اللاصقة القابلة للانزلاق؛ تتحرك معك بداخل دفترها وتلتصق فوراً بالحافة السفلية.',
        relatedMethods: ['css-position-fixed', 'css-position-relative'],
        keywords: ['position: sticky', 'sticky header', 'sticky sidebar', 'scroll positioning']
    },
    {
        id: 'css-physical-offsets',
        name: 'top, right, bottom, left',
        shortDescription: 'الخصائص الفيزيائية لتحديد مسافات الإزاحة المباشرة للعناصر المتموضعة.',
        longDescription: 'خصائص الإزاحة الأربع المباشرة؛ تُستخدم لتحديد مسافة دفع العناصر المتموضعة (relative, absolute, fixed, sticky) عن أطراف الإطار المرجعي.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `.modal-close {
  position: absolute;
  top: 1rem;
  left: 1rem;
}`
        ],
        expectedOutput: [
            'دفع زر الإغلاق بمسافة 1rem من الحافة العلوية واليسرى للأب.'
        ],
        professionalTips: 'في التطبيقات الحديثة الداعمة للغات متعددة، يُنصح باستبدال الخصائص الفيزيائية بالخصائص المنطقية inset-inline و inset-block.',
        commonMistakes: {
            wrong: `/* استخدام top و left على عنصر يحمل position: static */
.box { top: 20px; }`,
            right: `.box { position: relative; top: 20px; }`,
            explanation: 'الخصائص top/left/bottom/right تظل معطلة ولا تؤثر على العناصر ذات التموضع الافتراضي static.'
        },
        thinkingWay: 'اعتبر هذه الخصائص كالمحركات الدفاعة؛ تدفع العنصر بعيداً عن الجدار المحدد بالمسافة المكتوبة.',
        relatedMethods: ['css-logical-inset', 'css-position-absolute'],
        keywords: ['top', 'right', 'bottom', 'left', 'position offsets', 'physical properties']
    },
    {
        id: 'css-logical-inset',
        name: 'inset (Logical Offsets)',
        shortDescription: 'خاصية الإزاحة المنطقية المعاصرة القابلة للتكيف مع اتجاهات اللغة (RTL/LTR).',
        longDescription: 'خاصية مختصرة معاصرة تعادل top/right/bottom/left مع دعم الاتجاهات المنطقية؛ حيث تعين inset: 0 لإيقاف وتغطية كامل مساحة الأب بأمر واحد.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* تمديد الطبقة الزجاجية لتغطي كامل مساحة الأب بـ CSS المعاصر */
.glass-overlay {
  position: absolute;
  inset: 0; /* تعادل top:0; right:0; bottom:0; left:0; */
}`
        ],
        expectedOutput: [
            'تمدد الطبقة الشفافة فوراً لتغطي كامل زوايا وأبعاد الأب المرجعي.'
        ],
        professionalTips: 'استخدم inset: 0 بدلاً من كتابة top:0; left:0; width:100%; height:100%؛ فهي أسرع وأخف بالمعالجة وأكثر أناقة بـ CSS.',
        commonMistakes: {
            wrong: `/* كتابة 4 أسطر إزاحة قديمة لتغطية الخلفية */
top: 0; right: 0; bottom: 0; left: 0;`,
            right: `inset: 0;`,
            explanation: 'الخاصية inset تختصر 4 أسطر طويلة بكلمة واحدة معاصرة.'
        },
        thinkingWay: 'فكر في inset: 0 كفرش المفرش التلقائي الذي يتمدد بالكامل ليصل لأركان الطاولة الأربعة دفعة واحدة.',
        relatedMethods: ['css-physical-offsets', 'css-margin-logical'],
        keywords: ['inset', 'inset-inline', 'inset-block', 'CSS inset', 'logical offsets']
    },
    {
        id: 'css-z-index',
        name: 'z-index',
        shortDescription: 'التحكم بالترتيب الرأسي والعمق البصري للطبقات المتداخلة على المحور Z.',
        longDescription: 'خاصية تحدد مستوى ارتقاء وطفو العناصر فوق بعضها على المحور الرأسي الثالث Z-axis؛ وتعمل حصراً على العناصر المتموضعة (Non-static) أو المندمجة بـ Flex/Grid.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* رفع النافذة المنبثقة لتعلو فوق كافة الطبقات */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
}`
        ],
        expectedOutput: [
            'إبراز وطفو النافذة المنبثقة فوق جميع عناصر الواجهة السفلية.'
        ],
        professionalTips: 'تجنب وضع أرقام عشوائية عملاقة مثل z-index: 999999؛ نظم مستويات التطبيق بنظام المتغيرات (مثال: --z-dropdown: 100; --z-modal: 1000;).',
        commonMistakes: {
            wrong: `/* كتابة z-index على عنصر بدون تحديد position */
.card { z-index: 10; }`,
            right: `.card { position: relative; z-index: 10; }`,
            explanation: 'الـ z-index لا تؤثر إطلاقاً على العناصر ذات التموضع الافتراضي static (إلا إذا كانت أطفالاً مباشرة لـ Flex/Grid).'
        },
        thinkingWay: 'اعتبر z-index كرقم الطابق المكتوب على المصعد؛ الطابق الأعلى يغطي ويحجب الطوابق السفلية.',
        relatedMethods: ['css-stacking-context', 'css-isolation-isolate'],
        keywords: ['z-index', 'stacking order', 'layering', 'z-axis', 'overlapping CSS']
    },
    {
        id: 'css-stacking-context',
        name: 'Stacking Context',
        shortDescription: 'بيئة وسياق التكديس الفرعي المعزول الحاكم لمستويات z-index.',
        longDescription: 'سياق هرمي يتكون آلياً بالـ DOM (عبر الخصائص مثل position + z-index, opacity, transform)؛ يجعل كل العناصر الفرعية بداخل السياق محصورة بترتيب أبيها ولا يمكنها الخروج لتعلو أبناء أعمامها.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `/* إنشاء سياق تكديس جديد بحرفية عبر الشفافية أو التحويل */
.parent-stack {
  position: relative;
  z-index: 1; /* ينشئ Stacking Context معزول كلياً */
}`
        ],
        expectedOutput: [
            'عزل مستويات z-index للأبناء وحصر ترتيبها بداخل نطاق الأب فقط.'
        ],
        professionalTips: 'إذا رفض عنصر يمتلك z-index: 9999 البروز فوق عنصر آخر، فابحث عن الأب الرئيسي؛ ستجد أنه يقع بداخل Stacking Context أضعف من المنافس.',
        commonMistakes: {
            wrong: `/* محاولة رفع ابن ليعلو عن عمّ الأب ذو الـ z-index الأكبر */
.parent { z-index: 1; } .child { z-index: 99999; }`,
            right: `/* رفع الـ z-index الخاص بالأب نفسه ليتفوق على الأب المنافس */`,
            explanation: 'الابن لا يمكنه التغلب على قيود سياق التكديس (Stacking Context) الخاص بأبيه.'
        },
        thinkingWay: 'فكر في Stacking Context كالمباني المستقلة؛ سكان الطابق 100 بالمبنى الأول لا يمكنهم مجاوزة سطح المبنى الثاني إذا كان المبنى الثاني أعلى إجمالاً.',
        relatedMethods: ['css-z-index', 'css-isolation-isolate'],
        keywords: ['Stacking Context', 'layer context', 'z-index isolation', 'rendering layers']
    },
    {
        id: 'css-isolation-isolate',
        name: 'isolation: isolate',
        shortDescription: 'إنشاء سياق تكديس جديد نقي ومستقل برمجياً بـ CSS المعاصر.',
        longDescription: 'خاصية معاصرة ومباشرة تُستخدم لإنشاء سياق تكديس (Stacking Context) جديد ومستقل فوراً دون الحاجة لاستخدام حيل قديمة مثل position: relative أو opacity.',
        difficulty: 'hard',
        importance: 'important',
        examples: [
            `/* إنشاء سياق تكديس نقي لعزل عناصر المكون التفاعلي */
.component-card {
  isolation: isolate;
}`
        ],
        expectedOutput: [
            'تأسيس بيئة عزل رأسية محصورة دون التعديل على خواص التموضع أو الشفافية.'
        ],
        professionalTips: 'استخدم isolation: isolate على الكروت والمكونات التي تحتوي أزراراً بـ mix-blend-mode أو z-index فرعي؛ لمنع تداخل ألوانها مع خلفية الموقع العام.',
        commonMistakes: {
            wrong: `/* كتابة z-index: 0 أو opacity: 0.99 كحيلة قديمة لإنشاء stacking context */
.box { z-index: 0; position: relative; }`,
            right: `.box { isolation: isolate; }`,
            explanation: 'الخاصية المعاصرة isolation: isolate تقدم الحل المعماري الصريح والمباشر للعزل.'
        },
        thinkingWay: 'اعتبر isolation: isolate كوضع جدار عازل للصوت والضوء يحصر التكديس الداخلي داخل المكون نفسه.',
        relatedMethods: ['css-stacking-context', 'css-z-index'],
        keywords: ['isolation: isolate', 'isolation', 'create stacking context', 'mix-blend-mode fix']
    },
    {
        id: 'css-overflow',
        name: 'overflow',
        shortDescription: 'التحكم بطريقة معالجة المحتوى الزائد الذي يخرج عن أبعاد البوكس.',
        longDescription: 'خاصية تعين سلوك المتصفح عند طفح المحتوى خارج حدود العرض والارتفاع المحددين؛ (visible يظهره طافحاً، hidden يقصه كلياً، scroll/auto يضيف شريط تمرير).',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* قص الأجزاء الزائدة من الصورة وتسهيل انحناء الزوايا */
.card-image-box {
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 12px;
}`
        ],
        expectedOutput: [
            'قص الصورة وحظر بروز أي أجزاء زائدة عن الأبعاد والزوايا المنحنية.'
        ],
        professionalTips: 'استخدم overflow: clip في التصاميم المعاصرة بدلاً من hidden إذا كنت تريد قص المحتوى دون إنشاء سياق سكرول فرعي يؤثر على position: sticky.',
        commonMistakes: {
            wrong: `/* استخدام overflow: scroll فتظهر أشرطة تمرير رمادية بائسة بالهاتف */
.card { overflow: scroll; }`,
            right: `.card { overflow: auto; }`,
            explanation: 'الـ scroll تفرض إظهار شريط السكرول دائماً حتى لو لم يطفح المحتوى، بينما auto تظهره فقط عند الحاجة.'
        },
        thinkingWay: 'فكر في overflow كحواف النافذة؛ تقرر إما ترك الستارة تخرج منها أو قص ما يتجاوز الإطار.',
        relatedMethods: ['css-overflow-x-y'],
        keywords: ['overflow', 'overflow: hidden', 'overflow: auto', 'overflow: clip', 'scrollbox']
    },
    {
        id: 'css-overflow-x-y',
        name: 'overflow-x & overflow-y',
        shortDescription: 'التحكم المستقل بطفح المحتوى الأفقي أو الرأسي بفرز منفصل.',
        longDescription: 'خصائص تجزئة الطفح؛ overflow-x تتحكم بحجب أو إتاحة السكرول الأفقي (مفيدة للجداول العريضة)، و overflow-y تتحكم بالطفح الرأسي (مفيدة للتعليقات).',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `/* إتاحة السكرول الأفقي للجداول العريضة على الموبايل مع حظر الرأسي */
.responsive-table-wrapper {
  overflow-x: auto;
  overflow-y: hidden;
}`
        ],
        expectedOutput: [
            'تمكين تمرير الجدول أفقياً بلمسة الأصبع بداخل الجوال دون كسر عرض الشاشة المباشر.'
        ],
        professionalTips: 'هذه التركيبة (overflow-x: auto) هي الحل المعماري الذهبي لجعل الجداول المعقدة متجاوبة على شاشات الهواتف المحمولة.',
        commonMistakes: {
            wrong: `/* كتابة overflow-x: hidden على body لحل مشكلة شريط السكرول الأفقي دون حل السبب */
body { overflow-x: hidden; }`,
            right: `/* معالجة العنصر البارز المتسبب في الشريحة أفقياً بـ max-width: 100% */`,
            explanation: 'وضع overflow-x: hidden على body يقطع بعض العناصر المتموضعة بـ sticky أو fixed بطرق غير مرغوبة.'
        },
        thinkingWay: 'اعتبرها صمامين منفصلين؛ واحد يتحكم بمسار الحركة يميناً ويساراً، والآخر يوجّه الحركة أعلى وأسفل.',
        relatedMethods: ['css-overflow'],
        keywords: ['overflow-x', 'overflow-y', 'horizontal scroll', 'table scroll mobile']
    },
    {
        id: 'css-visibility-hidden',
        name: 'visibility: hidden',
        shortDescription: 'إخفاء العنصر بصرياً مع الحفاظ التام على مساحته الشاغرة.',
        longDescription: 'خاصية تُخفي العنصر عن العين بصرياً مع الإبقاء على أبعاده ومساحته محجوزة بالكامل في الـ DOM، ويتميز بـأنه يحظر تفاعل الماوس والنقر.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* إخفاء العنصر مع حجز مكانه بالصفحة */
.element-invisible {
  visibility: hidden;
}`
        ],
        expectedOutput: [
            'اختفاء العنصر بصرياً مع بقاء الفراغ الذي يحتله محجوزاً في التخطيط.'
        ],
        professionalTips: 'استخدم visibility: hidden عندما تريد إخفاء عنصر دون أن تهتز العناصر المجاورة أو تتغير أماكنها.',
        commonMistakes: {
            wrong: `/* استخدام visibility: hidden والتوقع بتفريغ المساحة وتمدد العناصر الجانبية */
.card { visibility: hidden; }`,
            right: `.card { display: none; }`,
            explanation: 'الـ visibility تحافظ على المساحة الشاغرة؛ لتفريغ المساحة استخدم display: none.'
        },
        thinkingWay: 'اعتبر visibility: hidden كشخص يرتدي عباءة الإخفاء؛ يظل واقفاً في مكانه ولكنك لا تراه.',
        relatedMethods: ['css-display-none', 'css-opacity-zero'],
        keywords: ['visibility: hidden', 'invisible', 'preserve space CSS', 'hide visually']
    },
    {
        id: 'css-opacity-zero',
        name: 'opacity: 0',
        shortDescription: 'جعل العنصر شفافاً تماماً مع بقاء التفاعل والانتقالات الحركية.',
        longDescription: 'درجة شفافية تجعل العنصر غير مرئي بصرياً بنسبة 100% مع احتفاظه بمساحته، واستمراره في استقبال أحداث الماوس والنقر (Hover & Click)، وقابليته للتحريك بـ Transitions.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* جعل العنصر شفافاً مع إمكانية تحريكه */
.element-transparent {
  opacity: 0;
  transition: opacity 0.3s ease;
}`
        ],
        expectedOutput: [
            'اختفاء العنصر بصرياً مع بقائه تفاعلياً ومستجيباً للماوس بداخل الصفحة.'
        ],
        professionalTips: 'إذا أردت إخفاء عنصر بـ opacity: 0 وحظر النقر عليه في نفس الوقت، أضف معه pointer-events: none.',
        commonMistakes: {
            wrong: `/* استخدام opacity: 0 لحجب زر والتفاجؤ بأن المستخدم ينقر عليه بالخطأ */
.btn { opacity: 0; }`,
            right: `.btn { opacity: 0; pointer-events: none; }`,
            explanation: 'الـ opacity: 0 تجعل العنصر شفافاً فقط لكنه يظل يستجيب لنقرات الماوس.'
        },
        thinkingWay: 'اعتبر opacity: 0 كلوح زجاجي شفاف تماماً؛ لا تراه بعينك ولكنك تستطيع لمسه والنقر عليه.',
        relatedMethods: ['css-display-none', 'css-visibility-hidden'],
        keywords: ['opacity: 0', 'transparent element', 'CSS transition fade', 'pointer-events']
    },
    {
        id: 'css-float',
        name: 'float',
        shortDescription: 'إزاحة العنصر لليمين أو اليسار لجعل النصوص والمحتوى تلتف حوله.',
        longDescription: 'خاصية تُزاحم العنصر أفقياً نحو اليمين أو اليسار داخل حاويته، مما يسمح للنصوص والمحتويات السطرية المجاورة بالانسكاب والالتفاف حول أطرافه.',
        difficulty: 'medium',
        importance: 'normal',
        examples: [
            `/* التفاف نص المقال حول الصورة */
.article-img {
  float: right;
  margin-inline-end: 1rem;
}`
        ],
        expectedOutput: [
            'انزياح الصورة لليمين والتفاف أسطر الفقرة النصية بنعومة حول أطرافها.'
        ],
        professionalTips: 'تجنب استخدام float لبناء التخطيطات والهياكل الأساسية؛ اعتمد حصراً على Flexbox و CSS Grid. الاستخدام المعاصر المعتمد لـ float محصور في التفاف النصوص حول الصور فقط.',
        commonMistakes: {
            wrong: `/* استخدام float لصف الكروت أفقياً بجانب بعضها */
.card { float: left; width: 33.3%; }`,
            right: `.card-container { display: flex; } .card { flex: 1; }`,
            explanation: 'خاصية float تتطلب معالجة مشاكل الارتفاع المنهار؛ Flexbox أسرع وأكثر استقراراً بـ CSS الحديث.'
        },
        thinkingWay: 'اعتبر float كحجر في مجرى النهر؛ ينسكب الماء (النص) ويلتف حول أطراف الحجر.',
        relatedMethods: ['css-clear', 'css-display-block'],
        keywords: ['float', 'float: right', 'float: left', 'text wrap image', 'CSS float']
    },
    {
        id: 'css-clear',
        name: 'clear',
        shortDescription: 'إلغاء تأثير الالتفاف ومنع مجاورة العناصر الطافية (Floated Elements).',
        longDescription: 'خاصية تُحدد ما إذا كان العنصر يسمح بوجود عناصر طافية (float) بجانبه أم يجب عليه الهبوط أسفلها لكسر الالتفاف وبدء سطر جديد (مثل clear: both).',
        difficulty: 'medium',
        importance: 'normal',
        examples: [
            `/* إجبار العنصر على الهبوط أسفل جميع العناصر الطافية السابقة */
.section-divider {
  clear: both;
}`
        ],
        expectedOutput: [
            'هبوط العنصر لأسفل وتفريغ المساحة المجاورة له من أي عناصر طافية.'
        ],
        professionalTips: 'بدلاً من استخدام clear المباشرة على الأبناء كحيلة قديمة (Clearfix)، يُفضل استخدام الخاصية الحديثة display: flow-root على الحاوية الأب لمنع انهيار ارتفاعها آلياً.',
        commonMistakes: {
            wrong: `/* توقع أن يبتعد العنصر عن الـ float بدون استخدام clear */
.next-paragraph { margin-top: 20px; }`,
            right: `.next-paragraph { clear: both; }`,
            explanation: 'العناصر المجاورة للـ float ترتفع وتتداخل معها تلقائياً؛ يجب استخدام clear لكسر هذا التداخل.'
        },
        thinkingWay: 'اعتبر clear كخط فاصل صريح؛ يرفض الوقوف بجانب الكتل الطافية ويجبر العنصر على الانتقال لبداية سطر جديد.',
        relatedMethods: ['css-float'],
        keywords: ['clear', 'clear: both', 'clear: left', 'clear: right', 'clearfix']
    }
];