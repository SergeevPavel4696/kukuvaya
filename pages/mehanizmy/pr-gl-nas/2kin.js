import {aktInterPu, Pi, pol4Znach, zadMuSk, zadMuUsk, zadPerVHran, zadPlNaStr, zadPole} from "../utils.js";
import {
    polTekVr, polTokAB, polTokAS2, polTokBC, polTokBD, polTokBE, polTokBS4, polTokCS3, polTokEF, polTokEK, polTokK,
    polTokKS5, polTokL012, polTokMuA, polTokMuDiA, polTokMuDiS, polTokMuDiV, polTokMuV, polTokN1, polTokNDv, polTokOA,
    polTokTakt, polTokToch, polTokW, polTokWDv, tokL012, tokMuA, tokMuDiA, tokMuDiS, tokMuDiV, tokMuV
} from "./local_storage.js";
import {
    polAA, polAAX, polAAY, polAB, polABA, polABAn, polABAt, polABCn, polABCt, polABX, polABY, polAD, polADX,
    polADY, polAE, polAEB, polAEBn, polAEBt, polAEKn, polAEKt, polAEX, polAEY, polAF, polAFX, polAFY, polAS2,
    polAS2X, polAS2Y, polAS3, polAS3X, polAS3Y, polAS4, polAS4X, polAS4Y, polAS5, polAS5X, polAS5Y, polE2, polE3,
    polE4, polE5, polFI2, polFI3, polFI4, polFI5, polSDY, polVA, polVAX, polVAY, polVB, polVBA, polVBX, polVBY,
    polVD, polVDX, polVDY, polVE, polVEB, polVEX, polVEY, polVF, polVFX, polVFY, polVS2, polVS2X, polVS2Y,
    polVS3, polVS3X, polVS3Y, polVS4, polVS4X, polVS4Y, polVS5, polVS5X, polVS5Y, polW2, polW3, polW4, polW5
} from "./analiz.js";
import {postrKinDi} from "../meh-svg-utils.js";
import {elNaStr, elNaStrText} from "../../../scripts/utils.js";
import {
    pol2, pol2_1, pol2_2, pol2_3, pol2_4, pol2_5, pol2_6, polPostrSkTochkiZvena, polPostrSkKriv, polPostrSkParyVr,
    polPostrUskTochkiZvena, polPostrUskKriv, polPostrNormUsk, polPostrNormOtnUsk, polPostrAbsUsk,
    polPostrOtnUsk, polPostrUskParyVr, polPostrSkTochkiKrivKor, polPostrUskTochkiKrivKor
} from "../pol-tag-2kin.js";
import {planSk, planUsk} from "./ris.js";


const t = polTekVr();
const TAKT = polTokTakt();
const KOL = polTokK();
const TOCH = polTokToch();
const
    OA = polTokOA() / 1000, AB = polTokAB() / 1000, AS2 = polTokAS2() / 1000, CB = polTokBC() / 1000,
    CS3 = polTokCS3() / 1000, BD = polTokBD() / 1000, BS4 = polTokBS4() / 1000, BE = polTokBE() / 1000,
    EF = polTokEF() / 1000, KE = polTokEK() / 1000, KS5 = polTokKS5() / 1000, FI2 = polFI2(t), FI3 = polFI3(t),
    FI4 = polFI4(t), FI5 = polFI5(t);
const n1 = polTokN1(), ndv = polTokNDv();
const
    skW1 = polTokW(), skW2 = polW2(t), skW3 = polW3(t), skW4 = polW4(t), skW5 = polW5(t), skWDv = polTokWDv(),
    skA = polVA(t), skBA = polVBA(t), skB = polVB(t), skS2 = polVS2(t), skS3 = polVS3(t), skEB = polVEB(t),
    skE = polVE(t), skD = polVD(t), skS4 = polVS4(t), skF = polVF(t), skS5 = polVS5(t),
    skAX = polVAX(t), skAY = polVAY(t), skS2X = polVS2X(t), skS2Y = polVS2Y(t), skBX = polVBX(t), skBY = polVBY(t),
    skS3X = polVS3X(t), skS3Y = polVS3Y(t), skDX = polVDX(t), skDY = polVDY(t), skS4X = polVS4X(t), skS4Y = polVS4Y(t),
    skEX = polVEX(t), skEY = polVEY(t), skFX = polVFX(t), skFY = polVFY(t), skS5X = polVS5X(t), skS5Y = polVS5Y(t);
