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


        <div class="premium-card tech-track-card" data-tech="javascript" role="button" aria-label="مسار JavaScript" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">

            <model-viewer src="assets/3D/JS.glb" auto-rotate interaction-prompt="none" rotation-per-second="50deg"
                camera-controls disable-zoom shadow-intensity="1" exposure="1" environment-image="neutral"
                style="width: 100%; height: 150px; display: block; margin: 0 auto;"></model-viewer>

            <span class="track-title" style="color: var(--text-primary); font-size: 1.3rem; margin-top: 0.5rem; letter-spacing: 1px;">JavaScript</span>

            <p class="track-desc">منطق صفحات الويب</p>
        </div>


        <div class="premium-card tech-track-card" data-tech="css" role="button" aria-label="مسار CSS" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">

            <model-viewer src="assets/3D/CSS.glb" auto-rotate interaction-prompt="none" rotation-per-second="-50deg"
                camera-controls disable-zoom shadow-intensity="1" exposure="1" environment-image="neutral"
                style="width: 100%; height: 150px; display: block; margin: 0 auto;"></model-viewer>

            <span class="track-title"
                style="color: var(--text-primary); font-size: 1.3rem; margin-top: 0.5rem; letter-spacing: 1px;">CSS3</span>

            <p class="track-desc">تصميم واجهات الويب</p>

        </div>


        <div class="premium-card tech-track-card" data-tech="html" role="button" aria-label="مسار HTML" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">

            <model-viewer src="assets/3D/HTML.glb" auto-rotate interaction-prompt="none" rotation-per-second="50deg"
                camera-controls disable-zoom shadow-intensity="1" exposure="1" environment-image="neutral"
                style="width: 100%; height: 150px; display: block; margin: 0 auto;"></model-viewer>

            <span class="track-title"
                style="color: var(--text-primary); font-size: 1.3rem; margin-top: 0.5rem; letter-spacing: 1px;">HTML5</span>

            <p class="track-desc">بنية صفحات الويب</p>

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




