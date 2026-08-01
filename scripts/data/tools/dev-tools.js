// 1. مواقع التغذية البصرية وتصميم الواجهات
export const visualInspirationData = [
    {
        id: 'site-figma',
        type: 'website',
        name: 'Figma',
        icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="1.5"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v7H8.5A3.5 3.5 0 0 1 5 19.5z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>',
        shortDescription: 'الأداة العالمية الأولى لتصميم واجهات وتطبيقات الويب والتغذية البصرية تفاعلياً.',
        url: 'https://figma.com',
        pricing: 'مجاني / خطط فرق مدفوعة',
        purpose: 'كيف تستفيد منه: تصميم الواجهات وتخطيط الأفكار وتصدير الأصول البرمجية ومشاركتها مع الفريق.',
        features: ['تعاون وتعديل جماعي لحظي', 'مكتبات مكونات احترافية', 'تصدير كود CSS وأصول الصور'],
        keywords: ['figma', 'ui', 'ux', 'design', 'inspiration']
    },
    {
        id: 'site-dribbble',
        type: 'website',
        name: 'Dribbble',
        icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/><path d="M8.56 2.75c4.37 6 6 9.42 8 18.5"/></svg>',
        shortDescription: 'منصة استعراض أعمال المصممين والمطورين لاستلهام أحدث صراعات واجهات الويب.',
        url: 'https://dribbble.com',
        pricing: 'مجاني للتصفح والاستلهام',
        purpose: 'كيف تستفيد منه: رؤية أفكار مبتكرة لحركات وتنسيقات الأزرار والكروت والألوان الحديثة.',
        features: ['استعراض تصاميم عالمية احترافية', 'تصفح حس الألوان والأفكار المعاصرة', 'متابعة كبار المبدعين في المجال'],
        keywords: ['dribbble', 'inspiration', 'ui', 'ux']
    }
];

// 2. مواقع وتطبيقات تعديل وتحسين الصور
export const imageEditingData = [
    {
        id: 'site-photopea',
        type: 'website',
        name: 'Photopea',
        icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
        shortDescription: 'بديل الفوتوشوب المجاني الكامل على المتصفح لمعالجة وتعديل الصور وتصديرها.',
        url: 'https://photopea.com',
        pricing: 'مجاني بالكامل على المتصفح',
        purpose: 'كيف تستفيد منه: تعديل الصور وقص خلفياتها والتعديل على ملفات PSD دون الحاجة لتثبيت برامج.',
        features: ['يدعم جميع صيغ PSD, AI, Sketch, WebP', 'يعمل بالكامل داخل المتصفح بأداء سريع', 'أدوات احترافية متكاملة لقص وتعديل الألوان'],
        keywords: ['photopea', 'photoshop', 'image-editing', 'psd']
    },
    {
        id: 'site-squoosh',
        type: 'website',
        name: 'Squoosh',
        icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="1.5"><path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"/></svg>',
        shortDescription: 'أداة قوقل المتقدمة لضغط الصور وتحويل صيغها للحجم الأمثل للويب مع الحفاظ على الجودة.',
        url: 'https://squoosh.app',
        pricing: 'مجاني ومفتوح المصدر',
        purpose: 'كيف تستفيد منه: ضغط حجم صور موقعك وتحويلها لصيغة WebP أو AVIF لتسريع سرعة التحميل.',
        features: ['معاينة فورية قبل وبعد الضغط', 'تحكم دقيق بمستوى الجودة والأبعاد', 'ضغط فائق للحجم بأقل فقد في الجودة'],
        keywords: ['squoosh', 'image-compression', 'webp', 'seo', 'performance']
    }
];

// 3. مواقع وتطبيقات تعديل ومونتاج الفيديو
export const videoEditingData = [
    {
        id: 'site-capcut',
        type: 'website',
        name: 'CapCut Web',
        icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="1.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>',
        shortDescription: 'منصة تحرير الفيديو ومونتاج الشروحات التوضيحية أونلاين بالذكاء الاصطناعي.',
        url: 'https://capcut.com',
        pricing: 'مجاني / أدوات ذكية مدفوعة',
        purpose: 'كيف تستفيد منه: مونتاج الفيديوهات التوضيحية للمشاريع وإضافة النصوص التلقائية والتأثيرات.',
        features: ['توليد نصوص الشرح تلقائياً', 'مكتبة مؤشرات وانتقالات جاهزة', 'مونتاج سريع أونلاين عبر المتصفح'],
        keywords: ['capcut', 'video-editing', 'media']
    }
];