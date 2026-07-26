export const gridLayoutData = [
    {
        id: 'css-grid-display',
        name: 'display: grid / inline-grid',
        shortDescription: 'تفعيل نظام التخطيط الشبكي ثنائي الأبعاد (Rows & Columns) على الحاوية.',
        longDescription: 'المدخل الأساسي لمعمارية CSS Grid؛ يحول الحاوية وأبناءها المباشرين لشبكة ثنائية الأبعاد تتحكم بالصفوف والأعمدة بالتوازي، مع فارق كون inline-grid تظهر كعنصر سطري.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* بناء حاوية شبكة متكاملة الكتل */
.dashboard-grid {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 1.5rem;
}`
        ],
        expectedOutput: [
            'تحول الحاوية لشبكة ثنائية الأبعاد بعمود جانبي ثابت وعمود رئيسي مرن ممتد.'
        ],
        professionalTips: 'استخدم CSS Grid للتخطيط الشامل للواجهات والتخطيطات ثنائية الأبعاد (2D Layouts)، بينما يُفضل استخدام Flexbox للتراصف الأحادي المباشر.',
        commonMistakes: {
            wrong: `/* وضع display: grid دون تحديد الأعمدة أو الصفوف فتظهر العناصر كـ block عادي */
.grid { display: grid; }`,
            right: `.grid { display: grid; grid-template-columns: repeat(3, 1fr); }`,
            explanation: 'الـ display: grid بمفردها تنشئ صفاً فريداً كترتيب الكتل الافتراضي؛ يجب تحديد الأعمدة لتبدو كشبكة.'
        },
        thinkingWay: 'اعتبر display: grid كرسم ألواح الشطرنج المسطرة؛ تخلق شبكة من التقاطعات الأفقية والرأسية لتوزيع العناصر بها.',
        relatedMethods: ['css-grid-template-tracks', 'css-grid-fr-unit'],
        keywords: ['display: grid', 'display: inline-grid', 'grid container', '2D layout', 'CSS grid']
    },
    {
        id: 'css-grid-fr-unit',
        name: 'fr Unit (Fractional Unit)',
        shortDescription: 'وحدة القياس الكسرية الخاصة بالشبكة لتوزيع المساحة الفارغة المتبقية بنسب مرنة.',
        longDescription: 'وحدة قياس ديناميكية معاصرة ابتُكرت حصرياً لـ CSS Grid؛ تعبر عن حصة كسرية (Fraction) من المساحة المتبقية داخل الحاوية بعد خصم المساحات الثابتة بكسل والفواصل.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* تقسيم الصفحة لـ 3 أعمدة بنسب: 1 حصة، 2 حصة، 1 حصة */
.layout-grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}`
        ],
        expectedOutput: [
            'توسيع العمود الأوسط ليأخذ ضعفي مساحة العمودين الجانبيين بالتساوي والترابط.'
        ],
        professionalTips: 'استخدم 1fr بدلاً من % عند بناء الشبكات المحددة بـ gap؛ لأن fr تحسب الفواصل الشاغرة تلقائياً وتمنع ظهور شريط السكرول الأفقي.',
        commonMistakes: {
            wrong: `/* استخدام النسبة المئوية % مع gap فتخرج الشبكة عن الشاشة */
.grid { grid-template-columns: 50% 50%; gap: 20px; }`,
            right: `.grid { grid-template-columns: 1fr 1fr; gap: 20px; }`,
            explanation: 'النسب المئوية تضاف فوق الـ gap (100% + 20px)، بينما fr تنقص الـ gap أولاً ثم تقسم المتبقي.'
        },
        thinkingWay: 'فكر في fr كتقسيم أسهم الكعكة؛ 1fr يعني سهماً واحداً، و 2fr يعني سهمين مضاعفين.',
        relatedMethods: ['css-grid-template-tracks', 'css-grid-repeat-minmax'],
        keywords: ['fr unit', 'fractional unit', 'flex space grid', 'grid ratio', 'responsive fr']
    },
    {
        id: 'css-grid-template-tracks',
        name: 'grid-template-columns & grid-template-rows',
        shortDescription: 'تعيين وتحديد أبعاد وعدد الأعمدة والصفوف الهيكلية للشبكة.',
        longDescription: 'الخاصيتان المسؤولتان عن رسم المسارات (Tracks)؛ تحدد الأولى أعداد وأحجام الأعمدة الأفقية، وتحدد الثانية ارتفاعات الصفوف الرأسية باستخدام البكسل، أو fr، أو النسب.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* شبكة بـ 3 أعمدة وصفين بارتفاعات محددة */
.grid-parent {
  display: grid;
  grid-template-columns: 200px 1fr 300px;
  grid-template-rows: 80px auto;
}`
        ],
        expectedOutput: [
            'رسم مسارات شبكية بعمودين ثابتين بالأطراف وعمود أوسط مرن ممتد.'
        ],
        professionalTips: 'اترك grid-template-rows بقيمة auto في معظم الشبكات الديناميكية؛ لتسمح للصفوف بالتولد التلقائي بحسب كمية الكروت المجلوبة بـ JS.',
        commonMistakes: {
            wrong: `/* وضع ارتفاع ثابت صلب بـ grid-template-rows فتتقاطع الكروت العميقة */
.grid { grid-template-rows: 100px 100px; }`,
            right: `.grid { grid-template-rows: auto; } /* أو minmax(100px, auto) */`,
            explanation: 'الارتفاع الصلب للصف يمنع الكروت النصية الطويلة من التمدد وتطفح الكلمات للخارج.'
        },
        thinkingWay: 'اعتبرها كرسم جدول أعمدة بالمقاسات المحددة قبل ملء البيانات.',
        relatedMethods: ['css-grid-fr-unit', 'css-grid-repeat-minmax'],
        keywords: ['grid-template-columns', 'grid-template-rows', 'grid tracks', 'column sizing']
    },
    {
        id: 'css-grid-repeat-minmax',
        name: 'repeat() & minmax() Functions',
        shortDescription: 'الدوال الرياضية لتكرار المسارات وحظر الأبعاد بين حد أدنى وأقصى.',
        longDescription: 'دوال مدمجة بـ CSS؛ repeat() تختصر تكرار المسارات (مثل repeat(12, 1fr))، و minmax(min, max) تضمن ألا يقل حجم العمود عن حد أدنى وألا يتجاوز حداً أقصى.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* تكرار 4 أعمدة بحجم أدنى 200px وأقصى 1fr */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
}`
        ],
        expectedOutput: [
            'إنشاء 4 أعمدة متساوية لا ينكمش أي منها عن 200px بمرونة عالية.'
        ],
        professionalTips: 'دالة minmax(250px, 1fr) هي الركيزة الأساسية لبناء الشبكات المتجاوبة ذاتياً بدون استخدام Media Queries.',
        commonMistakes: {
            wrong: `/* وضع minmax بدون تحديد الحجم الأعلى المرن 1fr */
.grid { grid-template-columns: repeat(3, minmax(200px, 300px)); }`,
            right: `.grid { grid-template-columns: repeat(3, minmax(200px, 1fr)); }`,
            explanation: 'استخدام 1fr في القيمة الثانية يتيح للأعمدة التمدد لملء كامل الشاشة العريضة.'
        },
        thinkingWay: 'فكر في repeat() كآلة الطباعة المكررة، و minmax() كالمقص المطاطي الممتد بين جدارين.',
        relatedMethods: ['css-grid-autofill-autofit', 'css-grid-fr-unit'],
        keywords: ['repeat()', 'minmax()', 'CSS grid math', 'grid functions', 'responsive grid']
    },
    {
        id: 'css-grid-autofill-autofit',
        name: 'auto-fill vs auto-fit',
        shortDescription: 'السر المعماري لتجاوب الكروت تلقائياً مع الشاشة بدون Media Queries.',
        longDescription: 'كلمات مفتاحية تُستخدم داخل repeat()؛ auto-fill تنشئ أعمدة فارغة مخفية عند اتساع الشاشة، بينما auto-fit تمدد الكروت الحالية لتمتلئ كامل المساحة أفقياً.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `/* شبكة كروت متجاوبة مع كافة الشاشات تلقائياً بسطر واحد */
.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}`
        ],
        expectedOutput: [
            'توزيع الكروت آلياً بـ 4 أعمدة بالحاسوب، وانتقالها لـ 2 ثم 1 بكسرة سطر على الموبايل.'
        ],
        professionalTips: 'القاعدة الذهبية المعتمدة بـ 2026: استخدم auto-fit بـ 90% من الحالات لتضمن تمدد الكروت المتبقية لتغطي كامل عرض الشاشة العريضة.',
        commonMistakes: {
            wrong: `/* استخدام auto-fill والتفاجؤ بترك مسافة فارغة سوداء بجانب الكرت المفرد في الشاشة الكبيرة */
