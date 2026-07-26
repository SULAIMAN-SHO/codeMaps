export const bomWindowData = [
    {
        id: 'bom-location-navigation',
        name: 'Window Location & Redirection',
        shortDescription: 'إدارة وتتبع روابط المتصفح الحالية، التنقل المباشر، وتحديث كائنات الصفحة بأمان.',
        longDescription: 'يوفر الكائن window.location التحكم الكامل برابط الصفحة الحالي (URL) ومكوناته (مثل المضيف، بروتوكول الاتصال، والمنفذ). يتيح هذا الكائن التوجيه السلس لصفحات بديلة باستخدام assign، أو استبدال الواجهة الحالية تماماً دون حفظ الصفحة السابقة في سجل تصفح المستخدم باستخدام replace، وتحديث الصفحة الحالية بـ reload.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// قراءة تفاصيل الرابط الحالي وتوجيه المستخدم تفاعلياً
console.log('البروتوكول النشط:', window.location.protocol); // يطبع https: أو http:
console.log('اسم النطاق المضيف:', window.location.hostname); // يطبع اسم الموقع

// التوجيه لصفحة جديدة مع حفظ المسار القديم في سجل التصفح (يمكن العودة بالخلف)
const navigateToDashboard = () => {
  window.location.assign('https://example.com/dashboard');
};

// التوجيه الآمن لصفحة تسجيل الخروج مع مسح السجل (لا يمكن العودة للخلف)
const handleLogout = () => {
  window.location.replace('/login');
};`
        ],
        expectedOutput: [
            "(طباعة حية لبيانات الرابط الفعلي بالـ Console، وتوجيه المتصفح حسب الاستدعاء)"
        ],
        professionalTips: 'عند الرغبة في عمل توجيه آمن للمستخدم بعد عمليات تسجيل الخروج أو انتهاء الجلسة، استخدم دائماً window.location.replace() بدلاً من assign(). هذا يمنع العميل تماماً من الضغط على زر "العودة للخلف" (Back Button) في متصفحه والدخول لصفحة البيانات الحساسة المحفوظة مؤقتاً.',
        commonMistakes: {
            wrong: `// محاولة توجيه المستخدم بالوصول لخصائص غامضة أو نسيان الفروقات البرمجية
const logout = () => {
  window.location = '/login'; // تعمل تقنياً كـ assign ولكن صياغتها غير صريحة وتصعب تتبع نية المبرمج
};`,
            right: `// استخدام الصياغة المباشرة والصريحة للتحكم الكامل بسجل التصفح
const logout = () => {
  window.location.replace('/login'); // كود معماري نظيف وواضح النية الصيانة
};`,
            explanation: 'الصياغة المباشرة لـ replace() تفصح صراحة لزملائك بالفريق أن الصفحة لن تُحفظ في سجل التصفح، وهو سلوك أساسي ومطلوب للتعامل مع العمليات الأمنية وبوابات الدفع وجلسات التحقق.'
        },
        thinkingWay: 'استخدم window.location عندما تحتاج للتعامل مع روابط الويب ديناميكياً؛ مثل قراءة معرّفات المسار المكتوبة بالرابط، توجيه العميل لبوابة دفع خارجية، أو تطبيق تحديث قسري للصفحة لتنظيف الذاكرة الموقتة.',
        relatedMethods: ['bom-navigator-features'],
        keywords: ['location', 'assign', 'replace', 'reload', 'BOM', 'redirection', 'URL parsing', 'window.location']
    },
    {
        id: 'bom-timers-scheduling',
        name: 'Window Timers (setTimeout & setInterval)',
        shortDescription: 'جدولة وجدولة دورية لتنفيذ الأكواد البرمجية بعد فترات زمنية محددة بدقة.',
        longDescription: 'دوال مدمجة ببيئة المتصفح تتيح التخطيط الزمني لتنفيذ الشيفرات البرمجية؛ حيث تقوم setTimeout بتشغيل دالة استدعاء لمرة واحدة بعد انقضاء الوقت المحدد بالمللي ثانية، بينما تقوم setInterval بتكرار تشغيل الدالة بانتظام وبشكل مستمر بعد كل فترة زمنية محددة. يتطلب استخدامهما تتبع المعرّف (Timer ID) لإلغاء الجدولة بأمان لتلافي تداخل العمليات.',
        difficulty: 'medium',
        importance: 'high',
        examples: [
            `// 1. جدولة إخفاء إشعار بعد مرور ثانيتين بأمان
const notification = document.querySelector('.toast-alert');
const timeoutId = setTimeout(() => {
  if (notification) notification.style.display = 'none';
  console.log('تم إخفاء الإشعار بنجاح');
}, 2000);

// إذا قرر المستخدم إلغاء العملية يدوياً قبل ثانيتين
// clearTimeout(timeoutId);

// 2. تحديث ساعة رقمية حية على الواجهة كل ثانية
const clockElement = document.querySelector('#clock');
const intervalId = setInterval(() => {
  const now = new Date();
  if (clockElement) {
    clockElement.textContent = now.toLocaleTimeString();
  }
}, 1000);

// لإيقاف الساعة عند الحاجة لاحقاً
// clearInterval(intervalId);`
        ],
        expectedOutput: [
            "(تشغيل الإجراءات البرمجية بعد ثانيتين، وتحديث محتوى الساعة بالبث الحي كل ثانية)"
        ],
        professionalTips: 'في بيئة العمل وسياقات الواجهات الحديثة (مثل React و Vue)، نسيان تنظيف وإلغاء الجدولة بـ clearTimeout و clearInterval عند تدمير أو مغادرة المكون النشط يتسبب في تسريب خطير للذاكرة (Memory Leaks) ويجعل الكود القديم يعمل بشكل خفي ومستمر بالخلفية مستهلكاً موارد المتصفح؛ احرص دائماً على تنظيف العدادات.',
        commonMistakes: {
            wrong: `// خطأ شائع: نسيان حفظ معرّف التكرار ومحاولة الإلغاء من الفراغ
setInterval(() => {
  console.log('عملية مستمرة بالخلفية...');
}, 500);
// لا توجد أي طريقة برمجية للوصول للمعرف وإيقاف التكرار الآن!`,
            right: `// الاحتفاظ الدقيق بالمعرّف لإيقافه بشكل حاسم فور انتهاء الحاجة له
const backgroundTimer = setInterval(() => {
  console.log('عملية مستمرة بالخلفية...');
}, 500);

// لاحقاً عند حدث معين أو مغادرة الصفحة
clearInterval(backgroundTimer);`,
            explanation: 'دوال الجدولة الزمنية ترجع دائماً معرّفاً رقمياً فريداً (Timer ID) يمثل الإشارة الوحيدة لهذا التوقيت في ذاكرة المتصفح. فقدان هذا المعرف يعني فقدان السيطرة على العداد تماماً وبقاءه نشطاً للأبد.'
        },
        thinkingWay: 'استخدم setTimeout لتأخير إظهار أو إخفاء النوافذ التفاعلية (Alerts) أو لتأجيل العمليات البرمجية لإتمام الرسوم المتحركة، واستخدم setInterval لتحديث البيانات الدورية كالساعات التفاعلية، أشرطة التقدم الحية، أو جلب الإشعارات المستمرة (Polling).',
        relatedMethods: ['bom-location-navigation'],
        keywords: ['setTimeout', 'setInterval', 'clearTimeout', 'clearInterval', 'scheduling', 'timers', 'memory leaks']
    },
    {
        id: 'bom-navigator-features',
        name: 'Window Navigator (Clipboard & Network Status)',
        shortDescription: 'قراءة حالة شبكة المستخدم الحالية والتفاعل البرمجي الآمن مع حافظة الجهاز (Clipboard).',
        longDescription: 'يوفر كائن window.navigator واجهة لمعرفة تفاصيل ومعلومات البيئة والمنصة التي يعمل عليها المتصفح. تشمل أهم استخداماتها الحديثة: navigator.onLine لتتبع حالة الاتصال بالإنترنت حياً (متصل/منقطع)، والواجهة المتطورة navigator.clipboard لنسخ وقراءة النصوص بشكل آمن ومباشر من حافظة جهاز الزائر.',
        difficulty: 'medium',
        importance: 'high',
        examples: [
            `// 1. مراقبة حالة اتصال العميل تفاعلياً حياً بالإنترنت
console.log('حالة الاتصال بالإنترنت الحالية:', navigator.onLine ? 'متصل' : 'أوفلاين');

window.addEventListener('online', () => console.log('تمت استعادة الاتصال بالشبكة بنجاح!'));
window.addEventListener('offline', () => console.warn('انقطع الاتصال بالإنترنت حالياً!'));

// 2. تفعيل ميزة "نسخ رابط المشاركة" للنقر المباشر بضغطة زر
const shareUrl = 'https://codemap-js.org/share/101';
const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(shareUrl);
    console.log('تم نسخ الرابط الحافظة بنجاح!');
  } catch (err) {
    console.error('فشلت عملية النسخ لعدم منح الصلاحيات:', err);
  }
};`
        ],
        expectedOutput: [
            "حالة الاتصال بالإنترنت الحالية: (متصل أو أوفلاين حسب جهازك)\\n(تحديث حالة الشبكة حياً بالـ Console فور تفعيل التفاعل)"
        ],
        professionalTips: 'واجهة التفاعل مع الحافظة (navigator.clipboard) تعمل بشكل غير متزامن بالكامل (Asynchronous) وترجع Promises؛ لذا يفضل التعامل معها بصياغة async/await. تذكر أيضاً أنها محمية أمنياً بشكل صارم من المتصفحات وتتطلب تشغيل الموقع على رابط آمن HTTPS لتفعيلها بالكامل.',
        commonMistakes: {
            wrong: `// استخدام الطريقة العتيقة والمهملة لنسخ النصوص والتي تسبب بطءاً وتراجعاً في الأداء
const input = document.querySelector('#copy-input');
input.select();
document.execCommand('copy'); // دالة مهملة (Deprecated) تماماً وتسبب مشاكل توافق لعام 2026`,
            right: `// استخدام واجهة الـ Clipboard API الحديثة والآمنة
const textToCopy = 'كود جافا سكريبت النظيف';
navigator.clipboard.writeText(textToCopy)
  .then(() => console.log('تم النسخ بأسلوب برمي حديث ونظيف'))
  .catch(err => console.error('خطأ أمني:', err));`,
            explanation: 'تم إهمال أمر execCommand رسمياً نظراً لأنه يتسبب في تجميد مؤشر التفاعل بالمتصفح ويفتقر للأمان البرمجي المطلوب. واجهة Clipboard API الحديثة تعمل في الخلفية دون حظر عمليات المتصفح الأساسية.'
        },
        thinkingWay: 'استخدم ميزات Navigator لتوفير تفاعلات ذكية للمستخدم؛ مثل إظهار واجهة تنبيه تطلب من المستخدم حفظ بياناته عند انقطاع الإنترنت فجأة، أو لتسريع تجربة مشاركة الروابط والرموز بضغطة زر واحدة (Copy to Clipboard).',
        relatedMethods: ['bom-location-navigation'],
        keywords: ['navigator', 'clipboard', 'onLine', 'execCommand alternative', 'writeText', 'network status', 'BOM']
    }
];