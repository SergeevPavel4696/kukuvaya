import {
    pol2, pol2_1, pol2_2, pol2_3, pol2_4, pol2_5, pol2_6, polPostrSkTochkiZvena, polPostrSkKriv,
    polPostrSkPolz, polPostrUskTochkiZvena, polPostrUskKriv, polPostrNormOtnUsk, polPostrOtnUsk,
    polPostrUskParyPolz
} from "../pol-tag-2kin.js";
import {planSk, planUsk} from "./ris.js";
import {
    polAA, polAAX, polAAY, polAB, polABA, polABAn, polABAt, polABX, polAC, polACX, polACY,
    polAD, polADC, polADCn, polADCt, polADY, polAS2, polAS2X, polAS2Y, polAS4, polAS4X, polAS4Y, polE2,
    polE4, polFI2, polFI4, polSBX, polSDY, polVA, polVAX, polVAY, polVB, polVBA, polVBX, polVC, polVCX,
    polVCY, polVD, polVDC, polVDY, polVS2, polVS2X, polVS2Y, polVS4, polVS4X, polVS4Y, polW2, polW4
} from "./analiz.js";
import {aktInterPu, Pi, pol4Znach, zadMuSk, zadMuUsk, zadPerVHran, zadPlNaStr, zadPole,} from "../utils.js";
import {
    polTekVr,
    polTokAB, polTokAC, polTokAS2, polTokCD, polTokCS4, polTokK, polTokL012, polTokMuA, polTokMuDiA, polTokMuDiS,
    polTokMuDiV, polTokMuV, polTokN1, polTokNDv, polTokOA, polTokTakt, polTokToch,
    polTokW, polTokWDv, tokL012, tokMuA, tokMuDiA, tokMuDiS, tokMuDiV, tokMuV
} from "./local_storage.js";
import {elNaStr, elNaStrText} from "../../../scripts/utils.js";
import {postrKinDi} from "../meh-svg-utils.js";


const t = polTekVr();
const TAKT = polTokTakt();
const KOL = polTokK();
const TOCH = polTokToch();
const
    OA = polTokOA() / 1000, AB = polTokAB() / 1000, AS2 = polTokAS2() / 1000,
    AC = polTokAC() / 1000, CD = polTokCD() / 1000, CS4 = polTokCS4() / 1000,
    FI2 = polFI2(t), FI4 = polFI4(t);
const n1 = polTokN1(), ndv = polTokNDv();
const
    skW1 = polTokW(), skW2 = polW2(t), skW4 = polW4(t), skWDv = polTokWDv(), skA = polVA(t), skBA = polVBA(t),
    skB = polVB(t), skS2 = polVS2(t), skC = polVC(t), skDC = polVDC(t), skD = polVD(t), skS4 = polVS4(t),
    skAX = polVAX(t), skAY = polVAY(t), skS2X = polVS2X(t), skS2Y = polVS2Y(t), skCX = polVCX(t), skCY = polVCY(t),
    skBX = polVBX(t), skS4X = polVS4X(t), skS4Y = polVS4Y(t), skDY = polVDY(t);
const
    uskE2 = polE2(t), uskE4 = polE4(t), uskA = polAA(t), uskBAn = polABAn(t), uskBAt = polABAt(t),
    uskBA = polABA(t), uskB = polAB(t), uskS2 = polAS2(t), uskC = polAC(t), uskDCn = polADCn(t),
    uskDCt = polADCt(t), uskDC = polADC(t), uskD = polAD(t), uskS4 = polAS4(t),
    uskAX = polAAX(t), uskAY = polAAY(t), uskS2X = polAS2X(t), uskS2Y = polAS2Y(t), uskCX = polACX(t),
    uskCY = polACY(t),
    uskBX = polABX(t), uskS4X = polAS4X(t), uskS4Y = polAS4Y(t), uskDY = polADY(t);


