import {pol0, pol0par, pol0ris} from "../pol-tag-0par.js";
import {mehanismPodv, zadanie} from "./ris.js";
import {
    elFocusByPole, momInFocus, poleFocusByEl, polT, polUgGrad, polUglSk, zadPerVHran, zadPole
} from "../utils.js";
import {zadRisRazm, zadDlZv} from "../meh-svg-utils.js";
import {
    polABdl, polDl5L1, polDl5L2, polFI1, polFI2, polFI3, polFI4, polKrD, polLevKr, polNizhKr, polPravKr, polSAX,
    polSAY, polSCX, polSCY, polSDX, polSS3X, polSS3Y, polSS4X, polSS4Y, polSS5X, polVerhKr
} from "./analiz.js";
import {zadPerEl, zadPerVrEl, zadVrEl} from "../../../scripts/utils-svg-geom.js";
import {
    polTokH1,
    polTokH2,
    polTokBC,
    polTokCS4,
    polTokJs3,
    polTokOB,
    polTokL1,
    polTokL2,
    polTokCD,
    polTokFi,
    polTokJs1,
    polTokJs2,
    polTokJs4,
    polTokJsDv,
    polTokK,
    polTokM1,
    polTokM2,
    polTokM3,
    polTokM4,
    polTokM5,
    polTokN1,
    polTokNDv,
    polTokNerav,
    polTokOA,
    polTokP5Max,
    polTokToch,
    tokCD,
    tokCS4,
    tokFi,
    tokJS1,
    tokJS2,
    tokJS4,
    tokJsDv,
    tokK,
    tokM1,
    tokM2,
    tokM3,
    tokM4,
    tokM5,
    tokN1,
    tokNDv,
    tokNerav,
    tokOA,
    tokP5Max,
    tokToch,
    tokOB,
    tokBC,
    tokL1,
    tokJS3,
    polTokBS3, polTokDS5, tokBS3, tokL2, tokH1, tokH2, tokDS5
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
    ["bs3_vvod", "BS<sub>3</sub>, мм", 0],
    ["cd_vvod", "CD, мм", 0],
    ["cs4_vvod", "CS<sub>4</sub>, мм", 0],
    ["ds5_vvod", "DS<sub>5</sub>, мм", 0],
    ["l1_vvod", "L<sub>1</sub>, мм", 0],
    ["l2_vvod", "L<sub>2</sub>, мм", 0],
    ["h1_vvod", "H<sub>1</sub>, мм", 0],
    ["h2_vvod", "H<sub>2</sub>, мм", 0],
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
    bs3_vvod = elNaStr("bs3_vvod"), cd_vvod = elNaStr("cd_vvod"), cs4_vvod = elNaStr("cs4_vvod"),
    ds5_vvod = elNaStr("ds5_vvod"), l1_vvod = elNaStr("l1_vvod"), l2_vvod = elNaStr("l2_vvod"),
    h1_vvod = elNaStr("h1_vvod"), h2_vvod = elNaStr("h2_vvod"), fi_vvod = elNaStr("fi_vvod"),
    n1_vvod = elNaStr("n1_vvod"), ndv_vvod = elNaStr("ndv_vvod"), m1_vvod = elNaStr("m1_vvod"),
    m2_vvod = elNaStr("m2_vvod"), m3_vvod = elNaStr("m3_vvod"), m4_vvod = elNaStr("m4_vvod"),
    m5_vvod = elNaStr("m5_vvod"), js1_vvod = elNaStr("js1_vvod"), js2_vvod = elNaStr("js2_vvod"),
    js3_vvod = elNaStr("js3_vvod"), js4_vvod = elNaStr("js4_vvod"), jsdv_vvod = elNaStr("jsdv_vvod"),
    p5_vvod = elNaStr("p5_vvod"), kol_vvod = elNaStr("kol_vvod"), toch_vvod = elNaStr("toch_vvod"),
    nerav_vvod = elNaStr("nerav_vvod");
//Элементы механизма на рисунке.
const
    meh = elNaStr("meh_ris"), meh1 = elNaStr("meh_ris-1"), zv1 = elNaStr("zv1_ris"), zv2 = elNaStr("zv2_ris"),
    zv3B = elNaStr("zv3B_ris"), zv3A = elNaStr("zv3A_ris"), zv4 = elNaStr("zv4_ris"), zv5L1 = elNaStr("zv5L1_ris"),
    zv5L2 = elNaStr("zv5L2_ris"), zv5H = elNaStr("zv5H_ris"), shO = elNaStr("shO_ris"),
    shA = elNaStr("shA_ris"), shB = elNaStr("shB_ris"), shC = elNaStr("shC_ris"), shD = elNaStr("shD_ris"),
    s3 = elNaStr("s3_ris"), s4 = elNaStr("s4_ris"), s5 = elNaStr("s5_ris"), st3 = elNaStr("st3_ris"),
    st5l1 = elNaStr("st5l1_ris"), st5l2 = elNaStr("st5l2_ris"), ob = elNaStr("ob_ris"), tr5 = elNaStr("tr5_ris");


//Получить текущее время.
function polTekVr() {
    return polT(fi_vvod.value, 0, polUglSk(n1_vvod.value));
}

//Задать размеры изображения.
function zadRazmIzobr() {
    zadRisRazm(meh, meh1, polPravKr() - polLevKr(), polVerhKr() - polNizhKr(), -polLevKr(), polVerhKr());
    zadPerEl(st3, 0, -ob_vvod.value);
    zadPerVrEl(st5l1, -polTokL1(), polTokH2(), 180);
    zadPerEl(st5l2, polTokL2(), polTokH2());
    zadPerVrEl(ob, 0, -ob_vvod.value, 90);
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
    zadPerVrEl(zv3B, 0, -polTokOB(), polUgGrad(polFI3(t)));
    zadPerVrEl(zv3A, polSAX(t), polSAY(t), polUgGrad(polFI3(t)));
    zadPerEl(shC, polSCX(t), polSCY(t));
    zadPerEl(s3, polSS3X(t), polSS3Y(t));
}

function zadCM3Pol() {
    const t = polTekVr();
    zadPerEl(s3, polSS3X(t), polSS3Y(t));
}

function zadZv4Pol() {
    const t = polTekVr();
    zadPerVrEl(zv4, polSCX(t), polSCY(t), polUgGrad(polFI4(t)));
    zadPerEl(shD, polSDX(t), polTokH2());
    zadPerEl(s4, polSS4X(t), polSS4Y(t));
}

function zadCM4Pol() {
    const t = polTekVr();
    zadPerEl(s4, polSS4X(t), polSS4Y(t));
}

function zadZv5Pol() {
    const t = polTekVr();
    zadPerVrEl(zv5L1, polSDX(t), polTokH2(), 180);
    zadPerEl(zv5L2, polSDX(t), polTokH2());
    zadPerVrEl(zv5H, polSDX(t) + polTokL2() - polKrD(true), polTokH2(), 270);
    zadPerEl(s5, polSS5X(t), polTokH2());
}

function zadCM5Pol() {
    const t = polTekVr();
    zadPerEl(s5, polSS5X(t), polTokH2());
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
poleFocusByEl(zv3B, bc_vvod);
poleFocusByEl(zv3A, bc_vvod);
poleFocusByEl(zv4, cd_vvod);
poleFocusByEl(zv5H, h1_vvod);
poleFocusByEl(zv5L1, h2_vvod);
poleFocusByEl(zv5L2, h2_vvod);
poleFocusByEl(tr5, h2_vvod);
poleFocusByEl(shO, m1_vvod);
poleFocusByEl(zv2, m2_vvod);
poleFocusByEl(s3, m3_vvod);
poleFocusByEl(s4, m4_vvod);
poleFocusByEl(s5, m5_vvod);
//Подсветить элементы на изображении при фокусе на полях ввода.
elFocusByPole(oa_vvod, zv1);
elFocusByPole(ob_vvod, ob);
elFocusByPole(bc_vvod, zv3B);
elFocusByPole(bc_vvod, zv3A);
elFocusByPole(bs3_vvod, shB);
elFocusByPole(bs3_vvod, s3);
elFocusByPole(cd_vvod, zv4);
elFocusByPole(cs4_vvod, shC);
elFocusByPole(cs4_vvod, s4);
elFocusByPole(ds5_vvod, shD);
elFocusByPole(ds5_vvod, s5);
elFocusByPole(l1_vvod, st5l1);
elFocusByPole(l2_vvod, st5l2);
elFocusByPole(h1_vvod, zv5H);
elFocusByPole(h2_vvod, st5l1);
elFocusByPole(h2_vvod, st5l2);
elFocusByPole(h2_vvod, tr5);
elFocusByPole(m1_vvod, shO);
elFocusByPole(m2_vvod, shA);
elFocusByPole(m3_vvod, s3);
elFocusByPole(m4_vvod, s4);
elFocusByPole(m5_vvod, s5);
momInFocus(js1_vvod, [zv1], shO);
momInFocus(js2_vvod, [zv2], shA);
momInFocus(js3_vvod, [zv3B, zv3A], s3);
momInFocus(js4_vvod, [zv4], s4);
//Задать значения полей ввода при открытии страницы.
zadPole(oa_vvod, polTokOA());
zadPole(ob_vvod, polTokOB());
zadPole(bc_vvod, polTokBC());
zadPole(bs3_vvod, polTokBS3());
zadPole(cd_vvod, polTokCD());
zadPole(cs4_vvod, polTokCS4());
zadPole(ds5_vvod, polTokDS5());
zadPole(l1_vvod, polTokL1());
zadPole(l2_vvod, polTokL2());
zadPole(h1_vvod, polTokH1());
zadPole(h2_vvod, polTokH2());
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
zadDlZv(zv3B, polABdl(polTekVr()), 4);
zadDlZv(zv3A, polTokBC() - polABdl(polTekVr()), 1);
zadDlZv(zv4, polTokCD(), 1);
zadDlZv(zv5L1, polDl5L1(), 2);
zadDlZv(zv5L2, polDl5L2(), 2);
zadDlZv(zv5H, polTokH1(), 2);
zadDlZv(ob, polTokOB(), 1);
zadDlZv(tr5, polTokH2(), 2);
//Задать ограничения размеров при открытии страницы.
zadOgrOA();
zadOgrOB();
zadOgrBC();
zadOgrCD();


//Задать обработчики событий для полей ввода.
fi_vvod.addEventListener("input", function () {
    const t = polTekVr();
    zadPerVHran(tokFi, fi_vvod.value);
    zadZv1Pol();
    zadZv2Pol();
    zadZv3Pol();
    zadZv4Pol();
    zadZv5Pol();
    zadDlZv(zv3B, polABdl(t), 4);
    zadDlZv(zv3A, polTokBC() - polABdl(t), 1);
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
    zadDlZv(zv3B, polABdl(t), 4);
    zadDlZv(zv3A, polTokBC() - polABdl(t), 1);
    zadDlZv(zv5L1, polDl5L1(), 3);
    zadDlZv(zv5L2, polDl5L2(), 3);
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
    zadDlZv(zv3B, polABdl(t), 4);
    zadDlZv(zv3A, polTokBC() - polABdl(t), 1);
    zadDlZv(zv5L1, polDl5L1(), 3);
    zadDlZv(zv5L2, polDl5L2(), 3);
});
bc_vvod.addEventListener("input", function () {
    const t = polTekVr();
    zadPerVHran(tokBC, bc_vvod.value);
    zadRazmIzobr();
    zadZv3Pol();
    zadZv4Pol();
    zadZv5Pol();
    zadDlZv(zv3A, polTokBC() - polABdl(t), 1);
    zadDlZv(zv5L1, polDl5L1(), 3);
    zadDlZv(zv5L2, polDl5L2(), 3);
});
bs3_vvod.addEventListener("input", function () {
    zadPerVHran(tokBS3, bs3_vvod.value);
    zadCM3Pol();
});
cd_vvod.addEventListener("input", function () {
    zadPerVHran(tokCD, cd_vvod.value);
    zadRazmIzobr();
    zadZv4Pol();
    zadZv5Pol();
    zadDlZv(zv4, cd_vvod.value, 1);
    zadDlZv(tr5, polTokH2(), 2);
    zadDlZv(zv5L1, polDl5L1(), 3);
    zadDlZv(zv5L2, polDl5L2(), 3);
});
cs4_vvod.addEventListener("input", function () {
    zadPerVHran(tokCS4, cs4_vvod.value);
    zadCM4Pol();
});
ds5_vvod.addEventListener("input", function () {
    zadPerVHran(tokDS5, ds5_vvod.value);
    zadCM5Pol();
});
l1_vvod.addEventListener("input", function () {
    zadPerVHran(tokL1, l1_vvod.value);
    zadRazmIzobr();
    zadDlZv(zv5L1, polDl5L1(), 3);
});
l2_vvod.addEventListener("input", function () {
    zadPerVHran(tokL2, l2_vvod.value);
    zadRazmIzobr();
    zadDlZv(zv5L2, polDl5L2(), 3);
});
h1_vvod.addEventListener("input", function () {
    zadPerVHran(tokH1, h1_vvod.value);
    zadDlZv(zv5H, h1_vvod.value, 2);
});
h2_vvod.addEventListener("input", function () {
    zadPerVHran(tokH2, h2_vvod.value);
    zadRazmIzobr();
    zadZv4Pol();
    zadZv5Pol();
    zadDlZv(zv4, cd_vvod.value, 1);
    zadDlZv(tr5, polTokH2(), 2);
    zadDlZv(zv5L1, polDl5L1(), 3);
    zadDlZv(zv5L2, polDl5L2(), 3);
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
