import {planSil2, planSil1, planSilNach} from "./ris.js";
import {
    polAS4, polE2, polE3, polE4, polFIn2, polFIn2X, polFIn2Y, polFIn4, polFIn4X, polFIn4Y, polFIn5, polG1, polG2,
    polG3, polG4, polG5, polMIn2, polMIn3, polMIn4, polMomFIn2, polMomFIn4, polMomG2, polMomG4, polMomR21, polMomUr,
    polPlA, polPlB, polPlC, polPlD, polPlF, polPlI, polPlH, polPlG, polPlE, polPlK, polR01, polR01X, polR01Y, polR03,
    polR12, polR21, polR21X, polR21Y, polR32, polR34, polR43X, polR43Y, polR12T, polPlJ, polR12N, polR12TX, polR12TY,
    polR12NX, polR12NY, polMomFIn5, polMomG5, polMomR05, polFIn3, polAS2, polAS3, polMomR03t, polMomFIn3, polMomG3,
    polMomR12t, polR05, polFIn5X, polR03T, polR03TX, polR03TY, polR03N, polR03NX, polR03NY, polFIn3X, polFIn3Y,polR23,
    polGSht, polGPr, polGZh, polFInSht, polFInPr, polFInZh, polMIn5, polE5, polAS5, polMomFInSht, polMomGSht,
    polMomFInPr, polMomGPr, polMomFInZh, polMomGZh, polFIn5Y, polFInShtY, polFInPrX, polFInPrY,polFInZhY, polPlL,
    polPlM, polPlN, polPlO, polPlP, polR45, polR54, polAF, polMZh, polADY, polR05T, polR05TX, polR05TY, polR34T,
    polR34TX, polR34TY, polMomR34, polR34N, polR34NX, polR34NY, polR05N, polR05NX, polR05NY
} from "./analiz.js";
import {aktInterPu, zadMuSil, zadPerVHran, zadPlNaStrZamk, zadPole} from "../utils.js";
import {
    polTekVr, polTokJs2, polTokJs3, polTokJs4, polTokJs5, polTokM1, polTokM2, polTokM3, polTokM4,
    polTokM5, polTokMPr, polTokMSht, polTokMuF1, polTokMuF2, polTokMuFNach, tokMuF1, tokMuF2, tokMuFNach
} from "./local_storage.js";
import {
    pol3, pol3_1, pol3_2, pol3_3, pol3_4, pol3_5, pol3_6, polPostrCepVekIzPol, polOprObrReak,
    polRasschReak, polZamkCep, polZamkCep2Zv1Vek, pol3_7, pol3_8, polPolnReak, polZamkCep2Zv2Vek
} from "../pol-tag-3sil.js";
import {elNaStr} from "../../../scripts/utils.js";


const t = polTekVr();
const M1 = polTokM1(), M2 = polTokM2(), M3 = polTokM3(), M4 = polTokM4(), M5 = polTokM5(),
    MSHT = polTokMSht(), MPR = polTokMPr(), MZH = polMZh(t);
const JS2 = polTokJs2(), JS3 = polTokJs3(), JS4 = polTokJs4(), JS5 = polTokJs5();
const G1 = polG1(true), G2 = polG2(true), G3 = polG3(true), G4 = polG4(true), G5 = polG5(true),
    GSHT = polGSht(true), GPR = polGPr(true), GZH = polGZh(true, t);
const fin2 = polFIn2(t), fin3 = polFIn3(t), fin4 = polFIn4(t), fin5 = polFIn5(t),
    finsht = polFInSht(t), finpr = polFInPr(t), finzh = polFInZh(t);
const min2 = polMIn2(t), min3 = polMIn3(t), min4 = polMIn4(t), min5 = polMIn5(t);
const uskE2 = polE2(t), uskE3 = polE3(t), uskE4 = polE4(t), uskE5 = polE5(t),
    uskS2 = polAS2(t), uskS3 = polAS3(t), uskS4 = polAS4(t), uskS5 = polAS5(t), uskD = polADY(t), uskF = polAF(t);
