import { categories } from '../categories.js';

// 1. مصفوفات الكروت الفرعية الرئيسية (التي تظهر كبطاقات كروت داخل الصفحة)
export const techTermsMainData = categories.filter(c => c.tech === 'tech-reference-sub' && c.id.startsWith('tech-terms'));
export const shortcutsMainData = categories.filter(c => c.tech === 'tech-reference-sub' && c.id.startsWith('shortcuts'));

// 2. بيانات مصطلحات HTML
export const techTermsHtmlData = [
    {
        id: 'term-dom',
        type: 'tech-reference',
        name: 'DOM (Document Object Model)',
        icon: 'https://www.google.com/s2/favicons?domain=developer.mozilla.org&sz=128',
        categoryId: 'tech-terms-html',
        shortDescription: 'تمثيل شجري لعناصر صفحة الويب يتيح للجافاسكريبت التعديل الديناميكي على HTML و CSS.',
        purpose: 'كيف تستفيد منه: استهداف وتغيير النصوص والألوان وإدراج العناصر تفاعلياً دون إعادة تحميل الصفحة.',
        features: ['هيكلية شجرية للعناصر', 'تحديث حي للـ DOM', 'ربط الأحداث بالتفاعل'],
        keywords: ['dom', 'javascript', 'html', 'nodes']
    },
    {
        id: 'term-semantic-html',
        type: 'tech-reference',
        name: 'Semantic HTML (العناصر الدلالية)',
        icon: 'https://www.google.com/s2/favicons?domain=developer.mozilla.org&sz=128',
        categoryId: 'tech-terms-html',
        shortDescription: 'استخدام وسوم تعبر عن معنى ومحتوى العنصر (مثل header, nav, article) لتحسين القراءة و SEO.',
        purpose: 'كيف تستفيد منه: توضيح هيكلية الصفحة لمحركات البحث وأدوات دعم إمكانية الوصول (Accessibility).',
        features: ['تحسين محركات البحث SEO', 'سهولة قراءة وهيكلة الكود', 'تحسين إمكانية الوصول'],
        keywords: ['semantic', 'html5', 'seo', 'accessibility']
    }
];

// 3. بيانات مصطلحات CSS
export const techTermsCssData = [
    {
        id: 'term-specificity',
        type: 'tech-reference',
        name: 'CSS Specificity (قوة التحديد)',
        icon: 'https://www.google.com/s2/favicons?domain=developer.mozilla.org&sz=128',
        categoryId: 'tech-terms-css',
        shortDescription: 'نظام حساب أولوية وقوة قواعد CSS التي يطبقها المتصفح على العناصر عند التعارض.',
        purpose: 'كيف تستفيد منه: معرفة أي قاعدة CSS ستفوز وتطبق على العنصر ومنع مشكلات عدم استجابة التنسيقات.',
        features: ['حساب أولوية المحددات', 'منع التعارضات التنسيقية', 'فهم القواعد المتقدمة'],
        keywords: ['css', 'specificity', 'cascade', 'styles']
    },
    {
        id: 'term-box-model',
        type: 'tech-reference',
        name: 'CSS Box Model (نموذج الصندوق)',
        icon: 'https://www.google.com/s2/favicons?domain=developer.mozilla.org&sz=128',
        categoryId: 'tech-terms-css',
        shortDescription: 'الهيكل الرباعي المحيط بكل عنصر في CSS ويتكون من: Content و Padding و Border و Margin.',
        purpose: 'كيف تستفيد منه: حساب الحجم والأبعاد والمسافات الفاصلة بين عناصر الواجهة بدقة متناهية.',
        features: ['تحكم دقيق بأبعاد العناصر', 'ضبط الهوامش الداخلية والخارجية', 'التحكم بنظام box-sizing'],
        keywords: ['box model', 'margin', 'padding', 'border', 'css']
    }
];

