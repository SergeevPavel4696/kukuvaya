import {
    elFocusByPole, massFocus, momInFocus, poleFocusByEl, polUgGrad, zadPole, zadPerVHran, polT, polUglSk
} from "../utils.js";
import {
    polFI1A, polFI2, polFI4, polSAX, polSAY, polSBX, polSDX, polPravKr, polSS2X,
    polSS2Y, polSS4X, polSS4Y, polLevKr, polVerhKr, polNizhKr, polSCY, polSCX, polFI1C, polPrav3, polLev5
} from "./analiz.js";
import {
    polTokOA, polTokAB, polTokFi, polTokK, polTokM1, polTokM2, polTokM3, polTokM4, polTokM5, polTokJs1, polTokJs2,
    polTokJs4, polTokN1, polTokToch, tokOA, tokAB, tokFi, tokM1, tokM2, tokM3, tokM4, tokM5, tokJS1, tokJS2, tokJS4,
    tokK, tokN1, tokToch, polTokNerav, tokNerav, polTokOC, polTokCD, tokCD, tokOC, tokP3Max, tokP5Max, polTokP3Max,
    polTokP5Max, polTokAS2, polTokCS4, tokAS2, tokCS4, tokD3, tokD5, polTokD3, polTokD5
} from "./local_storage.js";
import {zadRisRazm, zadDlZv} from "../meh-svg-utils.js";
import {zadPerEl, zadPerVrEl, zadVrEl} from "../../../scripts/utils-svg-geom.js";
import {elNaStr} from "../../../scripts/utils.js";
import {pol0, pol0par, pol0ris} from "../pol-tag-0par.js";
import {mehanismPodv, zadanie} from "./ris.js";


//////////Разметка страницы.
//Задать разметку страницы.
const content = document.getElementById("content");
let contentTag = "";
contentTag += pol0("Описание", zadanie);
contentTag += pol0par([
    ["oa_vvod", "OA, мм", 0],
    ["ab_vvod", "AB, мм", 0],
    ["as2_vvod", "AS<sub>2</sub>, мм", 0],
    ["oc_vvod", "OC, мм", 0],
    ["cd_vvod", "CD, мм", 0],
    ["cs4_vvod", "CS<sub>4</sub>, мм", 0],
    ["d3_vvod", "d<sub>3</sub>, мм", 0],
    ["d5_vvod", "d<sub>5</sub>, мм", 0],
    ["fi_vvod", "φ<sub>1</sub>, град", 0],
    ["n1_vvod", "n<sub>1</sub>, об/мин", 0],
    ["m1_vvod", "m<sub>1</sub>, кг", 0],
    ["m2_vvod", "m<sub>2</sub>, кг", 0],
    ["m3_vvod", "m<sub>3</sub>, кг", 0],
    ["m4_vvod", "m<sub>4</sub>, кг", 0],
    ["m5_vvod", "m<sub>5</sub>, кг", 0],
    ["js1_vvod", "J<sub>S<sub>1</sub></sub>, кг×м<sup>2</sup>", 0],
    ["js2_vvod", "J<sub>S<sub>2</sub></sub>, кг×м<sup>2</sup>", 0],
    ["js4_vvod", "J<sub>S<sub>4</sub></sub>, кг×м<sup>2</sup>", 0],
    ["p3_vvod", "p<sub>3 max</sub>, МПа", 0],
    ["p5_vvod", "p<sub>5 max</sub>, МПа", 0],
    ["kol_vvod", "Кол. пол.", 0],
    ["toch_vvod", "Точность", 0],
    ["nerav_vvod", "δ", 0]
]);
contentTag += pol0ris(mehanismPodv);
content.innerHTML = contentTag;
//Поля ввода.
const
    oa_vvod = elNaStr("oa_vvod"), ab_vvod = elNaStr("ab_vvod"), as2_vvod = elNaStr("as2_vvod"),
    oc_vvod = elNaStr("oc_vvod"), cd_vvod = elNaStr("cd_vvod"), cs4_vvod = elNaStr("cs4_vvod"),
    d3_vvod = elNaStr("d3_vvod"), d5_vvod = elNaStr("d5_vvod"), fi_vvod = elNaStr("fi_vvod"),
    n1_vvod = elNaStr("n1_vvod"), m1_vvod = elNaStr("m1_vvod"), m2_vvod = elNaStr("m2_vvod"),
    m3_vvod = elNaStr("m3_vvod"), m4_vvod = elNaStr("m4_vvod"), m5_vvod = elNaStr("m5_vvod"),
    js1_vvod = elNaStr("js1_vvod"), js2_vvod = elNaStr("js2_vvod"), js4_vvod = elNaStr("js4_vvod"),
    p3max_vvod = elNaStr("p3_vvod"), p5max_vvod = elNaStr("p5_vvod"), kol_vvod = elNaStr("kol_vvod"),
    toch_vvod = elNaStr("toch_vvod"), nerav_vvod = elNaStr("nerav_vvod");
