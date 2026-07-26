export const variablesCustomPropertiesData = [
    {
        id: 'css-var-declaring-global',
        name: 'Declaring Global Variables (:root)',
        shortDescription: 'الإعلان عن المتغيرات العامة الشاملة على مستوى جذور التطبيق :root.',
        longDescription: 'تحديد الخصائص المخصصة العامة باستخدام البادئة المزدوجة `--` داخل محدد الجذر `:root`؛ لتصبح القيم متوفرة ومتاحة للاستهلاك في كافة عناصر وشاشات المشروع.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* تعيين متغيرات الهوية البصرية العامة للمنصة */
:root {
  --primary-color: #3b82f6;
  --bg-dark: #0f172a;
  --radius-sm: 8px;
}`
        ],
        expectedOutput: [
            'حفظ قيم الألوان والحواف في ذاكرة الـ CSS العامة كقيم فريدة قابلة للاستدعاء.'
        ],
        professionalTips: 'اعتمد تسمية معمارية واضحة تعبر عن وظيفة المتغير (مثل `--accent-color`) بدلاً من تسميته برقم اللون المباشر (مثل `--blue-color`)؛ لتسهيل تبديل الألوان بداخل الثيمات.',
        commonMistakes: {
            wrong: `/* كتابة اسم المتغير بدون البادئة المزدوجة -- */
:root { primaryColor: #3b82f6; }`,
            right: `:root { --primary-color: #3b82f6; }`,
            explanation: 'متغيرات CSS تشترط حتماً البادئة المزدوجة -- في بداية اسمها ليتعرف عليها المحرك.'
        },
        thinkingWay: 'اعتبر :root كخزانة الألوان المركزية في الورشة؛ تضع بها الخامات لتسحب منها كل الأقسام بالأسفل.',
        relatedMethods: ['css-var-function', 'css-var-declaring-local'],
        keywords: ['CSS Variables', ':root', '--custom-property', 'global variables', 'design tokens']
    },
    {
        id: 'css-var-declaring-local',
        name: 'Declaring Local Variables (Scope)',
        shortDescription: 'حصر ونطاق المتغيرات المحلية بداخل مكون أو كلاس محدد.',
        longDescription: 'تعريف المتغيرات المخصصة بداخل كلاس أو مكون محدد فقط (Local Scope)؛ مما يحصر استخدام المتغير داخل هذا المكون وأبنائه المباشرين ويمنع تسربه لكامل الواجهة.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* متغيرات محددة بداخل نطاق مكون الكرت حصراً */
.premium-card {
  --card-padding: 1.5rem;
  --card-bg: rgba(255, 255, 255, 0.05);
  padding: var(--card-padding);
  background-color: var(--card-bg);
}`
        ],
        expectedOutput: [
            'عزل متغيرات الكرت وحصر قيمها بداخل النطاق المحدد دون التأثير على بقية الصفحة.'
        ],
        professionalTips: 'استخدم المتغيرات المحلية لبناء المكونات المعيارية (Component-level Tokens) بأسلوب BEM؛ لتتيح إعادة تخصيص المكون الخارجي بتغيير متغيراته فقط.',
        commonMistakes: {
            wrong: `/* محاولة استدعاء متغير محلي خارجي بداخل عنصر آخر */
.card { --padding: 20px; }
.footer { padding: var(--padding); /* لن يعثر على المتغير */ }`,
            right: `:root { --padding: 20px; } /* أو تعريفها محلياً بداخل .footer */`,
            explanation: 'المتغيرات المحلية لا يمكن قراءتها إلا بداخل العنصر المعرّفة فيه أو أبنائه المباشرين.'
        },
        thinkingWay: 'فكر في النطاق المحلي كالنور المضاء بداخل الغرفة؛ يضيء ما بداخل الغرفة فقط ولا يمتد للشارع.',
        relatedMethods: ['css-var-declaring-global', 'css-var-function'],
        keywords: ['Local Scope', 'scoped CSS variables', 'component tokens', 'isolated style']
    },
    {
        id: 'css-var-function',
        name: 'var() Function',
        shortDescription: 'الدالة المخصصة لقراءة واستهلاك قيم المتغيرات المعرفة بـ CSS.',
        longDescription: 'دالة مدمجة تُستخدم لتمرير واستهلاك قيم الخصائص المخصصة المعرفة بـ `--` وإسنادها لخصائص التنسيق المباشرة مثل color أو background-color.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `.button {
  background-color: var(--primary-color);
  border-radius: var(--radius-sm);
}`
        ],
        expectedOutput: [
            'قراءة واستبدال دالة var() باللون الأزرق وحافة 8px المحددة مسبقاً.'
        ],
        professionalTips: 'تتميز دالة var() بقدرتها على التكيف الحقيقي في وقت التشغيل (Runtime Dynamic)؛ بخلاف متغيرات Sass و Less الثابتة أثناء التجميع.',
        commonMistakes: {
            wrong: `/* استدعاء اسم المتغير مباشرة بدون غلاف الدالة var() */
.btn { background-color: --primary-color; }`,
            right: `.btn { background-color: var(--primary-color); }`,
            explanation: 'المتصفح لا يقبل اسم المتغير بمفرده، ويشترط تغليفه بداخل الدالة var().'
        },
        thinkingWay: 'اعتبر var() كأنبوب السحب الذي يجلب المادة المخزنة في خزان المتغير ويرشها على الجدار.',
        relatedMethods: ['css-var-declaring-global', 'css-var-fallback'],
        keywords: ['var()', 'CSS var', 'consume variables', 'dynamic styles']
    },
    {
        id: 'css-var-fallback',
        name: 'Fallback Values in var()',
        shortDescription: 'إدراج القيم الاحتياطية لتأمين التنسيق عند غياب المتغير الأصلي.',
        longDescription: 'ميزة أمان بداخل دالة var() تتيح كتابة قيمة احتياطية كعنصر ثانٍ (مثل var(--accent, #3b82f6))؛ لتسري فوراً إذا كان المتغير المسمى غير معرف أو معطل.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* استخدام قيمة احتياطية زرقاء في حال عدم تعريف المتغير --theme-accent */
.badge {
  color: var(--theme-accent, #3b82f6);
}`
        ],
        expectedOutput: [
            'استخدام اللون الأزرق #3b82f6 تلقائياً عند غياب متغير --theme-accent.'
        ],
        professionalTips: 'تتيح لك القيم الاحتياطية كتابة مكونات آمنة جداً (Fail-safe Components) تعمل بنجاح حتى لو طُبقت في بيئة تطبيق تفتقر لمتغيرات الجذر.',
        commonMistakes: {
            wrong: `/* وضع فاصلة زائدة بين قيم الخاصية المركبة بداخل القيمة الاحتياطية */
.box { margin: var(--gap, 10px, 20px); }`,
            right: `.box { margin: var(--gap, 10px 20px); }`,
            explanation: 'الفاصلة الأولى داخل var() تفصل اسم المتغير، وكل ما يأتي بعدها يُعتبر قيمة احتياطية واحدة (بدون فواصل إضافية إلا إذا كانت مقبولة بـ CSS).'
        },
        thinkingWay: 'فكر في القيمة الاحتياطية كإطار السيارة الاحتياطي؛ تركبه فوراً لتواصل السير إذا ثُقب الإطار الأصلي.',
        relatedMethods: ['css-var-function'],
        keywords: ['fallback values', 'var fallback', 'default CSS value', 'fail-safe CSS']
    },
    {
        id: 'css-var-inheritance',
        name: 'Variable Inheritance & Cascading',
        shortDescription: 'قواعد توارث وانسياب المتغيرات المخصصة عبر شجرة عناصر الـ DOM.',
        longDescription: 'خاصية سريان المتغيرات عبر شلال التتابع (Cascade)؛ حيث تتوارث العناصر الفرعية قيمة المتغير من الآباء، وتتيح إعادة كتابة القيمة بداخل كلاس فرعي لتتغير لجميع أطفال ذاك الفرع فقط.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* تعيين قيمة افتراضية للون النص بالأب */
.parent {
  --text-color: #94a3b8;
}

/* إعادة تعيين المتغير بفرع المكون المميز ليتغير لأطفاله حصراً */
.parent.featured {
  --text-color: #3b82f6;
}

.parent .title {
  color: var(--text-color);
}`
        ],
        expectedOutput: [
            'تحول لون العنوان للأزرق تلقائياً في الكرت المميز وللرمادي في الكرت العادي.'
        ],
        professionalTips: 'استغل ميزة توارث المتغيرات لبناء متغيرات السياق (Contextual Tokens) لإنشاء أنماط فرعية بدون تكرار سطور الكود.',
        commonMistakes: {
            wrong: `/* التفاجؤ بعدم تأثير تغيير متغير الابن على عناصر الأب الأعلى */
.child { --color: red; } .parent { color: var(--color); }`,
            right: `/* المتغيرات تنساب من الأعلى للأسفل في الشجرة وليس العكس */`,
            explanation: 'توارث المتغيرات يسير في اتجاه واحد من العناصر الأب نحو الأبناء بالأسفل.'
        },
        thinkingWay: 'اعتبر الوراثة كشبكة المياه بالمنزل؛ تضخ المادة من الخزان الرئيسي لتغذي كافة الصنابير الفرعية.',
        relatedMethods: ['css-var-declaring-global', 'css-var-declaring-local'],
        keywords: ['variable inheritance', 'cascading variables', 'contextual CSS', 'scope override']
    },
    {
        id: 'css-var-theme-switching',
        name: 'Dynamic Theme Switching (Dark/Light Mode)',
        shortDescription: 'إدارة وتبديل الثيمات الداكنة والفاتحة ديناميكياً باستخدام المتغيرات.',
        longDescription: 'النمط المعماري الحديث لإنشاء وضع الثيم الداكن والفاتح بـ CSS؛ يعتمد على تعيين كتل متغيرات متباينة تحت السمة [data-theme="dark"] لتغيير ألوان التطبيق بنقرة زر.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* الثيم الفاتح الافتراضي */
:root {
  --bg-primary: #ffffff;
  --text-primary: #0f172a;
}

/* التبديل التلقائي للثيم الداكن عند تغيير السمة */
[data-theme="dark"] {
  --bg-primary: #0f172a;
  --text-primary: #f8fafc;
}`
        ],
        expectedOutput: [
            'انقلاب وانعكاس كافة ألوان الواجهة فوراً للوضع الداكن بمجرد تغيير سمة data-theme.'
        ],
        professionalTips: 'استخدم الاستعلام المباشر `@media (prefers-color-scheme: dark)` لربط المتغيرات بتفضيلات نظام تشغيل المستخدم آلياً قبل نقر أي زر.',
        commonMistakes: {
            wrong: `/* إعادة كتابة كافة الكلاسات بـ CSS للوضع الداكن بشكل منفصل */
body.dark .card { background: black; } body.dark .btn { background: gray; }`,
            right: `[data-theme="dark"] { --card-bg: black; --btn-bg: gray; }`,
            explanation: 'تغيير قيم المتغيرات يختصر مئات سطور الـ CSS في سطر واحد نظيف.'
        },
        thinkingWay: 'فكر في تغيير الثيم كضغط زر الإضاءة بالسقف؛ تتغير جميع خامات الغرفة بنقرة زر واحدة.',
        relatedMethods: ['css-var-declaring-global', 'css-var-js-manipulation'],
        keywords: ['theme switching', 'dark mode CSS', 'data-theme', 'prefers-color-scheme', 'color tokens']
    },
    {
        id: 'css-var-js-manipulation',
        name: 'JS setProperty() & getPropertyValue()',
        shortDescription: 'القراءة والتعديل التفاعلي المباشر لمتغيرات CSS عبر الجافا سكريبت.',
        longDescription: 'آلية الربط الديناميكي بين JS و CSS؛ تتيح قراءة قيمة المتغير عبر `getComputedStyle().getPropertyValue()` وتعديلها لحظياً بـ `element.style.setProperty()` لتأثيرات الماوس والإضاءة.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `// تحريك موقع بقعة الضوء بحسب إحداثيات ماوس الزائر
document.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--mouse-x', \`\${e.clientX}px\`);
  document.documentElement.style.setProperty('--mouse-y', \`\${e.clientY}px\`);
});`
        ],
        expectedOutput: [
            'تحديث قيم المتغيرات بالـ DOM حياً وتحريك تأثيرات الإضاءة التفاعلية بـ 60fps.'
        ],
        professionalTips: 'تعديل متغير CSS واحد عبر JS يلغي الحاجة لتعديل عشرات العناصر بالـ DOM؛ لأن كافة العناصر المستهلكة للمتغير ستتحدث تلقائياً.',
        commonMistakes: {
            wrong: `/* نسيان كتابة البادئة -- عند تعديل المتغير بـ setProperty */
element.style.setProperty('primary-color', 'red');`,
            right: `element.style.setProperty('--primary-color', 'red');`,
            explanation: 'الدالة setProperty تشترط وجود -- لتتعرف على المسميات المخصصة.'
        },
        thinkingWay: 'اعتبر JS كمقبض الصمام الذكي الذي يلف مقبض المتغير ليغير درجة الإضاءة حياً بالمنزل.',
        relatedMethods: ['css-var-declaring-global', 'css-var-theme-switching'],
        keywords: ['setProperty', 'getPropertyValue', 'CSSOM', 'JS CSS variables', 'interactive CSS']
    },
    {
        id: 'css-at-property-rule',
        name: 'Modern @property Rule',
        shortDescription: 'تعريف نوع المتغير الصريح لتمكين تحريك المتغيرات بـ Transitions.',
        longDescription: 'قاعدة CSS المعاصرة الثورية (CSS Houdini)؛ تتيح تسجيل المتغير بنوع صريح (مثل syntax: "<color>") وتعيين قيمته الابتدائية، مما يتيح للمتصفح تحريك التدرجات والألوان المربوطة بالمتغير بـ Transition ناعم.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `/* تسجيل متغير ألوان صريح قابل للتحريك الانسيابي */
@property --gradient-color {
  syntax: '<color>';
  inherits: false;
  initial-value: #3b82f6;
}

.animated-btn {
  background: linear-gradient(90deg, var(--gradient-color), #8b5cf6);
  transition: --gradient-color 0.5s ease;
}

.animated-btn:hover {
  --gradient-color: #ef4444; /* تحريك التدرج الملون بـ Transition ناعم! */
}`
        ],
        expectedOutput: [
            'انسياب وتغير ألوان التدرج الملون بـ Transition ناعم جداً وهو ما كان مستحيلاً سابقاً.'
        ],
        professionalTips: 'تُحل قاعدة `@property` المعضلة التاريخية في CSS القائلة بعدم إمكانية عمل Transition للتدرجات الملونة (Gradients).',
        commonMistakes: {
            wrong: `/* نسيان كتابة السمة syntax داخل قاعدة @property */
@property --my-color { initial-value: red; }`,
            right: `@property --my-color { syntax: '<color>'; inherits: false; initial-value: red; }`,
            explanation: 'السمة syntax حتمية لتخبر المحرك بآلية تحريك وفحص نوع المتغير.'
        },
        thinkingWay: 'فكر في @property كبطاقة الهوية الرسمية للمتغير؛ تمنحه نوعاً رسمياً يعترف به المتصفح عند التحريك.',
        relatedMethods: ['css-var-declaring-global', 'css-transition-shorthand'],
        keywords: ['@property', 'CSS Houdini', 'typed CSS variables', 'animate gradients', 'syntax: <color>']
    }
];