const
    momR05 = polMomR05(t), momFIn5 = polMomFIn5(t), momG5 = polMomG5(t), momR34 = polMomR34(t), momFIn4 = polMomFIn4(t),
    momG4 = polMomG4(t), momFInSht = polMomFInSht(t), momGSht = polMomGSht(t), momFInPr = polMomFInPr(t),
    momGPr = polMomGPr(t), momFInZh = polMomFInZh(t), momGZh = polMomGZh(t),
    momR03 = polMomR03t(t), momFIn3 = polMomFIn3(t), momG3 = polMomG3(t),
    momR12 = polMomR12t(t), momFIn2 = polMomFIn2(t), momG2 = polMomG2(t),
    momR21 = polMomR21(t), momur = polMomUr(t);
const
    FIn5 = polFIn5(t), FIn5X = polFIn5X(t), FIn5Y = polFIn5Y(t), FIn4 = polFIn4(t), FIn4X = polFIn4X(t),
    FIn4Y = polFIn4Y(t), FInSht = polFInShtY(t), FInPr = polFInPr(t), FInPrX = polFInPrX(t),
    FInPrY = polFInPrY(t), FInZh = polFInZhY(t), R05 = polR05(t), R05T = polR05T(t), R05TX = polR05TX(t),
    R05TY = polR05TY(t), R05N = polR05N(t), R05NX = polR05NX(t), R05NY = polR05NY(t), R34 = polR34(t),
    R34T = polR34T(t), R34TX = polR34TX(t), R34TY = polR34TY(t), R34N = polR34N(t), R34NX = polR34NX(t),
    R34NY = polR34NY(t), R45 = polR45(t), R54 = polR54(t),
    FIn3 = polFIn3(t), FIn3X = polFIn3X(t), FIn3Y = polFIn3Y(t), FIn2 = polFIn2(t), FIn2X = polFIn2X(t),
    FIn2Y = polFIn2Y(t), R03 = polR03(t), R03T = polR03T(t), R03TX = polR03TX(t), R03TY = polR03TY(t),
    R03N = polR03N(t), R03NX = polR03NX(t), R03NY = polR03NY(t), R43X = polR43X(t), R43Y = polR43Y(t),
    R12 = polR12(t), R12T = polR12T(t), R12TX = polR12TX(t), R12TY = polR12TY(t), R12N = polR12N(t),
    R12NX = polR12NX(t), R12NY = polR12NY(t), R32 = polR32(t), R23 = polR23(t),
    R21 = polR21(t), R21X = polR21X(t), R21Y = polR21Y(t), R01 = polR01(t), R01X = polR01X(t), R01Y = polR01Y(t);
const
    plA = polPlA(t), plB = polPlB(t), plC = polPlC(t), plD = polPlD(t), plE = polPlE(t), plF = polPlF(t),
    plG = polPlG(t), plH = polPlH(t), plI = polPlI(t), plJ = polPlJ(t), plK = polPlK(t), plL = polPlL(t),
    plM = polPlM(t), plN = polPlN(t), plO = polPlO(t), plP = polPlP(t);

