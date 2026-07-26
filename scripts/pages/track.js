import { categories } from '../data/categories.js';
import { CardComponent } from '../components/card.js';

export function renderTrack(container, techName) {
    // تصفية الأقسام لتشمل فقط الأقسام التابعة للتقنية المحددة
    const filteredCategories = categories.filter(c => c.tech === techName);

    // تحديد العنوان باللغة العربية بناءً على التقنية
    let trackTitle = 'الجافا سكريبت';
    if (techName === 'html') trackTitle = 'HTML5';
    if (techName === 'css') trackTitle = 'CSS3';

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
    <div dir="ltr" class="card-grid" id="track-category-grid"></div>
  `;

    document.getElementById('track-back-btn').addEventListener('click', () => {
        window.location.hash = '#/';
    });

    const grid = document.getElementById('track-category-grid');
    filteredCategories.forEach(category => {
        const cardElement = CardComponent.createCategoryCard(category);
        grid.appendChild(cardElement);
    });
}