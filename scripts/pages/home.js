import { categories } from '../data/categories.js';
import { CardComponent } from '../components/card.js';

/**
 * بناء وعرض الصفحة الرئيسية التفاعلية للمنصة
 * @param {HTMLElement} container - العنصر المستهدف لحقن وبناء الواجهة
 */
export function renderHome(container) {
    // تفريغ الحاوية وتجهيز بنية الهيكل الخاص بصفحة البداية
    container.innerHTML = `


    <section class="home-hero">

        <h1 class="hero-title">المرجع المعماري الفاخر لتقنيات الويب</h1>

        <p class="hero-subtitle">دليلك التفاعلي المقتضب لتعلم كيف تفكر، وتحليل البنى البرمجية من الهاتف أو الحاسوب
            بأسلوب يحاكي تطبيقات سطح المكتب الأصيلة.</p>

    </section>


    <div class="section-title-wrapper">

        <h2 class="section-title">المسارات التقنية الرئيسية</h2>

    </div>

    <div dir="rtl" class="tech-tracks-grid" id="main-tech-grid">

        <!-- 1. مسار HTML5 -->
        <div class="premium-card tech-track-card" data-tech="html" role="button" aria-label="مسار HTML" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <model-viewer src="assets/3D/HTML.glb" auto-rotate interaction-prompt="none" rotation-per-second="50deg"
                disable-zoom shadow-intensity="1" exposure="1" environment-image="neutral"
                style="width: 120px; height: 120px; display: block; margin: 0 auto; pointer-events: none;"></model-viewer>
            <span class="track-title" style="color: var(--text-primary); font-size: 1.3rem; margin-top: 0.5rem; letter-spacing: 1px;">HTML5</span>
            <p class="track-desc">بنية صفحات الويب</p>
        </div>

        <!-- 2. مسار CSS3 -->
        <div class="premium-card tech-track-card" data-tech="css" role="button" aria-label="مسار CSS" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <model-viewer src="assets/3D/CSS.glb" auto-rotate interaction-prompt="none" rotation-per-second="-50deg"
                disable-zoom shadow-intensity="1" exposure="1" environment-image="neutral"
                style="width: 120px; height: 120px; display: block; margin: 0 auto; pointer-events: none;"></model-viewer>
            <span class="track-title" style="color: var(--text-primary); font-size: 1.3rem; margin-top: 0.5rem; letter-spacing: 1px;">CSS3</span>
            <p class="track-desc">تصميم واجهات الويب</p>
        </div>

        <!-- 3. مسار JavaScript -->
        <div class="premium-card tech-track-card" data-tech="javascript" role="button" aria-label="مسار JavaScript" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <model-viewer src="assets/3D/JS.glb" auto-rotate interaction-prompt="none" rotation-per-second="50deg"
                disable-zoom shadow-intensity="1" exposure="1" environment-image="neutral"
                style="width: 120px; height: 120px; display: block; margin: 0 auto; pointer-events: none;"></model-viewer>
            <span class="track-title" style="color: var(--text-primary); font-size: 1.3rem; margin-top: 0.5rem; letter-spacing: 1px;">JavaScript</span>
            <p class="track-desc">منطق صفحات الويب</p>
        </div>

        <!-- 4. مسار إضافات VS Code -->
        <div class="premium-card tech-track-card" data-tech="vscode" role="button" aria-label="إضافات VS Code" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <model-viewer src="assets/3D/vs-code-extensions.glb" auto-rotate interaction-prompt="none" rotation-per-second="-50deg"
                disable-zoom shadow-intensity="1" exposure="1" environment-image="neutral"
                style="width: 120px; height: 120px; display: block; margin: 0 auto; pointer-events: none;"></model-viewer>
            <span class="track-title" style="color: var(--text-primary); font-size: 1.3rem; margin-top: 0.5rem; letter-spacing: 1px;">VS Code</span>
            <p class="track-desc">إضافات ملحقات المحرر</p>
        </div>

        <!-- 5. مسار أدوات الذكاء الاصطناعي -->
        <div class="premium-card tech-track-card" data-tech="ai-tools" role="button" aria-label="أدوات الذكاء الاصطناعي" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <model-viewer src="assets/3D/Ai.glb" auto-rotate interaction-prompt="none" rotation-per-second="50deg"
                disable-zoom shadow-intensity="1" exposure="1" environment-image="neutral"
                style="width: 120px; height: 120px; display: block; margin: 0 auto; pointer-events: none;"></model-viewer>
            <span class="track-title" style="color: var(--text-primary); font-size: 1.3rem; margin-top: 0.5rem; letter-spacing: 1px;">AI Tools</span>
            <p class="track-desc">أدوات الذكاء الاصطناعي</p>
        </div>

        <!-- 6. مسار أدوات ومواقع للمطورين -->
        <div class="premium-card tech-track-card" data-tech="dev-tools" role="button" aria-label="أدوات ومواقع للمطورين" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <model-viewer src="assets/3D/Tools.glb" auto-rotate interaction-prompt="none" rotation-per-second="-50deg"
                disable-zoom shadow-intensity="1" exposure="1" environment-image="neutral"
                style="width: 120px; height: 120px; display: block; margin: 0 auto; pointer-events: none;"></model-viewer>
            <span class="track-title" style="color: var(--text-primary); font-size: 1.3rem; margin-top: 0.5rem; letter-spacing: 1px;">Dev Tools</span>
            <p class="track-desc">أدوات ومواقع للمطورين</p>
        </div>


        <!-- 7. مسار أدوات وتطبيقات -->
        <div class="premium-card tech-track-card" data-tech="apps" role="button" aria-label="أدوات وتطبيقات" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <div style="width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
            </div>
            <span class="track-title" style="color: var(--text-primary); font-size: 1.3rem; margin-top: 0.5rem; letter-spacing: 1px;">Apps &amp; Tools</span>
            <p class="track-desc">أدوات وتطبيقات</p>
        </div>

        <!-- 8. مسار من تطويرنا -->
        <div class="premium-card tech-track-card" data-tech="our-creations" role="button" aria-label="من تطويرنا" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <div style="width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            </div>
            <span class="track-title" style="color: var(--text-primary); font-size: 1.3rem; margin-top: 0.5rem; letter-spacing: 1px;">Our Creations</span>
            <p class="track-desc">من تطويرنا</p>
        </div>


        <!-- 9. مسار مصطلحات ومعلومات تقنية -->
        <div class="premium-card tech-track-card" data-tech="tech-reference" role="button" aria-label="مصطلحات ومعلومات تقنية" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <div style="width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    <line x1="9" y1="7" x2="15" y2="7"></line>
                    <line x1="9" y1="11" x2="15" y2="11"></line>
                </svg>
            </div>
            <span class="track-title" style="color: var(--text-primary); font-size: 1.3rem; margin-top: 0.5rem; letter-spacing: 1px;">Tech Reference</span>
            <p class="track-desc">مصطلحات ومعلومات تقنية</p>
        </div>

    </div>


`;
    const icon = container.querySelector('[data-tech="javascript"]');
    const lastAnimation = container.querySelector(".jt1");

    if (icon && lastAnimation) {

        icon.addEventListener("mouseenter", () => {

            if (icon.classList.contains("playing")) return;

            icon.classList.add("playing");

        });

        lastAnimation.addEventListener("animationend", () => {

            icon.classList.remove("playing");

        });

    }
    const trackCards = container.querySelectorAll('.tech-track-card');
    trackCards.forEach(card => {
        card.addEventListener('click', () => {
            const tech = card.getAttribute('data-tech');
            window.location.hash = `#/track/${tech}`;
        });
    });
}