//Добавить разметку страницы.
const content = document.getElementById("content");
const contentTag =
    pol3(null, planSil2, planSil1, planSilNach, 1) +
    pol3_1([[1, M1, G1], [2, M2, G2], [3, M3, G3], [4, M4, G4], [5, M5, G5],
            ["шт", MSHT, GSHT], ["пр", MPR, GPR], ["жид", MZH, GZH]],
        [[2, 2, M2, uskS2, fin2], [3, 3, M3, uskS3, fin3], [4, 4, M4, uskS4, fin4], [5, 5, M5, uskS5, fin5],
            ["шт", "D", MSHT, uskD, finsht], ["пр", "F", MPR, uskF, finpr], ["жид", "D", MZH, uskD, finzh]],
        [[2, JS2, uskE2, min2], [3, JS3, uskE3, min3], [4, JS4, uskE4, min4], [5, JS5, uskE5, min5]]) +
    pol3_2([
        polRasschReak([0, 5, "E 5", "τ"], [
            [momR05, "R 05 τ", "a", R05T, plA],
            [momFIn5, "Φ 5", "b", FIn5, plB],
            [momG5, "G 5", "c", G5, plC]
        ], [[min5, 5]]),
        polRasschReak([3, 4, "E 4", "τ"], [
            [momR34, "R 34 τ", "d", R34T, plD],
            [momFIn4, "Φ 4", "e", FIn4, plE],
            [momG4, "G 4", "f", G4, plF],
            [momFInSht, "Φ шт", "g", FInSht, plG],
            [momGSht, "G шт", "g", GSHT, plG],
            [momFInPr, "Φ пр", "h", FInPr, plH],
            [momGPr, "G пр", "i", GPR, plI],
            [momFInZh, "Φ жид", "g", FInZh, plG],
            [momGZh, "G жид", "g", GZH, plG],
        ], [[min4, 4]]),
        polPostrCepVekIzPol(["R 05 τ", "Φ 5", "G 5", "Φ 4", "G 4", "Φ шт",
            "G шт", "Φ пр", "G пр", "Φ жид", "G жид", "R 34 τ"], "postr_cep2"),
        polZamkCep2Zv2Vek("34 n", "05 n", ["R 05 τ", "Φ 5", "G 5", "Φ 4",
            "G 4", "Φ шт", "G шт", "Φ пр", "G пр", "Φ жид", "G жид", "R 34 τ"], "zamk_gr2"),
        polPolnReak(0, 5, "zamk_zv05", true),
        polPolnReak(3, 4, "zamk_zv34"),
        polZamkCep2Zv1Vek(4, 5, ["Φ 4", "G 4", "Φ шт",
            "G шт", "Φ пр", "G пр", "Φ жид", "G жид", "R 34"], ["R 05", "Φ 5", "G 5"], "zamk_zv45", true)
    ]) +
    pol3_3([
        ["05 n", "plr05n", "mur21", R05N],
        ["05", "plr05", "mur22", R05],
        ["34 n", "plr34n", "mur23", R34N],
        ["34", "plr34", "mur24", R34],
        ["45", "plr45", "mur25", R45],
        ["54", "plr54", "mur26", R54, true],
    ]) +
    pol3_4([
        polOprObrReak([[4, 3]]),
        polRasschReak([0, 3, "B 3", "τ"], [
            [momR03, "R 03 τ", "j", R03T, plJ],
            [momFIn3, "Φ 3", "k", FIn3, plK],
            [momG3, "G 3", "l", G3, plL]
        ], [[min3, 3]]),
        polRasschReak([1, 2, "B 2", "τ"], [
            [momR12, "R 12 τ", "m", R12T, plM],
            [momFIn2, "Φ 2", "n", FIn2, plN],
            [momG2, "G 2", "o", G2, plO]
        ], [[min2, 2]]),
        polPostrCepVekIzPol(["R 03 τ", "Φ 3", "G 3", "R 43", "Φ 2", "G 2", "R 12 τ"], "postr_cep1"),
        polZamkCep2Zv2Vek("12 n", "03 n", ["R 03 τ", "Φ 3", "G 3", "R 43", "Φ 2", "G 2", "R 12 τ"], "zamk_gr1"),
        polPolnReak(0, 3, "zamk_zv03", true),
        polPolnReak(1, 2, "zamk_zv12"),
        polZamkCep2Zv1Vek(2, 3, ["Φ 2", "G 2", "R 12"], ["R 03", "Φ 3", "G 3", "R 43"], "zamk_zv23", true)
    ]) +
    pol3_5([
        ["03 n", "plr03n", "mur11", R03N],
        ["03", "plr03", "mur12", R03],
        ["12 n", "plr12n", "mur13", R12N],
        ["12", "plr12", "mur14", R12],
        ["23", "plr23", "mur15", R23],
        ["32", "plr32", "mur16", R32, true],
    ]) +
    pol3_6([
        polOprObrReak([[2, 1]]),
        polPostrCepVekIzPol(["R 21", "G 1"], "postr_cepnach"),
        polZamkCep(0, 1, ["R 21", "G 1"], "zamk_nach", true)
    ]) +
    pol3_7([
        ["21", "plr21", "murnach1", R21],
        ["01", "plr01", "murnach2", R01, true]
    ]) +
    pol3_8([[momR21, "R 21", "p", R21, plP]], momur);
content.innerHTML = contentTag;


