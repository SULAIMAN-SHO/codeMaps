export const numbersMathData = [
    {
        id: 'number-min-safe-integer',
        name: 'Number.MIN_SAFE_INTEGER',
        shortDescription: 'ثابت يعبر عن الحد الأدنى للرقم الصحيح الآمن لإجراء العمليات الرياضية الدقيقة.',
        longDescription: 'ثابت ساكن (Static Constant) يمثل القيمة الرقمية الصغرى (-9007199254740991) التي يمكن لمحرك جافا سكريبت معالجتها والمقارنة بينها بأمان كامل وثبات حسابي دون حدوث تداخلات بالذاكرة.',
        difficulty: 'medium',
        importance: 'optional',
        examples: [
            `// عرض الحد الأدنى للأرقام الآمنة بالذاكرة
console.log(Number.MIN_SAFE_INTEGER);`
        ],
        expectedOutput: [
            "-9007199254740991"
        ],
        professionalTips: 'إذا كانت العمليات الرياضية في تطبيقك تتطلب حسابات لقيم أصغر من هذا الثابت (مثل معالجة معرّفات العملات الرقمية الضخمة)، فتخلّ تماماً عن الأرقام العادية واستخدم نوع البيانات الحديث BigInt لتلافي تداخل الذاكرة.',
        commonMistakes: {
            wrong: `// إجراء عمليات طرح لقيمة تتجاوز الحد الأدنى الآمن ينتج عنه قيم خاطئة صامتة بالذاكرة
const outOfBounds = Number.MIN_SAFE_INTEGER - 10;
console.log(outOfBounds === (Number.MIN_SAFE_INTEGER - 11)); // يطبع true بالرغم من اختلاف العمليات حسابياً!`,
            right: `// استخدام نوع البيانات المخصص BigInt للأعداد الضخمة أو الصغيرة جداً خارج الحدود
const safeWithBigInt = BigInt(Number.MIN_SAFE_INTEGER) - 10n;
console.log(safeWithBigInt); // يحسب القيمة الرياضية الفعلية بدقة متناهية وبأمان كامل`,
            explanation: 'خارج نطاق الأعداد الآمنة، يفقد المتصفح الدقة الرياضية كلياً ويبدأ بمساواة الأعداد المختلفة نظراً لمحدودية تمثيل خانات الذاكرة للأرقام العشرية ثنائية الدقة.'
        },
        thinkingWay: 'استخدم هذا الثابت القياسي عند فحص وتأمين مدخلات البيانات والأرقام الضخمة القادمة من الواجهات والملفات للتأكد من أنها تقع في نطاق المعالجة الآمنة والمستقرة.',
        relatedMethods: ['number-max-safe-integer'],
        keywords: ['Number.MIN_SAFE_INTEGER', 'min safe', 'safe integer', 'precision limits', 'BigInt fallback']
    },
    {
        id: 'number-max-safe-integer',
        name: 'Number.MAX_SAFE_INTEGER',
        shortDescription: 'ثابت يعبر عن الحد الأقصى للرقم الصحيح الآمن لإجراء العمليات الرياضية الدقيقة.',
        longDescription: 'ثابت ساكن يمثل القيمة الرقمية الكبرى (9007199254740991) التي يمكن لمحرك جافا سكريبت مقارنتها ومعالجتها حسابياً بدقة تامة؛ حيث تضمن مواصفات اللغة تمثيلاً آمناً وفريداً لكل رقم يقع تحت هذا الحد.',
        difficulty: 'medium',
        importance: 'optional',
        examples: [
            `// عرض القيمة القصوى للأرقام الصحيحة الآمنة بذاكرة المتصفح
console.log(Number.MAX_SAFE_INTEGER);`
        ],
        expectedOutput: [
            "9007199254740991"
        ],
        professionalTips: 'اجعل هذا الثابت حارساً (Guard Clause) داخل أكواد بوابات الدفع والعمليات الرياضية الحساسة للتأكد من أن الأرقام المتداولة لا تتجاوز الحدود الآمنة للغة قبل معالجتها.',
        commonMistakes: {
            wrong: `// زيادة القيمة فوق الحد الآمن يتسبب في تجميد وتطابق الأرقام المختلفة بالذاكرة
const outOfBounds = Number.MAX_SAFE_INTEGER + 1;
console.log(outOfBounds === (Number.MAX_SAFE_INTEGER + 2)); // يطبع true ويخرب الحسابات المالية!`,
            right: `// تأمين الحدود باستخدام BigInt للقيم الضخمة فوق المليارات المتجاوزة للحد
const safeBigInt = BigInt(Number.MAX_SAFE_INTEGER) + 2n;
console.log(safeBigInt); // يعمل بدقة كاملة مستقرة`,
            explanation: 'خارج حدود التمثيل الرقمي الآمن، يقوم المتصفح بتقريب الأرقام المختلفة لأقرب تمثيل ممكن، مما ينتج عنه تساوي الأرقام المتباينة رياضياً.'
        },
        thinkingWay: 'استخدم هذا الفحص الحارس دائماً عند معالجة أرقام الهويات التعريفية الضخمة أو أرقام المعاملات البنكية للتأكد من استقرار حسابات كودك البرمجي.',
        relatedMethods: ['number-min-safe-integer'],
        keywords: ['Number.MAX_SAFE_INTEGER', 'max safe', 'safe integer', 'precision', 'number limits']
    },
    {
        id: 'number-max-value',
        name: 'Number.MAX_VALUE',
        shortDescription: 'ثابت يمثل أكبر قيمة رقمية موجبة ممكنة في لغة جافا سكريبت ككل.',
        longDescription: 'ثابت ساكن يمثل أقصى قيمة رقمية تقريبية كسرية موجبة (تقريباً 1.79E+308) يمكن تمثيلها في لغة جافا سكريبت؛ وأي قيمة تتجاوز هذا الحد الهائل يتم تحويلها تلقائياً بالذاكرة إلى الثابت الفادح Infinity.',
        difficulty: 'medium',
        importance: 'optional',
        examples: [
            `// طباعة أقصى قيمة رقمية ممكنة باللغة وتجاوزها لـ Infinity
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE * 2); // تجاوز القيمة ينتج عنه اللانهاية`
        ],
        expectedOutput: [
            "1.7976931348623157e+308\\nInfinity"
        ],
        professionalTips: 'هذا الثابت يمثل السعة القصوى لتمثيل الأرقام في المتصفح وليس الدقة الآمنة للعمليات الحسابية؛ فالأرقام القريبة منه تعاني من فقدان الدقة كلياً ومخصصة فقط للمقارنات التجاوزية.',
        commonMistakes: {
            wrong: `// الخلط بين MAX_VALUE و MAX_SAFE_INTEGER والاعتماد عليها لحسابات دقيقة
const balance = Number.MAX_VALUE - 5;
console.log(balance); // يرجع نفس القيمة دون نقص لعدم توفر الدقة الكافية لهذه الخانات الطويلة`,
            right: `// استخدام القيمة القصوى فقط لمقارنة الحسابات الفلكية التجاوزية البحتة
const balance = Number.MAX_VALUE;
if (balance >= Number.MAX_VALUE) {
  console.log('القيمة تجاوزت الحدود القصوى تماماً');
}`,
            explanation: 'دقة الحسابات الفردية الآمنة تنتهي تماماً عند MAX_SAFE_INTEGER. الثابت MAX_VALUE مخصص فقط لحفظ حيز التمثيل الأقصى للذاكرة قبل الانهيار نحو Infinity.'
        },
        thinkingWay: 'استخدم هذا الثابت نادراً عند تتبع وحماية الحسابات العلمية أو الفلكية الضخمة لضمان بقائها داخل حدود الحيز الرقمي القابل للمقارنة بالذاكرة.',
        relatedMethods: ['number-max-safe-integer'],
        keywords: ['Number.MAX_VALUE', 'maximum value', 'Infinity limit', 'falk limits', 'math bounds']
    },
    {
        id: 'number-to-string',
        name: 'toString()',
        shortDescription: 'تحويل وتصدير القيمة الرقمية إلى سلسلة نصية (String) بدقة تامة.',
        longDescription: 'دالة تابعة للنموذج الأصلي للأرقام تقوم بإنشاء وتصدير سلسلة نصية جديدة تعبر عن الرقم المستدعى بدقة، وتسمح بتمرير معامل اختياري يمثل الأساس العددي للتحويل (مثل 2 للنظام الثنائي أو 16 للنظام الست عشري).',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تحويل الرقم لنص وتوضيح نوع البيانات المرتجع بالمتصفح
const num = 10;
const textNum = num.toString();

console.log('النص المرتجع:', textNum);
console.log('نوع البيانات:', typeof textNum);`
        ],
        expectedOutput: [
            "النص المرتجع: 10\\nنوع البيانات: string"
        ],
        professionalTips: 'عند الرغبة في استدعاء toString() على رقم مكتوب مباشرة (Numeric Literal) دون متغير، أحط الرقم بنقطتين عشريتين أو ضعه داخل أقواس مستديرة مثل `(10).toString()` لضمان عدم حدوث خطأ تجميعي من المتصفح.',
        commonMistakes: {
            wrong: `// خطأ تجميعي مباشر نتيجة التباس النقطة العشرية مع نقطة الاستدعاء للميثود
console.log(10.toString()); // خطأ: SyntaxError: Invalid or unexpected token`,
            right: `// وضع الرقم المباشر داخل أقواس لتأمين عملية الاستدعاء بنجاح
console.log((10).toString()); // يطبع '10' بنجاح سليم وعملي`,
            explanation: 'محرك جافا سكريبت يفسر النقطة المفردة بعد الرقم المباشر على أنها نقطة عشرية تابعة للعدد الكسري (Float decimal)، ومحاولة كتابة نص بعدها مباشرة يربك المحلل التجميعي.'
        },
        thinkingWay: 'استخدم toString() عندما ترغب في تحويل الأرقام لحسابات هجائية أو لدمجها مع نصوص مخصصة أو لتصديرها بصياغات JSON للشبكة كأحرف صامتة.',
        relatedMethods: ['number-to-fixed'],
        keywords: ['toString', 'number to string', 'convert type', 'radix base', 'binary conversion']
    },
    {
        id: 'number-to-fixed',
        name: 'toFixed()',
        shortDescription: 'تنسيق وتقريب الرقم العشري وتحديد عدد الخانات التي تظهر بعد الفاصلة مع إرجاع الناتج كنص.',
        longDescription: 'دالة تنسيقية تقوم بتقريب الأرقام العشرية الطويلة وحصر عدد الخانات المسموح بظهورها بعد الفاصلة بناءً على المعامل الرقمي الممرر، وترجع الناتج دائماً كسلسلة نصية (String).',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تقريب السعر لخانة ثنائية دقيقة بعد الفاصلة لعرضه بنظام الفواتير
const rawPrice = 55.654897431646478;
const formatted = rawPrice.toFixed(3);

console.log('السعر بعد التنسيق والتقريب:', formatted);
console.log('نوع القيمة المرتجعة:', typeof formatted);`
        ],
        expectedOutput: [
            "السعر بعد التنسيق والتقريب: 55.655\\nنوع القيمة المرتجعة: string"
        ],
        professionalTips: 'بما أن الدالة ترجع نصاً، تذكر دائماً إعادة تحويلها لقيمة رقمية صلبة باستخدام واجهة `Number()` أو عامل الجمع الأحادي (+) إذا كنت بحاجة لإجراء عمليات حسابية لاحقة لتجنب دمج النصوص عارضاً.',
        commonMistakes: {
            wrong: `// خطأ شائع: محاولة جمع مخرجات toFixed كأرقام مما يتسبب في دمج النصوص بدلاً من الحساب
const total = (10.55).toFixed(2) + 5;
console.log(total); // يطبع '10.555' بدلاً من القيمة الحسابية 15.55!`,
            right: `// تحويل القيمة المسترجعة لنوع رقمي صريح قبل المضي بالحسابات
const total = Number((10.55).toFixed(2)) + 5;
console.log(total); // يطبع 15.55 بنجاح تام سليم`,
            explanation: 'دالة toFixed ترجع نصاً دائماً. استخدام عامل (+) مع قيمة نصية يحول العملية تلقائياً لدمج نصوص (Concatenation) وتدمير المعادلة الحسابية.'
        },
        thinkingWay: 'استخدم هذه الدالة دائماً في واجهات الدفع ونماذج الفواتير لعرض الكسور العشرية والأسعار بشكل منظم وسهل القراءة للزوار.',
        relatedMethods: ['number-to-string'],
        keywords: ['toFixed', 'rounding decimal', 'currency formatting', 'decimal limit', 'to string decimals']
    },
    {
        id: 'number-parse-int',
        name: 'parseInt()',
        shortDescription: 'تحليل واستخراج الجزء الصحيح فقط من الرقم العشري أو السلسلة النصية وإرجاعه كعدد صحيح.',
        longDescription: 'دالة برمجية تقوم بتحليل النص أو المتغير من اليسار وتجريف وقراءة أول عدد صحيح تصادفه، وتتجاهل تماماً الكسور العشرية وأي نصوص تالية لها، وترجع القيمة NaN في حال فشلها في قراءة أي رقم ببدء الفحص.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// استخراج الطول والعدد الصحيح من الستايلات النصية بنجاح
const rawWidth = '55.664879874341321px';
const intWidth = parseInt(rawWidth, 10);

console.log('العرض المستخرج كعدد صحيح:', intWidth);
console.log('نوع البيانات المفرزة:', typeof intWidth);`
        ],
        expectedOutput: [
            "العرض المستخرج كعدد صحيح: 55\\nنوع البيانات المفرزة: number"
        ],
        professionalTips: 'مرر دائماً المعامل الثاني (radix) بقيمة 10 لتحديد أن عملية التحليل تتم في النظام العشري القياسي المألوف، مما يضمن ثبات تفسير المحركات لكودك بجميع المتصفحات القديمة.',
        commonMistakes: {
            wrong: `// محاولة تحليل نص يبدأ بحروف أبجدية مما يفشل المعالج تماماً
const score = parseInt('Score: 95', 10);
console.log(score); // يطبع NaN لأن الفحص بدأ بكلمة غير رقمية تفشل التحليل مباشرة`,
            right: `// تنظيف الحروف الجانبية أو استخراج الرقم من موضعه الصحيح أولاً
const rawScore = 'Score: 95';
const score = parseInt(rawScore.replace('Score: ', ''), 10);
console.log(score); // يطبع 95 بنجاح دقيق`,
            explanation: 'الدالة parseInt تفحص المدخل حرفاً بحرف من البداية؛ فإذا صادفت حرفاً هجائياً قبل الأرقام، تتوقف فوراً وتصدر القيمة الخاطئة NaN.'
        },
        thinkingWay: 'استخدم parseInt() عندما تريد قراءة وتحويل قيم الأبعاد المأخوذة من واجهات المتصفح (مثل الأطوال بالبكسل "50px") وتحويلها لأرقام صالحة للحسابات الجانبية.',
        relatedMethods: ['number-parse-float'],
        keywords: ['parseInt', 'parse integer', 'string to number', 'extract numbers', 'radix base 10']
    },
    {
        id: 'number-parse-float',
        name: 'parseFloat()',
        shortDescription: 'تحليل واستخراج الرقم العشري بالكامل مع كسوره من السلسلة النصية وإرجاعه كعدد كشري.',
        longDescription: 'دالة برمجية تقوم بتحليل النص الممرر من اليسار لليمين واستخلاص القيمة الرقمية الكسرية الكاملة بما تشتمل عليه من فواصل عشرية ونقاط، وتتوقف فوراً عند مواجهة ثاني نقطة عشرية أو أول حرف غير رقمي.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// استخراج معدل الضريبة العشري الكامل من نص المستندات بالصفحة
const rawTax = '55.664879874341321% percent standard';
const floatTax = parseFloat(rawTax);

console.log('معدل الضريبة العشري الفعلي:', floatTax);
console.log('نوع البيانات:', typeof floatTax);`
        ],
        expectedOutput: [
            "معدل الضريبة العشري الفعلي: 55.66487987434132\\nنوع البيانات: number"
        ],
        professionalTips: 'تذكر أن parseFloat() تفك فواصل عشرية فقط؛ إذا كان النص يشتمل على فواصل تجميعية لآلاف (مثل "1,500.50")، سيتوقف فحصها عند الفاصلة ويرجع 1 فقط؛ لذا نظف النصوص من علامة الفاصلة قبل الاستدعاء.',
        commonMistakes: {
            wrong: `// محاولة فك نص مالي يحتوي على فواصل آلاف ينتج عنه قراءة تالفة صامتة
const price = parseFloat('1,500.50');
console.log(price); // يطبع 1 فقط! لعدم تعرف الفحص على الفاصلة , كجزء من الرقم العشري`,
            right: `// تنظيف وإزالة الفواصل التجميعية أولاً قبل تفعيل التحليل
const price = parseFloat('1,500.50'.replaceAll(',', ''));
console.log(price); // يطبع 1500.5 بنجاح تام سليم دقيق`,
            explanation: 'محرك الفحص يعتبر الفاصلة حرفاً غير رقمي ويوقف التحليل والتقدم فور مواجهتها، بينما يتعرف على النقطة العشرية الموحدة .'
        },
        thinkingWay: 'استخدم parseFloat() عندما ترغب في قراءة وتحديث الكسور العشرية والنسب الدقيقة الواردة من نماذج إدخال العملاء أو لوحات البيانات المنسقة بدقة.',
        relatedMethods: ['number-parse-int'],
        keywords: ['parseFloat', 'parse float', 'string to decimal', 'extract decimal', 'precision parsing']
    },
    {
        id: 'number-is-integer',
        name: 'Number.isInteger()',
        shortDescription: 'التحقق الدقيق والآمن مما إذا كانت القيمة الممررة عدداً صحيحاً وخالياً من الكسور.',
        longDescription: 'دالة فحص ساكنة (Static Method) تابعة لكلاس Number تقوم بتقييم المعامل وترجع true إذا كان يحمل قيمة عددية صحيحة وخالية تماماً من الكسور المباشرة، وترجع false في حال وجود كسور أو اختلاف نوع البيانات.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// فحص القيم الرقمية وتحديد الأعداد الصحيحة من الكسور بالذاكرة
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));
console.log(Number.isInteger('10')); // يرجع false لاختلاف نوع البيانات الممررة`
        ],
        expectedOutput: [
            "true\\nfalse\\nfalse"
        ],
        professionalTips: 'هذه الدالة ممتازة لفحص وتدقيق مدخلات العدادات والكميات؛ حيث تضمن أن العميل لم يدخل كسوراً عشرية عشوائية لشراء نصف منتج مثلاً بدلاً من منتج كامل.',
        commonMistakes: {
            wrong: `// محاولة فحص الأعداد الصحيحة بدمج دالة typeof والوقوع بمشاكل مع الكسور العشرية
const qty = 5.5;
if (typeof qty === 'number') { // الشرط ينجح للكسور العشرية أيضاً!
  console.log('الكمية صالحة كعدد صحيح حقيقي بالكامل');
}`,
            right: `// الاستخدام المعياري الصارم للتأكد من خلو الرقم من الكسور
const qty = 5.5;
if (Number.isInteger(qty)) {
  console.log('الكمية صالحة كعدد صحيح حقيقي بالكامل');
} else {
  console.log('يرجى إدخال عدد صحيح بدون كسور عشرية زائدة'); // يطبع هذا السطر بنجاح
}`,
            explanation: 'عامل typeof يصنف الأعداد العشرية والأعداد الصحيحة تحت كيان نوعي واحد وهو number، بينما تقوم Number.isInteger بفحص بنية الكسر للعدد رياضياً.'
        },
        thinkingWay: 'استخدم هذه الدالة كحارس فحص فوري لحقول الإدخال والكميات وعمليات حساب عدد الحلقات لضمان التعامل مع قيم أعداد صحيحة صلبة دائماً.',
        relatedMethods: ['number-parse-int'],
        keywords: ['Number.isInteger', 'check integer', 'isInteger', 'number validation', 'decimal check']
    },
    {
        id: 'math-round',
        name: 'Math.round()',
        shortDescription: 'تقريب الرقم العشري الممرر إلى أقرب عدد صحيح رياضي تلقائياً.',
        longDescription: 'دالة رياضية تقوم بتقييم الكسر العشري للرقم؛ فإذا كان الكسر يساوي 0.5 أو أكثر تقرب القيمة للأعلى، وإذا كان الكسر أقل من 0.5 تقرب القيمة للأسفل مباشرة لأقرب عدد صحيح.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تقريب الكسور العشرية المختلفة للأعلى والأسفل رياضياً
console.log(Math.round(5.5));
console.log(Math.round(7.4));`
        ],
        expectedOutput: [
            "6\\n7"
        ],
        professionalTips: 'تذكر أن دالة التقريب هذه تعيد الرقم للأقرب اتجاهاً؛ إذا كنت ترغب في صياغة سيناريوهات التقريب الصارم باتجاه واحد للأعلى أو الأسفل دائماً، فاستخدم Math.ceil أو Math.floor.',
        commonMistakes: {
            wrong: `// استخدام Math.round لتقريب قيمة الفواتير السلبية دون إدراك تأثير الإزاحة
console.log(Math.round(-5.5)); // يقرب لـ -5 لأن -5 أكبر من -5.5 رياضياً بالذاكرة!`,
            right: `// الانتباه لاتجاه التقريب مع الأرقام السلبية بالاعتماد على قواعد الحساب الصحيحة
console.log(Math.round(-5.5)); // يطبع -5 ويقرب للأكبر اتجاهاً بالذاكرة`,
            explanation: 'جافا سكريبت تقرب الأعداد السلبية دوماً باتجاه اللانهاية الموجبة في حال التساوي الفاصل للأطراف (0.5)، مما يجعل -5.5 تنجذب نحو -5.'
        },
        thinkingWay: 'استخدم Math.round() في عمليات التقريب القياسية واليومية غير المشروطة لعرض نسب التقدم أو الإحصائيات العامة للمستخدم النهائي.',
        relatedMethods: ['math-ceil', 'math-floor'],
        keywords: ['Math.round', 'round float', 'round decimal', 'math rounding', 'closest integer']
    },
    {
        id: 'math-ceil',
        name: 'Math.ceil()',
        shortDescription: 'تقريب الرقم العشري قسرياً وبشكل دائم إلى أكبر عدد صحيح يعلوه مباشرة.',
        longDescription: 'دالة تقريب صاعدة؛ تقوم بتقريب الرقم العشري الممرر للأعلى مباشرة لأول عدد صحيح أكبر منه، بغض النظر عن قيمة الكسر العشري المتواجد بداخل العدد (ولو كان كسر ملياري بسيط).',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تقريب الرقم الكسري الصغير للأعلى قسرياً
console.log(Math.ceil(9.1));`
        ],
        expectedOutput: [
            "10"
        ],
        professionalTips: 'هذه الدالة هي المعيار الذهبي لحساب ترقيم الصفحات (Pagination)؛ لتضمن حجز صفحة كاملة إضافية لأي عناصر متبقية (حتى لو كان يتبقى عنصر واحد فقط لا غير).',
        commonMistakes: {
            wrong: `// حساب صفحات الترقيم بـ Math.round أو القسمة المباشرة دون صعود قسري للأعلى
const pages = Math.round(11 / 5); 
console.log(pages); // يطبع 2 صفحات، والناتج الفعلي يتطلب صفحة ثالثة لعرض العنصر المتبقي الـ 11!`,
            right: `// استخدام الصعود القسري بالذاكرة لضمان حيازة كافة المساحات لعرض كافة البيانات
const pages = Math.ceil(11 / 5); 
console.log(pages); // يطبع 3 صفحات بنجاح كامل وسليم لجميع المستخدمين`,
            explanation: 'التقريب للأعلى بـ Math.ceil يضمن صعود القيمة لأول عدد صحيح تالٍ مباشرة ليتوافق الكود مع متطلبات عرض البيانات غير الناقصة بالواجهات.'
        },
        thinkingWay: 'استخدم Math.ceil() دائماً عندما يتطلب منطق العمل استيعاب وحجز مساحات كاملة للأعداد الكسرية المتبقية (مثل حساب الشحنات، ترقيم الصفحات، أو تغطية الرزم والطرود الكلية).',
        relatedMethods: ['math-floor', 'math-round'],
        keywords: ['Math.ceil', 'round up', 'ceil float', 'ceil decimal', 'upper bound rounding']
    },
    {
        id: 'math-floor',
        name: 'Math.floor()',
        shortDescription: 'تقريب الرقم العشري قسرياً وبشكل دائم إلى أصغر عدد صحيح تحته مباشرة.',
        longDescription: 'دالة تقريب هابطة؛ تقوم بتقريب الرقم العشري الممرر للأسفل مباشرة لأول عدد صحيح يقل عنه، متجاهلة تماماً قيمة الكسر العشري المتواجد داخل العدد وبأداء عالي السرعة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تقريب كسر عشري كبير للأسفل قسرياً بالمتصفح
console.log(Math.floor(3.9));`
        ],
        expectedOutput: [
            "3"
        ],
        professionalTips: 'تعتبر هذه الدالة الأداة الأساسية والآمنة لتوليد الأرقام العشوائية الصحيحة عند دمجها حسابياً مع دالة التوليد العشوائي Math.random().',
        commonMistakes: {
            wrong: `// الخلط بين Math.floor و Math.trunc وتوقع تطابق الأداء مع الأرقام السالبة
console.log(Math.floor(-3.1)); // يطبع -4 لأن -4 أصغر من -3.1 رياضياً بالذاكرة!`,
            right: `// استخدام trunc للمسح الكسري الخالي من التقريب الرياضي للأرقام السالبة
console.log(Math.trunc(-3.1)); // يطبع -3 بنجاح تام وهو السلوك المطلوب حسابياً`,
            explanation: 'الدالة floor تقرب دائماً للقيمة الرياضية الأصغر؛ وبما أن -4 أصغر من -3، فإنها تهبط بالعدد السلبي للأسفل، بينما تقوم trunc ببتر الكسر صامتاً.'
        },
        thinkingWay: 'استخدم Math.floor() دائماً لقص الحدود وتقريب القيم الهابطة وتصفية معاملات التكرار العشوائية لقوالب تطبيقك.',
        relatedMethods: ['math-ceil', 'math-trunc'],
        keywords: ['Math.floor', 'round down', 'floor float', 'floor decimal', 'lower bound rounding']
    },
    {
        id: 'math-abs',
        name: 'Math.abs()',
        shortDescription: 'إرجاع القيمة المطلقة (الخالية من الإشارة السالبة) للرقم الممرر.',
        longDescription: 'دالة رياضية تقوم بتجريد الرقم الممرر من إشارته السالبة وإرجاع قيمته الموجبة المطلقة مباشرة؛ حيث تترك الأرقام الموجبة كما هي وتحول الأرقام السالبة لموجبة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تجريد الرقم السالب وتحويله لقيمة مطلقة موجبة
console.log(Math.abs(-3.9));`
        ],
        expectedOutput: [
            "3.9"
        ],
        professionalTips: 'استخدم Math.abs() لحساب الفروقات المطلقة والمسافات البرمجية بين عنصرين بالمتصفح؛ لتضمن عدم الحصول على قيم مسافات سالبة مضللة لواجهة الرسوم التفاعلية.',
        commonMistakes: {
            wrong: `const x1 = 10, x2 = 50;
const distance = x1 - x2; // ينتج -40، واستخدام هذه القيمة للتنسيقات المباشرة قد يعطل العرض!`,
            right: `const x1 = 10, x2 = 50;
const distance = Math.abs(x1 - x2); // الحصول على القيمة المطلقة الآمنة مباشرة
console.log(distance); // يطبع 40 بنجاح تام`,
            explanation: 'حساب الفروق الحركية يتطلب الحصول على قيم كمية مطلقة خالية من الإشارات الجانبية لتأمين سلامة تطبيق ستايلات العرض والتنسيقات.'
        },
        thinkingWay: 'استخدم هذه الدالة لحساب قيم الفروقات الرياضية، المسافات الرسومية بالصفحة، وفروق الأسعار دون الاهتمام باتجاه الترتيب الرقمي للمتغيرات.',
        relatedMethods: ['math-trunc'],
        keywords: ['Math.abs', 'absolute value', 'positive number', 'remove negative', 'distance formula']
    },
    {
        id: 'math-sqrt',
        name: 'Math.sqrt()',
        shortDescription: 'حساب وإرجاع الجذر التربيعي للرقم الممرر.',
        longDescription: 'دالة حسابية قياسية تقوم بحساب الجذر التربيعي للعدد الممرر (الرقم الذي إذا ضرب في نفسه ينتج العدد الأصلي). ترجع القيمة NaN في حال تمرير قيم سالبة لعدم إمكانية حسابها حقيقياً.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// حساب الجذر التربيعي للعدد 144 بالمتصفح
console.log(Math.sqrt(144));`
        ],
        expectedOutput: [
            "12"
        ],
        professionalTips: 'استخدم هذه الدالة بالتكامل مع نظرية فيثاغورس لحساب أطوال الأوتار والمسافات القطرية بين نقطتين على الشاشة التفاعلية لتطبيق الرسوم المتناسقة.',
        commonMistakes: {
            wrong: `console.log(Math.sqrt(-9)); // توقع الحصول على أعداد تخيلية؛ المتصفح لا يدعمها مباشرة ويرمي NaN!`,
            right: `console.log(Math.sqrt(Math.abs(-9))); // حماية المعامل بقيمة مطلقة موجبة قبل فك الجذر
console.log(Math.sqrt(9)); // يطبع 3 بنجاح تام دونNaN`,
            explanation: 'الجذور التربيعية للأعداد السلبية غير معرفة في نطاق الأعداد الحقيقية للجافا سكريبت؛ لذا يقوم المحرك فوراً بإلقاء الرمز الرياضي الخاص بالقيم غير الصالحة NaN.'
        },
        thinkingWay: 'استخدم Math.sqrt() عند إجراء الحسابات الهندسية، قياس مسافات الرسوم المستعرضة بالصفحة، أو حل المعادلات واللوغاريتمات الحسابية لبيانات الواجهة.',
        relatedMethods: ['math-pow'],
        keywords: ['Math.sqrt', 'square root', 'root symbol', 'geometry math', 'hypotenuse calculation']
    },
    {
        id: 'math-pow',
        name: 'Math.pow()',
        shortDescription: 'رفع الرقم الممرر للأس المحدد لحساب القيمة الرياضية الناتجة.',
        longDescription: 'دالة حسابية قديمة تقوم بحساب الأس؛ تأخذ معاملاً أول يمثل الأساس (base)، ومعاملاً ثانياً يمثل الأس (exponent) وترجع ناتج الضرب المتتابع.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// حساب قيمة رفع الرقم 2 للأس 3 يدوياً
console.log(Math.pow(2, 3));`
        ],
        expectedOutput: [
            "8"
        ],
        professionalTips: 'في الكود الحديث لعام 2026، يفضل تماماً استبدال Math.pow(x, y) بعامل الأس المدمج والأنظف كوداً والمطابق تماماً لصيغ الحسابات الرياضية العصرية: `x ** y`.',
        commonMistakes: {
            wrong: `console.log(Math.pow(2)); // نسيان المعامل الثاني للأس يرجع القيمة الخاطئة NaN دائماً`,
            right: `console.log(Math.pow(2, 3)); // تمرير الأساس والأس بدقة كاملة بالمعادلة
console.log(2 ** 3); // استخدام عامل الأس المدمج والأنظف لعام 2026`,
            explanation: 'الدالة تتطلب كمنطق برمي وجود طرفين لإجراء عملية الضرب التكراري للأس؛ وإغفال أحدهما يفشل المعادلة الحسابية تماماً.'
        },
        thinkingWay: 'استخدم عامل الأس `**` لسهولة قراءة الكود، ولا تستدعي Math.pow() إلا في كتل الأكواد القديمة وعند محاكاة المعالجات البرمجية القياسية السابقة.',
        relatedMethods: ['math-sqrt'],
        keywords: ['Math.pow', 'power of', 'exponentiation', 'multiply power', 'square value']
    },
    {
        id: 'math-min',
        name: 'Math.min()',
        shortDescription: 'البحث واستخراج القيمة الصغرى من قائمة الأرقام الممررة إليها.',
        longDescription: 'دالة مسح حسابية تقبل استلام قائمة مرنة من المعاملات الرقمية الفردية المفصولة بفاصلة، وتقوم بمقارنتها دفعة واحدة بالذاكرة وترجع القيمة الصغرى بينها.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تصفية واستخراج أصغر قيمة رقمية ممررة
console.log(Math.min(2, 3, 7, -10));`
        ],
        expectedOutput: [
            "-10"
        ],
        professionalTips: 'إذا كانت البيانات مخزنة داخل مصفوفة (Array)، فلا يمكنك تمرير المصفوفة مباشرة لـ Math.min؛ بل استخدم عامل النشر `Math.min(...array)` لفكها وتوزيعها كمعاملات مستقلة بنجاح.',
        commonMistakes: {
            wrong: `const nums = [5, 2, 8];
console.log(Math.min(nums)); // يطبع NaN لأن الدالة لا تفك تداخل المصفوفات تلقائياً!`,
            right: `const nums = [5, 2, 8];
console.log(Math.min(...nums)); // فك وتوزيع عناصر المصفوفة بنجاح بالناشر ...
console.log(Math.min(5, 2, 8)); // يطبع 2 بنجاح سليم دقيق`,
            explanation: 'الدالة مجهزة لاستقبال أرقام مفردة مفصولة بفاصلة كمعاملات مستقلة؛ وتمرير مصفوفة كاملة يربك مقارن المحرك ويفشله بالكامل ويرمي الرمز الحسابي NaN.'
        },
        thinkingWay: 'استخدم Math.min() عندما ترغب في حصر الحدود القصوى للتنقل (مثل ألا يتجاوز موضع العنصر الصفر)، أو للحصول على أقل سعر معروض للعميل من قائمة المنتجات.',
        relatedMethods: ['math-max'],
        keywords: ['Math.min', 'minimum value', 'lowest number', 'array min', 'rest spread min']
    },
    {
        id: 'math-max',
        name: 'Math.max()',
        shortDescription: 'البحث واستخراج القيمة الكبرى من قائمة الأرقام الممررة إليها.',
        longDescription: 'دالة مسح حسابية تقبل استلام قائمة مرنة من المعاملات الرقمية الفردية المفصولة بفاصلة، وتقوم بمقارنتها دفعة واحدة بالذاكرة وترجع القيمة العظمى الكبرى المكتشفة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// استخراج أكبر قيمة رقمية ممررة بالمتصفح
console.log(Math.max(2, 3, 999, -10, -500));`
        ],
        expectedOutput: [
            "999"
        ],
        professionalTips: 'استخدم عامل النشر `Math.max(...array)` لتوزيع عناصر المصفوفات وتمريرها بنجاح تام للدالة دفعة واحدة دون تداخل أو عناء كتابة حلقات معقدة.',
        commonMistakes: {
            wrong: `const nums = [10, 50, 2];
console.log(Math.max(nums)); // يطبع NaN لعدم استخدام عامل الفك ...`,
            right: `const nums = [10, 50, 2];
console.log(Math.max(...nums)); // فك وتوزيع سليم للمقارنة
console.log(Math.max(10, 50, 2)); // يطبع 50 بنجاح`,
            explanation: 'الدالة تتطلب معاملات رقمية صريحة ومفردة للبدء بالمقارنة الذاكرية؛ والمصفوفات لا تفك تلقائياً دون إشارة الناشر الصريحة ...'
        },
        thinkingWay: 'استخدم Math.max() لتحديد الحواجز المرئية لحركات الرسوم (مثل ألا يتجاوز طول البوكس العرض الأقصى المسموح به)، أو للحصول على أعلى قيمة سعرية في لوحة المبيعات.',
        relatedMethods: ['math-min'],
        keywords: ['Math.max', 'maximum value', 'highest number', 'array max', 'spread max']
    },
    {
        id: 'math-random',
        name: 'Math.random()',
        shortDescription: 'توليد أرقام عشوائية عشرية تقع بين الصفر والواحد.',
        longDescription: 'تقوم بتوليد رقم عشوائي عشري زائف (Pseudo-random) أكبر من أو يساوي الصفر وأقل تماماً من الواحد (0 <= x < 1). لتوليد أرقام صحيحة تقع ضمن نطاق مخصص، يتم دمج مخرجاتها حسابياً مع عمليات الضرب والتقريب الرياضي.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `// توليد قيمة عشوائية عشرية خام من المتصفح
console.log(Math.random());`
        ],
        expectedOutput: [
            "0.58492019481920 (رقم عشوائي متغير في كل دورة تشغيل)"
        ],
        professionalTips: 'تذكر أن Math.random() ليست آمنة تشفيرياً (Cryptographically Secure). لتوليد عناصر أمنية حساسة مثل رموز المصادقة والتحقق والرموز السرية (Tokens)، استخدم واجهة Web Crypto API المدمجة بالمتصفح عبر (window.crypto.getRandomValues).',
        commonMistakes: {
            wrong: `// استخدام التقريب للأعلى (Math.ceil) قد ينتج عنه أحياناً قيم خارج النطاق السفلي المتوقع
const badDieRoll = Math.ceil(Math.random() * 6); // قد ينتج صفر في حالات نادرة جداً ومثيرة للجدل بالذاكرة`,
            right: `// استخدام التقريب للأسفل (Math.floor) للحصول على توزيع متساوٍ رياضي سليم
const safeDieRoll = Math.floor(Math.random() * 6) + 1; // يضمن نطاقاً من 1 إلى 6 بدقة كاملة`,
            explanation: 'العمليات الحسابية القياسية تعتمد على Math.floor بالاقتران مع التوليد العشوائي لتوفير معامل توزيع رياضي متساوي الحظوظ لكافة القيم المتاحة داخل النطاق المحدد.'
        },
        thinkingWay: 'استخدم Math.random() عند رغبتك في بناء سلوكيات ديناميكية بسيطة مثل اختيار فائز عشوائي من مصفوفة، أو تغيير خلفية الصفحة بصورة عشوائية، أو توليد معرفات عارضة غير مشفرة.',
        relatedMethods: ['math-floor'],
        keywords: ['Math.random', 'randomizer', 'integer generation', 'crypto security', 'die roll']
    },
    {
        id: 'math-trunc',
        name: 'Math.trunc()',
        shortDescription: 'بتر وحذف الكسر العشري تماماً والاحتفاظ بالجزء الصحيح من الرقم دون أي عمليات تقريب.',
        longDescription: 'دالة مسح كسري دقيقة؛ تقوم بإزالة الفاصلة وكافة الأرقام العشرية التي تليها تماماً وإرجاع الجزء الصحيح من العدد، دون الالتفات للقواعد الرياضية للتقريب للأعلى أو الأسفل.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// بتر الكسر العشري الطويل والاحتفاظ بالعدد الصحيح الحقيقي
console.log(Math.trunc(100.5555));`
        ],
        expectedOutput: [
            "100"
        ],
        professionalTips: 'الدالة ممتازة للاستخدام مع الأرقام السالبة؛ لأنها تبتر الكسر فقط وتضمن عدم ترحيل الرقم للأسفل عكسياً كما تفعل دالة Math.floor().',
        commonMistakes: {
            wrong: `// استخدام Math.floor للبتر العريض للكسور مع القيم السلبية يسبب إزاحة غير دقيقة للأسفل
console.log(Math.floor(-5.9)); // يطبع -6 لتقريبه للقيمة الأصغر تحت الكسر رياضياً`,
            right: `// استخدام Math.trunc لبتر الكسر وحماية العدد الصحيح السالب من الإزاحة العكسية
console.log(Math.trunc(-5.9)); // يطبع -5 بنجاح تام وهو القيمة المقصودة في الحسابات`,
            explanation: 'بتر الكسر العشري يتطلب استئصال الأرقام المجاورة للفاصلة دون إجراء عمليات حسابية ترحيلية؛ دالة trunc تضمن استقرار السلوك السلبي للعدد.'
        },
        thinkingWay: 'استخدم Math.trunc() عندما يكون هدفك الوحيد هو الحصول على الجزء الصحيح الصلب من الرقم (مثل تحديد عدد الساعات الكاملة من كسر زمني طويل دون الرغبة في صعود أو هبوط رقمي مضلل).',
        relatedMethods: ['math-floor', 'math-ceil'],
        keywords: ['Math.trunc', 'truncate float', 'truncate decimal', 'strip fraction', 'integer part']
    }
];