export const keyframeAnimationsData = [
    {
        id: 'css-keyframes-rule',
        name: '@keyframes Rule',
        shortDescription: 'قاعدة تعريف وتصميم الإطارات المفتاحية والمراحل الزمنية للتحريك البصري.',
        longDescription: 'القاعدة الأساسية لإنشاء التحريكات المعقدة بـ CSS؛ تتيح رسم المراحل الزمنية للحركة بين البداية والنهاية باستخدام from/to أو النسب المئوية (مثل 0%, 50%, 100%) لربط التغيرات التنسيقية.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* تعريف أنيميشن نبض العناصر */
@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.08); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}`
        ],
        expectedOutput: [
            'إنشاء شفرة حركة النبض الانسيابي جاهزة للربط بأي عنصر في الواجهة.'
        ],
        professionalTips: 'احرص على تحريك خاصيتي transform و opacity حصراً داخل @keyframes؛ لأنهما الخصائص الوحيدة التي تُنفذ بداخل معالج الرسوميات (GPU) دون إحداث بطء بالصفحة.',
        commonMistakes: {
            wrong: `/* تحريك خاصيتي width و left داخل keyframes فتتسبب في تهنيج الشاشة */
@keyframes badMove {
  0% { left: 0; width: 100px; }
  100% { left: 200px; width: 200px; }
}`,
            right: `@keyframes goodMove {
  0% { transform: translateX(0) scaleX(1); }
  100% { transform: translateX(200px) scaleX(2); }
}`,
            explanation: 'تحريك الخصائص المباشرة كـ width يسبب إعادة حساب أبعاد الصفحة (Layout Reflow) عند كل إطار.'
        },
        thinkingWay: 'اعتبر @keyframes كدفتر رسوم المخرج؛ ترسم الإطار الأول، الأوسط، والأخير ليقوم الحاسوب بملء الفراغات بينها.',
        relatedMethods: ['css-animation-name', 'css-animation-shorthand'],
        keywords: ['@keyframes', 'keyframes', 'CSS animation timeline', 'from to', 'animation steps']
    },
    {
        id: 'css-animation-name',
        name: 'animation-name',
        shortDescription: 'ربط واستدعاء اسم قاعدة الإطارات المفتاحية @keyframes بالعنصر.',
        longDescription: 'خاصية تُسند للعنصر المحدد لربطه باسم الأنيميشن المعرف مسبقاً بداخل قاعدة @keyframes للبدء بتنفيذ الحركة.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `.pulse-badge {
  animation-name: pulse;
  animation-duration: 2s;
}`
        ],
        expectedOutput: [
            'تنشيط واستدعاء حركة pulse المسماة وتطبيقها على الشارة.'
        ],
        professionalTips: 'اختر أسماء دلالية واضحة ومقتضبة للأنيميشن (مثل fadeIn, spin, bounce) لتسهيل إعادة استخدامها مع عناصر أخرى بالمنصة.',
        commonMistakes: {
            wrong: `/* كتابة اسم الأنيميشن داخل علامات اقتباس أو عدم مطابقة الأحرف */
.box { animation-name: "PulseAnimation"; }`,
            right: `.box { animation-name: pulse-animation; }`,
            explanation: 'اسم الأنيميشن يكتب كمحدد عادي بدون علامات اقتباس وهو حساس لحالة الأحرف.'
        },
        thinkingWay: 'فكر في animation-name كمناداة الممثل باسمه المسرحي ليخرج ويؤدي دوره المكتوب بالنص.',
        relatedMethods: ['css-keyframes-rule', 'css-animation-duration'],
        keywords: ['animation-name', 'bind animation', 'keyframes binding', 'CSS animation link']
    },
    {
        id: 'css-animation-duration',
        name: 'animation-duration',
        shortDescription: 'تحديد المدة الزمنية المستغرقة لاكتمال الدورة الواحدة من الحركة (s/ms).',
        longDescription: 'خاصية تحدد الوقت الذي تحتاجه الحركة للانتقال من الإطار الأول (0%) إلى الإطار الأخير (100%)؛ وتُكتب بالثواني (s) أو الملي ثانية (ms).',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `.spinner {
  animation-name: spin;
  animation-duration: 1s; /* دورة واحدة لكل ثانية */
}`
        ],
        expectedOutput: [
            'إتمام التحريك بالكامل خلال ثانية واحدة بالضبط.'
        ],
        professionalTips: 'القيمة الافتراضية لـ animation-duration هي 0s؛ لذا لن تعمل أي حركة إطلاقاً إذا نسيت كتابة مدة الحركة.',
        commonMistakes: {
            wrong: `/* نسيان كتابة وحدة الزمن s أو ms */
