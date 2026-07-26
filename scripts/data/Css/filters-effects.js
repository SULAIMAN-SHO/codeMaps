export const filtersEffectsData = [
    {
        id: 'css-filter-property',
        name: 'filter Property',
        shortDescription: 'تطبيق المؤثرات البصرية على الصور والعناصر دون تعديل الملف الأصلي.',
        longDescription: 'خاصية تُستخدم لتطبيق مؤثرات بصرية مباشرة على العناصر، مثل الضبابية (blur)، والظل (drop-shadow)، والتدرج الرمادي (grayscale)، والسطوع (brightness)، والتباين (contrast)، مع الحفاظ على المحتوى الأصلي دون أي تعديل.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* تحويل الصورة للأبيض والأسود وإرجاع ألوانها الأصلية عند الـ hover */
.portfolio-img {
  filter: grayscale(100%) contrast(120%);
  transition: filter 0.3s ease;
}

.portfolio-img:hover {
  filter: grayscale(0%) contrast(100%);
}`
        ],
        expectedOutput: [
            'عرض الصورة بتدرج رمادي، ثم استعادة ألوانها الأصلية بسلاسة عند مرور مؤشر الماوس.'
        ],
        professionalTips: 'يمكن دمج عدة فلاتر داخل خاصية filter واحدة، مثل blur() و brightness(). تجنب كتابة الخاصية أكثر من مرة، لأن القيمة الأخيرة تستبدل جميع القيم السابقة.',
        commonMistakes: {
            wrong: `/* تكرار الخاصية filter يؤدي إلى استبدال القيمة الأولى */
.img {
  filter: blur(5px);
  filter: grayscale(50%);
}`,
            right: `.img {
  filter: blur(5px) grayscale(50%);
}`,
            explanation: 'عند تكرار خاصية filter، يعتمد المتصفح آخر قيمة فقط، مما يؤدي إلى تجاهل جميع الفلاتر السابقة.'
        },
        thinkingWay: 'تخيل filter كعدسة توضع أمام الكاميرا؛ فهي لا تغيّر الصورة الأصلية، وإنما تغيّر طريقة عرضها فقط.',
        relatedMethods: ['css-backdrop-filter-property', 'css-filter-drop-shadow'],
        keywords: ['filter', 'blur()', 'grayscale()', 'brightness()', 'contrast()', 'CSS image processing']
    },
    {
        id: 'css-backdrop-filter-property',
        name: 'backdrop-filter Property',
        shortDescription: 'تطبيق المؤثرات البصرية على المحتوى الواقع خلف العنصر مباشرة.',
        longDescription: 'خاصية تُطبق الفلاتر البصرية، مثل blur و saturate، على المحتوى الموجود خلف العنصر شبه الشفاف، وتُستخدم بشكل واسع في تصميم واجهات Glassmorphism لإنشاء تأثير الزجاج الضبابي.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* تصميم بطاقة زجاجية مع تأثير ضبابي للخلفية */
.glass-panel {
  background-color: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.12);
}`
        ],
        expectedOutput: [
            'تمويه العناصر الظاهرة خلف العنصر مع الحفاظ على وضوح محتواه، مما يمنحه مظهراً زجاجياً حديثاً.'
        ],
        professionalTips: 'تجنب استخدام backdrop-filter بكثرة داخل العناصر المتكررة أو القابلة للتمرير؛ لأنه قد يستهلك موارد معالج الرسوميات ويؤثر في الأداء، خاصة على الأجهزة المحمولة. كما يُنصح بإضافة ‎-webkit-backdrop-filter‎ لتحسين التوافق مع Safari.',
        commonMistakes: {
            wrong: `/* استخدام backdrop-filter مع خلفية معتمة بالكامل */
.glass {
  background: #000;
  backdrop-filter: blur(10px);
}`,
            right: `.glass {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
}`,
            explanation: 'لن يظهر تأثير backdrop-filter إلا إذا كانت خلفية العنصر تسمح برؤية المحتوى الموجود خلفها، لذلك يُستخدم عادةً مع خلفيات شبه شفافة.'
        },
        thinkingWay: 'تخيل نافذة زجاجية مصنفرة؛ ترى ما خلفها بشكل ضبابي، بينما يبقى الزجاج نفسه واضحاً.',
        relatedMethods: ['css-filter-property', 'css-alpha-channel'],
        keywords: ['backdrop-filter', 'Glassmorphism', 'frosted glass', 'blur backdrop', 'GPU performance']
    },
    {
        id: 'css-mix-blend-mode-property',
        name: 'mix-blend-mode Property',
        shortDescription: 'تحديد كيفية امتزاج ألوان العنصر مع ألوان العناصر والخلفيات الموجودة أسفله.',
        longDescription: 'خاصية تتحكم في طريقة دمج ألوان العنصر مع ما يقع خلفه باستخدام أوضاع دمج متعددة، مثل Multiply و Screen و Overlay و Difference، على غرار برامج التصميم الاحترافية.',
        difficulty: 'hard',
        importance: 'important',
        examples: [
            `/* جعل لون النص يتكيف مع لون الخلفية */
.adaptive-title {
  color: #ffffff;
  mix-blend-mode: difference;
}`
        ],
        expectedOutput: [
            'امتزاج لون العنصر مع الخلفية وفق وضع الدمج المحدد، مما ينتج تأثيراً بصرياً يختلف باختلاف الألوان الموجودة أسفله.'
        ],
        professionalTips: 'يمكن استخدام mix-blend-mode: difference لإنشاء نص يتكيف بصرياً مع لون الخلفية دون الحاجة إلى JavaScript، لكن تأكد من اختبار النتيجة على مختلف الخلفيات لضمان وضوح النص.',
        commonMistakes: {
            wrong: `/* استخدام mix-blend-mode دون وجود خلفية يمكن الدمج معها */
.text {
  mix-blend-mode: multiply;
} /* الخلفية أسفل العنصر بيضاء بالكامل */`,
            right: `.parent-bg {
  background: yellow;
}

.text {
  mix-blend-mode: multiply;
}`,
            explanation: 'يعتمد mix-blend-mode على امتزاج ألوان العنصر مع الألوان الموجودة خلفه، لذلك لن يظهر التأثير إذا لم تكن هناك خلفية أو عناصر مناسبة للدمج.'
        },
        thinkingWay: 'تخيل وضع ورقة شفافة ملونة فوق ورقة أخرى؛ اللون الناتج يعتمد على امتزاج ألوان الطبقتين معاً.',
        relatedMethods: ['css-isolation-isolate', 'css-color-mix'],
        keywords: ['mix-blend-mode', 'blend mode', 'multiply', 'difference', 'CSS blending', 'overlay']
    },
    {
        id: 'css-clip-path-property',
        name: 'clip-path Property',
        shortDescription: 'قص الجزء الظاهر من العنصر باستخدام أشكال هندسية أو مسارات مخصصة.',
        longDescription: 'خاصية تُستخدم لتحديد الجزء المرئي من العنصر عبر قص الأجزاء الواقعة خارج الشكل المحدد، وذلك باستخدام أشكال هندسية مثل polygon() و circle() و inset() أو المسارات المتجهة عبر path().',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `/* قص البطاقة على شكل مسدس */
.hexagon-card {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

/* قص الصورة على شكل دائرة */
.circle-avatar {
  clip-path: circle(50% at center);
}`
        ],
        expectedOutput: [
            'إظهار العنصر بالشكل الهندسي المحدد مع إخفاء جميع الأجزاء الواقعة خارجه.'
        ],
        professionalTips: 'يمكن تحريك قيم clip-path باستخدام transition أو animation لإنشاء تأثيرات كشف وانتقال سلسة، مع الحفاظ على أداء جيد في أغلب المتصفحات الحديثة.',
        commonMistakes: {
            wrong: `/* افتراض أن المنطقة المقصوصة ستبقى قابلة للنقر */
.btn {
  clip-path: circle(20px);
}`,
            right: `/* تذكر أن clip-path يؤثر في المنطقة المرئية والمنطقة القابلة للتفاعل معاً */`,
            explanation: 'الأجزاء التي تُقص بواسطة clip-path لا تُعرض، كما أنها لا تستقبل أحداث النقر أو اللمس أو مرور مؤشر الماوس.'
        },
        thinkingWay: 'تخيل clip-path كمقص يقص ورقة؛ كل ما يُقص يختفي من العرض ومن منطقة التفاعل أيضاً.',
        relatedMethods: ['css-mask-image-property', 'css-overflow'],
        keywords: ['clip-path', 'polygon()', 'circle()', 'CSS clipping', 'shape reveal', 'vector clip']
    },
    {
        id: 'css-mask-image-property',
        name: 'mask-image Property',
        shortDescription: 'تحديد الأجزاء الظاهرة والمخفية من العنصر باستخدام صورة أو تدرج لوني.',
        longDescription: 'خاصية تستخدم صورة أو تدرجاً لونياً كقناع للتحكم في ظهور أجزاء العنصر اعتماداً على الشفافية أو الإضاءة، مما يتيح إنشاء تأثيرات تلاشي وكشف تدريجية دون تعديل المحتوى الأصلي.',
        difficulty: 'hard',
        importance: 'important',
        examples: [
            `/* إنشاء تلاشي تدريجي في أسفل الصورة */
.faded-banner {
  mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
}`
        ],
        expectedOutput: [
            'تلاشي الجزء السفلي من الصورة تدريجياً ليمتزج بسلاسة مع خلفية الصفحة.'
        ],
        professionalTips: 'لتحسين التوافق مع Safari وبعض إصدارات iOS، استخدم -webkit-mask-image إلى جانب mask-image عند تطبيق الأقنعة.',
        commonMistakes: {
            wrong: `/* الاعتقاد أن ألوان القناع نفسها ستظهر على العنصر */
.img {
  mask-image: linear-gradient(red, blue);
}`,
            right: `.img {
  mask-image: linear-gradient(black, transparent);
}`,
            explanation: 'يعتمد mask-image على قيم الشفافية أو الإضاءة لتحديد الأجزاء الظاهرة والمخفية، ولا يستخدم ألوان القناع نفسها في تلوين العنصر.'
        },
        thinkingWay: 'تخيل mask-image كقالب (Stencil)؛ الأجزاء المفتوحة منه تسمح بظهور العنصر، بينما تخفي الأجزاء المغطاة ما يقع خلفها.',
        relatedMethods: ['css-clip-path-property', 'css-linear-gradient'],
        keywords: ['mask-image', '-webkit-mask-image', 'CSS masking', 'fade edge', 'gradient mask']
    }
];