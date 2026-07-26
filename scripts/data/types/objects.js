export const objectsData = [
    {
        id: 'object-literal',
        name: '{}',
        shortDescription: 'صيغة كتابة الكائن المباشر (Object Literal) لتمثيل هياكل البيانات في الذاكرة.',
        longDescription: 'الأسلوب الأكثر شيوعاً وبساطة لإنشاء الكائنات في جافا سكريبت؛ حيث تُحصر البيانات بين قوسين متعرجين {} كأزواج من المفاتيح والقيم (Key-Value Pairs) مفصولة بفاصلة، مما يتيح تنظيم خصائص ووظائف الكيان في مساحة ذاكرة موحدة.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `// إنشاء كائن مستخدم لتمثيل البيانات الأساسية
const user = {
  name: 'sulaiman',
  age: 25,
  admin: true
};
console.log('اسم المستخدم:', user.name);`
        ],
        expectedOutput: [
            "اسم المستخدم: sulaiman"
        ],
        professionalTips: 'على الرغم من إعلان الكائن باستخدام const، تذكر أن الكائنات تملك مرجعاً برمجياً مرناً (Mutable Reference)؛ أي يمكنك تعديل، حذف، أو إضافة خصائص جديدة للكائن بحرية كاملة دون تغيير مرجع الذاكرة الرئيسي.',
        commonMistakes: {
            wrong: `const user = {
  name = 'sulaiman' // خطأ: استخدام عامل التساوي = بدلاً من النقطتين الرأسيتين لتعريف الحقل داخل الكائن المباشر
};`,
            right: `const user = {
  name: 'sulaiman' // الاستخدام السليم للنقطتين الرأسيتين : لربط المفاتيح بقيمها
};`,
            explanation: 'قواعد صياغة الكائنات (Object Literals) تفرض استخدام النقطتين الرأسيتين (:) لتعيين قيم المفاتيح، والفاصلة (,) للفصل بين الخصائص؛ واستخدام عامل التساوي (=) يتسبب بانهيار تجميع السكربت.'
        },
        thinkingWay: 'استخدم صيغة الكائن المباشر ({}) دائماً كخيار افتراضي لتجميع الخصائص والبيانات الوصفية المترابطة داخل متغير برمجي واحد لتسهيل تمريرها وإدارتها.',
        relatedMethods: ['object-delete'],
        keywords: ['{}', 'object literal', 'object creation', 'key value', 'mutable object']
    },
    {
        id: 'object-delete',
        name: 'delete',
        shortDescription: 'عامل برمجي أحادي يُستعمل لحذف خاصية معينة كلياً من الكائن بالذاكرة.',
        longDescription: 'عامل أحادي (Unary Operator) يوضع بمقدمة مسار السمة المراد حذفها من الكائن؛ يقوم بمسح وإزالة المفتاح والقيمة المقابلة له كلياً من الذاكرة، ويقوم بتحرير المساحة ولا تظهر الخاصية عند الدوران عبر الكائن لاحقاً.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// إضافة حقل البريد وإلغاء حقل الاسم تماماً من كائن المستخدم
const user = {
  name: 'sulaiman',
  age: 25,
  admin: true
};

user.email = 'sulaiman@gmail.com'; // إضافة حقل جديد ديناميكياً
delete user.name; // حذف حقل الاسم تماماً من الذاكرة

console.log(user);`
        ],
        expectedOutput: [
            "{ age: 25, admin: true, email: 'sulaiman@gmail.com' }"
        ],
        professionalTips: 'عامل delete يقلل كفاءة محركات جافا سكريبت (مثل V8) في معالجة الكائنات، لأنه يخرب الهيكل الداخلي الثابت للمتغير (Hidden Classes)؛ لذا في التطبيقات الحساسة للأداء، يفضل تعيين القيمة لـ null أو undefined كبديل سريع للحذف، أو استخدام تفكيك الكائنات (Rest Operator) لاستخلاص نسخة جديدة خالية من الحقل.',
        commonMistakes: {
            wrong: `const config = { theme: 'dark' };
// محاولة حذف كائن كامل باستخدام delete
delete config; // خطأ: لا يمكن استخدام delete لحذف متغيرات كاملة بل خصائص الكائنات فقط!`,
            right: `const config = { theme: 'dark' };
delete config.theme; // حذف السمة المحددة بداخل الكائن بنجاح
console.log(config); // يطبع {}`,
            explanation: 'عامل delete مصمم هندسياً لإزالة الخصائص الديناميكية (Object Properties) التابعة للكائنات فقط، ويحظر المتصفح استخدامه لمسح وحذف مراجع المتغيرات المعلنة صراحة بالذاكرة.'
        },
        thinkingWay: 'استخدم delete عندما ترغب بحذف وإزالة بيانات حساسة أو زائدة تماماً من الكائن قبل تمريره أو تحويله لنص JSON وإرساله عبر الشبكة.',
        relatedMethods: ['object-literal'],
        keywords: ['delete', 'remove property', 'delete keyword', 'sanitize object', 'hidden classes']
    },
    {
        id: 'object-this',
        name: 'this',
        shortDescription: 'كلمة مفتاحية تشير ديناميكياً إلى الكائن المالك أو المستدعي للوظيفة الحالية وقت التشغيل.',
        longDescription: 'مرجع برمجي ديناميكي يتغير سياقه تماماً بناءً على طريقة وموضع استدعاء الدالة في جافا سكريبت؛ فعند استخدامها بداخل طريقة (Method) تابعة لكائن عادي، فإنها تشير مباشرة إلى الكائن المالك الذي استدعى الدالة، مما يسمح للوظيفة بالوصول لكافة خصائص الكائن الأخرى وتحديثها.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `// استخدام this للوصول لاسم المستخدم وتفصيل الحساب
const user1 = {
  name: 'sulaiman',
  age: 25,
  admin: true,
  userInfo: function() {
    console.log('هل المستخدم مسؤول؟', this.admin); // تشير لـ user1
  }
};
user1.userInfo();`
        ],
        expectedOutput: [
            "هل المستخدم مسؤول؟ true"
        ],
        professionalTips: 'الدوال السهمية (() => {}) لا تنشئ سياقاً خاصاً للكلمة المفتاحية this؛ بل ترث قيمته معجمياً (Lexically) من النطاق المحيط بالكائن (غالباً كائن window العالمي). لتلافي الأخطاء، استخدم الدوال التقليدية أو الصيغة المختصرة للأساليب (Shorthand Methods) دائماً لكتابة الطرق داخل كائناتك.',
        commonMistakes: {
            wrong: `const user = {
  username: 'sulaiman',
  greet: () => {
    console.log('مرحباً يا ' + this.username); // خطأ: يطبع مرحباً يا undefined لأن الدالة السهمية فقدت السياق!
  }
};
user.greet();`,
            right: `const user = {
  username: 'sulaiman',
  greet() { // استخدام الطرق المختصرة القياسية للحفاظ على السياق
    console.log('مرحباً يا ' + this.username); // يطبع مرحباً يا sulaiman بنجاح
  }
};
user.greet();`,
            explanation: 'الدوال السهمية مصممة لترث السياق المعجمي المحيط ببيئتها (Lexical binding)، بينما تتطلب طرق الكائنات ربطاً ديناميكياً (Dynamic binding) لا توفره إلا الدوال العادية.'
        },
        thinkingWay: 'استخدم الكلمة المفتاحية this بداخل كائناتك ومكونات التصميم التفاعلية لتجميع وتضمين البيانات والوظائف المترابطة معاً في كيان مرجعي واحد مستقر (Encapsulation).',
        relatedMethods: ['object-literal'],
        keywords: ['this', 'this context', 'lexical binding', 'dynamic binding', 'shorthand method', 'object method']
    },
    {
        id: 'object-array-structure',
        name: '[{}, {}]',
        shortDescription: 'بنية البيانات المدمجة الممثلة بمصفوفة تحتوي على كائنات متعددة لتنظيم القوائم.',
        longDescription: 'الهيكل الأكثر استخداماً في تطوير الويب لإدارة وتداول القوائم البرمجية؛ حيث تمثل المصفوفة الخارجية دليلاً مرتباً، ويمثل كل كائن داخلي سِجلاً مستقلاً يحتوي على خصائص وصفية فريدة، مما يسهل تكرارها ومعالجتها بمحركات التصفية والبحث.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `// تكرار ومعالجة مصفوفة مستخدمين مفصلة بالمتصفح
const users = [
  { name: 'sulaiman', age: 30, isStudent: true },
  { name: 'ahmed', age: 36, isStudent: false }
];

for (let i = 0; i < users.length; i++) {
  console.log('الاسم:', users[i].name);
  console.log('العمر:', users[i].age);
  console.log('-----------------');
}`
        ],
        expectedOutput: [
            "الاسم: sulaiman\\nالعمر: 30\\n-----------------\\nالاسم: ahmed\\nالعمر: 36\\n-----------------"
        ],
        professionalTips: 'هذه البنية الهيكلية تمثل العمود الفقري لاستجابات الخوادم بقواعد البيانات (JSON responses)؛ تدرّب جيداً على معالجتها وتصفيتها باستخدام دوال المصفوفات العالية الرتبة مثل map() و filter() لإنتاج واجهات تفاعلية مذهلة.',
        commonMistakes: {
            wrong: `const users = [ { name: 'A' }, { name: 'B' } ];
console.log(users.name); // خطأ شائع: محاولة الوصول لحقول الكائن الداخلي من المصفوفة الخارجية مباشرة دون تحديد الفهرس الرقمي للخلية!`,
            right: `const users = [ { name: 'A' }, { name: 'B' } ];
console.log(users[0].name); // تحديد العنصر المطلوب بالمصفوفة أولاً بالوصول الفهرسي [0]
console.log(users[1].name); // يطبع B بنجاح`,
            explanation: 'المصفوفة الخارجية هي مجرد حاوية عامة ولا تملك بشكل مباشر الخصائص الفردية المخصصة للكائنات الداخلية؛ للوصول لحقول الكائنات يجب فك غلاف الحاوية الرقمي بتحديد الفهرس [index] أولاً.'
        },
        thinkingWay: 'استخدم هذه البنية الهيكلية القوية دائماً لتنظيم وعرض قوائم البيانات المتشابهة بالتتابع (مثل سلال المشتريات، قوائم السجلات، كروت المنتجات، وتعليقات الزوار).',
        relatedMethods: ['object-literal'],
        keywords: ['[{}, {}]', 'array of objects', 'json structure', 'data list', 'collection representation']
    },
    {
        id: 'object-deep-access',
        name: 'obj.prop.prop',
        shortDescription: 'الوصول واستخراج البيانات العميقة من داخل كائنات متعددة المستويات والتداخل.',
        longDescription: 'تكتيك استعلامي يعتمد على تتابع علامة النقطة (Dot Notation) للتسلل لعمق الكائن المتداخل (Nested Object) والوصول للحقول الداخلية العميقة وقراءتها أو تعديل محتواها مباشرة بالذاكرة.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `// تتبع مسار الفروع وتعديل البيانات العميقة داخل كائن الشركة المتداخل
const company = {
  name: 'TeckSoft',
  departments: {
    development: {
      teamlead: 'samer ali',
      developers: ['sulaiman', 'yasin']
    }
  }
};

// تعديل بيانات دقيقة بالداخل عبر المسار المتتابع
company.departments.development.developers[0] = 'SULAIMAN SHO';
console.log('المطور الأول المحدث:', company.departments.development.developers[0]);`
        ],
        expectedOutput: [
            "المطور الأول المحدث: SULAIMAN SHO"
        ],
        professionalTips: 'لتلافي توقف السكربت وانهيار التطبيق تماماً عند قراءة خصائص عميقة لكائنات قد تكون مفقودة بالذاكرة (undefined)، استخدم دائماً عامل التتبع الآمن (Optional Chaining ?.) بالصيغة التالية: `company?.departments?.development?.teamlead`.',
        commonMistakes: {
            wrong: `const user = { name: 'S' }; // كائن يفتقر لحقل العنوان المتداخل address
console.log(user.address.city); // خطأ مباشر يوقف تشغيل المتصفح كلياً: TypeError: Cannot read properties of undefined (reading 'city')`,
            right: `const user = { name: 'S' };
console.log(user.address?.city); // استخدام التتبع الآمن يرجع undefined بسلام دون انهيار السكربت
console.log(user.address?.city ?? 'مدينة افتراضية'); // يطبع القيمة الاحتياطية بأمان`,
            explanation: 'محاولة قراءة خاصية تابعة لقيمة مفقودة بالذاكرة (null أو undefined) تفشل كلياً بانهيار وقت التشغيل في المحرك البرمجي؛ والتتبع الاختياري يمنع الانهيار.'
        },
        thinkingWay: 'استخدم التتبع المتسلسل لفك وقراءة الهياكل المعقدة، واحرص على دمج حمايات التتبع الاختيارية (?.) لتأمين استقرار كودك التفاعلي مع البيانات غير المضمونة القادمة من السيرفر.',
        relatedMethods: ['object-literal'],
        keywords: ['dot notation', 'nested object', 'deep access', 'optional chaining', 'TypeError prevention']
    },
    {
        id: 'object-destructuring-alias',
        name: 'let { name: alias } = object',
        shortDescription: 'تفكيك الكائن واستخراج خصائصه وإعادة تسميتها لحمايتها وتلافي تداخل الأسماء بالذاكرة.',
        longDescription: 'تطوير لأسلوب تفكيك الكائنات الأساسي في ES6؛ يتيح استخراج خاصية محددة من الكائن وحفظ قيمتها بداخل متغير مخصص يحمل اسماً جديداً ومستعاراً (Alias) من اختيارك مباشرة لتلافي التعارض مع المتغيرات القائمة بالنطاق الحالي.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `// استخراج حقل الاسم وإعادة تسميته لتجنب التعارض
const person = {
  name: 'sulaiman',
  age: 25,
  country: 'syria'
};

const { name: userName, country } = person; // استخراج الاسم وإعادة تسميته بـ userName
console.log('المتغير المستعار الجديد:', userName);`
        ],
        expectedOutput: [
            "المتغير المستعار الجديد: sulaiman"
        ],
        professionalTips: 'هذه الصيغة التفكيكية المستعارة ضرورية جداً وتُعد ممارسة قياسية عند العمل مع الواجهات الأمامية لاستيراد وتعيين البيانات وتلافي تضارب وتلوث مسميات النطاق المحلي بالذاكرة.',
        commonMistakes: {
            wrong: `const person = { name: 'S' };
const { name: userName } = person;
console.log(name); // خطأ مباشر: ReferenceError: name is not defined نتيجة محاولة استدعاء الاسم الأصلي المفقود بعد استبداله!`,
            right: `const person = { name: 'S' };
const { name: userName } = person;
console.log(userName); // يطبع 'S' بنجاح من المرجع المستعار المخصص بالذاكرة`,
            explanation: 'إعادة التسمية أثناء تفكيك الكائن تلغي إنشاء المتغير بالاسم القديم تماماً وتنقله كلياً لاسم المتغير الجديد المستعار بالذاكرة.'
        },
        thinkingWay: 'استخدم أسلوب إعادة التسمية التفكيكي ({ prop: alias }) عندما ترغب في فرز وتنسيق مسميات المتغيرات المستلمة من قواعد البيانات المتفرقة لتتوافق بدقة مع معايير كودك النظيف.',
        relatedMethods: ['object-destructuring-nested'],
        keywords: ['object destructuring', 'aliasing', 'renaming property', 'es6 destructuring', 'namespace safety']
    },
    {
        id: 'object-destructuring-nested',
        name: 'let { a: { b } } = object',
        shortDescription: 'تفكيك الكائنات المتداخلة العميقة وسحب حقولها الفرعية مباشرة بخطوة واحدة مقتضبة.',
        longDescription: 'تكتيك متقدم في ES6 يتيح استهداف الكائنات العميقة وتفكيكها بمطابقة الهياكل المتداخلة مباشرة؛ مما يسمح بسحب حقولها الدقيقة والداخلية دفعة واحدة وتعيينها لمتغيرات محلية دون الحاجة لاستدعاء المتغير الأب بالذاكرة.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `// استخراج حقل الهاتف الداخلي من تفاصيل العنوان المتداخل بضربة واحدة
const student = {
  name: 'sulaiman',
  age: 30,
  address: {
    country: 'syria',
    city: 'idleb',
    phones: {
      phone1: '05317730730'
    }
  }
};

const { address: { phones: { phone1 } } } = student;
console.log('رقم الهاتف العزل المباشر:', phone1);`
        ],
        expectedOutput: [
            "رقم الهاتف العزل المباشر: 05317730730"
        ],
        professionalTips: 'تذكر دائماً أن تفكيك الكائنات العميقة يقتضي تطابق وتواجد المسار الأب في الذاكرة بالكامل؛ فإذا كان حقل address غير موجود (null أو undefined)، سيؤدي التفكيك لانهيار مباشر للسكربت بـ TypeError.',
        commonMistakes: {
            wrong: `const student = { name: 'S', address: null };
const { address: { city } } = student; // خطأ مباشر يوقف المتصفح: TypeError: Cannot read properties of null (reading \'city\')`,
            right: `const student = { name: 'S', address: { city: 'idleb' } };
const { address: { city } = {} } = student; // حماية مسار التفكيك بفرض قيم افتراضية واقية
console.log(city); // يطبع 'idleb' بنجاح بأمان كامل`,
            explanation: 'محاولة فك حقول فرعية لمرجع مفقود أو مفرغ (null) تفشل كلياً بمحلل المتصفح البرمجي لعدم وجود هيكل قابل للتقسيم بالذاكرة.'
        },
        thinkingWay: 'استخدم هذا الفك الهيكلي المتداخل لتقليص سطور كود استهلاك وقراءة البيانات الكثيفة الواردة من السيرفر كحقول التكوينات والبيانات الشخصية المتداخلة.',
        relatedMethods: ['object-destructuring-alias'],
        keywords: ['nested destructuring', 'deep unwrap object', 'es6 object unwrap', 'safe nested variables', 'structured unwrap']
    },
    {
        id: 'object-destructuring-rest',
        name: 'let { a, ...rest } = object',
        shortDescription: 'استخلاص حقول مخصصة من الكائن وتجميع باقي الخصائص المتبقية في كائن فرعي مستقل (Rest).',
        longDescription: 'توظيف لعامل الباقي (Rest Operator ...) في الكائنات؛ يتيح استخراج وتعيين خصائص معينة لمتغيرات فرعية مباشرة، وحزم وتجميع كافة الخصائص الأخرى التي لم تُستخرج صراحة بداخل كائن فرعي مستقل يتم تصديره بالذاكرة.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `// عزل الاسم وتجميع باقي تفاصيل المستخدم الشخصية في كائن مستقل
const user = {
  name1: 'omar',
  age: 25,
  country: 'syria'
};

const { name1, ...otherDetails } = user;
console.log('الحقل المعزول:', name1);
console.log('كائن التفاصيل المتبقية التراكمي:', otherDetails);`
        ],
        expectedOutput: [
            "الحقل المعزول: omar\\nكائن التفاصيل المتبقية التراكمي: { age: 25, country: 'syria' }"
        ],
        professionalTips: 'هذا التكنيك المعماري رائع للغاية في عمليات تصفية وحجب الحقول الحساسة (مثل حجب وإلغاء حقول كلمات المرور والرموز السرية من الكائن قبل تمريره للواجهات الأمامية).',
        commonMistakes: {
            wrong: `const data = { id: 1, role: 'A' };
const { ...rest, role } = data; // خطأ تجميعي مباشر: SyntaxError: Rest element must be last element لقوانين الترتيب الكبلي بالسطر`,
            right: `const data = { id: 1, role: 'A' };
const { role, ...rest } = data; // الترتيب السليم بوضع حزمة التجميع بآخر الفك بالذاكرة
console.log(rest); // يطبع { id: 1 }`,
            explanation: 'يجب أن يقع عامل التجميع الختامي (Rest) في نهاية هيكل الفك تماماً؛ لكي يتمكن محرك جافا سكريبت من توزيع الخصائص الفردية أولاً ثم حزم ما تبقى بنجاح.'
        },
        thinkingWay: 'استخدم هذا الأسلوب الفعّال لعزل الحقول المستهدفة للمعالجة المباشرة وتجميع باقي البيانات البرمجية في كائن منظم يسهل نقله بالذاكرة.',
        relatedMethods: ['object-destructuring-alias'],
        keywords: ['rest operator', 'object rest', 'gather remaining properties', 'exclude properties', 'secure data extraction']
    }
];