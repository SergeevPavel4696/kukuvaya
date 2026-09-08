import {pol0, pol0par, pol0ris} from "../pol-tag-0par.js";
import {mehanismPodv, zadanie} from "./ris.js";
import {elNaStr} from "../../../scripts/utils.js";
import {
    elFocusByPole, massFocus, momInFocus, poleFocusByEl, polT, polUgGrad, polUglSk, zadPerVHran, zadPole
} from "../utils.js";
import {zadRisRazm, zadDlZv} from "../meh-svg-utils.js";
import {
    polFI1, polFI2, polFI4, polLevKr, polNizh3, polNizhKr, polPravKr, polSAX,
    polSAY, polSBY, polSDY, polSS2X, polSS2Y, polSS4X, polSS4Y, polVerh5, polVerhKr
} from "./analiz.js";
import {zadPerEl, zadPerVrEl, zadVrEl} from "../../../scripts/utils-svg-geom.js";
import {
    polTokAB, polTokAD, polTokAS2, polTokAS4, polTokFi, polTokJs1, polTokJs2, polTokJs4,
    polTokJsDv, polTokK, polTokM1, polTokM2, polTokM3, polTokM4, polTokM5, polTokN1,
    polTokNDv, polTokNerav, polTokOA, polTokP3Max, polTokP5Max, polTokToch, tokAB, tokAD,
    tokAS2, tokAS4, tokFi, tokJS1, tokJS2, tokJS4, tokJSDv, tokK, tokM1, tokM2, tokM3,
    tokM4, tokM5, tokN1, tokNDv, tokNerav, tokOA, tokP3Max, tokP5Max, tokToch
} from "./local_storage.js";


//////////Разметка страницы.
//Задать разметку страницы.
const content = document.getElementById("content");
let contentTag = "";
contentTag += pol0("Описание", zadanie);
contentTag += pol0par([
    ["oa_vvod", "OA, мм", 0],
    ["ab_vvod", "AB, мм", 0],
    ["as2_vvod", "AS<sub>2</sub>, мм", 0],
    ["ad_vvod", "AD, мм", 0],
    ["as4_vvod", "AS<sub>4</sub>, мм", 0],
    ["fi_vvod", "φ<sub>1</sub>, град", 0],
    ["n1_vvod", "n<sub>1</sub>, об/мин", 0],
    ["ndv_vvod", "n<sub>дв</sub>, об/мин", 0],
    ["m1_vvod", "m<sub>1</sub>, кг", 0],
    ["m2_vvod", "m<sub>2</sub>, кг", 0],
    ["m3_vvod", "m<sub>3</sub>, кг", 0],
    ["m4_vvod", "m<sub>4</sub>, кг", 0],
    ["m5_vvod", "m<sub>5</sub>, кг", 0],
    ["js1_vvod", "J<sub>S<sub>1</sub></sub>, кг×м<sup>2</sup>", 0],
    ["js2_vvod", "J<sub>S<sub>2</sub></sub>, кг×м<sup>2</sup>", 0],
    ["js4_vvod", "J<sub>S<sub>4</sub></sub>, кг×м<sup>2</sup>", 0],
    ["jsdv_vvod", "J<sub>S<sub>дв</sub></sub>, кг×м<sup>2</sup>", 0],
    ["p3max_vvod", "P<sub>3 max</sub>, Н", 0],
    ["p5max_vvod", "P<sub>5 max</sub>, Н", 0],
    ["kol_vvod", "Кол. пол.", 0],
    ["toch_vvod", "Точность", 0],
    ["nerav_vvod", "δ", 0]
]);
contentTag += pol0ris(mehanismPodv);
content.innerHTML = contentTag;
//Поля ввода.
const
    oa_vvod = elNaStr("oa_vvod"), ab_vvod = elNaStr("ab_vvod"), as2_vvod = elNaStr("as2_vvod"),
    ad_vvod = elNaStr("ad_vvod"), as4_vvod = elNaStr("as4_vvod"), fi_vvod = elNaStr("fi_vvod"),
    n1_vvod = elNaStr("n1_vvod"), ndv_vvod = elNaStr("ndv_vvod"), m1_vvod = elNaStr("m1_vvod"),
    m2_vvod = elNaStr("m2_vvod"), m3_vvod = elNaStr("m3_vvod"), m4_vvod = elNaStr("m4_vvod"),
    m5_vvod = elNaStr("m5_vvod"), js1_vvod = elNaStr("js1_vvod"), js2_vvod = elNaStr("js2_vvod"),
    js4_vvod = elNaStr("js4_vvod"), jsdv_vvod = elNaStr("jsdv_vvod"), p3max_vvod = elNaStr("p3max_vvod"),
    p5max_vvod = elNaStr("p5max_vvod"), kol_vvod = elNaStr("kol_vvod"), toch_vvod = elNaStr("toch_vvod"),
    nerav_vvod = elNaStr("nerav_vvod");
