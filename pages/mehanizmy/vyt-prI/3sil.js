import {diSil, planSil2, planSil1, planSilNach} from "./ris.js";
import {
    polAB, polAD, polAS2, polAS4, polE2, polE4, polFIn2, polFIn2X, polFIn2Y, polFIn3, polFIn3X, polFIn4, polFIn4X,
    polFIn4Y, polFIn5, polFIn5X, polG1, polG2, polG3, polG4, polG5, polMIn2, polMIn4, polMomFIn2, polMomFIn3,
    polMomFIn4, polMomFIn5, polMomG2, polMomG3, polMomG4, polMomG5, polMomP3, polMomP5, polMomR03, polMomR05,
    polMomR21, polMomR42, polMomUr, polP3, polP5, polPlA, polPlB, polPlC, polPlD, polPlE, polPlF, polPlG,
    polPlH, polPlI, polPlJ, polR01, polR01X, polR01Y, polR03, polR05, polR12, polR12X, polR12Y, polR21,
    polR21X, polR21Y, polR23, polR24, polR24X, polR24Y, polR32, polR42, polR42X, polR42Y, polR45, polR54
} from "./analiz.js";
import {aktInterPu, zadMuSil, zadPerVHran, zadPlNaStrZamk, zadPole} from "../utils.js";
import {
    polTekVr, polTokJs2, polTokJs4, polTokM1, polTokM2, polTokM3, polTokM4, polTokM5,
    polTokMuF1, polTokMuF2, polTokMuFNach, tokMuF1, tokMuF2, tokMuFNach
} from "./local_storage.js";
import {
    pol3, pol3_1, pol3_2, pol3_3, pol3_4, pol3_5, pol3_6, polPostrCepVekIzPol,
    polOprObrReak, polRasschReak, polZamkCep, polZamkCep2Zv1Vek, pol3_7, pol3_8
} from "../pol-tag-3sil.js";
import {elNaStr} from "../../../scripts/utils.js";


const t = polTekVr();
const m1 = polTokM1(), m2 = polTokM2(), m3 = polTokM3(), m4 = polTokM4(), m5 = polTokM5();
const js2 = polTokJs2(), js4 = polTokJs4();
const g1 = polG1(), g2 = polG2(), g3 = polG3(), g4 = polG4(), g5 = polG5();
const fin2 = polFIn2(t), fin3 = polFIn3(t), fin4 = polFIn4(t), fin5 = polFIn5(t);
const min2 = polMIn2(t), min4 = polMIn4(t);
const uskE2 = polE2(t), uskE4 = polE4(t), uskS2 = polAS2(t), uskB = polAB(t), uskS4 = polAS4(t), uskD = polAD(t);
const
    momR05 = polMomR05(t), momP5 = polMomP5(t), momFi5 = polMomFIn5(t), momG5 = polMomG5(t), momFi4 = polMomFIn4(t),
    momG4 = polMomG4(t),
    momR03 = polMomR03(t), momP3 = polMomP3(t), momFi3 = polMomFIn3(t), momG3 = polMomG3(t), momFi2 = polMomFIn2(t),
    momG2 = polMomG2(t), momR42 = polMomR42(t),
    momR21 = polMomR21(t), momur = polMomUr(t);
const
    R05 = polR05(t), R45 = polR45(t), R54 = polR54(t), P5 = polP5(t), FIn5 = polFIn5(t), FIn5X = polFIn5X(t),
    G5 = polG5(true), FIn4 = polFIn4(t), FIn4X = polFIn4X(t), FIn4Y = polFIn4Y(t), G4 = polG4(true),
    R24 = polR24(t), R24X = polR24X(t), R24Y = polR24Y(t),
    R03 = polR03(t), R23 = polR23(t), R32 = polR32(t), P3 = polP3(t), FIn3 = polFIn3(t), FIn3X = polFIn3X(t),
    G3 = polG3(true), FIn2 = polFIn2(t), FIn2X = polFIn2X(t), FIn2Y = polFIn2Y(t), G2 = polG2(true),
    R42 = polR42(t), R42X = polR42X(t), R42Y = polR42Y(t), R12 = polR12(t), R12X = polR12X(t), R12Y = polR12Y(t),
    R21 = polR21(t), R21X = polR21X(t), R21Y = polR21Y(t), G1 = polG1(true), R01 = polR01(t), R01X = polR01X(t),
    R01Y = polR01Y(t);
const
    plA = polPlA(t), plB = polPlB(t), plC = polPlC(t), plD = polPlD(t),
    plE = polPlE(t), plF = polPlF(t), plG = polPlG(t), plH = polPlH(t), plI = polPlI(t),
    plJ = polPlJ(t);

