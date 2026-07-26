export const colorsBackgroundsShadowsData = [
    {
        id: 'css-color-hex',
        name: 'HEX Color Code',
        shortDescription: 'النظام الست عشري الكلاسيكي لتمثيل الألوان عبر تركيبات الأحرف والأرقام.',
        longDescription: 'طريقة التلوين الأكثر شيوعاً وتاريخياً؛ تعتمد على النظام الست عشري ببادئة الرمز # متبوعة بـ 6 خانات تدمج درجات الضوء الأحمر، الأخضر، والأزرق (RGB)، مع إمكانية إضافة خانتين للشفافية (#RRGGBBAA).',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `.primary-text {
  color: #3b82f6; /* أزرق ملكي */
  background-color: #0f172a; /* خلفية داكنة */
}`
        ],
        expectedOutput: [
            'تطبيق الدرجة اللونية المحددة بالرمز الست عشري على النص والخلفية.'
        ],
        professionalTips: 'يمكن اختصار رموز HEX المكررة (مثل #ffffff إلى #fff أو #000000 إلى #000) لتقليل حجم الشفرة التنسيقية.',
        commonMistakes: {
            wrong: `/* كتابة رمز HEX بدون بادئة الهاش # */
.title { color: 3b82f6; }`,
            right: `.title { color: #3b82f6; }`,
            explanation: 'المتصفح يتجاهل قيم HEX تماماً إذا لم تكن مسبوقة برمز الهاش #.'
        },
        thinkingWay: 'اعتبر HEX بالرمز السري الدقيق للون المطبوع في المطبوعات الرسمية.',
        relatedMethods: ['css-color-rgb', 'css-color-hsl'],
        keywords: ['HEX color', '#hex', 'hexadecimal', 'CSS colors', 'color code']
    },
    {
        id: 'css-color-rgb',
        name: 'RGB / RGBA Color Function',
        shortDescription: 'نظام المزج الضوئي للشاشات والشفافية المباشرة بالحواسيب.',
        longDescription: 'دالة تلوين قائمة على دمج قيم الألوان الضوئية المباشرة (Red, Green, Blue) بقيم تتراوح من 0 إلى 255، مع دعم القناة الرابعة للشفافية Alpha (من 0 إلى 1).',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* لون أزرق نيون بحشو شفافية 50% بالتصريح العصري */
.overlay {
  background-color: rgb(59 130 246 / 0.5);
}`
        ],
        expectedOutput: [
            'تلوين العنصر بدرجة الأزرق المحددة مع نفاذ 50% من الضوء لإظهار ما خلفه.'
        ],
        professionalTips: 'في معايير CSS الحديثة لعام 2026، يمكنك كتابة الشفافية بالمسافة بدلاً من الفواصل (مثل rgb(59 130 246 / 50%)) دون الحاجة لكتابة rgba بالـ a.',
        commonMistakes: {
            wrong: `/* وضع قيمة الشفافية أكبر من 1 بدون نسبة مئوية */
.box { background: rgba(0, 0, 0, 50); }`,
            right: `.box { background: rgba(0, 0, 0, 0.5); } /* أو 50% */`,
            explanation: 'قناة الشفافية Alpha تتراوح صراحة بين 0 (شفاف كلياً) و 1 (صلب كلياً) أو كنسبة مئوية %.'
        },
        thinkingWay: 'فكر في RGB كمقابض خلط الأضواء الثلاثة بالألوان المباشرة مع عتلة الشفافية.',
        relatedMethods: ['css-color-hex', 'css-color-hsl'],
        keywords: ['RGB', 'RGBA', 'red green blue', 'alpha channel', 'CSS transparent color']
    },
    {
        id: 'css-color-hsl',
        name: 'HSL / HSLA Color Function',
        shortDescription: 'نظام الألوان القائم على درجة اللون، التشبع، والإضاءة وسهل القراءة بشرياً.',
        longDescription: 'نظام ألوان إنساني القراءة يرتكز على ثلاث قيم: درجة اللون على عجلة الألوان (Hue: 0-360)، نسبة التشبع (Saturation: 0%-100%)، ونسبة الإضاءة (Lightness: 0%-100%).',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* إنشاء لون مريح للعين بسهولة تعديل الإضاءة */
.card-theme {
  background-color: hsl(217deg 91% 60% / 0.8);
}`
        ],
        expectedOutput: [
            'توليد الدرجة اللونية بسلاسة وتحكم دقيق في درجة السطوع والعتامة.'
        ],
        professionalTips: 'نظام HSL هو الأفضل لبناء السمات والأنماط الداكنة/الفاتحة (Dark/Light Themes)؛ حيث يمكنك تغيير درجة الإضاءة L فقط لتوليد ظلال اللون آلياً.',
        commonMistakes: {
            wrong: `/* نسيان كتابة نسبة المئوية % لنسبتي التشبع والإضاءة */
.box { color: hsl(200 50 50); }`,
            right: `.box { color: hsl(200 50% 50%); }`,
            explanation: 'قيم Saturation و Lightness تتطلب حتماً علامة النسبة المئوية % ليعتمدها المحرك.'
        },
        thinkingWay: 'اعتبر HSL كدواليب التعديل في برامج الفوتوشوب؛ تختار زاوية اللون ثم تقرر كم هو زاهٍ وكم هو مضيء.',
        relatedMethods: ['css-color-oklch', 'css-color-rgb'],
        keywords: ['HSL', 'HSLA', 'Hue Saturation Lightness', 'CSS themes', 'color wheel']
    },
    {
        id: 'css-color-oklch',
        name: 'oklch() Color Space',
        shortDescription: 'المساحة اللونية الحديثة فائقة الدقة والاتساق البصري للإدراك البشري.',
        longDescription: 'أحدث نظام ألوان قياسي في الويب؛ يضمن اتساق درجة السطوع المدركة بصرياً للعين البشرية (Perceptual Uniformity)، ويتيح الوصول لألوان مشرقة جداً بالشاشات الحديثة (P3 Display).',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `/* صياغة لون نيون مشرق بدقة متناهية */
.neon-badge {
  background-color: oklch(0.65 0.24 250);
}`
        ],
        expectedOutput: [
            'توليد ألوان زاهية وناعمة لا تتشوه أضواؤها عند التغيير بين الدرجات.'
        ],
        professionalTips: 'تُعد oklch() المعيار الذهبي المعتمد لعام 2026 في تصميم أطر العمل والتدرجات الملونة؛ لأنها تمنع ظهور المناطق الرمادية الميتة في منتصف التدرج.',
        commonMistakes: {
            wrong: `/* كتابة قيم السطوع بأرقام أكبر من 1 بدون نسبة مئوية % */
.box { color: oklch(80 0.2 150); }`,
            right: `.box { color: oklch(0.8 0.2 150); } /* أو oklch(80% 0.2 150) */`,
            explanation: 'قيمة الإضاءة L في oklch تكتب إما ككسر عشري بين 0 و 1 أو كنسبة مئوية صريحة %.'
        },
        thinkingWay: 'فكر في oklch كالعين البشرية الرقمية؛ تعطي القيمة اللونية الحقيقية التي تراها العين بدون انحياز طيفي.',
        relatedMethods: ['css-color-mix', 'css-color-hsl'],
        keywords: ['oklch', 'oklch color', 'wide gamut', 'P3 display', 'modern CSS color']
    },
    {
        id: 'css-color-mix',
        name: 'color-mix() Function',
        shortDescription: 'دالة الدمج والمزج المباشر بين لونين بنسب مئوية معينة أصلياً.',
        longDescription: 'دالة معاصرة بـ CSS تتيح مزج لونين مختلفين بداخل مساحة لونية محددة (مثل in oklch) وبنسب مئوية قابلة للتعديل بـ CSS الصرف دون جافا سكريبت.',
        difficulty: 'hard',
        importance: 'important',
        examples: [
            `/* مزج 20% من اللون الأزرق مع 80% من اللون الأبيض للتخفيف */
.alert-info {
  background-color: color-mix(in oklch, #3b82f6 20%, #ffffff);
}`
        ],
        expectedOutput: [
            'توليد درجة أزرق سماوية ناعمة ناتجة عن خلط اللونين بالدقة المحددة.'
        ],
        professionalTips: 'استخدم color-mix() لإنشاء ألوان حالات الـ hover والـ active تلقائياً من لونك الرئيسي المعتمد بـ Custom Properties.',
        commonMistakes: {
            wrong: `/* نسيان تحديد المساحة اللونية in oklch أو in srgb في أول الدالة */
.box { background: color-mix(red 50%, blue); }`,
            right: `.box { background: color-mix(in srgb, red 50%, blue); }`,
            explanation: 'تحديد نظام الفضاء اللوني (in oklch / in srgb) إجباري في أول وسيط للدالة color-mix.'
        },
        thinkingWay: 'اعتبر color-mix() بمثابة لوحة خلط الألوان الخشبية لدى الرسام؛ تضع نقطة من هذا ونقطة من ذاك لتخرج بلون جديد.',
        relatedMethods: ['css-color-oklch'],
        keywords: ['color-mix()', 'color mixing', 'CSS blend colors', 'dynamic themes']
    },
    {
        id: 'css-opacity-property',
        name: 'opacity Property',
        shortDescription: 'تحديد مستوى الشفافية الشاملة للعنصر بجميع أبنائه الداخليين.',
        longDescription: 'خاصية تعين العتامة والشفافية الكلية للعنصر (من 0 شفاف كلياً إلى 1 صلب كلياً)، وتتميز بتأثيرها الشامل على العنصر وكافة النصوص والأبناء المتواجدين بداخله.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* خفض عتامة البطاقة كلياً إلى النصف عند تعطيلها */
.card.disabled {
  opacity: 0.5;
  pointer-events: none;
}`
        ],
        expectedOutput: [
            'جعل الكرت بجميع نصوصه وأزراره الداخلية شبها شفاف بوزن 50%.'
        ],
        professionalTips: 'انتبه: opacity تؤثر على النص والزر الداخلي معاً؛ إذا كنت تريد جعل خلفية البوكس فقط شفافة مع الإبقاء على النص صلباً مقروءاً، استخدم الشفافية اللونية بـ RGBA بدلاً منها.',
        commonMistakes: {
            wrong: `/* استخدام opacity لتخفيف لون خلفية البوكس والتفاجؤ بتأثر النص بالداخل */
.modal { opacity: 0.8; }`,
            right: `.modal { background-color: rgba(0, 0, 0, 0.8); }`,
            explanation: 'الـ opacity تؤثر على شجرة العنصر كاملة بأبنائها، بينما RGBA تؤثر على لون الخلفية حصراً.'
        },
        thinkingWay: 'فكر في opacity كخفض المكون كلياً خلف لوح زجاجي شبه معتم لجميع محتوياته.',
        relatedMethods: ['css-alpha-channel', 'css-background-color'],
        keywords: ['opacity', 'transparency', 'element opacity', 'CSS fade']
    },
    {
        id: 'css-alpha-channel',
        name: 'Alpha Channel Transparency',
        shortDescription: 'الشفافية اللونية الموضعية التي تعزل لون الخلفية عن عتامة المحتوى النصي.',
        longDescription: 'قناة الشفافية المدمجة في أنظمة الألوان (RGBA, HSLA, OKLCH)؛ وتتميز بتطبيق الشفافية على لون محدد فقط (مثل خلفية أو حدود) دون جعل النصوص أو العناصر الداخلية شفافة.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* خلفية معتمة بنسبة 80% مع بقاء النص الداخلي صلباً بنسبة 100% */
.card-header {
  background-color: rgb(15 23 42 / 0.8);
  color: #ffffff; /* أبيض صلب ناصع */
}`
        ],
        expectedOutput: [
            'خلفية سوداء شفافة يظهر من خلفها الغلاف، مع نص أبيض ناصع وواضح بامتياز.'
        ],
        professionalTips: 'استخدم الشفافية اللونية Alpha دائماً عند تصميم الكروت فوق الصور لضمان المقروئية العالية وتطبيق معايير التباين (WCAG Contrast).',
        commonMistakes: {
            wrong: `/* الخلط بين opacity و alpha channel واعتقاد أنهما نفس الشفرة */
.box { background: black; opacity: 0.5; }`,
            right: `.box { background: rgba(0, 0, 0, 0.5); }`,
            explanation: 'الـ Alpha channel تعزل عتامة الخلفية عن النص، بينما opacity تجعل كل شيء بالداخل باهتاً.'
        },
        thinkingWay: 'اعتبر Alpha channel بالطلاء المائي الشفاف؛ يلون السطح المباشر دون أن يغطي الشاشة الداخلية.',
        relatedMethods: ['css-opacity-property', 'css-color-rgb'],
        keywords: ['alpha channel', 'color transparency', 'isolated opacity', 'RGBA vs opacity']
    },
    {
        id: 'css-background-color',
        name: 'background-color',
        shortDescription: 'تحديد اللون المصمت الأساسي المغطي لخلفية مساحة العنصر.',
        longDescription: 'الخاصية المباشرة لتلوين المساحة الداخلية للعنصر (المحتوى + الحشو Padding) بلون فردي مصمت باستخدام أي نظام ألوان معتمد.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `.btn-primary {
  background-color: #3b82f6;
  color: #ffffff;
}`
        ],
        expectedOutput: [
            'ملء خلفية الزر بالكامل باللون الأزرق المباشر.'
        ],
        professionalTips: 'ضع دائماً خاصية background-color احتياطية مناسبة عند استخدام الصور الخارجية background-image؛ لتظهر للزائر في حال تعذر تحميل الصورة عبر الشبكة.',
        commonMistakes: {
            wrong: `/* كتابة لون الخلفية في خاصية color بدلاً من background-color */
