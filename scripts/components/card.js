import { Illustrations } from './illustrations.js';
import { registry } from '../data/index.js'; // استيراد الفهرس المركزي لقراءة أطوال المصفوفات ديناميكياً
import { sanitizeHTML } from '../utils/helpers.js'; // استيراد دالة التطهير لحماية الـ innerHTML

export class CardComponent {
  /**
   * إرجاع المصطلحات العربية المناسبة حسب المسار التقني (JavaScript, HTML, CSS)
   * @param {string} tech - المسار التقني للقسم
   * @returns {Object} - مصفوفة المسميات (مفرد، مثنى، جمع، جمع مع معطوف)
   */
  static getTerminologies(tech, categoryId) {
    if (categoryId === 'file-formats' || categoryId === 'image-formats' || categoryId === 'video-formats') {
      return {
        single: 'صيغة واحدة جاهزة',
        dual: 'صيغتان جاهزتان',
        plural: 'صيغ جاهزة',
        singularOverTen: 'صيغة جاهزة'
      };
    }
    // تخصيص كلمة "اختصارات" للكروت الفرعية الداخلية فقط دون الكارت الرئيسي
    if (categoryId && categoryId.startsWith('shortcuts-') && categoryId !== 'shortcuts-main') {
      return {
        single: 'اختصار واحد جاهز',
        dual: 'اختصاران جاهزان',
        plural: 'اختصارات جاهزة',
        singularOverTen: 'اختصار جاهز'
      };
    }

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
      case 'apps':
      case 'our-creations':
        return {
          single: 'تطبيق واحد جاهز',
          dual: 'تطبيقان جاهزان',
          plural: 'تطبيقات جاهزة',
          singularOverTen: 'تطبيق جاهز'
        };
      case 'tech-reference':
        return {
          single: 'قسم واحد جاهز',
          dual: 'قسمان جاهزان',
          plural: 'أقسام جاهزة',
          singularOverTen: 'قسم جاهز'
        };
      case 'tech-reference-sub':
        return {
          single: 'مصطلح واحد جاهز',
          dual: 'مصطلحان جاهزان',
          plural: 'مصطلحات جاهزة',
          singularOverTen: 'مصطلح جاهز'
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
    card.setAttribute('data-tech', category.tech || '');
    card.setAttribute('data-category-id', category.id || '');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `عرض قسم ${category.arabicName}`);

    // معالجة الأيقونة أو المجسم ثلاثي الأبعاد (3D Model) أو الصورة الفردية المخصصة للتصنيف
    let illustrationHTML = '';
    const src = category.model3d || category.image || category.icon;

    if (category.model3d || (src && (src.endsWith('.glb') || src.endsWith('.gltf')))) {
      const modelPath = category.model3d || src;
      illustrationHTML = `<model-viewer src="${sanitizeHTML(modelPath)}" auto-rotate interaction-prompt="none" rotation-per-second="50deg" disable-zoom shadow-intensity="1" exposure="1" environment-image="neutral" style="width: 100px; height: 100px; display: block; margin: 0 auto; pointer-events: none;"></model-viewer>`;
    } else if (src) {
      if (src.trim().startsWith('<svg')) {
        illustrationHTML = src;
      } else {
        const cleanSrc = src.replace(/&amp;/g, '&');
        let domainFallback = 'google.com';
        try { if (category.url) domainFallback = new URL(category.url).hostname; } catch (e) { }
        illustrationHTML = `<img src="${cleanSrc}" alt="${sanitizeHTML(category.arabicName)}" style="max-height: 72px; max-width: 72px; object-fit: contain; border-radius: 6px;" onerror="this.onerror=null; this.src='https://www.google.com/s2/favicons?domain=${domainFallback}&sz=128';" />`;
      }
    } else {
      illustrationHTML = Illustrations.get(category.id);
    }

    // جلب عناصر القسم من الفهرس المركزي وحساب عددها الفعلي
    const methodsList = registry[category.id] || [];
    const count = methodsList.length;

    // جلب المصطلحات العربية المناسبة لتقنية ومعرف القسم الحالية مع تمرير المعرف
    const terms = CardComponent.getTerminologies(category.tech, category.id);

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
      <div class="card-illustration-wrapper" style="margin-bottom: 1.25rem; display: flex; justify-content: center; align-items: center; background-color: rgba(255,255,255,0.01); border-radius: var(--radius-sm); border: 1px dashed rgba(255,255,255,0.02); padding: 0.5rem 0; width: 100%; min-height: 110px;">
        ${illustrationHTML}
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

    // معالجة الأيقونة/الشعار إن وجد في بيانات العنصر مع دعم السقوط الآمن عند تعذر التحميل
    let iconHTML = '';
    if (method.icon) {
      if (method.icon.trim().startsWith('<svg')) {
        iconHTML = `<div class="card-icon-wrapper" style="margin-bottom: 0.75rem; display: flex; justify-content: center; align-items: center; min-height: 48px;">${method.icon}</div>`;
      } else {
        const cleanSrc = method.icon.replace(/&amp;/g, '&');
        let domainFallback = 'google.com';
        try {
          if (method.url) domainFallback = new URL(method.url).hostname;
        } catch (e) { }

        iconHTML = `<div class="card-icon-wrapper" style="margin-bottom: 0.75rem; display: flex; justify-content: center; align-items: center; min-height: 48px;">
          <img src="${cleanSrc}" alt="${sanitizeHTML(method.name)}" style="max-height: 48px; max-width: 48px; object-fit: contain; border-radius: 6px;" onerror="this.onerror=null; this.src='https://www.google.com/s2/favicons?domain=${domainFallback}&sz=128';" />
        </div>`;
      }
    }


    // صياغة التذييل والأزرار حسب نوع العنصر (موقع، إضافة، أداة ذكاء اصطناعي، تطبيق، دالة برمجية)
    let footerHTML = '';
    if (method.type === 'website' || method.type === 'ai-tool' || method.type === 'app') {
      const btnLabel = method.type === 'app' ? '💻 فتح / تحميل' : '🔗 زيارة الموقع';
      footerHTML = `
        <div style="display: flex; gap: 0.5rem; width: 100%; justify-content: space-between; align-items: center; margin-top: 0.75rem;">
          <a href="${sanitizeHTML(method.url || '#')}" target="_blank" rel="noopener noreferrer" class="btn-action-primary" style="padding: 0.45rem 0.85rem; background: var(--accent-primary); color: #fff; border-radius: var(--radius-sm); font-size: 0.85rem; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 0.3rem;" onclick="event.stopPropagation();">
            ${btnLabel}
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
    } else if (method.type === 'tech-reference') {
      footerHTML = `
        <div style="display: flex; justify-content: center; width: 100%; margin-top: 0.75rem;">
          <button class="btn-action-secondary details-btn" style="padding: 0.45rem 1.25rem; width:100%; background: var(--bg-tertiary); color: var(--text-primary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-size: 0.85rem; font-weight: 700; cursor: pointer;">
            📖 التفاصيل والشرح
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