.grid { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); }`,
            right: `.grid { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }`,
            explanation: 'الـ auto-fill تحافظ على أماكن الأعمدة الفارغة، بينما auto-fit تتمدد بالكروت المتاحة لملء السطر.'
        },
        thinkingWay: 'اعتبر auto-fit كركاب حافلة محترمين؛ فور خروج أحد الركاب يتمدد المتبقون لملء المقعد المتروك كاملاً.',
        relatedMethods: ['css-grid-repeat-minmax', 'css-grid-template-tracks'],
        keywords: ['auto-fill', 'auto-fit', 'no media queries responsive', 'fluid grid', 'smart grid']
    },
    {
        id: 'css-grid-template-areas',
        name: 'grid-template-areas',
        shortDescription: 'تخطيط رسم الواجهة ثنائية الأبعاد بالأسماء والمناطق النصية.',
        longDescription: 'أرقى أساليب رسم التخطيطات الكبيرة بـ CSS؛ تتيح تسمية مناطق الشبكة (مثل "header header" "sidebar main") ورص المكونات بها رسمياً بملامح بصرية مقروءة.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* رسم خريطة تصميم المنصة بوضوح بصري رائع */
.app-layout {
  display: grid;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  grid-template-columns: 260px 1fr;
}`
        ],
        expectedOutput: [
            'ربط كل مكون بداخل منطقته المسمات بناءً على الخريطة البصرية المكتوبة.'
        ],
        professionalTips: 'يمكنك إكمال خريطة grid-template-areas برسم نقطة . للمساحات الشاغرة التي تود تركها فارغة دون عناصر بداخل الشبكة.',
        commonMistakes: {
            wrong: `/* كتابة عدد كلمات غير متساوٍ في أسطر الخريطة البصرية */
grid-template-areas: 
  "head head"
  "main"; /* خطأ: السطر الثاني كلمة واحدة والأول كلمتان */`,
            right: `grid-template-areas: 
  "head head"
  "main main";`,
            explanation: 'يجب أن تحتوي جميع أسطر الخريطة على نفس عدد الأعمدة لكي يتعرف عليها المحرك كشبكة متوازنة.'
        },
        thinkingWay: 'فكر في grid-template-areas كخرائط مهندسي المعمار؛ ترسم الغرف ومواقعها بالأسماء قبل البناء.',
        relatedMethods: ['css-grid-area', 'css-grid-template-tracks'],
        keywords: ['grid-template-areas', 'named grid areas', 'CSS layout design', 'macro layout']
    },
    {
        id: 'css-grid-subgrid',
        name: 'subgrid',
        shortDescription: 'خاصية الشبكة الفرعية المتقدمة لربط محاذاة أطفال الكروت بالشبكة الأب.',
        longDescription: 'ميزة معاصرة ثورية (grid-template-columns: subgrid)؛ تتيح للعنصر الابن وراثة واستعمال خطوط وأعمدة الشبكة الخاصة بأبيه المباشر لمكاسب محاذاة عابرة للمكونات.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `/* جعل محتويات الكروت المتباينة تتوحد بمحاذاة خطوط الشبكة الأب */
.card-item {
  display: grid;
  grid-row: span 3;
  grid-template-rows: subgrid; /* استخدام أبعاد صفوف الأب */
}`
        ],
        expectedOutput: [
            'محاذاة عناوين وأزرار كافة الكروت في الصف على خط أفق واحد تماماً مهما اختلف طول النصوص.'
        ],
        professionalTips: 'تُحل ميزة subgrid أكبر عقدة تاريخية بمكونات الواجهات؛ وهي عدم محاذاة أزرار عناوين الكروت المتلاطمة بصفوف مختلفة.',
        commonMistakes: {
            wrong: `/* كتابة subgrid كقيمة لـ display بدلاً من grid-template */
.box { display: subgrid; }`,
            right: `.box { display: grid; grid-template-rows: subgrid; }`,
            explanation: 'الـ subgrid تكتب كقيمة لـ grid-template-columns أو grid-template-rows وليست كقيمة لـ display.'
        },
        thinkingWay: 'اعتبر subgrid كالنوافذ الزجاجية الشفافة بداخل الغرفة؛ ترى وتلتزم بنفس خطوط جدران البناية الرئيسية.',
        relatedMethods: ['css-grid-display', 'css-grid-template-tracks'],
        keywords: ['subgrid', 'nested grid', 'card alignment subgrid', 'modern CSS grid']
    },
    {
        id: 'css-grid-gap',
        name: 'gap (Grid Spacing)',
        shortDescription: 'الفواصل البينية الشفافة بين صفوف وأعمدة الشبكة.',
        longDescription: 'الخاصية الموحدة لتحديد الفواصل البينية الرأسية والأفقية الممتدة بين خلايا الشبكة، وتضمن عدم إضافة أي هوامش على الحواف الخارجية للشبكة.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `.grid-container {
  display: grid;
  gap: 1.5rem; /* فاصل بين كافة الصفوف والأعمدة */
}`
        ],
        expectedOutput: [
            'إيجاد مسافات فاصلة متساوية بـ 1.5rem حصراً بين تقاطعات الكروت.'
        ],
        professionalTips: 'يمكنك تحديد فاصلين مختلفين بدقّة عبر كتابة: gap: 2rem 1rem (الأولى للصفوف الرأسية والثانية للأعمدة الأفقية).',
        commonMistakes: {
            wrong: `/* استخدام الاسم القديم grid-gap في مشاريع لعام 2026 */
.grid { grid-gap: 20px; }`,
            right: `.grid { gap: 20px; }`,
            explanation: 'الخاصية gap أصبحت معياراً عالمياً موحداً لكل من Flexbox و CSS Grid على حد سواء.'
        },
        thinkingWay: 'فكر في gap كالشوارع والممرات الفاصلة المتروكة بين المباني بداخل المخطط السكني.',
        relatedMethods: ['css-flexbox-gap'],
        keywords: ['gap', 'grid gap', 'row-gap', 'column-gap', 'grid spacing']
    },
    {
        id: 'css-grid-justify-items',
        name: 'justify-items',
        shortDescription: 'محاذاة المحتوى الداخلي لجميع الخلايا أفقياً على المحور المباشر.',
        longDescription: 'خاصية تُكتب على حاوية الشبكة لتحديد محاذاة كافة أطفال الخلايا أفقياً بداخل مربعاتهم الشبكية الخاصة (stretch, start, center, end).',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `/* تمركز المحتوى الداخلي لكل خلية بالشبكة أفقياً */
.icon-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
}`
        ],
        expectedOutput: [
            'تمركز الأيقونات في منتصف العرض الأفقي لكل خلية مع الحفاظ على مقاس الخلية الأصلي.'
        ],
        professionalTips: 'القيمة الافتراضية لـ justify-items هي stretch؛ إذا قمت بتغييرها إلى center، سينكمش عرض العناصر المباشرة ليتطابق مع حجم محتواها الصافي.',
        commonMistakes: {
            wrong: `/* استخدام justify-items لتمركز الشبكة نفسها في منتصف الشاشة */
