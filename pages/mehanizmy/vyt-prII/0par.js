import {pol0, pol0par, pol0ris} from "../pol-tag-0par.js";
import {mehanismPodv, zadanie} from "./ris.js";
import {elNaStr} from "../../../scripts/utils.js";
import {
    elFocusByPole, massFocus, momInFocus, poleFocusByEl, polT, polUgGrad, polUglSk, zadPerVHran, zadPole
} from "../utils.js";
import {zadRisRazm, zadDlZv} from "../meh-svg-utils.js";
import {zadPerEl, zadPerVrEl, zadVrEl} from "../../../scripts/utils-svg-geom.js";
import {
    polFI1, polFI2, polFI3, polFI4, polKr5, polLevKr, polNizhKr, polPravKr, polSAX, polSAY,
    polSBX, polSBY, polSDX, polSDY, polSFY, polSS2X, polSS2Y, polSS3X, polSS3Y, polSS4X, polSS4Y, polVerhKr
} from "./analiz.js";
import {
    polTokA, polTokAB, polTokAS2, polTokB, polTokBC, polTokCD, polTokDS4, polTokFi, polTokP5Max,
    polTokJs1, polTokJs2, polTokJs3, polTokJs4, polTokJsDv, polTokK, polTokM1, polTokM2, polTokM3, polTokM4,
    polTokM5, polTokN1, polTokNDv, polTokNerav, polTokOA, polTokToch, tokA, tokAB, tokAS2, tokB, tokBC, tokCD,
    tokDS4, tokFi, tokP5Max, tokJS1, tokJS2, tokJS3, tokJS4, tokJSDv, tokK, tokM1, tokM2, tokM3, tokM4,
    tokM5, tokN1, tokNDv, tokNerav, tokOA, tokToch, polTokC, polTokDF, polTokCS3, tokDF, tokC
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
    ["bc_vvod", "BC, мм", 0],
    ["cd_vvod", "CD, мм", 0],
    ["cs3_vvod", "CS<sub>3</sub>, мм", 0],
    ["df_vvod", "DF, мм", 0],
    ["ds4_vvod", "DS<sub>4</sub>, мм", 0],
    ["a_vvod", "a, мм", 0],
    ["b_vvod", "b, мм", 0],
    ["c_vvod", "c, мм", 0],
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
    oa_vvod = elNaStr("oa_vvod"), ab_vvod = elNaStr("ab_vvod"), as2_vvod = elNaStr("as2_vvod"),
    bc_vvod = elNaStr("bc_vvod"), cd_vvod = elNaStr("cd_vvod"), cs3_vvod = elNaStr("cs3_vvod"),
    df_vvod = elNaStr("df_vvod"), ds4_vvod = elNaStr("ds4_vvod"), a_vvod = elNaStr("a_vvod"),
    b_vvod = elNaStr("b_vvod"), c_vvod = elNaStr("c_vvod"), fi_vvod = elNaStr("fi_vvod"), n1_vvod = elNaStr("n1_vvod"),
    ndv_vvod = elNaStr("ndv_vvod"), m1_vvod = elNaStr("m1_vvod"), m2_vvod = elNaStr("m2_vvod"),
    m3_vvod = elNaStr("m3_vvod"), m4_vvod = elNaStr("m4_vvod"), m5_vvod = elNaStr("m5_vvod"),
    js1_vvod = elNaStr("js1_vvod"), js2_vvod = elNaStr("js2_vvod"), js3_vvod = elNaStr("js3_vvod"),
    js4_vvod = elNaStr("js4_vvod"), jsdv_vvod = elNaStr("jsdv_vvod"), p5_vvod = elNaStr("p5_vvod"),
    kol_vvod = elNaStr("kol_vvod"), toch_vvod = elNaStr("toch_vvod"), nerav_vvod = elNaStr("nerav_vvod");
//Элементы механизма на рисунке.
const
    meh = elNaStr("meh_ris"), meh1 = elNaStr("meh_ris-1"), zv1 = elNaStr("zv1_ris"), zv2 = elNaStr("zv2_ris"),
    zv3B = elNaStr("zv3b_ris"), zv3D = elNaStr("zv3d_ris"), zv4 = elNaStr("zv4_ris"), zv5 = elNaStr("zv5_ris"),
    shO = elNaStr("shO_ris"), shA = elNaStr("shA_ris"), shB = elNaStr("shB_ris"), shC = elNaStr("shC_ris"),
    shD = elNaStr("shD_ris"), shF = elNaStr("shF_ris"), s2 = elNaStr("s2_ris"), s3 = elNaStr("s3_ris"),
    s4 = elNaStr("s4_ris"), st3 = elNaStr("st3_ris"), st5 = elNaStr("st5_ris"), tr5 = elNaStr("tr5_ris");


//Получить текущее время.
function polTekVr() {
    return polT(fi_vvod.value, 0, polUglSk(n1_vvod.value));
}

//Задать размеры изображения.
function zadRazmIzobr() {
    const t = polTekVr();
    zadRisRazm(meh, meh1, 35 + polPravKr() - polLevKr(), 14 + polVerhKr() - polNizhKr(), 7 - polLevKr(), 7 + polVerhKr());
    zadPerEl(st3, a_vvod.value, b_vvod.value);
    zadPerVrEl(st5, a_vvod.value - c_vvod.value, polKr5() - 90, 90);
    zadDlZv(tr5, polSFY(t) - polKr5() + 90, 4);
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
    zadPerEl(shB, polSBX(t), polSBY(t));
    zadPerEl(s2, polSS2X(t), polSS2Y(t));
}

function zadCM2Pol() {
    const t = polTekVr();
    zadPerEl(s2, polSS2X(t), polSS2Y(t));
}

function zadZv3Pol() {
    const t = polTekVr();
    zadPerVrEl(zv3B, polTokA(), polTokB(), polUgGrad(polFI3(t)));
    zadPerVrEl(zv3D, polSBX(t), polSBY(t), polUgGrad(polFI3(t)));
    zadPerEl(shD, polSDX(t), polSDY(t));
    zadPerEl(s3, polSS3X(t), polSS3Y(t));
}

function zadCM3Pol() {
    const t = polTekVr();
    zadPerEl(3, polSS3X(t), polSS3Y(t));
}

function zadZv4Pol() {
    const t = polTekVr();
    zadPerVrEl(zv4, polSDX(t), polSDY(t), polUgGrad(polFI4(t)));
    zadPerEl(shF, polTokA() - polTokC(), polSFY(t));
    zadPerEl(s4, polSS4X(t), polSS4Y(t));
}

function zadCM4Pol() {
    const t = polTekVr();
    zadPerEl(s4, polSS4X(t), polSS4Y(t));
}

function zadZv5Pol() {
    const t = polTekVr();
    zadPerVrEl(zv5, polTokA() - polTokC(), polSFY(t), 90);
}

//Задать ограничения полей ввода.
function zadOgrOA() {

}

function zadOgrAB() {

}

function zadOgrBC() {

}

function zadOgrCD() {

}

function zadOgrDF() {

}

function zadOgrA() {

}

function zadOgrB() {

}

function zadOgrC() {

}


//Сфокусироваться на полях ввода при фокусе на элементах на изображении.
poleFocusByEl(zv1, oa_vvod);
poleFocusByEl(zv2, ab_vvod);
poleFocusByEl(zv3B, bc_vvod);
poleFocusByEl(zv3D, cd_vvod);
poleFocusByEl(zv4, df_vvod);
poleFocusByEl(shO, m1_vvod);
poleFocusByEl(s2, m2_vvod);
poleFocusByEl(s3, m3_vvod);
poleFocusByEl(s4, m4_vvod);
poleFocusByEl(zv5, m5_vvod);
//Подсветить элементы на изображении при фокусе на полях ввода.
elFocusByPole(oa_vvod, zv1);
elFocusByPole(ab_vvod, zv2);
elFocusByPole(as2_vvod, shA);
elFocusByPole(as2_vvod, s2);
elFocusByPole(bc_vvod, zv3B);
elFocusByPole(cd_vvod, zv3D);
elFocusByPole(ds4_vvod, shD);
elFocusByPole(df_vvod, zv4);
elFocusByPole(ds4_vvod, s4);
elFocusByPole(m1_vvod, shO);
massFocus(m2_vvod, s2);
elFocusByPole(m3_vvod, shC);
massFocus(m4_vvod, s4);
elFocusByPole(m5_vvod, zv5);
momInFocus(js1_vvod, [zv1], shO);
momInFocus(js2_vvod, [zv2], s2);
momInFocus(js3_vvod, [zv3B, zv3D], shC);
momInFocus(js4_vvod, [zv4], s4);
//Задать значения полей ввода при открытии страницы.
zadPole(oa_vvod, polTokOA());
zadPole(ab_vvod, polTokAB());
zadPole(as2_vvod, polTokAS2());
zadPole(bc_vvod, polTokBC());
zadPole(cd_vvod, polTokCD());
zadPole(cs3_vvod, polTokCS3());
zadPole(df_vvod, polTokDF());
zadPole(ds4_vvod, polTokDS4());
zadPole(a_vvod, polTokA());
zadPole(b_vvod, polTokB());
zadPole(c_vvod, polTokC());
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
zadDlZv(zv2, polTokAB(), 1);
zadDlZv(zv3B, polTokBC(), 1);
zadDlZv(zv3D, polTokCD() - polTokBC(), 1);
zadDlZv(zv4, polTokDF(), 1);
//Задать ограничения размеров при открытии страницы.
zadOgrOA();
zadOgrAB();
zadOgrBC();
zadOgrCD();
zadOgrDF();
zadOgrA();
zadOgrB();
zadOgrC();


//Задать обработчики событий для полей ввода.
fi_vvod.addEventListener("input", function () {
    const t = polTekVr();
    zadPerVHran(tokFi, fi_vvod.value);
    zadDlZv(tr5, polSFY(t) - polKr5() + 90, 4);
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
    zadOgrBC();
    zadOgrCD();
    zadOgrDF();
    zadOgrA();
    zadOgrB();
    zadOgrC();
});
ab_vvod.addEventListener("input", function () {
    zadPerVHran(tokAB, ab_vvod.value);
    zadRazmIzobr();
    zadZv2Pol();
    zadZv3Pol();
    zadZv4Pol();
    zadZv5Pol();
    zadDlZv(zv2, ab_vvod.value, 1);
    zadOgrOA();
    zadOgrBC();
    zadOgrCD();
    zadOgrDF();
    zadOgrA();
    zadOgrB();
    zadOgrC();
});
as2_vvod.addEventListener("input", function () {
    zadPerVHran(tokAS2, as2_vvod.value);
    zadCM2Pol();
});
bc_vvod.addEventListener("input", function () {
    zadPerVHran(tokBC, bc_vvod.value);
    zadRazmIzobr();
    zadZv2Pol();
    zadZv3Pol();
    zadZv4Pol();
    zadZv5Pol();
    zadDlZv(zv3B, bc_vvod.value, 1);
    zadOgrOA();
    zadOgrAB();
    zadOgrCD();
    zadOgrDF();
    zadOgrA();
    zadOgrB();
    zadOgrC();
});
cd_vvod.addEventListener("input", function () {
    zadPerVHran(tokCD, cd_vvod.value);
    zadRazmIzobr();
    zadZv3Pol();
    zadZv4Pol();
    zadZv5Pol();
    zadDlZv(zv3D, cd_vvod.value, 1);
    zadOgrOA();
    zadOgrAB();
    zadOgrBC();
    zadOgrDF();
    zadOgrA();
    zadOgrB();
    zadOgrC();
});
cs3_vvod.addEventListener("input", function () {
    zadPerVHran(tokDS4, cs3_vvod.value);
    zadCM3Pol();
});
ds4_vvod.addEventListener("input", function () {
    zadPerVHran(tokDS4, ds4_vvod.value);
    zadCM4Pol();
});
df_vvod.addEventListener("input", function () {
    zadPerVHran(tokDF, df_vvod.value);
    zadRazmIzobr();
    zadZv4Pol();
    zadZv5Pol();
    zadDlZv(zv4, df_vvod.value, 1);
    zadOgrOA();
    zadOgrAB();
    zadOgrBC();
    zadOgrDF();
    zadOgrA();
    zadOgrB();
    zadOgrC();
});
a_vvod.addEventListener("input", function () {
    zadPerVHran(tokA, a_vvod.value);
    zadRazmIzobr();
    zadZv2Pol();
    zadZv3Pol();
    zadZv4Pol();
    zadZv5Pol();
    zadOgrOA();
    zadOgrAB();
    zadOgrBC();
    zadOgrDF();
    zadOgrB();
    zadOgrC();
});
b_vvod.addEventListener("input", function () {
    zadPerVHran(tokB, b_vvod.value);
    zadRazmIzobr();
    zadZv2Pol();
    zadZv3Pol();
    zadZv4Pol();
    zadZv5Pol();
    zadOgrOA();
    zadOgrAB();
    zadOgrBC();
    zadOgrDF();
    zadOgrA();
    zadOgrC();
});
c_vvod.addEventListener("input", function () {
    zadPerVHran(tokC, c_vvod.value);
    zadRazmIzobr();
    zadZv2Pol();
    zadZv3Pol();
    zadZv4Pol();
    zadZv5Pol();
    zadOgrOA();
    zadOgrAB();
    zadOgrBC();
    zadOgrDF();
    zadOgrA();
    zadOgrB();
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
    zadPerVHran(tokJSDv, jsdv_vvod.value);
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
