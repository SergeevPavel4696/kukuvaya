import {aktInterPu, Pi, pol4Znach, zadMuSk, zadMuUsk, zadPerVHran, zadPlNaStr, zadPole} from "../utils.js";
import {
    polTekVr, polTokAB, polTokAS2, polTokBC, polTokCD, polTokCS3, polTokDF, polTokDS4, polTokK, polTokL012,
    polTokMuA, polTokMuDiA, polTokMuDiS, polTokMuDiV, polTokMuV, polTokN1, polTokNDv, polTokOA, polTokTakt,
    polTokToch, polTokW, polTokWDv, tokL012, tokMuA, tokMuDiA, tokMuDiS, tokMuDiV, tokMuV
} from "./local_storage.js";
import {
    polAA, polAAX, polAAY, polAB, polABA, polABAn, polABAt, polABCn, polABCt, polABX, polABY, polAD,
    polADX, polADY, polAF, polAFD, polAFDn, polAFDt, polAFY, polAS2, polAS2X, polAS2Y, polAS3, polAS3X,
    polAS3Y, polAS4, polAS4X, polAS4Y, polE2, polE3, polE4, polFI2, polFI3, polFI4, polSFY, polVA,
    polVAX, polVAY, polVB, polVBA, polVBX, polVBY, polVD, polVDX, polVDY, polVF, polVFD, polVFY,
    polVS2, polVS2X, polVS2Y, polVS3, polVS3X, polVS3Y, polVS4, polVS4X, polVS4Y, polW2, polW3, polW4
} from "./analiz.js";
import {postrKinDi} from "../meh-svg-utils.js";
import {elNaStr, elNaStrText} from "../../../scripts/utils.js";
import {
    pol2, pol2_1, pol2_2, pol2_3, pol2_4, pol2_5, pol2_6, polPostrSkTochkiZvena, polPostrSkKriv, polPostrSkParyVr,
    polPostrSkPolz, polPostrUskTochkiZvena, polPostrUskKriv, polPostrNormUsk, polPostrNormOtnUsk, polPostrAbsUsk,
    polPostrOtnUsk, polPostrUskParyPolz, polPostrUskParyVr, polPostrSkTochkiKrivKor, polPostrUskTochkiKrivKor
} from "../pol-tag-2kin.js";
import {planSk, planUsk} from "./ris.js";


const t = polTekVr();
const TAKT = polTokTakt();
const KOL = polTokK();
const TOCH = polTokToch();
const
    OA = polTokOA() / 1000, AB = polTokAB() / 1000, AS2 = polTokAS2() / 1000, BC = polTokBC() / 1000,
    CS3 = polTokCS3() / 1000, CD = polTokCD() / 1000, DS4 = polTokDS4() / 1000, DF = polTokDF() / 1000,
    FI2 = polFI2(t), FI3 = polFI3(t), FI4 = polFI4(t);
const n1 = polTokN1(), ndv = polTokNDv();
const
    skW1 = polTokW(), skW2 = polW2(t), skW3 = polW3(t), skW4 = polW4(t), skWDv = polTokWDv(), skA = polVA(t),
    skBA = polVBA(t), skB = polVB(t), skS2 = polVS2(t), skS3 = polVS3(t), skD = polVD(t), skFD = polVFD(t),
    skF = polVF(t), skS4 = polVS4(t), skAX = polVAX(t), skAY = polVAY(t), skS2X = polVS2X(t), skS2Y = polVS2Y(t),
    skBX = polVBX(t), skBY = polVBY(t), skS3X = polVS3X(t), skS3Y = polVS3Y(t), skDX = polVDX(t), skDY = polVDY(t),
    skS4X = polVS4X(t), skS4Y = polVS4Y(t), skFY = polVFY(t);
