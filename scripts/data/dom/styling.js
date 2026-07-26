export const stylingData = [
    {
        id: 'element-class-list-add',
        name: 'element.classList.add()',
        shortDescription: 'إضافة صنف (Class) واحد أو أكثر إلى عنصر HTML.',
        longDescription: 'دالة تُستخدم لإضافة اسم صنف (Class) أو عدة أصناف إلى العنصر الحالي. إذا كان الصنف موجوداً مسبقاً فلن تتم إضافته مرة أخرى، مما يمنع تكرار أسماء الأصناف داخل العنصر ويحافظ على نظافة قائمة الأصناف.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تفعيل حالة العنصر
const card = document.getElementById('product-card');

card.classList.add('active');`
        ],
        expectedOutput: [
            '(سيتم إضافة الصنف "active" إلى العنصر إذا لم يكن موجوداً مسبقاً.)'
        ],
        professionalTips: 'يمكنك إضافة عدة أصناف في استدعاء واحد، مثل classList.add("active", "visible", "selected")، دون الحاجة إلى استدعاء الدالة أكثر من مرة.',
        commonMistakes: {
            wrong: `// استبدال جميع الأصناف الموجودة
card.className = 'active';`,
            right: `// إضافة الصنف الجديد مع الاحتفاظ ببقية الأصناف
card.classList.add('active');`,
            explanation: 'تؤدي className إلى استبدال جميع الأصناف الموجودة على العنصر، بينما تضيف classList.add الصنف الجديد فقط دون حذف الأصناف الأخرى.'
        },
        thinkingWay: 'استخدم classList.add عندما تريد تفعيل حالة معينة للعنصر، مثل إبراز بطاقة، أو إظهار نافذة منبثقة، أو تطبيق تأثير بصري دون التأثير على الأصناف الحالية.',
        relatedMethods: [
            'element-class-list-remove',
            'element-class-list-toggle',
            'element-class-list-replace',
            'element-class-list-contains'
        ],
        keywords: [
            'classList.add',
            'add class',
            'CSS class',
            'DOM',
            'Element',
            'styling'
        ]
    },
    {
        id: 'element-class-list-remove',
        name: 'element.classList.remove()',
        shortDescription: 'إزالة صنف (Class) واحد أو أكثر من عنصر HTML.',
        longDescription: 'دالة تُستخدم لحذف اسم صنف (Class) أو عدة أصناف من العنصر الحالي. إذا لم يكن الصنف موجوداً فلن يحدث أي خطأ، وستستمر عملية التنفيذ بشكل طبيعي.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// إزالة حالة التفعيل من العنصر
const card = document.getElementById('product-card');

card.classList.remove('active');`
        ],
        expectedOutput: [
            '(سيتم إزالة الصنف "active" من العنصر إذا كان موجوداً.)'
        ],
        professionalTips: 'يمكن إزالة عدة أصناف في استدعاء واحد، مثل classList.remove("active", "visible", "selected")، مما يجعل الكود أكثر اختصاراً ووضوحاً.',
        commonMistakes: {
            wrong: `// حذف جميع الأصناف من العنصر
card.className = '';`,
            right: `// إزالة الصنف المطلوب فقط
card.classList.remove('active');`,
            explanation: 'تعيين className إلى سلسلة فارغة يؤدي إلى حذف جميع الأصناف الموجودة، بينما remove تحذف الصنف المطلوب فقط وتُبقي بقية الأصناف كما هي.'
        },
        thinkingWay: 'استخدم classList.remove عندما تحتاج إلى إنهاء حالة معينة، مثل إخفاء عنصر، أو إزالة تأثير بصري، أو إلغاء تمييز عنصر بعد انتهاء التفاعل.',
        relatedMethods: [
            'element-class-list-add',
            'element-class-list-toggle',
            'element-class-list-replace',
            'element-class-list-contains'
        ],
        keywords: [
            'classList.remove',
            'remove class',
            'CSS class',
            'DOM',
            'Element',
            'styling'
        ]
    },
    {
        id: 'element-class-list-toggle',
        name: 'element.classList.toggle()',
        shortDescription: 'إضافة أو إزالة صنف (Class) تلقائياً حسب حالته الحالية.',
        longDescription: 'دالة تُستخدم لتبديل حالة الصنف على العنصر. إذا كان الصنف موجوداً فسيتم إزالته، وإذا لم يكن موجوداً فسيتم إضافته، مما يجعلها الخيار المثالي للتبديل بين حالتين دون الحاجة إلى كتابة شروط إضافية.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تبديل حالة القائمة الجانبية
const sidebar = document.getElementById('sidebar');

sidebar.classList.toggle('open');`
        ],
        expectedOutput: [
            '(إذا كان الصنف "open" موجوداً فسيتم إزالته، وإذا لم يكن موجوداً فسيتم إضافته.)'
        ],
        professionalTips: 'تقبل toggle معاملاً اختيارياً ثانياً (true أو false) لإجبار الصنف على الإضافة أو الإزالة دون الاعتماد على حالته الحالية، وهي طريقة مفيدة عند ربط الأصناف بقيم منطقية (Boolean).',
        commonMistakes: {
            wrong: `// استخدام if لإضافة أو إزالة الصنف
if (sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
} else {
    sidebar.classList.add('open');
}`,
            right: `// تنفيذ العملية في سطر واحد
sidebar.classList.toggle('open');`,
            explanation: 'تقوم toggle بالتحقق من وجود الصنف وإضافة أو إزالته تلقائياً، مما يجعل الكود أبسط وأسهل في القراءة والصيانة.'
        },
        thinkingWay: 'استخدم classList.toggle عند إنشاء واجهات تفاعلية تعتمد على حالتين، مثل فتح وإغلاق القوائم، وإظهار وإخفاء النوافذ المنبثقة، والتبديل بين الوضعين الفاتح والداكن.',
        relatedMethods: [
            'element-class-list-add',
            'element-class-list-remove',
            'element-class-list-replace',
            'element-class-list-contains'
        ],
        keywords: [
            'classList.toggle',
            'toggle class',
            'CSS class',
            'DOM',
            'Element',
            'styling'
        ]
    },
    {
        id: 'element-class-list-replace',
        name: 'element.classList.replace()',
        shortDescription: 'استبدال صنف (Class) موجود بصنف آخر على العنصر.',
        longDescription: 'دالة تُستخدم لاستبدال اسم صنف موجود بصنف جديد دون التأثير على بقية الأصناف الموجودة على العنصر. إذا لم يكن الصنف القديم موجوداً فلن يتم إجراء أي تغيير.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تغيير حالة البطاقة من نجاح إلى خطأ
const card = document.getElementById('status-card');

card.classList.replace('success', 'error');`
        ],
        expectedOutput: [
            '(سيتم استبدال الصنف "success" بالصنف "error" إذا كان موجوداً على العنصر.)'
        ],
        professionalTips: 'تُعد replace أكثر وضوحاً من استدعاء remove ثم add، لأنها تعبّر مباشرة عن نية استبدال صنف بآخر وتنفذ العملية في استدعاء واحد.',
        commonMistakes: {
            wrong: `// إزالة الصنف ثم إضافته يدوياً
card.classList.remove('success');
card.classList.add('error');`,
            right: `// استبدال الصنف مباشرة
card.classList.replace('success', 'error');`,
            explanation: 'تجعل replace الكود أكثر تعبيراً وأسهل في القراءة، كما تقلل عدد الاستدعاءات عند الانتقال بين حالتين متبادلتين.'
        },
        thinkingWay: 'استخدم classList.replace عندما تنتقل بين حالتين واضحتين، مثل success/error أو light/dark أو active/inactive، دون الحاجة إلى حذف وإضافة الأصناف يدوياً.',
        relatedMethods: [
            'element-class-list-add',
            'element-class-list-remove',
            'element-class-list-toggle',
            'element-class-list-contains'
        ],
        keywords: [
            'classList.replace',
            'replace class',
            'CSS class',
            'DOM',
            'Element',
            'styling'
        ]
    },
    {
        id: 'element-class-list-contains',
        name: 'element.classList.contains()',
        shortDescription: 'التحقق مما إذا كان العنصر يحتوي على صنف (Class) محدد.',
        longDescription: 'دالة تُستخدم للتحقق من وجود صنف (Class) معين داخل العنصر. تُرجع القيمة true إذا كان الصنف موجوداً، وتُرجع false إذا لم يكن موجوداً، مما يجعلها مناسبة لاتخاذ قرارات برمجية اعتماداً على الحالة الحالية للعنصر.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// التحقق مما إذا كانت القائمة الجانبية مفتوحة
const sidebar = document.getElementById('sidebar');

if (sidebar.classList.contains('open')) {
    console.log('Sidebar is open');
}`
        ],
        expectedOutput: [
            '(سيتم عرض الرسالة "Sidebar is open" إذا كان العنصر يحتوي على الصنف "open".)'
        ],
        professionalTips: 'تُعد contains الطريقة الأدق للتحقق من وجود صنف معين، لأنها تبحث عن اسم الصنف بالكامل ولا تعتمد على مطابقة النصوص كما يحدث عند استخدام className.',
        commonMistakes: {
            wrong: `// البحث داخل className كنص عادي
if (sidebar.className.includes('open')) {
    console.log('Sidebar is open');
}`,
            right: `// التحقق من وجود الصنف مباشرة
if (sidebar.classList.contains('open')) {
    console.log('Sidebar is open');
}`,
            explanation: 'قد يؤدي البحث داخل className إلى نتائج غير صحيحة إذا كان اسم الصنف جزءاً من اسم صنف آخر، بينما contains تتحقق من وجود الصنف بشكل مستقل ودقيق.'
        },
        thinkingWay: 'استخدم classList.contains عندما تحتاج إلى معرفة الحالة الحالية للعنصر قبل تنفيذ إجراء معين، مثل التحقق من فتح قائمة أو تفعيل زر أو تطبيق نمط معين.',
        relatedMethods: [
            'element-class-list-add',
            'element-class-list-remove',
            'element-class-list-toggle',
            'element-class-list-replace'
        ],
        keywords: [
            'classList.contains',
            'contains class',
            'CSS class',
            'DOM',
            'Element',
            'styling'
        ]
    },
    {
        id: 'element-style',
        name: 'element.style',
        shortDescription: 'قراءة أو تعديل أنماط CSS المضمنة (Inline Styles) الخاصة بعنصر HTML.',
        longDescription: 'خاصية تُوفر الوصول المباشر إلى الأنماط المضمنة (Inline Styles) الخاصة بالعنصر. يمكن استخدامها لتعديل خصائص CSS أو قراءة القيم التي تم تعيينها مباشرة على العنصر، لكنها لا تعرض الأنماط القادمة من ملفات CSS الخارجية أو الوسوم <style>.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تغيير لون الخلفية وحجم الخط للعنصر
const card = document.getElementById('product-card');

card.style.backgroundColor = '#209DD0';
card.style.padding = '20px';`
        ],
        expectedOutput: [
            '(سيتم تغيير لون خلفية العنصر وإضافة مساحة داخلية مقدارها 20px.)'
        ],
        professionalTips: 'تعرض الخاصية style الأنماط المضمنة فقط. إذا كنت ترغب في قراءة القيمة النهائية المطبقة من جميع مصادر CSS، فاستخدم window.getComputedStyle().',
        commonMistakes: {
            wrong: `// محاولة قراءة قيمة مطبقة من ملف CSS خارجي
const card = document.getElementById('product-card');

console.log(card.style.backgroundColor);`,
            right: `// قراءة القيم المضمنة أو تعديلها مباشرة
const card = document.getElementById('product-card');

card.style.backgroundColor = '#209DD0';

console.log(card.style.backgroundColor);`,
            explanation: 'إذا كانت الخاصية مطبقة من ملف CSS خارجي فلن تظهر داخل style، لأن هذه الخاصية تعرض الأنماط المضمنة (Inline Styles) فقط.'
        },
        thinkingWay: 'استخدم style عندما تحتاج إلى تعديل مظهر عنصر بشكل مباشر أثناء تشغيل التطبيق، مثل تغيير الألوان أو الأحجام أو إظهار وإخفاء العناصر استجابةً لتفاعل المستخدم.',
        relatedMethods: [
            'window-get-computed-style',
            'element-class-list-add',
            'element-class-list-toggle'
        ],
        keywords: [
            'style',
            'inline styles',
            'CSS',
            'Element',
            'DOM',
            'styling'
        ]
    },
    {
        id: 'window-get-computed-style',
        name: 'window.getComputedStyle()',
        shortDescription: 'قراءة قيم CSS النهائية (Computed Styles) المطبقة فعلياً على عنصر HTML.',
        longDescription: 'دالة تُرجع كائناً يحتوي على جميع قيم CSS النهائية التي حسبها المتصفح للعنصر، سواء كانت قادمة من الأنماط المضمنة (Inline Styles)، أو ملفات CSS الخارجية، أو الوسوم <style>، أو القيم الافتراضية للمتصفح. وتُستخدم لمعرفة الشكل الحقيقي الذي يظهر به العنصر على الشاشة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// قراءة العرض النهائي للعنصر
const card = document.getElementById('product-card');

const styles = window.getComputedStyle(card);

console.log(styles.width);`
        ],
        expectedOutput: [
            '(سيتم عرض قيمة العرض النهائية للعنصر، مثل "320px"، بعد تطبيق جميع قواعد CSS.)'
        ],
        professionalTips: 'تُستخدم getComputedStyle لقراءة القيم فقط، ولا يمكن تعديل الأنماط من خلالها. إذا كنت ترغب في تغيير خصائص CSS فاستخدم element.style أو classList.',
        commonMistakes: {
            wrong: `// محاولة تعديل الأنماط من خلال getComputedStyle
const styles = window.getComputedStyle(card);

styles.color = 'red';`,
            right: `// تعديل الأنماط باستخدام style
card.style.color = 'red';`,
            explanation: 'الكائن الذي تُرجعه getComputedStyle مخصص للقراءة فقط (Read Only)، لذلك لا يمكن استخدامه لتعديل خصائص CSS.'
        },
        thinkingWay: 'استخدم getComputedStyle عندما تحتاج إلى معرفة القيم الفعلية التي يراها المستخدم، مثل الأبعاد أو الألوان أو الهوامش، خاصةً إذا كانت هذه القيم قادمة من ملفات CSS خارجية أو من عدة قواعد متداخلة.',
        relatedMethods: [
            'element-style'
        ],
        keywords: [
            'getComputedStyle',
            'computed styles',
            'CSS',
            'window',
            'Element',
            'styling'
        ]
    },
];