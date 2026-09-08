import {
    elFocusByPole, massFocus, momInFocus, poleFocusByEl, polFocus, polUgGrad,
    zadPole, zadPerVHran, polT, polUglSk
} from "../utils.js";
import {
    polFI1, polFI2, polFI3, polFI4, polLev5, polLevKr, polNizhKr, polPravKr, polSAX, polSAY, polSBX,
    polSBY, polSDX, polSS2X, polSS2Y, polSS3X, polSS3Y, polSS4X, polSS4Y, polVerhKr
} from "./analiz.js";
import {
    polTokOA,
    polTokAB,
    polTokBC,
    polTokBD,
    polTokFi,
    polTokX,
    polTokY,
    polTokK,
    polTokM1,
    polTokM2,
    polTokM3,
    polTokM4,
    polTokM5,
    polTokMMat,
    polTokJs1,
    polTokJs2,
    polTokJs3,
    polTokJs4,
    polTokJsDv,
    polTokN1,
    polTokNDv,
    polTokP5Obr,
    polTokP5Pr,
    polTokToch,
    tokOA,
    tokAB,
    tokBC,
    tokBD,
    tokFi,
    tokX,
    tokY,
    tokM1,
    tokM2,
    tokM3,
    tokM4,
    tokM5,
    tokMMat,
    tokJS1,
    tokJS2,
    tokJS3,
    tokJS4,
    tokJSDv,
    tokK,
    tokN1,
    tokNDv,
    tokP5Obr,
    tokP5Pr,
    tokToch,
    polTokNerav,
    tokNerav,
    polTokAS2,
    polTokBS3,
    polTokBS4,
    tokAS2,
    tokBS3,
    tokBS4,
} from "./local_storage.js";
import {zadRisRazm, zadDlZv} from "../meh-svg-utils.js";
import {zadOtrDlina, zadPerEl, zadPerVrEl, zadVrEl} from "../../../scripts/utils-svg-geom.js";
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
    ["bc_vvod", "BC, мм", 0],
    ["bs3_vvod", "BS<sub>3</sub>, мм", 0],
    ["bd_vvod", "BD, мм", 0],
    ["bs4_vvod", "BS<sub>4</sub>, мм", 0],
    ["x_vvod", "x, мм", 0],
    ["y_vvod", "y, мм", 0],
    ["fi_vvod", "φ<sub>1</sub>, град", 0],
    ["n1_vvod", "n<sub>1</sub>, об/мин", 0],
    ["ndv_vvod", "n<sub>дв</sub>, об/мин", 0],
    ["m1_vvod", "m<sub>1</sub>, кг", 0],
    ["m2_vvod", "m<sub>2</sub>, кг", 0],
    ["m3_vvod", "m<sub>3</sub>, кг", 0],
    ["m4_vvod", "m<sub>4</sub>, кг", 0],
    ["m5_vvod", "m<sub>5</sub>, кг", 0],
    ["mmat_vvod", "m<sub>мат</sub>, кг", 0],
    ["js1_vvod", "J<sub>S<sub>1</sub></sub>, кг×м<sup>2</sup>", 0],
    ["js2_vvod", "J<sub>S<sub>2</sub></sub>, кг×м<sup>2</sup>", 0],
    ["js3_vvod", "J<sub>S<sub>3</sub></sub>, кг×м<sup>2</sup>", 0],
    ["js4_vvod", "J<sub>S<sub>4</sub></sub>, кг×м<sup>2</sup>", 0],
    ["jsdv_vvod", "J<sub>S<sub>дв</sub></sub>, кг×м<sup>2</sup>", 0],
    ["ppr_vvod", "P<sub>пр</sub>, Н", 0],
    ["pobr_vvod", "P<sub>обр</sub>, Н", 0],
    ["kol_vvod", "Кол. пол.", 0],
    ["toch_vvod", "Точность", 0],
    ["nerav_vvod", "δ", 0]
]);
contentTag += pol0ris(mehanismPodv);
content.innerHTML = contentTag;
//Поля ввода.
const
    oa_vvod = elNaStr("oa_vvod"), ab_vvod = elNaStr("ab_vvod"), as2_vvod = elNaStr("as2_vvod"),
    bc_vvod = elNaStr("bc_vvod"), bs3_vvod = elNaStr("bs3_vvod"), bd_vvod = elNaStr("bd_vvod"),
    bs4_vvod = elNaStr("bs4_vvod"), x_vvod = elNaStr("x_vvod"), y_vvod = elNaStr("y_vvod"),
    fi_vvod = elNaStr("fi_vvod"), n1_vvod = elNaStr("n1_vvod"), ndv_vvod = elNaStr("ndv_vvod"),
    m1_vvod = elNaStr("m1_vvod"), m2_vvod = elNaStr("m2_vvod"), m3_vvod = elNaStr("m3_vvod"),
    m4_vvod = elNaStr("m4_vvod"), m5_vvod = elNaStr("m5_vvod"), mmat_vvod = elNaStr("mmat_vvod"),
    js1_vvod = elNaStr("js1_vvod"), js2_vvod = elNaStr("js2_vvod"), js3_vvod = elNaStr("js3_vvod"),
    js4_vvod = elNaStr("js4_vvod"), jsdv_vvod = elNaStr("jsdv_vvod"), ppr_vvod = elNaStr("ppr_vvod"),
    pobr_vvod = elNaStr("pobr_vvod"), kol_vvod = elNaStr("kol_vvod"), toch_vvod = elNaStr("toch_vvod"),
    nerav_vvod = elNaStr("nerav_vvod");
