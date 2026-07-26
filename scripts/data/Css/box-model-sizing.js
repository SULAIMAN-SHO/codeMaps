export const boxModelSizingData = [
    {
        id: 'css-box-sizing-border-box',
        name: 'box-sizing: border-box',
        shortDescription: 'حساب الحشو والحدود بداخل الحجم الكلي للعنصر دون تمدده.',
        longDescription: 'القيمة المعيارية المعتمدة عالمياً لنموذج الصندوق؛ تجبر المتصفح على دمج الحشو الداخلي (Padding) والحدود (Border) بداخل العرض والارتفاع المحددين للعنصر، مما يمنع تمدد البوكس أو انكسار التخطيط.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `*, *::before, *::after {
  box-sizing: border-box;
}`
        ],
        expectedOutput: [
            'ثبات عرض البوكس المحدد بـ 300px تماماً حتى عند إضافة padding بـ 20px و border بـ 5px.'
        ],
        professionalTips: 'هذه القاعدة هي أول سطر يُكتب في أي مشروع ويب احترافي؛ تعيين border-box كلياً يلغي 90% من أخطاء انكسار العرض في Flexbox و Grid.',
        commonMistakes: {
            wrong: `/* ترك المتصفح يحسب الحشو فوق العرض المكتوب */
.card { width: 100%; padding: 20px; }`,
            right: `*, *::before, *::after { box-sizing: border-box; }
.card { width: 100%; padding: 20px; }`,
            explanation: 'بدون border-box يتم إضافة الـ 20px فوق الـ 100% فيخرج العنصر عن حدود الشاشة.'
        },
        thinkingWay: 'اعتبر border-box كالحقيبة ذات الأبعاد الثابتة؛ عندما تضع ملابس بالداخل تمتلئ دون أن يتوسع حجم الحقيبة الخارجي.',
        relatedMethods: ['css-box-sizing-content-box', 'css-padding-property'],
        keywords: ['border-box', 'box-sizing', 'CSS reset', 'layout shift', 'box model']
    },
    {
        id: 'css-box-sizing-content-box',
        name: 'box-sizing: content-box',
        shortDescription: 'نموذج الصندوق الافتراضي القديم الذي يضيف الحشو والحدود فوق الأبعاد.',
        longDescription: 'السلوك الافتراضي القديم للمتصفحات؛ يحسب العرض والارتفاع للمحتوى فقط، ثم يضيف الحشو والحدود كبكسلات إضافية فوق العرض المحدد، مما يتسبب في تمدد البوكس عن الحجم المكتوب.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `.old-box {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
}`
        ],
        expectedOutput: [
            'توسع العرض الفعلي للعنصر في الشاشة ليصبح 240px بدلاً من 200px.'
        ],
        professionalTips: 'قد تحتاج لاستخدام content-box في حالات نادرة جداً عند التعامل مع مكونات خارجية قديمة تعتمد على حجم المحتوى الصافي.',
        commonMistakes: {
            wrong: `.element { width: 100%; padding: 10px; box-sizing: content-box; }`,
            right: `.element { width: 100%; padding: 10px; box-sizing: border-box; }`,
            explanation: 'في content-box يضاف الحشو فوق الـ 100% مما يتسبب في كسر تخطيط الصفحات.'
        },
        thinkingWay: 'فكر في content-box كصندوق كرتوني؛ كلما أضفت له بطانة حماية من الخارج، زاد حجمه الكلي في الغرفة.',
        relatedMethods: ['css-box-sizing-border-box'],
        keywords: ['content-box', 'default box model', 'CSS box sizing']
    },
    {
        id: 'css-box-content',
        name: 'Content Box',
        shortDescription: 'المساحة الداخلية الجوهرية التي تضم النصوص والصور والوسائط.',
        longDescription: 'المنطقة المركزية الأولى في نموذج الصندوق؛ تحتضن المادة الحقيقية للعنصر (نصوص، صور، أو عناصر فرعية)، ويُحدد حجمها عبر خصائص الأبعاد المباشرة.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `.content-area {
  width: 100%;
  height: auto;
}`
        ],
        expectedOutput: [
            'تخصيص المساحة الداخلية الحاضنة للنص المكتوب بداخل العنصر.'
        ],
        professionalTips: 'استخدم min-height بدلاً من height الثابت على منطقة المحتوى؛ لتسمح للمحتوى بالتمدد رأسياً إذا زاد النص دون أن يطفح للخارج.',
        commonMistakes: {
            wrong: `.article-text { height: 100px; }`,
            right: `.article-text { min-height: 100px; }`,
            explanation: 'الارتفاع الثابت يتسبب في خروج النصوص الطويلة عن حدود البوكس وتداخلها مع العناصر السفلية.'
        },
        thinkingWay: 'اعتبر المحتوى بالهدايا المغلفة داخل الصندوق؛ هي السبب الرئيسي لوجود التغليف حولها.',
        relatedMethods: ['css-padding-property', 'css-width'],
        keywords: ['content', 'inner content', 'box model core', 'overflow']
    },
    {
        id: 'css-padding-property',
        name: 'padding',
        shortDescription: 'الهامش الداخلي الفاصل بين محتوى العنصر وحدوده الخارجية.',
        longDescription: 'مساحة التنفس الداخلية الشفافة الواقعة بين النص وحدود العنصر (Border)؛ تتأثر دائماً بلون خلفية العنصر وتكسبه حجماً مريحاً.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `.card {
  padding: 1rem 1.5rem;
  background-color: #1e293b;
}`
        ],
        expectedOutput: [
            'إخلاء مسافة بيضاء داخلية ملونة بنفس لون خلفية الكرت تجعل النص مريحاً للعين.'
        ],
        professionalTips: 'استخدم وحدات rem أو em لتعيين الـ padding بدلاً من البكسل الثابت؛ ليتحجم الحشو الداخلي متناسباً مع تغير حجم خط الزائر.',
        commonMistakes: {
            wrong: `.box { padding: -10px; }`,
            right: `.box { margin: -10px; }`,
            explanation: 'الـ padding لا يقبل القيم السالبة إطلاقاً في لغة CSS؛ القيم السالبة مخصصة لـ margin فقط.'
        },
        thinkingWay: 'فكر في padding كالبطانة الإسفنجية داخل الحذاء؛ تحمي قدمك وتفصلها عن الجلد الخارجي.',
        relatedMethods: ['css-margin-property', 'css-padding-inline'],
        keywords: ['padding', 'inner spacing', 'padding-top', 'box padding']
    },
    {
        id: 'css-border-property',
        name: 'border',
        shortDescription: 'الإطار الجداري الفاصل المحيط بالحشو والمحتوى الداخلي.',
        longDescription: 'حد خارجي مرئي أو شفاف يحيط بـ padding ومحتوى العنصر. يتيح تحديد العرض (border-width)، والشكل (border-style)، واللون (border-color).',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `.container {
  border: 1px solid rgba(255, 255, 255, 0.1);
}`
        ],
        expectedOutput: [
            'رسم إطار جداري دقيق بسمك 1 بكسل ولون شبه شفاف زجاجي.'
        ],
        professionalTips: 'إذا كنت تخطط لإظهار border عند الـ hover فقط، ضع border-color: transparent افتراضياً؛ لمنع اهتزاز العناصر عند ظهور الحد المباشر.',
        commonMistakes: {
            wrong: `.box { border: 2px red; }`,
            right: `.box { border: 2px solid red; }`,
            explanation: 'الحدود لا تظهر إطلاقاً بدون تحديد نوع الخط (solid, dashed, dotted)؛ لأن border-style الافتراضي هو none.'
        },
        thinkingWay: 'اعتبر border بمثابة جدار السور المبني حول حديقة المنزل ليحدد حدود ملكيته.',
        relatedMethods: ['css-outline-property', 'css-padding-property'],
        keywords: ['border', 'border-style', 'border-color', 'border-radius']
    },
    {
        id: 'css-margin-property',
        name: 'margin',
        shortDescription: 'الهامش الخارجي الفاصل الممتد بين العنصر وجيرانه من العناصر.',
        longDescription: 'المسافة الشفافة الخارجية التي تحيط بالعنصر من الخارج لدفعه بعيداً عن العناصر المجاورة، وتُعد المسؤول الأول عن التباعد بين الكتل.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `.card {
  margin-bottom: 2rem;
}`
        ],
        expectedOutput: [
            'إيجاد مسافة فارغة شفافة خارجية تعزل البوكس عن العناصر المحيطة به.'
        ],
        professionalTips: 'توصية معمارية: استخدم margin-bottom دائماً لإنشاء التباعد الرأسي السفلي بين العناصر بدلاً من خلط التباعد العلوي والسفلي.',
        commonMistakes: {
            wrong: `.card { margin: 20px; background: blue; }`,
            right: `.card { padding: 20px; background: blue; }`,
            explanation: 'الـ margin شفاف ولا يتأثر بلون خلفية العنصر؛ التلوين يقتصر على padding والمحتوى.'
        },
        thinkingWay: 'فكر في margin كالمساحة الشخصية الآمنة التي تتركها بينك وبين الشخص المجاور لك في الطابور.',
        relatedMethods: ['css-margin-collapse', 'css-margin-inline'],
        keywords: ['margin', 'outer spacing', 'margin auto', 'margin-bottom']
    },
    {
        id: 'css-margin-collapse',
        name: 'Margin Collapse',
        shortDescription: 'اندماج الهوامش الرأسية المتجاورة واقتصار المساحة على الهامش الأكبر.',
        longDescription: 'سلوك تلقائي في CSS حيث تندمج الهوامش الرأسية (top/bottom) بين عنصرين كتليين متجاورين، ليتداخل الهامشان وتصبح المساحة الفاصلة بينهما مساوية للقيمة الكبرى فقط.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `.header-box { margin-bottom: 30px; }
.content-box { margin-top: 20px; }`
        ],
        expectedOutput: [
            'تكون مسافة التباعد الرأسية الفاصلة بينهما 30px فقط وليس 50px بسبب انهيار الهامش الصغير داخل الأكبر.'
        ],
        professionalTips: 'يمكنك إلغاء ظاهرة انهيار الهوامش برمجياً بإعادة تحويل الحاوية إلى Flexbox أو Grid.',
        commonMistakes: {
            wrong: `.a { margin-bottom: 20px; }
.b { margin-top: 30px; }`,
            right: `.parent { display: flex; flex-direction: column; gap: 20px; }`,
            explanation: 'خاصية gap في Flexbox و Grid تضمن تباعداً رأسيًا حقيقيًا ثابتاً وتلغي تعقيدات Margin Collapse.'
        },
        thinkingWay: 'اعتبر انهيار الهوامش بفقاعتين صابون تلامستا؛ تندمج الفقاعتان لتشكلا فقاعة واحدة بحجم الكبرى.',
        relatedMethods: ['css-margin-property'],
        keywords: ['Margin Collapse', 'collapsing margins', 'vertical margin', 'gap vs margin']
    },
    {
        id: 'css-padding-inline',
        name: 'padding-inline',
        shortDescription: 'الحشو الداخلي المنطقي الأفقي المتكيف تلقائياً مع اتجاه القراءة.',
        longDescription: 'خاصية منطقية حديثة تعين الحشو الداخلي الأفقي (بداية ونهاية السطر)، وتتأقلم آلياً عند تحويل الصفحة من LTR إلى RTL.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `.btn {
  padding-inline: 1.5rem; /* حشو بداية ونهاية أفقياً */
}`
        ],
        expectedOutput: [
            'تطبيق الحشو على اليمين واليسار أفقياً مع عكس الاتجاهات آلياً عند تحويل اللغة.'
        ],
        professionalTips: 'استخدم padding-inline بدلاً من padding-left و padding-right لبناء تطبيقات دولية تدعم العربية دون كتابة كود مكرر.',
        commonMistakes: {
            wrong: `.btn { padding-left: 20px; padding-right: 20px; }`,
            right: `.btn { padding-inline: 20px; }`,
            explanation: 'الخاصية المنطقية تختصر سطرين بخصائص فيزيائية إلى سطر واحد يدعم الاتجاهين تلقائياً.'
        },
        thinkingWay: 'فكر في padding-inline كالحارس الذي يحمي حوافي السطر أفقياً أينما اتجهت القراءة.',
        relatedMethods: ['css-padding-block', 'css-margin-inline'],
        keywords: ['padding-inline', 'logical padding', 'RTL padding', 'i18n CSS']
    },
    {
        id: 'css-padding-block',
        name: 'padding-block',
        shortDescription: 'الحشو الداخلي المنطقي الرأسي الممتد من الأعلى للأسفل.',
        longDescription: 'خاصية منطقية تعين الحشو الداخلي الرأسي (أعلى وأسفل العنصر)، وتوفر صياغة معمارية حديثة ومباشرة للارتفاع الداخلي.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `.btn {
  padding-block: 0.75rem; /* حشو علوي وسفلي */
}`
        ],
        expectedOutput: [
            'إضافة حشو داخلي متناسق للأعلى والأسفل بدون الحاجة لكتابة top و bottom.'
        ],
        professionalTips: 'دمج padding-block مع padding-inline يمنحك التنسيق المختصر الكامل المعتمد في أطر العمل لعام 2026.',
        commonMistakes: {
            wrong: `.btn { padding-top: 10px; padding-bottom: 10px; }`,
            right: `.btn { padding-block: 10px; }`,
            explanation: 'padding-block تجمع الاتجاهين الرأسيين في سطر برمجي واحد أكثر نظافة.'
        },
        thinkingWay: 'اعتبر padding-block بالعمود الرأسي الذي يوسع مساحة البوكس من الأعلى والأسفل.',
        relatedMethods: ['css-padding-inline'],
        keywords: ['padding-block', 'vertical padding', 'logical spacing']
    },
    {
        id: 'css-margin-inline',
        name: 'margin-inline',
        shortDescription: 'الهامش الخارجي المنطقي الأفقي المتكيف مع اتجاه النص.',
        longDescription: 'بديل عصري لـ margin-left و margin-right؛ يعين التباعد الخارجي الأفقي بناءً على اتجاه القراءة المعتمد (dir="rtl" أو "ltr").',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `.center-box {
  margin-inline: auto; /* تمركز البوكس أفقياً بكفاءة */
}`
        ],
        expectedOutput: [
            'تمركز العنصر أفقياً في منتصف الشاشة مع التكيف مع اتجاه الصفحة.'
        ],
        professionalTips: 'استخدم margin-inline: auto بدلاً من margin: 0 auto لتتمركز العناصر أفقياً دون المساس بالهوامش الرأسية المحددة مسبقاً.',
        commonMistakes: {
            wrong: `.box { margin-left: auto; margin-right: auto; }`,
            right: `.box { margin-inline: auto; }`,
            explanation: 'الخاصية المنطقية تمنع انكسار محاذاة التمركز عند التغيير بين العربية والإنجليزية.'
        },
        thinkingWay: 'اعتبر margin-inline بفرامل الأمان الأفقية التي توازن البوكس بين اليمين واليسار.',
        relatedMethods: ['css-margin-block', 'css-padding-inline'],
        keywords: ['margin-inline', 'margin-inline auto', 'RTL margin', 'horizontal margin']
    },
    {
        id: 'css-margin-block',
        name: 'margin-block',
        shortDescription: 'الهامش الخارجي المنطقي الرأسي للتباعد بين أعلى وأسفل الكتل.',
        longDescription: 'خاصية منطقية تعين الهامش الخارجي الرأسي (الأعلى والأسفل) لدفعه بعيداً عن العناصر السابقة واللاحقة رأسياً.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `.section-title {
  margin-block: 2rem; /* تباعد رأسي من الأعلى والأسفل */
}`
        ],
        expectedOutput: [
            'إيجاد مسافة خارجية فاصلة رأسياً أعلى وأسفل العنوان.'
        ],
        professionalTips: 'استخدم margin-block-end فقط إذا كنت تطبق معمارية التباعد في اتجاه واحد لتجنب تعقيدات Margin Collapse.',
        commonMistakes: {
            wrong: `.title { margin-top: 20px; margin-bottom: 20px; }`,
            right: `.title { margin-block: 20px; }`,
            explanation: 'اختصار السطور يقلل من حجم الملف ويحسن مقروئية التنسيقات.'
        },
        thinkingWay: 'فكر في margin-block كالدرجتين المتروكتين فوق وأسفل درابزين السلم.',
        relatedMethods: ['css-margin-inline'],
        keywords: ['margin-block', 'vertical margin', 'logical margin']
    },
    {
        id: 'css-inline-size',
        name: 'inline-size',
        shortDescription: 'البعد المنطقي الأفقي المباشر الموازي للعرض (width).',
        longDescription: 'خاصية منطقية تعبر عن العرض الأفقي للمستند بحسب اتجاه السطر؛ وتستبدل السمة المباشرة width لتعزيز التوافق مع اللغات المتعددة.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `.avatar {
  inline-size: 48px; /* تعادل width: 48px */
}`
        ],
        expectedOutput: [
            'تعيين العرض الأفقي المباشر للعنصر بـ 48 بكسل.'
        ],
        professionalTips: 'استخدم min-inline-size بدلاً من min-width للحفاظ على المرونة الكاملة بالواجهات الدولية.',
        commonMistakes: {
            wrong: `/* اعتقاد أن inline-size تخص العناصر Inline فقط */
div { inline-size: 100%; }`,
            right: `/* تُستخدم لكافة أنواع العناصر Block و Inline */`,
            explanation: 'الاسم inline يعبر عن اتجاه تدفق السطر الأفقي وليس عن نوع عرض العنصر.'
        },
        thinkingWay: 'اعتبر inline-size بالمسطرة الأفقية الممتدة مع اتجاه القلم.',
        relatedMethods: ['css-block-size', 'css-width'],
        keywords: ['inline-size', 'logical width', 'CSS sizing']
    },
    {
        id: 'css-block-size',
        name: 'block-size',
        shortDescription: 'البعد المنطقي الرأسي المباشر الموازي للارتفاع (height).',
        longDescription: 'خاصية منطقية تعبر عن الارتفاع الراسي للكتلة؛ وتستبدل السمة المباشرة height لحماية أبعاد العناصر عند تدوير اتجاه الكتابة.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `.avatar {
  block-size: 48px; /* تعادل height: 48px */
}`
        ],
        expectedOutput: [
            'تعيين الارتفاع الراسي للعنصر بـ 48 بكسل.'
        ],
        professionalTips: 'استخدم min-block-size بدلاً من height الثابت؛ لتسمح للحاوية بالتمدد إذا زادت أسطر المحتوى.',
        commonMistakes: {
            wrong: `.box { block-size: 100px; /* استخدام الارتفاع الصلب للكتل النصية */ }`,
            right: `.box { min-block-size: 100px; }`,
            explanation: 'الارتفاع الصلب يتسبب في طفح المحتوى (Overflow)؛ الارتفاع الأدنى دائماً هو الخيار الآمن.'
        },
        thinkingWay: 'فكر في block-size كارتفاع جدار المبنى الممتد من الأرض للقفز لأسفل.',
        relatedMethods: ['css-inline-size', 'css-height'],
        keywords: ['block-size', 'logical height', 'vertical size']
    },
    {
        id: 'css-width',
        name: 'width',
        shortDescription: 'تحديد العرض الأفقي الفيزيائي المباشر للعنصر بالصفحة.',
        longDescription: 'الخاصية الفيزيائية الأساسية لتحديد العرض البصري المباشر (بكسل، نسبة مئوية، rem) لعناصر الواجهة.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `.hero-banner {
  width: 100%;
}`
        ],
        expectedOutput: [
            'توسيع العنصر ليشغل كامل العرض المتاح في الحاوية الأب.'
        ],
        professionalTips: 'تجنب وضع width ثابت بالبكسل على الحاويات الرئيسية؛ واستخدم دائماً max-width أو النسبة المئوية % للتجاوب مع الجوال.',
        commonMistakes: {
            wrong: `.container { width: 1200px; }`,
            right: `.container { width: 100%; max-width: 1200px; }`,
            explanation: 'العرض الثابت بالبكسل يمنع العنصر من الانقباض بداخل شاشات الهواتف الصغرى.'
        },
        thinkingWay: 'اعتبر width بالمسطرة الأفقية التي تقيس بها عرض الصندوق البصري.',
        relatedMethods: ['css-max-width', 'css-inline-size'],
        keywords: ['width', 'element width', 'CSS width', 'box width']
    },
    {
        id: 'css-height',
        name: 'height',
        shortDescription: 'تحديد الارتفاع الرأسي الفيزيائي المباشر للعنصر بالصفحة.',
        longDescription: 'الخاصية الفيزيائية الأساسية لتحديد المقاس الراسي المباشر للعنصر، ويُفضل استخدامها مع الصور والوسائط وتجنبها مع النصوص.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `.icon {
  width: 24px;
  height: 24px;
}`
        ],
        expectedOutput: [
            'ضبط ارتفاع الأيقونة المباشر بـ 24 بكسل لتكوين مربع.'
        ],
        professionalTips: 'استخدم height مع الصور والأيقونات والمكونات ذات الأبعاد الثابتة، واستبدلها بـ min-height مع الحاويات النصية.',
        commonMistakes: {
            wrong: `.card { height: 300px; }`,
            right: `.card { min-height: 300px; }`,
            explanation: 'تعيين height ثابت للبطاقات النصية يقطع النصوص السفلية عند فتح الموقع من جوال بشاشة صغيرة.'
        },
        thinkingWay: 'فكر في height كالقائم الراسي المحايد لقياس الطول القائم.',
        relatedMethods: ['css-min-height', 'css-block-size'],
        keywords: ['height', 'element height', 'box height']
    },
    {
        id: 'css-min-width',
        name: 'min-width',
        shortDescription: 'فرض حد أدنى للعرض يمنع انقباض العنصر عن القيمة المحددة.',
        longDescription: 'خاصية حظر العرض المنخفض؛ تضمن عدم انقباض البوكس تحت القيمة المحددة مهما صغرت الشاشة، مع إتاحة التمدد للأعلى.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `.btn {
  min-width: 120px; /* ضمان ألا يقل عرض الزر عن 120px */
}`
        ],
        expectedOutput: [
            'ثبات عرض الزر بـ 120px كحد أدنى حتى لو كانت الكلمة الداخلية قصيرة.'
        ],
        professionalTips: 'ممتازة جداً للأزرار وشارات القوائم لتوحيد الحد الأدنى للعرض البصري وتفادي الأزرار الضئيلة جداً.',
        commonMistakes: {
            wrong: `.btn { min-width: 100vw; }`,
            right: `.btn { min-width: 120px; }`,
            explanation: 'وضع min-width كبير جداً يسبب خروج العنصر عن حدود الشاشة وحدوث شريط تمرير أفقي.'
        },
        thinkingWay: 'اعتبر min-width بالدعامة الحجرية التي تمنع الصندوق من الانغلاق تحت حجم معين.',
        relatedMethods: ['css-max-width', 'css-width'],
        keywords: ['min-width', 'minimum width', 'responsive layout']
    },
    {
        id: 'css-max-width',
        name: 'max-width',
        shortDescription: 'فرض سقف أقصى للعرض يمنع تمدد العنصر في الشاشات الكبيرة.',
        longDescription: 'خاصية حظر التمدد الزائد؛ تمنع العناصر (مثل الكروت والمستندات) من التوسع أفقياً عن العرض المسموح به في الشاشات العريضة.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `.main-container {
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
}`
        ],
        expectedOutput: [
            'توسع الحاوية لتملأ شاشة الهاتف بالكامل، وتوقف تمددها عند الوصول لـ 1200px في الشاشات الكبيرة.'
        ],
        professionalTips: 'دمج width: 100% مع max-width يُعد الصيغة الذهبية لبناء حاويات التخطيط المتجاوبة (Responsive Containers) في الويب.',
        commonMistakes: {
            wrong: `.box { width: 500px; max-width: 500px; }`,
            right: `.box { width: 100%; max-width: 500px; }`,
            explanation: 'تعيين width: 500px يمنع العنصر من الانقباض على الشاشات الأصغر من 500px.'
        },
        thinkingWay: 'فكر في max-width كسقف الغرفة؛ يمكنك النمو تحته بحرية ولكن لا يمكنك اختراقه للأعلى.',
        relatedMethods: ['css-min-width', 'css-width'],
        keywords: ['max-width', 'maximum width', 'responsive container', 'fluid layout']
    },
    {
        id: 'css-min-height',
        name: 'min-height',
        shortDescription: 'فرض حد أدنى للارتفاع مع السماح بالتمدد التلقائي عند زيادة المحتوى.',
        longDescription: 'خاصية التحكم الآمن بالارتفاع؛ تُستخدم بـ min-height: 100vh لضمان تغطية القسم لارتفاع الشاشة كاملاً دون قفل التمدد.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `.hero-section {
  min-height: 100vh;
}`
        ],
        expectedOutput: [
            'امتلاء الشاشة بالقسم الترحيبي مع السماح له بالتمدد رأسياً إذا زاد المحتوى.'
        ],
        professionalTips: 'استخدم min-height: 100dvh بدلاً من 100vh في الهواتف المحمولة؛ لتتفادى اختفاء أسفل القسم خلف شريط عنوان متصفحات الموبايل.',
        commonMistakes: {
            wrong: `.hero { height: 100vh; }`,
            right: `.hero { min-height: 100vh; }`,
            explanation: 'الـ height الثابت يقطع النصوص السفلية إذا كانت أطول من ارتفاع الشاشة، بينما min-height يتوسع معها.'
        },
        thinkingWay: 'اعتبر min-height كأدنى مستوى للماء في الخزان؛ يضمن وجود المتر الأول ولا يمنع الزيادة.',
        relatedMethods: ['css-max-height', 'css-height'],
        keywords: ['min-height', '100vh', '100dvh', 'viewport height']
    },
    {
        id: 'css-max-height',
        name: 'max-height',
        shortDescription: 'فرض سقف أقصى للارتفاع وتقييد التمدد الرأسي.',
        longDescription: 'خاصية تحدد الحد الأقصى المسموح به لارتفاع العنصر رأسياً؛ وتُستخدم بـ overflow-y: auto لإنشاء صناديق القوائم القابلة للتمرير الداخلي.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `.scrollable-menu {
  max-height: 300px;
  overflow-y: auto;
}`
        ],
        expectedOutput: [
            'ظهور شريط تمرير رأسي إضافي بداخل البوكس فور تجاوز القائمة لارتفاع 300 بكسل.'
        ],
        professionalTips: 'مفيدة جداً في تحريك القوائم المنسدلة (Transitions) عبر تغيير max-height من 0 إلى قيمة كبيرة.',
        commonMistakes: {
            wrong: `/* وضع max-height صلب بدون تحديد خاصية overflow */
.box { max-height: 200px; }`,
            right: `.box { max-height: 200px; overflow: auto; }`,
            explanation: 'نسيان overflow يتسبب في طفح المحتوى الزائد عن البوكس وخروجه بصرياً بشكل مشوه.'
        },
        thinkingWay: 'فكر في max-height كسقف الرف الداخلي الذي يمنع ارتفاع الرف ليتجاوز الحد المسموح.',
        relatedMethods: ['css-min-height', 'css-height'],
        keywords: ['max-height', 'scrollable box', 'overflow-y', 'maximum height']
    },
    {
        id: 'css-fit-content',
        name: 'fit-content',
        shortDescription: 'انقباض العنصر أفقياً ليتطابق حصرًا مع حجم محتواه الداخلي.',
        longDescription: 'قيمة أبعاد ديناميكية؛ تجعل البوكس يتصرف بمرونة كاملة عبر الانقباض المباشر على مقاس الحروف أو العناصر المكتوبة بالداخل دون مجاوزة الحاوية.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `.badge {
  width: fit-content;
  padding: 0.25rem 0.75rem;
}`
        ],
        expectedOutput: [
            'انقباض عرض الشارة (.badge) ليتطابق مع حجم كلماتها دون أن يحتل كامل السطر.'
        ],
        professionalTips: 'استخدم fit-content في أعمدة CSS Grid لبناء شبكات تتكيف أبعاد أعمدتها تلقائياً مع طول العناوين والبطاقات المكتوبة بالداخل.',
        commonMistakes: {
            wrong: `/* استخدام width: auto وتوقع انقباض العنصر الكتلوي Block على محتواه */
.badge { width: auto; }`,
            right: `.badge { width: fit-content; }`,
            explanation: 'الـ width: auto يمتد ليشغل 100% من عرض السطر الكتلوي، بينما fit-content ينكمش على الحجم الفعلي.'
        },
        thinkingWay: 'فكر في fit-content كغلاف النايلون المنكمش بمرونة حرارية حول المنتج؛ يحتضن الحجم بالضبط.',
        relatedMethods: ['css-min-content', 'css-max-content'],
        keywords: ['fit-content', 'intrinsic sizing', 'shrink to fit', 'CSS sizing keyword']
    },
    {
        id: 'css-min-content',
        name: 'min-content',
        shortDescription: 'انقباض عرض العنصر لأضيق حد ممكن يطابق أطول كلمة منفردة.',
        longDescription: 'قيمة أبعاد تجبر العنصر على الانقباض الأفقي لأقصى درجة ممكنة، حيث يصبح عرض البوكس مساوياً لعرض أطول كلمة أو عنصر لا يمكن كسره بالداخل.',
        difficulty: 'hard',
        importance: 'important',
        examples: [
            `.narrow-title {
  width: min-content;
}`
        ],
        expectedOutput: [
            'التفاف كافة الكلمات المكتوبة على أسطر متعددة ليصبح عرض البوكس مطابقاً لأطول كلمة مفردة.'
        ],
        professionalTips: 'تفيد min-content جداً في تخطيطات الأعمدة الضيقة التي تود فيها إجبار العناوين على الالتفاف الرأسي المحكم.',
        commonMistakes: {
            wrong: `/* استخدام min-content على فقرات نصية طويلة جداً */
p { width: min-content; }`,
            right: `p { width: fit-content; }`,
            explanation: 'استخدام min-content على الفقرات يجعل كل كلمة تقع في سطر مستقل فتصبح الفقرة رفيعة وطويلة جداً.'
        },
        thinkingWay: 'اعتبر min-content بالانعصار الأقصى؛ يضغط البوكس حتى يصطدم بأطول كلمة بالداخل متوقفا عندها.',
        relatedMethods: ['css-fit-content', 'css-max-content'],
        keywords: ['min-content', 'narrowest size', 'intrinsic width', 'text wrap']
    },
    {
        id: 'css-max-content',
        name: 'max-content',
        shortDescription: 'توسع عرض العنصر لأقصى حد يمنع التفاف الأسطر النصية.',
        longDescription: 'قيمة أبعاد تجعل البوكس يتمدد أفقياً بكامل راحته ليعرض جميع النصوص والعناصر في سطر واحد ممتد دون إحداث أي التفاف للأسطر (No Wrapping).',
        difficulty: 'hard',
        importance: 'important',
        examples: [
            `.single-line-banner {
  width: max-content;
}`
        ],
        expectedOutput: [
            'امتداد البوكس أفقياً في سطر واحد طويل يحتضن الجملة كاملاً.'
        ],
        professionalTips: 'استخدم max-content بحذر واقرنه مع max-width: 100% لتتفادى خروج العنصر عن حدود الشاشة أفقياً.',
        commonMistakes: {
            wrong: `/* استخدام max-content على الجوال بدون تحديد max-width */
.banner { width: max-content; }`,
            right: `.banner { width: max-content; max-width: 100%; }`,
            explanation: 'الـ max-content المفرط يخرج عن حدود الشاشة ويخلق شريط تمرير أفقي مجهد للزائر.'
        },
        thinkingWay: 'فكر في max-content كفرد السجادة بالكامل؛ يرفض طي أي جزء ويفرده كاملاً في سطر واحد.',
        relatedMethods: ['css-fit-content', 'css-min-content'],
        keywords: ['max-content', 'no wrap sizing', 'full intrinsic width']
    },
    {
        id: 'css-aspect-ratio',
        name: 'aspect-ratio',
        shortDescription: 'تثبيت نسبة العرض إلى الارتفاع للصور والكروت بـ CSS المعاصر.',
        longDescription: 'خاصية معاصرة تتيح تحديد نسبة أبعاد ثابتة (مثل 16/9 أو 1/1 أو 4/3) للعناصر والصور والفيديوهات لمنع تشوهها وإلغاء حيل padding-top القديمة.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `.video-container {
  width: 100%;
  aspect-ratio: 16 / 9;
}`
        ],
        expectedOutput: [
            'حساب ارتفاع العنصر تلقائياً وبدقة فور تغير عرضه للمحافظة على النسبة المحددة.'
        ],
        professionalTips: 'اقرن دائماً خاصية aspect-ratio على الصور مع object-fit: cover؛ لضمان قص أطراف الصورة الزائدة بنعومة دون مطها.',
        commonMistakes: {
            wrong: `.box { padding-top: 56.25%; position: relative; }`,
            right: `.box { aspect-ratio: 16 / 9; }`,
            explanation: 'الخاصية المعاصرة aspect-ratio اختصرت الحيل القديمة المعقدة ببديل مباشر ونظيف.'
        },
        thinkingWay: 'اعتبر aspect-ratio بالقص المنسق لشاشة التلفاز؛ تحافظ على الشاشة العريضة أو المربعة مهما تغير حجم الإطار.',
        relatedMethods: ['css-width', 'css-height'],
        keywords: ['aspect-ratio', '16/9', 'responsive aspect', 'object-fit']
    },
    {
        id: 'css-outline-property',
        name: 'outline',
        shortDescription: 'الإطار الوهمي الطافي المخصص للتركيز الذي لا يستهلك أي مساحة بالـ DOM.',
        longDescription: 'إطار خارجي طافٍ لا يدخل ضمن حسابات نموذج الصندوق ولا يستهلك أي بكسل من مساحة البوكس، ويُستخدم لإبراز التركيز بـ :focus-visible.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `button:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 3px;
}`
        ],
        expectedOutput: [
            'رسم إطار طافٍ متوهج على مسافة 3px من الزر دون إحداث أي اهتزاز بتخطيط العناصر المجاورة.'
        ],
        professionalTips: 'استخدم outline-offset لإحداث مسافة جمالية شفافة بين العنصر وإطار التركيز الخاص به، مما يمنح الواجهة مظهراً احترافياً.',
        commonMistakes: {
            wrong: `button:focus { border: 2px solid blue; }`,
            right: `button:focus-visible { outline: 2px solid blue; }`,
            explanation: 'إضافة border عند التركيز تزيد من حجم الزر لحظياً بـ 4px مما يتسبب في تحرك العناصر المجاورة، بخلاف outline.'
        },
        thinkingWay: 'فكر في outline كشعاع الليزر الضوئي المحيط بالغرفة دون أن يمس جدرانها المادية.',
        relatedMethods: ['css-border-property', 'css-pseudo-focus-visible'],
        keywords: ['outline', 'outline-offset', 'focus ring', 'accessibility outline', 'border vs outline']
    }
];