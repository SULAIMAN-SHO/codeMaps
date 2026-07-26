export const arraysData = [
    {
        id: 'array-index-last-old',
        name: '[length - 1]',
        shortDescription: 'الطريقة التقليدية للوصول إلى العنصر الأخير في المصفوفة بالاعتماد على خاصية الطول.',
        longDescription: 'قبل تقديم الدوال الحديثة، كان المطورون يستهدفون العنصر الأخير في المصفوفة بطرح القيمة 1 من طولها الإجمالي (length) وتمرير الناتج داخل أقواس الاستعلام المربعة؛ لأن فهرسة المصفوفات تبدأ دائماً من الصفر (0).',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// جلب العنصر الأخير من مصفوفة الأصدقاء بالطريقة التقليدية
const friends = ['ahmed', 'SULAIMAN', 'MOHAMED'];
const lastFriend = friends[friends.length - 1];
console.log('الصديق الأخير:', lastFriend);`
        ],
        expectedOutput: [
            "الصديق الأخير: MOHAMED"
        ],
        professionalTips: 'هذه الصيغة سليمة تماماً وتعمل بامتياز، ولكنها مكررة وتجبرك على إعادة كتابة اسم متغير المصفوفة مرتين. في الكود الحديث لعام 2026، يُنصح باستبدالها بدالة .at(-1) لمقروئية أعلى للكود.',
        commonMistakes: {
            wrong: `const friends = ['ahmed', 'SULAIMAN'];
console.log(friends[friends.length]); // خطأ شائع: يطبع undefined لأن العنصر الأخير موقعه هو الطول ناقص 1`,
            right: `const friends = ['ahmed', 'SULAIMAN'];
console.log(friends[friends.length - 1]); // يطبع 'SULAIMAN' بدقة كاملة`,
            explanation: 'بما أن الفهرسة تبدأ من الصفر، فإن العنصر الأخير يقع دائماً عند الفهرس (الطول - 1). استدعاء فهرس مساوٍ للطول الفعلي يوجهك لموضع خارج حدود المصفوفة بالذاكرة.'
        },
        thinkingWay: 'استخدم هذه الصيغة التقليدية فقط عند صيانة المشاريع القديمة أو في بيئات العمل التي تتطلب الأداء الذاكري المباشر دون استدعاء وظائف إضافية.',
        relatedMethods: ['array-at'],
        keywords: ['length - 1', 'last element', 'array length', 'array indexing', 'bracket notation']
    },
    {
        id: 'array-at',
        name: '.at()',
        shortDescription: 'الوصول الآمن لعناصر المصفوفة باستخدام الفهارس الموجبة والسالبة دون عمليات طرح يدوية.',
        longDescription: 'دالة قياسية تتيح استخراج عنصر معين من المصفوفة باستخدام موقعه الفهرسي. الميزة الجوهرية بها هي دعمها للفهارس السالبة (Negative Indexing) التي تتيح الوصول لعناصر المصفوفة بدءاً من النهاية بشكل مباشر (مثل at(-1) للحصول على العنصر الأخير)، متجاوزة الحاجة لحساب الطول يدوياً.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// جلب العناصر بدقة من البداية والنهاية باستخدام الفهارس
const friends = ['ahmed', 'SULAIMAN', 'MOHAMED'];
console.log('العنصر الأول:', friends.at(0));
console.log('العنصر الأخير:', friends.at(-1));`
        ],
        expectedOutput: [
            "العنصر الأول: ahmed\\nالعنصر الأخير: MOHAMED"
        ],
        professionalTips: 'اعتمد بالكامل على .at(-1) كبديل نظيف ونموذجي لـ [length - 1]؛ لتقليل تكرار أسماء المتغيرات وجعل الصيانة أسرع بكثير.',
        commonMistakes: {
            wrong: `const friends = ['ahmed', 'SULAIMAN'];
console.log(friends[-1]); // خطأ: يرجع undefined لأن الأقواس المربعة لا تفهم الفهارس السالبة وتعتبرها Key مفقود بكائن المصفوفة`,
            right: `const friends = ['ahmed', 'SULAIMAN'];
console.log(friends.at(-1)); // يرجع 'SULAIMAN' بنجاح تام`,
            explanation: 'الأقواس المربعة تبحث في المصفوفة ككائن عن مفتاح يحمل اسم "-1"، وبما أنه غير متوفر ترجع undefined. دالة .at() مهيأة داخلياً لحساب المواقع العكسية بدقة.'
        },
        thinkingWay: 'استخدم .at() كخيار افتراضي دائم في تطبيقك للوصول لعناصر المصفوفة من النهاية دون إحداث أي تغيير أو تدمير في المصفوفة المصدر.',
        relatedMethods: ['array-index-last-old'],
        keywords: ['at', 'array indexing', 'negative index', 'last element', 'at method']
    },
    {
        id: 'array-index-access',
        name: '[index]',
        shortDescription: 'قراءة أو تعديل عنصر محدد داخل المصفوفة باستخدام الأقواس المربعة وموضعه الرقمي.',
        longDescription: 'الأسلوب الكلاسيكي الأساسي للوصول لعناصر المصفوفات وتحديث قيمها في الذاكرة. يبدأ أول عنصر في المصفوفة دائماً من الفهرس صفر (0) وينتهي عند الفهرس (الطول - 1).',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// الوصول لعنصر وتحديث قيمته بالذاكرة باستخدام الأقواس المربعة
const friends = ['ahmed', 'SULAIMAN', 'MOHAMED'];
console.log('العنصر الثاني:', friends[1]);

friends[1] = 'عمر'; // تعديل مباشر للعنصر الثاني بالذاكرة
console.log('المصفوفة بعد التعديل:', friends);`
        ],
        expectedOutput: [
            "العنصر الثاني: SULAIMAN\\nالمصفوفة بعد التعديل: ['ahmed', 'عمر', 'MOHAMED']"
        ],
        professionalTips: 'تذكر أن المصفوفات في جافا سكريبت تملك مرجعاً قابلاً للتعديل (Mutable reference)، أي أن الأقواس المربعة تسمح لك بتعديل محتويات الفهارس الفردية مباشرة حتى لو كانت المصفوفة معلنة بـ const.',
        commonMistakes: {
            wrong: `const list = [];
list[5] = 'test'; // خطأ شائع: تخطي الفهارس يعيد مصفوفة تحتوي على فجوات فارغة (Empty Slots) تستهلك أداء المتصفح
console.log(list);`,
            right: `const list = [];
list.push('test'); // استخدام push للإضافة المتتالية الآمنة والمنظمة دون ترك فجوات فارغة
console.log(list);`,
            explanation: 'تخطي الفهارس يولد مصفوفة متناثرة (Sparse Array) تحتوي على فجوات غير محددة (empty slots) ترجع undefined، مما يعرقل دوال التكرار الدقيقة مثل map و filter.'
        },
        thinkingWay: 'استخدم الأقواس المربعة [index] عندما ترغب في قراءة عنصر معلوم موقعه مسبقاً، أو عند رغبتك في تعديل واستبدال قيمة عنصر محدد بالذاكرة مباشرة.',
        relatedMethods: ['array-at'],
        keywords: ['bracket notation', 'array index', 'array mutation', 'read element', 'update index']
    },
    {
        id: 'array-is-array',
        name: 'Array.isArray()',
        shortDescription: 'التحقق الدقيق والآمن مما إذا كانت القيمة الممررة مصفوفة حقيقية أم لا.',
        longDescription: 'دالة ساكنة تابعة لكلاس Array الأساسي تقوم بفحص القيمة الممررة وترجع ناتجاً منطقياً (true/false). تُعد الطريقة الأكثر أماناً للتحقق من المصفوفات نظراً لأن عامل typeof يرجع "object" للمصفوفات ولا يمكن الاعتماد عليه للتفريق بينها وبين الكائنات العادية.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// التحقق من مصفوفة حقيقية مقابل متغير نصي عادي
const colors = ['blue', 'green', 'red'];
const testName = 'sulaiman';

console.log('هل colors مصفوفة؟', Array.isArray(colors));
console.log('هل testName مصفوفة؟', Array.isArray(testName));`
        ],
        expectedOutput: [
            "هل colors مصفوفة؟ true\\nهل testName مصفوفة؟ false"
        ],
        professionalTips: 'اعتمد دائماً على Array.isArray() في جميع فحوصات الحماية (Guards) قبل تنفيذ أي من دوال المصفوفات المعقدة لتلافي حدوث أخطاء برمجية في حال إرسال قيم معطوبة من السيرفر.',
        commonMistakes: {
            wrong: `const list = ['blue', 'red'];
if (typeof list === 'array') { // لن يدخل الشرط أبداً لأن typeof ترجع 'object' للمصفوفات!
  console.log('انها مصفوفة فعلاً');
}`,
            right: `const list = ['blue', 'red'];
if (Array.isArray(list)) { // الطريقة السليمة والدقيقة والمعتمدة لعام 2026
  console.log('انها مصفوفة فعلاً وبأمان كامل');
}`,
            explanation: 'تاريخياً في جافا سكريبت، تُصنف المصفوفات ككائنات (Objects) تحت الغطاء البرمجي للغة، لذا فإن typeof تفشل في تمييزها وتحتاج لدالة التحقق المخصصة.'
        },
        thinkingWay: 'استخدم Array.isArray() كحارس حماية (Guard Clause) داخل الدوال التي تقبل مدخلات مرنة للتأكد من أن البيانات مصفوفة صالحة للتكرار قبل المضي قدماً.',
        relatedMethods: ['typeof-operator'],
        keywords: ['Array.isArray', 'check array', 'type check', 'validation', 'array check']
    },
    {
        id: 'array-push',
        name: '.push()',
        shortDescription: 'إضافة عنصر واحد أو أكثر إلى نهاية المصفوفة وتعديل طولها مباشرة بالذاكرة.',
        longDescription: 'تقوم الدالة بإضافة العناصر الممررة كمعاملات إلى نهاية المصفوفة الأصلية مباشرة (In-place Mutation)، وترجع الطول الجديد للمصفوفة بعد عملية الإضافة.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// إضافة ألوان جديدة لنهاية مصفوفة الألوان النشطة بالمتصفح
const colors = ['blue', 'green', 'red'];
colors.push('yellow', 'purple');
console.log('المصفوفة بعد الإضافة:', colors);`
        ],
        expectedOutput: [
            "المصفوفة بعد الإضافة: ['blue', 'green', 'red', 'yellow', 'purple']"
        ],
        professionalTips: 'تعمل دالة push بكفاءة زمنية فائقة O(1) لأن الإضافة تتم في مؤخرة المصفوفة مباشرة دون الحاجة لإعادة فهرسة العناصر الحالية بالذاكرة. تجنب استخدامها إذا كنت بحاجة للحفاظ على مرجع الذاكرة دون تعديل (مثل إدارة الحالات في React) واستخدم عامل النشر [...array, item] كبديل آمن.',
        commonMistakes: {
            wrong: `// خطأ شائع: محاولة تعيين مخرج دالة push لمتغير وتوقع الحصول على المصفوفة الجديدة
const list = [1, 2];
const newList = list.push(3); 
console.log(newList); // يطبع 3 (الطول الجديد للمصفوفة) بدلاً من المصفوفة ذاتها!`,
            right: `// استخدام الدالة لتعديل المصفوفة مباشرة أو استخدام عامل النشر لإنتاج مرجع جديد
const list = [1, 2];
list.push(3);
console.log(list); // يطبع [1, 2, 3] بنجاح كامل`,
            explanation: 'دالة push مصممة لتعديل المصفوفة الأصلية في الذاكرة (Mutation)، وترجع رقماً صحيحاً يمثل طول المصفوفة الجديد وليس القالب الجديد للمصفوفة.'
        },
        thinkingWay: 'استخدم .push() عندما تبني هياكل بيانات ديناميكية (مثل تجميع مدخلات العميل، أو بناء مكدسات العمليات الحسابية Stacks) التي تتطلب تعديلاً فائق السرعة والمباشرة في موقع الذاكرة الحالي.',
        relatedMethods: ['array-pop', 'array-unshift'],
        keywords: ['push', 'array add', 'add to end', 'mutation', 'push method', 'stack']
    },
    {
        id: 'array-unshift',
        name: '.unshift()',
        shortDescription: 'إضافة عنصر واحد أو أكثر إلى بداية المصفوفة وإزاحة باقي العناصر بالذاكرة.',
        longDescription: 'تقوم الدالة بإضافة العناصر الممررة إليها إلى مقدمة المصفوفة مباشرة (In-place Mutation)، وتقوم بإزاحة كافة العناصر الحالية وتعديل فهارسها بالكامل في الذاكرة، ثم ترجع الطول الجديد للمصفوفة.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// إضافة عناصر جديدة في مقدمة المصفوفة
const names = ['sulaiman', 'ahmed', 'mohamed'];
names.unshift('omar', 'ali');
console.log(names);`
        ],
        expectedOutput: [
            "['omar', 'ali', 'sulaiman', 'ahmed', 'mohamed']"
        ],
        professionalTips: 'تعمل unshift بتعقيد زمني بطيء نسيباً O(N) مقارنة بـ push؛ لأنها تجبر محرك جافا سكريبت على إزاحة وإعادة فهرسة كافة عناصر المصفوفة في الذاكرة بعد كل عملية إضافة في المقدمة.',
        commonMistakes: {
            wrong: `const list = [2, 3];
const result = list.unshift(1);
console.log(result); // يطبع 3 (الطول الجديد) متوقعاً الحصول على مصفوفة مدمجة`,
            right: `const list = [2, 3];
list.unshift(1);
console.log(list); // يطبع [1, 2, 3] بنجاح تعديل مباشر`,
            explanation: 'الدالة unshift كشقيقتها push ترجع الطول العددي الجديد للمصفوفة بعد تحديثها، ولا ترجع المصفوفة ذاتها.'
        },
        thinkingWay: 'استخدم unshift عندما يتطلب منك المنطق وضع الإضافات الجديدة والملحة في مقدمة قائمة الانتظار لتتم معالجتها أولاً (مثل بناء سجل الإشعارات الأحدث الذي يعرض العناصر المضافة مؤخراً في الأعلى).',
        relatedMethods: ['array-push', 'array-shift'],
        keywords: ['unshift', 'add to front', 'prepend element', 'array mutation', 'reindexing']
    },
    {
        id: 'array-pop',
        name: '.pop()',
        shortDescription: 'إزالة وسحب العنصر الأخير من نهاية المصفوفة واسترجاعه بقيمته الحقيقية.',
        longDescription: 'تقوم الدالة بحذف العنصر الأخير المتواجد بنهاية المصفوفة مباشرة وتعديل طولها الإجمالي بالذاكرة (In-place Mutation)، ثم ترجع القيمة الفعلية للعنصر المحذوف للاستخدام الفوري.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// سحب وإزالة العنصر الأخير للاستخدام التفاعلي
const firstRemove = [1, 2, 3];
const removedElement = firstRemove.pop();

console.log('العنصر المستخرج:', removedElement);
console.log('المصفوفة المتبقية:', firstRemove);`
        ],
        expectedOutput: [
            "العنصر المستخرج: 3\\nالمصفوفة المتبقية: [1, 2]"
        ],
        professionalTips: 'تعمل دالة pop بكفاءة زمنية فائقة للغاية O(1) لأن الحذف يتم من النهاية دون تعديل فهارس باقي العناصر. إذا كانت المصفوفة فارغة تماماً، ترجع الدالة القيمة undefined دون رمي أي أخطاء.',
        commonMistakes: {
            wrong: `const list = [1, 2];
// توقع أن pop تقبل معاملات لتحديد ما يتم حذفه
list.pop(0); // خطأ: لا تقبل معاملات وستقوم بحذف العنصر الأخير 2 وتتجاهل معامل الفهرس 0!`,
            right: `const list = [1, 2];
list.pop(); // تحذف العنصر الأخير تلقائياً بسلام
console.log(list); // يطبع [1]`,
            explanation: 'ميكانيكية دالة pop ثابتة ولا تقبل معاملات تحديد الفهرس؛ فهي مصممة لإخراج وحذف العنصر الأخير فقط كجزء من منطق المكدس (Stack).'
        },
        thinkingWay: 'استخدم .pop() بالتكامل مع .push() لبناء هياكل البيانات من نوع مكدس (Stack - LIFO) حيث يتم إدخال وإخراج البيانات من نفس الطرف بدقة وسرعة هائلة.',
        relatedMethods: ['array-push', 'array-shift'],
        keywords: ['pop', 'remove last', 'pop stack', 'array mutation', 'remove element']
    },
    {
        id: 'array-shift',
        name: '.shift()',
        shortDescription: 'إزالة وسحب العنصر الأول من مقدمة المصفوفة وإزاحة باقي العناصر بالذاكرة.',
        longDescription: 'تقوم الدالة بحذف وإخراج العنصر الأول المتواجد بمقدمة المصفوفة مباشرة (In-place Mutation)، وتقوم بإزاحة كافة العناصر المتبقية وتحديث فهارسها بالكامل في الذاكرة، ثم ترجع القيمة الفعلية للعنصر المحذوف.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// سحب وإزالة العنصر الأول من طابور الأرقام
const lastRemove = [11, 22, 33];
const removed = lastRemove.shift();

console.log('العنصر المحذوف:', removed);
console.log('المصفوفة المتبقية:', lastRemove);`
        ],
        expectedOutput: [
            "العنصر المحذوف: 11\\nالمصفوفة المتبقية: [22, 33]"
        ],
        professionalTips: 'تعمل shift بتعقيد زمني بطيء O(N) لأن حذف أول عنصر يجبر محرك جافا سكريبت على نقل وإعادة فهرسة كافة عناصر المصفوفة المتبقية بالذاكرة لملء الفراغ الحادث بالمقدمة.',
        commonMistakes: {
            wrong: `const list = [];
const item = list.shift(); // توقع حدوث انهيار برمي عند محاولة الحذف من مصفوفة فارغة
console.log(item); // لا تنهار بل ترجع undefined بسلام كامل وثبات`,
            right: `const list = [1, 2];
const item = list.shift(); // سحب آمن عند التأكد من احتواء البيانات
console.log(item); // يطبع 1`,
            explanation: 'المتصفح مجهز لتفادي انهيار السكربت عند إفراغ المصفوفة، ويرجع undefined كإشارة آمنة لعدم وجود المزيد من العناصر لإخراجها.'
        },
        thinkingWay: 'استخدم .shift() بالتكامل مع .push() لتصميم وبناء طوابير معالجة البيانات (Queues - FIFO) حيث يدخل العنصر من النهاية ويخرج من المقدمة بالتتابع.',
        relatedMethods: ['array-unshift', 'array-pop'],
        keywords: ['shift', 'remove first', 'dequeue', 'array mutation', 'reindexing shift']
    },
    {
        id: 'array-sort',
        name: '.sort()',
        shortDescription: 'فرز وترتيب عناصر المصفوفة في مكانها بالذاكرة وفقاً للترتيب الأبجدي أو الرقمي.',
        longDescription: 'تقوم الدالة بترتيب عناصر المصفوفة وتعديلها مباشرة بالذاكرة (In-place Mutation). بشكل افتراضي، تقوم بتحويل العناصر إلى نصوص ومقارنتها هجائياً بناءً على جدول ترميز الآلة (Unicode)، مما يتطلب تمرير دالة مقارنة مخصصة لترتيب الأرقام بدقة.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `// فرز نصوص وأرقام وتوضيح الفروق في الترتيب الافتراضي
const sortingArrays = ['blue', 'red', 'green'];
sortingArrays.sort();
console.log('ترتيب أبجدي سليم:', sortingArrays);

const sortingArraysNum = [1, 3, 2, 10, 9];
// فرز الأرقام بالاعتماد على دالة مقارنة مخصصة
sortingArraysNum.sort((a, b) => a - b);
console.log('ترتيب رقمي صحيح تصاعدي:', sortingArraysNum);`
        ],
        expectedOutput: [
            "ترتيب أبجدي سليم: ['blue', 'green', 'red']\\nترتيب رقمي صحيح تصاعدي: [1, 2, 3, 9, 10]"
        ],
        professionalTips: 'تجنب استخدام .sort() الافتراضي لترتيب الأرقام دون تمرير دالة المقارنة `(a, b) => a - b`؛ لأن الرقم 10 سيتم وضعه قبل الرقم 2 نظراً لأن الحرف "1" يسبق الحرف "2" هجائياً، وهو ما يفسد الترتيب الحسابي.',
        commonMistakes: {
            wrong: `// ترتيب أرقام بالطريقة الافتراضية ينتج عنه فرز رياضي خاطئ
const nums = [10, 5, 2];
nums.sort(); 
console.log(nums); // يطبع [10, 2, 5] لأن التحويل النصي وضع 10 في البداية!`,
            right: `// استخدام دالة المقارنة الرياضية للتوجيه التصاعدي السليم
const nums = [10, 5, 2];
nums.sort((a, b) => a - b);
console.log(nums); // يطبع [2, 5, 10] بنجاح كامل`,
            explanation: 'الترتيب الافتراضي يعامل القيم كرموز نصية. دالة المقارنة `(a, b) => a - b` ترجع قيمة سالبة إذا كان a أصغر، وقيمة موجبة إذا كان أكبر، مما يصحح خوارزمية الفرز رياضياً.'
        },
        thinkingWay: 'استخدم .sort() عندما ترغب في عرض القوائم والمنتجات للمستخدمين مرتبة هجائياً، أو تصاعدياً/تنازلياً بناءً على الأسعار والتواريخ.',
        relatedMethods: ['array-reverse'],
        keywords: ['sort', 'array sorting', 'compare function', 'lexicographical', 'numerical sort', 'mutation']
    },
    {
        id: 'array-reverse',
        name: '.reverse()',
        shortDescription: 'عكس ترتيب عناصر المصفوفة بالكامل داخل الذاكرة وجعل الأول أخيراً والأخير أولاً.',
        longDescription: 'تقوم الدالة بقلب وعكس اتجاه عناصر المصفوفة الأصلية مباشرة بالذاكرة (In-place Mutation)؛ لتصبح فهارس العناصر مقلوبة كلياً بالاتجاه العكسي، وترجع مرجعاً لنفس المصفوفة المعدلة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// عكس اتجاه مصفوفة الأسماء والتحقق من التعديل
const sortingArraysNum = [1, 2, 3, 4, 5];
sortingArraysNum.reverse();
console.log('المصفوفة معكوسة:', sortingArraysNum);`
        ],
        expectedOutput: [
            "المصفوفة معكوسة: [5, 4, 3, 2, 1]"
        ],
        professionalTips: 'دالة reverse تعدل (Mutate) نفس المصفوفة الأصلية في الذاكرة. إذا كنت تريد الحصول على مصفوفة معكوسة جديدة دون المساس بالأصلية، استخدم الدالة الحديثة لعام 2026 .toReversed() أو خذ نسخة بالناشر أولاً [...array].reverse().',
        commonMistakes: {
            wrong: `const original = [1, 2];
const reversed = original.reverse();
reversed[0] = 99;
console.log(original[0]); // يطبع 99! لأن الكائنين يتشاركان نفس مساحة الذاكرة المفتوحة`,
            right: `const original = [1, 2];
const reversed = [...original].reverse(); // أخذ نسخة مستقلة بالذاكرة قبل العكس
reversed[0] = 99;
console.log(original[0]); // يظل 1 دون أي تداخل أو تشويه للمصفوفة الأصلية`,
            explanation: 'الدالة reverse ترجع مرجع المصفوفة ذاتها بعد تعديلها؛ مما يعني أن تغيير أي قيمة في المصفوفة المعكوسة يغيرها تلقائياً في المصفوفة الأصلية لتشاركهما نفس الموقع الذاكري.'
        },
        thinkingWay: 'استخدم reverse() لعكس اتجاهات العرض؛ مثل بناء خيار تبديل فرز المنتجات والرسائل من الأحدث للأقدم أو لتمثيل الحركة التفاعلية العكسية بالصفحة.',
        relatedMethods: ['array-sort'],
        keywords: ['reverse', 'array reverse', 'invert array', 'array mutation', 'toReversed']
    },
    {
        id: 'array-flat',
        name: '.flat()',
        shortDescription: 'تسطيح وتجميع المصفوفات المتداخلة وتقليص عمقها وتفكيكها إلى مصفوفة خطية مسطحة واحدة.',
        longDescription: 'تقوم الدالة بإنشاء مصفوفة جديدة كلياً وتفكيك المصفوفات الفرعية المتداخلة بداخلها لضم محتوياتها للمستوى الرئيسي. تأخذ معاملاً اختيارياً يمثل عمق التسطيح المطلوب تفكيكه (depth - القيمة الافتراضية هي 1).',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `// تسطيح مصفوفة متداخلة المستويات لعمق ثنائي
const subjects = ["Math", "English", "physics", [1, 2, 3, "مستوى ثاني", [277, 300]]];
const flatArr = subjects.flat(2); // تسطيح لعمق مستويين متتالين
console.log(flatArr);`
        ],
        expectedOutput: [
            "['Math', 'English', 'physics', 1, 2, 3, 'مستوى ثاني', 277, 300]"
        ],
        professionalTips: 'إذا كانت المصفوفة تحتوي على مستويات تداخل عشوائية غير معروفة بدقة، مرر القيمة Infinity كمعامل للدالة `.flat(Infinity)`؛ ليقوم محرك المتصفح بتسطيح وتفكيك كافة مستويات التداخل مهما كان عمقها لإنتاج مصفوفة مسطحة نقية.',
        commonMistakes: {
            wrong: `const list = [1, [2, [3]]];
const res = list.flat(); // إغفال المعامل يسحب مستوى واحد فقط بالذاكرة
console.log(res); // يطبع [1, 2, [3]] ويترك المستوى الثاني متداخلاً!`,
            right: `const list = [1, [2, [3]]];
const res = list.flat(2); // التسطيح لعمق 2 يضمن فك كافة التداخلات بنجاح
console.log(res); // يطبع [1, 2, 3] بنجاح كامل خطي`,
            explanation: 'القيمة الافتراضية لعمق دالة flat() هي 1؛ فإذا كان التداخل أعمق من مستوى واحد، يظل التداخل الداخلي كما هو دون تفكيك مالم يتم التمرير صراحة.'
        },
        thinkingWay: 'استخدم .flat() عندما تستقبل مصفوفات بيانات معقدة مجزأة تحت حقول فرعية متفرقة من السيرفر وتريد توحيدها وتجميعها في مصفوفة خطية مسطحة واحدة لتسهيل التصفية والعرض.',
        relatedMethods: ['array-map'],
        keywords: ['flat', 'flatten array', 'nested arrays', 'flat depth', 'array flattening', 'Infinity flat']
    },
    {
        id: 'array-foreach',
        name: '.forEach()',
        shortDescription: 'التكرار والمرور المباشر على جميع عناصر المصفوفة لتنفيذ إجراء برمجي مخصص لكل عنصر.',
        longDescription: 'دالة عالية الرتبة (High-Order Function) تقوم بتشغيل دالة استدعاء (Callback) ممررة إليها لمرة واحدة على كل عنصر من عناصر المصفوفة بالتوالي. لا تقوم بإنشاء مصفوفة جديدة ولا ترجع أي قيمة (ترجع undefined دائماً).',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// طباعة أسماء الأصدقاء مع فهارسهم بالتكرار المرئي بالصفحة
const names = ['sulaiman', 'sara', 'ali'];
names.forEach((name, index) => {
  console.log(\`الاسم \${index + 1} : \${name}\`);
});`
        ],
        expectedOutput: [
            "الاسم 1 : sulaiman\\nالاسم 2 : sara\\nالاسم 3 : ali"
        ],
        professionalTips: 'تذكر دائماً أن دالة forEach لا تدعم إيقاف التكرار قسرياً؛ كتابة break أو continue بداخلها سيرمي خطأ قواعدي فادح. إذا كان منطقك يتطلب إيقاف الحلقة بناءً على شرط، فاستخدم حلقة for...of القياسية أو دالة find().',
        commonMistakes: {
            wrong: `// خطأ شائع: محاولة استرجاع مصفوفة قيم معدلة من دالة forEach وتوقع تخزينها
const nums = [1, 2];
const doubled = nums.forEach(n => n * 2);
console.log(doubled); // يطبع undefined! لأن الدالة لا ترجع أي قيمة برمجياً`,
            right: `// استخدام map للتحويل النصي، أو استخدام مصفوفة خارجية مخصصة للتجميع بـ forEach
const nums = [1, 2];
const doubled = nums.map(n => n * 2); // الخيار المثالي والآمن
console.log(doubled); // يطبع [2, 4] بنجاح`,
            explanation: 'دالة forEach مصممة لإحداث تأثيرات وتعديلات جانبية (Side Effects) فقط وليس لفلترة وتحويل البيانات البرمجية، والمخرج المرتجع منها هو undefined دائماً.'
        },
        thinkingWay: 'استخدم forEach() عندما ترغب في تنفيذ إجراء تفاعلي تكراري لا يهدف لإنتاج مصفوفة جديدة؛ مثل ربط مستمعي أحداث لمجموعة من عناصر الـ DOM، أو لإرسال بيانات السجل تتابعاً للخادم.',
        relatedMethods: ['array-map', 'array-filter'],
        keywords: ['forEach', 'array iteration', 'callback', 'side effects', 'loop array']
    },
    {
        id: 'array-map',
        name: '.map()',
        shortDescription: 'إنشاء مصفوفة جديدة تماماً عن طريق تحويل وصياغة كل عنصر من عناصر المصفوفة الأصلية.',
        longDescription: 'دالة عالية الرتبة تمر على كافة عناصر المصفوفة وتطبق عليها دالة استدعاء لتوليد وتصدير قيمة محولة موازية لها، ثم ترجع مصفوفة جديدة تماماً تحتوي على النتائج المحولة مع الإبقاء على المصفوفة الأصلية دون أي تعديل (Immutability).',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `// تحويل مصفوفة أرقام لضرب قيمها بالذاكرة بضربة واحدة
const numbers = [1, 5, 6, 9];
const doubled = numbers.map(num => num * 2);
console.log(doubled);`
        ],
        expectedOutput: [
            "[2, 10, 12, 18]"
        ],
        professionalTips: 'تأكد دائماً من وجود عبارة return صريحة أو ضمنية داخل دالة الاستدعاء الممررة لـ map؛ لأن إغفال إرجاع القيمة يبني مصفوفة جديدة بالكامل من قيم undefined تالفة.',
        commonMistakes: {
            wrong: `const nums = [1, 2];
const res = nums.map(n => {
  n * 2; // نسيان return عند استخدام الأقواس المتعرجة للدوال السهمية!
});
console.log(res); // يطبع [undefined, undefined]!`,
            right: `const nums = [1, 2];
const res = nums.map(n => n * 2); // استخدام الإرجاع الضمني السليم في سطر واحد
console.log(res); // يطبع [2, 4] بنجاح تام وعملي`,
            explanation: 'عند فتح الأقواس المتعرجة {} للدالة السهمية، يفترض المحرك أن الكود يحتاج لتعليمة إرجاع يدوية مالم يتم كتابة return؛ والإرجاع الضمني يعمل فقط عند غياب الأقواس المتعرجة.'
        },
        thinkingWay: 'استخدم .map() كخيار قياسي في بيئات العمل وتطبيقات الأطر الحديثة عندما ترغب في تحويل قوائم البيانات واستعراضها ديناميكياً على واجهاتك دون تعديل مرجع الذاكرة الأصلي.',
        relatedMethods: ['array-filter', 'array-foreach'],
        keywords: ['map', 'immutable', 'transform', 'projection', 'callback', 'react rendering']
    },
    {
        id: 'array-filter',
        name: '.filter()',
        shortDescription: 'إنشاء مصفوفة جديدة تحتوي فقط على العناصر التي تجتاز فحصاً شرطياً منطقياً محدداً.',
        longDescription: 'تقوم الدالة بتشغيل فحص شرطي على كل عنصر من عناصر المصفوفة الأصلية. إذا أرجعت دالة الفحص قيمة حقيقية (Truthy)، يتم نسخ وتجميع العنصر ووضعه في مصفوفة جديدة تماماً يتم إرجاعها في النهاية.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// تصفية وحصر الأرقام الكبيرة التي تتجاوز القيمة 10 بنجاح
const numbers = [5, 7, 9, 10, 15, 20];
const filtered = numbers.filter(num => num >= 10);
console.log(filtered);`
        ],
        expectedOutput: [
            "[10, 15, 20]"
        ],
        professionalTips: 'دالة filter ترجع مصفوفة دائماً؛ فإذا تطابق عنصر واحد ترجع مصفوفة من عنصر فريد، وإذا فشلت الشروط كلياً ترجع مصفوفة فارغة []. لا تستخدمها إذا أردت جلب عنصر واحد فريد واستبدلها بـ .find() للأداء المتفوق للذاكرة.',
        commonMistakes: {
            wrong: `const users = [{ id: 1, name: 'علي' }];
const user = users.filter(u => u.id === 1);
console.log(user.name); // يطبع undefined لأن الناتج مصفوفة تحتوي على الكائن وليس الكائن نفسه مباشرة!`,
            right: `const users = [{ id: 1, name: 'علي' }];
const user = users.find(u => u.id === 1); // يرجع الكائن مباشرة في الذاكرة بأمان
console.log(user.name); // يطبع 'علي'`,
            explanation: 'دالة filter تقوم بفحص المستند بالكامل وبناء مصفوفة مجمعة، بينما توقف find الفحص والمسح الذاكري فور العثور على أول تطابق وترجع المرجع المباشر للكائن.'
        },
        thinkingWay: 'استخدم .filter() لتصفية قوائم البيانات المعروضة لزوار تطبيقك؛ مثل تصفية المنتجات حسب نطاقات الأسعار، أو عزل مدخلات تتبع الأخطاء البرمجية بالفئات المختلفة.',
        relatedMethods: ['array-map', 'array-chaining-filter-map'],
        keywords: ['filter', 'immutable', 'predicate check', 'array screening', 'data filter']
    },
    {
        id: 'array-chaining-filter-map',
        name: '.filter().map()',
        shortDescription: 'تسلسل وربط دوال التصفية والتحويل معاً لمعالجة كتل البيانات بخطوة مدمجة واحدة.',
        longDescription: 'تكتيك برمجي مدمج يجمع بين تصفية وتعديل البيانات تتابعاً؛ حيث ترجع دالة filter مصفوفة مصفاة جديدة تماماً، مما يتيح استدعاء دالة map عليها مباشرة لمعالجة مخرجاتها من نفس السلسلة دون الحاجة لتخصيص متغيرات مؤقتة بالذاكرة.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `// استبعاد الأرقام التي تقبل القسمة على 3 ومضاعفة مخرجات المصفوفة المتبقية
const rawNums = [20, 43, 33, 17, 34, 65];
const processed = rawNums
  .filter(el => el % 3 !== 0) // تصفية العناصر أولاً
  .map(num => num * 5); // مضاعفة العناصر المتبقية وتحديثها

console.log(processed);`
        ],
        expectedOutput: [
            "[100, 215, 85, 170, 325]"
        ],
        professionalTips: 'يعتبر التسلسل (Chaining) من أرقى التكتيكات البرمجية لكتابة أكواد مقتضبة، ولكن تذكر أنه يقوم بإنشاء مصفوفتين بالذاكرة تتابعاً؛ فإذا كانت البيانات ضخمة للغاية (ملايين العناصر)، فمن الأفضل هندسياً دمج الفحص والتحويل داخل حلقة واحدة لتقليص استهلاك الذاكرة.',
        commonMistakes: {
            wrong: `// كتابة التسلسل بترتيب خاطئ يفرز نتائج حسابية تالفة أو يزيد الضغط على الذاكرة
const nums = [10, 20, 30];
const badChain = nums.map(n => n * 2).filter(n => n > 25); // تشغيل map على الكل قبل التصفية يستهلك معالجة غير ضرورية للعناصر المستبعدة!`,
            right: `// تشغيل الفلتر أولاً لتقليص حجم المصفوفة قبل تفعيل دالة map المكثفة
const nums = [10, 20, 30];
const goodChain = nums.filter(n => n > 15).map(n => n * 2); // ترتيب سليم ومحسن تماماً للأداء
console.log(goodChain); // يطبع [40, 60]`,
            explanation: 'وضع الفلتر في مقدمة التسلسل يقلل من حجم العناصر النشطة بالذاكرة فوراً، مما يضمن تشغيل دالة map على النطاق المصفي الفعلي المتبقي فقط لتوفير دورات المعالجة.'
        },
        thinkingWay: 'استخدم ربط وتسلسل الدوال لمعالجة وصياغة مخرجات لوحات البيانات (Dashboards) لتصفية البيانات وتنسيقها للعرض بضربة واحدة ناصعة الكود.',
        relatedMethods: ['array-filter', 'array-map'],
        keywords: ['method chaining', 'filter map', 'functional programming', 'optimized pipeline', 'clean code']
    },
    {
        id: 'array-reduce',
        name: '.reduce()',
        shortDescription: 'اختزال مصفوفة بالكامل وتقليصها لتصبح قيمة مفردة واحدة مدمجة بالذاكرة.',
        longDescription: 'تقوم الدالة بتمرير مُراكم (Accumulator) وقيمة حالية (Current Value) عبر كافة عناصر المصفوفة لتجميع وحساب مخرج نهائي موحد (مثل مجموع رقمي، كائن مفهرس، أو مصفوفة مسطحة جديدة) بناءً على القيمة الابتدائية المحددة كمُعامل ثانٍ للدالة.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `// حساب مجموع المشتريات الإجمالي بضربة واحدة مع قيمة ابتدائية صفرية
const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((acc, current) => acc + current, 0);
console.log('مجموع الأرقام:', sum);`
        ],
        expectedOutput: [
            "مجموع الأرقام: 15"
        ],
        professionalTips: 'حدد دائماً القيمة الابتدائية (Initial Value) كمُعامل ثانٍ لـ reduce. إغفال تمرير القيمة الابتدائية سيجعل محرك جافا سكريبت يستخدم العنصر الأول للمصفوفة كقيمة ابتدائية للمراكم تلقائياً ويبدأ التكرار من العنصر الثاني مباشرة، وهو ما ينتج عنه مشاكل وانهيارات صامتة إذا كانت المصفوفة فارغة.',
        commonMistakes: {
            wrong: `// حساب مجموع كائنات في مصفوفة دون تحديد قيمة ابتدائية للمراكم
const items = [{ price: 10 }, { price: 20 }];
const total = items.reduce((acc, curr) => acc + curr.price); 
console.log(total); // يطبع '[object Object]20' بدلاً من القيمة الرقمية المرجوة 30!`,
            right: `// تمرير القيمة الابتدائية صفرية صراحة لمطابقة الأنواع الرياضية الحسابية
const items = [{ price: 10 }, { price: 20 }];
const total = items.reduce((acc, curr) => acc + curr.price, 0); // تهيئة العداد بـ 0
console.log(total); // يطبع 30 بنجاح تام دقيق`,
            explanation: 'عند غياب القيمة الابتدائية، يفترض المتصفح أن الكائن الأول هو القيمة الابتدائية للمراكم (acc)، ويقوم بعملية جمع كائن كامل مع رقم في الدورة التالية مما يفرز نصاً معطوباً.'
        },
        thinkingWay: 'استخدم .reduce() عندما ترغب في تقليص المصفوفات الحسابية لقيمة مالية نهائية موحدة، أو لتحويل هياكل مصفوفات السجلات البرمجية لقوالب مفهرسة بأسماء المعرفات المباشرة.',
        relatedMethods: ['array-map', 'array-filter'],
        keywords: ['reduce', 'accumulator', 'array summation', 'reduce method', 'data aggregator']
    },
    {
        id: 'array-destructuring-basic',
        name: 'let [a, b] = array',
        shortDescription: 'تفكيك مصفوفة البيانات وتعيين قيمها الرقمية لمتغيرات فرعية مستقلة بالترتيب.',
        longDescription: 'طريقة برمجية حديثة تم إدخالها في ES6 تتيح استخراج القيم من المصفوفات وتخصيصها لمتغيرات مستقلة مباشرة بناءً على ترتيب فهارسها الرقمية وبخطوة واحدة مقتضبة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تفكيك ألوان المصفوفة وتعيينها لمتغيرات منفصلة بالترتيب المتناسق
const colors = ['red', 'green', 'blue'];
const [a, b, c] = colors;
console.log('اللون الأول:', a);
console.log('اللون الثالث:', c);`
        ],
        expectedOutput: [
            "اللون الأول: red\\nاللون الثالث: blue"
        ],
        professionalTips: 'هذا النمط المعماري يلغي تماماً الحاجة لكتابة استدعاءات الفهارس اليدوية المملة والمكررة مثل `const first = array[0]` ويساهم في الحفاظ على مقروئية أكواد فك البيانات الحساسة.',
        commonMistakes: {
            wrong: `// محاولة فك عناصر تفوق طول المصفوفة الفعلية وتوقع حدوث انهيار برمي
const list = [10];
const [x, y] = list; // عدم التحقق من وجود المتغير الثاني يجعله undefined صامتة دون انهيار المتصفح`,
            right: `const list = [10];
const [x, y = 0] = list; // تعيين قيمة افتراضية احتياطية تفادياً لظهور undefined بالذاكرة
console.log(x, y); // يطبع 10 0`,
            explanation: 'جافا سكريبت لا تمنع تفكيك عناصر خارج حدود المصفوفة الفعلي، بل تخصص لها القيمة الافتراضية undefined صامتاً؛ لذا فإن صياغة القيم الافتراضية تحمي المتغيرات.'
        },
        thinkingWay: 'استخدم تفكيك المصفوفات الأساسي عندما تتلقى مصفوفة بيانات ثابتة البنية (مثل الإحداثيات الجغرافية أو تبادلات الحالات لربطها بمتغيرات مستقلة مباشرة).',
        relatedMethods: ['array-destructuring-default', 'array-destructuring-rest'],
        keywords: ['array destructuring', 'es6 destructuring', 'unwrap array', 'variable assignment', 'unpacking']
    },
    {
        id: 'array-destructuring-default',
        name: 'let [a, b = default] = array',
        shortDescription: 'تفكيك مصفوفة البيانات مع توفير وتعيين قيم افتراضية احتياطية للحماية.',
        longDescription: 'تطوير لأسلوب تفكيك المصفوفات؛ يتيح كتابة قيمة افتراضية احتياطية تتبع علامة التساوي (=) أثناء التفكيك. يستعين المتصفح بهذه القيمة الافتراضية حصراً في حال كانت قيمة العنصر في الفهرس المقابل غير موجودة بالذاكرة أو تحمل القيمة undefined.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تعيين قيمة افتراضية لمتغير مفقود بالمصفوفة المستلمة
const nums2 = [7];
const [ss, aa = "29"] = nums2;
console.log('المتغير الأول:', ss);
console.log('المتغير الثاني الاحتياطي:', aa);`
        ],
        expectedOutput: [
            "المتغير الأول: 7\\nالمتغير الثاني الاحتياطي: 29"
        ],
        professionalTips: 'تذكر أن القيمة الافتراضية تُفعل فقط مع قيم undefined؛ فإذا كان العنصر المقابل يحمل القيمة null، فسيتم إهمال القيمة الافتراضية وتعيين القيمة null للمتغير لأن null قيمة صلبة ومعلنة برمجياً.',
        commonMistakes: {
            wrong: `const list = [null];
const [val = 100] = list; // توقع تفعيل القيمة الاحتياطية مع القيمة الفارغة null
console.log(val); // يطبع null! ويتجاهل تماماً الـ 100 الاحتياطية المكتوبة`,
            right: `const list = [undefined];
const [val = 100] = list; // تفعيل ناجح وحتمي مع undefined بالذاكرة
console.log(val); // يطبع 100 بنجاح دقيق كامد`,
            explanation: 'جافا سكريبت تعامل null كقيمة معينة صريحة ترمز للعدم، بينما تعامل undefined كغياب كلي للإعلان والتخصيص، وهو الشرط الوحيد لتفعيل الحمايات الافتراضية.'
        },
        thinkingWay: 'استخدم هذا التكنيك لضمان عدم حصول تطبيقك على قيم تالفة غير معلنة (undefined) عند قراءة بيانات الإعدادات غير المكتملة الواردة من السيرفر أو مدخلات العميل العشوائية.',
        relatedMethods: ['array-destructuring-basic'],
        keywords: ['destructuring default', 'default values', 'es6 array default', 'safe unpacking', 'fallback values']
    },
    {
        id: 'array-destructuring-rest',
        name: 'let [a, ...rest] = array',
        shortDescription: 'استخلاص العناصر الأولى للمصفوفة وجمع باقي المكونات في مصفوفة فرعية مستقلة بنمط (Rest).',
        longDescription: 'توظيف لعامل الباقي (Rest Operator ...) أثناء تفكيك المصفوفات؛ يتيح عزل وتعيين أول مخرجات المصفوفة لمتغيرات فرعية، وحزم تجميع كافة العناصر المتبقية وتصديرها تلقائياً داخل مصفوفة فرعية مستقلة بالذاكرة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// عزل العنصر الأول والثاني وحزم باقي أعضاء الفريق في مصفوفة مستقلة
const names = ['sulaiman', 'tebarek', 'omar', 'ali'];
const [sul, tba, ...atherName] = names;

console.log('القائد ومساعده:', sul, '&', tba);
console.log('باقي الأعضاء المجمعين:', atherName);`
        ],
        expectedOutput: [
            "القائد ومساعده: sul & tebarek\\nباقي الأعضاء المجمعين: ['omar', 'ali']"
        ],
        professionalTips: 'تذكر دائماً أن معامل الباقي (Rest Parameter) يجب أن يكتب في السطر البرمجي كآخر معامل داخل الأقواس المربعة للتفكيك؛ كتابة أي متغير تالٍ له سيتسبب فوراً في رمي خطأ برمي تجميعي فادح SyntaxError.',
        commonMistakes: {
            wrong: `const list = [1, 2, 3];
const [...middle, last] = list; // محاولة وضع حزمة التجميع بالمنتصف تسبب خطأ تجميعي SyntaxError: Rest element must be last element`,
            right: `const list = [1, 2, 3];
const [first, ...rest] = list; // الموضع الصحيح في النهاية دائماً بسلام كامل
console.log(rest); // يطبع [2, 3]`,
            explanation: 'منطقياً يحتاج المحرك لوضع كافة العناصر المفردة أولاً، ليعرف بدقة أين ينتهي التوزيع الفردي ويبدأ تجميع متبقي البيانات في حزمة واحدة بالنهاية.'
        },
        thinkingWay: 'استخدم هذا التكنيك عندما تبني دوال تقبل معاملات مرنة وتريد استخراج المدخلات الرئيسية للمعالجة، مع عزل باقي العناصر لتمريرها تتابعاً لعمليات معالجة جماعية أخرى.',
        relatedMethods: ['array-destructuring-basic'],
        keywords: ['rest operator', 'array rest', 'unpacking rest', 'es6 array unpacking', 'gather remaining']
    },
    {
        id: 'array-destructuring-nested',
        name: 'let [[a, b]] = array',
        shortDescription: 'تفكيك وسحب الحقول من داخل المصفوفات ثنائية المستوى والمتداخلة بذكاء وسرعة.',
        longDescription: 'تكتيك متقدم يتيح التغلغل لعمق المصفوفة المتداخلة (Nested Array) واستخلاص الحقول الفرعية مباشرة دون الحاجة لكتابة استدعاءات نقاط معقدة أو استخدام فهارس مزدوجة مربكة.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `// تفكيك سجلات مستخدم مدمجة بداخل مصفوفة مصفوفات فرعية بالذاكرة
const users = [['sulaiman', 25], ['Tebarek', 29]];
const [[mYname, age], [nameT]] = users;

console.log('الاسم الأول الفردي مفككاً:', mYname);
console.log('اسم الكيان الثاني مفككاً:', nameT);`
        ],
        expectedOutput: [
            "الاسم الأول الفردي مفككاً: sulaiman\\nاسم الكيان الثاني مفككاً: Tebarek"
        ],
        professionalTips: 'هذا النمط رائع جداً عند قراءة مصفوفات الأزواج الهيكلية (مثل إحداثيات النقاط الرياضية المتعددة، أو مفاتيح وقيم الكائنات المفرزة بـ Object.entries()) لتصفيتها وسحب الحقول فوراً.',
        commonMistakes: {
            wrong: `const list = [[1, 2]];
const [x, y] = list; // خطأ فادح: استدعاء التفكيك بمستوى مسطح يجعل x مصفوفة فرعية كاملة [1, 2] بدلاً من سحب القيمة المباشرة 1!`,
            right: `const list = [[1, 2]];
const [[x, y]] = list; // الفك المزدوج الصحيح لمطابقة عمق التداخل بدقة بالذاكرة
console.log(x, y); // يطبع 1 2 بنجاح خطي مقتضب`,
            explanation: 'يحتاج المحرك لمطابقة الهيكل القوسي للبيانات في الذاكرة لتوجيه الفك بنجاح؛ عدم وضع الأقواس المزدوجة يجعل الفك يقف عند حدود المستوى الأول للمصفوفة الخارجية.'
        },
        thinkingWay: 'استخدم التفكيك المتداخل للمصفوفات فوراً لتقليص سطور كود معالجة وتصفية استجابات جداول البيانات الثنائية وقوائم الإحداثيات المتداخلة المستلمة من السيرفر.',
        relatedMethods: ['array-destructuring-basic'],
        keywords: ['nested destructuring', 'nested array unwrap', 'multidimensional array', 'deep unpacking', 'array of arrays']
    },
    {
        id: 'array-destructuring-swap',
        name: '[a, b] = [b, a]',
        shortDescription: 'تبديل قيم متغيرين في الذاكرة بضربة واحدة تفاعلية دون حجز متغير مؤقت إضافي.',
        longDescription: 'تطبيق عبقري لآلية تفكيك المصفوفات في جافا سكريبت؛ يتيح مبادلة وتغيير قيم متغيرين قائمين بالفعل في الذاكرة دفعة واحدة، دون الحاجة للممارسة الكلاسيكية التي تتطلب تعريف متغير ثالث مؤقت لحفظ البيانات عارضاً.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// مبادلة وتبديل قيم متغيرين بضربة واحدة سريعة ومقروءة
let aaa = 10;
let bbb = 9999;

[aaa, bbb] = [bbb, aaa]; // تفعيل التبديل العكسي المباشر بالذاكرة

console.log('المتغير الأول بعد التبديل:', aaa);
console.log('المتغير الثاني بعد التبديل:', bbb);`
        ],
        expectedOutput: [
            "المتغير الأول بعد التبديل: 9999\\nالمتغير الثاني بعد التبديل: 10"
        ],
        professionalTips: 'هذه العملية مدعومة داخلياً ومحسنة الأداء في محركات المتصفح؛ اعتمد عليها دائماً كبديل عصري للممارسة القديمة لتوفير حجم كتابة الكود البرمجي والحفاظ على تماسك الشيفرة.',
        commonMistakes: {
            wrong: `// النمط القديم والمكرر لحجز متغير وسيط إضافي لتأمين عملية التبديل
let x = 1, y = 2;
let temp = x; // حجز مساحة ذاكرة إضافية غير ضرورية
x = y;
y = temp;`,
            right: `// التبديل النظيف والآمن دون حيازة ذاكرة إضافية يدوياً
let x = 1, y = 2;
[x, y] = [y, x]; // تبديل فوري سليم بالكامل لعام 2026
console.log(x, y); // يطبع 2 1`,
            explanation: 'التبديل بالتفكيك ينشئ مصفوفة عارضة في الذاكرة قصيرة المدى ويقوم بفكها وتوزيعها فوراً على المتغيرين بنظام المعالجة اللحظية فائقة السرعة.'
        },
        thinkingWay: 'استخدم هذا التكنيك الأنيق عند كتابة خوارزميات الترتيب والفرز الرياضي الذاتي (Sorting Algorithms)، أو عند تبديل حالتين حركيتين بالتناوب ديناميكياً داخل واجهات موقعك.',
        relatedMethods: ['array-destructuring-basic'],
        keywords: ['swap variables', 'destructuring swap', 'no temp variable', 'swapping values', 'clean code algorithms']
    }
];