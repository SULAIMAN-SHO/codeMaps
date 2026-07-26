export const navigationLinksData = [
    {
        id: 'html-a-tag',
        name: '<a>',
        shortDescription: 'عنصر الرابط التشعبي الأساسي لإنشاء الوصلات والتنقل.',
        longDescription: 'الوسم الأساسي لبناء الروابط التشعبية في الويب. يُستخدم لتغليف النصوص أو العناصر لجعلها قابلة للنقر والتفاعل.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<a>انقر هنا للتنقل</a>`
        ],
        expectedOutput: [
            'تحويل النص أو المكون الداخلي إلى عنصر تفاعلي قابل للنقر.'
        ],
        professionalTips: 'الوسم <a> لا يعمل بدون سمة href؛ إذا كنت لا تملك مساراً للتنقل وتريد تنفيذ دالة جافا سكريبت فقط، استخدم وسم <button>.',
        commonMistakes: {
            wrong: `<!-- استخدام a بدون سمة href للتفاعل -->
<a>فتح النافذة</a>`,
            right: `<button type="button">فتح النافذة</button>`,
            explanation: 'الوسم <a> بدون href يفقد القدرة على التركيز عبر لوحة المفاتيح وقارئات الشاشة.'
        },
        thinkingWay: 'اعتبر <a> بمثابة المغلف التفاعلي الذي يجعل أي نص أو صورة داخله قابلة للنقر.',
        relatedMethods: ['html-href-attribute'],
        keywords: ['<a>', 'anchor tag', 'hyperlink', 'navigation']
    },
    {
        id: 'html-href-attribute',
        name: 'href',
        shortDescription: 'السمة الجوهرية للرابط التي تحدد مسار أو عنوان الوجهة.',
        longDescription: 'خاصية مطلوبة داخل وسم <a> تحدد مسار ملف، عنوان موقع، أو رابط صفحة ينقل المتصفح إليها المستخدم فور النقر.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<a href="https://codemap.dev">زيارة كود ماب</a>`
        ],
        expectedOutput: [
            'توجيه المتصفح المباشر للعنوان المسجل داخل سمة href.'
        ],
        professionalTips: 'تجنب وضع href="#" كقيمة وهمية؛ لأنها تقفز بالصفحة لأعلى الشاشة وتزعج المستخدم.',
        commonMistakes: {
            wrong: `<a href="#">رابط وهمي</a>`,
            right: `<a href="/target-page">رابط حقيقي</a>`,
            explanation: 'استخدام # يتسبب في إلغاء موضع التمرير الحالي والعودة لأعلى الصفحة.'
        },
        thinkingWay: 'فكر في href كعنوان الوجهة المدون على بطاقة السفر.',
        relatedMethods: ['html-a-tag'],
        keywords: ['href', 'href attribute', 'link destination', 'URL']
    },
    {
        id: 'html-absolute-path',
        name: 'Absolute Paths',
        shortDescription: 'المسارات المطلقة الشاملة المؤشرة للمواقع الخارجية ببروتوكول كامل.',
        longDescription: 'روابط تتضمن العنوان الكامل للمورد شاملاً البروتوكول (https://) والنطاق (Domain)؛ وتُستخدم للربط بصفحات خارج موقعك.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<a href="https://developer.mozilla.org">دليل MDN</a>`
        ],
        expectedOutput: [
            'الخروج من الصفحة الحالية والانتقال للموقع الخارجي المكتمل العنوان.'
        ],
        professionalTips: 'تأكد دائماً من كتابة البروتوكول https:// في بداية المسار المطلق لتفادي انكسار الرابط.',
        commonMistakes: {
            wrong: `<!-- نسيان البروتوكول في المسار المطلق -->
<a href="google.com">جوجل</a>`,
            right: `<a href="https://google.com">جوجل</a>`,
            explanation: 'كتابة google.com بدون https:// تجعل المتصفح يظن أنه مسار محلي داخل موقعك.'
        },
        thinkingWay: 'المسار المطلق هو العنوان البريدي العالمي الذي يستدعي كتابة اسم الدولة والمدينة.',
        relatedMethods: ['html-relative-path'],
        keywords: ['absolute path', 'URL', 'external link', 'full domain']
    },
    {
        id: 'html-relative-path',
        name: 'Relative Paths',
        shortDescription: 'المسارات النسبية المحلية للإشارة لملفات وصفحات المشروع.',
        longDescription: 'روابط تعتمد على موقع الملف الحالي داخل مجلدات المشروع (مثل ./about.html أو ../index.html) للتنقل الداخلي.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<a href="./pages/contact.html">تواصل معنا</a>`
        ],
        expectedOutput: [
            'الانتقال المباشر للملف المحلي بداخل مجلدات تطبيقك.'
        ],
        professionalTips: 'استخدم دائماً المسارات النسبية بين صفحات موقعك؛ لضمان عمل الروابط دون انكسار عند تغيير النطاق أو الخادم.',
        commonMistakes: {
            wrong: `<!-- ربط صفحات موقعك بمسار حاسوبك الشخصي -->
<a href="C:/Projects/about.html">من نحن</a>`,
            right: `<a href="./about.html">من نحن</a>`,
            explanation: 'مسارات الأقراص المحلية C:/ تنكسر فور رفع موقعك على الاستضافة.'
        },
        thinkingWay: 'المسار النسبي هو وصف الاتجاهات لغرفة مجاورة داخل نفس المبنى.',
        relatedMethods: ['html-absolute-path'],
        keywords: ['relative path', 'local link', 'file structure', 'internal link']
    },
    {
        id: 'html-target-blank',
        name: 'target="_blank"',
        shortDescription: 'سمة فتح الرابط في تبويب أو نافذة متصفح جديدة.',
        longDescription: 'خاصية تضاف للرابط توجه المتصفح لفتح الوجهة في تبويب مستقل (Tab) مع الإبقاء على صفحتك الأصلية مفتوحة.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `<a href="https://github.com" target="_blank" rel="noopener noreferrer">حساب جيت هاب</a>`
        ],
        expectedOutput: [
            'إنشاء تبويب جديد في المتصفح وتحميل الرابط الخارجي فيه.'
        ],
        professionalTips: 'يجب حتماً إقران target="_blank" بالخاصية rel="noopener noreferrer" لمنع الثغرات الأمنية.',
        commonMistakes: {
            wrong: `<!-- فتح روابط صفحتك الداخلية في تبويب جديد دائماً -->
<a href="./about.html" target="_blank">من نحن</a>`,
            right: `<a href="./about.html">من نحن</a>`,
            explanation: 'فتح الصفحات الداخلية في تبويبات جديدة يربك الزائر ويغرق المتصفح بتبويبات مكررة.'
        },
        thinkingWay: 'فكر في target="_blank" كفتح نافذة جديدة جانباً دون إغلاق الكتاب الذي تقرأ فيه.',
        relatedMethods: ['html-rel-security'],
        keywords: ['target="_blank"', 'new tab', 'open in new tab']
    },
    {
        id: 'html-rel-security',
        name: 'rel="noopener noreferrer"',
        shortDescription: 'خاصية الأمان الحتمية لحماية الجلسة من ثغرة التصيد (Tabnabbing).',
        longDescription: 'سمة أمان تُضاف للروابط التي تفتح بـ target="_blank" لمنع الموقع الخارجي من التحكم بصفحتك عبر window.opener أو قراءة رابط المصدر.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `<a href="https://external.com" target="_blank" rel="noopener noreferrer">رابط آمن</a>`
        ],
        expectedOutput: [
            'عزل ذاكرة التبويب الجديد كلياً عن صفحتك الحالية وتأمين بيانات الزائر.'
        ],
        professionalTips: 'الخاصية noopener تحمي الذاكرة والصفحة من التلاعب، و noreferrer تمنع تسريب عنوان موقعك في طلبات HTTP.',
        commonMistakes: {
            wrong: `<!-- إهمال rel="noopener" عند استخدام target="_blank" -->
<a href="https://site.com" target="_blank">رابط غير آمن</a>`,
            right: `<a href="https://site.com" target="_blank" rel="noopener noreferrer">رابط آمن</a>`,
            explanation: 'إهمال هذه السمة يتيح للموقع الخارجي توجيه صفحتك الأصلية لموقع احتيالي (Reverse Tabnabbing).'
        },
        thinkingWay: 'اعتبر هذه السمة الجدار العازل الذي يمنع التبويب الجديد من التجسس على تبويب موقعك.',
        relatedMethods: ['html-target-blank'],
        keywords: ['rel="noopener"', 'noreferrer', 'security', 'tabnabbing']
    },
    {
        id: 'html-internal-anchor',
        name: '#id (Anchor Links)',
        shortDescription: 'القفز والانتقال المباشر لأقسام محددة داخل نفس الصفحة عبر المعرّف الفريد.',
        longDescription: 'آلية ربط مرجعي بداخل نفس المستند؛ توجَّه السمة href إلى رمز # متبوعاً بـ id العنصر المستهدف للقفز المباشر إليه.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `<a href="#features">انتقل للمميزات</a>

<section id="features">
  <h2>مميزات المنصة</h2>
</section>`
        ],
        expectedOutput: [
            'تمرير الشاشة فوراً للقسم المحتوي على المعرف المكتوب بعد #.'
        ],
        professionalTips: 'أضف الخاصية html { scroll-behavior: smooth; } في CSS لجعل الانتقال انسيابياً وسلساً بدلاً من القفز المباشر.',
        commonMistakes: {
            wrong: `<!-- كتابة id بدون رمز # داخل href -->
<a href="features">انتقل للمميزات</a>`,
            right: `<a href="#features">انتقل للمميزات</a>`,
            explanation: 'نسيان رمز # يجعل المتصفح يظن أنك تطلب صفحة باسم features.html بدلاً من القفز للقسم.'
        },
        thinkingWay: 'فكر في #id كمصعد المبنى الذي يأخذك مباشرة للرقم المكتوب على الزر.',
        relatedMethods: ['html-a-tag'],
        keywords: ['#id', 'anchor link', 'fragment link', 'jump link']
    },
    {
        id: 'html-mailto',
        name: 'mailto:',
        shortDescription: 'بروتوكول فتح تطبيق البريد الإلكتروني لإرسال رسالة مباشرة.',
        longDescription: 'بادئة خاصة تُكتب داخل سمة href لتفعيل تطبيق البريد الافتراضي في جهاز المستخدم مع كتابة البريد المستهدف تلقائياً.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `<a href="mailto:support@codemap.dev">ارسل لنا بريداً</a>`
        ],
        expectedOutput: [
            'تشغيل برنامج البريد الإلكتروني (مثل Outlook أو Gmail) وتجهيز عنوان المستلم.'
        ],
        professionalTips: 'يمكنك إضافة موضوع الرسالة تلقائياً عن طريق كتابة: mailto:test@email.com?subject=Inquiry.',
        commonMistakes: {
            wrong: `<!-- كتابة مسافات داخل بروتوكول mailto -->
<a href="mailto: support@codemap.dev">راسلنا</a>`,
            right: `<a href="mailto:support@codemap.dev">راسلنا</a>`,
            explanation: 'المسافات بعد mailto: قد تتسبب في عدم استجابة مشغل البريد الإلكتروني.'
        },
        thinkingWay: 'اعتبر mailto: كمفتاح تشغيل صندوق الرسائل الجاهز للربط.',
        relatedMethods: ['html-tel'],
        keywords: ['mailto:', 'email link', 'send email']
    },
    {
        id: 'html-tel',
        name: 'tel:',
        shortDescription: 'بروتوكول إجراء المكالمات الهاتفية المباشرة في الهواتف الذكية.',
        longDescription: 'بادئة تُكتب داخل href لفتح تطبيق الاتصال على الهواتف الذكية وإدراج رقم الهاتف جاهزاً للاتصال.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `<a href="tel:+966500000000">اتصل بالمبيعات</a>`
        ],
        expectedOutput: [
            'فتح لوحة الاتصال بالنقال وتجهيز الرقم المكتوب للاتصال الفوري.'
        ],
        professionalTips: 'اكتب الرقم بالصيغة الدولية المكتملة (+966...) بدون مسافات أو أقواس لضمان عمله بكل الدول.',
        commonMistakes: {
            wrong: `<!-- كتابة الرقم بمسافات وأقواس تجعل الاتصال يفشل -->
<a href="tel:(050) 000-0000">اتصل بنا</a>`,
            right: `<a href="tel:+966500000000">اتصل بنا</a>`,
            explanation: 'الأقواس والمسافات تمنع أنظمة مثل iOS من التعرف على الرقم كطلب اتصال مجاز.'
        },
        thinkingWay: 'فكر في tel: كزر الاتصال السريع في الهاتف.',
        relatedMethods: ['html-mailto'],
        keywords: ['tel:', 'phone link', 'click to call']
    },
    {
        id: 'html-download',
        name: 'download',
        shortDescription: 'سمة إجبار المتصفح على تنزيل الملف المرفق بدلاً من استعراضه.',
        longDescription: 'خاصية تضاف لوسم <a> لتنزيل الملفات (مثل PDF أو الصور) مباشرة إلى جهاز المستخدم بدلاً من فتحها داخل المتصفح.',
        difficulty: 'medium',
        importance: 'normal',
        examples: [
            `<a href="./files/guide.pdf" download="Guide-2026.pdf">تحميل الدليل</a>`
        ],
        expectedOutput: [
            'بدء تنزيل الملف لحاسوب الزائر مع إمكانية تحديد اسم جديد للملف التنازلي.'
        ],
        professionalTips: 'تنبيه أمني: تعمل سمة download حصرياً على الملفات المستضافة على نفس نطاق موقعك (Same-origin).',
        commonMistakes: {
            wrong: `<!-- استخدام download على رابط سيرفر خارجي مختلف -->
<a href="https://other-domain.com/file.pdf" download>تحميل</a>`,
            right: `<a href="./local-files/file.pdf" download>تحميل</a>`,
            explanation: 'المتصفح يحظر خاصية download للملفات القادمة من نطاقات خارجية لأسباب أمنية.'
        },
        thinkingWay: 'اعتبر download بمثابة أمر الحفظ التلقائي الذي يمنع عرض الملف ويحفظه فوراً بقرص التخزين.',
        relatedMethods: ['html-a-tag'],
        keywords: ['download', 'download attribute', 'file save']
    }
];