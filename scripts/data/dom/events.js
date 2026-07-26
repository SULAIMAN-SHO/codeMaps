export const eventsData = [
  {
    id: 'element-add-event-listener',
    name: 'element.addEventListener()',
    shortDescription: 'ربط مستمع (Event Listener) بعنصر لتنفيذ كود عند وقوع حدث معين.',
    longDescription: 'دالة تُستخدم لتسجيل مستمع لأحد الأحداث على عنصر HTML أو أي كائن يدعم نظام الأحداث. عند وقوع الحدث المحدد، يستدعي المتصفح الدالة المرتبطة تلقائياً، مما يجعلها الطريقة القياسية والموصى بها للتعامل مع الأحداث في JavaScript.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// تنفيذ كود عند النقر على الزر
const button = document.getElementById('saveButton');

button.addEventListener('click', () => {
    console.log('Button Clicked');
});`
    ],
    expectedOutput: [
      '(عند النقر على الزر ستظهر الرسالة "Button Clicked" في وحدة التحكم.)'
    ],
    professionalTips: 'تسمح addEventListener بإضافة أكثر من مستمع للحدث نفسه دون استبدال المستمعات السابقة، لذلك تُعد الخيار القياسي بدلاً من استخدام خصائص مثل onclick.',
    commonMistakes: {
      wrong: `// استدعاء الدالة مباشرة بدلاً من تمريرها
button.addEventListener('click', saveData());`,
      right: `// تمرير مرجع الدالة
button.addEventListener('click', saveData);`,
      explanation: 'كتابة saveData() تؤدي إلى تنفيذ الدالة فوراً أثناء تحميل الصفحة، بينما يؤدي تمرير saveData إلى استدعائها فقط عند وقوع الحدث.'
    },
    thinkingWay: 'استخدم addEventListener في جميع الحالات التي تحتاج فيها إلى الاستجابة لتفاعل المستخدم، مثل النقر، أو الكتابة، أو التمرير، أو أي حدث آخر تدعمه المنصة.',
    relatedMethods: [
      'element-remove-event-listener',
      'event-click'
    ],
    keywords: [
      'addEventListener',
      'event listener',
      'DOM',
      'events',
      'element'
    ]
  },
  {
    id: 'element-remove-event-listener',
    name: 'element.removeEventListener()',
    shortDescription: 'إزالة مستمع حدث تمت إضافته مسبقاً من عنصر HTML.',
    longDescription: 'دالة تُستخدم لإلغاء تسجيل مستمع حدث سبق إضافته باستخدام addEventListener، مما يمنع تنفيذ الدالة عند وقوع الحدث مستقبلاً. ويجب تمرير نفس اسم الحدث ونفس مرجع الدالة المستخدمة أثناء الإضافة.',
    difficulty: 'medium',
    importance: 'important',
    examples: [
      `// إيقاف الاستماع للنقر على الزر
const button = document.getElementById('saveButton');

function handleClick() {
    console.log('Button Clicked');
}

button.addEventListener('click', handleClick);

button.removeEventListener('click', handleClick);`
    ],
    expectedOutput: [
      '(بعد إزالة المستمع، لن يتم تنفيذ الدالة عند النقر على الزر.)'
    ],
    professionalTips: 'لا يمكن إزالة مستمع حدث مجهول (Anonymous Function)، لذلك إذا كنت تخطط لإزالته لاحقاً فاستخدم دالة مسماة (Named Function).',
    commonMistakes: {
      wrong: `// محاولة إزالة دالة مختلفة
button.addEventListener('click', () => {
    console.log('Clicked');
});

button.removeEventListener('click', () => {
    console.log('Clicked');
});`,
      right: `// استخدام نفس مرجع الدالة
function handleClick() {
    console.log('Clicked');
}

button.addEventListener('click', handleClick);

button.removeEventListener('click', handleClick);`,
      explanation: 'يجب أن يستقبل removeEventListener نفس مرجع الدالة الذي استُخدم عند إضافة المستمع، لأن إنشاء دالة جديدة—even إذا كانت بنفس المحتوى—يُنتج مرجعاً مختلفاً.'
    },
    thinkingWay: 'استخدم removeEventListener عندما لم تعد بحاجة إلى مستمع الحدث، مثل تنظيف الموارد، أو تعطيل تفاعل مؤقت، أو منع تكرار تنفيذ الأحداث.',
    relatedMethods: [
      'element-add-event-listener'
    ],
    keywords: [
      'removeEventListener',
      'event listener',
      'DOM',
      'events',
      'element'
    ]
  },
  {
    id: 'event-click',
    name: 'click',
    shortDescription: 'تنفيذ كود عند نقر المستخدم على عنصر باستخدام زر الفأرة الأساسي.',
    longDescription: 'يُطلق حدث click عندما ينقر المستخدم على عنصر مرة واحدة باستخدام زر الفأرة الأساسي أو عند تفعيل العنصر بطريقة مكافئة من لوحة المفاتيح في بعض العناصر مثل الأزرار.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// تنفيذ كود عند النقر على الزر
const button = document.getElementById('saveButton');

button.addEventListener('click', () => {
    console.log('Button Clicked');
});`
    ],
    expectedOutput: [
      '(عند النقر على الزر ستظهر الرسالة "Button Clicked" في وحدة التحكم.)'
    ],
    professionalTips: 'يُعد click أكثر الأحداث استخداماً للتعامل مع تفاعل المستخدم، ويُفضل ربطه باستخدام addEventListener بدلاً من onclick لأنه يسمح بإضافة أكثر من مستمع للحدث نفسه.',
    commonMistakes: {
      wrong: `// استدعاء الدالة مباشرة
button.addEventListener('click', saveData());`,
      right: `// تمرير الدالة دون استدعائها
button.addEventListener('click', saveData);`,
      explanation: 'استدعاء الدالة مباشرةً يجعلها تُنفذ فور تحميل الصفحة، بينما المطلوب هو تمرير مرجع الدالة ليتم استدعاؤها عند وقوع الحدث.'
    },
    thinkingWay: 'استخدم حدث click عندما تريد تنفيذ إجراء استجابةً لضغطة المستخدم، مثل فتح نافذة، أو إرسال نموذج، أو حذف عنصر، أو تشغيل وظيفة معينة.',
    relatedMethods: [
      'element-add-event-listener'
    ],
    keywords: [
      'click',
      'mouse event',
      'event',
      'addEventListener',
      'DOM'
    ]
  },
  {
    id: 'event-dblclick',
    name: 'dblclick',
    shortDescription: 'تنفيذ كود عند النقر المزدوج على عنصر باستخدام زر الفأرة الأساسي.',
    longDescription: 'يُطلق حدث dblclick عندما ينقر المستخدم مرتين متتاليتين بسرعة على العنصر نفسه. يُستخدم عادةً لتنفيذ إجراءات خاصة مثل الدخول في وضع التعديل أو تكبير عنصر أو فتح تفاصيل إضافية.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// تفعيل وضع التعديل بالنقر المزدوج
const title = document.getElementById('title');

title.addEventListener('dblclick', () => {
    title.contentEditable = true;
});`
    ],
    expectedOutput: [
      '(عند النقر المزدوج على العنوان سيصبح قابلاً للتعديل.)'
    ],
    professionalTips: 'لا تستخدم dblclick لتنفيذ الإجراءات الأساسية في واجهة المستخدم، لأن العديد من المستخدمين لا يتوقعون وجود وظائف تعتمد على النقر المزدوج.',
    commonMistakes: {
      wrong: `// استخدام click مرتين لمحاكاة النقر المزدوج
title.addEventListener('click', editTitle);`,
      right: `// استخدام الحدث المخصص للنقر المزدوج
title.addEventListener('dblclick', editTitle);`,
      explanation: 'يمثل dblclick حدثاً مستقلاً يطلقه المتصفح بعد اكتشاف نقرتين متتاليتين، ولا يمكن استبداله بتكرار حدث click.'
    },
    thinkingWay: 'استخدم dblclick للوظائف الثانوية التي تمنح المستخدم تجربة أسرع، مثل إعادة تسمية عنصر أو تكبير صورة أو الدخول إلى وضع التحرير.',
    relatedMethods: [
      'element-add-event-listener',
      'event-click'
    ],
    keywords: [
      'dblclick',
      'double click',
      'mouse event',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-mousedown',
    name: 'mousedown',
    shortDescription: 'تنفيذ كود بمجرد ضغط أحد أزرار الفأرة على عنصر.',
    longDescription: 'يُطلق حدث mousedown فور ضغط المستخدم على أحد أزرار الفأرة فوق العنصر، قبل تحرير الزر وقبل حدوث حدث click، مما يجعله مناسباً للتعامل مع بداية عمليات السحب أو الضغط المستمر.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// بدء عملية السحب عند الضغط على العنصر
const box = document.getElementById('dragBox');

box.addEventListener('mousedown', () => {
    box.classList.add('dragging');
});`
    ],
    expectedOutput: [
      '(عند الضغط على العنصر سيتم إضافة الصنف "dragging".)'
    ],
    professionalTips: 'إذا كنت تحتاج إلى معرفة الزر الذي ضغطه المستخدم (الأيسر أو الأوسط أو الأيمن)، فاستخدم الخاصية event.button داخل معالج الحدث.',
    commonMistakes: {
      wrong: `// استخدام click لبدء عملية السحب
box.addEventListener('click', startDrag);`,
      right: `// استخدام mousedown لبداية التفاعل
box.addEventListener('mousedown', startDrag);`,
      explanation: 'يُطلق click بعد الضغط ثم الإفلات، بينما يُطلق mousedown مباشرةً عند بداية الضغط، وهو الأنسب لعمليات السحب والرسم والتحديد.'
    },
    thinkingWay: 'استخدم mousedown عندما تحتاج إلى تنفيذ إجراء بمجرد بدء ضغط المستخدم، مثل السحب، أو الرسم، أو بدء تحديد العناصر.',
    relatedMethods: [
      'element-add-event-listener',
      'event-mouseup',
      'event-click'
    ],
    keywords: [
      'mousedown',
      'mouse event',
      'mouse button',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-button',
    name: 'event.button',
    shortDescription: 'معرفة زر الفأرة الذي ضغطه المستخدم أثناء وقوع الحدث.',
    longDescription: 'خاصية تُرجع رقماً يمثل زر الفأرة المستخدم لإطلاق الحدث، مثل الزر الأيسر أو الأوسط أو الأيمن. تُستخدم لبناء تفاعلات مختلفة حسب الزر الذي ضغطه المستخدم.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// معرفة زر الفأرة المستخدم
document.addEventListener('mousedown', (event) => {
    console.log(event.button);
});`
    ],
    expectedOutput: [
      '(سيتم عرض 0 للزر الأيسر، و1 للزر الأوسط، و2 للزر الأيمن.)'
    ],
    professionalTips: 'تُستخدم event.button كثيراً في تطبيقات الرسم، والألعاب، والقوائم السياقية، حيث يختلف السلوك حسب زر الفأرة المستخدم.',
    commonMistakes: {
      wrong: `// استخدام event.key مع أحداث الفأرة
document.addEventListener('mousedown', (event) => {
    console.log(event.key);
});`,
      right: `// استخدام الخاصية الصحيحة
document.addEventListener('mousedown', (event) => {
    console.log(event.button);
});`,
      explanation: 'تُستخدم event.button مع أحداث الفأرة، بينما تُستخدم event.key مع أحداث لوحة المفاتيح.'
    },
    thinkingWay: 'استخدم event.button عندما يحتاج التطبيق إلى تنفيذ إجراءات مختلفة حسب زر الفأرة الذي ضغطه المستخدم.',
    relatedMethods: [
      'event-client-x',
      'event-client-y',
      'event-contextmenu'
    ],
    keywords: [
      'event.button',
      'mouse button',
      'mousedown',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-mouseup',
    name: 'mouseup',
    shortDescription: 'تنفيذ كود عند تحرير زر الفأرة بعد الضغط على عنصر.',
    longDescription: 'يُطلق حدث mouseup عندما يرفع المستخدم إصبعه عن أحد أزرار الفأرة فوق العنصر. ويُستخدم غالباً لإنهاء عمليات السحب أو الرسم أو الضغط المطول التي بدأت بواسطة حدث mousedown.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// إنهاء عملية السحب
const box = document.getElementById('dragBox');

box.addEventListener('mouseup', () => {
    box.classList.remove('dragging');
});`
    ],
    expectedOutput: [
      '(عند تحرير زر الفأرة سيتم إزالة الصنف "dragging" من العنصر.)'
    ],
    professionalTips: 'غالباً ما يُستخدم mouseup مع mousedown لتتبع بداية التفاعل ونهايته، خاصةً في واجهات السحب والإفلات (Drag & Drop).',
    commonMistakes: {
      wrong: `// استخدام click لإنهاء عملية السحب
box.addEventListener('click', stopDrag);`,
      right: `// استخدام mouseup عند تحرير زر الفأرة
box.addEventListener('mouseup', stopDrag);`,
      explanation: 'يُطلق mouseup مباشرة عند تحرير زر الفأرة، بينما click يتطلب حدوث الضغط والإفلات على العنصر نفسه، لذلك لا يناسب جميع سيناريوهات السحب.'
    },
    thinkingWay: 'استخدم mouseup لإنهاء العمليات التي تبدأ بالضغط، مثل السحب، أو الرسم، أو تحديد العناصر، أو إيقاف الضغط المطول.',
    relatedMethods: [
      'element-add-event-listener',
      'event-mousedown',
      'event-click'
    ],
    keywords: [
      'mouseup',
      'mouse event',
      'mouse button',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-mousemove',
    name: 'mousemove',
    shortDescription: 'تنفيذ كود باستمرار أثناء تحريك مؤشر الفأرة فوق عنصر.',
    longDescription: 'يُطلق حدث mousemove بشكل متكرر أثناء حركة مؤشر الفأرة داخل حدود العنصر. ويُستخدم لبناء التفاعلات التي تعتمد على موقع المؤشر، مثل الرسم، أو السحب، أو تتبع الإحداثيات.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// عرض إحداثيات مؤشر الفأرة
const area = document.getElementById('drawingArea');

area.addEventListener('mousemove', (event) => {
    console.log(event.clientX, event.clientY);
});`
    ],
    expectedOutput: [
      '(سيتم عرض إحداثيات مؤشر الفأرة باستمرار أثناء تحريكه داخل العنصر.)'
    ],
    professionalTips: 'يُطلق mousemove عدداً كبيراً من المرات في الثانية، لذلك تجنب تنفيذ عمليات ثقيلة داخله، واستخدم تقنيات مثل throttle أو debounce عند الحاجة لتحسين الأداء.',
    commonMistakes: {
      wrong: `// تنفيذ عمليات مكلفة مع كل حركة للمؤشر
area.addEventListener('mousemove', () => {
    loadLargeData();
});`,
      right: `// تنفيذ عمليات خفيفة أثناء الحركة
area.addEventListener('mousemove', (event) => {
    console.log(event.clientX);
});`,
      explanation: 'قد يُطلق mousemove عشرات أو مئات المرات في الثانية، لذا فإن تنفيذ عمليات مكلفة داخله قد يؤدي إلى انخفاض ملحوظ في أداء الصفحة.'
    },
    thinkingWay: 'استخدم mousemove عندما تحتاج إلى تتبع حركة المؤشر بشكل لحظي، مثل تطبيقات الرسم، أو أدوات التصميم، أو تأثيرات التفاعل مع حركة الفأرة.',
    relatedMethods: [
      'element-add-event-listener',
      'event-mousedown',
      'event-mouseup'
    ],
    keywords: [
      'mousemove',
      'mouse event',
      'cursor',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-client-x',
    name: 'event.clientX',
    shortDescription: 'الحصول على الإحداثي الأفقي (X) لمؤشر الفأرة داخل نافذة المتصفح.',
    longDescription: 'خاصية تُرجع موقع مؤشر الفأرة على المحور الأفقي (X) بالنسبة إلى نافذة العرض (Viewport)، وتُستخدم في تتبع حركة المؤشر وبناء التأثيرات التفاعلية والرسم.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// عرض موقع المؤشر على المحور X
document.addEventListener('mousemove', (event) => {
    console.log(event.clientX);
});`
    ],
    expectedOutput: [
      '(سيتم عرض قيمة X الحالية لمؤشر الفأرة أثناء تحريكه.)'
    ],
    professionalTips: 'تُستخدم clientX مع clientY معاً لبناء تأثيرات تتبع المؤشر، والسحب والإفلات، والرسم، والأنيميشن التفاعلي.',
    commonMistakes: {
      wrong: `// الاعتقاد أن clientX يمثل موقع العنصر
console.log(event.clientX);`,
      right: `// يمثل موقع مؤشر الفأرة داخل نافذة المتصفح
console.log(event.clientX);`,
      explanation: 'تعيد clientX موقع مؤشر الفأرة داخل نافذة المتصفح، وليس موقع العنصر الذي وقع عليه الحدث.'
    },
    thinkingWay: 'استخدم event.clientX عندما تحتاج إلى معرفة مكان وجود مؤشر الفأرة لبناء واجهات ورسوم وتفاعلات ديناميكية.',
    relatedMethods: [
      'event-client-y',
      'event-mousemove'
    ],
    keywords: [
      'event.clientX',
      'clientX',
      'mouse position',
      'mousemove',
      'DOM'
    ]
  },
  {
    id: 'event-client-y',
    name: 'event.clientY',
    shortDescription: 'الحصول على الإحداثي الرأسي (Y) لمؤشر الفأرة داخل نافذة المتصفح.',
    longDescription: 'خاصية تُرجع موقع مؤشر الفأرة على المحور الرأسي (Y) بالنسبة إلى نافذة العرض (Viewport). تُستخدم مع clientX لتتبع حركة المؤشر، وبناء تأثيرات بصرية، والرسم، والسحب والإفلات.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// عرض موقع المؤشر على المحور Y
document.addEventListener('mousemove', (event) => {
    console.log(event.clientY);
});`
    ],
    expectedOutput: [
      '(سيتم عرض قيمة Y الحالية لمؤشر الفأرة أثناء تحريكه.)'
    ],
    professionalTips: 'تُستخدم event.clientY دائماً تقريباً مع event.clientX للحصول على موقع المؤشر الكامل داخل نافذة المتصفح.',
    commonMistakes: {
      wrong: `// الاعتقاد أنها تعيد موقع العنصر
console.log(event.clientY);`,
      right: `// تعيد موقع مؤشر الفأرة داخل نافذة المتصفح
console.log(event.clientY);`,
      explanation: 'تعيد clientY موقع مؤشر الفأرة بالنسبة لنافذة العرض، وليس موقع عنصر HTML.'
    },
    thinkingWay: 'استخدم event.clientY عندما تحتاج إلى تتبع حركة المؤشر أو بناء تأثيرات تعتمد على موقعه داخل الصفحة.',
    relatedMethods: [
      'event-client-x',
      'event-mousemove'
    ],
    keywords: [
      'event.clientY',
      'clientY',
      'mouse position',
      'mousemove',
      'DOM'
    ]
  },
  {
    id: 'event-mouseenter',
    name: 'mouseenter',
    shortDescription: 'تنفيذ كود عند دخول مؤشر الفأرة إلى العنصر لأول مرة.',
    longDescription: 'يُطلق حدث mouseenter عند دخول مؤشر الفأرة إلى حدود العنصر الحالي فقط، ولا يُعاد إطلاقه عند التنقل بين العناصر الأبناء الموجودة داخله، مما يجعله مناسباً لبناء تأثيرات Hover مستقرة.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// تكبير البطاقة عند دخول مؤشر الفأرة
const card = document.getElementById('productCard');

card.addEventListener('mouseenter', () => {
    card.classList.add('zoom');
});`
    ],
    expectedOutput: [
      '(عند دخول مؤشر الفأرة إلى البطاقة سيتم إضافة الصنف "zoom".)'
    ],
    professionalTips: 'يفضل استخدام mouseenter بدلاً من mouseover عند بناء تأثيرات Hover على عناصر تحتوي أبناءً كثيرين، لأنه لا يُطلق الحدث عند التنقل بينهم.',
    commonMistakes: {
      wrong: `// استخدام mouseover مع تأثير Hover بسيط
card.addEventListener('mouseover', zoomCard);`,
      right: `// استخدام mouseenter لتجنب التكرار
card.addEventListener('mouseenter', zoomCard);`,
      explanation: 'قد يُطلق mouseover عدة مرات أثناء حركة المؤشر بين العناصر الداخلية، بينما يُطلق mouseenter مرة واحدة فقط عند دخول العنصر.'
    },
    thinkingWay: 'استخدم mouseenter عندما تريد بدء تأثير بصري أو عرض معلومات بمجرد دخول مؤشر الفأرة إلى العنصر، دون التأثر بالعناصر الموجودة بداخله.',
    relatedMethods: [
      'element-add-event-listener',
      'event-mouseleave',
      'event-mouseover'
    ],
    keywords: [
      'mouseenter',
      'mouse event',
      'hover',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-mouseleave',
    name: 'mouseleave',
    shortDescription: 'تنفيذ كود عند مغادرة مؤشر الفأرة العنصر بالكامل.',
    longDescription: 'يُطلق حدث mouseleave عندما يغادر مؤشر الفأرة حدود العنصر الحالي نهائياً. وعلى عكس mouseout، فإنه لا يُطلق عند انتقال المؤشر بين العناصر الأبناء، مما يجعله مثالياً لإنهاء تأثيرات Hover.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// إزالة تأثير التكبير عند مغادرة البطاقة
const card = document.getElementById('productCard');

card.addEventListener('mouseleave', () => {
    card.classList.remove('zoom');
});`
    ],
    expectedOutput: [
      '(عند خروج مؤشر الفأرة من البطاقة سيتم إزالة الصنف "zoom".)'
    ],
    professionalTips: 'يُعد mouseleave الخيار الأفضل لإنهاء تأثيرات Hover، لأنه لا يتأثر بحركة المؤشر داخل العناصر الأبناء الموجودة داخل العنصر.',
    commonMistakes: {
      wrong: `// استخدام mouseout مع عناصر داخلية
card.addEventListener('mouseout', resetCard);`,
      right: `// استخدام mouseleave لتجنب التكرار
card.addEventListener('mouseleave', resetCard);`,
      explanation: 'قد يُطلق mouseout عدة مرات أثناء التنقل بين العناصر الداخلية، بينما يُطلق mouseleave مرة واحدة فقط عند مغادرة العنصر بالكامل.'
    },
    thinkingWay: 'استخدم mouseleave لإزالة التأثيرات البصرية أو إخفاء القوائم أو التلميحات بمجرد مغادرة المستخدم العنصر.',
    relatedMethods: [
      'element-add-event-listener',
      'event-mouseenter',
      'event-mouseout'
    ],
    keywords: [
      'mouseleave',
      'mouse event',
      'hover',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-mouseover',
    name: 'mouseover',
    shortDescription: 'تنفيذ كود عند مرور مؤشر الفأرة فوق عنصر أو أحد عناصره الداخلية.',
    longDescription: 'يُطلق حدث mouseover عندما يدخل مؤشر الفأرة إلى العنصر أو إلى أي عنصر ابن بداخله. يُستخدم كثيراً لإظهار معلومات إضافية أو تغيير مظهر العنصر أثناء مرور المؤشر.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// إظهار تأثير عند مرور المؤشر
const card = document.getElementById('productCard');

card.addEventListener('mouseover', () => {
    card.classList.add('active');
});`
    ],
    expectedOutput: [
      '(عند مرور مؤشر الفأرة فوق البطاقة سيتم إضافة الصنف "active".)'
    ],
    professionalTips: 'إذا كنت تريد تجاهل انتقال المؤشر بين العناصر الداخلية، فاستخدم mouseenter لأنه لا يُطلق الحدث عند التنقل بين أبناء العنصر.',
    commonMistakes: {
      wrong: `// استخدام mouseover رغم الحاجة لتجاهل العناصر الداخلية
card.addEventListener('mouseover', showMenu);`,
      right: `// استخدام mouseenter عند الحاجة
card.addEventListener('mouseenter', showMenu);`,
      explanation: 'يُطلق mouseover أيضاً عند انتقال المؤشر بين العناصر الأبناء، بينما mouseenter يُطلق مرة واحدة فقط عند دخول العنصر الأساسي.'
    },
    thinkingWay: 'استخدم mouseover لإظهار تلميحات أو تأثيرات بصرية أو معلومات إضافية أثناء مرور مؤشر الفأرة فوق العنصر.',
    relatedMethods: [
      'element-add-event-listener',
      'event-mouseout'
    ],
    keywords: [
      'mouseover',
      'hover',
      'mouse event',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-mouseout',
    name: 'mouseout',
    shortDescription: 'تنفيذ كود عند مغادرة مؤشر الفأرة عنصراً أو أحد عناصره الداخلية.',
    longDescription: 'يُطلق حدث mouseout عندما يغادر مؤشر الفأرة العنصر الحالي أو ينتقل إلى أحد العناصر المجاورة. كما يُطلق أيضاً عند الانتقال من العنصر إلى أحد أبنائه أو العكس، لذلك قد يتكرر أكثر من مرة أثناء حركة المؤشر.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// إزالة التأثير عند مغادرة البطاقة
const card = document.getElementById('productCard');

card.addEventListener('mouseout', () => {
    card.classList.remove('active');
});`
    ],
    expectedOutput: [
      '(عند خروج مؤشر الفأرة من البطاقة سيتم إزالة الصنف "active".)'
    ],
    professionalTips: 'إذا كنت تريد تنفيذ الكود مرة واحدة فقط عند مغادرة العنصر الأساسي، فاستخدم mouseleave لأنه لا يتأثر بحركة المؤشر بين العناصر الأبناء.',
    commonMistakes: {
      wrong: `// استخدام mouseout مع وجود عناصر داخلية
card.addEventListener('mouseout', hideMenu);`,
      right: `// استخدام mouseleave إذا كنت تريد تجاهل العناصر الداخلية
card.addEventListener('mouseleave', hideMenu);`,
      explanation: 'يُطلق mouseout عند الانتقال بين العنصر وأبنائه أيضاً، بينما mouseleave لا يُطلق إلا عند مغادرة العنصر بالكامل.'
    },
    thinkingWay: 'استخدم mouseout لإزالة تأثيرات المرور، مثل إخفاء التلميحات أو إعادة العنصر إلى حالته الأصلية بعد خروج مؤشر الفأرة.',
    relatedMethods: [
      'element-add-event-listener',
      'event-mouseover',
      'event-mouseleave'
    ],
    keywords: [
      'mouseout',
      'mouse event',
      'hover',
      'DOM',
      'event'
    ]
  },
















































  {
    id: 'event-contextmenu',
    name: 'contextmenu',
    shortDescription: 'تنفيذ كود عند محاولة المستخدم فتح القائمة السياقية (Right Click).',
    longDescription: 'يُطلق حدث contextmenu عند النقر بزر الفأرة الأيمن أو عند طلب فتح القائمة السياقية بوسائل أخرى. يُستخدم لتخصيص قائمة سياقية خاصة بالتطبيق أو لمنع ظهور القائمة الافتراضية للمتصفح.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// منع ظهور القائمة الافتراضية
const card = document.getElementById('productCard');

card.addEventListener('contextmenu', (event) => {
    event.preventDefault();

    console.log('Custom Context Menu');
});`
    ],
    expectedOutput: [
      '(لن تظهر قائمة المتصفح الافتراضية، وسيتم عرض الرسالة "Custom Context Menu" في وحدة التحكم.)'
    ],
    professionalTips: 'إذا منعت القائمة الافتراضية، فمن الأفضل توفير قائمة بديلة للمستخدم حتى لا تؤثر سلباً على تجربة الاستخدام.',
    commonMistakes: {
      wrong: `// الاعتقاد أن الحدث يمنع القائمة تلقائياً
card.addEventListener('contextmenu', () => {
    console.log('Open Menu');
});`,
      right: `// منع القائمة الافتراضية يدوياً
card.addEventListener('contextmenu', (event) => {
    event.preventDefault();

    console.log('Open Menu');
});`,
      explanation: 'يُطلق الحدث فقط، لكنه لا يمنع القائمة الافتراضية. يجب استدعاء event.preventDefault() إذا كنت ترغب في تعطيلها.'
    },
    thinkingWay: 'استخدم contextmenu عندما تريد إنشاء قائمة سياقية مخصصة أو التحكم في سلوك النقر بزر الفأرة الأيمن داخل تطبيقك.',
    relatedMethods: [
      'element-add-event-listener',
      'event-click',
      'event-prevent-default'
    ],
    keywords: [
      'contextmenu',
      'right click',
      'mouse event',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-wheel',
    name: 'wheel',
    shortDescription: 'تنفيذ كود عند تدوير عجلة الفأرة فوق عنصر.',
    longDescription: 'يُطلق حدث wheel عند استخدام عجلة الفأرة أو لوحة اللمس (Touchpad) للتمرير أو التكبير. ويُستخدم للتحكم في التمرير، أو التكبير والتصغير، أو تنفيذ تأثيرات تعتمد على حركة العجلة.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// اكتشاف اتجاه تدوير عجلة الفأرة
const gallery = document.getElementById('gallery');

gallery.addEventListener('wheel', (event) => {
    console.log(event.deltaY);
});`
    ],
    expectedOutput: [
      '(سيتم عرض قيمة deltaY عند كل حركة لعجلة الفأرة.)'
    ],
    professionalTips: 'تحدد الخاصية event.deltaY اتجاه التمرير، حيث تشير القيمة الموجبة غالباً إلى التمرير للأسفل، بينما تشير القيمة السالبة إلى التمرير للأعلى.',
    commonMistakes: {
      wrong: `// استخدام حدث scroll لاكتشاف حركة عجلة الفأرة
gallery.addEventListener('scroll', () => {
    console.log('Scrolling');
});`,
      right: `// استخدام الحدث المخصص لعجلة الفأرة
gallery.addEventListener('wheel', (event) => {
    console.log(event.deltaY);
});`,
      explanation: 'يراقب scroll تغير موضع التمرير، بينما يرصد wheel حركة عجلة الفأرة نفسها حتى إذا لم يتغير موضع التمرير.'
    },
    thinkingWay: 'استخدم wheel عندما تحتاج إلى تنفيذ إجراءات تعتمد على حركة عجلة الفأرة، مثل التكبير والتصغير، أو تغيير الشرائح، أو التحكم في عناصر الواجهة.',
    relatedMethods: [
      'element-add-event-listener',
      'event-scroll'
    ],
    keywords: [
      'wheel',
      'mouse wheel',
      'scroll wheel',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-delta-y',
    name: 'event.deltaY',
    shortDescription: 'معرفة مقدار واتجاه حركة عجلة الفأرة أثناء التمرير.',
    longDescription: 'خاصية تُرجع قيمة رقمية تمثل مقدار واتجاه حركة عجلة الفأرة. تكون القيمة موجبة غالباً عند التمرير للأسفل، وسالبة عند التمرير للأعلى، وتُستخدم في تأثيرات التكبير والتنقل والتحكم المخصص بالتمرير.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// معرفة اتجاه عجلة الفأرة
document.addEventListener('wheel', (event) => {
    console.log(event.deltaY);
});`
    ],
    expectedOutput: [
      '(سيتم عرض قيمة موجبة عند التمرير للأسفل، وسالبة عند التمرير للأعلى.)'
    ],
    professionalTips: 'بدلاً من مقارنة القيمة بأرقام ثابتة، يكفي غالباً التحقق إن كانت أكبر من صفر أو أصغر من صفر لمعرفة اتجاه التمرير.',
    commonMistakes: {
      wrong: `// استخدام deltaY مع حدث لا يدعمه
document.addEventListener('click', (event) => {
    console.log(event.deltaY);
});`,
      right: `// استخدامه مع حدث wheel
document.addEventListener('wheel', (event) => {
    console.log(event.deltaY);
});`,
      explanation: 'صُممت deltaY للعمل مع أحداث wheel، لذلك استخدامها مع أحداث أخرى لا يكون له معنى عملي.'
    },
    thinkingWay: 'استخدم event.deltaY عندما تريد معرفة اتجاه التمرير لبناء تأثيرات احترافية مثل التكبير، أو التنقل بين الشرائح، أو التحكم المخصص بالواجهة.',
    relatedMethods: [
      'event-wheel'
    ],
    keywords: [
      'event.deltaY',
      'deltaY',
      'wheel',
      'scroll',
      'DOM'
    ]
  },
  {
    id: 'event-keydown',
    name: 'keydown',
    shortDescription: 'تنفيذ كود بمجرد ضغط المستخدم على أي مفتاح في لوحة المفاتيح.',
    longDescription: 'يُطلق حدث keydown فور ضغط المستخدم على أحد مفاتيح لوحة المفاتيح، سواء استمر بالضغط عليه أو لا. يُستخدم لتنفيذ اختصارات لوحة المفاتيح، أو التحكم في الألعاب، أو الاستجابة الفورية لإدخال المستخدم.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// تنفيذ اختصار عند الضغط على Enter
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        console.log('Search Started');
    }
});`
    ],
    expectedOutput: [
      '(عند الضغط على مفتاح Enter ستظهر الرسالة "Search Started" في وحدة التحكم.)'
    ],
    professionalTips: 'يفضل استخدام event.key للتحقق من المفتاح المضغوط، لأنه يعيد الاسم الحقيقي للمفتاح مثل "Enter" و"Escape" و"a"، ويجعل الكود أكثر وضوحاً.',
    commonMistakes: {
      wrong: `// مقارنة المفتاح باستخدام keyCode