const
    uskE2 = polE2(t), uskE3 = polE3(t), uskE4 = polE4(t), uskA = polAA(t), uskBAn = polABAn(t), uskBCn = polABCn(t),
    uskBAt = polABAt(t), uskBCt = polABCt(t), uskBA = polABA(t), uskB = polAB(t), uskS2 = polAS2(t), uskS3 = polAS3(t),
    uskD = polAD(t), uskFDn = polAFDn(t), uskFDt = polAFDt(t), uskFD = polAFD(t), uskF = polAF(t), uskS4 = polAS4(t),
    uskAX = polAAX(t), uskAY = polAAY(t), uskS2X = polAS2X(t), uskS2Y = polAS2Y(t), uskBX = polABX(t),
    uskBY = polABY(t), uskS3X = polAS3X(t), uskS3Y = polAS3Y(t), uskDX = polADX(t), uskDY = polADY(t),
    uskS4X = polAS4X(t), uskS4Y = polAS4Y(t), uskFY = polAFY(t);


//Добавить разметку страницы.
const content = document.getElementById("content");
const contentTag =
    pol2(planSk, planUsk) +
    pol2_1([
        polPostrSkKriv("postr_VA", "A", 1),
        polPostrSkParyVr("postr_VBAVB", "A", "B", 2, 3),
        polPostrSkTochkiZvena("postr_VS2AVS2", "B", "A", 2, AS2, AB),
        polPostrSkTochkiKrivKor("postr_VS3", 3, "C", "B", AS2, AB),
        polPostrSkTochkiKrivKor("postr_VD", "D", "C", "B", CD, BC),
        polPostrSkPolz("postr_VFDVF", "D", "F", 4, 5),
        polPostrSkTochkiZvena("postr_VS4DVS4", "F", "D", 4, DS4, DF, false, true)
    ], ["A", OA, skA], 1, n1, skW1, ndv, skWDv) +
    pol2_2([
        ["BA", "plvba", "muv1", skBA],
        ["B", "plvb", "muv2", skB],
        [2, "plvs2", "muv3", skS2],
        [3, "plvs3", "muv4", skS3],
        ["D", "plvd", "muv5", skD],
        ["FD", "plvfd", "muv6", skFD],
        ["F", "plvf", "muv7", skF],
        [4, "plvs4", "muv8", skS4, true]
    ], [[2, skBA, AB, skW2], [3, skB, BC, skW3], [4, skFD, DF, skW4, true]]) +
    pol2_3([
        polPostrUskKriv("postr_AA", "A", "O", 1, skW1, OA, uskA),
        polPostrNormOtnUsk("postr_ABAN", "A", "B", 2, skW2, AB, uskBAn),
        polPostrNormUsk("postr_ABCN", "B", "C", 3, skW3, BC, uskBCn),
        polPostrUskParyVr("postr_ABATBCT", "B", "A", "C", 2, 3),
        polPostrOtnUsk("postr_ABA", "B", "A"),
        polPostrAbsUsk("postr_AB", "B", "C"),
        polPostrUskTochkiZvena("postr_AS2AAS2", "B", "A", 2, AS2, AB),
        polPostrUskTochkiKrivKor("postr_AS3", 3, "C", "B", CS3, BC),
        polPostrUskTochkiKrivKor("postr_AD", "D", "C", "B", CD, BC),
        polPostrNormOtnUsk("postr_AFDN", "D", "F", 4, skW4, DF, uskFDn),
        polPostrUskParyPolz("postr_AFDTF", "F", "D", 4, 5),
        polPostrOtnUsk("postr_AFD", "F", "D"),
        polPostrUskTochkiZvena("postr_AS4DAS4", "F", "D", 4, DS4, DF, false, true)
    ]) +
    pol2_4([
        ["BA τ", "plabat", "mua1", uskBAt],
        ["BC τ", "plabct", "mua2", uskBCt],
        ["BA", "plaba", "mua3", uskBA],
        ["B", "plab", "mua4", uskB],
        [2, "plas2", "mua5", uskS2],
        [3, "plas3", "mua6", uskS3],
        ["D", "plad", "mua7", uskD],
        ["FD τ", "plafdt", "mua8", uskFDt],
        ["FD", "plafd", "mua9", uskFD],
        ["F", "plaf", "mua10", uskF],
        [4, "plas4", "mua11", uskS4, true]
    ], [[2, uskBAt, AB, uskE2], [3, uskBCt, BC, uskE3], [4, uskFDt, DF, uskE4, true]]) +
    pol2_5(skW1) +
    pol2_6();
