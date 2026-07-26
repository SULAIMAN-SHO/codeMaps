import { renderHome } from '../pages/home.js';
import { renderCategory } from '../pages/category.js';
import { renderTrack } from '../pages/track.js';

export class Router {
  constructor() {
    this.routes = {
      '#/': renderHome,
      '#/category': renderCategory
    };
    this.shell = document.getElementById('app-shell');
    this.currentHash = window.location.hash || '#/';
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('load', () => this.handleRoute());
  }

  handleRoute() {
    // 1. حفظ موضع التمرير الراسي الحالي للمسار السابق قبل مغادرته
    if (this.currentHash) {
      sessionStorage.setItem(`scroll_${this.currentHash}`, window.scrollY);
    }

    const hash = window.location.hash || '#/';
    this.currentHash = hash;

    this.shell.classList.remove('fade-in');
    void this.shell.offsetWidth;
    this.shell.classList.add('fade-in');

    // 2. توجيه وعرض الصفحة المطلوبة
    if (hash.startsWith('#/track/')) {
      const techName = hash.replace('#/track/', '').trim().toLowerCase();
      renderTrack(this.shell, techName);
    } else if (hash.startsWith('#/category/')) {
      const categoryId = hash.replace('#/category/', '').trim().toLowerCase();
      renderCategory(this.shell, categoryId);
    } else if (this.routes[hash]) {
      this.routes[hash](this.shell);
    } else {
      window.location.hash = '#/';
      return;
    }

    // 3. استعادة موضع التمرير المحفوظ إن وجد، أو البدء من أعلى الصفحة للمسارات الجديدة
    const savedScroll = sessionStorage.getItem(`scroll_${hash}`);
    if (savedScroll !== null) {
      setTimeout(() => {
        window.scrollTo({ top: parseInt(savedScroll, 10), behavior: 'instant' });
      }, 40);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }

  static navigate(hash) {
    window.location.hash = hash;
  }
}