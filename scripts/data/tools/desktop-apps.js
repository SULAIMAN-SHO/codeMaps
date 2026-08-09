// 1. تطبيقات تصوير وتسجيل الشاشة
export const appsScreenRecordingData = [
    {
        id: 'app-obs-studio',
        type: 'app',
        name: 'OBS Studio',
        icon: 'https://www.google.com/s2/favicons?domain=obsproject.com&sz=128',
        categoryId: 'apps-screen-recording',
        shortDescription: 'البرنامج المفتوح المصدر الأول عالمياً لتسجيل الشاشة والبث المباشر عالي الدقة.',
        url: 'https://obsproject.com/',
        pricing: 'مجاني ومفتوح المصدر',
        purpose: 'كيف تستفيد منه: تسجيل الشروحات البرمجية والبث المباشر للشاشة بأداء رسومي عالٍ.',
        features: ['تسجيل فيديو 60fps عالي الدقة', 'دعم مصادر صوت ومشاهد متعددة', 'مجاني وبدون علامة مائية'],
        keywords: ['obs', 'screen recorder', 'streaming', 'desktop app']
    },
    {
        id: 'app-sharex',
        type: 'app',
        name: 'ShareX',
        icon: 'https://www.google.com/s2/favicons?domain=getsharex.com&sz=128',
        categoryId: 'apps-screen-recording',
        shortDescription: 'أداة الالتقاط والتسجيل السريع للشاشة ورفع مقاطع الـ GIF والصور فوراً.',
        url: 'https://getsharex.com/',
        pricing: 'مجاني ومفتوح المصدر',
        purpose: 'كيف تستفيد منه: التقاط صور ومقاطع فيديو سريعة للكود والواجهات ومشاركتها برابط.',
        features: ['تسجيل الشاشة بصيغة GIF و MP4', 'رفع أوتوماتيكي ومشاركة السحابة', 'أدوات تحرير مدمجة'],
        keywords: ['sharex', 'screen capture', 'gif', 'desktop app']
    }
];

// 2. تطبيقات ومحررات الفيديو
export const appsVideoEditingData = [
    {
        id: 'app-capcut-desktop',
        type: 'app',
        name: 'CapCut Desktop',
        icon: 'https://www.google.com/s2/favicons?domain=capcut.com&sz=128',
        categoryId: 'apps-video-editing',
        shortDescription: 'برنامج تحرير ومونتاج الفيديو العصري الأشهر والأسهل على الحاسوب بالذكاء الاصطناعي.',
        url: 'https://www.capcut.com/',
        pricing: 'مجاني / أدوات ذكية Pro',
        purpose: 'كيف تستفيد منه: قص ومونتاج المقاطع التوضيحية لمشروعاتك وإضافة نصوص توضيحية وتأثيرات.',
        features: ['توليد نصوص تلقائية بالشاشة', 'مكتبة انتقالات ومؤثرات حديثة', 'تصدير فيديو بدقة 4K'],
        keywords: ['capcut', 'video editor', 'desktop app', 'media']
    },
    {
        id: 'app-davinci-resolve',
        type: 'app',
        name: 'DaVinci Resolve',
        icon: 'https://www.google.com/s2/favicons?domain=www.blackmagicdesign.com&sz=128',
        categoryId: 'apps-video-editing',
        shortDescription: 'البرنامج السينمائي الاحترافي الشامل لمونتاج وتعديل ألوان وهندسة الصوت للفيديوهات.',
        url: 'https://www.blackmagicdesign.com/products/davinciresolve',
        pricing: 'نسخة مجانية احترافية / Studio',
        purpose: 'كيف تستفيد منه: إنشاء وتصدير فيديوهات وشروحات تقنية ذات طابع سينمائي ونقاء ألوان عالي.',
        features: ['تصحيح وتعديل ألوان احترافي', 'محرر صوت Fairlight مدمج', 'مؤثرات بصرية Fusion'],
        keywords: ['davinci', 'video editor', 'color grading', 'desktop app']
    }
];

