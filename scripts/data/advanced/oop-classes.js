export const oopClassesData = [
    {
        id: 'oop-classes-basics',
        name: 'Classes & Constructor',
        shortDescription: 'القالب البرمجي لإنشاء كائنات مترابطة تجمع البيانات والوظائف داخل بنية تنظيمية موحدة.',
        longDescription: 'تم تقديم الكلاسات (Classes) في ES6 كبديل مالي وأكثر وضوحاً لنموذج الوراثة القائم على النماذج الأصلية (Prototypes). يُعد الكلاس بمثابة مخطط أو قالب برمي (Blueprint) يُستخدم لتوليد كائنات متعددة ذات خصائص ووظائف مشتركة. وتُعتبر الدالة الخاصة constructor هي المسؤولة عن تهيئة وتعيين البيانات الابتدائية فور إنشاء نسخة جديدة من الكلاس باستخدام الكلمة المفتاحية new.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `// تعريف كلاس لإدارة محرك البحث (SearchEngine) محاكاةً لهيكل المشروع
class SearchEngine {
  // دالة التهيئة والتشغيل التلقائي
  constructor(indexData) {
    this.index = indexData; // حفظ البيانات في ذاكرة الكائن النشط
    console.log('تم تهيئة محرك البحث ببيانات معارف:', this.index.length);
  }

  // طريقة عادية (Instance Method) تعمل على النسخ المنتجة فقط
  search(query) {
    const trimmed = query.trim().toLowerCase();
    return this.index.filter(item => item.name.toLowerCase().includes(trimmed));
  }
}

// إنشاء نسخة حية ومستقلة من الكلاس (Instantiation)
const mySearchIndex = [ { name: 'map' }, { name: 'filter' } ];
const searchService = new SearchEngine(mySearchIndex);

const results = searchService.search('ma');
console.log('نتائج البحث الفورية:', results);`
        ],
        expectedOutput: [
            "تم تهيئة محرك البحث ببيانات معارف: 2\\nنتائج البحث الفورية: [ { name: 'map' } ]"
        ],
        professionalTips: 'على الرغم من استخدام الكلمة المفتاحية class، تذكر دائماً أن جافا سكريبت لا تدعم الكلاسات الحقيقية بالمعنى التقليدي للغات الـ OOP (مثل C# أو Java)؛ حيث يقوم المحرك خلف الكواليس بتحويل الكلاس بالكامل إلى دالة مشيدة تقليدية (Constructor Function) وتطبيق الوراثة على النموذج الأصلي (Prototype Inheritance). الكلاسات في جافا سكريبت هي مجرد "سكر برمجي" (Syntactic Sugar) لتسهيل القراءة وتوحيد التسميات الهيكلية للمشروع.',
        commonMistakes: {
            wrong: `// خطأ شائع: محاولة استدعاء دالة الكلاس وتطبيقها مباشرة دون استخدام الكلمة المفتاحية new
class Router {}
const router = Router(); // خطأ مباشر: TypeError: Class constructor Router cannot be invoked without 'new'`,
            right: `// استخدام new لإنشاء مرجع الذاكرة وتشغيل دالة التهيئة constructor بنجاح
class Router {}
const router = new Router(); // تعمل بنجاح كامل وتنتج كائناً جديداً`,
            explanation: 'تفرض مواصفات اللغة ألا يتم استدعاء الكلاسات كدوال عادية. الكلمة المفتاحية new هي الميكانيكية الوحيدة التي تطلب من المحرك تخصيص موقع في الذاكرة (Memory Allocation) وإنشاء كائن يربطه بالنموذج الأصلي للكلاس وتشغيل الـ constructor لملئه.'
        },
        thinkingWay: 'استخدم الكلاسات عندما تصمم أنظمة تتطلب الحفاظ على الحالة البرمجية تفاعلياً وتحديثها باستمرار (Stateful Systems)؛ مثل بناء موجهات الصفحات (Routers)، محركات البحث المحلية (Search Engines)، أو خدمات تخزين البيانات التي تتفاعل مع واجهات خارجية بشكل متكرر.',
        relatedMethods: ['oop-static-methods'],
        keywords: ['class', 'constructor', 'new', 'oop', 'blueprint', 'instantiation', 'instance methods', 'prototype']
    },
    {
        id: 'oop-static-methods',
        name: 'Static Methods & Properties',
        shortDescription: 'تعريف دوال وخواص تابعة للكلاس ذاته دون الحاجة لإنشاء نسخة جديدة منه.',
        longDescription: 'تُعرّف الطرق والخصائص الساكنة باستخدام الكلمة المفتاحية static. تتميز هذه الطرق بأنها ترتبط بالكلاس ذاته وليس بالنسخ المنتجة منه (Instances). لا يمكن استخدام الكلمة المفتاحية this داخل الطرق الساكنة للإشارة لخصائص النسخ، وتُستخدم بشكل قياسي لبناء دوال الخدمات العامة التي لا تتطلب حفظ الحالة الفردية للنسخ المكررة.',
        difficulty: 'hard',
        importance: 'critical',
        examples: [
            `// تعريف مكون واجهة فرعي تفاعلي (CardComponent) يعتمد بالكامل على الطرق الساكنة
class CardComponent {
  // طريقة ساكنة (Static Method) لإنشاء كروت برمجية
  static createCard(title, description) {
    const cardElement = document.createElement('div');
    cardElement.className = 'premium-card';
    cardElement.innerHTML = \`
      <h3>\${title}</h3>
      <p>\${description}</p>
    \`;
    return cardElement;
  }
}

// استدعاء مباشر للطريقة من اسم الكلاس مباشرة دون كتابة new CardComponent()
const myNewCard = CardComponent.createCard('دالة map', 'تستخدم لتحويل البيانات');
console.log('مكون الكرت المنتج:', myNewCard.outerHTML);`
        ],
        expectedOutput: [
            "مكون الكرت المنتج: <div class=\"premium-card\"><h3>دالة map</h3><p>تستخدم لتحويل البيانات</p></div>"
        ],
        professionalTips: 'استخدم الطرق الساكنة (Static Methods) عندما ترغب في تقديم وظائف عامة مفيدة للواجهة لا تحتفظ بحالة برمجية تفاعلية تتغير من كائن لآخر (Stateless Utilities). تلاحظ في مشروعك أن مكونات التصميم مثل ModalComponent و CardComponent تم بناؤها بالكامل بطرق ساكنة، وهو ما يعتبر ممارسة ممتازة لتقليل استخدام ذاكرة المتصفح وتفادي إنشاء تكرارات كائنات غير مبررة.',
        commonMistakes: {
            wrong: `// خطأ شائع: محاولة استدعاء طريقة ساكنة من نسخة حية من الكلاس
class ModalComponent {
  static open() { console.log('تم فتح النافذة'); }
}
const modal = new ModalComponent();
modal.open(); // خطأ مباشر: TypeError: modal.open is not a function`,
            right: `// استدعاء الطريقة الساكنة من الكلاس مباشرة دون وسيط
class ModalComponent {
  static open() { console.log('تم فتح النافذة بأمان تام'); }
}
ModalComponent.open(); // الاستدعاء الصحيح والقياسي المقبول`,
            explanation: 'الطرق الساكنة لا يتم توريثها للنسخ الفردية (Instances) المنتجة بـ new، بل تبقى مرتبطة بكائن الكلاس الأصلي كخاصية تابعة له، وتصميمها يمنع تكرارها بالذاكرة.'
        },
        thinkingWay: 'استخدم الكلمة المفتاحية static عندما تريد تجميع أدوات مساعدة مترابطة وظيفياً داخل حاوية واحدة (مثل كلاس للعمليات الحسابية، أو كلاس لتوليد عناصر الواجهة) عندما لا يتطلب الكود تشكيل بيانات فريدة ومستقلة لكل نسخة.',
        relatedMethods: ['oop-classes-basics'],
        keywords: ['static', 'static methods', 'stateless', 'utilities', 'CardComponent', 'ModalComponent', 'classes']
    }
];