//Элементы механизма на рисунке.
const
    meh = elNaStr("meh_ris"), meh1 = elNaStr("meh_ris-1"), zv1 = elNaStr("zv1_ris"), zv2 = elNaStr("zv2_ris"),
    zv3 = elNaStr("zv3_ris"), zv4 = elNaStr("zv4_ris"), zv5 = elNaStr("zv5_ris"), shO = elNaStr("shO_ris"),
    shA = elNaStr("shA_ris"), shB = elNaStr("shB_ris"), shD = elNaStr("shD_ris"), s2 = elNaStr("s2_ris"),
    s4 = elNaStr("s4_ris"), st3 = elNaStr("st3_ris"), st5 = elNaStr("st5_ris"), tr3 = elNaStr("tr3_ris"),
    tr5 = elNaStr("tr5_ris");


//Получить текущее время.
function polTekVr() {
    return polT(fi_vvod.value, 0, polUglSk(n1_vvod.value));
}

//Задать размеры изображения.
function zadRazmIzobr() {
    const t = polTekVr();
    zadRisRazm(meh, meh1, 14 + (polPravKr() - polLevKr()), 64 + (polVerhKr() - polNizhKr()), 7 - polLevKr(), 32 + polVerhKr());
    zadPerVrEl(st3, 0, polNizh3() - 90, 90);
    zadPerVrEl(st5, 0, polVerh5() + 90, 270);
    zadDlZv(tr3, polSBY(t) - polNizh3() + 90, 4);
    zadDlZv(tr5, -polSDY(t) + polVerh5() + 90, 4);
}

//Задать положения звеньев и центров масс звеньев.
function zadZv1Pol() {
    const t = polTekVr();
    zadVrEl(zv1, polUgGrad(polFI1(t)));
    zadPerEl(shA, polSAX(t), polSAY(t));
}

function zadZv2Pol() {
    const t = polTekVr();
    zadPerVrEl(zv2, polSAX(t), polSAY(t), polUgGrad(polFI2(t)));
    zadPerEl(shB, 0, polSBY(t));
    zadPerEl(s2, polSS2X(t), polSS2Y(t));
}

function zadCM2Pol() {
    const t = polTekVr();
    zadPerEl(s2, polSS2X(t), polSS2Y(t));
}

function zadZv3Pol() {
    const t = polTekVr();
    zadPerVrEl(zv3, 0, polSBY(t), 90);
}

function zadZv4Pol() {
    const t = polTekVr();
    zadPerVrEl(zv4, polSAX(t), polSAY(t), polUgGrad(polFI4(t)));
    zadPerEl(shD, 0, polSDY(t));
    zadPerEl(s4, polSS4X(t), polSS4Y(t));
}

function zadCM4Pol() {
    const t = polTekVr();
    zadPerEl(s4, polSS4X(t), polSS4Y(t));
}

function zadZv5Pol() {
    const t = polTekVr();
    zadPerVrEl(zv5, 0, polSDY(t), 90);
}

//Задать ограничения полей ввода.
function zadOgrOA() {

}

function zadOgrAB() {

}

function zadOgrAD() {

}


//Сфокусироваться на полях ввода при фокусе на элементах на изображении.
poleFocusByEl(zv1, oa_vvod);
poleFocusByEl(zv2, ab_vvod);
poleFocusByEl(zv4, ad_vvod);
poleFocusByEl(shO, m1_vvod);
poleFocusByEl(s2, m2_vvod);
poleFocusByEl(zv3, m3_vvod);
poleFocusByEl(s4, m4_vvod);
poleFocusByEl(zv5, m5_vvod);
//Подсветить элементы на изображении при фокусе на полях ввода.
elFocusByPole(oa_vvod, zv1);
elFocusByPole(ab_vvod, zv2);
elFocusByPole(as2_vvod, shA);
elFocusByPole(as2_vvod, s2);
elFocusByPole(ad_vvod, zv4);
elFocusByPole(as4_vvod, shA);
elFocusByPole(as4_vvod, s4);
elFocusByPole(m1_vvod, shO);
massFocus(m2_vvod, s2);
elFocusByPole(m3_vvod, zv3);
massFocus(m4_vvod, s4);
elFocusByPole(m5_vvod, zv5);
momInFocus(js1_vvod, [zv1], shO);
momInFocus(js2_vvod, [zv2], s2);
momInFocus(js4_vvod, [zv4], s4);
//Задать значения полей ввода при открытии страницы.
zadPole(oa_vvod, polTokOA());
zadPole(ab_vvod, polTokAB());
zadPole(as2_vvod, polTokAS2());
zadPole(ad_vvod, polTokAD());
zadPole(as4_vvod, polTokAS4());
zadPole(fi_vvod, polTokFi());
zadPole(n1_vvod, polTokN1());
zadPole(ndv_vvod, polTokNDv());
zadPole(m1_vvod, polTokM1());
zadPole(m2_vvod, polTokM2());
zadPole(m3_vvod, polTokM3());
zadPole(m4_vvod, polTokM4());
zadPole(m5_vvod, polTokM5());
zadPole(js1_vvod, polTokJs1());
zadPole(js2_vvod, polTokJs2());
zadPole(js4_vvod, polTokJs4());
zadPole(jsdv_vvod, polTokJsDv());
zadPole(p3max_vvod, polTokP3Max());
zadPole(p5max_vvod, polTokP5Max());
zadPole(kol_vvod, polTokK());
zadPole(toch_vvod, polTokToch());
zadPole(nerav_vvod, polTokNerav());
//Задать размер рисунка при открытии страницы.
zadRazmIzobr();
//Задать положения звеньев при открытии страницы.
zadZv1Pol();
zadZv2Pol();
zadZv3Pol();
zadZv4Pol();
zadZv5Pol();
//Задать длины звеньев при открытии страницы.
zadDlZv(zv1, polTokOA(), 1);
zadDlZv(zv2, polTokAB(), 1);
zadDlZv(zv4, polTokAD(), 1);
//Задать ограничения размеров при открытии страницы.
zadOgrOA();
zadOgrAB();
zadOgrAD();