document.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        console.log('Enter');
    }
});`,
      right: `// استخدام الخاصية الحديثة key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        console.log('Enter');
    }
});`,
      explanation: 'أصبحت keyCode خاصية قديمة (Deprecated)، بينما تُعد event.key الطريقة الحديثة والأكثر وضوحاً للتعرف على المفتاح المضغوط.'
    },
    thinkingWay: 'استخدم keydown عندما تريد تنفيذ إجراء مباشرةً عند ضغط المستخدم على مفتاح، مثل الاختصارات، أو التحكم في العناصر، أو التعامل مع الألعاب.',
    relatedMethods: [
      'element-add-event-listener',
      'event-keyup'
    ],
    keywords: [
      'keydown',
      'keyboard event',
      'keyboard',
      'event.key',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-keyup',
    name: 'keyup',
    shortDescription: 'تنفيذ كود عند تحرير المستخدم لمفتاح من لوحة المفاتيح.',
    longDescription: 'يُطلق حدث keyup عندما يرفع المستخدم إصبعه عن أحد مفاتيح لوحة المفاتيح بعد الضغط عليه. ويُستخدم عندما يكون المطلوب تنفيذ الإجراء بعد انتهاء عملية الضغط، مثل التحقق من قيمة حقل إدخال أو إنهاء اختصار معين.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// عرض قيمة حقل البحث بعد كل ضغطة
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup', () => {
    console.log(searchInput.value);
});`
    ],
    expectedOutput: [
      '(بعد تحرير أي مفتاح سيتم عرض القيمة الحالية لحقل الإدخال في وحدة التحكم.)'
    ],
    professionalTips: 'يُستخدم keyup كثيراً في حقول البحث الفوري، لأن قيمة الحقل تكون قد تم تحديثها بعد انتهاء ضغط المستخدم على المفتاح.',
    commonMistakes: {
      wrong: `// استخدام keydown عند الحاجة إلى القيمة الجديدة للحقل
searchInput.addEventListener('keydown', () => {
    console.log(searchInput.value);
});`,
      right: `// استخدام keyup بعد تحديث قيمة الحقل
searchInput.addEventListener('keyup', () => {
    console.log(searchInput.value);
});`,
      explanation: 'في كثير من الحالات تكون قيمة حقل الإدخال قد اكتملت بعد وقوع keyup، مما يجعله أنسب لقراءة القيمة الحالية.'
    },
    thinkingWay: 'استخدم keyup عندما تريد التعامل مع القيمة النهائية بعد انتهاء المستخدم من الضغط على المفتاح، مثل البحث المباشر أو التحقق من صحة البيانات أثناء الكتابة.',
    relatedMethods: [
      'element-add-event-listener',
      'event-keydown'
    ],
    keywords: [
      'keyup',
      'keyboard event',
      'keyboard',
      'input',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-key',
    name: 'event.key',
    shortDescription: 'معرفة اسم المفتاح الذي ضغطه المستخدم.',
    longDescription: 'خاصية تُرجع اسم المفتاح الذي ضغطه المستخدم كنص، مثل Enter أو Escape أو a أو ArrowLeft. تُعد الطريقة الحديثة والموصى بها للتعامل مع أحداث لوحة المفاتيح.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// معرفة المفتاح المضغوط
document.addEventListener('keydown', (event) => {
    console.log(event.key);
});`
    ],
    expectedOutput: [
      '(سيتم عرض اسم المفتاح الذي ضغطه المستخدم مثل Enter أو a.)'
    ],
    professionalTips: 'اعتمد على event.key عند التحقق من اختصارات لوحة المفاتيح، لأنه يعيد القيمة الفعلية للمفتاح بغض النظر عن مكانه على لوحة المفاتيح.',
    commonMistakes: {
      wrong: `// استخدام الخاصية القديمة
if (event.keyCode === 13) {
    console.log('Enter');
}`,
      right: `// استخدام الخاصية الحديثة
if (event.key === 'Enter') {
    console.log('Enter');
}`,
      explanation: 'أصبحت keyCode خاصية قديمة (Deprecated)، بينما تُعد event.key الطريقة الحديثة والمدعومة في جميع المتصفحات الحديثة.'
    },
    thinkingWay: 'استخدم event.key عندما تهتم بالمفتاح الذي ضغطه المستخدم، مثل Enter أو Escape أو الأحرف والأرقام.',
    relatedMethods: [
      'event-code',
      'event-keydown',
      'event-keyup'
    ],
    keywords: [
      'event.key',
      'key',
      'keyboard',
      'keydown',
      'keyup'
    ]
  },
  {
    id: 'event-code',
    name: 'event.code',
    shortDescription: 'معرفة الموقع الفيزيائي للمفتاح على لوحة المفاتيح.',
    longDescription: 'خاصية تُرجع كود المفتاح الفيزيائي مثل KeyA أو Digit1 أو ArrowLeft بغض النظر عن اللغة الحالية أو تخطيط لوحة المفاتيح، لذلك تُستخدم كثيراً في الألعاب والاختصارات الثابتة.',
    difficulty: 'medium',
    importance: 'important',
    examples: [
      `// معرفة الكود الفيزيائي للمفتاح
document.addEventListener('keydown', (event) => {
    console.log(event.code);
});`
    ],
    expectedOutput: [
      '(سيتم عرض قيمة مثل KeyA أو Space أو ArrowUp.)'
    ],
    professionalTips: 'استخدم event.code عندما يهمك مكان المفتاح على لوحة المفاتيح، وليس الحرف الذي أدخله المستخدم، مثل التحكم في الألعاب.',
    commonMistakes: {
      wrong: `// استخدام key للتحكم في الألعاب
if (event.key === 'w') {
    movePlayer();
}`,
      right: `// استخدام code لأنه ثابت
if (event.code === 'KeyW') {
    movePlayer();
}`,
      explanation: 'قد تتغير قيمة event.key حسب لغة لوحة المفاتيح، بينما يبقى event.code ثابتاً لأنه يعتمد على موقع المفتاح.'
    },
    thinkingWay: 'استخدم event.code عند بناء الألعاب أو الاختصارات التي تعتمد على مكان المفتاح وليس على الحرف المكتوب.',
    relatedMethods: [
      'event-key',
      'event-keydown',
      'event-keyup'
    ],
    keywords: [
      'event.code',
      'code',
      'keyboard',
      'keydown',
      'keyup'
    ]
  },
  {
    id: 'event-copy',
    name: 'copy',
    shortDescription: 'تنفيذ كود عند نسخ المستخدم لمحتوى قابل للنسخ.',
    longDescription: 'يُطلق حدث copy عندما يقوم المستخدم بنسخ نص أو محتوى باستخدام اختصار لوحة المفاتيح أو القائمة السياقية. ويُستخدم لمراقبة عمليات النسخ أو تعديل البيانات المنسوخة قبل وضعها في الحافظة.',
    difficulty: 'easy',
    importance: 'normal',
    examples: [
      `// اكتشاف عملية النسخ
document.addEventListener('copy', () => {
    console.log('Content Copied');
});`
    ],
    expectedOutput: [
      '(عند نسخ أي محتوى ستظهر الرسالة "Content Copied" في وحدة التحكم.)'
    ],
    professionalTips: 'يمكن استخدام الحدث لتسجيل عمليات النسخ أو تخصيص المحتوى المنسوخ باستخدام Clipboard API.',
    commonMistakes: {
      wrong: `// استخدام click لمعرفة عملية النسخ
document.addEventListener('click', copyHandler);`,
      right: `// استخدام الحدث المخصص
document.addEventListener('copy', copyHandler);`,
      explanation: 'عملية النسخ لا ترتبط بالنقر، لذلك يجب استخدام حدث copy المخصص لها.'
    },
    thinkingWay: 'استخدم copy عندما تحتاج إلى تنفيذ منطق معين بمجرد أن ينسخ المستخدم محتوى من الصفحة.',
    relatedMethods: [
      'event-cut',
      'event-paste'
    ],
    keywords: [
      'copy',
      'clipboard',
      'event',
      'DOM',
      'copy event'
    ]
  },
  {
    id: 'event-cut',
    name: 'cut',
    shortDescription: 'تنفيذ كود عند قص المستخدم لمحتوى قابل للتحرير.',
    longDescription: 'يُطلق حدث cut عندما يقوم المستخدم بقص نص أو محتوى من عنصر قابل للتحرير، سواء باستخدام لوحة المفاتيح أو القائمة السياقية. ويُستخدم لمراقبة أو تخصيص عمليات القص.',
    difficulty: 'easy',
    importance: 'normal',
    examples: [
      `// اكتشاف عملية القص
document.addEventListener('cut', () => {
    console.log('Content Cut');
});`
    ],
    expectedOutput: [
      '(عند قص أي محتوى ستظهر الرسالة "Content Cut" في وحدة التحكم.)'
    ],
    professionalTips: 'غالباً ما يُستخدم cut مع copy وpaste عند تطوير المحررات النصية أو التطبيقات التي تعتمد على الحافظة.',
    commonMistakes: {
      wrong: `// استخدام input لاكتشاف القص
document.addEventListener('input', cutHandler);`,
      right: `// استخدام الحدث المخصص
document.addEventListener('cut', cutHandler);`,
      explanation: 'قد يتغير المحتوى بطرق متعددة، لكن حدث cut يُطلق فقط عند تنفيذ عملية القص.'
    },
    thinkingWay: 'استخدم cut عندما تريد الاستجابة مباشرةً لعملية قص المحتوى أو تسجيلها.',
    relatedMethods: [
      'event-copy',
      'event-paste'
    ],
    keywords: [
      'cut',
      'clipboard',
      'event',
      'DOM',
      'cut event'
    ]
  },
  {
    id: 'event-paste',
    name: 'paste',
    shortDescription: 'تنفيذ كود عند لصق المستخدم لمحتوى من الحافظة.',
    longDescription: 'يُطلق حدث paste عندما يقوم المستخدم بلصق نص أو بيانات داخل عنصر قابل للتحرير باستخدام اختصار لوحة المفاتيح أو القائمة السياقية. ويُستخدم للتحقق من البيانات أو تعديلها قبل معالجتها.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// اكتشاف عملية اللصق
document.addEventListener('paste', () => {
    console.log('Content Pasted');
});`
    ],
    expectedOutput: [
      '(عند لصق أي محتوى ستظهر الرسالة "Content Pasted" في وحدة التحكم.)'
    ],
    professionalTips: 'يُستخدم paste كثيراً للتحقق من صحة البيانات أو تنظيف النصوص التي يلصقها المستخدم قبل استخدامها.',
    commonMistakes: {
      wrong: `// استخدام input لمعرفة عملية اللصق
document.addEventListener('input', pasteHandler);`,
      right: `// استخدام الحدث المخصص
document.addEventListener('paste', pasteHandler);`,
      explanation: 'قد يتغير الحقل بطرق متعددة، بينما paste يُطلق فقط عند تنفيذ عملية اللصق.'
    },
    thinkingWay: 'استخدم paste عندما تحتاج إلى معالجة أو التحقق من البيانات فور لصقها داخل الصفحة.',
    relatedMethods: [
      'event-copy',
      'event-cut'
    ],
    keywords: [
      'paste',
      'clipboard',
      'event',
      'DOM',
      'paste event'
    ]
  },
  {
    id: 'event-input',
    name: 'input',
    shortDescription: 'تنفيذ كود مباشرةً عند تغير قيمة عنصر الإدخال أثناء الكتابة.',
    longDescription: 'يُطلق حدث input في اللحظة التي تتغير فيها قيمة عنصر الإدخال، سواء بسبب الكتابة أو الحذف أو اللصق أو أي تعديل آخر. ويُعد الخيار الأفضل لبناء ميزات البحث المباشر والتحقق الفوري من البيانات.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// عرض النص أثناء الكتابة
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', () => {
    console.log(searchInput.value);
});`
    ],
    expectedOutput: [
      '(سيتم عرض القيمة الحالية لحقل الإدخال مع كل تغيير يحدث أثناء الكتابة.)'
    ],
    professionalTips: 'يُعد input الحدث الأنسب عندما تحتاج إلى التفاعل مع كل تغيير يحدث في حقل الإدخال، لأنه يستجيب للكتابة والحذف واللصق وغيرها من العمليات.',
    commonMistakes: {
      wrong: `// استخدام keyup لمراقبة جميع التغييرات
