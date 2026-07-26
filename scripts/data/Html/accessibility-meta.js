export const accessibilityMetaData = [
    {
        id: 'html-first-rule-aria',
        name: 'First Rule of ARIA',
        shortDescription: 'القاعدة الذهبية: تقديم أوسام HTML الدلالية الأصلية دائماً على ARIA.',
        longDescription: 'المعيار الأول العالمي في الوصولية؛ ينص على عدم استخدام سمات ARIA إطلاقاً إذا كان هناك وسم HTML أصلي (مثل <button>, <nav>, <header>) يؤدي الغرض؛ لأن الأوسام الأصلية توفر التفاعلية عبر لوحة المفاتيح آلياً.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<!-- النمط غير المستحسن (استخدام ARIA على div) -->
<!-- <div role="button" tabindex="0">حفظ</div> -->

<!-- النمط المعتمد أصلياً (أفضل ممارسة) -->
<button type="button">حفظ</button>`
        ],
        expectedOutput: [
            'الاستفادة من الدعم الأصلي للمتصفح للتركيز وإحداث النقر عبر الكيبورد آلياً.'
        ],
        professionalTips: 'تذكر دائماً جملة خبراء الوصولية: "No ARIA is better than Bad ARIA"؛ استخدام وسم دلالي أصلي يغنيك عن كتابة عشرات السطور البرمجية لمحاكاة أزرار التحكم.',
        commonMistakes: {
            wrong: `<!-- تحويل div إلى زر بـ ARIA مع نسيان إضافة أحداث الكيبورد بـ JS -->
<div role="button" onclick="save()">حفظ</div>`,
            right: `<button type="button" onclick="save()">حفظ</button>`,
            explanation: 'الـ div المزود بـ role="button" لا يستجيب لزر Enter أو Space بالكيبورد تلقائياً، بخلاف وسم <button> الأصلي.'
        },
        thinkingWay: 'اعتبر ARIA بمثابة الطرف الصناعي؛ لا تستخدمه إلا إذا كان العنصر الطبيعي الأصلي مفقوداً غير متاح.',
        relatedMethods: ['html-aria-role', 'html-button'],
        keywords: ['First Rule of ARIA', 'accessibility', 'WCAG', 'semantic html first', 'ARIA vs Semantic']
    },
    {
        id: 'html-aria-label',
        name: 'aria-label',
        shortDescription: 'تزويد العناصر التي تفتقر للنص الظاهري بوصف نصي صريح لقارئات الشاشة.',
        longDescription: 'سمة توصيفية تُستخدم لإعطاء اسم غير مرئي بصرياً للعنصر التفاعلي (مثل أزرار الأيقونات المفردة أو زر إغلاق X) ليقوم قارئ الشاشة بقراءته المباشرة للضرير.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<!-- زر إغلاق يحتوي على أيقونة X فقط بدون نص ظاهري -->
<button type="button" aria-label="إغلاق النافذة المنبثقة">
  <svg>...</svg>
</button>`
        ],
        expectedOutput: [
            'نطق الجملة "إغلاق النافذة المنبثقة، زر" فور وصول مستخدم قارئ الشاشة للزر.'
        ],
        professionalTips: 'تجنب استخدام aria-label إذا كان هناك نص وصفي مكتوب وظاهر بالفعل بجانب العنصر؛ في تلك الحالة استخدم aria-labelledby لتفادي التكرار.',
        commonMistakes: {
            wrong: `<!-- زر يحتوي على أيقونة فقط بدون نص وبدون aria-label -->
<button type="button"><i class="icon-close"></i></button>`,
            right: `<button type="button" aria-label="إغلاق"><i class="icon-close"></i></button>`,
            explanation: 'نسيان aria-label في أزرار الأيقونات يجعل قارئ الشاشة ينطق كلمة "زر" مبهمة دون توضيح وظيفته.'
        },
        thinkingWay: 'فكر في aria-label كالصوت المخفي الذي يهمس في أذن القارئ الآلي باسم الزر عندما يكون الزر بلا كلمات ظاهرة.',
        relatedMethods: ['html-aria-labelledby', 'html-aria-describedby'],
        keywords: ['aria-label', 'screen reader label', 'accessible name', 'icon button accessibility']
    },
    {
        id: 'html-aria-labelledby',
        name: 'aria-labelledby',
        shortDescription: 'ربط مسمى العنصر المتاح بمعرف id لعنصر نصي آخر ظاهر في الصفحة.',
        longDescription: 'سمة ربط تُسند إليها قيمة id لعنصر نصي موجود بالفعل بالواجهة (مثل عنوان النافذة المنبثقة)، ليصبح هذا العنوان هو المسمى الرسمي المعتمد للعنصر في شجرة الوصول.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `<div role="dialog" aria-labelledby="modal-title">
  <h2 id="modal-title">تأكيد خيار الشراء</h2>
  <p>هل أنت متأكد من الدفع؟</p>
</div>`
        ],
        expectedOutput: [
            'اعتماد نص <h2> المربوط بـ id كعنوان رسمي للمودال في تقارير إمكانية الوصول.'
        ],
        professionalTips: 'تتميز aria-labelledby بأعلى أولوية في تسمية العناصر، وتتغلب على جميع السمات الأخرى مثل aria-label أو النص الداخلي.',
        commonMistakes: {
            wrong: `<!-- كتابة id غير مطابق داخل aria-labelledby -->
<section aria-labelledby="MainTitle">
  <h2 id="maintitle">العنوان</h2>
</section>`,
            right: `<section aria-labelledby="main-title">
  <h2 id="main-title">العنوان</h2>
</section>`,
            explanation: 'عدم تطابق الـ id يمنع المحرك من العثور على العنصر المرجعي المسمى.'
        },
        thinkingWay: 'اعتبر aria-labelledby بسهم يشير إلى لوحة عنوان معلقة في الصفحة ويقول للمكفوف: "اقرأ هذا العنوان لتعرف اسمي".',
        relatedMethods: ['html-aria-label', 'html-aria-describedby'],
        keywords: ['aria-labelledby', 'accessible name', 'dialog title', 'label association']
    },
    {
        id: 'html-aria-describedby',
        name: 'aria-describedby',
        shortDescription: 'ربط حقل الإدخال برابط التوضيح أو رسالة الخطأ المباشرة بـ id.',
        longDescription: 'سمة توضيحية تربط حقل الإدخال بـ id الخاص بالنص المساعد المكتوب أسفله (مثل تعليمات كلمة المرور أو رسائل الفحص)، ليقوم قارئ الشاشة بنطقه المباشر بعد الاسم.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `<label for="pass">كلمة المرور:</label>
<input type="password" id="pass" aria-describedby="pass-hint">
<span id="pass-hint">يجب أن تحتوي على 8 أحرف ورمز خاص على الأقل.</span>`
        ],
        expectedOutput: [
            'قراءة النص المساعد "يجب أن تحتوي..." آلياً فور توجيه التركيز لداخل حقل كلمة السر.'
        ],
        professionalTips: 'ممتازة جداً لربط حقول النماذج برسائل الخطأ الديناميكية الناتجة عن الفحص (Validation Errors) لإشعار الضرير بالخطأ فور حدوثه.',
        commonMistakes: {
            wrong: `<!-- كتابة ملاحظة تحت الحقل دون ربطها بـ aria-describedby -->
<input type="text" id="code">
<small>ادخل الرقم الوظيفي</small>`,
            right: `<input type="text" id="code" aria-describedby="code-info">
<small id="code-info">ادخل الرقم الوظيفي</small>`,
            explanation: 'نسيان الربط يجعل القارئ الآلي يكتفي بنطق اسم الحقل ويتجاهل التوضيح السفلي المساعد.'
        },
        thinkingWay: 'فكر في aria-describedby كسطر الهامش التوضيحي الذي يشرح كيفية تعبئة الخانة.',
        relatedMethods: ['html-aria-labelledby', 'html-label-tag'],
        keywords: ['aria-describedby', 'field description', 'form hint', 'error message accessibility']
    },
    {
        id: 'html-aria-expanded',
        name: 'aria-expanded',
        shortDescription: 'إشعار قارئات الشاشة بحالة فتح أو طي القوائم والنوافذ التفاعلية.',
        longDescription: 'سمة تفاعلية حية تأخذ القيمة "true" عندما تكون القائمة المنسدلة أو النافذة مفتوحة، و "false" عندما تكون مغلقة، لتحديث حالة الزر تفاعلياً للمكفوفين.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `<!-- زر القائمة في حالة الإغلاق المطوية -->
<button type="button" aria-expanded="false" aria-controls="menu-box">
  القائمة الرئيسية
</button>

<ul id="menu-box" hidden>...</ul>`
        ],
        expectedOutput: [
            'إعلان حالة القائمة "مطوي / Expanded: false" أو "مفتوح / Expanded: true" فور تغير الحالة بـ JS.'
        ],
        professionalTips: 'تأكد من تحديث قيمة aria-expanded تفاعلياً بـ JavaScript فور فتح أو إغلاق القائمة لتظل الحالة المتاحة متزامنة مع العرض البصري.',
        commonMistakes: {
            wrong: `<!-- تغيير شكل القائمة بـ CSS وتجاهل تحديث قيمة aria-expanded بـ JS -->
<button aria-expanded="false" onclick="openMenu()">فتح</button>`,
            right: `// تغيير القيمة ديناميكياً بـ JS
btn.setAttribute('aria-expanded', isMenuOpen ? 'true' : 'false');`,
            explanation: 'تغيير شكل القائمة بصرياً فقط يترك الكفيف عاجزاً عن معرفة ما إذا كانت القائمة قد فتحت بالفعل أم لا.'
        },
        thinkingWay: 'اعتبر aria-expanded بالمؤشر الضوئي الذي يضيء عند فتح الباب وينطفئ عند إغلاقه.',
        relatedMethods: ['html-button', 'html-popovertarget-attribute'],
        keywords: ['aria-expanded', 'collapsible menu', 'accordion state', 'toggle state']
    },
    {
        id: 'html-aria-hidden',
        name: 'aria-hidden="true"',
        shortDescription: 'إخفاء العناصر والأيقونات الديكورية عن شجرة القراءة المتاحة.',
        longDescription: 'سمة تُضاف للأيقونات، والرموز الزخرفية، وأشكال SVG التجميلية لمنع قارئات الشاشة من قراءتها وتجنب تشتيت الضرير بالرموز الشاطحة.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<button type="button">
  <!-- إخفاء الأيقونة التجميلية مع الإبقاء على النص الظاهر -->
  <svg aria-hidden="true">...</svg>
  <span>حفظ التغييرات</span>
</button>`
        ],
        expectedOutput: [
            'تجاهل قارئ الشاشة للرمز الزخرفي والاكتفاء بنطق النص المباشر "حفظ التغييرات".'
        ],
        professionalTips: 'لا تضع aria-hidden="true" على عنصر تفاعلي قابل للنقر أو يحتوي على حقول إدخال؛ لأن ذلك يجعله مخفياً كلياً عن أجهزة المكفوفين.',
        commonMistakes: {
            wrong: `<!-- وضع aria-hidden="true" على الزر بالكامل بدلاً من الأيقونة -->
<button type="button" aria-hidden="true">حذف</button>`,
            right: `<button type="button"><svg aria-hidden="true"></svg> حذف</button>`,
            explanation: 'وضع السمة على الزر كاملاً يخفيه تماماً عن تقنيات المساعدة رغم كونه ظاهراً بصرياً.'
        },
        thinkingWay: 'فكر في aria-hidden="true" كنظارة حجب تجعل العناصر الزخرفية غير مرئية بالنسبة للآلة القارئة.',
        relatedMethods: ['html-svg', 'html-aria-label'],
        keywords: ['aria-hidden', 'hide decorative icon', 'accessibility cleanup', 'screen reader ignore']
    },
    {
        id: 'html-aria-live',
        name: 'aria-live="polite | assertive"',
        shortDescription: 'إعلان التنبيهات والتحديثات الديناميكية الفورية فور ظهورها بالواجهة.',
        longDescription: 'منطقة حية تخبر قارئ الشاشة بنطق التحديثات الطارئة (مثل رسائل النجاح أو التنبيهات)؛ القيمة polite تنتظر صمت المستخدم، بينما assertive تقاطع القراءة فوراً.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `<!-- منطقة التنبيهات غير المباشرة (تنتظر انتهاء القراءة) -->
<div aria-live="polite" id="toast-message"></div>

<!-- منطقة التنبيهات الطارئة (تقاطع القراءة فوراً) -->
<div aria-live="assertive" id="error-alert"></div>`
        ],
        expectedOutput: [
            'نطق النص المحقون حديثاً بداخل الحاوية بـ JS آلياً دون الحاجة لنقل التركيز.'
        ],
        professionalTips: 'استخدم aria-live="polite" للتنبيهات العادية (مثل "تم إضافة المنتج للسلة")، واحتفظ بـ assertive للأخطاء الحادة وانقطاع الاتصال.',
        commonMistakes: {
            wrong: `<!-- حقن رسائل الخطأ بـ JS داخل div عادي بدون تفعيل aria-live -->
<div id="status"></div>`,
            right: `<div id="status" aria-live="polite"></div>`,
            explanation: 'بدون aria-live، لن يشعر مستخدم قارئ الشاشة بالتحديث الديناميكي الحاصل في الواجهة.'
        },
        thinkingWay: 'اعتبر aria-live بمثابة مذيع الطوارئ؛ يعلن الأخبار الجديدة فور حدوثها في الخلفية.',
        relatedMethods: ['html-aria-describedby'],
        keywords: ['aria-live', 'polite', 'assertive', 'live region', 'dynamic alerts accessibility']
    },
    {
        id: 'html-tabindex',
        name: 'tabindex',
        shortDescription: 'التحكم بترتيب تنقل الكي بورد (التركيز على 0 و -1 والتحذير من القيم الموجبة).',
        longDescription: 'سمة توجيه التركيز؛ القيمة 0 تجعل العنصر غير التفاعلي قابلاً للتنقل بـ Tab بنفس الترتيب الطبيعي، والقيمة -1 تجعله قابلاً للتركيز بـ JS فقط عبر .focus()، ويحظر استخدام الأرقام الموجبة.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `<!-- جعل بطاقة div قابلة للتركيز بالكي بورد بنفس الترتيب -->
<div tabindex="0" role="article">محتوى قابل للتركيز</div>

<!-- جعل العنصر قابلاً للتركيز بـ JS فقط ودون مروره بزر Tab -->
<div id="modal" tabindex="-1">نافذة منبثقة</div>`
        ],
        expectedOutput: [
            'إتاحة تنقل لوحة المفاتيح عبر زر Tab للعناصر المحددة بـ 0 أو نقل التركيز لـ -1 بـ JS.'
        ],
        professionalTips: 'تحذير شديد: تجنب تماماً استخدام الأرقام الموجبة مثل tabindex="1" أو tabindex="5"؛ لأنها تدمر التسلسل الطبيعي لتنقل زر Tab وتخرب تجربة الوصولية.',
        commonMistakes: {
            wrong: `<!-- استخدام قيم موجبة لإجبار التنقل المباشر -->
<input tabindex="1">
<input tabindex="2">`,
            right: `<!-- ترك الترتيب الطبيعي لـ DOM أو استخدام 0 فقط -->
<input tabindex="0">`,
            explanation: 'القيم الموجبة في tabindex تكسر الترتيب الطبيعي للمتصفح وتجعل التصفح كابوساً لمستخدمي الكيبورد.'
        },
        thinkingWay: 'اعتبر tabindex بمثابة رقم المقعد؛ 0 يعني مقعد عادي بالدور، -1 مقعد خاص للاستدعاء، والأرقام الموجبة إرباك لطابور المنتظرين.',
        relatedMethods: ['html-first-rule-aria', 'html-button'],
        keywords: ['tabindex', 'keyboard accessibility', 'tabindex 0', 'tabindex -1', 'focus management']
    },
    {
        id: 'html-aria-role',
        name: 'role Attribute',
        shortDescription: 'تحديد الدور الوظيفي للعناصر غير الدلالية عند بناء المكونات المخصصة.',
        longDescription: 'سمة تُعرّف السلوك والنوع الوظيفي للعنصر (مثل role="button" أو role="region") عندما تضطر لبناء مكون مخصص بـ <div> ليعامله النظام كعنصر تفاعلي صريح.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `<!-- تعريف شريط تنقل مخصص عند الاضطرار -->
<div role="navigation" aria-label="تنقل فرعي">
  <a href="#">الرئيسية</a>
</div>`
        ],
        expectedOutput: [
            'إعلام تقنيات المساعدة بالنوع الوظيفي المخصص للعنصر داخل شجرة الوصولية.'
        ],
        professionalTips: 'تذكر دائماً أن إضافة role="button" لا تجعل العنصر زراً مكتملاً؛ يجب عليك إضافة tabindex="0" وأحداث الكيبورد بـ JS لتكتمل الوظيفية.',
        commonMistakes: {
            wrong: `<!-- استخدام role="button" وتوقع أن ينفذ الأحداث بـ Enter تلقائياً -->
<div role="button" onclick="doAction()">إرسال</div>`,
            right: `<button type="button" onclick="doAction()">إرسال</button>`,
            explanation: 'الـ role يعلن عن الاسم فقط ولكنه لا يضيف سلوك الكيبورد الافتراضي للزر.'
        },
        thinkingWay: 'فكر في role كالشارة التعريفية المكتوب عليها الوظيفة التخصصية للعنصر.',
        relatedMethods: ['html-first-rule-aria', 'html-tabindex'],
        keywords: ['role', 'ARIA role', 'role="button"', 'custom component accessibility']
    }
];