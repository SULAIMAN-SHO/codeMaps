export const stringsData = [
    {
        id: 'string-length',
        name: 'length',
        shortDescription: 'خاصية مدمجة تُرجع عدد الأحرف الإجمالي المكون للسلسلة النصية.',
        longDescription: 'خاصية للقراءة فقط (Read-only) ترجع طول السلسلة النصية ممثلاً بعدد الوحدات البرمجية للأحرف (UTF-16 Code Units). يتم حساب كل حرف، مسافة فارغة، سطر جديد، أو علامة ترقيم كحرف كامل طوله 1. ترجع القيمة صفر (0) للنصوص الفارغة تماماً.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// قياس طول السلسلة النصية شاملة المسافات
const username = 'SulaimaN ShO';
console.log('عدد أحرف الاسم:', username.length);`
        ],
        expectedOutput: [
            "عدد أحرف الاسم: 12"
        ],
        professionalTips: 'تذكر دائماً أن length هي خاصية (Property) وليست دالة (Method)؛ لذا يتم قراءتها مباشرة دون كتابة أقواس الاستدعاء (). كتابة ()length ستتسبب بانهيار السكربت بـ TypeError.',
        commonMistakes: {
            wrong: `const text = 'CodeMap';
console.log(text.length()); // خطأ: text.length is not a function`,
            right: `const text = 'CodeMap';
console.log(text.length); // يطبع 7 بنجاح`,
            explanation: 'تعتبر length قيمة رقمية مخزنة يتم حسابها وتحديثها تلقائياً من قِبل المتصفح فور إنشاء النص، وليست دالة ديناميكية تتطلب الاستدعاء والتنفيذ.'
        },
        thinkingWay: 'استخدم هذه الخاصية كخيار أساسي للتحقق من شروط صحة البيانات (Data Validation)؛ مثل التأكد من أن كلمة المرور لا تقل عن 8 خانات، أو التحقق من خلو حقل الإدخال تماماً قبل معالجته.',
        relatedMethods: ['string-trim'],
        keywords: ['length', 'string length', 'character count', 'size', 'string property']
    },
    {
        id: 'string-touppercase',
        name: 'toUpperCase()',
        shortDescription: 'تحويل كافة الأحرف الإنجليزية المتواجدة في النص بالكامل إلى أحرف كبيرة.',
        longDescription: 'دالة مدمجة تقوم بإنشاء سلسلة نصية جديدة وتغيير حالة جميع الأحرف اللاتينية الصغيرة (Lowercase) إلى أحرف كبيرة (Capital Letters)، مع ترك بقية الرموز والعلامات والأحرف العربية دون تغيير.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تحويل حالة الاسم بالكامل إلى أحرف كبيرة
const rawName = 'SulaimaN ShO';
console.log(rawName.toUpperCase());`
        ],
        expectedOutput: [
            "SULAIMAN SHO"
        ],
        professionalTips: 'تذكر دائماً أن هذه الدالة لا تعدل النص الأصلي بل تُنتج وتُرجع نصاً جديداً بالكامل نظراً لأن النصوص في جافا سكريبت غير قابلة للتعديل في مكانها (Immutable).',
        commonMistakes: {
            wrong: `let user = 'sulaiman';
user.toUpperCase(); // محاولة التحويل دون حفظ القيمة الجديدة
console.log(user); // يطبع 'sulaiman' دون تغيير!`,
            right: `let user = 'sulaiman';
user = user.toUpperCase(); // حفظ القيمة المسترجعة في المتغير
console.log(user); // يطبع 'SULAIMAN' بنجاح`,
            explanation: 'النصوص في جافا سكريبت غير قابلة للتعديل (Immutable)؛ أي دالة تقوم بمعالجة النص ترجع دائماً مرجعاً نصياً جديداً بالكامل في الذاكرة.'
        },
        thinkingWay: 'استخدم هذه الدالة عندما تريد توحيد حالة البيانات لتبدو منسقة وبارزة بالكامل للمستخدم، أو قبل مقارنتها بالأحرف الكبيرة.',
        relatedMethods: ['string-tolowercase'],
        keywords: ['toUpperCase', 'uppercase', 'capital letters', 'string case', 'text transform']
    },
    {
        id: 'string-tolowercase',
        name: 'toLowerCase()',
        shortDescription: 'تحويل كافة الأحرف الإنجليزية المتواجدة في النص بالكامل إلى أحرف صغيرة.',
        longDescription: 'دالة مدمجة تقوم بإنشاء سلسلة نصية جديدة وتغيير حالة جميع الأحرف اللاتينية الكبيرة (Uppercase) إلى أحرف صغيرة (Small Letters)، مع ترك بقية الرموز والعلامات والأحرف العربية دون تغيير.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تحويل حالة الاسم بالكامل إلى أحرف صغيرة لمقارنتها بأمان
const rawName = 'SulaimaN ShO';
console.log(rawName.toLowerCase());`
        ],
        expectedOutput: [
            "sulaiman sho"
        ],
        professionalTips: 'استخدم دائماً toLowerCase() على مدخلات البحث أو أسماء الحسابات قبل مقارنتها أو فحصها بالـ APIs لمنع التعارض مع الأحرف الكبيرة التي يدخلها المستخدم بالخطأ.',
        commonMistakes: {
            wrong: `const role = 'Admin';
if (role === 'admin') { // سيفشل الفحص بسبب اختلاف الحرف الأول
  console.log('مسموح بالدخول');
}`,
            right: `const role = 'Admin';
if (role.toLowerCase() === 'admin') { // توحيد الحالة يضمن نجاح المقارنة
  console.log('مسموح بالدخول بأمان');
}`,
            explanation: 'نصوص جافا سكريبت حساسة للغاية لحالة الحروف (Case-sensitive)، والحرف الكبير يختلف كلياً في الذاكرة عن الحرف الصغير، وتوحيد الحالة هو السبيل الوحيد لإجراء مقارنة ناجحة.'
        },
        thinkingWay: 'استخدم هذه الدالة كخطوة تحضيرية لتسوية وتوحيد البيانات (Data Normalization) وتجهيز مدخلات البحث الحساسة قبل مطابقتها.',
        relatedMethods: ['string-touppercase'],
        keywords: ['toLowerCase', 'lowercase', 'small letters', 'string case', 'text format']
    },
    {
        id: 'string-index-access',
        name: 'str[index]',
        shortDescription: 'قراءة حرف محدد من موقعه الرقمي (الفهرس) داخل السلسلة النصية باستخدام الأقواس المربعة.',
        longDescription: 'طريقة برمجية مباشرة تتيح معاملة النص كمصفوفة وقراءة قيمة الحرف المتواجد عند الفهرس الممرر بين الأقواس المربعة. يبدأ الفهرس دائماً من الصفر (0) وينتهي عند الطول مطروحاً منه واحد.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// قراءة الحرف الأول والثامن من السلسلة النصية
const str = 'SulaimaN';
console.log('الحرف الأول:', str[0]);
console.log('استدعاء فهرس غير موجود:', str[20]);`
        ],
        expectedOutput: [
            "الحرف الأول: S\\nاستدعاء فهرس غير موجود: undefined"
        ],
        professionalTips: 'الوصول للحرف بالأقواس المربعة يرجع القيمة undefined في حال كان الفهرس خارج حدود طول النص، بينما ترجع دالة charAt() نصاً فارغاً "" في نفس الحالة.',
        commonMistakes: {
            wrong: `let word = 'ahmed';
word[0] = 'A'; // محاولة تعديل الحرف الأول للمتغير
console.log(word); // يظل 'ahmed' لأن نصوص جافا سكريبت غير قابلة للتعديل برمجياً بالخاصية هذه`,
            right: `let word = 'ahmed';
word = 'A' + word.slice(1); // دمج الحرف الجديد مع متبقي السلسلة
console.log(word); // يطبع 'Ahmed' بنجاح`,
            explanation: 'سلاسل جافا سكريبت النصية غير قابلة للتعديل في مكانها (Immutable). لا يمكن تعديل حرف فردي فيها باستخدام الفهارس المباشرة، ويجب دائماً صياغة سلسلة جديدة بالكامل لتطبيق التعديلات.'
        },
        thinkingWay: 'استخدم الأقواس المربعة للوصول للأحرف الفردية عندما تكون واثقاً من حدود طول النص البرمجي وتريد كتابة كود مقتضب وقصير.',
        relatedMethods: ['string-charat'],
        keywords: ['bracket notation', 'index access', 'string index', 'character array', 'immutability']
    },
    {
        id: 'string-charat',
        name: 'charAt()',
        shortDescription: 'الوصول واستخراج حرف محدد من موقع الفهرس داخل السلسلة النصية عبر دالة مخصصة.',
        longDescription: 'دالة مدمجة تأخذ معاملاً يمثل الفهرس الرقمي المستهدف وترجع الحرف المقابل له. الميزة الفريدة بها هي إرجاع سلسلة نصية فارغة "" في حال تمرير فهرس خارج نطاق طول السلسلة النصية بدلاً من رمي خطأ أو إرجاع undefined.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// جلب الأحرف وتوضيح السلوك عند تمرير فهرس خارج النطاق
const str = 'SulaimaN';
console.log('الحرف الثاني:', str.charAt(1));
console.log('فهرس غير موجود بـ charAt:', str.charAt(20));`
        ],
        expectedOutput: [
            "الحرف الثاني: u\\nفهرس غير موجود بـ charAt: "
        ],
        professionalTips: 'استخدم charAt() بدلاً من الأقواس المربعة إذا كنت تخشى حدوث مشاكل برمجية عارضة نتيجة ظهور قيم undefined عند استدعاء فهارس عشوائية تفوق طول السلسلة النصية الفعلية.',
        commonMistakes: {
            wrong: `let name = 'test';
name.charAt(0) = 'T'; // خطأ مباشر: Invalid left-hand side in assignment`,
            right: `let name = 'test';
name = 'T' + name.slice(1); // دمج التعديل النصي المناسب
console.log(name); // يطبع 'Test'`,
            explanation: 'دوال استخراج وحساب الأحرف ترجع قيماً جديدة تماماً ولا يمكن إخضاعها لعوامل التعيين (=) لتعديل محتوى المتغير الأصلي في الذاكرة.'
        },
        thinkingWay: 'استخدم charAt() عندما ترغب في قراءة الحروف الفردية بشكل آمن برمجياً لتجنب الحصول على قيم undefined التي قد تفشل معها العمليات اللاحقة.',
        relatedMethods: ['string-index-access'],
        keywords: ['charAt', 'character access', 'string position', 'index out of bounds', 'string safe']
    },
    {
        id: 'string-trim',
        name: 'trim()',
        shortDescription: 'إزالة وتصفية المسافات البيضاء الفارغة من بداية ونهاية السلسلة النصية كلياً.',
        longDescription: 'تقوم دالة trim بإنشاء نص جديد ومسح كافة المسافات والفراغات وعلامات السطور الجديدة (Tabs / Newlines) المتواجدة في مقدمة ومؤخرة النص، دون التعديل على المسافات الفاصلة بين الكلمات بالداخل.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تنظيف اسم مستخدم مكتوب بمسافات زائدة
const textInput = '    SulaimaN ShO     ';
const cleanedText = textInput.trim();
console.log('النص بعد التنظيف:', cleanedText);`
        ],
        expectedOutput: [
            "النص بعد التنظيف: SulaimaN ShO"
        ],
        professionalTips: 'استخدم دائماً دالة trim() على مدخلات النماذج النصية قبل معالجتها أو إرسالها لقاعدة البيانات لتلافي حدوث مشاكل في التحقق بسبب مسافات فارغة غير مقصودة يضغطها المستخدم.',
        commonMistakes: {
            wrong: `const username = '  sulaiman  ';
if (username === 'sulaiman') { // سيفشل الشرط لوجود فراغات جانبية بالمتغير!
  console.log('مقبول');
}`,
            right: `const username = '  sulaiman  ';
if (username.trim() === 'sulaiman') { // تنظيف وحماية الفحص بنجاح
  console.log('مقبول بعد التنظيف بأمان');
}`,
            explanation: 'المسافة الفارغة هي حرف حقيقي في نظر جافا سكريبت ولها طول معتمد بالذاكرة، وإغفال إزالتها يتسبب في فشل التحقق من البيانات.'
        },
        thinkingWay: 'استدعِ هذه الدالة كخطوة تصفية إلزامية لجميع حقول الإدخال النصية (Inputs) لمنع تسريب الفراغات المزعجة لقواعد البيانات.',
        relatedMethods: ['string-case'],
        keywords: ['trim', 'whitespace', 'data sanitization', 'form inputs', 'string cleaning']
    },
    {
        id: 'string-indexof',
        name: 'indexOf()',
        shortDescription: 'البحث وتحديد فهرس أول ظهور لنص فرعي معين داخل السلسلة النصية.',
        longDescription: 'تقوم دالة indexOf بالبحث عن الكلمة أو المقطع الممرر كمعامل من اليسار إلى اليمين داخل النص الأساسي. ترجع الرقم المقابل للفهرس الذي تبدأ عنده المطابقة، أو ترجع (-1) في حال عدم العثور عليها.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تحديد موضع الأحرف والكلمات داخل النص للتتبع الهيكلي
const ideaText = 'SulaimaN ShO';
console.log('فهرس حرف m الأقرب:', ideaText.indexOf('m'));
console.log('البحث عن قيمة غير موجودة:', ideaText.indexOf('z'));`
        ],
        expectedOutput: [
            "فهرس حرف m الأقرب: 4\\nالبحث عن قيمة غير موجودة: -1"
        ],
        professionalTips: 'إذا أردت مجرد التحقق الشرطي من وجود الكلمة (نعم/لا) دون الاهتمام بموقعها، فمن الأفضل هندسياً استخدام الدالة المعاصرة .includes() لمقروئية أعلى للكود.',
        commonMistakes: {
            wrong: `const phrase = 'SulaimaN ShO';
if (phrase.indexOf('ShO') !== -1) { // مقارنة تقليدية تفتقر لمقروئية الكود الحديثة
  console.log('تم العثور');
}`,
            right: `const phrase = 'SulaimaN ShO';
if (phrase.includes('ShO')) { // كود نظيف وسهل القراءة لعام 2026
  console.log('تم العثور بأمان');
}`,
            explanation: 'الدالة includes ترجع ناتجاً منطقياً مباشراً (true/false) يوضح نية المبرمج بوضوح تام دون الحاجة للمقارنة اليدوية بـ -1.'
        },
        thinkingWay: 'استخدم indexOf عندما تحتاج لمعرفة الموقع الرقمي الدقيق للحرف (الفهرس) لتقوم بعملية اقتطاع لاحقة باستخدام slice بناءً على هذا الموضع المكتشف.',
        relatedMethods: ['string-lastindexof', 'string-includes'],
        keywords: ['indexOf', 'substring search', 'string index', 'character location', 'not found -1']
    },
    {
        id: 'string-lastindexof',
        name: 'lastIndexOf()',
        shortDescription: 'البحث وتحديد فهرس آخر ظهور لنص فرعي معين داخل السلسلة النصية.',
        longDescription: 'تقوم دالة lastIndexOf بالبحث عن الكلمة أو المقطع الممرر كمعامل من اليمين إلى اليسار (عكسياً) داخل النص الأساسي. ترجع الفهرس الرقمي لأول تطابق تصادفه في مسارها العكسي، أو ترجع (-1) في حال فشل البحث.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// البحث عن آخر تكرار لحرف معين داخل الاسم
const text = 'AAsaaas';
console.log('آخر تكرار لحرف s:', text.lastIndexOf('s'));`
        ],
        expectedOutput: [
            "آخر تكرار لحرف s: 6"
        ],
        professionalTips: 'تدعم الدالة معاملاً ثانياً اختيارياً يمثل الفهرس الذي تبدأ منه الدالة عملية البحث العكسي باتجاه اليسار لتخصيص نطاقات الفحص.',
        commonMistakes: {
            wrong: `const text = 'AAsaaas';
console.log(text.lastIndexOf('Z')); // تفترض أن الفشل يرجع undefined أو خطأ مباشر`,
            right: `const text = 'AAsaaas';
console.log(text.lastIndexOf('Z')); // يطبع -1 بنجاح كإشارة للفشل في العثور على العنصر`,
            explanation: 'كافة دوال تتبع المواقع الإيجابية ترجع القيمة -1 تحديداً لإرشاد المطور هندسياً بعدم وجود العنصر داخل السلسلة.'
        },
        thinkingWay: 'استخدم lastIndexOf عندما ترغب في العثور على آخر ظهور لرمز أو لاحقة معينة في النص (مثل العثور على امتداد الملف الأخير في رابط الملفات).',
        relatedMethods: ['string-indexof'],
        keywords: ['lastIndexOf', 'reverse search', 'last occurrence', 'string boundary index', 'search backwards']
    },
    {
        id: 'string-slice',
        name: 'slice()',
        shortDescription: 'استخراج جزء محدد من السلسلة النصية وإرجاعه كنص جديد دون تعديل النص الأصلي.',
        longDescription: 'تقوم دالة slice باقتطاع جزء من النص بناءً على فهرس البدء (start index) وفهرس النهاية (end index - غير شامل في الناتج). الميزة الهامة في هذه الدالة هي دعمها للفهارس السالبة، والتي تعني بدء الاقتطاع بالعد العكسي من نهاية السلسلة النصية.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// اقتطاع جزء محدد باستخدام الفهارس الموجبة والسالبة
const email = 'developer.sulaiman@gmail.com';
const username = email.slice(0, 18);
console.log('اسم المستخدم:', username);`
        ],
        expectedOutput: [
            "اسم المستخدم: developer.sulaiman"
        ],
        professionalTips: 'تجنب استخدام الدالتين القديمتين substring و substr (والأخيرة تم تصنيفها كـ Deprecated رسمياً). دالة slice هي المعيار الذهبي الموحد والآمن لاقتطاع النصوص في جافا سكريبت بسبب مرونتها الكاملة ودعمها للعد العكسي بالسالب.',
        commonMistakes: {
            wrong: `const token = "JWT_ABC123";
const sub = token.substr(4, 5); // استخدام دالة مهملة (Deprecated) تسبب أخطاء توافقية مستقبلية`,
            right: `const token = "JWT_ABC123";
const sub = token.slice(4, 9); // البديل القياسي الحديث والآمن دائماً`,
            explanation: 'تم إهمال دالة substr رسمياً لأن سلوكها في حساب عدد الأحرف يسبب ارتباكاً وتعارضاً في المتصفحات. استخدام slice يضمن تشغيل كودك عبر كافة البيئات الحديثة والمعيارية لعام 2026.'
        },
        thinkingWay: 'استخدم slice دائماً عندما تحتاج إلى استخراج جزء معين من نص طويل (مثل مقتطفات المقالات، أو اقتطاع أجزاء من رموز التعريف كـ Tokens أو معرفات الأجهزة) عندما تكون فهارس البداية والنهاية معروفة أو يمكن حسابها.',
        relatedMethods: ['string-split', 'string-replace'],
        keywords: ['slice', 'substring', 'substr', 'string extraction', 'negative index']
    },
    {
        id: 'string-split-empty',
        name: 'split("")',
        shortDescription: 'تقسيم السلسلة النصية وتفكيكها بالكامل إلى مصفوفة من الأحرف المنفصلة.',
        longDescription: 'عند استدعاء دالة split وتمرير سلسلة نصية فارغة تماماً كمعامل تقسيم، يقوم محرك جافا سكريبت بتفكيك النص الأصلي بالكامل، حرفاً بحرف، بما في ذلك المسافات، وحفظها كعناصر منفصلة داخل مصفوفة مرتبة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تفكيك الكلمة يدوياً إلى مصفوفة حروف
const word = 'SulaimaN';
const chars = word.split('');
console.log(chars);`
        ],
        expectedOutput: [
            "['S', 'u', 'l', 'a', 'i', 'm', 'a', 'N']"
        ],
        professionalTips: 'استخدم split("") عندما ترغب في معالجة الحروف أو تشفيرها بالتتابع، أو لعكس ترتيب أحرف الكلمة بدمجها مع دوال المصفوفات: .split("").reverse().join("").',
        commonMistakes: {
            wrong: `const word = 'test';
const chars = word.split(); // نسيان الأقواس الفارغة يرجع الكلمة بالكامل كعنصر وحيد بالمصفوفة`,
            right: `const word = 'test';
const chars = word.split(''); // وضع السلسلة الفارغة يفكك الأحرف بنجاح`,
            explanation: 'في حال استدعاء split دون معامل تقسيم، ترجع الدالة المصفوفة وبداخلها النص كاملاً كعنصر وحيد دون تفكيك.'
        },
        thinkingWay: 'استخدم هذا التكنيك عندما تحتاج للوصول الكامل لكافة حروف الكلمة وإجراء دورة فحص وتعديل على الأحرف الفردية باستخدام ميزات المصفوفات.',
        relatedMethods: ['string-split-space'],
        keywords: ['split', 'char array', 'string to chars', 'reverse string', 'character array']
    },
    {
        id: 'string-substring',
        name: 'substring()',
        shortDescription: 'اقتطاع واستخراج جزء من السلسلة النصية يقع بين فهرسين رقميين محددين.',
        longDescription: 'تقوم دالة substring بقطع وتصفية جزء من النص يبدأ من فهرس البدء (start) وحتى فهرس النهاية (end - غير شامل للناتج). تتميز عن دالة slice بميزة مدمجة؛ حيث تقوم بتبديل الفهارس تلقائياً إذا كان فهرس البدء أكبر من فهرس النهاية، ولكنها لا تدعم الفهارس السالبة أبداً.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `// اقتطاع نص مع توضيح تبديل الفهارس التلقائي للفهارس
const text = 'SulaimaN ShO';
const sub = text.substring(3, 8); // يقتطع من الفهرس 3 للفهرس 8
console.log(sub);`
        ],
        expectedOutput: [
            "laima"
        ],
        professionalTips: 'اعتمد بالكامل على دالة slice() كخيار أساسي ومعياري في كودك؛ لأنها تدعم الفهارس السالبة المريحة للغاية للتراجع والعد العكسي، وسلوكها متسق ومطابق تماماً لدوال الاقتطاع في لغات البرمجة الأخرى.',
        commonMistakes: {
            wrong: `const data = 'SulaimaN';
const result = data.substring(-3); // تعامل القيمة السالبة كـ صفر (0) وترجع النص بالكامل دون اقتطاع!`,
            right: `const data = 'SulaimaN';
const result = data.slice(-3); // تقتطع آخر 3 أحرف بنجاح تام وترجع 'maN'
console.log(result);`,
            explanation: 'دالة substring لا تفهم الفهارس السالبة على الإطلاق وتقوم تلقائياً بتحويل أي قيمة سالبة تمرر إليها إلى صفر (0) قبل التنفيذ، مما يمنع تحقيق فكرة الاقتطاع من النهاية.'
        },
        thinkingWay: 'استخدم substring في الكود القديم فقط عند الرغبة بضمان تلافي المشاكل الناجمة عن تداخل أو تبديل قيم الفهارس يدوياً، واستبدلها دائماً بـ slice في الكود الحديث للأداء والمرونة العالية.',
        relatedMethods: ['string-slice'],
        keywords: ['substring', 'string slice alternative', 'index swapping', 'negative indexing fallback', 'string extraction']
    },
    {
        id: 'string-substr',
        name: 'substr()',
        shortDescription: 'اقتطاع واستخراج جزء من السلسلة النصية بناءً على فهرس البدء وعدد الأحرف المطلوبة.',
        longDescription: 'دالة اقتطاع قديمة تأخذ معاملاً أول يمثل فهرس البدء (start)، ومعاملاً ثانياً يمثل عدد الأحرف الإجمالي المراد استخراجه (length). تختلف في سلوكها عن slice و substring في طريقة فهم المعامل الثاني كعدد أحرف مطلوب وليس فهرس نهاية.',
        difficulty: 'medium',
        importance: 'optional',
        examples: [
            `// اقتطاع نص بتحديد موضع البدء وطول الأحرف المستخرجة
const text = 'SulaimaN ShO';
const sub = text.substr(3, 2); // يبدأ من الفهرس 3 ويأخذ حرفين فقط
console.log(sub);`
        ],
        expectedOutput: [
            "la"
        ],
        professionalTips: 'دالة substr تم تصنيفها رسمياً كـ (Deprecated - مهملة)؛ تجنب كلياً استخدامها في أي كود جديد لعام 2026 لتفادي حدوث مشاكل توافقية مستقبلية مع المتصفحات واستخدم دالة slice() بدلاً منها.',
        commonMistakes: {
            wrong: `const token = "JWT_ABC123";
const sub = token.substr(4, 5); // دالة مهملة قد تزال تماماً من بيئات المتصفحات المستقبلية`,
            right: `const token = "JWT_ABC123";
const sub = token.slice(4, 9); // البديل الآمن والمعياري لعام 2026`,
            explanation: 'الشركات المطورة لـ EcmaScript وجهت بمسح واستبعاد substr كلياً لصالح الخيار الأحدث والأنظف slice لتوحيد مفاهيم الاقتطاع النصي الهيكلي.'
        },
        thinkingWay: 'لا تستخدمها أبداً في مشروعك من الصفر؛ قمنا فقط بتوثيقها برمجياً لكي تفهم كودها وتصوبها فوراً عند مصادفتها داخل المشاريع القديمة والإرثية (Legacy Code).',
        relatedMethods: ['string-slice', 'string-substring'],
        keywords: ['substr', 'deprecated', 'legacy code', 'string extraction', 'length offset']
    },
    {
        id: 'string-startswith-index',
        name: 'startsWith(string, index)',
        shortDescription: 'التحقق من أن السلسلة النصية تبدأ بكلمة محددة انطلاقاً من فهرس بدء مخصص.',
        longDescription: 'تمديد لدالة التحقق startsWith؛ حيث تأخذ معاملاً ثانياً يمثل الفهرس الرقمي (index) الذي يجب على المتصفح تخطي ما قبله والبدء بفحص تماثل النص انطلاقاً منه بدقة تامة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// التحقق من تواجد الكلمة عند موضع فهرس مخصص داخل النص
const idea = 'SulaimaN ShO';
console.log(idea.startsWith('ShO', 9)); // يبدأ فحص الكلمة من الفهرس 9`
        ],
        expectedOutput: [
            "true"
        ],
        professionalTips: 'استخدام الفهرس المخصص يوفر موارد الذاكرة لأنه يجنبك عمليات اقتطاع النص المسبق بـ slice قبل الفحص ويقوم بمطابقتها مباشرة في موضعها الحالي.',
        commonMistakes: {
            wrong: `const idea = 'SulaimaN ShO';
console.log(idea.startsWith('ShO', 5)); // تمرير فهرس خاطئ لا تبدأ عنده الكلمة بالكامل يعود بفشل منطقي`,
            right: `const idea = 'SulaimaN ShO';
console.log(idea.startsWith('ShO', 9)); // الفهرس 9 هو الموضع الرقمي المطابق تماماً لبداية الكلمة`,
            explanation: 'التحقق الشرطي يستلزم تطابق الحرف الأول من المعامل الممرر مع الفهرس المكتوب، وأي إزاحة طفيفة تفشل العملية بأكملها.'
        },
        thinkingWay: 'استخدم هذه الدالة المتقدمة للتحقق من الأنماط والوسوم النصية المتواجدة في مواضع معلومة مسبقاً داخل نصوص سجلات البيانات المنسقة والملفات المضغوطة.',
        relatedMethods: ['string-startswith'],
        keywords: ['startsWith offset', 'string boundaries', 'search offset', 'check index', 'advanced search']
    },
    {
        id: 'string-endswith-index',
        name: 'endsWith(string, index)',
        shortDescription: 'التحقق من انتهاء النص بكلمة محددة مع معاملة النص بطول افتراضي مخصص.',
        longDescription: 'تعديل لدالة التحقق endsWith؛ حيث تأخذ معاملاً ثانياً يمثل الطول الافتراضي للنص المراد فحصه (length/index). يقوم المتصفح بقص النص وهمياً عند هذا الموضع واعتباره نهاية السلسلة النصية النشطة للفحص.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// فحص نهاية الكلمة الأولى من النص بتحديد طول فحص وهمي مخصص
const idea = 'SulaimaN ShO';
console.log(idea.endsWith('SulaimaN', 8)); // يعامل النص وكأنه يتكون من أول 8 أحرف فقط`
        ],
        expectedOutput: [
            "true"
        ],
        professionalTips: 'المعامل الثاني يمثل الطول المعتمد للنص (length) من البداية، وليس موضع الفهرس الفردي؛ مما يعني أن الفحص يقف تماماً عند الحرف رقم 8 ويعتبره الحرف الأخير.',
        commonMistakes: {
            wrong: `const idea = 'SulaimaN';
console.log(idea.endsWith('Sul', 2)); // تمرير طول أقصر من الكلمة المستهدفة يفشل الفحص كلياً`,
            right: `const idea = 'SulaimaN';
console.log(idea.endsWith('Sul', 3)); // الطول 3 يطابق الكلمة 'Sul' تماماً في بداية النص`,
            explanation: 'المتصفح يقص النص عند الطول الممرر مباشرة؛ فإذا كتبت 3، يرى المتصفح النص كـ "Sul" فقط وتطابقها endsWith بنجاح تام.'
        },
        thinkingWay: 'استخدم هذه الدالة المتقدمة لاقتطاع وفحص تتابع الجمل في حقول النصوص الطويلة عندما ترغب بفحص الكلمات الداخلية دون كتابة سلاسل تقسيم مكررة.',
        relatedMethods: ['string-endswith'],
        keywords: ['endsWith offset', 'string bounds', 'length constraint', 'advanced endsWith', 'text parsing']
    },
    {
        id: 'string-includes-index',
        name: 'includes(string, index)',
        shortDescription: 'التحقق من احتواء النص على كلمة معينة انطلاقاً من موضع فهرس بدء مخصص.',
        longDescription: 'تمديد لدالة التحقق المباشرة includes؛ حيث تتيح تمرير معامل ثانٍ مخصص يمثل موضع الفهرس الرقمي (index) الذي يجب على محرك المتصفح تخطّي ما قبله تماماً والبدء بالبحث عن الكلمة بعده.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// فحص تكرار الكلمة بعد موضع فهرس مخصص داخل النص
const idea = 'SulaimaN ShO';
console.log(idea.includes('ShO', 10)); // يفشل في العثور عليها لبدء البحث بعد بداية الكلمة`
        ],
        expectedOutput: [
            "false"
        ],
        professionalTips: 'هذا المعامل رائع جداً وموفر كلياً للذاكرة والسرعة البرمجية؛ لأنه يجنبك تكرار كتابة دالة الاقتطاع slice قبل البحث ويقوم بمطابقتها مباشرة في موضعها الحالي.',
        commonMistakes: {
            wrong: `const text = 'SulaimaN ShO';
console.log(text.includes('SulaimaN', 3)); // يعتقد خطأً أن الفحص يغطي النص كاملاً بالرغم من تجاوز الفهرس للبداية`,
            right: `const text = 'SulaimaN ShO';
console.log(text.includes('SulaimaN', 0)); // البدء من الصفر يضمن تغطية النص كاملاً والنجاح المباشر`,
            explanation: 'تمرير فهرس بدء أكبر من موضع بداية الكلمة المستهدفة يحجبها تماماً عن مسار الفحص البرمجي ويقيد عملية المطابقة.'
        },
        thinkingWay: 'استخدم includes مع معامل الفهرس عند التعامل مع كتل نصوص السجلات المنظمة أو أكواد المخرجات البرمجية التي تقع البيانات بها بالتوازي بعد علامات أو مسافات محددة مسبقاً.',
        relatedMethods: ['string-includes'],
        keywords: ['includes offset', 'advanced includes', 'search constraints', 'index shift', 'optimized search']
    },
    {
        id: 'string-repeat',
        name: 'repeat()',
        shortDescription: 'إنشاء نص جديد مدمج بالكامل عن طريق تكرار السلسلة النصية بعدد مرات مخصص.',
        longDescription: 'تقوم دالة repeat بإنشاء وإرجاع سلسلة نصية جديدة تحتوي على نسخ مكررة من النص الأصلي المطبقة عليه الدالة، مدمجة ومتتابعة خلف بعضها البعض بناءً على عدد المرات الممرر كمُعامل رقمي للدالة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تكرار الاسم لبناء هياكل نصوص تفاعلية
const repeatText = 'SulaimaN ShO';
console.log(repeatText.repeat(3));`
        ],
        expectedOutput: [
            "SulaimaN ShOSulaimaN ShOSulaimaN ShO"
        ],
        professionalTips: 'عند تمرير معامل رقمي لـ repeat، تأكد من أنه عدد صحيح موجب؛ لأن تمرير أرقام سالبة أو القيمة Infinity سيتسبب فوراً بانهيار السكربت ورمي خطأ برمجي فادح من نوع RangeError.',
        commonMistakes: {
            wrong: `const star = '*';
star.repeat(-3); // خطأ مباشر: RangeError: Invalid count value`,
            right: `const star = '*';
const count = -3;
const safeCount = Math.max(0, count); // حماية النطاق ومنع القيم السالبة
console.log(star.repeat(safeCount)); // يطبع نصاً فارغاً بأمان`,
            explanation: 'منطقياً لا يمكن تكرار قيمة نصية بعدد مرات سالب في الذاكرة، لذا يجبرك محرك جافا سكريبت على الالتزام بالأعداد الحقيقية الموجبة لحماية تخصيص مساحات مصفوفات الذاكرة.'
        },
        thinkingWay: 'استخدم repeat عندما تحتاج لتكرار رموز تصميمية معينة في الواجهات (مثل بناء نجوم التقييم التفاعلية لتقييمات المنتجات بناءً على رقم التقييم العددي، أو إنشاء مسافات تباعد مخصصة للأكواد المفرزة بالكونسول).',
        relatedMethods: ['string-split-empty'],
        keywords: ['repeat', 'string duplication', 'multiply string', 'RangeError', 'stars rating']
    },
    {
        id: 'string-concat',
        name: 'concat()',
        shortDescription: 'دمج سلسلتين نصيتين أو أكثر معاً لإنتاج سلسلة نصية جديدة مدمجة بالكامل بالترتيب.',
        longDescription: 'تقوم دالة concat بدمج نصوص برمجية متعددة وتصدير نص جديد تماماً يمثل تتابع السلاسل الممررة إليها بالترتيب، وتعمل بمرونة تقبل استلام معاملات نصية متعددة مفصولة بفاصلة لدمجها دفعة واحدة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// دمج الاسم والكنية بفاصل مخصص لإنشاء الاسم الكامل بالمتصفح
const firstName = 'SulaimaN';
const lastName = 'ShO';
const fullName = firstName.concat('|', lastName);
console.log(fullName);`
        ],
        expectedOutput: [
            "SulaimaN|ShO"
        ],
        professionalTips: 'على الرغم من وجود دالة concat()، يُنصح في التطوير الحديث (2026) باستخدام القوالب النصية (Template Literals) كخيار أول ومستمر لتنفيذ عمليات الدمج النصي المتعددة؛ لأنها تسهل قراءة تراكيب الكود جداً وتحميك من التعقيدات القوسية لاستدعاء الدالة.',
        commonMistakes: {
            wrong: `const first = 'SulaimaN';
const last = 'ShO';
const greeting = 'Welcome '.concat(first, ' ', last, ' to JavaScript'); // كود معقد القراءة ومربك الصيانة`,
            right: `const first = 'SulaimaN';
const last = 'ShO';
const greeting = \`Welcome \${first} \${last} to JavaScript\`; // كود نظيف ومقروء وسهل الصيانة بالكامل
console.log(greeting);`,
            explanation: 'الدالة concat تجبرك على تمرير المعاملات كقيم مستدعاة وتتطلب حجز مرجع استدعاء في كل مرة، بينما تتيح لك القوالب النصية مظهر نصوص خطي ومباشر للدمج والتحديث.'
        },
        thinkingWay: 'استخدم concat فقط في السيناريوهات البرمجية التي تتطلب تجميع نصوص ديناميكية من خلال مصفوفة مفرزة تقوم بدمج عناصرها، أو في كتل الكود القديمة، واستبدلها دائماً بالقوالب النصية لعام 2026 لجودة الكود ونظافته.',
        relatedMethods: ['template-literals'],
        keywords: ['concat', 'string concatenation', 'join strings', 'merge texts', 'combining strings']
    },
    {
        id: 'string-replace',
        name: 'replace()',
        shortDescription: 'استبدال أول ظهور لكلمة أو نمط محدد داخل النص بنص جديد تماماً.',
        longDescription: 'تُستعمل دالة replace لاستبدال أول تكرار يتم العثور عليه فقط لنص معين بنص بديل. بينما تقوم دالة replaceAll باستبدال جميع التكرارات المتطابقة داخل السلسلة النصية دون الحاجة لاستخدام تعبيرات نمطية معقدة.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// استبدال لغة بـ لغة أخرى مخصصة داخل كتل النصوص بالصفحة
const str = 'I love Css';
const result = str.replace('Css', 'JavaScript');
console.log(result);`
        ],
        expectedOutput: [
            "I love JavaScript"
        ],
        professionalTips: 'تذكر أن دالتي replace و replaceAll لا تقومان بتعديل المتغير الأصلي؛ حيث أن النصوص في جافا سكريبت غير قابلة للتغيير (Immutable). الدالتان تقومان دائماً بإنشاء وإرجاع سلسلة نصية جديدة بالكامل.',
        commonMistakes: {
            wrong: `let filePath = 'styles/components/card.css';
filePath.replace('styles', 'assets');
console.log(filePath); // سيظل 'styles/components/card.css' دون تغيير!`,
            right: `let filePath = 'styles/components/card.css';
filePath = filePath.replace('styles', 'assets');
console.log(filePath); // تم التحديث بنجاح ومزامنة المتغير`,
            explanation: 'في جافا سكريبت، جميع العمليات على النصوص (Strings) ترجع قيماً جديدة تماماً ولا تعدل على النص الأصلي في الذاكرة نظراً لخاصية عدم القابلية للتعديل (Immutability).'
        },
        thinkingWay: 'استخدم replace عندما ترغب في تعديل كلمة معينة أو إخفاء بيانات حساسة (مثل إخفاء جزء من رقم بطاقة الائتمان) واستخدم replaceAll عندما تريد إزالة أو استبدال كل تكرارات كلمة أو رمز معين في النص بالكامل.',
        relatedMethods: ['string-slice'],
        keywords: ['replace', 'replaceAll', 'regex', 'text substitution', 'immutable']
    }
];