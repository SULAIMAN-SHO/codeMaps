# Create Directories
$dirs = @(
    "assets/images",
    "assets/icons",
    "assets/illustrations",
    "styles/base",
    "styles/layout",
    "styles/components",
    "styles/pages",
    "styles/animations",
    "scripts/data",
    "scripts/router",
    "scripts/components",
    "scripts/pages",
    "scripts/utils"
)

foreach ($dir in $dirs) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
}

# Helper function to write UTF-8 files
function Write-UTF8File($path, $content) {
    [System.IO.File]::WriteAllText((Get-Item .).FullName + "/" + $path, $content, [System.Text.Encoding]::UTF8)
}

# 1. index.html
Write-UTF8File "index.html" @'
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CodeMap JS - المرجع الفاخر للغة جافا سكريبت</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles/base/variables.css">
  <link rel="stylesheet" href="styles/base/reset.css">
  <link rel="stylesheet" href="styles/layout/layout.css">
  <link rel="stylesheet" href="styles/components/card.css">
  <link rel="stylesheet" href="styles/components/modal.css">
  <link rel="stylesheet" href="styles/components/search.css">
  <link rel="stylesheet" href="styles/pages/home.css">
  <link rel="stylesheet" href="styles/pages/category.css">
  <link rel="stylesheet" href="styles/animations/transitions.css">
</head>
<body>
  <div class="app-container">
    <header class="header">
      <div class="logo-container" onclick="window.location.hash='#/'" style="cursor: pointer;">
        <span class="logo-text">CodeMap JS</span>
        <span class="logo-tag">الأساس الفاخر</span>
      </div>

      <div class="search-container">
        <div class="search-input-wrapper">
          <input type="text" id="global-search-input" class="search-input" placeholder="ابحث عن الدوال البرمجية (Ctrl+K)...">
        </div>
        <div id="search-results" class="search-results-dropdown"></div>
      </div>
    </header>

    <main id="app-shell" class="main-content"></main>

    <footer class="footer">
      <p>© 2026 CodeMap JS. دليلك المعماري والتفاعلي المبسط لتعلم آلية تفكير المحترفين.</p>
    </footer>
  </div>

  <div id="modal-container"></div>

  <script type="module" src="scripts/app.js"></script>
</body>
</html>
'@

# 2. styles/base/variables.css
Write-UTF8File "styles/base/variables.css" @'
:root {
  --bg-primary: #090b0e;
  --bg-secondary: #12161a;
  --bg-tertiary: #1b2026;
  --accent-primary: #3b82f6;
  --accent-glow: rgba(59, 130, 246, 0.15);
  --text-primary: #f3f4f6;
  --text-secondary: #9ca3af;
  --text-muted: #6b7280;
  --border-color: rgba(255, 255, 255, 0.06);
  --border-focus: rgba(59, 130, 246, 0.4);
  
  --font-arabic: 'Cairo', 'Tajawal', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-fast: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 18px;
  
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.2);
  --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.35);
  --shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.5);
}
'@

# 3. styles/base/reset.css
Write-UTF8File "styles/base/reset.css" @'
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-arabic);
  min-height: 100vh;
  overflow-x: hidden;
  direction: rtl;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  background: none;
  border: none;
  font-family: inherit;
  cursor: pointer;
  color: inherit;
}

input {
  font-family: inherit;
  background: none;
  border: none;
  color: inherit;
}

input:focus {
  outline: none;
}
'@

# 4. styles/layout/layout.css
Write-UTF8File "styles/layout/layout.css" @'
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: var(--font-mono);
  letter-spacing: -1px;
}

.logo-tag {
  font-size: 0.7rem;
  background-color: rgba(59, 130, 246, 0.15);
  color: var(--accent-primary);
  padding: 0.2rem 0.5rem;
  border-radius: var(--radius-sm);
  font-weight: bold;
}

.main-content {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.footer {
  text-align: center;
  padding: 2rem;
  color: var(--text-muted);
  font-size: 0.9rem;
  border-top: 1px solid var(--border-color);
  background-color: var(--bg-secondary);
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
}
'@

# 5. styles/components/card.css
Write-UTF8File "styles/components/card.css" @'
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.premium-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  transition: var(--transition-smooth);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  will-change: transform, border-color, box-shadow;
}

