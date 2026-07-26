import { Illustrations } from './illustrations.js';
import { registry } from '../data/index.js'; // استيراد الفهرس المركزي لقراءة أطوال المصفوفات ديناميكياً
import { sanitizeHTML } from '../utils/helpers.js'; // استيراد دالة التطهير لحماية الـ innerHTML

export class CardComponent {
  /**
   * إنشاء بطاقة تصنيف ديناميكية لصفحة المعرض الرئيسية مدمج بها الرسم البصري والعد الفعلي للدوال
   * @param {Object} category - معلومات القسم البرمجي
   * @returns {HTMLElement} - عنصر البطاقة البرمجية الجاهز للحقن في الـ DOM
   */
  static createCategoryCard(category) {
    const card = document.createElement('div');
    card.className = 'premium-card hover-scale';
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `عرض قسم ${category.arabicName}`);

    // جلب الرسم التوضيحي المخصص للقسم ليكون جزءاً أصيلاً من هويته المعمارية
    const svgIllustration = Illustrations.get(category.id);

    // جلب دوال القسم من الفهرس المركزي وحساب عددها الفعلي
    const methodsList = registry[category.id] || [];
    const count = methodsList.length;

    // صياغة النص الإحصائي باللغة العربية السليمة بناءً على عدد الدوال الفعلي
    let footerText = 'قيد الإنشاء';
    if (count === 1) {
      footerText = 'دالة واحدة جاهزة';
    } else if (count === 2) {
      footerText = 'دالتان جاهزتان';
    } else if (count >= 3 && count <= 10) {
      footerText = `${count} دوال جاهزة`;
    } else if (count > 10) {
      footerText = `${count} دالة جاهزة`;
    }

    card.innerHTML = `
      <div class="card-illustration-wrapper" style="margin-bottom: 1.25rem; flex; justify-content: center; align-items: center; background-color: rgba(255,255,255,0.01); border-radius: var(--radius-sm); border: 1px dashed rgba(255,255,255,0.02); padding: 0.5rem 0; width: 100%;">
        ${svgIllustration}
      </div>
      <div class="card-header">
        <span class="card-title-en">${sanitizeHTML(category.name)}</span>
      </div>
      <p class="card-desc">${sanitizeHTML(category.desc)}</p>
      <div class="card-footer">
        <span style="color: var(--accent-primary); font-weight: 700;">
          ${footerText}
        </span>
      </div>
    `;

    // إتاحة التنقل الآمن للقسم عند التفاعل مع البطاقة
    card.addEventListener('click', () => {
      window.location.hash = `#/category/${category.id}`;
    });

    return card;
  }

  /**
   * إنشاء بطاقة دالة ديناميكية داخل صفحة القسم لعرض المفاهيم والطبقات
   * @param {Object} method - بيانات الدالة والطبقات السبعة الخاصة بها
   * @param {Function} onClickCallback - دالة التنفيذ العكسية عند النقر لفتح المودال
   * @returns {HTMLElement} - عنصر بطاقة الدالة الجاهز للحقن في الـ DOM
   */
  static createMethodCard(method, onClickCallback) {
    const card = document.createElement('div');
    card.className = 'premium-card hover-scale';
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `تفاصيل دالة ${method.name}`);

    // تعيين الصعوبة والأهمية لإضفاء التصنيف البصري المريح للمطور
    const difficultyLabel = method.difficulty === 'easy' ? 'سهل' : method.difficulty === 'medium' ? 'متوسط' : 'صعب';
    const importanceLabel = method.importance === 'critical' ? 'حرج' : method.importance === 'important' ? 'مهم' : 'اختياري';

    card.innerHTML = `
      <div class="card-header">
        <span class="card-title-en" style="color: var(--accent-primary);">${sanitizeHTML(method.name)}</span>
      </div>
      <p class="card-desc">${sanitizeHTML(method.shortDescription)}</p>
      <div class="card-footer">
        <div class="badge-container">
          <span class="badge badge-${method.difficulty}">${difficultyLabel}</span>
          <span class="badge badge-${method.importance}">${importanceLabel}</span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      if (typeof onClickCallback === 'function') {
        onClickCallback(method);
      }
    });

    return card;
  }
}