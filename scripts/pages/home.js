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

        <!-- 1. مسار HTML5 (الأول في التسلسل الهرمي) -->
        <div class="premium-card tech-track-card" data-tech="html" role="button" aria-label="مسار HTML" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">

            <model-viewer src="assets/3D/HTML.glb" auto-rotate interaction-prompt="none" rotation-per-second="50deg"
                camera-controls disable-zoom shadow-intensity="1" exposure="1" environment-image="neutral"
                style="width: 100%; height: 150px; display: block; margin: 0 auto;"></model-viewer>

            <span class="track-title"
                style="color: var(--text-primary); font-size: 1.3rem; margin-top: 0.5rem; letter-spacing: 1px;">HTML5</span>

            <p class="track-desc">بنية صفحات الويب</p>

        </div>

        <!-- 2. مسار CSS3 (الثاني في التسلسل) -->
        <div class="premium-card tech-track-card" data-tech="css" role="button" aria-label="مسار CSS" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">

            <model-viewer src="assets/3D/CSS.glb" auto-rotate interaction-prompt="none" rotation-per-second="-50deg"
                camera-controls disable-zoom shadow-intensity="1" exposure="1" environment-image="neutral"
                style="width: 100%; height: 150px; display: block; margin: 0 auto;"></model-viewer>

            <span class="track-title"
                style="color: var(--text-primary); font-size: 1.3rem; margin-top: 0.5rem; letter-spacing: 1px;">CSS3</span>

            <p class="track-desc">تصميم واجهات الويب</p>

        </div>

        <!-- 3. مسار JavaScript (الثالث في التسلسل) -->
        <div class="premium-card tech-track-card" data-tech="javascript" role="button" aria-label="مسار JavaScript" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">

            <model-viewer src="assets/3D/JS.glb" auto-rotate interaction-prompt="none" rotation-per-second="50deg"
                camera-controls disable-zoom shadow-intensity="1" exposure="1" environment-image="neutral"
                style="width: 100%; height: 150px; display: block; margin: 0 auto;"></model-viewer>

            <span class="track-title" style="color: var(--text-primary); font-size: 1.3rem; margin-top: 0.5rem; letter-spacing: 1px;">JavaScript</span>

            <p class="track-desc">منطق صفحات الويب</p>
        </div>

        <!-- 4. مسار إضافات VS Code -->
        <div class="premium-card tech-track-card" data-tech="vscode" role="button" aria-label="إضافات VS Code" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <div style="width: 100%; height: 150px; display: flex; align-items: center; justify-content: center;">
                <svg width="65" height="65" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16.5 9.4 7.55 4.24a1 1 0 0 0-1.05.1l-3 2.5a1 1 0 0 0-.05 1.5l3.5 3.16L3.45 14.66a1 1 0 0 0 .05 1.5l3 2.5a1 1 0 0 0 1.05.1L16.5 13.6a1 1 0 0 0 .5-.86V10.26a1 1 0 0 0-.5-.86z"></path>
                    <path d="M18 6v12l3.5-2.5a1 1 0 0 0 .5-.86V9.36a1 1 0 0 0-.5-.86L18 6z"></path>
                </svg>
            </div>
            <span class="track-title" style="color: var(--text-primary); font-size: 1.3rem; margin-top: 0.5rem; letter-spacing: 1px;">VS Code</span>
            <p class="track-desc">إضافات ملحقات المحرر</p>
        </div>

        <!-- 5. مسار أدوات الذكاء الاصطناعي -->
        <div class="premium-card tech-track-card" data-tech="ai-tools" role="button" aria-label="أدوات الذكاء الاصطناعي" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <div style="width: 100%; height: 150px; display: flex; align-items: center; justify-content: center;">
                <svg width="65" height="65" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                    <path d="M12 12 2.1 12a10 10 0 0 1 9.9-10v10z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="m19 5 2.5-2.5M19 19l2.5 2.5M5 19l-2.5 2.5M5 5 2.5 2.5"></path>
                </svg>
            </div>
            <span class="track-title" style="color: var(--text-primary); font-size: 1.3rem; margin-top: 0.5rem; letter-spacing: 1px;">AI Tools</span>
            <p class="track-desc">أدوات الذكاء الاصطناعي</p>
        </div>

        <!-- 6. مسار أدوات ومواقع للمطورين -->
        <div class="premium-card tech-track-card" data-tech="dev-tools" role="button" aria-label="أدوات ومواقع للمطورين" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <model-viewer src="assets/3D/Tools.glb" auto-rotate interaction-prompt="none" rotation-per-second="50deg"
                camera-controls disable-zoom shadow-intensity="1" exposure="1" environment-image="neutral"
                style="width: 100%; height: 150px; display: block; margin: 0 auto;"></model-viewer>
            <span class="track-title" style="color: var(--text-primary); font-size: 1.3rem; margin-top: 0.5rem; letter-spacing: 1px;">Dev Tools</span>
            <p class="track-desc">أدوات ومواقع للمطورين</p>
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




