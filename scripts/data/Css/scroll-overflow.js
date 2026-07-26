export const scrollOverflowData = [
    {
        id: 'css-scroll-behavior',
        name: 'scroll-behavior: smooth',
        shortDescription: 'جعل التمرير بين الأقسام والروابط الداخلية يتم بسلاسة بدلاً من الانتقال الفوري.',
        longDescription: 'خاصية تُستخدم غالباً على العنصر الجذر html لجعل الانتقال إلى الروابط المرجعية (Anchor Links) أو الأقسام داخل الصفحة يتم بحركة سلسة بدلاً من القفز المباشر.',
        difficulty: 'easy',
        importance: 'critical',
        examples: [
            `/* تفعيل التمرير السلس في جميع أنحاء الصفحة */
html {
  scroll-behavior: smooth;
}

/* مراعاة المستخدمين الذين يفضلون تقليل الحركة */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}`
        ],
        expectedOutput: [
            'الانتقال بسلاسة إلى القسم المستهدف عند النقر على أي رابط داخلي يشير إلى معرف (#id).'
        ],
        professionalTips: 'احرص على دعم الوسيط prefers-reduced-motion، حتى يتم تعطيل التمرير السلس للمستخدمين الذين يفضلون تقليل الحركة لأسباب صحية أو تتعلق بإمكانية الوصول.',
        commonMistakes: {
            wrong: `/* استخدام JavaScript لتنفيذ تمرير سلس دون الحاجة إليه */
window.scrollTo({ top: 500, behavior: 'smooth' });`,
            right: `html {
  scroll-behavior: smooth;
}`,
            explanation: 'إذا كان المطلوب هو التمرير السلس بين أقسام الصفحة، فإن استخدام scroll-behavior أبسط وأكثر ملاءمة من كتابة JavaScript إضافي.'
        },
        thinkingWay: 'تخيل scroll-behavior كمصعد يتحرك بسلاسة بين الطوابق، بدلاً من الانتقال الفوري من مكان لآخر.',
        relatedMethods: ['css-scroll-snap', 'css-scroll-driven-animations'],
        keywords: ['scroll-behavior', 'smooth scroll', 'anchor link animation', 'CSS scrolling', 'in-page navigation']
    },
    {
        id: 'css-scroll-snap',
        name: 'CSS Scroll Snap (scroll-snap-type & scroll-snap-align)',
        shortDescription: 'تثبيت العناصر تلقائياً عند نقاط محددة أثناء التمرير دون الحاجة إلى JavaScript.',
        longDescription: 'مجموعة خصائص تسمح بإنشاء تمرير يلتقط العناصر تلقائياً عند مواقع محددة. تُطبق scroll-snap-type على الحاوية لتحديد اتجاه الالتقاط، بينما تُستخدم scroll-snap-align على العناصر الداخلية لتحديد موضع التثبيت.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* 1. الحاوية الرئيسية لمعرض الصور */
.slider-container {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

/* 2. عناصر السلايدر */
.slide-item {
  flex: 0 0 100%;
  scroll-snap-align: center;
}`
        ],
        expectedOutput: [
            'استقرار كل عنصر تلقائياً في موضعه المحدد بعد انتهاء عملية التمرير، مما يمنح تجربة مشابهة للسلايدر.'
        ],
        professionalTips: 'يمكن الاعتماد على CSS Scroll Snap لبناء معارض الصور والسلايدرات البسيطة دون استخدام مكتبات خارجية، مع الحفاظ على أداء ممتاز وتجربة استخدام طبيعية.',
        commonMistakes: {
            wrong: `/* تطبيق scroll-snap-align دون تفعيل scroll-snap-type على الحاوية */
.slide {
  scroll-snap-align: center;
}`,
            right: `.parent {
  scroll-snap-type: x mandatory;
}

.slide {
  scroll-snap-align: center;
}`,
            explanation: 'لن يعمل Scroll Snap إلا إذا تم تعريف scroll-snap-type على الحاوية وscroll-snap-align على العناصر الداخلية.'
        },
        thinkingWay: 'تخيل وجود مغناطيس في كل نقطة توقف؛ بمجرد الاقتراب منها ينجذب العنصر إليها ويستقر تلقائياً.',
        relatedMethods: ['css-scroll-behavior', 'css-overflow-x-y'],
        keywords: ['scroll-snap-type', 'scroll-snap-align', 'CSS slider', 'carousel no JS', 'native carousel']
    },
    {
        id: 'css-scrollbar-gutter',
        name: 'scrollbar-gutter',
        shortDescription: 'حجز مساحة لشريط التمرير مسبقاً لمنع تغير تخطيط الصفحة عند ظهوره أو اختفائه.',
        longDescription: 'خاصية تُستخدم لحجز مساحة شريط التمرير قبل ظهوره، مما يمنع تغير أبعاد الصفحة أو تحرك العناصر أفقياً عند ظهور شريط التمرير أو اختفائه.',
        difficulty: 'medium',
        importance: 'important',
        examples: [
            `/* حجز مساحة شريط التمرير على مستوى الصفحة */
html {
  scrollbar-gutter: stable both-edges;
}`
        ],
        expectedOutput: [
            'ثبات تخطيط الصفحة ومنع تحرك العناصر أفقياً عند ظهور أو اختفاء شريط التمرير.'
        ],
        professionalTips: 'استخدم scrollbar-gutter: stable للحفاظ على استقرار التخطيط وتقليل مشكلة Layout Shift، خاصة في الصفحات التي يتغير فيها المحتوى باستمرار.',
        commonMistakes: {
            wrong: `/* استخدام مسافة ثابتة لتعويض عرض شريط التمرير */
body {
  padding-right: 17px;
}`,
            right: `html {
  scrollbar-gutter: stable;
}`,
            explanation: 'يختلف عرض شريط التمرير بين الأنظمة والمتصفحات، لذلك يُفضل الاعتماد على scrollbar-gutter بدلاً من استخدام قيم ثابتة.'
        },
        thinkingWay: 'تخيل أنك خصصت موقفاً دائماً لشريط التمرير؛ سواء وُجد أم لم يوجد، يبقى مكانه محجوزاً ولا يتأثر تخطيط الصفحة.',
        relatedMethods: ['css-overflow'],
        keywords: ['scrollbar-gutter', 'prevent layout shift', 'CLS fix', 'stable scrollbar', 'CSS scrollbar space']
    },
    {
        id: 'css-scroll-driven-animations',
        name: 'Scroll-driven Animations (animation-timeline: scroll())',
        shortDescription: 'ربط تقدم الحركة بمسافة التمرير الفعلية دون الحاجة إلى JavaScript.',
        longDescription: 'تقنية حديثة في CSS تتيح ربط تقدم الحركة بمسافة تمرير الصفحة أو أحد العناصر القابلة للتمرير، وذلك باستخدام animation-timeline: scroll()، مما يسمح بإنشاء تأثيرات تتفاعل مباشرة مع حركة التمرير دون الحاجة إلى مستمعات أحداث JavaScript.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `/* 1. تعريف حركة تمدد شريط التقدم */
@keyframes readProgress {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

/* 2. ربط تقدم الحركة بمسافة تمرير الصفحة */
.progress-bar {
  animation: readProgress linear;
  animation-timeline: scroll(root);
  transform-origin: left;
}`
        ],
        expectedOutput: [
            'تحديث شريط التقدم تدريجياً أثناء التمرير بحيث يعكس نسبة التقدم الفعلية في الصفحة.'
        ],
        professionalTips: 'استخدم Scroll-driven Animations عند الحاجة إلى ربط الحركة بالتمرير مباشرة، مثل أشرطة التقدم أو تأثيرات الكشف، لأنها توفر أداءً أفضل من الاعتماد على مستمعات scroll في JavaScript.',
        commonMistakes: {
            wrong: `/* تحديث الحركة يدوياً عند كل عملية تمرير */
window.addEventListener('scroll', () => {
  bar.style.width = '10px';
});`,
            right: `.progress-bar {
  animation: readProgress linear;
  animation-timeline: scroll(root);
}`,
            explanation: 'تنفيذ الحركة عبر CSS يجعل المتصفح يدير تقدمها مباشرة، بدلاً من تحديثها يدوياً مع كل حدث تمرير.'
        },
        thinkingWay: 'تخيل animation-timeline كأنه مؤشر مرتبط بعجلة التمرير؛ كلما تحركت الصفحة، تقدم التحريك بالنسبة نفسها.',
        relatedMethods: ['css-keyframes-rule', 'css-scroll-behavior'],
        keywords: ['Scroll-driven Animations', 'animation-timeline', 'scroll()', 'reading progress bar', 'scroll animation no JS']
    },
    {
        id: 'css-overscroll-behavior',
        name: 'overscroll-behavior',
        shortDescription: 'التحكم في سلوك التمرير عند الوصول إلى نهاية الحاوية ومنع انتقاله إلى العنصر الأب.',
        longDescription: 'خاصية تتحكم في سلوك التمرير عند الوصول إلى حدود العنصر القابل للتمرير، وتُستخدم لمنع انتقال التمرير إلى الحاوية الأب (Scroll Chaining)، وهو ما يجعلها مثالية للنوافذ المنبثقة والقوائم الجانبية.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* منع انتقال التمرير إلى الصفحة الرئيسية */
.sidebar-scroll-box {
  overflow-y: auto;
  overscroll-behavior: contain;
}`
        ],
        expectedOutput: [
            'يتوقف التمرير عند نهاية الحاوية دون انتقاله إلى الصفحة أو الحاوية الأب.'
        ],
        professionalTips: 'استخدم overscroll-behavior: contain أو none داخل النوافذ المنبثقة والقوائم الجانبية لمنع انتقال التمرير إلى الصفحة الخلفية وتحسين تجربة الاستخدام.',
        commonMistakes: {
            wrong: `/* استخدام JavaScript لمنع انتقال التمرير */
e.preventDefault();`,
            right: `.modal-body {
  overscroll-behavior: contain;
}`,
            explanation: 'توفر overscroll-behavior حلاً أصلياً في CSS للتحكم في انتقال التمرير، دون الحاجة إلى اعتراض أحداث اللمس أو التمرير عبر JavaScript.'
        },
        thinkingWay: 'تخيل overscroll-behavior كبوابة تمنع حركة التمرير من مغادرة الحاوية والانتقال إلى ما حولها.',
        relatedMethods: ['css-overflow-x-y'],
        keywords: ['overscroll-behavior', 'scroll chaining', 'prevent parent scroll', 'overscroll contain', 'modal scroll fix']
    }
];