// 3. تطبيقات التحميل وإدارة الملفات
export const appsDownloadManagersData = [
    {
        id: 'app-fdm',
        type: 'app',
        name: 'Free Download Manager (FDM)',
        icon: 'https://www.google.com/s2/favicons?domain=www.freedownloadmanager.org&sz=128',
        categoryId: 'apps-download-managers',
        shortDescription: 'أقوى مدير تحميلات مجاني وخفيف يدعم استئناف التحميلات والملفات الضخمة والـ Torrent.',
        url: 'https://www.freedownloadmanager.org/',
        pricing: 'مجاني بالكامل',
        purpose: 'كيف تستفيد منه: تسريع جلب الملفات والحزم الضخمة واستئناف التحميل عند انقطاع الشبكة.',
        features: ['تسريع سرعة التحميل إلى 10 أضعاف', 'استئناف التحميلات المتوقفة', 'دعم ملفات الـ Torrent'],
        keywords: ['fdm', 'download manager', 'torrents', 'desktop app']
    },
    {
        id: 'app-7zip',
        type: 'app',
        name: '7-Zip',
        icon: 'https://www.google.com/s2/favicons?domain=www.7-zip.org&sz=128',
        categoryId: 'apps-download-managers',
        shortDescription: 'الأداة القياسية الخفيفة الأولى لضغط وتفريغ حزم الملفات والمجلدات البرمجية.',
        url: 'https://www.7-zip.org/',
        pricing: 'مجاني ومفتوح المصدر',
        purpose: 'كيف تستفيد منه: ضغط وحماية وفك ضغط ملفات ZIP و RAR وحزم المشروع.',
        features: ['معدل ضغط عالي جداً 7z', 'خفيف جداً على النظام', 'دعم كافة الصيغ'],
        keywords: ['7zip', 'zip', 'compress', 'archiver']
    }
];

// 4. برامج وأدوات المطورين الأساسية
export const appsDeveloperToolsData = [
    {
        id: 'app-vscode',
        type: 'app',
        name: 'Visual Studio Code',
        icon: 'https://www.google.com/s2/favicons?domain=code.visualstudio.com&sz=128',
        categoryId: 'apps-developer-tools',
        shortDescription: 'محرر الأكواد المكتبي الأول عالمياً المجهز بآلاف الملحقات والذكاء الاصطناعي.',
        url: 'https://code.visualstudio.com/',
        pricing: 'مجاني ومفتوح المصدر',
        purpose: 'كيف تستفيد منه: تحرير وكتابة وتطوير وتصحيح الكود لجميع لغات وتقنيات البرمجة.',
        features: ['دعم الملحقات والمجموعات', 'تكامل تام مع Git والـ Terminal', 'إكمال كود ذكي حياً'],
        keywords: ['vscode', 'editor', 'code editor', 'developer']
    },
    {
        id: 'app-docker',
        type: 'app',
        name: 'Docker Desktop',
        icon: 'https://www.google.com/s2/favicons?domain=www.docker.com&sz=128',
        categoryId: 'apps-developer-tools',
        shortDescription: 'بيئة الحاويات الافتراضية الأولى لبناء وتشغيل وتغليف التطبيقات وتسهيل نشرها.',
        url: 'https://www.docker.com/products/docker-desktop/',
        pricing: 'مجاني للأفراد / Pro',
        purpose: 'كيف تستفيد منه: تشغيل تطبيقاتك وقواعد البيانات داخل بيئات معزولة (Containers) تضمن عملها على أي جهاز.',
        features: ['إدارة الحاويات ببيئة رسومية', 'دعم قواعد البيانات والخدمات', 'تغليف التطبيقات للنشر'],
        keywords: ['docker', 'containers', 'devops', 'desktop app']
    },
    {
        id: 'app-postman',
        type: 'app',
        name: 'Postman',
        icon: 'https://www.google.com/s2/favicons?domain=www.postman.com&sz=128',
        categoryId: 'apps-developer-tools',
        shortDescription: 'التطبيق القياسي العالمي لاختبار وتوثيق واستكشاف واجهات برمجة التطبيقات (REST APIs).',
        url: 'https://www.postman.com/downloads/',
        pricing: 'مجاني / Pro',
        purpose: 'كيف تستفيد منه: إرسال واختبار الطلبات البرمجية (GET, POST) ومعاينة الاستجابات وتشخيص مشاكل الـ APIs.',
        features: ['اختبار واستكشاف الـ APIs', 'أنظمة توثيق واستجابات حية', 'دعوات وتعاون المطورين'],
        keywords: ['postman', 'api', 'testing', 'desktop app']
    },
    {
        id: 'app-github-desktop',
        type: 'app',
        name: 'GitHub Desktop',
        icon: 'https://www.google.com/s2/favicons?domain=desktop.github.com&sz=128',
        categoryId: 'apps-developer-tools',
        shortDescription: 'تطبيق الواجهة الرسومية الرسمية من GitHub لإدارة مستودعات الكود وتتبع التعديلات.',
        url: 'https://desktop.github.com/',
        pricing: 'مجاني بالكامل',
        purpose: 'كيف تستفيد منه: إدارة الفروع (Branches) وإجراء الـ Commits والـ Push ببساطة دون الحاجة لكتابة أوامر Git.',
        features: ['واجهة رسومية بسيطة لإدارة Git', 'مقارنة الفروقات بين الأسطر', 'دمج مباشر مع GitHub'],
        keywords: ['github desktop', 'git', 'gui', 'desktop app']
    }
];

