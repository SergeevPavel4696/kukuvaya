import {pol4, pol4_1, pol4_2, pol4_3, pol4_4, pol4_5, pol4_6} from "../pol-tag-4din.js";
import {
    polTokJs1, polTokJs2, polTokJs4, polTokK, polTokM2, polTokM4, polTokM5, polTokMuDE,
    polTokMuFI1, polTokMuFI2, polTokMuJP, polTokMuMP, polTokNerav, polTokOtrDe, polTekVr,
    tokMuDe, tokMuFi1, tokMuFi2, tokMuJp, tokMuMp, tokOtrDe, polTokJs3, polTokJsDv,
} from "./local_storage.js";
import {pol4Znach, pol4ZnachVek, polDMahSr, polJMah, zadPerVHran, zadPole} from "../utils.js";
import {
    polVS2, polVS4, polW1, polW2, polW4, polG2, polG4, polP5, polUgG2VS2, polUgG4VS4, polJp,
    polMp, polMpMass, polMdv, polUgPsi, polG5, polW3, polWDv, polVE, polUgG5VE, polUgP5VE
} from "./analiz.js";
import {elNaStr, elNaStrText} from "../../../scripts/utils.js";


//Текущее время.
const t = polTekVr();
//Количество исследуемых положений.
const kol = polTokK();
//Массы и моменты инерции звеньев.
const
    m2 = pol4Znach(polTokM2()), m4 = pol4Znach(polTokM4()), m5 = pol4Znach(polTokM5()),
    js1 = pol4Znach(polTokJs1()), js2 = pol4Znach(polTokJs2()), js3 = pol4Znach(polTokJs3()),
    js4 = pol4Znach(polTokJs4()), jsdv = pol4Znach(polTokJsDv());
//Скорости и угловые скорости звеньев.
const
    skS2 = pol4Znach(polVS2(t)), skS4 = pol4Znach(polVS4(t)), skE = pol4Znach(polVE(t)),
    skW1ch = polW1(t), skW1 = pol4Znach(skW1ch), skW2 = pol4Znach(polW2(t)),
    skW3 = pol4Znach(polW3(t)), skW4 = pol4Znach(polW4(t)), skWDv = pol4Znach(polWDv(t));
//Веса звеньев и сила полезного сопротивления.
const g2 = pol4Znach(polG2()), g4 = pol4Znach(polG4()), g5 = pol4Znach(polG5()), p5 = pol4Znach(polP5(t));
//Углы между силами и скоростями.
const
    g2vs2 = pol4Znach(polUgG2VS2(t)), g4vs4 = pol4Znach(polUgG4VS4(t)),
    g5ve = pol4Znach(polUgG5VE(t)), p5ve = pol4Znach(polUgP5VE(t));
//Приведенные момент инерции, момент сил, движущий момент.
const Jp = pol4Znach(polJp(t)), Mp = pol4ZnachVek(polMp(t)), mpMass = polMpMass(), mDv = pol4ZnachVek(polMdv());
//Неравномерность движения механизма.
const nerch = polTokNerav(), ner = pol4Znach(nerch);


//Добавить разметку страницы.
const content = document.getElementById("content");
const contentTag =
    pol4() +
    pol4_1(
        [[2, 2, m2, skS2], [4, 4, m4, skS4], [5, "E", m5, skE]],
        [[1, 1, js1, skW1], [2, 2, js2, skW2], [3, 3, js3, skW3], [4, 4, js4, skW4], ["дв", "дв", jsdv, skWDv]],
        Jp, skW1) +
    pol4_2(
        [[2, 2, g2, skS2, g2vs2], [4, 4, g4, skS4, g4vs4], [5, "E", g5, skE, g5ve]],
        [[5, "E", p5, skE, p5ve]],
        Mp, skW1) +
    pol4_3(kol, mDv, mpMass) +
    pol4_4() +
    pol4_5(skW1, ner) +
    pol4_6();
content.innerHTML = contentTag;


// Поля ввода масштабных коэффициентов.
const
    mumpvvod = elNaStr("mumpvvod"), mufi1vvod = elNaStr("mufi1vvod"), mujp1vvod = elNaStr("mujp1vvod"),
    mufi2vvod = elNaStr("mufi2vvod"), mude1vvod = elNaStr("mude1vvod"), mufi3vvod = elNaStr("mufi3vvod"),
    mude2vvod = elNaStr("mude2vvod"), mujp2vvod = elNaStr("mujp2vvod"), otrdevvod = elNaStr("otrdevvod");


//Задать масштабные коэффициенты в при открытии страницы.
zadPole(mumpvvod, polTokMuMP());
zadPole(mufi1vvod, polTokMuFI1());
zadPole(mujp1vvod, polTokMuJP());
zadPole(mufi2vvod, polTokMuFI1());
zadPole(mude1vvod, polTokMuDE());
zadPole(mufi3vvod, polTokMuFI2());
zadPole(mude2vvod, polTokMuDE());
zadPole(mujp2vvod, polTokMuJP());
zadPole(otrdevvod, polTokOtrDe());


