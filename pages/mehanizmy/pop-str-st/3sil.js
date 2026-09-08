import {diSil, planSil2, planSil1, planSilNach} from "./ris.js";
import {
    polAA1, polAD, polAS4, polE2, polE3, polE4, polFIn2, polFIn2X, polFIn2Y, polFIn4, polFIn4X, polFIn4Y, polFIn5,
    polG1, polG2, polG3, polG4, polG5, polMIn2, polMIn3, polMIn4, polMomFIn2, polMomFIn4, polMomG2, polMomG4,
    polMomP5, polMomR21, polMomR43, polMomR54X, polMomR54Y, polMomUr, polP5, polPlA, polPlB, polPlC, polPlD, polPlF,
    polPlI, polPlH, polPlG, polPlE, polPlK, polPlL, polPlM, polR01, polR01X, polR01Y, polR03, polR03X, polR03Y,
    polR12, polR21, polR21X, polR21Y, polR23, polR32, polR32X, polR32Y, polR34, polR34X, polR34Y, polR43, polR43X,
    polR43Y, polR45, polR45X, polR45Y, polR54, polR54X, polR54Y, polMomR12, polR12T, polPlJ, polPlN, polR12N,
    polR12TX, polR12TY, polR12NX, polR12NY, polMomRL1L2, polMomRL2L1, polRL1, polRL2, polAS3, polFIn3, polFIn5X,
    polMomR45L1, polMomR45L2, polMomG5L1, polMomG5L2, polMomFIn3, polMomG3, polPlO, polPlP, polPlQ, polFIn3X, polFIn3Y
} from "./analiz.js";
import {aktInterPu, zadMuSil, zadPerVHran, zadPlNaStrZamk, zadPole} from "../utils.js";
import {
    polTekVr, polTokJs2, polTokJs3, polTokJs4, polTokM1, polTokM2, polTokM3, polTokM4, polTokM5,
    polTokMuF1, polTokMuF2, polTokMuFNach, tokMuF1, tokMuF2, tokMuFNach
} from "./local_storage.js";
import {
    pol3, pol3_1, pol3_2, pol3_3, pol3_4, pol3_5, pol3_6, polPostrCepVekIzPol,
    polOprObrReak, polRasschReak, polZamkCep, polZamkCep2Zv1Vek, pol3_7, pol3_8,
    polRasschGorVertReak, polZamkCep1Zv2Vek, polZamkCep1Zv1Vek, polPolnReak
} from "../pol-tag-3sil.js";
import {elNaStr} from "../../../scripts/utils.js";
import {WFInd1} from "../../web-formula.js";


const t = polTekVr();
const m1 = polTokM1(), m2 = polTokM2(), m3 = polTokM3(), m4 = polTokM4(), m5 = polTokM5();
const js2 = polTokJs2(), js3 = polTokJs3(), js4 = polTokJs4();
const g1 = polG1(), g2 = polG2(), g3 = polG3(), g4 = polG4(), g5 = polG5();
const fin2 = polFIn2(t), fin3 = polFIn3(t), fin4 = polFIn4(t), fin5 = polFIn5(t);
const min2 = polMIn2(t), min3 = polMIn3(t), min4 = polMIn4(t);
const uskE2 = polE2(t), uskE3 = polE3(t), uskE4 = polE4(t), uskA1 = polAA1(t), uskS3 = polAS3(t), uskS4 = polAS4(t), uskD = polAD(t);
const
    momRL1L2 = polMomRL1L2(t), momRL2L1 = polMomRL2L1(t), momP5 = polMomP5(t), momG5L1 = polMomG5L1(t), momG5L2 = polMomG5L2(t), momR45L1 = polMomR45L1(t),
    momR45L2 = polMomR45L2(t), momR54X = polMomR54X(t), momR54Y = polMomR54Y(t),
    momFIn4 = polMomFIn4(t), momG4 = polMomG4(t),
    momR43 = polMomR43(t), momFIn3 = polMomFIn3(t), momG3 = polMomG3(t), momFIn2 = polMomFIn2(t), momG2 = polMomG2(t), momR12 = polMomR12(t),
    momR21 = polMomR21(t), momur = polMomUr(t);
const
    R54X = polR54X(t), R54Y = polR54Y(t), R54 = polR54(t), R45X = polR45X(t), R45Y = polR45Y(t), R45 = polR45(t),
    R34X = polR34X(t), R34Y = polR34Y(t), R34 = polR34(t), R05L1 = polRL1(t), R05L2 = polRL2(t), P5 = polP5(t),
    FIn5X = polFIn5X(t), G5 = polG5(true), FIn4 = polFIn4(t), FIn4X = polFIn4X(t), FIn4Y = polFIn4Y(t),
    G4 = polG4(true), R43X = polR43X(t), R43Y = polR43Y(t), R43 = polR43(t), R23 = polR23(t), R03X = polR03X(t),
    R03Y = polR03Y(t), R03 = polR03(t), R32X = polR32X(t), R32Y = polR32Y(t), R32 = polR32(t), R12 = polR12(t),
    R12T = polR12T(t), R12TX = polR12TX(t), R12TY = polR12TY(t), R12N = polR12N(t), R12NX = polR12NX(t),
    R12NY = polR12NY(t), FIn3 = polFIn3(t), FIn3X = polFIn3X(t), FIn3Y = polFIn3Y(t), G3 = polG3(true),
    FIn2 = polFIn2(t), FIn2X = polFIn2X(t), FIn2Y = polFIn2Y(t), G2 = polG2(true), R21X = polR21X(t), R21Y = polR21Y(t),
    R21 = polR21(t), G1 = polG1(true), R01 = polR01(t), R01X = polR01X(t), R01Y = polR01Y(t);
