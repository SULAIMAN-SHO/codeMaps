export const mediaAssetsData = [
    {
        id: 'html-img',
        name: '<img>',
        shortDescription: 'عنصر إدراج وعرض الصور بشتى أنواعها داخل المستند.',
        longDescription: 'وسم منفرد (Void Element) يُستخدم لربط وعرض الصور بشتى الصيغ (PNG, JPG, SVG, WebP, GIF) مع تحديد مسار الصورة عبر سمة src.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<img src="./assets/images/hero.webp" alt="شعار المنصة التعليمية" width="800" height="400">`
        ],
        expectedOutput: [
            'رسم وعرض الصورة المحددة بالأبعاد والمسار المرفق داخل الواجهة.'
        ],
        professionalTips: 'احرص دائماً على كتابة سمات width و height الأصلية للصورة؛ يمنع ذلك ظاهرة قفز عناصر الصفحة المفاجئ أثناء التحميل (Layout Shift / CLS).',
        commonMistakes: {
            wrong: `<!-- كتابة وسم img بدون سمة alt أو أبعاد صريحة -->
<img src="banner.jpg">`,
            right: `<img src="banner.jpg" alt="إعلان الدورة" width="600" height="300">`,
            explanation: 'إهمال alt يضر بالـ SEO والأكسسبيليتي، وإهمال الأبعاد يتسبب في اهتزاز الصفحة أثناء التحميل.'
        },
        thinkingWay: 'اعتبر <img> بمثابة إطار الصورة المعلق على الجدار؛ يطلب من المتصفح إحضار الملف وعرضه في هذه المساحة.',
        relatedMethods: ['html-alt-attribute', 'html-loading-lazy'],
        keywords: ['<img>', 'img', 'image', 'picture', 'media']
    },
    {
        id: 'html-alt-attribute',
        name: 'alt (Image Alt Text)',
        shortDescription: 'النص البديل الوصفي للصورة للـ SEO وقارئات الشاشة.',
        longDescription: 'سمة جوهرية داخل وسم <img> تقدم شرحاً نصياً دقيقاً لمحتوى الصورة عند تعذر تحميلها، وتعتمد عليها قارئات الشاشة ومحركات البحث لقراءة الصور.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `<img src="logo.png" alt="شعار منصة كود ماب المعماري">`
        ],
        expectedOutput: [
            'عرض النص البديل بدلاً من الصورة عند انقطاع الشبكة وقراءته آلياً للمكفوفين.'
        ],
        professionalTips: 'إذا كانت الصورة ديكورية فقط ولا تضيف معنى للمحتوى (Decorative Image)، اترك السمة فارغة alt="" ليقوم قارئ الشاشة بتجاهلها وعدم إزعاج المستخدم.',
        commonMistakes: {
            wrong: `<!-- كتابة عبارات مكررة مثل "صورة لـ" داخل alt -->
<img src="user.png" alt="صورة للمستخدم">`,
            right: `<img src="user.png" alt="أحمد علي - مطور واجهات">`,
            explanation: 'قارئات الشاشة تعلن تلقائياً أنها تقرأ صورة؛ لذا لا داعي لتكرار كلمة "صورة" داخل النص البديل.'
        },
        thinkingWay: 'فكر في alt كالوصف الذي ستمليه عبر الهاتف لشخص لا يرى الشاشة ليشعر بما تحتوي الصورة.',
        relatedMethods: ['html-img'],
        keywords: ['alt', 'alt attribute', 'accessibility', 'SEO image', 'image description']
    },
    {
        id: 'html-loading-lazy',
        name: 'loading="lazy"',
        shortDescription: 'تقنية التحميل الكسول المؤجل للصور والوسائط خارج نطاق الشاشة.',
        longDescription: 'سمة أداء عصرية تؤجل تحميل الصور حتى يقترب المستخدم من التمرير إليها، مما يوفر بيانات الشبكة ويسرع التحميل الأولي للموقع.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `<!-- تأجيل تحميل الصور السفلية لحين التمرير -->
<img src="footer-banner.jpg" alt="تذييل الصفحة" loading="lazy">`
        ],
        expectedOutput: [
            'عدم طلب الصورة من السيرفر إلا عندما يمرر المستخدم الشاشة لمكانيتها.'
        ],
        professionalTips: 'لا تضع loading="lazy" على صورة الهيدر أو البانر الرئيسي الأول في أعلى الصفحة (Hero Image)؛ لأن ذلك يؤخر ظهورها ويسوء تقييم سرعة الصفحة (LCP).',
        commonMistakes: {
            wrong: `<!-- وضع loading="lazy" على الشعار الرئيسي في أعلى الصفحة -->
<img src="main-logo.png" alt="الشعار" loading="lazy">`,
            right: `<img src="main-logo.png" alt="الشعار" fetchpriority="high">`,
            explanation: 'الصور الظاهرة فور فتح الصفحة يجب تحميلها فوراً بدون تأجيل كسول.'
        },
        thinkingWay: 'اعتبر loading="lazy" بطلب الطعام عند الحاجة بدلاً من إعداد كل الوجبات وتخزينها سلفاً.',
        relatedMethods: ['html-img', 'html-iframe'],
        keywords: ['loading="lazy"', 'lazy loading', 'performance', 'LCP', 'web speed']
    },
    {
        id: 'html-picture',
        name: '<picture>',
        shortDescription: 'حاوية الصور المتجاوبة والتبديل التلقائي بحسب الشاشة والصيغ.',
        longDescription: 'عنصر دلالي يغلف أوسام <source> وسم <img> احتياطي؛ يتيح تخديم صيغ حديثة خفيفة (WebP/AVIF) أو تغيير حاد في أبعاد الصورة بحسب قياس شاشة الجهاز.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `<picture>
  <source srcset="photo.avif" type="image/avif">
  <source srcset="photo.webp" type="image/webp">
  <img src="photo.jpg" alt="صورة متجاوبة">
</picture>`
        ],
        expectedOutput: [
            'اختيار المتصفح لأخف صيغة مدعومة تلقائياً والتحول للـ JPG كخيار احتياطي.'
        ],
        professionalTips: 'استخدم <picture> لتنفيذ تقنية Art Direction؛ حيث يمكنك تقديم صورة بعرض كامل للحاسوب وصورة أخرى مقصوصة طولياً للهواتف الذكية.',
        commonMistakes: {
            wrong: `<!-- نسيان وسم img الاحتياطي داخل picture -->
<picture>
  <source srcset="image.webp">
</picture>`,
            right: `<picture>
  <source srcset="image.webp">
  <img src="image.jpg" alt="صورة">
</picture>`,
            explanation: 'الوسم <picture> لا يعرض شيئاً بدون وسم <img> الداخلي الذي يعمل كمشغل أساسي وخيار احتياطي.'
        },
        thinkingWay: 'فكر في <picture> كخزانة ملابس ذكية تختار المعطف المناسب بحسب طقس المتصفح وشاشته.',
        relatedMethods: ['html-source', 'html-img'],
        keywords: ['<picture>', 'picture', 'responsive images', 'WebP', 'AVIF', 'art direction']
    },
    {
        id: 'html-source',
        name: '<source>',
        shortDescription: 'تحديد بدائل ومصادر الوسائط المتعددة داخل picture و video و audio.',
        longDescription: 'وسم فرعي مخصص لتمرير مسارات وصيغ متعددة مع شروط العرض (Media Queries) ليختار المتصفح خياره المفضل بينها بالترتيب.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `<video controls>
  <source src="movie.webm" type="video/webm">
  <source src="movie.mp4" type="video/mp4">
</video>`
        ],
        expectedOutput: [
            'قراءة قائمة المصادر بالترتيب وتغير المشغل للصيغة الأولى المدعومة بالنظام.'
        ],
        professionalTips: 'ضع الصيغ الأحدث والأعلى ضغطاً (مثل AVIF أو WebM) في أول وسم <source> ثم الصيغ التقليدية تليها؛ لأن المتصفح يتوقف فوراً عند أول صيغة يفهمها.',
        commonMistakes: {
            wrong: `<!-- وضع صيغة MP4 قبل WebM يمنع المتصفح من تشغيل WebM الأحدث -->
<source src="video.mp4" type="video/mp4">
<source src="video.webm" type="video/webm">`,
            right: `<source src="video.webm" type="video/webm">
<source src="video.mp4" type="video/mp4">`,
            explanation: 'وضع الصيغ القديمة في البداية يجعل المتصفح يختارها دائماً ويتجاهل الصيغ الحديثة الخفيفة.'
        },
        thinkingWay: 'اعتبر <source> قائمة بالخيارات البديلة المرتبة من الأفضل للأقدم والمقدمة للمتصفح ليختار أسرع خيار يفهمه.',
        relatedMethods: ['html-picture', 'html-video', 'html-audio'],
        keywords: ['<source>', 'source', 'media query', 'mime type', 'srcset']
    },
    {
        id: 'html-video',
        name: '<video>',
        shortDescription: 'عنصر تشغيل واستعراض مقاطع الفيديو داخل الصفحة.',
        longDescription: 'وسم مخصص لتشغيل مقاطع الفيديو مباشرة دون مشغلات خارجية، مع التحكم بالسمات القياسية كالكتم، والتشغيل التلقائي، ولوحة التحكم.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `<video controls width="640" height="360" poster="thumbnail.jpg">
  <source src="intro.webm" type="video/webm">
  <source src="intro.mp4" type="video/mp4">
  متصفحك لا يدعم تشغيل الفيديو.
</video>`
        ],
        expectedOutput: [
            'رسم مشغل فيديو كامل بأزرار التشغيل والتحكم بالصوت والشاشة الكاملة.'
        ],
        professionalTips: 'إذا أردت تشغيل الفيديو تلقائياً فور فتح الصفحة (autoplay)، يجب حتماً إضافة سمة muted؛ حيث تحظر المتصفحات التشغيل التلقائي المصحوب بالصوت.',
        commonMistakes: {
            wrong: `<!-- محاولة تشغيل الفيديو تلقائياً دون كتم الصوت -->
<video autoplay src="video.mp4"></video>`,
            right: `<video autoplay muted loop playsinline src="video.mp4"></video>`,
            explanation: 'المتصفحات الحديثة تمنع التشغيل التلقائي (Autoplay) إذا لم يكن الفيديو مكتوم الصوت (Muted).'
        },
        thinkingWay: 'فكر في <video> كمشغل سينمائي مدمج داخل شاشتك يمتلك لوحة التحكم الخاصة به.',
        relatedMethods: ['html-audio', 'html-source'],
        keywords: ['<video>', 'video', 'autoplay', 'muted', 'controls', 'poster']
    },
    {
        id: 'html-audio',
        name: '<audio>',
        shortDescription: 'عنصر تضمين وتشغيل الملفات والتسجيلات الصوتية.',
        longDescription: 'وسم مخصص لتشغيل واستعراض الملفات الصوتية (MP3, WAV, OGG) مباشرة داخل الواجهة مع لوحة تحكم بالصوت.',
        difficulty: 'easy',
        importance: 'important',
        examples: [
            `<audio controls>
  <source src="podcast.mp3" type="audio/mpeg">
  متصفحك لا يدعم مشغل الصوت.
</audio>`
        ],
        expectedOutput: [
            'عرض شريط تشغيل الصوت الزمني مع أزرار التحكم بالصوت والتقديم.'
        ],
        professionalTips: 'استخدم سمة preload="none" للملفات الصوتية الثانوية لعدم استهلاك طاقة الشبكة قبل أن يضغط المستخدم زر التشغيل.',
        commonMistakes: {
            wrong: `<!-- نسيان إضافة سمة controls تجعل المشغل مخفياً تماماً -->
<audio src="sound.mp3"></audio>`,
            right: `<audio src="sound.mp3" controls></audio>`,
            explanation: 'بدون سمة controls يظل المشغل مخفياً في الـ DOM ولا يستطيع المستخدم التفاعل معه.'
        },
        thinkingWay: 'اعتبر <audio> بمثابة مسجل الصوت الرقمي المدمج في واجهتك.',
        relatedMethods: ['html-video', 'html-source'],
        keywords: ['<audio>', 'audio', 'sound player', 'controls', 'mp3']
    },
    {
        id: 'html-iframe',
        name: '<iframe>',
        shortDescription: 'إطار مضمن لعرض مستندات وصفحات ويب خارجية بالداخل.',
        longDescription: 'عنصر يُستخدم لتطعيم وتضمين صفحات أو موارد من مواقع خارجية (مثل خرائط Google، فيديوهات YouTube) داخل مستندك الحالي.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `<iframe 
  src="https://www.youtube.com/embed/example" 
  title="فيديو تعليمي" 
  width="560" 
  height="315" 
  loading="lazy">
</iframe>`
        ],
        expectedOutput: [
            'فتح نافذة مستقلة تضم الصفحة الخارجية المحددة بداخل الموقع.'
        ],
        professionalTips: 'احرص دائماً على إضافة سمة title وصفية لوسم <iframe>؛ لتوضيح فحوى الإطار المضمن لمستخدمي قارئات الشاشة.',
        commonMistakes: {
            wrong: `<!-- استخدام iframe بدون سمة title وصادقة الأمان -->
<iframe src="https://maps.google.com"></iframe>`,
            right: `<iframe src="https://maps.google.com" title="موقع المقر الرئيسي" loading="lazy"></iframe>`,
            explanation: 'نسيان title يمنع كبار السن والمكفوفين من معرفة محتوى الإطار المضمن.'
        },
        thinkingWay: 'فكر في <iframe> كنافذة زجاجية صغيرة في جدار بيتك تطل منها على حدائق موقع آخر.',
        relatedMethods: ['html-iframe-sandbox'],
        keywords: ['<iframe>', 'iframe', 'embedded page', 'embed youtube', 'maps']
    },
    {
        id: 'html-iframe-sandbox',
        name: 'sandbox Attribute',
        shortDescription: 'صندوق الحماية الأمني لتقييد صلاحيات وسكربتات الإطارات المضمنة.',
        longDescription: 'سمة أمان حتمية تُضاف لـ <iframe> لتطبيق حظر قسري على السكربتات والنوافذ المنبثقة وإرسال النماذج القادمة من المصادر غير الموثوقة.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `<!-- تضمين محتوى خارجي مع السماح بالسكربتات فقط دون صلاحيات المصادر -->
<iframe src="https://untrusted-site.com" title="موقع خارجي" sandbox="allow-scripts"></iframe>`
        ],
        expectedOutput: [
            'تقييد المحتوى المضمن وتجريده من القدرة على إعادة توجيه صفحتك أو اختراق الجلسة.'
        ],
        professionalTips: 'تحذير أمني صارم: تجنب الجمع بين allow-scripts و allow-same-origin في وسم sandbox واحد؛ لأن هذا المزيج يلغي الحماية تماماً ويتيح للإطار الالتفاف على القيود.',
        commonMistakes: {
            wrong: `<!-- الجمع بين الحكايتين يفتح ثغرة الالتفاف الأمنية -->
<iframe src="site.com" sandbox="allow-scripts allow-same-origin"></iframe>`,
            right: `<iframe src="site.com" sandbox="allow-scripts"></iframe>`,
            explanation: 'الجمع بين السكربتات والأصل الموحد يتيح للـ iframe حذف سمة sandbox برمجياً واختراق الصفحة الأصلية.'
        },
        thinkingWay: 'اعتبر sandbox بمثابة قفص الحجر الصحي المخصص للوافدين الجدد للتأكد من أمانهم.',
        relatedMethods: ['html-iframe'],
        keywords: ['sandbox', 'iframe security', 'XSS protection', 'security restriction']
    },
    {
        id: 'html-svg',
        name: '<svg>',
        shortDescription: 'الرسومات المتجهية القابلة للتكبير دون فقدان الجودة والتضمين المباشر.',
        longDescription: 'لغة رسم متجهات متكاملة مبنية على هيكلية XML؛ تتيح التضمين المباشر داخل مستندات HTML للتحكم بألوانها بـ CSS، أو الاستدعاء كصورة عبر <img>.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `<!-- تضمين رسم متجهي SVG مباشر لتغيير لونه بـ CSS -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
  <circle cx="12" cy="12" r="10" />
</svg>`
        ],
        expectedOutput: [
            'رسم الأشكال المتجهية عالية الدقة مباشرة وتغيير خصائصها البصرية.'
        ],
        professionalTips: 'استخدم التضمين المباشر لـ <svg> في الأيقونات التفاعلية التي تتطلب تغير ألوانها عند التمرير (Hover) عبر CSS، واستخدم <img> إذا كان الـ SVG رسماً ثابتاً ضخماً.',
        commonMistakes: {
            wrong: `<!-- تضمين كود SVG ضخم يتجاوز ألف سطر مباشرة داخل كل زر -->
<button><svg>...ألف سطر كود...</svg></button>`,
            right: `<button><img src="icon.svg" alt="أيقونة"></button>`,
            explanation: 'وضع أكواد SVG الضخمة جداً مباشرة يثقل حجم الـ DOM ويقلل من سرعة الصفحة.'
        },
        thinkingWay: 'فكر في <svg> كرسم هندسي بالفرجار والمسطرة؛ يحتفظ بحدته ونقائه مهما قمت بتكبيره.',
        relatedMethods: ['html-img'],
        keywords: ['<svg>', 'svg', 'vector graphics', 'icons', 'scalable graphics']
    }
];