.box { color: blue; }`,
            right: `.box { background-color: blue; }`,
            explanation: 'الخاصية color مخصصة لتلوين النصوص والأيقونات، بينما background-color مخصصة للسطح الخلفي.'
        },
        thinkingWay: 'فكر في background-color كطلاء الجدار السريع قبل تعليق اللوحات أو التزيين عليه.',
        relatedMethods: ['css-background-image', 'css-color-hex'],
        keywords: ['background-color', 'bg color', 'CSS background', 'solid color']
    },
    {
        id: 'css-background-image',
        name: 'background-image',
        shortDescription: 'إدراج صورة خلفية أو تدرج ملون كسلسلة بصرية خلف المحتوى.',
        longDescription: 'خاصية تتيح تعيين صورة خارجية عبر الدالة url() أو إدراج تدرجات ملونة لتغليف السطح الخلفي للعنصر.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `.hero-section {
  background-image: url('./assets/images/pattern.svg');
}`
        ],
        expectedOutput: [
            'رسم وتكرار الصورة المحددة كخلفية مباشرة خلف النصوص والأزرار.'
        ],
        professionalTips: 'يمكنك إدراج صور خلفية متعددة وفصلها بفواصل (مثل background-image: url(a.png), url(b.png)) لدمج طبقات صور فوق بعضها.',
        commonMistakes: {
            wrong: `/* نسيان علامتي التنصيص أو كتابة مسار خاطئ داخل url */
