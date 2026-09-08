import {pol0, pol0par, pol0ris} from "../pol-tag-0par.js";
import {mehanismPodv, zadanie} from "./ris.js";
import {
    elFocusByPole, momInFocus, Pi, poleFocusByEl, polT, polUgGrad, polUglSk, zadPerVHran, zadPole
} from "../utils.js";
import {zadRisRazm, zadDlZv} from "../meh-svg-utils.js";
import {
    polABdl, polFI1, polFI2, polFI3, polFI4, polLevKr, polNizhKr, polPravKr, polSAX,
    polSAY, polSCX, polSCY, polSDY, polSS4X, polSS4Y, polVerhKr
} from "./analiz.js";
import {zadPerEl, zadPerVrEl, zadVrEl} from "../../../scripts/utils-svg-geom.js";
import {
    polTokA, polTokB, polTokBC, polTokCS4, polTokJs3, polTokOB, polTokY1, polTokY2, polTokZv5,
    polTokZv5D, polTokZv5Dl, polTokCD, polTokFi, polTokJs1,
    polTokJs2, polTokJs4, polTokJsDv, polTokK, polTokM1, polTokM2, polTokM3, polTokM4, polTokM5,
    polTokN1, polTokNDv, polTokNerav, polTokOA, polTokP5Max, polTokToch, tokCD, tokCS4, tokFi,
    tokJS1, tokJS2, tokJS4, tokJsDv, tokK, tokM1, tokM2, tokM3, tokM4, tokM5, tokN1, tokNDv,
    tokNerav, tokOA, tokP5Max, tokToch, tokOB, tokBC, tokY1, tokY2, tokA, tokJS3, tokB, polTokZv5Y1, polTokZv5Y2
} from "./local_storage.js";
import {elNaStr} from "../../../scripts/utils.js";


//Разметка страницы.
//Задать разметку страницы.
const content = document.getElementById("content");
let contentTag = "";
contentTag += pol0("Описание", zadanie);
contentTag += pol0par([
    ["oa_vvod", "OA, мм", 0],
    ["ob_vvod", "OB, мм", 0],
    ["bc_vvod", "BC, мм", 0],
    ["cd_vvod", "CD, мм", 0],
    ["cs4_vvod", "CS<sub>4</sub>, мм", 0],
    ["y1_vvod", "Y<sub>1</sub>, мм", 0],
    ["y2_vvod", "Y<sub>2</sub>, мм", 0],
    ["a_vvod", "a, мм", 0],
    ["b_vvod", "b, мм", 0],
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
    ["js3_vvod", "J<sub>S<sub>3</sub></sub>, кг×м<sup>2</sup>", 0],
    ["js4_vvod", "J<sub>S<sub>4</sub></sub>, кг×м<sup>2</sup>", 0],
    ["jsdv_vvod", "J<sub>S<sub>дв</sub></sub>, кг×м<sup>2</sup>", 0],
    ["p5_vvod", "P<sub>5</sub>, Н", 0],
    ["kol_vvod", "Кол. пол.", 0],
    ["toch_vvod", "Точность", 0],
    ["nerav_vvod", "δ", 0]
]);
contentTag += pol0ris(mehanismPodv);
content.innerHTML = contentTag;

//Поля ввода.
const
    oa_vvod = elNaStr("oa_vvod"), ob_vvod = elNaStr("ob_vvod"), bc_vvod = elNaStr("bc_vvod"),
    cd_vvod = elNaStr("cd_vvod"), cs4_vvod = elNaStr("cs4_vvod"), y1_vvod = elNaStr("y1_vvod"),
    y2_vvod = elNaStr("y2_vvod"), a_vvod = elNaStr("a_vvod"), b_vvod = elNaStr("b_vvod"),
    fi_vvod = elNaStr("fi_vvod"), n1_vvod = elNaStr("n1_vvod"), ndv_vvod = elNaStr("ndv_vvod"),
    m1_vvod = elNaStr("m1_vvod"), m2_vvod = elNaStr("m2_vvod"), m3_vvod = elNaStr("m3_vvod"),
    m4_vvod = elNaStr("m4_vvod"), m5_vvod = elNaStr("m5_vvod"), js1_vvod = elNaStr("js1_vvod"),
    js2_vvod = elNaStr("js2_vvod"), js3_vvod = elNaStr("js3_vvod"), js4_vvod = elNaStr("js4_vvod"),
    jsdv_vvod = elNaStr("jsdv_vvod"), p5_vvod = elNaStr("p5_vvod"), kol_vvod = elNaStr("kol_vvod"),
    toch_vvod = elNaStr("toch_vvod"), nerav_vvod = elNaStr("nerav_vvod");
