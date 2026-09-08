import {aktInterPu, Pi, pol4Znach, zadMuSk, zadMuUsk, zadPerVHran, zadPlNaStr, zadPole} from "../utils.js";
import {
    polTekVr, polTokAB, polTokAS2, polTokBC, polTokBD, polTokBS3, polTokBS4, polTokK, polTokL012, polTokMuA,
    polTokMuDiA, polTokMuDiS, polTokMuDiV, polTokMuV, polTokN1, polTokNDv, polTokOA, polTokTakt,
    polTokToch, polTokW, polTokWDv, tokL012, tokMuA, tokMuDiA, tokMuDiS, tokMuDiV, tokMuV
} from "./local_storage.js";
import {
    polAA, polAAX, polAAY, polAB, polABA, polABAn, polABAt, polABCn, polABCt, polABX, polABY, polAD, polADB, polADBn,
    polADBt, polADX, polAS2, polAS2X, polAS2Y, polAS3, polAS3X, polAS3Y, polAS4, polAS4X, polAS4Y, polE2, polE3,
    polE4, polFI2, polFI3, polFI4, polSDX, polVA, polVAX, polVAY, polVB, polVBA, polVBX, polVBY, polVD, polVDB,
    polVDX, polVS2, polVS2X, polVS2Y, polVS3, polVS3X, polVS3Y, polVS4, polVS4X, polVS4Y, polW2, polW3, polW4
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
    OA = polTokOA() / 1000, AB = polTokAB() / 1000, AS2 = polTokAS2() / 1000, CB = polTokBC() / 1000,
    CS3 = (polTokBC() - polTokBS3()) / 1000, BD = polTokBD() / 1000, BS4 = polTokBS4() / 1000, FI2 = polFI2(t),
    FI3 = polFI3(t), FI4 = polFI4(t);
const n1 = polTokN1(), ndv = polTokNDv();
const
    skW1 = polTokW(), skW2 = polW2(t), skW3 = polW3(t), skW4 = polW4(t), skWDv = polTokWDv(), skA = polVA(t),
    skBA = polVBA(t), skB = polVB(t), skS2 = polVS2(t), skS3 = polVS3(t), skDB = polVDB(t), skD = polVD(t),
    skS4 = polVS4(t), skAX = polVAX(t), skAY = polVAY(t), skS2X = polVS2X(t), skS2Y = polVS2Y(t), skBX = polVBX(t),
    skBY = polVBY(t), skS3X = polVS3X(t), skS3Y = polVS3Y(t), skS4X = polVS4X(t), skS4Y = polVS4Y(t), skDX = polVDX(t);
const
    uskE2 = polE2(t), uskE3 = polE3(t), uskE4 = polE4(t), uskA = polAA(t), uskBAn = polABAn(t), uskBCn = polABCn(t),
    uskBAt = polABAt(t), uskBCt = polABCt(t), uskBA = polABA(t), uskB = polAB(t), uskS2 = polAS2(t), uskS3 = polAS3(t),
    uskDBn = polADBn(t), uskDBt = polADBt(t), uskDB = polADB(t), uskD = polAD(t), uskS4 = polAS4(t), uskAX = polAAX(t),
    uskAY = polAAY(t), uskS2X = polAS2X(t), uskS2Y = polAS2Y(t), uskBX = polABX(t), uskBY = polABY(t),
    uskS3X = polAS3X(t), uskS3Y = polAS3Y(t), uskS4X = polAS4X(t), uskS4Y = polAS4Y(t), uskDX = polADX(t);


//Добавить разметку страницы.
const content = document.getElementById("content");
const contentTag =
    pol2(planSk, planUsk) +
    pol2_1([
        polPostrSkKriv("postr_VA", "A", 1),
        polPostrSkParyVr("postr_VBAVB", "A", "B", 2, 3),
        polPostrSkTochkiZvena("postr_VS2AVS2", "B", "A", 2, AS2, AB),
        polPostrSkTochkiKrivKor("postr_VS3", 3, "C", "B", AS2, AB),
        polPostrSkPolz("postr_VDBVD", "B", "D", 4, 5),
        polPostrSkTochkiZvena("postr_VS4BVS4", "D", "B", 4, BS4, BD, false, true)
    ], ["A", OA, skA], 1, n1, skW1, ndv, skWDv) +
    pol2_2([
        ["BA", "plvba", "muv1", skBA],
        ["B", "plvb", "muv2", skB],
        [2, "plvs2", "muv3", skS2],
        [3, "plvs3", "muv4", skS3],
        ["DB", "plvdb", "muv5", skDB],
        ["D", "plvd", "muv6", skD],
        [4, "plvs4", "muv7", skS4, true]
    ], [[2, skBA, AB, skW2], [3, skB, CB, skW3], [4, skDB, BD, skW4, true]]) +
    pol2_3([
        polPostrUskKriv("postr_AA", "A", "O", 1, skW1, OA, uskA),
        polPostrNormOtnUsk("postr_ABAN", "A", "B", 2, skW2, AB, uskBAn),
        polPostrNormUsk("postr_ABCN", "B", "C", 3, skW3, CB, uskBCn),
        polPostrUskParyVr("postr_ABATABCT", "B", "A", "C", 2, 3),
        polPostrOtnUsk("postr_ABA", "B", "A"),
        polPostrAbsUsk("postr_AB", "B", "C"),
        polPostrUskTochkiZvena("postr_AS2AAS2", "B", "A", 2, AS2, AB),
        polPostrUskTochkiKrivKor("postr_AS3", 3, "C", "B", CS3, CB),
        polPostrNormOtnUsk("postr_ADBN", "B", "D", 4, skW4, BD, uskDBn),
        polPostrUskParyPolz("postr_ADBTAD", "D", "B", 4, 5),
        polPostrOtnUsk("postr_ADB", "D", "B"),
        polPostrUskTochkiZvena("postr_AS4BAS4", "D", "B", 4, BS4, BD, false, true)
    ]) +
    pol2_4([
        ["BA τ", "plabat", "mua1", uskBAt],
        ["BC τ", "plabct", "mua2", uskBCt],
        ["BA", "plaba", "mua3", uskBA],
        ["B", "plab", "mua4", uskB],
        [2, "plas2", "mua5", uskS2],
        [3, "plas3", "mua6", uskS3],
        ["DB τ", "pladbt", "mua7", uskDBt],
        ["DB", "pladb", "mua8", uskDB],
        ["D", "plad", "mua9", uskD],
        [4, "plas4", "mua10", uskS4, true]
    ], [[2, uskBAt, AB, uskE2], [3, uskBCt, CB, uskE3], [4, uskDBt, BD, uskE4, true]]) +
    pol2_5(skW1) +
    pol2_6();
content.innerHTML = contentTag;


//Рисунок плана скоростей.
const planSkRis = elNaStr("plan-sk-ris"), planSk1 = elNaStr("plan-sk-ris1"), planSk2 = elNaStr("plan-sk-ris2");
const
    risVA = elNaStr("sk_VA"), risVBA = elNaStr("sk_VBA"), risVB = elNaStr("sk_VB"), risVS2A = elNaStr("sk_VS2A"),
    risVS2 = elNaStr("sk_VS2"), risVS3 = elNaStr("sk_VS3"), risVDB = elNaStr("sk_VDB"), risVD = elNaStr("sk_VD"),
    risVS4B = elNaStr("sk_VS4B"), risVS4 = elNaStr("sk_VS4");
//Рисунок плана ускорений.
const planUskRis = elNaStr("plan-usk-ris"), planUsk1 = elNaStr("plan-usk-ris1"), planUsk2 = elNaStr("plan-usk-ris2");
const
    risAA = elNaStr("usk_AA"), risABAN = elNaStr("usk_ABAN"), risABCN = elNaStr("usk_ABCN"),
    risABAT = elNaStr("usk_ABAT"), risABCT = elNaStr("usk_ABCT"), risABA = elNaStr("usk_ABA"),
    risAB = elNaStr("usk_AB"), risAS2A = elNaStr("usk_AS2A"), risAS2 = elNaStr("usk_AS2"),
    risAS3 = elNaStr("usk_AS3"), risADBN = elNaStr("usk_ADBN"), risADBT = elNaStr("usk_ADBT"),
    risADB = elNaStr("usk_ADB"), risAD = elNaStr("usk_AD"), risAS4B = elNaStr("usk_AS4B"),
    risAS4 = elNaStr("usk_AS4");
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
    ["postr_VDBVD", [risVDB, risVD]],
    ["postr_VS4BVS4", [risVS4B, risVS4]]
], true);

