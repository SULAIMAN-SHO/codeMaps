// 1. تطبيقات تصوير وتسجيل الشاشة
export const appsScreenRecordingData = [
    {
        id: 'app-obs-studio',
        type: 'app',
        name: 'OBS Studio',
        icon: 'assets/icons/OBS Studio.png',
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
        icon: 'assets/icons/ShareX.png',
        categoryId: 'apps-screen-recording',
        shortDescription: 'أداة الالتقاط والتسجيل السريع للشاشة ورفع مقاطع الـ GIF والصور فوراً.',
        url: 'https://getsharex.com/',
        pricing: 'مجاني ومفتوح المصدر',
        purpose: 'كيف تستفيد منه: التقاط صور ومقاطع فيديو سريعة للكود والواجهات ومشاركتها برابط.',
        features: ['تسجيل الشاشة بصيغة GIF و MP4', 'رفع أوتوماتيكي ومشاركة السحابة', 'أدوات تحرير مدمجة'],
        keywords: ['sharex', 'screen capture', 'gif', 'desktop app']
    },
    {
        id: 'app-ocam',
        type: 'app',
        name: 'oCam Screen Recorder',
        icon: 'assets/icons/oCam.png',
        categoryId: 'apps-screen-recording',
        shortDescription: 'برنامج مكتبي فائق الخفة والسرعة لتسجيل الشاشة والألعاب بأعلى دقة وبدون بطء.',
        url: 'https://ohsoft.net/eng/ocam.php#download-button',
        pricing: 'مجاني للاستخدام الشخصي',
        purpose: 'كيف تستفيد منه: التقاط الشاشة وتسجيل الفيديوهات البرمجية بسرعة وخفة متناهية على النظام.',
        features: ['تسجيل شاشة فائق الخفة', 'تسجيل الألعاب 60fps', 'دعم التقاط الصوت المباشر'],
        keywords: ['ocam', 'screen recorder', 'lightweight', 'desktop app']
    },
    {
        id: 'app-streamlabs',
        type: 'app',
        name: 'Streamlabs Desktop',
        icon: 'assets/icons/Streamlabs.png',
        categoryId: 'apps-screen-recording',
        shortDescription: 'المنصة المكتبيّة الاحترافية الشاملة للبث المباشر وتسجيل الشاشة مع التأثيرات والطبقات.',
        url: 'https://streamlabs.com/',
        pricing: 'مجاني / Pro',
        purpose: 'كيف تستفيد منه: بث وتجهيز الشروحات التوضيحية مع التنبيهات المباشرة والتأثيرات البصرية.',
        features: ['واجهة بث ومونتاج مجهزة', 'مكتبة تنبيهات وقوالب متكاملة', 'أداء عالي المعالجة'],
        keywords: ['streamlabs', 'streaming', 'screen recorder', 'obs']
    },
    {
        id: 'app-awesome-screen-recorder',
        type: 'app',
        name: 'Awesome Screen Recorder',
        icon: 'assets/icons/Screen Recorder.png',
        categoryId: 'apps-screen-recording',
        shortDescription: 'إضافة متصفح كروم السريعة لتسجيل تبويبات الويب والتقاط الشاشة وتوليد الـ GIF أونلاين.',
        url: 'https://chromewebstore.google.com/detail/awesome-screen-recorder-s/nlipoenfbbikpbjkfpfillcgkoblgpmj',
        pricing: 'مجاني / إضافة متصفح',
        purpose: 'كيف تستفيد منه: تسجيل وتفريغ شاشات المتصفح السريعة دون الحاجة لتثبيت برامج خافية.',
        features: ['تسجيل تبويبات المتصفح مباشرة', 'التقاط الشاشة الكاملة كصور', 'تصدير مقاطع GIF و MP4'],
        keywords: ['awesome screen recorder', 'chrome extension', 'screen capture']
    }
];