searchInput.addEventListener('keyup', () => {
    console.log(searchInput.value);
});`,
      right: `// استخدام الحدث المخصص لتغير قيمة الحقل
searchInput.addEventListener('input', () => {
    console.log(searchInput.value);
});`,
      explanation: 'لا يلتقط keyup جميع طرق تغيير القيمة، مثل اللصق باستخدام الفأرة، بينما يستجيب input لأي تغيير يطرأ على قيمة الحقل.'
    },
    thinkingWay: 'استخدم input عند بناء البحث المباشر، أو عدادات الأحرف، أو التحقق الفوري من صحة البيانات أثناء كتابة المستخدم.',
    relatedMethods: [
      'element-add-event-listener',
      'event-change',
      'event-keyup'
    ],
    keywords: [
      'input',
      'form event',
      'input event',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-change',
    name: 'change',
    shortDescription: 'تنفيذ كود بعد اعتماد التغيير في قيمة عنصر الإدخال.',
    longDescription: 'يُطلق حدث change عندما يعتمد المستخدم التغيير الذي أجراه على قيمة عنصر الإدخال. ففي حقول النص يحدث عادةً بعد مغادرة الحقل، بينما يحدث مباشرةً في عناصر مثل select أو checkbox عند تغيير قيمتها.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// معرفة الخيار الذي اختاره المستخدم
const language = document.getElementById('language');

language.addEventListener('change', () => {
    console.log(language.value);
});`
    ],
    expectedOutput: [
      '(سيتم عرض القيمة الجديدة بعد تغيير الخيار في القائمة.)'
    ],
    professionalTips: 'إذا كنت تحتاج إلى الاستجابة لكل حرف يكتبه المستخدم فاستخدم input، أما إذا كنت تحتاج إلى تنفيذ الإجراء بعد اعتماد التغيير فاستخدم change.',
    commonMistakes: {
      wrong: `// استخدام change للبحث المباشر
searchInput.addEventListener('change', searchProducts);`,
      right: `// استخدام input للبحث المباشر
searchInput.addEventListener('input', searchProducts);`,
      explanation: 'لا يُطلق change مع كل ضغطة مفتاح، بل بعد اعتماد التغيير، لذلك لا يناسب ميزات البحث المباشر.'
    },
    thinkingWay: 'استخدم change عند التعامل مع القوائم المنسدلة، وخانات الاختيار، وحقول الإدخال التي لا تحتاج إلى معالجة فورية أثناء الكتابة.',
    relatedMethods: [
      'element-add-event-listener',
      'event-input'
    ],
    keywords: [
      'change',
      'form event',
      'input',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-focus',
    name: 'focus',
    shortDescription: 'تنفيذ كود عند حصول عنصر إدخال على التركيز (Focus).',
    longDescription: 'يُطلق حدث focus عندما يصبح العنصر هو العنصر النشط (Active Element)، مثل النقر داخل حقل إدخال أو الوصول إليه باستخدام مفتاح Tab. ويُستخدم لإظهار المساعدة أو تمييز الحقول النشطة.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// تمييز حقل الإدخال عند التركيز عليه
const email = document.getElementById('email');

email.addEventListener('focus', () => {
    email.classList.add('active');
});`
    ],
    expectedOutput: [
      '(عند التركيز على حقل الإدخال سيتم إضافة الصنف "active".)'
    ],
    professionalTips: 'يُستخدم focus كثيراً لتحسين تجربة المستخدم، مثل تغيير لون الحدود أو عرض رسالة إرشادية خاصة بالحقل النشط.',
    commonMistakes: {
      wrong: `// استخدام click لمعرفة أن الحقل أصبح نشطاً
email.addEventListener('click', highlightField);`,
      right: `// استخدام الحدث المخصص للتركيز
email.addEventListener('focus', highlightField);`,
      explanation: 'قد يحصل العنصر على التركيز باستخدام لوحة المفاتيح أو وسائل أخرى غير النقر، لذلك يُعد focus الحدث الصحيح لمراقبة هذه الحالة.'
    },
    thinkingWay: 'استخدم focus عندما تريد تمييز الحقول النشطة أو عرض تعليمات أو بدء عملية تحقق بمجرد أن يبدأ المستخدم بالتفاعل مع عنصر الإدخال.',
    relatedMethods: [
      'element-add-event-listener',
      'event-blur'
    ],
    keywords: [
      'focus',
      'form event',
      'input',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-blur',
    name: 'blur',
    shortDescription: 'تنفيذ كود عند فقدان عنصر الإدخال لحالة التركيز (Focus).',
    longDescription: 'يُطلق حدث blur عندما ينتقل التركيز من العنصر الحالي إلى عنصر آخر أو عند مغادرته. ويُستخدم كثيراً للتحقق من صحة البيانات بعد انتهاء المستخدم من إدخالها أو لإزالة التأثيرات البصرية الخاصة بحالة التركيز.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// التحقق من أن الحقل ليس فارغاً
const username = document.getElementById('username');

username.addEventListener('blur', () => {
    if (username.value === '') {
        console.log('Username is required');
    }
});`
    ],
    expectedOutput: [
      '(إذا غادر المستخدم الحقل دون إدخال قيمة، ستظهر الرسالة "Username is required".)'
    ],
    professionalTips: 'يُستخدم blur كثيراً للتحقق من صحة البيانات بعد انتهاء المستخدم من الكتابة، مما يقلل عدد عمليات التحقق مقارنةً باستخدام حدث input.',
    commonMistakes: {
      wrong: `// تنفيذ التحقق مع كل ضغطة مفتاح
username.addEventListener('input', validateField);`,
      right: `// تنفيذ التحقق بعد مغادرة الحقل
username.addEventListener('blur', validateField);`,
      explanation: 'إذا لم تكن بحاجة إلى التحقق الفوري، فإن blur يوفر تجربة استخدام أفضل لأنه يعمل بعد انتهاء المستخدم من إدخال البيانات.'
    },
    thinkingWay: 'استخدم blur للتحقق من الحقول، أو إزالة تأثيرات التركيز، أو حفظ البيانات تلقائياً بعد انتهاء المستخدم من تعديلها.',
    relatedMethods: [
      'element-add-event-listener',
      'event-focus'
    ],
    keywords: [
      'blur',
      'form event',
      'focus',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-submit',
    name: 'submit',
    shortDescription: 'تنفيذ كود عند محاولة إرسال نموذج (Form).',
    longDescription: 'يُطلق حدث submit عند إرسال النموذج، سواء بالنقر على زر الإرسال أو بالضغط على مفتاح Enter داخل أحد حقول الإدخال. ويُستخدم للتحقق من صحة البيانات أو معالجتها قبل إرسالها إلى الخادم.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// منع إرسال النموذج وعرض رسالة
const form = document.getElementById('loginForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log('Form Submitted');
});`
    ],
    expectedOutput: [
      '(لن يتم إرسال النموذج، وستظهر الرسالة "Form Submitted" في وحدة التحكم.)'
    ],
    professionalTips: 'يُستخدم event.preventDefault() كثيراً مع submit لمنع إعادة تحميل الصفحة، خاصةً عند إرسال البيانات باستخدام Fetch أو AJAX.',
    commonMistakes: {
      wrong: `// نسيان منع السلوك الافتراضي
