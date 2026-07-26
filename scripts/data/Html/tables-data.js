export const tablesData = [
    {
        id: 'html-table-tag',
        name: '<table>',
        shortDescription: 'عنصر عرض البيانات الهيكلية والجدولية ثنائية الأبعاد.',
        longDescription: 'وسم دلالي مخصص حصراً لعرض المعطيات الإحصائية والرقمية والبيانات المترابطة في صفوف وأعمدة مرتبة، مما يسهل قراءتها وتحليلها.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<table>
  <caption>قائمة أسعار الاشتراكات الشهرية</caption>
  <!-- عناصر الجدول توضع هنا -->
</table>`
        ],
        expectedOutput: [
            'رسم شبكة جدولية منظمة ثنائية الأبعاد تجمع البيانات الرقمية والنصية.'
        ],
        professionalTips: 'تحذير قطعي: يُحظر تماماً استخدام <table> لتصميم وبناء تخطيطات واجهة الويب (Layouts)؛ التخطيط يُبنى بـ CSS Grid و Flexbox، بينما الجداول مخصصة للبيانات الإحصائية فقط.',
        commonMistakes: {
            wrong: `<!-- استخدام الجدول لبناء تخطيط صفحة هيدر وفوتر وسايدبار -->
<table width="100%">
  <tr><td colspan="2">الهيدر</td></tr>
</table>`,
            right: `<header>الهيدر</header>
<main>المحتوى</main>`,
            explanation: 'استخدام الجداول لتخطيط الواجهة يدمّر إمكانية الوصول (Accessibility) ويبطئ معالجة المحرك بمرتين.'
        },
        thinkingWay: 'اعتبر <table> بمثابة ورقة جدول بيانات Excel مدمجة بداخل صفحتك لعرض الأرقام والبيانات.',
        relatedMethods: ['html-caption-tag', 'html-thead', 'html-tbody'],
        keywords: ['<table>', 'table', 'structured data', 'data grid', 'tabular data']
    },
    {
        id: 'html-caption-tag',
        name: '<caption>',
        shortDescription: 'العنوان الوصفي الرئيسي والشارح لمحتوى الجدول لتعزيز الوصولية.',
        longDescription: 'وسم دلالي يوضع كأول عنصر مباشر داخل <table> لتقديم عنوان وموجز توضيحي لمحتوى الجدول، لتتمكن قارئات الشاشة من الإعلان عن هدف الجدول فوراً.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `<table>
  <caption>جدول درجات الطلاب في المسار المعماري</caption>
  <!-- بقية الصفوف -->
</table>`
        ],
        expectedOutput: [
            'إظهار عنوان نصي أعلى الجدول يوضح الهدف من البيانات المكتوبة بالداخل.'
        ],
        professionalTips: 'احرص على كتابة <caption> دائماً كأول ابن مباشر لـ <table> وقبل <thead>؛ لضمان تعامل المتصفحات وقارئات الشاشة مع العنوان بنجاح.',
        commonMistakes: {
            wrong: `<!-- كتابة عنوان الجدول في وسم h3 خارجي بدلاً من caption -->
<h3>جدول المبيعات</h3>
<table>...</table>`,
            right: `<table>
  <caption>جدول المبيعات</caption>
  ...
</table>`,
            explanation: 'الوسم <caption> يضمن الربط التقني الدلالي بين العنوان وشبكة الجدول في شجرة الوصولية.'
        },
        thinkingWay: 'فكر في <caption> كعنوان المخطط الإحصائي المكتوب في أعلى الرسم التوضيحي.',
        relatedMethods: ['html-table-tag'],
        keywords: ['<caption>', 'caption', 'table title', 'table accessibility']
    },
    {
        id: 'html-thead',
        name: '<thead>',
        shortDescription: 'تجميع صفوف العناوين الرئيسية المفسرة لأعمدة الجدول.',
        longDescription: 'عنصر هيكلي يغلف صف أو صفوف الترويسة في أعلى الجدول لتمييز أسماء الأعمدة دلالياً عن محتوى البيانات السفلية.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<table>
  <thead>
    <tr>
      <th scope="col">الاسم</th>
      <th scope="col">المسار</th>
    </tr>
  </thead>
</table>`
        ],
        expectedOutput: [
            'تجميع ترويسة الجدول وتثبيتها أعلى الأعمدة أثناء الطباعة أو التمرير.'
        ],
        professionalTips: 'تسهل أوسام <thead> و <tbody> على محرك الطباعة بالمتصفح تكرار ترويسة الجدول تلقائياً في أعلى كل ورقة عند طباعة الجداول الطويلة.',
        commonMistakes: {
            wrong: `<!-- كتابة صف الترويسة مباشرة داخل table بدون thead -->
<table>
  <tr><th>العنوان</th></tr>
</table>`,
            right: `<table>
  <thead>
    <tr><th>العنوان</th></tr>
  </thead>
</table>`,
            explanation: 'تغليف الترويسة داخل <thead> يوفر البنية المعمارية الصحيحة المعتمدة لتقسيم الجداول.'
        },
        thinkingWay: 'اعتبر <thead> بمثابة شريط الترويسة العلوية الثابت الذي يشرح عناوين كل عمود.',
        relatedMethods: ['html-tbody', 'html-tfoot', 'html-th-scope'],
        keywords: ['<thead>', 'thead', 'table header', 'header row']
    },
    {
        id: 'html-tbody',
        name: '<tbody>',
        shortDescription: 'الحاوية الجوهرية لصفوف البيانات والمعلومات الفعلية للجدول.',
        longDescription: 'عنصر هيكلي يضم كتل صفوف البيانات القادمة من السيرفر أو قاعدة البيانات، مما يسهل تطبيق أنماط التلوين والتنسيق بـ CSS.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<table>
  <tbody>
    <tr>
      <td>أحمد</td>
      <td>مطور واجهات</td>
    </tr>
  </tbody>
</table>`
        ],
        expectedOutput: [
            'عزل كتلة البيانات الرئيسية وتسهيل تطبيق التنسيقات المتعاقبة بـ CSS.'
        ],
        professionalTips: 'يمكنك استخدام أكثر من وسم <tbody> داخل نفس الجدول إذا كنت ترغب في تقسيم البيانات الميدانية لمجموعات مستقلة ذات تنسيق خاص.',
        commonMistakes: {
            wrong: `<!-- خلط صفوف البيانات بصفوف التذييل داخل نفس التكتل -->
<tbody>
  <tr><td>مجموع المبيعات</td></tr>
</tbody>`,
            right: `<tfoot>
  <tr><td>مجموع المبيعات</td></tr>
</tfoot>`,
            explanation: 'صفوف الإجماليات والملخصات مكانها المخصص هو <tfoot> وليس <tbody>.'
        },
        thinkingWay: 'فكر في <tbody> كجسم الكتاب الذي يحتوي على كافة السطور والمعلومات التفصيلية.',
        relatedMethods: ['html-thead', 'html-tfoot', 'html-td'],
        keywords: ['<tbody>', 'tbody', 'table body', 'table rows']
    },
    {
        id: 'html-tfoot',
        name: '<tfoot>',
        shortDescription: 'تذييل الجدول المخصص للنتائج الإجمالية والإحصائيات الختامية.',
        longDescription: 'وسم هيكلي يغلف صف التلخيص في أسفل الجدول لعرض المجموع الكلي، المتوسطات الحسابية، أو ملخص البيانات الإجمالي.',
        difficulty: 'medium',
        importance: 'normal',
        examples: [
            `<table>
  <tfoot>
    <tr>
      <td>المجموع الكلي:</td>
      <td>1500 $</td>
    </tr>
  </tfoot>
</table>`
        ],
        expectedOutput: [
            'عرض صف التلخيص المالي أو الإحصائي بأسفل الجدول بوضوح.'
        ],
        professionalTips: 'في شفرة HTML5 المعاصرة، يُكتب <tfoot> في أسفل الجدول بعد <tbody> لتأمين التسلسل المنطقي لقراءة الصفحة.',
        commonMistakes: {
            wrong: `<!-- إدراج صف المجموع الكلي داخل tbody بخلط دلالي -->
<tbody>
  <tr><td>المجموع</td></tr>
</tbody>`,
            right: `<tfoot>
  <tr><td>المجموع</td></tr>
</tfoot>`,
            explanation: 'فصل المجموع في <tfoot> يتيح تلوينه وتثبيته بـ CSS كصف ملخص مستمر.'
        },
        thinkingWay: 'اعتبر <tfoot> بمثابة خانة "المجموع الصافي" المطبوعة في أسفل الفاتورة المالية.',
        relatedMethods: ['html-thead', 'html-tbody'],
        keywords: ['<tfoot>', 'tfoot', 'table footer', 'summary row', 'totals']
    },
    {
        id: 'html-tr',
        name: '<tr>',
        shortDescription: 'صف السطر الأفقي التجميعي لخلايا الجدول (Table Row).',
        longDescription: 'وسم كتلوي يُمثل سطر الصف الأفقي الواحد داخل الجدول، والذي يحتوي بداخلة إما على خلايا العناوين <th> أو خلايا البيانات <td>.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<tr>
  <td>خلية أولى</td>
  <td>خلية ثانية</td>
</tr>`
        ],
        expectedOutput: [
            'تجميع الخلايا المحددة محاذاتها جنب بعضها أفقياً في سطر واحد.'
        ],
        professionalTips: 'احرص على أن تحتوي جميع أوسام <tr> في الجدول على نفس العدد من الخلايا (أو معالجة الفروقات عبر colspan/rowspan) لتجنب تفكك الهيكل.',
        commonMistakes: {
            wrong: `<!-- وضع نصوص مباشرة داخل tr بدون استخدام td أو th -->
<tr>
  نص مباشر داخل الصف
</tr>`,
            right: `<tr>
  <td>نص داخل الخلية</td>
</tr>`,
            explanation: 'الوسم <tr> لا يقبل نصوصاً مباشرة؛ الابن المسموح به فقط هو <td> أو <th>.'
        },
        thinkingWay: 'فكر في <tr> كالسطر المفرغ في الدفتر؛ يمتد أفقياً لتضع بداخلة خانات البيانات.',
        relatedMethods: ['html-th-scope', 'html-td'],
        keywords: ['<tr>', 'tr', 'table row', 'row']
    },
    {
        id: 'html-th-scope',
        name: '<th> & scope',
        shortDescription: 'خلية عنوان العمود أو الصف مع تحديد اتجاه التغطية المباشر.',
        longDescription: 'خلية مخصصة للعناوين المفسرة داخل الجدول بدلاً من <td>، وتُزود بالسمة scope="col" إذا كانت عنواناً لعمود، أو scope="row" إذا كانت عنواناً لصف.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `<!-- عنوان عمود راسي -->
<th scope="col">السعر</th>

<!-- عنوان صف أفقي -->
<th scope="row">المنتج الأول</th>`
        ],
        expectedOutput: [
            'عرض النص بخط غامق ممركز وتزويد قارئات الشاشة بالروابط التفسيرية للخلية.'
        ],
        professionalTips: 'استخدام السمة scope="col" و scope="row" شرط أساسي لاجتياز اختبارات إمكانية الوصول (WCAG)، حيث تساعد الكفيف على معرفة أي عنوان تتبع له الخلية المحددة.',
        commonMistakes: {
            wrong: `<!-- استخدام td مع التغميق بـ CSS بدلاً من وسم th المعياري -->
<td style="font-weight: bold;">اسم العمود</td>`,
            right: `<th scope="col">اسم العمود</th>`,
            explanation: 'تغميق <td> بـ CSS يعطي شكلاً بصرياً فقط لكنه لا يفهم تقنياً كعنوان عمود من قارئ الشاشة.'
        },
        thinkingWay: 'اعتبر <th> بمثابة بطاقة الاسم المثبتة على رأس كل عمود أو بداية كل صف.',
        relatedMethods: ['html-td', 'html-tr'],
        keywords: ['<th>', 'th', 'scope="col"', 'scope="row"', 'table header cell', 'accessibility']
    },
    {
        id: 'html-td',
        name: '<td>',
        shortDescription: 'خلية البيانات الفردية داخل صفوف الجدول (Table Data).',
        longDescription: 'الخلية الأساسية التي تحمل النص أو الرقم أو المكون الفعلي داخل الصف المندرج تحت <tbody> أو <tfoot>.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<tr>
  <td>100 $</td>
</tr>`
        ],
        expectedOutput: [
            'عرض المحتوى بداخل الخلية المحددة بمحاذاة قياسية أفقية ورأسية.'
        ],
        professionalTips: 'يمكن وضع أي عنصر HTML داخل <td> (مثل الأزرار، الصور، النماذج، أو حتى جدول فرعي) بحرية كاملة.',
        commonMistakes: {
            wrong: `<!-- كتابة td مباشرة داخل table بدون وسم tr محيط -->
<table>
  <td>خلية بدون صف</td>
</table>`,
            right: `<table>
  <tr>
    <td>خلية داخل صف</td>
  </tr>
</table>`,
            explanation: 'الخلية <td> يجب حتماً أن تقع داخل وسم <tr> ليتمكن المتصفح من محاذاتها.'
        },
        thinkingWay: 'فكر في <td> بالمربع أو الصندوق الصغير المخصص لكتابة رقم أو كلمة واحدة داخل الشبكة.',
        relatedMethods: ['html-th-scope', 'html-tr'],
        keywords: ['<td>', 'td', 'table data', 'cell']
    },
    {
        id: 'html-colspan',
        name: 'colspan',
        shortDescription: 'دمج الخلية أفقياً عبر الامتداد لأكثر من عمود مجاور.',
        longDescription: 'سمة تُضاف لخلايا <th> أو <td> لدمج الخلية أفقياً واحتلال مساحة عدة أعمدة مجاورة في نفس الصف.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `<!-- دمج الخلية لتغطي عمودين أفقياً -->
<td colspan="2">مجموع المباراتين</td>`
        ],
        expectedOutput: [
            'تمدد الخلية أفقياً واحتلال مساحة عمودين أو أكثر بحسب الرقم المكتوب.'
        ],
        professionalTips: 'عند استخدام colspan="2"، تذكر حذف الخلية المجاورة لها في نفس الصف؛ لتفادي بروز خلية زائدة تخرب محاذاة أطراف الجدول.',
        commonMistakes: {
            wrong: `<!-- وضع colspan="2" مع الإبقاء على الخلية المدمجة في الشفرة -->
<tr>
  <td colspan="2">خلية مدمجة</td>
  <td>خلية زائدة تخرب الشكل</td>
  <td>خلية إضافية</td>
</tr>`,
            right: `<tr>
  <td colspan="2">خلية مدمجة</td>
  <td>خلية إضافية</td>
</tr>`,
            explanation: 'دمج عمودين يعني أن الخلية أصبحت بوزن خليتين؛ لذا يجب حذف خلية واحدة من الصف ليتوازن العدد.'
        },
        thinkingWay: 'اعتبر colspan بمثابة إزالة الجدار الفاصل بين غرفتين مجاورتين أفقياً لفتحهما كصالة واحدة.',
        relatedMethods: ['html-rowspan', 'html-td'],
        keywords: ['colspan', 'column span', 'merge columns', 'merge cells']
    },
    {
        id: 'html-rowspan',
        name: 'rowspan',
        shortDescription: 'دمج الخلية راسياً عبر الامتداد لأكثر من صف أسفلها.',
        longDescription: 'سمة تُضاف للخلية لدمجها رأسياً وامتدادها لأسفل عبر عدة صفوف متتالية بدلاً من صف واحد.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `<!-- دمج الخلية لتمتد رأسياً عبر صفين متتالين -->
<td rowspan="2">المجموعة الأولى</td>`
        ],
        expectedOutput: [
            'امتداد الخلية رأسياً نحو الأسفل لتغطي مساحة الصف الحالي والصف الذي يليه.'
        ],
        professionalTips: 'الخلية المزودة بـ rowspan="2" ستشغل مساحة في الصف التالي تلقائياً؛ لذا يجب عليك مراعاة خفض عدد خلايا الصف السفلي بواحدة.',
        commonMistakes: {
            wrong: `<!-- نسيان حذف الخلية الموازية من الصف السفلي المدمج إليه -->
<tr><td rowspan="2">مدمج</td><td>صف 1</td></tr>
<tr><td>خلية مدمجة مكررة</td><td>صف 2</td></tr>`,
            right: `<tr><td rowspan="2">مدمج</td><td>صف 1</td></tr>
<tr><td>صف 2</td></tr>`,
            explanation: 'الخلية ذات الـ rowspan تمتد للصف السفلي آلياً؛ لذا كتابة خلية مقابلة بالصف السفلي يسبب انزياح البيانات.'
        },
        thinkingWay: 'فكر في rowspan كفتح فتحة سقف بين الطابق الحالي والطابق الأسفل لربطهما عمودياً.',
        relatedMethods: ['html-colspan', 'html-td'],
        keywords: ['rowspan', 'row span', 'merge rows', 'vertical merge']
    }
];