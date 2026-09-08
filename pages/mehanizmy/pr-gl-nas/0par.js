import {
    elFocusByPole, massFocus, momInFocus, poleFocusByEl, polFocus,
    polUgGrad, zadPole, zadPerVHran, polT, polUglSk, Pi
} from "../utils.js";
import {
    polFI1,
    polFI2,
    polFI3,
    polFI4,
    polFI5,
    polLevKr,
    polNizhKr,
    polPravKr,
    polSAX,
    polSAY,
    polSBX,
    polSBY, polSDX, polSDY,
    polSEX,
    polSEY,
    polSFX,
    polSFY,
    polSS2X,
    polSS2Y,
    polSS3X,
    polSS3Y,
    polSS4X,
    polSS4Y,
    polSS5X,
    polSS5Y,
    polVerhKr
} from "./analiz.js";
import {
    polTokOA, polTokAB, polTokBC, polTokBD, polTokFi, polTokX, polTokY, polTokK, polTokM1, polTokM2,
    polTokM3, polTokM4, polTokM5, polTokJs1, polTokJs2, polTokJs3, polTokJs4, polTokJsDv, polTokN1,
    polTokNDv, polTokToch, tokOA, tokAB, tokBC, tokBD, tokFi, tokX, tokY, tokM1, tokM2, tokM3, tokM4,
    tokM5, tokJS1, tokJS2, tokJS3, tokJS4, tokJSDv, tokK, tokN1, tokNDv, tokToch, polTokNerav, tokNerav,
    polTokAS2, polTokCS3, polTokBS4, tokAS2, tokCS3, tokBS4, polTokBE, polTokEF, polTokEK, polTokKS5,
    polTokX1, polTokY1, polTokJs5, tokBE, tokEF, tokEK, tokKS5, tokX1, tokY1, tokJS5, polTokMSht,
    polTokMPr, polTokMZh, tokMSht, tokMPr, tokMZh,
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
    ["cs3_vvod", "CS<sub>3</sub>, мм", 0],
    ["bd_vvod", "BD, мм", 0],
    ["be_vvod", "BE, мм", 0],
    ["bs4_vvod", "BS<sub>4</sub>, мм", 0],
    ["ef_vvod", "EF, мм", 0],
    ["ek_vvod", "EK, мм", 0],
    ["ks5_vvod", "KS<sub>5</sub>, мм", 0],
    ["x_vvod", "x, мм", 0],
    ["y_vvod", "y, мм", 0],
    ["x1_vvod", "x<sub>1</sub>, мм", 0],
    ["y1_vvod", "y<sub>1</sub>, мм", 0],
    ["fi_vvod", "φ<sub>1</sub>, град", 0],
    ["n1_vvod", "n<sub>1</sub>, об/мин", 0],
    ["ndv_vvod", "n<sub>дв</sub>, об/мин", 0],
    ["m1_vvod", "m<sub>1</sub>, кг", 0],
    ["m2_vvod", "m<sub>2</sub>, кг", 0],
    ["m3_vvod", "m<sub>3</sub>, кг", 0],
    ["m4_vvod", "m<sub>4</sub>, кг", 0],
    ["m5_vvod", "m<sub>5</sub>, кг", 0],
    ["msh_vvod", "m<sub>шт</sub>, кг", 0],
    ["mpr_vvod", "m<sub>пр</sub>, кг", 0],
    ["mzh_vvod", "m<sub>жид</sub>, кг", 0],
    ["js1_vvod", "J<sub>S<sub>1</sub></sub>, кг×м<sup>2</sup>", 0],
    ["js2_vvod", "J<sub>S<sub>2</sub></sub>, кг×м<sup>2</sup>", 0],
    ["js3_vvod", "J<sub>S<sub>3</sub></sub>, кг×м<sup>2</sup>", 0],
    ["js4_vvod", "J<sub>S<sub>4</sub></sub>, кг×м<sup>2</sup>", 0],
    ["js5_vvod", "J<sub>S<sub>5</sub></sub>, кг×м<sup>2</sup>", 0],
    ["jsdv_vvod", "J<sub>S<sub>дв</sub></sub>, кг×м<sup>2</sup>", 0],
    ["kol_vvod", "Кол. пол.", 0],
    ["toch_vvod", "Точность", 0],
    ["nerav_vvod", "δ", 0]
]);
contentTag += pol0ris(mehanismPodv);
content.innerHTML = contentTag;
//Поля ввода.
const
    oa_vvod = elNaStr("oa_vvod"), ab_vvod = elNaStr("ab_vvod"), as2_vvod = elNaStr("as2_vvod"),
    bc_vvod = elNaStr("bc_vvod"), cs3_vvod = elNaStr("cs3_vvod"), bd_vvod = elNaStr("bd_vvod"),
    be_vvod = elNaStr("be_vvod"), bs4_vvod = elNaStr("bs4_vvod"), ef_vvod = elNaStr("ef_vvod"),
    ek_vvod = elNaStr("ek_vvod"), ks5_vvod = elNaStr("ks5_vvod"), x_vvod = elNaStr("x_vvod"),
    y_vvod = elNaStr("y_vvod"), x1_vvod = elNaStr("x1_vvod"), y1_vvod = elNaStr("y1_vvod"),
    fi_vvod = elNaStr("fi_vvod"), n1_vvod = elNaStr("n1_vvod"), ndv_vvod = elNaStr("ndv_vvod"),
    m1_vvod = elNaStr("m1_vvod"), m2_vvod = elNaStr("m2_vvod"), m3_vvod = elNaStr("m3_vvod"),
    m4_vvod = elNaStr("m4_vvod"), m5_vvod = elNaStr("m5_vvod"), msh_vvod = elNaStr("msh_vvod"),
    mpr_vvod = elNaStr("mpr_vvod"), mzh_vvod = elNaStr("mzh_vvod"), js1_vvod = elNaStr("js1_vvod"),
    js2_vvod = elNaStr("js2_vvod"), js3_vvod = elNaStr("js3_vvod"), js4_vvod = elNaStr("js4_vvod"),
    js5_vvod = elNaStr("js5_vvod"), jsdv_vvod = elNaStr("jsdv_vvod"), kol_vvod = elNaStr("kol_vvod"),
    toch_vvod = elNaStr("toch_vvod"), nerav_vvod = elNaStr("nerav_vvod");