form.addEventListener('submit', () => {
    console.log('Form Submitted');
});`,
      right: `// منع إرسال النموذج قبل تنفيذ الكود
form.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log('Form Submitted');
});`,
      explanation: 'إذا لم تستدعِ event.preventDefault() فسيُرسل المتصفح النموذج بالطريقة التقليدية، وقد تُعاد تحميل الصفحة قبل اكتمال تنفيذ الكود.'
    },
    thinkingWay: 'استخدم submit عند التحقق من صحة بيانات النماذج أو إرسالها إلى الخادم أو تنفيذ أي منطق قبل عملية الإرسال.',
    relatedMethods: [
      'element-add-event-listener',
      'event-prevent-default'
    ],
    keywords: [
      'submit',
      'form event',
      'form',
      'preventDefault',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-reset',
    name: 'reset',
    shortDescription: 'تنفيذ كود عند إعادة تعيين جميع حقول النموذج إلى قيمها الافتراضية.',
    longDescription: 'يُطلق حدث reset عندما يعيد المستخدم تعيين النموذج، سواء بالنقر على زر من النوع reset أو باستدعاء الدالة form.reset(). ويُستخدم لإزالة الرسائل أو إعادة تهيئة حالة الواجهة بعد إعادة ضبط النموذج.',
    difficulty: 'easy',
    importance: 'normal',
    examples: [
      `// إزالة رسائل التحقق بعد إعادة تعيين النموذج
