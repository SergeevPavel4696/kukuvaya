import {
    pol2, pol2_1, pol2_2, pol2_3, pol2_4, pol2_5, pol2_6, polPostrSkTochkiZvena,
    polPostrSkKriv, polPostrSkPolz, polPostrUskTochkiZvena, polPostrUskKriv,
    polPostrNormOtnUsk, polPostrOtnUsk, polPostrUskParyPolz
} from "../pol-tag-2kin.js";
import {planSk, planUsk} from "./ris.js";
import {
    polAA, polAAX, polAAY, polAB, polABA, polABAn, polABAt, polABY, polAD, polADA, polADAn, polADAt, polADY, polAS2,
    polAS2X, polAS2Y, polAS4, polAS4X, polAS4Y, polE2, polE4, polFI2, polFI4, polSBY, polSDY, polVA, polVAX, polVAY,
    polVB, polVBA, polVBY, polVD, polVDA, polVDY, polVS2, polVS2X, polVS2Y, polVS4, polVS4X, polVS4Y, polW2, polW4
} from "./analiz.js";
import {aktInterPu, Pi, pol4Znach, zadMuSk, zadMuUsk, zadPerVHran, zadPlNaStr, zadPole,} from "../utils.js";
import {
    polTekVr, polTokAB, polTokAD, polTokAS2, polTokAS4, polTokK, polTokL012, polTokMuA,
    polTokMuDiA, polTokMuDiS, polTokMuDiV, polTokMuV, polTokN1, polTokNDv, polTokOA, polTokTakt,
    polTokToch, polTokW, polTokWDv, tokL012, tokMuA, tokMuDiA, tokMuDiS, tokMuDiV, tokMuV
} from "./local_storage.js";
import {elNaStr, elNaStrText} from "../../../scripts/utils.js";
import {postrKinDi} from "../meh-svg-utils.js";


const t = polTekVr();
const TAKT = polTokTakt();
const KOL = polTokK();
const TOCH = polTokToch();
const
    OA = polTokOA() / 1000, AB = polTokAB() / 1000, AS2 = polTokAS2() / 1000, AD = polTokAD() / 1000,
    AS4 = polTokAS4() / 1000, FI2 = polFI2(t), FI4 = polFI4(t);
const n1 = polTokN1(), ndw = polTokNDv();
const
    skW1 = polTokW(), skW2 = polW2(t), skW4 = polW4(t), skWDv = polTokWDv(t), skA = polVA(t),
    skBA = polVBA(t), skB = polVB(t), skS2 = polVS2(t), skDA = polVDA(t), skD = polVD(t),
    skS4 = polVS4(t), skAX = polVAX(t), skAY = polVAY(t), skS2X = polVS2X(t), skS2Y = polVS2Y(t),
    skBY = polVBY(t), skS4X = polVS4X(t), skS4Y = polVS4Y(t), skDY = polVDY(t);
const
    uskE2 = polE2(t), uskE4 = polE4(t), uskA = polAA(t), uskBAn = polABAn(t), uskBAt = polABAt(t), uskBA = polABA(t),
    uskB = polAB(t), uskS2 = polAS2(t), uskDAn = polADAn(t), uskDAt = polADAt(t), uskDA = polADA(t), uskD = polAD(t),
    uskS4 = polAS4(t), uskAX = polAAX(t), uskAY = polAAY(t), uskS2X = polAS2X(t), uskS2Y = polAS2Y(t),
    uskBY = polABY(t), uskS4X = polAS4X(t), uskS4Y = polAS4Y(t), uskDY = polADY(t);


//Добавить разметку страницы.
const content = document.getElementById("content");
const contentTag =
    pol2(planSk, planUsk) +
    pol2_1([
        polPostrSkKriv("postr_VA", "A", 1),
        polPostrSkPolz("postr_VBAVB", "A", "B", 2, 3),
        polPostrSkTochkiZvena("postr_VS2AVS2", "B", "A", 2, AS2, AB),
        polPostrSkPolz("postr_VDAVD", "A", "D", 4, 5),
        polPostrSkTochkiZvena("postr_VS4AVS4", "D", "A", 4, AS4, AD, false, true)
    ], ["A", OA, skA], 1, n1, skW1, ndw, skWDv) +
    pol2_2([
        ["BA", "plvba", "muv1", skBA],
        ["B", "plvb", "muv2", skB],
        [2, "plvs2", "muv3", skS2],
        ["DA", "plvda", "muv4", skDA],
        ["D", "plvd", "muv5", skD],
        [4, "plvs4", "muv6", skS4, true]
    ], [[2, skBA, AB, skW2], [4, skDA, AD, skW4, true]]) +
    pol2_3([
        polPostrUskKriv("postr_AA", "A", "O", 1, skW1, OA, uskA),
        polPostrNormOtnUsk("postr_ABAN", "A", "B", 2, skW2, AB, uskBAn),
        polPostrUskParyPolz("postr_ABATAB", "B", "A", 2, 3),
        polPostrOtnUsk("postr_ABA", "B", "A"),
        polPostrUskTochkiZvena("postr_AS2AAS2", "B", "A", 2, AS2, AB),
        polPostrNormOtnUsk("postr_ADAN", "A", "D", 4, skW4, AD, uskDAn),
        polPostrUskParyPolz("postr_ADATAD", "D", "A", 4, 5),
        polPostrOtnUsk("postr_ADA", "D", "A"),
        polPostrUskTochkiZvena("postr_AS4AAS4", "D", "A", 4, AS4, AD, false, true)
    ]) +
    pol2_4([
        ["BA τ", "plabat", "mua1", uskBAt],
        ["BA", "plaba", "mua2", uskBA],
        ["B", "plab", "mua3", uskB],
        [2, "plas2", "mua4", uskS2],
        ["DA τ", "pladat", "mua5", uskDAt],
        ["DA", "plada", "mua6", uskDA],
        ["D", "plad", "mua7", uskD],
        [4, "plas4", "mua8", uskS4, true]
    ], [[2, uskBAt, AB, uskE2], [4, uskDAt, AD, uskE4, true]]) +
    pol2_5(skW1) +
    pol2_6(2);
