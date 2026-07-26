export const textContentData = [
    {
        id: 'html-h1',
        name: '<h1>',
        shortDescription: 'العنوان الرئيسي الأول والأعلى أهمية بالصفحة (يُستخدم مرة واحدة فقط).',
        longDescription: 'عنصر دلالي يمثل العنوان الرئيسي المحوري للمستند. يعتمد عليه محرك البحث وقارئات الشاشة كعنوان أول ورئيسي للواجهة.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<h1>المرجع المعماري لتقنيات الويب</h1>`
        ],
        expectedOutput: [
            'عرض العنوان الرئيسي بخط بارز واعتماده كعنوان محوري للصفحة في الـ SEO.'
        ],
        professionalTips: 'قاعدة SEO صارمة: لا تستخدم أكثر من وسم <h1> واحد في الصفحة الواحدة مطلقاً؛ لتجنب تشتيت محركات البحث حول موضوع الصفحة الرئيسي.',
        commonMistakes: {
            wrong: `<!-- تكرار وسم h1 في مواضع متعددة بالصفحة -->
<h1>منصة كود ماب</h1>
<h1>قسم الدروس</h1>`,
            right: `<h1>منصة كود ماب</h1>
<h2>قسم الدروس</h2>`,
            explanation: 'تكرار <h1> يضعف أرشفة الموقع؛ استخدم <h2> للتقسيمات الفرعية بدلاً من تكرار <h1>.'
        },
        thinkingWay: 'اعتبر <h1> هو اسم الكتاب المطبوع على الغلاف الخارجي؛ لا يجوز أن يكون للكتيّب أكثر من عنوان رئيسي واحد.',
        relatedMethods: [
            'html-h2',
            'html-p'
        ],
        keywords: ['<h1>', 'h1', 'main heading', 'SEO title', 'heading level 1']
    },
    {
        id: 'html-h2',
        name: '<h2>',
        shortDescription: 'العنوان الفرعي للأقسام الموضوعية الرئيسية داخل الصفحة.',
        longDescription: 'وسم دلالي يُستخدم لوسم العناوين الفرعية التي تقسم المحتوى داخل الصفحة أو داخل أوسام <section> و <article>.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<section>
  <h2>مسار تعلم لغة HTML</h2>
</section>`
        ],
        expectedOutput: [
            'إظهار عنوان فرعي يوضح بداية قسم موضوعي جديد.'
        ],
        professionalTips: 'استخدم <h2> لتجزئة المفاهيم الكبيرة داخل الصفحة، ويمكن تكراره بعدد الأقسام المتاحة لديك.',
        commonMistakes: {
            wrong: `<!-- القفز المباشر من h1 إلى h4 دون المرور بـ h2 -->
<h1>الرئيسية</h1>
<h4>تفاصيل الخدمة</h4>`,
            right: `<h1>الرئيسية</h1>
<h2>تفاصيل الخدمة</h2>`,
            explanation: 'تجنب القفز بين المراتب الهرمية بدون تسلسل؛ لأن ذلك يقطع شجرة القراءة لقارئات الشاشة.',
        },
        thinkingWay: 'فكر في <h2> كفصول الكتاب الرئيسية التي تندرج تحت عنوان الغلاف.',
        relatedMethods: ['html-h1', 'html-h3'],
        keywords: ['<h2>', 'h2', 'subheading', 'section title']
    },
    {
        id: 'html-h3-h6',
        name: '<h3> - <h6>',
        shortDescription: 'عناوين فرعية للمستويات التدرجية الفرعية وتفرعات الأفكار المندرجة.',
        longDescription: 'وسوم دلالية تمثل المستويات الثالثة والرابعة والخامسة والسادسة من العناوين الهيكلية. تُستخدم لتفريع النقاط المندرجة تحت العنوان الرئيسي للقسم <h2> داخل المقالات والكروت المتقدمة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `<h2>قسم أدوات الويب</h2>
<h3>العناصر النصية</h3>
<h4>وسوم العناوين الفرعية</h4>
<h5>التفرعات الدقيقة</h5>`
        ],
        expectedOutput: [
            'إظهار العناوين التدرجية بأحجام خطوط تنازلية تعبر عن التسلسل المعرفي داخل القسم.'
        ],
        professionalTips: 'تأكد دائماً من وجود عنوان <h2> يسبق هذه العناوين؛ حيث يُعد h3 وما دونه تفريعاً مباشراً للأفكار التابعة للأقسام الرئيسية.',
        commonMistakes: {
            wrong: `<!-- استخدام h3 مباشرة بعد h1 وتخطّي h2 -->
<h1>عنوان الموقع</h1>
<h3>قسم فرعي</h3>`,
            right: `<h1>عنوان الموقع</h1>
<h2>القسم الرئيسي</h2>
<h3>قسم فرعي</h3>`,
            explanation: 'القفز بين مستويات العناوين يقطع تسلسل شجرة الوصول لقارئات الشاشة؛ يجب أن تتدرج العناوين بالتتابع 1 ثم 2 ثم 3.'
        },
        thinkingWay: 'اعتبر العناوين من h3 إلى h6 كالفروع والأغصان الصغرى المندرجة تحت جذع الغصن الرئيسي h2.',
        relatedMethods: ['html-h1', 'html-h2', 'html-p'],
        keywords: ['<h3>', '<h4>', '<h5>', '<h6>', 'h3', 'h4', 'h5', 'h6', 'subheadings']
    },
    {
        id: 'html-p',
        name: '<p>',
        shortDescription: 'عنصر الفقرة النصية لتغليف الكتل والجمل المترابطة.',
        longDescription: 'وسم كتلوي (Block-level) مخصص لتجميع الجمل والأفكار المترابطة في فقرة نصية مستقلة ذات هوامش رأسية مفصولة.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<p>تعلم معايير تطوير الويب الحديثة لعام 2026 بأسلوب معماري عصري.</p>`
        ],
        expectedOutput: [
            'عزل الجملة النصية في فقرة مستقلة ومقروءة.'
        ],
        professionalTips: 'لا تضع عناصر كتلية مثل <div> أو <h2> داخل وسم <p>؛ لأن المتصفح سيقوم بإغلاق الفقرة تلقائياً.',
        commonMistakes: {
            wrong: `<!-- كتابة فقرة داخل div بدلاً من p -->
<div class="description">هذا نص شرح عادي</div>`,
            right: `<p class="description">هذا نص شرح عادي</p>`,
            explanation: 'الاعتماد على <div> يفقد المساعدات الآلية معرفة أن هذا النص يمثل فقرة قراءة.'
        },
        thinkingWay: 'فكر في <p> كأي فقرة نصية في مقال؛ تجمع جمل تدور حول فكرة واحدة.',
        relatedMethods: ['html-span'],
        keywords: ['<p>', 'p', 'paragraph', 'text block']
    },
    {
        id: 'html-ul',
        name: '<ul>',
        shortDescription: 'قائمة العناصر غير المرتبة (Unordered List).',
        longDescription: 'حاوية دلالية تجمع قائمة من العناصر غير الخاضعة لترتيب رقيمي محدد (تظهر بنقاط Bullet Points افتراضياً).',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<ul>
  <li>الميزة الأولى</li>
  <li>الميزة الثانية</li>
</ul>`
        ],
        expectedOutput: [
            'عرض مجموعة نقاط غير رقمية متتالية.'
        ],
        professionalTips: 'تُعد <ul> الحاوية المعيارية الأكثر استخداماً لبناء أشرطة التنقل (Navbars) والكروت التفاعلية.',
        commonMistakes: {
            wrong: `<!-- وضع نصوص مباشرة داخل ul دون استخدام li -->
<ul>
  نص مباشر بدون عنصر
</ul>`,
            right: `<ul>
  <li>نص داخل عنصر قائمة</li>
</ul>`,
            explanation: 'الابن المباشر الوحيد المسموح به داخل <ul> هو الوسم <li> حصراً.'
        },
        thinkingWay: 'اعتبر <ul> كقائمة المشتريات؛ لا يهم ترتيب العناصر فيها قدر تجميعها.',
        relatedMethods: ['html-ol', 'html-li'],
        keywords: ['<ul>', 'ul', 'unordered list', 'bullet points']
    },
    {
        id: 'html-ol',
        name: '<ol>',
        shortDescription: 'قائمة العناصر الترتيبية الرقمية (Ordered List).',
        longDescription: 'حاوية دلالية تُستخدم لتجميع عناصر متسلسلة خطوة بخطوة حيث يكون الترتيب الأرقامي جوهرياً.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `<ol>
  <li>افتح محرر الأكواد</li>
  <li>أنشئ ملف index.html</li>
</ol>`
        ],
        expectedOutput: [
            'ترقيم العناصر تلقائياً (1, 2, 3...) بحسب تسلسلها.'
        ],
        professionalTips: 'استخدم <ol> لخطوات الشرح، إعداد الحسابات، أو قوائم المتصدرين حيث يترتب المعنى على الأرقام.',
        commonMistakes: {
            wrong: `<!-- كتابة أرقام يدكوية داخل ul بدلاً من ol -->
<ul>
  <li>1. الخطوة الأولى</li>
</ul>`,
            right: `<ol>
  <li>الخطوة الأولى</li>
</ol>`,
            explanation: 'الوسم <ol> يتكفل بالترقيم الآلي دلالياً دون الحاجة لكتابة الأرقام يدوياً.'
        },
        thinkingWay: 'فكر في <ol> كخطوات الوصفة الطبية؛ الترتيب شرط أساسي لنجاح العملية.',
        relatedMethods: ['html-ul', 'html-li'],
        keywords: ['<ol>', 'ol', 'ordered list', 'numbered list']
    },
    {
        id: 'html-li',
        name: '<li>',
        shortDescription: 'عنصر العنصر الفردي داخل القوائم (List Item).',
        longDescription: 'وسم يمثل المفردة الواحدة داخل القوائم، ويجب أن يكون دائماً متبوعاً بأحد الوسمين <ul> أو <ol>.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<ul>
  <li>عنصر مستقل داخل القائمة</li>
</ul>`
        ],
        expectedOutput: [
            'تمثيل عنصر القائمة الفردي وإعلام قارئات الشاشة برقم أو ترتيب العنصر.'
        ],
        professionalTips: 'يمكن وضع أوسام أخرى داخل <li> مثل الروابط <a>، الصور <img>، أو حتى قوائم متداخلة أخرى.',
        commonMistakes: {
            wrong: `<!-- استخدام li خارج أوسام القوائم ul أو ol -->
<div>
  <li>عنصر طافٍ بدون قائمة</li>
</div>`,
            right: `<ul>
  <li>عنصر داخل قائمة</li>
</ul>`,
            explanation: 'الوسم <li> لا يعمل بشكل دلالي صحيح إلا إذا كان يقع مباشرة داخل <ul> أو <ol>.'
        },
        thinkingWay: 'اعتبر <li> ككل سطر في ورقة الملاحظات.',
        relatedMethods: ['html-ul', 'html-ol'],
        keywords: ['<li>', 'li', 'list item']
    },
    {
        id: 'html-span',
        name: '<span>',
        shortDescription: 'حاوية نصية ضمنية عامة للتنسيق دون إضافة دلالة.',
        longDescription: 'عنصر ضمني (Inline) يُستخدم لتغليف جزء محدد من النص داخل الفقرة لتطبيق تنسيقات CSS أو JavaScript عليه دون تغيير المعنى.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `<p>سعر المنتج <span class="highlight">100 دولار</span> فقط.</p>`
        ],
        expectedOutput: [
            'تمكين التنسيق البصري للكلمة دون كسر السطر أو تغيير دلالتها.'
        ],
        professionalTips: 'استخدم <span> عندما تريد تلوين كلمة أو إعطائها خلفية بـ CSS بدون أن تكون الكلمة تحذيراً أو اقتباساً.',
        commonMistakes: {
            wrong: `<!-- استخدام span بدلاً من strong للكلمات الهامة جداً -->
<p><span style="font-weight: bold;">تحذير هام</span></p>`,
            right: `<p><strong>تحذير هام</strong></p>`,
            explanation: 'الكلمات التحذيرية تحتاج <strong> لإغناء الدلالة وليس مجرد <span> منسق شكلياً.'
        },
        thinkingWay: 'فكر في <span> كمشباك الملابس؛ يمسك جزءاً صغيراً من القماش لتنسيقه دون قصه.',
        relatedMethods: ['html-p', 'html-strong'],
        keywords: ['<span>', 'span', 'inline container', 'styling helper']
    },
    {
        id: 'html-strong',
        name: '<strong>',
        shortDescription: 'إضفاء أقصى درجات الأهمية والتأكيد الدلالي على النص.',
        longDescription: 'عنصر ضمني يخبر المتصفح وقارئات الشاشة بأن هذا النص يمتلك أهمية قصوى أو خطورة، ويظهر بخط عريض افتراضياً.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<p><strong>ملاحظة أمنية:</strong> لا تشارك كلمة المرور مع أي شخص.</p>`
        ],
        expectedOutput: [
            'عرض النص بخط عريض مع تنبيه قارئات الشاشة لتأكيد نبرة القراءة.'
        ],
        professionalTips: 'تجنب استخدام وسم <b> القديم؛ وسم <strong> هو البديل المعياري العصر المحتفظ بالدلالة.',
        commonMistakes: {
            wrong: `<!-- استخدام وسم b القديم للتغميق فقط -->
<p>هذا النص <b>مهم</b></p>`,
            right: `<p>هذا النص <strong>مهم</strong></p>`,
            explanation: 'الوسم <b> مجرد تنسيق شكلي قديم، بينما <strong> يضيف دلالة الأهمية الحقيقية.'
        },
        thinkingWay: 'اعتبر <strong> بمثابة التظليل بالقلم العريض الأحمر تنبيهاً لخطورة أو أهمية الكلمة.',
        relatedMethods: ['html-em', 'html-span'],
        keywords: ['<strong>', 'strong', 'bold text', 'importance', 'semantic bold']
    },
    {
        id: 'html-em',
        name: '<em>',
        shortDescription: 'التشديد الصوتي والبلاغي على الكلمات داخل النص.',
        longDescription: 'عنصر ضمني يُستخدم للتشديد التعبيري (Emphasis) على كلمة معينة لتغيير نبرة منطق الجملة، ويظهر مائلاً افتراضياً.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `<p>أنا <em>أحب</em> تعلم البرمجة المعمارية.</p>`
        ],
        expectedOutput: [
            'عرض الكلمة بشكل مائل وإمالة نبرة الصوت آلياً في قارئات الشاشة.'
        ],
        professionalTips: 'استبدل وسم <i> القديم بـ <em> عندما يقترن الهدف بتغيير نبرة التشديد في الكلام.',
        commonMistakes: {
            wrong: `<!-- استخدام i بدلاً من em للتشديد البلاغي -->
<p>احرص على <i>التركيز</i></p>`,
            right: `<p>احرص على <em>التركيز</em></p>`,
            explanation: 'الوسم <em> ينقل نبرة التشديد للقارئ الآلي بخلاف <i> الذي يمثل إمالة شكلية فقط.'
        },
        thinkingWay: 'فكر في <em> كرفع نبرة صوتك قليلاً عند نطق كلمة معينة في الجملة.',
        relatedMethods: ['html-strong'],
        keywords: ['<em>', 'em', 'emphasis', 'italic semantic']
    },
    {
        id: 'html-code',
        name: '<code>',
        shortDescription: 'تغليف وعرض الأكواد والشيفرات البرمجية بخط أحادي السعة.',
        longDescription: 'وسم ضمني مخصص لتمثيل جزء من كود برمي داخل النص، حيث يعرض الكلمة بخط مخصص للبرمجة (Monospace Font).',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `<p>استخدم الدالة <code>console.log()</code> لطباعة المخرجات.</p>`
        ],
        expectedOutput: [
            'عرض الجملة بخط برمي مميز (Monospace) يفصلها عن النص العادي.'
        ],
        professionalTips: 'عند عرض كتل كود ضخمة متعددة الأسطر، قم بتغليف <code> داخل وسم <pre> للحفاظ على الهوامش والأسطر.',
        commonMistakes: {
            wrong: `<!-- كتابة الكود البرمجي كنص عادي دون تغليفه بـ code -->
<p>قم باستدعاء الدالة fetch() لجلب البيانات</p>`,
            right: `<p>قم باستدعاء الدالة <code>fetch()</code> لجلب البيانات</p>`,
            explanation: 'تغليف الكود بـ <code> يعزز مقروئية الشيفرات ويميزها عن لغة الشرح البشرية.'
        },
        thinkingWay: 'اعتبر <code> بمثابة الصندوق الزجاجي المخصص للآلات والبرمجيات داخل النص.',
        relatedMethods: ['html-span'],
        keywords: ['<code>', 'code', 'inline code', 'monospace font']
    },
    {
        id: 'html-mark',
        name: '<mark>',
        shortDescription: 'تظليل الكلمات المضيئة أو نتائج البحث بخلفية بارزة.',
        longDescription: 'عنصر ضمني يُستخدم لتظليل نص محدد بخلفية ملونة ( صفراء افتراضياً ) للإشارة لأهميته المباشرة أو كأحد نتائج البحث.',
        difficulty: 'easy',
        importance: 'normal',
        examples: [
            `<p>نتائج البحث عن كلمة <mark>إتش تي إم إل</mark>:</p>`
        ],
        expectedOutput: [
            'تظليل الكلمة بخلفية ملونة لفت انتباه العين فوراً.'
        ],
        professionalTips: 'ممتاز جداً للاستخدام في محركات البحث المحلية المدمجة بالمنصة لتظليل الكلمات المطابقة لبحث المستخدم.',
        commonMistakes: {
            wrong: `<!-- استخدام span وتلوينه بـ CSS بدلاً من mark لنتائج البحث -->
<span style="background: yellow;">كلمة بحث</span>`,
            right: `<mark>كلمة بحث</mark>`,
            explanation: 'الوسم <mark> يعطي دلالة صريحة لقارئات الشاشة بأن هذا النص تم تظليله سياقياً.'
        },
        thinkingWay: 'فكر في <mark> كقلم التظليل الفسفوري (Highlighter) على ورقة الطباعة.',
        relatedMethods: ['html-span'],
        keywords: ['<mark>', 'mark', 'highlight text', 'search result']
    },
    {
        id: 'html-blockquote',
        name: '<blockquote>',
        shortDescription: 'الاقتباس الكتلي المستقل للنصوص الطويلة المأخوذة من مصادر خارجية.',
        longDescription: 'عنصر كتلوي يُستخدم لعرض اقتباس نصي طويل ومستقل مأخوذ من كتاب أو موقع خارجي، ويظهر بإزاحة هامشية افتراضية.',
        difficulty: 'medium',
        importance: 'normal',
        examples: [
            `<blockquote cite="https://w3.org">
  <p>معايير الويب الموحدة هي الضامن الحقيقي لوصول الإنترنت للجميع.</p>
</blockquote>`
        ],
        expectedOutput: [
            'إظهار هامش إزاحة جانبي للاقتباس واعتماده ككتلة مقتبسة.'
        ],
        professionalTips: 'استخدم دائماً سمة cite="URL" لتزويد محرك البحث برابط المصدر الأصلي للاقتباس.',
        commonMistakes: {
            wrong: `<!-- استخدام blockquote فقط لإزاحة نص عادي من اليمين -->
<blockquote class="my-text">نص عادي أريد إزاحته</blockquote>`,
            right: `<p class="margin-right-20">نص عادي أريد إزاحته</p>`,
            explanation: 'لا تستخدم <blockquote> للتنسيق المسافي؛ استخدمه حصرياً للاقتباسات الفعليه.'
        },
        thinkingWay: 'اعتبر <blockquote> كمربع النص المقتبس في منتصف صفحات المجلات.',
        relatedMethods: ['html-q'],
        keywords: ['<blockquote>', 'blockquote', 'long quote', 'citation']
    },
    {
        id: 'html-q',
        name: '<q>',
        shortDescription: 'الاقتباس النصي الضمني القصير داخل الفقرة مع إضافة علامات تنصيص تلقائية.',
        longDescription: 'عنصر ضمني مخصص للاقتباسات القصيرة داخل السطر، ويتميز بإنشاء علامات التنصيص (Quotes) تلقائياً حول النص.',
        difficulty: 'easy',
        importance: 'normal',
        examples: [
            `<p>كما قال الحكيم: <q>العلم نور</q> دائماً.</p>`
        ],
        expectedOutput: [
            'إضافة علامتي تنصيص "العلم نور" تلقائياً حسب لغة الصفحة.'
        ],
        professionalTips: 'لا تكتب علامات التنصيص بيديك داخل وسم <q>؛ لأن المتصفح يولدها آلياً حسب لغة المستند.',
        commonMistakes: {
            wrong: `<!-- كتابة علامات الاقتباس يدوياً داخل وسم q -->
<p>قال الفيلسوف <q>"الحقيقة واحدة"</q></p>`,
            right: `<p>قال الفيلسوف <q>الحقيقة واحدة</q></p>`,
            explanation: 'كتابة علامات التنصيص يدوياً يسبب تكرارها المزدوج (""الحقيقة"") على الشاشة.'
        },
        thinkingWay: 'فكر في <q> كعلامتي اقتباس ذكيتين تتشكلان تلقائياً بحسب لغة الموقع.',
        relatedMethods: ['html-blockquote'],
        keywords: ['<q>', 'q', 'short quote', 'inline quote']
    },
    {
        id: 'html-br',
        name: '<br>',
        shortDescription: 'كسر السطر والانتقال لسطر جديد قسرياً داخل نفس الفقرة.',
        longDescription: 'وسم منفرد مغلق ذاتياً (Void Element) يُستخدم لإنشاء سطر جديد داخل نفس الفقرة دون إنشاء فقرة جديدة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `<p>
  شارع التقنية، مبنى 5<br>
  الرياض، المملكة العربية السعودية
</p>`
        ],
        expectedOutput: [
            'انتقال النص فوراً للسطر التالي دون إنهاء الفقرة.'
        ],
        professionalTips: 'يُستخدم <br> حصرياً في النصوص التي يتغير معناها بكسر السطر (مثل الأبيات الشعرية أو العناوين البريدية).',
        commonMistakes: {
            wrong: `<!-- تكرار br لخلق مسافات بين الفقرات -->
<p>فقرة أولى</p>
<br><br><br>
<p>فقرة ثانية</p>`,
            right: `<p class="margin-bottom">فقرة أولى</p>
<p>فقرة ثانية</p>`,
            explanation: 'تكرار <br> لخلق المسافات ممارسة خاطئة؛ المسافات يتم ضبطها بخصائص margin في CSS.'
        },
        thinkingWay: 'اعتبر <br> كمفتاح Shift + Enter في برامج معالجة النصوص.',
        relatedMethods: ['html-p', 'html-hr'],
        keywords: ['<br>', 'br', 'line break', 'break line']
    },
    {
        id: 'html-hr',
        name: '<hr>',
        shortDescription: 'الفاصل الموضوعي الدلالي للتنقل بين الأفكار الرئيسية.',
        longDescription: 'وسم منفرد مغلق ذاتياً يمثل التغير الموضوعي في سياق الحديث بين فقرتين أو قسمين داخل المستند.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `<section>
  <p>مقدمة عن الدرس الأول.</p>
  <hr>
  <p>بداية الدرس الثاني.</p>
</section>`
        ],
        expectedOutput: [
            'رسم خط أفقي دلالي يعبر عن كسر الموضوع والانتقال لفكرة جديدة.'
        ],
        professionalTips: 'لا تستخدم <hr> لمجرد رسم خطوط زينة أو ديكور؛ التزيين يتم دائماً بخصائص border في CSS.',
        commonMistakes: {
            wrong: `<!-- استخدام hr كخط زينة تحت العناوين فقط -->
<h2>عنوان الدرس</h2>
<hr>`,
            right: `<h2 class="border-bottom">عنوان الدرس</h2>`,
            explanation: 'الوسم <hr> مخصص للتغير الموضوعي فقط، وليس كخط ديكوري تحت العناصر.'
        },
        thinkingWay: 'فكر في <hr> كالخط الفاصل بين فصول الرواية لتنبيه القارئ بانتقال الأحداث.',
        relatedMethods: ['html-br', 'html-section'],
        keywords: ['<hr>', 'hr', 'horizontal rule', 'thematic break']
    }
];