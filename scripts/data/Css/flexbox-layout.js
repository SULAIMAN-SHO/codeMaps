export const flexboxLayoutData = [
    {
        id: 'css-flexbox-display',
        name: 'display: flex / inline-flex',
        shortDescription: 'تفعيل نظام التخطيط المرن على الحاوية وتحويل أطفالها المباشرين لـ Flex Items.',
        longDescription: 'البوابة الرئيسية لنظام الفليكس بوكس؛ تتحكم بالحاوية وتفعّل سياق التخطيط المرن أحادي البعد على جميع الأبناء المباشرين، حيث تجعلهم display: flex كتلة كاملة العرض، و display: inline-flex كتلة ضمنية على سطر النص.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* تحويل الحاوية الرئيسية لنظام التخطيط المرن */
.navbar {
  display: flex;
  align-items: center;
}`
        ],
        expectedOutput: [
            'تراصف العناصر الابنة أفقياً تلقائياً على المحور الرئيسي دون الحاجة لـ float.'
        ],
        professionalTips: 'استخدم display: flex للغالبية العظمى من المكونات والهياكل المباشرة؛ واستخدم inline-flex عندما تصمم زراً يحتوي أيقونة ونصاً بداخل سطر مكتوب.',
        commonMistakes: {
            wrong: `/* وضع display: flex وتوقع تأثر الأحفاد في المستويات العمياء */
.container { display: flex; }
/* التوقع بأن الأحفاد الداخليين سيتأثرون آلياً */`,
            right: `/* الفليكس بوكس يؤثر حصراً على الأبناء المباشرين فقط (Direct Children) */`,
            explanation: 'نظام Flexbox ينطبق آلياً على الطبقة الأولى من الأبناء المباشرين للحاوية المحددة فقط.'
        },
        thinkingWay: 'اعتبر display: flex كتشغيل حقل المغناطيس بداخل الصندوق؛ يصطف الأبناء فوراً على شريط منظم.',
        relatedMethods: ['css-flexbox-direction', 'css-flexbox-gap'],
        keywords: ['display: flex', 'display: inline-flex', 'flex container', 'flexbox layout', 'CSS flex']
    },
    {
        id: 'css-flexbox-direction',
        name: 'flex-direction',
        shortDescription: 'تحديد المحور الرئيسي لتراصف العناصر (row, column, row-reverse, column-reverse).',
        longDescription: 'خاصية تحدد اتجاه المحور الرئيسي (Main Axis) المعتمد لرص العناصر؛ القيمة row (الافتراضية) ترصهم أفقياً، و column ترصهم رأسياً كعمود، مع خيارات العكس reverse.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* ترتيب كروت الشاشة رأسياً كعمود في الشاشات الصغرى */
@media (max-width: 768px) {
  .card-grid {
    flex-direction: column;
  }
}`
        ],
        expectedOutput: [
            'تحول السطر الأفقي للعناصر إلى عمود رأسي متناسق من الأعلى للأسفل.'
        ],
        professionalTips: 'تغيير flex-direction إلى column يعكس عمل خصائص المحاذاة؛ حيث تصبح justify-content مسؤولة عن المحور الرأسي، و align-items مسؤولة عن المحور الأفقي.',
        commonMistakes: {
            wrong: `/* استخدام row-reverse للغات العربية وتخريب ترتيب القراءة بـ DOM */
[dir="rtl"] .menu { flex-direction: row-reverse; }`,
            right: `/* ترك الاتجاه الافتراضي row والتكيف التلقائي مع dir="rtl" */`,
            explanation: 'النظام المرن يعكس اتجاه row تلقائياً في البيئات العربية دون الحاجة لاستخدام row-reverse المضللة.'
        },
        thinkingWay: 'فكر في flex-direction كالبوصلة؛ تقرر ما إذا كانت القاطرات ستسير أفقياً أم صعوداً وهبوطاً.',
        relatedMethods: ['css-flexbox-display', 'css-flexbox-wrap'],
        keywords: ['flex-direction', 'row', 'column', 'row-reverse', 'main axis', 'cross axis']
    },
    {
        id: 'css-flexbox-wrap',
        name: 'flex-wrap',
        shortDescription: 'التحكم بالسماح بإنشاء أسطر جديدة عند انكماش مساحة الحاوية.',
        longDescription: 'خاصية تحدد سلوك العناصر عند ضيق المساحة؛ nowrap (الافتراضية) تجبر العناصر على الانكماش بالسطر الواحد، بينما wrap تتيح لها الانتقال لسطر جديد بنظافة.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* السماح للشارات بالتكسر والانتقال لسطر جديد على الهاتف */
.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}`
        ],
        expectedOutput: [
            'انتقال الشارات الزائدة تلقائياً للسطر السفلي بدلاً من قصّها أو خروجها عن الشاشة.'
        ],
        professionalTips: 'استخدم flex-wrap: wrap دائماً عند تصفيف المعارض، الشارات، أو شبكات الكروت غير المحدودة؛ لمنع خروج العناصر عن نطاق الشاشة أفقياً.',
        commonMistakes: {
            wrong: `/* ترك nowrap الافتراضية والتساؤل عن سبب انكماش العناصر لأحجام مجهرية */