// 5. البيئات والمنصات التنفيذية والمكتبات
export const appsRuntimesLibrariesData = [
    {
        id: 'app-nodejs',
        type: 'app',
        name: 'Node.js',
        icon: 'https://www.google.com/s2/favicons?domain=nodejs.org&sz=128',
        categoryId: 'apps-runtimes-libraries',
        shortDescription: 'البيئة التنفيذية المعتمدة عالمياً لتشغيل كود الجافاسكريبت خارج المتصفح وعلى الخوادم.',
        url: 'https://nodejs.org/',
        pricing: 'مجاني ومفتوح المصدر',
        purpose: 'كيف تستفيد منه: تشغيل خوادم الباك إند وأدوات بناء الفرونت إند وإدارة حزم npm.',
        features: ['محرك V8 فائق السرعة', 'أكبر بيئة حزم عالمية npm', 'دعم الأداء غير المتزامن'],
        keywords: ['nodejs', 'runtime', 'javascript', 'npm']
    },
    {
        id: 'app-bun',
        type: 'app',
        name: 'Bun',
        icon: 'https://www.google.com/s2/favicons?domain=bun.sh&sz=128',
        categoryId: 'apps-runtimes-libraries',
        shortDescription: 'أسرع بيئة تنفيذية ومحرك تثبيت حزم خفيف متوافق كلياً مع نظام Node.js.',
        url: 'https://bun.sh/',
        pricing: 'مجاني ومفتوح المصدر',
        purpose: 'كيف تستفيد منه: تثبيت حزم npm وتشغيل سكريبتات TypeScript و JavaScript بلمح البصر.',
        features: ['تثبيت حزم npm بسرعة خيالية', 'دعم TypeScript أوتوماتيكياً', 'محرك متكامل متوافق'],
        keywords: ['bun', 'runtime', 'package manager', 'fast']
    },
    {
        id: 'app-ffmpeg',
        type: 'app',
        name: 'FFmpeg',
        icon: 'https://www.google.com/s2/favicons?domain=ffmpeg.org&sz=128',
        categoryId: 'apps-runtimes-libraries',
        shortDescription: 'المحرك البرمجي القياسي العالمي لمعالجة وتحويل وضغط وسائط الصوت والفيديو.',
        url: 'https://ffmpeg.org/',
        pricing: 'مجاني ومفتوح المصدر',
        purpose: 'كيف تستفيد منه: معالجة وقص وتحويل صيغ مقاطع الصوت والفيديو برمجياً عبر السطر البرمجي.',
        features: ['معالجة جميع صيغ الوسائط', 'أداء تحويل وتأطير عالي', 'مكتبة مدمجة في كبار البرامج'],
        keywords: ['ffmpeg', 'video processing', 'audio', 'cli']
    }
];