const
    plA = polPlA(t), plB = polPlB(t), plC = polPlC(t), plD = polPlD(t), plE = polPlE(t), plF = polPlF(t),
    plG = polPlG(t), plH = polPlH(t), plI = polPlI(t), plJ = polPlJ(t), plK = polPlK(t), plL = polPlL(t),
    plM = polPlM(t), plN = polPlN(t), plO = polPlO(t), plP = polPlP(t), plQ = polPlQ(t);

//Добавить разметку страницы.
const content = document.getElementById("content");
const contentTag =
    pol3(diSil, planSil2, planSil1, planSilNach, 1) +
    pol3_1([[1, m1, g1], [2, m2, g2], [3, m3, g3], [4, m4, g4], [5, m5, g5]],
        [[2, 2, m2, uskA1, fin2], [3, 3, m3, uskS3, fin3], [4, 4, m4, uskS4, fin4], [5, "D", m5, uskD, fin5]],
        [[2, js2, uskE2, min2], [3, js3, uskE3, min3], [4, js4, uskE4, min4]]) +
    pol3_2([
        polRasschGorVertReak([4, 5, "гор"], [
            [R45X, "R 45 гор"],
            [P5, "P 5"],
            [FIn5X, "Φ 5"]
        ]),
        polOprObrReak([[5, 4, "гор"]]),
        polRasschReak([5, 4, "C", "верт"], [
            [momR54X, "R 54 верт", "a", R54Y, plA],
            [momR54Y, "R 54 гор", "b", R54X, plB],
            [momFIn4, "Φ 4", "c", FIn4, plC],
            [momG4, "G 4", "d", G4, plD]
        ], [[min4, 4]], true),
        polOprObrReak([[4, 5, "верт"]]),
        polRasschReak([0, 5, "L" + WFInd1(2), "L" + WFInd1(1)], [
            [momRL1L2, "R 05 L" + WFInd1(1), "e", R05L1, plE],
            [momP5, "P 5", "f", P5, plF],
            [momR45L2, "R 45 верт", "g", R45Y, plG],
            [momG5L2, "G 5", "h", G5, plH]
        ]),
        polRasschReak([0, 5, "L" + WFInd1(1), "L" + WFInd1(2)], [
            [momRL2L1, "R 05 L" + WFInd1(2), "e", R05L2, plE],
            [momP5, "P 5", "f", P5, plF],
            [momR45L1, "R 45 верт", "i", R45Y, plI],
            [momG5L1, "G 5", "j", G5, plJ],
        ]),
        polPostrCepVekIzPol(["R 05 L1", "P 5", "Φ 5", "G 5", "R 05 L2", "Φ 4", "G 4"], "postr_cep2"),
        polZamkCep(3, 4, ["R 05 L" + WFInd1(1), "P 5", "Φ 5", "G 5", "R 05 L" + WFInd1(2), "Φ 4", "G 4"], "zamk_gr2"),
        polZamkCep2Zv1Vek(4, 5, ["Φ 4", "G 4", "R 34"], ["R 05 L" + WFInd1(1), "P 5", "Φ 5", "G 5", "R 05 L" + WFInd1(2)], "zamk_zv45", true)
    ]) +
    pol3_3([
        ["34", "plr34", "mur21", R34],
        ["45", "plr45", "mur22", R45],
        ["54", "plr54", "mur23", R54, true],
    ]) +
    pol3_4([
        polOprObrReak([[4, 3]]),
        polRasschReak([1, 2, "B", "τ"], [
            [momR12, "R 12 τ", "k", R12T, plK],
            [momR43, "R 43", "l", R43, plL],
            [momFIn3, "Φ 3", "m", FIn3, plM],
            [momG3, "G 3", "n", G3, plN],
            [momFIn2, "Φ 2", "o", FIn2, plO],
            [momG2, "G 2", "p", G2, plP]
        ], [[min3, 3], [min2, 2]]),
        polPostrCepVekIzPol(["R 43", "Φ 3", "G 3", "Φ 2", "G 2", "R 12 τ"], "postr_cep1"),
        polZamkCep1Zv2Vek(2, 1, 3, "12 n", "32", ["Φ 2", "G 2", "R 12 τ"], "zamk_zv2"),
        polOprObrReak([[2, 3]]),
        polZamkCep1Zv1Vek(0, 3, ["R 43", "Φ 3", "G 3", "R 23"], "zamk_zv3"),
        polPolnReak(1, 2, "zamk_zv12", null, true)
    ]) +
    pol3_5([
        ["12 n", "plr12n", "mur11", R12N],
        ["12", "plr12", "mur12", R12],
        ["23", "plr23", "mur13", R23],
        ["32", "plr32", "mur14", R32],
        ["03", "plr03", "mur15", R03, true],
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
    pol3_8([[momR21, "R 21", "q", R21, plQ]], momur);
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
    risR05L1 = elNaStr("sil_R05L1"), risR05L2 = elNaStr("sil_R05L2"), risP5 = elNaStr("sil_P5"),
    risFI5 = elNaStr("sil_FI5"), risG5 = elNaStr("sil_G5"), risFI4 = elNaStr("sil_FI4"), risG4 = elNaStr("sil_G4"),
    risR34 = elNaStr("sil_R34"), risR54 = elNaStr("sil_R54"), risR43 = elNaStr("sil_R43"), risR03 = elNaStr("sil_R03"),
    risFI3 = elNaStr("sil_FI3"), risG3 = elNaStr("sil_G3"), risFI2 = elNaStr("sil_FI2"), risG2 = elNaStr("sil_G2"),
    risR12 = elNaStr("sil_R12"), risR12T = elNaStr("sil_R12T"), risR12N = elNaStr("sil_R12N"),
    risR32 = elNaStr("sil_R32"), risR21 = elNaStr("sil_R21"), risG1 = elNaStr("sil_G1"), risR01 = elNaStr("sil_R01");
// Поля ввода масштабных коэффициентов.
const muf2vvod = elNaStr("muf2vvod"), muf1vvod = elNaStr("muf1vvod"), mufnachvvod = elNaStr("mufnachvvod");


//Активировать пункты на странице.
aktInterPu(planSil2Ris, [
    ["postr_cep2", [risR05L1, risP5, risFI5, risG5, risR05L2, risFI4, risG4]],
    ["vekR05L1", [risR05L1]],
    ["vekP5", [risP5]],
    ["vekΦ5", [risFI5]],
    ["vekG5", [risG5]],
    ["vekR05L2", [risR05L2]],
    ["vekΦ4", [risFI4]],
    ["vekG4", [risG4]],
    ["zamk_gr2", [risR34]],
    ["zamk_zv45", [risR54]]
], true);

aktInterPu(planSil1Ris, [
    ["postr_cep1", [risR43, risFI3, risG3, risFI2, risG2, risR12T]],
    ["vekR43", [risR43]],
    ["vekΦ3", [risFI3]],
    ["vekG3", [risG3]],
    ["vekΦ2", [risFI2]],
    ["vekG2", [risG2]],
    ["vekR12τ", [risR12T]],
    ["zamk_zv2", [risR32, risR12N]],
    ["zamk_zv3", [risR03]],
    ["zamk_zv12", [risR12]]
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
    zadMuSil(1, muf1vvod.value, [["plr12n", R12N], ["plr12", R12], ["plr23", R23], ["plr32", R32], ["plr03", R03]]);
}

function zadMKFNach() {
    zadMuSil("nach", mufnachvvod.value, [["plr21", R21], ["plr01", R01]]);
}

//Задать планы сил на странице.
zadPlNaStrZamk(
    [P5, FIn5X, FIn4X], [R05L1, G5, R05L2, FIn4Y, G4], 500,
    planSil2Ris, planSil21, planSil22, [
        [risR05L1, 0, R05L1, [{ob: "R45", ris: risR54, nach: false}], null],
        [risP5, P5, 0],
        [risFI5, FIn5X, 0],
        [risG5, 0, G5],
        [risR05L2, 0, R05L2, null, [{ob: "R45", ris: risR54, nach: true}]],
        [risFI4, FIn4X, FIn4Y],
        [risG4, 0, G4],
        [risR34, R34X, R34Y]
    ]);

zadPlNaStrZamk(
    [R43X, FIn3X, FIn2X, R12TX, R12NX, R32X], [R43Y, FIn3Y, G3, FIn2Y, G2, R12TY, R12NY, R32Y], 500,
    planSil1Ris, planSil11, planSil12, [
        [risR43, R43X, R43Y],
        [risFI3, FIn3X, FIn3Y],
        [risG3, 0, G3],
        [risFI2, FIn2X, FIn2Y, [{ob: "R32", ris: risR32, nach: false}], null],
        [risG2, 0, G2],
        [risR12T, R12TX, R12TY, [{ob: "R12", ris: risR12, nach: true}], null],
        [risR12N, R12NX, R12NY, null, [{ob: "R32", ris: risR32, nach: true}, {ob: "R12", ris: risR12, nach: false}]],
        [risR03, R03X, R03Y]]
);


zadPlNaStrZamk(
    [R21X], [R21Y, G1], 500,
    planSilNachRis, planSilNach1, planSilNach2,
    [[risR21, R21X, R21Y], [risG1, 0, G1], [risR01, R01X, R01Y]]);

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
