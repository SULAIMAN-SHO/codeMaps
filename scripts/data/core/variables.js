export const variablesData = [
    {
        id: 'var-variable',
        name: 'var',
        shortDescription: 'الأسلوب التقليدي (قبل ES6) للتصريح عن المتغيرات بنطاق دالة (Function Scope).',
        longDescription: 'تُستخدم للتصريح عن متغير يمكن إعادة تعيين قيمته وإعادة تعريفه في نفس النطاق. تتميز بخاصية الرفع (Hoisting) حيث يتم سحب الإعلان عنها إلى أعلى النطاق قبل تنفيذ الكود، وتتبع نطاق الدالة وليس نطاق الكتلة (Block Scope)، مما قد يتسبب في أخطاء تداخل المتغيرات غير المتوقعة في التطبيقات الحديثة.',
        difficulty: 'easy',
        importance: 'normal',
        examples: [
            `// توضيح نطاق الدالة (Function Scope) والرفع (Hoisting)
function testVar() {
  console.log('القيمة قبل الإعلان:', myVar); // لن يرمي خطأ بل يرجع undefined
  var myVar = 'سليمان';
  if (true) {
    var myVar = 'أحمد'; // يعيد تعريف نفس المتغير في النطاق بالكامل
    console.log('داخل الكتلة:', myVar);
  }
  console.log('خارج الكتلة:', myVar); // سيتأثر بالشرط الداخلي
}
testVar();`,
            `// إعادة التعريف دون قيود في نفس النطاق
var score = 100;
var score = 200; // مسموح تماماً ولا يسبب أخطاء برمجية
console.log(score);`
        ],
        expectedOutput: [
            "القيمة قبل الإعلان: undefined\\nداخل الكتلة: أحمد\\nخارج الكتلة: أحمد",
            "200"
        ],
        professionalTips: 'تجنب استخدام var تماماً في التطبيقات الحديثة. تم استبدالها بـ let و const لتفادي مشاكل تسريب المتغيرات والتأثيرات الجانبية الناتجة عن الرفع ونطاق الكتلة. قد تواجهها فقط عند صيانة المشاريع القديمة (Legacy Code).',
        commonMistakes: {
            wrong: `// تسريب المتغير خارج حلقة التكرار بسبب نطاق الدالة
for (var i = 0; i < 3; i++) {
  // عمليات برمجية
}
console.log(i); // ستتم طباعة 3 بدلاً من رمي خطأ عدم التعريف!`,
            right: `// استخدام let لحصر نطاق المتغير داخل الحلقة فقط
for (let i = 0; i < 3; i++) {
  // عمليات برمجية
}
// console.log(i); // سيرمي خطأ ReferenceError: i is not defined (وهذا هو السلوك الآمن)`,
            explanation: 'لأن var لا تحترم نطاق الكتلة (Block Scope) المتمثل في الأقواس المتعرجة {} الخاصة بـ for أو if، فإن المتغير يتسرب للنطاق الخارجي، بينما let تلتزم بالنطاق المحدد وتحمي كودك من التداخل.'
        },
        thinkingWay: 'لا تستخدمها في الكود الجديد. استبدلها دائماً بـ let إذا كانت القيمة ستتغير، و const إذا كانت ثابتة.',
        relatedMethods: ['let-variable', 'const-variable'],
        keywords: ['var', 'variable', 'scope', 'hoisting', 'function scope']
    },
    {
        id: 'let-variable',
        name: 'let',
        shortDescription: 'الطريقة الحديثة للتصريح عن متغيرات قابلة للتعديل بنطاق كتلة (Block Scope).',
        longDescription: 'تم تقديمها في ES6 لحل مشاكل var. تلتزم بنطاق الكتلة (Block Scope)، أي النطاق المحصور بين الأقواس المتعرجة {}. لا تسمح بإعادة تصريح المتغير في نفس النطاق، وتخضع لمنطقة الموت المؤقتة (Temporal Dead Zone) حيث لا يمكن استخدام المتغير قبل سطر التصريح عنه.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// حصر نطاق المتغير داخل الكتلة (Block Scope)
let user = 'سليمان';
if (true) {
  let user = 'عمر'; // متغير مختلف تماماً محصور داخل الـ if
  console.log('داخل الشرط:', user);
}
console.log('خارج الشرط:', user);`,
            `// تجربة استخدام let قبل الإعلان عنها (Temporal Dead Zone)
try {
  console.log(tempVar);
} catch (e) {
  console.error('الخطأ:', e.message);
}
let tempVar = 50;`
        ],
        expectedOutput: [
            "داخل الشرط: عمر\\nخارج الشرط: سليمان",
            "الخطأ: Cannot access 'tempVar' before initialization"
        ],
        professionalTips: 'استخدم let عندما تكون على دراية مسبقة بأن قيمة المتغير ستتغير أثناء تشغيل البرنامج (مثل العدادات في حلقات التكرار، أو تبديل الحالات الثنائية flags).',
        commonMistakes: {
            wrong: `let total = 10;
let total = 20; // خطأ مباشر: SyntaxError: Identifier 'total' has already been declared`,
            right: `let total = 10;
total = 20; // التحديث الصحيح للقيمة دون إعادة الإعلان عنها`,
            explanation: 'ميزة الحماية في let تمنعك من إعادة الإعلان عن المتغير بنفس الاسم بالخطأ في نفس النطاق، مما يحمي سلامة البيانات البرمجية.'
        },
        thinkingWay: 'فكر في let كأداة للمتغيرات الديناميكية قصيرة المدى التي تقتصر على النطاق المحلي وتحتاج لتغيير قيمتها لاحقاً خلال الدورة البرمجية.',
        relatedMethods: ['var-variable', 'const-variable'],
        keywords: ['let', 'variable', 'block scope', 'reassign', 'temporal dead zone']
    },
    {
        id: 'const-variable',
        name: 'const',
        shortDescription: 'الطريقة الحديثة والآمنة للتصريح عن الثوابت البرمجية بنطاق كتلة (Block Scope).',
        longDescription: 'تُستخدم للتصريح عن قيمة ثابتة لا يمكن إعادة تعيينها (Re-assignment) أو إعادة تعريفها بمجرد إنشائها. تلتزم بنطاق الكتلة (Block Scope). تجعل مرجع المتغير ثابتاً، ولكنها تسمح بتعديل محتويات الكائنات والمصفوفات المرتبطة بها دون تغيير المرجع الأصلي.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// محاولة إعادة تعيين ثابت برمي خطأ
const taxRate = 0.18;
try {
  taxRate = 0.20;
} catch (e) {
  console.error('خطأ تعيين القيمة:', e.message);
}`,
            `// الثبات للمرجع وليس للمحتوى (كائنات ومصفوفات)
const config = { theme: 'dark' };
config.theme = 'light'; // مسموح تماماً لأن المرجع نفسه لم يتغير
console.log('الإعدادات الجديدة:', config.theme);`
        ],
        expectedOutput: [
            "خطأ تعيين القيمة: Assignment to constant variable.",
            "الإعدادات الجديدة: light"
        ],
        professionalTips: 'اجعل const خيارك الافتراضي (Default) عند كتابة أي متغير جديد. إذا تبين لك لاحقاً أنك بحاجة لتغيير قيمته، قم بتحويله إلى let. هذا يقلل من احتمالية حدوث ثغرات برمجية ويجعل سلوك الكود متوقعاً.',
        commonMistakes: {
            wrong: `const userData; // خطأ مباشر: SyntaxError: Missing initializer in const declaration
userData = { id: 1 };`,
            right: `const userData = { id: 1 }; // يجب التعيين والتعريف في خطوة واحدة`,
            explanation: 'لأن const لا يمكن تغيير قيمتها بعد الإعلان، يجبرك محرك الجافاسكريبت على تقديم قيمتها الابتدائية فوراً عند الإعلان عنها لمنع وجود ثوابت فارغة غير مجدية.'
        },
        thinkingWay: 'اسأل نفسك: هل سأقوم باستخدام عامل التساوي (=) لإعادة كتابة مرجع هذا المتغير بالكامل لاحقاً؟ إذا كانت الإجابة لا، فاستخدم const.',
        relatedMethods: ['let-variable', 'var-variable'],
        keywords: ['const', 'constant', 'immutable', 'block scope', 'reassign']
    }
];