const
    uskE2 = polE2(t), uskE3 = polE3(t), uskE4 = polE4(t), uskE5 = polE5(t), uskA = polAA(t), uskBAn = polABAn(t),
    uskBCn = polABCn(t), uskBAt = polABAt(t), uskBCt = polABCt(t), uskBA = polABA(t), uskB = polAB(t),
    uskS2 = polAS2(t), uskS3 = polAS3(t), uskEBn = polAEBn(t), uskEKn = polAEKn(t), uskEBt = polAEBt(t),
    uskEKt = polAEKt(t), uskEB = polAEB(t), uskE = polAE(t), uskD = polAD(t), uskS4 = polAS4(t), uskF = polAF(t),
    uskS5 = polAS5(t), uskAX = polAAX(t), uskAY = polAAY(t), uskS2X = polAS2X(t), uskS2Y = polAS2Y(t),
    uskBX = polABX(t), uskBY = polABY(t), uskS3X = polAS3X(t), uskS3Y = polAS3Y(t), uskDX = polADX(t),
    uskDY = polADY(t), uskS4X = polAS4X(t), uskS4Y = polAS4Y(t), uskEX = polAEX(t), uskEY = polAEY(t),
    uskFX = polAFX(t), uskFY = polAFY(t), uskS5X = polAS5X(t), uskS5Y = polAS5Y(t);


//Добавить разметку страницы.
const content = document.getElementById("content");
const contentTag =
    pol2(planSk, planUsk) +
    pol2_1([
        polPostrSkKriv("postr_VA", "A", 1),
        polPostrSkParyVr("postr_VBAVB", "A", "B", 2, 3),
        polPostrSkTochkiZvena("postr_VS2AVS2", "B", "A", 2, AS2, AB),
        polPostrSkTochkiKrivKor("postr_VS3", 3, "C", "B", AS2, AB),
        polPostrSkParyVr("postr_VEBVE", "B", "E", 4, 5),
        polPostrSkTochkiZvena("postr_VDBVD", "E", "B", "D", BD, BE, true),
        polPostrSkTochkiZvena("postr_VS4BVS4", "E", "B", 4, BS4, BE),
        polPostrSkTochkiZvena("postr_VFBVF", "E", "B", "F", BE + EF, BE),
        polPostrSkTochkiKrivKor("postr_VS5", 5, "K", "E", KS5, KE)
    ], ["A", OA, skA], 1, n1, skW1, ndv, skWDv) +
    pol2_2([
        ["BA", "plvba", "muv1", skBA],
        ["B", "plvb", "muv2", skB],
        [2, "plvs2", "muv3", skS2],
        [3, "plvs3", "muv4", skS3],
        ["EB", "plveb", "muv5", skEB],
        ["E", "plve", "muv6", skE],
        ["D", "plvd", "muv7", skD],
        [4, "plvs4", "muv8", skS4],
        ["F", "plvf", "muv9", skF],
        [5, "plvs5", "muv10", skS5, true]
    ], [[2, skBA, AB, skW2], [3, skB, CB, skW3], [4, skEB, BE, skW4], [5, skE, KE, skW5, true]]) +
    pol2_3([
        polPostrUskKriv("postr_AA", "A", "O", 1, skW1, OA, uskA),
        polPostrNormOtnUsk("postr_ABAN", "A", "B", 2, skW2, AB, uskBAn),
        polPostrNormUsk("postr_ABCN", "B", "C", 3, skW3, CB, uskBCn),
        polPostrUskParyVr("postr_ABATABCT", "B", "A", "C", 2, 3),
        polPostrOtnUsk("postr_ABA", "B", "A"),
        polPostrAbsUsk("postr_AB", "B", "C"),
        polPostrUskTochkiZvena("postr_AS2AAS2", "B", "A", 2, AS2, AB),
        polPostrUskTochkiKrivKor("postr_AS3", 3, "C", "B", CS3, CB),
        polPostrNormOtnUsk("postr_AEBN", "B", "E", 4, skW4, BE, uskEBn),
        polPostrNormUsk("postr_AEKN", "E", "K", 5, skW5, KE, uskEKn),
        polPostrUskParyVr("postr_AEBTAEKT", "E", "B", "K", 4, 5),
        polPostrOtnUsk("postr_AEB", "E", "B"),
        polPostrAbsUsk("postr_AE", "E", "K"),
        polPostrUskTochkiZvena("postr_ADBAD", "E", "B", "D", BD, BE, true),
        polPostrUskTochkiZvena("postr_AS4BAS4", "E", "B", 4, BS4, BE),
        polPostrUskTochkiZvena("postr_AFBAF", "E", "B", "F", BE + EF, BE),
        polPostrUskTochkiKrivKor("postr_AS5", 5, "K", "E", KS5, KE, null, true)
    ]) +
    pol2_4([
        ["BA τ", "plabat", "mua1", uskBAt],
        ["BC τ", "plabct", "mua2", uskBCt],
        ["BA", "plaba", "mua3", uskBA],
        ["B", "plab", "mua4", uskB],
        [2, "plas2", "mua5", uskS2],
        [3, "plas3", "mua6", uskS3],
        ["EB τ", "plaebt", "mua7", uskEBt],
        ["EK τ", "plaekt", "mua8", uskEKt],
        ["EB", "plaeb", "mua9", uskEB],
        ["E", "plae", "mua10", uskE],
        ["D", "plad", "mua11", uskD],
        [4, "plas4", "mua12", uskS4],
        ["F", "plaf", "mua13", uskF],
        [5, "plas5", "mua14", uskS5, true]
    ], [[2, uskBAt, AB, uskE2], [3, uskBCt, CB, uskE3], [4, uskEBt, BE, uskE4], [5, uskEKt, KE, uskE5, true]]) +
    pol2_5(skW1) +
    pol2_6();
