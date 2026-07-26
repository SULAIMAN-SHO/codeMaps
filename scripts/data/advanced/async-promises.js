export const asyncPromisesData = [
    {
        id: 'async-promises-intro',
        name: 'JavaScript Promises',
        shortDescription: 'النمط الحديث لمعالجة العمليات البرمجية غير المتزامنة والتخلص كلياً من جحيم الدوال الارتدادية.',
        longDescription: 'كائن يمثل النجاح أو الفشل المتوقع لعملية غير متزامنة (مثل جلب البيانات من شبكة الإنترنت أو القراءة من ملف). يتواجد الوعد (Promise) في ثلاث حالات حتمية: المعلق (Pending)، المنجز بنجاح (Fulfilled)، أو المرفوض بفشل (Rejected)، ويوفر قنوات تسلسل نظيفة باستخدام .then() للمخرجات و .catch() للإمساك بالأخطاء المباشرة.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `// تحويل دالة تايمر تقليدية لوعد برمجي ذو أداء نظيف وقابل للتسلسل
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

console.log('بداية تنفيذ المهام...');

// معالجة تسلسل العمليات دون السقوط في فخ التداخل العميق
delay(1000)
  .then(() => {
    console.log('الخطوة الأولى: تم بنجاح بعد ثانية واحدة');
    return delay(1500); // إرجاع وعد جديد للتسلسل التالي
  })
  .then(() => {
    console.log('الخطوة الثانية: تم بنجاح بعد ثانية ونصف إضافية');
  })
  .catch((error) => {
    console.error('حدث خطأ فادح في التسلسل البرمجي:', error);
  });`
        ],
        expectedOutput: [
            "بداية تنفيذ المهام...\\n(بعد ثانية واحدة): الخطوة الأولى: تم بنجاح بعد ثانية واحدة\\n(بعد ثانية ونصف إضافية): الخطوة الثانية: تم بنجاح بعد ثانية ونصف إضافية"
        ],
        professionalTips: 'جحيم الدوال الارتدادية (Callback Hell) ينشأ عندما تتداخل دوال الاستدعاء داخل بعضها البعض بشكل متدرج مما يخلق كوداً برمجياً غامضاً يصعب تتبعه أو معالجة أخطائه. تحويل الدوال التقليدية إلى صيغة الوعود (Promises) يتيح لك كتابة كود مسطح تماماً (Flat Code) قابل للتمدد والصيانة بسلاسة كاملة.',
        commonMistakes: {
            wrong: `// النمط المتداخل القديم والمرفوض لربط المهام غير المتزامنة (Callback Hell)
setTimeout(() => {
  console.log('المرحلة الأولى');
  setTimeout(() => {
    console.log('المرحلة الثانية');
    setTimeout(() => {
      console.log('المرحلة الثالثة');
    }, 1000);
  }, 1500);
}, 1000);`,
            right: `// تسلسل معتدل ومرتب تماماً ومقروء باستخدام الوعود المتتالية
const wait = (ms) => new Promise(res => setTimeout(res, ms));

wait(1000)
  .then(() => {
    console.log('المرحلة الأولى');
    return wait(1500);
  })
  .then(() => {
    console.log('المرحلة الثانية');
    return wait(1000);
  })
  .then(() => {
    console.log('المرحلة الثالثة');
  });`,
            explanation: 'النمط المتداخل يتسبب في انتشار غير منضبط للأقواس ومشاكل عزل نطاقات المتغيرات (Scopes)، بالإضافة إلى استحالة معالجة الأخطاء بكتلة موحدة. استخدام تتابع الوعود يحل كافة هذه المشاكل ويجعل الكود خطياً ومتناسقاً.'
        },
        thinkingWay: 'استخدم الوعود (Promises) عندما تشرع في بناء دوال مكتبية أو أدوات معالجة خاصة تتعامل مع الزمن، أو العمليات غير المتزامنة كالاتصالات بالخوادم والتخزين السحابي لتسمح للمطورين الآخرين بربطها واستدعائها بشكل عصري ونظيف.',
        relatedMethods: ['async-await-pattern'],
        keywords: ['Promise', 'Callback Hell', 'then', 'catch', 'resolve', 'reject', 'asynchronous', 'delay']
    },
    {
        id: 'async-await-pattern',
        name: 'Async / Await',
        shortDescription: 'الصياغة المعمارية الأرقى والأكثر قراءة لكتابة العمليات غير المتزامنة وكأنها كود متزامن تسلسلي.',
        longDescription: 'تعتبر صياغة Async / Await بمثابة "السكر البرمجي" (Syntactic Sugar) المبني فوق الوعود (Promises). تتيح كتابة العمليات غير المتزامنة بشكل خطي يسهل قراءته كأكواد التتابع العادية؛ حيث تجبر الكلمة await المحرك على انتظار إنجاز الوعد قبل الانتقال للسطر التالي، مع توظيف هيكل try...catch البديهي للسيطرة على الأخطاء.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `// جلب بيانات مستخدم ومعالجة الطلبات بالتتابع الخطي النظيف
const fetchUserData = async () => {
  try {
    console.log('جاري جلب ملف المستخدم...');
    
    // محاكاة طلب جلب بيانات باستخدام fetch والانتظار حتى انتهاء العملية
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    
    if (!response.ok) {
      throw new Error('فشل جلب الملف الشخصي للعميل');
    }
    
    const user = await response.json(); // انتظار تحويل صيغة الاستجابة
    console.log('اسم العميل المسترجع:', user.name);
    
  } catch (error) {
    console.error('تم الإمساك بالخطأ بنجاح في كتلة try-catch:', error.message);
  }
};

fetchUserData();`
        ],
        expectedOutput: [
            "جاري جلب ملف المستخدم...\\nاسم العميل المسترجع: Leanne Graham (أو رسالة الخطأ المخصصة في حال انقطاع الشبكة)"
        ],
        professionalTips: 'احرص دائماً وأبداً على إحاطة كود await بكتل try...catch للتحكم بالأخطاء البرمجية. في حال وقوع مشكلة في الشبكة أو رفض الوعد ولم يكن الكود محاطاً بكتلة فحص، سينهار تطبيق الويب لديك مباشرة ويصدر خطأ فادحاً غير ممسوك (Uncaught Promise Rejection).',
        commonMistakes: {
            wrong: `// خطأ شائع: محاولة استدعاء await خارج دالة معرفة بـ async
const response = await fetch('https://api.com/data'); // خطأ تجميع مباشر: SyntaxError: await is only valid in async functions`,
            right: `// إعلان الدالة بـ async كشرط أساسي مسبق لتفعيل ميزة الانتظار await
const loadData = async () => {
  const response = await fetch('https://api.com/data');
  return response.json();
};`,
            explanation: 'محرك جافا سكريبت يحتاج لتعريف async ليقوم بتهيئة الدالة وتغيير ميكانيكية تشغيلها داخلياً لتتوافق مع خاصية الإيقاف المؤقت لعمليات الانتظار await دون حظر مسار المتصفح الرئيسي الرئيسي (Main Thread).'
        },
        thinkingWay: 'استخدم نمط Async/Await كمعيار ثابت ودائم لجميع عمليات تواصل تطبيقك مع البيئات الخارجية كطلب الخوادم (APIs)، القراءة من قواعد البيانات، أو تجميع المدخلات الموزعة تفادياً للتعقيدات الإنشائية لـ Promise.then.',
        relatedMethods: ['async-promises-intro'],
        keywords: ['async', 'await', 'try catch', 'asynchronous', 'syntactic sugar', 'uncaught promise rejection', 'error handling']
    }
];