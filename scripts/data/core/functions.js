export const functionsData = [
    {
        id: 'function-declaration',
        name: 'function()',
        shortDescription: 'الإعلان التقليدي عن دالة برمجية لإعادة استخدام الكتل البرمجية وتجنب التكرار.',
        longDescription: 'الأسلوب الكلاسيكي لتعريف دالة برمجية (Function Declaration) باستخدام الكلمة المفتاحية function متبوعة بالاسم والأقواس. تتميز هذه الطريقة بخاصية الرفع (Hoisting)؛ حيث يمكن استدعاء الدالة بنجاح في أي مكان بالملف حتى لو كان قبل سطر كتابتها وتصميمها الفعلي.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// تعريف دالة ترحيب تقليدية واستدعاؤها بنجاح
sayHello(); // استدعاء مقبول قبل التعريف بفضل الرفع (Hoisting)

function sayHello() {
  console.log('welcome');
}`
        ],
        expectedOutput: [
            "welcome"
        ],
        professionalTips: 'استخدم الإعلان التقليدي للدوال (Function Declaration) في مشروعك عندما تريد بناء خدمات ومكونات أساسية يستدعيها الكود تتابعاً من الأعلى دون القلق بشأن ترتيب كتل الأسطر البرمجية في الملف.',
        commonMistakes: {
            wrong: `// محاولة تعريف دالتين بنفس الاسم في نفس النطاق مما يؤدي لاستبدال الأولى صامتاً
function greet() { console.log('مرحباً 1'); }
function greet() { console.log('مرحباً 2'); }
greet(); // يطبع 'مرحباً 2' ويتلف منطق الدالة الأولى تماماً!`,
            right: `// إعطاء مسميات وظيفية دقيقة وفريدة لكل دالة تمنع تداخل الذاكرة
function greetUser() { console.log('مرحباً للمستخدم'); }
function greetAdmin() { console.log('مرحباً للمسؤول'); }
greetUser();`,
            explanation: 'الإعلانات المتطابقة للدوال بنفس الاسم بداخل نفس نطاق الملف تقوم بإعادة كتابة السجل الذاكري للوظيفة صامتاً دون إظهار أخطاء، مما يعطل تتبع سلوك الكود القديم.'
        },
        thinkingWay: 'استخدم صياغة الإعلان التقليدي عند صياغة الدوال الخدمية المساعدة العامة التي يحتاج كامل ملفك لاستدعائها بأريحية ومرونة تامة.',
        relatedMethods: ['function-expression'],
        keywords: ['function', 'declaration', 'hoisting', 'reusability', 'named function']
    },
    {
        id: 'function-return',
        name: 'return',
        shortDescription: 'الكلمة المفتاحية لإنهاء تشغيل الدالة وتصدير وإرجاع قيمة مخصصة لموضع الاستدعاء.',
        longDescription: 'تُستعمل الكلمة المفتاحية return داخل كتل الدوال البرمجية لإنجاز مهمتين حتميتين: الأولى هي إيقاف تشغيل الدالة فوراً ومغادرة كتلتها الحالية، والثانية هي تصدير القيمة المكتوبة بجانبها وإرجاعها لمنفذ الاستدعاء بالذاكرة لاستخدامها لاحقاً.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// حساب وجمع الأرقام وتصدير النتيجة للاستخدام الفوري
function calc(a, b) {
  return a + b; // إنهاء الدالة وتصدير المجموع مباشرة
  console.log('لن يتم تنفيذ هذا السطر أبداً لمجيئه بعد العودة!');
}

const total = calc(5, 7);
console.log('النتيجة الحسابية المرتجعة:', total);`
        ],
        expectedOutput: [
            "النتيجة الحسابية المرتجعة: 12"
        ],
        professionalTips: 'كتابة كلمة return منفردة دون إرفاق أي قيمة بجانبها تؤدي فوراً لقطع وإيقاف عمل الدالة صامتاً وإرجاع القيمة الافتراضية undefined، وهو تكتيك رائع لإنهاء الدوال مبكراً عند العثور على أخطاء (Guard Clauses).',
        commonMistakes: {
            wrong: `function calculate(a) {
  a * 5; // نسيان كتابة الكلمة المفتاحية return
}
const res = calculate(2);
console.log(res); // يطبع undefined بالرغم من إجراء العملية حسابياً!`,
            right: `function calculate(a) {
  return a * 5; // كتابة التصدير صراحة لإرسال النتيجة للذاكرة
}
const res = calculate(2);
console.log(res); // يطبع 10 بنجاح`,
            explanation: 'الدوال التي تفتقر لوجود عبارة return صريحة تقوم تلقائياً بإنهاء دورتها وإرجاع undefined بمجرد الوصول لنهاية كتلتها البرمجية.'
        },
        thinkingWay: 'استخدم return كبوابة حاسمة لإنهاء عمل الدالة بمجرد حصولك على النتيجة المطلوبة، أو لقطع تنفيذ العمليات وتأمين كودك عند رصد مدخلات معطوبة.',
        relatedMethods: ['function-declaration'],
        keywords: ['return', 'output', 'export value', 'function termination', 'undefined output']
    },
    {
        id: 'function-default-params',
        name: 'function(param = default)',
        shortDescription: 'صياغة معاملات الدوال لتبني قيم افتراضية احتياطية تحمي السكربت من غياب المدخلات.',
        longDescription: 'تم تقديم المعاملات الافتراضية (Default Parameters) في ES6 لتمكين المطور من إسناد قيمة قياسية احتياطية للمعامل بجانب علامة التساوي (=) أثناء الإعلان. يستعين بها المتصفح تلقائياً عند استدعاء الدالة دون تمرير ذلك المعامل أو عند تمريره محملاً بالقيمة undefined.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// دالة ترحيب تستعين بالاسم الافتراضي عند إغفال التمرير
function greet(name = 'to you') {
  console.log('welcome ' + name);
}

greet('SULAIMAN');
greet(); // يستعين بالبديل 'to you' تلقائياً دون حدوث مشاكل`
        ],
        expectedOutput: [
            "welcome SULAIMAN\\nwelcome to you"
        ],
        professionalTips: 'احرص على كتابة المعاملات التي تحمل قيم افتراضية دائماً في نهاية قائمة معاملات الدالة؛ لأن وضع المعاملات الافتراضية في المقدمة يجبرك على تمرير القيمة undefined يدوياً لتخطيها عند الاستدعاء، مما يربك صياغة الكود.',
        commonMistakes: {
            wrong: `function buildUser(role = 'guest', username) { // ترتيب خاطئ للمعامل الافتراضي في المقدمة
  console.log(username + ' as ' + role);
}
buildUser('sulaiman'); // يطبع 'undefined as sulaiman' لتداخل التمرير!`,
            right: `function buildUser(username, role = 'guest') { // الترتيب الصحيح بوضع الافتراضي بالنهاية
  console.log(username + ' as ' + role);
}
buildUser('sulaiman'); // يطبع 'sulaiman as guest' بنجاح تام وعزيمة`,
            explanation: 'المتصفح يوزع المعاملات الممررة من اليسار لليمين بالتتابع؛ لذا وضع الافتراضي بالنهاية يحميه من التداخل مع المتغيرات الإلزامية الأساسية.'
        },
        thinkingWay: 'استخدم المعاملات الافتراضية دائماً لتهيئة دوالك البرمجية للتعامل المرن مع حقول الإدخال غير المضمونة لمنع حدوث دمج عشوائي للقيم الفارغة.',
        relatedMethods: ['function-declaration'],
        keywords: ['default parameters', 'fallback arguments', 'es6 function defaults', 'optional parameter', 'default value']
    },
    {
        id: 'function-expression',
        name: 'const fn = function()',
        shortDescription: 'صياغة الدالة كتعقيب أو قيمة محفوظة بداخل متغير برمجي معزول (Function Expression).',
        longDescription: 'أسلوب تعريف الدالة كقيمة وإسنادها مباشرة لمتغير (غالباً معلن بـ const لثبات مرجعه). لا تخضع هذه الدوال لعمليات الرفع التلقائي (Hoisting)؛ مما يفرض حظر استدعائها قبل سطر كتابتها وتعريفها الفعلي في الملف.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تعريف دالة معزولة وحفظها داخل ثابت برمجي بالذاكرة
const sayHi = function() {
  console.log('Hi');
};

sayHi(); // استدعاء سليم بعد الإعلان التام`
        ],
        expectedOutput: [
            "Hi"
        ],
        professionalTips: 'استخدم تعبيرات الدوال (Function Expressions) المعزولة لضمان عدم حدوث تلاعب أو استدعاء مبكر عشوائي للدوال بالملف، مما يضمن تدفقاً خطياً ومنظماً لتشغيل تطبيقك البرمجي.',
        commonMistakes: {
            wrong: `greet(); // خطأ مباشر: ReferenceError: Cannot access 'greet' before initialization نتيجة محاولة الاستدعاء المبكر!
const greet = function() {
  console.log('welcome');
};`,
            right: `const greet = function() {
  console.log('welcome');
};
greet(); // الاستدعاء الصحيح والآمن بعد التصريح الصارم بملفك بالذاكرة`,
            explanation: 'تعبيرات الدوال المحفوظة بالمتغيرات تعامل كمتغيرات عادية؛ وبما أنها معلنة بـ const، فإنها تتبع قواعد منطقة الموت المؤقتة (TDZ) ويحظر استدعاؤها نهائياً قبل سطر تعريفها.'
        },
        thinkingWay: 'استخدم هذه الصيغة الصارمة للتأكد من حظر استدعاء الدوال الحيوية من النصف العلوي لملفك البرمجي ولفرض تنظيم هيكلي منظم للشيفرة.',
        relatedMethods: ['function-declaration'],
        keywords: ['function expression', 'anonymous function', 'no hoisting', 'const function', 'temporal dead zone']
    },
    {
        id: 'arrow-function-basic',
        name: '() => {}',
        shortDescription: 'الصياغة المعاصرة الأنيقة لكتابة الدوال السهمية المجهولة دون الكلمة المفتاحية function.',
        longDescription: 'دالة سهمية (Arrow Function) مبسطة تفتقر للكلمة المفتاحية function وتعتمد بالكامل على رمز السهم (=>) لربط المعاملات بالكتلة التنفيذية. تلتزم بنطاق معجمي محايد حيث ترث قيمة الكلمة المفتاحية `this` تلقائياً من بيئتها الخارجية المحيطة بها.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// كتابة دالة سهمية لترحيب مقتضب وحفظها بمتغير للتشغيل
const greet = () => {
  console.log('welcome to codemap');
};

greet();`
        ],
        expectedOutput: [
            "welcome to codemap"
        ],
        professionalTips: 'هذه الصيغة ممتازة جداً ومألوفة لكتابة الموقتات والوظائف المجهولة (Anonymous callbacks)؛ لأنها تحافظ على سلامة سياق الكلمة المفتاحية `this` داخل المتصفح تلقائياً دون الحاجة لكتابة دالة الربط .bind() يدوياً.',
        commonMistakes: {
            wrong: `// خطأ شائع: محاولة استدعاء الدالة السهمية قبل تعريفها بالملف
sayHi(); // خطأ مباشر: ReferenceError لمخالفتها قوانين الرفع بالمتصفح
const sayHi = () => console.log('Hi');`,
            right: `// تعريف الدالة السهمية أولاً واستدعاؤها تتابعاً بنظام
const sayHi = () => console.log('Hi');
sayHi(); // يطبع Hi بنجاح كامل`,
            explanation: 'الدوال السهمية تقع تحت قواعد تعبيرات الدوال (Expressions)؛ وهي لا تملك ميكانيكية الرفع التلقائي (Hoisting) وتستوجب التعريف المسبق قبل التشغيل.'
        },
        thinkingWay: 'استخدم الدوال السهمية كخيار قياسي دائم ومستمر لكتابة الموقتات (Timers) والـ callbacks ومستمعي أحداث الـ DOM لسرعة وجودة الكود.',
        relatedMethods: ['arrow-function-single-param', 'arrow-function-implicit-return'],
        keywords: ['arrow function', 'fat arrow', 'anonymous function', 'this context', 'es6 function']
    },
    {
        id: 'arrow-function-single-param',
        name: 'param => {}',
        shortDescription: 'اختصار قواعدي فائق لكتابة الدوال السهمية ذات المعامل الفردي بحذف الأقواس المستديرة.',
        longDescription: 'صياغة متطورة للدوال السهمية؛ تتيح عند وجود معامل وحيد يتيم (Single Parameter) الاستغناء بالكامل عن كتابة الأقواس المستديرة () المحيطة به، مما ينتج كوداً فائق النظافة والاختصار.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// دالة سهمية بمعامل فردي تقرأ وتطبع قيمة الاسم بنجاح
const greet2 = name2 => {
  console.log('welcome2 ' + name2);
};

greet2('sulaiman');`
        ],
        expectedOutput: [
            "welcome2 sulaiman"
        ],
        professionalTips: 'استخدم هذا الاختصار الرائع في معالجات المصفوفات وعمليات الفلترة كدوال map و filter حيث يتم تمرير عنصر فردي تتابعاً لتسريع تجربة كتابة وصيانة الأسطر.',
        commonMistakes: {
            wrong: `// محاولة حذف الأقواس عند وجود معامِلين بالدالة السهمية يمنع المتصفح من تجميع الكود
const calc = a, b => a + b; // خطأ قواعدي مباشر: SyntaxError: Unexpected token`,
            right: `// إعادة كتابة الأقواس المستديرة فور تزايد المعاملات عن واحد بالدالة السهمية
const calc = (a, b) => a + b; // سليم تماماً ومعتمد برمجياً لعام 2026
console.log(calc(5, 5)); // يطبع 10`,
            explanation: 'جافا سكريبت تسمح بحذف الأقواس الحاصرة للمعاملات فقط وحصراً عندما يكون هناك معامل فردي يتيم بالدالة السهمية؛ وتطلب وجود الأقواس عند غيابها تماماً أو تزايدها لتوجيه المحلل.'
        },
        thinkingWay: 'استغل هذا الاختصار المقتضب عند تدوين معالجات المصفوفات والـ callbacks البسيطة لإنتاج كود أنيق وسهل الصيانة.',
        relatedMethods: ['arrow-function-basic'],
        keywords: ['single parameter arrow', 'parentheses omit', 'shorthand arrow', 'es6 shorthand', 'callback array']
    },
    {
        id: 'arrow-function-default-params',
        name: '(param = default) => {}',
        shortDescription: 'دمج المعاملات الافتراضية مع الدوال السهمية لحماية تشغيلها البرمجي.',
        longDescription: 'صياغة تدمج مرونة المعاملات الافتراضية مع جمال وقصر الدوال السهمية؛ حيث تستوجب إعادة كتابة الأقواس المستديرة () المحيطة بالمعامل لتهيئة قيمته التلقائية الاحتياطية بنجاح.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// دالة سهمية ترحيبية مهيأة بمدخل افتراضي واقٍ
const greet = (name = 'to you') => {
  console.log(\`welcome \${name}\`);
};

greet(); // يستعين بالبديل الاحتياطي 'to you' تلقائياً بأمان`
        ],
        expectedOutput: [
            "welcome to you"
        ],
        professionalTips: 'انتبه إلى أنه عند وضع قيمة افتراضية للمعامل الفردي بداخل الدالة السهمية، يجب إعادة كتابة الأقواس المستديرة حتماً حول المعامل؛ لكي يفهم المحرك التوزيع الحسابي ولا ينهار تجميع الملف.',
        commonMistakes: {
            wrong: `// محاولة حذف الأقواس مع المعامل الافتراضي الفردي تفشل كلياً بانهيار السكربت
const greet = name = 'to you' => console.log(name); // خطأ تجميعي: SyntaxError`,
            right: `// الحصر الدقيق للأقواس لتأمين معادلة التهيئة الافتراضية بنجاح
const greet = (name = 'to you') => console.log(name); // يعمل بسلام وأمان
greet(); // يطبع 'to you'`,
            explanation: 'الرمز (=) الخاص بالمعامل الافتراضي ورمز السهم (=>) متتاليين دون أقواس حاصرة يربكان محلل القواعد ويمنعان تجميع الكود كلياً.'
        },
        thinkingWay: 'استخدم هذه التوليفة الذكية والآمنة لتأمين الدوال السهمية المستدعاة بالمتصفح ضد الأخطاء الناتجة عن غياب معاملات التشغيل الحيوية.',
        relatedMethods: ['arrow-function-single-param'],
        keywords: ['default params arrow', 'parentheses restore', 'arrow function default', 'safe fallback arrow']
    },
    {
        id: 'arrow-function-implicit-return',
        name: '(a, b) => a + b',
        shortDescription: 'الإرجاع الضمني (Implicit Return) الفائق للدوال السهمية المكتوبة في سطر واحد.',
        longDescription: 'أقوى ميزات الاختصار في ES6؛ تتيح عند كتابة الدالة السهمية في سطر واحد الاستغناء بالكامل عن الأقواس المتعرجة {} وعن الكلمة المفتاحية return، ويقوم محرك المتصفح بتقييم السطر وتصدير وإرجاع النتيجة تلقائياً.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// دالة سهمية لحساب المجموع في سطر واحد مقتضب بإرجاع ضمني تلقائي
const calc2 = (aa, bb) => aa + bb;
console.log('مجموع الحساب الضمني:', calc2(25, 50));`
        ],
        expectedOutput: [
            "مجموع الحساب الضمني: 75"
        ],
        professionalTips: 'إذا كنت ترغب في استخدام الإرجاع الضمني (Implicit Return) لتصدير كائن مباشر (Object Literal)، تذكر حصر الكائن بالأقواس المستديرة `() => ({ key: "value" })` لمنع المتصفح من الخلط بين أقواس الكائن وأقواس الدالة المتعرجة.',
        commonMistakes: {
            wrong: `// فتح الأقواس المتعرجة وإغفال return يرجع القيمة الفارغة undefined دائماً!
const calc = (a, b) => { a + b }; 
console.log(calc(5, 5)); // يطبع undefined!`,
            right: `// كتابة المعادلة مباشرة دون أقواس متعرجة لتفعيل الإرجاع الضمني التلقائي
const calc = (a, b) => a + b; 
console.log(calc(5, 5)); // يطبع 10 بنجاح تام وسليم`,
            explanation: 'فتح الأقواس المتعرجة {} للدوال السهمية يلغي تلقائياً ميزة الإرجاع الضمني، ويجبرك على كتابة الكلمة المفتاحية return يدوياً لتصدير النتيجة.'
        },
        thinkingWay: 'استخدم الإرجاع الضمني (Implicit Return) لكتابة مصففات ومصفيات البيانات فائقة النظافة والاختصار بداخل دوال map و filter بملفات مشروعك.',
        relatedMethods: ['arrow-function-basic'],
        keywords: ['implicit return', 'one liner arrow', 'no return keyword', 'shorthand return', 'es6 clean code']
    },
    {
        id: 'scope-global',
        name: 'Global Scope',
        shortDescription: 'النطاق الشامل والمكشوف بكامل ملفك البرمجي للمتغيرات القابلة للوصول من أي موضع.',
        longDescription: 'النطاق الأعلى والأساسي للبرنامج (Global Scope)؛ كافة المتغيرات التي يتم الإعلان عنها خارج أي دالة أو كتلة برمجية تصنف كمتغيرات عالمية، وتظل متاحة للقراءة والتحديث من قِبل أي دالة أو مستمع أو كود داخلي طوال دورة حياة الصفحة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// الإعلان عن متغير عالمي وقراءته من داخل دالة فرعية
let king = 'SULAIMAN';

function fncosh() {
  console.log(\`WELCOME \${king}\`); // الوصول للمتغير العالمي بنجاح
}
fncosh();`
        ],
        expectedOutput: [
            "WELCOME SULAIMAN"
        ],
        professionalTips: 'تجنب تماماً تلويث النطاق العالمي (Global Scope Pollution) بحشو متغيرات عشوائية؛ لأن ذلك يستهلك مساحات ثابتة بالذاكرة طوال بقاء الصفحة، ويزيد بشكل حاد من احتمالية تضارب مسميات السكربتات الخارجية مع مشروعك.',
        commonMistakes: {
            wrong: `// كتابة متغيرات دون let/const بالدوال تخرجها للنطاق العالمي صامتة بالخطأ
function init() {
  userData = 'بيانات حساسة'; // تسريب خطير للنطاق العالمي بالخطأ!
}
init();
console.log(window.userData); // البيانات مكشوفة كلياً خارج الدالة بـ window!`,
            right: `// عزل النطاق بحصار let أو const دائماً لحماية المتغيرات بملفك
function init() {
  const userData = 'بيانات حساسة'; // محصورة بأمان تام بالنطاق المحلي للدالة
}
init();`,
            explanation: 'في الوضع غير الصارم (Non-strict mode)، محاولة تعيين قيمة لمتغير لم يتم التصريح عنه بـ let/const/var تجبر المتصفح على إنشائه تلقائياً في النطاق العالمي التابع لكائن window.'
        },
        thinkingWay: 'اقتصر على استخدام النطاق العالمي فقط للتكوينات الأساسية الثابتة للمشروع (Configs) أو الثوابت الإرشادية التي يحتاجها كامل كود التطبيق بالتساوي لقراءتها.',
        relatedMethods: ['scope-function'],
        keywords: ['Global Scope', 'window object', 'global variable', 'scope pollution', 'root scope']
    },
    {
        id: 'scope-function',
        name: 'Function Scope',
        shortDescription: 'النطاق المحلي المحمي والمغلق للمتغيرات المصرح عنها بكتل الدوال الداخلية.',
        longDescription: 'النطاق المحلي الموفر بكتل الدوال؛ المتغيرات التي يتم الإعلان عنها بداخل دالة (سواء بـ let, const, var) تكون محصورة ومحمية بالكامل داخل حدود هذه الدالة فقط، ويحظر كلياً قراءتها أو الوصول إليها من النطاق الخارجي.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// محاولة الوصول لمتغير محلي من النطاق الخارجي تسبب خطأ حماية
function sayHllo() {
  let message = 'Local';
  console.log('داخل الدالة:', message); // ينجح الفحص
}
sayHllo();

try {
  console.log(message); // محاولة اختراق النطاق الخارجي
} catch (e) {
  console.error('الخطأ الخارجي الحارس:', e.message);
}`
        ],
        expectedOutput: [
            "داخل الدالة: Local\\nالخطأ الخارجي الحارس: message is not defined"
        ],
        professionalTips: 'نظام عزل نطاق الدوال هو المفهوم المعماري الأساسي خلف كبسلة وحماية الحالات والبيانات (Data Encapsulation) بداخل لغة جافا سكريبت لمنع العبث بالمتغيرات عشوائياً.',
        commonMistakes: {
            wrong: `function process() {
  var data = 'test';
}
console.log(data); // خطأ: المتغير محمي بالنطاق المحلي ويحظر قراءته خارج الدالة`,
            right: `function process() {
  const data = 'test';
  return data; // تصدير البيانات صراحة عبر return بدلاً من الفك المباشر
}
const output = process();
console.log(output); // يطبع 'test' بأمان كامل بالذاكرة`,
            explanation: 'النطاق المحلي للدوال يمثل جداراً حامياً باتجاه واحد؛ الدوال بالداخل ترى النطاق الخارجي، ولكن كتل الكود بالخارج لا يمكنها التسلل للداخل وقراءة الذاكرة المحلية.'
        },
        thinkingWay: 'استغل نطاق الدوال لتعريف كافة العمليات الحسابية واللوجستية قصيرة المدى التي تقتصر على احتياجات الدالة الفردية لحفظ سلامة ونظافة النطاق العالمي لمشروعك.',
        relatedMethods: ['scope-global', 'scope-block'],
        keywords: ['Function Scope', 'local scope', 'encapsulation', 'variable protection', 'private state']
    },
    {
        id: 'scope-block',
        name: 'Block Scope',
        shortDescription: 'نطاق الكتلة المغلق والمحصور كلياً بين الأقواس المتعرجة للجمل الشرطية وحلقات التكرار.',
        longDescription: 'نطاق هيكلي تم إدخاله في ES6 لتقييد المتغيرات المعلنة صراحة بـ let و const بحدود كتل الأقواس المتعرجة {}. المتغيرات تظل حية وتعمل فقط بداخل هذه الأقواس وتفنى بمجرد مغادرتها، مع التنبيه على أن الكلمة القديمة var لا تحترم هذا النطاق وتخترقه.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تتبع حظر خروج متغيرات let وتجاوز var لنطاق الكتلة الشرطية
if (true) {
  let color = 'blue';
  const size = 'sm';
  var shape = 'square'; // تخترق نطاق الكتلة كلياً!
}

console.log('شكل التداخل المخترق (var):', shape);

try {
  console.log(color);
} catch (e) {
  console.error('تأمين متغير الكتلة (let):', e.message);
}`
        ],
        expectedOutput: [
            "شكل التداخل المخترق (var): square\\nتأمين متغير الكتلة (let): color is not defined"
        ],
        professionalTips: 'استخدم دائماً let و const لتعريف متغيرات الكتل البرمجية (مثل متغير العداد بداخل حلقة for) لضمان فناء المتغير وتحرير مساحته بالذاكرة فور انتهاء عمل الكتلة بنجاح.',
        commonMistakes: {
            wrong: `for (var i = 0; i < 3; i++) {
  // تكرار المهام بالخلفية
}
console.log(i); // يطبع 3 ويتسرب للخارج ملوثاً النطاق الخارجي بسبب اختراق var للكتل!`,
            right: `for (let i = 0; i < 3; i++) {
  // تكرار المهام بالخلفية بأمان تام
}
// console.log(i); // يرمي خطأ ReferenceError وهو السلوك المطلوب لتحرير وتأمين العداد بالذاكرة`,
            explanation: 'الكلمة القديمة var تتبع نطاق الدوال فقط (Function Scope) وتجاهل تماماً نطاق كتل الأقواس المتعرجة لحلقات التكرار والجمل الشرطية، مما يسبب تسريب المتغيرات بالخارج.'
        },
        thinkingWay: 'استخدم حماية نطاق الكتلة (Block Scope) لتعريف التغييرات المؤقتة والعدادات السريعة لحلقات التكرار والشرط لضمان تحرير حيز الذاكرة تلقائياً فور المغادرة.',
        relatedMethods: ['scope-function'],
        keywords: ['Block Scope', 'curly braces', 'let const scope', 'variable leakage', 'hoisting bypass', 'temporal dead zone']
    },
    {
        id: 'scope-lexical',
        name: 'Lexical Scope',
        shortDescription: 'النطاق المعجمي التراكمي الذي يمنح الدوال الداخلية حق الوصول الكامل لمتغيرات دالتها الخارجية.',
        longDescription: 'نظام تدرج النطاقات المعتمد على موضع كتابة وتعريف الكود بالملف (Lexical Scope)؛ حيث تحتفظ الدوال الداخلية في جافا سكريبت بحق الوصول الكامل لمتغيرات نطاق دالتها الخارجية المحيطة بها (النطاق الأب) والاحتفاظ بمرجعها حياً بالذاكرة، ويمثل المفهوم المعماري الأساسي خلف كود الـ Closures.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `// تدرج النطاق المعجمي وقدرة الدالة الداخلية على الوصول لمتغيرات الأب
function parent() {
  let parentvar = 'parentvar##';
  
  function child() {
    let name = 'sulaiman';
    console.log('الدالة الداخلية تقرأ الأب:', parentvar); // وصول سليم بنجاح معجمي
  }
  
  child();
  try {
    console.log(name); // محاولة الأب قراءة متغيرات الابن تفشل!
  } catch (e) {
    console.error('الأب يفشل في اختراق الابن:', e.message);
  }
}
parent();`
        ],
        expectedOutput: [
            "الدالة الداخلية تقرأ الأب: parentvar##\\nالأب يفشل في اختراق الابن: name is not defined"
        ],
        professionalTips: 'النطاق المعجمي يحدد تفرع البحث عن المتغيرات من الداخل للخارج دائماً؛ فإذا لم يعثر المتصفح على المتغير داخل دالتك، يصعد تلقائياً للنطاق الأب للبحث عنه وهكذا صعوداً للنطاق العالمي.',
        commonMistakes: {
            wrong: `// افتراض أن مسار استدعاء الدالة يغير نطاقها المعجمي المكتوب
let value = 'عالمي';
function print() {
  console.log(value); // تبحث في موضع كتابتها المعجمي وتجد 'عالمي' دائماً
}
function test() {
  let value = 'محلي';
  print(); // تستدعى هنا ولكنها تتجاهل 'محلي' وتطبع 'عالمي' لموضع كتابتها الأساسي!
}
test();`,
            right: `// توظيف تدرج كتابة الدوال بدقة للحصول على البيانات المترابطة بالتتابع
function parent() {
  let value = 'محلي';
  function print() {
    console.log(value); // مكتوبة بداخل الأب وتقرأ قيمتها المحلية مباشرة بنجاح معجمي
  }
  print();
}
parent(); // يطبع 'محلي' بنجاح`,
            explanation: 'النطاق المعجمي (Lexical Scope) ثابت وحتمي ويتم تحديده فور كتابتك للكود وتدرجه بالملف، ولا يتأثر مطلقاً بمكان أو طريقة تفعيل استدعاء الدالة البرمجية وقت التشغيل.'
        },
        thinkingWay: 'استغل ميكانيكية النطاق المعجمي لتطوير كتل الـ Closures والكبسلة الهيكلية لحماية متغيرات الحالات والعدادات الحساسة بالذاكرة.',
        relatedMethods: ['scope-function'],
        keywords: ['Lexical Scope', 'nested functions', 'closures scope', 'scope chain', 'lexical binding', 'parent variables']
    }
];