content.innerHTML = contentTag;


//Рисунок плана скоростей.
const planSkRis = elNaStr("plan-sk-ris"), planSk1 = elNaStr("plan-sk-ris1"), planSk2 = elNaStr("plan-sk-ris2");
const
    risVA = elNaStr("sk_VA"), risVBA = elNaStr("sk_VBA"), risVB = elNaStr("sk_VB"), risVS2A = elNaStr("sk_VS2A"),
    risVS2 = elNaStr("sk_VS2"), risVS3 = elNaStr("sk_VS3"), risVEB = elNaStr("sk_VEB"), risVE = elNaStr("sk_VE"),
    risVDB = elNaStr("sk_VDB"), risVD = elNaStr("sk_VD"), risVS4B = elNaStr("sk_VS4B"), risVS4 = elNaStr("sk_VS4"),
    risVFB = elNaStr("sk_VFB"), risVF = elNaStr("sk_VF"), risVS5 = elNaStr("sk_VS5");
//Рисунок плана ускорений.
const planUskRis = elNaStr("plan-usk-ris"), planUsk1 = elNaStr("plan-usk-ris1"), planUsk2 = elNaStr("plan-usk-ris2");
const
    risAA = elNaStr("usk_AA"), risABAN = elNaStr("usk_ABAN"), risABCN = elNaStr("usk_ABCN"),
    risABAT = elNaStr("usk_ABAT"), risABCT = elNaStr("usk_ABCT"), risABA = elNaStr("usk_ABA"),
    risAB = elNaStr("usk_AB"), risAS2A = elNaStr("usk_AS2A"), risAS2 = elNaStr("usk_AS2"),
    risAS3 = elNaStr("usk_AS3"), risAEBN = elNaStr("usk_AEBN"), risAEKN = elNaStr("usk_AEKN"),
    risAEBT = elNaStr("usk_AEBT"), risAEKT = elNaStr("usk_AEKT"), risAEB = elNaStr("usk_AEB"),
    risAE = elNaStr("usk_AE"), risADB = elNaStr("usk_ADB"), risAD = elNaStr("usk_AD"),
    risAS4B = elNaStr("usk_AS4B"), risAS4 = elNaStr("usk_AS4"), risAFB = elNaStr("usk_AFB"),
    risAF = elNaStr("usk_AF"), risAS5 = elNaStr("usk_AS5");
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
    ["postr_VEBVE", [risVEB, risVE]],
    ["postr_VDBVD", [risVDB, risVD]],
    ["postr_VS4BVS4", [risVS4B, risVS4]],
    ["postr_VFBVF", [risVFB, risVF]],
    ["postr_VS5", [risVS5]]
], true);