//Добавить разметку страницы.
const content = document.getElementById("content");
const contentTag =
    pol3(diSil, planSil2, planSil1, planSilNach, 1) +
    pol3_1([[1, m1, g1], [2, m2, g2], [3, m3, g3], [4, m4, g4], [5, m5, g5]],
        [[2, 2, m2, uskS2, fin2], [3, "B", m3, uskB, fin3], [4, 4, m4, uskS4, fin4], [5, "D", m5, uskD, fin5]],
        [[2, js2, uskE2, min2], [4, js4, uskE4, min4]]) +
    pol3_2([
        polRasschReak([0, 5, "C"], [
            [momR05, "R 05", "a", R05, plA],
            [momP5, "P 5", "b", P5, plB],
            [momFi5, "Φ 5", "b", FIn5, plB],
            [momG5, "G 5", "a", G5, plA],
            [momFi4, "Φ 4", "c", FIn4, plC],
            [momG4, "G 4", "d", G4, plD]
        ], [[min4, 4]]),
        polPostrCepVekIzPol(["R 05", "P 5", "Φ 5", "G 5", "Φ 4", "G 4"], "postr_cep2"),
        polZamkCep(2, 4, ["R 05", "P 5", "Φ 5", "G 5", "Φ 4", "G 4"], "zamk_gr2"),
        polZamkCep2Zv1Vek(4, 5, ["Φ 4", "G 4", "R 24"], ["R 05", "P 5", "Φ 5", "G 5"], "zamk_zv45", true)
    ]) +
    pol3_3([
        ["24", "plr24", "mur21", R24],
        ["45", "plr45", "mur22", R45],
        ["54", "plr54", "mur23", R54, true],
    ]) +
    pol3_4([
        polOprObrReak([[4, 2]]),
        polRasschReak([0, 3, "A"], [
            [momR03, "R 03", "e", R03, plE],
            [momP3, "P 3", "f", P3, plF],
            [momFi3, "Φ 3", "f", FIn3, plF],
            [momG3, "G 3", "e", G3, plE],
            [momFi2, "Φ 2", "g", FIn2, plG],
            [momG2, "G 2", "h", G2, plH],
            [momR42, "R 42", "i", R42, plI]
        ], [[min2, 2]]),
        polPostrCepVekIzPol(["R 03", "P 3", "Φ 3", "G 3", "Φ 2", "G 2", "R 42"], "postr_cep1"),
        polZamkCep(1, 2, ["R 03", "P 3", "Φ 3", "G 3", "Φ 2", "G 2", "R 42"], "zamk_gr1"),
        polZamkCep2Zv1Vek(2, 3, ["Φ 2", "G 2", "R 42", "R 12"], ["R 03", "P 3", "Φ 3", "G 3"], "zamk_zv23", true)
    ]) +
    pol3_5([
        ["12", "plr12", "mur11", R12],
        ["23", "plr23", "mur12", R23],
        ["32", "plr32", "mur13", R32, true],
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
    pol3_8([[momR21, "R 21", "j", R21, plJ]], momur);
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
    risFI4 = elNaStr("sil_FI4"), risG4 = elNaStr("sil_G4"), risR24 = elNaStr("sil_R24"), risR45 = elNaStr("sil_R45"),
    risR03 = elNaStr("sil_R03"), risP3 = elNaStr("sil_P3"), risFI3 = elNaStr("sil_FI3"), risG3 = elNaStr("sil_G3"),
    risFI2 = elNaStr("sil_FI2"), risG2 = elNaStr("sil_G2"), risR12 = elNaStr("sil_R12"), risR23 = elNaStr("sil_R23"),
    risR42 = elNaStr("sil_R42"), risR21 = elNaStr("sil_R21"), risG1 = elNaStr("sil_G1"), risR01 = elNaStr("sil_R01");
// Поля ввода масштабных коэффициентов.
const muf2vvod = elNaStr("muf2vvod"), muf1vvod = elNaStr("muf1vvod"), mufnachvvod = elNaStr("mufnachvvod");


//Активировать пункты на странице.
aktInterPu(planSil2Ris, [
    ["postr_cep2", [risR05, risP5, risFI5, risG5, risFI4, risG4]],
    ["vekR05", [risR05]],
    ["vekP5", [risP5]],
    ["vekΦ5", [risFI5]],
    ["vekG5", [risG5]],
    ["vekΦ4", [risFI4]],
    ["vekG4", [risG4]],
    ["zamk_gr2", [risR24]],
    ["zamk_zv45", [risR45]]
], true);

aktInterPu(planSil1Ris, [
    ["postr_cep1", [risR03, risP3, risFI3, risG3, risFI2, risG2, risR42]],
    ["vekR03", [risR03]],
    ["vekP3", [risP3]],
    ["vekΦ3", [risFI3]],
    ["vekG3", [risG3]],
    ["vekΦ2", [risFI2]],
    ["vekG2", [risG2]],
    ["vekR42", [risR42]],
    ["zamk_gr1", [risR12]],
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
    zadMuSil(2, muf2vvod.value, [["plr24", R24], ["plr45", R45], ["plr54", R54]]);
}

function zadMKF1() {
    zadMuSil(1, muf1vvod.value, [["plr12", R12], ["plr23", R23], ["plr32", R32]]);
}

function zadMKFNach() {
    zadMuSil("nach", mufnachvvod.value, [["plr21", R21], ["plr01", R01]]);
}

//Задать планы сил на странице.
zadPlNaStrZamk(
    [P5, FIn5X, FIn4X], [R05, G5, FIn4X, G4], 500,
    planSil2Ris, planSil21, planSil22,
    [[risR05, 0, R05, [{ob: "R45", ris: risR45, nach: true}], null], [risP5, P5, 0], [risFI5, FIn5X, 0], [risG5, 0, G5, null, [{ob: "R45", ris: risR45, nach: false}]],
        [risFI4, FIn4X, FIn4Y], [risG4, 0, G4], [risR24, R24X, R24Y]]);

zadPlNaStrZamk(
    [P3, FIn3X, FIn2X, R42X], [R03, G3, FIn2Y, G2, R42Y], 500,
    planSil1Ris, planSil11, planSil12,
    [[risR03, 0, R03, [{ob: "R23", ris: risR23, nach: true}], null], [risP3, P3, 0], [risFI3, FIn3X, 0], [risG3, 0, G3, null, [{ob: "R23", ris: risR23, nach: false}]],
        [risFI2, FIn2X, FIn2Y], [risG2, 0, G2], [risR42, R42X, R42Y], [risR12, R12X, R12Y]]);

zadPlNaStrZamk(
    [R21X], [R21Y, G1], 500,
    planSilNachRis, planSilNach1, planSilNach2, [[risR21, R21X, R21Y], [risG1, 0, G1], [risR01, R01X, R01Y]]);

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