const form = document.getElementById('registerForm');

form.addEventListener('reset', () => {
    console.log('Form Reset');
});`
    ],
    expectedOutput: [
      '(عند إعادة تعيين النموذج ستظهر الرسالة "Form Reset" في وحدة التحكم.)'
    ],
    professionalTips: 'يُستخدم reset عادةً لإعادة حالة الواجهة إلى وضعها الأصلي، مثل إزالة رسائل الأخطاء أو إخفاء مؤشرات التحقق، وليس فقط لإفراغ الحقول.',
    commonMistakes: {
      wrong: `// الاعتقاد أن reset يرسل النموذج
form.addEventListener('reset', sendData);`,
      right: `// استخدام reset لمعالجة إعادة تهيئة النموذج
form.addEventListener('reset', clearValidation);`,
      explanation: 'لا يقوم حدث reset بإرسال البيانات، بل يعيد جميع عناصر النموذج إلى قيمها الافتراضية فقط.'
    },
    thinkingWay: 'استخدم reset عندما تحتاج إلى إعادة تهيئة واجهة النموذج بعد استعادة القيم الافتراضية أو إزالة أي حالات مؤقتة مرتبطة به.',
    relatedMethods: [
      'element-add-event-listener',
      'event-submit'
    ],
    keywords: [
      'reset',
      'form event',
      'form',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-dragstart',
    name: 'dragstart',
    shortDescription: 'تنفيذ كود عند بدء سحب عنصر قابل للسحب.',
    longDescription: 'يُطلق حدث dragstart بمجرد أن يبدأ المستخدم بسحب عنصر يملك الخاصية draggable أو عنصر يدعم السحب. ويُستخدم لتهيئة عملية السحب أو تخزين البيانات المرتبطة بها.',
    difficulty: 'medium',
    importance: 'important',
    examples: [
      `// اكتشاف بداية السحب
