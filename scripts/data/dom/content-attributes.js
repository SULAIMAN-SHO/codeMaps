export const contentAttributesData = [

    {
        id: 'node-text-content',
        name: 'node.textContent',
        shortDescription: 'قراءة أو تعديل المحتوى النصي الكامل لعنصر أو عقدة داخل الصفحة.',
        longDescription: 'خاصية تُستخدم للحصول على جميع النصوص الموجودة داخل العنصر، أو استبدالها بنص جديد. عند تعيين قيمة جديدة، يتم إزالة جميع العناصر الأبناء واستبدالها بعقدة نصية واحدة تحتوي على النص المحدد.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تحديث النص المعروض داخل زر الحفظ
const saveButton = document.getElementById('saveButton');

saveButton.textContent = 'تم الحفظ بنجاح';`
        ],
        expectedOutput: [
            '(سيتم استبدال النص داخل الزر بـ "تم الحفظ بنجاح".)'
        ],
        professionalTips: 'استخدم textContent عند التعامل مع النصوص فقط، لأنه لا يفسر وسوم HTML ويعرضها كنص عادي، مما يجعله أكثر أماناً وأسرع من innerHTML عند عدم الحاجة لإضافة عناصر HTML.',
        commonMistakes: {
            wrong: `// توقع أن يتم إنشاء عنصر HTML
const message = document.getElementById('message');

message.textContent = '<strong>مرحباً</strong>';`,
            right: `// سيتم عرض الوسوم كنص عادي
const message = document.getElementById('message');

message.textContent = '<strong>مرحباً</strong>';`,
            explanation: 'الخاصية textContent لا تفسر وسوم HTML، بل تعرضها كنص عادي. إذا كنت ترغب بإدراج عناصر HTML فاستخدم innerHTML.'
        },
        thinkingWay: 'استخدم textContent عندما يكون هدفك قراءة أو تعديل النص فقط دون الحاجة إلى إنشاء عناصر HTML، مثل تحديث حالة زر، أو رسالة تنبيه، أو عداد، أو اسم مستخدم.',
        relatedMethods: [
            'element-inner-html',
            'element-inner-text'
        ],
        keywords: [
            'textContent',
            'text',
            'Node',
            'DOM',
            'content',
            'text node'
        ]
    },
    {
        id: 'element-inner-html',
        name: 'element.innerHTML',
        shortDescription: 'قراءة أو تعديل محتوى HTML الكامل الموجود داخل عنصر محدد.',
        longDescription: 'خاصية تُستخدم للحصول على محتوى HTML الداخلي للعنصر كسلسلة نصية، أو استبداله بالكامل بمحتوى HTML جديد. عند تعيين قيمة جديدة، يقوم المتصفح بتحليلها وإنشاء عناصر HTML المقابلة ثم يستبدل بها جميع المحتويات السابقة للعنصر.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// إنشاء بطاقة منتج جديدة داخل الحاوية
const products = document.getElementById('products');

products.innerHTML = `
            + "`" + `
<div class="card">
    <h3>Wireless Mouse</h3>
    <p>$29.99</p>
</div>
` + "`" + `;`
        ],
        expectedOutput: [
            '(سيتم استبدال محتوى الحاوية بالكامل ببطاقة المنتج الجديدة.)'
        ],
        professionalTips: 'استخدم innerHTML عندما تحتاج إلى إنشاء أو استبدال عناصر HTML دفعةً واحدة. أما إذا كنت ترغب في تعديل النص فقط، فاستخدم textContent لأنه أسرع وأكثر أماناً ولا يفسر وسوم HTML.',
        commonMistakes: {
            wrong: `// الاعتقاد بأن += يضيف عنصراً دون إعادة بناء المحتوى
const products = document.getElementById('products');

products.innerHTML += '<div class="card">New Product</div>';`,
            right: `// استخدام insertAdjacentHTML لإضافة عناصر جديدة
const products = document.getElementById('products');

products.insertAdjacentHTML(
    'beforeend',
    '<div class="card">New Product</div>'
);`,
            explanation: 'استخدام += مع innerHTML يؤدي إلى إعادة تحليل وإعادة إنشاء جميع عناصر HTML داخل العنصر، مما قد يؤثر على الأداء ويزيل مستمعات الأحداث (Event Listeners) المرتبطة بالعناصر التي أُعيد إنشاؤها.'
        },
        thinkingWay: 'استخدم innerHTML عندما تحتاج إلى إنشاء واجهة كاملة أو استبدال محتوى عنصر دفعةً واحدة. أما لإضافة عناصر جديدة باستمرار أو تعديل النصوص فقط، فهناك بدائل أكثر كفاءة مثل insertAdjacentHTML أو textContent.',
        relatedMethods: [
            'node-text-content',
            'element-inner-text',
            'element-insert-adjacent-html'
        ],
        keywords: [
            'innerHTML',
            'HTML',
            'DOM',
            'HTML content',
            'Element',
            'markup'
        ]
    },
    {
        id: 'element-inner-text',
        name: 'Element.innerText',
        shortDescription: 'قراءة أو تعديل النص الظاهر للمستخدم داخل عنصر محدد.',
        longDescription: 'خاصية تُستخدم للحصول على النص المرئي داخل العنصر كما يظهر للمستخدم، أو استبداله بنص جديد. عند القراءة، تتجاهل العناصر المخفية وتراعي تنسيقات العرض، وعند الكتابة تستبدل المحتوى النصي الظاهر دون تفسيره كـ HTML.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تحديث النص الظاهر داخل زر الإرسال
const submitButton = document.getElementById('submitButton');

submitButton.innerText = 'جاري الإرسال...';`
        ],
        expectedOutput: [
            '(سيتم تغيير النص الظاهر داخل الزر إلى "جاري الإرسال...".)'
        ],
        professionalTips: 'تختلف innerText عن textContent في أنها تتعامل مع النص كما يظهر فعلياً للمستخدم، لذلك قد تتأثر بعناصر CSS مثل display: none و visibility، كما أنها أبطأ قليلاً لأنها تعتمد على حسابات العرض (Layout).',
        commonMistakes: {
            wrong: `// توقع قراءة النصوص المخفية
const container = document.getElementById('container');

console.log(container.innerText);`,
            right: `// استخدام textContent عند الحاجة لجميع النصوص
const container = document.getElementById('container');

console.log(container.textContent);`,
            explanation: 'تعرض innerText النصوص المرئية فقط، بينما تُرجع textContent جميع النصوص داخل العنصر حتى وإن كانت موجودة داخل عناصر مخفية.'
        },
        thinkingWay: 'استخدم innerText عندما يهمك النص الذي يراه المستخدم على الشاشة، مثل قراءة محتوى زر أو عنوان أو رسالة، أما إذا كنت تحتاج جميع النصوص بغض النظر عن ظهورها فاستخدم textContent.',
        relatedMethods: [
            'node-text-content',
            'element-inner-html'
        ],
        keywords: [
            'innerText',
            'text',
            'visible text',
            'DOM',
            'Element',
            'content'
        ]
    },
    {
        id: 'element-get-attribute',
        name: 'element.getAttribute()',
        shortDescription: 'الحصول على قيمة سمة (Attribute) محددة من عنصر HTML.',
        longDescription: 'دالة تُستخدم لقراءة قيمة سمة معينة من العنصر، مثل id أو class أو href أو src أو أي سمة مخصصة. إذا لم تكن السمة موجودة، فستُرجع القيمة null.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// قراءة رابط الانتقال من العنصر
const link = document.getElementById('website');

console.log(link.getAttribute('href'));`
        ],
        expectedOutput: [
            '(سيتم عرض قيمة السمة "href" الخاصة بالعنصر في وحدة التحكم.)'
        ],
        professionalTips: 'تُستخدم getAttribute لقراءة القيمة الأصلية المخزنة داخل HTML، وليس بالضرورة القيمة الحالية الموجودة في خصائص JavaScript للكائن.',
        commonMistakes: {
            wrong: `// محاولة قراءة سمة غير موجودة
const image = document.getElementById('photo');

console.log(image.getAttribute('altText'));`,
            right: `// قراءة اسم السمة الصحيح
const image = document.getElementById('photo');

console.log(image.getAttribute('alt'));`,
            explanation: 'يجب تمرير اسم السمة كما هو مكتوب داخل HTML، وإلا ستُرجع الدالة القيمة null.'
        },
        thinkingWay: 'استخدم getAttribute عندما تحتاج إلى قراءة قيمة أي سمة داخل عنصر HTML، سواء كانت سمة قياسية أو سمة مخصصة.',
        relatedMethods: [
            'element-set-attribute',
            'element-remove-attribute',
            'element-has-attribute'
        ],
        keywords: [
            'getAttribute',
            'attribute',
            'DOM',
            'HTML',
            'Element',
            'read attribute'
        ]
    },
    {
        id: 'element-set-attribute',
        name: 'element.setAttribute()',
        shortDescription: 'إضافة سمة جديدة أو تعديل قيمة سمة موجودة داخل عنصر HTML.',
        longDescription: 'دالة تُستخدم لإنشاء سمة جديدة أو تحديث قيمة سمة موجودة في العنصر. إذا كانت السمة موجودة فسيتم استبدال قيمتها، وإذا لم تكن موجودة فسيتم إنشاؤها تلقائياً.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تعيين رابط جديد للزر
const button = document.getElementById('visit');

button.setAttribute('data-page', 'dashboard');`
        ],
        expectedOutput: [
            '(سيتم إنشاء أو تحديث السمة "data-page" بالقيمة "dashboard".)'
        ],
        professionalTips: 'تُستخدم setAttribute مع جميع أنواع السمات، بما فيها السمات المخصصة (data-*)، وهي مناسبة عندما ترغب في التعامل مع السمات بطريقة عامة.',
        commonMistakes: {
            wrong: `// نسيان تمرير قيمة السمة
button.setAttribute('disabled');`,
            right: `// تمرير اسم السمة وقيمتها
button.setAttribute('disabled', '');`,
            explanation: 'تتطلب الدالة اسم السمة وقيمتها، حتى في السمات المنطقية مثل disabled.'
        },
        thinkingWay: 'استخدم setAttribute عندما تحتاج إلى إنشاء أو تعديل سمات HTML ديناميكياً أثناء تشغيل الصفحة.',
        relatedMethods: [
            'element-get-attribute',
            'element-remove-attribute',
            'element-has-attribute'
        ],
        keywords: [
            'setAttribute',
            'attribute',
            'DOM',
            'HTML',
            'Element',
            'update attribute'
        ]
    },
    {
        id: 'element-remove-attribute',
        name: 'Element.removeAttribute()',
        shortDescription: 'إزالة سمة محددة من عنصر HTML.',
        longDescription: 'دالة تُستخدم لحذف سمة معينة من العنصر نهائياً، سواء كانت سمة قياسية أو سمة مخصصة. إذا لم تكن السمة موجودة فلن يحدث أي خطأ.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// إزالة تعطيل الزر
const button = document.getElementById('submit');

button.removeAttribute('disabled');`
        ],
        expectedOutput: [
            '(سيتم حذف السمة "disabled" ليصبح الزر قابلاً للنقر.)'
        ],
        professionalTips: 'تُعد removeAttribute الطريقة الصحيحة لإزالة السمة بالكامل بدلاً من تعيينها بقيمة فارغة.',
        commonMistakes: {
            wrong: `// تعيين قيمة فارغة بدلاً من حذف السمة
button.setAttribute('disabled', '');`,
            right: `// حذف السمة نهائياً
button.removeAttribute('disabled');`,
            explanation: 'وجود السمة disabled بحد ذاته يعطل العنصر، حتى لو كانت قيمتها فارغة، لذلك يجب حذفها بالكامل.'
        },
        thinkingWay: 'استخدم removeAttribute عندما تريد إزالة سمة من العنصر تماماً وليس مجرد تغيير قيمتها.',
        relatedMethods: [
            'element-get-attribute',
            'element-set-attribute',
            'element-has-attribute'
        ],
        keywords: [
            'removeAttribute',
            'attribute',
            'DOM',
            'HTML',
            'Element',
            'remove attribute'
        ]
    },
    {
        id: 'element-has-attribute',
        name: 'element.hasAttribute()',
        shortDescription: 'التحقق مما إذا كان العنصر يحتوي على سمة محددة.',
        longDescription: 'دالة تُرجع القيمة true إذا كانت السمة موجودة داخل العنصر، وتُرجع false إذا لم تكن موجودة، بغض النظر عن قيمة تلك السمة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// التحقق من وجود السمة disabled
const button = document.getElementById('submit');

console.log(button.hasAttribute('disabled'));`
        ],
        expectedOutput: [
            '(سيتم عرض true إذا كانت السمة موجودة، أو false إذا لم تكن موجودة.)'
        ],
        professionalTips: 'استخدم hasAttribute عندما يهمك معرفة وجود السمة فقط، دون الحاجة إلى قراءة قيمتها بواسطة getAttribute.',
        commonMistakes: {
            wrong: `// مقارنة قيمة السمة بدلاً من التحقق من وجودها
if (button.getAttribute('disabled')) {
    console.log('Disabled');
}`,
            right: `// التحقق من وجود السمة مباشرة
if (button.hasAttribute('disabled')) {
    console.log('Disabled');
}`,
            explanation: 'hasAttribute أوضح وأسرع عندما يكون المطلوب هو معرفة وجود السمة فقط، دون الاهتمام بقيمتها.'
        },
        thinkingWay: 'استخدم hasAttribute قبل تنفيذ عمليات تعتمد على وجود سمة معينة، مثل التحقق من تعطيل زر أو وجود سمة مخصصة.',
        relatedMethods: [
            'element-get-attribute',
            'element-set-attribute',
            'element-remove-attribute'
        ],
        keywords: [
            'hasAttribute',
            'attribute',
            'DOM',
            'HTML',
            'Element',
            'check attribute'
        ]
    },
    {
        id: 'document-forms',
        name: 'document.forms',
        shortDescription: 'الوصول إلى جميع النماذج (Forms) الموجودة داخل الصفحة.',
        longDescription: 'خاصية تُرجع مجموعة حية (Live HTMLCollection) تحتوي على جميع عناصر <form> الموجودة داخل المستند. يمكن الوصول إلى النماذج باستخدام الفهرس أو اسم النموذج (name).',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// الوصول إلى نموذج تسجيل الدخول
const loginForm = document.forms['loginForm'];

console.log(loginForm);`
        ],
        expectedOutput: [
            '(سيتم عرض عنصر النموذج الذي يحمل الاسم "loginForm" في وحدة التحكم.)'
        ],
        professionalTips: 'تُعد document.forms بديلاً سريعاً عن استخدام querySelector عند التعامل مع النماذج، لأنها تعتمد على فهرسة جاهزة يوفرها المتصفح.',
        commonMistakes: {
            wrong: `// محاولة الوصول إلى النموذج بواسطة id
const form = document.forms['login'];`,
            right: `// الوصول إلى النموذج بواسطة name
const form = document.forms['loginForm'];`,
            explanation: 'تعتمد document.forms على اسم النموذج (name) أو ترتيبه داخل الصفحة، وليس على المعرّف id.'
        },
        thinkingWay: 'استخدم document.forms عندما يكون هدفك الوصول إلى نموذج موجود في الصفحة دون الحاجة إلى كتابة محددات CSS.',
        relatedMethods: [
            'html-form-element-elements',
            'document-query-selector'
        ],
        keywords: [
            'document.forms',
            'forms',
            'HTMLCollection',
            'form',
            'DOM'
        ]
    },
    {
        id: 'html-form-element-elements',
        name: 'form.elements',
        shortDescription: 'الوصول إلى جميع عناصر الإدخال الموجودة داخل نموذج محدد.',
        longDescription: 'خاصية تُرجع مجموعة حية (Live HTMLFormControlsCollection) تحتوي على جميع عناصر الإدخال التابعة للنموذج، مثل حقول النص والأزرار والقوائم المنسدلة وغيرها. يمكن الوصول إليها بواسطة الاسم أو الفهرس.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// الوصول إلى حقل البريد الإلكتروني داخل النموذج
const form = document.forms['loginForm'];

const email = form.elements['email'];

console.log(email);`
        ],
        expectedOutput: [
            '(سيتم عرض عنصر الإدخال الذي يحمل الاسم "email" داخل النموذج.)'
        ],
        professionalTips: 'تُغنيك الخاصية elements عن البحث المتكرر داخل النموذج باستخدام querySelector، مما يجعل الكود أوضح وأكثر تنظيماً.',
        commonMistakes: {
            wrong: `// محاولة الوصول إلى الحقل بواسطة id
const email = form.elements['emailInput'];`,
            right: `// الوصول إلى الحقل بواسطة name
const email = form.elements['email'];`,
            explanation: 'تعتمد elements على قيمة الخاصية name الخاصة بالحقل، وليس على id.'
        },
        thinkingWay: 'استخدم elements عندما تحتاج إلى الوصول السريع لعناصر نموذج معين دون كتابة محددات CSS لكل عنصر.',
        relatedMethods: [
            'document-forms',
            'document-query-selector'
        ],
        keywords: [
            'elements',
            'HTMLFormElement',
            'form controls',
            'form elements',
            'DOM'
        ]
    },
];