//Элементы механизма на рисунке.
const
    meh = elNaStr("meh_ris"), meh1 = elNaStr("meh_ris-1"), zv1 = elNaStr("zv1_ris"), zv2 = elNaStr("zv2_ris"),
    zv3 = elNaStr("zv3_ris"), zv4D = elNaStr("zv4D_ris"), zv4E = elNaStr("zv4E_ris"), zv4F = elNaStr("zv4F_ris"),
    zv5 = elNaStr("zv5_ris"), polX = elNaStr("x_ris"), polY = elNaStr("y_ris"), polX1 = elNaStr("x1_ris"),
    polY1 = elNaStr("y1_ris"), shO = elNaStr("shO_ris"), shA = elNaStr("shA_ris"), shB = elNaStr("shB_ris"),
    shC = elNaStr("shC_ris"), shD = elNaStr("shD_ris"), shE = elNaStr("shE_ris"), shF = elNaStr("shF_ris"),
    shK = elNaStr("shK_ris"), s2 = elNaStr("s2_ris"), s3 = elNaStr("s3_ris"), s4 = elNaStr("s4_ris"),
    s5 = elNaStr("s5_ris"), st3 = elNaStr("st3_ris"), st5 = elNaStr("st5_ris");


//Получить текущее время.
function polTekVr() {
    return polT(fi_vvod.value, 0, polUglSk(n1_vvod.value));
}

//Задать размеры изображения.
function zadRazmIzobr() {
    zadRisRazm(meh, meh1, 39 + polPravKr() - polLevKr(), 14 + (polVerhKr() - polNizhKr()), 7 - polLevKr(), 7 + polVerhKr());
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
    zadPerVrEl(zv3, -x_vvod.value, y_vvod.value, polUgGrad(polFI3(t)));
    zadPerEl(s3, polSS3X(t), polSS3Y(t));
}

function zadCM3Pol() {
    const t = polTekVr();
    zadPerEl(s3, polSS3X(t), polSS3Y(t));
}

