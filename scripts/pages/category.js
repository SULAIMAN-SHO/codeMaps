import { categories } from '../data/categories.js';
import { registry } from '../data/index.js';
import { CardComponent } from '../components/card.js';
import { ModalComponent } from '../components/modal.js';

/**
 * بناء وعرض صفحة تفاصيل الفئة والمنهجية المحددة ديناميكياً
 * @param {HTMLElement} container - الحاوية المستهدفة لعرض الصفحة
 * @param {string} categoryId - معرف التصنيف (القسم) المطلوب عرضه
 */
export function renderCategory(container, categoryId) {
  const category = categories.find(c => c.id === categoryId);

  // في حال تعذر العثور على القسم يتم عرض واجهة تنبيهية آمنة
  if (!category) {
    container.innerHTML = `
      <div class="empty-state fade-in">
        <div class="empty-state-icon">⚠️</div>
        <h2 class="empty-state-title">القسم المطلوب غير متوفر</h2>
        <p>قد يكون هذا القسم تم نقله أو إزالته؛ يرجى العودة للرئيسية والتصفح مجدداً.</p>
        <button class="back-btn" style="margin-top: 1.5rem;" onclick="window.location.hash='#/'">
          <span>→</span> العودة للرئيسية
        </button>
      </div>
    `;
    return;
  }

  // تحديد نص وهدف زر العودة الديناميكي بناءً على تقنية القسم
  let backLabel = 'العودة للرئيسية';
  let backHash = '#/';

  if (category.tech === 'html') {
    backLabel = 'العودة لمسار HTML5';
    backHash = '#/track/html';
  } else if (category.tech === 'css') {
    backLabel = 'العودة لمسار CSS3';
    backHash = '#/track/css';
  } else if (category.tech === 'javascript') {
    backLabel = 'العودة لمسار JavaScript';
    backHash = '#/track/javascript';
  } else if (category.tech === 'vscode') {
    backLabel = 'العودة لمسار إضافات VS Code';
    backHash = '#/track/vscode';
  } else if (category.tech === 'ai-tools') {
    backLabel = 'العودة لمسار أدوات الذكاء الاصطناعي';
    backHash = '#/track/ai-tools';
  } else if (category.tech === 'dev-tools') {
    backLabel = 'العودة لمسار أدوات ومواقع للمطورين';
    backHash = '#/track/dev-tools';
  } else if (category.tech === 'apps') {
    backLabel = 'العودة لمسار أدوات وتطبيقات';
    backHash = '#/track/apps';
  } else if (category.tech === 'our-creations') {
    backLabel = 'العودة لمسار من تطويرنا';
    backHash = '#/track/our-creations';
  } else if (category.tech === 'tech-reference-sub') {
    if (category.id.startsWith('tech-terms')) {
      backLabel = 'العودة لقسم المصطلحات التقنية';
      backHash = '#/category/tech-terms-main';
    } else if (category.id.startsWith('shortcuts')) {
      backLabel = 'العودة لقسم اختصارات تطبيقات';
      backHash = '#/category/shortcuts-main';
    } else {
      backLabel = 'العودة لمسار مصطلحات ومعلومات تقنية';
      backHash = '#/track/tech-reference';
    }
  } else if (category.tech === 'tech-reference') {
    backLabel = 'العودة لمسار مصطلحات ومعلومات تقنية';
    backHash = '#/track/tech-reference';
  }

  // بناء ترويسة التصنيف المحددة مع زر العودة التكيفي
  container.innerHTML = `
    <div class="category-header">
      <div class="category-meta">
        <h1>قسم ${category.arabicName}</h1>
        <p>${category.desc}</p>
      </div>
      <button class="back-btn" id="category-back-btn">
        <span>→</span> ${backLabel}
      </button>
    </div>
    
    <div id="category-content"></div>
  `;

  // ربط حدث النقر للعودة لمسار التقنية المحدد
  document.getElementById('category-back-btn').addEventListener('click', () => {
    window.location.hash = backHash;
  });

  const contentArea = document.getElementById('category-content');
  const methods = registry[categoryId];

  // معالجة الأقسام غير المكتملة بصرياً لحماية التشغيل ومنع الأخطاء البرمجية
  if (!methods || methods.length === 0) {
    contentArea.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">⚙️</div>
        <h2 class="empty-state-title">هذا القسم قيد التطوير الهندسي</h2>
        <p>نعمل حالياً على صياغة وتنسيق محتوى هذا القسم لضمان تقديم تجربة متميزة.</p>
      </div>
    `;
    return;
  }

  // فحص ما إذا كانت العناصر عبارة عن فئات فرعية (Sub-Categories) لعرضها كبطاقات فئات والتنقل لداخلها كمجلد
  const isSubCategoryList = Array.isArray(methods) && methods[0] && (methods[0].tech === 'tech-reference-sub' || (methods[0].arabicName && methods[0].desc && !methods[0].shortDescription));

  if (isSubCategoryList) {
    const grid = document.createElement('div');
    grid.className = 'card-grid';

    methods.forEach(subCategory => {
      const categoryCard = CardComponent.createCategoryCard(subCategory);
      grid.appendChild(categoryCard);
    });

    contentArea.appendChild(grid);
  } else {
    // تجميع وإبراز العناصر حسب المجموعات الفرعية (group) إن وجدت للتقسيم الداخلي المريح
    const hasGroups = methods.some(m => m.group);

    if (hasGroups) {
      const groups = {};
      methods.forEach(method => {
        const gName = method.group || 'عام';
        if (!groups[gName]) groups[gName] = [];
        groups[gName].push(method);
      });

      Object.keys(groups).forEach(groupTitle => {
        const sectionTitle = document.createElement('h2');
        sectionTitle.className = 'section-title';
        sectionTitle.style.cssText = 'font-size: 1.3rem; margin: 1.5rem 0 1rem; color: var(--accent-primary); border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;';
        sectionTitle.textContent = groupTitle;
        contentArea.appendChild(sectionTitle);

        const grid = document.createElement('div');
        grid.className = 'card-grid';

        groups[groupTitle].forEach(method => {
          const methodCard = CardComponent.createMethodCard(method, (selectedMethod) => {
            ModalComponent.open(selectedMethod);
          });
          grid.appendChild(methodCard);
        });

        contentArea.appendChild(grid);
      });
    } else {
      // جلب وحقن العناصر ديناميكياً بأسلوب الشبكة القياسي
      const grid = document.createElement('div');
      grid.className = 'card-grid';

      methods.forEach(method => {
        const methodCard = CardComponent.createMethodCard(method, (selectedMethod) => {
          ModalComponent.open(selectedMethod);
        });
        grid.appendChild(methodCard);
      });

      contentArea.appendChild(grid);
    }
  }
}