import {
    pol2,
    pol2_1,
    pol2_2,
    pol2_3,
    pol2_4,
    pol2_5,
    pol2_6,
    polPostrSkTochkiZvena,
    polPostrSkKriv,
    polPostrSkPolz,
    polPostrUskTochkiZvena,
    polPostrUskKriv,
    polPostrNormOtnUsk,
    polPostrOtnUsk,
    polPostrUskParyPolz,
    polPostrSkKam,
    polPostrSkTochkiKrivKor,
    polPostrNormUsk,
    polPostrKorOtnUsk,
    polPostrUskParyKam,
    polPostrUskTochkiKrivKor, polPostrAbsUsk
} from "../pol-tag-2kin.js";
import {planSk, planUsk} from "./ris.js";
import {
    polAA1, polAA3A1, polAA1X, polAA1Y, polAA3k, polAA3Bn, polAA3Bt,
    polABdl,
    polAC,
    polACX,
    polACY,
    polAD,
    polADC,
    polADCn,
    polADCt,
    polADY,
    polAS4,
    polAS4X,
    polAS4Y,
    polE3,
    polE4,
    polFI3,
    polFI4,
    polVA1, polVA3A1, polVA1X, polVA1Y,
    polVA3,
    polVC,
    polVCX,
    polVCY,
    polVD,
    polVDC,
    polVDY,
    polVS4,
    polVS4X,
    polVS4Y,
    polW3,
    polW4, polVA3X, polVA3Y, polAA3X, polAA3Y, polAA3, polSDY, polW2, polE2
} from "./analiz.js";
import {aktInterPu, Pi, pol4Znach, zadMuSk, zadMuUsk, zadPerVHran, zadPlNaStr, zadPole,} from "../utils.js";
import {
    polTekVr,
    polTokBC,
    polTokCD,
    polTokCS4,
    polTokK,
    polTokL012,
    polTokMuA,
    polTokMuDiA,
    polTokMuDiS,
    polTokMuDiV,
    polTokMuV,
    polTokN1,
    polTokNDv,
    polTokOA,
    polTokTakt,
    polTokToch,
    polTokW,
    polTokWDv,
    tokL012,
    tokMuA,
    tokMuDiA,
    tokMuDiS,
    tokMuDiV,
    tokMuV
} from "./local_storage.js";
import {elNaStr, elNaStrText} from "../../../scripts/utils.js";
import {postrKinDi} from "../meh-svg-utils.js";
import {WFInd1} from "../../web-formula.js";


const t = polTekVr();
const TAKT = polTokTakt();
const KOL = polTokK();
const TOCH = polTokToch();
const
    OA = polTokOA() / 1000, AB = polABdl(t) / 1000, BC = polTokBC() / 1000, CD = polTokCD() / 1000,
    CS4 = polTokCS4() / 1000, FI3 = polFI3(t), FI4 = polFI4(t);
const n1 = polTokN1(), ndv = polTokNDv();
const
    skW1 = polTokW(), skW2 = polW2(t), skW3 = polW3(t), skW4 = polW4(t), skWDv = polTokWDv(),
    skA1 = polVA1(t), skA3A1 = polVA3A1(t), skA3 = polVA3(t), skC = polVC(t), skDC = polVDC(t), skD = polVD(t),
    skS4 = polVS4(t), skA1X = polVA1X(t), skA1Y = polVA1Y(t), skA3X = polVA3X(t), skA3Y = polVA3Y(t),
    skCX = polVCX(t), skCY = polVCY(t), skS4X = polVS4X(t), skS4Y = polVS4Y(t), skDY = polVDY(t);
const
    uskE2 = polE2(t), uskE3 = polE3(t), uskE4 = polE4(t), uskA1 = polAA1(t), uskA3Bn = polAA3Bn(t),
    uskA3Bt = polAA3Bt(t), uskA3k = polAA3k(t), uskA3A1 = polAA3A1(t), uskA3 = polAA3(t), uskC = polAC(t),
    uskDCn = polADCn(t), uskDCt = polADCt(t), uskDC = polADC(t), uskD = polAD(t), uskS4 = polAS4(t),
    uskA1X = polAA1X(t), uskA1Y = polAA1Y(t), uskA3X = polAA3X(t), uskA3Y = polAA3Y(t), uskCX = polACX(t),
    uskCY = polACY(t), uskS4X = polAS4X(t), uskS4Y = polAS4Y(t), uskDY = polADY(t);


