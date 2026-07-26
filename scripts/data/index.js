// 1. استيراد كتل البيانات التي قمنا بهيكلتها من مجلد core
import { fetchMethod } from './browser-apis/fetch-network.js';
import { variablesData } from './core/variables.js';
import { operatorsData } from './core/operators.js';
import { conditionsData } from './core/conditions.js';
import { loopsData } from './core/loops.js';
import { functionsData } from './core/functions.js';

// 2. استيراد كتل البيانات من مجلد types
import { stringsData } from './types/strings.js';
import { numbersMathData } from './types/numbers-math.js';
import { arraysData } from './types/arrays.js';
import { objectsData } from './types/objects.js';
import { datesData } from './types/dates.js';
import { regexData } from './types/regex.js';

// 3. استيراد كتل البيانات من مجلد dom
import { selectorsData } from './dom/selectors.js';
import { traversalData } from './dom/traversal.js';
import { contentAttributesData } from './dom/content-attributes.js';
import { manipulationData } from './dom/manipulation.js';
import { stylingData } from './dom/styling.js';
import { eventsData } from './dom/events.js';

// 4. استيراد كتل البيانات من مجلد browser-apis و advanced
import { bomWindowData } from './browser-apis/bom-window.js';
import { storageData } from './browser-apis/storage.js';
import { asyncPromisesData } from './advanced/async-promises.js';
import { errorHandlingData } from './advanced/error-handling.js';
import { modulesData } from './advanced/modules.js';
import { oopClassesData } from './advanced/oop-classes.js';

//Todo HTML
import { documentSetupData } from './html/document-setup.js';
import { semanticLayoutData } from './html/semantic-layout.js';
import { textContentData } from './html/text-content.js';
import { navigationLinksData } from './html/navigation-links.js';
import { mediaAssetsData } from './html/media-assets.js';
import { formsInputsData } from './html/forms-inputs.js';
import { tablesData } from './html/tables-data.js';

// 5. بناء كائن التسجيل المركزي وتصديره لربط الأقسام بمعرفاتها (categoryId)
export const registry = {
    variables: variablesData,
    operators: operatorsData,
    conditions: conditionsData,
    loops: loopsData,
    function: functionsData, // متوافق مع معرف الفئات فيillustrations.js
    string: stringsData,
    number: numbersMathData, // يشمل دمج الأرقام والرياضيات
    math: numbersMathData,   // يوجه لنفس قائمة الرياضيات للتسهيل
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
    'async-await': asyncPromisesData,
    errors: errorHandlingData,
    modules: modulesData,
    oop: oopClassesData,
    'html-document-setup': documentSetupData,
    'html-semantic-layout': semanticLayoutData,
    'html-text-content': textContentData,
    'html-navigation-links': navigationLinksData,
    'html-media-assets': mediaAssetsData,
    'html-forms-inputs': formsInputsData,
    'html-tables-data': tablesData ,
};