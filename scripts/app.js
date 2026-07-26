import { Router } from './router/router.js';
import { SearchEngine } from './components/search.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. تهيئة نظام التوجيه أحادي الصفحة (SPA Router Initialization)
  const router = new Router();

  // 2. تهيئة محرك البحث الذكي الموحد (Unified Search Engine Initialization)
  const searchEngine = new SearchEngine();

  // طباعة شعار نجاح تشغيل المنصة في الكونسول لتأكيد تفعيل البنية الهيكلية بنجاح
  console.log(
    '%cCodeMap JS Foundation Loaded Successfully!',
    'color: #3b82f6; font-weight: bold; font-size: 1.2rem; text-shadow: 0 2px 4px rgba(0,0,0,0.2); font-family: sans-serif;'
  );
});