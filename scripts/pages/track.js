import { categories } from '../data/categories.js';
import { registry } from '../data/index.js';
import { CardComponent } from '../components/card.js';
import { ModalComponent } from '../components/modal.js';

export function renderTrack(container, techName) {
  // تصفية الأقسام لتشمل فقط الأقسام التابعة للتقنية المحددة
  const filteredCategories = categories.filter(c => c.tech === techName);

  // تحديد العنوان باللغة العربية بناءً على التقنية
  let trackTitle = 'الجافا سكريبت';
  if (techName === 'html') trackTitle = 'HTML5';
  if (techName === 'css') trackTitle = 'CSS3';
  if (techName === 'vscode') trackTitle = 'إضافات VS Code';
  if (techName === 'ai-tools') trackTitle = 'أدوات الذكاء الاصطناعي';
  if (techName === 'dev-tools') trackTitle = 'أدوات ومواقع للمطورين';

  if (filteredCategories.length === 0) {
    container.innerHTML = `
      <div class="empty-state fade-in">
        <div class="empty-state-icon">⚙️</div>
        <h2 class="empty-state-title">المسار قيد التطوير</h2>
        <p>نعمل حالياً على صياغة وتجهيز الأقسام المعمارية الخاصة بمسار ${trackTitle}.</p>
        <button class="back-btn" style="margin-top: 1.5rem;" onclick="window.location.hash='#/'">
          <span>→</span> العودة للرئيسية
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="category-header">
      <div class="category-meta">
        <h1>مسار ${trackTitle}</h1>
        <p>تصفح الأقسام المرجعية الأساسية المتاحة لتطوير عقليتك المعمارية في هذا المسار.</p>
      </div>
      <button class="back-btn" id="track-back-btn">
        <span>→</span> العودة للرئيسية
      </button>
    </div>
    <div id="track-content-area"></div>
  `;

  document.getElementById('track-back-btn').addEventListener('click', () => {
    window.location.hash = '#/';
  });

  const contentArea = document.getElementById('track-content-area');

  // معالجة العرض المباشر لـ VS Code و AI Tools (عناوين + كروت بنظام Flexbox)
  if (techName === 'vscode' || techName === 'ai-tools') {
    let allItems = [];
    filteredCategories.forEach(cat => {
      const catItems = registry[cat.id] || [];
      allItems.push(...catItems);
    });

    if (allItems.length === 0) {
      contentArea.innerHTML = `
              <div class="empty-state">
                <div class="empty-state-icon">⚙️</div>
                <h2 class="empty-state-title">قيد التطوير</h2>
                <p>نعمل حالياً على إضافة وتنسيق عناصر هذا المسار.</p>
              </div>
            `;
      return;
    }

    // تجميع العناصر حسب المجموعات (group)
    const groups = {};
    allItems.forEach(item => {
      const groupName = item.group || 'عام';
      if (!groups[groupName]) groups[groupName] = [];
      groups[groupName].push(item);
    });

    // عرض كل مجموعة تحت عنوان مستقل بنظام Flexbox
    Object.keys(groups).forEach(groupTitle => {
      const sectionTitle = document.createElement('h2');
      sectionTitle.className = 'section-title';
      sectionTitle.style.cssText = 'font-size: 1.3rem; margin: 1.5rem 0 1rem; color: var(--accent-primary); border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;';
      sectionTitle.textContent = groupTitle;
      contentArea.appendChild(sectionTitle);

      const flexContainer = document.createElement('div');
      flexContainer.style.cssText = 'display: flex; flex-wrap: wrap; gap: 1.25rem; margin-bottom: 2rem;';

      groups[groupTitle].forEach(item => {
        const cardElement = CardComponent.createMethodCard(item, (selected) => ModalComponent.open(selected));
        cardElement.style.cssText = 'flex: 1 1 280px; max-width: 100%;';
        flexContainer.appendChild(cardElement);
      });

      contentArea.appendChild(flexContainer);
    });
  } else {
    // العرض القياسي للأقسام الكبيرة (HTML, CSS, JS, Dev Tools)
    const grid = document.createElement('div');
    grid.className = 'card-grid';
    grid.setAttribute('dir', 'ltr');

    filteredCategories.forEach(category => {
      const cardElement = CardComponent.createCategoryCard(category);
      grid.appendChild(cardElement);
    });

    contentArea.appendChild(grid);
  }
}