//Элементы механизма на рисунке.
const
    meh = elNaStr("meh_ris"), meh1 = elNaStr("meh_ris-1"), zv1 = elNaStr("zv1_ris"), zv2 = elNaStr("zv2_ris"),
    zv3 = elNaStr("zv3_ris"), zv4 = elNaStr("zv4_ris"), zv5 = elNaStr("zv5_ris"), polX = elNaStr("x_ris"),
    polY = elNaStr("y_ris"), shO = elNaStr("shO_ris"), shA = elNaStr("shA_ris"), shB = elNaStr("shB_ris"),
    shD = elNaStr("shD_ris"), s2 = elNaStr("s2_ris"), s3 = elNaStr("s3_ris"), s4 = elNaStr("s4_ris"),
    st3 = elNaStr("st3_ris"), st5 = elNaStr("st5_ris"), tr5 = elNaStr("tr5_ris");


//Получить текущее время.
function polTekVr() {
    return polT(fi_vvod.value, 0, polUglSk(n1_vvod.value));
}

//Задать размеры изображения.
function zadRazmIzobr() {
    const t = polTekVr();
    zadRisRazm(meh, meh1, 39 + polPravKr(true) - polLevKr(), 14 + polVerhKr() - polNizhKr(), 7 - polLevKr(), 7 + polVerhKr());
    zadPerEl(st3, x_vvod.value, y_vvod.value);
    zadPerEl(st5, polLev5() - 90, y_vvod.value);
    zadDlZv(tr5, polSDX(t) - polLev5() + 90, 4);
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
    zadPerVrEl(zv3, x_vvod.value, y_vvod.value, polUgGrad(polFI3(t)));
    zadPerEl(s3, polSS3X(t), polSS3Y(t));
}

function zadCM3Pol() {
    const t = polTekVr();
    zadPerEl(s3, polSS3X(t), polSS3Y(t));
}

function zadZv4Pol() {
    const t = polTekVr();
    zadPerVrEl(zv4, polSBX(t), polSBY(t), polUgGrad(polFI4(t)));
    zadPerEl(shD, polSDX(t), y_vvod.value);
    zadPerEl(s4, polSS4X(t), polSS4Y(t));
}

function zadCM4Pol() {
    const t = polTekVr();
    zadPerEl(s4, polSS4X(t), polSS4Y(t));
}

function zadZv5Pol() {
    const t = polTekVr();
    zadPerEl(zv5, polSDX(t), y_vvod.value);
}

//Задать ограничения полей ввода.
function zadOgrOA() {

}

function zadOgrAB() {

}

function zadOgrBC() {

}

function zadOgrBD() {

}

function zadOgrX() {

}

function zadOgrY() {

}