.grid { justify-items: center; }`,
            right: `.grid { justify-content: center; }`,
            explanation: 'الـ justify-items تحاذي المحتوى الداخلي للخلايا، بينما justify-content تحاذي هيكل الشبكة كاملاً.'
        },
        thinkingWay: 'اعتبر justify-items كوضع الكأس في منتصف المفرش الأفقي الفردي المخصص له.',
        relatedMethods: ['css-grid-align-items', 'css-grid-place-items'],
        keywords: ['justify-items', 'grid item alignment', 'horizontal cell align']
    },
    {
        id: 'css-grid-align-items',
        name: 'align-items',
        shortDescription: 'محاذاة المحتوى الداخلي لجميع الخلايا رأسياً على المحور العمودي.',
        longDescription: 'خاصية تُكتب على الحاوية لتحديد التمركز والارتفاع الرأسي لمحتويات الخلايا بالكامل بداخل مربعاتها (stretch, start, center, end).',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `/* التمركز الرأسي المباشر لمحتويات خلايا الشبكة */
.dashboard-grid {
  display: grid;
  align-items: center;
}`
        ],
        expectedOutput: [
            'تمركز الكروت والمحتويات رأسياً في منتصف ارتفاع الصف الخاص بها.'
        ],
        professionalTips: 'دمج align-items: center مع justify-items: center يُعد أسرع وأقوى أسلوب لتمركز العناصر بالمنتصف التام بالويب.',
        commonMistakes: {
            wrong: `/* تغيير align-items إلى center والتساؤل عن سبب عدم تمدد خلفيات الكروت بأسفل الصف */
