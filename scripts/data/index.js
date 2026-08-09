// 1. استيراد كتل البيانات التي قمنا بهيكلتها من مجلد core
import { fetchMethod } from "./browser-apis/fetch-network.js";
import { variablesData } from "./core/variables.js";
import { operatorsData } from "./core/operators.js";
import { conditionsData } from "./core/conditions.js";
import { loopsData } from "./core/loops.js";
import { functionsData } from "./core/functions.js";

// 2. استيراد كتل البيانات من مجلد types
import { stringsData } from "./types/strings.js";
import { numbersMathData } from "./types/numbers-math.js";
import { arraysData } from "./types/arrays.js";
import { objectsData } from "./types/objects.js";
import { datesData } from "./types/dates.js";
import { regexData } from "./types/regex.js";

// 3. استيراد كتل البيانات من مجلد dom
import { selectorsData } from "./dom/selectors.js";
import { traversalData } from "./dom/traversal.js";
import { contentAttributesData } from "./dom/content-attributes.js";
import { manipulationData } from "./dom/manipulation.js";
import { stylingData } from "./dom/styling.js";
import { eventsData } from "./dom/events.js";

// 4. استيراد كتل البيانات من مجلد browser-apis و advanced
import { bomWindowData } from "./browser-apis/bom-window.js";
import { storageData } from "./browser-apis/storage.js";
import { asyncPromisesData } from "./advanced/async-promises.js";
import { errorHandlingData } from "./advanced/error-handling.js";
import { modulesData } from "./advanced/modules.js";
import { oopClassesData } from "./advanced/oop-classes.js";
import { jsonData } from "./advanced/json.js";

//Todo HTML
import { documentSetupData } from "./Html/document-setup.js";
import { semanticLayoutData } from "./Html/semantic-layout.js";
import { textContentData } from "./Html/text-content.js";
import { navigationLinksData } from "./Html/navigation-links.js";
import { mediaAssetsData } from "./Html/media-assets.js";
import { formsInputsData } from "./Html/forms-inputs.js";
import { tablesData } from "./Html/tables-data.js";
import { interactiveData } from "./Html/interactive.js";
import { accessibilityMetaData } from "./Html/accessibility-meta.js";
import { seoPerformanceData } from "./Html/seo-performance.js";

// استيراد كتل بيانات مسار CSS
import { cssFundamentalsSelectorsData } from "./Css/fundamentals-selectors.js";
import { boxModelSizingData } from "./Css/box-model-sizing.js";
import { colorsBackgroundsShadowsData } from "./Css/colors-backgrounds-shadows.js";
import { typographyFontsData } from "./Css/typography-fonts.js";
import { displayPositioningData } from "./Css/display-positioning.js";
import { flexboxLayoutData } from "./Css/flexbox-layout.js";
import { gridLayoutData } from "./Css/grid-layout.js";
import { transformsTransitionsData } from "./Css/transforms-transitions.js";
import { keyframeAnimationsData } from "./Css/keyframe-animations.js";
import { variablesCustomPropertiesData } from "./Css/variables-custom-properties.js";
import { responsiveMediaQueriesData } from "./Css/responsive-media-queries.js";
import { mathFunctionsData } from "./Css/math-functions.js";
import { filtersEffectsData } from "./Css/filters-effects.js";
import { scrollOverflowData } from "./Css/scroll-overflow.js";
import { cascadeScopeData } from "./Css/cascade-scope.js";
import { advancedSelectorsData } from "./Css/advanced-selectors.js";

import { vscodeExtensionsData } from "./tools/vscode-extensions.js";
import { aiToolsData } from "./tools/ai-tools.js";
import { ourCreationsData } from './tools/our-creations.js';

import {
    appsScreenRecordingData,
    appsVideoEditingData,
    appsDownloadManagersData,
    appsDeveloperToolsData,
    appsRuntimesLibrariesData,
    appsSecurityPrivacyData,
    appsRemoteDesktopData,
    appsDatabaseGuisData
} from './tools/desktop-apps.js';


import {
    techTermsMainData,
    shortcutsMainData,
    techTermsHtmlData,
    techTermsCssData,
    techTermsJsData,
    techTermsGeneralData,
    shortcutsWindowsData,
    shortcutsVscodeData,
    shortcutsChromeData,
    shortcutsPhotoshopData,
    fileFormatsData,
    imageFormatsData,
    videoFormatsData
} from './tools/tech-reference.js';

import {
    visualInspirationData,
    imageEditingData,
    videoEditingData,
    uiComponentsIconsData,
    colorPalettesData,
    webFontsData,
    animationLibrariesData,
    devUtilitiesData,
    stockImagesIconsData,
} from "./tools/dev-tools.js";

