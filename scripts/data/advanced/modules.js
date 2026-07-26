export const modulesData = [
  {
    id: 'es-modules-named',
    name: 'Named Exports & Imports',
    shortDescription: 'تصدير واستيراد دوال ومتغيرات متعددة من وإلى ملفات تطبيقك البرمجي بأسلوب منظم ودقيق.',
    longDescription: 'نظام الوحدات البرمجية القياسي في جافا سكريبت (ES Modules) يتيح تقسيم الكود البرمجي الكبير إلى ملفات مستقلة يسهل صيانتها واختبارها. تسمح ميزة التصدير المسمى (Named Export) بتصدير دوال أو كائنات أو متغيرات متعددة من نفس الملف البرمجي باستخدام أسمائها الصريحة، ويتطلب استيرادها استخدام الأقواس المتعرجة {} مع إمكانية استخدام أسماء مستعارة (Aliases) لتفادي تداخل التسميات.',
    difficulty: 'medium',
    importance: 'critical',
    examples: [
`// 1. تصدير دوال متعددة من ملف الأدوات المساعدة: scripts/utils/helpers.js
export const sanitizeHTML = (str) => {
  /* معالجة النصوص */
  return str;
};

export const debounce = (func, wait) => {
  /* تأخير الاستدعاء */
};

// 2. استيراد واستخدام الدوال المحددة في ملف آخر: scripts/app.js
import { sanitizeHTML, debounce as delayAction } from './utils/helpers.js';

const cleanText = sanitizeHTML('<h3>نص ممرر</h3>');
console.log('النص المنقى:', cleanText);`
    ],
    expectedOutput: [
      "النص المنقى: <h3>نص ممرر</h3> (أو النص المعالج حسب دالتك)"
    ],
    professionalTips: 'عند استخدام التصدير والاستيراد المسمى داخل المتصفح بشكل مباشر (بدون استخدام حزم البناء مثل Webpack أو Vite)، تذكر دائماً تدوين الامتداد الكامل للملف .js في مسار الاستيراد (مثال: "./router.js" وليس "./router")، كما يجب إضافة السمة type="module" لوسم الـ script في ملف الـ HTML الرئيسي لتنبيه المتصفح لتفسير الكود بأسلوب الوحدات البرمجية الحديثة.',
    commonMistakes: {
      wrong: `// محاولة استيراد تصدير مسمى دون استخدام الأقواس المتعرجة
import sanitizeHTML from './utils/helpers.js'; // خطأ مباشر: سيفشل السكربت لأن sanitizeHTML ليس تصديراً افتراضياً (Default)`,
      right: `// استخدام الأقواس المتعرجة لاستيراد التصديرات المسماة بدقة
import { sanitizeHTML } from './utils/helpers.js'; // استدعاء سليم ومطابق`,
      explanation: 'التصدير المسمى يتم تنظيمه ككائن يحتوي على مفاتيح بأسماء المتغيرات المصدرة. المتصفح لا يستطيع قراءتها وفكها بنجاح إلا عند تغليف المستدعى بالأقواس المتعرجة {} لمطابقة المفاتيح.'
    },
    thinkingWay: 'استخدم التصدير المسمى (Named Export) كمعيار أساسي لمعظم أدواتك البرمجية وملفات الخدمات (Services/Utilities) عندما تشتمل هذه الملفات على دوال أو ثوابت متعددة مستقلة، لتوفر لزملائك مرونة جلب الأدوات المطلوبة فقط دون تحميل كتل كود غير مستعملة (مما يسهل عملية تصفية الكود الميت Tree Shaking).',
    relatedMethods: ['es-modules-default'],
    keywords: ['import', 'export', 'ES Modules', 'modules', 'tree shaking', 'type="module"', 'alias', 'named export']
  },
  {
    id: 'es-modules-default',
    name: 'Default Exports & Imports',
    shortDescription: 'تصدير قيمة أساسية فريدة من الملف البرمجي واستيرادها مباشرة دون الحاجة لأقواس متعرجة.',
    longDescription: 'يتيح نظام التصدير الافتراضي (Default Export) تحديد قيمة قياسية رئيسية واحدة وتصديرها من الملف البرمجي (مثل تصدير كلاس كائن كامل، أو دالة محورية واحدة). يسمح هذا الأسلوب باستيراد القيمة المصدرة في الملفات الأخرى باسم حر ومباشر من اختيارك ودون الحاجة لاستخدام الأقواس المتعرجة {}.',
    difficulty: 'medium',
    importance: 'critical',
    examples: [
`// 1. تصدير فئة توجيه الصفحات كقيمة افتراضية: scripts/router/router.js
export default class Router {
  constructor() {
    console.log('تم إنشاء موجه الصفحات بنجاح');
  }
}

// 2. استيراد الفئة واستخدامها باسم مخصص دون أقواس متعرجة: scripts/app.js
import AppRouter from './router/router.js'; // استدعاء حر بدون {}

const router = new AppRouter();`
    ],
    expectedOutput: [
      "تم إنشاء موجه الصفحات بنجاح"
    ],
    professionalTips: 'وفقاً لأفضل ممارسات هندسة البرمجيات المعاصرة، حدد لكل ملف برمي هدفاً وظيفياً وحيداً (Single Responsibility Principle). استخدام التصدير الافتراضي (Default Export) للملفات التي تحتوي على فئة برمجية وحيدة (Class) أو مكون واجهة وحيد (Component) يوضح لزملائك فوراً المخرج الأساسي المأمول من هذا الملف ويجعل كتابة مسارات الاستيراد أكثر أناقة.',
    commonMistakes: {
      wrong: `// خطأ شائع: محاولة كتابة أكثر من تصدير افتراضي واحد داخل نفس الملف البرمجي
export default class Router {}
export default class CacheManager {} // خطأ مباشر: SyntaxError: Only one default export allowed per module`,
      right: `// دمج التصدير الافتراضي للمحور الأساسي مع إمكانية تصدير ثوابت فرعية مسماة بالتوازي
export default class Router {}
export const ROUTER_VERSION = '1.0'; // تصدير مسمى فرعي مسموح به بجانب الافتراضي`,
      explanation: 'يقيد معيار ES Modules الملف بتصدير افتراضي وحيد كونه يمثل البوابة الاحتياطية للملف عند الاستدعاء الحر. ومع ذلك، تسمح اللغة بدمج التصديرات المسماة بجانب التصدير الافتراضي لمرونة إضافية.'
    },
    thinkingWay: 'استخدم التصدير الافتراضي عندما تصمم ملفات تمثل وحدات هيكلية رئيسية صلبة ومستقلة بذاتها؛ مثل فئات الفلاتر والمكونات (Classes/Components)، أو الدوال المحورية الضخمة لتعريف الأنظمة لتسريع تجربة كتابة واستيراد هذه المكونات.',
    relatedMethods: ['es-modules-named'],
    keywords: ['export default', 'import', 'modules', 'class export', 'ES Modules', 'default import', 'architecture']
  }
];