//Задать масштабный коэффициент приведенного момента сил в тексте.
function zadMuMp() {
    const mump = mumpvvod.value;
    for (let i = 1; i <= 1; i++) elNaStrText("mump" + i, pol4Znach(mump));
}

//Задать масштабный коэффициент приведенного момента инерции в тексте.
function zadMuJp() {
    const mujp = mujp1vvod.value;
    for (let i = 1; i <= 2; i++) elNaStrText("mujp" + i, pol4Znach(mujp));
}

//Задать масштабный коэффициент изменения кинетической энергии в тексте.
function zadMuDe() {
    const mude = mude1vvod.value;
    for (let i = 1; i <= 3; i++) elNaStrText("mude" + i, pol4Znach(mude));
}

//Задать минимальный угол наклона к диаграмме Виттенбауэра в тексте.
function zadPsiMin() {
    elNaStrText("psimin", pol4Znach(polUgPsi(mujp1vvod.value, mude1vvod.value, nerch, true)));
}

//Задать максимальный угол наклона к диаграмме Виттенбауэра в тексте.
function zadPsiMax() {
    elNaStrText("psimax", pol4Znach(polUgPsi(mujp1vvod.value, mude1vvod.value, nerch)));
}

//Задать момент инерции махового колеса в тексте.
function zadMomInMah() {
    for (let i = 1; i <= 2; i++) elNaStrText("jmah" + i, pol4Znach(polJMah(otrdevvod.value, mude1vvod.value, skW1ch, nerch)));
}

//Задать средний диаметр махового колеса в тексте.
function zadSrDiMah() {
    for (let i = 1; i <= 3; i++) elNaStrText("dmah" + i, pol4Znach(polDMahSr(otrdevvod.value, mude1vvod.value, skW1ch, nerch)));
}

//Задать толщину обода махового колеса в тексте.
function zadTolObMah() {
    elNaStrText("a", pol4Znach(0.1 * polDMahSr(otrdevvod.value, mude1vvod.value, skW1ch, nerch)));
}

//Задать толщину обода махового колеса в тексте.
function zadShirObMah() {
    elNaStrText("b", pol4Znach(0.2 * polDMahSr(otrdevvod.value, mude1vvod.value, skW1ch, nerch)));
}


//Задать величины в тексте при открытии страницы.
zadMuJp();
zadMuDe();
zadPsiMin();
zadPsiMax();
zadMomInMah();
zadSrDiMah();
zadTolObMah();
zadShirObMah();


//Добавить обработчики событий на поля ввода.
mumpvvod.addEventListener("input", function () {
    zadPerVHran(tokMuMp, mumpvvod.value);
});

mufi1vvod.addEventListener("input", function () {
    mufi2vvod.value = mufi1vvod.value;
    zadPerVHran(tokMuFi1, mufi1vvod.value);
});

mujp1vvod.addEventListener("input", function () {
    mujp2vvod.value = mujp1vvod.value;
    zadPerVHran(tokMuJp, mujp1vvod.value);
    zadMuJp();
    zadPsiMin();
    zadPsiMax();
});

mufi2vvod.addEventListener("input", function () {
    mufi1vvod.value = mufi2vvod.value;
    zadPerVHran(tokMuFi1, mufi2vvod.value);
});

mude1vvod.addEventListener("input", function () {
    mude2vvod.value = mude1vvod.value;
    zadPerVHran(tokMuDe, mude1vvod.value);
    zadMuDe();
    zadPsiMin();
    zadPsiMax();
    zadMomInMah();
    zadSrDiMah();
    zadTolObMah();
    zadShirObMah();
});

mufi3vvod.addEventListener("input", function () {
    zadPerVHran(tokMuFi2, mufi3vvod.value);
});

mude2vvod.addEventListener("input", function () {
    mude1vvod.value = mude2vvod.value;
    zadPerVHran(tokMuDe, mude2vvod.value);
    zadMuDe();
    zadPsiMin();
    zadPsiMax();
    zadMomInMah();
    zadSrDiMah();
    zadTolObMah();
    zadShirObMah();
});

mujp2vvod.addEventListener("input", function () {
    mujp1vvod.value = mujp2vvod.value;
    zadPerVHran(tokMuJp, mujp2vvod.value);
    zadMuJp();
    zadPsiMin();
    zadPsiMax();
});

otrdevvod.addEventListener("input", function () {
    zadPerVHran(tokOtrDe, otrdevvod.value);
    zadMomInMah();
    zadSrDiMah();
    zadTolObMah();
    zadShirObMah();
});
