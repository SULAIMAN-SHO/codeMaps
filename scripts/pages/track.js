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
  if (techName === 'apps') trackTitle = 'أدوات وتطبيقات';
  if (techName === 'our-creations') trackTitle = 'من تطويرنا';
  if (techName === 'tech-reference') trackTitle = 'مصطلحات ومعلومات تقنية';

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

  // معالجة العرض المباشر لـ VS Code و AI Tools ومن تطويرنا (عناوين + كروت بنظام Flexbox)
    if (techName === 'vscode' || techName === 'ai-tools' || techName === 'our-creations') {
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

        // إضافة شريط التثبيت الجماعي المخصص لإضافات VS Code
        if (techName === 'vscode') {
            const batchBar = document.createElement('div');
            batchBar.className = 'batch-install-bar';
            batchBar.style.cssText = 'background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem 1.25rem; margin-bottom: 1.5rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;';
            
            batchBar.innerHTML = `
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <label style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700; cursor: pointer; color: var(--text-primary); font-size: 0.95rem;">
                  <input type="checkbox" id="select-all-exts" style="width: 18px; height: 18px; accent-color: var(--accent-primary); cursor: pointer;" />
                  تحديد الكل
                </label>
                <span id="selected-count-badge" class="badge" style="background: rgba(255,255,255,0.05); color: var(--accent-primary); border: 1px solid var(--border-color); font-size: 0.85rem;">المحدد: 0 إضافة</span>
              </div>
              <button id="batch-copy-cmd-btn" style="padding: 0.6rem 1.25rem; background: #007acc; color: #ffffff; border: none; border-radius: var(--radius-sm); font-size: 0.9rem; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 0.4rem; box-shadow: 0 4px 12px rgba(0, 122, 204, 0.35);">
                🚀 تثبيت الحزمة المحددة بضغطة زر
              </button>
            `;
            
            contentArea.appendChild(batchBar);
            
            setTimeout(() => {
                const selectAllCb = document.getElementById('select-all-exts');
                const countBadge = document.getElementById('selected-count-badge');
                const copyCmdBtn = document.getElementById('batch-copy-cmd-btn');

                const updateCount = () => {
                    const checked = document.querySelectorAll('.ext-checkbox:checked');
                    if (countBadge) {
                        countBadge.textContent = `المحدد: ${checked.length} إضافة`;
                    }
                };

                if (selectAllCb) {
                    selectAllCb.addEventListener('change', (e) => {
                        const allCbs = document.querySelectorAll('.ext-checkbox');
                        allCbs.forEach(cb => {
                            cb.checked = e.target.checked;
                        });
                        updateCount();
                    });
                }

                contentArea.addEventListener('change', (e) => {
                    if (e.target.classList.contains('ext-checkbox')) {
                        updateCount();
                    }
                });

                if (copyCmdBtn) {
                    copyCmdBtn.addEventListener('click', () => {
                        const checkedCbs = document.querySelectorAll('.ext-checkbox:checked');
                        if (checkedCbs.length === 0) {
                            ModalComponent.toast({
                                title: 'تنبيه التحديد',
                                message: 'يرجى تحديد إضافة واحدة على الأقل لتثبيت الحزمة.',
                                type: 'warning'
                            });
                            return;
                        }

                        const extIds = Array.from(checkedCbs).map(cb => cb.getAttribute('data-ext-id')).filter(Boolean);
                        const cliCommand = `code ${extIds.map(id => `--install-extension ${id}`).join(' ')}`;

                        navigator.clipboard.writeText(cliCommand).then(() => {
                            ModalComponent.toast({
                                title: 'تم تجهيز أمر التثبيت الشامل بنجاح',
                                message: 'تم نسخ أمر السطر البرمجي الموحد لجميع الإضافات المحددة إلى الحافظة! للتثبيت الفوري بدون أي رسائل متصفح:\n1. افتح Terminal أو PowerShell في حاسوبك.\n2. الصق الأمر المنسوخ واضغط Enter.',
                                code: cliCommand,
                                type: 'success'
                            });
                        }).catch(() => {
                            ModalComponent.toast({
                                title: 'تنبيه النسخ',
                                message: 'تعذر النسخ التلقائي للحافظة، يرجى منح المتصفح إذن النسخ.',
                                type: 'warning'
                            });
                        });
                    });
                }
            }, 50);
        }

        // تجميع وعرض العناصر سواء بـ group أو كروت مباشرة
        const hasGroups = allItems.some(item => item.group);

        if (hasGroups) {
            const groups = {};
            allItems.forEach(item => {
                const groupName = item.group || 'عام';
                if (!groups[groupName]) groups[groupName] = [];
                groups[groupName].push(item);
            });

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
            const flexContainer = document.createElement('div');
            flexContainer.style.cssText = 'display: flex; flex-wrap: wrap; gap: 1.25rem; margin-bottom: 2rem;';

            allItems.forEach(item => {
                const cardElement = CardComponent.createMethodCard(item, (selected) => ModalComponent.open(selected));
                cardElement.style.cssText = 'flex: 1 1 280px; max-width: 100%;';
                flexContainer.appendChild(cardElement);
            });

            contentArea.appendChild(flexContainer);
        }
    } else {
    // العرض القياسي للأقسام الكبيرة (HTML, CSS, JS, Dev Tools)
    const grid = document.createElement('div');
    grid.className = 'card-grid';
    grid.setAttribute('dir', 'rtl');

    filteredCategories.forEach(category => {
      const cardElement = CardComponent.createCategoryCard(category);
      grid.appendChild(cardElement);
    });

    contentArea.appendChild(grid);
  }
}