.banner { background-image: url(images/hero.jpg); }`,
            right: `.banner { background-image: url('./images/hero.jpg'); }`,
            explanation: 'كتابة المسار بـ Quote ينقذ الكود من الانكسار عند وجود مسافات بأسماء المجلدات.'
        },
        thinkingWay: 'اعتبر background-image بورق الجدران المنقوش الذي يغطي الحائط خلف الأثاث.',
        relatedMethods: ['css-background-size', 'css-linear-gradient'],
        keywords: ['background-image', 'url()', 'CSS bg image', 'background pattern']
    },
    {
        id: 'css-background-size',
        name: 'background-size',
        shortDescription: 'التحكم بأبعاد وتحجيم صورة الخلفية (cover, contain).',
        longDescription: 'خاصية محورية لتحديد طريقة تغطية صورة الخلفية؛ القياس cover يغطي كامل المساحة دون فراغات، و contain يعرض الصورة كاملة دون قص أطرافها.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* تغطية المساحة بالكامل بأسلوب سينمائي متجاوب */
.hero-header {
  background-image: url('hero.jpg');
  background-size: cover;
  background-position: center;
}`
        ],
        expectedOutput: [
            'تمدد الصورة التلقائي لتغطي كامل مساحة البوكس بمرونة ودون حدوث فراغات بيضاء.'
        ],
        professionalTips: 'استخدم background-size: cover دائماً لبنرات الشاشة الرئيسية والبطاقات الكبيرة؛ لضمان تجاوب الخلفية مع كافة أحجام الموبايل والحاسوب.',
        commonMistakes: {
            wrong: `/* ترك الصورة بأبعادها الأصلية الضخمة فتظهر مقصوصة مشوهة */
.banner { background-image: url('big.jpg'); }`,
            right: `.banner { background-image: url('big.jpg'); background-size: cover; }`,
            explanation: 'بدون background-size تظهر الصورة بحجمها الخام وتتسبب في إخفاء أجزائها.'
        },
        thinkingWay: 'فكر في cover كفرد القماش بمرونة لشد السطح كاملاً، و contain كوضع الصورة في إطار دون قص حوافها.',
        relatedMethods: ['css-background-image', 'css-background-position'],
        keywords: ['background-size', 'cover', 'contain', 'responsive background', 'bg size']
    },
    {
        id: 'css-background-position',
        name: 'background-position',
        shortDescription: 'تحديد نقطة ترسيخ ومحاذاة صورة الخلفية (center, top, right).',
        longDescription: 'خاصية تحدد مكان تموضع صورة الخلفية داخل البوكس (مثل center, top left, 50% 50%) للتركيز على الجزء الأهم في الصورة.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `.user-card {
  background-image: url('avatar.jpg');
  background-size: cover;
  background-position: center top; /* التركيز على الجزء العلوي من الصورة */
}`
        ],
        expectedOutput: [
            'محاذاة الجزء العلوي الأوسط من الصورة ليبقى مظهراً بداخل الكرت.'
        ],
        professionalTips: 'عند استخدام صور الأشخاص كخلفية، استخدم background-position: center top؛ لتتفادى قص رؤوس الأشخاص عند تغير حجم الشاشة.',
        commonMistakes: {
            wrong: `/* كتابة قيم المحاذاة بدون ترتيب أفقي ورأسي صحيح */