content.innerHTML = contentTag;


//Рисунок плана скоростей.
const planSkRis = elNaStr("plan-sk-ris"), planSk1 = elNaStr("plan-sk-ris1"), planSk2 = elNaStr("plan-sk-ris2");
const
    risVA = elNaStr("sk_VA"), risVBA = elNaStr("sk_VBA"), risVB = elNaStr("sk_VB"), risVS2A = elNaStr("sk_VS2A"),
    risVS2 = elNaStr("sk_VS2"), risVS3 = elNaStr("sk_VS3"), risVD = elNaStr("sk_VD"), risVFD = elNaStr("sk_VFD"),
    risVF = elNaStr("sk_VF"), risVS4D = elNaStr("sk_VS4D"), risVS4 = elNaStr("sk_VS4");
//Рисунок плана ускорений.
const planUskRis = elNaStr("plan-usk-ris"), planUsk1 = elNaStr("plan-usk-ris1"), planUsk2 = elNaStr("plan-usk-ris2");
const
    risAA = elNaStr("usk_AA"), risABAN = elNaStr("usk_ABAN"), risABCN = elNaStr("usk_ABCN"),
    risABAT = elNaStr("usk_ABAT"), risABCT = elNaStr("usk_ABCT"), risABA = elNaStr("usk_ABA"),
    risAB = elNaStr("usk_AB"), risAS2A = elNaStr("usk_AS2A"), risAS2 = elNaStr("usk_AS2"),
    risAS3 = elNaStr("usk_AS3"), risAD = elNaStr("usk_AD"), risAFDN = elNaStr("usk_AFDN"),
    risAFDT = elNaStr("usk_AFDT"), risAFD = elNaStr("usk_AFD"), risAF = elNaStr("usk_AF"),
    risAS4D = elNaStr("usk_AS4D"), risAS4 = elNaStr("usk_AS4");
//Рисунок кинематических диаграмм.
const razmetka = elNaStr("razm");
const per = elNaStr("per"), sk = elNaStr("sk"), usk = elNaStr("usk");
const diPer = elNaStr("di-per"), diSk = elNaStr("di-sk"), diUsk = elNaStr("di-usk");
const osPer = elNaStr("os-per"), osSk = elNaStr("os-sk"), osUsk = elNaStr("os-usk");
const polV = elNaStr("Pv"), polA = elNaStr("Pa");
const skNakl = elNaStr("nakl-sk"), uskNakl = elNaStr("nakl-usk");
const skGor = elNaStr("gor-sk"), uskGor = elNaStr("gor-usk");
// Поля ввода масштабных коэффициентов.
const
    muvvvod = elNaStr("muvvvod"), muavvod = elNaStr("muavvod"), l012 = elNaStr("l012"),
    mudis = elNaStr("mudisvvod"), mudiv = elNaStr("mudivvvod"), mudia = elNaStr("mudiavvod");


//План скоростей.
//Активировать пункты на странице.
aktInterPu(planSkRis, [
    ["postr_VA", [risVA]],
    ["postr_VBAVB", [risVBA, risVB]],
    ["postr_VS2AVS2", [risVS2A, risVS2]],
    ["postr_VS3", [risVS3]],
    ["postr_VD", [risVD]],
    ["postr_VFDVF", [risVFD, risVF]],
    ["postr_VS4DVS4", [risVS4D, risVS4]]
], true);

