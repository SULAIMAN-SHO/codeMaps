export const manipulationData = [
    {
        id: 'document-create-element',
        name: 'document.createElement()',
        shortDescription: 'إنشاء عنصر HTML جديد برمجياً دون إضافته مباشرةً إلى الصفحة.',
        longDescription: 'دالة تُستخدم لإنشاء عنصر HTML جديد في الذاكرة (Memory) اعتماداً على اسم الوسم (Tag Name). بعد إنشائه يمكنك تعديل خصائصه وإضافة محتواه وربطه بالأحداث، ثم إدراجه في شجرة الـ DOM باستخدام إحدى دوال الإدراج مثل append() أو prepend() أو before() أو after().',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// إنشاء زر جديد وإضافته إلى الصفحة
const button = document.createElement('button');

button.textContent = 'تحميل المزيد';

document.body.append(button);`
        ],
        expectedOutput: [
            '(سيتم إنشاء زر جديد يحمل النص "تحميل المزيد" وإضافته في نهاية الصفحة.)'
        ],
        professionalTips: 'إنشاء العنصر بواسطة createElement لا يجعله يظهر في الصفحة مباشرة، بل يبقى داخل الذاكرة حتى تقوم بإدراجه في شجرة الـ DOM باستخدام إحدى دوال الإدراج المناسبة.',
        commonMistakes: {
            wrong: `// إنشاء العنصر دون إضافته إلى الصفحة
const button = document.createElement('button');

button.textContent = 'تحميل المزيد';`,
            right: `// إنشاء العنصر ثم إدراجه داخل الصفحة
const button = document.createElement('button');

button.textContent = 'تحميل المزيد';

document.body.append(button);`,
            explanation: 'تقوم createElement بإنشاء العنصر فقط، لكنها لا تضيفه إلى الصفحة. يجب استخدام إحدى دوال الإدراج مثل append() أو prepend() حتى يصبح العنصر مرئياً.'
        },
        thinkingWay: 'استخدم createElement عندما تحتاج إلى إنشاء عناصر ديناميكياً أثناء تشغيل التطبيق، مثل بطاقات المنتجات، التعليقات، الإشعارات، أو الأزرار التي تُنشأ استجابةً لتفاعل المستخدم.',
        relatedMethods: [
            'element-append',
            'element-prepend',
            'element-before',
            'element-after'
        ],
        keywords: [
            'createElement',
            'DOM',
            'HTML element',
            'create node',
            'dynamic element',
            'document'
        ]
    },
    {
        id: 'element-append',
        name: 'element.append()',
        shortDescription: 'إضافة عنصر أو نص في نهاية العناصر الأبناء داخل عنصر محدد.',
        longDescription: 'دالة تُستخدم لإدراج عنصر HTML أو نص عادي في نهاية محتوى العنصر الحالي. يمكنها استقبال عنصر واحد أو عدة عناصر ونصوص في نفس الاستدعاء، وتضيفها جميعاً بالترتيب داخل شجرة الـ DOM.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// إنشاء بطاقة جديدة وإضافتها في نهاية قائمة المنتجات
const products = document.getElementById('products');

const card = document.createElement('div');
card.textContent = 'New Product';

products.append(card);`
        ],
        expectedOutput: [
            '(سيتم إضافة البطاقة الجديدة كآخر عنصر داخل الحاوية "products".)'
        ],
        professionalTips: 'تتميز append بأنها تستطيع إضافة عناصر HTML ونصوص عادية في نفس الوقت، كما أنها لا تُعيد إنشاء محتوى العنصر مثل innerHTML، مما يحافظ على الأداء ومستمعات الأحداث (Event Listeners).',
        commonMistakes: {
            wrong: `// توقع أن append تُرجع العنصر المُضاف
const card = document.createElement('div');

const result = document.body.append(card);

console.log(result);`,
            right: `// استخدام append لإضافة العنصر فقط
const card = document.createElement('div');

document.body.append(card);`,
            explanation: 'الدالة append لا تُرجع العنصر الذي تمت إضافته، بل تُرجع undefined لأنها مخصصة لتنفيذ عملية الإدراج فقط.'
        },
        thinkingWay: 'استخدم append عندما تريد إضافة عناصر جديدة في نهاية الحاوية، مثل إضافة تعليق جديد، بطاقة منتج، رسالة دردشة، أو عنصر قائمة دون التأثير على المحتوى الموجود.',
        relatedMethods: [
            'document-create-element',
            'element-prepend',
            'element-before',
            'element-after'
        ],
        keywords: [
            'append',
            'append child',
            'DOM',
            'insert element',
            'HTML element',
            'Element'
        ]
    },
    {
        id: 'element-prepend',
        name: 'element.prepend()',
        shortDescription: 'إضافة عنصر أو نص في بداية العناصر الأبناء داخل عنصر محدد.',
        longDescription: 'دالة تُستخدم لإدراج عنصر HTML أو نص عادي في بداية محتوى العنصر الحالي. يمكنها استقبال عنصر واحد أو عدة عناصر ونصوص في نفس الاستدعاء، وتضعها قبل جميع العناصر الأبناء الموجودة داخل شجرة الـ DOM.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// إنشاء إشعار جديد وإضافته في بداية قائمة الإشعارات
const notifications = document.getElementById('notifications');

const notification = document.createElement('div');
notification.textContent = 'New Notification';

notifications.prepend(notification);`
        ],
        expectedOutput: [
            '(سيتم إضافة الإشعار الجديد كأول عنصر داخل الحاوية "notifications".)'
        ],
        professionalTips: 'تُعد prepend الخيار المثالي عندما تريد ظهور العنصر الجديد في أعلى القائمة مباشرة، كما أنها لا تعيد إنشاء محتوى العنصر وتحافظ على مستمعات الأحداث (Event Listeners).',
        commonMistakes: {
            wrong: `// محاولة استخدام prepend على عنصر غير موجود
const container = document.getElementById('notifications');

const item = document.createElement('div');

container.prepend(item);`,
            right: `// التأكد من وجود العنصر قبل الإدراج
const container = document.getElementById('notifications');

if (container) {
    const item = document.createElement('div');
    container.prepend(item);
}`,
            explanation: 'إذا كانت قيمة العنصر null فلن تتمكن من استدعاء prepend عليه، وسيؤدي ذلك إلى ظهور خطأ أثناء التنفيذ.'
        },
        thinkingWay: 'استخدم prepend عندما تحتاج إلى عرض أحدث العناصر أولاً، مثل الإشعارات، الرسائل الجديدة، أو آخر الأخبار، بحيث تظهر في بداية الحاوية مباشرة.',
        relatedMethods: [
            'document-create-element',
            'element-append',
            'element-before',
            'element-after'
        ],
        keywords: [
            'prepend',
            'DOM',
            'insert element',
            'HTML element',
            'prepend child',
            'Element'
        ]
    },
    {
        id: 'element-before',
        name: 'element.before()',
        shortDescription: 'إدراج عنصر أو نص مباشرةً قبل العنصر الحالي داخل نفس العنصر الأب.',
        longDescription: 'دالة تُستخدم لإضافة عنصر HTML أو نص عادي قبل العنصر الحالي مباشرةً، دون إدراجه داخل العنصر نفسه. يمكنها استقبال عنصر واحد أو عدة عناصر ونصوص، وتُدرجها جميعاً بالترتيب داخل شجرة الـ DOM.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// إنشاء عنوان وإضافته قبل قسم المنتجات
const products = document.getElementById('products');

const title = document.createElement('h2');
title.textContent = 'Latest Products';

products.before(title);`
        ],
        expectedOutput: [
            '(سيتم إدراج العنوان الجديد مباشرةً قبل العنصر "products".)'
        ],
        professionalTips: 'تستخدم before عندما ترغب في إضافة عنصر مجاور قبل العنصر الحالي، وليس كعنصر ابن داخله، مما يجعلها مناسبة لإدراج العناوين أو الفواصل أو الرسائل التوضيحية.',
        commonMistakes: {
            wrong: `// الاعتقاد بأن before تضيف العنصر داخل الحاوية
const products = document.getElementById('products');

const title = document.createElement('h2');

products.before(title);`,
            right: `// before تضيف العنصر قبل الحاوية نفسها
const products = document.getElementById('products');

const title = document.createElement('h2');
title.textContent = 'Latest Products';

products.before(title);`,
            explanation: 'الدالة before لا تضيف العنصر داخل العنصر الحالي، بل تضعه قبله مباشرةً ليصبحا عنصرين شقيقين (Siblings) داخل نفس العنصر الأب.'
        },
        thinkingWay: 'استخدم before عندما تحتاج إلى إدراج عنصر يسبق عنصراً موجوداً بالفعل، مثل عنوان لقسم، أو رسالة تنبيه، أو فاصل مرئي، دون تعديل محتوى العنصر نفسه.',
        relatedMethods: [
            'document-create-element',
            'element-after',
            'element-append',
            'element-prepend'
        ],
        keywords: [
            'before',
            'DOM',
            'insert before',
            'sibling',
            'HTML element',
            'Element'
        ]
    },
    {
        id: 'element-after',
        name: 'element.after()',
        shortDescription: 'إدراج عنصر أو نص مباشرةً بعد العنصر الحالي داخل نفس العنصر الأب.',
        longDescription: 'دالة تُستخدم لإضافة عنصر HTML أو نص عادي بعد العنصر الحالي مباشرةً، دون إدراجه داخل العنصر نفسه. يمكنها استقبال عنصر واحد أو عدة عناصر ونصوص، وتُدرجها جميعاً بالترتيب داخل شجرة الـ DOM.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// إنشاء رسالة وإضافتها بعد نموذج تسجيل الدخول
const loginForm = document.getElementById('loginForm');

const message = document.createElement('p');
message.textContent = 'تم إرسال البيانات بنجاح.';

loginForm.after(message);`
        ],
        expectedOutput: [
            '(سيتم إدراج الرسالة مباشرةً بعد العنصر "loginForm".)'
        ],
        professionalTips: 'تُستخدم after عندما ترغب في إضافة عنصر مجاور بعد العنصر الحالي، دون جعله أحد أبنائه. وهي مناسبة لإظهار رسائل النجاح أو الخطأ أو العناصر التوضيحية المرتبطة بعنصر معين.',
        commonMistakes: {
            wrong: `// الاعتقاد بأن after تضيف العنصر داخل النموذج
const loginForm = document.getElementById('loginForm');

const message = document.createElement('p');

loginForm.after(message);`,
            right: `// after تضيف العنصر بعد النموذج مباشرةً
const loginForm = document.getElementById('loginForm');

const message = document.createElement('p');
message.textContent = 'تم إرسال البيانات بنجاح.';

loginForm.after(message);`,
            explanation: 'الدالة after لا تضيف العنصر داخل العنصر الحالي، بل تضعه بعده مباشرةً ليصبحا عنصرين شقيقين (Siblings) داخل نفس العنصر الأب.'
        },
        thinkingWay: 'استخدم after عندما تحتاج إلى إدراج عنصر يأتي مباشرةً بعد عنصر موجود، مثل رسالة نجاح أسفل نموذج، أو وصف بعد صورة، أو عنصر إضافي مرتبط بعنصر معين دون تعديل محتواه.',
        relatedMethods: [
            'document-create-element',
            'element-before',
            'element-append',
            'element-prepend'
        ],
        keywords: [
            'after',
            'DOM',
            'insert after',
            'sibling',
            'HTML element',
            'Element'
        ]
    },
    {
        id: 'element-insert-adjacent-html',
        name: 'element.insertAdjacentHTML()',
        shortDescription: 'إدراج كود HTML في موضع محدد دون إعادة بناء محتوى العنصر بالكامل.',
        longDescription: 'دالة تُدرج كود HTML في أحد أربعة مواضع بالنسبة للعنصر الحالي (قبله، بعده، أو بداخله في البداية أو النهاية)، دون إعادة إنشاء جميع أبناء العنصر كما يحدث مع innerHTML، مما يجعلها أكثر كفاءة عند إضافة محتوى ديناميكي.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `// إضافة عنصر جديد في نهاية القائمة
const list = document.getElementById('products');

list.insertAdjacentHTML(
    'beforeend',
    '<li>JavaScript Course</li>'
);`
        ],
        expectedOutput: [
            '(سيتم إضافة عنصر <li> جديد في نهاية القائمة.)'
        ],
        professionalTips: 'تُعد insertAdjacentHTML الخيار الأفضل لإضافة أجزاء HTML جاهزة بسرعة، لأنها تُدرج المحتوى الجديد مباشرة دون إعادة تحليل جميع عناصر العنصر الأب.',
        commonMistakes: {
            wrong: `// إعادة إنشاء جميع أبناء العنصر
list.innerHTML += '<li>JavaScript Course</li>';`,
            right: `// إدراج العنصر الجديد مباشرة
list.insertAdjacentHTML(
    'beforeend',
    '<li>JavaScript Course</li>'
);`,
            explanation: 'يؤدي استخدام innerHTML إلى إعادة تحليل وإعادة إنشاء جميع محتويات العنصر، بينما تضيف insertAdjacentHTML المحتوى الجديد فقط، مما يحافظ على الأداء ويقلل العمليات غير الضرورية.'
        },
        thinkingWay: 'استخدم insertAdjacentHTML عندما تحتاج إلى إضافة عناصر HTML جاهزة بسرعة وكفاءة، مثل البطاقات، والقوائم، ونتائج البحث، دون إعادة بناء محتوى العنصر بالكامل.',
        relatedMethods: [
            'document-create-element',
            'element-append',
            'element-prepend'
        ],
        keywords: [
            'insertAdjacentHTML',
            'HTML insertion',
            'DOM',
            'dynamic HTML',
            'beforeend'
        ]
    },
    {
        id: 'element-remove',
        name: 'element.remove()',
        shortDescription: 'إزالة عنصر HTML مباشرة من شجرة DOM.',
        longDescription: 'دالة تُزيل العنصر الحالي نهائياً من شجرة DOM دون الحاجة للوصول إلى العنصر الأب. تُعد الطريقة الحديثة والموصى بها لحذف العناصر، وتستخدم بكثرة مع النوافذ المنبثقة، والإشعارات، والبطاقات، والقوائم الديناميكية.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// حذف البطاقة من الصفحة
const card = document.getElementById('productCard');

card.remove();`
        ],
        expectedOutput: [
            '(سيتم حذف العنصر من الصفحة مباشرة.)'
        ],
        professionalTips: 'استخدم remove() بدلاً من removeChild() كلما كنت تملك مرجعاً مباشراً للعنصر، فهي أبسط وأكثر وضوحاً وتُعد المعيار الحديث في JavaScript.',
        commonMistakes: {
            wrong: `// الطريقة القديمة
const parent = card.parentElement;
parent.removeChild(card);`,
            right: `// الطريقة الحديثة
card.remove();`,
            explanation: 'تتطلب removeChild() الوصول إلى العنصر الأب أولاً، بينما تحذف remove() العنصر مباشرة، مما يجعل الكود أقصر وأسهل في القراءة.'
        },
        thinkingWay: 'استخدم remove() عندما تحتاج إلى حذف عنصر بعد إجراء معين، مثل إغلاق نافذة منبثقة، أو حذف بطاقة، أو إزالة إشعار، أو التخلص من عنصر لم تعد بحاجة إليه.',
        relatedMethods: [
            'element-replace-with',
            'element-closest',
            'element-parent-element'
        ],
        keywords: [
            'remove',
            'remove element',
            'DOM',
            'delete element',
            'element.remove'
        ]
    },
    {
        id: 'element-closest',
        name: 'element.closest()',
        shortDescription: 'البحث عن أقرب عنصر أب يطابق محدداً (Selector).',
        longDescription: 'دالة تبدأ البحث من العنصر الحالي ثم تصعد تدريجياً في شجرة DOM حتى تجد أول عنصر يطابق محدد CSS، أو تُرجع null إذا لم تجد أي عنصر مطابق. تُعد من أكثر الدوال استخداماً في التطبيقات الحديثة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// الحصول على البطاقة التي يوجد بداخلها الزر
const button = document.querySelector('.delete-btn');

const card = button.closest('.card');

console.log(card);`
        ],
        expectedOutput: [
            '(سيتم عرض أقرب عنصر يحمل الصنف "card".)'
        ],
        professionalTips: 'تُستخدم closest() بكثرة مع Event Delegation للوصول إلى الحاوية أو البطاقة التي ينتمي إليها العنصر الذي تفاعل معه المستخدم.',
        commonMistakes: {
            wrong: `// البحث داخل الأبناء بدلاً من الآباء
const card = button.querySelector('.card');`,
            right: `// البحث صعوداً في شجرة DOM
const card = button.closest('.card');`,
            explanation: 'تبحث querySelector داخل أبناء العنصر، بينما تبحث closest() في العنصر الحالي ثم آبائه حتى تجد أول عنصر مطابق.'
        },
        thinkingWay: 'استخدم closest() عندما يبدأ التفاعل من عنصر داخلي وتحتاج إلى الوصول إلى الحاوية أو البطاقة أو النموذج الذي يحتويه.',
        relatedMethods: [
            'element-parent-element',
            'element-matches'
        ],
        keywords: [
            'closest',
            'DOM',
            'parent',
            'CSS selector',
            'ancestor'
        ]
    },
    {
        id: 'element-matches',
        name: 'element.matches()',
        shortDescription: 'التحقق مما إذا كان العنصر يطابق محدداً (CSS Selector).',
        longDescription: 'دالة تُرجع true أو false حسب ما إذا كان العنصر الحالي يطابق محدد CSS المعطى. تُستخدم كثيراً مع Event Delegation لاتخاذ قرارات سريعة دون الحاجة إلى البحث في شجرة DOM.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// التحقق من أن العنصر المضغوط زر حذف
document.addEventListener('click', (event) => {
    if (event.target.matches('.delete-btn')) {
        console.log('Delete Button');
    }
});`
        ],
        expectedOutput: [
            '(إذا كان العنصر المضغوط يحمل الصنف "delete-btn" ستظهر الرسالة "Delete Button".)'
        ],
        professionalTips: 'تُستخدم matches() كثيراً داخل مستمعات الأحداث للتحقق من نوع العنصر الذي أطلق الحدث دون الحاجة إلى استعلامات إضافية.',
        commonMistakes: {
            wrong: `// البحث عن العنصر من جديد
const button = document.querySelector('.delete-btn');

if (button === event.target) {
    console.log('Delete');
}`,
            right: `// التحقق مباشرة من العنصر الحالي
if (event.target.matches('.delete-btn')) {
    console.log('Delete');
}`,
            explanation: 'لا حاجة للبحث عن العنصر مرة أخرى إذا كنت تملك مرجع العنصر الحالي، فـ matches() تنفذ التحقق مباشرة.'
        },
        thinkingWay: 'استخدم matches() عندما تحتاج إلى معرفة ما إذا كان العنصر الحالي يطابق محدداً معيناً، خاصةً داخل معالجات الأحداث.',
        relatedMethods: [
            'element-closest',
            'document-query-selector'
        ],
        keywords: [
            'matches',
            'CSS selector',
            'DOM',
            'event delegation',
            'selector'
        ]
    },
    {
        id: 'element-clone-node',
        name: 'element.cloneNode()',
        shortDescription: 'إنشاء نسخة من عنصر HTML مع إمكانية نسخ جميع عناصره الداخلية.',
        longDescription: 'دالة تُنشئ نسخة جديدة من عنصر HTML الحالي. ويمكنك تحديد ما إذا كنت تريد نسخ العنصر فقط أو نسخ جميع العناصر الأبناء الموجودة بداخله، مما يجعلها مثالية لتكرار البطاقات والقوالب الديناميكية.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `// إنشاء نسخة من البطاقة
const card = document.getElementById('productCard');

const clonedCard = card.cloneNode(true);

document.body.append(clonedCard);`
        ],
        expectedOutput: [
            '(سيتم إنشاء نسخة كاملة من البطاقة وإضافتها إلى الصفحة.)'
        ],
        professionalTips: 'مرر القيمة true إذا أردت نسخ جميع العناصر الداخلية، أما false فسينسخ العنصر نفسه فقط دون أبنائه.',
        commonMistakes: {
            wrong: `// نسخ العنصر فقط
const clone = card.cloneNode();`,
            right: `// نسخ العنصر مع جميع أبنائه
const clone = card.cloneNode(true);`,
            explanation: 'القيمة الافتراضية هي false، لذلك لن يتم نسخ العناصر الداخلية إلا عند تمرير true.'
        },
        thinkingWay: 'استخدم cloneNode() عندما تحتاج إلى تكرار بطاقات أو قوالب أو عناصر جاهزة بدلاً من إنشائها من الصفر.',
        relatedMethods: [
            'document-create-element',
            'element-append',
            'element-replace-with'
        ],
        keywords: [
            'cloneNode',
            'clone',
            'DOM',
            'duplicate element',
            'HTML'
        ]
    },
    {
        id: 'element-replace-with',
        name: 'element.replaceWith()',
        shortDescription: 'استبدال عنصر HTML الحالي بعنصر أو محتوى جديد.',
        longDescription: 'دالة تستبدل العنصر الحالي بعنصر آخر أو بعدة عناصر أو حتى بنص، دون الحاجة إلى الوصول للعنصر الأب. وتُستخدم كثيراً عند تحديث أجزاء الواجهة أو استبدال العناصر ديناميكياً.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `// استبدال زر قديم بزر جديد
const oldButton = document.getElementById('oldButton');
const newButton = document.createElement('button');

newButton.textContent = 'Save';

oldButton.replaceWith(newButton);`
        ],
        expectedOutput: [
            '(سيتم استبدال الزر القديم بالزر الجديد.)'
        ],
        professionalTips: 'تُعد replaceWith() الطريقة الحديثة لاستبدال العناصر، وهي أوضح وأبسط من استخدام replaceChild().',
        commonMistakes: {
            wrong: `// استخدام الطريقة القديمة
oldButton.parentElement.replaceChild(newButton, oldButton);`,
            right: `// استخدام الطريقة الحديثة
oldButton.replaceWith(newButton);`,
            explanation: 'لا تحتاج replaceWith() إلى الوصول إلى العنصر الأب، مما يجعل الكود أقصر وأسهل في القراءة.'
        },
        thinkingWay: 'استخدم replaceWith() عندما تريد تحديث عنصر كامل بعنصر جديد، مثل استبدال زر أو بطاقة أو نموذج أثناء تشغيل التطبيق.',
        relatedMethods: [
            'element-remove',
            'element-clone-node',
            'document-create-element'
        ],
        keywords: [
            'replaceWith',
            'replace element',
            'DOM',
            'HTML',
            'element'
        ]
    },
];