export const cascadeScopeData = [
    {
        id: 'css-cascade-layers',
        name: 'Cascade Layers (@layer)',
        shortDescription: 'تنظيم أولويات طبقات التنسيق والتحكم بترتيب تطبيق الأنماط في المشاريع الكبيرة.',
        longDescription: 'قاعدة حديثة في CSS تتيح تقسيم التنسيقات إلى طبقات مرتبة، مثل reset و base و components و utilities، بحيث يُحدد ترتيب الطبقات مسبقاً بغض النظر عن قوة المحددات (Specificity) داخل كل طبقة.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `/* 1. إعلان ترتيب الطبقات */
@layer reset, base, components, utilities;

/* 2. كتابة التنسيقات داخل الطبقات */
@layer components {
  .btn {
    background-color: #3b82f6;
  }
}

@layer utilities {
  .bg-red {
    background-color: #ef4444;
  }
}`
        ],
        expectedOutput: [
            'تطبيق تنسيقات الطبقات وفق ترتيبها المحدد مسبقاً دون الحاجة إلى استخدام !important.'
        ],
        professionalTips: 'استخدم @layer لتنظيم تنسيقات المشروع أو للتحكم بأولوية ملفات CSS الخارجية، مما يقلل الحاجة إلى رفع قوة المحددات أو استخدام !important.',
        commonMistakes: {
            wrong: `/* كتابة التنسيقات خارج أي طبقة */
.my-btn {
  background: red;
}`,
            right: `@layer components {
  .my-btn {
    background: red;
  }
}`,
            explanation: 'التنسيقات غير الموجودة داخل @layer تمتلك أولوية أعلى من جميع التنسيقات الموجودة داخل الطبقات، لذلك يُفضل تنظيم جميع تنسيقات المشروع باستخدام @layer.'
        },
        thinkingWay: 'تخيل @layer كقائمة انتظار منظمة؛ لكل طبقة دور محدد في تطبيق التنسيقات بغض النظر عما بداخلها.',
        relatedMethods: ['css-scoped-css', 'css-specificity-important'],
        keywords: ['@layer', 'Cascade Layers', 'CSS architecture', 'specificity fix', 'CSS organization']
    },
    {
        id: 'css-scoped-css',
        name: 'Scoped CSS (@scope)',
        shortDescription: 'حصر تأثير التنسيقات داخل نطاق محدد لمنع تسربها إلى بقية الصفحة.',
        longDescription: 'قاعدة حديثة تسمح بتقييد تطبيق التنسيقات داخل عنصر أو مكون معين باستخدام @scope، مع إمكانية تحديد حدود انتهاء النطاق عبر الصيغة to (...) عند الحاجة.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `/* تطبيق التنسيقات داخل .media-card فقط */
@scope (.media-card) to (.card-body) {
  img {
    border-radius: 8px;
  }

  p {
    color: #94a3b8;
  }
}`
        ],
        expectedOutput: [
            'تطبيق التنسيقات على العناصر الموجودة داخل النطاق المحدد فقط دون التأثير على العناصر المشابهة خارجه.'
        ],
        professionalTips: 'يساعد @scope على تقليل احتمالية تعارض التنسيقات بين المكونات، خاصة في المشاريع الكبيرة التي تحتوي على أسماء كلاسات متكررة.',
        commonMistakes: {
            wrong: `/* استخدام محددات عامة قد تؤثر على مكونات أخرى */
.title {
  color: blue;
}`,
            right: `@scope (.widget) {
  .title {
    color: blue;
  }
}`,
            explanation: 'يؤدي @scope إلى حصر تأثير المحددات داخل النطاق المحدد فقط، مما يمنع تأثيرها على بقية الصفحة.'
        },
        thinkingWay: 'تخيل @scope كسياج يحيط بالمكون؛ تبقى جميع التنسيقات داخله ولا تتجاوز حدوده.',
        relatedMethods: ['css-cascade-layers', 'css-native-nesting'],
        keywords: ['@scope', 'Scoped CSS', 'doughnut scope', 'style isolation', 'component scoping']
    },
    {
        id: 'css-native-nesting',
        name: 'Native CSS Nesting',
        shortDescription: 'كتابة المحددات المتداخلة في CSS مباشرة دون الحاجة إلى Sass.',
        longDescription: 'ميزة مدمجة في CSS الحديثة تسمح بكتابة المحددات الفرعية داخل المحدد الرئيسي باستخدام الرمز & أو عبر التداخل المباشر، مما يجعل الشفرة أكثر تنظيماً ويقلل من تكرار المحددات.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* كتابة التنسيقات المتداخلة باستخدام CSS */
.nav-card {
  background-color: #0f172a;
  padding: 1.5rem;

  .card-btn {
    background-color: #3b82f6;

    &:hover {
      background-color: #1d4ed8;
    }
  }
}`
        ],
        expectedOutput: [
            'تطبيق التنسيقات المتداخلة بطريقة منظمة مع الحفاظ على وضوح بنية الكود.'
        ],
        professionalTips: 'اجعل التداخل محدوداً قدر الإمكان، ويفضل ألا يتجاوز مستويين أو ثلاثة، حتى يبقى الكود سهل القراءة والصيانة.',
        commonMistakes: {
            wrong: `/* التداخل العميق يصعب قراءة الكود */
.a {
  .b {
    .c {
      .d {
        .e {
          color: red;
        }
      }
    }
  }
}`,
            right: `.a .e {
  color: red;
}`,
            explanation: 'الإفراط في التداخل يجعل الكود أكثر تعقيداً ويصعب تتبعه، لذلك يُنصح باستخدامه عند الحاجة فقط.'
        },
        thinkingWay: 'تخيل التداخل كمجلدات داخل مجلد رئيسي؛ كل مستوى يحتوي ما يخصه دون تعقيد غير ضروري.',
        relatedMethods: ['css-scoped-css', 'css-bem-architecture'],
        keywords: ['Native CSS Nesting', 'CSS nesting', '& selector', 'Sass alternative', 'modern CSS']
    },
    {
        id: 'css-starting-style',
        name: '@starting-style Rule',
        shortDescription: 'تحديد الحالة الابتدائية للعنصر قبل بدء الانتقال عند ظهوره في الصفحة.',
        longDescription: 'قاعدة حديثة في CSS تُستخدم لتحديد الحالة الأولية للعنصر عند إدخاله إلى شجرة DOM أو عند انتقاله من حالة غير معروضة، مما يسمح بتنفيذ انتقالات سلسة دون الحاجة إلى حلول JavaScript.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `/* ظهور المودال بسلاسة عند فتحه */
dialog[open] {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.3s, transform 0.3s;

  @starting-style {
    opacity: 0;
    transform: translateY(-20px);
  }
}`
        ],
        expectedOutput: [
            'ظهور العنصر تدريجياً مع انتقال سلس من الحالة الابتدائية إلى الحالة النهائية بمجرد عرضه.'
        ],
        professionalTips: 'تُعد @starting-style خياراً مناسباً عند الحاجة إلى تشغيل انتقالات CSS للعناصر التي تظهر ديناميكياً، مثل مربعات الحوار والعناصر التي تُضاف إلى الصفحة أثناء التشغيل.',
        commonMistakes: {
            wrong: `/* توقع عمل transition مباشرة بعد تغيير display */
.box {
  display: none;
  opacity: 0;
  transition: opacity 0.3s;
}

.box.open {
  display: block;
  opacity: 1;
}`,
            right: `.box.open {
  display: block;
  opacity: 1;

  @starting-style {
    opacity: 0;
  }
}`,
            explanation: 'لا يستطيع المتصفح تنفيذ انتقال من display: none مباشرة، لذلك تساعد @starting-style على تحديد الحالة الابتدائية التي يبدأ منها الانتقال.'
        },
        thinkingWay: 'تخيل @starting-style كنقطة الانطلاق في سباق؛ يبدأ العنصر منها قبل أن ينتقل تدريجياً إلى حالته النهائية.',
        relatedMethods: ['css-transition-shorthand', 'html-dialog-tag'],
        keywords: ['@starting-style', 'entry animation', 'display none transition', 'popover animation', 'DOM entry CSS']
    },
    {
        id: 'css-bem-architecture',
        name: 'CSS BEM Methodology',
        shortDescription: 'منهجية لتسمية الكلاسات وتنظيم المكونات بطريقة واضحة وقابلة للتوسع.',
        longDescription: 'منهجية تنظيمية تعتمد على تقسيم الواجهة إلى ثلاثة أجزاء: Block (المكون الرئيسي)، وElement (العناصر التابعة له)، وModifier (النسخ أو الحالات المختلفة)، مما يجعل الكود أكثر وضوحاً وأسهل في الصيانة وإعادة الاستخدام.',
        difficulty: 'medium',
        importance: 'critical',
        examples: [
            `/* Block */
.card {}

/* Element */
.card__title {}
.card__button {}

/* Modifier */
.card__button--primary {}
.card--featured {}`
        ],
        expectedOutput: [
            'تنظيم أسماء الكلاسات بطريقة موحدة تسهّل قراءة الكود، وتقلل التعارض بين المكونات، وتدعم توسعة المشروع مستقبلاً.'
        ],
        professionalTips: 'احرص على الالتزام بقواعد التسمية نفسها في جميع أجزاء المشروع، لأن قوة BEM تكمن في توحيد أسلوب كتابة الكلاسات أكثر من كونها مجرد طريقة للتسمية.',
        commonMistakes: {
            wrong: `/* ربط عدة عناصر ببعضها داخل Element واحد */
.card__header__title__text {}`,
            right: `.card__title {}`,
            explanation: 'في BEM يرتبط Element مباشرةً بالـ Block، ولا يُنشأ Element داخل Element آخر باستخدام __ بشكل متكرر.'
        },
        thinkingWay: 'تخيل BEM كنظام تسمية للملفات داخل مشروع؛ لكل جزء اسم واضح يوضح انتماءه ووظيفته دون الحاجة إلى التخمين.',
        relatedMethods: ['css-class-selector', 'css-native-nesting'],
        keywords: ['BEM', 'Block Element Modifier', 'CSS architecture', 'naming convention', 'clean CSS']
    }
];