//Задать масштабный коэффициент плана скоростей и длины векторов скоростей на плане в тексте.
function zadMKV() {
    zadMuSk(muvvvod.value, [
        ["plvba", skBA],
        ["plvb", skB],
        ["plvs2", skS2],
        ["plvs3", skS3],
        ["plvd", skD],
        ["plvfd", skFD],
        ["plvf", skF],
        ["plvs4", skS4]
    ]);
}

//Задать план скоростей на странице.
zadPlNaStr(
    [skAX, skDX], [skAY, skDY, skFY], 500,
    planSkRis, planSk1, planSk2, [
        [risVA, 0, 0, skAX, skAY],
        [risVBA, skAX, skAY, skBX, skBY],
        [risVB, 0, 0, skBX, skBY],
        [risVS2A, skAX, skAY, skS2X, skS2Y],
        [risVS2, 0, 0, skS2X, skS2Y],
        [risVS3, 0, 0, skS3X, skS3Y],
        [risVD, 0, 0, skDX, skDY],
        [risVFD, skDX, skDY, 0, skFY],
        [risVF, 0, 0, 0, skFY],
        [risVS4D, skDX, skDY, skS4X, skS4Y],
        [risVS4, 0, 0, skS4X, skS4Y]
    ]);

//Задать масштабный коэффициент плана скоростей и длины векторов скоростей на плане при открытии страницы.
zadPole(muvvvod, polTokMuV());
zadMKV();

//Добавить обработчик событий на ввод масштабного коэффициента плана скоростей.
muvvvod.addEventListener("input", function () {
    zadMKV();
    zadPerVHran(tokMuV, muvvvod.value);
});


//План ускорений.
//Активировать пункты на странице.
aktInterPu(planUskRis, [
    ["postr_AA", [risAA]],
    ["postr_ABAN", [risABAN]],
    ["postr_ABCN", [risABCN]],
    ["postr_ABATBCT", [risABAT, risABCT]],
    ["postr_ABA", [risABA]],
    ["postr_AB", [risAB]],
    ["postr_AS2AAS2", [risAS2A, risAS2]],
    ["postr_AS3", [risAS3]],
    ["postr_AD", [risAD]],
    ["postr_AFDN", [risAFDN]],
    ["postr_AFDTF", [risAFDT, risAF]],
    ["postr_AFD", [risAFD]],
    ["postr_AS4DAS4", [risAS4D, risAS4]]
], true);

//Задать масштабный коэффициент плана ускорений и длины векторов ускорений на плане в тексте.
function zadMKA() {
    zadMuUsk(muavvod.value, [
        ["plabat", uskBAt],
        ["plabct", uskBCt],
        ["plaba", uskBA],
        ["plab", uskB],
        ["plas2", uskS2],
        ["plas3", uskS3],
        ["plad", uskD],
        ["plafdt", uskFDt],
        ["plafd", uskFD],
        ["plaf", uskF],
        ["plas4", uskS4]
    ]);
}

//Задать план ускорений на странице.
zadPlNaStr(
    [uskAX, uskDX, uskAX - uskBAn * Math.cos(FI2), -uskBCn * Math.cos(FI3), uskDX - uskFDn * Math.cos(FI4)],
    [uskAY, uskDY, uskFY, uskAY - uskBAn * Math.sin(FI2), -uskBCn * Math.sin(FI3), uskDY - uskFDn * Math.sin(FI4)], 500,
    planUskRis, planUsk1, planUsk2, [
        [risAA, 0, 0, uskAX, uskAY],
        [risABAN, uskAX, uskAY, uskAX - uskBAn * Math.cos(FI2), uskAY - uskBAn * Math.sin(FI2)],
        [risABCN, 0, 0, -uskBCn * Math.cos(FI3), -uskBCn * Math.sin(FI3)],
        [risABAT, uskAX - uskBAn * Math.cos(FI2), uskAY - uskBAn * Math.sin(FI2), uskBX, uskBY],
        [risABCT, -uskBCn * Math.cos(FI3), -uskBCn * Math.sin(FI3), uskBX, uskBY],
        [risABA, uskAX, uskAY, uskBX, uskBY],
        [risAB, 0, 0, uskBX, uskBY],
        [risAS2A, uskAX, uskAY, uskS2X, uskS2Y],
        [risAS2, 0, 0, uskS2X, uskS2Y],
        [risAS3, 0, 0, uskS3X, uskS3Y],
        [risAD, 0, 0, uskDX, uskDY],
        [risAFDN, uskDX, uskDY, uskDX - uskFDn * Math.cos(FI4), uskDY - uskFDn * Math.sin(FI4)],
        [risAFDT, uskDX - uskFDn * Math.cos(FI4), uskDY - uskFDn * Math.sin(FI4), 0, uskFY],
        [risAFD, uskDX, uskDY, 0, uskFY],
        [risAF, 0, 0, 0, uskFY],
        [risAS4D, uskDX, uskDY, uskS4X, uskS4Y],
        [risAS4, 0, 0, uskS4X, uskS4Y]
    ]);