//Элементы механизма на рисунке.
const
    meh = elNaStr("meh_ris"), meh1 = elNaStr("meh_ris-1"), zv1 = elNaStr("zv1_ris"), zv2 = elNaStr("zv2_ris"),
    zv3C = elNaStr("zv3C_ris"), zv3A1 = elNaStr("zv3A1_ris"), zv3A2 = elNaStr("zv3A2_ris"), zv4 = elNaStr("zv4_ris"),
    zv5Y = elNaStr("zv5Y_ris"), zv5A = elNaStr("zv5A_ris"), zv5B = elNaStr("zv5B_ris"),
    ob = elNaStr("ob_ris"), shO = elNaStr("shO_ris"), shA = elNaStr("shA_ris"), shB = elNaStr("shB_ris"),
    shC = elNaStr("shC_ris"), shD = elNaStr("shD_ris"), s4 = elNaStr("s4_ris"), st3 = elNaStr("st3_ris"),
    st5y1 = elNaStr("st5y1_ris"), st5y2 = elNaStr("st5y2_ris"), tr5 = elNaStr("tr5_ris");


//Получить текущее время.
function polTekVr() {
    return polT(fi_vvod.value, 0, polUglSk(n1_vvod.value));
}

//Задать размеры изображения.
function zadRazmIzobr() {
    zadRisRazm(meh, meh1, 57 + polPravKr() - polLevKr(), 52 + polVerhKr() - polNizhKr(), 50 - polLevKr(), 50 + polVerhKr());
    zadPerEl(st3, polTokOB(), 0);
    zadPerVrEl(st5y1, polTokOB() - polTokA(), -polTokY1(), 90);
    zadPerVrEl(st5y2, polTokOB() - polTokA(), -polTokY2(), 270);
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
}

function zadZv3Pol() {
    const t = polTekVr();
    zadPerVrEl(zv3C, polTokOB(), null, polUgGrad(polFI3(t)));
    zadPerVrEl(zv3A1, polTokOB(), null, polUgGrad(polFI3(t) + Pi));
    zadPerVrEl(zv3A2, polSAX(t), polSAY(t), polUgGrad(polFI3(t) + Pi));
    zadPerVrEl(tr5, polTokOB(), null, 270);
    zadPerEl(shC, polSCX(t), polSCY(t));
}

function zadZv4Pol() {
    const t = polTekVr();
    zadPerVrEl(zv4, polSCX(t), polSCY(t), polUgGrad(polFI4(t)));
    zadPerEl(shD, polTokOB(), polSDY(t));
    zadPerEl(s4, polSS4X(t), polSS4Y(t));
}

function zadCM4Pol() {
    const t = polTekVr();
    zadPerEl(s4, polSS4X(t), polSS4Y(t));
}

function zadZv5Pol() {
    const t = polTekVr();
    zadPerVrEl(zv5Y, polTokOB() - polTokA(), polSDY(t) + polTokZv5Y1(), 270);
    zadPerVrEl(zv5A, polTokOB(), polSDY(t), 180);
    zadPerVrEl(zv5B, polTokOB() - polTokA(), polSDY(t) - polTokZv5Y2(), 180);
}

//Задать ограничения полей ввода.
function zadOgrOA() {

}

function zadOgrOB() {

}

function zadOgrBC() {

}

function zadOgrCD() {

}


//Сфокусироваться на полях ввода при фокусе на элементах на изображении.
poleFocusByEl(zv1, oa_vvod);
poleFocusByEl(ob, ob_vvod);
poleFocusByEl(zv3C, bc_vvod);
poleFocusByEl(zv4, cd_vvod);
poleFocusByEl(zv5Y, y1_vvod);
poleFocusByEl(zv5Y, y2_vvod);
poleFocusByEl(zv5A, a_vvod);
poleFocusByEl(shO, m1_vvod);
poleFocusByEl(shB, m3_vvod);
poleFocusByEl(s4, m4_vvod);
//Подсветить элементы на изображении при фокусе на полях ввода.
elFocusByPole(oa_vvod, zv1);
elFocusByPole(ob_vvod, ob);
elFocusByPole(bc_vvod, zv3C);
elFocusByPole(cd_vvod, zv4);
elFocusByPole(cs4_vvod, shC);
elFocusByPole(cs4_vvod, s4);
elFocusByPole(a_vvod, zv5A);
elFocusByPole(b_vvod, zv5A);
elFocusByPole(b_vvod, zv5B);
elFocusByPole(m1_vvod, shO);
elFocusByPole(m2_vvod, shA);
elFocusByPole(m3_vvod, shB);
elFocusByPole(m4_vvod, s4);
elFocusByPole(m5_vvod, zv5A);
elFocusByPole(m5_vvod, zv5Y);
elFocusByPole(m5_vvod, zv5B);
momInFocus(js1_vvod, [zv1], shO);
momInFocus(js2_vvod, [zv2], shA);
momInFocus(js3_vvod, [zv3C, zv3A1, zv3A2], shB);
momInFocus(js4_vvod, [zv4], s4);
//Задать значения полей ввода при открытии страницы.
zadPole(oa_vvod, polTokOA());
zadPole(ob_vvod, polTokOB());
zadPole(bc_vvod, polTokBC());
zadPole(cd_vvod, polTokCD());
zadPole(cs4_vvod, polTokCS4());
zadPole(y1_vvod, polTokY1());
zadPole(y2_vvod, polTokY2());
zadPole(a_vvod, polTokA());
zadPole(b_vvod, polTokB());
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
zadPole(js3_vvod, polTokJs3());
zadPole(js4_vvod, polTokJs4());
zadPole(jsdv_vvod, polTokJsDv());
zadPole(p5_vvod, polTokP5Max());
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
zadDlZv(zv3C, polTokBC(), 1);
zadDlZv(zv3A1, polABdl(polTekVr()), 4);
zadDlZv(zv4, polTokCD(), 1);
zadDlZv(zv5A, polTokZv5D(), 3);
zadDlZv(zv5Y, polTokZv5Dl(), 3);
zadDlZv(zv5B, polTokZv5(), 3);
zadDlZv(ob, polTokOB(), 1);
zadDlZv(tr5, -polSDY(polTekVr()), 1);
//Задать ограничения размеров при открытии страницы.
zadOgrOA();
zadOgrOB();
zadOgrBC();
zadOgrCD();