const card = document.getElementById('card');

card.addEventListener('dragstart', () => {
    console.log('Drag Started');
});`
    ],
    expectedOutput: [
      '(عند بدء سحب العنصر ستظهر الرسالة "Drag Started".)'
    ],
    professionalTips: 'يُعد dragstart أول حدث في دورة Drag & Drop، وغالباً ما يُستخدم مع drop وdragover لبناء أنظمة السحب والإفلات.',
    commonMistakes: {
      wrong: `// نسيان جعل العنصر قابلاً للسحب
<div id="card"></div>`,
      right: `// جعل العنصر قابلاً للسحب
<div id="card" draggable="true"></div>`,
      explanation: 'لن يعمل حدث dragstart إلا إذا كان العنصر قابلاً للسحب أو يدعم السحب افتراضياً.'
    },
    thinkingWay: 'استخدم dragstart عند بناء واجهات السحب والإفلات مثل نقل البطاقات أو ترتيب العناصر.',
    relatedMethods: [
      'event-dragover',
      'event-drop',
      'event-dragend'
    ],
    keywords: [
      'dragstart',
      'drag',
      'drag and drop',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-dragover',
    name: 'dragover',
    shortDescription: 'تنفيذ كود أثناء مرور عنصر يتم سحبه فوق عنصر آخر.',
    longDescription: 'يُطلق حدث dragover بشكل مستمر أثناء تحريك عنصر مسحوب فوق عنصر آخر. ويُستخدم غالباً لتحديد أماكن الإفلات المسموح بها، كما يجب استدعاء event.preventDefault() للسماح بعملية الإفلات.',
    difficulty: 'medium',
    importance: 'important',
    examples: [
      `// السماح بإفلات العنصر
const dropZone = document.getElementById('dropZone');

dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
});`
    ],
    expectedOutput: [
      '(سيصبح العنصر جاهزاً لاستقبال عملية الإفلات.)'
    ],
    professionalTips: 'إذا لم تستدعِ event.preventDefault() داخل dragover فلن يعمل حدث drop في معظم المتصفحات.',
    commonMistakes: {
      wrong: `dropZone.addEventListener('dragover', () => {

});`,
      right: `dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
});`,
      explanation: 'السلوك الافتراضي يمنع الإفلات، لذلك يجب إلغاؤه للسماح بعملية Drop.'
    },
    thinkingWay: 'استخدم dragover لتجهيز منطقة الإفلات أو إظهار تأثيرات بصرية أثناء مرور العنصر المسحوب.',
    relatedMethods: [
      'event-dragstart',
      'event-drop'
    ],
    keywords: [
      'dragover',
      'drag',
      'drop',
      'drag and drop',
      'DOM'
    ]
  },
  {
    id: 'event-drop',
    name: 'drop',
    shortDescription: 'تنفيذ كود عند إفلات عنصر داخل منطقة مخصصة.',
    longDescription: 'يُطلق حدث drop عندما يُفلت المستخدم عنصراً مسحوباً داخل عنصر يسمح بالإفلات. ويُستخدم لنقل العناصر أو إعادة ترتيبها أو معالجة البيانات المنقولة.',
    difficulty: 'medium',
    importance: 'important',
    examples: [
      `// اكتشاف عملية الإفلات
const dropZone = document.getElementById('dropZone');

dropZone.addEventListener('drop', () => {
    console.log('Item Dropped');
});`
    ],
    expectedOutput: [
      '(عند إفلات العنصر ستظهر الرسالة "Item Dropped".)'
    ],
    professionalTips: 'يعمل drop عادةً مع dragstart وdragover لتكوين نظام Drag & Drop متكامل.',
    commonMistakes: {
      wrong: `// استخدام drop دون dragover
dropZone.addEventListener('drop', handleDrop);`,
      right: `dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
});

dropZone.addEventListener('drop', handleDrop);`,
      explanation: 'لن يُطلق حدث drop إذا لم يُسمح بالإفلات داخل dragover.'
    },
    thinkingWay: 'استخدم drop لمعالجة العنصر أو البيانات بعد أن يُفلتها المستخدم داخل منطقة معينة.',
    relatedMethods: [
      'event-dragstart',
      'event-dragover',
      'event-dragend'
    ],
    keywords: [
      'drop',
      'drag',
      'drag and drop',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-dragend',
    name: 'dragend',
    shortDescription: 'تنفيذ كود عند انتهاء عملية سحب العنصر، سواء تم الإفلات بنجاح أو إلغاؤها.',
    longDescription: 'يُطلق حدث dragend بمجرد انتهاء عملية السحب، بغض النظر عن نجاح عملية الإفلات. ويُستخدم لإزالة التأثيرات المؤقتة أو إعادة العنصر إلى حالته الطبيعية.',
    difficulty: 'medium',
    importance: 'important',
    examples: [
      `// إنهاء عملية السحب
const card = document.getElementById('card');

card.addEventListener('dragend', () => {
    console.log('Drag Finished');
});`
    ],
    expectedOutput: [
      '(عند انتهاء السحب ستظهر الرسالة "Drag Finished".)'
    ],
    professionalTips: 'يُستخدم dragend غالباً لإزالة الأصناف (Classes) أو المؤثرات البصرية التي أضيفت أثناء حدث dragstart.',
    commonMistakes: {
      wrong: `// إزالة التأثيرات داخل dragstart
card.addEventListener('dragstart', () => {
    card.classList.remove('dragging');
});`,
      right: `// إزالة التأثيرات بعد انتهاء السحب
card.addEventListener('dragend', () => {
    card.classList.remove('dragging');
});`,
      explanation: 'من الأفضل إزالة التأثيرات بعد انتهاء السحب باستخدام dragend، وليس عند بدايته.'
    },
    thinkingWay: 'استخدم dragend لتنظيف الواجهة بعد انتهاء عملية السحب وإعادة العناصر إلى حالتها الأصلية.',
    relatedMethods: [
      'event-dragstart',
      'event-dragover',
      'event-drop'
    ],
    keywords: [
      'dragend',
      'drag',
      'drag and drop',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-pointerdown',
    name: 'pointerdown',
    shortDescription: 'تنفيذ كود عند ضغط أي نوع من المؤشرات على العنصر.',
    longDescription: 'يُطلق حدث pointerdown عند الضغط باستخدام الفأرة أو شاشة اللمس أو القلم الرقمي. ويُعد بديلاً حديثاً لأحداث الماوس التقليدية لأنه يوحد جميع أنواع أجهزة الإدخال ضمن واجهة واحدة.',
    difficulty: 'medium',
    importance: 'important',
    examples: [
      `// اكتشاف بداية التفاعل
const box = document.getElementById('box');

box.addEventListener('pointerdown', () => {
    console.log('Pointer Down');
});`
    ],
    expectedOutput: [
      '(عند الضغط بأي مؤشر ستظهر الرسالة "Pointer Down".)'
    ],
    professionalTips: 'يفضل استخدام Pointer Events في التطبيقات الحديثة لأنها تعمل مع الماوس واللمس والقلم دون الحاجة لكتابة مستمعات مختلفة لكل جهاز.',
    commonMistakes: {
      wrong: `// كتابة مستمعات منفصلة لكل جهاز
element.addEventListener('mousedown', start);
element.addEventListener('touchstart', start);`,
      right: `// مستمع واحد لجميع الأجهزة
element.addEventListener('pointerdown', start);`,
      explanation: 'توفر Pointer Events واجهة موحدة لجميع أجهزة الإدخال الحديثة، مما يقلل حجم الكود ويسهل صيانته.'
    },
    thinkingWay: 'استخدم pointerdown عند تطوير تطبيقات حديثة تعمل على الحاسوب والهواتف والأجهزة اللوحية دون الحاجة للتعامل مع أحداث منفصلة.',
    relatedMethods: [
      'event-pointermove',
      'event-pointerup'
    ],
    keywords: [
      'pointerdown',
      'pointer events',
      'pointer',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-pointermove',
    name: 'pointermove',
    shortDescription: 'تنفيذ كود أثناء تحريك أي مؤشر فوق العنصر.',
    longDescription: 'يُطلق حدث pointermove باستمرار أثناء تحريك الفأرة أو الإصبع أو القلم الرقمي فوق العنصر. ويُستخدم لبناء تطبيقات الرسم، والسحب والإفلات، والأنيميشن، والتأثيرات التفاعلية الحديثة.',
    difficulty: 'medium',
    importance: 'important',
    examples: [
      `// تتبع حركة المؤشر
const area = document.getElementById('drawingArea');

area.addEventListener('pointermove', (event) => {
    console.log(event.clientX, event.clientY);
});`
    ],
    expectedOutput: [
      '(سيتم عرض إحداثيات المؤشر أثناء تحريكه فوق العنصر.)'
    ],
    professionalTips: 'بدلاً من استخدام mousemove وtouchmove معاً، استخدم pointermove لأنه يدعم جميع أجهزة الإدخال الحديثة.',
    commonMistakes: {
      wrong: `// استخدام mousemove فقط
area.addEventListener('mousemove', trackPointer);`,
      right: `// استخدام Pointer Events