//Добавить разметку страницы.
const content = document.getElementById("content");
const contentTag =
    pol2(planSk, planUsk) +
    pol2_1([
        polPostrSkKriv("postr_VA", "A", 1),
        polPostrSkPolz("postr_VBAVB", "A", "B", 2, 3),
        polPostrSkTochkiZvena("postr_VS2AVS2", "B", "A", 2, AS2, AB),
        polPostrSkTochkiZvena("postr_VCAVC", "B", "A", "C", AC, AB, true),
        polPostrSkPolz("postr_VDCVD", "C", "D", 4, 5),
        polPostrSkTochkiZvena("postr_VS4CVS4", "D", "C", 4, CS4, CD, false, true)
    ], ["A", OA, skA], 1, n1, skW1, ndv, skWDv) +
    pol2_2([
        ["BA", "plvba", "muv1", skBA],
        ["B", "plvb", "muv2", skB],
        [2, "plvs2", "muv3", skS2],
        ["C", "plvc", "muv4", skC],
        ["DC", "plvdc", "muv5", skDC],
        ["D", "plvd", "muv6", skD],
        [4, "plvs4", "muv7", skS4, true]
    ], [[2, skBA, AB, skW2], [4, skDC, CD, skW4, true]]) +
    pol2_3([
        polPostrUskKriv("postr_AA", "A", "O", 1, skW1, OA, uskA),
        polPostrNormOtnUsk("postr_ABAN", "A", "B", 2, skW2, AB, uskBAn),
        polPostrUskParyPolz("postr_ABATAB", "B", "A", 2, 3),
        polPostrOtnUsk("postr_ABA", "B", "A"),
        polPostrUskTochkiZvena("postr_AS2AAS2", "B", "A", 2, AS2, AB),
        polPostrUskTochkiZvena("postr_ACAAC", "B", "A", "C", AC, AB),
        polPostrNormOtnUsk("postr_ADCN", "C", "D", 4, skW4, CD, uskDCn),
        polPostrUskParyPolz("postr_ADCTAD", "D", "C", 4, 5),
        polPostrOtnUsk("postr_ADC", "D", "C"),
        polPostrUskTochkiZvena("postr_AS4CAS4", "D", "C", 4, CS4, CD, false, true)
    ]) +
    pol2_4([
        ["BA τ", "plabat", "mua1", uskBAt],
        ["BA", "plaba", "mua2", uskBA],
        ["B", "plab", "mua3", uskB],
        [2, "plas2", "mua4", uskS2],
        ["C", "plac", "mua5", uskC],
        ["DC τ", "pladct", "mua6", uskDCt],
        ["DC", "pladc", "mua7", uskDC],
        ["D", "plad", "mua8", uskD],
        [4, "plas4", "mua9", uskS4, true]
    ], [[2, uskBAt, AB, uskE2], [4, uskDCt, CD, uskE4, true]]) +
    pol2_5(skW1) +
    pol2_6(2);
content.innerHTML = contentTag;


//Рисунок плана скоростей.
const planSkRis = elNaStr("plan-sk-ris"), planSk1 = elNaStr("plan-sk-ris1"), planSk2 = elNaStr("plan-sk-ris2");
const
    risVA = elNaStr("sk_VA"), risVBA = elNaStr("sk_VBA"), risVB = elNaStr("sk_VB"), risVS2A = elNaStr("sk_VS2A"),
    risVS2 = elNaStr("sk_VS2"), risVCA = elNaStr("sk_VCA"), risVC = elNaStr("sk_VC"), risVDC = elNaStr("sk_VDC"),
    risVD = elNaStr("sk_VD"), risVS4C = elNaStr("sk_VS4C"), risVS4 = elNaStr("sk_VS4");
//Рисунок плана ускорений.
const planUskRis = elNaStr("plan-usk-ris"), planUsk1 = elNaStr("plan-usk-ris1"), planUsk2 = elNaStr("plan-usk-ris2");
const
    risAA = elNaStr("usk_AA"), risABAN = elNaStr("usk_ABAN"), risABAT = elNaStr("usk_ABAT"),
    risABA = elNaStr("usk_ABA"), risAB = elNaStr("usk_AB"), risAS2A = elNaStr("usk_AS2A"),
    risAS2 = elNaStr("usk_AS2"), risACA = elNaStr("usk_ACA"), risAC = elNaStr("usk_AC"),
    risADCN = elNaStr("usk_ADCN"), risADCT = elNaStr("usk_ADCT"), risADC = elNaStr("usk_ADC"),
    risAD = elNaStr("usk_AD"), risAS4C = elNaStr("usk_AS4C"), risAS4 = elNaStr("usk_AS4");