//Задать обработчики событий для полей ввода.
fi_vvod.addEventListener("input", function () {
    const t = polTekVr();
    zadPerVHran(tokFi, fi_vvod.value);
    zadDlZv(tr3, polSBY(t) - polNizh3() + 90, 4);
    zadDlZv(tr5, -polSDY(t) + polVerh5() + 90, 4);
    zadZv1Pol();
    zadZv2Pol();
    zadZv3Pol();
    zadZv4Pol();
    zadZv5Pol();
});
oa_vvod.addEventListener("input", function () {
    zadPerVHran(tokOA, oa_vvod.value);
    zadRazmIzobr();
    zadZv1Pol();
    zadZv2Pol();
    zadZv3Pol();
    zadZv4Pol();
    zadZv5Pol();
    zadDlZv(zv1, oa_vvod.value, 1);
    zadOgrAB();
    zadOgrAD();
});
ab_vvod.addEventListener("input", function () {
    zadPerVHran(tokAB, ab_vvod.value);
    zadRazmIzobr();
    zadZv2Pol();
    zadZv3Pol();
    zadDlZv(zv2, ab_vvod.value, 1);
    zadOgrOA();
});
as2_vvod.addEventListener("input", function () {
    zadPerVHran(tokAS2, as2_vvod.value);
    zadCM2Pol();
});
ad_vvod.addEventListener("input", function () {
    zadPerVHran(tokAD, ad_vvod.value);
    zadRazmIzobr();
    zadZv4Pol();
    zadZv5Pol();
    zadDlZv(zv4, ad_vvod.value, 1);
    zadOgrOA();
});
as4_vvod.addEventListener("input", function () {
    zadPerVHran(tokAS4, as4_vvod.value);
    zadCM4Pol();
});
n1_vvod.addEventListener("input", function () {
    zadPerVHran(tokN1, n1_vvod.value);
});
ndv_vvod.addEventListener("input", function () {
    zadPerVHran(tokNDv, ndv_vvod.value);
});
m1_vvod.addEventListener("input", function () {
    zadPerVHran(tokM1, m1_vvod.value);
})
m2_vvod.addEventListener("input", function () {
    zadPerVHran(tokM2, m2_vvod.value);
});
m3_vvod.addEventListener("input", function () {
    zadPerVHran(tokM3, m3_vvod.value);
});
m4_vvod.addEventListener("input", function () {
    zadPerVHran(tokM4, m4_vvod.value);
});
m5_vvod.addEventListener("input", function () {
    zadPerVHran(tokM5, m5_vvod.value);
});
js1_vvod.addEventListener("input", function () {
    zadPerVHran(tokJS1, js1_vvod.value);
});
js2_vvod.addEventListener("input", function () {
    zadPerVHran(tokJS2, js2_vvod.value);
});
js4_vvod.addEventListener("input", function () {
    zadPerVHran(tokJS4, js4_vvod.value);
});
jsdv_vvod.addEventListener("input", function () {
    zadPerVHran(tokJSDv, jsdv_vvod.value);
});
p3max_vvod.addEventListener("input", function () {
    zadPerVHran(tokP3Max, p3max_vvod.value);
});
p5max_vvod.addEventListener("input", function () {
    zadPerVHran(tokP5Max, p5max_vvod.value);
});
kol_vvod.addEventListener("input", function () {
    zadPerVHran(tokK, kol_vvod.value);
});
toch_vvod.addEventListener("input", function () {
    zadPerVHran(tokToch, toch_vvod.value);
});
nerav_vvod.addEventListener("input", function () {
    zadPerVHran(tokNerav, nerav_vvod.value);
});
