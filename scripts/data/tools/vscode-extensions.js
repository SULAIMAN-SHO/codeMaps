export const vscodeExtensionsData = [
    {
        id: 'ext-prettier',
        type: 'vscode-extension',
        name: 'Prettier - Code Formatter',
        icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="1.5"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>',
        group: 'تنسيق وتنظيف الكود',
        shortDescription: 'الأداة القياسية لتنسيق وتوحيد شكل الأكواد البرمجية تلقائياً عند الحفظ.',
        installUrl: 'vscode:extension/esbenp.prettier-vscode',
        url: 'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode',
        whyUseIt: 'لماذا نستخدمها: تضمن توحيد شكل الكود ومنع الأخطاء التنسيقية والشكلية بين أعضاء الفريق.',
        features: ['تنسيق تلقائي بمجرد الحفظ', 'دعم معظم لغات الويب (HTML, CSS, JS)', 'إعدادات مخصصة عبر ملف .prettierrc'],
        keywords: ['prettier', 'vscode', 'formatter', 'clean code']
    },
    {
        id: 'ext-live-server',
        type: 'vscode-extension',
        name: 'Live Server',
        icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>',
        group: 'التطوير والمعاينة الحية',
        shortDescription: 'تشغيل خادم محلي خفيف يتيح المعاينة الحية والتحديث الفوري للصفحة عند الحفظ.',
        installUrl: 'vscode:extension/ritwickdey.LiveServer',
        url: 'https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer',
        whyUseIt: 'لماذا نستخدمها: تغنيك عن إعادة تحميل الصفحة يدوياً في المتصفح بعد كل تعديل في الكود.',
        features: ['تحديث تلقائي لحظي (Hot Reload)', 'دعم معايير الويب المتقدمة', 'إمكانية المعاينة عبر الأجهزة الموصلة بالشبكة'],
        keywords: ['vscode', 'live server', 'reload', 'preview']
    },
    {
        id: 'ext-gitlens',
        type: 'vscode-extension',
        name: 'GitLens — Git supercharged',
        icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="1.5"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 9v12"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/></svg>',
        group: 'إدارة الإصدارات والـ Git',
        shortDescription: 'إظهار تفاصيل التعديلات وكاتب كل سطر برمجي وتتبع تاريخ التغييرات داخل المحرر.',
        installUrl: 'vscode:extension/eamodio.gitlens',
        url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens',
        whyUseIt: 'لماذا نستخدمها: تسهيل فهم تاريخ الكود ومعرفة من قام بتعديل أي سطر ومتى ولماذا.',
        features: ['إظهار Blame تفاعلي مع كل سطر', 'مقارنة الفروقات بين الفروع', 'تصفح شجرة التاريخ للـ Git'],
        keywords: ['vscode', 'git', 'gitlens', 'version control']
    }
];