//Задать масштабный коэффициент плана скоростей и длины векторов скоростей на плане в тексте.
function zadMKV() {
    zadMuSk(muvvvod.value, [
        ["plvba", skBA],
        ["plvb", skB],
        ["plvs2", skS2],
        ["plvs3", skS3],
        ["plvdb", skDB],
        ["plvd", skD],
        ["plvs4", skS4]
    ]);
}

//Задать план скоростей на странице.
zadPlNaStr(
    [skAX, skBX, skDX], [skAY, skBY], 500,
    planSkRis, planSk1, planSk2, [
        [risVA, 0, 0, skAX, skAY],
        [risVBA, skAX, skAY, skBX, skBY],
        [risVB, 0, 0, skBX, skBY],
        [risVS2A, skAX, skAY, skS2X, skS2Y],
        [risVS2, 0, 0, skS2X, skS2Y],
        [risVS3, 0, 0, skS3X, skS3Y],
        [risVDB, skBX, skBY, skDX, 0],
        [risVD, 0, 0, skDX, 0],
        [risVS4B, skBX, skBY, skS4X, skS4Y],
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
    ["postr_ABATABCT", [risABAT, risABCT]],
    ["postr_ABA", [risABA]],
    ["postr_AB", [risAB]],
    ["postr_AS2AAS2", [risAS2A, risAS2]],
    ["postr_AS3", [risAS3]],
    ["postr_ADBN", [risADBN]],
    ["postr_ADBTAD", [risADBT, risAD]],
    ["postr_ADB", [risADB]],
    ["postr_AS4BAS4", [risAS4B, risAS4]]
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
        ["pladbt", uskDBt],
        ["pladb", uskDB],
        ["plad", uskD],
        ["plas4", uskS4]
    ]);
}

//Задать план ускорений на странице.
zadPlNaStr(
    [uskAX, uskBX, uskDX, uskAX - uskBAn * Math.cos(FI2), -uskBCn * Math.cos(FI3), uskBX - uskDBn * Math.cos(FI4)],
    [uskAY, uskBY, uskAY - uskBAn * Math.sin(FI2), -uskBCn * Math.sin(FI3), uskBY - uskDBn * Math.sin(FI4)],
    500,
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
        [risADBN, uskBX, uskBY, uskBX - uskDBn * Math.cos(FI4), uskBY - uskDBn * Math.sin(FI4)],
        [risADBT, uskBX - uskDBn * Math.cos(FI4), uskBY - uskDBn * Math.sin(FI4), uskDX, 0],
        [risADB, uskBX, uskBY, uskDX, 0],
        [risAD, 0, 0, uskDX, 0],
        [risAS4B, uskBX, uskBY, uskS4X, uskS4Y],
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
    [diPer, polSDX, diSk, polVDX, diUsk, polADX, 0]
]);