.cards { display: flex; /* nowrap افتراضياً */ }`,
            right: `.cards { display: flex; flex-wrap: wrap; }`,
            explanation: 'خاصية nowrap تضغط العناصر مجبرة بداخل سطر واحد وتمنعها من حجز مساحتها المريحة.'
        },
        thinkingWay: 'اعتبر flex-wrap كمسطرة كتابة الكلمات؛ فور وصولك لنهاية السطر ينتقل القلم للسطر الجديد.',
        relatedMethods: ['css-flexbox-flow', 'css-flexbox-gap'],
        keywords: ['flex-wrap', 'wrap', 'nowrap', 'wrap-reverse', 'responsive flex', 'multi-line flex']
    },
    {
        id: 'css-flexbox-flow',
        name: 'flex-flow',
        shortDescription: 'خاصية الاختصار المدمجة لتعيين flex-direction و flex-wrap معاً.',
        longDescription: 'خاصية مختصرة (Shorthand) تتيح دمج خاصيتي الاتجاه والالتفاف بسطر برمجي واحد؛ حيث تقبل وسيطين: الاتجاه أولاً ثم الالتفاف (مثل row wrap).',
        difficulty: 'medium',
        importance: 'normal',
        examples: [
            `.gallery-wrapper {
  display: flex;
  flex-flow: row wrap; /* اتجاه أفقي مع التفاف للأسطر */
}`
        ],
        expectedOutput: [
            'تطبيق الاتجاه الأفقي وإتاحة الانتقال لأسطر جديدة بكسرة سطر واحدة.'
        ],
        professionalTips: 'استخدم flex-flow لتقليل أسطر ملفات الـ CSS وكتابة قواعد الحاوية التجميعية بأسلوب سريع ومباشر.',
        commonMistakes: {
            wrong: `/* عكس ترتيب الوسائط داخل flex-flow */
