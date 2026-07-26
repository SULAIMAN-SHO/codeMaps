export class Illustrations {
  /**
   * جلب كود الرسم المتجهي (SVG) الفاخر لكل تصنيف بناءً على هويته البصرية ثلاثية الأبعاد
   * @param {string} categoryId - المعرّف الفريد للقسم (مثل string, array, object)
   * @returns {string} - كود SVG المتوافق مع الهوية البصرية والمصمم بتقنية Glassmorphism
   */
  static get(categoryId) {
    const assets = {
      string: `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="stringGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#3b82f6" />
              <stop offset="100%" stop-color="#8b5cf6" />
            </linearGradient>
            <filter id="neonBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          
          <!-- خطوط الاتصال المتوهجة (Glowing Connections) -->
          <path d="M 50,70 Q 120,30 190,70" stroke="url(#stringGlow)" stroke-width="2.5" opacity="0.6" stroke-dasharray="6 4" />
          <path d="M 50,70 Q 120,110 190,70" stroke="url(#stringGlow)" stroke-width="1.5" opacity="0.3" />
          
          <!-- العقد البرمجية الزجاجية الطافية (Floating Glass Nodes) -->
          <g filter="url(#neonBlur)">
            <circle cx="50" cy="70" r="18" fill="url(#glassGrad)" stroke="url(#stringGlow)" stroke-width="1.5" />
            <circle cx="120" cy="50" r="18" fill="url(#glassGrad)" stroke="url(#stringGlow)" stroke-width="1.5" />
            <circle cx="190" cy="70" r="18" fill="url(#glassGrad)" stroke="url(#stringGlow)" stroke-width="1.5" />
          </g>
          
          <!-- الأحرف العائمة (Floating Characters) -->
          <text x="50" y="75" fill="#f3f4f6" font-family="var(--font-mono)" font-size="14" font-weight="700" text-anchor="middle">S</text>
          <text x="120" y="55" fill="#f3f4f6" font-family="var(--font-mono)" font-size="14" font-weight="700" text-anchor="middle">t</text>
          <text x="190" y="75" fill="#f3f4f6" font-family="var(--font-mono)" font-size="14" font-weight="700" text-anchor="middle">r</text>
          
          <!-- نقاط تفاعلية مجهرية -->
          <circle cx="120" cy="50" r="3" fill="#ffffff" filter="url(#neonBlur)" />
        </svg>
      `,

      array: `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="arrayGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#00f2fe" />
              <stop offset="100%" stop-color="#4facfe" />
            </linearGradient>
            <filter id="arrayBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="arrayGlass" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.15)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.03)" />
            </linearGradient>
          </defs>

          <!-- خطوط الاتصال البينية (Index Linkages) -->
          <line x1="85" y1="70" x2="115" y2="70" stroke="url(#arrayGlow)" stroke-width="2" stroke-dasharray="4 3" opacity="0.7" />
          <line x1="145" y1="70" x2="175" y2="70" stroke="url(#arrayGlow)" stroke-width="2" stroke-dasharray="4 3" opacity="0.7" />

          <!-- العناصر الخطية المتصلة (Connected Sequential Blocks) -->
          <g filter="url(#arrayBlur)">
            <!-- عنصر 1 -->
            <rect x="45" y="50" width="40" height="40" rx="8" fill="url(#arrayGlass)" stroke="url(#arrayGlow)" stroke-width="1.5" />
            <!-- عنصر 2 -->
            <rect x="105" y="50" width="40" height="40" rx="8" fill="url(#arrayGlass)" stroke="url(#arrayGlow)" stroke-width="1.5" />
            <!-- عنصر 3 -->
            <rect x="165" y="50" width="40" height="40" rx="8" fill="url(#arrayGlass)" stroke="url(#arrayGlow)" stroke-width="1.5" />
          </g>

          <!-- الفهارس الرقمية للذاكرة (Memory Indices) -->
          <text x="65" y="75" fill="#f3f4f6" font-family="var(--font-mono)" font-size="12" font-weight="700" text-anchor="middle">0</text>
          <text x="125" y="75" fill="#f3f4f6" font-family="var(--font-mono)" font-size="12" font-weight="700" text-anchor="middle">1</text>
          <text x="185" y="75" fill="#f3f4f6" font-family="var(--font-mono)" font-size="12" font-weight="700" text-anchor="middle">2</text>
        </svg>
      `,

      object: `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="objectGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#10b981" />
              <stop offset="100%" stop-color="#059669" />
            </linearGradient>
            <filter id="objectBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="objectGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>

          <!-- شبكة الربط الهيكلية (Key-Value Node Connections) -->
          <path d="M 120,70 L 60,40 M 120,70 L 180,40 M 120,70 L 120,110" stroke="url(#objectGlow)" stroke-width="2" opacity="0.6" />
          
          <!-- عقد البيانات الزجاجية الفردية (Node Structures) -->
          <g filter="url(#objectBlur)">
            <circle cx="120" cy="70" r="14" fill="url(#objectGlass)" stroke="url(#objectGlow)" stroke-width="1.5" />
            <circle cx="60" cy="40" r="10" fill="url(#objectGlass)" stroke="url(#objectGlow)" stroke-width="1.5" />
            <circle cx="180" cy="40" r="10" fill="url(#objectGlass)" stroke="url(#objectGlow)" stroke-width="1.5" />
            <circle cx="120" cy="110" r="10" fill="url(#objectGlass)" stroke="url(#objectGlow)" stroke-width="1.5" />
          </g>

          <!-- تمثيل المفاتيح والقيم (Key/Value Metadata) -->
          <text x="120" y="74" fill="#f3f4f6" font-family="var(--font-mono)" font-size="10" font-weight="700" text-anchor="middle">{}</text>
          <text x="60" y="43" fill="#f3f4f6" font-family="var(--font-mono)" font-size="8" font-weight="700" text-anchor="middle">K</text>
          <text x="180" y="43" fill="#f3f4f6" font-family="var(--font-mono)" font-size="8" font-weight="700" text-anchor="middle">V</text>
        </svg>
      `,

      function: `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="funcGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#f59e0b" />
              <stop offset="100%" stop-color="#d97706" />
            </linearGradient>
            <filter id="funcBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="funcGlass" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>

          <!-- مسار البيانات والتدفق (Function Pipeline Flow) -->
          <path d="M 35,70 L 85,70 M 155,70 L 205,70" stroke="url(#funcGlow)" stroke-width="2" stroke-linecap="round" opacity="0.6" />
          <path d="M 75,65 L 85,70 L 75,75 M 195,65 L 205,70 L 195,75" stroke="url(#funcGlow)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.8" />

          <!-- المعالج المركزي الزجاجي المبتكر (Glass Processing Funnel) -->
          <g filter="url(#funcBlur)">
            <polygon points="95,45 145,55 145,85 95,95" fill="url(#funcGlass)" stroke="url(#funcGlow)" stroke-width="1.5" />
          </g>

          <text x="120" y="74" fill="#f3f4f6" font-family="var(--font-mono)" font-size="11" font-weight="700" text-anchor="middle">f(x)</text>
          <text x="45" y="60" fill="url(#funcGlow)" font-family="var(--font-arabic)" font-size="8" font-weight="700">مدخل</text>
          <text x="175" y="60" fill="url(#funcGlow)" font-family="var(--font-arabic)" font-size="8" font-weight="700">مخرج</text>
        </svg>
      `,

      number: `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="numGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ec4899" />
              <stop offset="100%" stop-color="#db2777" />
            </linearGradient>
            <filter id="numBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="numGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>

          <!-- خط بياني هندسي مميز للأرقام (Mathematical Coordinate System) -->
          <path d="M 40,100 L 200,100 M 50,110 L 50,30" stroke="url(#numGlow)" stroke-width="1" opacity="0.3" />
          <path d="M 50,100 L 100,50 L 150,90 L 190,30" stroke="url(#numGlow)" stroke-width="2" opacity="0.6" />

          <!-- مؤشرات القيمة البرمجية الطافية (Floating Numeric Values) -->
          <g filter="url(#numBlur)">
            <circle cx="100" cy="50" r="10" fill="url(#numGlass)" stroke="url(#numGlow)" stroke-width="1.5" />
            <circle cx="190" cy="30" r="10" fill="url(#numGlass)" stroke="url(#numGlow)" stroke-width="1.5" />
          </g>

          <text x="100" y="54" fill="#f3f4f6" font-family="var(--font-mono)" font-size="9" font-weight="700" text-anchor="middle">π</text>
          <text x="190" y="34" fill="#f3f4f6" font-family="var(--font-mono)" font-size="9" font-weight="700" text-anchor="middle">1</text>
        </svg>
      `,

      dom: `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="domGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38bdf8" />
              <stop offset="100%" stop-color="#3b82f6" />
            </linearGradient>
            <filter id="domBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="domGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <path d="M 120,35 L 60,75 M 120,35 L 180,75 M 60,75 L 30,115 M 60,75 L 90,115" stroke="url(#domGlow)" stroke-width="1.5" opacity="0.4" />
          <g filter="url(#domBlur)">
            <circle cx="120" cy="35" r="12" fill="url(#domGlass)" stroke="url(#domGlow)" stroke-width="1.5" />
            <circle cx="60" cy="75" r="10" fill="url(#domGlass)" stroke="url(#domGlow)" stroke-width="1.5" />
            <circle cx="180" cy="75" r="10" fill="url(#domGlass)" stroke="url(#domGlow)" stroke-width="1.5" />
            <circle cx="30" cy="115" r="8" fill="url(#domGlass)" stroke="url(#domGlow)" stroke-width="1.5" />
            <circle cx="90" cy="115" r="8" fill="url(#domGlass)" stroke="url(#domGlow)" stroke-width="1.5" />
          </g>
          <text x="120" y="39" fill="#f3f4f6" font-family="var(--font-mono)" font-size="9" font-weight="700" text-anchor="middle">div</text>
          <text x="60" y="79" fill="#f3f4f6" font-family="var(--font-mono)" font-size="8" font-weight="700" text-anchor="middle">h1</text>
          <text x="180" y="79" fill="#f3f4f6" font-family="var(--font-mono)" font-size="8" font-weight="700" text-anchor="middle">p</text>
        </svg>
      `,

      events: `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="eventGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#a855f7" />
              <stop offset="100%" stop-color="#3b82f6" />
            </linearGradient>
            <filter id="eventBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="eventGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.15)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <circle cx="120" cy="70" r="45" stroke="url(#eventGlow)" stroke-width="1" stroke-dasharray="4 4" opacity="0.3" />
          <circle cx="120" cy="70" r="30" stroke="url(#eventGlow)" stroke-width="1.5" stroke-dasharray="6 2" opacity="0.5" />
          <g filter="url(#eventBlur)">
            <circle cx="120" cy="70" r="14" fill="url(#eventGlass)" stroke="url(#eventGlow)" stroke-width="1.5" />
            <path d="M 80,100 L 110,78" stroke="url(#eventGlow)" stroke-width="1.5" stroke-linecap="round" opacity="0.7" />
            <circle cx="80" cy="100" r="6" fill="url(#eventGlass)" stroke="url(#eventGlow)" stroke-width="1.5" />
          </g>
          <path d="M 78,102 L 68,112 L 72,100 L 78,102" fill="url(#eventGlow)" opacity="0.9" />
          <text x="120" y="74" fill="#f3f4f6" font-family="var(--font-mono)" font-size="10" font-weight="700" text-anchor="middle">⚡</text>
        </svg>
      `,

      conditions: `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="condGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#f59e0b" />
              <stop offset="100%" stop-color="#ef4444" />
            </linearGradient>
            <filter id="condBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="condGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <path d="M 120,25 L 120,55 M 120,85 L 60,115 M 120,85 L 180,115" stroke="url(#condGlow)" stroke-width="2" stroke-linecap="round" opacity="0.5" />
          <g filter="url(#condBlur)">
            <polygon points="120,50 145,70 120,90 95,70" fill="url(#condGlass)" stroke="url(#condGlow)" stroke-width="1.5" />
            <circle cx="60" cy="115" r="8" fill="url(#condGlass)" stroke="#10b981" stroke-width="1.5" />
            <circle cx="180" cy="115" r="8" fill="url(#condGlass)" stroke="#ef4444" stroke-width="1.5" />
          </g>
          <text x="120" y="74" fill="#f3f4f6" font-family="var(--font-mono)" font-size="12" font-weight="700" text-anchor="middle">?</text>
          <text x="60" y="118" fill="#10b981" font-family="var(--font-mono)" font-size="8" font-weight="700" text-anchor="middle">T</text>
          <text x="180" y="118" fill="#ef4444" font-family="var(--font-mono)" font-size="8" font-weight="700" text-anchor="middle">F</text>
        </svg>
      `,

      loops: `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="loopsGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#6366f1" />
              <stop offset="100%" stop-color="#3b82f6" />
            </linearGradient>
            <filter id="loopsBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="loopsGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <path d="M 60,70 C 60,30 110,30 120,70 C 130,110 180,110 180,70 C 180,30 130,30 120,70 C 110,110 60,110 60,70 Z" stroke="url(#loopsGlow)" stroke-width="2" stroke-linecap="round" opacity="0.5" />
          <g filter="url(#loopsBlur)">
            <circle cx="120" cy="70" r="14" fill="url(#loopsGlass)" stroke="url(#loopsGlow)" stroke-width="1.5" />
            <circle cx="90" cy="50" r="5" fill="#3b82f6" stroke="url(#loopsGlow)" stroke-width="1" />
          </g>
          <text x="120" y="74" fill="#f3f4f6" font-family="var(--font-mono)" font-size="10" font-weight="700" text-anchor="middle">i++</text>
        </svg>
      `,

      date: `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="dateGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#f472b6" />
              <stop offset="100%" stop-color="#3b82f6" />
            </linearGradient>
            <filter id="dateBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="dateGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <circle cx="120" cy="70" r="40" stroke="url(#dateGlow)" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.4" />
          <g filter="url(#dateBlur)">
            <rect x="95" y="45" width="50" height="50" rx="10" fill="url(#dateGlass)" stroke="url(#dateGlow)" stroke-width="1.5" />
            <line x1="120" y1="70" x2="120" y2="55" stroke="url(#dateGlow)" stroke-width="1.5" stroke-linecap="round" />
            <line x1="120" y1="70" x2="132" y2="70" stroke="url(#dateGlow)" stroke-width="1.5" stroke-linecap="round" />
          </g>
          <circle cx="120" cy="70" r="3" fill="#ffffff" />
        </svg>
      `,

      math: `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="mathGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#10b981" />
              <stop offset="100%" stop-color="#3b82f6" />
            </linearGradient>
            <filter id="mathBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="mathGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <path d="M 40,70 L 200,70 M 120,20 L 120,120" stroke="url(#mathGlow)" stroke-width="1" opacity="0.25" />
          <path d="M 60,110 Q 120,10 180,110" stroke="url(#mathGlow)" stroke-width="2" opacity="0.6" />
          <g filter="url(#mathBlur)">
            <rect x="105" y="45" width="30" height="30" rx="6" fill="url(#mathGlass)" stroke="url(#mathGlow)" stroke-width="1.5" transform="rotate(45 120 60)" />
          </g>
          <text x="120" y="64" fill="#f3f4f6" font-family="var(--font-mono)" font-size="12" font-weight="700" text-anchor="middle">√</text>
        </svg>
      `,

      promise: `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="promiseGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#8b5cf6" />
              <stop offset="100%" stop-color="#6366f1" />
            </linearGradient>
            <filter id="promiseBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="promiseGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <path d="M 40,70 L 100,70" stroke="url(#promiseGlow)" stroke-width="2" opacity="0.5" />
          <path d="M 100,70 Q 140,40 180,40" stroke="#10b981" stroke-width="2" stroke-dasharray="4 2" opacity="0.6" />
          <path d="M 100,70 Q 140,100 180,100" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 2" opacity="0.6" />
          <g filter="url(#promiseBlur)">
            <circle cx="100" cy="70" r="10" fill="url(#promiseGlass)" stroke="url(#promiseGlow)" stroke-width="1.5" />
            <circle cx="180" cy="40" r="8" fill="url(#promiseGlass)" stroke="#10b981" stroke-width="1.5" />
            <circle cx="180" cy="100" r="8" fill="url(#promiseGlass)" stroke="#ef4444" stroke-width="1.5" />
          </g>
          <text x="100" y="74" fill="#f3f4f6" font-family="var(--font-mono)" font-size="9" font-weight="700" text-anchor="middle">⏳</text>
          <text x="180" y="43" fill="#10b981" font-family="var(--font-mono)" font-size="8" font-weight="700" text-anchor="middle">✔</text>
          <text x="180" y="103" fill="#ef4444" font-family="var(--font-mono)" font-size="8" font-weight="700" text-anchor="middle">✖</text>
        </svg>
      `,

      variables: `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="varGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#3b82f6" />
              <stop offset="100%" stop-color="#8b5cf6" />
            </linearGradient>
            <filter id="varBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="varGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <path d="M 60,70 Q 120,30 180,70" stroke="url(#varGlow)" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.4" />
          <g filter="url(#varBlur)">
            <rect x="35" y="45" width="45" height="50" rx="8" fill="url(#varGlass)" stroke="url(#varGlow)" stroke-width="1.5" />
            <rect x="160" y="45" width="45" height="50" rx="8" fill="url(#varGlass)" stroke="url(#varGlow)" stroke-width="1.5" />
          </g>
          <text x="57" y="65" fill="#f3f4f6" font-family="var(--font-mono)" font-size="9" font-weight="700" text-anchor="middle">let</text>
          <text x="182" y="65" fill="#f3f4f6" font-family="var(--font-mono)" font-size="9" font-weight="700" text-anchor="middle">const</text>
          <circle cx="57" cy="80" r="5" fill="#3b82f6" />
          <rect x="177" y="76" width="10" height="8" rx="2" fill="#8b5cf6" />
        </svg>
      `,

      operators: `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="opGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#00f2fe" />
              <stop offset="100%" stop-color="#4facfe" />
            </linearGradient>
            <filter id="opBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="opGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <g filter="url(#opBlur)">
            <circle cx="70" cy="70" r="16" fill="url(#opGlass)" stroke="url(#opGlow)" stroke-width="1.5" />
            <circle cx="170" cy="70" r="16" fill="url(#opGlass)" stroke="url(#opGlow)" stroke-width="1.5" />
            <rect x="100" y="55" width="40" height="30" rx="6" fill="url(#opGlass)" stroke="url(#opGlow)" stroke-width="1" />
          </g>
          <text x="70" y="75" fill="#f3f4f6" font-family="var(--font-mono)" font-size="14" font-weight="700" text-anchor="middle">+</text>
          <text x="170" y="75" fill="#f3f4f6" font-family="var(--font-mono)" font-size="12" font-weight="700" text-anchor="middle">&amp;&amp;</text>
          <text x="120" y="74" fill="url(#opGlow)" font-family="var(--font-mono)" font-size="11" font-weight="700" text-anchor="middle">===</text>
        </svg>
      `,

      json: `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="jsonGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#10b981" />
              <stop offset="100%" stop-color="#3b82f6" />
            </linearGradient>
            <filter id="jsonBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="jsonGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <g filter="url(#jsonBlur)">
            <rect x="50" y="35" width="140" height="70" rx="10" fill="url(#jsonGlass)" stroke="url(#jsonGlow)" stroke-width="1.5" />
          </g>
          <text x="75" y="74" fill="url(#jsonGlow)" font-family="var(--font-mono)" font-size="20" font-weight="700" text-anchor="middle">{</text>
          <text x="165" y="74" fill="url(#jsonGlow)" font-family="var(--font-mono)" font-size="20" font-weight="700" text-anchor="middle">}</text>
          <text x="120" y="65" fill="#f3f4f6" font-family="var(--font-mono)" font-size="9" font-weight="700" text-anchor="middle">"id": 101</text>
          <text x="120" y="80" fill="#9ca3af" font-family="var(--font-mono)" font-size="8" font-weight="700" text-anchor="middle">"status": "ok"</text>
        </svg>
      `,

      bom: `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="bomGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38bdf8" />
              <stop offset="100%" stop-color="#8b5cf6" />
            </linearGradient>
            <filter id="bomBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="bomGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <g filter="url(#bomBlur)">
            <rect x="45" y="35" width="150" height="70" rx="10" fill="url(#bomGlass)" stroke="url(#bomGlow)" stroke-width="1.5" />
            <circle cx="60" cy="48" r="4" fill="#ef4444" />
            <circle cx="72" cy="48" r="4" fill="#f59e0b" />
            <circle cx="84" cy="48" r="4" fill="#10b981" />
            <rect x="55" y="62" width="130" height="30" rx="4" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.05)" stroke-width="1" />
          </g>
          <text x="120" y="80" fill="#f3f4f6" font-family="var(--font-mono)" font-size="10" font-weight="700" text-anchor="middle">window</text>
        </svg>
      `,

      storage: `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="storeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ec4899" />
              <stop offset="100%" stop-color="#8b5cf6" />
            </linearGradient>
            <filter id="storeBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="storeGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <g filter="url(#storeBlur)">
            <ellipse cx="120" cy="50" rx="35" ry="12" fill="url(#storeGlass)" stroke="url(#storeGlow)" stroke-width="1.5" />
            <path d="M 85,50 L 85,75 A 35,12 0 0 0 155,75 L 155,50" fill="url(#storeGlass)" stroke="url(#storeGlow)" stroke-width="1.5" />
            <path d="M 85,75 L 85,100 A 35,12 0 0 0 155,100 L 155,75" fill="url(#storeGlass)" stroke="url(#storeGlow)" stroke-width="1.5" />
          </g>
          <text x="120" y="80" fill="#f3f4f6" font-family="var(--font-mono)" font-size="9" font-weight="700" text-anchor="middle">DB</text>
        </svg>
      `,

      "async-await": `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="asyncGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#00f2fe" />
              <stop offset="100%" stop-color="#6366f1" />
            </linearGradient>
            <filter id="asyncBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="asyncGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <path d="M 40,70 Q 120,110 200,70" stroke="url(#asyncGlow)" stroke-width="1.5" opacity="0.3" />
          <g filter="url(#asyncBlur)">
            <rect x="45" y="45" width="60" height="40" rx="8" fill="url(#asyncGlass)" stroke="url(#asyncGlow)" stroke-width="1.5" />
            <rect x="135" y="45" width="60" height="40" rx="8" fill="url(#asyncGlass)" stroke="url(#asyncGlow)" stroke-width="1.5" />
          </g>
          <text x="75" y="69" fill="#f3f4f6" font-family="var(--font-mono)" font-size="9" font-weight="700" text-anchor="middle">async</text>
          <text x="165" y="69" fill="#f3f4f6" font-family="var(--font-mono)" font-size="9" font-weight="700" text-anchor="middle">await</text>
          <circle cx="165" cy="74" r="3" fill="#00f2fe" />
        </svg>
      `,

      errors: `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="errGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ef4444" />
              <stop offset="100%" stop-color="#f59e0b" />
            </linearGradient>
            <filter id="errBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="errGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <g filter="url(#errBlur)">
            <rect x="50" y="35" width="140" height="70" rx="10" fill="url(#errGlass)" stroke="url(#errGlow)" stroke-width="1.5" />
            <polygon points="120,48 135,76 105,76" fill="rgba(239, 68, 68, 0.15)" stroke="url(#errGlow)" stroke-width="1.5" />
          </g>
          <text x="120" y="70" fill="#f3f4f6" font-family="var(--font-mono)" font-size="10" font-weight="700" text-anchor="middle">!</text>
          <text x="120" y="93" fill="url(#errGlow)" font-family="var(--font-mono)" font-size="8" font-weight="700" text-anchor="middle">catch(err)</text>
        </svg>
      `,

      modules: `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="modGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38bdf8" />
              <stop offset="100%" stop-color="#10b981" />
            </linearGradient>
            <filter id="modBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="modGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <path d="M 65,70 Q 120,30 175,70" stroke="url(#modGlow)" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.5" />
          <g filter="url(#modBlur)">
            <rect x="40" y="50" width="40" height="40" rx="8" fill="url(#modGlass)" stroke="url(#modGlow)" stroke-width="1.5" />
            <rect x="160" y="50" width="40" height="40" rx="8" fill="url(#modGlass)" stroke="url(#modGlow)" stroke-width="1.5" />
          </g>
          <text x="60" y="74" fill="#f3f4f6" font-family="var(--font-mono)" font-size="8" font-weight="700" text-anchor="middle">exp</text>
          <text x="180" y="74" fill="#f3f4f6" font-family="var(--font-mono)" font-size="8" font-weight="700" text-anchor="middle">imp</text>
        </svg>
      `,

      regexp: `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="regGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#f472b6" />
              <stop offset="100%" stop-color="#8b5cf6" />
            </linearGradient>
            <filter id="regBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="regGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <g filter="url(#regBlur)">
            <rect x="50" y="35" width="140" height="70" rx="10" fill="url(#regGlass)" stroke="url(#regGlow)" stroke-width="1.5" />
          </g>
          <text x="120" y="76" fill="url(#regGlow)" font-family="var(--font-mono)" font-size="20" font-weight="700" text-anchor="middle">/a-z/g</text>
        </svg>
      `,

      "browser-apis": `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="apiGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#3b82f6" />
              <stop offset="100%" stop-color="#10b981" />
            </linearGradient>
            <filter id="apiBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="apiGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <path d="M 60,70 L 180,70" stroke="url(#apiGlow)" stroke-width="2" stroke-dasharray="4 4" opacity="0.4" />
          <g filter="url(#apiBlur)">
            <circle cx="120" cy="70" r="18" fill="url(#apiGlass)" stroke="url(#apiGlow)" stroke-width="1.5" />
            <rect x="40" y="55" width="30" height="30" rx="6" fill="url(#apiGlass)" stroke="url(#apiGlow)" stroke-width="1.5" />
            <rect x="170" y="55" width="30" height="30" rx="6" fill="url(#apiGlass)" stroke="url(#apiGlow)" stroke-width="1.5" />
          </g>
          <text x="120" y="74" fill="#f3f4f6" font-family="var(--font-mono)" font-size="10" font-weight="700" text-anchor="middle">API</text>
        </svg>
      `,

      oop: `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="oopGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#3b82f6" />
              <stop offset="100%" stop-color="#10b981" />
            </linearGradient>
            <filter id="oopBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="oopGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <path d="M 120,40 L 120,70 L 70,105 M 120,70 L 170,105" stroke="url(#oopGlow)" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.5" />
          <g filter="url(#oopBlur)">
            <rect x="95" y="20" width="50" height="30" rx="6" fill="url(#oopGlass)" stroke="url(#oopGlow)" stroke-width="1.5" />
            <circle cx="70" cy="105" r="12" fill="url(#oopGlass)" stroke="#3b82f6" stroke-width="1.5" />
            <circle cx="170" cy="105" r="12" fill="url(#oopGlass)" stroke="#10b981" stroke-width="1.5" />
          </g>
          <text x="120" y="38" fill="#f3f4f6" font-family="var(--font-mono)" font-size="9" font-weight="700" text-anchor="middle">Class</text>
          <text x="70" y="108" fill="#3b82f6" font-family="var(--font-mono)" font-size="8" font-weight="700" text-anchor="middle">obj</text>
          <text x="170" y="108" fill="#10b981" font-family="var(--font-mono)" font-size="8" font-weight="700" text-anchor="middle">obj</text>
        </svg>
      `,
       
    'html-document-setup': `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="docGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#f97316" />
              <stop offset="100%" stop-color="#ef4444" />
            </linearGradient>
            <filter id="docBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="docGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <g filter="url(#docBlur)">
            <rect x="50" y="30" width="140" height="80" rx="10" fill="url(#docGlass)" stroke="url(#docGlow)" stroke-width="1.5" />
            <rect x="65" y="45" width="110" height="12" rx="3" fill="rgba(249, 115, 22, 0.15)" stroke="url(#docGlow)" stroke-width="1" />
          </g>
          <text x="120" y="54" fill="#f3f4f6" font-family="var(--font-mono)" font-size="8" font-weight="700" text-anchor="middle">&lt;!DOCTYPE html&gt;</text>
          <text x="75" y="78" fill="url(#docGlow)" font-family="var(--font-mono)" font-size="10" font-weight="700">&lt;head&gt;</text>
          <text x="75" y="95" fill="#9ca3af" font-family="var(--font-mono)" font-size="10" font-weight="700">&lt;body&gt;</text>
        </svg>
      `,

      'html-semantic-layout': `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="semGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#f97316" />
              <stop offset="100%" stop-color="#f59e0b" />
            </linearGradient>
            <filter id="semBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="semGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <g filter="url(#semBlur)">
            <rect x="45" y="25" width="150" height="90" rx="8" fill="url(#semGlass)" stroke="url(#semGlow)" stroke-width="1.5" />
            <rect x="55" y="33" width="130" height="16" rx="4" fill="rgba(249, 115, 22, 0.2)" stroke="url(#semGlow)" stroke-width="1" />
            <rect x="55" y="55" width="85" height="38" rx="4" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1" />
            <rect x="145" y="55" width="40" height="38" rx="4" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1" />
            <rect x="55" y="97" width="130" height="12" rx="3" fill="rgba(249, 115, 22, 0.2)" stroke="url(#semGlow)" stroke-width="1" />
          </g>
          <text x="120" y="44" fill="#f3f4f6" font-family="var(--font-mono)" font-size="8" font-weight="700" text-anchor="middle">header</text>
          <text x="97" y="78" fill="#f3f4f6" font-family="var(--font-mono)" font-size="8" font-weight="700" text-anchor="middle">main</text>
          <text x="165" y="78" fill="#f3f4f6" font-family="var(--font-mono)" font-size="7" font-weight="700" text-anchor="middle">aside</text>
        </svg>
      `,

      'html-text-content': `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="textGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#f59e0b" />
              <stop offset="100%" stop-color="#e11d48" />
            </linearGradient>
            <filter id="textBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="textGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <g filter="url(#textBlur)">
            <rect x="50" y="30" width="140" height="80" rx="10" fill="url(#textGlass)" stroke="url(#textGlow)" stroke-width="1.5" />
          </g>
          <text x="70" y="52" fill="url(#textGlow)" font-family="var(--font-mono)" font-size="12" font-weight="700">&lt;h1&gt;</text>
          <text x="110" y="52" fill="#f3f4f6" font-family="var(--font-mono)" font-size="10" font-weight="700">Title</text>
          <line x1="70" y1="68" x2="170" y2="68" stroke="rgba(255, 255, 255, 0.3)" stroke-width="2" stroke-linecap="round" />
          <line x1="70" y1="80" x2="150" y2="80" stroke="rgba(255, 255, 255, 0.2)" stroke-width="2" stroke-linecap="round" />
          <line x1="70" y1="92" x2="130" y2="92" stroke="rgba(255, 255, 255, 0.2)" stroke-width="2" stroke-linecap="round" />
        </svg>
      `,

      'html-navigation-links': `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="navGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38bdf8" />
              <stop offset="100%" stop-color="#f97316" />
            </linearGradient>
            <filter id="navBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="navGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <path d="M 60,70 Q 120,30 180,70" stroke="url(#navGlow)" stroke-width="2" stroke-dasharray="4 4" opacity="0.6" />
          <g filter="url(#navBlur)">
            <circle cx="60" cy="70" r="16" fill="url(#navGlass)" stroke="url(#navGlow)" stroke-width="1.5" />
            <circle cx="180" cy="70" r="16" fill="url(#navGlass)" stroke="url(#navGlow)" stroke-width="1.5" />
          </g>
          <text x="60" y="74" fill="#f3f4f6" font-family="var(--font-mono)" font-size="10" font-weight="700" text-anchor="middle">&lt;a&gt;</text>
          <text x="180" y="74" fill="#f3f4f6" font-family="var(--font-mono)" font-size="10" font-weight="700" text-anchor="middle">href</text>
        </svg>
      `,

      'html-media-assets': `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="mediaGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ec4899" />
              <stop offset="100%" stop-color="#f97316" />
            </linearGradient>
            <filter id="mediaBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="mediaGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <g filter="url(#mediaBlur)">
            <rect x="50" y="30" width="140" height="80" rx="10" fill="url(#mediaGlass)" stroke="url(#mediaGlow)" stroke-width="1.5" />
            <polygon points="105,55 145,70 105,85" fill="rgba(236, 72, 153, 0.3)" stroke="url(#mediaGlow)" stroke-width="1.5" />
            <circle cx="75" cy="50" r="8" fill="url(#mediaGlass)" stroke="url(#mediaGlow)" stroke-width="1.5" />
          </g>
          <text x="120" y="102" fill="#f3f4f6" font-family="var(--font-mono)" font-size="9" font-weight="700" text-anchor="middle">&lt;img /&gt; &amp; &lt;video&gt;</text>
        </svg>
      `,

      'html-forms-inputs': `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="formGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#10b981" />
              <stop offset="100%" stop-color="#f97316" />
            </linearGradient>
            <filter id="formBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="formGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <g filter="url(#formBlur)">
            <rect x="45" y="30" width="150" height="80" rx="10" fill="url(#formGlass)" stroke="url(#formGlow)" stroke-width="1.5" />
            <rect x="60" y="45" width="120" height="20" rx="4" fill="rgba(255, 255, 255, 0.04)" stroke="url(#formGlow)" stroke-width="1" />
            <rect x="60" y="75" width="60" height="20" rx="4" fill="rgba(249, 115, 22, 0.25)" stroke="url(#formGlow)" stroke-width="1" />
          </g>
          <text x="70" y="58" fill="#9ca3af" font-family="var(--font-mono)" font-size="8">input...</text>
          <text x="90" y="88" fill="#f3f4f6" font-family="var(--font-mono)" font-size="8" font-weight="700" text-anchor="middle">Submit</text>
        </svg>
      `,

      'html-tables-data': `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="tblGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38bdf8" />
              <stop offset="100%" stop-color="#10b981" />
            </linearGradient>
            <filter id="tblBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="tblGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <g filter="url(#tblBlur)">
            <rect x="45" y="30" width="150" height="80" rx="8" fill="url(#tblGlass)" stroke="url(#tblGlow)" stroke-width="1.5" />
            <line x1="45" y1="55" x2="195" y2="55" stroke="url(#tblGlow)" stroke-width="1" />
            <line x1="45" y1="80" x2="195" y2="80" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1" />
            <line x1="120" y1="30" x2="120" y2="110" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1" />
          </g>
          <text x="82" y="46" fill="url(#tblGlow)" font-family="var(--font-mono)" font-size="8" font-weight="700" text-anchor="middle">th</text>
          <text x="157" y="46" fill="url(#tblGlow)" font-family="var(--font-mono)" font-size="8" font-weight="700" text-anchor="middle">th</text>
          <text x="82" y="71" fill="#f3f4f6" font-family="var(--font-mono)" font-size="8" text-anchor="middle">td</text>
          <text x="157" y="71" fill="#f3f4f6" font-family="var(--font-mono)" font-size="8" text-anchor="middle">td</text>
        </svg>
      `,

      'html-interactive': `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="intGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#a855f7" />
              <stop offset="100%" stop-color="#f97316" />
            </linearGradient>
            <filter id="intBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="intGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <g filter="url(#intBlur)">
            <rect x="55" y="35" width="130" height="70" rx="10" fill="url(#intGlass)" stroke="url(#intGlow)" stroke-width="1.5" />
            <path d="M 75,55 L 85,65 L 75,75" stroke="url(#intGlow)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <text x="130" y="68" fill="#f3f4f6" font-family="var(--font-mono)" font-size="10" font-weight="700" text-anchor="middle">&lt;dialog&gt;</text>
          <text x="130" y="85" fill="#9ca3af" font-family="var(--font-mono)" font-size="8" text-anchor="middle">&lt;details&gt;</text>
        </svg>
      `,

      'html-accessibility-meta': `
        <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
          <defs>
            <linearGradient id="ariaGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#6366f1" />
              <stop offset="100%" stop-color="#10b981" />
            </linearGradient>
            <filter id="ariaBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="ariaGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
          </defs>
          <g filter="url(#ariaBlur)">
            <circle cx="120" cy="70" r="35" fill="url(#ariaGlass)" stroke="url(#ariaGlow)" stroke-width="1.5" />
            <circle cx="120" cy="50" r="6" fill="url(#ariaGlow)" />
            <path d="M 105,62 L 135,62 M 120,62 L 120,80 M 120,80 L 110,92 M 120,80 L 130,92" stroke="url(#ariaGlow)" stroke-width="2" stroke-linecap="round" />
          </g>
          <text x="120" y="118" fill="#f3f4f6" font-family="var(--font-mono)" font-size="8" font-weight="700" text-anchor="middle">ARIA &amp; SEO</text>
        </svg>
      `


    };

    // إرجاع الرسم الافتراضي البسيط في حال عدم توفر التصنيف
    return assets[categoryId] || `
      <svg viewBox="0 0 240 140" width="100%" height="120px" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="200" height="100" rx="12" fill="rgba(255, 255, 255, 0.02)" stroke="var(--border-color)" stroke-width="1" />
        <text x="120" y="75" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="14" text-anchor="middle">CodeMap</text>
      </svg>
    `;
  }
}