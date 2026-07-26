export const datesData = [
    {
        id: 'date-creation-parsing',
        name: 'Date Object & Parsing',
        shortDescription: 'إنشاء تمثيلات زمنية وتحليل التواريخ باستخدام كائن Date الأساسي في جافا سكريبت.',
        longDescription: 'يوفر كائن Date المدمج في لغة جافا سكريبت القدرة على العمل مع التواريخ والأوقات؛ حيث يسمح بإنشاء كائن يمثل لحظة تشغيل الكود الحالية، أو تحليل نصوص التواريخ، أو تعيين قيم مخصصة باستخدام الطوابع الزمنية بالمللي ثانية (Epoch Timestamp) المنقضية منذ 1 يناير 1970.',
        difficulty: 'medium',
        importance: 'high',
        examples: [
            `// إنشاء التواريخ بعدة طرق واستخراج الطابع الزمني الملي ثنائي
const now = new Date(); // اللحظة الحالية
const specificDate = new Date('2026-07-06T00:00:00'); // تعيين تاريخ مخصص بصيغة ISO
const timestamp = Date.now(); // الطابع الزمني الحالي بالمللي ثانية مباشرة

console.log('الوقت الحالي القياسي:', now.toISOString());
console.log('تاريخ مخصص:', specificDate.getFullYear());
console.log('الطابع الزمني بالمللي ثانية:', timestamp);`
        ],
        expectedOutput: [
            "الوقت الحالي القياسي: 2026-07-06T00:00:00.000Z (أو التوقيت الحالي)\\nتاريخ مخصص: 2026\\nالطابع الزمني بالمللي ثانية: 1783296000000 (أو الرقم الفعلي اللحظي)"
        ],
        professionalTips: 'عند العمل مع الفروقات الزمنية أو قياس زمن تنفيذ كود معين، لا تقم بإنشاء كائنات Date كاملة غير مجدية؛ بل استعن بالدالة الخفيفة والسريعة Date.now() أو الأداة عالية الدقة performance.now() لتوفير موارد الذاكرة والوصول للطابع الزمني بشكل مباشر.',
        commonMistakes: {
            wrong: `// خطأ في فك تواريخ مخصصة بنصوص غير قياسية مما يعود بـ Invalid Date
const badDate = new Date('06/07/2026 12:00:00'); // قد يختلف تفسيرها من متصفح لآخر وتسبب انهياراً للمنطق
console.log(badDate.toString());`,
            right: `// استخدام الصيغة العالمية الموحدة ISO 8601 دائماً لضمان ثبات التفسير
const safeDate = new Date('2026-07-06T12:00:00Z'); // تفسير موحد ومستقر في كافة متصفحات العالم
console.log(safeDate.toISOString());`,
            explanation: 'صياغات التواريخ النصية غير القياسية تُعالج بأساليب مختلفة من متصفح لآخر (مثال: سفاري مقابل كروم) مما قد ينتج عنه ظهور أخطاء من نوع "Invalid Date" لبعض مستخدمي تطبيقك. استخدام صيغة ISO 8601 يضمن معالجة متطابقة 100% في كافة المحركات.'
        },
        thinkingWay: 'استخدم كائن Date الأساسي عندما تحتاج لحساب أزمنة العمليات البرمجية، أو تخزين تواريخ المعاملات، أو إنشاء سجلات زمنية متوافقة مع الخوادم التي تعتمد على الطوابع الرقمية (Timestamps) أو صياغة ISO.',
        relatedMethods: ['date-formatting-intl'],
        keywords: ['Date', 'timestamp', 'parse date', 'ISO 8601', 'epoch time', 'Date.now']
    },
    {
        id: 'date-formatting-intl',
        name: 'Date Formatting (Intl API)',
        shortDescription: 'تنسيق التواريخ والأوقات بما يتناسب مع اللغات والمناطق الجغرافية المختلفة دون مكتبات خارجية.',
        longDescription: 'يمثل واجهة جافا سكريبت الحديثة لتنسيق التواريخ محلياً باستخدام دالتي toLocaleDateString و toLocaleTimeString أو كائن Intl.DateTimeFormat التابع لواجهة التدويل (Internationalization API). يتيح هذا الأسلوب طباعة الشهور والأيام والأنماط الزمنية باللغة العربية أو أي لغة أخرى دون الحاجة لاستيراد مكتبات ضخمة.',
        difficulty: 'medium',
        importance: 'high',
        examples: [
            `// تنسيق وعرض التواريخ باللغة العربية وبخيارات مخصصة بالكامل
const today = new Date('2026-07-06T15:30:00');

// خيارات التنسيق المفصلة
const options = { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric', 
  hour: 'numeric', 
  minute: '2-digit' 
};

const arabicFormat = today.toLocaleDateString('ar-EG', options);
const simpleTime = today.toLocaleTimeString('ar-EG', { hour12: true });

console.log('التاريخ بالتنسيق العربي المنسق:', arabicFormat);
console.log('الوقت المنسق:', simpleTime);`
        ],
        expectedOutput: [
            "التاريخ بالتنسيق العربي المنسق: الاثنين، ٦ يوليو ٢٠٢٦ ٧:٣٠ م (أو حسب المنطقة وتنسيق الساعات المعتمد)\\nالوقت المنسق: ٣:٣٠:٠٠ م"
        ],
        professionalTips: 'في عام 2026، تخلّ تماماً عن استخدام مكتبات التواريخ العتيقة والضخمة مثل Moment.js في تطبيقات الواجهات الأمامية. واجهة Intl المدمجة مدعومة بالكامل، وتعمل بسرعة فائقة على مستوى متصفح المستخدم دون تحميل كيلوبايتات إضافية على باقة الزوار.',
        commonMistakes: {
            wrong: `// استخدام الاستخراج اليدوي لبناء النص والوقوع في أخطاء التنسيق وعلامات الفتحة والكسرة
const d = new Date();
const manualText = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear(); 
console.log(manualText); // ينتج تنسيقاً جافاً يفتقر للتخصيص اللغوي المناسب لكل مستخدم`,
            right: `// استخدام التنسيق التلقائي الذكي المبني على لغة متصفح المستخدم
const d = new Date();
const formatted = d.toLocaleDateString(navigator.language); // يكتشف لغة المستخدم تلقائياً وينسق على أساسها
console.log(formatted);`,
            explanation: 'الاستخراج اليدوي يتجاهل الفروقات الجغرافية وطرق عرض التواريخ المعتمدة في مختلف البلدان (مثل ترتيب اليوم والشهر)، كما أنه يتطلب جهداً كبيراً لإظهار أسماء الأيام والشهور بنصوص مقروءة.'
        },
        thinkingWay: 'استخدم واجهات التنسيق المدمجة (Intl) كخيار أساسي دائم عند رغبتك في إظهار وعرض التواريخ والأوقات للمستخدم النهائي على واجهات الويب بطريقة مقروءة، مألوفة، ومخصصة لثقافته الجغرافية ولغته النشطة.',
        relatedMethods: ['date-creation-parsing'],
        keywords: ['toLocaleDateString', 'toLocaleTimeString', 'Intl.DateTimeFormat', 'localization', 'moment.js alternative', 'date format']
    }
];