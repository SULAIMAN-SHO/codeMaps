export const transformsTransitionsData = [
    {
        id: 'css-transform-translate',
        name: 'transform: translate()',
        shortDescription: 'إزاحة ونقل العنصر أفقياً ورأسياً بالاعتماد المباشر على معالج الرسوميات (GPU).',
        longDescription: 'دالة تحويل بصرية تُحرك العنصر عن موقعه الأصلي بمسافات محددة (مثل translate(x, y) أو translate3d) دون أن تتسبب في إعادة احتساب أبعاد الصفحة (Reflow) معتمدة على كارت الشاشة المباشر.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* إزاحة الكرت لأعلى بـ 8px عند تحريك الماوس بأسلوب عالي الأداء */
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
}`
        ],
        expectedOutput: [
            'ارتفاع الكرت لأعلى بمرونة فائقة بـ 60 إطاراً بالثانية (60fps) دون اهتزاز الواجهة.'
        ],
        professionalTips: 'استخدم دائماً transform: translate() بدلاً من تغيير top أو left في التحريك البصري؛ لأن translate تتم معالجتها داخل طبقة مستقلة بكارت الشاشة (Composite Layer) ولا تسبب بطئاً بالمعالج.',
        commonMistakes: {
            wrong: `/* تحريك العناصر برفع قيمة top عند الـ hover */
.card:hover { top: -10px; }`,
            right: `.card:hover { transform: translateY(-10px); }`,
            explanation: 'تغيير top يجبر المتصفح على إعادة رسم وتخطيط الصفحة كاملة (Reflow/Repaint)، بينما translateY ناعمة جداً وسريعة.'
        },
        thinkingWay: 'اعتبر translate كنقل الشاشة الزجاجية التي تحمل العنصر بداخل طبقة طافية فوق الرسم الأصلي.',
        relatedMethods: ['css-transform-scale', 'css-transform-rotate'],
        keywords: ['translate()', 'translateY', 'translateX', 'GPU acceleration', 'smooth animation', 'reflow vs repaint']
    },
    {
        id: 'css-transform-scale',
        name: 'transform: scale()',
        shortDescription: 'تكبير وتصغير حجم العنصر بصرياً بنسب مضاعفة.',
        longDescription: 'دالة تحويل تتيح مضاعفة أو تقليص مقاسات العنصر البصرية عبر نسبة مئوية مضاعفة (مثل scale(1.1) لتكبيره بنسبة 10%، أو scale(0.9) لتصغيره).',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* إحداث تأثير النقر التفاعلي المريح عند الضغط على الزر */
.btn:active {
  transform: scale(0.96);
}`
        ],
        expectedOutput: [
            'انكماش حجم الزر لحظياً عند النقر ليعطي شعوراً حقيقياً بالاستجابة.'
        ],
        professionalTips: 'تأثير scale(1.05) مع transition ناعمة يُعد الحركة المعيارية المعتمدة عالمياً لبناء بطاقات المنتجات والكروت التفاعلية بـ 2026.',
        commonMistakes: {
            wrong: `/* تكبير العنصر بزيادة width و height عند الـ hover */
.card:hover { width: 320px; height: 420px; }`,
            right: `.card:hover { transform: scale(1.05); }`,
            explanation: 'تغيير width و height يتسبب في دفع وإزاحة العناصر المجاورة، بينما scale تكبر البوكس بصرياً بداخل طبقة معزولة.'
        },
        thinkingWay: 'فكر في scale كالعدسة المكبرة التي تقرب أو تبعد الصورة دون تغيير الحجم الفعلي للمقعد الذي تجلس عليه.',
        relatedMethods: ['css-transform-translate', 'css-transform-rotate'],
        keywords: ['scale()', 'scaleX', 'scaleY', 'zoom effect', 'button scale']
    },
    {
        id: 'css-transform-rotate',
        name: 'transform: rotate()',
        shortDescription: 'تدوير العنصر حول محوره بدرجات الزاوية (deg) أو الدورات المكتملة (turn).',
        longDescription: 'دالة تقوم بتدوير العنصر باتجاه عقارب الساعة أو عكسها استناداً لنقطة الارتكاز؛ وتقبل الدرجات الزاوية (مثل rotate(45deg)) أو الدورات المكتملة (مثل rotate(0.5turn)).',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* تدوير أيقونة السهم المنسدل بـ 180 درجة عند الفتح */
.dropdown.open .arrow-icon {
  transform: rotate(180deg);
}`
        ],
        expectedOutput: [
            'انقلاب ودوران أيقونة السهم لتتجه للأعلى فور تفعيل كلاس .open.'
        ],
        professionalTips: 'استخدم الوحدات المعاصرة 1turn بدلاً من 360deg عند إنشاء التحريكات الدائرية المستمرة؛ لأنها أسهل بالحقن والقراءة البرمجية.',
        commonMistakes: {
            wrong: `/* كتابة أرقام مجردة بدون تحديد وحدة الزاوية deg أو turn */
.icon { transform: rotate(90); }`,
            right: `.icon { transform: rotate(90deg); }`,
            explanation: 'الدالة rotate ترفض الأرقام المجردة وتشترط وجود وحدة قياس للزاوية مثل deg أو turn أو rad.'
        },
        thinkingWay: 'اعتبر rotate كتدوير مقود السيارة؛ توجّه العنصر للزاوية المكتوبة بمركز محوره.',
        relatedMethods: ['css-transform-origin', 'css-transform-translate'],
        keywords: ['rotate()', 'deg', 'turn', 'icon rotate', 'CSS rotation']
    },
    {
        id: 'css-transform-skew',
        name: 'transform: skew()',
        shortDescription: 'إمالة وانحراف العنصر على المحورين الأفقي والرأسي بأسلوب مائل.',
        longDescription: 'دالة تحويل تقوم بسحب وإمالة أضلاع العنصر بزوايا انحراف معينة (skewX, skewY)، مما يخلق أشكالاً متوازية أضلاع أو تأثيراً حركياً سينمائياً خفيفاً.',
        difficulty: 'medium',
        importance: 'normal',
        examples: [
            `/* إمالة الشارة الترويجية بزاوية 12 درجة لإعطاء مظهر عصري */
.promo-badge {
  transform: skewX(-12deg);
}`
        ],
        expectedOutput: [
            'إمالة وتشويه أضلاع الشارة أفقياً لتصنع شكلاً مائلاً جذاباً.'
        ],
        professionalTips: 'عند إمالة الحاوية بـ skewX، سيميل النص الداخلي أيضاً؛ لإلغاء إمالة النص أعد تطبيق skewX المعاكسة على النص الداخلي (مثل transform: skewX(12deg)).',
        commonMistakes: {
            wrong: `/* وضع زوايا إمالة ضخمة تتسبب في إخفاء النصوص وقص البوكس */
.box { transform: skew(85deg); }`,
            right: `.box { transform: skewX(-10deg); }`,
            explanation: 'الزوايا القريبة من 90 درجة تتسبب في امتداد وتشويه البوكس لسمك رفيع جداً وغير مرئي.'
        },
        thinkingWay: 'فكر في skew كضغط يدك على جانب صندوق كرتوني؛ يميل الصندوق جانباً وتتحول زواياه إلى زوايا حادة ومفرجة.',
        relatedMethods: ['css-transform-rotate', 'css-transform-scale'],
        keywords: ['skew()', 'skewX', 'skewY', 'slant effect', 'CSS distortion']
    },
    {
        id: 'css-transform-origin',
        name: 'transform-origin',
        shortDescription: 'تعديل وتغيير نقطة ارتكاز ومحور الدوران والتكبير للعنصر.',
        longDescription: 'خاصية تحدد النقطة المحورية التي تبدأ منها عمليات الدوران (rotate) أو التكبير (scale)؛ القيمة الافتراضية هي center center (50% 50%)، ويمكن تغييرها لأي زاوية.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* جعل القائمة تكبر وتفتح انطلاقاً من الزاوية العلوية اليمنى بدلاً من المنتصف */
.dropdown-menu {
  transform-origin: top right;
  transform: scale(0);
}

.dropdown-menu.open {
  transform: scale(1);
}`
        ],
        expectedOutput: [
            'انبثاق وتمدد النافذة للخارج انطلاقاً من زاويتها العلوية اليمنى بدقة.'
        ],
        professionalTips: 'تغيير transform-origin مفيد جداً عند تصميم فتح الأبواب، حركات الأكورديون، والقوائم المنبثقة المنطلقة من أزرارها المباشرة.',
        commonMistakes: {
            wrong: `/* استخدام transform-origin على عنصر بدون وجود خاصية transform */
.box { transform-origin: top left; }`,
            right: `.box { transform-origin: top left; transform: rotate(45deg); }`,
            explanation: 'الـ transform-origin لا تعمل منفردة؛ فهي مجرد موجه ومحدد لنقطة ارتكاز خواص الـ transform.'
        },
        thinkingWay: 'اعتبر transform-origin كمفصلة الباب؛ تحدد الجدار الذي يثبت عليه الباب ليدور حوله.',
        relatedMethods: ['css-transform-rotate', 'css-transform-scale'],
        keywords: ['transform-origin', 'pivot point', 'anchor point', 'rotation origin']
    },
    {
        id: 'css-perspective',
        name: 'perspective',
        shortDescription: 'تأثير مسافة وعمق المنظور ثلاثي الأبعاد (3D Depth Perspective).',
        longDescription: 'خاصية تُوضع عادةً على الأب لتحديد عمق المنظور البصري ثلاثي الأبعاد بالبكسل؛ مما يجعل العناصر الابنة ذات التحويلات الثلاثية (3D) تبدو مجسمة وقريبة أو بعيدة عن عين الناظر.',
        difficulty: 'hard',
        importance: 'important',
        examples: [
            `/* تأسيس بيئة منظور ثلاثي الأبعاد بعمق 1000 بكسل */
.scene-parent {
  perspective: 1000px;
}

.card-child {
  transform: rotateY(45deg);
}`
        ],
        expectedOutput: [
            'إظهار الكرت مائلاً ومجسماً ببعد ثلاثي أبعاد حقيقي ومستقر.'
        ],
        professionalTips: 'كلما صغرت قيمة perspective (مثل 200px)، كان تأثير العمق ثلاثي الأبعاد حاداً وجريئاً، وكلما كبرت (مثل 2000px) كان التأثير ناعماً وهادئاً.',
        commonMistakes: {
            wrong: `/* وضع perspective على العنصر نفسه بدلاً من الحاوية الأب */
.card { perspective: 500px; transform: rotateY(45deg); }`,
            right: `.parent { perspective: 500px; } .card { transform: rotateY(45deg); }`,
            explanation: 'الـ perspective توضع على الأب لتخلق أفقاً ثلاثي الأبعاد مشتركاً لكافة الأبناء بالداخل.'
        },
        thinkingWay: 'فكر في perspective كمسافة جلوسك في مقعد السينما؛ القرب من الشاشة يجعل الصورة مجسمة بارزة، والابتعاد يقلل العمق.',
        relatedMethods: ['css-transform-style-3d', 'css-transform-rotate'],
        keywords: ['perspective', '3D CSS', 'depth effect', 'rotateY', 'perspective depth']
    },
    {
        id: 'css-transform-style-3d',
        name: 'transform-style: preserve-3d',
        shortDescription: 'الحفاظ على تجسيم العمق ثلاثي الأبعاد للأبناء ومنع تسطيح الفضاء.',
        longDescription: 'خاصية تُكتب على الحاوية الوسطى لتجبر المتصفح على تقديم الأبناء بداخل فضاء مجسم ثلاثي الأبعاد حقيقي (preserve-3d)، بدلاً من دمجهم وتسطيحهم كصورة مسطحة (flat).',
        difficulty: 'hard',
        importance: 'important',
        examples: [
            `/* بناء كود قلّاب الكروت الفاخر (3D Card Flip) */
.card-inner {
  transform-style: preserve-3d;
  transition: transform 0.6s;
}`
        ],
        expectedOutput: [
            'السماح لوجه وظهر البطاقة بالدوران في فضاء ثلاثي الأبعاد حقيقي.'
        ],
        professionalTips: 'هذه الخاصية هي السر المعماري لبناء مكونات قلب البطاقات (Flip Cards) والمكعبات ثلاثية الأبعاد بـ CSS الصرف.',
        commonMistakes: {
            wrong: `/* نسيان preserve-3d فتظهر البطاقة مسطحة كـ 2D عند دورانها */
.card-box { transform: rotateY(180deg); }`,
            right: `.card-box { transform-style: preserve-3d; transform: rotateY(180deg); }`,
            explanation: 'بدون preserve-3d يمسح المتصفح العمق الرأسي الثالث وينسخ المحتوى على شاشة مسطحة (flat).'
        },
        thinkingWay: 'اعتبر preserve-3d كإلغاء للتسطيح؛ تحول الرسمة من ورقة ثنائية الأبعاد إلى مجسم بلاستيكي في الفضاء.',
        relatedMethods: ['css-perspective', 'css-transform-rotate'],
        keywords: ['preserve-3d', 'transform-style', '3D flip card', '3D space CSS']
    },
    {
        id: 'css-transition-property',
        name: 'transition-property',
        shortDescription: 'تحديد الخصائص التنسيقية المحددة الخاضعة للتحريك الانسيابي.',
        longDescription: 'خاصية تعين اسم الخصائص التنسيقية المحددة التي يراد تطبيق التحريك الانسيابي عليها (مثل transform, opacity, background-color) وعزل باقي الخصائص.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* تحديد تحريك خاصيتي التحويل والشفافية حصراً */
.btn {
  transition-property: transform, opacity;
  transition-duration: 0.2s;
}`
        ],
        expectedOutput: [
            'تحريك الشفافية والحجم بسلاسة مع استثناء الخصائص الأخرى من الأنيميشن.'
        ],
        professionalTips: 'تجنب كتابة transition-property: all؛ تحديد الخصائص صراحة (مثل transform, opacity) يرفع أداء الصفحة ويمنع تحريك خصائص ثقيلة بالخطأ.',
        commonMistakes: {
            wrong: `/* استخدام transition-property: all المجهدة للمعالج */
.card { transition-property: all; }`,
            right: `.card { transition-property: transform, background-color; }`,
            explanation: 'القيمة all تجبر المحرك على مراقبة مئات الخصائص آلياً مما يستنزف بطارية الهاتف والمعالج.'
        },
        thinkingWay: 'فكر في transition-property كفرز أجهزة الإنذار؛ تحدد أي غرفة بالضبط التي ستراقب الحركة فيها.',
        relatedMethods: ['css-transition-duration', 'css-transition-shorthand'],
        keywords: ['transition-property', 'CSS transition', 'animated properties', 'performance animation']
    },
    {
        id: 'css-transition-duration',
        name: 'transition-duration',
        shortDescription: 'تحديد الزمن المستغرق لاكتمال الحركة الانسيابية (بالثواني أو الملي ثانية).',
        longDescription: 'خاصية تحدد الفترة الزمنية المستغرقة للانتقال من الحالة الأولى إلى الحالة الجديدة؛ وتُكتب بالثواني (s) أو الملي ثانية (ms) (مثل 0.3s أو 300ms).',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `.interactive-element {
  transition-property: opacity;
  transition-duration: 300ms; /* 0.3 ثانية */
}`
        ],
        expectedOutput: [
            'استغراق التحريك الانسيابي مدة 300 ملي ثانية لاكتماله بنعومة.'
        ],
        professionalTips: 'توصية تجربة المستخدم (UX): اجعل زَمَن التحريك للواجهات والتفاعلات بين 150ms و 300ms؛ فالحركات الأطول من 400ms تظهر الموقع بطيئاً وثقيلاً.',
        commonMistakes: {
            wrong: `/* نسيان كتابة وحدة الزمن s أو ms فتتعطل الحركة */
.btn { transition-duration: 300; }`,
            right: `.btn { transition-duration: 300ms; }`,
            explanation: 'قيم الوقت تشترط وجود وحدة صريحة مثل s أو ms ولا تقبل الأرقام المجردة.'
        },
        thinkingWay: 'اعتبر transition-duration كالعداد الزمني لسباق الركض؛ يحدد سرعة وصول اللاعب للمقر.',
        relatedMethods: ['css-transition-property', 'css-transition-delay'],
        keywords: ['transition-duration', 'animation time', '300ms', 'transition speed']
    },
    {
        id: 'css-transition-timing-function',
        name: 'transition-timing-function',
        shortDescription: 'تحديد منحنى التسارع وسرعة الحركة الانسيابية (ease, linear, cubic-bezier).',
        longDescription: 'دالة تحدد تسارع ونمط تسلسلي التغير الزمني للحركة؛ تقبل القيم القياسية (ease, ease-in-out, linear) أو المنحنيات المخصصة بـ cubic-bezier().',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* منحنى تسارع ناعم يبدأ بطيئاً ويتسارع في المنتصف ثم يتباطأ بالأنيميشن */
.modal-wrapper {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}`
        ],
        expectedOutput: [
            'إضفاء مرونة وفيزيائية واقعية جداً على حركة فتح وإغلاق الواجهة.'
        ],
        professionalTips: 'استخدم التسارع الفيزيائي المعاصر cubic-bezier(0.34, 1.56, 0.64, 1) لإنشاء حركات القفز المرن المشرقة (Spring / Bouncy Effect).',
        commonMistakes: {
            wrong: `/* استخدام linear لحركة فتح القوائم الكبيرة فتبدو حركة آلية غير واقعية */
.menu { transition-timing-function: linear; }`,
            right: `.menu { transition-timing-function: ease-out; }`,
            explanation: 'السرعة الثابتة linear تبدو غير طبيعية في الطبيعة؛ بينما ease تتكيف مع قوانين الفيزياء والجاذبية.'
        },
        thinkingWay: 'فكر في timing-function كدواسة البنزين والفرامل؛ تقرر متى تتسارع السيارة ومتى تتباطأ.',
        relatedMethods: ['css-transition-duration', 'css-transition-shorthand'],
        keywords: ['transition-timing-function', 'ease', 'cubic-bezier', 'easing curves', 'smooth transition']
    },
    {
        id: 'css-transition-delay',
        name: 'transition-delay',
        shortDescription: 'تعيين زمن التأخير والانتظار المطلوب قبل بدء تشغيل الحركة.',
        longDescription: 'خاصية تحدد المهلة الزمنية المؤجلة بين لحظة تفكيك الحدث (مثل الـ hover) ولحظة انطلاق التغير الانسيابي للحركة فعلياً.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `/* تأخير ظهور القائمة الفرعية لـ 100ms لمنع فتحها بالخطأ عند سحب الماوس السريع */
.sub-menu {
  transition-delay: 100ms;
}`
        ],
        expectedOutput: [
            'الانتظار لمدة 100 ملي ثانية قبل البدء المباشر في تحريك وإظهار العناصر.'
        ],
        professionalTips: 'استخدم transition-delay بمهل زمنية متدرجة (Staggered Delays) للأبناء المترابطين لإظهار الكروت المتتالية بأسلوب الشلال العظيم.',
        commonMistakes: {
            wrong: `/* وضع زمن تأخير طويلاً جداً بـ 1s فيتخيل المستخدم أن الزر معطل */
.btn:hover { transition-delay: 1s; }`,
            right: `.btn:hover { transition-delay: 0s; }`,
            explanation: 'التأخير الطويل يمنح الزائر انطباعاً بأن الواجهة غير مستجيبة لمساته.'
        },
        thinkingWay: 'اعتبر transition-delay كطلقة بداية السباق؛ تعطي مهلة استعد صامتة قبل انطلاق العداء.',
        relatedMethods: ['css-transition-duration', 'css-transition-shorthand'],
        keywords: ['transition-delay', 'delay animation', 'staggered transition', 'hover delay']
    },
    {
        id: 'css-transition-shorthand',
        name: 'transition (Shorthand Property)',
        shortDescription: 'خاصية الاختصار المجمعة الشاملة لتعيين الانتقال بكسرة سطر واحدة.',
        longDescription: 'الخاصية المجمعة القياسية الأكثر استخداماً؛ تدمج (property, duration, timing-function, delay) بسطر واحد نظيف: transition: transform 0.3s ease 0s.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* إعلان انتقال انسيابي فاخر لخاصيتي التحويل والشفافية بكسرة سطر */
.card {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;
}`
        ],
        expectedOutput: [
            'تطبيق الانتقال الانسيابي عالي الأداء بأسلوب برمجي مقتضب ونظيف.'
        ],
        professionalTips: 'استخدم الخاصية المختصرة transition دائماً وافصل الخصائص المتباينة بفواصل (,) لضمان أعلى مستويات النظافة الهندسية.',
        commonMistakes: {
            wrong: `/* كتابة transition: 0.3s دون تحديد الخاصية المستهدفة فيتحرك كل شيء */
.card { transition: 0.3s; }`,
            right: `.card { transition: transform 0.3s ease; }`,
            explanation: 'عدم تحديد الخاصية يوازي كتابة all مما يستنزف موارد المعالج بالتحريكات غير الضرورية.'
        },
        thinkingWay: 'فكر في transition كـ الظرف البريدي الشامل؛ يجمع اسم الرسالة، وقت الرحلة، وسرعة القطار بكلمة واحدة.',
        relatedMethods: ['css-transition-property', 'css-transition-duration'],
        keywords: ['transition', 'CSS transition shorthand', 'smooth animations', 'multi-property transition']
    },
    {
        id: 'css-prefers-reduced-motion',
        name: 'prefers-reduced-motion',
        shortDescription: 'استعلام الوصولية الحتمي لإيقاف أو تخفيف التحريكات لمصابي الدوار.',
        longDescription: 'استعلام ميديا محوري بـ Accessibility؛ يقرأ تفضيلات نظام تشغيل المستخدم، ويقوم بتعطيل أو تخفيف الحركات والانتقالات الحادة لمن يعانون من مرض الحركة أو الدوار (Vestibular Disorders).',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `/* إلغاء التحريكات والانتقالات الحادة فور اختيار الزائر لتقليل الحركة بالنظام */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`
        ],
        expectedOutput: [
            'إيقاف وتجميد الحركات الحادة آلياً وتحويل الانتقالات لتبديل لحظي آمن.'
        ],
        professionalTips: 'إضافة كود prefers-reduced-motion هو شرط حتمي لاجتياز اختبارات الوصولية العالمية (WCAG 2.2 Compliance) وإثبات نضج المنصة.',
        commonMistakes: {
            wrong: `/* تجاهل الاستعلام وترك التحريكات والدوران الحاد يعطي دواراً لبعض الزوار */
.spin-loader { animation: spin 1s infinite; }`,
            right: `@media (prefers-reduced-motion: reduce) { .spin-loader { animation: none; } }`,
            explanation: 'التحريكات الدائرية السريعة والقفزات تتسبب في صداع وآلام بالرأس ودوار للمرضى؛ الاحترام واجب بـ CSS.'
        },
        thinkingWay: 'اعتبر prefers-reduced-motion بمثابة حزام الأمان الطبي؛ يحمي الركاب الحساسين من المطبات الهوائية الحادة.',
        relatedMethods: ['css-transition-shorthand'],
        keywords: ['prefers-reduced-motion', 'reduced motion', 'WCAG accessibility', 'motion sensitivity', 'CSS accessibility']
    }
];