// 4. بيانات مصطلحات JavaScript
export const techTermsJsData = [
    {
        id: 'term-hoisting',
        type: 'tech-reference',
        name: 'JavaScript Hoisting (الرفع)',
        icon: 'https://www.google.com/s2/favicons?domain=developer.mozilla.org&sz=128',
        categoryId: 'tech-terms-js',
        shortDescription: 'سلوك محرك الجافاسكريبت بسحب إعلانات المتغيرات والدوال إلى أعلى النطاق قبل تنفيذ الكود.',
        purpose: 'كيف تستفيد منه: فهم كيفية معالجة محرك JS للمتغيرات والدوال وتجنب أخطاء النطاقات غير المتوقعة.',
        features: ['رفع التصريحات والدوال', 'فهم Temporal Dead Zone', 'حماية الكود من الأخطاء'],
        keywords: ['hoisting', 'javascript', 'scope', 'var', 'let']
    },
    {
        id: 'term-closure',
        type: 'tech-reference',
        name: 'JavaScript Closure (الإغلاق الذاكري)',
        icon: 'https://www.google.com/s2/favicons?domain=developer.mozilla.org&sz=128',
        categoryId: 'tech-terms-js',
        shortDescription: 'دالة تحتفظ بالوصول إلى المتغيرات في نطاقها الخارجي حتى بعد انتهاء تنفيذ الدالة المحيطة.',
        purpose: 'كيف تستفيد منه: إنشاء متغيرات خاصة (Private Variables) وحفظ الحالات الذاكرية بين الاستدعاءات.',
        features: ['حفظ النطاق الذاكري الخارجي', 'إنشاء الخصائص الخاصة', 'حماية حالات التطبيق'],
        keywords: ['closure', 'scope', 'javascript', 'functions']
    }
];

// 5. بيانات المصطلحات العامة
export const techTermsGeneralData = [
    {
        id: 'term-api',
        type: 'tech-reference',
        name: 'API (Application Programming Interface)',
        icon: 'https://www.google.com/s2/favicons?domain=developer.mozilla.org&sz=128',
        categoryId: 'tech-terms-general',
        shortDescription: 'واجهة برمجية تسمح للتطبيقات والأنظمة المختلفة بالتواصل وتبادل البيانات بآمان.',
        purpose: 'كيف تستفيد منه: جلب واستقبال البيانات (مثل الطقس والأسعار) من خوادم خارجية في تطبيقك.',
        features: ['ربط الأنظمة المختلفة', 'تأمين تبادل البيانات', 'تسهيل إعادة استخدام الخدمات'],
        keywords: ['api', 'rest', 'endpoint', 'json']
    },
    {
        id: 'term-cdn',
        type: 'tech-reference',
        name: 'CDN (Content Delivery Network)',
        icon: 'https://www.google.com/s2/favicons?domain=cloudflare.com&sz=128',
        categoryId: 'tech-terms-general',
        shortDescription: 'شبكة خوادم جغرافية موزعة تسارع تسليم الصور والملفات للزوار من أقرب خادم جغرافيا.',
        purpose: 'كيف تستفيد منه: تقليل وقت تحميل ملفات موقعك وزيادة السرعة والأمان وحماية الخادم.',
        features: ['تسريع التحميل الجغرافي', 'تخفيف الحمل عن الخادم الرئيسي', 'حماية ضد هجمات DDoS'],
        keywords: ['cdn', 'cloudflare', 'performance', 'cache']
    }
];

// 6. بيانات اختصارات Windows
export const shortcutsWindowsData = [
    {
        id: 'win-shortcut-clipboard',
        type: 'tech-reference',
        name: 'Win + V (حافظة النسخ المتقدمة)',
        icon: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=128',
        categoryId: 'shortcuts-windows',
        keys: 'Win + V',
        shortDescription: 'فتح حافظة نظام ويندوز لاستعراض واسترجاع آخر النصوص والصور المنسوخة.',
        purpose: 'كيف تستفيد منه: اللصق المتعدد لأكثر من نص وصورة منسوخة سابقة دون تكرار التنقل.',
        features: ['سجل متكامل للمنسوخات', 'دعم الصور والنصوص', 'تثبيت العناصر الهامة'],
        keywords: ['windows', 'shortcut', 'clipboard', 'win+v']
    }
];

// 7. بيانات اختصارات VS Code
export const shortcutsVscodeData = [
    {
        id: 'vsc-shortcut-palette',
        type: 'tech-reference',
        name: 'Ctrl + Shift + P (Command Palette)',
        icon: 'https://www.google.com/s2/favicons?domain=code.visualstudio.com&sz=128',
        categoryId: 'shortcuts-vscode',
        keys: 'Ctrl + Shift + P',
        shortDescription: 'لوحة الأوامر السريعة في VS Code للوصول الفوري لكافة الإعدادات والملحقات والأوامر.',
        purpose: 'كيف تستفيد منه: تشغيل أي إضافة أو ضبط التنسيق أو تغيير اللغة والثيم بضغطة زر واحدة.',
        features: ['وصول خاطف لجميع الأوامر', 'بحث بالاسم والوظيفة', 'سرعة التنفيذ'],
        keywords: ['vscode', 'command palette', 'shortcut']
    }
];

