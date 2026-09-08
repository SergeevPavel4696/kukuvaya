import {diSil, planSil2, planSil1, planSilNach} from "./ris.js";
import {
    polAD, polAS4, polE2, polE3, polE4, polFIn2, polFIn2X, polFIn2Y, polFIn4, polFIn4X, polFIn4Y, polFIn5,
    polG1, polG2, polG3, polG4, polG5, polMIn2, polMIn3, polMIn4, polMomFIn2, polMomFIn4, polMomG2, polMomG4,
    polMomP5, polMomR21, polMomUr, polP5, polPlA, polPlB, polPlC, polPlD, polPlF, polPlI, polPlH, polPlG,
    polPlE, polPlK, polR01, polR01X, polR01Y, polR03, polR12, polR21, polR21X, polR21Y, polR32, polR34,
    polR34X, polR34Y, polR43X, polR43Y, polR45, polR54, polR12T, polPlJ, polR12N, polR12TX, polR12TY,
    polR12NX, polR12NY, polMomFIn5, polMomG5, polMomR05, polMomFInMat, polMomGMat, polMMat, polGMat,
    polFIn3, polFInMat, polAS2, polAS3, polMomR03t, polMomFIn3, polMomG3, polMomR12t, polR05, polFIn5X,
    polFInMatX, polR03T, polR03TX, polR03TY, polR03N, polR03NX, polR03NY, polFIn3X, polFIn3Y, polR23
} from "./analiz.js";
import {aktInterPu, zadMuSil, zadPerVHran, zadPlNaStrZamk, zadPole} from "../utils.js";
import {
    polTekVr, polTokJs2, polTokJs3, polTokJs4, polTokM1, polTokM2, polTokM3, polTokM4,
    polTokM5, polTokMuF1, polTokMuF2, polTokMuFNach, tokMuF1, tokMuF2, tokMuFNach
} from "./local_storage.js";
import {
    pol3, pol3_1, pol3_2, pol3_3, pol3_4, pol3_5, pol3_6, polPostrCepVekIzPol, polOprObrReak,
    polRasschReak, polZamkCep, polZamkCep2Zv1Vek, pol3_7, pol3_8, polPolnReak, polZamkCep2Zv2Vek
} from "../pol-tag-3sil.js";
import {elNaStr} from "../../../scripts/utils.js";


const t = polTekVr();
const m1 = polTokM1(), m2 = polTokM2(), m3 = polTokM3(), m4 = polTokM4(), m5 = polTokM5(), mmat = polMMat(t);
const js2 = polTokJs2(), js3 = polTokJs3(), js4 = polTokJs4();
const g1 = polG1(true), g2 = polG2(true), g3 = polG3(true),
    g4 = polG4(true), g5 = polG5(true), gmat = polGMat(t, true);
const fin2 = polFIn2(t), fin3 = polFIn3(t), fin4 = polFIn4(t), fin5 = polFIn5(t), finmat = polFInMat(t);
const min2 = polMIn2(t), min3 = polMIn3(t), min4 = polMIn4(t);
const uskE2 = polE2(t), uskE3 = polE3(t), uskE4 = polE4(t),
    uskS2 = polAS2(t), uskS3 = polAS3(t), uskS4 = polAS4(t), uskD = polAD(t);
const
    momR05 = polMomR05(t), momP5 = polMomP5(t), momFIn5 = polMomFIn5(t), momFInMat = polMomFInMat(t),
    momG5 = polMomG5(t), momGMat = polMomGMat(t), momFIn4 = polMomFIn4(t), momG4 = polMomG4(t),
    momR03 = polMomR03t(t), momFIn3 = polMomFIn3(t), momG3 = polMomG3(t),
    momR12 = polMomR12t(t), momFIn2 = polMomFIn2(t), momG2 = polMomG2(t),
    momR21 = polMomR21(t), momur = polMomUr(t);