.premium-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-primary);
  box-shadow: 0 12px 30px var(--accent-glow);
}

.premium-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top right, rgba(59, 130, 246, 0.08), transparent 60%);
  pointer-events: none;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.card-title-en {
  font-family: var(--font-mono);
  color: var(--text-primary);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.card-title-ar {
  color: var(--accent-primary);
  font-size: 1rem;
  font-weight: 600;
}

.card-desc {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.badge-container {
  display: flex;
  gap: 0.5rem;
}

.badge {
  font-size: 0.75rem;
  padding: 0.25rem 0.6rem;
  border-radius: var(--radius-sm);
  font-weight: 600;
}

.badge-easy { background-color: rgba(16, 185, 129, 0.12); color: #10b981; }
.badge-medium { background-color: rgba(245, 158, 11, 0.12); color: #f59e0b; }
.badge-hard { background-color: rgba(239, 68, 68, 0.12); color: #ef4444; }

.badge-critical { background-color: rgba(139, 92, 246, 0.12); color: #8b5cf6; }
.badge-important { background-color: rgba(59, 130, 246, 0.12); color: #3b82f6; }
.badge-optional { background-color: rgba(107, 114, 128, 0.12); color: #9ca3af; }
'@

# 6. styles/components/modal.css
Write-UTF8File "styles/components/modal.css" @'
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(9, 11, 14, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition-smooth);
}

.modal-overlay.active {
  opacity: 1;
  visibility: visible;
}

.modal-wrapper {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  width: 90%;
  max-width: 900px;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: var(--shadow-lg);
  transform: scale(0.95) translateY(10px);
  transition: var(--transition-smooth);
  position: relative;
}

.modal-overlay.active .modal-wrapper {
  transform: scale(1) translateY(0);
}

.modal-header {
  position: sticky;
  top: 0;
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
}

.modal-title-group {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.modal-title-en {
  font-family: var(--font-mono);
  font-size: 1.5rem;
  font-weight: 700;
}

.modal-close-btn {
  font-size: 1.5rem;
  color: var(--text-muted);
  transition: var(--transition-fast);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-tertiary);
}

.modal-close-btn:hover {
  color: var(--text-primary);
  background-color: rgba(255, 255, 255, 0.1);
}

.modal-body {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section-block {
  background-color: var(--bg-tertiary);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  border-left: 4px solid var(--accent-primary);
}

.section-block-title {
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
}

.section-block-content {
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 0.95rem;
}

.layer-box {
  border-right: 3px solid var(--accent-primary);
  padding-right: 1.25rem;
  margin-bottom: 1.5rem;
}

.layer-box.danger {
  border-right-color: #ef4444;
}

.layer-box.success {
  border-right-color: #10b981;
}

.code-container {
  background-color: #0d0f12;
  border-radius: var(--radius-sm);
  padding: 1.25rem;
  margin: 1rem 0;
  direction: ltr;
  text-align: left;
  overflow-x: auto;
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.code-block {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: #e5e7eb;
  line-height: 1.5;
}

.code-output {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--accent-primary);
  margin-top: 0.75rem;
  border-top: 1px dashed var(--border-color);
  padding-top: 0.5rem;
}
'@

# 7. styles/components/search.css
Write-UTF8File "styles/components/search.css" @'
.search-container {
  position: relative;
  width: 350px;
  max-width: 100%;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input {
  width: 100%;
  background-color: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  font-size: 0.9rem;
  transition: var(--transition-fast);
}

.search-input:focus {
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px var(--accent-glow);
}

.search-results-dropdown {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  width: 100%;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  max-height: 350px;
  overflow-y: auto;
  z-index: 200;
  display: none;
}

.search-results-dropdown.active {
  display: block;
}

.search-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
  cursor: pointer;
  transition: var(--transition-fast);
}

.search-item:last-child {
  border-bottom: none;
}

.search-item:hover {
  background-color: var(--bg-tertiary);
}

.search-item-title {
  font-family: var(--font-mono);
  font-weight: 600;
  color: var(--text-primary);
  direction: ltr;
}

.search-item-cat {
  font-size: 0.75rem;
  background-color: var(--bg-primary);
  color: var(--accent-primary);
  padding: 0.2rem 0.5rem;
  border-radius: var(--radius-sm);
}
'@

# 8. styles/pages/home.css
Write-UTF8File "styles/pages/home.css" @'
.home-hero {
  text-align: center;
  padding: 4rem 1rem;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 2rem;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.hero-title span {
  background: linear-gradient(135deg, var(--accent-primary), #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}
'@

# 9. styles/pages/category.css
Write-UTF8File "styles/pages/category.css" @'
.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1.5rem;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  transition: var(--transition-fast);
  font-weight: 600;
}

.back-btn:hover {
  background-color: var(--bg-tertiary);
  border-color: var(--text-muted);
}

.category-meta h1 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.category-meta p {
  color: var(--text-secondary);
}

.empty-state {
  text-align: center;
  padding: 5rem 2rem;
  color: var(--text-muted);
}

.empty-state-title {
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  font-weight: 700;
}
'@

# 10. styles/animations/transitions.css
Write-UTF8File "styles/animations/transitions.css" @'
.fade-in {
  animation: fadeIn 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
'@

# 11. scripts/data/categories.js
Write-UTF8File "scripts/data/categories.js" @'
export const categories = [
  { id: 'string', name: 'String', arabicName: 'النصوص', desc: 'معالجة النصوص وتنسيق السلاسل النصية بأسلوب هندسي.' },
  { id: 'number', name: 'Number', arabicName: 'الأرقام', desc: 'العمليات الحسابية وإدارة الأرقام وتنسيقها.' },
  { id: 'array', name: 'Array', arabicName: 'المصفوفات', desc: 'إدارة وتصفية وتحويل هياكل البيانات الخطية.' },
  { id: 'object', name: 'Object', arabicName: 'الكائنات', desc: 'بناء الخرائط والمفاتيح والقيم والتعامل مع الخصائص المعقدة.' },
  { id: 'function', name: 'Function', arabicName: 'الدوال', desc: 'أساسيات الوظائف، نطاق التمرير ومفاهيم الاستدعاء الذاتي.' }
];
'@

# 12. scripts/data/string.js
Write-UTF8File "scripts/data/string.js" @'
export const stringMethods = [
  {
    id: 'split',
    name: 'split()',
    arabicName: 'التقسيم',
    shortDescription: 'تحويل السلسلة النصية إلى مصفوفة عن طريق تقسيمها عند كل تطابق مع المحدد الممرر.',
    longDescription: 'تُستخدم الدالة split لفرز النص وتحليله لإنتاج مصفوفة مرتبة ومقسمة بناءً على دالة فصل، مما يجعلها ضرورية لمعالجة البيانات النصية وتحويلها لهياكل قابلة للتصفية.',
    difficulty: 'easy',
    importance: 'critical',
    examples: [
      `const text = "JavaScript,HTML,CSS";\nconst result = text.split(",");\nconsole.log(result);`,
      `const sentence = "CodeMap JS Reference";\nconst words = sentence.split(" ");\nconsole.log(words);`
    ],
    expectedOutput: [
      `["JavaScript", "HTML", "CSS"]`,
      `["CodeMap", "JS", "Reference"]`
    ],
    professionalTips: 'تجنب تقسيم النصوص التي تحتوي على رموز تعبيرية (Emojis) باستخدام المحدد الخالي split("")، لأنه قد يمزق التشفير الداخلي؛ استخدم ميزة تفكيك النصوص الحديثة [...text] بدلاً منه للحفاظ على سلامة التشفير.',
    commonMistakes: {
      wrong: `// النمط الضعيف: التسرع في تقسيم نصوص مجهولة البنية دون فحص الـ Edge Cases\nconst part = userInput.split(",")[0]; // قد يعطل السلسلة إذا كان النص فارغاً`,
      right: `// الصواب الاحترافي: فحص مدخلات المستخدم والتحقق من الطول لضمان عدم حدوث ثغرات منطقية\nconst part = (userInput && userInput.length > 0) ? userInput.split(",")[0] : "";`,
      explanation: 'التحقق المسبق من قيم المدخلات يمنع الوصول لقيم غير معرفة (undefined) مما يجنب واجهتك التوقف التام عند حدوث أخطاء غير متوقعة.'
    },
    thinkingWay: 'تخيل السلسلة النصية بمثابة حبل كامل والمحدد هو سكين حاد؛ في كل نقطة يتواجد بها المحدد، تقوم بقص الحبل ووضع الأجزاء الناتجة داخل مصفوفة نظيفة.',
    relatedMethods: ['slice()', 'join()'],
    keywords: ['split', 'تقسيم', 'مصفوفة', 'سلسلة نصية', 'text split']
  },
  {
    id: 'slice',
    name: 'slice()',
    arabicName: 'الاقتطاع',
    shortDescription: 'اقتطاع جزء محدد من السلسلة النصية وإرجاعه كنص جديد دون التأثير على السلسلة الأصلية.',
    longDescription: 'تستقبل الدالة مؤشر للبداية ومؤشر للنهاية (اختياري)، وتدعم الأرقام السالبة للاقتطاع العكسي من مؤخرة السلسلة النصية، مما يمنحها مرونة هائلة.',
    difficulty: 'medium',
    importance: 'critical',
    examples: [
      `const path = "images/photo.png";\nconst ext = path.slice(-3);\nconsole.log(ext);`,
      `const title = "Developer Reference";\nconst trimmed = title.slice(0, 9);\nconsole.log(trimmed);`
    ],
    expectedOutput: [
      `"png"`,
      `"Developer"`
    ],
    professionalTips: 'تتميز slice() بقدرتها على قبول المؤشرات السالبة بشكل قياسي مقارنة بـ substring(). استعمل slice() لتأسيس بنية مشاريعك بشكل موحد.',
    commonMistakes: {
      wrong: `// النمط الضعيف: افتراض أن المعامل الثاني هو طول الجزء المستهدف اقتطاعه\nconst word = "Frontend";\nconst wrongSlice = word.slice(4, 3); // يعيد نص فارغ ""`,
      right: `// الصواب الاحترافي: المعامل الثاني هو المؤشر النهائي للموقع المستهدف للتوقف (غير شامل له)\nconst word = "Frontend";\nconst rightSlice = word.slice(0, 4); // يعيد "Fron"`,
      explanation: 'المعامل الثاني يمثل موقع النهاية الفعلي في الفهرس وليس عدد الأحرف. إذا كانت البداية أكبر من النهاية في slice()، ستحصل دائماً على نص فارغ.'
    },
    thinkingWay: 'تخيل أنك تسلط شعاع ضوء مركز على الكلمة؛ البداية هي موضع تشغيل الشعاع والنهاية هي موضع إطفائه، كل ما هو مضيء فقط سيتم نسخه وإرساله لك.',
    relatedMethods: ['substring()', 'indexOf()'],
    keywords: ['slice', 'اقتطاع', 'جزء من نص', 'قطع', 'cut text']
  },
  {
    id: 'replace',
    name: 'replace()',
    arabicName: 'الاستبدال',
    shortDescription: 'استبدال أول تطابق للمحدد الممرر بنص جديد، ويدعم استخدام التعابير النمطية والتعديل الشامل.',
    longDescription: 'تقوم بالبحث عن نص معين أو تعبير نمطي (RegExp) واستبدال النتيجة الأولى بنص بديل. لدعم استبدال شامل لكل النتائج المتواجدة بالنص، يفضل استخدام التعبير النمطي الشامل /g أو استخدام replaceAll().',
    difficulty: 'medium',
    importance: 'important',
    examples: [
      `const raw = "Visit Microsoft and Microsoft";\nconst updated = raw.replace("Microsoft", "CodeMap");\nconsole.log(updated);`,
      `const cleanRegex = "blue/red/green".replace(/\\//g, "-");\nconsole.log(cleanRegex);`
    ],
    expectedOutput: [
      `"Visit CodeMap and Microsoft"`,
      `"blue-red-green"`
    ],
    professionalTips: 'استخدم replaceAll() لتنفيذ استبدال نصي بسيط لجميع القيم المتكررة دون الحاجة لكتابة تعبيرات نمطية معقدة لزيادة سهولة الصيانة وقابلية القراءة.',
    commonMistakes: {
      wrong: `// النمط الضعيف: افتراض أن تمرير نصوص عادية يستبدل كافة النتائج المتواجدة تلقائياً\nconst quote = "apple apple apple";\nconst badClean = quote.replace("apple", "orange"); // يعيد "orange apple apple"`,
      right: `// الصواب الاحترافي: استخدام التعبير النمطي المعزز برمز g للاستبدال الكامل أو دالة replaceAll()\nconst quote = "apple apple apple";\nconst goodClean = quote.replace(/apple/g, "orange"); // يعيد "orange orange orange"`,
      explanation: 'الدالة replace() عند تزويدها بنص عادي فقط تقوم بحل واستبدال أول تواجد تعثر عليه داخل النص وتتوقف فوراً عن البحث.'
    },
    thinkingWay: 'تخيل أنك تبحث عن وجه في الحشود، بمجرد العثور على أول تطابق يطابق الوصف تقوم بتبديله ثم تنهي المهمة فوراً، إلا إذا طلبت البحث الجماعي والشامل بصورة صريحة.',
    relatedMethods: ['replaceAll()', 'match()'],
    keywords: ['replace', 'استبدال', 'تغيير نص', 'تعبير نمطي', 'regex']
  }
];
'@

# 13. scripts/router/router.js
Write-UTF8File "scripts/router/router.js" @'
import { renderHome } from '../pages/home.js';
import { renderCategory } from '../pages/category.js';

export class Router {
  constructor() {
    this.routes = {
      '#/': renderHome,
      '#/category': renderCategory
    };
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('load', () => this.handleRoute());
  }

  handleRoute() {
    const hash = window.location.hash || '#/';
    const shell = document.getElementById('app-shell');

    if (hash.startsWith('#/category/')) {
      const categoryId = hash.replace('#/category/', '');
      renderCategory(shell, categoryId);
    } else if (this.routes[hash]) {
      this.routes[hash](shell);
    } else {
      renderHome(shell);
    }
  }

  static navigate(hash) {
    window.location.hash = hash;
  }
}
'@

# 14. scripts/components/modal.js
Write-UTF8File "scripts/components/modal.js" @'
export class ModalComponent {
  static open(data) {
    let container = document.getElementById('modal-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'modal-container';
      document.body.appendChild(container);
    }

    container.className = 'modal-overlay active';
    
    container.innerHTML = `
      <div class="modal-wrapper">
        <div class="modal-header">
          <div class="modal-title-group">
            <span class="modal-title-en" style="color: var(--accent-primary);">${data.name}</span>
            <span style="color: var(--text-muted);">|</span>
            <span class="modal-title-ar" style="font-size: 1.1rem; font-weight: 700;">دالة ${data.arabicName}</span>
          </div>
          <button class="modal-close-btn" id="modal-close-btn">×</button>
        </div>
        <div class="modal-body">
          
          <!-- Layer 1: الخلاصة السريعة -->
          <div class="section-block">
            <div class="section-block-title">💡 الخلاصة السريعة</div>
            <div class="section-block-content">${data.shortDescription}</div>
          </div>

          <!-- Layer 2 & 3: الأمثلة والمخرجات المتوقعة -->
          <div class="section-block" style="border-left-color: #8b5cf6;">
            <div class="section-block-title">💻 أمثلة برمجية تفاعلية ومخرجاتها</div>
            <div class="section-block-content">
              ${data.examples.map((ex, idx) => `
                <div class="layer-box">
                  <div class="code-container">
                    <pre class="code-block"><code>${ex}</code></pre>
                    <div class="code-output">المخرجات المتوقعة: ${data.expectedOutput[idx]}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Layer 4: نصائح المحترفين -->
          <div class="section-block" style="border-left-color: #f59e0b;">
            <div class="section-block-title">🚀 نصيحة المعماريين والمحترفين</div>
            <div class="section-block-content">${data.professionalTips}</div>
          </div>

          <!-- Layer 5: الأنماط المضادة والأخطاء الشائعة -->
          <div class="section-block" style="border-left-color: #ef4444;">
            <div class="section-block-title">⚠️ أخطاء شائعة وأنماط مضادة</div>
            <div class="section-block-content">
              <div class="layer-box danger">
                <div style="font-weight: 600; color: #ef4444; margin-bottom: 0.5rem;">النمط غير المستحسن (Anti-Pattern):</div>
                <div class="code-container" style="border-color: rgba(239, 68, 68, 0.15);">
                  <pre class="code-block"><code style="color: #fca5a5;">${data.commonMistakes.wrong}</code></pre>
                </div>
              </div>
              <div class="layer-box success">
                <div style="font-weight: 600; color: #10b981; margin-bottom: 0.5rem;">الصواب الاحترافي:</div>
                <div class="code-container" style="border-color: rgba(16, 185, 129, 0.15);">
                  <pre class="code-block"><code style="color: #a7f3d0;">${data.commonMistakes.right}</code></pre>
                </div>
              </div>
              <p style="font-size: 0.9rem; margin-top: 0.75rem;">${data.commonMistakes.explanation}</p>
            </div>
          </div>

          <!-- Layer 6: طريقة التفكير والنموذج الذهني -->
          <div class="section-block" style="border-left-color: #10b981;">
            <div class="section-block-title">🧠 كيف تفكر كمهندس حول هذه الدالة؟</div>
            <div class="section-block-content">${data.thinkingWay}</div>
          </div>

          <!-- الروابط المشابهة -->
          <div style="display: flex; gap: 0.75rem; align-items: center; padding-top: 1rem;">
            <span style="font-size: 0.9rem; font-weight: 700; color: var(--text-primary);">دوال ذات صلة:</span>
            ${data.relatedMethods.map(m => `
              <span class="badge" style="background-color: var(--bg-tertiary); color: var(--accent-primary); border: 1px solid var(--border-color);">${m}</span>
            `).join('')}
          </div>

        </div>
      </div>
    `;

    const closeBtn = document.getElementById('modal-close-btn');
    closeBtn.addEventListener('click', () => ModalComponent.close());

    container.addEventListener('click', (e) => {
      if (e.target === container) {
        ModalComponent.close();
      }
    });

    ModalComponent._escHandler = (e) => {
      if (e.key === 'Escape') {
        ModalComponent.close();
      }
    };
    document.addEventListener('keydown', ModalComponent._escHandler);
  }

  static close() {
    const container = document.getElementById('modal-container');
    if (container) {
      container.className = 'modal-overlay';
      document.removeEventListener('keydown', ModalComponent._escHandler);
      setTimeout(() => {
        container.innerHTML = '';
      }, 300);
    }
  }
}
'@

# 15. scripts/components/search.js
Write-UTF8File "scripts/components/search.js" @'
import { stringMethods } from '../data/string.js';
import { ModalComponent } from './modal.js';

export class SearchEngine {
  constructor() {
    this.index = [
      ...stringMethods.map(m => ({ ...m, categoryId: 'string', categoryName: 'النصوص' }))
    ];

    this.input = document.getElementById('global-search-input');
    this.resultsDropdown = document.getElementById('search-results');

    if (this.input && this.resultsDropdown) {
      this.init();
    }
  }

  init() {
    this.input.addEventListener('input', (e) => this.handleSearch(e.target.value));
    
    document.addEventListener('click', (e) => {
      if (!this.input.contains(e.target) && !this.resultsDropdown.contains(e.target)) {
        this.resultsDropdown.classList.remove('active');
      }
    });

    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        this.input.focus();
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

    const results = this.index.filter(item => {
      return item.name.toLowerCase().includes(trimmed) || 
             item.arabicName.includes(trimmed) ||
             item.keywords.some(kw => kw.toLowerCase().includes(trimmed));
    });

    this.renderResults(results);
  }

  renderResults(results) {
    this.resultsDropdown.innerHTML = '';
    
    if (results.length === 0) {
      const emptyItem = document.createElement('div');
      emptyItem.className = 'search-item';
      emptyItem.style.color = 'var(--text-muted)';
      emptyItem.innerText = 'لا توجد نتائج تطابق بحثك';
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
          ModalComponent.open(item);
        });
        this.resultsDropdown.appendChild(searchItem);
      });
    }

    this.resultsDropdown.classList.add('active');
  }
}
'@

# 16. scripts/pages/home.js
Write-UTF8File "scripts/pages/home.js" @'
import { categories } from '../data/categories.js';

export function renderHome(container) {
  container.className = 'main-content fade-in';
  container.innerHTML = `
    <section class="home-hero">
      <h1 class="hero-title">المرجع الهيكلي للغة <span>JavaScript</span></h1>
      <p class="hero-subtitle">انتقل من مجرد محاولة كتابة الكود البرمجي إلى استيعاب آلية معالجة المتصفح للمفاهيم عبر طبقات المعرفة السبعة.</p>
    </section>
    
    <div class="card-grid" id="category-grid"></div>
  `;

  const grid = document.getElementById('category-grid');
  categories.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'premium-card';
    card.innerHTML = `
      <div class="card-header">
        <span class="card-title-en">${cat.name}</span>
        <span class="card-title-ar">${cat.arabicName}</span>
      </div>
      <p class="card-desc">${cat.desc}</p>
      <div class="card-footer">
        <span style="font-size: 0.8rem; color: var(--accent-primary); font-family: var(--font-mono);">
          ${cat.id === 'string' ? '3 دوال جاهزة' : 'قيد الإنتاج'}
        </span>
      </div>
    `;
    card.addEventListener('click', () => {
      window.location.hash = `#/category/${cat.id}`;
    });
    grid.appendChild(card);
  });
}
'@

# 17. scripts/pages/category.js
Write-UTF8File "scripts/pages/category.js" @'
import { stringMethods } from '../data/string.js';
import { categories } from '../data/categories.js';
import { ModalComponent } from '../components/modal.js';

export function renderCategory(container, categoryId) {
  container.className = 'main-content fade-in';
  
  const currentCategory = categories.find(c => c.id === categoryId);
  if (!currentCategory) {
    container.innerHTML = `<div class="empty-state"><p class="empty-state-title">القسم غير موجود</p></div>`;
    return;
  }

  container.innerHTML = `
    <div class="category-header">
      <div class="category-meta">
        <h1>قسم ${currentCategory.arabicName} (${currentCategory.name})</h1>
        <p>${currentCategory.desc}</p>
      </div>
      <button class="back-btn" id="category-back-btn">
        <span>→</span> العودة للرئيسية
      </button>
    </div>
    
    <div id="category-content"></div>
  `;

  document.getElementById('category-back-btn').addEventListener('click', () => {
    window.location.hash = '#/';
  });

  const contentDiv = document.getElementById('category-content');

  if (categoryId !== 'string') {
    contentDiv.innerHTML = `
      <div class="empty-state">
        <p class="empty-state-title">هذا القسم قيد التطوير والإنتاج</p>
        <p>يتم العمل حالياً على صياغة هذا القسم وتدعيمه بالطبقات السبعة الفكرية.</p>
      </div>
    `;
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'card-grid';
  
  stringMethods.forEach(method => {
    const card = document.createElement('div');
    card.className = 'premium-card';
    card.innerHTML = `
      <div class="card-header">
        <span class="card-title-en" style="color: var(--accent-primary);">${method.name}</span>
        <span class="card-title-ar">${method.arabicName}</span>
      </div>
      <p class="card-desc">${method.shortDescription}</p>
      <div class="card-footer">
        <div class="badge-container">
          <span class="badge badge-${method.difficulty}">${
            method.difficulty === 'easy' ? 'سهل' : method.difficulty === 'medium' ? 'متوسط' : 'صعب'
          }</span>
          <span class="badge badge-${method.importance}">${
            method.importance === 'critical' ? 'حرج' : method.importance === 'important' ? 'مهم' : 'اختياري'
          }</span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => {
      ModalComponent.open(method);
    });
    grid.appendChild(card);
  });

  contentDiv.appendChild(grid);
}
'@

# 18. scripts/utils/helpers.js
Write-UTF8File "scripts/utils/helpers.js" @'
export function sanitizeHTML(str) {
  const temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
}

export function createElement(tag, className, innerHTML = '') {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (innerHTML) el.innerHTML = innerHTML;
  return el;
}
'@

# 19. scripts/app.js
Write-UTF8File "scripts/app.js" @'
import { Router } from './router/router.js';
import { SearchEngine } from './components/search.js';

document.addEventListener('DOMContentLoaded', () => {
  const router = new Router();
  const searchEngine = new SearchEngine();

  console.log('%cCodeMap JS Foundation Ready to Scale', 'color: #3b82f6; font-weight: bold; font-size: 1.2rem;');
});
'@

Write-Host "CodeMap JS Foundation setup completed successfully!" -ForegroundColor Green