//Элементы механизма на рисунке.
const
    meh = elNaStr("meh_ris"), meh1 = elNaStr("meh_ris-1"), zv1a = elNaStr("zv1a_ris"), zv1c = elNaStr("zv1c_ris"),
    zv2 = elNaStr("zv2_ris"), zv3 = elNaStr("zv3_ris"), zv4 = elNaStr("zv4_ris"), zv5 = elNaStr("zv5_ris"),
    shO = elNaStr("shO_ris"), shA = elNaStr("shA_ris"), shB = elNaStr("shB_ris"), shC = elNaStr("shC_ris"),
    shD = elNaStr("shD_ris"), s2 = elNaStr("s2_ris"), s4 = elNaStr("s4_ris"), st3 = elNaStr("st3_ris"),
    st5 = elNaStr("st5_ris"), tr3 = elNaStr("tr3_ris"), tr5 = elNaStr("tr5_ris");


//Получить текущее время.
function polTekVr() {
    return polT(fi_vvod.value, 0, polUglSk(n1_vvod.value));
}

//Задать размеры изображения.
function zadRazmIzobr() {
    const t = polTekVr();
    zadRisRazm(meh, meh1, 64 + (polPravKr() - polLevKr()), 14 + (polVerhKr() - polNizhKr()), 32 - polLevKr(), 7 + polVerhKr());
    zadPerVrEl(st3, polPrav3() + 90, 0, 180);
    zadPerEl(st5, polLev5() - 90, 0);
    zadDlZv(tr3, -polSBX(t) + polPrav3() + 90, 4);
    zadDlZv(tr5, polSDX(t) - polLev5() + 90, 4);
}

//Задать положения звеньев.
function zadZv1Pol() {
    const t = polTekVr();
    zadVrEl(zv1a, polUgGrad(polFI1A(t)));
    zadVrEl(zv1c, polUgGrad(polFI1C(t)));
    zadPerEl(shA, polSAX(t), polSAY(t));
    zadPerEl(shC, polSCX(t), polSCY(t));
}

function zadZv2Pol() {
    const t = polTekVr();
    zadPerVrEl(zv2, polSAX(t), polSAY(t), polUgGrad(polFI2(t)));
    zadPerEl(shB, polSBX(t), null);
    zadPerEl(s2, polSS2X(t), polSS2Y(t));
}

function zadCM2Pol() {
    const t = polTekVr();
    zadPerEl(s2, polSS2X(t), polSS2Y(t));
}

function zadZv3Pol() {
    const t = polTekVr();
    zadPerEl(zv3, polSBX(t), null);
}

function zadZv4Pol() {
    const t = polTekVr();
    zadPerVrEl(zv4, polSCX(t), polSCY(t), polUgGrad(polFI4(t)));
    zadPerEl(shD, polSDX(t), null);
    zadPerEl(s4, polSS4X(t), polSS4Y(t));
}

function zadCM4Pol() {
    const t = polTekVr();
    zadPerEl(s4, polSS4X(t), polSS4Y(t));
}

function zadZv5Pol() {
    const t = polTekVr();
    zadPerEl(zv5, polSDX(t), null);
}

//Задать ограничения полей ввода.
function zadOgrOA() {

}

function zadOgrAB() {

}

function zadOgrOC() {

}

function zadOgrCD() {

}