// 2. تطبيقات ومحررات الفيديو
export const appsVideoEditingData = [
    {
        id: 'app-capcut-desktop',
        type: 'app',
        name: 'CapCut Desktop',
        icon: 'assets/icons/capcut.png',
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
        icon: 'assets/icons/DaVinci_Resolve_Studio.png',
        categoryId: 'apps-video-editing',
        shortDescription: 'البرنامج السينمائي الاحترافي الشامل لمونتاج وتعديل ألوان وهندسة الصوت للفيديوهات.',
        url: 'https://www.blackmagicdesign.com/products/davinciresolve',
        pricing: 'نسخة مجانية احترافية / Studio',
        purpose: 'كيف تستفيد منه: إنشاء وتصدير فيديوهات وشروحات تقنية ذات طابع سينمائي ونقاء ألوان عالي.',
        features: ['تصحيح وتعديل ألوان احترافي', 'محرر صوت Fairlight مدمج', 'مؤثرات بصرية Fusion'],
        keywords: ['davinci', 'video editor', 'color grading', 'desktop app']
    },
    {
        id: 'app-adobe-premiere',
        type: 'app',
        name: 'Adobe Premiere Pro كراك',
        icon: 'assets/icons/Adobe Premiere Pro.webp',
        categoryId: 'apps-video-editing',
        shortDescription: 'البرنامج القياسي العالمي المعتمد لمونتاج وتحرير الفيديو الاحترافي وصناعة الأفلام.',
        url: 'https://drive.usercontent.google.com/download?id=1EJZp5y3_qOEUfqfCg_wr256P4emeIYZV&export=download&authuser=1&confirm=t&uuid=2a7d9caf-7f13-4cae-8a65-0b1e5a2dbdb3&at=AFYLz4NVhgEb9gbXHiNm9RwjHWCo:1786437328619',
        pricing: 'تجربة مجانية نسخة 2025 / للتعليم',
        purpose: 'كيف تستفيد منه: مونتاج الفيديوهات بدقة عالية وتعديل الألوان والقص وإضافة المؤثرات البصرية والصوتية.',
        features: ['أدوات تحرير ومونتاج متقدمة', 'تكامل تام مع أدوبي افترافكتس', 'دعم الذكاء الاصطناعي Adobe Sensei'],
        keywords: ['Crack', 'premiere', 'video editor', 'desktop app']
    },
    {
        id: 'app-youcut',
        type: 'app',
        name: 'YouCut Video Editor (Android)',
        icon: 'assets/icons/YouCut.webp',
        categoryId: 'apps-video-editing',
        shortDescription: 'تطبيق مونتاج وتحرير الفيديو السريع للهواتف الذكية مجاني بالكامل وبدون علامة مائية.',
        url: 'https://play.google.com/store/apps/details?id=com.camerasideas.trimmer',
        pricing: 'مجاني (أندرويد)',
        purpose: 'كيف تستفيد منه: (مخصص لنظام أندرويد Android) قص ومونتاج الفيديوهات وتجميع المقاطع بسرعة على الهاتف.',
        features: ['مخصص لنظام الهواتف (Android)', 'بدون علامة مائية مجاناً', 'تصدير فيديو عالي الدقة'],
        keywords: ['youcut', 'video editor', 'android', 'mobile app']
    },
    {
        id: 'app-inshot',
        type: 'app',
        name: 'InShot Video Editor (Android)',
        icon: 'assets/icons/lnShot.webp',
        categoryId: 'apps-video-editing',
        shortDescription: 'محرر ومصمم الفيديوهات والصور الشامل للهواتف الذكية لإضافة الموسيقى والتأثيرات.',
        url: 'https://play.google.com/store/apps/details?id=com.camerasideas.instashot',
        pricing: 'مجاني / Pro (أندرويد)',
        purpose: 'كيف تستفيد منه: (مخصص لنظام أندرويد Android) تعديل مقاطع الفيديو وإضافة الصوتيات والتأثيرات للهاتف.',
        features: ['مخصص لنظام الهواتف (Android)', 'مكتبة تأثيرات وموسيقى واسعة', 'تعديل الصور والفيديوهات'],
        keywords: ['inshot', 'video editor', 'android', 'mobile app']
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
        id: 'app-idm',
        type: 'app',
        name: 'Internet Download Manager (IDM)',
        icon: 'https://www.google.com/s2/favicons?domain=www.internetdownloadmanager.com&sz=128',
        categoryId: 'apps-download-managers',
        shortDescription: 'برنامج إدارة وتسريع تحميل الملفات والفيديوهات المكتبي الأشهر عالمياً.',
        url: 'https://www.internetdownloadmanager.com/',
        pricing: 'تجربة مجانية / ترخيص مدفوع',
        purpose: 'كيف تستفيد منه: جلب الملفات والفيديوهات الكبيرة واستئناف التحميلات بنقرة واحدة.',
        features: ['تسريع التحميل إلى 5 أضعاف', 'تكامل تام مع المتصفحات', 'استئناف التحميلات المقطوعة'],
        keywords: ['idm', 'internet download manager', 'download', 'desktop app']
    },
    {
        id: 'app-qbittorrent',
        type: 'app',
        name: 'qBittorrent',
        icon: 'https://www.google.com/s2/favicons?domain=www.qbittorrent.org&sz=128',
        categoryId: 'apps-download-managers',
        shortDescription: 'تطبيق الـ Torrent المفتوح المصدر الأقوى والخالي تماماً من الإعلانات والبرامج الضارة.',
        url: 'https://www.qbittorrent.org/download',
        pricing: 'مجاني ومفتوح المصدر',
        purpose: 'كيف تستفيد منه: تحميل الملفات والحزم الضخمة عبر شبكة التورنت بآمان وبدون برمجيات إعلانية.',
        features: ['بديل مفتوح المصدر لـ uTorrent', 'خالٍ تماماً من الإعلانات', 'محرك بحث تورنت مدمج'],
        keywords: ['qbittorrent', 'torrent', 'magnet', 'open source']
    },
    {
        id: 'app-jdownloader',
        type: 'app',
        name: 'JDownloader 2',
        icon: 'https://www.google.com/s2/favicons?domain=jdownloader.org&sz=128',
        categoryId: 'apps-download-managers',
        shortDescription: 'برنامج التحميل المكتبي المفتوح المصدر الفائق للتعامل مع مواقع الاستضافة وروابط التحميل المعقدة.',
        url: 'https://jdownloader.org/',
        pricing: 'مجاني ومفتوح المصدر',
        purpose: 'كيف تستفيد منه: جلب واستخراج التحميلات دفعة واحدة من مواقع الاستضافة وحل الكابتشا أوتوماتيكياً.',
        features: ['استخراج وجلب الروابط تلقائياً', 'فك وتفريغ الأرشيف أوتوماتيكياً', 'دعم مئات مواقع الاستضافة'],
        keywords: ['jdownloader', 'download manager', 'open source', 'batch download']
    },
    {
        id: 'app-apkpure',
        type: 'app',
        name: 'APKPure (Android App Store)',
        icon: 'https://www.google.com/s2/favicons?domain=apkpure.com&sz=128',
        categoryId: 'apps-download-managers',
        shortDescription: 'متجر ومستودع تطبيقات الأندرويد الحر لتحميل ملفات APK و XAPK المباشرة للهواتف الذكية.',
        url: 'https://apkpure.com/',
        pricing: 'مجاني بالكامل (أندرويد)',
        purpose: 'كيف تستفيد منه: (مخصص لنظام أندرويد Android) تحميل حزم التطبيقات المباشرة وتثبيتها على الهاتف.',
        features: ['مخصص لنظام الهواتف (Android)', 'تحميل مباشر لحزم APK و XAPK', 'تجاوز الحظر الجغرافي للتطبيقات'],
        keywords: ['apkpure', 'android', 'apk', 'mobile store']
    },
    {
        id: 'app-7zip',
        type: 'app',
        name: '7-Zip',
        icon: 'https://www.7-zip.org/7ziplogo.png',
        categoryId: 'apps-download-managers',
        shortDescription: 'الأداة القياسية الخفيفة الأولى لضغط وتفريغ حزم الملفات والمجلدات البرمجية.',
        url: 'https://www.7-zip.org/',
        pricing: 'مجاني ومفتوح المصدر',
        purpose: 'كيف تستفيد منه: ضغط وحماية وفك ضغط ملفات ZIP و RAR وحزم المشروع.',
        features: ['معدل ضغط عالي جداً 7z', 'خفيف جداً على النظام', 'دعم كافة الصيغ'],
        keywords: ['7zip', 'zip', 'compress', 'archiver']
    },
    {
        id: 'app-winrar',
        type: 'app',
        name: 'WinRAR',
        icon: 'https://www.win-rar.com/uploads/pics/rar-archive_87.png',
        categoryId: 'apps-download-managers',
        shortDescription: 'أشهر برنامج مكتبي عالمياً لضغط وفك ضغط ملفات وحزم RAR و ZIP بحماية وحجم خفيف.',
        url: 'https://www.winrar.com/',
        pricing: 'تجربة مجانية / ترخيص',
        purpose: 'كيف تستفيد منه: فك وحماية ضغط حزم وملفات الـ RAR والـ ZIP المنسوخة أونلاين بآمان.',
        features: ['فك وتفريغ ملفات RAR و ZIP', 'حماية الحزم بكلمات سر معقدة', 'تقسيم الملفات الضخمة'],
        keywords: ['winrar', 'rar', 'zip', 'compress', 'archiver']
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
        id: 'app-android-studio',
        type: 'app',
        name: 'Android Studio',
        icon: 'https://www.google.com/s2/favicons?domain=developer.android.com&sz=128',
        categoryId: 'apps-developer-tools',
        shortDescription: 'بيئة التطوير المكتبيّة الرسمية المعتمدة عالمياً لبناء واختبار تطبيقات الأندرويد.',
        url: 'https://developer.android.com/studio',
        pricing: 'مجاني ومفتوح المصدر',
        purpose: 'كيف تستفيد منه: كتابة وتجربة وتنقيب وتدشين تطبيقات الهواتف الذكية مع المحاكي المدمج (Emulator).',
        features: ['محاكي أندرويد مدمج عالي الدقة', 'دعم Kotlin و Java', 'أدوات تحليل أداء التطبيقات'],
        keywords: ['android studio', 'android', 'kotlin', 'mobile app']
    },
    {
        id: 'app-git',
        type: 'app',
        name: 'Git (Version Control)',
        icon: 'https://www.google.com/s2/favicons?domain=git-scm.com&sz=128',
        categoryId: 'apps-developer-tools',
        shortDescription: 'نظام تتبع وإدارة الإصدارات البرمجية الموزع القياسي الأول عالمياً لكافة المطورين.',
        url: 'https://git-scm.com/',
        pricing: 'مجاني ومفتوح المصدر',
        purpose: 'كيف تستفيد منه: تتبع سجل التعديلات، وإنشاء الفروع (Branches)، ودمج الكود دون خوف من فقدان العمل.',
        features: ['إدارة إصدارات الكود', 'تفرع ودمج التغييرات', 'معيار عالمي موحد'],
        keywords: ['git', 'version control', 'scm', 'developer tools']
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
    },
    {
        id: 'app-intellij',
        type: 'app',
        name: 'IntelliJ IDEA',
        icon: 'https://www.google.com/s2/favicons?domain=www.jetbrains.com&sz=128',
        categoryId: 'apps-developer-tools',
        shortDescription: 'بيئة التطوير المكتبيّة الرائدة من JetBrains لبناء تطبيقات Java و Kotlin البرمجية.',
        url: 'https://www.jetbrains.com/idea/',
        pricing: 'نسخة مجانية / Ultimate',
        purpose: 'كيف تستفيد منه: تحرير وتطوير المشاريع الضخمة المعقدة مع أسرع محرك تحليل واكتشاف أخطاء.',
        features: ['إكمال كود ذكي للغاية', 'تحليل وفحص برجمي دقيق', 'دعم شامل لأطر العمل'],
        keywords: ['intellij', 'jetbrains', 'java', 'kotlin']
    },
    {
        id: 'app-xcode',
        type: 'app',
        name: 'Xcode',
        icon: 'https://www.google.com/s2/favicons?domain=developer.apple.com&sz=128',
        categoryId: 'apps-developer-tools',
        shortDescription: 'بيئة التطوير المكتبيّة الرسمية من Apple لبناء وتصميم تطبيقات iOS و macOS.',
        url: 'https://developer.apple.com/xcode/',
        pricing: 'مجاني لمستخدمي Mac',
        purpose: 'كيف تستفيد منه: تصميم وبرمجة وتدشين تطبيقات آيفون وآيباد وماك بلغة Swift.',
        features: ['معايير Apple الرسمية', 'دعم Swift & SwiftUI', 'محاكي أجهزة Apple مدمج'],
        keywords: ['xcode', 'apple', 'ios', 'swift']
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
    },
    {
        id: 'app-chrome-remote-desktop',
        type: 'app',
        name: 'Chrome Remote Desktop',
        icon: 'assets/icons/Chrome Remote Desktop.png',
        categoryId: 'apps-remote-desktop',
        shortDescription: 'أداة قوقل المباشرة والسريعة للتحكم بسطح المكتب والوصول للحاسوب عن بُعد عبر المتصفح.',
        url: 'https://chromewebstore.google.com/detail/chrome-remote-desktop/inomeogfingihgjfjlpeplalcfajhgai',
        pricing: 'مجاني بالكامل',
        purpose: 'كيف تستفيد منه: الوصول السريع والآمن لحاسوبك وتطبيقاتك الشخصية من أي جهاز ومتصفح.',
        features: ['عمل عبر المتصفح مباشرة', 'تأمين كامل بحساب Google', 'سهولة الاتصال المباشر'],
        keywords: ['chrome remote desktop', 'google', 'remote access', 'desktop app']
    },
    {
        id: 'app-rustdesk',
        type: 'app',
        name: 'RustDesk',
        icon: 'https://www.google.com/s2/favicons?domain=rustdesk.com&sz=128',
        categoryId: 'apps-remote-desktop',
        shortDescription: 'برنامج التحكم بسطح المكتب المفتوح المصدر والآمن بالكامل البديل لـ AnyDesk و TeamViewer.',
        url: 'https://rustdesk.com/',
        pricing: 'مجاني ومفتوح المصدر',
        purpose: 'كيف تستفيد منه: التحكم المباشر بحاسوبك عن بُعد وإتاحة الاستضافة الذاتية (Self-hosting) للبيانات.',
        features: ['بديل مفتوح المصدر وآمن', 'إمكانية الاستضافة الذاتية', 'سرعة استجابة وأداء مكتبي'],
        keywords: ['rustdesk', 'remote desktop', 'open source', 'rust']
    },
    {
        id: 'app-teamviewer',
        type: 'app',
        name: 'TeamViewer',
        icon: 'https://www.google.com/s2/favicons?domain=www.teamviewer.com&sz=128',
        categoryId: 'apps-remote-desktop',
        shortDescription: 'التطبيق المكتبي القياسي الأشهر لمشاركة الشاشة والتحكم عن بُعد وعقد الشروحات الفنية.',
        url: 'https://www.teamviewer.com/',
        pricing: 'مجاني للاستخدام الشخصي / Pro',
        purpose: 'كيف تستفيد منه: تقديم الدعم الفني ومشاركة الشاشة وعقد جلسات العمل الجماعي بين الأجهزة.',
        features: ['البرنامج القياسي العالمي للتحكم', 'دعم نقل الملفات بين الجهازين', 'اتصال مشفر وآمن'],
        keywords: ['teamviewer', 'remote desktop', 'support', 'desktop app']
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

// 9. برامج فحص ومعلومات النظام والعتاد
export const appsSystemDiagnosticsData = [
    {
        id: 'app-gpuz',
        type: 'app',
        name: 'TechPowerUp GPU-Z',
        icon: 'https://www.google.com/s2/favicons?domain=www.techpowerup.com&sz=128',
        categoryId: 'apps-system-diagnostics',
        shortDescription: 'أداة الفحص والتحليل المباشر لكارت الشاشة وبطاقات الرسوميات وسرعة المراوح والذاكرة.',
        url: 'https://www.techpowerup.com/gpuz/',
        pricing: 'مجاني بالكامل',
        purpose: 'كيف تستفيد منه: معرفة مواصفات واستهلاك طاقة وحرارة كارت الشاشة (NVIDIA / AMD / Intel).',
        features: ['معلومات تفصيلية لكرت الشاشة', 'مراقبة سحب الطاقة والحرارة', 'دعم تقنيات DLSS و RayTracing'],
        keywords: ['gpuz', 'gpu', 'graphics card', 'nvidia', 'amd']
    },
    {
        id: 'app-hwinfo',
        type: 'app',
        name: 'HWiNFO',
        icon: 'https://www.google.com/s2/favicons?domain=www.hwinfo.com&sz=128',
        categoryId: 'apps-system-diagnostics',
        shortDescription: 'الأداة المكتبيّة الاحترافية الشاملة لمراقبة درجات حرارة المكونات وترددات المعالج واستهلاك الطاقة.',
        url: 'https://www.hwinfo.com/',
        pricing: 'مجاني بالكامل',
        purpose: 'كيف تستفيد منه: فحص مستشعرات الحرارة والجهد والسرعة لجميع عتاد الجهاز لحظة بلحظة.',
        features: ['قراءة دقيقة لجميع المستشعرات', 'دعم كافة المعالجات وكروت الشاشة', 'تقارير تفصيلية للعتاد'],
        keywords: ['hwinfo', 'hardware', 'temperature', 'diagnostics']
    },
    {
        id: 'app-cpuz',
        type: 'app',
        name: 'CPU-Z',
        icon: 'https://www.google.com/s2/favicons?domain=www.cpuid.com&sz=128',
        categoryId: 'apps-system-diagnostics',
        shortDescription: 'البرنامج المكتبي الأشهر لمكاشفة تفاصيل ومعمارية المعالج واللوحة الأم والذاكرة العشوائية.',
        url: 'https://www.cpuid.com/softwares/cpu-z.html',
        pricing: 'مجاني بالكامل',
        purpose: 'كيف تستفيد منه: معرفة المواصفات الدقيقة والترددات الافتراضية للـ CPU والرامات ومسارها.',
        features: ['معلومات دقيقة عن المعالج والرامات', 'أداة بنشمارك سريعة للأداء', 'حجم خفيف جداً على النظام'],
        keywords: ['cpuz', 'cpu', 'ram', 'hardware info']
    },
    {
        id: 'app-crystaldiskinfo',
        type: 'app',
        name: 'CrystalDiskInfo',
        icon: 'assets/icons/CrystalDiskInfo.webp',
        categoryId: 'apps-system-diagnostics',
        shortDescription: 'الأداة القياسية الأولى لاختبار ومراقبة صحة وعمر ودرجة حرارة الهارد ديسك (SSD / HDD).',
        url: 'https://crystalmark.info/en/software/crystaldiskinfo/',
        pricing: 'مجاني ومفتوح المصدر',
        purpose: 'كيف تستفيد منه: معرفة نسبة صحة وعمر أجهزة التخزين (Health Status) واكتشاف القطاعات التالفة.',
        features: ['قراءة بيانات S.M.A.R.T للهارد', 'تنبيه مبكر لأخطاء القرص', 'دعم أقراص NVMe SSD'],
        keywords: ['crystaldiskinfo', 'ssd', 'hdd', 'health', 'storage']
    },
    {
        id: 'app-crystaldiskmark',
        type: 'app',
        name: 'CrystalDiskMark',
        icon: 'assets/icons/CrystalDiskMark.webp',
        categoryId: 'apps-system-diagnostics',
        shortDescription: 'برنامج اختبار وتقييم سرعة قراءة وكتابة البيانات للقرص الصلب والـ SSD.',
        url: 'https://crystalmark.info/en/software/crystaldiskmark/',
        pricing: 'مجاني ومفتوح المصدر',
        purpose: 'كيف تستفيد منه: قياس وبنشمارك سرعة نقل البيانات للـ SSD واختبار كفاءة القراءة والكتابة.',
        features: ['اختبار سرعة قراءة وكتابة الـ SSD', 'دعم سرعات NVMe العالية', 'نتائج دقيقة ومباشرة'],
        keywords: ['crystaldiskmark', 'benchmark', 'ssd speed', 'read write']
    },
    {
        id: 'app-hdsentinel',
        type: 'app',
        name: 'Hard Disk Sentinel',
        icon: 'https://www.google.com/s2/favicons?domain=www.hdsentinel.com&sz=128',
        categoryId: 'apps-system-diagnostics',
        shortDescription: 'برنامج المحترفين الأول لتشخيص واختبار صحة وعمر القرص الصلب وتوقع الأعطال.',
        url: 'https://www.hdsentinel.com/',
        pricing: 'نسخة رسمية خالية من الإعلانات',
        purpose: 'كيف تستفيد منه: التشخيص الاحترافي لنسبة صحة الهارد والتوقع الفني لنسبة تلف القطاعات.',
        features: ['تشخيص احترافي دقيق للغاية', 'تقرير صحة القرص ونسبة التلف', 'دعم جميع أنواع الأقراص'],
        keywords: ['hard disk sentinel', 'hdd health', 'ssd lifetime', 'diagnostics']
    },
    {
        id: 'app-furmark',
        type: 'app',
        name: 'FurMark (GPU Stress Test)',
        icon: 'https://www.google.com/s2/favicons?domain=geeks3d.com&sz=128',
        categoryId: 'apps-system-diagnostics',
        shortDescription: 'برنامج اختبار الضغط والإجهاد 3D الشهير لكروت الشاشة واختبار الاستقرار الحراري.',
        url: 'https://geeks3d.com/furmark/',
        pricing: 'مجاني بالكامل',
        purpose: 'كيف تستفيد منه: تشغيل مجسم 3D كثيف لاختبار مدى استقرار حرارة وأداء كارت الشاشة تحت الضغط العالي.',
        features: ['اختبار إجهاد 3D عالي الدقة', 'مراقبة درجة حرارة GPU', 'اختبار ثبات واحتراق الكارت'],
        keywords: ['furmark', 'gpu benchmark', '3d stress test', 'graphics']
    },
    {
        id: 'app-msi-afterburner',
        type: 'app',
        name: 'MSI Afterburner',
        icon: 'https://www.google.com/s2/favicons?domain=www.msi.com&sz=128',
        categoryId: 'apps-system-diagnostics',
        shortDescription: 'الأداة المكتبيّة الأكثر استخداماً عالمياً لمراقبة حرارة العتاد وكسر سرعة بطاقات الرسوميات.',
        url: 'https://www.msi.com/Landing/afterburner/graphics-cards',
        pricing: 'مجاني بالكامل',
        purpose: 'كيف تستفيد منه: كسر سرعة كارت الشاشة والتحكم بسرعات المراوح ومراقبة الحرارة حياً.',
        features: ['مراقبة حية لدرجات الحرارة', 'التحكم بسرعات سرعة المراوح', 'كسر سرعة آمن للـ GPU'],
        keywords: ['msi afterburner', 'gpu', 'overclocking', 'temperature']
    },
    {
        id: 'app-hwmonitor',
        type: 'app',
        name: 'HWMonitor',
        icon: 'assets/icons/HWMonitor.avif',
        categoryId: 'apps-system-diagnostics',
        shortDescription: 'برنامج مراقبة مستشعرات الفولتية ودرجات الحرارة واستهلاك العتاد في الوقت الفعلي.',
        url: 'https://hwmonitor.en.softonic.com',
        pricing: 'مجاني / Pro',
        purpose: 'كيف تستفيد منه: قراءة مستشعرات فولتيات الطاقة وحرارة المعالج والقرص الصلب بدقة.',
        features: ['مراقبة الفولتية والجهد الكهربائي', 'قراءة درجات الحرارة بدقة', 'مراقبة سرعة دوران المراوح'],
        keywords: ['hwmonitor', 'voltage', 'temperature', 'hardware']
    },
    {
        id: 'app-windirstat',
        type: 'app',
        name: 'WinDirStat',
        icon: 'https://www.google.com/s2/favicons?domain=windirstat.net&sz=128',
        categoryId: 'apps-system-diagnostics',
        shortDescription: 'أداة تحليل وفحص وتوزيع مساحة القرص الصلب بأسلوب شجري بصري منظم.',
        url: 'https://windirstat.net/',
        pricing: 'مجاني ومفتوح المصدر',
        purpose: 'كيف تستفيد منه: اكتشاف الملفات والمجلدات الضخمة التي تستهلك مساحة القرص وحذفها.',
        features: ['عرض شجري بصري لمساحة الهارد', 'اكتشاف أضخم الملفات فوراً', 'تنظيف القرص بسهولة'],
        keywords: ['windirstat', 'disk space', 'analyzer', 'storage']
    },
    {
        id: 'app-rammap',
        type: 'app',
        name: 'Sysinternals RAMMap',
        icon: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=128',
        categoryId: 'apps-system-diagnostics',
        shortDescription: 'أداة مايكروسوفت Sysinternals المتقدمة لتحليل وتفريغ وتقسيم الذاكرة العشوائية RAM.',
        url: 'https://learn.microsoft.com/en-us/sysinternals/downloads/rammap',
        pricing: 'مجاني من Microsoft',
        purpose: 'كيف تستفيد منه: تحليل كيفية استخدام الوندوز للذاكرة العشوائية وتفريغ ذاكرة الـ Standby.',
        features: ['تحليل متقدم للذاكرة العشوائية', 'تفريغ الذاكرة المؤقتة بنقرة', 'تطبيق رسمي من مايكروسوفت'],
        keywords: ['rammap', 'sysinternals', 'ram', 'memory', 'microsoft']
    },
    {
        id: 'app-userbenchmark',
        type: 'app',
        name: 'UserBenchmark',
        icon: 'https://www.google.com/s2/favicons?domain=www.userbenchmark.com&sz=128',
        categoryId: 'apps-system-diagnostics',
        shortDescription: 'اختبار وتقييم أداء جميع مكونات الكمبيوتر ومقارنتها بالعتاد العالمي.',
        url: 'https://www.userbenchmark.com/',
        pricing: 'مجاني بالكامل',
        purpose: 'كيف تستفيد منه: إجراء اختبار شامل لأداء المعالج والكرت والرامات والهارد ومعرفة كفاءتها.',
        features: ['اختبار تقييمي شامل للعتاد', 'مقارنة الأداء بالنتائج العالمية', 'تقرير كفاءة مفصل'],
        keywords: ['userbenchmark', 'benchmark', 'pc test', 'hardware']
    },
    {
        id: 'site-speedtest',
        type: 'app',
        name: 'Speedtest Desktop',
        icon: 'https://www.google.com/s2/favicons?domain=www.speedtest.net&sz=128',
        categoryId: 'apps-system-diagnostics',
        shortDescription: 'التطبيق الرسمي لقياس وتقييم سرعة الاتصال بالإنترنت وزمن الاستجابة (Ping).',
        url: 'https://www.speedtest.net/apps/desktop',
        pricing: 'مجاني بالكامل',
        purpose: 'كيف تستفيد منه: قياس سرعات التحميل والرفع واستقرار الشبكة بدقة خالية من التأخير.',
        features: ['قياس دقيق لسرعة الإنترنت', 'فحص زمن الاستجابة (Ping/Jitter)', 'سجل نتائج تاريخي'],
        keywords: ['speedtest', 'internet speed', 'ping', 'network']
    }
];


// 10. برامج تشغيل الفيديو والوسائط
export const appsVideoPlayersData = [
    {
        id: 'app-vlc',
        type: 'app',
        name: 'VLC Media Player',
        icon: 'assets/icons/VLC-IconSmall.png',
        categoryId: 'apps-video-players',
        shortDescription: 'مشغل الفيديوهات والوسائط المفتوح المصدر القياسي الأول عالمياً لدعم جميع الصيغ والترميزات.',
        url: 'https://www.videolan.org/',
        pricing: 'مجاني ومفتوح المصدر',
        purpose: 'كيف تستفيد منه: تشغيل مقاطع الفيديو والأفلام والأصوات بمختلف الترميزات والترجمات دون أخطاء.',
        features: ['دعم جميع صيغ الفيديو والصوت', 'تشغيل الفيديوهات التالفة والجزئية', 'معالجة جودة الصورة والترجمة'],
        keywords: ['vlc', 'video player', 'media player', 'open source']
    },
    {
        id: 'app-potplayer',
        type: 'app',
        name: 'PotPlayer',
        icon: 'https://www.google.com/s2/favicons?domain=potplayer.tv&sz=128',
        categoryId: 'apps-video-players',
        shortDescription: 'مشغل الفيديو المكتبي الأسرع والأكثر تخصيصاً لتشغيل فيديوهات 4K و 3D بكفاءة عالية.',
        url: 'https://potplayer.tv/',
        pricing: 'مجاني بالكامل',
        purpose: 'كيف تستفيد منه: تشغيل مقاطع الفيديو عالية الدقة بآلية تسريع العتاد (GPU Acceleration) وتنسيق الخطوط.',
        features: ['تسريع عتادي فائق للـ GPU', 'تشغيل فيديوهات 4K و 8K بسلاسة', 'تخصيص كامل للواجهة والترجمات'],
        keywords: ['potplayer', 'video player', '4k', '3d video']
    },
    {
        id: 'app-mpv',
        type: 'app',
        name: 'mpv player',
        icon: 'assets/icons/mpv.png',
        categoryId: 'apps-video-players',
        shortDescription: 'مشغل الفيديو المفتوح المصدر المفضل لدى المطورين بفضل سرعته وقابليته للبرمجة والـ Scripting.',
        url: 'https://mpv.io/',
        pricing: 'مجاني ومفتوح المصدر',
        purpose: 'كيف تستفيد منه: تشغيل الفيديوهات والروابط المباشرة بأعلى جودة معالجة رسومية (GPU Shaders).',
        features: ['معالجة بصرية فائقة بـ GPU Shaders', 'قابلية للتوسع عبر سكريبتات Lua', 'أداء خفيف وفائق السرعة'],
        keywords: ['mpv', 'media player', 'open source', 'gpu rendering']
    }
];

// 11. برامج تشغيل وتصفح تصاميم 3D
export const apps3DViewersData = [
    {
        id: 'app-f3d',
        type: 'app',
        name: 'F3D - Fast 3D Viewer',
        icon: 'assets/icons/F3D.png',
        categoryId: 'apps-3d-viewers',
        shortDescription: 'برنامج مكتبي فائق السرعة والخفة لمشاهدة ومعاينة تصاميم ومجسمات الـ 3D بصيغ GLB و GLTF.',
        url: 'https://f3d.app/',
        pricing: 'مجاني ومفتوح المصدر',
        purpose: 'كيف تستفيد منه: الفتح والتصفح المباشر السريع لمجسمات الـ 3D دون الحاجة لفتح برامج التصميم الثقيلة.',
        features: ['سرعة تشغيل فائقة خفيفة على النظام', 'دعم صيغ GLB, GLTF, OBJ, STL, FBX', 'معاينة إضاءة وظلال عصرية'],
        keywords: ['f3d', '3d viewer', 'glb', 'gltf', 'obj']
    },
    {
        id: 'app-open3d-viewer',
        type: 'app',
        name: 'Open3D',
        icon: 'assets/icons/Open3D.png',
        categoryId: 'apps-3d-viewers',
        shortDescription: 'أداة سريعة ومجانية أونلاين ومكتبيّة لتصفح ومعاينة النماذج ثلاثية الأبعاد بجميع الصيغ.',
        url: 'https://apps.microsoft.com/detail/9P1LMJ70Z3R9?hl=neutral&gl=US&ocid=pdpshare',
        pricing: 'مجاني ومفتوح المصدر',
        purpose: 'كيف تستفيد منه: معاينة وتحليل مكونات ومسارات مجسمات الـ 3D وتصدير الهياكل بالمتصفح.',
        features: ['تشغيل وتصفح مجسمات 3D أونلاين', 'دعم أكثر من 20 صيغة مجسمات', 'تحليل الهيكل الشبكي والألوان'],
        keywords: ['open3d', '3dviewer', 'online 3d', 'glb']
    },
    {
        id: 'app-blender',
        type: 'app',
        name: 'Blender 3D Suite',
        icon: 'assets/icons/Blender.png',
        categoryId: 'apps-3d-viewers',
        shortDescription: 'البرنامج العالمي المفتوح المصدر الأول لصناعة النماذج والرسوم والمجسمات ثلاثية الأبعاد.',
        url: 'https://www.blender.org/',
        pricing: 'مجاني ومفتوح المصدر بالكامل',
        purpose: 'كيف تستفيد منه: بناء وتعديل وتصدير النماذج والمجسمات ثلاثية الأبعاد بصيغ GLB و GLTF للويب.',
        features: ['البرنامج القياسي العالمي المفتوح لـ 3D', 'تعديل وتصميم الخامات والمجسمات', 'تصدير احترافي للويب'],
        keywords: ['blender', '3d modeling', 'gltf', 'glb', 'animation']
    },
    {
        id: 'app-meshlab',
        type: 'app',
        name: 'MeshLab',
        icon: 'assets/icons/MeshLab.png',
        categoryId: 'apps-3d-viewers',
        shortDescription: 'برنامج معالجة وتنقية وتفريغ النقاط والمجسمات ثلاثية الأبعاد المعقدة.',
        url: 'https://www.meshlab.net/',
        pricing: 'مجاني ومفتوح المصدر',
        purpose: 'كيف تستفيد منه: معالجة وتقليص عدد الأوجه (Poly Count) للمجسمات لتسريع عرضها في الويب.',
        features: ['تنظيف وتقليص حجوم المجسمات', 'معالجة الهياكل الثلاثية الأبعاد', 'دعم صيغ ثلاثية متعددة'],
        keywords: ['meshlab', '3d mesh', 'gltf', 'obj', 'stl']
    }
];
// 12 تطبيقات وأدوات النظام والإنتاجية
export const appsSystemUtilitiesData = [
    {
        id: 'langover',
        name: 'LangOver',
        type: 'app',
        icon: 'https://www.google.com/s2/favicons?domain=langover.com&sz=128',
        url: 'https://langover.com/Download.aspx',
        pricing: 'مجاني بالكامل',
        shortDescription: 'أداة مجانية وسريعة لتحويل لغة النصوص المكتوبة بالخطأ فوراً بين العربية والإنجليزية دون الحاجة لإعادة الكتابة.',
        whyUseIt: 'تصحيح النصوص المكتوبة بلغة خاطئة بسبب نسيان تبديل اللغة (Alt+Shift)، وتصحيح حالة الأحرف وعكس اتجاه الكلمات بنقرة زر أو اختصار F10.',
        features: [
            'تحويل فوري للغة النص المظلل باختصار F10',
            'دعم التحويل بين العربية والإنجليزية وكافة اللغات',
            'تعديل حالة الأحرف الكبيرة والصغيرة وسلسلة النصوص',
            'أداة خفيفة جداً تعمل في خلفية النظام بدون استهلاك للموارد'
        ],
        keywords: ['LangOver', 'تحويل اللغة', 'الكتابة الخاطئة', 'تعديل النصوص', 'Keyboard Layout']
    },
    {
        id: 'windhawk',
        name: 'Windhawk',
        type: 'app',
        icon: 'https://www.google.com/s2/favicons?domain=windhawk.net&sz=128',
        url: 'https://windhawk.net/',
        pricing: 'مجاني ومفتوح المصدر',
        shortDescription: 'منصة متقدمة لتخصيص وتعديل نظام التشغيل ويندوز والتطبيقات عبر المودات والسكربتات البرمجية.',
        whyUseIt: 'إضافة ميزات وتعديلات بصرية ووظيفية متقدمة لقائمة ابدأ وشريط المهام والواجهات دون التعديل المباشر على ملفات النظام.',
        features: [
            'متجر مدمج لمودات وتعديلات ويندوز المفتوحة المصدر',
            'تخصيص شريط المهام وقائمة ابدأ والنوافذ بدقة عالية',
            'إمكانية كتابة موديولات وتعديلات مخصصة بـ C++',
            'بيئة آمنة وخفيفة يمكن تفعيل وإلغاء المودات فيها بضغطة زر'
        ],
        keywords: ['Windhawk', 'تخصيص ويندوز', 'Windows Mods', 'Taskbar Tweak', 'Windows 11 Customization']
    },
    {
        id: 'localsend',
        name: 'LocalSend',
        type: 'app',
        icon: 'https://www.google.com/s2/favicons?domain=localsend.org&sz=128',
        url: 'https://localsend.org',
        pricing: 'مجاني ومفتوح المصدر',
        shortDescription: 'تطبيق آمن ومفتوح المصدر لنقل الملفات والمجلدات بين الأجهزة محلياً عبر شبكة الـ Wi-Fi بدون إنترنت.',
        whyUseIt: 'مشاركة الملفات بسرعة فائقة وأمان بين الهواتف والأجهزة بنظام ويندوز وماك ولينكس وأندرويد و iOS كبديل محلي آمن لـ AirDrop.',
        features: [
            'عمليات نقل مشفرة بالكامل بنظام E2E محلياً',
            'عدم الحاجة لاتصال بالإنترنت أو خوادم سحابية خارجية',
            'دعم كامل لجميع أنظمة التشغيل (Cross-Platform)',
            'واجهة بسيطة وسريعة بدون إعلانات أو قيود على حجم الملفات'
        ],
        keywords: ['LocalSend', 'نقل الملفات', 'AirDrop البديل', 'مشاركة محلي', 'Local Transfer', 'Wi-Fi File Share']
    },
    {
        id: 'hibit-uninstaller',
        name: 'HiBit Uninstaller',
        type: 'app',
        icon: 'https://www.google.com/s2/favicons?domain=hibitsoft.ir&sz=128',
        url: 'https://www.hibitsoft.ir/Uninstaller.html',
        pricing: 'مجاني بالكامل',
        shortDescription: 'أداة احترافية لإزالة البرامج والتطبيقات من جذورها وتنظيف مخلفات النظام والسجل (Registry).',
        whyUseIt: 'إزالة البرامج المستعصية، ملحقات المتصفحات، وتطبيقات ويندوز الأصلية مع مسح جميع الملفات المتبقية والسجلات المتروكة.',
        features: [
            'حذف البرامج المستعصية بالحذف القسري (Forced Uninstall)',
            'تنظيف الـ Registry والملفات المؤقتة والمجلدات الفارغة',
            'إدارة برامج بدء التشغيل (Startup Manager) واستعادة النظام',
            'يتوفر منه نسخة محمولة (Portable) لا تحتاج لتثبيت'
        ],
        keywords: ['HiBit Uninstaller', 'إزالة البرامج', 'تنظيف النظام', 'Forced Uninstall', 'Registry Cleaner']
    }
];