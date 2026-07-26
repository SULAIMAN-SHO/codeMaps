export const selectorsData = [
    {
        id: 'document-get-element-by-id',
        name: 'document.getElementById()',
        shortDescription: 'استهداف عنصر واحد فريد من شجرة الـ DOM بالاعتماد على معرّفه الرقمي (ID).',
        longDescription: 'دالة استعلامية كلاسيكية تقوم بمسح المستند والبحث عن العنصر الذي يطابق معرّفه (id) النص الممرر كمعامل. تُرجع الدالة كائناً من نوع Element في حال العثور عليه، أو ترجع القيمة null إذا لم يكن هناك عنصر يحمل هذا المعرّف.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// استهداف عنوان الصفحة الرئيسي وتحديث محتواه النصي
const mainHeader = document.getElementById('h1');
if (mainHeader) {
  mainHeader.innerHTML = 'SULAIMAN SHO';
}`
        ],
        expectedOutput: [
            "(تحديث محتوى العنصر ذو المعرّف h1 بنجاح على واجهة المستخدم)"
        ],
        professionalTips: 'هذه الدالة سريعة للغاية لأن المتصفح يفهرس المعرّفات (IDs) داخلياً في جدول بحث مباشر بالذاكرة. تذكر دائماً أن معرّفات الـ id يجب أن تكون فريدة تماماً في صفحة الـ HTML ولا يجوز تكرارها لعناصر متعددة لضمان استقرار الاستعلام.',
        commonMistakes: {
            wrong: `// وضع رمز الهاش (#) بالخطأ داخل دالة getElementById
const title = document.getElementById('#h1'); // خطأ: سيرجع null دائماً!`,
            right: `// تمرير اسم المعرف الخام مباشرة دون أي رموز إضافية
const title = document.getElementById('h1'); // يعمل بنجاح تام`,
            explanation: 'الدالة getElementById تبحث عن قيمة السمة id الحرفية مباشرة، وإضافة رمز الهاش # يجعلها تبحث عن عنصر يحمل المعرّف الفعلي "#h1" وهو ما لا يتواجد عادة.'
        },
        thinkingWay: 'استخدم هذه الدالة كخيار كلاسيكي سريع عندما ترغب في الوصول الفوري لعنصر هيكلي رئيسي فريد ومضمون الوجود بصفحتك (مثل الحاويات الرئيسية أو أزرار العمليات الفردية).',
        relatedMethods: ['document-query-selector'],
        keywords: ['getElementById', 'DOM selector', 'ID target', 'single element', 'document selection']
    },
    {
        id: 'document-get-elements-by-class-name',
        name: 'document.getElementsByClassName()',
        shortDescription: 'استهداف جميع العناصر التي تشترك في اسم صنف (Class) محدد داخل المستند.',
        longDescription: 'دالة استعلامية تبحث داخل المستند عن جميع العناصر التي تحمل اسم الصنف (class) المحدد، وتُرجع مجموعة حية (Live HTMLCollection) يتم تحديثها تلقائياً عند إضافة أو إزالة أو تعديل العناصر المطابقة في شجرة الـ DOM. إذا لم يتم العثور على أي عنصر، فستُرجع مجموعة فارغة بدلاً من null.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// استهداف جميع البطاقات وإضافة حد لها
const cards = document.getElementsByClassName('card');

for (const card of cards) {
    card.style.border = '2px solid #209DD0';
}`
        ],
        expectedOutput: [
            '(سيتم إضافة حد أزرق لجميع العناصر التي تحمل الصنف "card" داخل الصفحة.)'
        ],
        professionalTips: 'تُرجع هذه الدالة كائناً من نوع HTMLCollection وهو "حي" (Live)، أي أن محتوياته تتغير تلقائياً عند تغير عناصر الصفحة دون الحاجة لإعادة تنفيذ الدالة. إذا كنت تحتاج إلى قائمة ثابتة لا تتأثر بالتغييرات اللاحقة، فاستخدم querySelectorAll() الذي يُرجع NodeList ثابتة.',
        commonMistakes: {
            wrong: `// محاولة استخدام forEach مباشرة على HTMLCollection
const cards = document.getElementsByClassName('card');

cards.forEach(card => {
    console.log(card);
});`,
            right: `// المرور على العناصر باستخدام for...of
const cards = document.getElementsByClassName('card');

for (const card of cards) {
    console.log(card);
}`,
            explanation: 'الكائن HTMLCollection لا يدعم الدالة forEach في جميع البيئات، لأنه ليس مصفوفة حقيقية. لذلك يُفضل استخدام for...of أو تحويله إلى Array بواسطة Array.from() عند الحاجة.'
        },
        thinkingWay: 'استخدم هذه الدالة عندما ترغب في التعامل مع مجموعة عناصر تشترك في نفس الصنف، وخاصة إذا كنت تستفيد من كون النتيجة تتحدث تلقائياً مع أي تغييرات تحدث في الصفحة. أما إذا كنت تحتاج إلى محددات CSS أكثر مرونة أو قائمة ثابتة، فغالباً سيكون querySelectorAll() هو الخيار الأفضل.',
        relatedMethods: [
            'document-get-element-by-id',
            'document-query-selector-all',
            'document-query-selector'
        ],
        keywords: [
            'getElementsByClassName',
            'HTMLCollection',
            'Live Collection',
            'class selector',
            'multiple elements',
            'DOM selection'
        ]
    },
    {
        id: 'document-get-elements-by-tag-name',
        name: 'document.getElementsByTagName()',
        shortDescription: 'استهداف ومسح جميع العناصر التي تطابق اسم وسم الـ HTML المحدد.',
        longDescription: 'دالة استعلامية كلاسيكية تقوم بالبحث في كامل المستند وتجميع كافة العناصر التي تحمل اسم الوسم الممرر (مثل section, div, p)، وترجع قائمة حية (Live HTMLCollection) تحتوي على هذه العناصر مرتبة حسب ظهورها بملف الـ HTML.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// استهداف جميع أقسام الصفحة وقراءة عددها
const sections = document.getElementsByTagName('section');
console.log('عدد الأقسام المكتشفة بالصفحة:', sections.length);`
        ],
        expectedOutput: [
            "عدد الأقسام المكتشفة بالصفحة: (عدد الأقسام الفعلي بالمستند)"
        ],
        professionalTips: 'القائمة المرتجعة (HTMLCollection) هي قائمة حية (Live)؛ أي أنها تتحدث تلقائياً ببيئة المتصفح فور إزالة أو إضافة عناصر جديدة للـ DOM، ولكنها لا تملك دوال المصفوفات الحديثة مثل map و filter بشكل مباشر مالم يتم تحويلها.',
        commonMistakes: {
            wrong: `const paragraphs = document.getElementsByTagName('p');
paragraphs.forEach(p => console.log(p)); // خطأ فادح: TypeError: paragraphs.forEach is not a function`,
            right: `const paragraphs = document.getElementsByTagName('p');
Array.from(paragraphs).forEach(p => console.log(p)); // تحويلها أولاً لإتاحة التكرار بسلام`,
            explanation: 'قوائم HTMLCollection هي كائنات شبيهة بالمصفوفات (Array-like) وليست مصفوفات حقيقية؛ مما يعني أنها تفتقر لـ Array.prototype وتتطلب عملية تحويل صريحة لتفعيل دوال المرور والتصفية.'
        },
        thinkingWay: 'استخدم هذه الدالة نادراً عندما ترغب بعمل مسح تكراري شامل لوسم هيكلي معين بالصفحة بالكامل، ويفضل استبدالها بـ querySelectorAll لمقروئية أفضل.',
        relatedMethods: ['array-from-dom', 'document-query-selector-all'],
        keywords: ['getElementsByTagName', 'HTMLCollection', 'live collection', 'tag selector', 'mass DOM selection']
    },
    {
        id: 'array-from-dom',
        name: 'Array.from()',
        shortDescription: 'تحويل المجموعات الشبيهة بالمصفوفات المرتجعة من الـ DOM إلى مصفوفات حقيقية صالحة للمعالجة.',
        longDescription: 'دالة تحويل ساكنة تابعة لكلاس Array الأساسي؛ تقوم بالتقاط المجموعات الشبيهة بالمصفوفات (مثل HTMLCollection و NodeList) وإنشاء مصفوفة جافا سكريبت حقيقية وجديدة تحتوي على نفس العناصر، لتمكين المطور من استخدام دوال المعالجة القوية مثل filter, map, forEach.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// تحويل مصفوفة أقسام الـ HTMLCollection لمصفوفة حقيقية للمرور عليها
const sections = document.getElementsByTagName('section');
const newArray = Array.from(sections);

newArray.forEach(element => {
  element.innerHTML = 'sulaiman'; // معالجة وتحديث النص بنجاح تكراري آمن
});`
        ],
        expectedOutput: [
            "(تحويل وتعديل نصوص كافة الأقسام على الصفحة وتحديث الـ DOM بنجاح)"
        ],
        professionalTips: 'بدلاً من استخدام Array.from()، يمكنك في الكود الحديث لعام 2026 استخدام عامل النشر الفوري `[...collection]` كطريقة مقتضبة ومماثلة تماماً لإنشاء وتفكيك المصفوفة بالذاكرة.',
        commonMistakes: {
            wrong: `const divs = document.getElementsByTagName('div');
const list = divs.map(d => d.id); // خطأ: divs.map is not a function لقراءة مباشرة لمجموعة مظهرية حية`,
            right: `const divs = document.getElementsByTagName('div');
const list = Array.from(divs).map(d => d.id); // تحويل ناجح لتمكين ميثود map بالذاكرة
console.log(list);`,
            explanation: 'المتصفح يرجع مخرجات الاستعلامات التقليدية ككائنات مجردة خالية من دوال النماذج الأصلية للمصفوفات، وعملية التحويل بـ Array.from تمنحها تلك الصلاحية الهيكلية.'
        },
        thinkingWay: 'استخدم Array.from() كخطوة تصفية وقائية إلزامية على مخرجات الاستعلامات القديمة والـ HTMLCollections قبل محاولة تصفيتها أو معالجة حقولها بالتكرارات الحديثة.',
        relatedMethods: ['document-get-elements-by-tag-name', 'document-query-selector-all'],
        keywords: ['Array.from', 'HTMLCollection conversion', 'NodeList convert', 'array-like', 'DOM collection array']
    },
    {
        id: 'document-query-selector',
        name: 'document.querySelector()',
        shortDescription: 'استهداف أول عنصر يطابق محدد الـ CSS الممرر كمعامل بدقة تامة.',
        longDescription: 'تعتبر الواجهة المعاصرة الأكثر مرونة للوصول لعناصر الـ DOM؛ حيث تقبل استلام محدد CSS كامل ومعقد (مثل كلاسات، معرفات، خصائص، تداخلات)، وتقوم بمسح المستند وإرجاع أول عنصر يطابق هذا المحدد بالكامل، أو ترجع null.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// استهداف الفقرة النصية التي تحمل الفئة paragraph بالصفحة
const selector = document.querySelector('.paragraph');
console.log(selector);`
        ],
        expectedOutput: [
            "(طباعة كائن الـ Element المكتشف المتوافق بالـ Console أو null)"
        ],
        professionalTips: 'هذه الدالة توفر مرونة كاملة لمحاكاة قواعد تصفية CSS؛ تذكر أنها ترجع أول عنصر مطابق فقط حتى لو كان هناك عشرات العناصر المتطابقة بالصفحة. إذا أردت جلب الجميع، فاستعن بـ querySelectorAll.',
        commonMistakes: {
            wrong: `// نسيان كتابة نقطة الكلاس (.) أو رمز المعرف (#) داخل المحدد النصي
const btn = document.querySelector('btn-submit'); // خطأ: سيبحث عن وسم HTML اسمه <btn-submit> وقد يفشل!`,
            right: `// استخدام قواعد صياغة محددات الـ CSS بدقة كاملة بالمتصفح
const btn = document.querySelector('.btn-submit'); // يبحث عن كلاس بنجاح
const form = document.querySelector('#register-form'); // يبحث عن معرف بنجاح`,
            explanation: 'تقرأ الدالة المعامل كمحدد CSS حرفي تماماً؛ غياب علامات الفئات (.) والمعرفات (#) يجبر المتصفح على تفسير المدخل كوسم HTML افتراضي.'
        },
        thinkingWay: 'اجعل querySelector خيارك الافتراضي والأول دائماً عند الحاجة للوصول السريع لعناصر واجهة المستخدم بناءً على علاقاتها وسلوكياتها التنسيقية بملفات الـ CSS.',
        relatedMethods: ['document-query-selector-all', 'document-get-element-by-id'],
        keywords: ['querySelector', 'CSS selector DOM', 'target element', 'modern DOM selector', 'single element query']
    },
    {
        id: 'document-query-selector-all',
        name: 'document.querySelectorAll()',
        shortDescription: 'استهداف وتجميع كافة عناصر الصفحة التي تطابق محدد الـ CSS الممرر كمعامل.',
        longDescription: 'تقوم الدالة بالبحث الشامل في كامل المستند وتجميع كافة عناصر الـ DOM التي تتوافق مع محدد الـ CSS الممرر، وترجعها داخل مصفوفة ساكنة مدمجة من نوع NodeList تدعم التكرار المباشر بـ forEach وتوفر أداء متميزاً.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// استهداف جميع الفقرات النصية والتكرار عليها لطباعتها بالكونسول
const allSelector = document.querySelectorAll('p');
allSelector.forEach(element => {
  console.log(element);
});`
        ],
        expectedOutput: [
            "(طباعة وتتبع كتل كافة عناصر فقرات p المتواجدة بالمستند بالتكرار بنجاح)"
        ],
        professionalTips: 'على عكس HTMLCollection، ترجع هذه الدالة كائن NodeList ساكن (Static) لا يتأثر أداؤه ديناميكياً بالتعديلات اللاحقة للـ DOM، والأهم من ذلك أنه يدعم استخدام ميثود .forEach() المباشرة لتسهيل التكرار دون عمليات تحويل مسبقة.',
        commonMistakes: {
            wrong: `const cards = document.querySelectorAll('.card');
// محاولة إضافة حدث نقر تفاعلي مباشر للمجموعة بالكامل دفعة واحدة
cards.addEventListener('click', () => console.log('نقر')); // خطأ فادح: TypeError: cards.addEventListener is not a function`,
            right: `const cards = document.querySelectorAll('.card');
// التكرار السليم وإضافة مستمع الأحداث لكل بطاقة بشكل مستقل وآمن
cards.forEach(card => {
  card.addEventListener('click', () => console.log('تم النقر بنجاح'));
});`,
            explanation: 'الدالة querySelectorAll ترجع مجموعة عناصر (NodeList) مدمجة بالذاكرة؛ وهذا الكائن الحاوي لا يملك دالة addEventListener الفردية والخاصة ببيئة عناصر DOM المستقلة.'
        },
        thinkingWay: 'استخدم querySelectorAll() عندما تريد معالجة أو تهيئة تفاعلية جماعية لمجموعة من العناصر المتطابقة البنية (مثل كروت المنتجات، أزرار المعارض، أو الروابط المترابطة).',
        relatedMethods: ['document-query-selector', 'array-from-dom'],
        keywords: ['querySelectorAll', 'NodeList', 'CSS selectors query', 'batch DOM selection', 'forEach DOM']
    },
    {
        id: 'document-body',
        name: 'document.body',
        shortDescription: 'الوصول المباشر والفوري لعنصر هيكل الصفحة الرئيسي <body>.',
        longDescription: 'خاصية قراءة وكتابة تابعة لكائن المستند الرئيسي (document)؛ تمثل البوابة المباشرة بالذاكرة للوصول والتعديل على العنصر الحاضن لكامل محتويات صفحة الويب المرئية <body> دون الحاجة لإجراء استعلامات مسح للـ DOM.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// الوصول المباشر لجسم الصفحة وحقن وسم العنوان في مقدمته كلياً
const newElement = document.createElement('h1');
newElement.textContent = 'العنوان المطور';
document.body.prepend(newElement);`
        ],
        expectedOutput: [
            "(حقن وسم العنوان مباشرة في مقدمة صفحة الويب بنجاح وبشكل مرئي للزوار)"
        ],
        professionalTips: 'استخدم document.body للوصول السريع عندما ترغب في تعديل الخصائص العالمية للصفحة (مثل تبديل فئات الأنماط المظلمة والمضيئة لكامل المستند، أو حقن النوافذ المنبثقة الشاملة Modals بأسفل الصفحة مباشرة).',
        commonMistakes: {
            wrong: `// محاولة قراءة وتعديل الـ body قبل تحميل المستند كلياً بملف الـ HTML
// (إذا تم تشغيل السكربت بالـ <head> دون تأمين التحميل)
document.body.style.backgroundColor = 'black'; // خطأ: TypeError: Cannot read properties of null (reading 'style')`,
            right: `// استخدام مستمع التحميل أو تأمين السكربت بـ defer لضمان جاهزية الـ body بالذاكرة
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.backgroundColor = 'black'; // يعمل بأمان واستقرار
});`,
            explanation: 'إذا تسرع المتصفح في قراءة وتفصيل كود جافا سكريبت قبل الانتهاء من فك وسم <body>، فإنه يرجع القيمة null للمتغير لعدم وجود مرجع هيكلي له بالذاكرة بعد.'
        },
        thinkingWay: 'استخدم document.body كمدخل أساسي وحاسم للعمليات والتغييرات التصميمية الشاملة التي تمس كامل النطاق المرئي للمستند.',
        relatedMethods: ['document-query-selector'],
        keywords: ['document.body', 'body element', 'DOM body', 'global styles', 'HTML body injection']
    },
    {
        id: 'document-document-element',
        name: 'document.documentElement',
        shortDescription: 'الوصول المباشر إلى عنصر <html> الجذر في المستند.',
        longDescription: 'خاصية تُرجع عنصر <html> الذي يمثل الجذر الحقيقي لشجرة DOM. تُستخدم كثيراً للتحكم بالثيمات، ومتغيرات CSS، واتجاه الصفحة، والخصائص العامة التي تؤثر على كامل الموقع.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تفعيل الوضع الليلي
document.documentElement.classList.add('dark');`
        ],
        expectedOutput: [
            '(سيتم إضافة الصنف "dark" إلى عنصر <html>.)'
        ],
        professionalTips: 'تعتمد أغلب المكتبات الحديثة مثل Tailwind CSS وFlowbite على document.documentElement لتفعيل الوضع الليلي أو تغيير السمات العامة للموقع.',
        commonMistakes: {
            wrong: `// تعديل body بدلاً من html
document.body.classList.add('dark');`,
            right: `// تعديل عنصر html مباشرة
document.documentElement.classList.add('dark');`,
            explanation: 'تُطبَّق كثير من الأنظمة الحديثة الثيمات على عنصر <html> وليس <body> لضمان تأثيرها على كامل الصفحة.'
        },
        thinkingWay: 'استخدم document.documentElement عندما تريد التحكم بالخصائص العامة للموقع مثل الثيم، واتجاه الصفحة، ومتغيرات CSS العالمية.',
        relatedMethods: [
            'document-body'
        ],
        keywords: [
            'document.documentElement',
            'html',
            'root element',
            'DOM',
            'document'
        ]
    },
    {
        id: 'element-children',
        name: 'element.children',
        shortDescription: 'الوصول إلى جميع العناصر الأبناء (Elements) المباشرة التابعة لعنصر محدد.',
        longDescription: 'خاصية تُرجع مجموعة حية (Live HTMLCollection) تحتوي على جميع العناصر الأبناء المباشرة للعنصر الحالي، مع تجاهل العقد النصية (Text Nodes) والتعليقات (Comments). يتم تحديث هذه المجموعة تلقائياً عند إضافة أو إزالة أي عنصر ابن من شجرة الـ DOM.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تمييز جميع بطاقات المنتجات الموجودة داخل الحاوية
const products = document.getElementById('products');

for (const card of products.children) {
    card.classList.add('active');
}`
        ],
        expectedOutput: [
            '(سيتم إضافة الصنف "active" إلى جميع العناصر الأبناء المباشرة داخل العنصر ذي المعرّف "products".)'
        ],
        professionalTips: 'تعيد الخاصية children العناصر الأبناء فقط (Elements)، ولا تتضمن العقد النصية أو التعليقات. إذا كنت تحتاج للوصول إلى جميع العقد الموجودة داخل العنصر، فاستخدم الخاصية childNodes بدلاً منها.',
        commonMistakes: {
            wrong: `// الاعتقاد بأن children تتضمن النصوص الموجودة داخل العنصر
const container = document.getElementById('products');

console.log(container.children);`,
            right: `// children تُرجع عناصر HTML فقط
const container = document.getElementById('products');

for (const element of container.children) {
    console.log(element);
}`,
            explanation: 'الخاصية children تتعامل مع عناصر HTML فقط، لذلك لن تظهر النصوص أو التعليقات الموجودة داخل العنصر. للوصول إلى جميع العقد استخدم childNodes.'
        },
        thinkingWay: 'استخدم children عندما ترغب في التعامل مع العناصر الأبناء المباشرة فقط، مثل بطاقات المنتجات أو عناصر القائمة أو صفوف الجدول، دون الحاجة إلى المرور على العقد النصية أو كتابة محددات CSS إضافية.',
        relatedMethods: [
            'element-child-nodes',
            'element-first-element-child',
            'element-last-element-child',
            'document-query-selector-all'
        ],
        keywords: [
            'children',
            'HTMLCollection',
            'child elements',
            'DOM children',
            'Element.children',
            'direct children'
        ]
    },
    {
        id: 'element-child-nodes',
        name: 'element.childNodes',
        shortDescription: 'الوصول إلى جميع العقد (Nodes) المباشرة التابعة لعنصر محدد.',
        longDescription: 'خاصية تُرجع مجموعة حية (Live NodeList) تحتوي على جميع العقد المباشرة داخل العنصر، بما في ذلك عناصر HTML والعقد النصية (Text Nodes) والتعليقات (Comments). يتم تحديث هذه المجموعة تلقائياً عند حدوث أي تغيير داخل العنصر.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// عرض جميع العقد الموجودة داخل الحاوية
const container = document.getElementById('container');

for (const node of container.childNodes) {
    console.log(node);
}`
        ],
        expectedOutput: [
            '(سيتم عرض جميع العقد داخل العنصر، بما في ذلك العناصر والنصوص والتعليقات إن وُجدت.)'
        ],
        professionalTips: 'استخدم childNodes عندما تحتاج إلى التعامل مع جميع أنواع العقد داخل العنصر، وليس عناصر HTML فقط. إذا كنت تريد العناصر فقط، فاستخدم الخاصية children.',
        commonMistakes: {
            wrong: `// الاعتقاد بأن childNodes تُرجع عناصر HTML فقط
const container = document.getElementById('container');

console.log(container.childNodes[0].classList);`,
            right: `// التحقق من نوع العقدة قبل التعامل معها
const container = document.getElementById('container');

for (const node of container.childNodes) {
    if (node.nodeType === Node.ELEMENT_NODE) {
        console.log(node.classList);
    }
}`,
            explanation: 'قد تحتوي childNodes على عقد نصية أو تعليقات، لذلك ليس كل عنصر داخلها يمتلك خصائص عناصر HTML مثل classList.'
        },
        thinkingWay: 'اختر childNodes عندما يهمك كل ما يحتويه العنصر، سواء كان عناصر HTML أو نصوصاً أو تعليقات، أما في أغلب واجهات المستخدم فإن children يكون الخيار الأنسب.',
        relatedMethods: [
            'element-children',
            'element-first-child',
            'element-last-child'
        ],
        keywords: [
            'childNodes',
            'NodeList',
            'DOM nodes',
            'child nodes',
            'text nodes',
            'Element.childNodes'
        ]
    },
    {
        id: 'element-first-element-child',
        name: 'element.firstElementChild',
        shortDescription: 'الوصول إلى أول عنصر ابن (Element) مباشر داخل عنصر محدد.',
        longDescription: 'خاصية تُرجع أول عنصر HTML ابن مباشر للعنصر الحالي، مع تجاهل العقد النصية (Text Nodes) والتعليقات (Comments). إذا لم يحتوِ العنصر على أي أبناء من نوع Element، فستُرجع القيمة null.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تمييز أول بطاقة داخل قائمة المنتجات
const products = document.getElementById('products');

products.firstElementChild.classList.add('featured');`
        ],
        expectedOutput: [
            '(سيتم إضافة الصنف "featured" إلى أول عنصر ابن داخل الحاوية "products".)'
        ],
        professionalTips: 'تُعد firstElementChild الطريقة الأسرع والأوضح للوصول إلى أول عنصر HTML مباشر دون الحاجة لاستخدام children[0] أو كتابة محددات CSS إضافية.',
        commonMistakes: {
            wrong: `// استخدام firstChild عند الحاجة لأول عنصر HTML
const products = document.getElementById('products');

products.firstChild.classList.add('featured');`,
            right: `// استخدام firstElementChild للوصول لأول عنصر HTML
const products = document.getElementById('products');

products.firstElementChild.classList.add('featured');`,
            explanation: 'الخاصية firstChild قد تُرجع عقدة نصية أو تعليقاً، بينما firstElementChild تتجاهل كل ذلك وتُرجع أول عنصر HTML فقط.'
        },
        thinkingWay: 'استخدم firstElementChild عندما تحتاج إلى التعامل مع أول عنصر مباشر داخل حاوية، مثل أول بطاقة أو أول عنصر قائمة، دون القلق من وجود مسافات أو نصوص داخل الـ HTML.',
        relatedMethods: [
            'element-last-element-child',
            'element-first-child',
            'element-children'
        ],
        keywords: [
            'firstElementChild',
            'first child element',
            'DOM',
            'Element',
            'HTML element',
            'child element'
        ]
    },
    {
        id: 'element-last-element-child',
        name: 'element.lastElementChild',
        shortDescription: 'الوصول إلى آخر عنصر ابن (Element) مباشر داخل عنصر محدد.',
        longDescription: 'خاصية تُرجع آخر عنصر HTML ابن مباشر للعنصر الحالي، مع تجاهل العقد النصية (Text Nodes) والتعليقات (Comments). إذا لم يحتوِ العنصر على أي أبناء من نوع Element، فستُرجع القيمة null.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تمييز آخر بطاقة داخل قائمة المنتجات
const products = document.getElementById('products');

products.lastElementChild.classList.add('featured');`
        ],
        expectedOutput: [
            '(سيتم إضافة الصنف "featured" إلى آخر عنصر ابن داخل الحاوية "products".)'
        ],
        professionalTips: 'تُعد lastElementChild الطريقة الأبسط والأكثر وضوحاً للوصول إلى آخر عنصر HTML مباشر دون الحاجة إلى حساب عدد العناصر أو استخدام children.length - 1.',
        commonMistakes: {
            wrong: `// استخدام lastChild عند الحاجة لآخر عنصر HTML
const products = document.getElementById('products');

products.lastChild.classList.add('featured');`,
            right: `// استخدام lastElementChild للوصول لآخر عنصر HTML
const products = document.getElementById('products');

products.lastElementChild.classList.add('featured');`,
            explanation: 'الخاصية lastChild قد تُرجع عقدة نصية أو تعليقاً، بينما lastElementChild تُرجع آخر عنصر HTML فقط، متجاهلةً جميع أنواع العقد الأخرى.'
        },
        thinkingWay: 'استخدم lastElementChild عندما تحتاج إلى التعامل مع آخر عنصر مباشر داخل حاوية، مثل آخر رسالة في المحادثة أو آخر بطاقة أو آخر عنصر قائمة، دون التأثر بالمسافات أو النصوص الموجودة داخل العنصر.',
        relatedMethods: [
            'element-first-element-child',
            'element-last-child',
            'element-children'
        ],
        keywords: [
            'lastElementChild',
            'last child element',
            'DOM',
            'Element',
            'HTML element',
            'child element'
        ]
    },
    {
        id: 'element-next-element-sibling',
        name: 'element.nextElementSibling',
        shortDescription: 'الوصول إلى العنصر الشقيق (Sibling) التالي مباشرةً للعنصر الحالي.',
        longDescription: 'خاصية تُرجع أول عنصر HTML شقيق يأتي مباشرة بعد العنصر الحالي ضمن نفس العنصر الأب، مع تجاهل العقد النصية (Text Nodes) والتعليقات (Comments). إذا لم يكن هناك عنصر شقيق تالٍ، فستُرجع القيمة null.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تمييز البطاقة التالية مباشرةً للبطاقة الحالية
const currentCard = document.getElementById('card-2');

currentCard.nextElementSibling.classList.add('active');`
        ],
        expectedOutput: [
            '(سيتم إضافة الصنف "active" إلى البطاقة التالية مباشرةً للبطاقة الحالية.)'
        ],
        professionalTips: 'تُستخدم nextElementSibling للتنقل بين عناصر HTML المتجاورة دون الحاجة إلى البحث داخل الـ DOM أو استخدام محددات CSS، كما أنها تتجاهل العقد النصية والتعليقات تلقائياً.',
        commonMistakes: {
            wrong: `// استخدام nextSibling عند الحاجة للعنصر التالي
const currentCard = document.getElementById('card-2');

currentCard.nextSibling.classList.add('active');`,
            right: `// استخدام nextElementSibling للوصول للعنصر التالي
const currentCard = document.getElementById('card-2');

currentCard.nextElementSibling.classList.add('active');`,
            explanation: 'الخاصية nextSibling قد تُرجع عقدة نصية ناتجة عن المسافات أو الأسطر داخل HTML، بينما nextElementSibling تُرجع العنصر التالي من نوع HTML فقط.'
        },
        thinkingWay: 'استخدم nextElementSibling عندما تريد الانتقال إلى العنصر المجاور مباشرةً، مثل التنقل بين بطاقات المنتجات أو عناصر القائمة أو صفوف الجدول، دون التأثر بالنصوص أو التعليقات الموجودة في الصفحة.',
        relatedMethods: [
            'element-previous-element-sibling',
            'element-next-sibling',
            'element-parent-element'
        ],
        keywords: [
            'nextElementSibling',
            'next sibling',
            'sibling element',
            'DOM traversal',
            'Element',
            'HTML element'
        ]
    },
    {
        id: 'element-previous-element-sibling',
        name: 'element.previousElementSibling',
        shortDescription: 'الوصول إلى العنصر الشقيق (Sibling) السابق مباشرةً للعنصر الحالي.',
        longDescription: 'خاصية تُرجع أول عنصر HTML شقيق يسبق العنصر الحالي مباشرةً ضمن نفس العنصر الأب، مع تجاهل العقد النصية (Text Nodes) والتعليقات (Comments). إذا لم يكن هناك عنصر شقيق سابق، فستُرجع القيمة null.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تمييز البطاقة السابقة مباشرةً للبطاقة الحالية
const currentCard = document.getElementById('card-3');

currentCard.previousElementSibling.classList.add('active');`
        ],
        expectedOutput: [
            '(سيتم إضافة الصنف "active" إلى البطاقة السابقة مباشرةً للبطاقة الحالية.)'
        ],
        professionalTips: 'تُستخدم previousElementSibling للتنقل بين العناصر المتجاورة داخل نفس العنصر الأب دون الحاجة إلى البحث داخل الـ DOM، كما أنها تتجاهل العقد النصية والتعليقات تلقائياً.',
        commonMistakes: {
            wrong: `// استخدام previousSibling عند الحاجة للعنصر السابق
const currentCard = document.getElementById('card-3');

currentCard.previousSibling.classList.add('active');`,
            right: `// استخدام previousElementSibling للوصول للعنصر السابق
const currentCard = document.getElementById('card-3');

currentCard.previousElementSibling.classList.add('active');`,
            explanation: 'الخاصية previousSibling قد تُرجع عقدة نصية بسبب المسافات أو الأسطر داخل HTML، بينما previousElementSibling تُرجع العنصر السابق من نوع HTML فقط.'
        },
        thinkingWay: 'استخدم previousElementSibling عندما تحتاج إلى الانتقال للعنصر السابق مباشرةً، مثل الرجوع إلى البطاقة السابقة أو عنصر القائمة السابق، دون القلق من وجود عقد نصية داخل الصفحة.',
        relatedMethods: [
            'element-next-element-sibling',
            'element-previous-sibling',
            'element-parent-element'
        ],
        keywords: [
            'previousElementSibling',
            'previous sibling',
            'sibling element',
            'DOM traversal',
            'Element',
            'HTML element'
        ]
    },
    {
        id: 'element-parent-element',
        name: 'Element.parentElement',
        shortDescription: 'الوصول إلى العنصر الأب (Parent Element) المباشر للعنصر الحالي.',
        longDescription: 'خاصية تُرجع العنصر الأب المباشر (Parent Element) الذي يحتوي على العنصر الحالي داخل شجرة الـ DOM. إذا لم يكن للعنصر أب من نوع Element، فستُرجع القيمة null.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// إضافة إطار حول العنصر الأب المباشر
const title = document.getElementById('title');

title.parentElement.classList.add('highlight');`
        ],
        expectedOutput: [
            '(سيتم إضافة الصنف "highlight" إلى العنصر الأب المباشر الذي يحتوي على العنصر "title".)'
        ],
        professionalTips: 'تُستخدم parentElement عندما تحتاج إلى التعامل مع الحاوية المباشرة للعنصر، وهي تُرجع عناصر HTML فقط. إذا كنت تحتاج إلى جميع أنواع العقد، فاستخدم parentNode.',
        commonMistakes: {
            wrong: `// استخدام parentNode مع افتراض أنه يُرجع دائماً عنصر HTML
const title = document.getElementById('title');

title.parentNode.classList.add('highlight');`,
            right: `// استخدام parentElement للوصول إلى العنصر الأب
const title = document.getElementById('title');

title.parentElement.classList.add('highlight');`,
            explanation: 'قد تُرجع parentNode عقدة ليست من نوع Element في بعض الحالات، بينما parentElement تضمن إرجاع عنصر HTML أو القيمة null.'
        },
        thinkingWay: 'استخدم parentElement عندما تريد الانتقال من عنصر إلى الحاوية التي تحتويه مباشرةً، مثل الوصول إلى البطاقة التي يوجد بداخلها زر أو حقل إدخال لإجراء تعديلات عليها.',
        relatedMethods: [
            'element-parent-node',
            'element-children',
            'element-first-element-child'
        ],
        keywords: [
            'parentElement',
            'parent',
            'DOM traversal',
            'parent element',
            'Element',
            'HTML element'
        ]
    },
    {
        id: 'document-images',
        name: 'document.images',
        shortDescription: 'خاصية مدمجة تُرجع قائمة حية بكافة كتل الصور العلامية المتواجدة بصفحة الويب.',
        longDescription: 'خاصية قراءة مدمجة تتبع كائن المستند؛ ترجع قائمة من نوع HTMLCollection تشتمل على جميع وسوم الصور <img> المدرجة بالهيكل البرمجي الحالي وتتيح استهدافها وتتبع خصائصها بالتتابع وبكفاءة وسرعة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// استهداف كافة صور الصفحة وقراءة طول المجموعة النشط بالذاكرة
const allImg = document.images;
console.log('إجمالي عدد الصور المكتشفة بصفحتك الحالية:', allImg.length);`
        ],
        expectedOutput: [
            "إجمالي عدد الصور المكتشفة بصفحتك الحالية: (العدد الفعلي للصور بالـ DOM)"
        ],
        professionalTips: 'بما أن القائمة المرتجعة حية ومحدثة باستمرار، يمكنك تتبعها ديناميكياً لاستبدال مسارات الصور التالفة، أو تفعيل تحميلها الكسول (Lazy Loading) تفاعلياً عند تحويلها لمصفوفة حقيقية.',
        commonMistakes: {
            wrong: `const imgs = document.images;
const srcList = imgs.map(img => img.src); // خطأ مباشر: TypeError: imgs.map is not a function`,
            right: `const imgs = document.images;
const srcList = Array.from(imgs).map(img => img.src); // التحويل السليم لتمكين دالة map بالذاكرة
console.log(srcList);`,
            explanation: 'المجموعات الحية HTMLCollection تقتصر ميزاتها على القراءات الرقمية للفهارس وتفتقر للخصائص الأساسية المتقدمة لـ Array.prototype.'
        },
        thinkingWay: 'استخدم document.images كخيار سريع ونظيف لإخضاع كافة صور الصفحة لعمليات التدقيق والتحكم الجماعية (مثل حمايتها، تتبع استقرارها، أو تعديل المسارات الجانبية للصور التالفة بضغطة واحدة).',
        relatedMethods: ['array-from-dom'],
        keywords: ['document.images', 'images collection', 'image element', 'batch images check', 'BOM images']
    }
];