.box { animation-duration: 2; }`,
            right: `.box { animation-duration: 2s; }`,
            explanation: 'القيم الزمنية تتطلب حتماً وحدة قياس صريحة (s أو ms).'
        },
        thinkingWay: 'اعتبر duration كساعة الإيقاف؛ تضبطها لتقرر كم ثانية ستستغرق اللفة الواحدة.',
        relatedMethods: ['css-animation-delay', 'css-animation-shorthand'],
        keywords: ['animation-duration', 'animation speed', '1s', '500ms', 'cycle time']
    },
    {
        id: 'css-animation-timing-function',
        name: 'animation-timing-function',
        shortDescription: 'تحديد منحنى التسارع وفيزيائية الحركة (cubic-bezier, steps, ease).',
        longDescription: 'دالة تحدد وتيرة تسارع الحركة عبر الزمن؛ وتدعم المنحنيات الفيزيائية (ease-in-out, cubic-bezier) أو التقطيع المرحلي الحاد باستخدام الدالة steps().',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* تحريك عقرب الساعة بوقفات حادة عبر steps() */
.clock-hand {
  animation-timing-function: steps(60);
}

/* حركة قفز مرنة معاصرة */
.bounce-box {
  animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}`
        ],
        expectedOutput: [
            'تطبيق التسارع الفيزيائي أو التقطيع النمطي للحركة بحسب الدالة المحددة.'
        ],
        professionalTips: 'استخدم الدالة steps(n) لبناء تحريكات الرسوم المتحركة الكلاسيكية (Sprite Sheet Animations) وتقطيع لوحات الصور بنظافة.',
        commonMistakes: {
            wrong: `/* استخدام linear لتحريك النوافذ المنبثقة فتظهر بشكل جاف وغير واقعي */
.modal { animation-timing-function: linear; }`,
            right: `.modal { animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1); }`,
            explanation: 'السرعة الثابتة linear تناسب المروحة والدوران فقط؛ بينما المكونات التفاعلية تتطلب تسارعاً مرناً.'
        },
        thinkingWay: 'فكر في timing-function كنمط ضغطك على دواسة البنزين والفرامل بالسيارة.',
        relatedMethods: ['css-animation-duration'],
        keywords: ['animation-timing-function', 'cubic-bezier', 'steps()', 'ease-in-out', 'animation easing']
    },
    {
        id: 'css-animation-delay',
        name: 'animation-delay',
        shortDescription: 'تعيين زمن الانتظار والتأخير المسبق قبل بدء الدورة الأولى من الحركة.',
        longDescription: 'خاصية تحدد المهلة الزمنية المؤجلة بين لحظة تحميل العنصر ولحظة انطلاق الحركة فعلياً، وتدعم القيم السالبة للبدء المباشر من منتصف الحركة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `/* بدء حركة العنصر الثاني بعد تأخير 200ms لإحداث تأثير السلسلة المتتابعة */
.card:nth-child(2) {
  animation-delay: 200ms;
}`
        ],
        expectedOutput: [
            'الانتظار 200 ملي ثانية ثم الانطلاق التلقائي للأنيميشن.'
        ],
        professionalTips: 'استخدم القيم السالبة (مثل animation-delay: -1s) لبدء الحركة فوراً وكأنها قطعت ثانية كاملة من زمن الدورة المحددة.',
        commonMistakes: {
            wrong: `/* تأخير ضخم يتجاوز ثانية كاملة فيشعر المستخدم أن الصفحة معطلة */
.element { animation-delay: 2s; }`,
            right: `.element { animation-delay: 150ms; }`,
            explanation: 'التأخير الطويل للتحريكات يضر بتجربة المستخدم العامة ويؤخر تفاعله مع الواجهة.'
        },
        thinkingWay: 'اعتبر animation-delay كمهلة العد التنازلي قبل إطلاق الصاروخ.',
        relatedMethods: ['css-animation-duration'],
        keywords: ['animation-delay', 'staggered animation', 'delay start', 'negative delay']
    },
    {
        id: 'css-animation-iteration-count',
        name: 'animation-iteration-count',
        shortDescription: 'تحديد عدد مرات تكرار الحركة (أرقام صريحة أو infinite).',
        longDescription: 'خاصية تحدد كم مرة ستعيد الحركة تكرار دوراتها؛ وتستقبل أرقاماً صريحة (مثل 3)، أو كسوراً (مثل 2.5)، أو القيمة المستمرة infinite للتكرار اللانهائي.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* جعل مؤشر التحميل يدور إلى المالانهاية بدون توقف */
.loading-spinner {
  animation-iteration-count: infinite;
}`
        ],
        expectedOutput: [
            'استمرار تكرار الحركة بصفة دائمة دون توقف.'
        ],
        professionalTips: 'استخدم infinite للمشغلات والـ loaders والأيقونات التفاعلية المستمرة، واكتفِ بـ 1 للواجهات الظاهرة عند فتح الصفحة.',
        commonMistakes: {
            wrong: `/* كتابة loop بدلاً من infinite للتكرار المستمر */
.spin { animation-iteration-count: loop; }`,
            right: `.spin { animation-iteration-count: infinite; }`,
            explanation: 'كلمة loop غير موجودة في لغة CSS؛ الكلمة المعيارية للتكرار اللانهائي هي infinite.'
        },
        thinkingWay: 'فكر في iteration-count كعداد المسجل؛ تطلب منه إعادة تشغيل الشريط 3 مرات أو إلى المالانهاية.',
        relatedMethods: ['css-animation-direction'],
        keywords: ['animation-iteration-count', 'infinite', 'repeat animation', 'loop animation']
    },
    {
        id: 'css-animation-direction',
        name: 'animation-direction',
        shortDescription: 'التحكم باتجاه سير الحركة وتسلسل إطاراتها (normal, reverse, alternate).',
        longDescription: 'خاصية تحدد اتجاه قراءة الإطارات المفتاحية؛ normal تبدأ من 0% إلى 100%، و reverse تعكس من 100% إلى 0%، و alternate تعكس الاتجاه ذهاباً وإياباً في كل دورة.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `/* جعل الكرة تتحرك ذهاباً وإياباً بسلاسة متصلة */
.bouncing-ball {
  animation-direction: alternate;
  animation-iteration-count: infinite;
}`
        ],
        expectedOutput: [
            'انسياب الحركة من 0% إلى 100% ثم العودة العكسية من 100% إلى 0% بنظافة.'
        ],
        professionalTips: 'استخدم alternate لإنشاء حركات الذهاب والإياب النظيفة (مثل تأثيرات النبض والتذبذب) وتفادي القفزة القاسية عند إعادة الدورة.',
        commonMistakes: {
            wrong: `/* تكرار نفس الأكواد في @keyframes من 0 لـ 100 ثم من 100 لـ 0 يدوياً بدلاً من alternate */
@keyframes pulse { 0% {...} 50% {...} 100% {...} }`,
            right: `/* تبسيط Keyframes واستخدام alternate */
.box { animation-direction: alternate; }`,
            explanation: 'الخاصية alternate تخفف أسطر @keyframes وتجعل المحرك يتكفل بالعكس آلياً.'
        },
        thinkingWay: 'اعتبر direction كبديل شريط الفيديو؛ إما تشغيله للأمام، أو العكس للخلف، أو التردد بينهما.',
        relatedMethods: ['css-animation-iteration-count'],
        keywords: ['animation-direction', 'alternate', 'reverse', 'alternate-reverse', 'ping-pong animation']
    },
    {
        id: 'css-animation-fill-mode',
        name: 'animation-fill-mode',
        shortDescription: 'التحكم بتطبيق وتثبيت التنسيقات قبل بدء الحركة وبعد انتهائها.',
        longDescription: 'خاصية تحدد الحالة التنسيقية للعنصر خارج أوقات التشغيل؛ forwards تحافظ على تنسيق الإطار الأخير (100%) بعد الانتهاء، و backwards تطبق الإطار الأول (0%) أثناء التأخير، و both تدمجهما.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `/* تثبيت العنصر في حالة الشفافية الكاملة فور انتهاء أنيميشن الظهور */
.fade-in-element {
  animation-name: fadeIn;
  animation-duration: 0.5s;
  animation-fill-mode: forwards; /* الحفاظ على إطار النهاية */
}`
        ],
        expectedOutput: [
            'بقاء العنصر ظاهراً ومستقراً بالحالة الأخيرة المكتوبة في 100% دون ارتداده المفاجئ للبداية.'
        ],
        professionalTips: 'استخدم دائماً animation-fill-mode: forwards عند تصميم تحريكات دخول وخروج العناصر (In/Out Animations) لتمنع قفز العنصر لحالته الأصلية فور اكتمال الحركة.',
        commonMistakes: {
            wrong: `/* التفاجؤ باختفاء أو ارتداد العنصر للبداية فور انتهاء الحركة */
.box { animation: fadeIn 1s; }`,
            right: `.box { animation: fadeIn 1s forwards; }`,
            explanation: 'بدون forwards يعود العنصر لتنسيق كلاس الـ CSS الأصلي بمجرد اكتمال آخر إطار.'
        },
        thinkingWay: 'فكر في fill-mode كتثبيت الصمغ؛ تطلب منه تثبيت الشكل على آخر لوحة وصل إليها وعدم إرجاعه.',
        relatedMethods: ['css-animation-shorthand'],
        keywords: ['animation-fill-mode', 'forwards', 'backwards', 'both', 'retain animation state']
    },
    {
        id: 'css-animation-play-state',
        name: 'animation-play-state',
        shortDescription: 'إيقاف مؤقت أو استئناف تشغيل الحركة بـ JS أو عند :hover.',
        longDescription: 'خاصية تتيح تجميد وتمرير الحركة مؤقتاً عند قيمة paused، وإعادة تشغيلها واستئنافها من نفس الإطار المتوقف عنده بـ running.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `/* تجميد حركة شريط الأخبار المتحرك فور وقوف ماوس الزائر عليه */
.ticker-wrapper:hover .ticker-item {
  animation-play-state: paused;
}`
        ],
        expectedOutput: [
            'تجميد توقف الشريط الترويجي المتحرك في مكانه فور التمرير عليه بالماوس وتسهيل القراءة.'
        ],
        professionalTips: 'استخدم animation-play-state: paused عند الـ hover لتأمين تجربة مستخدم مريحة (UX) تتيح للزائر قراءة النصوص المسرعة دون مضايقة.',
        commonMistakes: {
            wrong: `/* استخدام animation: none لإيقاف الحركة فيتسبب في إعادة الأنيميشن للبداية */
.box:hover { animation: none; }`,
            right: `.box:hover { animation-play-state: paused; }`,
            explanation: 'الـ animation: none تمسح الأنيميشن كلياً، بينما paused تجمد الحركة في موقعها الحالي دون إلغائها.'
        },
        thinkingWay: 'اعتبر play-state كزر Pause و Play في مشغل الفيديو الرقمي.',
        relatedMethods: ['css-animation-shorthand'],
        keywords: ['animation-play-state', 'paused', 'running', 'pause animation hover', 'freeze animation']
    },
    {
        id: 'css-animation-shorthand',
        name: 'animation (Shorthand Property)',
        shortDescription: 'خاصية الاختصار المجمعة لتعيين كافة قواعد الأنيميشن بكسرة سطر واحدة.',
        longDescription: 'الخاصية المجمعة القياسية؛ تدمج (name, duration, timing-function, delay, iteration-count, direction, fill-mode, play-state) بأسلوب مقتضب بسطر واحد.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* إعلان أنيميشن كامل مستمر ومتذبذب بكسرة سطر */
.pulse-loader {
  animation: pulse 1.5s ease-in-out infinite alternate;
}`
        ],
        expectedOutput: [
            'تطبيق كافة مدخلات الأنيميشن بأسلوب برمجي نظيف ومقتضب.'
        ],
        professionalTips: 'الترتيب القياسي المعتمد بـ animation: [name] [duration] [timing-function] [delay] [iteration-count] [direction] [fill-mode].',
        commonMistakes: {
            wrong: `/* الخلط بين الترتيب الزمني وضع الرقم الأول للتأخير بدلاً من المدة */
.box { animation: move 2s 1s; /* 1s هي التأخير و 2s هي المدة */ }`,
            right: `/* زمن المدة هو أول قيمة زمنية تقرأ دائماً بـ animation */`,
            explanation: 'المتصفح يعتبر أول رقم زمني مكتوب هو animation-duration وثاني رقم زمني هو animation-delay.'
        },
        thinkingWay: 'فكر في animation كالحقيبة المجمعة؛ تضع اسم الممثل وزمام السرعة والتكرار بأمر واحد.',
        relatedMethods: ['css-keyframes-rule', 'css-animation-name'],
        keywords: ['animation', 'CSS animation shorthand', 'keyframe shorthand', 'pulse animation']
    },
    {
        id: 'css-will-change',
        name: 'will-change',
        shortDescription: 'إعلام وتسريع معالج الرسوميات (GPU) مسبقاً بالتغيرات البصرية المرتقبة.',
        longDescription: 'خاصية أداء متقدمة تُخبر المتصفح مسبقاً بالخصائص التي ستتغير مستقبلاً (مثل will-change: transform)؛ ليقوم المتصفح بإنشاء طبقة GPU خاصة فوراً وتسريع الريندر.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `/* تهيئة وتجهز كارت الشاشة لتحريك البوكس بسلاسة فائقة */
.hardware-accelerated-box {
  will-change: transform, opacity;
}`
        ],
        expectedOutput: [
            'رفع وتجهيز العنصر بداخل طبقة معالج الرسوميات المباشرة للحصول على أداء 120fps.'
        ],
        professionalTips: 'تحذير أداء شديد (Performance Warning): استخدم will-change بحذر وبعدد محدد جداً من العناصر؛ وضعها على كل عناصر الصفحة يسبب استهلاك الذاكرة العشوائية (RAM) ويتسبب في تسريب الذاكرة (Memory Leak).',
        commonMistakes: {
            wrong: `/* وضع will-change على المحدد العام * وتطبيقها على كامل عناصر المشروع */
* { will-change: transform; }`,
            right: `/* وضعها حصراً على المكونات الثقيلة المعقدة التحريك فقط */
.modal-active { will-change: transform; }`,
            explanation: 'الإفراط باستخدام will-change يثقل ذاكرة كارت الشاشة ويأتي بنتيجة عكسية تبطئ التطبيق.'
        },
        thinkingWay: 'اعتبر will-change كإخطار الخدمة بالوصول المبكر؛ تخبر الفندق بوصولك مسبقاً ليجهز لك الغرفة فوراً.',
        relatedMethods: ['css-transform-translate'],
        keywords: ['will-change', 'GPU acceleration', 'composite layer', 'web performance', 'hardware acceleration']
    }
];