.box { background-position: top 20px center; }`,
            right: `.box { background-position: center top; }`,
            explanation: 'الصيغة المعيارية تبدأ بالمحاذاة الأفقية ثم المحاذاة الرأسية.'
        },
        thinkingWay: 'اعتبر background-position كتحريك العدسة لضبط وجه الشخص في منتصف الكاميرا.',
        relatedMethods: ['css-background-size', 'css-background-image'],
        keywords: ['background-position', 'center', 'top left', 'bg position', 'image alignment']
    },
    {
        id: 'css-background-repeat',
        name: 'background-repeat',
        shortDescription: 'التحكم بتكرار صورة الخلفية أفقياً ورأسياً أو منع التكرار.',
        longDescription: 'خاصية توضح ما إذا كانت صورة الخلفية ستتكرر كبلاط شبكي (repeat) أم تتوقف عن التكرار كصورة مفردة (no-repeat).',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `.banner {
  background-image: url('hero.png');
  background-repeat: no-repeat; /* منع تكرار الصورة */
}`
        ],
        expectedOutput: [
            'عرض الصورة مرة واحدة فقط في الخلفية دون تكرارها كبلاط مكرر.'
        ],
        professionalTips: 'ضع background-repeat: no-repeat دائماً عند استخدام صور البنرات المفردة؛ لتمنع المتصفح من تكرار الصورة أسفل البوكس.',
        commonMistakes: {
            wrong: `/* ترك التكرار الافتراضي على بنر مفرد فيظهر البنر مكرراً بأسفل الصفحة */