//Сфокусироваться на полях ввода при фокусе на элементах на изображении.
poleFocusByEl(zv1, oa_vvod);
poleFocusByEl(zv2, ab_vvod);
poleFocusByEl(zv3, bc_vvod);
poleFocusByEl(zv4, bd_vvod);
poleFocusByEl(polX, x_vvod);
poleFocusByEl(polY, y_vvod);
poleFocusByEl(shO, m1_vvod);
poleFocusByEl(s2, m2_vvod);
poleFocusByEl(s3, m3_vvod);
poleFocusByEl(s4, m4_vvod);
poleFocusByEl(shD, mmat_vvod);
poleFocusByEl(zv5, m5_vvod);
//Подсветить элементы на изображении при фокусе на полях ввода.
elFocusByPole(oa_vvod, zv1);
elFocusByPole(ab_vvod, zv2);
elFocusByPole(as2_vvod, shA);
elFocusByPole(as2_vvod, s2);
elFocusByPole(bc_vvod, zv3)
elFocusByPole(bs3_vvod, shB);
elFocusByPole(bs3_vvod, s3);
elFocusByPole(bd_vvod, zv4);
elFocusByPole(bs4_vvod, shB);
elFocusByPole(bs4_vvod, s4);
polFocus(x_vvod, polX);
polFocus(y_vvod, polY);
elFocusByPole(m1_vvod, shO);
massFocus(m2_vvod, s2);
massFocus(m3_vvod, s3);
massFocus(m4_vvod, s4);
elFocusByPole(mmat_vvod, shD);
elFocusByPole(m5_vvod, zv5);
momInFocus(js1_vvod, [zv1], shO);
momInFocus(js2_vvod, [zv2], s2);
momInFocus(js3_vvod, [zv3], s3);
momInFocus(js4_vvod, [zv4], s4);
//Задать значения полей ввода при открытии страницы.
zadPole(oa_vvod, polTokOA());
zadPole(ab_vvod, polTokAB());
zadPole(as2_vvod, polTokAS2());
zadPole(bc_vvod, polTokBC());
zadPole(bs3_vvod, polTokBS3());
zadPole(bd_vvod, polTokBD());
zadPole(bs4_vvod, polTokBS4());
zadPole(x_vvod, polTokX());
zadPole(y_vvod, polTokY());
zadPole(fi_vvod, polTokFi());
zadPole(n1_vvod, polTokN1());
zadPole(ndv_vvod, polTokNDv());
zadPole(m1_vvod, polTokM1());
zadPole(m2_vvod, polTokM2());
zadPole(m3_vvod, polTokM3());
zadPole(m4_vvod, polTokM4());
zadPole(m5_vvod, polTokM5());
zadPole(mmat_vvod, polTokMMat());
zadPole(js1_vvod, polTokJs1());
zadPole(js2_vvod, polTokJs2());
zadPole(js3_vvod, polTokJs3());
zadPole(js4_vvod, polTokJs4());
zadPole(jsdv_vvod, polTokJsDv());
zadPole(ppr_vvod, polTokP5Pr());
zadPole(pobr_vvod, polTokP5Obr());
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
zadPerEl(polX, 0, y_vvod.value);
zadOtrDlina(polX, Number(x_vvod.value));
zadPerVrEl(polY, 0, y_vvod.value, -90);
zadOtrDlina(polY, y_vvod.value);
//Задать длины звеньев при открытии страницы.
zadDlZv(zv1, polTokOA(), 1);
zadDlZv(zv2, polTokAB(), 1);
zadDlZv(zv3, polTokBC(), 1);
zadDlZv(zv4, polTokBD(), 1);
//Задать ограничения размеров при открытии страницы.
zadOgrOA();
zadOgrAB();
zadOgrBC();
zadOgrBD();
zadOgrX();
zadOgrY();


//Задать обработчики событий для полей ввода.
fi_vvod.addEventListener("input", function () {
    const t = polTekVr();
    zadPerVHran(tokFi, fi_vvod.value);
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
    zadZv4Pol();
    zadZv5Pol();
    zadDlZv(zv1, oa_vvod.value, 1);
    zadOgrAB();
    zadOgrBC();
    zadOgrBD();
    zadOgrX();
    zadOgrY();
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
    zadOgrBD();
    zadOgrX();
    zadOgrY();
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
    zadDlZv(zv3, bc_vvod.value, 1);
    zadOgrOA();
    zadOgrAB();
    zadOgrBD();
    zadOgrX();
    zadOgrY();
});
bs3_vvod.addEventListener("input", function () {
    zadPerVHran(tokBS3, bs3_vvod.value);
    zadCM3Pol();
});
bd_vvod.addEventListener("input", function () {
    zadPerVHran(tokBD, bd_vvod.value);
    zadRazmIzobr();
    zadZv4Pol();
    zadZv5Pol();
    zadDlZv(zv4, bd_vvod.value, 1);
    zadOgrOA();
    zadOgrAB();
    zadOgrBC();
    zadOgrX();
    zadOgrY();
});
bs4_vvod.addEventListener("input", function () {
    zadPerVHran(tokBS4, bs4_vvod.value);
    zadCM4Pol();
});
x_vvod.addEventListener("input", function () {
    zadPerVHran(tokX, x_vvod.value);
    zadRazmIzobr();
    zadZv2Pol();
    zadZv3Pol();
    zadZv4Pol();
    zadZv5Pol();
    zadPerEl(polX, 0, y_vvod.value);
    zadOtrDlina(polX, Number(x_vvod.value));
    zadOgrOA();
    zadOgrAB();
    zadOgrBC();
    zadOgrBD();
    zadOgrY();
});
y_vvod.addEventListener("input", function () {
    zadPerVHran(tokY, y_vvod.value);
    zadRazmIzobr();
    zadZv2Pol();
    zadZv3Pol();
    zadZv4Pol();
    zadZv5Pol();
    zadPerEl(polX, 0, y_vvod.value);
    zadPerVrEl(polY, 0, y_vvod.value, -90);
    zadOtrDlina(polY, y_vvod.value);
    zadOgrOA();
    zadOgrAB();
    zadOgrBC();
    zadOgrBD();
    zadOgrX();
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
mmat_vvod.addEventListener("input", function () {
    zadPerVHran(tokMMat, mmat_vvod.value);
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
ppr_vvod.addEventListener("input", function () {
    zadPerVHran(tokP5Pr, ppr_vvod.value);
});
pobr_vvod.addEventListener("input", function () {
    zadPerVHran(tokP5Obr, pobr_vvod.value);
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
