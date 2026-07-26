import { sanitizeHTML } from '../utils/helpers.js';

export class ModalComponent {
  static open(data) {
    let container = document.getElementById('modal-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'modal-container';
      document.body.appendChild(container);
    }

    // قفل حركة تمرير الصفحة الرئيسية لمنع السلوك الافتراضي المشتت (Body Scroll Lock)
    document.body.style.overflow = 'hidden';

    container.className = 'modal-overlay active';

    // بناء البنية الهيكلية لطبقات المعرفة السبعة ديناميكياً مع التطهير الأمني للوسوم
    container.innerHTML = `
      <div class="modal-wrapper slide-up">
        <div class="modal-header">
          <div class="modal-title-group">
            <span class="modal-title-en" style="color: var(--accent-primary);">${sanitizeHTML(data.name)}</span>
          </div>
          <button class="modal-close-btn" id="modal-close-btn" aria-label="إغلاق النافذة">×</button>
        </div>
        <div class="modal-body">
          
          <!-- الطبقة 1: الخلاصة المعمارية السريعة -->
          <div class="section-block">
            <div class="section-block-title">💡 الخلاصة السريعة</div>
            <div class="section-block-content">${sanitizeHTML(data.shortDescription)}</div>
          </div>

          <!-- الطبقة 2 و 3: أمثلة ومخرجات متوقعة حقيقية -->
          <div class="section-block" style="border-right-color: #8b5cf6;">
            <div class="section-block-title">💻 أمثلة برمجية تفاعلية ومخرجاتها</div>
            <div class="section-block-content">
              ${data.examples.map((ex, idx) => `
                <div class="layer-box">
                  <div class="code-container">
                    <pre class="code-block"><code>${sanitizeHTML(ex)}</code></pre>
                    <div class="code-output">المخرجات المتوقعة: ${sanitizeHTML(data.expectedOutput[idx])}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- الطبقة 4: نصائح الأداء والسرعة للمحترفين -->
          <div class="section-block" style="border-right-color: #f59e0b;">
            <div class="section-block-title">🚀 نصيحة المعماريين والمحترفين</div>
            <div class="section-block-content">${sanitizeHTML(data.professionalTips)}</div>
          </div>

          <!-- الطبقة 5: الأنماط المضادة والمقارنات الشائعة -->
          <div class="section-block" style="border-right-color: #ef4444;">
            <div class="section-block-title">⚠️ أخطاء شائعة وأنماط مضادة</div>
            <div class="section-block-content">
              <div class="layer-box danger">
                <div style="font-weight: 700; color: #ef4444; margin-bottom: 0.5rem; font-size: 0.85rem;">النمط غير المستحسن (Anti-Pattern):</div>
                <div class="code-container" style="border-color: rgba(239, 68, 68, 0.15);">
                  <pre class="code-block"><code style="color: #fca5a5;">${sanitizeHTML(data.commonMistakes.wrong)}</code></pre>
                </div>
              </div>
              <div class="layer-box success">
                <div style="font-weight: 700; color: #10b981; margin-bottom: 0.5rem; font-size: 0.85rem;">الصواب الاحترافي (Best Practice):</div>
                <div class="code-container" style="border-color: rgba(16, 185, 129, 0.15);">
                  <pre class="code-block"><code style="color: #a7f3d0;">${sanitizeHTML(data.commonMistakes.right)}</code></pre>
                </div>
              </div>
              <p style="font-size: 0.9rem; margin-top: 0.75rem; line-height: 1.7;">${sanitizeHTML(data.commonMistakes.explanation)}</p>
            </div>
          </div>

          <!-- الطبقة 6: النمذجة الذهنية للمفهوم -->
          <div class="section-block" style="border-right-color: #10b981;">
            <div class="section-block-title">🧠 كيف تفكر كمهندس حول هذا المفهوم؟</div>
            <div class="section-block-content">${sanitizeHTML(data.thinkingWay)}</div>
          </div>

          <!-- الطبقة 7: روابط الدوال المشابهة والتقنيات المقترنة -->
          <div style="display: flex; gap: 0.75rem; align-items: center; padding-top: 1rem; flex-wrap: wrap;">
            <span style="font-size: 0.9rem; font-weight: 800; color: var(--text-primary);">دوال ومفاهيم ذات صلة:</span>
            ${data.relatedMethods.map(m => `
              <span class="badge" style="background-color: var(--bg-tertiary); color: var(--accent-primary); border: 1px solid var(--border-color);">${sanitizeHTML(m)}</span>
            `).join('')}
          </div>

        </div>
      </div>
    `;

    // تفعيل أزرار ومستمعات الإغلاق بشكل آمن لمنع تسريب الذاكرة (Memory Leaks)
    const closeBtn = document.getElementById('modal-close-btn');
    closeBtn.addEventListener('click', () => ModalComponent.close());

    // الإغلاق عند النقر خارج مساحة المودال الأساسية
    container.addEventListener('click', (e) => {
      if (e.target === container) {
        ModalComponent.close();
      }
    });

    // رصد زر الهروب (Escape) كمعيار إمكانية وصول محاكي للأصالة البرمجية
    ModalComponent._escHandler = (e) => {
      if (e.key === 'Escape') {
        ModalComponent.close();
      }
    };
    document.addEventListener('keydown', ModalComponent._escHandler);
  }

  static close() {
    const container = document.getElementById('modal-container');
    if (container && container.classList.contains('active')) {
      container.className = 'modal-overlay';
      document.removeEventListener('keydown', ModalComponent._escHandler);

      // تحرير قفل التمرير فور إغلاق النافذة
      document.body.style.overflow = '';

      // الانتظار حتى اكتمال الأنيميشن بسلاسة ثم تفريغ الـ DOM
      setTimeout(() => {
        container.innerHTML = '';
      }, 350);
    }
  }
}