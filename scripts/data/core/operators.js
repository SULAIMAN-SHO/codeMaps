export const operatorsData = [
    {
        id: 'operator-assignment',
        name: '=',
        shortDescription: 'عامل التعيين الأساسي لإسناد وتخزين قيمة داخل متغير في الذاكرة.',
        longDescription: 'يقوم عامل التعيين (=) بأخذ القيمة المحسوبة من الجانب الأيمن (Right-hand side) وإسنادها أو حفظها مباشرة في المتغير البرمجي الموجود بالجانب الأيسر (Left-hand side). يتم تقييمه وتنفيذه دوماً من اليمين إلى اليسار.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// تعيين قيمة الاسم وتحديثها لاحقاً
let userName = 'SULAIMAN';
userName = 'SULAIMAN SHO';
console.log(userName);`
        ],
        expectedOutput: [
            "SULAIMAN SHO"
        ],
        professionalTips: 'تجنب تماماً الخلط بين عامل التعيين المفرد (=) وعوامل فحص التساوي (== أو ===)؛ فالأول يقوم بالكتابة والتعيين بالذاكرة بينما البقية للمقارنة فقط.',
        commonMistakes: {
            wrong: `let age = 24;
if (age = 18) { // ستقوم بالتعيين وتنجح دائماً بالخطأ لأن 18 قيمة Truthy!
  console.log('مسموح');
}`,
            right: `let age = 24;
if (age === 18) { // الفحص السليم دون التعديل على القيمة بالذاكرة
  console.log('مسموح');
}`,
            explanation: 'استخدام عامل التعيين (=) داخل كتلة الشرط يغير قيمة المتغير الفعلي بالذاكرة، وبما أن القيمة الجديدة المعينة تختلف عن الصفر، يعتبرها المحرك قيمة حقيقية وينفذ الشرط دائماً بالخطأ.'
        },
        thinkingWay: 'استخدم هذا العامل الأساسي في مطلع كودك لتعريف المتغيرات وحفظ مخرجات الدوال الحسابية بالذاكرة.',
        relatedMethods: ['operator-strict-equality'],
        keywords: ['=', 'assignment', 'set value', 'variable assignment', 'equal sign']
    },
    {
        id: 'operator-addition',
        name: '+',
        shortDescription: 'عامل الجمع الرياضي لجمع الأرقام أو دمج السلاسل النصية متتابعة.',
        longDescription: 'عامل ثنائي يقوم بجمع قيمتين عدديتين وإرجاع حاصل الجمع؛ فإذا كان أحد الطرفين سلسلة نصية (String)، يتحول سلوكه تلقائياً لدمج النصوص (Concatenation) لإنتاج نص جديد.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// جمع الأرقام ودمج النصوص تفاعلياً
console.log(50 + 60);
console.log('Welcome' + ' ' + 'JavaScript');`
        ],
        expectedOutput: [
            "110\\nWelcome JavaScript"
        ],
        professionalTips: 'احذر من خلط الأرقام مع النصوص عند استخدام عامل الجمع (+)؛ فالمتصفح يمنح الأولوية دائماً لدمج النصوص على حساب العمليات الحسابية في حال تداخل الأنواع.',
        commonMistakes: {
            wrong: `const sum = '10' + 5; // توقع الحصول على 15 بالجمع التلقائي`,
            right: `const sum = Number('10') + 5; // تحويل النص لرقم صريح أولاً للحساب السليم
console.log(sum); // يطبع 15`,
            explanation: 'عند تداخل النصوص مع الأرقام، يقوم محرك جافا سكريبت بتحويل الرقم 5 إلى نص ودمجه ليصبح الناتج النصي "105" بدلاً من إتمام العملية الحسابية.'
        },
        thinkingWay: 'استخدم هذا العامل عندما تريد إجراء عمليات رياضية تراكمية أو عند الحاجة لدمج نصوص برمجية بسيطة بالتتابع.',
        relatedMethods: ['operator-subtraction'],
        keywords: ['+', 'addition', 'concat', 'sum', 'math plus', 'combine strings']
    },
    {
        id: 'operator-subtraction',
        name: '-',
        shortDescription: 'عامل الطرح الرياضي لإنقاص قيمة عددية من أخرى مباشرة.',
        longDescription: 'عامل ثنائي يقوم بطرح القيمة الرقمية اليمنى من القيمة الرقمية اليسرى وإرجاع الفارق الحسابي. يقوم بمحاولة تحويل النصوص الرقمية إلى أرقام حقيقية تلقائياً لإتمام العملية (Type Coercion).',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// حساب الطرح وتوضيح التحويل التلقائي للنصوص الرقمية
console.log(100 - 40);
console.log('50' - 10); // تحويل تلقائي للنص وإتمام الطرح`
        ],
        expectedOutput: [
            "60\\n40"
        ],
        professionalTips: 'على الرغم من قدرة الطرح (-) على تحويل النصوص الرقمية تلقائياً، يفضل دوماً تحويلها صراحة بـ Number() للحفاظ على وضوح سلوكيات الأنماط بكودك البرمجي.',
        commonMistakes: {
            wrong: `const res = 'Welcome' - 5; // محاولة طرح قيمة نصية غير رقمية بالكامل`,
            right: `const res = 'Welcome' - 5;
console.log(res); // يطبع NaN كإشارة لعملية غير صالحة حسابياً بالذاكرة`,
            explanation: 'عند محاولة طرح نصوص غير رقمية، يفشل المحرك في تحويلها لقيم عددية ويرجع القيمة الخاصة بالعمليات غير الصالحة NaN (Not a Number).'
        },
        thinkingWay: 'استخدم هذا العامل في العمليات الحسابية لحساب الفروقات، الأسعار المتبقية، والخصومات بالفواتير البرمجية.',
        relatedMethods: ['operator-addition'],
        keywords: ['-', 'subtraction', 'minus', 'math minus', 'coercion subtraction']
    },
    {
        id: 'operator-multiplication',
        name: '*',
        shortDescription: 'عامل الضرب الرياضي لحساب حاصل ضرب قيمتين عدديتين.',
        longDescription: 'عامل ثنائي يقوم بضرب القيمة اليسرى في القيمة اليمنى بالذاكرة وإرجاع الحاصل. يتبع قواعد التحويل التلقائي للأرقام الكامنة بداخل السلاسل النصية.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// حساب حاصل الضرب المباشر بالذاكرة
const result = 50 * 60;
console.log(result);`
        ],
        expectedOutput: [
            "3000"
        ],
        professionalTips: 'انتبه لترتيب العمليات الحسابية القياسي (Operator Precedence)؛ حيث يملك عامل الضرب (*) أولوية تنفيذ أعلى من عاملي الجمع (+) والطرح (-).',
        commonMistakes: {
            wrong: `const total = 5 + 10 * 2; // يتوقع حساب الجمع أولاً للحصول على 30`,
            right: `const total = (5 + 10) * 2; // حصر الشروط بالأقواس لفرض أولوية الجمع أولاً
console.log(total); // يطبع 30 بنجاح`,
            explanation: 'وفقاً لقواعد الأسبقية الرياضية بالمحرك، يتم حساب الضرب (*) أولاً (10 * 2 = 20) ثم يضاف الناتج لـ 5 ليعطي 25؛ والأقواس تكسر هذه الأسبقية لصالح الجمع.'
        },
        thinkingWay: 'استخدم عامل الضرب لحساب المضاعفات، الضرائب، الكميات الإجمالية، وحساب مساحات واجهات العرض المرنة.',
        relatedMethods: ['operator-division'],
        keywords: ['*', 'multiplication', 'math multiply', 'times', 'precedence multiplication']
    },
    {
        id: 'operator-division',
        name: '/',
        shortDescription: 'عامل القسمة الرياضي لتقسيم قيمة عددية على أخرى مباشرة.',
        longDescription: 'عامل ثنائي يقوم بتقسيم القيمة اليسرى (البسط) على القيمة اليمنى (المقام) وإرجاع الناتج العشري أو الصحيح المفسر بالذاكرة.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// حساب حاصل القسمة المباشر بالمتصفح
console.log(60 / 5);`
        ],
        expectedOutput: [
            "12"
        ],
        professionalTips: 'القسمة على الصفر في جافا سكريبت لا تتسبب في انهيار التطبيق أو إيقاف السكربت؛ بل ترجع القيمة الرياضية اللانهائية Infinity (أو -Infinity للأعداد السالبة).',
        commonMistakes: {
            wrong: `const rate = 10 / 0; // يتوقع حدوث خطأ برمجي يوقف التنفيذ
console.log(rate); // لا ينهار بل يطبع Infinity بصمت تام بالكونسول!`,
            right: `const denominator = 0;
if (denominator !== 0) {
  const rate = 10 / denominator;
} else {
  console.log('المقام صفر، لا يمكن إتمام عملية القسمة الحقيقية حالياً'); // تأمين الفحص
}`,
            explanation: 'محرك جافا سكريبت مجهز لتفادي توقف السكربت عند القسمة على صفر، ويرجع ثابت اللانهائية الإحصائي المدمج Infinity كإشارة للعملية.'
        },
        thinkingWay: 'استخدم عامل القسمة لحساب الحصص الفردية، توزيع العناصر بالتساوي على الشاشة، وتحديد نسب ومعدلات التقدم المئوية.',
        relatedMethods: ['operator-multiplication'],
        keywords: ['/', 'division', 'math divide', 'slash', 'Infinity division']
    },
    {
        id: 'operator-modulo',
        name: '%',
        shortDescription: 'عامل باقي القسمة (Modulo) لإرجاع المتبقي الصحيح بعد قسمة عددين.',
        longDescription: 'عامل ثنائي يقوم بقسمة العدد الأيسر على الأيمن قسمة صحيحة متكررة، ويرجع القيمة الرقمية المتبقية التي لم تقبل القسمة في الدورة الأخيرة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// فحص باقي القسمة لمعرفة الأعداد الزوجية
const isEven = 10 % 2 === 0;
console.log('باقي قسمة 10 على 2:', 10 % 2);
console.log('هل الرقم 10 زوجي؟', isEven);`
        ],
        expectedOutput: [
            "باقي قسمة 10 على 2: 0\\nهل الرقم 10 زوجي؟ true"
        ],
        professionalTips: 'الاستخدام الاحترافي الأكثر شيوعاً لعامل باقي القسمة (%) هو التحقق من الأعداد الفردية والزوجية بالفحص المباشر مع الرقم 2؛ فإذا كان الناتج 0 فالعدد زوجي، وإذا كان 1 فالعدد فردي.',
        commonMistakes: {
            wrong: `// الخلط بين باقي القسمة ونسبة مئوية حسابية وتوقع الحصول على معدلات مئوية
const tax = 100 % 15; // يعتقد أن هذا يحسب 15% من الـ 100!
console.log(tax); // يطبع 10 (باقي القسمة الفعلي) وليس قيمة النسبة!`,
            right: `// استخدام الحساب الرياضي القياسي للنسب المئوية
const tax = 100 * (15 / 100);
console.log(tax); // يطبع القيمة الصحيحة للنسبة وهي 15`,
            explanation: 'الرمز % في البرمجة مخصص كلياً لعملية باقي القسمة الرياضية (Remainder)، ولا يمتلك أي رابط برمي بحساب النسب المئوية الكسرية.'
        },
        thinkingWay: 'استخدم باقي القسمة (%) عندما تريد تحديد الأنماط الدورية (مثل تلوين صفوف الجداول بالتناوب فردي/زوجي)، أو لتدوير العناصر بشكل حلقي داخل مصفوفة مغلقة.',
        relatedMethods: ['operator-division'],
        keywords: ['%', 'modulo', 'remainder', 'even odd check', 'modulo operator']
    },
    {
        id: 'operator-exponentiation',
        name: '**',
        shortDescription: 'عامل الأس الحسابي الحديث لرفع الرقم الأساس لقيمة القوة الممررة.',
        longDescription: 'عامل ثنائي تم إدخاله في ES7 لحساب الأسس (Exponentiation)؛ يقوم بضرب العدد الأيسر (الأساس) في نفسه عدداً من المرات مساوياً للعدد الأيمن (الأس). يعادل وظيفياً الدالة القديمة Math.pow().',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// حساب الأس المباشر بالذاكرة
const result = 2 ** 3; // 2 أس 3
console.log('الناتج الحسابي:', result);`
        ],
        expectedOutput: [
            "الناتج الحسابي: 8"
        ],
        professionalTips: 'استخدم عامل الأس المدمج والحديث (**) كمعيار نظيف لعام 2026 بدلاً من استدعاء الدوال القديمة والمطولة مثل Math.pow()؛ لجعل كودك الحسابي أكثر وضوحاً ومطابقة للرموز الرياضية.',
        commonMistakes: {
            wrong: `const area = 5 **; // نسيان كتابة قيمة الأس الأيمن يسبب خطأ تجميعي مباشر SyntaxError`,
            right: `const area = 5 ** 2; // تمرير الأساس والأس بدقة كاملة بالسطر
console.log(area); // يطبع 25 بنجاح`,
            explanation: 'عامل الأس عامل ثنائي (Binary Operator) يتطلب بالضرورة وجود طرفين نشطين بالمعادلة لإتمام تتابع الضرب التكراري بالذاكرة.'
        },
        thinkingWay: 'استخدم عامل الأس (**) عند إجراء العمليات الحسابية المتطورة، حساب مساحات اللوحات، أو فك اللوغاريتمات وحساب المسافات القطرية المربعة لواجهات تطبيقك.',
        relatedMethods: ['operator-multiplication'],
        keywords: ['**', 'exponentiation', 'power', 'math power', 'double asterisk', 'ES7 exponent']
    },
    {
        id: 'operator-assign-addition',
        name: '+=',
        shortDescription: 'عامل التعيين بالجمع لزيادة قيمة المتغير وإعادة تعيين المجموع بالذاكرة.',
        longDescription: 'عامل تعيين مركب يقوم بجمع القيمة اليمنى مع القيمة الحالية للمتغير الأيسر، وإعادة كتابة وحفظ حاصل الجمع النهائي بداخل نفس المتغير بالذاكرة بخطوة واحدة مقتضبة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// زيادة رصيد محفظة العميل تفاعلياً بضربة واحدة
let walletBalance = 50;
walletBalance += 10; // تعادل بالتفصيل: walletBalance = walletBalance + 10
console.log('الرصيد بعد التحديث:', walletBalance);`
        ],
        expectedOutput: [
            "الرصيد بعد التحديث: 60"
        ],
        professionalTips: 'هذا العامل رائع جداً لتبسيط ودمج السلاسل النصية التراكمية متتالية بداخل حلقة تكرار لإنتاج هياكل HTML تفاعلية نظيفة دون تكرار أسماء المتغيرات الطويلة.',
        commonMistakes: {
            wrong: `let count = 10;
count =+ 5; // خطأ إملائي بقلب اتجاه العوامل بالسطر البرمجي!`,
            right: `let count = 10;
count += 5; // الاتجاه الصحيح لعامل التعيين المركب المعتمد
console.log(count); // يطبع 15 بنجاح، بينما الكود الخاطئ يطبع 5 ويعيد التعيين فقط!`,
            explanation: 'كتابة (=+) تفصل العوامل برمجياً؛ حيث يترجمها المحرك كعامل تعيين مفرد (=) متبوعاً بقيمة رقمية موجبة (+5)، مما يؤدي لإعادة تعيين قيمة المتغير لـ 5 وإلغاء القيمة 10 السابقة تماماً.'
        },
        thinkingWay: 'استخدم عامل التعيين بالجمع (+=) لتبسيط عمليات التحديث التراكمية للمؤشرات الرقمية، أرصدة سلال الشراء، أو لتجميع وتشييد الستايلات وسلاسل النصوص ديناميكياً.',
        relatedMethods: ['operator-addition'],
        keywords: ['+=', 'addition assignment', 'compound assignment', 'plus equals', 'variable increment']
    },
    {
        id: 'operator-assign-subtraction',
        name: '-=',
        shortDescription: 'عامل التعيين بالطرح لإنقاص قيمة المتغير وإعادة تعيين الفارق بالذاكرة.',
        longDescription: 'عامل تعيين مركب يقوم بطرح القيمة اليمنى من القيمة الحالية للمتغير الأيسر، وإعادة كتابة وحفظ حاصل الطرح بداخل نفس المتغير بالذاكرة بخطوة واحدة مقتضبة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// خصم قيمة الفاتورة من رصيد العميل مباشرة بالذاكرة
let balance = 100;
balance -= 20; // تعادل بالتفصيل: balance = balance - 20
console.log('الرصيد الحالي المتبقي:', balance);`
        ],
        expectedOutput: [
            "الرصيد الحالي المتبقي: 80"
        ],
        professionalTips: 'استخدم هذا العامل لإلغاء تفعيل المؤشرات الحسابية التراكمية، وتبسيط صيانة الكود لتقليص حجم الشيفرة المكتوبة بالأجهزة الضعيفة.',
        commonMistakes: {
            wrong: `let balance = 100;
balance =- 20; // قلب اتجاه العوامل بالخطأ يحولها لتعيين مباشر لقيمة سلبية -20!`,
            right: `let balance = 100;
balance -= 20; // الاتجاه الصحيح لعامل الطرح والتعيين المدمج بالذاكرة
console.log(balance); // يطبع 80 بنجاح`,
            explanation: 'تفسر جافا سكريبت كتابة (=-) كعامل تعيين (=) متبوعاً بقيمة سلبية (-20)، مما يتسبب في إلغاء الرصيد السابق وتخزين -20 مباشرة بالمتغير.'
        },
        thinkingWay: 'استخدم هذا العامل لتصميم كتل التحديث الهابطة؛ مثل خصم سحوبات الأرصدة، تقليل فترات العدادات الزمنية التنازلية، وحساب تراجع قيم المسافات الحركية.',
        relatedMethods: ['operator-subtraction'],
        keywords: ['-=', 'subtraction assignment', 'minus equals', 'compound subtraction', 'decrement variable']
    },
    {
        id: 'operator-assign-multiplication',
        name: '*=',
        shortDescription: 'عامل التعيين بالضرب لمضاعفة قيمة المتغير وإعادة تعيين الحاصل بالذاكرة.',
        longDescription: 'عامل تعيين مركب يقوم بضرب القيمة اليمنى في القيمة الحالية للمتغير الأيسر، وتحديث وحفظ حاصل الضرب النهائي بداخل نفس المتغير بالذاكرة مباشرة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// مضاعفة رصيد النقاط التفاعلي للعبة بضربة واحدة
let score = 10;
score *= 3; // تعادل بالتفصيل: score = score * 3
console.log('النقاط الحالية بعد المضاعفة:', score);`
        ],
        expectedOutput: [
            "النقاط الحالية بعد المضاعفة: 30"
        ],
        professionalTips: 'هذا العامل يختصر تكرار اسم المتغير الطويل على طرفي المعادلة، مما يقلل احتمالية حدوث أخطاء الكتابة العشوائية في ملفك.',
        commonMistakes: {
            wrong: `let num = 10;
num =* 5; // خطأ قواعدي فادح يمنع تجميع السكربت بالكامل لعدم وجود رمز ضرب أحادي وقائي`,
            right: `let num = 10;
num *= 5; // الاتجاه السليم لعامل الضرب المركب المعتمد بالذاكرة
console.log(num); // يطبع 50 بنجاح`,
            explanation: 'الرموز الحسابية مثل الضرب (*) لا تمتلك وظائف إشارة أحادية (Unary signs) كالموجب والسالب؛ لذا ينهار محلل المتصفح فوراً لعدم صحة التراكيب القواعدية.'
        },
        thinkingWay: 'استخدم هذا العامل عند مضاعفة القيم وتطبيق النطاقات التراكمية الهندسية، مثل تدرج أبعاد العناصر تفاعلياً مع مدخلات الزوار.',
        relatedMethods: ['operator-multiplication'],
        keywords: ['*=', 'multiplication assignment', 'times equals', 'multiply variable', 'compound multiplication']
    },
    {
        id: 'operator-assign-division',
        name: '/=',
        shortDescription: 'عامل التعيين بالقسمة لتقسيم قيمة المتغير وإعادة تعيين ناتج القسمة بالذاكرة.',
        longDescription: 'عامل تعيين مركب يقوم بتقسيم القيمة الحالية للمتغير الأيسر على القيمة اليمنى الممررة، وتحديث وحفظ حاصل القسمة النهائي بداخل نفس المتغير بالذاكرة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تقسيم رصيد النقاط بالتساوي وتعديل المتغير مباشرة
let points = 100;
points /= 2; // تعادل بالتفصيل: points = points / 2
console.log('النقاط بعد التقسيم المباشر:', points);`
        ],
        expectedOutput: [
            "النقاط بعد التقسيم المباشر: 50"
        ],
        professionalTips: 'تجنب استخدام هذا العامل إذا كانت القيمة اليمنى المتغيرة قد تحمل الصفر (0)؛ لتفادي تحويل قيمة المتغير بالذاكرة قسرياً إلى القيمة اللانهائية Infinity بصمت.',
        commonMistakes: {
            wrong: `let scale = 100;
scale /= 0; // القسمة المركبة على صفر تحول المتغير لـ Infinity صامتاً دون انهيار الكود!
console.log(scale); // يطبع Infinity ويخرب الحسابات التابعة بالواجهة`,
            right: `let scale = 100;
const divider = 0;
if (divider !== 0) {
  scale /= divider;
} else {
  console.log('منع القسمة الصفرية بنجاح حارس وحماية القيمة الأصلية');
}`,
            explanation: 'القسمة الصفرية في جافا سكريبت آمنة التجميع ولكنها كارثية النتائج الرقمية الحسابية مسببة تشويه قيم المتغيرات بالذاكرة.'
        },
        thinkingWay: 'استخدم هذا العامل عند تجزئة وحصر الأبعاد الهندسية، تقسيم الحصص السعرية تفاعلياً، وتحديث قيم المعدلات الزمنية الهابطة بانتظام.',
        relatedMethods: ['operator-division'],
        keywords: ['/=', 'division assignment', 'divide equals', 'compound division', 'variable fraction']
    },
    {
        id: 'operator-assign-modulo',
        name: '%=',
        shortDescription: 'عامل التعيين بباقي القسمة لحساب الباقي وتحديث قيمة المتغير بالذاكرة مباشرة.',
        longDescription: 'عامل تعيين مركب يقوم بحساب باقي قسمة القيمة الحالية للمتغير الأيسر على القيمة اليمنى، وإعادة كتابة وحفظ قيمة الباقي الحسابي بداخل نفس المتغير بالذاكرة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// حساب باقي القسمة وتحديث المتغير بالذاكرة بضربة واحدة مدمجة
let num = 10;
num %= 3; // تعادل بالتفصيل: num = num % 3
console.log('قيمة المتغير بعد التعيين بالباقي:', num);`
        ],
        expectedOutput: [
            "قيمة المتغير بعد التعيين بالباقي: 1"
        ],
        professionalTips: 'استخدم هذا العامل لإبقاء العدادات الرقمية التراكمية محصورة دائماً في نطاق دائري محدود لا تتجاوزه في خوارزميات الحسابات الدورية بالصفحة.',
        commonMistakes: {
            wrong: `let val = 10;
val =% 3; // خطأ قواعدي يمنع عمل السكربت بالكامل لمخالفة قواعد تركيب العوامل باللغة`,
            right: `let val = 10;
val %= 3; // الاتجاه الصحيح المعتمد لتعديل المتغير بالباقي بالذاكرة
console.log(val); // يطبع 1 بنجاح دقيق`,
            explanation: 'الرموز البرمجية المركبة تملك صيغ ترتيب موحدة صارمة داخل المحلل التجميعي للمتصفح؛ وأي قلب في الرموز يعطل ترجمة الشيفرة.'
        },
        thinkingWay: 'استخدم هذا العامل المدمج لتأمين وتعديل قيم عدادات تبديل الشرائح (Sliders) الدائرية لضمان تدوير قيم الفهارس ديناميكياً بداخل المصفوفات المغلقة.',
        relatedMethods: ['operator-modulo'],
        keywords: ['%=', 'modulo assignment', 'remainder assignment', 'compound modulo', 'cyclic update']
    },
    {
        id: 'operator-assign-exponentiation',
        name: '**=',
        shortDescription: 'عامل التعيين بالأس لحساب الأسس وإعادة تعيين القيمة المرفوعة بالذاكرة.',
        longDescription: 'عامل تعيين مركب حديث تم إدخاله في ES7 لحساب الأسس وتعديل الحالات؛ يقوم برفع القيمة الحالية للمتغير الأيسر لقيمة القوة اليمنى الممررة وتحديث قيمة المتغير بالناتج الحسابي مباشرة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// رفع قيمة المتغير للأس وتحديثه بخطوة واحدة مقتضبة بالذاكرة
let value = 2;
value **= 3; // تعادل بالتفصيل: value = value ** 3
console.log('قيمة المتغير المرفوعة بالذاكرة:', value);`
        ],
        expectedOutput: [
            "قيمة المتغير المرفوعة بالذاكرة: 8"
        ],
        professionalTips: 'استعين دائماً بهذا العامل الحديث والمقروء كبديل نظيف لتعويض استخدام الدوال التقليدية المكتوبة مثل Math.pow لتقليص تكرار أسماء المتغيرات الطويلة.',
        commonMistakes: {
            wrong: `let val = 2;
val **=; // نسيان المعامل الأيمن للأس يمنع عمل مفسر السكربت بالكامل بالصفحة`,
            right: `let val = 2;
val **= 3; // كتابة المعادلة كاملة الأطراف لتحديث المتغير بالأس بنجاح
console.log(val); // يطبع 8 بأمان`,
            explanation: 'عوامل التعيين المركبة تتطلب بالضرورة وجود قيم رقمية حقيقية بالجانب الأيمن لإتمام حساباتها الرياضية وتخصيص الناتج بالمتغير.'
        },
        thinkingWay: 'استخدم هذا العامل الحديث عند تحديث الحسابات الهندسية، معالجة الرسوم ثلاثية الأبعاد تفاعلياً، وتعديل قيم التدرج الأسّي التفاعلي لواجهتك.',
        relatedMethods: ['operator-exponentiation'],
        keywords: ['**=', 'exponentiation assignment', 'power equals', 'compound power', 'exponential update', 'ES7 update']
    },
    {
        id: 'operator-prefix-increment',
        name: '++var',
        shortDescription: 'عامل الزيادة القبلية بمقدار واحد؛ يحدث قيمة المتغير أولاً ثم يرجع القيمة المحدثة.',
        longDescription: 'عامل أحادي (Unary Operator) يوضع بمقدمة المتغير البرمجي؛ يقوم بتحديث وزيادة قيمته بمقدار واحد في موقع الذاكرة مباشرة "أولاً"، ومن ثم يرجع القيمة الجديدة المحدثة فوراً لإتمام نفس السطر الحسابي.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// فحص تحديث المتغير بالزيادة القبلية بالذاكرة
let aa = 12;
console.log('قيمة الزيادة القبلية (أولاً):', ++aa); // يزيد القيمة فوراً لـ 13 ويطبعها بالسطر
console.log('القيمة المستقرة بالذاكرة:', aa);`
        ],
        expectedOutput: [
            "قيمة الزيادة القبلية (أولاً): 13\\nالقيمة المستقرة بالذاكرة: 13"
        ],
        professionalTips: 'استخدم الزيادة القبلية عندما تريد الاعتماد على القيمة الجديدة المحدثة في نفس اللحظة والسطر الحسابي الذي تقع بداخلها المعادلة لضمان مطابقة المنطق الرياضي لبياناتك.',
        commonMistakes: {
            wrong: `const score = 10;
++score; // خطأ مباشر: TypeError: Assignment to constant variable نتيجة محاولة تعديل ثابت معلن بـ const!`,
            right: `let score = 10; // الإعلان باستخدام let لضمان إمكانية تحديث البيانات بالذاكرة
++score; // تحديث ناجح وآمن للمتغير بالذاكرة
console.log(score); // يطبع 11`,
            explanation: 'عوامل الزيادة والنقصان تقوم بإعادة تعيين وكتابة القيمة الجديدة بالذاكرة قسرياً، وهو سلوك ممنوع كلياً ومحظور على المتغيرات الثابتة المعلنة بـ const.'
        },
        thinkingWay: 'استخدم عامل الزيادة القبلية (++var) عندما يتطلب كودك تحديث العداد والحصول على قيمته الجديدة فوراً لإشراكها بداخل العمليات والمقارنات البرمجية الحالية.',
        relatedMethods: ['operator-postfix-increment'],
        keywords: ['++var', 'prefix increment', 'pre-increment', 'unary plus plus', 'add one first', 'loop counter update']
    },
    {
        id: 'operator-postfix-increment',
        name: 'var++',
        shortDescription: 'عامل الزيادة البعدية بمقدار واحد؛ يرجع القيمة الحالية أولاً ثم يحدث المتغير بالذاكرة.',
        longDescription: 'عامل أحادي يوضع بمؤخرة المتغير البرمجي؛ يقوم بإرجاع قيمة المتغير الحالية صامتة لإتمام السطر البرمجي الحالي أولاً، ومن ثم يقوم بزيادة وتحديث قيمة المتغير بمقدار واحد في الذاكرة بالخلفية.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// فحص تحديث المتغير بالزيادة البعدية وتأجيل التحديث للسطر التالي
let aa = 12;
console.log('قيمة الزيادة البعدية (تأخير):', aa++); // يطبع القيمة القديمة 12 أولاً بالسطر
console.log('القيمة المحدثة في السطر التالي:', aa); // يطبع القيمة الجديدة 13 بالذاكرة`
        ],
        expectedOutput: [
            "قيمة الزيادة البعدية (تأخير): 12\\nالقيمة المحدثة في السطر التالي: 13"
        ],
        professionalTips: 'الزيادة البعدية (var++) ممتازة جداً ومألوفة الاستخدام كعداد تقليدي بداخل الأقواس الإنشائية لحلقات التكرار (for loops) لتحديث قيمة عداد الحلقات بنهاية كل دورة بنظافة تامة.',
        commonMistakes: {
            wrong: `let step = 5;
let total = step++ * 2; // يتوقع الحصول على 12، ولكن يطبع 10 لتأخر التحديث الذاكري!
console.log(total);`,
            right: `let step = 5;
let total = (++step) * 2; // استخدام الزيادة القبلية للحصول على القيمة المحدثة فوراً في الحساب
console.log(total); // يطبع 12 بنجاح دقيق ومضمون بالسطر`,
            explanation: 'الزيادة البعدية لا تظهر تأثيرها الحسابي إلا بعد مغادرة السطر البرمجي الحالي؛ لذا تعتمد المعادلات المشتركة في نفس السطر على قيمتها القديمة قبل التحديث.'
        },
        thinkingWay: 'استخدم عامل الزيادة البعدية (var++) في عدادات حلقات التكرار (Loops) لضمان تنفيذ الدورة الحالية بالفهرس الحالي قبل زيادته للدورة التالية.',
        relatedMethods: ['operator-prefix-increment'],
        keywords: ['var++', 'postfix increment', 'post-increment', 'add one later', 'loop step', 'unary operator']
    },
    {
        id: 'operator-prefix-decrement',
        name: '--var',
        shortDescription: 'عامل النقصان القبلي بمقدار واحد؛ يحدث قيمة المتغير أولاً ثم يرجع القيمة المحدثة.',
        longDescription: 'عامل أحادي يوضع بمقدمة المتغير البرمجي؛ يقوم بإنقاص قيمته بمقدار واحد في موقع الذاكرة مباشرة "أولاً"، ومن ثم يرجع القيمة الجديدة المنقوصة فوراً لإتمام نفس السطر الحسابي المقارن.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// فحص تحديث المتغير بالنقصان القبلي المباشر بالذاكرة
let bb = 5;
console.log('قيمة النقصان القبلي (أولاً):', --bb); // ينقص القيمة فوراً لـ 4 ويطبعها بالسطر
console.log('القيمة المحدثة المستقرة بالذاكرة:', bb);`
        ],
        expectedOutput: [
            "قيمة النقصان القبلي (أولاً): 4\\nالقيمة المحدثة المستقرة بالذاكرة: 4"
        ],
        professionalTips: 'استخدم النقصان القبلي عندما تريد تفعيل الخصم والتحديث ومقارنة النتيجة الجديدة فوراً بداخل المعادلات الشرطية دون تأخير برمي قد يسبب عمليات تكرار خاطئة.',
        commonMistakes: {
            wrong: `const limit = 10;
--limit; // خطأ قواعدي مباشر TypeError: Assignment to constant variable لتعديل الثوابت بالذاكرة`,
            right: `let limit = 10; // الإعلان بالمتغير let لضمان المرونة وتغيير القيمة بالذاكرة
--limit; // تحديث سليم بالنقصان القبلي بالذاكرة
console.log(limit); // يطبع 9 بنجاح مالي سليم`,
            explanation: 'عوامل الإنقاص تعد عمليات كتابة وتعديل قسرية لحالة الذاكرة (Mutation)؛ مما يجعل تطبيقها محظوراً كلياً مع الثوابت المعلنة بـ const.'
        },
        thinkingWay: 'استخدم عامل النقصان القبلي (--var) عند صياغة كتل العدادات التنازلية التفاعلية التي تتطلب تفعيل التحديث والتحقق من بلوغ الصفر فوراً لإغلاق المهام.',
        relatedMethods: ['operator-postfix-decrement'],
        keywords: ['--var', 'prefix decrement', 'pre-decrement', 'unary minus minus', 'subtract one first', 'countdown update']
    },
    {
        id: 'operator-postfix-decrement',
        name: 'var--',
        shortDescription: 'عامل النقصان البعدي بمقدار واحد؛ يرجع القيمة الحالية أولاً ثم ينقص المتغير بالذاكرة.',
        longDescription: 'عامل أحادي يوضع بمؤخرة المتغير البرمجي؛ يقوم بإرجاع قيمة المتغير الحالية صامتة لإتمام السطر البرمجي النشط أولاً، ومن ثم يقوم بإنقاص قيمة المتغير بمقدار واحد بالذاكرة بالخلفية.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// فحص تحديث المتغير بالنقصان البعدي وتأجيل التحديث بالذاكرة للسطر التالي
let bb = 5;
console.log('قيمة النقصان البعدي (تأخير):', bb--); // يطبع القيمة القديمة 5 أولاً بالسطر
console.log('القيمة المحدثة في السطر التالي:', bb); // يطبع القيمة الجديدة 4 بالذاكرة`
        ],
        expectedOutput: [
            "قيمة النقصان البعدي (تأخير): 5\\nالقيمة المحدثة في السطر التالي: 4"
        ],
        professionalTips: 'الإنقاص البعدي رائع جداً ومألوف للاستخدام بداخل التكرارات التنازلية الدورية لتأمين إنهاء العمليات بالخطوة الحالية قبل الخصم للدورات اللاحقة.',
        commonMistakes: {
            wrong: `let life = 3;
let status = life-- === 0 ? 'gameover' : 'active'; // يفحص التساوي مع صفر قبل الخصم الفعلي بالخلفية!
console.log(status); // يطبع 'active' بالرغم من استنزاف المحاولات بالكامل`,
            right: `let life = 3;
let status = --life === 0 ? 'gameover' : 'active'; // التحديث والخصم أولاً ثم فحص التساوي الصارم
console.log(status); // يطبع 'active' ويقيد تتبع المحاولات بدقة كاملة بالسطر`,
            explanation: 'الإنقاص البعدي يؤخر تحديث البيانات بالذاكرة؛ مما يجعل الفحص في نفس السطر يعتمد على القيمة القديمة المتبقية من الدورة السابقة.'
        },
        thinkingWay: 'استخدم عامل النقصان البعدي (var--) في حلقات التكرار والمؤشرات الدورية التنازلية لتضمن تنفيذ العملية الحالية بالقيمة الحالية قبل تفعيل الخصم.',
        relatedMethods: ['operator-prefix-decrement'],
        keywords: ['var--', 'postfix decrement', 'post-decrement', 'subtract one later', 'countdown step', 'unary operator']
    },
    {
        id: 'operator-typeof',
        name: 'typeof',
        shortDescription: 'عامل برمجي يُستعمل لتحديد ونوع البيانات الأساسي لقيمة أو متغير برمي.',
        longDescription: 'عامل أحادي (Unary Operator) يقوم بتقييم القيمة أو المتغير الممرر بجانبه ويرجع سلسلة نصية (String) تعبر عن النوع البرمجي الدقيق للقيمة (مثل "string", "number", "boolean", "object", "function").',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// فحص وتحديد أنواع المتغيرات المختلفة بالذاكرة
console.log(typeof 'SULAIMAN');
console.log(typeof 24);
console.log(typeof true);
console.log(typeof { name: 'SULAIMAN' });`
        ],
        expectedOutput: [
            "string\\nnumber\\nboolean\\nobject"
        ],
        professionalTips: 'انتبه للمشكلة التاريخية في جافا سكريبت: `typeof null === "object"`. لتلافي هذه المشكلة وتأمين الفحوصات الكائنية، تحقق دائماً معاً: `value !== null && typeof value === "object"`. وللمصفوفات استخدم `Array.isArray()` بدلاً من typeof.',
        commonMistakes: {
            wrong: `const friends = ['ahmed', 'omar'];
if (typeof friends === 'array') { // لن يدخل الشرط أبداً لأن typeof ترجع 'object' للمصفوفات!
  console.log('انها مصفوفة فعلاً');
}`,
            right: `const friends = ['ahmed', 'omar'];
if (Array.isArray(friends)) { // الاستخدام المعياري السليم لفحص المصفوفات بدقة لعام 2026
  console.log('انها مصفوفة فعلاً وبأمان كامل');
}`,
            explanation: 'تحت الغطاء البرمجي لجافا سكريبت، تصنف المصفوفات ككائنات (Objects)؛ مما يجعل typeof تعيد القيمة "object" لها وتتطلب دالة فحص مخصصة لفرزها.'
        },
        thinkingWay: 'استخدم typeof دائماً وبشكل قطعي كحارس فحص أولي داخل الدوال المرنة للتأكد من توافق أنواع المدخلات (مثل التأكد من استقبال رقم حقيقي قبل إخضاعه لحسابات رياضية).',
        relatedMethods: ['Array.isArray'],
        keywords: ['typeof', 'data types', 'type checking', 'is object', 'is function', 'null object bug']
    },
    {
        id: 'operator-loose-equality',
        name: '==',
        shortDescription: 'عامل التساوي الضعيف لمقارنة القيم بالمتصفح مع تحويل الأنواع تلقائياً (Coercion).',
        longDescription: 'عامل مقارنة ثنائي يقوم بالتحقق من تساوي قيمتين؛ فإذا كانت القيم من أنواع مختلفة (مثل رقم ونص)، يقوم محرك جافا سكريبت بتحويل نوع أحد الطرفين تلقائياً ليطابق الآخر في مساحة ذاكرة مؤقتة قبل إجراء المقارنة (Type Coercion).',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// فحص التساوي الضعيف مع تحويل الأنواع تلقائياً بالمتصفح
console.log(5 == '5');
console.log(true == 1);
console.log(null == undefined);`
        ],
        expectedOutput: [
            "true\\ntrue\\ntrue"
        ],
        professionalTips: 'تجنب تماماً استخدام التساوي الضعيف (==) في بيئات العمل الحقيقية؛ لأنه ينتج مقارنات غير دقيقة صامتة بالذاكرة قد تتسبب في ثغرات منطقية مع قيم مثل 0 والنصوص الفارغة والمصفوفات الخالية.',
        commonMistakes: {
            wrong: `const userInput = '';
if (userInput == 0) { // ينجح الشرط بالخطأ بالرغم من أن النص الفارغ يختلف عن القيمة الصفرية!
  console.log('المدخل صفر');
}`,
            right: `const userInput = '';
if (userInput === 0) { // استخدام المقارنة الصارمة لحماية دقة كودك البرمجي
  console.log('المدخل صفر'); // لن ينفذ هذا السطر بنجاح وهو السلوك المطلوب
}`,
            explanation: 'عامل التساوي الضعيف يقوم بتحويل السلسلة النصية الفارغة "" تلقائياً إلى القيمة الرقمية 0 قبل المقارنة، مما يفرز مقارنات مضللة وغير آمنة بالذاكرة.'
        },
        thinkingWay: 'استبدل هذا العامل القديم دائماً بالتساوي الصارم (===)، ولا تستخدمه إلا بحالة واحدة مقبولة تاريخياً وهي `value == null` للتحقق من أن القيمة null أو undefined بضغطة واحدة.',
        relatedMethods: ['operator-strict-equality'],
        keywords: ['==', 'loose equality', 'type coercion', 'loose comparison', 'implicit coercion']
    },
    {
        id: 'operator-strict-equality',
        name: '===',
        shortDescription: 'عامل التساوي الصارم لمقارنة القيم والأنواع البرمجية معاً بأمان ودون تحويل تلقائي.',
        longDescription: 'عامل مقارنة ثنائي قياسي يقوم بفحص ومطابقة الطرفين في الذاكرة بدقة؛ حيث يتطلب لنجاح المقارنة أن تتماثل القيمة والنوع البرمجي للطرفين معاً تماماً دون إجراء أي تحويلات تلقائية بالذاكرة.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// فحص التساوي الصارم للقيم والأنواع بالذاكرة
console.log(5 === 5);
console.log(5 === '5'); // يرجع false لاختلاف الأنواع البرمجية (رقم مقابل نص)`
        ],
        expectedOutput: [
            "true\\nfalse"
        ],
        professionalTips: 'اجعل التساوي الصارم (===) كمعيار افتراضي ودائم في كامل مقارنات مشروعك لتفادي حدوث ثغرات أمنية منطقية ناجمة عن التحويلات غير المنضبطة للمتصفح.',
        commonMistakes: {
            wrong: `const score = '100';
if (score == 100) { // سلوك غير مستحسن بالمعايير البرمجية المعاصرة لعام 2026
  console.log('علامة كاملة');
}`,
            right: `const score = '100';
if (Number(score) === 100) { // التحويل الصريح واستخدام التساوي الصارم الآمن بالذاكرة
  console.log('علامة كاملة وموثقة بأمان');
}`,
            explanation: 'التحويل الصريح للأنواع قبل استخدام التساوي الصارم يحاذي الكود مع مبادئ البرمجة النظيفة والآمنة ويحمي السكربت من الأخطاء الصامتة.'
        },
        thinkingWay: 'استخدم التساوي الصارم (===) دائماً وبشكل قطعي لحماية الشروط الحيوية تفاعلياً، مثل مطابقة كلمات المرور، رموز المعرفات، والتحقق من صلاحيات زوار صفحتك.',
        relatedMethods: ['operator-loose-equality'],
        keywords: ['===', 'strict equality', 'type matching', 'strict comparison', 'safe verification']
    },
    {
        id: 'operator-loose-inequality',
        name: '!=',
        shortDescription: 'عامل عدم التساوي الضعيف للتحقق من الاختلاف مع تحويل الأنواع تلقائياً.',
        longDescription: 'عامل مقارنة ثنائي يقوم بالتحقق من عدم تساوي قيمتين؛ فإذا اختلف النوع البرمجي للطرفين، يقوم المتصفح بتحويل نوع أحد الطرفين تلقائياً ليطابق الآخر في مساحة ذاكرة مؤقتة قبل فحص عدم التساوي.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// فحص عدم التساوي الضعيف وتأثير تحويل الأنواع تلقائياً
console.log(5 != '5'); // يرجع false لأنهما متساويان ضعيفاً بالذاكرة بعد التحويل!
console.log(5 != 10);`
        ],
        expectedOutput: [
            "false\\ntrue"
        ],
        professionalTips: 'تجنب استخدام هذا العامل الضعيف واستبدله دوماً بعدم التساوي الصارم (!==) لضمان أن كودك يحمي سلامة مقارنة الأنواع البرمجية بدقة كاملة.',
        commonMistakes: {
            wrong: `const input = '0';
if (input != 0) { // سيفشل الشرط ويرجع false لأن النص '0' يحول لرقم 0 ويساويه ضعيفاً بالذاكرة!
  console.log('المدخل ليس صفراً حقيقياً بالذاكرة');
}`,
            right: `const input = '0';
if (input !== 0) { // استخدام عدم التساوي الصارم لحماية فحص الأنماط بالذاكرة
  console.log('المدخل ليس صفراً حقيقياً بالذاكرة'); // يطبع بنجاح تصفية كامل
}`,
            explanation: 'التحويل التلقائي للأعمار والبيانات في عامل عدم التساوي الضعيف يحجم دقة الكود، ويجبرك على إجراء فحص صارم لتلافي ثغرات الحقول الفارغة.'
        },
        thinkingWay: 'استخدم هذا العامل بحذر وتلاشى صياغته تماماً في كتل التحقق من صحة البيانات الممررة تفاعلياً بمشروعك واستبدله بالنمط الصارم للتحكم.',
        relatedMethods: ['operator-strict-inequality'],
        keywords: ['!=', 'loose inequality', 'loose difference', 'coercion inequality', 'not equal loose']
    },
    {
        id: 'operator-strict-inequality',
        name: '!==',
        shortDescription: 'عامل عدم التساوي الصارم للتحقق من اختلاف القيم والأنواع البرمجية معاً دون تحويل.',
        longDescription: 'عامل مقارنة ثنائي قياسي وآمن؛ يقوم بالتحقق من عدم تماثل الطرفين إما بالقيمة أو بالنوع البرمجي معاً في الذاكرة دون إجراء أي تحويلات تلقائية مضللة بالخلفية.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// فحص عدم التساوي الصارم للقيم والأنواع بالمتصفح
console.log(5 !== '5'); // يرجع true لاختلاف الأنواع بالرغم من تساوي القيمة الرقمية
console.log(5 !== 5);`
        ],
        expectedOutput: [
            "true\\nfalse"
        ],
        professionalTips: 'اجعل عدم التساوي الصارم (!==) خيارك القياسي والافتراضي دائماً عند كتابة الشروط المستبعدة لمطابقة تامة خالية من المظاهر التداخلية المؤقتة.',
        commonMistakes: {
            wrong: `const score = '100';
if (score != 100) { // كود غير محمي بالمعايير المعمارية النظيفة لعام 2026
  console.log('النتيجة ليست مئة');
}`,
            right: `const score = '100';
if (score !== 100) { // التحقق الصارم المباشر يحمي الكود البرمجي من العبث بالذاكرة
  console.log('النتيجة ليست مئة'); // يطبع بنجاح كامل تفاعلي
}`,
            explanation: 'عدم التساوي الصارم يتأكد من تباين القيمة أو تباين النوع؛ وبما أن النص "100" يختلف نوعه البرمجي عن الرقم 100، ينجح الشرط مباشرة وبخطوة واحدة آمنة.'
        },
        thinkingWay: 'استخدم عامل عدم التساوي الصارم (!==) دائماً وبشكل مستمر لصياغة شروط استبعاد الحالات؛ مثل استبعاد الحسابات الموقوفة بالذاكرة أو التحقق من عدم اكتمال النماذج بنجاح.',
        relatedMethods: ['operator-loose-inequality'],
        keywords: ['!==', 'strict inequality', 'strict difference', 'safe exclusion', 'not equal strict']
    },
    {
        id: 'operator-greater-than',
        name: '>',
        shortDescription: 'عامل المقارنة أكبر من للتحقق من أن القيمة اليسرى تفوق القيمة اليمنى بالذاكرة.',
        longDescription: 'عامل مقارنة ثنائي يرجع true إذا كانت القيمة الرياضية للطرف الأيسر أكبر من القيمة اليمنى، ويرجع false في حال التساوي أو النقصان. يطبق مقارنات هجائية على النصوص بالذاكرة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// التحقق من تجاوز القيمة للحدود وعرض الترتيب الهجائي للحروف
console.log(23 > 10);
console.log('b' > 'a'); // يطبع true لأن الترتيب الهجائي للحرف b يلي الحرف a بالذاكرة`
        ],
        expectedOutput: [
            "true\\ntrue"
        ],
        professionalTips: 'عند مقارنة النصوص هجائياً، يعتمد المتصفح على قيم ترميز الآلة (Unicode)؛ مما يعني أن الحروف الكبيرة تملك قيم أصغر من الحروف الصغيرة. وحد الحالة دائماً قبل المقارنة الهجائية.',
        commonMistakes: {
            wrong: `console.log('B' > 'a'); // يطبع false بالرغم من أن الترتيب الإنساني للـ B يسبق الحرف a!`,
            right: `console.log('B'.toLowerCase() > 'a'.toLowerCase()); // يطبع true بنجاح كامل بعد توحيد التنسيق
console.log('b' > 'a'); // يطبع true بنجاح دقيق`,
            explanation: 'قيمة الحرف الكبير "B" بجدول اليونيكود هي 66 بينما الحرف الصغير "a" هي 97؛ مما يجعله أصغر للآلة، وتوحيد الأنماط يضمن دقة الفرز الإنساني.'
        },
        thinkingWay: 'استخدم هذا العامل لصياغة كتل الحدود الرقمية؛ مثل التحقق من أن رصيد العميل بالذاكرة يتجاوز قيمة حد السحب الأدنى المقبول بالبنك تفاعلياً.',
        relatedMethods: ['operator-less-than', 'operator-greater-than-equal'],
        keywords: ['>', 'greater than', 'math greater', 'relational comparison', 'unicode compare']
    },
    {
        id: 'operator-less-than',
        name: '<',
        shortDescription: 'عامل المقارنة أصغر من للتحقق من أن القيمة اليسرى تقل عن القيمة اليمنى بالذاكرة.',
        longDescription: 'عامل مقارنة ثنائي يرجع true إذا كانت القيمة الرياضية للطرف الأيسر أقل من القيمة اليمنى بالذاكرة، ويرجع false في حال التساوي أو الزيادة الحسابية.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// التحقق من انخفاض القيمة عن الحد الأقصى المسموح به بالذاكرة
console.log(23 < 50);
console.log('a' < 'b'); // يطبع true لتماثل الترتيب الهجائي للآلة`
        ],
        expectedOutput: [
            "true\\ntrue"
        ],
        professionalTips: 'تذكر دائماً أن عوامل المقارنة النسبية ترجع قيماً منطقية حقيقية (true/false) ممتازة لتوجيه مسار التدفق البرمجي دون استهلاك إضافي للذاكرة العشوائية.',
        commonMistakes: {
            wrong: `console.log('a' < 'B'); // يطبع false متجاهلاً تأثير الحروف الكبيرة بالذاكرة!`,
            right: `console.log('a'.toLowerCase() < 'B'.toLowerCase()); // يطبع true بعد تسوية الكيان النصي بنجاح
console.log('a' < 'b'); // يطبع true بنجاح`,
            explanation: 'قيمة الحرف الصغير "a" في جدول الرموز هي 97 وهي أكبر من قيمة الحرف الكبير "B" البالغة 66؛ مما يتطلب توحيد التنسيق لتأمين المقارنة.'
        },
        thinkingWay: 'استخدم هذا العامل للتحقق من عدم تجاوز العدادات للحدود القصوى للتكرارات (مثل التأكد من أن حجم الملفات المستوردة يقل عن الحد الأقصى للمرفقات).',
        relatedMethods: ['operator-greater-than', 'operator-less-than-equal'],
        keywords: ['<', 'less than', 'math less', 'relational comparison', 'unicode comparison']
    },
    {
        id: 'operator-greater-than-equal',
        name: '>=',
        shortDescription: 'عامل المقارنة أكبر من أو يساوي للتحقق من تماثل القيمة أو تجاوزها للحد.',
        longDescription: 'عامل مقارنة ثنائي يرجع true إذا كانت القيمة الرياضية للطرف الأيسر تفوق القيمة اليمنى أو تطابقها تماماً في الذاكرة، ويرجع false في حال النقصان المباشر.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// التحقق من بلوغ أو تجاوز الحدود العمرية والصلاحيات تفاعلياً
console.log(23 >= 23);
console.log(23 >= 10);`
        ],
        expectedOutput: [
            "true\\ntrue"
        ],
        professionalTips: 'استخدم هذا العامل لتأمين كتل فحص الحد الأدنى المغلق (Inclusive Minimum)؛ لضمان أن قيم الأطراف يتم إدخالها واحتسابها بنجاح داخل منطق الفحص الحارس.',
        commonMistakes: {
            wrong: `const age = 18;
if (age > 18) { // يغفل هذا الفحص الصعود للحد المباشر 18 ويفشل بالرغم من بلوغه السن القانوني!
  console.log('مسموح بالدخول');
}`,
            right: `const age = 18;
if (age >= 18) { // تضمين الحد الرقمي مباشرة بسلام وأمان بالشرط المفتوح
  console.log('مسموح بالدخول بنجاح معتمد'); // يطبع هذا السطر
}`,
            explanation: 'عامل أكبر من الفردي (>) يستبعد القيمة المطابقة ذاتها، بينما يضمن عامل التساوي والزيادة (>=) احتساب قيمة الحد بنجاح تام.'
        },
        thinkingWay: 'استخدم هذا العامل كمعيار ثابت لحيازة وتأمين عمليات التحقق من حدود البلوغ، والحد الأدنى للطلبات المالية، وقواعد حساب الرصيد التفاعلي المالي.',
        relatedMethods: ['operator-greater-than', 'operator-less-than-equal'],
        keywords: ['>=', 'greater than or equal', 'math inclusive', 'boundary limit', 'minimum inclusive']
    },
    {
        id: 'operator-less-than-equal',
        name: '<=',
        shortDescription: 'عامل المقارنة أصغر من أو يساوي للتحقق من تماثل القيمة أو انخفاضها عن الحد.',
        longDescription: 'عامل مقارنة ثنائي يرجع true إذا كانت القيمة الرياضية للطرف الأيسر تقل عن القيمة اليمنى أو تطابقها تماماً بالذاكرة، ويرجع false في حال الزيادة المباشرة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// التحقق من بلوغ أو انخفاض الحدود التكرارية والسعرية بالمتصفح
console.log(23 <= 23);
console.log(23 <= 50);`
        ],
        expectedOutput: [
            "true\\ntrue"
        ],
        professionalTips: 'استخدم هذا العامل لتأمين كتل فحص الحد الأقصى المغلق (Inclusive Maximum)؛ لضمان أن قيم الأطراف يتم إدخالها واحتسابها بنجاح داخل كود تتبع الحالات ديناميكياً.',
        commonMistakes: {
            wrong: `const score = 100;
if (score < 100) { // يستبعد الدرجة الكاملة 100 بالرغم من بلوغها الحد المطلوب للنجاح الحقيقي!
  console.log('مقبول');
}`,
            right: `const score = 100;
if (score <= 100) { // شمولية الحد الرقمي تماماً بالشرط المفتوح بأمان بالذاكرة
  console.log('مقبول بنجاح معتمد'); // يطبع السطر
}`,
            explanation: 'عامل أصغر من الفردي (<) يستبعد القيمة المطابقة ذاتها، بينما يضمن عامل التساوي والنقصان (<=) احتساب قيمة الحد بنجاح تام بالذاكرة.'
        },
        thinkingWay: 'استخدم هذا العامل كمعيار ثابت لتحديد سعة التخزين القصوى المسموح بها، الحدود العليا لأوزان الملفات، والحد الأقصى للعدادات الزمنية التكرارية.',
        relatedMethods: ['operator-less-than', 'operator-greater-than-equal'],
        keywords: ['<=', 'less than or equal', 'math inclusive', 'boundary limit', 'maximum inclusive']
    },
    {
        id: 'operator-logical-and',
        name: '&&',
        shortDescription: 'عامل المنطق AND لدمج الشروط وتأمين مسار الكود بآلية التقييم المختصر.',
        longDescription: 'عامل منطقي ثنائي يرجع true حصراً في حال كانت كافة الشروط المحيطة به صحيحة (True). يتميز بآلية التقييم المختصر (Short-circuit Evaluation)؛ حيث يتوقف فوراً عن التقدم وفحص باقي الشروط من اليسار لليمين بمجرد مواجهة أول قيمة خاطئة (Falsy).',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// التحقق المنطقي من دمج شروط نجاح الامتحان ومعدل الحضور
const passedExam = true;
const attendanceRate = 70;
const isSuccess = passedExam && attendanceRate >= 80;

console.log('هل الزلمة ملتزم وناجح بالكامل؟', isSuccess);`
        ],
        expectedOutput: [
            "هل الزلمة ملتزم وناجح بالكامل؟ false"
        ],
        professionalTips: 'استغل ميزة التقييم المختصر لـ (&&) لتنفيذ إجراءات تفاعلية مقتضبة كبديل لكتابة جمل if الكاملة؛ مثل: `isLoggedIn && renderProfileDashboard()` لتنظيف كود العرض بالواجهات.',
        commonMistakes: {
            wrong: `const user = null;
if (user.isLoggedIn && user) { // خطأ مباشر يوقف التنفيذ: TypeError: Cannot read properties of null`,
            right: `const user = null;
if (user && user.isLoggedIn) { // الفحص السليم بوضع المتغير الحارس في المقدمة أولاً بالترتيب
  console.log('مسجل');
}`,
            explanation: 'المتصفح يفسر الشروط من اليسار لليمين بالتتابع؛ وضع `user` في المقدمة يجعل عامل AND يتوقف فوراً عند اكتشاف قيمته الخالية (null) ويقفل الفحص صامتاً دون التسلل لحقل `isLoggedIn` المعطوب.'
        },
        thinkingWay: 'استخدم عامل الجمع المنطقي (&&) كحارس صامد لحماية وتأمين سلامة كودك عند طلب خصائص كائنات معقدة قد تحمل قيم null عارضة.',
        relatedMethods: ['operator-logical-or'],
        keywords: ['&&', 'logical AND', 'short-circuit evaluation', 'control guard', 'multiple conditions']
    },
    {
        id: 'operator-logical-or',
        name: '||',
        shortDescription: 'عامل المنطق OR لاحتساب البدائل وتأمين مسار الكود بآلية التقييم المختصر.',
        longDescription: 'عامل منطقي ثنائي يرجع true بمجرد تحقق شرط واحد على الأقل من الشروط المحيطة به. يتميز بآلية التقييم المختصر؛ حيث يتوقف عن التقدم ويفحص الشروط من اليسار لليمين بمجرد مواجهة أول قيمة حقيقية (Truthy) ويرجعها صامتة كمخرج.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// التحقق من توفر الصلاحية الإدارية أو امتلاك بريد العميل بنجاح
const userName = 'sulaiman';
const email = 'sulaiman@gmail.com';
const hasAccess = userName === 'admin' || email === 'sulaiman@gmail.com';

console.log('إمكانية الوصول المفتوحة للخدمات:', hasAccess);`
        ],
        expectedOutput: [
            "إمكانية الوصول المفتوحة للخدمات: true"
        ],
        professionalTips: 'تذكر أن عامل OR (||) يتخطى الطرف الأول إذا كان أي قيمة Falsy (مثل 0 أو نص فارغ ""). إذا كنت ترغب في فحص وتلافي قيم null و undefined حصراً مع الاحتفاظ بسلامة الأرقام الصفرية والنصوص الفارغة، فاستخدم عامل التلاحم الخالي الحديث (??).',
        commonMistakes: {
            wrong: `let userAttempts = 0;
let displayAttempts = userAttempts || 3; // خطأ: سيقوم بتعيين 3 لأن الصفر قيمة Falsy بالمتصفح!
console.log(displayAttempts);`,
            right: `let userAttempts = 0;
let displayAttempts = userAttempts ?? 3; // استخدام عامل التلاحم الخالي الحديث لحفظ القيمة الصفرية الصالحة
console.log(displayAttempts); // يطبع 0 بنجاح تام وسليم`,
            explanation: 'عامل OR يعامل الرقم 0 كقيمة منطقية خاطئة (Falsy) وينتقل للبديل تلقائياً، بينما يفحص عامل (??) وجود قيم العدم التالفة فقط null و undefined.'
        },
        thinkingWay: 'استخدم عامل البدائل (||) لتقديم وصياغة مستويات تهيئة بديلة واحتياطية لواجهات المستخدم ديناميكياً لتلافي حدوث مشاكل في التصاميم.',
        relatedMethods: ['operator-logical-and'],
        keywords: ['||', 'logical OR', 'short-circuit evaluation', 'fallback default', 'multiple options']
    },
    {
        id: 'operator-logical-not',
        name: '!',
        shortDescription: 'عامل المنطق NOT لعكس الحالة المنطقية للشرط وتأمين التحقق العكسي.',
        longDescription: 'عامل منطقي أحادي يوضع بمقدمة المتغير أو الشرط؛ يقوم بتحويل القيمة الحقيقية (Truthy) إلى false، والقيمة الخاطئة (Falsy) إلى true بالذاكرة فوراً لتبسيط صياغة الشروط التنافسية العكسية.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// عكس حالة تتبع اتصال المستخدم وصلاحية حسابه
const isActive = true;
console.log('عكس الحالة التفاعلية النشطة بالذاكرة:', !isActive);`
        ],
        expectedOutput: [
            "عكس الحالة التفاعلية النشطة بالذاكرة: false"
        ],
        professionalTips: 'استخدم عامل النفي المزدوج (!!) كطريقة برمجية ذكية وسريعة للغاية لتحويل أي قيمة (رقم، نص، كائن) صراحة إلى ناتجها المنطقي البسيط الحقيقي (true/false) بضربة واحدة دقيقة بالذاكرة.',
        commonMistakes: {
            wrong: `const role = 'admin';
if (!role === 'user') { // خطأ منطقي صامت يمنع الفحص لتنفيذ النفي على المتغير الفردي أولاً!
  console.log('مسموح');
}`,
            right: `const role = 'admin';
if (role !== 'user') { // الصياغة الصحيحة المعتمدة للمقارنة المستبعدة المباشرة بالذاكرة
  console.log('مسموح'); // يطبع هذا السطر
}`,
            explanation: 'عامل النفي (!) يملك أولوية تنفيذ عالية جداً؛ يقوم بتحويل النص "admin" إلى القيمة المنطقية false أولاً، ثم يحاول فحص تساويها مع النص "user" مما يفشل العملية بأكملها.'
        },
        thinkingWay: 'استخدم عامل النفي (!) لصياغة شروط الحماية واستبعاد التداخلات (مثل إظهار لوحة تسجيل الدخول فقط إذا لم يكن المستخدم مسجلاً بالأساس: `!isLoggedIn`).',
        relatedMethods: ['operator-logical-and'],
        keywords: ['!', 'logical NOT', 'negation', 'double negation', 'boolean conversion', 'falsy check']
    }
];