//Сфокусироваться на полях ввода при фокусе на элементах на изображении.
poleFocusByEl(zv1a, oa_vvod);
poleFocusByEl(zv1c, oc_vvod);
poleFocusByEl(zv2, ab_vvod);
poleFocusByEl(zv4, cd_vvod);
poleFocusByEl(shO, m1_vvod);
poleFocusByEl(s2, m2_vvod);
poleFocusByEl(zv3, m3_vvod);
poleFocusByEl(s4, m4_vvod);
poleFocusByEl(zv5, m5_vvod);
//Подсветить элементы на изображении при фокусе на полях ввода.
elFocusByPole(oa_vvod, zv1a);
elFocusByPole(ab_vvod, zv2);
elFocusByPole(as2_vvod, shA);
elFocusByPole(as2_vvod, s2);
elFocusByPole(oc_vvod, zv1c);
elFocusByPole(cd_vvod, zv4);
elFocusByPole(cs4_vvod, shC);
elFocusByPole(cs4_vvod, s4);
elFocusByPole(m1_vvod, shO);
massFocus(m2_vvod, s2);
elFocusByPole(m3_vvod, shB);
massFocus(m4_vvod, s4);
elFocusByPole(m5_vvod, shD);
momInFocus(js1_vvod, [zv1a, zv1c], shO);
momInFocus(js2_vvod, [zv2], s2);
momInFocus(js4_vvod, [zv4], s4);
//Задать значения полей ввода при открытии страницы.
zadPole(oa_vvod, polTokOA());
zadPole(ab_vvod, polTokAB());
zadPole(as2_vvod, polTokAS2());
zadPole(oc_vvod, polTokOC());
zadPole(cd_vvod, polTokCD());
zadPole(cs4_vvod, polTokCS4());
zadPole(d3_vvod, polTokD3());
zadPole(d5_vvod, polTokD5());
zadPole(fi_vvod, polTokFi());
zadPole(n1_vvod, polTokN1());
zadPole(m1_vvod, polTokM1());
zadPole(m2_vvod, polTokM2());
zadPole(m3_vvod, polTokM3());
zadPole(m4_vvod, polTokM4());
zadPole(m5_vvod, polTokM5());
zadPole(js1_vvod, polTokJs1());
zadPole(js2_vvod, polTokJs2());
zadPole(js4_vvod, polTokJs4());
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
zadDlZv(zv1a, polTokOA(), 1);
zadDlZv(zv2, polTokAB(), 1);
zadDlZv(zv1c, polTokOC(), 1);
zadDlZv(zv4, polTokCD(), 1);
//Задать ограничения размеров при открытии страницы.
zadOgrOA();
zadOgrAB();
zadOgrOC();
zadOgrCD();


//Задать обработчики событий для полей ввода.
fi_vvod.addEventListener("input", function () {
    const t = polTekVr();
    zadPerVHran(tokFi, fi_vvod.value);
    zadDlZv(tr3, -polSBX(t) + polPrav3() + 90, 4);
    zadDlZv(tr5, polSDX(t) - polLev5() + 90, 4);
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
    zadDlZv(zv1a, oa_vvod.value, 1);
    zadOgrAB();
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
oc_vvod.addEventListener("input", function () {
    zadPerVHran(tokOC, oc_vvod.value);
    zadRazmIzobr();
    zadZv1Pol();
    zadZv4Pol();
    zadZv5Pol();
    zadDlZv(zv1c, oc_vvod.value, 1);
    zadOgrCD();
});
cd_vvod.addEventListener("input", function () {
    zadPerVHran(tokCD, cd_vvod.value);
    zadRazmIzobr();
    zadZv4Pol();
    zadZv5Pol();
    zadDlZv(zv4, cd_vvod.value, 1);
    zadOgrOC();
});
cs4_vvod.addEventListener("input", function () {
    zadPerVHran(tokCS4, cs4_vvod.value);
    zadCM4Pol();
});
d3_vvod.addEventListener("input", function () {
    zadPerVHran(tokD3, d3_vvod.value);
    zadCM4Pol();
});
d5_vvod.addEventListener("input", function () {
    zadPerVHran(tokD5, d5_vvod.value);
    zadCM4Pol();
});
n1_vvod.addEventListener("input", function () {
    zadPerVHran(tokN1, n1_vvod.value);
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