//Добавить разметку страницы.
const content = document.getElementById("content");
const contentTag =
    pol2(planSk, planUsk) +
    pol2_1([
        polPostrSkKriv("postr_VA1", "A" + WFInd1(1), 1),
        polPostrSkKam("postr_VA3A1VA3", "A", 1, 3),
        polPostrSkTochkiKrivKor("postr_VC", "C", "B", "A" + WFInd1(3), BC, AB, 180),
        polPostrSkPolz("postr_VDCVD", "C", "D", 4, 5),
        polPostrSkTochkiZvena("postr_VS4CVS4", "D", "C", 4, CS4, CD, false, true)
    ], ["A" + WFInd1(1), OA, skA1], 1, n1, skW1, ndv, skWDv) +
    pol2_2([
        ["A" + WFInd1(3) + "A" + WFInd1(1), "plva3a1", "muv1", skA3A1],
        ["A" + WFInd1(3), "plva3", "muv2", skA3],
        ["C", "plvc", "muv3", skC],
        ["DC", "plvdc", "muv4", skDC],
        ["D", "plvd", "muv5", skD],
        [4, "plvs4", "muv6", skS4, true]
    ], [[2, skA3, AB, skW2], [3, skA3, AB, skW3], [4, skDC, CD, skW4, true]]) +
    pol2_3([
        polPostrUskKriv("postr_AA1", "A" + WFInd1(1), "O", 1, skW1, OA, uskA1),
        polPostrNormUsk("postr_AA3BN", "A" + WFInd1(3), "B", 3, skW3, AB, uskA3Bn),
        polPostrKorOtnUsk("postr_AA3K", "A", null, 1, 3, skW3, skA3A1, uskA3k),
        polPostrUskParyKam("postr_AA3A1A3BT", "A", "B", 3, 1),
        polPostrAbsUsk("postr_AA3", "A" + WFInd1(3), "B"),
        polPostrUskTochkiKrivKor("postr_AC", "C", "B", "A" + WFInd1(3), BC, AB, 180),
        polPostrNormOtnUsk("postr_ADCN", "C", "D", 4, skW4, CD, uskDCn),
        polPostrUskParyPolz("postr_ADCTAD", "D", "C", 4, 5),
        polPostrOtnUsk("postr_ADC", "D", "C"),
        polPostrUskTochkiZvena("postr_AS4CAS4", "D", "C", 4, CS4, CD, false, true)
    ]) +
    pol2_4([
        ["A" + WFInd1(3) + "A" + WFInd1(1), "plaa3a1", "mua1", uskA3A1],
        ["A" + WFInd1(3) + "B τ", "plaa3bt", "mua2", uskA3Bt],
        ["A" + WFInd1(3), "plaa3", "mua3", uskA3],
        ["C", "plac", "mua4", uskC],
        ["DC τ", "pladct", "mua5", uskDCt],
        ["DC", "pladc", "mua6", uskDC],
        ["D", "plad", "mua7", uskD],
        [4, "plas4", "mua8", uskS4, true]
    ], [[2, uskA3Bt, AB, uskE2], [3, uskA3Bt, AB, uskE3], [4, uskDCt, CD, uskE4, true]]) +
    pol2_5(skW1) +
    pol2_6(2);
content.innerHTML = contentTag;


//Рисунок плана скоростей.
const planSkRis = elNaStr("plan-sk-ris"), planSk1 = elNaStr("plan-sk-ris1"), planSk2 = elNaStr("plan-sk-ris2");
const
    risVA1 = elNaStr("sk_VA1"), risVA3A1 = elNaStr("sk_VA3A1"), risVA3 = elNaStr("sk_VA3"), risVC = elNaStr("sk_VC"),
    risVDC = elNaStr("sk_VDC"), risVD = elNaStr("sk_VD"), risVS4C = elNaStr("sk_VS4C"), risVS4 = elNaStr("sk_VS4");
//Рисунок плана ускорений.
const planUskRis = elNaStr("plan-usk-ris"), planUsk1 = elNaStr("plan-usk-ris1"), planUsk2 = elNaStr("plan-usk-ris2");
const
    risAA1 = elNaStr("usk_AA1"), risAA3K = elNaStr("usk_AA3K"), risAA3A1 = elNaStr("usk_AA3A1"),
    risAA3BN = elNaStr("usk_AA3BN"), risAA3BT = elNaStr("usk_AA3BT"), risAA3 = elNaStr("usk_AA3"),
    risAC = elNaStr("usk_AC"), risADCN = elNaStr("usk_ADCN"), risADCT = elNaStr("usk_ADCT"),
    risADC = elNaStr("usk_ADC"), risAD = elNaStr("usk_AD"), risAS4C = elNaStr("usk_AS4C"),
    risAS4 = elNaStr("usk_AS4");
