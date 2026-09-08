//Блок меню на странице.
const menu = document.getElementById("content-menu");
//Класс стиля пункта меню анализа.
const classZag = "content-menu-zagolovok";
//Раздел анализа.
const razd = document.currentScript.getAttribute("razd");
//Подраздел анализа.
const podrazd = document.currentScript.getAttribute("podrazd");

//Проверить пункт меню анализа.
function isRazd(razdName) {
    return String(razd) === razdName && !podrazd ? " content-menu-zagolovok-active" : "";
}

//Тег меню.
const menuTag =
    "<a href=\"../../mehanizmy.html\" class=\"" + classZag + "\">Механизмы</a>" +
    "<a href=\"./0par.html\" class=\"" + classZag + isRazd("ish") + "\">Параметры механизма</a>" +
    "<a href=\"./1struk.html\" class=\"" + classZag + isRazd("struk") + "\">Структурный анализ механизма</a>" +
    "<a href=\"./2kin.html\" class=\"" + classZag + isRazd("kin") + "\">Кинематический анализ механизма</a>" +
    "<a href=\"./3sil.html\" class=\"" + classZag + isRazd("sil") + "\">Силовой анализ механизма</a>" +
    "<a href=\"./4din.html\" class=\"" + classZag + isRazd("din") + "\">Динамический анализ механизма</a>" +
    "<a href=\"./rez.html\" class=\"" + classZag + isRazd("rez") + "\">Результаты расчёта</a>"

//Добавить меню на страницу.
menu.innerHTML = menuTag;