content.innerHTML = contentTag;


//Рисунок плана скоростей.
const planSkRis = elNaStr("plan-sk-ris"), planSk1 = elNaStr("plan-sk-ris1"), planSk2 = elNaStr("plan-sk-ris2");
const
    risVA = elNaStr("sk_VA"), risVBA = elNaStr("sk_VBA"), risVB = elNaStr("sk_VB"),
    risVS2A = elNaStr("sk_VS2A"), risVS2 = elNaStr("sk_VS2"), risVDA = elNaStr("sk_VDA"),
    risVD = elNaStr("sk_VD"), risVS4A = elNaStr("sk_VS4A"), risVS4 = elNaStr("sk_VS4");
//Рисунок плана ускорений.
const planUskRis = elNaStr("plan-usk-ris"), planUsk1 = elNaStr("plan-usk-ris1"), planUsk2 = elNaStr("plan-usk-ris2");
const
    risAA = elNaStr("usk_AA"), risABAN = elNaStr("usk_ABAN"), risABAT = elNaStr("usk_ABAT"),
    risABA = elNaStr("usk_ABA"), risAB = elNaStr("usk_AB"), risAS2A = elNaStr("usk_AS2A"),
    risAS2 = elNaStr("usk_AS2"), risADAN = elNaStr("usk_ADAN"), risADAT = elNaStr("usk_ADAT"),
    risADA = elNaStr("usk_ADA"), risAD = elNaStr("usk_AD"), risAS4A = elNaStr("usk_AS4A"),
    risAS4 = elNaStr("usk_AS4");
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
    ["postr_VDAVD", [risVDA, risVD]],
    ["postr_VS4AVS4", [risVS4A, risVS4]]
], true);

//Задать масштабный коэффициент плана скоростей и длины векторов скоростей на плане в тексте.
function zadMKV() {
    zadMuSk(muvvvod.value, [
        ["plvba", skBA],
        ["plvb", skB],
        ["plvs2", skS2],
        ["plvda", skDA],
        ["plvd", skD],
        ["plvs4", skS4]
    ]);
}

//Задать план скоростей на странице.
zadPlNaStr(
    [skAX], [skAY, skBY, skDY], 500,
    planSkRis, planSk1, planSk2, [
        [risVA, 0, 0, skAX, skAY],
        [risVBA, skAX, skAY, 0, skBY],
        [risVB, 0, 0, 0, skBY],
        [risVS2A, skAX, skAY, skS2X, skS2Y],
        [risVS2, 0, 0, skS2X, skS2Y],
        [risVD, 0, 0, 0, skDY],
        [risVDA, skAX, skAY, 0, skDY],
        [risVD, 0, 0, 0, skDY],
        [risVS4A, skAX, skAY, skS4X, skS4Y],
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
    ["postr_ADAN", [risADAN]],
    ["postr_ADATAD", [risADAT, risAD]],
    ["postr_ADA", [risADA]],
    ["postr_AS4AAS4", [risAS4A, risAS4]]
], true);

//Задать масштабный коэффициент плана ускорений и длины векторов ускорений на плане в тексте.
function zadMKA() {
    zadMuUsk(muavvod.value, [
        ["plabat", uskBAt],
        ["plaba", uskBA],
        ["plab", uskB],
        ["plas2", uskS2],
        ["pladat", uskDAt],
        ["plada", uskDA],
        ["plad", uskD],
        ["plas4", uskS4]
    ]);
}

//Задать план ускорений на странице.
zadPlNaStr(
    [uskAX, uskAX - uskBAn * Math.cos(FI2), uskAX - uskDAn * Math.cos(FI4)],
    [uskAY, uskBY, uskDY, uskAY - uskBAn * Math.sin(FI2), uskAY - uskDAn * Math.sin(FI4)], 500,
    planUskRis, planUsk1, planUsk2, [
        [risAA, 0, 0, uskAX, uskAY],
        [risABAN, uskAX, uskAY, uskAX - uskBAn * Math.cos(FI2), uskAY - uskBAn * Math.sin(FI2)],
        [risABAT, uskAX - uskBAn * Math.cos(FI2), uskAY - uskBAn * Math.sin(FI2), 0, uskBY],
        [risABA, uskAX, uskAY, 0, uskBY],
        [risAB, 0, 0, 0, uskBY],
        [risAS2A, uskAX, uskAY, uskS2X, uskS2Y],
        [risAS2, 0, 0, uskS2X, uskS2Y],
        [risADAN, uskAX, uskAY, uskAX - uskDAn * Math.cos(FI4), uskAY - uskDAn * Math.sin(FI4)],
        [risADAT, uskAX - uskDAn * Math.cos(FI4), uskAY - uskDAn * Math.sin(FI4), 0, uskDY],
        [risADA, uskAX, uskAY, 0, uskDY],
        [risAD, 0, 0, 0, uskDY],
        [risAS4A, uskAX, uskAY, uskS4X, uskS4Y],
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
    [diPer1, polSBY, diSk1, polVBY, diUsk1, polABY, 0], [diPer2, polSDY, diSk2, polVDY, diUsk2, polADY, 0]
]);
