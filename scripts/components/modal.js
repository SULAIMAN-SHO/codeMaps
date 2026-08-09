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


    let bodyHTML = '';

    if (data.type === 'tech-reference') {
      const purposeText = data.purpose || data.shortDescription || '';

      bodyHTML = `
        <!-- هيدر المودال المرجعي المبسط: العنوان ومفاتيح الاختصار إن وجدت -->
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 1.25rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-color);">
          <div>
            <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--accent-primary); margin: 0 0 0.35rem 0;">${sanitizeHTML(data.name)}</h2>
            <p style="font-size: 0.92rem; color: var(--text-secondary); margin: 0; line-height: 1.6;">${sanitizeHTML(data.shortDescription || '')}</p>
          </div>
          ${data.keys ? `
          <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: var(--radius-sm); padding: 0.5rem 0.85rem; font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; font-weight: 700; color: #10b981; white-space: nowrap;">
            ${sanitizeHTML(data.keys)}
          </div>
          ` : ''}
        </div>

        <!-- بطاقة الشرح المقتضب والهدف -->
        ${purposeText ? `
        <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem; margin-bottom: 1.25rem; border-top: 3px solid var(--accent-primary);">
          <div style="font-weight: 700; color: var(--accent-primary); margin-bottom: 0.5rem; font-size: 0.92rem;">💡 الشرح والهدف الاستخدامي:</div>
          <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.7; margin: 0;">${sanitizeHTML(purposeText)}</p>
        </div>
        ` : ''}

        ${Array.isArray(data.features) && data.features.length > 0 ? `
        <!-- النقاط والخصائص الأساسية -->
        <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem; margin-bottom: 1.25rem; border-top: 3px solid #10b981;">
          <div style="font-weight: 700; color: #10b981; margin-bottom: 0.5rem; font-size: 0.92rem;">⭐ الخصائص والمميزات الرئيسية:</div>
          <ul style="list-style: none; padding: 0; margin: 0;">
            ${data.features.map(f => `<li style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.4rem;"><span style="color: #10b981;">✦</span> ${sanitizeHTML(f)}</li>`).join('')}
          </ul>
        </div>
        ` : ''}

        ${Array.isArray(data.keywords) && data.keywords.length > 0 ? `
        <!-- الكلمات المفتاحية والوسوم -->
        <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap; padding-top: 0.25rem;">
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">وسوم ذات صلة:</span>
          ${data.keywords.map(kw => `
            <span class="badge" style="background-color: rgba(255,255,255,0.03); color: var(--accent-primary); border: 1px solid var(--border-color); font-size: 0.75rem;">${sanitizeHTML(kw)}</span>
          `).join('')}
        </div>
        ` : ''}
      `;
    } else if (data.type === 'website' || data.type === 'ai-tool' || data.type === 'vscode-extension' || data.type === 'app') {
      const isExtension = data.type === 'vscode-extension';
      const actionUrl = isExtension ? (data.installUrl || '#') : (data.url || '#');
      const actionLabel = isExtension ? '⚡ تثبيت الإضافة الآن' : (data.type === 'app' ? '💻 تحميل / فتح التطبيق' : '🔗 زيارة الموقع الرسمية');
      const actionColor = isExtension ? '#007acc' : 'var(--accent-primary)';
      const purposeTitle = isExtension ? 'لماذا نستخدم هذه الإضافة؟' : (data.type === 'ai-tool' ? 'أفضل حالات الاستخدام' : 'كيف تستفيد منه؟');
      const purposeText = data.whyUseIt || data.bestFor || data.purpose || '';

      // معالجة شعار/أيقونة الهيدر مع السقوط الآمن
      let modalLogoHTML = '';
      if (data.icon) {
        if (data.icon.trim().startsWith('<svg')) {
          modalLogoHTML = `<div style="width: 54px; height: 54px; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 0.5rem; flex-shrink: 0;">${data.icon}</div>`;
        } else {
          const cleanSrc = data.icon.replace(/&amp;/g, '&');
          let domainFallback = 'google.com';
          try { if (data.url) domainFallback = new URL(data.url).hostname; } catch (e) { }
          modalLogoHTML = `<div style="width: 54px; height: 54px; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 0.5rem; flex-shrink: 0;">
            <img src="${cleanSrc}" alt="${sanitizeHTML(data.name)}" style="max-height: 38px; max-width: 38px; object-fit: contain; border-radius: 4px;" onerror="this.onerror=null; this.src='https://www.google.com/s2/favicons?domain=${domainFallback}&sz=128';" />
          </div>`;
        }
      }

      bodyHTML = `
        <!-- هيدر المودال الحديث: الشعار + العنوان + خطة التسعير + الوصف -->
        <div style="display: flex; align-items: center; gap: 1.25rem; margin-bottom: 1.5rem; padding-bottom: 1.25rem; border-bottom: 1px solid var(--border-color);">
          ${modalLogoHTML}
          <div style="flex: 1;">
            <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 0.35rem;">
              <h2 style="font-size: 1.45rem; font-weight: 800; color: var(--text-primary); margin: 0;">${sanitizeHTML(data.name)}</h2>
              ${data.pricing ? `<span class="badge" style="background: rgba(59, 130, 246, 0.12); color: var(--accent-primary); border: 1px solid rgba(59, 130, 246, 0.25); font-size: 0.8rem; padding: 0.25rem 0.65rem;">${sanitizeHTML(data.pricing)}</span>` : ''}
            </div>
            <p style="font-size: 0.92rem; color: var(--text-secondary); margin: 0; line-height: 1.6;">${sanitizeHTML(data.shortDescription || '')}</p>
          </div>
        </div>

        <!-- شبكة المعلومات والخصائص ثنائية الأعمدة (2-Column Grid) -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.25rem; margin-bottom: 1.5rem;">
          ${purposeText ? `
          <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; border-top: 3px solid #10b981;">
            <div style="font-weight: 700; color: #10b981; margin-bottom: 0.6rem; font-size: 0.95rem; display: flex; align-items: center; gap: 0.4rem;">
              <span>💡</span> ${purposeTitle}
            </div>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.7; margin: 0;">${sanitizeHTML(purposeText)}</p>
          </div>
          ` : ''}

          ${Array.isArray(data.features) && data.features.length > 0 ? `
          <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; border-top: 3px solid #8b5cf6;">
            <div style="font-weight: 700; color: #8b5cf6; margin-bottom: 0.6rem; font-size: 0.95rem; display: flex; align-items: center; gap: 0.4rem;">
              <span>⭐</span> أبرز الميزات والخصائص
            </div>
            <ul style="list-style: none; padding: 0; margin: 0;">
              ${data.features.map(f => `<li style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 0.4rem; display: flex; align-items: center; gap: 0.5rem;"><span style="color: #8b5cf6;">✦</span> ${sanitizeHTML(f)}</li>`).join('')}
            </ul>
          </div>
          ` : ''}
        </div>

        ${isExtension ? `
        <!-- صندوق التثبيت والتفاعل المخصص لإضافات VS Code -->
        <div style="background: rgba(0, 122, 204, 0.08); border: 1px solid rgba(0, 122, 204, 0.3); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.25rem;">
          <div style="font-weight: 700; margin-bottom: 0.75rem; color: var(--text-primary); font-size: 0.9rem;">⚙️ خيارات التثبيت المتاحة:</div>
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 0.75rem;">
            <a href="${sanitizeHTML(data.installUrl || '#')}" class="btn-action-primary" style="flex: 1 1 180px; padding: 0.75rem 1rem; background-color: #007acc; color: #ffffff; text-align: center; font-weight: 700; border-radius: var(--radius-sm); text-decoration: none; font-size: 0.9rem; display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem; box-shadow: 0 4px 12px rgba(0, 122, 204, 0.3);">
              ⚡ تثبيت مباشر في VS Code
            </a>
            ${data.url ? `
            <a href="${sanitizeHTML(data.url)}" target="_blank" rel="noopener noreferrer" style="flex: 1 1 180px; padding: 0.75rem 1rem; background-color: transparent; color: var(--text-primary); border: 1px solid var(--border-color); text-align: center; font-weight: 700; border-radius: var(--radius-sm); text-decoration: none; font-size: 0.9rem; display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem;">
              🌐 فتح المتجر في المتصفح
            </a>
            ` : ''}
          </div>
          <div style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.6; background: rgba(0,0,0,0.25); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); border-right: 3px solid #007acc;">
            💡 <strong>تنويه:</strong> عند النقر على "تثبيت مباشر"، سيفتح حاسوبك تطبيق Visual Studio Code للانتقال فوراً لصفحة التثبيت داخل المحرر.
          </div>
        </div>
        ` : `
        <!-- زر الانتقال المباشر للمواقع والأدوات والتطبيقات -->
        <div style="margin-bottom: 1.25rem;">
          <a href="${sanitizeHTML(actionUrl)}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; width: 100%; padding: 0.85rem 1.25rem; background: linear-gradient(135deg, var(--accent-primary) 0%, #2563eb 100%); color: #ffffff; text-align: center; font-weight: 700; border-radius: var(--radius-md); text-decoration: none; font-size: 1rem; justify-content: center; align-items: center; gap: 0.5rem; box-shadow: 0 4px 16px var(--accent-glow);">
            ${actionLabel}
          </a>
        </div>
        `}

        ${Array.isArray(data.keywords) && data.keywords.length > 0 ? `
        <!-- الوسوم والكلمات المفتاحية -->
        <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap; padding-top: 0.5rem;">
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">وسوم ذات صلة:</span>
          ${data.keywords.map(kw => `
            <span class="badge" style="background-color: rgba(255,255,255,0.03); color: var(--accent-primary); border: 1px solid var(--border-color); font-size: 0.75rem;">${sanitizeHTML(kw)}</span>
          `).join('')}
        </div>
        ` : ''}
      `;
    } else {
      // الكود القياسي للسبع طبقات الخاص بالدوال والمفاهيم البرمجية
      bodyHTML = `
        <!-- الطبقة 1: الخلاصة المعمارية السريعة -->
        <div class="section-block">
          <div class="section-block-title">💡 الخلاصة السريعة</div>
          <div class="section-block-content">${sanitizeHTML(data.shortDescription || '')}</div>
        </div>

        ${Array.isArray(data.examples) ? `
        <!-- الطبقة 2 و 3: أمثلة ومخرجات متوقعة حقيقية -->
        <div class="section-block" style="border-right-color: #8b5cf6;">
          <div class="section-block-title">💻 أمثلة برمجية تفاعلية ومخرجاتها</div>
          <div class="section-block-content">
            ${data.examples.map((ex, idx) => `
              <div class="layer-box">
                <div class="code-container">
                  <pre class="code-block"><code>${sanitizeHTML(ex)}</code></pre>
                  <div class="code-output">المخرجات المتوقعة: ${sanitizeHTML((data.expectedOutput && data.expectedOutput[idx]) || '')}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}

        ${data.professionalTips ? `
        <!-- الطبقة 4: نصائح الأداء والسرعة للمحترفين -->
        <div class="section-block" style="border-right-color: #f59e0b;">
          <div class="section-block-title">🚀 نصيحة المعماريين والمحترفين</div>
          <div class="section-block-content">${sanitizeHTML(data.professionalTips)}</div>
        </div>
        ` : ''}

        ${data.commonMistakes ? `
        <!-- الطبقة 5: الأنماط المضادة والمقارنات الشائعة -->
        <div class="section-block" style="border-right-color: #ef4444;">
          <div class="section-block-title">⚠️ أخطاء شائعة وأنماط مضادة</div>
          <div class="section-block-content">
            <div class="layer-box danger">
              <div style="font-weight: 700; color: #ef4444; margin-bottom: 0.5rem; font-size: 0.85rem;">النمط غير المستحسن (Anti-Pattern):</div>
              <div class="code-container" style="border-color: rgba(239, 68, 68, 0.15);">
                <pre class="code-block"><code style="color: #fca5a5;">${sanitizeHTML(data.commonMistakes.wrong || '')}</code></pre>
              </div>
            </div>
            <div class="layer-box success">
              <div style="font-weight: 700; color: #10b981; margin-bottom: 0.5rem; font-size: 0.85rem;">الصواب الاحترافي (Best Practice):</div>
              <div class="code-container" style="border-color: rgba(16, 185, 129, 0.15);">
                <pre class="code-block"><code style="color: #a7f3d0;">${sanitizeHTML(data.commonMistakes.right || '')}</code></pre>
              </div>
            </div>
            <p style="font-size: 0.9rem; margin-top: 0.75rem; line-height: 1.7;">${sanitizeHTML(data.commonMistakes.explanation || '')}</p>
          </div>
        </div>
        ` : ''}

        ${data.thinkingWay ? `
        <!-- الطبقة 6: النمذجة الذهنية للمفهوم -->
        <div class="section-block" style="border-right-color: #10b981;">
          <div class="section-block-title">🧠 كيف تفكر كمهندس حول هذا المفهوم؟</div>
          <div class="section-block-content">${sanitizeHTML(data.thinkingWay)}</div>
        </div>
        ` : ''}

        ${Array.isArray(data.relatedMethods) && data.relatedMethods.length > 0 ? `
        <!-- الطبقة 7: روابط الدوال المشابهة والتقنيات المقترنة -->
        <div style="display: flex; gap: 0.75rem; align-items: center; padding-top: 1rem; flex-wrap: wrap;">
          <span style="font-size: 0.9rem; font-weight: 800; color: var(--text-primary);">دوال ومفاهيم ذات صلة:</span>
          ${data.relatedMethods.map(m => `
            <span class="badge" style="background-color: var(--bg-tertiary); color: var(--accent-primary); border: 1px solid var(--border-color);">${sanitizeHTML(m)}</span>
          `).join('')}
        </div>
        ` : ''}
      `;
    }

    container.innerHTML = `
      <div class="modal-wrapper slide-up">
        <div class="modal-header">
          <div class="modal-title-group">
            <span class="modal-title-en" style="color: var(--accent-primary);">${sanitizeHTML(data.name)}</span>
          </div>
          <button class="modal-close-btn" id="modal-close-btn" aria-label="إغلاق النافذة">×</button>
        </div>
        <div class="modal-body">
          ${bodyHTML}
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
  /**
   * إنشاء وتفعيل نافذة منبثقة مخصصة صغيرة للرسائل والتنبيهات السريعة (Compact Notification Toast Modal)
   * @param {Object} options - عنوان الرسالة، نصها، الكود، ونوع التنبيه
   */
  static toast({ title, message, code, type = 'success' }) {
    let container = document.getElementById('toast-modal-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-modal-container';
      document.body.appendChild(container);
    }

    const icon = type === 'success' ? '✅' : (type === 'warning' ? '⚠️' : 'ℹ️');
    const borderColor = type === 'success' ? '#10b981' : (type === 'warning' ? '#f59e0b' : '#3b82f6');

    container.className = 'modal-overlay active';
    container.innerHTML = `
      <div class="modal-wrapper slide-up" style="max-width: 520px; border-top: 4px solid ${borderColor}; padding: 1.5rem; background: var(--bg-secondary);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <span style="font-size: 1.3rem;">${icon}</span>
            <span style="font-size: 1.1rem; font-weight: 800; color: var(--text-primary);">${sanitizeHTML(title)}</span>
          </div>
          <button class="modal-close-btn" id="toast-close-btn" aria-label="إغلاق" style="font-size: 1.2rem; cursor: pointer;">×</button>
        </div>
        
        <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1rem;">
          ${sanitizeHTML(message)}
        </p>

        ${code ? `
        <div class="code-container" style="margin-bottom: 1.25rem; background: #0d1117; border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.85rem;">
          <div style="font-size: 0.75rem; color: var(--accent-primary); font-weight: 700; margin-bottom: 0.4rem;">الأمر المنسوخ في الحافظة:</div>
          <pre class="code-block" style="margin: 0; white-space: pre-wrap; word-break: break-all;"><code style="color: #a7f3d0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem;">${sanitizeHTML(code)}</code></pre>
        </div>
        ` : ''}

        <div style="display: flex; justify-content: flex-end;">
          <button id="toast-confirm-btn" style="padding: 0.55rem 1.4rem; background: var(--accent-primary); color: #fff; border: none; border-radius: var(--radius-sm); font-weight: 700; font-size: 0.88rem; cursor: pointer; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);">
            فهمت ذلك
          </button>
        </div>
      </div>
    `;

    document.body.style.overflow = 'hidden';

    const close = () => {
      container.className = 'modal-overlay';
      document.body.style.overflow = '';
      setTimeout(() => { container.innerHTML = ''; }, 300);
    };

    document.getElementById('toast-close-btn')?.addEventListener('click', close);
    document.getElementById('toast-confirm-btn')?.addEventListener('click', close);
    container.addEventListener('click', (e) => {
      if (e.target === container) close();
    });
  }

}