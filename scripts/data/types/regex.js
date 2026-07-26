export const regexData = [
    {
        id: 'regex-test',
        name: 'RegExp.prototype.test()',
        shortDescription: 'فحص ومطابقة النصوص للتحقق من توافقها مع نمط معين (مثل البريد الإلكتروني أو أرقام الهواتف).',
        longDescription: 'دالة مدمجة في كائنات التعبيرات النمطية (Regular Expressions) تقوم بفحص السلسلة النصية الممررة إليها؛ حيث تُرجع ناتجاً منطقياً (True) إذا عثرت على تطابق للنمط المحدد في النص، أو (False) في حال عدم التطابق. تمثل الأداة الأساسية والأكثر كفاءة للتحقق من صحة مدخلات النماذج (Data Validation).',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `// التحقق من صحة بريد إلكتروني قبل إرساله للخادم
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;

const userEmail1 = 'developer.sulaiman@gmail.com';
const userEmail2 = 'invalid-email@com';

console.log('البريد الأول صالح؟', emailPattern.test(userEmail1));
console.log('البريد الثاني صالح؟', emailPattern.test(userEmail2));`
        ],
        expectedOutput: [
            "البريد الأول صالح؟ true\\nالبريد الثاني صالح؟ false"
        ],
        professionalTips: 'احذر عند استخدام دالة test() مع التعبيرات النمطية التي تستخدم علم التكرار الشامل (g flag)؛ حيث يحتفظ الكائن بموضع البحث الأخير (lastIndex) داخلياً، مما يؤدي لنتائج فحص متذبذبة وغير دقيقة (يرجع true في دورة و false في الدورة التالية لنفس النص تماماً). لعمليات التحقق الشرطي، لا تستخدم علم التكرار (g flag) أبداً.',
        commonMistakes: {
            wrong: `// خطأ شائع: استخدام علم التكرار الشامل مع دالة الفحص test
const phonePattern = /\\d+/g;
const number = '12345';

console.log(phonePattern.test(number)); // يطبع true
console.log(phonePattern.test(number)); // يطبع false! بسبب تغير lastIndex داخلياً`,
            right: `// إزالة العلم الشامل (g) من نمط الفحص الشرطي لضمان دقة واستقرار النتيجة
const phonePattern = /\\d+/;
const number = '12345';

console.log(phonePattern.test(number)); // يطبع true دائماً وثابت في كل استدعاء
console.log(phonePattern.test(number)); // يطبع true دائماً وثابت`,
            explanation: 'عند وضع علم g، يقوم محرك جافا سكريبت بتحديث خاصية lastIndex في كائن RegExp بعد كل نجاح للبحث ليبدأ الفحص التالي من نهاية المطابقة السابقة. عندما يستدعى الفحص مرة أخرى على نفس النص القصير، يبدأ من موضع متقدم ويفشل، ثم يصفر المؤشر ليعاود النجاح لاحقاً.'
        },
        thinkingWay: 'استخدم RegExp.test() عندما يكون هدفك الوحيد هو معرفة هل يتبع النص هيكلاً محدداً أم لا (نعم/لا) دون الرغبة في اقتطاع أجزاء من النص أو استخراج القيم المطابقة.',
        relatedMethods: ['regex-match'],
        keywords: ['RegExp.test', 'regular expression', 'data validation', 'pattern matching', 'lastIndex', 'email regex']
    },
    {
        id: 'regex-match',
        name: 'String.prototype.match()',
        shortDescription: 'استخراج الكلمات أو الرموز المتطابقة مع نمط تعبيري معين من داخل نص طويل.',
        longDescription: 'دالة تابعة لنصوص جافا سكريبت تُستخدم لاستخراج مصفوفة تحتوي على كافة الأجزاء والكلمات التي تتطابق مع نمط التعبير النمطي (Regular Expression) الممرر إليها. تتميز بمرونتها العالية عند دمجها مع الأعلام الخاصة بالتكرار الشامل (g flag) لتجميع كافة المطابقات دفعة واحدة.',
        difficulty: 'medium',
        importance: 'high',
        examples: [
            `// استخراج كافة أرقام الهواتف المذكورة داخل رسالة نصية واردة من الخادم
const message = 'برجاء التواصل على الرقم 05317730730 أو الرقم الاحتياطي 05319999999';
const phonePattern = /\\d{11}/g; // نمط يبحث عن سلسلة مكونة من 11 رقماً متتالياً

const matchedPhones = message.match(phonePattern);
console.log('الأرقام المستخرجة:', matchedPhones);`
        ],
        expectedOutput: [
            "الأرقام المستخرجة: [ '05317730730', '05319999999' ]"
        ],
        professionalTips: 'تذكر أن دالة match() ستعيد القيمة null إذا لم تجد أي تطابق للنمط داخل النص. لتجنب انهيار تطبيقك بـ TypeError عند محاولة قراءة مخرجات الدالة أو تتبع طول المصفوفة المرتجعة، استخدم دائماً التقييم المختصر (Nullish Coalescing) أو عامل التثبيت الإضافي لإعطاء مصفوفة فارغة كبديل احتياطي.',
        commonMistakes: {
            wrong: `// خطأ شائع: محاولة استخراج ومعالجة مخرجات match دون فحص وجود مطابقات
const postText = 'كود برمجي بسيط';
const hashtags = postText.match(/#[a-zA-Z0-9]+/g); // يرجع null لعدم وجود وسوم
console.log(hashtags.length); // سيتسبب بانهيار التطبيق: TypeError: Cannot read properties of null`,
            right: `// حماية السكربت بتوفير مصفوفة احتياطية فارغة في حال عدم وجود مطابقات
const postText = 'كود برمجي بسيط';
const hashtags = postText.match(/#[a-zA-Z0-9]+/g) ?? []; // يرجع مصفوفة فارغة كبديل آمن لـ null
console.log(hashtags.length); // يطبع 0 بأمان وتستمر حركة الكود بنجاح`,
            explanation: 'لأن دالة match ترجع القيمة null عند الفشل في العثور على أي مطابقات، فإن محاولة الوصول لأي من ميزات المصفوفات (مثل length أو map) على قيمة فارغة تتسبب في توقف محرك التشغيل وإصدار خطأ فادح.'
        },
        thinkingWay: 'استخدم String.match() عندما يكون هدفك الأساسي هو استخلاص واقتطاع بيانات محددة من داخل كتل نصية كبيرة غير منظمة (مثل سحب الروابط، أو تصفية التغريدات لاستخراج الأوسوم والوسوم) لتحويلها إلى مصفوفة بيانات قابلة للمعالجة.',
        relatedMethods: ['regex-test'],
        keywords: ['match', 'string extraction', 'regex parse', 'g flag', 'pattern extraction', 'null handling']
    }
];