.hero { background-image: url('hero.jpg'); }`,
            right: `.hero { background-image: url('hero.jpg'); background-repeat: no-repeat; }`,
            explanation: 'السلوك الافتراضي للمتصفح هو تكرار الصورة (repeat) أفقياً ورأسياً ما لم تمنعه صراحة.'
        },
        thinkingWay: 'فكر في background-repeat كخيار وضع بلاطة واحدة أم رص البلاط على كامل الأرضية.',
        relatedMethods: ['css-background-image', 'css-background-size'],
        keywords: ['background-repeat', 'no-repeat', 'repeat-x', 'repeat-y', 'bg repeat']
    },
    {
        id: 'css-background-attachment',
        name: 'background-attachment',
        shortDescription: 'تثبيت صورة الخلفية في الشاشة أثناء التمرير (Parallax Effect).',
        longDescription: 'خاصية تحدد ما إذا كانت صورة الخلفية ستتحرك وتمر مع سكرول الصفحة (scroll) أم تظل مثبتة جامدة في الشاشة (fixed).',
        difficulty: 'medium',
        importance: 'normal',
        examples: [
            `/* إنشاء تأثير بارالاكس Parallax تثبيت الخلفية عند التمرير */
.parallax-section {
  background-image: url('space.jpg');
  background-size: cover;
  background-attachment: fixed;
}`
        ],
        expectedOutput: [
            'ثبات صورة الخلفية في مكانها أثناء تمرير الزائر للنصوص فوقها.'
        ],
        professionalTips: 'تجنب استخدام background-attachment: fixed على أجهزة الموبايل لضعف أدائها وتأثيرها المباشر على سلاسة السكرول؛ استخدم بدلاً منها position: fixed بداخل حاوية معزولة.',
        commonMistakes: {
            wrong: `/* استخدام fixed على الهواتف وتوقع أداء سلس بـ 60fps */