// 6. تطبيقات الحماية والخزائن الرقمية
export const appsSecurityPrivacyData = [
    {
        id: 'app-bitwarden',
        type: 'app',
        name: 'Bitwarden',
        icon: 'https://www.google.com/s2/favicons?domain=bitwarden.com&sz=128',
        categoryId: 'apps-security-privacy',
        shortDescription: 'الخزينة المفتوحة المصدر الأولى لإدارة وتأمين وحفظ كلمات المرور الحساسة ومفاتيح API.',
        url: 'https://bitwarden.com/',
        pricing: 'مجاني ومفتوح المصدر',
        purpose: 'كيف تستفيد منه: الحفاظ على كلمات المرور الحساسة وتوليد مفاتيح مشفرة قوية ومزامنتها عبر أجهزتك.',
        features: ['تشفير كلي ذاتي Zero-Knowledge', 'مزامنة آمنة بين الهواتف والحاسوب', 'توليد كلمات سر معقدة'],
        keywords: ['bitwarden', 'passwords', 'vault', 'security']
    }
];

// 7. برامج التحكم والوصول عن بُعد
export const appsRemoteDesktopData = [
    {
        id: 'app-anydesk',
        type: 'app',
        name: 'AnyDesk',
        icon: 'https://www.google.com/s2/favicons?domain=anydesk.com&sz=128',
        categoryId: 'apps-remote-desktop',
        shortDescription: 'برنامج التحكم المباشر والسريع بسطح المكتب ومشاركة الشاشة ومساعدة الفريق عن بُعد.',
        url: 'https://anydesk.com/',
        pricing: 'مجاني للاستخدام الشخصي',
        purpose: 'كيف تستفيد منه: الدعم الفني السريع والتحكم بحاسوبك أو خادمك الشخصي من أي مكان.',
        features: ['سرعة استجابة واستعراض فائقة', 'تأمين الاتصالات المشفرة', 'سهولة الاتصال بكود'],
        keywords: ['anydesk', 'remote desktop', 'screen share', 'support']
    }
];

// 8. واجهات وإدارة قواعد البيانات
export const appsDatabaseGuisData = [
    {
        id: 'app-dbeaver',
        type: 'app',
        name: 'DBeaver',
        icon: 'https://www.google.com/s2/favicons?domain=dbeaver.io&sz=128',
        categoryId: 'apps-database-guis',
        shortDescription: 'الواجهة الرسومية الشاملة المفتوحة المصدر لإدارة وقراءة جميع أنواع قواعد البيانات.',
        url: 'https://dbeaver.io/',
        pricing: 'مجاني ومفتوح المصدر',
        purpose: 'كيف تستفيد منه: الاتصال وإجراء الاستعلامات (SQL queries) واستعراض شجرة البيانات.',
        features: ['دعم PostgreSQL, MySQL, SQLite, Oracle', 'معاينة رسومية للجداول', 'تصدير واستيراد البيانات'],
        keywords: ['dbeaver', 'database', 'sql', 'gui']
    },
    {
        id: 'app-tableplus',
        type: 'app',
        name: 'TablePlus',
        icon: 'https://www.google.com/s2/favicons?domain=tableplus.com&sz=128',
        categoryId: 'app',
        shortDescription: 'التطبيق المكتبي العصري الأنيق لإدارة قواعد البيانات بخفة وأداء عالي.',
        url: 'https://tableplus.com/',
        pricing: 'مجاني / Pro',
        purpose: 'كيف تستفيد منه: التعديل المباشر الموثوق على البيانات والتحكم في الخوادم والسيرفرات.',
        features: ['أداء خفيف وسريع جداً', 'واجهة مظلمة متناسقة', 'تنسيق الاستعلامات المباشر'],
        keywords: ['tableplus', 'sql', 'database', 'mysql']
    }
];