const
    R05 = polR05(t), R45 = polR45(t), R54 = polR54(t), R34X = polR34X(t), R34Y = polR34Y(t), R34 = polR34(t),
    P5 = polP5(t), FIn5 = polFIn5X(t), FInMat = polFInMatX(t), G5 = polG5(true), GMat = polGMat(t, true),
    FIn4 = polFIn4(t), FIn4X = polFIn4X(t), FIn4Y = polFIn4Y(t), G4 = polG4(true),
    R43X = polR43X(t), R43Y = polR43Y(t), R03T = polR03T(t), R03TX = polR03TX(t), R03TY = polR03TY(t),
    R03N = polR03N(t), R03NX = polR03NX(t), R03NY = polR03NY(t), R03 = polR03(t), R12T = polR12T(t),
    R12TX = polR12TX(t), R12TY = polR12TY(t), R12N = polR12N(t), R12NX = polR12NX(t), R12NY = polR12NY(t),
    R12 = polR12(t), R32 = polR32(t), R23 = polR23(t), FIn3 = polFIn3(t), FIn3X = polFIn3X(t), FIn3Y = polFIn3Y(t),
    G3 = polG3(true), FIn2 = polFIn2(t), FIn2X = polFIn2X(t), FIn2Y = polFIn2Y(t), G2 = polG2(true),
    R21X = polR21X(t), R21Y = polR21Y(t), R21 = polR21(t), R01 = polR01(t), R01X = polR01X(t), R01Y = polR01Y(t),
    G1 = polG1(true);
const
    plA = polPlA(t), plB = polPlB(t), plC = polPlC(t), plD = polPlD(t), plE = polPlE(t), plF = polPlF(t),
    plG = polPlG(t), plH = polPlH(t), plI = polPlI(t), plJ = polPlJ(t), plK = polPlK(t);