.mobile-bg { background-attachment: fixed; }`,
            right: `@media (min-width: 768px) { .bg { background-attachment: fixed; } }`,
            explanation: 'خاصية fixed على الموبايل تجبر المعالج على إعادة رسم الصفحة عند كل بكسل تمرير.'
        },
        thinkingWay: 'اعتبر fixed كالمنظر الطبيعي الملتصق بزجاج النافذة؛ تتحرك الغرفة ويبقى المنظر ثابتاً خلفها.',
        relatedMethods: ['css-background-image'],
        keywords: ['background-attachment', 'fixed background', 'parallax effect', 'scroll attachment']
    },
    {
        id: 'css-radial-gradient',
        name: 'radial-gradient()',
        shortDescription: 'التدرج الملون الدائري الممتد من نقطة مركزية نحو الخارج.',
        longDescription: 'دالة تنشئ تدرجاً لونياً إشعاعياً يبدأ من نقطة مركزية دائرية أو بيضاوية وينتشر نحو الأطراف بخصائص قطرية متناسقة.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `/* إنشاء تأثير التوهج الضوئي خلف البطاقات */
.glow-card {
  background-image: radial-gradient(circle at center, rgba(59, 130, 246, 0.3), transparent 70%);
}`
        ],
        expectedOutput: [
            'رسم بقعة ضوئية زرقاء دائرية متوهجة في منتصف الكرت تتلاشى نحو الأطراف.'
        ],
        professionalTips: 'استخدم radial-gradient لإنشاء بقع الضوء المضيئة (Glow Effects) وخلفيات الشاشات المظلمة المعاصرة في التصاميم ثلاثية الأبعاد.',
        commonMistakes: {
            wrong: `/* نسيان تحديد نقطة النهاية المئوية فتحدث حواف قاسية */
.box { background: radial-gradient(blue, transparent); }`,
            right: `.box { background: radial-gradient(circle, blue 0%, transparent 70%); }`,
            explanation: 'تحديد النسب المئوية يضمن نعومة انسياب تلاشي اللون نحو الأطراف.'
        },
        thinkingWay: 'اعتبر radial-gradient كضوء الكشاف الدائري المسلط على المسرح؛ يضيء المركز ويتلاشى في الأطراف.',
        relatedMethods: ['css-linear-gradient', 'css-conic-gradient'],
        keywords: ['radial-gradient', 'circular gradient', 'glow effect', 'radial background']
    },
    {
        id: 'css-radial-gradient',
        name: 'radial-gradient()',
        shortDescription: 'التدرج الملون الدائري الممتد من نقطة مركزية نحو الخرج.',
        longDescription: 'دالة تنشئ تدرجاً لونياً إشعاعياً يبدأ من نقطة مركزية دائرية أو بيضاوية وينتشر نحو الأطراف بخصائص قطرية متناسقة.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `/* إنشاء تأثير التوهج الضوئي خلف البطاقات */
.glow-card {
  background-image: radial-gradient(circle at center, rgba(59, 130, 246, 0.3), transparent 70%);
}`
        ],
        expectedOutput: [
            'رسم بقعة ضوئية زرقاء دائرية متوهجة في منتصف الكرت تتلاشى نحو الأطراف.'
        ],
        professionalTips: 'استخدم radial-gradient لإنشاء بقع الضوء المضيئة (Glow Effects) وخلفيات الشاشات المظلمة المعاصرة في التصاميم ثلاثية الأبعاد.',
        commonMistakes: {
            wrong: `/* نسيان تحديد نقطة النهاية المئوية فتحدث حواف قاسية */
.box { background: radial-gradient(blue, transparent); }`,
            right: `.box { background: radial-gradient(circle, blue 0%, transparent 70%); }`,
            explanation: 'تحديد النسب المئوية يضمن نعومة انسياب تلاشي اللون نحو الأطراف.'
        },
        thinkingWay: 'اعتبر radial-gradient كضوء الكشاف الدائري المسلط على المسرح؛ يضيء المركز ويتلاشى في الأطراف.',
        relatedMethods: ['css-linear-gradient', 'css-conic-gradient'],
        keywords: ['radial-gradient', 'circular gradient', 'glow effect', 'radial background']
    },
    {
        id: 'css-conic-gradient',
        name: 'conic-gradient()',
        shortDescription: 'التدرج الملون المترامي الدائري حول نقطة محور مركزية.',
        longDescription: 'دالة تنشئ تدرجاً لونياً مخروطياً يدور حول مركز ثابت بزوايا 360 درجة، وتُستخدم لبناء المخططات الدائرية (Pie Charts) وعجلات الألوان.',
        difficulty: 'hard',
        importance: 'important',
        examples: [
            `/* رسم مخطط دائري إحصائي بنسب ملونة بـ CSS فقط */