function zadZv4Pol() {
    const t = polTekVr();
    zadPerVrEl(zv4D, polSBX(t), polSBY(t), polUgGrad(polFI4(t) + Pi));
    zadPerVrEl(zv4E, polSEX(t), polSEY(t), polUgGrad(polFI4(t) + Pi));
    zadPerVrEl(zv4F, polSEX(t), polSEY(t), polUgGrad(polFI4(t)));
    zadPerEl(shD, polSDX(t), polSDY(t));
    zadPerEl(shE, polSEX(t), polSEY(t));
    zadPerEl(shF, polSFX(t), polSFY(t));
    zadPerEl(s4, polSS4X(t), polSS4Y(t));
}

function zadCM4Pol() {
    const t = polTekVr();
    zadPerEl(s4, polSS4X(t), polSS4Y(t));
}

function zadZv5Pol() {
    const t = polTekVr();
    zadPerVrEl(zv5, x1_vvod.value, -y1_vvod.value, polUgGrad(polFI5(t)));
    zadPerEl(s5, polSS5X(t), polSS5Y(t));
}

function zadCM5Pol() {
    const t = polTekVr();
    zadPerEl(s5, polSS5X(t), polSS5Y(t));
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

function zadOgrBE() {

}

function zadOgrEF() {

}

function zadOgrEK() {

}

function zadOgrX() {

}

function zadOgrY() {

}

function zadOgrX1() {

}

function zadOgrY2() {

}


//Сфокусироваться на полях ввода при фокусе на элементах на изображении.
poleFocusByEl(zv1, oa_vvod);
poleFocusByEl(zv2, ab_vvod);
poleFocusByEl(zv3, bc_vvod);
poleFocusByEl(zv4D, bd_vvod);
poleFocusByEl(zv4E, be_vvod);
poleFocusByEl(zv4F, ef_vvod);
poleFocusByEl(polX, x_vvod);
poleFocusByEl(polY, y_vvod);
poleFocusByEl(polX1, x1_vvod);
poleFocusByEl(polY1, y1_vvod);
poleFocusByEl(shO, m1_vvod);
poleFocusByEl(s2, m2_vvod);
poleFocusByEl(s3, m3_vvod);
poleFocusByEl(s4, m4_vvod);
poleFocusByEl(s5, m5_vvod);
//Подсветить элементы на изображении при фокусе на полях ввода.
elFocusByPole(oa_vvod, zv1);
elFocusByPole(ab_vvod, zv2);
elFocusByPole(as2_vvod, shA);
elFocusByPole(as2_vvod, s2);
elFocusByPole(bc_vvod, zv3)
elFocusByPole(cs3_vvod, shC);
elFocusByPole(cs3_vvod, s3);
elFocusByPole(bd_vvod, zv4D);
elFocusByPole(be_vvod, zv4E);
elFocusByPole(bs4_vvod, shB);
elFocusByPole(bs4_vvod, s4);
elFocusByPole(ef_vvod, zv4F);
elFocusByPole(ek_vvod, zv5);
elFocusByPole(ks5_vvod, shK);
elFocusByPole(ks5_vvod, s5);
polFocus(x_vvod, polX);
polFocus(y_vvod, polY);
polFocus(x1_vvod, polX1);
polFocus(y1_vvod, polY1);
elFocusByPole(m1_vvod, shO);
massFocus(m2_vvod, s2);
massFocus(m3_vvod, s3);
massFocus(m4_vvod, s4);
massFocus(m5_vvod, s5);
momInFocus(js1_vvod, [zv1], shO);
momInFocus(js2_vvod, [zv2], s2);
momInFocus(js3_vvod, [zv3], s3);
momInFocus(js4_vvod, [zv4D, zv4E, zv4F], s4);
momInFocus(js5_vvod, [zv5], s5);
//Задать значения полей ввода при открытии страницы.
zadPole(oa_vvod, polTokOA());
zadPole(ab_vvod, polTokAB());
zadPole(as2_vvod, polTokAS2());
zadPole(bc_vvod, polTokBC());
zadPole(cs3_vvod, polTokCS3());
zadPole(bd_vvod, polTokBD());
zadPole(be_vvod, polTokBE());
zadPole(bs4_vvod, polTokBS4());
zadPole(ef_vvod, polTokEF());
zadPole(ek_vvod, polTokEK());
zadPole(ks5_vvod, polTokKS5());
zadPole(x_vvod, polTokX());
zadPole(y_vvod, polTokY());
zadPole(x1_vvod, polTokX1());
zadPole(y1_vvod, polTokY1());
zadPole(fi_vvod, polTokFi());
zadPole(n1_vvod, polTokN1());
zadPole(ndv_vvod, polTokNDv());
zadPole(m1_vvod, polTokM1());
zadPole(m2_vvod, polTokM2());
zadPole(m3_vvod, polTokM3());
zadPole(m4_vvod, polTokM4());
zadPole(m5_vvod, polTokM5());
zadPole(msh_vvod, polTokMSht());
zadPole(mpr_vvod, polTokMPr());
zadPole(mzh_vvod, polTokMZh());
zadPole(js1_vvod, polTokJs1());
zadPole(js2_vvod, polTokJs2());
zadPole(js3_vvod, polTokJs3());
zadPole(js4_vvod, polTokJs4());
zadPole(js5_vvod, polTokJs5());
zadPole(jsdv_vvod, polTokJsDv());
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
zadPerEl(st3, -x_vvod.value, y_vvod.value);
zadPerEl(st5, x1_vvod.value, -y1_vvod.value);
zadPerVrEl(polX, 0, y_vvod.value, 180);
zadOtrDlina(polX, Number(x_vvod.value));
zadPerVrEl(polY, 0, y_vvod.value, -90);
zadOtrDlina(polY, y_vvod.value);
zadPerEl(polX1, 0, -y1_vvod.value);
zadOtrDlina(polX1, Number(x1_vvod.value));
zadPerVrEl(polY1, 0, -y1_vvod.value, 90);
zadOtrDlina(polY1, y1_vvod.value);
//Задать длины звеньев при открытии страницы.
zadDlZv(zv1, polTokOA(), 1);
zadDlZv(zv2, polTokAB(), 1);
zadDlZv(zv3, polTokBC(), 1);
zadDlZv(zv4D, polTokBD(), 1);
zadDlZv(zv4E, polTokBE(), 1);
zadDlZv(zv4F, polTokEF(), 4);
zadDlZv(zv5, polTokEK(), 1);
//Задать ограничения размеров при открытии страницы.
zadOgrOA();
zadOgrAB();
zadOgrBC();
zadOgrBD();
zadOgrBE();
zadOgrEF();
zadOgrEK();
zadOgrX();
zadOgrY();
zadOgrX1();
zadOgrY2();


//Задать обработчики событий для полей ввода.
fi_vvod.addEventListener("input", function () {
    zadPerVHran(tokFi, fi_vvod.value);
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
    zadOgrOA();
    zadOgrAB();
    zadOgrBC();
    zadOgrBD();
    zadOgrBE();
    zadOgrEF();
    zadOgrEK();
    zadOgrX();
    zadOgrY();
    zadOgrX1();
    zadOgrY2();
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
    zadOgrAB();
    zadOgrBC();
    zadOgrBD();
    zadOgrBE();
    zadOgrEF();
    zadOgrEK();
    zadOgrX();
    zadOgrY();
    zadOgrX1();
    zadOgrY2();
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
    zadOgrBC();
    zadOgrBD();
    zadOgrBE();
    zadOgrEF();
    zadOgrEK();
    zadOgrX();
    zadOgrY();
    zadOgrX1();
    zadOgrY2();
});
cs3_vvod.addEventListener("input", function () {
    zadPerVHran(tokCS3, cs3_vvod.value);
    zadCM3Pol();
});
bd_vvod.addEventListener("input", function () {
    zadPerVHran(tokBD, bd_vvod.value);
    zadRazmIzobr();
    zadDlZv(zv4D, bd_vvod.value, 1);
});
be_vvod.addEventListener("input", function () {
    zadPerVHran(tokBE, be_vvod.value);
    zadRazmIzobr();
    zadZv4Pol();
    zadZv5Pol();
    zadDlZv(zv4E, be_vvod.value, 1);
    zadOgrOA();
    zadOgrAB();
    zadOgrBC();
    zadOgrBD();
    zadOgrBE();
    zadOgrEF();
    zadOgrEK();
    zadOgrX();
    zadOgrY();
    zadOgrX1();
    zadOgrY2();
});
bs4_vvod.addEventListener("input", function () {
    zadPerVHran(tokBS4, bs4_vvod.value);
    zadCM4Pol();
});
ef_vvod.addEventListener("input", function () {
    zadPerVHran(tokEF, ef_vvod.value);
    zadRazmIzobr();
    zadDlZv(zv4F, ef_vvod.value, 4);
});
ek_vvod.addEventListener("input", function () {
    zadPerVHran(tokEK, ek_vvod.value);
    zadRazmIzobr();
    zadZv4Pol();
    zadZv5Pol();
    zadDlZv(zv5, ek_vvod.value, 1);
    zadOgrOA();
    zadOgrAB();
    zadOgrBC();
    zadOgrBD();
    zadOgrBE();
    zadOgrEF();
    zadOgrEK();
    zadOgrX();
    zadOgrY();
    zadOgrX1();
    zadOgrY2();
});
ks5_vvod.addEventListener("input", function () {
    zadPerVHran(tokKS5, ks5_vvod.value);
    zadCM5Pol();
});
x_vvod.addEventListener("input", function () {
    zadPerVHran(tokX, x_vvod.value);
    zadRazmIzobr();
    zadZv2Pol();
    zadZv3Pol();
    zadZv4Pol();
    zadZv5Pol();
    zadPerEl(st3, -x_vvod.value, y_vvod.value);
    zadOtrDlina(polX, Number(x_vvod.value));
    zadOgrOA();
    zadOgrAB();
    zadOgrBC();
    zadOgrBD();
    zadOgrBE();
    zadOgrEF();
    zadOgrEK();
    zadOgrX();
    zadOgrY();
    zadOgrX1();
    zadOgrY2();
});
y_vvod.addEventListener("input", function () {
    zadPerVHran(tokY, y_vvod.value);
    zadRazmIzobr();
    zadZv2Pol();
    zadZv3Pol();
    zadZv4Pol();
    zadZv5Pol();
    zadPerEl(st3, -x_vvod.value, y_vvod.value);
    zadPerVrEl(polX, 0, y_vvod.value, 180);
    zadPerVrEl(polY, 0, y_vvod.value, -90);
    zadOtrDlina(polY, y_vvod.value);
    zadOgrOA();
    zadOgrAB();
    zadOgrBC();
    zadOgrBD();
    zadOgrBE();
    zadOgrEF();
    zadOgrEK();
    zadOgrX();
    zadOgrY();
    zadOgrX1();
    zadOgrY2();
});
x1_vvod.addEventListener("input", function () {
    zadPerVHran(tokX1, x1_vvod.value);
    zadRazmIzobr();
    zadZv2Pol();
    zadZv3Pol();
    zadZv4Pol();
    zadZv5Pol();
    zadPerEl(st5, x1_vvod.value, -y1_vvod.value);
    zadOtrDlina(polX1, Number(x1_vvod.value));
    zadOgrOA();
    zadOgrAB();
    zadOgrBC();
    zadOgrBD();
    zadOgrBE();
    zadOgrEF();
    zadOgrEK();
    zadOgrX();
    zadOgrY();
    zadOgrX1();
    zadOgrY2();
});
y1_vvod.addEventListener("input", function () {
    zadPerVHran(tokY1, y1_vvod.value);
    zadRazmIzobr();
    zadZv2Pol();
    zadZv3Pol();
    zadZv4Pol();
    zadZv5Pol();
    zadPerEl(st5, x1_vvod.value, -y1_vvod.value);
    zadPerEl(polX1, 0, -y1_vvod.value);
    zadPerVrEl(polY1, 0, -y1_vvod.value, 90);
    zadOtrDlina(polY1, y1_vvod.value);
    zadOgrOA();
    zadOgrAB();
    zadOgrBC();
    zadOgrBD();
    zadOgrBE();
    zadOgrEF();
    zadOgrEK();
    zadOgrX();
    zadOgrY();
    zadOgrX1();
    zadOgrY2();
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
msh_vvod.addEventListener("input", function () {
    zadPerVHran(tokMSht, msh_vvod.value);
});
mpr_vvod.addEventListener("input", function () {
    zadPerVHran(tokMPr, mpr_vvod.value);
});
mzh_vvod.addEventListener("input", function () {
    zadPerVHran(tokMZh, mzh_vvod.value);
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
js5_vvod.addEventListener("input", function () {
    zadPerVHran(tokJS5, js5_vvod.value);
});
jsdv_vvod.addEventListener("input", function () {
    zadPerVHran(tokJSDv, jsdv_vvod.value);
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