//Задать масштабный коэффициент плана ускорений и длины векторов ускорений на плане при открытии страницы.
zadPole(muavvod, polTokMuA());
zadMKA();

//Добавить обработчик событий на ввод масштабного коэффициента плана ускорений.
muavvod.addEventListener("input", function () {
    zadMKA();
    zadPerVHran(tokMuA, muavvod.value);
});


//Построение кинематических диаграмм.
//Получить масштабный коэффициент времени диаграмм.
function polMuT() {
    return (2 * Pi / (skW1 * l012.value));
}

//Задать масштабный коэффициент времени кинематических диаграмм в тексте.
function zadMuT() {
    const mut = polMuT();
    for (let i = 1; i <= 3; i++) elNaStrText("di-mut" + i, pol4Znach(mut));
}

//Задать масштабный коэффициент перемещений кинематических диаграмм в тексте.
function zadMuS() {
    elNaStrText("di-mus", mudis.value);
}

//Задать масштабный коэффициент скоростей кинематических диаграмм в тексте.
function zadMuV() {
    elNaStrText("di-muv", mudiv.value);
}

//Задать расстояние от начала координат до полюса диаграммы скоростей в тексте.
function zadOPv() {
    elNaStrText("OPv", pol4Znach(mudis.value / (polMuT() * mudiv.value)));
}

//Задать расстояние от начала координат до полюса диаграммы ускорений в тексте.
function zadOPa() {
    elNaStrText("OPa", pol4Znach(mudiv.value / (polMuT() * mudia.value)));
}

//Задать значения полей ввода при открытии страницы.
zadPole(l012, polTokL012());
zadPole(mudis, polTokMuDiS());
zadPole(mudiv, polTokMuDiV());
zadPole(mudia, polTokMuDiA());

//Задать расстояния от начал координат до полюсов диаграмм в тексте при открытии страницы.
zadOPv();
zadOPa();

//Задать масштабные коэффициенты диаграмм в тексте при открытии страницы.
zadMuT();
zadMuS();
zadMuV();

//Добавить обработчики событий на поля ввода.
l012.addEventListener("input", function () {
    zadPerVHran(tokL012, l012.value);
    zadMuT();
    zadOPv();
    zadOPa();
});
mudis.addEventListener("input", function () {
    zadPerVHran(tokMuDiS, mudis.value);
    zadMuS();
    zadOPv();
});
mudiv.addEventListener("input", function () {
    zadPerVHran(tokMuDiV, mudiv.value);
    zadMuV();
    zadOPv();
    zadOPa();
});
mudia.addEventListener("input", function () {
    zadPerVHran(tokMuDiA, mudia.value);
    zadOPa();
});

//Построить кинематические диаграммы.
postrKinDi(KOL, razmetka, TAKT, TOCH, per, sk, usk, polV, polA, skNakl, uskNakl, skGor, uskGor, osPer, osSk, osUsk, [
    [diPer, polSFY, diSk, polVFY, diUsk, polAFY, 0]
]);