.pie-chart {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: conic-gradient(#3b82f6 0% 60%, #10b981 60% 100%);
}`
        ],
        expectedOutput: [
            'رسم دائرة مقسمة إحصائياً بـ 60% للون الأزرق و 40% للون الأخضر.'
        ],
        professionalTips: 'يمكنك دمج conic-gradient مع border-radius: 50% لإنشاء حواف الحدود المتدرجة المضيئة بأسلوب غاية في الأناقة.',
        commonMistakes: {
            wrong: `/* محاولة كتابة الزوايا بالبكسل بدلاً من الدرجات deg أو النسب المئوية % */
.chart { background: conic-gradient(red 10px, blue 50px); }`,
            right: `.chart { background: conic-gradient(red 0deg 180deg, blue 180deg 360deg); }`,
            explanation: 'التدرج المخروطي يعتمد حصراً على قياسات الزوايا (deg) أو النسب المئوية (%).'
        },
        thinkingWay: 'فكر في conic-gradient كمؤشر عقارب الساعة التي تدور لترسم ألواناً مختلفة بحسب كل زاوية.',
        relatedMethods: ['css-linear-gradient', 'css-radial-gradient'],
        keywords: ['conic-gradient', 'pie chart CSS', 'conic background', 'color wheel CSS']
    },
    {
        id: 'css-box-shadow',
        name: 'box-shadow',
        shortDescription: 'إضافة الظلال الخارجية والداخلية متعددة الطبقات لحجم العنصر.',
        longDescription: 'خاصية تضفي ظلالاً واقعية حول إطار العنصر عبر 5 معلمات: (الإزاحة الأفقية X، الإزاحة الرأسية Y، نسبة الضبابية Blur، نسبة الانتشار Spread، واللون)، مع دعم الظلال الداخلية inset.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* ظل زجاجي ناعم متعدد الطبقات عالي الاحترافية */
.premium-card {
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.05);
}`
        ],
        expectedOutput: [
            'رفع الكرت بصرياً عن سطح الصفحة بظل ناعم غير حاد يحاكي الإضاءة الواقعية.'
        ],
        professionalTips: 'تجنب استخدام الظلال السوداء الصلبة الحادة الداكنة (مثل box-shadow: 5px 5px #000)؛ استخدم دائماً ألواناً شفافة بـ RGBA أو OKLCH وطبق طبقتين متداخلتين من الظل لنعومة فائقة.',
        commonMistakes: {
            wrong: `/* استخدام ظل قاسي جداً بضبابية صفرية يسيء لشكل التصميم */
.card { box-shadow: 10px 10px 0px black; }`,
            right: `.card { box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3); }`,
            explanation: 'الظلال القاسية تبدو غير واقعية وتخرب الهوية البصرية الحديثة للمنصة.'
        },
        thinkingWay: 'اعتبر box-shadow بارتفاع الطاولة عن الأرض؛ كلما ارتفعت الطاولة، زاد اتساع ونعومة الظل الممتد تحتها.',
        relatedMethods: ['css-text-shadow', 'css-filter-drop-shadow'],
        keywords: ['box-shadow', 'CSS shadow', 'card shadow', 'inset shadow', 'multi-layered shadow']
    },
    {
        id: 'css-text-shadow',
        name: 'text-shadow',
        shortDescription: 'إضافة ظلال ضوئية أو معتمة خلف الأحرف والنصوص مباشرة.',
        longDescription: 'خاصية مخصصة لإنشاء ظلال خلف حروف النصوص عبر 3 معلمات (X-offset, Y-offset, Blur-radius, Color)، وتُستخدم لتحسين مقروئية العناوين فوق الخلفيات الملونة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `/* إبراز العنوان فوق الصور بظل خلفي ناعم */
.hero-title {
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
}`
        ],
        expectedOutput: [
            'رسم هالة تباين سوداء شفافة خلف الحروف تجعل النص العريض حاد المقروئية.'
        ],
        professionalTips: 'استخدم text-shadow لتطبيق تأثير التوهج النيوني الحديث على العناوين الكبيرة عبر صياغة: text-shadow: 0 0 10px #3b82f6;.',
        commonMistakes: {
            wrong: `/* وضع إزاحة ضخمة للظل النصي تجعل الكلمات مكررة ومضللة بالقراءة */
h1 { text-shadow: 20px 20px 5px black; }`,
            right: `h1 { text-shadow: 0 2px 8px rgba(0,0,0,0.5); }`,
            explanation: 'الإزاحة الكبيرة تجعل الظل يبدو ككلمة مكررة خافية يشتت القارئ.'
        },
        thinkingWay: 'فكر في text-shadow كالضوء الموجه خلف حروف اليافتة في الشارع ليبرز كلماتها بالظلام.',
        relatedMethods: ['css-box-shadow'],
        keywords: ['text-shadow', 'text glow', 'font shadow', 'title contrast']
    },
    {
        id: 'css-backdrop-filter',
        name: 'backdrop-filter',
        shortDescription: 'تطبيق التضبيب والفلترة على العناصر الواقعة خلف العنصر مباشرة (Glassmorphic).',
        longDescription: 'خاصية معاصرة تطبق تأثيرات بصرية (مثل الضبابية blur() أو السطوع) على المساحة الممتدة خلف العنصر شبه الشفاف، وهي السر المعماري لتصميمات الزجاج المضبب (Glassmorphism).',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* تصميم بطاقة زجاجية فاخرة تعكس الخلفية بضبابية ناعمة */
.glass-card {
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
}`
        ],
        expectedOutput: [
            'تضبيب وتمويه خلفية الشاشة الواقعة خلف البطاقة بنعومة فائقة تشبه الزجاج الفاخر.'
        ],
        professionalTips: 'احرص دائماً على دمج backdrop-filter مع خلفية شبه شفافة (RGBA) لكي يظهر تأثير التضبيب التحتاني بوضوح للمستخدم.',
        commonMistakes: {
            wrong: `/* استخدام backdrop-filter مع خلفية صلبة غير شفافة */
.glass { background: #000000; backdrop-filter: blur(10px); }`,
            right: `.glass { background: rgba(0, 0, 0, 0.3); backdrop-filter: blur(10px); }`,
            explanation: 'الخلفية المعتمة الصلبة تحجب التأثير كلياً وتمنع ظهور التضبيب التحتاني.'
        },
        thinkingWay: 'اعتبر backdrop-filter باللوح الزجاجي المبتل بقطرات المطر؛ ترى الأشياء خلفه ضبابية وناعمة.',
        relatedMethods: ['css-filter-drop-shadow', 'css-alpha-channel'],
        keywords: ['backdrop-filter', 'Glassmorphism', 'blur()', 'frosted glass', 'modern UI CSS']
    },
    {
        id: 'css-filter-drop-shadow',
        name: 'filter: drop-shadow()',
        shortDescription: 'إنشاء ظلال حقيقية تتشكل بدقة مع أطراف الصور الشفافة وأيقونات SVG.',
        longDescription: 'دالة فلترة ذكية تتتبع الأطراف الشفافة الفعلية للصور (PNG) أو الرموز والمتجهات (SVG)، وترسم الظل منطقياً حول التفاصيل الدقيقة بدلاً من إطار الصندوق المربع.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* إعطاء ظل متتبع لأطراف الشعار أو الأيقونة الشفافة */
.transparent-logo {
  filter: drop-shadow(0 4px 8px rgba(59, 130, 246, 0.5));
}`
        ],
        expectedOutput: [
            'رسم الظل بحسب شكل رسم الأيقونة أو الشعار المفرغ تماماً وليس كمربع.'
        ],
        professionalTips: 'استخدم drop-shadow() دائماً مع أيقونات الـ SVG والصور المفرغة خلفيتها؛ حيث تفشل box-shadow العادية برسم المربع حولها كلياً.',
        commonMistakes: {
            wrong: `/* استخدام box-shadow على صورة PNG مفرغة بدون خلفية */
img.png-icon { box-shadow: 0 4px 10px black; }`,
            right: `img.png-icon { filter: drop-shadow(0 4px 10px rgba(0,0,0,0.5)); }`,
            explanation: 'الـ box-shadow ترسم مربعاً كبيراً حول حدود الصورة الشفافة، بينما drop-shadow ترسم الظل على تفاصيل الرسمة نفسها.'
        },
        thinkingWay: 'فكر في drop-shadow كظل القماش المقصوص؛ يتبع انحناءات الشكل المقصوص بالضبط.',
        relatedMethods: ['css-box-shadow'],
        keywords: ['drop-shadow()', 'filter drop shadow', 'SVG shadow', 'PNG shadow', 'transparent image shadow']
    }
];