area.addEventListener('pointermove', trackPointer);`,
      explanation: 'يعمل pointermove مع الفأرة واللمس والقلم الرقمي، مما يجعل الكود أكثر بساطة وتوافقاً.'
    },
    thinkingWay: 'استخدم pointermove عندما تحتاج إلى تتبع حركة المؤشر بغض النظر عن نوع جهاز الإدخال.',
    relatedMethods: [
      'event-pointerdown',
      'event-pointerup',
      'event-client-x',
      'event-client-y'
    ],
    keywords: [
      'pointermove',
      'pointer',
      'pointer events',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-pointerup',
    name: 'pointerup',
    shortDescription: 'تنفيذ كود عند رفع أي مؤشر عن العنصر.',
    longDescription: 'يُطلق حدث pointerup عند إنهاء الضغط بالفأرة أو الإصبع أو القلم الرقمي. ويُستخدم لإنهاء عمليات السحب والرسم والتفاعل التي بدأت بواسطة pointerdown.',
    difficulty: 'medium',
    importance: 'important',
    examples: [
      `// إنهاء عملية الرسم
const canvas = document.getElementById('canvas');

canvas.addEventListener('pointerup', () => {
    console.log('Pointer Released');
});`
    ],
    expectedOutput: [
      '(عند رفع المؤشر ستظهر الرسالة "Pointer Released".)'
    ],
    professionalTips: 'يُستخدم pointerup غالباً مع pointerdown وpointermove لبناء دورة تفاعل كاملة تعمل على جميع أجهزة الإدخال.',
    commonMistakes: {
      wrong: `// الاعتماد على mouseup فقط
canvas.addEventListener('mouseup', stopDrawing);`,
      right: `// الاعتماد على Pointer Events