// 8. بيانات اختصارات Chrome
export const shortcutsChromeData = [
    {
        id: 'chrome-shortcut-devtools',
        type: 'tech-reference',
        name: 'F12 / Ctrl + Shift + I (DevTools)',
        icon: 'https://www.google.com/s2/favicons?domain=developer.chrome.com&sz=128',
        categoryId: 'shortcuts-chrome',
        keys: 'F12',
        shortDescription: 'فتح أدوات المطورين في متصفح قوقل كروم لفحص عناصر الـ DOM والأكواد والشبكة.',
        purpose: 'كيف تستفيد منه: فحص الأخطاء البرمجية (Console)، تعديل CSS حياً، وااختبار استجابة الشاشة.',
        features: ['معاينة عناصر الصفحة حياً', 'مراقبة أداء الشبكة Network', 'تشغيل كود جافاسكربت فوراً'],
        keywords: ['chrome', 'devtools', 'f12', 'shortcut']
    }
];

// 9. بيانات اختصارات Photoshop
export const shortcutsPhotoshopData = [
    {
        id: 'ps-shortcut-transform',
        type: 'tech-reference',
        name: 'Ctrl + T (Free Transform)',
        icon: 'https://www.google.com/s2/favicons?domain=adobe.com&sz=128',
        categoryId: 'shortcuts-photoshop',
        keys: 'Ctrl + T',
        shortDescription: 'التحكم الحر في أبعاد ومقاسات وتدوير الطبقات والعناصر في أدوبي فوتوشوب.',
        purpose: 'كيف تستفيد منه: تكبير وتصغير وتعديل زوايا العناصر والطبقات بدقة متناهية.',
        features: ['تحكّم مرن بالأبعاد', 'تدوير وتشويه الزوايا', 'حفظ النسبة والتناسب'],
        keywords: ['photoshop', 'transform', 'ctrl+t', 'design']
    }
];

// 3. صيغ الملفات البرمجية
export const fileFormatsData = [
    {
        id: 'fmt-json',
        type: 'tech-reference',
        name: 'JSON (.json)',
        icon: 'https://www.google.com/s2/favicons?domain=www.json.org&sz=128',
        categoryId: 'file-formats',
        shortDescription: 'صيغة البيانات النصية المعيارية الأكثر استخداماً لتبادل البيانات بين الخوادم والواجهات.',
        purpose: 'كيف تستفيد منه: نقل البيانات القادمة من الـ APIs وتخزين إعدادات التطبيق بأسلوب سهل القراءة.',
        features: ['حجم نصي خفيف جداً', 'سهل القراءة للإنسان والحاسوب', 'مدعوم في جميع اللغات'],
        keywords: ['json', 'format', 'api', 'data']
    }
];

// 4. صيغ الصور الرقمية
export const imageFormatsData = [
    {
        id: 'fmt-webp',
        type: 'tech-reference',
        name: 'WebP (.webp)',
        icon: 'https://www.google.com/s2/favicons?domain=developers.google.com&sz=128',
        categoryId: 'image-formats',
        shortDescription: 'صيغة الصور الحديثة المبتكرة من قوقل لضغط الصور بحجم صغير جداً دون فقدان الجودة.',
        purpose: 'كيف تستفيد منه: تسريع سرعة تحميل صفحات موقعك وتقليل استهلاك الباندويث بشكل ضخم.',
        features: ['ضغط حجم فائق تصل لـ 30%', 'دعم الشفافية والأنيميشن', 'مدعوم بكافة المتصفحات الحديثة'],
        keywords: ['webp', 'google', 'image format', 'performance']
    }
];

// 5. صيغ الفيديوهات والوسائط
export const videoFormatsData = [
    {
        id: 'fmt-webm',
        type: 'tech-reference',
        name: 'WebM (.webm)',
        icon: 'https://www.google.com/s2/favicons?domain=www.webmproject.org&sz=128',
        categoryId: 'video-formats',
        shortDescription: 'صيغة الفيديو المفتوحة المخصصة للويب المتميزة بحجم خفيف جداً وجودة عالية.',
        purpose: 'كيف تستفيد منه: تشغيل مقاطع الفيديو الخلفية الشفافة والتفاعلية في الموقع بدون بطء.',
        features: ['دعم الفيديو بدون خلفية (Transparent Video)', 'حجم خفيف جداً للويب', 'أداء تشغيل سلس'],
        keywords: ['webm', 'video format', 'transparent video', 'html5']
    }
];