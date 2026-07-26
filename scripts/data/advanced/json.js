export const jsonData = [
    {
        id: 'json-serialization',
        name: 'JSON.stringify() & JSON.parse()',
        shortDescription: 'النظام المعياري العالمي لمعالجة وتداول البيانات النصية وتحويل كائنات جافا سكريبت وتفكيكها.',
        longDescription: 'كائن عالمي مدمج في اللغة يُستخدم لإدارة صيغة البيانات المعيارية الأكثر شيوعاً في الويب JSON (JavaScript Object Notation). تتيح دالة stringify ترميز وتشفير كائنات ومصفوفات جافا سكريبت وتحويلها لسلسلة نصية متوافقة وصالحة للإرسال عبر شبكة الإنترنت. بينما تقوم دالة parse بتحليل السلسلة النصية المستلمة وإعادة تكوينها ككائنات أو مصفوفات حية داخل الذاكرة.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// فك بيانات JSON مستلمة من خادم خارجي وترميز طلب محلي للإرسال
const serverResponse = '{"id": 101, "status": "active", "roles": ["admin"]}';

// فك الترميز (Parsing)
const parsedData = JSON.parse(serverResponse);
console.log('المعرف المسترجع من النص:', parsedData.id);
console.log('الصلاحية الأساسية للعميل:', parsedData.roles[0]);

// الترميز (Stringify)
const payload = { userId: 101, action: 'refresh_session' };
const jsonString = JSON.stringify(payload);
console.log('النص البرمجي الصالح للإرسال بالشبكة:', jsonString);`
        ],
        expectedOutput: [
            "المعرف المسترجع من النص: 101\\nالصلاحية الأساسية للعميل: admin\\nالنص البرمجي الصالح للإرسال بالشبكة: {\"userId\":101,\"action\":\"refresh_session\"}"
        ],
        professionalTips: 'تذكر دائماً عند استخدام JSON.stringify() أن الخصائص التي تحمل القيمة undefined أو الدوال (methods) والرموز (symbols) يتم حذفها واستبعادها تلقائياً من النص النهائي المفرز؛ لأن صيغة JSON القياسية لا تدعم هذه الأنواع الخاصة بجافا سكريبت بل تقتصر فقط على النصوص، الأرقام، البوليان، الكائنات، المصفوفات، والقيم الخالية (null).',
        commonMistakes: {
            wrong: `// محاولة ترميز كائن يحتوي على تداخل مرجعي دائري (Circular Reference) مما يؤدي لانهيار فوري للتطبيق
const nodeA = { name: 'العقدة أ' };
const nodeB = { name: 'العقدة ب', link: nodeA };
nodeA.link = nodeB; // مرجع حلقي دائري مغلق

JSON.stringify(nodeA); // خطأ برمجي فادح: TypeError: Converting circular structure to JSON`,
            right: `// فك الترابط الدائري وصياغة كائن مسطح خالٍ من الحلقات الذاكرية المغلقة قبل الترميز
const nodeA = { name: 'العقدة أ' };
const nodeB = { name: 'العقدة ب', link: nodeA };
nodeA.link = nodeB;

// استخلاص البيانات الخطية وتجنب الحلقات الدائرية في الذاكرة
const safeNode = { name: nodeA.name, linkName: nodeA.link?.name };
console.log(JSON.stringify(safeNode)); // يعمل بسلام تام وأمان`,
            explanation: 'المراجع الدائرية (Circular References) تحدث عندما تشير الكائنات إلى بعضها البعض بشكل حلقي متبادل. عند محاولة ترميزها بـ stringify، يحاول المحرك سبر الخصائص لعمق لا نهائي، مما يتسبب في فيضان الذاكرة ومقاطعة السكربت قسرياً لحماية نظام التشغيل.'
        },
        thinkingWay: 'استخدم كائن JSON كخيار قياسي عالمي متكامل عندما ترغب في تهيئة البيانات لتبادلها مع الخوادم السحابية (APIs)، أو لحفظ وتخزين كتل البيانات المعقدة داخل كائنات التخزين المحلي، أو كوسيلة بديلة وسريعة لنسخ الكائنات العادية الخالية من الدوال بشكل نقي وضحل في الذاكرة.',
        relatedMethods: ['web-storage-api'],
        keywords: ['JSON.parse', 'JSON.stringify', 'JSON format', 'serialization', 'circular reference', 'data payload']
    }
];