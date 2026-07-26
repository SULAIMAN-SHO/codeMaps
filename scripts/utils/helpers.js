/**
 * تطهير النصوص البرمجية المدخلة من المستخدم لمنع ثغرات حقن الرموز (XSS Prevention)
 * @param {string} str - النص البرمجي الخام المراد تأمينه
 * @returns {string} - النص الآمن المفرز والمطهر للعرض
 */
export function sanitizeHTML(str) {
  if (typeof str !== 'string') return '';
  const temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
}

/**
 * دالة مساعدة لإنشاء عناصر الـ DOM ديناميكياً بأسلوب نظيف وموحد
 * @param {string} tag - اسم الوسم (Tag Name) مثل 'div', 'button'
 * @param {string} className - الفئات التنسيقية المطلوبة للعنصر
 * @param {string} [innerHTML=''] - المحتوى الداخلي الخام (اختياري)
 * @returns {HTMLElement} - العنصر المبني الجاهز للحقن بالصفحة
 */
export function createElement(tag, className, innerHTML = '') {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (innerHTML) {
    element.innerHTML = innerHTML;
  }
  return element;
}

/**
 * دالة للتحكم بمعدل التنفيذ (Debounce Utility) لتحسين كفاءة استهلاك معالجة العميل
 * @param {Function} func - الدالة المطلوب كبح معدل استدعائها
 * @param {number} wait - مدة الانتظار المطلوبة بالميلي ثانية
 * @returns {Function} - الدالة المعدلة الخاضعة لضبط معدل التنفيذ
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}