canvas.addEventListener('pointerup', stopDrawing);`,
      explanation: 'يعمل pointerup مع الفأرة واللمس والقلم، بينما mouseup يعمل مع الفأرة فقط.'
    },
    thinkingWay: 'استخدم pointerup لإنهاء أي عملية بدأت بواسطة pointerdown مثل السحب أو الرسم أو التحديد.',
    relatedMethods: [
      'event-pointerdown',
      'event-pointermove'
    ],
    keywords: [
      'pointerup',
      'pointer',
      'pointer events',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-dom-content-loaded',
    name: 'DOMContentLoaded',
    shortDescription: 'تنفيذ كود بعد اكتمال بناء شجرة DOM دون انتظار تحميل الموارد الخارجية.',
    longDescription: 'يُطلق حدث DOMContentLoaded بمجرد انتهاء المتصفح من تحليل ملف HTML وبناء شجرة DOM، دون انتظار تحميل الصور أو ملفات CSS أو الخطوط، لذلك يُستخدم لتهيئة التطبيق في أقرب وقت ممكن.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// تهيئة التطبيق بعد جاهزية DOM
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Ready');
});`
    ],
    expectedOutput: [
      '(بمجرد جاهزية شجرة DOM ستظهر الرسالة "DOM Ready".)'
    ],
    professionalTips: 'يُعد DOMContentLoaded الخيار الأفضل لمعظم تطبيقات الويب، لأنه يسمح ببدء تنفيذ JavaScript فور جاهزية عناصر الصفحة دون انتظار تحميل جميع الموارد.',
    commonMistakes: {
      wrong: `// استخدام load لتهيئة التطبيق
window.addEventListener('load', initializeApp);`,
      right: `// استخدام DOMContentLoaded
document.addEventListener('DOMContentLoaded', initializeApp);`,
      explanation: 'في أغلب الحالات لا يحتاج التطبيق إلى انتظار تحميل الصور والملفات الخارجية، لذلك يُعد DOMContentLoaded أسرع وأكثر كفاءة.'
    },
    thinkingWay: 'استخدم DOMContentLoaded لتهيئة التطبيق، وربط الأحداث، والوصول إلى عناصر الصفحة بمجرد أن تصبح شجرة DOM جاهزة.',
    relatedMethods: [
      'event-load'
    ],
    keywords: [
      'DOMContentLoaded',
      'DOM ready',
      'document event',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-load',
    name: 'load',
    shortDescription: 'تنفيذ كود بعد اكتمال تحميل الصفحة وجميع مواردها.',
    longDescription: 'يُطلق حدث load عندما ينتهي المتصفح من تحميل الصفحة بالكامل، بما في ذلك الصور وملفات CSS والخطوط والملفات الخارجية الأخرى. ويُستخدم عندما يعتمد الكود على توفر جميع موارد الصفحة قبل التنفيذ.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// تنفيذ كود بعد اكتمال تحميل الصفحة
window.addEventListener('load', () => {
    console.log('Page Loaded');
});`
    ],
    expectedOutput: [
      '(بعد اكتمال تحميل الصفحة وجميع مواردها ستظهر الرسالة "Page Loaded".)'
    ],
    professionalTips: 'إذا لم تكن بحاجة إلى انتظار تحميل الصور والملفات الخارجية، فاستخدم DOMContentLoaded لأنه يُطلق مبكراً ويمنح تجربة أسرع.',
    commonMistakes: {
      wrong: `// انتظار تحميل جميع الموارد دون حاجة
window.addEventListener('load', initializeApp);`,
      right: `// استخدام DOMContentLoaded إذا كان المطلوب هو DOM فقط
document.addEventListener('DOMContentLoaded', initializeApp);`,
      explanation: 'ينتظر load تحميل جميع الموارد، بينما يكتفي DOMContentLoaded ببناء شجرة DOM، لذلك يكون أسرع في معظم التطبيقات.'
    },
    thinkingWay: 'استخدم load عندما تعتمد على عناصر مثل الصور أو ملفات الوسائط التي يجب أن تكون قد اكتمل تحميلها قبل تنفيذ الكود.',
    relatedMethods: [
      'event-dom-content-loaded'
    ],
    keywords: [
      'load',
      'window event',
      'page load',
      'DOM',
      'event'
    ]
  },

  {
    id: 'event-resize',
    name: 'resize',
    shortDescription: 'تنفيذ كود عند تغيير أبعاد نافذة المتصفح.',
    longDescription: 'يُطلق حدث resize عندما يتغير عرض أو ارتفاع نافذة المتصفح، سواء بسبب تكبير النافذة أو تصغيرها أو تغيير اتجاه الشاشة على الأجهزة المحمولة. ويُستخدم لتحديث الواجهات أو إعادة حساب أحجام العناصر.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// عرض عرض نافذة المتصفح الحالي
window.addEventListener('resize', () => {
    console.log(window.innerWidth);
});`
    ],
    expectedOutput: [
      '(سيتم عرض عرض نافذة المتصفح في وحدة التحكم عند كل تغيير في حجمها.)'
    ],
    professionalTips: 'قد يُطلق resize عشرات المرات أثناء تغيير حجم النافذة، لذلك يُفضل استخدام تقنيات مثل debounce أو throttle إذا كانت العملية المنفذة ثقيلة.',
    commonMistakes: {
      wrong: `// تنفيذ عمليات مكلفة مع كل تغيير للحجم
window.addEventListener('resize', () => {
    loadLargeData();
});`,
      right: `// تنفيذ عمليات خفيفة أو تحسين الأداء باستخدام debounce
window.addEventListener('resize', () => {
    console.log(window.innerWidth);
});`,
      explanation: 'يُطلق resize بشكل متكرر أثناء تغيير حجم النافذة، لذلك قد يؤدي تنفيذ عمليات مكلفة داخله إلى انخفاض أداء الصفحة.'
    },
    thinkingWay: 'استخدم resize عندما تحتاج إلى إعادة ترتيب الواجهة أو تحديث القياسات أو تعديل سلوك التطبيق عند تغير حجم نافذة المتصفح.',
    relatedMethods: [
      'event-load'
    ],
    keywords: [
      'resize',
      'window event',
      'window',
      'responsive',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-scroll',
    name: 'scroll',
    shortDescription: 'تنفيذ كود أثناء تمرير الصفحة أو عنصر قابل للتمرير.',
    longDescription: 'يُطلق حدث scroll عند تغير موضع التمرير (Scroll Position) للصفحة أو لأي عنصر يحتوي على شريط تمرير. ويُستخدم لبناء تأثيرات التمرير، أو تحميل المحتوى تدريجياً، أو مراقبة موقع المستخدم داخل الصفحة.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// عرض مقدار التمرير الحالي
window.addEventListener('scroll', () => {
    console.log(window.scrollY);
});`
    ],
    expectedOutput: [
      '(سيتم عرض قيمة التمرير الرأسية الحالية مع كل عملية تمرير.)'
    ],
    professionalTips: 'يُطلق scroll باستمرار أثناء التمرير، لذلك يُنصح بعدم تنفيذ عمليات ثقيلة داخله واستخدام debounce أو throttle عند الحاجة لتحسين الأداء.',
    commonMistakes: {
      wrong: `// تنفيذ عمليات معقدة مع كل حركة تمرير
window.addEventListener('scroll', () => {
    processLargeDataset();
});`,
      right: `// تنفيذ عمليات بسيطة أثناء التمرير
window.addEventListener('scroll', () => {
    console.log(window.scrollY);
});`,
      explanation: 'قد يُطلق scroll عشرات المرات في الثانية، لذا فإن تنفيذ عمليات مكلفة داخله قد يسبب بطئاً وتقطعاً في الواجهة.'
    },
    thinkingWay: 'استخدم scroll لبناء تأثيرات التمرير، أو تثبيت العناصر، أو إظهار زر العودة للأعلى، أو تحميل المزيد من المحتوى عند اقتراب المستخدم من نهاية الصفحة.',
    relatedMethods: [
      'event-wheel',
      'event-resize'
    ],
    keywords: [
      'scroll',
      'window event',
      'scrollY',
      'DOM',
      'event'
    ]
  },
  {
    id: 'event-target',
    name: 'event.target',
    shortDescription: 'الحصول على العنصر الذي أطلق الحدث فعلياً.',
    longDescription: 'خاصية تُرجع العنصر الذي بدأ منه الحدث (Origin Element)، حتى لو كان الحدث قد انتقل لاحقاً إلى عناصره الأب عبر آلية Event Bubbling. وتُستخدم كثيراً لمعرفة العنصر الحقيقي الذي تفاعل معه المستخدم.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// معرفة العنصر الذي نقر عليه المستخدم
document.addEventListener('click', (event) => {
    console.log(event.target);
});`
    ],
    expectedOutput: [
      '(سيتم عرض العنصر الذي نقر عليه المستخدم مباشرة.)'
    ],
    professionalTips: 'تُستخدم event.target كثيراً مع Event Delegation، حيث يمكن ربط مستمع واحد بعنصر أب ومعرفة أي عنصر ابن أطلق الحدث.',
    commonMistakes: {
      wrong: `// الاعتقاد أن target هو العنصر الذي رُبط به الحدث دائماً
container.addEventListener('click', (event) => {
    console.log(event.currentTarget);
});`,
      right: `// target يمثل العنصر الذي بدأ منه الحدث
container.addEventListener('click', (event) => {
    console.log(event.target);
});`,
      explanation: 'تعيد event.target العنصر الذي تفاعل معه المستخدم مباشرة، بينما تعيد event.currentTarget العنصر الذي يرتبط به مستمع الحدث.'
    },
    thinkingWay: 'استخدم event.target عندما تحتاج إلى معرفة العنصر الحقيقي الذي ضغط عليه المستخدم، خاصةً عند التعامل مع عناصر كثيرة داخل حاوية واحدة.',
    relatedMethods: [
      'event-current-target'
    ],
    keywords: [
      'event.target',
      'target',
      'event object',
      'DOM',
      'events'
    ]
  },
  {
    id: 'event-current-target',
    name: 'event.currentTarget',
    shortDescription: 'الحصول على العنصر المرتبط به مستمع الحدث الحالي.',
    longDescription: 'خاصية تُرجع العنصر الذي تم تسجيل مستمع الحدث عليه بواسطة addEventListener، بغض النظر عن العنصر الذي بدأ منه الحدث. وتُستخدم لمعرفة العنصر الذي ينفذ معالج الحدث حالياً.',
    difficulty: 'medium',
    importance: 'important',
    examples: [
      `// معرفة العنصر الذي يحمل مستمع الحدث
const container = document.getElementById('container');

container.addEventListener('click', (event) => {
    console.log(event.currentTarget);
});`
    ],
    expectedOutput: [
      '(سيتم عرض العنصر "container" لأنه يحمل مستمع الحدث.)'
    ],
    professionalTips: 'إذا كان لديك مستمع واحد على عنصر أب، فإن currentTarget سيبقى يشير دائماً إلى ذلك العنصر، حتى لو نقر المستخدم على أحد الأبناء.',
    commonMistakes: {
      wrong: `// استخدام currentTarget للحصول على العنصر الذي ضغط عليه المستخدم
container.addEventListener('click', (event) => {
    console.log(event.currentTarget);
});`,
      right: `// استخدام target للحصول على العنصر الحقيقي
container.addEventListener('click', (event) => {
    console.log(event.target);
});`,
      explanation: 'تعيد currentTarget العنصر الذي سُجل عليه مستمع الحدث، بينما تعيد target العنصر الذي أطلق الحدث فعلياً.'
    },
    thinkingWay: 'استخدم event.currentTarget عندما تحتاج إلى التعامل مع العنصر الذي يملك مستمع الحدث نفسه، وليس العنصر الذي نقر عليه المستخدم.',
    relatedMethods: [
      'event-target',
      'element-add-event-listener'
    ],
    keywords: [
      'event.currentTarget',
      'currentTarget',
      'event object',
      'DOM',
      'events'
    ]
  },
  {
    id: 'event-type',
    name: 'event.type',
    shortDescription: 'معرفة نوع الحدث الذي أدى إلى استدعاء معالج الأحداث.',
    longDescription: 'خاصية تُرجع اسم الحدث الحالي كسلسلة نصية (String)، مثل "click" أو "keydown" أو "submit". وتُستخدم عندما ترغب في التعامل مع عدة أحداث داخل نفس معالج الأحداث أو لمعرفة الحدث الذي تم إطلاقه.',
    difficulty: 'easy',
    importance: 'normal',
    examples: [
      `// معرفة نوع الحدث الذي تم إطلاقه
const button = document.getElementById('saveButton');

button.addEventListener('click', (event) => {
    console.log(event.type);
});`
    ],
    expectedOutput: [
      '(عند النقر على الزر سيتم عرض "click" في وحدة التحكم.)'
    ],
    professionalTips: 'تكون event.type مفيدة عند استخدام معالج أحداث واحد لعدة أحداث مختلفة، حيث يمكنك معرفة الحدث الحالي واتخاذ القرار المناسب بناءً عليه.',
    commonMistakes: {
      wrong: `// مقارنة الحدث باسم غير صحيح
if (event.type === 'Click') {
    console.log('Clicked');
}`,
      right: `// استخدام الاسم الصحيح للحدث
if (event.type === 'click') {
    console.log('Clicked');
}`,
      explanation: 'تعيد event.type أسماء الأحداث بأحرف صغيرة (Lowercase)، لذلك يجب مطابقة الاسم كما هو.'
    },
    thinkingWay: 'استخدم event.type عندما تريد أن يتعامل معالج واحد مع أكثر من نوع من الأحداث، أو عند تسجيل الأحداث لأغراض التصحيح (Debugging).',
    relatedMethods: [
      'event-target',
      'event-current-target'
    ],
    keywords: [
      'event.type',
      'type',
      'event object',
      'DOM',
      'events'
    ]
  },
  {
    id: 'event-prevent-default',
    name: 'event.preventDefault()',
    shortDescription: 'منع المتصفح من تنفيذ السلوك الافتراضي المرتبط بالحدث.',
    longDescription: 'دالة تُستخدم لإلغاء السلوك الافتراضي الذي ينفذه المتصفح عند وقوع حدث معين، مثل إرسال النماذج، أو فتح الروابط، أو إظهار القائمة السياقية. ولا تمنع انتقال الحدث بين العناصر، وإنما تمنع السلوك الافتراضي فقط.',
    difficulty: 'easy',
    importance: 'important',
    examples: [
      `// منع فتح الرابط عند النقر عليه
const link = document.getElementById('website');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log('Navigation Prevented');
});`
    ],
    expectedOutput: [
      '(لن ينتقل المتصفح إلى الرابط، وستظهر الرسالة "Navigation Prevented" في وحدة التحكم.)'
    ],
    professionalTips: 'تُستخدم preventDefault كثيراً مع أحداث submit وclick وcontextmenu، خاصةً عند بناء تطبيقات تعتمد على JavaScript لإدارة سلوك الصفحة.',
    commonMistakes: {
      wrong: `// الاعتقاد أن preventDefault توقف انتقال الحدث
event.preventDefault();`,
      right: `// استخدام stopPropagation لإيقاف انتقال الحدث
event.stopPropagation();`,
      explanation: 'تمنع preventDefault السلوك الافتراضي فقط، أما انتقال الحدث بين العناصر (Event Bubbling) فيستمر ما لم تستدعِ stopPropagation().'
    },
    thinkingWay: 'استخدم preventDefault عندما تحتاج إلى استبدال السلوك الافتراضي للمتصفح بمنطقك البرمجي، مثل التحقق من نموذج قبل إرساله أو إنشاء قائمة سياقية مخصصة.',
    relatedMethods: [
      'event-stop-propagation',
      'event-stop-immediate-propagation'
    ],
    keywords: [
      'preventDefault',
      'event.preventDefault',
      'event object',
      'DOM',
      'events'
    ]
  },
  {
    id: 'event-stop-propagation',
    name: 'event.stopPropagation()',
    shortDescription: 'إيقاف انتقال الحدث إلى العناصر الأب في شجرة DOM.',
    longDescription: 'دالة تُستخدم لمنع الحدث من الاستمرار في الانتقال (Event Bubbling) إلى العناصر الأب بعد تنفيذ معالج الحدث الحالي. ولا تمنع تنفيذ السلوك الافتراضي للمتصفح، وإنما توقف انتقال الحدث فقط.',
    difficulty: 'medium',
    importance: 'important',
    examples: [
      `// منع انتقال حدث النقر إلى العنصر الأب
const button = document.getElementById('deleteButton');

button.addEventListener('click', (event) => {
    event.stopPropagation();

    console.log('Button Clicked');
});`
    ],
    expectedOutput: [
      '(سيتم تنفيذ الكود الخاص بالزر فقط، ولن ينتقل حدث النقر إلى العنصر الأب.)'
    ],
    professionalTips: 'استخدم stopPropagation فقط عند الحاجة الفعلية، لأن إيقاف انتقال الأحداث قد يمنع أجزاءً أخرى من التطبيق من الاستجابة للأحداث كما هو متوقع.',
    commonMistakes: {
      wrong: `// الاعتقاد أن stopPropagation تمنع السلوك الافتراضي
button.addEventListener('click', (event) => {
    event.stopPropagation();
});`,
      right: `// استخدام preventDefault لمنع السلوك الافتراضي
button.addEventListener('click', (event) => {
    event.preventDefault();
});`,
      explanation: 'توقف stopPropagation انتقال الحدث بين العناصر، بينما تمنع preventDefault السلوك الافتراضي الذي ينفذه المتصفح.'
    },
    thinkingWay: 'استخدم stopPropagation عندما تريد أن يستجيب العنصر الحالي فقط للحدث، دون أن تنتقل الاستجابة إلى العناصر الأب.',
    relatedMethods: [
      'event-prevent-default',
      'event-stop-immediate-propagation'
    ],
    keywords: [
      'stopPropagation',
      'event.stopPropagation',
      'event object',
      'DOM',
      'events'
    ]
  },
  {
    id: 'event-stop-immediate-propagation',
    name: 'event.stopImmediatePropagation()',
    shortDescription: 'إيقاف انتقال الحدث ومنع تنفيذ أي مستمعات أحداث أخرى على العنصر نفسه.',
    longDescription: 'دالة تُستخدم لإيقاف انتقال الحدث إلى العناصر الأب، كما تمنع أيضاً تنفيذ أي مستمعات أحداث أخرى مسجلة على العنصر الحالي لنفس الحدث. وهي أقوى من stopPropagation لأنها توقف المعالجة بالكامل.',
    difficulty: 'medium',
    importance: 'normal',
    examples: [
      `// منع تنفيذ بقية مستمعات الحدث
const button = document.getElementById('saveButton');

button.addEventListener('click', (event) => {
    event.stopImmediatePropagation();

    console.log('First Listener');
});

button.addEventListener('click', () => {
    console.log('Second Listener');
});`
    ],
    expectedOutput: [
      '(سيتم عرض "First Listener" فقط، ولن يُنفذ المستمع الثاني.)'
    ],
    professionalTips: 'لا تستخدم stopImmediatePropagation إلا عند الضرورة، لأنها تمنع أيضاً المستمعات الأخرى الموجودة على العنصر نفسه، وقد تؤدي إلى سلوك غير متوقع إذا كان العنصر يستخدمه أكثر من جزء في التطبيق.',
    commonMistakes: {
      wrong: `// استخدام stopPropagation مع توقع إيقاف جميع المستمعات
event.stopPropagation();`,
      right: `// استخدام stopImmediatePropagation لإيقاف جميع المستمعات اللاحقة
event.stopImmediatePropagation();`,
      explanation: 'تمنع stopPropagation انتقال الحدث إلى العناصر الأب فقط، بينما تمنع stopImmediatePropagation أيضاً تنفيذ أي مستمعات أخرى مسجلة على العنصر الحالي.'
    },
    thinkingWay: 'استخدم stopImmediatePropagation عندما يكون من الضروري إيقاف معالجة الحدث بالكامل ومنع أي مستمع آخر من التعامل معه.',
    relatedMethods: [
      'event-stop-propagation',
      'event-prevent-default'
    ],
    keywords: [
      'stopImmediatePropagation',
      'event.stopImmediatePropagation',
      'event object',
      'DOM',
      'events'
    ]
  },
];