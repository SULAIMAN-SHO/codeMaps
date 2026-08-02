import { Illustrations } from './illustrations.js';
import { registry } from '../data/index.js'; // استيراد الفهرس المركزي لقراءة أطوال المصفوفات ديناميكياً
import { sanitizeHTML } from '../utils/helpers.js'; // استيراد دالة التطهير لحماية الـ innerHTML

export class CardComponent {
  /**
   * إرجاع المصطلحات العربية المناسبة حسب المسار التقني (JavaScript, HTML, CSS)
   * @param {string} tech - المسار التقني للقسم
   * @returns {Object} - مصفوفة المسميات (مفرد، مثنى، جمع، جمع مع معطوف)
   */
  static getTerminologies(tech) {
    switch (tech) {
      case 'html':
        return {
          single: 'وسم واحد جاهز',
          dual: 'وسمان جاهزان',
          plural: 'وسوم جاهزة',
          singularOverTen: 'وسم جاهز'
        };
      case 'css':
        return {
          single: 'خاصية واحدة جاهزة',
          dual: 'خاصيتان جاهزتان',
          plural: 'خصائص جاهزة',
          singularOverTen: 'خاصية جاهزة'
        };
      case 'dev-tools':
        return {
          single: 'موقع واحد جاهز',
          dual: 'موقعان جاهزان',
          plural: 'مواقع جاهزة',
          singularOverTen: 'موقع جاهز'
        };
      case 'vscode':
        return {
          single: 'إضافة واحدة جاهزة',
          dual: 'إضافتان جاهزتان',
          plural: 'إضافات جاهزة',
          singularOverTen: 'إضافة جاهزة'
        };
      case 'ai-tools':
        return {
          single: 'أداة واحدة جاهزة',
          dual: 'أداتان جاهزتان',
          plural: 'أدوات جاهزة',
          singularOverTen: 'أداة جاهزة'
        };
      case 'javascript':
      default:
        return {
          single: 'دالة واحدة جاهزة',
          dual: 'دالتان جاهزتان',
          plural: 'دوال جاهزة',
          singularOverTen: 'دالة جاهزة'
        };
    }
  }

  /**
   * إنشاء بطاقة تصنيف ديناميكية لصفحة المعرض الرئيسية مدمج بها الرسم البصري والعد الفعلي للعناصر
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

    // جلب عناصر القسم من الفهرس المركزي وحساب عددها الفعلي
    const methodsList = registry[category.id] || [];
    const count = methodsList.length;

    // جلب المصطلحات العربية المناسبة لتقنية القسم الحالية (html / css / javascript)
    const terms = CardComponent.getTerminologies(category.tech);

    // صياغة النص الإحصائي باللغة العربية السليمة والمطابقة للتقنية
    let footerText = 'قيد الإنشاء';
    if (count === 1) {
      footerText = terms.single;
    } else if (count === 2) {
      footerText = terms.dual;
    } else if (count >= 3 && count <= 10) {
      footerText = `${count} ${terms.plural}`;
    } else if (count > 10) {
      footerText = `${count} ${terms.singularOverTen}`;
    }

    // إصلاح الـ inline styles في حاوية الـ svg وتطبيق flex بشكل صحيح
    card.innerHTML = `
      <div class="card-illustration-wrapper" style="margin-bottom: 1.25rem; display: flex; justify-content: center; align-items: center; background-color: rgba(255,255,255,0.01); border-radius: var(--radius-sm); border: 1px dashed rgba(255,255,255,0.02); padding: 0.5rem 0; width: 100%;">
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
    * إنشاء بطاقة دالة/عنصر/موقع/إضافة ديناميكية مجهزة بالأيقونة والأزرار المخصصة
    * @param {Object} method - بيانات الدالة أو الأداة أو الإضافة
    * @param {Function} onClickCallback - دالة التنفيذ العكسية عند النقر لفتح المودال
    * @returns {HTMLElement} - عنصر البطاقة الجاهز للحقن في الـ DOM
    */
  static createMethodCard(method, onClickCallback) {
    const card = document.createElement('div');
    card.className = 'premium-card hover-scale';
    card.style.position = 'relative';
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `تفاصيل ${method.name}`);