//Рисунок кинематических диаграмм.
const razmetka = elNaStr("razm");
const per = elNaStr("per"), sk = elNaStr("sk"), usk = elNaStr("usk");
const diPer1 = elNaStr("di-per1"), diSk1 = elNaStr("di-sk1"), diUsk1 = elNaStr("di-usk1");
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
    ["postr_VA1", [risVA1]],
    ["postr_VA3A1VA3", [risVA3A1, risVA3]],
    ["postr_VC", [risVC]],
    ["postr_VDCVD", [risVDC, risVD]],
    ["postr_VS4CVS4", [risVS4C, risVS4]]
], true);

//Задать масштабный коэффициент плана скоростей и длины векторов скоростей на плане в тексте.
function zadMKV() {
    zadMuSk(muvvvod.value, [
        ["plva3a1", skA3A1],
        ["plva3", skA3],
        ["plvc", skC],
        ["plvdc", skDC],
        ["plvd", skD],
        ["plvs4", skS4]
    ]);
}

//Задать план скоростей на странице.
zadPlNaStr(
    [skA1X, skA3X, skCX], [skA1Y, skA3Y, skCY, skDY], 500,
    planSkRis, planSk1, planSk2, [
        [risVA1, 0, 0, skA1X, skA1Y],
        [risVA3A1, skA1X, skA1Y, skA3X, skA3Y],
        [risVA3, 0, 0, skA3X, skA3Y],
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
    ["postr_AA1", [risAA1]],
    ["postr_AA3BN", [risAA3BN]],
    ["postr_AA3K", [risAA3K]],
    ["postr_AA3A1A3BT", [risAA3A1, risAA3BT]],
    ["postr_AA3", [risAA3]],
    ["postr_AC", [risAC]],
    ["postr_ADCN", [risADCN]],
    ["postr_ADCTAD", [risADCT, risAD]],
    ["postr_ADC", [risADC]],
    ["postr_AS4CAS4", [risAS4C, risAS4]]
], true);

//Задать масштабный коэффициент плана ускорений и длины векторов ускорений на плане в тексте.
function zadMKA() {
    zadMuUsk(muavvod.value, [
        ["plaa3a1", uskA3A1],
        ["plaa3bt", uskA3Bt],
        ["plaa3", uskA3],
        ["plac", uskC],
        ["pladct", uskDCt],
        ["pladc", uskDC],
        ["plad", uskD],
        ["plas4", uskS4]
    ]);
}

//Задать план ускорений на странице.
zadPlNaStr(
    [uskA1X, uskA3X, uskCX, uskA1X + uskA3k * Math.cos(FI3 + 0.5 * Pi),
        uskA1X + uskA3k * Math.cos(FI3 + 0.5 * Pi) + uskA3A1 * Math.cos(FI3),
        uskA3Bn * Math.cos(FI3), uskCX - uskDCn * Math.cos(FI4)],
    [uskA1Y, uskA3Y, uskCY, uskDY, uskA1Y + uskA3k * Math.sin(FI3 + 0.5 * Pi),
        uskA1Y + uskA3k * Math.sin(FI3 + 0.5 * Pi) + uskA3A1 * Math.sin(FI3),
        uskA3Bn * Math.sin(FI3), uskCY - uskDCn * Math.sin(FI4)], 500,
    planUskRis, planUsk1, planUsk2, [
        [risAA1, 0, 0, uskA1X, uskA1Y],
        [risAA3K, uskA1X, uskA1Y, uskA1X + uskA3k * Math.cos(FI3 + 0.5 * Pi), uskA1Y + uskA3k * Math.sin(FI3 + 0.5 * Pi)],
        [risAA3A1, uskA1X + uskA3k * Math.cos(FI3 + 0.5 * Pi), uskA1Y + uskA3k * Math.sin(FI3 + 0.5 * Pi),
            uskA1X + uskA3k * Math.cos(FI3 + 0.5 * Pi) + uskA3A1 * Math.cos(FI3),
            uskA1Y + uskA3k * Math.sin(FI3 + 0.5 * Pi) + uskA3A1 * Math.sin(FI3)],
        [risAA3BN, 0, 0, uskA3Bn * Math.cos(FI3), uskA3Bn * Math.sin(FI3)],
        [risAA3BT, uskA3Bn * Math.cos(FI3), uskA3Bn * Math.sin(FI3), uskA3X, uskA3Y],
        [risAA3, 0, 0, uskA3X, uskA3Y],
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
    [diPer1, polSDY, diSk1, polVDY, diUsk1, polADY, 0]
]);