//Задать масштабный коэффициент плана скоростей и длины векторов скоростей на плане в тексте.
function zadMKV() {
    zadMuSk(muvvvod.value, [
        ["plvba", skBA],
        ["plvb", skB],
        ["plvs2", skS2],
        ["plvs3", skS3],
        ["plveb", skEB],
        ["plve", skE],
        ["plvd", skD],
        ["plvs4", skS4],
        ["plvf", skF],
        ["plvs5", skS5]
    ]);
}

//Задать план скоростей на странице.
zadPlNaStr(
    [skAX, skBX, skDX, skEX, skFX], [skAY, skBY, skDY, skEY, skFY], 500,
    planSkRis, planSk1, planSk2, [
        [risVA, 0, 0, skAX, skAY],
        [risVBA, skAX, skAY, skBX, skBY],
        [risVB, 0, 0, skBX, skBY],
        [risVS2A, skAX, skAY, skS2X, skS2Y],
        [risVS2, 0, 0, skS2X, skS2Y],
        [risVS3, 0, 0, skS3X, skS3Y],
        [risVDB, skBX, skBY, skDX, skDY],
        [risVD, 0, 0, skDX, skDY],
        [risVS4B, skBX, skBY, skS4X, skS4Y],
        [risVS4, 0, 0, skS4X, skS4Y],
        [risVEB, skBX, skBY, skEX, skEY],
        [risVE, 0, 0, skEX, skEY],
        [risVFB, skBX, skBY, skFX, skFY],
        [risVF, 0, 0, skFX, skFY],
        [risVS5, 0, 0, skS5X, skS5Y]
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
    ["postr_AEBN", [risAEBN]],
    ["postr_AEKN", [risAEKN]],
    ["postr_AEBTAEKT", [risAEBT, risAEKT]],
    ["postr_AEB", [risAEB]],
    ["postr_AE", [risAE]],
    ["postr_ADBAD", [risADB, risAD]],
    ["postr_AS4BAS4", [risAS4B, risAS4]],
    ["postr_AFBAF", [risAFB, risAF]],
    ["postr_AS5", [risAS5]]
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
        ["plaebt", uskEBt],
        ["plaekt", uskEKt],
        ["plaeb", uskEB],
        ["plae", uskE],
        ["plad", uskD],
        ["plas4", uskS4],
        ["plaf", uskF],
        ["plas5", uskS5]
    ]);
}

//Задать план ускорений на странице.
zadPlNaStr(
    [uskAX, uskBX, uskDX, uskEX, uskFX, uskAX - uskBAn * Math.cos(FI2), -uskBCn * Math.cos(FI3),
        uskBX - uskEBn * Math.cos(FI4), -uskEKn * Math.cos(FI5)],
    [uskAY, uskBY, uskDY, uskEY, uskFY, uskAY - uskBAn * Math.sin(FI2), -uskBCn * Math.sin(FI3),
        uskBY - uskEBn * Math.sin(FI4), -uskEKn * Math.sin(FI5)],
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
        [risAEBN, uskBX, uskBY, uskBX - uskEBn * Math.cos(FI4), uskBY - uskEBn * Math.sin(FI4)],
        [risAEKN, 0, 0, -uskEKn * Math.cos(FI5), -uskEKn * Math.sin(FI5)],
        [risAEBT, uskBX - uskEBn * Math.cos(FI4), uskBY - uskEBn * Math.sin(FI4), uskEX, uskEY],
        [risAEKT, -uskEKn * Math.cos(FI5), -uskEKn * Math.sin(FI5), uskEX, uskEY],
        [risAEB, uskBX, uskBY, uskEX, uskEY],
        [risAE, 0, 0, uskEX, uskEY],
        [risAS4B, uskBX, uskBY, uskS4X, uskS4Y],
        [risAS4, 0, 0, uskS4X, uskS4Y],
        [risAS5, 0, 0, uskS5X, uskS5Y],
        [risADB, uskBX, uskBY, uskDX, uskDY],
        [risAD, 0, 0, uskDX, uskDY],
        [risAFB, uskBX, uskBY, uskFX, uskFY],
        [risAF, 0, 0, uskFX, uskFY]
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
    [diPer, polSDY, diSk, polVDY, diUsk, polADY, 0]
]);
