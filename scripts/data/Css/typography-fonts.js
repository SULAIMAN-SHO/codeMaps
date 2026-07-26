export const typographyFontsData = [
    {
        id: 'css-font-family',
        name: 'font-family',
        shortDescription: 'تعيين عائلة الخطوط وسلسلة البدائل الاحتياطية (Fallback Stack).',
        longDescription: 'الخاصية المباشرة لتحديد نوع الخط المعتمد لقراءة النصوص؛ وتلزم المعايير كتابة سلسلة خطوط احتياطية (Fallback Chain) تنتهي باسم عائلة عامة (مثل sans-serif) لمنع انكسار المظهر عند تعذر تحميل الخط الرئيسي.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `body {
  font-family: 'Inter', 'Readex Pro', system-ui, sans-serif;
}`
        ],
        expectedOutput: [
            'قراءة النصوص بخط Inter أو Readex Pro، والتحول التلقائي لخط النظام في حال انقطاع الشبكة.'
        ],
        professionalTips: 'ضع دائماً الخطوط المخصصة بداخل علامات اقتباس مفردة إذا كان اسمها يحتوي مسافات، واختم السلسلة دائماً بـ system-ui أو sans-serif لسرعة التحميل.',
        commonMistakes: {
            wrong: `/* كتابة خط واحد فقط دون وضع بدائل احتياطية */
body { font-family: 'CustomFont'; }`,
            right: `body { font-family: 'CustomFont', sans-serif; }`,
            explanation: 'عدم وضع خط احتياطي يجعل المتصفح يتحول لخط Times New Roman القاسي فور فشل التحميل.'
        },
        thinkingWay: 'اعتبر font-family كقائمة البدلاء في الفريق؛ إن غاب اللاعب الأساسي يحل محله البديل الأول فوراً.',
        relatedMethods: ['css-font-face', 'css-font-display'],
        keywords: ['font-family', 'fallback font', 'sans-serif', 'system-ui', 'web typography']
    },
    {
        id: 'css-font-face',
        name: '@font-face',
        shortDescription: 'قاعدة استدعاء وتضمين الخطوط السحابية والمحلية بصيغة WOFF2.',
        longDescription: 'قاعدة CSS مخصصة لتنزيل وتعرف الخطوط الخارجية المخصصة؛ وتُعد صيغة WOFF2 المعيار المعماري الأحدث والأخف وزناً وضغطاً لكافة المتصفحات لعام 2026.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `@font-face {
  font-family: 'Readex Pro';
  src: url('./fonts/readex-pro.woff2') format('woff2');
  font-weight: 100 900; /* خط متغير يغطي كل الأوزان */
  font-display: swap;
}`
        ],
        expectedOutput: [
            'تحميل الخط المخصص واستخدامه باسم Readex Pro بجميع أجزاء التطبيق.'
        ],
        professionalTips: 'اعتمد دائماً على الخطوط المتغيرة (Variable Fonts) بدلاً من استدعاء 5 ملفات أوزان مختلفة؛ للحد من عدد طلبات الشبكة وتسريع مؤشر LCP.',
        commonMistakes: {
            wrong: `/* استدعاء صيغ قديمة وثقيلة مثل TTF أو OTF مباشرة للمواقع الحديثة */
src: url('font.ttf') format('truetype');`,
            right: `src: url('font.woff2') format('woff2');`,
            explanation: 'صيغة WOFF2 توفر ضغطاً أعلى بـ 30% من TTF مما يسرع تحميل الصفحة بشكل ملحوظ.'
        },
        thinkingWay: 'فكر في @font-face كاستيراد طرد خط حقيقي من المستودع وفتحه وتجهيزه للاستخدام.',
        relatedMethods: ['css-font-family', 'css-font-display'],
        keywords: ['@font-face', 'WOFF2', 'Variable Fonts', 'custom font', 'web fonts']
    },
    {
        id: 'css-font-display',
        name: 'font-display',
        shortDescription: 'التحكم بسلوك عرض النص أثناء تحميل الخط المخصص (FOIT / FOUT).',
        longDescription: 'خاصية توضع داخل @font-face للتحكم بظهور النص قبل اكتمال تنزيل الخط؛ القيمة swap تعرض الخط البديل فوراً ثم تستبدله، بينما optional تعطي أولوية مطلقة للسرعة.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `@font-face {
  font-family: 'Cairo';
  src: url('cairo.woff2') format('woff2');
  font-display: swap; /* عرض خط النظام فوراً ثم التبديل */
}`
        ],
        expectedOutput: [
            'منع اختفاء النصوص المكتوبة (Flash of Invisible Text) وإظهار النص فور فتح الصفحة.'
        ],
        professionalTips: 'استخدم font-display: swap لتفادي ظاهرة اختفاء النصوص (FOIT) وتأمين درجة ممتازة في تقارير Google Lighthouse.',
        commonMistakes: {
            wrong: `/* نسيان تحديد font-display فيظل النص مخفياً لحين وصول الخط */
@font-face { font-family: 'AppFont'; src: url('a.woff2'); }`,
            right: `@font-face { font-family: 'AppFont'; src: url('a.woff2'); font-display: swap; }`,
            explanation: 'غياب السمة يجعل المتصفح يحجب النص لـ 3 ثوانٍ بانتظار الشبكة مما يزعج المستخدم.'
        },
        thinkingWay: 'اعتبر font-display: swap بالكرسي المؤقت؛ يجلس عليه لاعب طوارئ حتى يصل اللاعب الرئيسي.',
        relatedMethods: ['css-font-face'],
        keywords: ['font-display', 'swap', 'FOIT', 'FOUT', 'Core Web Vitals', 'font performance']
    },
    {
        id: 'css-font-size',
        name: 'font-size',
        shortDescription: 'تعيين حجم الخط باستخدام الوحدات النسبية المليئة بالمرونة (rem, em).',
        longDescription: 'الخاصية المباشرة لتحديد مقاس الخط المكتوب؛ وتوصي القواعد العالمية باجتناب البكسل الثابت واستبداله بـ rem التراكمية المعتمدة على حجم خط الجذر القياسي.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* 1.25rem تعادل 20px إذا كان حجم الخط الجذري 16px */
h2 {
  font-size: 1.25rem;
}`
        ],
        expectedOutput: [
            'تكبير الخط بنسبة متناسقة تتكيف آلياً مع تفضيلات وإعدادات المتصفح للزائر.'
        ],
        professionalTips: 'استخدم وحدات rem لحجوم الخطوط العامة والمكونات؛ لتسمح لذوي الإعاقة البصرية بتكبير خط المتصفح وتجاوب الموقع كاملاً دون انكسار.',
        commonMistakes: {
            wrong: `/* استخدام البكسل الثابت px لكل الخطوط بالمنصة */
p { font-size: 14px; }`,
            right: `p { font-size: 0.875rem; }`,
            explanation: 'الـ px يمنع الخط من التمدد عند تكبير الزائر لإعدادات الخط في هاتفه (Accessibility Failure).'
        },
        thinkingWay: 'فكر في rem كمقياس نسبة مئوية مرن يتمدد وينكمش بحسب حجم العدسة المكبرة للمستخدم.',
        relatedMethods: ['css-font-clamp', 'css-units-ch-lh'],
        keywords: ['font-size', 'rem', 'em', 'relative units', 'accessible typography']
    },
    {
        id: 'css-font-clamp',
        name: 'clamp() for Fluid Typography',
        shortDescription: 'دالة الخطوط المتجاوبة المنسابة بين حد أدنى وأقصى بـ CSS المعاصر.',
        longDescription: 'دالة حسابية ذكية تقبل 3 قيم: (الحد الأدنى، القيمة المرنة المتغيرة مع الشاشة، والحد الأقصى)؛ لتغيير حجم الخط بسلاسة ديناميكية دون كتابة أسطر Media Queries.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `/* يتأرجح حجم العنوان بين 1.8rem كحد أدنى و 3.5rem كحد أقصى بحسب الشاشة */
h1 {
  font-size: clamp(1.8rem, 4vw + 1rem, 3.5rem);
}`
        ],
        expectedOutput: [
            'تمدد وانكماش حجم الخط بسلاسة ناعمة جداً فور تكبير أو تصغير نافذة الشاشة.'
        ],
        professionalTips: 'استخدم دالة clamp() للعناوين الرئيسية (Hero Titles) بالصفحة لتضمن حجماً مثالياً على الجوال والشاشات العملاقة دون تداخل.',
        commonMistakes: {
            wrong: `/* استخدام وحدات vw المفردة دون وضع حد أدنى بـ clamp */
h1 { font-size: 5vw; }`,
            right: `h1 { font-size: clamp(1.5rem, 5vw, 3rem); }`,
            explanation: 'استخدام vw المفرد يجعل الخط يتقلص إلى حجم غير مقروء إطلاقاً بالشاشات الصغيرة جداً.'
        },
        thinkingWay: 'اعتبر clamp() بالرباط المطاطي المشدود بين جدارين؛ يتمدد بمرونة ولكنه لا يتجاوز الحدود المعينة.',
        relatedMethods: ['css-font-size'],
        keywords: ['clamp()', 'fluid typography', 'responsive font', 'min viewport max', 'modern CSS']
    },
    {
        id: 'css-units-ch-lh',
        name: 'Typography Units (ch & lh)',
        shortDescription: 'وحدات القياس النصية المتقدمة لضبط اتساع الفقرات وارتفاع الأسطر.',
        longDescription: 'وحدات قياس معاصرة؛ ch تعادل عرض حرف الصفر (0) في الخط الحالي وتُستخدم لتقييد السطر، بينما lh تعادل الارتفاع السطري الكامل (line-height) للعنصر.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `/* تقييد عرض الفقرة بـ 65 حرفاً لأعلى درجات المقروئية المريحة للعين */
article p {
  max-width: 65ch;
}`
        ],
        expectedOutput: [
            'توقف عرض الفقرة النصية عند 65 حرفاً ومنع استطالة السطر المجهدة للعين.'
        ],
        professionalTips: 'توصي معايير تجربة المستخدم (UX) بألا يتجاوز طول السطر المكتوب في الفقرات بين 45 إلى 75 حرفاً؛ السمة max-width: 65ch هي الحل المثالي.',
        commonMistakes: {
            wrong: `/* ترك الفقرات تمتد بعرض الشاشة الكاملة 100% في الشاشات العريضة */
p { width: 100%; }`,
            right: `p { max-width: 65ch; }`,
            explanation: 'السطر الطويل جداً يجهد عين القارئ عند الانتقال من نهاية السطر لبداية السطر التالي.'
        },
        thinkingWay: 'فكر في ch كمسطرة تقيس أجساد الحروف، و lh بالخطوة الرأسية بين قاع سطر وقاع السطر الذي يليه.',
        relatedMethods: ['css-font-size', 'css-line-height'],
        keywords: ['ch unit', 'lh unit', 'line length', 'readability', 'optimal line length']
    },
    {
        id: 'css-font-weight',
        name: 'font-weight',
        shortDescription: 'تحديد درجة سماكة ووزن الحروف (الأوزان الرقمية والخطوط المتغيرة).',
        longDescription: 'خاصية تحدد سمك ووزن خط الحروف؛ تتراوح قيمها من 100 (رفيع جداً Thin) إلى 900 (عريض جداً Black)، وتتيح أوزاناً كسرية دقيقة جداً عند استخدام الخطوط المتغيرة.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* تعيين وزن متوسط للعنوان ووزن خفيف للفقرة */
.card-title { font-weight: 700; }
.card-desc { font-weight: 400; }`
        ],
        expectedOutput: [
            'عرض العنوان بخط غامق بارز والفقرة بخط عادي ناعم.'
        ],
        professionalTips: 'عند استخدام أوزان رقمية (مثل 600 أو 700)، تأكد من أن ملف الخط المجلوب يحتوي على هذه الأوزان فعلياً؛ وإلا سيقوم المتصفح بتوليد سمك زائف مشوه (Synthetic Bold).',
        commonMistakes: {
            wrong: `/* استخدام الكلمات القديمة مثل bold بدون دقة رقمية */
h2 { font-weight: bold; }`,
            right: `h2 { font-weight: 700; }`,
            explanation: 'القيم الرقمية الصريحة توفر اتساقاً أرقامياً دقيقاً عبر مختلف الخطوط والأنظمة.'
        },
        thinkingWay: 'اعتبر font-weight كدرجة الضغط على القلم؛ من اللمسة الخفيفة إلى الضغطة العريضة بالقلم.',
        relatedMethods: ['css-font-family'],
        keywords: ['font-weight', 'bold font', 'font thickness', 'variable font weights', 'numeric weight']
    },
    {
        id: 'css-line-height',
        name: 'line-height',
        shortDescription: 'التحكم بالارتفاع الراسي للسطر والمسافة بين الأسطر المتتالية.',
        longDescription: 'خاصية تحدد المسافة الممتدة رأسياً بين أسطر النص داخل الفقرة؛ وتُعد المحرك الأول لمقروئية النصوص الطويلة وجماليتها.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* تعيين ارتفاع سطري متناسب بدون وحدات (Unitless) */
p {
  font-size: 1rem;
  line-height: 1.6; /* المسافة تعادل 1.6 ضعف حجم الخط */
}`
        ],
        expectedOutput: [
            'إيجاد تباعد رأسي ناعم ومريح بين الأسطر النصية المكتوبة.'
        ],
        professionalTips: 'اكتب قيمة line-height دائماً بدون وحدات (Unitless Number مثل 1.5 أو 1.6)؛ لتضمن توارث النسبة المئوية آلياً للأبناء بحسب حجم خطهم دون انكسار.',
        commonMistakes: {
            wrong: `/* كتابة line-height بكسل ثابت صلب يتسبب في تداخل الأسطر عند تكبير الخط */
p { line-height: 20px; }`,
            right: `p { line-height: 1.5; }`,
            explanation: 'استخدام px ثابت يجعل الأسطر تتداخل فوق بعضها عند تكبير حجم الخط للأبناء.'
        },
        thinkingWay: 'فكر في line-height كالمسافة المسطرة في الدفتر؛ تباعد الأسطر يحمي الحروف العلوية من الاصطدام بالحروف السفلية.',
        relatedMethods: ['css-font-size', 'css-units-ch-lh'],
        keywords: ['line-height', 'unitless line-height', 'line spacing', 'typography readability']
    },
    {
        id: 'css-letter-spacing',
        name: 'letter-spacing',
        shortDescription: 'التحكم بالمسافات الأفقية الفاصلة بين الحروف الأبجدية.',
        longDescription: 'خاصية تتيح توسيع أو تضييق الفراغ الأفقي الممتد بين الحروف داخل الكلمة الواحدة، وتُستخدم لإبراز العناوين الإنجليزية الكبيرة (ALL CAPS).',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `/* تباعد أنيق بين الحروف الكبيرة باللغة الإنجليزية */
.badge-title {
  text-transform: uppercase;
  letter-spacing: 0.1em;
}`
        ],
        expectedOutput: [
            'إزاحة الحروف أفقياً وتوسيع التباعد البصري بين الأحرف.'
        ],
        professionalTips: 'تحذير لغوي: تجنب استخدام letter-spacing مع النصوص والخطوط العربية؛ لأن تباعد الحروف العربية يقطع اتصال الحروف ببعضها ويخرب الكلمة كلياً.',
        commonMistakes: {
            wrong: `/* تطبيق letter-spacing على جملة مكتوبة باللغة العربية */
.arabic-text { letter-spacing: 2px; }`,
            right: `.arabic-text { letter-spacing: normal; }`,
            explanation: 'اللغة العربية تتطلب اتصال الحروف ببعضها؛ تباعد الحروف يفكك الكلمة ويكسر جماليتها.'
        },
        thinkingWay: 'اعتبر letter-spacing بمد أو انقباض المساحة بين كل حرفين متجاورين في الصف.',
        relatedMethods: ['css-word-spacing'],
        keywords: ['letter-spacing', 'tracking', 'character spacing', 'uppercase typography']
    },
    {
        id: 'css-word-spacing',
        name: 'word-spacing',
        shortDescription: 'التحكم بالفراغ الأفقي الفاصل بين الكلمات المستقلة.',
        longDescription: 'خاصية تعين المسافة الفاصلة بين الكلمة والكلمة المجاورة لها داخل الفقرة، وتفيد في ضبط كثافة الكلمات في العناوين والافتتاحيات.',
        difficulty: 'easy',
        importance: 'normal',
        examples: [
            `/* إيجاد مسافة فاصلة إضافية مريحة بين الكلمات */
.quote-text {
  word-spacing: 0.25rem;
}`
        ],
        expectedOutput: [
            'توسيع الفراغات القائمة بين الكلمات دون التعديل على مسافات الحروف الداخلية.'
        ],
        professionalTips: 'استخدم وحدات rem أو em مع word-spacing ليظل التباعد بين الكلمات متناسباً مع تغير حجم الخط الهيكلي.',
        commonMistakes: {
            wrong: `/* وضع قيم مفرطة في word-spacing تجعل الجملة تبدو ككلمات متناثرة */
p { word-spacing: 2rem; }`,
            right: `p { word-spacing: 0.15rem; }`,
            explanation: 'المسافات الضخمة تجعل القارئ يتوقف عند كل كلمة وتفقد الجملة انسيابيتها.'
        },
        thinkingWay: 'فكر في word-spacing كخطوات التباعد المتروكة بين كل كلمة ورفيقتها بالسطر.',
        relatedMethods: ['css-letter-spacing'],
        keywords: ['word-spacing', 'word distance', 'space between words']
    },
    {
        id: 'css-text-align',
        name: 'text-align (start / end)',
        shortDescription: 'محاذاة النصوص أفقياً المعتمدة على الخصائص المنطقية (RTL/LTR).',
        longDescription: 'خاصية تحدد تموضع النصوص أفقياً؛ وتدعم المعايير الحديثة القيم المنطقية text-align: start (بداية السطر) و text-align: end (نهاية السطر) للتكيف المباشر مع العربية والإنجليزية.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* محاذاة منطقية تبدأ من اليمين في العربية ومن اليسار في الإنجليزية تلقائياً */
.article-body {
  text-align: start;
}`
        ],
        expectedOutput: [
            'محاذاة النص لليمين تلقائياً عند تفعيل dir="rtl" ولليسار عند dir="ltr".'
        ],
        professionalTips: 'تجنب استخدام text-align: justify على فقرات الويب الجوالة؛ لأنها تتسبب في ظهور فراغات بيضاء ضخمة بداخل السطور (River Effect).',
        commonMistakes: {
            wrong: `/* استخدام التنسيق الفيزيائي المباشر text-align: right */
.text { text-align: right; }`,
            right: `.text { text-align: start; }`,
            explanation: 'الخاصية المنطقية start تحافظ على صحة الاتجاه وتلغي الحاجة لإعادة التعديل عند التحويل لغات أجنبية.'
        },
        thinkingWay: 'اعتبر text-align: start بطلب "ضع نقطة البداية مع اتجاه القلم أينما كان متوجهاً".',
        relatedMethods: ['css-text-transform'],
        keywords: ['text-align', 'text-align: start', 'text-align: end', 'logical text align', 'RTL text']
    },
    {
        id: 'css-text-transform',
        name: 'text-transform',
        shortDescription: 'تحويل أشكال الحروف الإنجليزية (كبيرة، صغيرة، أو بدايات الأحرف).',
        longDescription: 'خاصية تُغير حالة الأحرف الأبجدية اللاتينية بـ CSS دون تعديل النص الأصلي بالـ HTML (مثل uppercase للحروف الكبيرة، و capitalize لتكبير أول حرف من كل كلمة).',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `/* تحويل جميع الحروف إلى أحرف كبيرة للبطاقات الإنجليزية */
.card-tag {
  text-transform: uppercase;
}`
        ],
        expectedOutput: [
            'عرض الكلمات الإنجليزية بحروف كبيرة ناصعة (ALL CAPS).'
        ],
        professionalTips: 'هذه الخاصية تعمل حصرياً مع اللغات القائمة على الحروف الكبيرة والصغيرة (مثل الإنجليزية والفرنسية) ولا تؤثر إطلاقاً على النصوص العربية.',
        commonMistakes: {
            wrong: `/* كتابة النصوص بحروف كبيرة يدوياً داخل HTML بدلاً من التنسيق بـ CSS */
<span>SUBMIT DATA</span>`,
            right: `<span class="uppercase">submit data</span>`,
            explanation: 'التنسيق بـ CSS يترك النص الأصلي بـ HTML بنمطه الطبيعي مما يسهل قراءته بقارئات الشاشة.'
        },
        thinkingWay: 'فكر في text-transform كمفتاح Caps Lock في الكيبورد؛ يغير شكل طباعة الحرف دون تغيير الكلمة.',
        relatedMethods: ['css-letter-spacing'],
        keywords: ['text-transform', 'uppercase', 'lowercase', 'capitalize', 'text case']
    },
    {
        id: 'css-text-decoration',
        name: 'text-decoration & underline-offset',
        shortDescription: 'إضافة وإدارة التسطير والخطوط الفاصلة مع ضبط المسافة المباشرة.',
        longDescription: 'مجموعة خصائص للتحكم بالخطوط الديكورية للنصوص؛ وتتيح السمة المعاصرة underline-offset التحكم بالمسافة الفاصلة بين الخط السفلي وأحرف الجملة.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* إعطاء الروابط خطاً سفلياً أنيقاً ومبتعداً عن أقدام الحروف */
a {
  text-decoration: underline #3b82f6 2px;
  text-underline-offset: 4px;
}`
        ],
        expectedOutput: [
            'رسم خط أزرق ناعم أسفل الرابط يبعد 4 بكسل عن قاع الأحرف لمنع تداخل القراءة.'
        ],
        professionalTips: 'استخدم text-underline-offset لمنع الخط السفلي من قطع أقدام الحروف العربية والإنجليزية (مثل حرف g أو y أو ي) لرفع مقروئية الروابط.',
        commonMistakes: {
            wrong: `/* إزالة التسطير من الروابط كلياً دون توفير تمييز بصري واضح */
a { text-decoration: none; }`,
            right: `a { text-decoration: underline; text-underline-offset: 3px; }`,
            explanation: 'إلغاء التسطير عن الروابط تماماً يضر بإمكانية الوصول (WCAG) ويصعّب على المستخدم تمييز الروابط المباشرة.'
        },
        thinkingWay: 'اعتبر underline-offset برفع مسطرة التسطير أسفل السطر قليلاً لكي لا تلمس أقدام الكلمات.',
        relatedMethods: ['css-text-align'],
        keywords: ['text-decoration', 'text-underline-offset', 'underline color', 'link underline']
    },
    {
        id: 'css-text-overflow-ellipsis',
        name: 'text-overflow: ellipsis',
        shortDescription: 'إضافة نقاط الحذف (...) فور طفح النص في السطر الواحد.',
        longDescription: 'خاصية معيارية تُستخدم مع white-space: nowrap و overflow: hidden لإقصاء النص الزائد عن حدود البوكس في سطر واحد واستبداله بنقاط حذف (...).',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* قطع النص السطري المفرط واستبداله بنقاط (...) */
.single-line-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`
        ],
        expectedOutput: [
            'قص العنوان فور مجاوزته لعرض البوكس وإضافة (...) بآخره بنظافة بصرية.'
        ],
        professionalTips: 'تذكر دائماً القواعد الثلاثية الحتمية لـ ellipsis: يجب تواجد white-space: nowrap و overflow: hidden و width محدد معاً لتعمل الخاصية.',
        commonMistakes: {
            wrong: `/* كتابة text-overflow: ellipsis منفردة دون إخفاء الطفح */
.title { text-overflow: ellipsis; }`,
            right: `.title { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }`,
            explanation: 'بدون overflow: hidden و white-space: nowrap لن تشعر الخاصية بوجود طفح ولن تظهر النقاط.'
        },
        thinkingWay: 'فكر في ellipsis كمقص المخرج؛ يقص النص الزائد عن المربع ويضع بدلاً منه ثلاث نقاط تعبر عن البقية.',
        relatedMethods: ['css-line-clamp', 'css-white-space'],
        keywords: ['text-overflow', 'ellipsis', 'truncate text', 'single line truncate']
    },
    {
        id: 'css-white-space',
        name: 'white-space',
        shortDescription: 'التحكم بكيفية معالجة المسافات والأسطر النصية داخل العناصر.',
        longDescription: 'خاصية تحدد طريقة تعامل المتصفح مع المسافات الفارغة والأسطر الجديدة المكتوبة بـ HTML (مثل nowrap لمنع كسر السطر، أو pre-wrap للحفاظ على المسافات المكتوبة).',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `/* الحفاظ على المسافات والكسور السطرية المكتوبة بـ HTML كما هي */
.code-block {
  white-space: pre-wrap;
}`
        ],
        expectedOutput: [
            'عرض الأسطر والمسافات الداخلية بالضبط كما كُتبت في كود الـ HTML الأصلي.'
        ],
        professionalTips: 'استخدم white-space: pre-wrap مع كتل الملاحظات والتعليقات المكتوبة من المستخدمين للحفاظ على تنسيق فقراتهم المكتوبة.',
        commonMistakes: {
            wrong: `/* استخدام nowrap وتوقع أن النص سيلتف تلقائياً بالهاتف */
p { white-space: nowrap; }`,
            right: `p { white-space: normal; }`,
            explanation: 'الـ nowrap تجبر النص على الامتداد بسطر واحد خروجاً عن الشاشة إذا لم ترغب بذلك.'
        },
        thinkingWay: 'اعتبر white-space بالمدرب الذي يقرر إما طي الأسطر الزائدة أو فردها كما كُتبت بالدفتر.',
        relatedMethods: ['css-text-overflow-ellipsis', 'css-overflow-wrap'],
        keywords: ['white-space', 'nowrap', 'pre-wrap', 'line wrapping', 'text spaces']
    },
    {
        id: 'css-overflow-wrap',
        name: 'overflow-wrap / word-break',
        shortDescription: 'كسر الكلمات الطويلة جداً والروابط لمنع خروجها عن حدود البوكس.',
        longDescription: 'خصائص حماية البوكس من الانكسار؛ تُجبر المتصفح على كسر الكلمات الطويلة للغاية أو الروابط الممتدة ( مثل العناوين الطويلة ) والانتقال لسطر جديد.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* كسر الروابط والكلمات العميقة لمنع طفح البوكس أفقياً */
.user-comment {
  overflow-wrap: break-word;
}`
        ],
        expectedOutput: [
            'قص وكسر الرابط الطويل فور صدامه بجدار الكرت والانتقال المباشر للسطر التالي.'
        ],
        professionalTips: 'اعتمد الخاصية المعيارية overflow-wrap: break-word بدلاً من word-break: break-all؛ لأن overflow-wrap تكسر الكلمة فقط إذا كانت أطول من عرض البوكس.',
        commonMistakes: {
            wrong: `/* ترك الروابط الطويلة بدون كسر فتخرج عن الكرت وتخرب الجوال */
.card { width: 300px; }`,
            right: `.card { overflow-wrap: break-word; }`,
            explanation: 'الروابط الممتدة بدون كسر تتسبب في خروج الكرت عن الشاشة وحدوث شريط تمرير أفقي.'
        },
        thinkingWay: 'فكر في overflow-wrap كمقص التفكيك؛ يقطع الكلمة العملاقة إلى جزأين لتقع في السطر الجديد بدلاً من ثقب الجدار.',
        relatedMethods: ['css-text-overflow-ellipsis', 'css-white-space'],
        keywords: ['overflow-wrap', 'word-break', 'break-word', 'truncate link', 'responsive text']
    },
    {
        id: 'css-line-clamp',
        name: 'line-clamp',
        shortDescription: 'القص والتقليم متعدد الأسطر وإضافة نقاط (...) بعد عدد أسطر محدد.',
        longDescription: 'خاصية معاصرة ممتازة تتيح تقليم وقص النص بعد عدد محدد من الأسطر (مثل قص المقال بعد 3 أسطر) مع إضافة نقاط الحذف (...) تلقائياً بنهاية السطر الأخير.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* قص الوصف بعد 3 أسطر فقط مهما كان طول المقال */
.card-description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}`
        ],
        expectedOutput: [
            'إظهار أول 3 أسطر من الفقرة فقط وقص باقي الكلام بوضع (...) بآخره.'
        ],
        professionalTips: 'هذه الخاصية هي الحل المعماري القياسي لتوحيد أطوال كروت الأخبار والبطاقات بالمنصة بـ CSS الصرف دون جافا سكريبت.',
        commonMistakes: {
            wrong: `/* نسيان كتابة display: -webkit-box عند استخدام line-clamp */
.desc { -webkit-line-clamp: 2; }`,
            right: `.desc { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }`,
            explanation: 'الـ line-clamp تتطلب هذه البنية التمهيدية لكي يتعرف المحرك على عدد الأسطر.'
        },
        thinkingWay: 'اعتبر line-clamp بسكين القص الأفقية؛ تضبطها على الارتفاع المكتوب لتقص ما أسفله آلياً.',
        relatedMethods: ['css-text-overflow-ellipsis'],
        keywords: ['line-clamp', '-webkit-line-clamp', 'multi-line truncate', 'card text clamp']
    },
    {
        id: 'css-font-feature-settings',
        name: 'OpenType Features (font-feature-settings)',
        shortDescription: 'تفعيل الميزات والخصائص الطباعية المتقدمة للخطوط الاحترافية.',
        longDescription: 'خاصية تتيح النفوذ المباشر لميزات الخطوط المتقدمة (OpenType Features) مثل تحويل الأرقام إلى أرقام عربية/إنجليزية معتمدة، الأشكال البديلة، والمحاذاة الطباعية.',
        difficulty: 'hard',
        importance: 'important',
        examples: [
            `/* تفعيل الأرقام الجدولية المتساوية العرض بـ OpenType */
.price-table {
  font-feature-settings: 'tnum' 1, 'cv01' 1;
}`
        ],
        expectedOutput: [
            'جعل أرقام الأسعار بالجدول متساوية العرض أفقيًا لتسهيل المقارنة بين خانات الآحاد والعشرات.'
        ],
        professionalTips: 'استخدم font-variant-numeric: tabular-nums بدلاً من font-feature-settings إن أمكن؛ لأنها الصياغة العالية المستوى الأكثر سهولة بالقراءة.',
        commonMistakes: {
            wrong: `/* استخدام ميزات OpenType على خطوط مجانية بسيطة لا تدعم هذه الميزات */
.text { font-feature-settings: 'ss01' 1; }`,
            right: `/* التأكد أولاً من دعم ملف الخط المجلوب لميزات OpenType */`,
            explanation: 'إذا كان ملف الخط لا يحتوي على جليفات OpenType مدمجة، فلن تؤثر الخاصية على العرض.'
        },
        thinkingWay: 'فكر في font-feature-settings كلوحة المفاتيح المخفية بالخط؛ تفتح أشكالاً زخرفية وأرقاماً متخصصة بداخل نفس الخط.',
        relatedMethods: ['css-font-family'],
        keywords: ['font-feature-settings', 'OpenType', 'tabular nums', 'font-variant', 'typography advanced']
    }
];