//Рисунки планов сил скоростей.
const
    planSil2Ris = elNaStr("plan-sil2-ris"), planSil21 = elNaStr("plan-sil2-ris1"),
    planSil22 = elNaStr("plan-sil2-ris2"),
    planSil1Ris = elNaStr("plan-sil1-ris"), planSil11 = elNaStr("plan-sil1-ris1"),
    planSil12 = elNaStr("plan-sil1-ris2"),
    planSilNachRis = elNaStr("plan-silnach-ris"), planSilNach1 = elNaStr("plan-silnach-ris1"),
    planSilNach2 = elNaStr("plan-silnach-ris2");
const
    risR05T = elNaStr("sil_R05T"), risR05N = elNaStr("sil_R05N"), risR05 = elNaStr("sil_R05"),
    risFI5 = elNaStr("sil_FI5"), risG5 = elNaStr("sil_G5"), risFI4 = elNaStr("sil_FI4"),
    risG4 = elNaStr("sil_G4"), risFISht = elNaStr("sil_FISHT"), risGSht = elNaStr("sil_GSHT"),
    risFIPr = elNaStr("sil_FIPR"), risGPr = elNaStr("sil_GPR"), risFIZh = elNaStr("sil_FIZH"),
    risGZh = elNaStr("sil_GZH"), risR34T = elNaStr("sil_R34T"), risR34N = elNaStr("sil_R34N"),
    risR34 = elNaStr("sil_R34"), risR45 = elNaStr("sil_R45"),


    risR03T = elNaStr("sil_R03T"), risFI3 = elNaStr("sil_FI3"), risG3 = elNaStr("sil_G3"), risR43 = elNaStr("sil_R43"),
    risFI2 = elNaStr("sil_FI2"), risG2 = elNaStr("sil_G2"), risR12T = elNaStr("sil_R12T"),
    risR12N = elNaStr("sil_R12N"), risR03N = elNaStr("sil_R03N"), risR03 = elNaStr("sil_R03"),
    risR12 = elNaStr("sil_R12"), risR23 = elNaStr("sil_R23"),
    risR21 = elNaStr("sil_R21"), risG1 = elNaStr("sil_G1"), risR01 = elNaStr("sil_R01");
// Поля ввода масштабных коэффициентов.
const muf2vvod = elNaStr("muf2vvod"), muf1vvod = elNaStr("muf1vvod"), mufnachvvod = elNaStr("mufnachvvod");


//Активировать пункты на странице.
aktInterPu(planSil2Ris, [
    ["postr_cep2", [risR05T, risFI5, risG5, risFI4, risG4, risFISht, risGSht, risFIPr, risGPr, risFIZh, risGZh, risR34T]],
    ["vekR05τ", [risR05T]],
    ["vekΦ5", [risFI5]],
    ["vekG5", [risG5]],
    ["vekΦ4", [risFI4]],
    ["vekG4", [risG4]],
    ["vekΦшт", [risFISht]],
    ["vekGшт", [risGSht]],
    ["vekΦпр", [risFIPr]],
    ["vekGпр", [risGPr]],
    ["vekΦжид", [risFIZh]],
    ["vekGжид", [risGZh]],
    ["vekR34τ", [risR34T]],
    ["zamk_gr2", [risR34N, risR05N]],
    ["zamk_zv05", [risR05]],
    ["zamk_zv34", [risR34]],
    ["zamk_zv45", [risR45]]
], true);

aktInterPu(planSil1Ris, [
    ["postr_cep1", [risR03T, risFI3, risG3, risR43, risFI2, risG2, risR12T]],
    ["vekR03τ", [risR03T]],
    ["vekΦ3", [risFI3]],
    ["vekG3", [risG3]],
    ["vekR43", [risR43]],
    ["vekΦ2", [risFI2]],
    ["vekG2", [risG2]],
    ["vekR12τ", [risR12T]],
    ["zamk_gr1", [risR12N, risR03N]],
    ["zamk_zv03", [risR03]],
    ["zamk_zv12", [risR12]],
    ["zamk_zv23", [risR23]]
], true);

aktInterPu(planSilNachRis, [
    ["postr_cepnach", [risR21, risG1]],
    ["vekR21", [risR21]],
    ["vekG1", [risG1]],
    ["zamk_nach", [risR01]]
], true);

