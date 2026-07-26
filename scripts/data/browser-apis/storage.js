export const storageData = [
    {
        id: 'web-storage-api',
        name: 'LocalStorage & SessionStorage',
        shortDescription: 'حفظ وتخزين بيانات التفاعل محلياً على متصفح المستخدم لاسترجاعها بعد التحديث أو إغلاق التطبيق.',
        longDescription: 'تعد واجهة Web Storage API (وتحديداً LocalStorage و SessionStorage) الحل المدمج والأسهل لحفظ البيانات على متصفح العميل كأزواج من المفاتيح والقيم (Key-Value). تكمن التفرقة الحاسمة بينهما في مدة بقاء البيانات؛ حيث يحتفظ LocalStorage بالبيانات بشكل دائم حتى لو تم إغلاق المتصفح أو إطفاء الجهاز، بينما يحفظ SessionStorage البيانات بشكل مؤقت ينتهي فور إغلاق تبويب التصفح الحالي (Tab).',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// حفظ وقراءة وإزالة إعدادات سمة واجهة المستخدم (Theme)
const toggleTheme = (themeName) => {
  // 1. الحفظ في الذاكرة الدائمة للمتصفح
  localStorage.setItem('preferred-theme', themeName);
  document.body.className = themeName;
};

// 2. قراءة القيمة المخزنة عند تحميل الصفحة لتطبيق السمة المفضلة
const savedTheme = localStorage.getItem('preferred-theme');
if (savedTheme) {
  document.body.className = savedTheme;
}

// 3. مسح السمة المحددة أو تصفير الذاكرة كلياً عند تسجيل الخروج
const clearSettings = () => {
  localStorage.removeItem('preferred-theme'); // إزالة حقل محدد
  // localStorage.clear(); // مسح كافة البيانات المخزنة لهذا الموقع بالكامل
};`
        ],
        expectedOutput: [
            "(حفظ التفضيلات وقراءتها بنجاح من مساحة التخزين المستقرة للمتصفح)"
        ],
        professionalTips: 'تذكر دائماً أن مساحة التخزين المتاحة في Web Storage محدودة (تقريباً 5 إلى 10 ميغابايت كحد أقصى حسب المتصفح). تجنب استخدامها لتخزين ملفات ضخمة أو مصفوفات بيانات معقدة هائلة الحجم. والأهم من ذلك: لا تخزن أبداً بيانات أمنية حساسة (مثل كلمات المرور، أو بيانات بطاقات الائتمان، أو رموز الجلسات الحساسة Tokens) بداخلها؛ لأنها عرضة للاختراق والقراءة المباشرة من أي سكربت خارجي عبر هجمات XSS.',
        commonMistakes: {
            wrong: `// خطأ شائع: تخزين الرموز الأمنية السرية في LocalStorage بشكل دائم وسهل الاختراق
localStorage.setItem('user_session_token', 'JWT_SECRET_TOKEN_XYZ123'); // ممارسة خطيرة وغير أمنية بالمرة`,
            right: `// استخدام ملفات تعريف الارتباط الآمنة (HttpOnly Cookies) للمعلومات الحساسة
// وتحديد تخزين الحافظة للبيانات غير الأمنية والخيارات التنسيقية فقط
localStorage.setItem('app_sidebar_collapsed', 'false'); // حفظ سليم ومقبول للخيارات التنسيقية العادية`,
            explanation: 'أي كود جافا سكريبت يعمل على الصفحة (بما في ذلك السكربتات المضافة مثل Google Analytics أو المكتبات الخارجية) لديه صلاحية كاملة لقراءة محتويات LocalStorage عبر تعليمة بسيطة. تخزين الرموز الحساسة فيها يسهل سرقة جلسة المستخدم بالكامل.'
        },
        thinkingWay: 'استخدم LocalStorage لحفظ تفضيلات المستخدم غير الحساسة التي ترغب ببقائها عبر الجلسات المتتالية (مثل تفعيل الوضع المظلم، لغة العرض المفضلة، محتويات سلة الشراء غير المكتملة)، واستخدم SessionStorage لتخزين حالات مؤقتة تنتهي بانتهاء الاستخدام الحالي (مثل تعبئة نموذج متعدد الخطوات لمنع فقدان البيانات عند التحديث العارض للصفحة).',
        relatedMethods: ['storage-serialization'],
        keywords: ['localStorage', 'sessionStorage', 'setItem', 'getItem', 'removeItem', 'clear', 'web storage', 'security', 'state persistence']
    },
    {
        id: 'storage-serialization',
        name: 'JSON Storage Serialization',
        shortDescription: 'تحويل وتخزين هياكل البيانات المعقدة (كالكائنات والمصفوفات) داخل مساحات التخزين بنجاح.',
        longDescription: 'تقبل واجهة Web Storage تخزين البيانات كمتغيرات نصية فقط (Strings). محاولة تخزين كائن أو مصفوفة مباشرة بداخلها تتسبب في تحويلها تلقائياً إلى النص غير المفيد "[object Object]". لحل هذه المشكلة، يجب إحاطة البيانات بعملية ترميز (Serialization)؛ حيث تُحول الكائنات لنصوص عبر JSON.stringify قبل التخزين، وتُعاد لقالبها الأصلي عبر JSON.parse عند القراءة.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `// حفظ واسترجاع مصفوفة من الكائنات المعقدة بدقة تامة
const cartItems = [
  { id: 201, name: 'حاسوب', qty: 1 },
  { id: 202, name: 'فأرة', qty: 2 }
];

// 1. الترميز والحفظ: تحويل المصفوفة لنص بصيغة JSON
localStorage.setItem('user_cart', JSON.stringify(cartItems));

// 2. القراءة وفك الترميز: قراءة النص وإعادته لمصفوفة كائنات حية
const rawCart = localStorage.getItem('user_cart');
const parsedCart = rawCart ? JSON.parse(rawCart) : [];

console.log('المصفوفة المسترجعة بنجاح:', parsedCart);
console.log('التحقق من نوع البيانات بعد الفك:', Array.isArray(parsedCart));`
        ],
        expectedOutput: [
            "المصفوفة المسترجعة بنجاح: [ { id: 201, name: 'حاسوب', qty: 1 }, { id: 202, name: 'فأرة', qty: 2 } ]\\nالتحقق من نوع البيانات بعد الفك: true"
        ],
        professionalTips: 'دائماً احرص على إحاطة عملية استدعاء JSON.parse() بكتلة فحص الأخطاء try...catch أو استخدم التحقق الثلاثي الآمن. إذا تلوثت البيانات المخزنة بنصوص غير صالحة هيكلياً (Malformed JSON) بفعل تعديل خارجي أو إصدارات برمجية قديمة، ستنهار الدالة وتؤدي لتوقف كامل السكربت عن العمل مباشرة.',
        commonMistakes: {
            wrong: `// تخزين كائنات برمجية مباشرة وتوقع قراءتها بنجاح
const user = { name: 'سليمان' };
localStorage.setItem('active_user', user); // سيتم تخزينها كنص '[object Object]'

const saved = localStorage.getItem('active_user');
console.log(saved.name); // يطبع undefined لأن النص '[object Object]' لا يحتوي على خاصية name!`,
            right: `// استخدام التحويل النصي قبل التخزين والتحليل عند القراءة
const user = { name: 'سليمان' };
localStorage.setItem('active_user', JSON.stringify(user)); // حفظ سليم بالكامل

const savedRaw = localStorage.getItem('active_user');
const savedUser = savedRaw ? JSON.parse(savedRaw) : null;
console.log(savedUser?.name); // يطبع 'سليمان' بنجاح تام`,
            explanation: 'لأن مساحة تخزين المتصفح مجهزة لحفظ السلاسل النصية فقط، فإن محاولة تمرير كائن أو مصفوفة تجبر المتصفح على استدعاء الدالة الافتراضية للتحويل النصي toString() والتي ترجع النص المبهم "[object Object]" مدمرةً البيانات الفعلية تماماً.'
        },
        thinkingWay: 'استخدم هذا التكنيك القياسي المزدوج دائماً عندما ترغب في حفظ مصفوفات البيانات، كائنات الملف الشخصي للمستخدم، الإعدادات الفرعية المتعددة، أو سلال الشراء المعقدة داخل كائنات التخزين المحلي والوصول إليها لاحقاً بصيغتها الأصلية المترابطة.',
        relatedMethods: ['web-storage-api'],
        keywords: ['JSON.stringify', 'JSON.parse', 'serialization', 'JSON storage', 'structured clone alternative', 'web storage', 'objects array storage']
    }
];