//Рисунок кинематических диаграмм.
const razmetka = elNaStr("razm");
const per = elNaStr("per"), sk = elNaStr("sk"), usk = elNaStr("usk");
const
    diPer1 = elNaStr("di-per1"), diSk1 = elNaStr("di-sk1"), diUsk1 = elNaStr("di-usk1"),
    diPer2 = elNaStr("di-per2"), diSk2 = elNaStr("di-sk2"), diUsk2 = elNaStr("di-usk2");
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
    ["postr_VCAVC", [risVC, risVCA]],
    ["postr_VDCVD", [risVDC, risVD]],
    ["postr_VS4CVS4", [risVS4C, risVS4]]
], true);

//Задать масштабный коэффициент плана скоростей и длины векторов скоростей на плане в тексте.
function zadMKV() {
    zadMuSk(muvvvod.value, [
        ["plvba", skBA],
        ["plvb", skB],
        ["plvs2", skS2],
        ["plvc", skC],
        ["plvdc", skDC],
        ["plvd", skD],
        ["plvs4", skS4]
    ]);
}

//Задать план скоростей на странице.
zadPlNaStr(
    [skAX, skBX], [skAY, skDY], 500,
    planSkRis, planSk1, planSk2, [
        [risVA, 0, 0, skAX, skAY],
        [risVBA, skAX, skAY, skBX, 0],
        [risVB, 0, 0, skBX, 0],
        [risVS2A, skAX, skAY, skS2X, skS2Y],
        [risVS2, 0, 0, skS2X, skS2Y],
        [risVCA, skAX, skAY, skCX, skCY],
        [risVC, 0, 0, skCX, skCY],
        [risVDC, skCX, skCY, 0, skDY],
        [risVD, 0, 0, 0, skDY],
        [risVS4C, skCX, skCY, skS4X, skS4Y],
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
    ["postr_ABATAB", [risABAT, risAB]],
    ["postr_ABA", [risABA]],
    ["postr_AS2AAS2", [risAS2A, risAS2]],
    ["postr_ACAAC", [risACA, risAC]],
    ["postr_ADCN", [risADCN]],
    ["postr_ADCTAD", [risADCT, risAD]],
    ["postr_ADC", [risADC]],
    ["postr_AS4CAS4", [risAS4C, risAS4]]
], true);

//Задать масштабный коэффициент плана ускорений и длины векторов ускорений на плане в тексте.
function zadMKA() {
    zadMuUsk(muavvod.value, [
        ["plabat", uskBAt],
        ["plaba", uskBA],
        ["plab", uskB],
        ["plas2", uskS2],
        ["plac", uskC],
        ["pladct", uskDCt],
        ["pladc", uskDC],
        ["plad", uskD],
        ["plas4", uskS4]
    ]);
}

//Задать план ускорений на странице.
zadPlNaStr(
    [uskAX, uskBX, uskAX - uskBAn * Math.cos(FI2), uskCX - uskDCn * Math.cos(FI4)],
    [uskAY, uskDY, uskAY - uskBAn * Math.sin(FI2), uskCY - uskDCn * Math.sin(FI4)], 500,
    planUskRis, planUsk1, planUsk2, [
        [risAA, 0, 0, uskAX, uskAY],
        [risABAN, uskAX, uskAY, uskAX - uskBAn * Math.cos(FI2), uskAY - uskBAn * Math.sin(FI2)],
        [risABAT, uskAX - uskBAn * Math.cos(FI2), uskAY - uskBAn * Math.sin(FI2), uskBX, 0],
        [risABA, uskAX, uskAY, uskBX, 0],
        [risAB, 0, 0, uskBX, 0],
        [risAS2A, uskAX, uskAY, uskS2X, uskS2Y],
        [risAS2, 0, 0, uskS2X, uskS2Y],
        [risACA, uskAX, uskAY, uskCX, uskCY],
        [risAC, 0, 0, uskCX, uskCY],
        [risADCN, uskCX, uskCY, uskCX - uskDCn * Math.cos(FI4), uskCY - uskDCn * Math.sin(FI4)],
        [risADCT, uskCX - uskDCn * Math.cos(FI4), uskCY - uskDCn * Math.sin(FI4), 0, uskDY],
        [risADC, uskCX, uskCY, 0, uskDY],
        [risAD, 0, 0, 0, uskDY],
        [risAS4C, uskCX, uskCY, uskS4X, uskS4Y],
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
    [diPer1, polSBX, diSk1, polVBX, diUsk1, polABX, 0], [diPer2, polSDY, diSk2, polVDY, diUsk2, polADY, 0]
]);