//Задать обработчики событий для полей ввода.
fi_vvod.addEventListener("input", function () {
    const t = polTekVr();
    zadPerVHran(tokFi, fi_vvod.value);
    zadDlZv(ob, polTokOB(), 1);
    zadDlZv(tr5, -polSDY(t), 1);
    zadZv1Pol();
    zadZv2Pol();
    zadZv3Pol();
    zadZv4Pol();
    zadZv5Pol();
    zadDlZv(zv3A1, polABdl(t), 4);
});
oa_vvod.addEventListener("input", function () {
    const t = polTekVr();
    zadPerVHran(tokOA, oa_vvod.value);
    zadRazmIzobr();
    zadZv1Pol();
    zadZv2Pol();
    zadZv3Pol();
    zadZv4Pol();
    zadZv5Pol();
    zadDlZv(zv1, oa_vvod.value, 1);
    zadDlZv(zv3A1, polABdl(t), 4);
});
ob_vvod.addEventListener("input", function () {
    const t = polTekVr();
    zadPerVHran(tokOB, ob_vvod.value);
    zadRazmIzobr();
    zadZv2Pol();
    zadZv3Pol();
    zadZv4Pol();
    zadZv5Pol();
    zadDlZv(ob, ob_vvod.value, 1);
    zadDlZv(zv3A1, polABdl(t), 4);
});
bc_vvod.addEventListener("input", function () {
    const t = polTekVr();
    zadPerVHran(tokBC, bc_vvod.value);
    zadRazmIzobr();
    zadZv3Pol();
    zadZv4Pol();
    zadZv5Pol();
    zadDlZv(zv3C, bc_vvod.value, 1);
    zadDlZv(zv5Y, polTokZv5Dl(), 3);
    zadDlZv(tr5, -polSDY(t), 1);
});
cd_vvod.addEventListener("input", function () {
    const t = polTekVr();
    zadPerVHran(tokCD, cd_vvod.value);
    zadRazmIzobr();
    zadZv4Pol();
    zadZv5Pol();
    zadDlZv(zv4, cd_vvod.value, 1);
    zadDlZv(tr5, -polSDY(t), 1);
});
cs4_vvod.addEventListener("input", function () {
    zadPerVHran(tokCS4, cs4_vvod.value);
    zadCM4Pol();
});
y1_vvod.addEventListener("input", function () {
    zadPerVHran(tokY1, y1_vvod.value);
    zadZv5Pol();
    zadDlZv(zv5Y, polTokZv5Dl(), 3);
    zadPerVrEl(st5y1, polTokOB() - polTokA(), -polTokY1(), 90);
});
y2_vvod.addEventListener("input", function () {
    zadPerVHran(tokY2, y2_vvod.value);
    zadRazmIzobr();
    zadZv5Pol();
    zadDlZv(zv5Y, polTokZv5Dl(), 3);
    zadPerVrEl(st5y2, polTokOB() - polTokA(), -polTokY2(), 270);
});
a_vvod.addEventListener("input", function () {
    zadPerVHran(tokA, a_vvod.value);
    zadZv5Pol();
    zadDlZv(zv5A, polTokA(), 3);
    zadDlZv(zv5B, polTokB() - polTokA(), 3);
    zadPerVrEl(st5y1, polTokOB() - polTokA(), -polTokY1(), 90);
    zadPerVrEl(st5y2, polTokOB() - polTokA(), -polTokY2(), 270);
});
b_vvod.addEventListener("input", function () {
    zadPerVHran(tokB, b_vvod.value);
    zadDlZv(zv5B, polTokB() - polTokA(), 3);
    zadZv5Pol();
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
js3_vvod.addEventListener("input", function () {
    zadPerVHran(tokJS3, js3_vvod.value);
});
js4_vvod.addEventListener("input", function () {
    zadPerVHran(tokJS4, js4_vvod.value);
});
jsdv_vvod.addEventListener("input", function () {
    zadPerVHran(tokJsDv, jsdv_vvod.value);
});
p5_vvod.addEventListener("input", function () {
    zadPerVHran(tokP5Max, p5_vvod.value);
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