.box { flex-flow: wrap row; }`,
            right: `.box { flex-flow: row wrap; }`,
            explanation: 'الصيغة المعيارية تشترط كتابة اتجاه الحركة flex-direction أولاً ثم حالة الالتفاف flex-wrap.'
        },
        thinkingWay: 'فكر في flex-flow كالأمر المزدوج للسيارة؛ "اتجه أفقياً ودر عند نهاية الطريق".',
        relatedMethods: ['css-flexbox-direction', 'css-flexbox-wrap'],
        keywords: ['flex-flow', 'flex shorthand', 'direction and wrap']
    },
    {
        id: 'css-flexbox-justify-content',
        name: 'justify-content',
        shortDescription: 'توزيع وتمركز المساحات الفارغة بين العناصر على المحور الرئيسي (Main Axis).',
        longDescription: 'الخاصية الأولى للتحكم بالتباعد الأفقي (أو الرأسي إذا كان column)؛ تتيح تمركز العناصر (center) أو تفريقها بأبعاد متساوية (space-between, space-around, space-evenly).',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* توزيع الشعار على أقصى اليمين وروابط الحساب على أقصى اليسار */
.header-bar {
  display: flex;
  justify-content: space-between;
}`
        ],
        expectedOutput: [
            'التصاق العنصر الأول والأخير بالطرفين وتوزيع المساحات المتبقية بالتساوي في المنتصف.'
        ],
        professionalTips: 'استخدم القيمة المعاصرة start و end بدلاً من flex-start و flex-end؛ لدعم محاذاة الخصائص المنطقية للغات المختلفة بـ 2026.',
        commonMistakes: {
            wrong: `/* استخدام space-between وحيداً وتوقع مسافات على أطراف الحاوية الخارجية */
.menu { justify-content: space-between; }`,
            right: `.menu { justify-content: space-evenly; }`,
            explanation: 'الـ space-between تفرغ المسافات حصراً بين العناصر المترابطة وتلتصق بالأطراف، بينما space-evenly تضع مسافات متساوية بالخارج والداخل.'
        },
        thinkingWay: 'اعتبر justify-content كمدرب الرياضة الذي يوزع اللاعبين على طول خط الملعب المباشر.',
        relatedMethods: ['css-flexbox-align-items', 'css-flexbox-gap'],
        keywords: ['justify-content', 'space-between', 'center', 'space-evenly', 'main axis alignment']
    },
    {
        id: 'css-flexbox-align-items',
        name: 'align-items',
        shortDescription: 'محاذاة وتمركز العناصر على المحور التقاطعي التعامدي (Cross Axis).',
        longDescription: 'خاصية التحكم بمحاذاة السطر الواحد على المحور المعاكس (رأسياً في حالة row، وأفقياً في حالة column)؛ وتقبل القيم: stretch, center, flex-start, flex-end, baseline.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* التمركز الرأسي المثالي لأيقونة والنص المجاور لها بداخل الزر */
.btn-icon {
  display: flex;
  align-items: center;
}`
        ],
        expectedOutput: [
            'محاذاة الأيقونة والنص أفقياً في منتصف خط الارتفاع الرأسي تماماً.'
        ],
        professionalTips: 'القيمة الافتراضية لـ align-items هي stretch (تمدد كامل الارتفاع)؛ لذا إذا لاحظت تمدد الكروت بشكل غريب رأسياً، غير القيمة إلى center أو flex-start.',
        commonMistakes: {
            wrong: `/* استخدام align-items وتوقع توزيع المسافات بين أسطر متعددة */
.multi-line { align-items: space-between; } /* غير مدعومة */`,
            right: `.multi-line { align-content: space-between; }`,
            explanation: 'الخاصية align-items محصورة بمحاذاة السطر الواحد؛ والأسطر المتعددة تحتاج align-content.'
        },
        thinkingWay: 'فكر في align-items كالخط الموجه الرأسي الذي يضبط مستوى ارتفاع الأجسام بداخل الرف.',
        relatedMethods: ['css-flexbox-justify-content', 'css-flexbox-align-content'],
        keywords: ['align-items', 'align center', 'cross axis', 'vertical alignment', 'stretch']
    },
    {
        id: 'css-flexbox-align-content',
        name: 'align-content',
        shortDescription: 'التحكم بالتباعد والمحاذاة بين الأسطر المتعددة عند تفعيل flex-wrap.',
        longDescription: 'خاصية تعمل حصراً عندما تحتوي الحاوية على أسطر متعددة (بوجود flex-wrap: wrap)؛ وتتحكم بتوزيع المساحة الرأسية المتبقية بين الأسطر التابعة.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `/* جمع الأسطر المتعددة متراصة في منتصف الحاوية الرأسية */
.multi-line-grid {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}`
        ],
        expectedOutput: [
            'تكتل كافة الأسطر المتعددة في منتصف الارتفاع الرأسي للحاوية دون فراغات عريضة.'
        ],
        professionalTips: 'تذكر دائماً أن align-content لا تعمل إطلاقاً إذا كانت الحاوية تحتوي على سطر واحد فقط (nowrap)؛ تتطلب حتماً التفاف الأسطر.',
        commonMistakes: {
            wrong: `/* محاولة استخدام align-content على حاوية سطر واحد بدون wrap */
.single-line { display: flex; align-content: center; }`,
            right: `.single-line { display: flex; align-items: center; }`,
            explanation: 'السطر المنفرد يتطلب align-items؛ أما align-content مخصصة للتحكم بالمجموعات متعددة الأسطر.'
        },
        thinkingWay: 'اعتبر align-content كالمكبس الذي يضغط أو يوزع الصفوف المتعددة في الصفحة الرأسية.',
        relatedMethods: ['css-flexbox-align-items', 'css-flexbox-wrap'],
        keywords: ['align-content', 'multi-line alignment', 'flex wrap align', 'cross axis lines']
    },
    {
        id: 'css-flexbox-gap',
        name: 'gap / row-gap / column-gap',
        shortDescription: 'الفواصل والمسافات البينية المباشرة بين عناصر الفليكس بوكس المعاصرة.',
        longDescription: 'خاصية حديثة ومعيارية تُضاف على الحاوية لتحديد المساحة الفاصلة بين عناصر Flex Items مباشرة دون الحاجة لاستخدام margin على العناصر الفرعية.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* تعيين مسافة فاصلة ناعمة بـ 1.5rem بين الكروت */
.card-container {
  display: flex;
  gap: 1.5rem;
}`
        ],
        expectedOutput: [
            'إيجاد مسافات فاصلة حقيقية بين الكروت دون إحداث أي حشو أو هامش خارجي على الأطراف.'
        ],
        professionalTips: 'استخدم gap بدلاً من margin-right على الأبناء؛ لأن gap تضع المسافات حصراً "بين" العناصر المجاورة وتتجاهل الحواف الخارجية تلقائياً.',
        commonMistakes: {
            wrong: `/* كتابة margin على الكروت وحذف الهامش من العنصر الأخير بـ :last-child */
.card { margin-right: 20px; } .card:last-child { margin-right: 0; }`,
            right: `.parent { display: flex; gap: 20px; }`,
            explanation: 'الخاصية gap اختصرت منطق التباعد وألغت الحاجة لحذف الهوامش من العناصر الأخيرة.'
        },
        thinkingWay: 'فكر في gap كالإسمنت الفاصل المصبوب حصراً في الشقوق الواقعة بين كتل البناء.',
        relatedMethods: ['css-flexbox-display', 'css-margin-property'],
        keywords: ['gap', 'row-gap', 'column-gap', 'flexbox gap', 'modern CSS spacing']
    },
    {
        id: 'css-flexbox-grow',
        name: 'flex-grow',
        shortDescription: 'تحديد معدل ومعامل تمدد العنصر واستهلاكه للمساحة الفارغة المتبقية.',
        longDescription: 'خاصية تُكتب على الابن (Flex Item) لتحديد نسبته في امتصاص واستهلاك المساحة المتبقية بالحاوية؛ القيمة 0 (الافتراضية) تمنعه من التمدد، و 1 تجعله يتمدد لملء الفراغ.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* جعل حقل البحث يتمدد لأقصى مساحة متاحة مع ثبات حجم زر الإرسال */
.search-input {
  flex-grow: 1;
}`
        ],
        expectedOutput: [
            'تمدد حقل البحث أفقياً ليملأ كافة المساحة المتروكة في شريط الهيدر.'
        ],
        professionalTips: 'إذا أعطيت عنصراً flex-grow: 2 وعنصراً مجاوراً flex-grow: 1، سيمتص العنصر الأول ضعفي المساحة الفارغة المتبقية مقارنة بالثاني.',
        commonMistakes: {
            wrong: `/* وضع flex-grow: 1 وتوقع تمدد العنصر رغم وجود width: 100% صلب على الأب */
.item { flex-grow: 1; }`,
            right: `/* flex-grow تعمل فقط إذا كانت هناك مساحة فارغة متبقية بالحاوية */`,
            explanation: 'الـ flex-grow لا يضيف حجماً إلا من الفراغ الأبيض المتبقي بالحاوية الأب.'
        },
        thinkingWay: 'اعتبر flex-grow كإسفنجة امتصاص الفراغ؛ تعطيها الرقم لتحدد كم شفطة ستأخذها من المساحة الفارغة.',
        relatedMethods: ['css-flexbox-shrink', 'css-flexbox-basis', 'css-flexbox-shorthand'],
        keywords: ['flex-grow', 'grow factor', 'flex distribution', 'fill remaining space']
    },
    {
        id: 'css-flexbox-shrink',
        name: 'flex-shrink',
        shortDescription: 'تحديد معدل ومعامل انكماش العنصر عند ضيق المساحة بالحاوية.',
        longDescription: 'خاصية تحدد مدى سماح العنصر لنفسه بالانكماش عندما تصبح المساحة الكلية أصغر من أبعاد العناصر؛ القيمة 1 (الافتراضية) تسمح بالانكماش، و 0 تحظر الانكماش.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* حظر انكماش الأيقونة أو الشعار نهائياً عند ضغط الشاشة */
.brand-logo {
  flex-shrink: 0;
}`
        ],
        expectedOutput: [
            'حفظ أبعاد الشعار كاملة دون أن يتعرض للقص أو الانضغاط على الجوال.'
        ],
        professionalTips: 'ضع flex-shrink: 0 دائماً على الصور، الأيقونات، وأزرار الإغلاق بداخل الفليكس بوكس؛ لمنع المتصفح من تشويه أبعادها عند ضغط الشاشة.',
        commonMistakes: {
            wrong: `/* ترك flex-shrink: 1 الافتراضية على الصور والتفاجؤ ببيضاويتها المفقودة بالهاتف */
.avatar { width: 50px; height: 50px; }`,
            right: `.avatar { width: 50px; height: 50px; flex-shrink: 0; }`,
            explanation: 'بدون flex-shrink: 0 يضغط الفليكس بوكس الصورة ويفقدها شكلها الدائري.'
        },
        thinkingWay: 'فكر في flex-shrink: 0 كجدار حديدي صلب يرفض الانعصار مهما انضغطت جدران الغرفة.',
        relatedMethods: ['css-flexbox-grow', 'css-flexbox-basis'],
        keywords: ['flex-shrink', 'flex-shrink: 0', 'prevent shrink', 'unshrinkable flex']
    },
    {
        id: 'css-flexbox-basis',
        name: 'flex-basis',
        shortDescription: 'تعيين الحجم والبعد المبدئي للعنصر قبل توزيع المساحات الزائدة.',
        longDescription: 'خاصية تحدد الحجم الابتدائي للعنصر على المحور الرئيسي قبل بدء عمليات التمدد (grow) أو الانكماش (shrink)، وتعمل كبديل أكثر مرونة للـ width أو height.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `/* تعيين حجم مبدئي للكرت يعادل 300 بكسل قبل احتساب التمدد */
.card-item {
  flex-basis: 300px;
  flex-grow: 1;
}`
        ],
        expectedOutput: [
            'بدء أبعاد الكرت بـ 300px ثم التمدد المرن لملء الفراغ المتبقي بالتساوي.'
        ],
        professionalTips: 'تعيين flex-basis: 0 مع flex-grow: 1 يضمن توزيع مساحة الكروت بالتساوي المباشر بغض النظر عن طول النصوص المكتوبة بداخل كل كرت.',
        commonMistakes: {
            wrong: `/* استخدام width الصلب بدلاً من flex-basis وتوقع نفس السلوك المرن */
.item { width: 200px; }`,
            right: `.item { flex-basis: 200px; }`,
            explanation: 'الـ flex-basis محرك مرن يتكيف مع اتجاه flex-direction سواء كان أفقياً أم رأسياً.'
        },
        thinkingWay: 'اعتبر flex-basis بالنقطة الابتدائية المكتوبة على خط أبعاد البناء قبل البدء بمد القماش.',
        relatedMethods: ['css-flexbox-grow', 'css-flexbox-shorthand'],
        keywords: ['flex-basis', 'initial flex size', 'flex-basis: 0', 'base width']
    },
    {
        id: 'css-flexbox-shorthand',
        name: 'flex (Shorthand Property)',
        shortDescription: 'خاصية الاختصار الشاملة للتحكم بـ (grow, shrink, basis) بكسرة واحدة.',
        longDescription: 'الخاصية المجمعة المعيارية الموصى بها معمارياً؛ تجمع الخصائص الثلاث بأسلوب مختصر: flex: [grow] [shrink] [basis] (مثل flex: 1 لتمدد كامل متساوٍ، أو flex: 0 0 auto).',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* 1. التمدد المتساوي لجميع الكروت بنفس الحجم بالضبط */
.equal-card {
  flex: 1; /* تعادل flex: 1 1 0% */
}

/* 2. ثبات الحجم بدون تمدد ولا انكماش */
.fixed-sidebar {
  flex: 0 0 260px;
}`
        ],
        expectedOutput: [
            'توزيع المساحات بدقة متناهية وإلغاء التضارب بين الخصائص الثلاث.'
        ],
        professionalTips: 'استخدم دائماً الخاصية المختصرة flex بدلاً من كتابة grow و shrink و basis بشكل منفصل؛ لتضمن إعادة تعيين القيم الافتراضية بأسلوب نظيف.',
        commonMistakes: {
            wrong: `/* كتابة رقم مفرد وتوقع أنه يعبر عن flex-basis بكسل */
.box { flex: 200px; }`,
            right: `.box { flex: 0 0 200px; } /* أو flex-basis: 200px */`,
            explanation: 'كتابة رقم مجرد بدون وحدة يفهمه المحرك كـ flex-grow وليس كحجم كلي.'
        },
        thinkingWay: 'فكر في flex كأمر تحكم ثلاثي الأبعاد؛ يحدد التمدد، الحماية من الانكماش، والحجم الابتدائي بكلمة واحدة.',
        relatedMethods: ['css-flexbox-grow', 'css-flexbox-shrink', 'css-flexbox-basis'],
        keywords: ['flex', 'flex: 1', 'flex: 0 0 auto', 'flex shorthand', 'equal width columns']
    },
    {
        id: 'css-flexbox-align-self',
        name: 'align-self',
        shortDescription: 'تجاوز محاذاة الأب وتغيير تموضع عنصر فردي محدد على Cross Axis.',
        longDescription: 'خاصية تُكتب على الابن (Flex Item) لتسمح له بكسر قاعدة المحاذاة العامة المحددة في الأب عبر align-items، واستقلال محاذاة نفسه بمفرده (مثل center, flex-end).',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* دفع زر الإغلاق المباشر لأقصى قاع الكرت بمفرده */
.card-action-btn {
  align-self: flex-end;
}`
        ],
        expectedOutput: [
            'محاذاة الكرت الفرعي لأسفل الحاوية بقرار فردي مستقل عن باقي إخوانه.'
        ],
        professionalTips: 'خاصية align-self مفيدة جداً لتثبيت الأزرار في أسفل البطاقات المتباينة الطول لتبدو الواجهة متناسقة ومحاذية للأسفل.',
        commonMistakes: {
            wrong: `/* كتابة align-self على الحاوية الأب بدلاً من العناصر الفرعية */
.parent { align-self: center; }`,
            right: `.child-item { align-self: center; }`,
            explanation: 'خاصية align-self تُكتب حصراً على العناصر الابنة (Flex Items) وليس على الحاوية.'
        },
        thinkingWay: 'اعتبر align-self كالإبن المستقل بقراره؛ يختار التموضع في مكان مختلف عن باقي إخوانه.',
        relatedMethods: ['css-flexbox-align-items'],
        keywords: ['align-self', 'override alignment', 'individual alignment', 'flex-end self']
    },
    {
        id: 'css-flexbox-order',
        name: 'order',
        shortDescription: 'إعادة الترتيب البصري للعنصر والتحذير الشديد من مخاطر الوصولية (Accessibility).',
        longDescription: 'خاصية تغير الترتيب البصري الظاهري للعنصر في الشاشة دون تعديل شفرة الـ HTML الأصلية (القيم الافتراضية 0)؛ وتدعم الأرقام السلبية والموجبة.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* تقديم عنصر الصورة لتبدو أولاً في الجوال */
.hero-image {
  order: -1;
}`
        ],
        expectedOutput: [
            'قفز الصورة بصرياً لتصبح أول عنصر في السطر دون تغيير مكانها بملف الـ HTML.'
        ],
        professionalTips: 'تحذير وصولية صارم (Accessibility Danger): خاصية order تغير الترتيب البصري فقط وتترك ترتيب الكيبورد وقارئات الشاشة كما هو في HTML، مما يسبب تشتيتاً كبيراً للمكفوفين.',
        commonMistakes: {
            wrong: `/* الاعتماد المفرط على order لبناء ترتيب القراءة الرئيسي بالمنصة */
.step-1 { order: 3; } .step-2 { order: 1; }`,
            right: `/* إعادة ترتيب عناصر الـ HTML الأصلية لتتطابق شجرة الوصول مع المظهر */`,
            explanation: 'إعادة الترتيب البصري بـ order يخلق تعارضاً بين ما يراه المستخدم وما يقرؤه كشاف Tab بالكيبورد.'
        },
        thinkingWay: 'فكر في order كخدعة مرآة الساحر؛ تعكس الصورة بمكان مختلف ولكن حقيقة المكان ثابتة بالطاولة الأصلية.',
        relatedMethods: ['css-flexbox-display'],
        keywords: ['order', 'flex order', 'visual reordering', 'accessibility warning', 'DOM order mismatch']
    }
];