export const formsInputsData = [
    {
        id: 'html-form-tag',
        name: '<form>',
        shortDescription: 'الحاوية الرئيسية لإدارة واستمارة جمع بيانات المستخدم.',
        longDescription: 'عنصر دلالي يمثل هيكل الاستمارة التفاعلي؛ يتكفل بتجميع وحزم جميع حقول المدخلات وإرسالها للجهة المستهدفة عبر سمة action والبروتوكول المحدد في method.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<form action="/api/login" method="POST">
  <!-- حقول النموذج توضع هنا -->
</form>`
        ],
        expectedOutput: [
            'إنشاء نطاق استمارة تفاعلية تجمع بيانات المدخلات للرفع للخدمات الخادمة.'
        ],
        professionalTips: 'احرص على استخدام method="POST" عند التعامل مع البيانات الحساسة أو كلمات المرور لمنع ظهور البيانات في شريط عنوان المتصفح (URL).',
        commonMistakes: {
            wrong: `<!-- كتابة حقول إدخال بدون تغليفها بوسم form -->
<input type="text" placeholder="الاسم">
<button onclick="send()">إرسال</button>`,
            right: `<form action="/submit" method="POST">
  <input type="text" name="username">
  <button type="submit">إرسال</button>
</form>`,
            explanation: 'عدم استخدام <form> يحرم المستخدم من إرسال البيانات فور الضغط على زر Enter من لوحة المفاتيح.'
        },
        thinkingWay: 'اعتبر <form> بمثابة ظرف الرسالة البريدية؛ يحمل داخله كافة أوراق البيانات ويعنونها برابط المستلم.',
        relatedMethods: ['html-form-novalidate', 'html-button'],
        keywords: ['<form>', 'form', 'action', 'method', 'POST', 'GET']
    },
    {
        id: 'html-form-novalidate',
        name: 'novalidate',
        shortDescription: 'سمة تعطيل فحص المتصفح الافتراضي لترك الفحص للجافا سكريبت.',
        longDescription: 'خاصية تُضاف لوسم <form> لمنع المتصفح من إظهار رسائل التنبيه الافتراضية عند فشل التحقق، وتسمح بتشغيل آليات التحقق المخصصة بـ JavaScript.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `<form action="/register" method="POST" novalidate>
  <input type="email" required>
  <button type="submit">تسجيل</button>
</form>`
        ],
        expectedOutput: [
            'تعطيل فقاعات التنبيه الافتراضية للمتصفح مع إتاحة اعتراض الحدث بـ JS.'
        ],
        professionalTips: 'استخدم novalidate عندما تصمم واجهة مستخدم مخصصة تعرض رسائل الخطأ بأسلوب يناسب هويتك البصرية بدلاً من شكل المتصفح الافتراضي.',
        commonMistakes: {
            wrong: `<!-- وضع novalidate وتوقع أن البيانات لن تحتاج لفحص خلفي في السيرفر -->
<form novalidate>...</form>`,
            right: `<!-- فحص البيانات دائماً في السيرفر بغض النظر عن الواجهة -->`,
            explanation: 'السمة novalidate تخص الواجهة الأمامية فقط؛ فحص البيانات في السيرفر إجباري لحماية قواعد البيانات.'
        },
        thinkingWay: 'فكر في novalidate كإيقاف جرس الإنذار الافتراضي لترك المجال لنظام حراسة إلكتروني مخصص.',
        relatedMethods: ['html-form-tag', 'html-validation-attributes'],
        keywords: ['novalidate', 'form validation', 'custom validation', 'disable HTML validation']
    },
    {
        id: 'html-label-tag',
        name: '<label> & for',
        shortDescription: 'ربط التسمية النصية بالمدخل عبر for و id لضمان الوصولية.',
        longDescription: 'وسم وصفي يربط العنوان النصي بالحقل المباشر عبر سمة for المطبقة مع id الحقل؛ مما يوسع مساحة النقر ويمكّن قارئات الشاشة من نطق اسم الحقل.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<label for="user-email">البريد الإلكتروني:</label>
<input type="email" id="user-email" name="email">`
        ],
        expectedOutput: [
            'تركيز مؤشر الكتابة داخل الحقل فور النقر على النص الوصفي المكتوب في Label.'
        ],
        professionalTips: 'ربط label بـ for يعتبر شرطاً أساسياً لتقييم إمكانية الوصول (Accessibility) وضمان تجربة استخدام سهلة على الأجهزة المحمولة.',
        commonMistakes: {
            wrong: `<!-- كتابة نص وصفي بجانب الحقل بدون وسم label أو ربط for -->
<span>الاسم:</span>
<input type="text">`,
            right: `<label for="username">الاسم:</label>
<input type="text" id="username">`,
            explanation: 'عدم استخدام <label> المربوط بـ for يمنع المكفوفين من معرفة الحقل المطلوب تعبئته عند التنقل.'
        },
        thinkingWay: 'اعتبر <label> بمثابة اليافتة المثبتة على الصندوق؛ تخبر الزائر بمحتوى الصندوق وتتيح فتح الصندوق بالنقر عليها.',
        relatedMethods: ['html-input-text'],
        keywords: ['<label>', 'label', 'for attribute', 'accessibility', 'form accessibility']
    },
    {
        id: 'html-input-text',
        name: '<input type="text">',
        shortDescription: 'حقل الإدخال النصي الأحادي الأساسي للأسماء والعناوين.',
        longDescription: 'النوع الافتراضي والأكثر شيوعاً لسمة input؛ يُستخدم لاستقبال النصوص القصيرة في سطر واحد دون تشفير.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<label for="fullname">الاسم الكامل:</label>
<input type="text" id="fullname" name="fullname" placeholder="أدخل اسمك هنا">`
        ],
        expectedOutput: [
            'عرض حقل إدخال نصي مستطيل يتلقى الحروف والأرقام على سطر واحد.'
        ],
        professionalTips: 'استخدم سمة placeholder لإظهار نص توضيحي مؤقت داخل الحقل يختفي فور بدء الكتابة.',
        commonMistakes: {
            wrong: `<!-- استخدام placeholder كبديل عن وسم label الرئيسي -->
<input type="text" placeholder="الاسم الكامل">`,
            right: `<label for="name">الاسم الكامل:</label>
<input type="text" id="name" placeholder="مثال: أحمد علي">`,
            explanation: 'الـ placeholder يختفي بمجرد الكتابة مما يربك المستخدم، كما أن قارئات الشاشة لا تعتمده كعنوان ثابت.'
        },
        thinkingWay: 'فكر في input text كسطر فارغ في استمارة ورقية ينتظر منك كتابة كلمة أو اسم.',
        relatedMethods: ['html-label-tag', 'html-textarea'],
        keywords: ['<input type="text">', 'input text', 'text field', 'placeholder']
    },
    {
        id: 'html-input-email',
        name: '<input type="email">',
        shortDescription: 'حقل إدخال البريد الإلكتروني مع الفحص التلقائي للصيغة.',
        longDescription: 'حقل مخصص لتلقي عناوين البريد الإلكتروني؛ يستدعي لوحة مفاتيح مخصصة في الهواتف الذكية تحتوي على زر @، ويتحقق آلياً من وجود علامة @ والنطاق.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<label for="email">البريد الإلكتروني:</label>
<input type="email" id="email" name="email" required>`
        ],
        expectedOutput: [
            'فتح الكيبورد المخصص للأيميل بالهاتف ومنع إرسال النموذج إذا كانت صيغة الإيميل معطوبة.'
        ],
        professionalTips: 'أضف سمة autocomplete="email" لمساعدة المتصفح على التعبئة التلقائية المباشرة للبريد الخاص بالمستخدم.',
        commonMistakes: {
            wrong: `<!-- استخدام type="text" لاستقبال البريد الإلكتروني -->
<input type="text" id="email">`,
            right: `<input type="email" id="email">`,
            explanation: 'استخدام text بدلاً من email يحرم مستخدم الموبايل من كيبورد البريد المباشر ويوقف الفحص التلقائي.'
        },
        thinkingWay: 'اعتبر type="email" بمثابة المفتش الذي يرفض إدخال الجملة إلا إذا احتوت على رمز @ ونطاق صحيح.',
        relatedMethods: ['html-input-password'],
        keywords: ['<input type="email">', 'input email', 'email field', 'email validation']
    },
    {
        id: 'html-input-password',
        name: '<input type="password">',
        shortDescription: 'حقل إدخال كلمة المرور مع إخفاء المحتوى آمنياً.',
        longDescription: 'حقل مخصص لإدخال كلمات السر والمفاتيح الحساسة؛ يحول الحروف الظاهرة إلى نقاط أو دوائر لحماية البيانات من المتطفلين.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<label for="pass">كلمة المرور:</label>
<input type="password" id="pass" name="password" minlength="8" required>`
        ],
        expectedOutput: [
            'تشفير وحجب الحروف المكتوبة وتحويلها إلى دوائر سوداء لحماية الخصوصية.'
        ],
        professionalTips: 'استخدم سمة autocomplete="current-password" أو "new-password" لتسهيل استدعاء مدراء كلمات المرور الآمنة (Password Managers).',
        commonMistakes: {
            wrong: `<!-- إهمال وضع minlength لفرز حد أدنى لطول كلمة المرور -->
<input type="password" id="pass">`,
            right: `<input type="password" id="pass" minlength="8" required>`,
            explanation: 'عدم تقييد طول كلمة السر يتيح للمستخدم إدخال كلمات مرور ضعيفة جداً تنتهك الأمان.'
        },
        thinkingWay: 'فكر في type="password" كخزنة سرية تخفي الأرقام المضروبة فوراً عن الأعين المجاورة.',
        relatedMethods: ['html-input-email'],
        keywords: ['<input type="password">', 'password field', 'hide password', 'security']
    },
    {
        id: 'html-input-number',
        name: '<input type="number">',
        shortDescription: 'حقل إدخال القيم الرقمية مع أزرار الزيادة والنقصان.',
        longDescription: 'حقل مخصص لتقييد الإدخال على الأرقام الحسابية فقط، مع توفير أزرار تحكم بالقيم وزيادة ونقصان المدى عبر min و max.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `<label for="age">العمر:</label>
<input type="number" id="age" name="age" min="18" max="99">`
        ],
        expectedOutput: [
            'حظر كتابة الحروف الأبجدية وتفعيل لوحة الأرقام بالحاسوب والهاتف.'
        ],
        professionalTips: 'لا تستخدم type="number" لأرقام بطاقات الائتمان أو الهواتف؛ استخدم بدلاً منها type="tel" أو type="text" مع pattern لأن أرقام البطاقات لا تخضع للزيادة والنقصان الحسابي.',
        commonMistakes: {
            wrong: `<!-- استخدام number لأرقام الهواتف أو البطاقات البنكية -->
<input type="number" id="phone">`,
            right: `<input type="tel" id="phone">`,
            explanation: 'الحقل number يحذف الأصفار المبتدئة (مثل 050 يصبح 50) ويسمح برسم أسهم الزيادة والنقصان غير المناسبة للهاتف.'
        },
        thinkingWay: 'اعتبر type="number" بالعداد الحسابي المخصص للكميات والأعمار والأرقام الرياضية.',
        relatedMethods: ['html-input-tel'],
        keywords: ['<input type="number">', 'number field', 'min max', 'numeric input']
    },
    {
        id: 'html-input-tel',
        name: '<input type="tel">',
        shortDescription: 'حقل إدخال أرقام الهواتف وتفعيل لوحة الاتصال بالموبايل.',
        longDescription: 'حقل لاستقبال أرقام الهواتف؛ يستدعي لوحة مفاتيح الاتصال الهاتفي بالهواتف المحمولة دون إزالة الأصفار المبتدئة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `<label for="mobile">رقم الجوال:</label>
<input type="tel" id="mobile" name="mobile" placeholder="+966500000000">`
        ],
        expectedOutput: [
            'فتح كيبورد الأرقام بالهاتف مع الحفاظ على الأصفار والرموز مثل +.'
        ],
        professionalTips: 'اقرن type="tel" بالخاصية pattern باستخدام التعبيرات النمطية (RegEx) لفرض الصيغة الرقمية التابعة لدولتك.',
        commonMistakes: {
            wrong: `<!-- استخدام type="number" وتوقع الحفاظ على الصفر المبتدئ للرقم -->
<input type="number" placeholder="0500000000">`,
            right: `<input type="tel" placeholder="0500000000">`,
            explanation: 'الـ type="number" يقوم تلقائياً بإلغاء الصفر الأول المكتوب في رقم الهاتف.'
        },
        thinkingWay: 'فكر في type="tel" كشاشة إدخال الرقم في تطبيق المكالمات الهاتفية.',
        relatedMethods: ['html-input-number'],
        keywords: ['<input type="tel">', 'tel field', 'phone input', 'mobile keyboard']
    },
    {
        id: 'html-input-checkbox',
        name: '<input type="checkbox">',
        shortDescription: 'مربع الاختيار الثنائي للموافقة وتحديد الخيارات المتعددة.',
        longDescription: 'زر تحديد مربع يتيح للمستخدم اختيار خيار واحد أو اختيار خيارات متعددة بشكل مستقل (مثل التعهّد بالشروط أو تحديد الاهتمامات).',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<input type="checkbox" id="terms" name="terms" required>
<label for="terms">أوافق على الشروط والأحكام</label>`
        ],
        expectedOutput: [
            'رسم مربع اختيار قابل للتفعيل والتبديل (Checked/Unchecked).'
        ],
        professionalTips: 'ضع دائماً وسم <label> بعد مربع الـ checkbox لتسهيل النقر عليه وتوسيع المساحة القابلة للتفاعل على أجهزة اللمس.',
        commonMistakes: {
            wrong: `<!-- كتابة نص عادي بجانب التشيك بوكس دون استخدام label المربوط بـ for -->
<span>الموافقة</span> <input type="checkbox">`,
            right: `<input type="checkbox" id="agree">
<label for="agree">الموافقة على الشروط</label>`,
            explanation: 'نسيان ربط label يمنع المستخدم من النقر على النص لتفعيل مربع الاختيار.'
        },
        thinkingWay: 'اعتبر checkbox كمربع الصح في أوراق الاستبيان؛ يمكنك وضع صح على خيار واحد أو أكثر.',
        relatedMethods: ['html-input-radio'],
        keywords: ['<input type="checkbox">', 'checkbox', 'multi-select', 'toggle choice']
    },
    {
        id: 'html-input-radio',
        name: '<input type="radio">',
        shortDescription: 'زر الاختيار الأحادي الحصري من مجموعة خيارات متقابلة.',
        longDescription: 'زر اختيار دائري يُستخدم عندما يتطلب الأمر اختيار عنصر واحد فقط من بين مجموعة خيارات تشترك جميعها بنفس سمة name.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<input type="radio" id="male" name="gender" value="male">
<label for="male">ذكر</label>

<input type="radio" id="female" name="gender" value="female">
<label for="female">أنثى</label>`
        ],
        expectedOutput: [
            'السماح باختيار خيار واحد فقط؛ وتلغى النقطة من الخيار الأول فور اختيار الثاني.'
        ],
        professionalTips: 'لكي تعمل أزرار الـ radio كقائمة حصرية واحدة، يجب حتماً إعطاؤها نفس قيمة سمة name في جميع الخيارات المتقابلة.',
        commonMistakes: {
            wrong: `<!-- كتابة name مختلف لكل زر radio يمنع الحصرية -->
<input type="radio" name="g1"> ذكر
<input type="radio" name="g2"> أنثى`,
            right: `<input type="radio" name="gender" id="m"><label for="m">ذكر</label>
<input type="radio" name="gender" id="f"><label for="f">أنثى</label>`,
            explanation: 'اختلاف اسم name يمنع أزرار الراديو من تفعيل خاصية الاختيار الأحادي المفرد.'
        },
        thinkingWay: 'فكر في radio كأزرار الراديو القديمة في السيارة؛ الضغط على محطة تلغي المحطة السابقة آلياً.',
        relatedMethods: ['html-input-checkbox'],
        keywords: ['<input type="radio">', 'radio button', 'single choice', 'exclusive selection']
    },
    {
        id: 'html-input-file',
        name: '<input type="file">',
        shortDescription: 'حقل رفع الملفات والمستندات والصور من الجهاز.',
        longDescription: 'حقل مخصص لإرفاق الملفات من جهاز المستخدم؛ ويستدعي خيار accept لتحديد امتدادات الملفات المسموح بها.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `<label for="avatar">اختر صورة الشخصية:</label>
<input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg">`
        ],
        expectedOutput: [
            'فتح نافذة تصفح ملفات النظام المحلي لاختيار ملف وإرفاقه.'
        ],
        professionalTips: 'عند رفع ملفات عبر نموذج الـ <form>، يجب حتماً إضافة السمة enctype="multipart/form-data" لوسم الاستمارة وإلا لن يصل الملف للخدمات الخادمة.',
        commonMistakes: {
            wrong: `<!-- نسيان enctype في النموذج عند استخدام input file -->
<form action="/upload" method="POST">
  <input type="file" name="doc">
</form>`,
            right: `<form action="/upload" method="POST" enctype="multipart/form-data">
  <input type="file" name="doc">
</form>`,
            explanation: 'بدون enctype="multipart/form-data" يرسل المتصفح اسم الملف النصي فقط دون إرسال مادة الملف الفعلية.'
        },
        thinkingWay: 'اعتبر input file بمثابة ماسح الضوئي المرفق الذي يسحب الملف من حاسوبك ويرفقه بالاستمارة.',
        relatedMethods: ['html-form-tag'],
        keywords: ['<input type="file">', 'file upload', 'accept attribute', 'enctype', 'multipart']
    },
    {
        id: 'html-input-date',
        name: '<input type="date">',
        shortDescription: 'حقل إدخال التاريخ مع منشئ التقويم التفاعلي.',
        longDescription: 'حقل مخصص لتسجيل التواريخ؛ يظهر واجهة تقويم تفاعلية حية (Date Picker) لتحديد اليوم والشهر والسنة بدقة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `<label for="birth">تاريخ الميلاد:</label>
<input type="date" id="birth" name="dob" min="1950-01-01" max="2026-12-31">`
        ],
        expectedOutput: [
            'عرض حقل مدمج ببديل تقويم تفاعلي يتيح اختيار التاريخ بنقرة زر.'
        ],
        professionalTips: 'استخدم سمات min و max لتحديد نطاق التواريخ المسموح باختيارها (مثل منع اختيار تواريخ مستقبلية لحقول الميلاد).',
        commonMistakes: {
            wrong: `<!-- كتابة صيغة التاريخ بالصيغة المحلية بدلاً من YYYY-MM-DD في min و max -->
<input type="date" min="01/01/2026">`,
            right: `<input type="date" min="2026-01-01">`,
            explanation: 'سمات min و max في حقل التاريخ تتطلب حتماً الصيغة المعيارية الدولية (YYYY-MM-DD).'
        },
        thinkingWay: 'فكر في type="date" بنتيجة الحائط الرقمية التي تختار منها التاريخ بلمسة واحدة.',
        relatedMethods: ['html-input-number'],
        keywords: ['<input type="date">', 'date picker', 'calendar input', 'YYYY-MM-DD']
    },
    {
        id: 'html-textarea',
        name: '<textarea>',
        shortDescription: 'صندوق النص متعدد الأسطر للرسائل والملاحظات المطولة.',
        longDescription: 'عنصر مخصص لاستقبال النصوص الطويلة والمتشعبة على عدة أسطر (مثل الرسائل والتعليقات) بخلاف حقل input المقتصر على سطر واحد.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<label for="msg">رسالتك:</label>
<textarea id="msg" name="message" rows="5" cols="30" placeholder="اكتب تفاصيل استفسارك..."></textarea>`
        ],
        expectedOutput: [
            'رسم مربع نصي كبير الحجم يتيح الكتابة والتنقل بين عدة أسطر.'
        ],
        professionalTips: 'استخدم خاصية CSS التالية resize: vertical لتسمح للمستخدم بتكبير الصندوق رأسياً فقط دون تخريب محاذاة العرض الأفقي للواجهة.',
        commonMistakes: {
            wrong: `<!-- محاولة إغلاق textarea كـ void element ذاتي الإغلاق -->
<textarea name="msg" />`,
            right: `<textarea name="msg"></textarea>`,
            explanation: 'الوسم <textarea> ليس وسم حقل منفرد؛ يجب إغلاقه بـ </textarea> صريح لضمان سلامة الـ DOM.'
        },
        thinkingWay: 'اعتبر <textarea> بمثابة الورقة الكاملة المسطرة المخصصة لكتابة الرسائل الطويلة.',
        relatedMethods: ['html-input-text'],
        keywords: ['<textarea>', 'textarea', 'multiline text', 'comment box', 'rows cols']
    },
    {
        id: 'html-select-option',
        name: '<select> & <option>',
        shortDescription: 'القائمة المنسدلة الموفرة للمساحة لتحديد خيار من مجموعة.',
        longDescription: 'عنصر القائمة المنسدلة؛ يُستخدم <select> كحاوية رئيسية للمجموعة المنسدلة، بينما يمثل <option> الخيار الفردي القابل للاختيار.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<label for="country">الدولة:</label>
<select id="country" name="country">
  <option value="" disabled selected>اختر الدولة...</option>
  <option value="sa">المملكة العربية السعودية</option>
  <option value="eg">مصر</option>
</select>`
        ],
        expectedOutput: [
            'إظهار زر منسدل يفتح قائمة خيارات عند النقر ويغلق فور تحديد أحدها.'
        ],
        professionalTips: 'ضع خياراً أولاً بـ value="" ومزوداً بـ disabled selected ليُستخدم كعنوان توضيحي مبدئي للقائمة قبل الاختيار.',
        commonMistakes: {
            wrong: `<!-- نسيان سمة value داخل أوسام option -->
<option>السعودية</option>`,
            right: `<option value="SA">السعودية</option>`,
            explanation: 'بدون السمة value يضطر السيرفر لاستقبال النص الظاهري بدلاً من الرمز المختصر المعتمد لقواعد البيانات.'
        },
        thinkingWay: 'فكر في <select> كقائمة الطعام المنسدلة في المطعم؛ تفتح القائمة لتختار وجبة واحدة.',
        relatedMethods: ['html-input-radio'],
        keywords: ['<select>', '<option>', 'dropdown list', 'select option', 'menu']
    },
    {
        id: 'html-button',
        name: '<button>',
        shortDescription: 'عنصر الأزرار التفاعلية لإرسال النموذج أو تنفيذ الأوامر.',
        longDescription: 'عنصر زر التفاعل القياسي؛ ويشترط حتماً تحديد سمة type لتفادي السلوك العشوائي؛ فتحديد type="submit" يرسل الاستمارة، بينما type="button" يجعله زر جافا سكريبت محايد.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<!-- زر إرسال الاستمارة الرسمي -->
<button type="submit">حفظ البيانات</button>

<!-- زر إجراء برمي محايد بـ JS -->
<button type="button" onclick="cancel()">إلغاء</button>`
        ],
        expectedOutput: [
            'رسم زر تفاعلي قابل للنقر والتركيز عبر زر Tab بالكي بورد.'
        ],
        professionalTips: 'النوع الافتراضي لزر <button> داخل الـ form هو submit تلقائياً؛ لذا إذا أردت زراً لإلغاء الأمر أو فتح نافذة، يجب حتماً صياغة type="button" لمنع إرسال الاستمارة بالخطأ.',
        commonMistakes: {
            wrong: `<!-- كتابة زر داخل النموذج بدون تحديد type -->
<button onclick="doSomething()">انقر هنا</button>`,
            right: `<button type="button" onclick="doSomething()">انقر هنا</button>`,
            explanation: 'نسيان type يجعل الزر يتصرف كـ submit آلياً مما يتسبب في إعادة تحميل الصفحة وإرسال الاستمارة.'
        },
        thinkingWay: 'اعتبر <button> بمثابة مفتاح التشغيل الكهربائي؛ يُحدد نوعه نوع الإشارة التي سيعطيها للنظام.',
        relatedMethods: ['html-form-tag'],
        keywords: ['<button>', 'button', 'type="submit"', 'type="button"', 'form submit']
    },
    {
        id: 'html-validation-attributes',
        name: 'Form Validation Attributes',
        shortDescription: 'سمات التحقق المباشر أصلياً دون الحاجة للسكربتات (required, pattern...).',
        longDescription: 'مجموعة من السمات القياسية (required, pattern, minlength, maxlength, min, max, autocomplete) تُضاف للمدخلات لفرض الفحص الفوري بالمتصفح وتحسين أمان البيانات.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `<input 
  type="text" 
  name="zipcode" 
  required 
  pattern="[0-9]{5}" 
  maxlength="5" 
  autocomplete="postal-code">`
        ],
        expectedOutput: [
            'إجبار المستخدم على تعبئة الحقل ومطابقة النمط المطلوب قبل السماح بالإرسال.'
        ],
        professionalTips: 'استخدم سمة pattern المعتمدة على التعبيرات النمطية (RegEx) لفرض قيود دقيقة على المدخلات مثل الرمز البريدي أو أرقام الهويات.',
        commonMistakes: {
            wrong: `<!-- الاعتماد على JavaScript فقط للفحص وتجاهل سمات HTML المباشرة -->
<input type="text" id="code">`,
            right: `<input type="text" id="code" required minlength="4">`,
            explanation: 'استخدام سمات HTML يتيح فحصاً فورياً سريعاً حتى لو تعطبت السكربتات في متصفح الزائر.'
        },
        thinkingWay: 'فكر في سمات الفحص كحارس البوابة الذي يدقق في بطاقة الهوية ويرفض المبتدئ حتى يكمل الشروط.',
        relatedMethods: ['html-input-text', 'html-form-novalidate'],
        keywords: ['required', 'pattern', 'minlength', 'maxlength', 'autocomplete', 'validation']
    },
    {
        id: 'html-fieldset-legend',
        name: '<fieldset> & <legend>',
        shortDescription: 'تجميع وتأطير الحقول المترابطة مع إعطائها عنواناً تنظيمياً.',
        longDescription: 'عنصران دلاليان متكاملان؛ يُستخدم <fieldset> لتأطير مجموعة حقول مترابطة بداخل الاستمارة (مثل بيانات العنوان)، بينما يقدم <legend> العنوان الرئيسي لهذا الإطار.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `<fieldset>
  <legend>عنوان الشحن</legend>
  <label for="city">المدينة:</label>
  <input type="text" id="city">
</fieldset>`
        ],
        expectedOutput: [
            'رسم إطار محيط بكتلة الحقول المترابطة مع دمج العنوان في أعلى السور البصري للإطار.'
        ],
        professionalTips: 'استخدام <fieldset> و <legend> مفيد جداً في النماذج الضخمة لتسهيل فهم المجموعات على مستخدمي قارئات الشاشة.',
        commonMistakes: {
            wrong: `<!-- استخدام div مع h3 لتأطير الحقول المترابطة -->
<div class="group-box">
  <h3>عنوان الشحن</h3>
  <input type="text">
</div>`,
            right: `<fieldset>
  <legend>عنوان الشحن</legend>
  <input type="text">
</fieldset>`,
            explanation: 'الوسم <fieldset> يوفر ترابطاً دلالياً حقيقياً يقرأه الضرير ككتلة واحدة قبل الدخول للحقول.',
        },
        thinkingWay: 'اعتبر <fieldset> بمثابة السور الجداري المحيط بالحديقة، و <legend> كاللافتة المعلقة على بوابتها.',
        relatedMethods: ['html-form-tag'],
        keywords: ['<fieldset>', '<legend>', 'form group', 'field grouping', 'accessibility group']
    }
];