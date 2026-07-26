export const fetchMethod = {
    id: 'fetch-api',
    name: 'fetch()',
    shortDescription: 'واجهة برمجية مدمجة لإرسال واستقبال طلبات الشبكة (HTTP Requests) بشكل غير متزامن.',
    longDescription: 'دالة حديثة توفرها البيئة التشغيلية للمتصفح كبديل لـ XMLHttpRequest. تعتمد بالكامل على الـ Promises، مما يسمح بإجراء طلبات جلب البيانات (GET)، وإرسالها (POST)، وتعديلها (PUT/PATCH)، وحذفها (DELETE) مع خوادم الويب الخارجية مع إمكانيات التحكم في الرأسيات (Headers)، الجلسات، وبيانات الاستيقاف.',
    difficulty: 'medium',
    importance: 'critical',
    examples: [
        `// جلب بيانات مستخدم باستخدام طلب GET والتعامل مع الأخطاء الهيكلية
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    if (!response.ok) {
      throw new Error(\`فشل الاتصال: \${response.status}\`);
    }
    return response.json();
  })
  .then(userData => {
    console.log('اسم المستخدم:', userData.name);
  })
  .catch(error => {
    console.error('حدث خطأ أثناء الاتصال:', error.message);
  });`,
        `// إرسال بيانات جديدة إلى الخادم باستخدام طلب POST بصيغة JSON
const newUser = { name: 'سليمان', role: 'Developer' };

fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newUser)
})
  .then(response => {
    if (!response.ok) {
      throw new Error('فشل إرسال البيانات');
    }
    return response.json();
  })
  .then(createdUser => {
    console.log('تم الحفظ بنجاح، المعرف:', createdUser.id);
  })
  .catch(error => {
    console.error('حدث خطأ:', error.message);
  });`
    ],
    expectedOutput: [
        "اسم المستخدم: Leanne Graham",
        "تم الحفظ بنجاح، المعرف: 101"
    ],
    professionalTips: 'في بيئات العمل، لا تعتمد على catch للتحقق من أخطاء HTTP مثل 404 أو 500؛ دالة fetch لا تعتبر هذه الحالات خطأ شبكة (Network Error) بل تنجح في جلب الاستجابة. يجب دائماً التحقق من خاصية response.ok يدوياً قبل تحويل الاستجابة إلى JSON لتفادي أخطاء تحليل البيانات.',
    commonMistakes: {
        wrong: `// توقع أن catch ستلتقط أخطاء الخادم مثل 404
fetch('https://jsonplaceholder.typicode.com/invalid-endpoint')
  .then(response => response.json()) 
  .then(data => console.log(data))
  .catch(err => console.log('لن تمنع هذه الدالة المعالجة الخاطئة إذا رجع كود 404'));`,
        right: `// التحقق الفوري من نجاح حالة الاستجابة أولاً قبل تحويلها
fetch('https://jsonplaceholder.typicode.com/invalid-endpoint')
  .then(response => {
    if (!response.ok) {
      throw new Error('الرابط غير موجود أو الخادم واجه مشكلة');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error('تم الإمساك بالخطأ بنجاح:', err.message));`,
        explanation: 'دالة fetch لا ترفض الوعد (Promise reject) إلا في حال حدوث فشل حقيقي في الاتصال بالشبكة (مثل انقطاع الإنترنت أو عدم القدرة على الوصول للمضيف). أما استجابات الأخطاء مثل 404 Not Found أو 500 Internal Server Error فتُحل بنجاح (resolve)، مما يتطلب التحقق من response.ok أو response.status لتجنب معالجة بيانات غير صالحة.'
    },
    thinkingWay: 'يُفضل استخدام fetch عندما تحتاج لتفاعل ديناميكي مع الخوادم لجلب البيانات أو تحديثها دون الحاجة لإعادة تحميل الصفحة بالكامل. تعتبر بديلاً ممتازاً للمكتبات الخارجية مثل Axios في المشاريع المتوسطة والصغيرة لتقليل حجم الحزمة النهائي والاعتماد على الحلول المدمجة بالمتصفح.',
    relatedMethods: ['Promise', 'JSON.stringify', 'JSON.parse'],
    keywords: ['fetch', 'ajax', 'api', 'http', 'request', 'post', 'get', 'json']
};