// بناء كائن التسجيل المركزي وتصديره لربط الأقسام بمعرفاتها (categoryId)
export const registry = {
    variables: variablesData,
    operators: operatorsData,
    conditions: conditionsData,
    loops: loopsData,
    function: functionsData, // متوافق مع معرف الفئات فيillustrations.js
    string: stringsData,
    number: numbersMathData, // يشمل دمج الأرقام والرياضيات
    math: numbersMathData, // يوجه لنفس قائمة الرياضيات للتسهيل
    array: arraysData,
    object: objectsData,
    date: datesData,
    regexp: regexData,
    dom: [
        ...selectorsData,
        ...traversalData,
        ...contentAttributesData,
        ...manipulationData,
        ...stylingData,
    ], // دمج كتل الـ DOM الفرعية في قسم DOM الرئيسي
    events: eventsData,
    bom: bomWindowData,
    storage: storageData,
    "browser-apis": Array.isArray(fetchMethod) ? fetchMethod : [fetchMethod],
    "async-await": asyncPromisesData,
    errors: errorHandlingData,
    json: jsonData,
    modules: modulesData,
    oop: oopClassesData,
    "html-document-setup": documentSetupData,
    "html-semantic-layout": semanticLayoutData,
    "html-text-content": textContentData,
    "html-navigation-links": navigationLinksData,
    "html-media-assets": mediaAssetsData,
    "html-forms-inputs": formsInputsData,
    "html-tables-data": tablesData,
    "html-interactive": interactiveData,
    "html-accessibility-meta": accessibilityMetaData,
    "html-seo-performance": seoPerformanceData,
    "css-fundamentals-selectors": cssFundamentalsSelectorsData,
    "css-box-model-sizing": boxModelSizingData,
    "css-colors-backgrounds-shadows": colorsBackgroundsShadowsData,
    "css-typography-fonts": typographyFontsData,
    "css-display-positioning": displayPositioningData,
    "css-flexbox": flexboxLayoutData,
    "css-grid": gridLayoutData,
    "css-transitions-animations": transformsTransitionsData,
    "css-transforms-transitions": transformsTransitionsData,
    "css-transitions-transforms": transformsTransitionsData,
    "css-keyframe-animations": keyframeAnimationsData,
    "css-variables-custom-properties": variablesCustomPropertiesData,
    "css-responsive-media-queries": responsiveMediaQueriesData,
    "css-responsive-container-queries": responsiveMediaQueriesData,
    "css-math-functions": mathFunctionsData,
    "css-filters-effects": filtersEffectsData,
    "css-scroll-overflow": scrollOverflowData,
    "css-cascade-scope": cascadeScopeData,
    "css-modern-architecture": cascadeScopeData,
    "css-advanced-selectors": advancedSelectorsData,
    "vscode-extensions": vscodeExtensionsData,
    "ai-tools-cat": aiToolsData,
    "visual-inspiration": visualInspirationData,
    "image-editing": imageEditingData,
    "video-editing": videoEditingData,
    "ui-components-icons": uiComponentsIconsData,
    "color-palettes": colorPalettesData,
    "web-fonts": webFontsData,
    "animation-libraries": animationLibrariesData,
    "dev-utilities": devUtilitiesData,
    "stock-images-icons": stockImagesIconsData,
    'our-creations': ourCreationsData,
    'tech-terms-main': techTermsMainData,
    'shortcuts-main': shortcutsMainData,
    'tech-terms-html': techTermsHtmlData,
    'tech-terms-css': techTermsCssData,
    'tech-terms-js': techTermsJsData,
    'tech-terms-general': techTermsGeneralData,
    'shortcuts-windows': shortcutsWindowsData,
    'shortcuts-vscode': shortcutsVscodeData,
    'shortcuts-chrome': shortcutsChromeData,
    'shortcuts-photoshop': shortcutsPhotoshopData,
    'file-formats': fileFormatsData,
    'image-formats': imageFormatsData,
    'video-formats': videoFormatsData,
    'apps-screen-recording': appsScreenRecordingData,
    'apps-video-editing': appsVideoEditingData,
    'apps-download-managers': appsDownloadManagersData,
    'apps-developer-tools': appsDeveloperToolsData,
    'apps-runtimes-libraries': appsRuntimesLibrariesData,
    'apps-security-privacy': appsSecurityPrivacyData,
    'apps-remote-desktop': appsRemoteDesktopData,
    'apps-database-guis': appsDatabaseGuisData,
};