.grid { align-items: center; }`,
            right: `.grid { align-items: stretch; }`,
            explanation: 'الـ stretch هي القيمة الوحيدة التي تجبر الكروت على التمدد لتتساوى أطوالها رأسياً بالصف.'
        },
        thinkingWay: 'فكر في align-items كضبط الارتفاع الرأسي للوحة بداخل الإطار الخشبي المحيط بها.',
        relatedMethods: ['css-grid-justify-items', 'css-grid-place-items'],
        keywords: ['align-items', 'grid vertical align', 'cell align', 'stretch']
    },
    {
        id: 'css-grid-place-items',
        name: 'place-items',
        shortDescription: 'خاصية الاختصار المدمجة لتعيين align-items و justify-items بكلمة واحدة.',
        longDescription: 'خاصية مختصرة فائقة القوة تتيح محاذاة المحتوى الداخلي لخلايا الشبكة أفقياً ورأسياً بأسلوب مدمج؛ حيث تقبل وسيطين: (place-items: [align] [justify]).',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* التمركز الشامل النقي بمنتصف الشاشة بكسرة سطر واحدة بـ CSS */
.hero-center {
  display: grid;
  place-items: center; /* تمركز رأسي وأفقي ناصع بكلمة واحدة */
}`
        ],
        expectedOutput: [
            'تمركز المحتوى في منتصف الخلية بظرف رأسي وأفقي بامتياز.'
        ],
        professionalTips: 'عبارة display: grid; place-items: center; هي الاختصار المعماري الأسرع والأكثر استخداماً بـ 2026 لتمركز المحتوى التام بداخل الكروت والصفحات.',
        commonMistakes: {
            wrong: `/* كتابة وسيط واحد وتوقع عدم تطبيقه على كلا المحورين */
place-items: center;`,
            right: `/* وسيط واحد يطبقه على المحورين الرأسي والأفقي معاً آلياً */`,
            explanation: 'عند صياغة كلمة واحدة مثل place-items: center، يطبقها المتصفح تلقائياً على align و justify معاً.'
        },
        thinkingWay: 'اعتبر place-items كالبوصلة المباشرة التي تضع الشيء في النقطة (0,0) بمنتصف الصندوق.',
        relatedMethods: ['css-grid-justify-items', 'css-grid-align-items'],
        keywords: ['place-items', 'place-items: center', 'perfect centering', 'grid shorthand']
    },
    {
        id: 'css-grid-justify-content',
        name: 'justify-content',
        shortDescription: 'محاذاة هيكل مجموع أعمدة الشبكة ككل أفقياً بداخل الحاوية الأب.',
        longDescription: 'خاصية تتحكم بتموضع ومحاذاة كتل أعمدة الشبكة الإجمالية عندما يكون المجموع الكلي لأعراض الأعمدة أقل من العرض الكامل للحاوية.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `/* تمركز هيكل الأعمدة أفقياً بوسط الحاوية العريضة */
.fixed-grid {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  justify-content: center;
}`
        ],
        expectedOutput: [
            'تجمع الأعمدة الثلاثة بمنتصف الشاشة وترك مساحات فارغة متساوية بالأطراف.'
        ],
        professionalTips: 'تحدث فائدة justify-content فقط إذا كانت أبعاد الأعمدة محددة بقيم صلبة (كالبكسل) وكان مجموعها أصغر من عرض الشاشة المتاحة.',
        commonMistakes: {
            wrong: `/* استخدام justify-content مع أعمدة مقاسها 1fr والتساؤل عن سبب عدم التمركز */
.grid { grid-template-columns: 1fr 1fr; justify-content: center; }`,
            right: `/* fr تستهلك كل المساحة المتاحة أصلاً فلا تترك فراغاً للتمركز */`,
            explanation: 'الوحدة fr تمتص كامل الفراغ المتبقي بالتالي لا تترك مسافات هشة لعمل justify-content.'
        },
        thinkingWay: 'فكر في justify-content كتحريك طقم الكنبات بالكامل ليمين أو يسار أو منتصف المجلس.',
        relatedMethods: ['css-grid-align-content', 'css-grid-place-content'],
        keywords: ['justify-content', 'grid content alignment', 'center grid', 'space-between grid']
    },
    {
        id: 'css-grid-align-content',
        name: 'align-content',
        shortDescription: 'محاذاة هيكل مجموع صفوف الشبكة ككل رأسياً بداخل الحاوية الأب.',
        longDescription: 'خاصية تتحكم بالتموضع والتباعد الرأسي لكتل صفوف الشبكة بالكامل عندما يكون الارتفاع الكلي للصفوف أقل من الارتفاع المتاح بالبوكس.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `/* توزيع الصفوف بمسافات متساوية رأسياً بالبوكس المرتفع */
.tall-grid-container {
  display: grid;
  height: 100vh;
  align-content: space-between;
}`
        ],
        expectedOutput: [
            'دفع الصف الأول لأعلى الشاشة والصف الأخير لأسفلها وتوزيع باقي الصفوف بالوسط.'
        ],
        professionalTips: 'تستخدم بكثرة عند تصميم واجهات التطبيقات المثبتة الارتفاع (100vh) لتوزيع صفوف الأزرار بأعلى وأسفل الواجهة.',
        commonMistakes: {
            wrong: `/* استخدام align-content على حاوية ليس لها height ثابت محدد */
.grid { align-content: space-between; }`,
            right: `.grid { min-height: 500px; align-content: space-between; }`,
            explanation: 'بدون ارتفاع صريح للحاوية الأب، ينكمش الارتفاع على الصفوف فلا توجد مساحة رأسية للتوزيع.'
        },
        thinkingWay: 'اعتبر align-content كرفع أو خفض الأرفف المكتملة داخل الخزانة الرأسية.',
        relatedMethods: ['css-grid-justify-content', 'css-grid-place-content'],
        keywords: ['align-content', 'grid vertical content', 'space-between rows']
    },
    {
        id: 'css-grid-place-content',
        name: 'place-content',
        shortDescription: 'خاصية الاختصار المدمجة لتعيين align-content و justify-content معاً.',
        longDescription: 'خاصية مختصرة فائقة السلاسة لتحديد تموضع وتوزيع هيكل الشبكة كاملاً أفقياً ورأسياً بداخل الحاوية بكسرة سطر واحدة.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `/* تمركز هيكل الشبكة المكتمل في منتصف الحاوية العملاقة */
.modal-grid-wrapper {
  display: grid;
  place-content: center;
}`
        ],
        expectedOutput: [
            'تمركز كتلة صفوف وأعمدة الشبكة بمنتصف الحاوية رأسياً وأفقياً.'
        ],
        professionalTips: 'استخدم place-content: center لتمركز المخططات المحددة الأبعاد بوسط الصفحات بأسلوب عالي النظافة.',
        commonMistakes: {
            wrong: `/* الخلط بين place-content و place-items */
.grid { place-content: center; } /* يحاذي هيكل الشبكة كاملاً */`,
            right: `.grid { place-items: center; } /* يحاذي عناصر الخلايا الداخلية */`,
            explanation: 'الـ place-content تتعامل مع هيكل الشبكة ككتلة، بينما place-items تتعامل مع الأبناء بالخلايا.'
        },
        thinkingWay: 'فكر في place-content كـ نقل السجادة المنسوجة بالكامل لوضعها بسنتر الغرفة.',
        relatedMethods: ['css-grid-place-items', 'css-grid-justify-content'],
        keywords: ['place-content', 'grid content placement', 'center full grid']
    },
    {
        id: 'css-grid-column',
        name: 'grid-column (start / end / span)',
        shortDescription: 'دمج وتمديد خلايا الكرت أفقياً عبر الأعمدة باستخدام span أو الخطوط.',
        longDescription: 'خاصية تُكتب على الابن (Grid Item) لدمجه أفقياً عبر تحديد خط البداية والنهاية، أو استخدام الصيغة المعاصرة السهلة grid-column: span 2 المباشرة.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* تمديد الكرت الأول ليحتل مساحة عمودين أفقياً */
.featured-card {
  grid-column: span 2;
}

/* التمديد من الخط الأول حتى الخط الأخير بالكامل */
.full-width-banner {
  grid-column: 1 / -1;
}`
        ],
        expectedOutput: [
            'تمدد الكرت المميز ليأخذ عرض خليتين مجاورتين بالشبكة.'
        ],
        professionalTips: 'الرمز -1 في الصياغة grid-column: 1 / -1 يعبر عن آخر خط بالشبكة؛ وهو الخيار المعماري الأفضل لجعل البنر يغطي كامل عرض الأعمدة دائماً.',
        commonMistakes: {
            wrong: `/* كتابة span برقم يجاوز عدد أعمدة الشبكة الكلي فتتفكك الشبكة */
.card { grid-column: span 10; /* والشبكة 3 أعمدة فقط */ }`,
            right: `.card { grid-column: 1 / -1; }`,
            explanation: 'طلب span أكبر من سعة الشبكة يجبر المتصفح على إنشاء أعمدة وهمية زائدة.'
        },
        thinkingWay: 'اعتبر grid-column كمقص الدمج الأفقي؛ تطلب منه أكل خليتين مجاورتين لتصبحا صالة واحدة.',
        relatedMethods: ['css-grid-row', 'css-grid-area'],
        keywords: ['grid-column', 'span', 'grid-column: 1 / -1', 'merge columns', 'grid item span']
    },
    {
        id: 'css-grid-row',
        name: 'grid-row (start / end / span)',
        shortDescription: 'دمج وتمديد خلايا الكرت رأسياً عبر الصفوف بـ CSS Grid.',
        longDescription: 'خاصية تُكتب على العنصر الابن لدمجه رأسياً ليمتد عبر عدة صفوف متتالية لأسفل باستعمال الصيغة grid-row: span 2 لإنشاء المخططات الجذابة.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* جعل الكرت المتميز يمتد رأسياً عبر صفين متتاليين (Masonry Style) */
.tall-card {
  grid-row: span 2;
}`
        ],
        expectedOutput: [
            'امتداد الكرت رأسياً ليحتل ارتفاع صفين متتاليين بداخل الشبكة.'
        ],
        professionalTips: 'استخدم grid-row: span 2 لإنشاء المخططات الصحفية المعاصرة (Bento Grid / Masonry Layouts) بأسلوب جذاب.',
        commonMistakes: {
            wrong: `/* استخدام grid-row مع إغفال ضبط ارتفاع الحاوية الأب فتتداخل الصفوف */
.card { grid-row: span 2; }`,
            right: `.grid { grid-template-rows: repeat(auto-fill, minmax(150px, auto)); }`,
            explanation: 'دمج الصفوف يتطلب تحديد ارتفاعات مرنة مساعدة للصفوف لكي يتمدد الكرت بنظافة.'
        },
        thinkingWay: 'فكر في grid-row كـ فتح باب رأسي بين طابقين في البناية لدمجهما رأسياً.',
        relatedMethods: ['css-grid-column', 'css-grid-area'],
        keywords: ['grid-row', 'grid row span', 'merge rows', 'Bento grid', 'vertical span']
    },
    {
        id: 'css-grid-area',
        name: 'grid-area',
        shortDescription: 'توطين وتعين العنصر المباشر بداخل المنطقة المسمات بـ grid-template-areas.',
        longDescription: 'خاصية تُكتب على الابن لإسناد اسمه المباشر المكتوب بالخريطة المعمارية المحددة في الأب، ليتمركز العنصر بداخل منطقته فوراً.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* إسناد المكون لمنطقته المحددة بالخريطة */
.main-header {
  grid-area: header;
}

.main-sidebar {
  grid-area: sidebar;
}`
        ],
        expectedOutput: [
            'قفز المكون وتوطينه بدقة متناهية بداخل المساحة المخصصة له بالخريطة.'
        ],
        professionalTips: 'يمكنك استخدام grid-area أيضاً كخاصية مختصرة مجمعة لتعيين الأرقام الأربعة (row-start / col-start / row-end / col-end) بسطر واحد.',
        commonMistakes: {
            wrong: `/* كتابة اسم المنطقة بـ grid-area بدون مطابقة اسمها بالخريطة */
.header { grid-area: HeaderArea; } /* والاسم بالخريطة header */`,
            right: `.header { grid-area: header; }`,
            explanation: 'أسماء المناطق حساسة لحالة الأحرف والمطابقة النصية الدقيقة.'
        },
        thinkingWay: 'اعتبر grid-area كاللوحة الاسمية المعلقة على باب الغرفة؛ يقرأها المكون ويدخل لغرفته المحددة.',
        relatedMethods: ['css-grid-template-areas'],
        keywords: ['grid-area', 'named area assignment', 'grid component placement']
    },
    {
        id: 'css-grid-justify-self',
        name: 'justify-self',
        shortDescription: 'تجاوز محاذاة الأب وتغيير تمركز عنصر فردي محدد أفقياً بالخلية.',
        longDescription: 'خاصية تُكتب على الابن (Grid Item) لتسمح له بالاستقلال بمحاذاة نفسه أفقياً بداخل مربعه الشبكي (start, center, end, stretch) وتجاوز justify-items الأب.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `/* دفع الأيقونة الفرعية لأقصى يمين الخلية بمفردها */
.status-icon {
  justify-self: end;
}`
        ],
        expectedOutput: [
            'محاذاة العنصر المباشر لطرف الخلية الأيمن بقرار فردي خاص.'
        ],
        professionalTips: 'استخدم justify-self: center لتمركز زر أو شارة فرعية بداخل خلية شبكية دون التأثير على بقية جيرانها.',
        commonMistakes: {
            wrong: `/* كتابة justify-self على الحاوية الأب بدلاً من العنصر الابن */
.grid { justify-self: center; }`,
            right: `.grid-item { justify-self: center; }`,
            explanation: 'الخصائص المنتهية بـ -self تُكتب حصراً على العناصر الفرعية (Items) وليس الحاوية.'
        },
        thinkingWay: 'فكر في justify-self كقرار الشخص الانزلاق لأقصى يمين المقعد المخصص له.',
        relatedMethods: ['css-grid-align-self', 'css-grid-place-self'],
        keywords: ['justify-self', 'override grid align', 'individual horizontal align']
    },
    {
        id: 'css-grid-align-self',
        name: 'align-self',
        shortDescription: 'تجاوز محاذاة الأب وتغيير تمركز عنصر فردي محدد رأسياً بالخلية.',
        longDescription: 'خاصية تُكتب على الابن لتسمح له بكسر قاعدة المحاذاة الرأسية العامة المحددة في align-items الأب، واستقلال محاذاة نفسه رأسياً.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `/* التصاق زر السلة بقاع الخلية رأسياً بمفرده */
.add-to-cart-btn {
  align-self: end;
}`
        ],
        expectedOutput: [
            'نزول الزر لأسفل قاع المربع الشبكي للخلية بقرار فردي.'
        ],
        professionalTips: 'تفيد align-self: end جداً لتثبيت أزرار الشراء في أسفل خلايا الكروت المتباينة الطول لتبدو الواجهة متناسقة بالأسفل.',
        commonMistakes: {
            wrong: `/* استخدام align-self على عنصر غير مندرج تحت Flex أو Grid */
.normal-div { align-self: center; }`,
            right: `/* تعمل فقط إذا كان الأب المباشر يمتلك display: grid أو flex */`,
            explanation: 'الخصائص التفاعلية -self تتطلب وجود سياق تخطيط مرن أو شبكي بالأب.'
        },
        thinkingWay: 'اعتبر align-self كجلوس الجالس على الأرض بدلاً من الوقوف في منتصف الخلية.',
        relatedMethods: ['css-grid-justify-self', 'css-grid-place-self'],
        keywords: ['align-self', 'grid align self', 'individual vertical align']
    },
    {
        id: 'css-grid-place-self',
        name: 'place-self',
        shortDescription: 'خاصية الاختصار المدمجة لتعيين align-self و justify-self لعنصر فردي.',
        longDescription: 'خاصية مختصرة فائقة الأناقة تُكتب على العنصر الابن لتحديد محاذاته المباشرة أفقياً ورأسياً بداخل خليته الخاصة بكلمة واحدة.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `/* تمركز العنصر الفردي بوسط خليته المباشرة تماماً بكلمة واحدة */
.special-badge {
  place-self: center;
}`
        ],
        expectedOutput: [
            'تمركز الشارة بمنتصف المربع الشبكي المخصص لها أفقياً ورأسياً.'
        ],
        professionalTips: 'صياغة place-self: center هي الأسرع لتمركز عنصر فرعي منفرد بداخل الخلية المحددة له بالشبكة.',
        commonMistakes: {
            wrong: `/* كتابة place-self على الأب بدلاً من place-items */
.grid { place-self: center; }`,
            right: `.grid { place-items: center; }`,
            explanation: 'الأب يتطلب place-items للأطفال، بينما الابن يستخدم place-self لنفسه.'
        },
        thinkingWay: 'فكر في place-self كـ الوقوف بالنقطة الذهبية بالمنتصف المباشر لصحن الخلية.',
        relatedMethods: ['css-grid-place-items', 'css-grid-justify-self'],
        keywords: ['place-self', 'individual centering', 'place-self: center', 'grid item shorthand']
    }
];