    // إضافة مربع تحديد تفاعلي مخصص لإضافات VS Code
    let selectCheckboxHTML = '';
    if (method.type === 'vscode-extension') {
      selectCheckboxHTML = `
        <div class="ext-select-wrapper" style="position: absolute; top: 0.85rem; left: 0.85rem; z-index: 3;" onclick="event.stopPropagation();">
          <input type="checkbox" class="ext-checkbox" data-ext-id="${sanitizeHTML(method.id)}" data-install-url="${sanitizeHTML(method.installUrl)}" style="width: 18px; height: 18px; cursor: pointer; accent-color: var(--accent-primary);" />
        </div>
      `;
    }

    // معالجة الأيقونة/الشعار إن وجد في بيانات العنصر
    let iconHTML = '';
    if (method.icon) {
      if (method.icon.trim().startsWith('<svg')) {
        iconHTML = `<div class="card-icon-wrapper" style="margin-bottom: 0.75rem; display: flex; justify-content: center; align-items: center; min-height: 48px;">${method.icon}</div>`;
      } else {
        iconHTML = `<div class="card-icon-wrapper" style="margin-bottom: 0.75rem; display: flex; justify-content: center; align-items: center; min-height: 48px;"><img src="${sanitizeHTML(method.icon)}" alt="${sanitizeHTML(method.name)}" style="max-height: 48px; max-width: 48px; object-fit: contain;" /></div>`;
      }
    }

    // صياغة التذييل والأزرار حسب نوع العنصر (موقع، إضافة، أداة ذكاء اصطناعي، دالة برمجية)
    let footerHTML = '';
    if (method.type === 'website' || method.type === 'ai-tool') {
      footerHTML = `
        <div style="display: flex; gap: 0.5rem; width: 100%; justify-content: space-between; align-items: center; margin-top: 0.75rem;">
          <a href="${sanitizeHTML(method.url || '#')}" target="_blank" rel="noopener noreferrer" class="btn-action-primary" style="padding: 0.45rem 0.85rem; background: var(--accent-primary); color: #fff; border-radius: var(--radius-sm); font-size: 0.85rem; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 0.3rem;" onclick="event.stopPropagation();">
            🔗 زيارة الموقع
          </a>
          <button class="btn-action-secondary details-btn" style="padding: 0.45rem 0.85rem; background: var(--bg-tertiary); color: var(--text-primary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-size: 0.85rem; font-weight: 700; cursor: pointer;">
            📖 المزيد
          </button>
        </div>
      `;
    } else if (method.type === 'vscode-extension') {
      footerHTML = `
        <div style="display: flex; gap: 0.5rem; width: 100%; justify-content: space-between; align-items: center; margin-top: 0.75rem;">
          <a href="${sanitizeHTML(method.installUrl || '#')}" class="btn-action-primary" style="padding: 0.45rem 0.85rem; background: #007acc; color: #fff; border-radius: var(--radius-sm); font-size: 0.85rem; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 0.3rem;" onclick="event.stopPropagation();">
            ⚡ تثبيت
          </a>
          <button class="btn-action-secondary details-btn" style="padding: 0.45rem 0.85rem; background: var(--bg-tertiary); color: var(--text-primary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-size: 0.85rem; font-weight: 700; cursor: pointer;">
            📖 المزيد
          </button>
        </div>
      `;
    } else {
      const difficultyLabel = method.difficulty === 'easy' ? 'سهل' : method.difficulty === 'medium' ? 'متوسط' : 'صعب';
      const importanceLabel = method.importance === 'critical' ? 'حرج' : method.importance === 'important' ? 'مهم' : 'اختياري';
      footerHTML = `
        <div class="badge-container">
          <span class="badge badge-${method.difficulty}">${difficultyLabel}</span>
          <span class="badge badge-${method.importance}">${importanceLabel}</span>
        </div>
      `;
    }

    card.innerHTML = `
      ${selectCheckboxHTML}
      ${iconHTML}
      <div class="card-header">
        <span class="card-title-en" style="color: var(--accent-primary);">${sanitizeHTML(method.name)}</span>
      </div>
      <p class="card-desc">${sanitizeHTML(method.shortDescription)}</p>
      <div class="card-footer">
        ${footerHTML}
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