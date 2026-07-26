import { registry } from '../data/index.js';
import { categories } from '../data/categories.js';
import { ModalComponent } from './modal.js';

export class SearchEngine {
  constructor() {
    // بناء الفهرس تلقائياً لجميع أقسام ومفاهيم المشروع دون استيراد يدوي مكرر
    this.index = [];
    categories.forEach(category => {
      const methods = registry[category.id] || [];
      methods.forEach(method => {
        this.index.push({
          ...method,
          categoryId: category.id,
          categoryName: category.arabicName || category.name
        });
      });
    });

    this.input = document.getElementById('global-search-input');
    this.resultsDropdown = document.getElementById('search-results');

    if (this.input && this.resultsDropdown) {
      this.init();
    }
  }

  init() {
    this.input.addEventListener('input', (e) => this.handleSearch(e.target.value));

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        this.input.focus();
      }
    });

    document.addEventListener('click', (e) => {
      if (!this.input.contains(e.target) && !this.resultsDropdown.contains(e.target)) {
        this.resultsDropdown.classList.remove('active');
      }
    });

    this.input.addEventListener('focus', () => {
      if (this.input.value.trim().length > 0) {
        this.resultsDropdown.classList.add('active');
      }
    });
  }

  handleSearch(query) {
    const trimmed = query.trim().toLowerCase();

    if (!trimmed) {
      this.resultsDropdown.innerHTML = '';
      this.resultsDropdown.classList.remove('active');
      return;
    }

    // تصفية وحماية الفحص بـ Optional Chaining لمنع انهيار وقت التشغيل
    const results = this.index.filter(item => {
      return (
        item.name.toLowerCase().includes(trimmed) ||
        item.shortDescription?.includes(trimmed) || // البحث الفعلي بالخلاصة العربية المتاحة بـ Schema
        item.arabicName?.includes(trimmed) ||       // فحص آمن اختياري للـ legacy data إن وجدت
        item.keywords?.some(kw => kw.toLowerCase().includes(trimmed))
      );
    });

    this.renderResults(results);
  }

  renderResults(results) {
    this.resultsDropdown.innerHTML = '';

    if (results.length === 0) {
      const emptyItem = document.createElement('div');
      emptyItem.className = 'search-item';
      emptyItem.style.color = 'var(--text-muted)';
      emptyItem.style.cursor = 'default';
      emptyItem.innerText = 'لا توجد نتائج تطابق بحثك...';
      this.resultsDropdown.appendChild(emptyItem);
    } else {
      results.forEach(item => {
        const searchItem = document.createElement('div');
        searchItem.className = 'search-item';
        searchItem.innerHTML = `
          <span class="search-item-title">${item.name}</span>
          <span class="search-item-cat">${item.categoryName}</span>
        `;
        searchItem.addEventListener('click', () => {
          this.resultsDropdown.classList.remove('active');
          this.input.value = '';
          this.input.blur();
          ModalComponent.open(item);
        });
        this.resultsDropdown.appendChild(searchItem);
      });
    }

    this.resultsDropdown.classList.add('active');
  }
}