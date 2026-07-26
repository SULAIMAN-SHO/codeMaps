export const mathFunctionsData = [
    {
        id: 'css-calc-function',
        name: 'calc() Function',
        shortDescription: 'إجراء العمليات الحسابية المدمجة والخلط المرن بين الوحدات المتباينة.',
        longDescription: 'دالة حسابية مدمجة بـ CSS تتيح دمج وإجراء العمليات الحسابية الأساسية (+, -, *, /) والخلط المباشر بين وحدات القياس المتباينة (مثل خصم البكسل px من النسبة المئوية % أو وحدات rem).',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* خصم مسافة الفوتر المحددة بـ 80px من الارتفاع الكامل للشاشة */
.content-wrapper {
  min-height: calc(100vh - 80px);
}

/* تباعد ديناميكي محسب بالقسمة */
.grid-item {
  width: calc((100% - 2rem) / 3);
}`
        ],
        expectedOutput: [
            'حساب أبعاد العنصر تلقائياً بمرونة كاملة عبر دمج وحدات البكسل والنسب المئوية.'
        ],
        professionalTips: 'تنبيه حتمي في الصياغة: يجب وضع مسافة فارغة (Space) قبل وبعد معاملي الجمع (+) والطرح (-) داخل calc()؛ لمنع المتصفح من قراءتهما كعلامات إشارة سلبية للوحدات.',
        commonMistakes: {
            wrong: `/* كتابة معامل الطرح ملتصقاً بالأرقام بدون مسافات فارغة */
.box { width: calc(100%-20px); }`,
            right: `.box { width: calc(100% - 20px); }`,
            explanation: 'عدم ترك مسافة فارغة حول رمز - أو + يتسبب في فشل قراءة الدالة وتجاهل القاعدة التنسيقية كلياً.'
        },
        thinkingWay: 'اعتبر calc() كالحاسبة المدمجة بداخل المتصفح؛ تحسب الناتج المباشر في وقت التشغيل (Runtime) فور تغير الحجم.',
        relatedMethods: ['css-clamp-function', 'css-min-max-functions'],
        keywords: ['calc()', 'CSS math', 'mixed units', 'calc calculation', 'unit mixing']
    },
    {
        id: 'css-clamp-function',
        name: 'clamp() Function',
        shortDescription: 'التصميم والخطوط السيالة (Fluid Sizing) المحصورة بين حد أدنى ومثالي وأقصى.',
        longDescription: 'دالة حظر ديناميكية تقبل 3 وسائط: (الحد الأدنى MIN، القيمة المثالية المائعة VAL، والحد الأقصى MAX)؛ لتغيير أبعاد الخطوط والمساحات بانسيابية مع الشاشة دون تجاوز الحدود.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* خط سيال يتكيف ناعماً بين 1.5rem و 3rem بحسب عرض الشاشة */
.fluid-title {
  font-size: clamp(1.5rem, 4vw + 1rem, 3rem);
}

/* حشو سيال ينقبض ويتمدد تلقائياً */
.fluid-card {
  padding: clamp(1rem, 3vw, 2.5rem);
}`
        ],
        expectedOutput: [
            'انسياب وتغير أبعاد الخط والحشو بنعومة فائقة مع توسع وانكماش الشاشة دون الحاجة لـ Media Queries.'
        ],
        professionalTips: 'دالة clamp() هي الركيزة المعمارية الأولى لبناء التصميم السيال (Fluid Design) لعام 2026؛ اختصرت عشرات سطور استعلامات الميديا بكسرة سطر واحدة.',
        commonMistakes: {
            wrong: `/* وضع القيمة المثالية المائعة بوحدة صلبة مثل px بدلاً من vw أو rem */
.title { font-size: clamp(1rem, 20px, 3rem); }`,
            right: `.title { font-size: clamp(1rem, 4vw, 3rem); }`,
            explanation: 'القيمة الوسطى يجب أن تحتوي على وحدة مرنة (مثل vw أو %) لكي يتأرجح الحجم مع تغير اتساع الشاشة.'
        },
        thinkingWay: 'فكر في clamp() كالمساعد الذكي الذي يمد الحبل بمرونة؛ لكنه يقف بصرامة فور الوصول للحد الأدنى أو الأقصى المسموح.',
        relatedMethods: ['css-min-max-functions', 'css-font-clamp'],
        keywords: ['clamp()', 'fluid typography', 'fluid layout', 'min val max', 'responsive math']
    },
    {
        id: 'css-min-max-functions',
        name: 'min() & max() Functions',
        shortDescription: 'انتخاب وتحديد القيمة الأصغر أو الأكبر ديناميكياً لتشكل حظر الأبعاد.',
        longDescription: 'دوال اختيار حسابية؛ min() تختار وتطبق القيمة الأصغر من بين قائمة مدخلات (مفيدة لمنع التمدد)، بينما max() تختار القيمة الأكبر لضمان حد أدنى للحجم.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* اختيار العرض الأصغر دائماً لمنع الحاوية من التمدد خارج 800px */
.container {
  width: min(100% - 2rem, 800px);
}

/* ضمان ألا يقل حجم الخط عن 16px حتى في الشاشات المجهرية */
.readable-text {
  font-size: max(1rem, 2vw);
}`
        ],
        expectedOutput: [
            'تحديد الحجم الأصغر بـ min() لمنع طفح الشاشة، وتأمين الحجم الأكبر بـ max() لضمان المقروئية.'
        ],
        professionalTips: 'الدالة min(100%, 800px) تعادل تماماً كتابة width: 100%; max-width: 800px؛ ولكنها تختصر السطرين في خاصية واحدة.',
        commonMistakes: {
            wrong: `/* الخلط الفكري بين عمل min() و max() والتوقع العكسي لنتائجهما */
.box { width: min(300px, 100px); /* ستختار دائماً 100px لأنها الأصغر */ }`,
            right: `.box { width: min(100%, 800px); }`,
            explanation: 'الدالة min() تختار دائماً القيمة الأقل حجماً في وقت التشغيل، بينما max() تختار القيمة الأعلى.'
        },
        thinkingWay: 'اعتبر min() كالمصفاة التي ترفض أي حجم يتجاوز الخيار الأصغر، و max() كالصمام الذي يضمن عدم النزول عن القيمة الكبرى.',
        relatedMethods: ['css-clamp-function', 'css-calc-function'],
        keywords: ['min()', 'max()', 'CSS min max', 'dynamic bounds', 'responsive math']
    },
    {
        id: 'css-trigonometric-functions',
        name: 'CSS Trigonometric Functions (sin, cos, tan, atan2)',
        shortDescription: 'الدوال المثلثية الرياضية المعاصرة لبناء المخططات الدائرية والتحريكات المعقدة بـ CSS.',
        longDescription: 'دوال هندسية دائرية متقدمة بـ CSS المعاصر (sin, cos, tan, atan2)؛ تتيح حساب الجيب والظلال الزاوية لبناء التوزيعات الدائرية والأنيميشن الترددي الحلزوني بدون جافا سكريبت.',
        difficulty: 'hard',
        importance: 'important',
        examples: [
            `/* توزيع العناصر على مسار دائري محيطي بناءً على زاوية كل عنصر */
.circle-item {
  --angle: 45deg;
  --radius: 150px;
  /* حساب الإحداثيات الأفقية والرأسية بالدوال المثلثية */
  left: calc(50% + cos(var(--angle)) * var(--radius));
  top: calc(50% + sin(var(--angle)) * var(--radius));
}`
        ],
        expectedOutput: [
            'تموضع العنصر بدقة متناهية على محيط الدائرة عند الزاوية 45 درجة بـ CSS الصرف.'
        ],
        professionalTips: 'الدوال المثلثية في CSS تلغي الحاجة لمعادلات الجافا سكريبت المعقدة عند تصميم القوائم الدائرية، الساعات الرقمية، والتحريكات الموجية.',
        commonMistakes: {
            wrong: `/* كتابة الدرجات بدون وحدة deg أو rad داخل sin() أو cos() */
.box { left: calc(sin(90) * 100px); }`,
            right: `.box { left: calc(sin(90deg) * 100px); }`,
            explanation: 'الدوال المثلثية تشترط تمرير الزوايا بوحدة صريحة مثل deg (درجات) أو rad (راديان).'
        },
        thinkingWay: 'فكر في sin() و cos() كفرجار المهندس المعماري؛ تحسب الإحداثيات الدقيقة للنقاط على محيط الدائرة.',
        relatedMethods: ['css-calc-function'],
        keywords: ['sin()', 'cos()', 'tan()', 'atan2()', 'trigonometry CSS', 'circular layout', 'math CSS']
    }
];