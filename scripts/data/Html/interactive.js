export const interactiveData = [
    {
        id: 'html-details-tag',
        name: '<details>',
        shortDescription: 'حاوية القوائم والأسئلة الشائعة القابلة للطي والإظهار أصلياً.',
        longDescription: 'عنصر تفاعلي مدمج في HTML يُستخدم لبناء القوائم المنسدلة القابلة للطي والإظهار (Accordion) دون الحاجة لكتابة أي كود JavaScript.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<details>
  <summary>ما هي مميزات المنصة؟</summary>
  <p>نقدم شرحاً معمارياً متكاملاً لتقنيات الويب العصرية لعام 2026.</p>
</details>`
        ],
        expectedOutput: [
            'رسم مكون تفاعلي بأسهم إظهار/إخفاء تفتح وتغلق المحتوى النصي فور النقر.'
        ],
        professionalTips: 'يمكنك إضافة السمة الثنائية open لوسم <details> لجعل القائمة مفتوحة بصورة افتراضية فور تحميل الصفحة.',
        commonMistakes: {
            wrong: `<!-- كتابة محتوى داخل details بدون إضافة وسم summary التمهيدي -->
<details>
  <p>محتوى بدون عنوان</p>
</details>`,
            right: `<details>
  <summary>عنوان القائمة</summary>
  <p>محتوى القائمة</p>
</details>`,
            explanation: 'عدم وجود <summary> يجعل المتصفح يولد كلمة افتراضية مثل "Details" كعنوان غير معبر.'
        },
        thinkingWay: 'اعتبر <details> بمثابة الصندوق المغلق الذي يحفظ المحتوى بداخله حتى يقرر المستخدم الفتح.',
        relatedMethods: ['html-summary-tag'],
        keywords: ['<details>', 'details', 'accordion', 'collapsible', 'toggle content']
    },
    {
        id: 'html-summary-tag',
        name: '<summary>',
        shortDescription: 'العنوان المباشر القابل للنقر داخل حاوية التفاصيل <details>.',
        longDescription: 'وسم فرعي يوضع كأول عنصر داخل <details> ليعمل كعنوان رئيسي قابل للنقر والتفاعل؛ يحل محل الأزرار التقليدية دلالياً.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<details open>
  <summary>شروط الانضمام للمسار</summary>
  <p>الرغبة في التعلم والالتزام بالتطبيقات العملية.</p>
</details>`
        ],
        expectedOutput: [
            'تحويل النص داخل summary إلى زر تفاعلي مدمج بأسهم التدوير الافتراضية.'
        ],
        professionalTips: 'يمكنك تخصيص أو إخفاء سهم التدوير الافتراضي للـ <summary> بـ CSS باستخدام الخاصية summary::-webkit-details-marker { display: none; }.',
        commonMistakes: {
            wrong: `<!-- وضع summary كابن ثانٍ داخل details بعد فقرة نصية -->
<details>
  <p>نص مقدمة</p>
  <summary>العنوان</summary>
</details>`,
            right: `<details>
  <summary>العنوان</summary>
  <p>نص مقدمة</p>
</details>`,
            explanation: 'الوسم <summary> يجب أن يكون حتماً الابن المباشر الأول لـ <details> ليعمل كزر فتح وإغلاق.'
        },
        thinkingWay: 'فكر في <summary> كمقبض الباب؛ تضغط عليه لتفتح وتغلق الغرفة المحتواة في details.',
        relatedMethods: ['html-details-tag'],
        keywords: ['<summary>', 'summary', 'accordion header', 'details title']
    },
    {
        id: 'html-dialog-tag',
        name: '<dialog>',
        shortDescription: 'النافذة المنبثقة التفاعلية المدمجة أصلياً بالمتصفح (Native Modal).',
        longDescription: 'عنصر تفاعلي دلالي لبناء النوافذ المنبثقة وحوارات التأكيد دون الاستعانة بمكتبات خارجية ثقيلة، ويمتاز بالدعم الأصلي لزر Escape وحظر التفاعل الخلفي.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `<dialog id="myModal">
  <h2>تأكيد العملية</h2>
  <p>هل أنت متأكد من استكمال التسجيل؟</p>
  <form method="dialog">
    <button type="submit">إغلاق</button>
  </form>
</dialog>`
        ],
        expectedOutput: [
            'إنشاء نافذة منبثقة معزولة داخل الـ DOM تعلو عناصر الصفحة.'
        ],
        professionalTips: 'يُغنيك الوسم المدمج <dialog> عن استخدام مكتبات النوافذ المنبثقة المجهدة؛ فهو يدير التركيز (Focus Management) وإمكانية الوصول آلياً.',
        commonMistakes: {
            wrong: `<!-- محاولة فتح النافذة بإضافة فئة active بـ CSS بدلاً من الدالة المباشرة -->
<dialog class="active">...</dialog>`,
            right: `// استخدام الدالة البرمجية المخصصة في JS
document.getElementById('myModal').showModal();`,
            explanation: 'إظهار <dialog> عبر CSS فقط يحرِمك من وضعية المودال الحقيقية وطبقة الـ ::backdrop المعزولة.'
        },
        thinkingWay: 'اعتبر <dialog> بالظرف المنبثق المدمج بداخل المتصفح والمجهز أمنياً للظهور فوق الصفحة.',
        relatedMethods: ['html-dialog-showmodal', 'html-form-method-dialog'],
        keywords: ['<dialog>', 'dialog', 'modal', 'popup', 'native modal']
    },
    {
        id: 'html-dialog-showmodal',
        name: 'showModal() Method',
        shortDescription: 'فتح النافذة المنبثقة بوضع المودال وقفل التفاعل مع الخلفية مع الطبقة ::backdrop.',
        longDescription: 'دالة جافا سكريبت مدمجة في عنصر <dialog> لتفعيل نمط المودال؛ حيث تقفل التفاعل مع الصفحة خلفها، وتنشئ طبقة خلفية معتمة ::backdrop، وتتيح الإغلاق بزر Escape.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `const modal = document.querySelector('dialog');

// الفتح بوضع المودال وقفل الصفحة الخلفية
modal.showModal();

// الفتح المباشر دون قفل الخلفية
// modal.show();`
        ],
        expectedOutput: [
            'تعطيل التفاعل مع كافة العناصر الخارجية وإبراز النافذة المنبثقة وطبقتها المظلمة ::backdrop.'
        ],
        professionalTips: 'استخدم دائماً showModal() بدلاً من show()؛ لأن showModal() تضع النافذة في الطبقة العلوية للمتصفح (Top Layer) لتعلو فوق كافة عناصر z-index.',
        commonMistakes: {
            wrong: `<!-- استخدام الدالة العادية show() وتوقع قفل الخلفية -->
dialogElement.show();`,
            right: `dialogElement.showModal();`,
            explanation: 'الدالة show() تفتح النافذة كعنصر عادي بالصفحة دون طبقة ::backdrop ودون قفل التفاعل الخارجي.'
        },
        thinkingWay: 'فكر في showModal() كإطفاء أنوار الصالة وتسليط الضوء الذكي حصراً على شاشة العرض المنبثقة.',
        relatedMethods: ['html-dialog-tag'],
        keywords: ['showModal()', 'showModal', 'backdrop', 'top layer', 'modal mode']
    },
    {
        id: 'html-form-method-dialog',
        name: 'method="dialog"',
        shortDescription: 'آلية إغلاق النافذة المنبثقة المباشرة عبر نموذج دون جافاسكريبت.',
        longDescription: 'قيمة خاصة تُسند للسمة method داخل وسم <form> المدمج بداخل <dialog>؛ تؤدي لإغلاق النافذة المنبثقة تلقائياً فور النقر على زر الإرسال بالداخل دون كتابة أحداث JS.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `<dialog id="confirmDialog">
  <form method="dialog">
    <p>هل تريد الخروج؟</p>
    <button value="cancel">إلغاء</button>
    <button value="confirm">تأكيد</button>
  </form>
</dialog>`
        ],
        expectedOutput: [
            'إغلاق النافذة المنبثقة فوراً بنقرة أي من الزرين مع إرجاع القيمة المحددة في value.'
        ],
        professionalTips: 'عند إغلاق المودال بـ method="dialog"، يمكنك قراءة القيمة التي أغلقت بها النافذة في JS عبر الخاصية dialog.returnValue.',
        commonMistakes: {
            wrong: `<!-- كتابة دالة JS لإغلاق المودال يدوياً بدلاً من تفعيل method="dialog" البسيطة -->
<button onclick="dialog.close()">إغلاق</button>`,
            right: `<form method="dialog"><button>إغلاق</button></form>`,
            explanation: 'الخاصية method="dialog" تقدم حلاً شاملاً وأصلياً لإغلاق المودال بـ HTML الصرف.'
        },
        thinkingWay: 'اعتبر method="dialog" بمثابة زر إلغاء الأمر الصريح الذي ينظف النافذة فور الضغط عليه.',
        relatedMethods: ['html-dialog-tag', 'html-form-tag'],
        keywords: ['method="dialog"', 'close dialog', 'dialog form', 'returnValue']
    },
    {
        id: 'html-popover-attribute',
        name: 'popover Attribute',
        shortDescription: 'خاصية تحويل العنصر إلى قائمة أو نافذة مؤقتة في الطبقة العلوية (Top Layer).',
        longDescription: 'سمة معاصرة تُضاف لأي عنصر (مثل <div>) لتحويله إلى عنصر منبثق يظهر في الطبقة العلوية فوق كافة العناصر بدعم النقر الخارجي للإغلاق (Light Dismiss).',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `<div id="myMenu" popover>
  <p>محتوى القائمة المنبثقة المؤقتة</p>
</div>`
        ],
        expectedOutput: [
            'إخفاء العنصر افتراضياً وعرضه في الطبقة العلوية فور استدعائه بنقرة خارجية.'
        ],
        professionalTips: 'تتميز سمة popover بدعم خاصية Light Dismiss؛ حيث تُغلق النافذة المنبثقة تلقائياً فور النقر في أي مكان فارغ بالصفحة أو الضغط على Esc.',
        commonMistakes: {
            wrong: `<!-- كتابة قيم غير معتمدة للخاصية popover -->
<div popover="modal"></div>`,
            right: `<div popover="auto"></div> <!-- أو كتابة popover مفردة -->`,
            explanation: 'القيم المعتمدة لـ popover هي إما auto (للإغلاق التلقائي بالنقر الخارجي) أو manual.'
        },
        thinkingWay: 'اعتبر popover كالورقة اللاصقة المنبثقة التي تظهر أعلى الصفحة وتختفي بمجرد النقر الخارجي.',
        relatedMethods: ['html-popovertarget-attribute'],
        keywords: ['popover', 'popover attribute', 'top layer', 'light dismiss', 'native popover']
    },
    {
        id: 'html-popovertarget-attribute',
        name: 'popovertarget',
        shortDescription: 'سمة الأزرار المباشرة لتشغيل وإعادة فتح/إغلاق الـ popover بـ HTML الصرف.',
        longDescription: 'خاصية تُضاف لأزرار <button> لربطها بـ id الخاص بالعنصر الحامل للخاصية popover، لفتح وإغلاق النافذة المؤقتة بنقرة زر دون جافا سكريبت.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `<!-- الزر المشغل -->
<button type="button" popovertarget="profileMenu">فتح الملف الشخصي</button>

<!-- النافذة المنبثقة -->
<div id="profileMenu" popover>
  <p>إعدادات الحساب</p>
</div>`
        ],
        expectedOutput: [
            'ربط الزر بالنافذة وتبديل حالة فتحها وإغلاقها تلقائياً عند كل نقرة.'
        ],
        professionalTips: 'يمكنك استخدام الخاصية الفرعية popovertargetaction="toggle | show | hide" لتحديد ما إذا كان الزر يفتح أو يغلق أو يبدل حالة الـ popover.',
        commonMistakes: {
            wrong: `<!-- كتابة id بدون المطابقة الدقيقة بين popovertarget و id النافذة -->
<button popovertarget="Menu">فتح</button>
<div id="menu" popover></div>`,
            right: `<button popovertarget="menu">فتح</button>
<div id="menu" popover></div>`,
            explanation: 'عدم تطابق اسم الـ id يجعل الزر عاجزاً عن العثور على النافذة المنبثقة المستهدفة.'
        },
        thinkingWay: 'فكر في popovertarget كجهاز التحكم عن بعد المحدد لتردد القناة التي سيفتحها.',
        relatedMethods: ['html-popover-attribute', 'html-button'],
        keywords: ['popovertarget', 'popovertargetaction', 'no-js menu', 'toggle popover']
    }
];