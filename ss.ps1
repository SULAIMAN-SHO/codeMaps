# تحديد المسار الرئيسي لمجلد البيانات
$dataDir = ".\scripts\data"

# حذف المجلد القديم بالكامل إذا كان موجوداً (لتنظيف الفوضى)
if (Test-Path $dataDir) {
    Remove-Item -Path $dataDir -Recurse -Force
    Write-Host "تم حذف مجلد data القديم بنجاح." -ForegroundColor Yellow
}

# إنشاء المجلدات الرئيسية
$folders = @(
    "$dataDir\core",         # الأساسيات (المتغيرات، الشروط، الحلقات)
    "$dataDir\types",        # أنواع البيانات ودوالها (مصفوفات، نصوص، أرقام)
    "$dataDir\advanced",     # متقدم (OOP، Async، Modules)
    "$dataDir\dom",          # التعامل مع صفحة الويب
    "$dataDir\browser-apis"  # واجهات المتصفح (Storage, Fetch)
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Path $folder -Force | Out-Null
}

# قائمة الملفات موزعة على المجلدات
$files = @(
    # Core
    "$dataDir\core\variables.js",
    "$dataDir\core\operators.js",
    "$dataDir\core\conditions.js",
    "$dataDir\core\loops.js",
    "$dataDir\core\functions.js",
    
    # Types
    "$dataDir\types\numbers-math.js",
    "$dataDir\types\strings.js",
    "$dataDir\types\arrays.js",
    "$dataDir\types\objects.js",
    "$dataDir\types\dates.js",
    "$dataDir\types\regex.js",
    
    # Advanced
    "$dataDir\advanced\oop-classes.js",
    "$dataDir\advanced\async-promises.js",
    "$dataDir\advanced\error-handling.js",
    "$dataDir\advanced\modules.js",
    "$dataDir\advanced\json.js",
    
    # DOM (تم تجميعها بشكل منطقي وعملي بدلاً من 19 ملف)
    "$dataDir\dom\selectors.js",
    "$dataDir\dom\content-attributes.js",
    "$dataDir\dom\manipulation.js",
    "$dataDir\dom\events.js",
    "$dataDir\dom\traversal.js",
    "$dataDir\dom\observers.js",
    
    # Browser APIs
    "$dataDir\browser-apis\storage.js",
    "$dataDir\browser-apis\fetch-network.js",
    "$dataDir\browser-apis\bom-window.js"
)

# إنشاء الملفات فارغة
foreach ($file in $files) {
    New-Item -ItemType File -Path $file -Force | Out-Null
}

Write-Host "تم بناء هيكل البيانات الجديد النظيف بنجاح! جميع الملفات جاهزة." -ForegroundColor Green