//Добавить разметку страницы.
const content = document.getElementById("content");
const contentTag =
    pol3(diSil, planSil2, planSil1, planSilNach, 1) +
    pol3_1([[1, m1, g1], [2, m2, g2], [3, m3, g3], [4, m4, g4], [5, m5, g5], ["мат", mmat, gmat]],
        [[2, 2, m2, uskS2, fin2], [3, 3, m3, uskS3, fin3], [4, 4, m4, uskS4, fin4], [5, "D", m5, uskD, fin5], ["мат", "D", mmat, uskD, finmat]],
        [[2, js2, uskE2, min2], [3, js3, uskE3, min3], [4, js4, uskE4, min4]]) +
    pol3_2([
        polRasschReak([0, 5, "B"], [
            [momR05, "R 05", "a", R05, plA],
            [momP5, "P 5", "b", P5, plB],
            [momFIn5, "Φ 5", "b", FIn5, plB],
            [momG5, "G 5", "a", G5, plA],
            [momFInMat, "Φ мат", "b", FInMat, plB],
            [momGMat, "G мат", "a", GMat, plA],
            [momFIn4, "Φ 4", "c", FIn4, plC],
            [momG4, "G 4", "d", G4, plD]
        ], [[min4, 4]]),
        polPostrCepVekIzPol(["R 05", "P 5", "Φ 5", "G 5", "Φ мат", "G мат", "Φ 4", "G 4"], "postr_cep2"),
        polZamkCep(3, 4, ["R 05", "P 5", "Φ 5", "G 5", "Φ мат", "G мат", "Φ 4", "G 4"], "zamk_gr2"),
        polZamkCep2Zv1Vek(4, 5, ["Φ 4", "G 4", "R 34"], ["R 05", "P 5", "Φ 5", "G 5", "Φ мат", "G мат"], "zamk_zv45", true)
    ]) +
    pol3_3([
        ["34", "plr34", "mur21", R34],
        ["45", "plr45", "mur22", R45],
        ["54", "plr54", "mur23", R54, true],
    ]) +
    pol3_4([
        polOprObrReak([[4, 3]]),
        polRasschReak([0, 3, "B 3", "τ"], [
            [momR03, "R 03 τ", "e", R03T, plE],
            [momFIn3, "Φ 3", "f", FIn3, plF],
            [momG3, "G 3", "g", G3, plG]
        ], [[min3, 3]]),
        polRasschReak([1, 2, "B 2", "τ"], [
            [momR12, "R 12 τ", "h", R12T, plH],
            [momFIn2, "Φ 2", "i", FIn2, plI],
            [momG2, "G 2", "j", G2, plJ]
        ], [[min2, 2]]),
        polPostrCepVekIzPol(["R 03 τ", "Φ 3", "G 3", "R 43", "Φ 2", "G 2", "R 12 τ"], "postr_cep1"),
        polZamkCep2Zv2Vek("12 n", "03 n", ["R 03 τ", "Φ 3", "G 3", "R 43", "Φ 2", "G 2", "R 12 τ"], "zamk_gr1"),
        polPolnReak(0, 3, "zamk_zv03", true),
        polPolnReak(1, 2, "zamk_zv12"),
        polZamkCep2Zv1Vek(2, 3, ["Φ 2", "G 2", "R 12"], ["R 03", "Φ 3", "G 3", "R 43"], "zamk_zv23", true)
    ]) +
    pol3_5([
        ["12 n", "plr12n", "mur11", R12N],
        ["12", "plr12", "mur12", R12],
        ["03 n", "plr03n", "mur13", R03N],
        ["03", "plr03", "mur14", R03],
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
    pol3_8([[momR21, "R 21", "k", R21, plK]], momur);
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
    risR05 = elNaStr("sil_R05"), risP5 = elNaStr("sil_P5"), risFI5 = elNaStr("sil_FI5"), risG5 = elNaStr("sil_G5"),
    risFIMAT = elNaStr("sil_FIMAT"), risGMAT = elNaStr("sil_GMAT"), risFI4 = elNaStr("sil_FI4"),
    risG4 = elNaStr("sil_G4"), risR34 = elNaStr("sil_R34"), risR45 = elNaStr("sil_R45"),
    risR03T = elNaStr("sil_R03T"), risFI3 = elNaStr("sil_FI3"), risG3 = elNaStr("sil_G3"), risR43 = elNaStr("sil_R43"),
    risFI2 = elNaStr("sil_FI2"), risG2 = elNaStr("sil_G2"), risR12T = elNaStr("sil_R12T"),
    risR12N = elNaStr("sil_R12N"), risR03N = elNaStr("sil_R03N"), risR03 = elNaStr("sil_R03"),
    risR12 = elNaStr("sil_R12"), risR23 = elNaStr("sil_R23"),
    risR21 = elNaStr("sil_R21"), risG1 = elNaStr("sil_G1"), risR01 = elNaStr("sil_R01");
// Поля ввода масштабных коэффициентов.
const muf2vvod = elNaStr("muf2vvod"), muf1vvod = elNaStr("muf1vvod"), mufnachvvod = elNaStr("mufnachvvod");


//Активировать пункты на странице.
aktInterPu(planSil2Ris, [
    ["postr_cep2", [risR05, risP5, risFI5, risG5, risFIMAT, risGMAT, risFI4, risG4]],
    ["vekR05", [risR05]],
    ["vekP5", [risP5]],
    ["vekΦ5", [risFI5]],
    ["vekG5", [risG5]],
    ["vekΦмат", [risFIMAT]],
    ["vekGмат", [risGMAT]],
    ["vekΦ4", [risFI4]],
    ["vekG4", [risG4]],
    ["zamk_gr2", [risR34]],
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
    zadMuSil(2, muf2vvod.value, [["plr34", R23], ["plr45", R45], ["plr54", R54]]);
}

function zadMKF1() {
    zadMuSil(1, muf1vvod.value, [["plr12n", R12N], ["plr12", R12], ["plr03n", R03N], ["plr23", R23], ["plr32", R32], ["plr03", R03]]);
}

function zadMKFNach() {
    zadMuSil("nach", mufnachvvod.value, [["plr21", R21], ["plr01", R01]]);
}

//Задать планы сил на странице.
zadPlNaStrZamk(
    [P5, FIn5, FInMat, FIn4X], [R05, G5, GMat, FIn4Y, G4], 500,
    planSil2Ris, planSil21, planSil22,
    [[risR05, 0, R05, [{ob: "R45", ris: risR45, nach: false}], null], [risP5, P5, 0],
        [risFI5, FIn5, 0], [risG5, 0, G5], [risFIMAT, FInMat, 0], [risGMAT, 0, GMat, null, [{ob: "R45", ris: risR45, nach: true}]],
        [risFI4, FIn4X, FIn4Y], [risG4, 0, G4], [risR34, R34X, R34Y]]);

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
