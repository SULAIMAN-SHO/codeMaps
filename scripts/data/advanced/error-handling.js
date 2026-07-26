export const errorHandlingData = [
    {
        id: 'try-catch-finally',
        name: 'try...catch...finally',
        shortDescription: 'اصطياد ومعالجة الأخطاء البرمجية أثناء وقت التشغيل وحماية التطبيق من الانهيار.',
        longDescription: 'كتلة برمجية تُستخدم للتعامل مع الأخطاء غير المتوقعة أثناء تشغيل التطبيق (Runtime Errors). يتم تشغيل الكود المعرض للخطأ داخل try، فإذا حدث أي استثناء أو خطأ، يتم إيقاف كتلة try فوراً ونقل التحكم لكتلة catch التي تستقبل كائن الخطأ لمعالجته. أما كتلة finally (اختيارية) فتُنفذ في جميع الأحوال، سواء حدث خطأ أم لم يحدث، وهي ممتازة لعمليات التنظيف وإغلاق الاتصالات.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `// فحص وتحليل نص JSON مشوه ومعالجة خطأ التحليل مع إخفاء مؤشر التحميل في النهاية
let isLoading = true;

const parseUserData = (rawJson) => {
  try {
    console.log('بدء تحليل البيانات...');
    const user = JSON.parse(rawJson); // إذا كان النص مشوهاً، سينتقل الكود فوراً لكتلة catch
    console.log('اسم المستخدم المسترجع:', user.name);
  } catch (error) {
    console.error('فشل معالجة النص! اسم الخطأ:', error.name);
    console.error('تفاصيل رسالة الخطأ:', error.message);
  } finally {
    isLoading = false; // تُنفذ في الحالتين لإيقاف مؤشر التحميل بأمان
    console.log('اكتملت المحاولة. حالة التحميل النشطة:', isLoading);
  }
};

// محاولة تمرير نص مشوه غير صالح كـ JSON
parseUserData('{ name: سليمان, age: 25 }'); // غياب علامات الاقتباس يسبب خطأ هيكلياً`
        ],
        expectedOutput: [
            "بدء تحليل البيانات...\\nفشل معالجة النص! اسم الخطأ: SyntaxError\\nتفاصيل رسالة الخطأ: Unexpected token n in JSON at position 2 (أو رسالة مماثلة حسب المحرك)\\nاكتملت المحاولة. حالة التحميل النشطة: false"
        ],
        professionalTips: 'استخدم كتلة finally دائماً لتنظيف الحالات البرمجية المشتركة (Cleanups)؛ مثل إخفاء واجهات الانتظار (Loading Spinners)، إغلاق ملفات تم فتحها، أو إنهاء اتصالات الشبكة النشطة. يضمن لك ذلك عدم بقاء واجهة المستخدم معلقة في وضع الانتظار في حال حدوث خطأ غير متوقع.',
        commonMistakes: {
            wrong: `// خطأ شائع: محاولة التقاط أخطاء العمليات غير المتوافقة مع الزمن (Asynchronous) بـ try-catch العادي
try {
  setTimeout(() => {
    throw new Error('خطأ في الخلفية!'); // لن تستطيع catch العادية التقاط هذا الخطأ لأنه يحدث بعد مغادرة كتلة try
  }, 1000);
} catch (e) {
  console.log('تم التقاط الخطأ:', e.message); // لن يتم تنفيذ هذا السطر مطلقاً وستنهار الصفحة
}`,
            right: `// النمط الصحيح: إحاطة الكود غير المتزامن داخل وعود أو كتابته بـ async/await للتقاطه بنجاح
const delayedAction = () => new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('خطأ في الخلفية!')), 1000);
});

const execute = async () => {
  try {
    await delayedAction();
  } catch (e) {
    console.log('تم التقاط الخطأ غير المتزامن بنجاح:', e.message); // تلتقط الخطأ بامتياز
  }
};
execute();`,
            explanation: 'كتلة try...catch التقليدية متزامنة (Synchronous)؛ فإذا قامت بجدولة عملية مستقبلية (مثل setTimeout أو طلب Fetch) وغادرت كتلة try بنجاح، يفقد ميكانيك المحرك الرابط البرمي للتحكم في الأخطاء عند تشغيل العملية المستقبلية لاحقاً.'
        },
        thinkingWay: 'استخدم try...catch عندما تتعامل مع عمليات برمجية معرضة للفشل خارج نطاق سيطرتك المباشرة (مثل تحليل نصوص JSON قادمة من خوادم خارجية، استخدام ميزات المتصفح الحساسة والتي قد يرفضها المستخدم كـ Geolocation، أو إجراء مكالمات بالخوادم عبر الشبكة).',
        relatedMethods: ['throw-custom-error'],
        keywords: ['try', 'catch', 'finally', 'error handling', 'SyntaxError', 'TypeError', 'runtime error', 'safe JSON']
    },
    {
        id: 'throw-custom-error',
        name: 'throw new Error()',
        shortDescription: 'إنتاج وإلقاء أخطاء برمجية مخصصة لإيقاف التنفيذ والتحقق من صحة القواعد البرمجية.',
        longDescription: 'تُستخدم الكلمة المفتاحية throw لإلقاء استثناء أو خطأ برمجي بشكل قسري ومقصود. باستخدام مشيد الأخطاء القياسي Error، يمكن كتابة رسائل مخصصة تصف الخرق الأمني أو المنطقي الحادث، مما يؤدي لإيقاف تنفيذ الكود الحالي ونقل التحكم لأقرب كتلة catch ممسكة بالأخطاء في سلسلة التتبع (Call Stack).',
        difficulty: 'medium',
        importance: 'high',
        examples: [
            `// التحقق من صحة رصيد العميل قبل إتمام المعاملة المالية وإصدار خطأ منطقي
const withdraw = (balance, amount) => {
  if (amount <= 0) {
    throw new Error('مبلغ السحب يجب أن يكون قيمة موجبة أكبر من الصفر');
  }
  if (amount > balance) {
    throw new Error('عذراً، رصيدك الحالي غير كافٍ لإتمام هذه العملية المالية');
  }
  
  return balance - amount;
};

try {
  const currentBalance = 100;
  withdraw(currentBalance, 250); // سحب مبلغ يتجاوز الرصيد
} catch (error) {
  console.error('تنبيه البنك:', error.message); // يمسك بالخطأ المخصص ويطبع الرسالة المناسبة
}`
        ],
        expectedOutput: [
            "تنبيه البنك: عذراً، رصيدك الحالي غير كافٍ لإتمام هذه العملية المالية"
        ],
        professionalTips: 'احرص دائماً على إلقاء كائنات أخطاء حقيقية باستخدام مشيد الأخطاء القياسي throw new Error("message") بدلاً من إلقاء نصوص صامتة مثل throw "error". كائنات الأخطاء الحقيقية تجمع تلقائياً لقطة كاملة من مسار التتبع البرمجي (Stack Trace) داخل الذاكرة، مما يسهل فحص وتتبع سطر الكود الفعلي المسبب للمشكلة بدقة متناهية.',
        commonMistakes: {
            wrong: `// خطأ شائع: إلقاء نصوص عادية صامتة تفتقر لمسار تتبع الخطأ في الذاكرة
const checkAge = (age) => {
  if (age < 18) throw 'عمر غير صالح'; // خطأ: يفتقر لمعلومات الموضع والسطر في الذاكرة
};`,
            right: `// الاستخدام المعياري المعترف به من محركات التفتيش (Linters) والمحللات
const checkAge = (age) => {
  if (age < 18) {
    throw new Error('عمر المستخدم غير مؤهل للتسجيل بالمنصة'); // استخدام كائن خطأ قياسي
  }
};`,
            explanation: 'إلقاء نص عادي يحرم المطور وأدوات مراقبة الأخطاء (مثل Sentry) من قراءة خصائص مهمة مثل stack trace والـ line number، مما يجعل حل المشاكل وتصحيحها في السيرفرات شبه مستحيل.'
        },
        thinkingWay: 'استخدم throw new Error() لبناء قواعد تحقق صارمة داخل دوالك البرمجية (Validation Rules) لضمان عدم تمرير قيم معطوبة أو غير منطقية من شأنها تخريب قواعد البيانات أو التسبب في نتائج حسابية مشوهة لاحقاً.',
        relatedMethods: ['try-catch-finally'],
        keywords: ['throw', 'new Error', 'custom error', 'validation', 'stack trace', 'exception handling']
    }
];