//Задать масштабные коэффициенты планов сил и длины векторов сил на планах в тексте.
function zadMKF2() {
    zadMuSil(2, muf2vvod.value, [["plr05n", R05N], ["plr05", R05], ["plr34n", R34N], ["plr34", R34], ["plr45", R45], ["plr54", R54]]);
}

function zadMKF1() {
    zadMuSil(1, muf1vvod.value, [["plr03n", R03N], ["plr03", R03], ["plr12n", R12N], ["plr12", R12], ["plr23", R23], ["plr32", R32]]);
}

function zadMKFNach() {
    zadMuSil("nach", mufnachvvod.value, [["plr21", R21], ["plr01", R01]]);
}

//Задать планы сил на странице.
zadPlNaStrZamk(
    [R05TX, FIn5X, FIn4X, FInPrX, R34TX, R34NX], [R05TY, FIn5Y, G5, FIn4Y, G4, FInSht, GSHT, FInPrY, GPR, FInZh, GZH, R34TY, R34NY], 500,
    planSil2Ris, planSil21, planSil22,
    [[risR05T, R05TX, R05TY, null, [{ob: "R05", ris: risR05, nach: false}]], [risFI5, FIn5X, FIn5Y],
        [risG5, 0, G5, null, [{ob: "R45", ris: risR45, nach: true}]], [risFI4, FIn4X, FIn4Y], [risG4, 0, G4],
        [risFISht, 0, FInSht], [risGSht, 0, GSHT], [risFIPr, FInPrX, FInPrY], [risGPr, 0, GPR], [risFIZh, 0, FInZh],
        [risGZh, 0, GZH], [risR34T, R34TX, R34TY, [{ob: "R34", ris: risR34, nach: true}], null],
        [risR34N, R34NX, R34NY, null, [{ob: "R34", ris: risR34, nach: false}]],
        [risR05N, R05NX, R05NY, [{ob: "R05", ris: risR05, nach: true}, {ob: "R45", ris: risR45, nach: false}], null]]);

zadPlNaStrZamk(
    [R03TX, FIn3X, R43X, FIn2X, R12TX, R12NX], [R03TY, FIn3Y, G3, R43Y, FIn2Y, G2, R12TY, R12NY], 500,
    planSil1Ris, planSil11, planSil12,
    [[risR03T, R03TX, R03TY, null, [{ob: "R03", ris: risR03, nach: false}]], [risFI3, FIn3X, FIn3Y], [risG3, 0, G3],
        [risR43, R43X, R43Y], [risFI2, FIn2X, FIn2Y, [{ob: "R32", ris: risR23, nach: false}], null],
        [risG2, 0, G2], [risR12T, R12TX, R12TY, [{ob: "R12", ris: risR12, nach: true}], null],
        [risR12N, R12NX, R12NY, null, [{ob: "R32", ris: risR23, nach: true}, {ob: "R12", ris: risR12, nach: false}]],
        [risR03N, R03NX, R03NY, [{ob: "R03", ris: risR03, nach: true}], null]]
);

zadPlNaStrZamk(
    [R21X], [R21Y, G1], 500,
    planSilNachRis, planSilNach1, planSilNach2,
    [[risR21, R21X, R21Y], [risG1, 0, G1], [risR01, R01X, R01Y]]
);

//Задать масштабные коэффициенты планов сил и длины векторов сил на планах при открытии страницы.
zadPole(muf2vvod, polTokMuF2());
zadPole(muf1vvod, polTokMuF1());
zadPole(mufnachvvod, polTokMuFNach());
zadMKF2();
zadMKF1();
zadMKFNach();

//Добавить обработчик событий на ввод масштабного коэффициента плана скоростей.
muf2vvod.addEventListener("input", function () {
    zadMKF2();
    zadPerVHran(tokMuF2, muf2vvod.value);
});

muf1vvod.addEventListener("input", function () {
    zadMKF1();
    zadPerVHran(tokMuF1, muf1vvod.value);
});

mufnachvvod.addEventListener("input", function () {
    zadMKFNach();
    zadPerVHran(tokMuFNach, mufnachvvod.value);
});
