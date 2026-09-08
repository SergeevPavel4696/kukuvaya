import {
    WF1, WFCos, WFDiakr1, WFDr1, WFInd1, WFOpSum1, WFSkob1, WFText, WFATan, WFKor1, WFStep
} from "../web-formula.js";
import {pol4Znach, polIndToch} from "./utils.js";
import {polTagPoleVvoda} from "../../scripts/utils.js";
import {polAbz, polNumFormula} from "../razmetka.js";


export function pol4() {
    return polAbz() + "4 Динамический анализ механизма" +
        polAbz() +
        "Задачей динамического анализа является определение действительного закона движения механизма " +
        "под действием заданных и возникающих сил и установление характеристик механизма, способных " +
        "максимально приблизить режим его движения к требуемому. К задачам динамического анализа также " +
        "относятся определение мощности, необходимой для воспроизведения требуемого закона движения " +
        "звеньев механизма, и изучение изменения мощности в процессе его работы с целью определения " +
        "коэффициента полезного действия механизма для выявления оптимальных параметров механизма.";
}

export function pol4_1(massM, massJS, Jp, W1) {
    let tag =
        polAbz() + "4.1 Приведённые моменты инерции механизма" +
        polAbz() + "Звено приведения с приведённым к нему моментом инерции в каждый момент времени " +
        "должно обладать кинетической энергией равной кинетической энергии всего механизма при заданном " +
        "законе движения. Равенство кинетических энергий для механизма в общем случае имеет вид:" +
        polNumFormula(
            WF1(WFDr1(WFDiakr1("J", "~") + " × " + WFDiakr1("ω", "~") + WFInd1(null, 2), 2) + " = ", true) +
            WF1(WFOpSum1("i = 1", "n") + WFDr1("m" + WFInd1("i") + " × v" + WFInd1("i", 2), 2) + " + ", true) +
            WF1(WFOpSum1("j = 1", "n") + WFDr1("J" + WFInd1("S" + WFInd1("j")) + " × ω" + WFInd1("j", 2), 2) + ",", true)
            , "25") +
        polAbz() + WFDiakr1("J", "~", true) + " – момент инерции, приведённый к звену 1;" +
        polAbz() + WFDiakr1("ω", "~", true) + " – угловая скорость звена приведения;" +
        polAbz() + WFText("n") + " – количество звеньев механизма;" +
        polAbz() + WFText("m") + WFInd1("i", null, true) +
        " – масса " + WFText("i", true) + "-го звена механизма;" +
        polAbz() + WFText("v") + WFInd1("i", null, true) +
        " – скорость центра масс " + WFText("i", true) + "-го звена механизма;" +
        polAbz() + WFText("J") + WFInd1("S" + WFInd1("j"), null, true) +
        " – момент инерции " + WFText("j", true) + "-го звена механизма;" +
        polAbz() + WFText("ω") + WFInd1("j", null, true) +
        " – угловая скорость " + WFText("j", true) + "-го звена механизма." +
        polAbz() + "Исходя из равенства кинетических энергий приведенный момент инерции определяется по формуле:" +
        polNumFormula(
            WF1(WFDiakr1("J", "~") + " = ", true) +
            WF1(WFDr1(WFOpSum1("i = 1", "n") + "m" + WFInd1("i") + " × v" +
                WFInd1("i", 2) + " + " + WFOpSum1("j = 1", "n") + "J" + WFInd1("S" + WFInd1("j")) + " × ω" +
                WFInd1("j", 2), WFDiakr1("ω", "~") + WFInd1(null, 2)), true
            ), "26") +
        polAbz() + "Приведенный момент инерции механизма в положении силового анализа:" +
        polAbz() +
        polAbz() + WF1(WFDiakr1("J", "~") + " = ", true);
    massM.forEach((M, i) => tag += WF1((!i ? "( " : "") + "m" + WFInd1(M[0] + " × "), true) +
        WF1("v" + polIndToch(M[1], 2) + " + ", true));
    massJS.forEach((JS, i) => tag += WF1("J" + WFInd1("S" + WFInd1(JS[0])) + " × ", true) +
        WF1("ω" + WFInd1(JS[1], 2) + (i !== massJS.length - 1 ? " + " : " ) / "), true));
    tag += WF1(" ω " + WFInd1(1, 2) + " = ", true);
    massM.forEach((M, i) => tag += WF1((!i ? "( " : "") + M[2] + " × ", true) +
        WF1(WFStep(M[3], 2) + " + ", true));
    massJS.forEach((JS, i) => tag += WF1(JS[2] + " × ", true) + WF1(WFStep(JS[3], 2) +
        (i !== massJS.length - 1 ? " + " : " ) / "), true));
    tag += WF1(WFStep(W1, 2) + " = ", true) + WFText(Jp, true) +
        WF1(WFSkob1("кг × " + WFStep("м", 2), 2, 2), true) + ".";
    return tag;
}

export function pol4_2(massG, massP, Mp, W1) {
    let tag =
        polAbz() + "4.2 Приведённые моменты сил механизма" +
        polAbz() + "Звено приведения с приведённым к нему моментом сил должно в " +
        "каждый момент времени иметь мощность равную мощности всего механизма при заданном " +
        "законе движения. Равенство мощностей для механизма в общем случае имеет вид:" +
        polNumFormula(
            WF1(WFDiakr1("M", "~") + " × " + WFDiakr1("ω", "~") + " = ", true) +
            WF1(WFOpSum1("i = 1", "n") + WFDiakr1("F" + WFInd1("i"), "->") + " × " +
                WFDiakr1("v" + WFInd1("i"), "->") + " + ", true) +
            WF1(WFOpSum1("j = 1", "n") + WFDiakr1("M" + WFInd1("j"), "->") + " × " +
                WFDiakr1("ω" + WFInd1("j"), "->") + " = ", true) +
            WF1(WFOpSum1("i = 1", "n") + "F" + WFInd1("i") + " × " + "v" + WFInd1("i") + " × " +
                WFCos(WFDiakr1(WFDiakr1("F" + WFInd1("i"), "->") + "," +
                    WFDiakr1("v" + WFInd1("i"), "->"), "^")) + " + ", true) +
            WF1(WFOpSum1("j = 1", "n") + "M" + WFInd1("j") + " × " + "ω" + WFInd1("j"), true) +
            ",", "27") +
        polAbz() + WFDiakr1("M", "~", true) + " – момент сил, приведённый к звену 1;" +
        polAbz() + WFDiakr1("ω", "~", true) + " – угловая скорость звена приведения;" +
        polAbz() + WFText("n") + " – количество звеньев механизма;" +
        polAbz() + WFDiakr1("F" + WFInd1("i"), "->", true) +
        " – вектор " + WFText("i") + "-ой силы, приложенной к механизму;" +
        polAbz() + WFDiakr1("v" + WFInd1("i"), "->", true) +
        " – вектор скорости точки приложения " + WFText("i") + "-ой силы;" +
        polAbz() + WFDiakr1("M" + WFInd1("j"), "->", true) +
        " – вектор момента сил, приложенного к " + WFText("j") + "-му звену механизма;" +
        polAbz() + WFDiakr1("ω" + WFInd1("j"), "->", true) +
        " – вектор угловой скорости " + WFText("j") + "-го звена механизма;" +
        polAbz() + WFText("F") + WFInd1("i", null, true) +
        " – величина " + WFText("i") + "-ой силы, приложенной к механизму;" +
        polAbz() + WFText("v") + WFInd1("i", null, true) +
        " – величина скорости точки приложения " + WFText("i") + "-ой силы;" +
        polAbz() + WFText("M") + WFInd1("j", null, true) +
        " – величина момента сил, приложенного к " + WFText("j") + "-му звену механизма;" +
        polAbz() + WFText("ω") + WFInd1("j", null, true) +
        " – величина угловой скорости " + WFText("j") + "-го звена механизма." +
        polAbz() + "Исходя из равенства мощностей приведенный момент сил определяется по формуле:" +
        polNumFormula(
            WF1(WFDiakr1("M", "~") + " = ", true) +
            WF1(WFDr1(WFOpSum1("i = 1", "n") + "F" + WFInd1("i") +
                " × v" + WFInd1("i") + " × " + WFCos(WFDiakr1(WFDiakr1("F" + WFInd1("i"), "->") + "," +
                    WFDiakr1("v" + WFInd1("i"), "->"), "^")) + " + " + WFOpSum1("j = 1", "n") +
                "M" + WFInd1("j") + " × " + "ω" + WFInd1("j"), WFDiakr1("ω", "~")), true
            ), "28") +
        polAbz() + "Приведенный момент сил в положении силового анализа:" +
        polAbz() + WF1(WFDiakr1("M", "~") + " = ", true);
    massG.forEach((G, i) => tag +=
        WF1((!i ? "( " : "") + "G" + WFInd1(G[0]) + " × ", true) +
        WF1("v" + polIndToch(G[1]) + " × ", true) +
        WF1(WFCos(WFDiakr1(WFDiakr1("G" + WFInd1(G[0]), "->") + "," +
            WFDiakr1("v" + polIndToch(G[1]), "->"), "^")) + ((i === massG.length - 1) && !massP ? " ) / " : " + "), true));
    massP && massP.forEach((P, i) => tag +=
        WF1("P" + WFInd1(P[0]) + " × ", true) +
        WF1("v" + WFInd1(P[1]) + " × ", true) +
        WF1(WFCos(WFDiakr1(WFDiakr1("P" + WFInd1(P[0]), "->") + "," +
            WFDiakr1("v" + polIndToch(P[1]), "->"), "^")) + (i !== massP.length - 1 ? " + " : " ) / "), true));
    tag += WF1(" ω " + WFInd1(1) + " = ", true);
    massG.forEach((G, i) => tag +=
        WF1((!i ? "( " : "") + G[2] + " × ", true) +
        WF1(G[3] + " × ", true) +
        WF1(WFCos(G[4] + "°") + ((i === massG.length - 1) && !massP ? " ) / " : " + "), true));
    massP && massP.forEach((P, i) => tag +=
        WF1(P[2] + " × ", true) +
        WF1(P[3] + " × ", true) +
        WF1(WFCos(P[4] + "°") + (i !== massP.length - 1 ? " + " : " ) / "), true));
    tag +=
        WF1(W1 + " = ", true) +
        WF1(Mp + WFSkob1("Н × м", 2, 2), true) + ".";
    return tag;
}

export function pol4_3(kol, MDV, mass) {
    let tag =
        polAbz() + "4.3 Изменение кинетической энергии механизма" +
        polAbz() + "В различных положениях механизма величина и характер воздействия внешних " +
        "сил на механизм изменяются, что приводит к изменению кинетической энергии механизма." +
        polAbz() + "Диаграмма зависимости изменения кинетической энергии механизма от угла " +
        "поворота кривошипа начального механизма строится методом графического интегрирования." +
        polAbz() + "Порядок построения диаграммы:" +
        polAbz() + "– рассчитать средний движущий момент за один такт работы механизма по формуле:" +
        polNumFormula(WF1("M" + WFInd1("дв") + " = -" + WFDr1(WFOpSum1("i = 1", kol) +
            WFDiakr1("M" + WFInd1("i"), "~"), kol), true) + ",", "29") +
        polAbz() + WF1("M" + WFInd1("дв"), true) +
        " – движущий момент, необходимый для работы механизма;" +
        polAbz() + WFDiakr1("M" + WFInd1("i"), "~", true) +
        " – приведённый момент сил в " + WFText("i", true) + "-ом положении механизма." +
        polAbz() + WF1("M" + WFInd1("дв") + " = ", true);
    mass.forEach((m, i) => tag += WF1(!i ? ("-( " + (m < 0 ? "- " : "")) : "", true) +
        WF1(pol4Znach(m) + (i === mass.length - 1 ? " ) / " : (mass[i + 1] > 0 ? " + " : " - ")), true))
    // for (let i = 0; i < mass.length; i++) {
    //     tag +=
    //         WF1(!i ? ("-( " + (mass[i] < 0 ? "- " : "")) : "", true) +
    //         WF1(pol4Znach(mass[i]) + (i === mass.length - 1 ? " ) / " : (mass[i + 1] > 0 ? " + " : " - ")), true)
    // }
    tag += WF1(kol + " = ", true) + WF1(MDV, true) + WF1(WFSkob1("Н × м", 2, 2), true) + ";" +
        polAbz() +
        "– рассчитать изменения кинетической энергии механизма между каждыми соседними положениями по формуле:" +
        polNumFormula(WF1("∆E" + WFInd1("ij") + " = S" + WFInd1("∆M" + WFInd1("ij")) + " × μ" +
            WFInd1(WFDiakr1("M", "~")) + " × μ" + WFInd1("φ") + ",", true), "30") +
        polAbz() + WF1("∆E" + WFInd1("ij"), true) + " – изменение кинетической энергии " +
        "механизма между его " + WFText("i", true) + "-ым и " + WFText("j", true) + "-ым положениями;" +
        polAbz() +
        WF1("S" + WFInd1("∆M" + WFInd1("ij")), true) + " – площадь между диаграммой приведённого момента сил и средним " +
        "движущим моментом между " + WFText("i", true) + "-ым и " + WFText("j", true) + "-ым положениями механизма;" +
        polAbz() + WF1("μ" + WFInd1(WFDiakr1("M", "~")), true) + ", " + WF1("μ" + WFInd1("φ"), true) +
        " – масштабные коэффициенты диаграммы зависимости приведенного момента сил от угла поворота кривошипа начального механизма." +
        polAbz() + "– построить диаграмму зависимости изменения кинетической энергии механизма от " +
        "угла поворота кривошипа начального механизма по рассчитанным значениям для каждого положения механизма.";
    return tag;
}

export function pol4_4() {
    return polAbz() + "4.4 Диаграмма энергомасс Виттенбауэра" +
        polAbz() + "Действительная частота вращения кривошипа начального механизма определяется с " +
        "помощью диаграммы Виттенбауэра, описывающей связь кинетической энергии механизма момента инерции " +
        "механизма, приведенного к кривошипу начального механизма, и частоты вращения кривошипа." +
        polAbz() + "Масштабные коэффициенты диаграмм:" +
        polAbz() + "– диаграмма зависимости приведенного момента сил от угла поворота кривошипа " +
        "начального механизма " + WF1(WFDiakr1("M", "~") + WFSkob1("φ", 1, 1), true) + ":" +
        polAbz() + WF1("μ" + WFInd1(WFDiakr1("M", "~")), true) + " = " +
        polTagPoleVvoda("mumpvvod", null, "0") + WF1(WFSkob1(WFDr1("Н × м", "мм"), 2, 2), true) + ";" +
        polAbz() + WF1("μ" + WFInd1("φ"), true) + " = " + polTagPoleVvoda("mufi1vvod", null, "0") +
        " " + WF1(WFSkob1(WFDr1("рад", "мм"), 2, 2), true) + ";" +
        polAbz() + "– диаграмма зависимости приведенного момента инерции от угла поворота кривошипа " +
        "начального механизма " + WF1(WFDiakr1("J", "~") + WFSkob1("φ", 1, 1), true) + ":" +
        polAbz() + WF1("μ" + WFInd1(WFDiakr1("J", "~")), true) + " = " +
        polTagPoleVvoda("mujp1vvod", null, "0") + WF1(WFSkob1(WFDr1("кг × м" + WFInd1(null, 2), "мм"), 2, 2), true) + ";" +
        polAbz() + WF1("μ" + WFInd1("φ"), true) + " = " + polTagPoleVvoda("mufi2vvod", null, "0") +
        " " + WF1(WFSkob1(WFDr1("рад", "мм"), 2, 2), true) + ";" +
        polAbz() + "– диаграмма зависимости изменения кинетической энергии механизма " +
        "от угла поворота кривошипа начального механизма " + WF1("ΔE" + WFSkob1("φ", 1, 1), true) + ":" +
        polAbz() + WF1("μ" + WFInd1("ΔE"), true) + " = " + polTagPoleVvoda("mude1vvod", null, "0") +
        " " + WF1(WFSkob1(WFDr1("Дж", "мм"), 2, 2), true) + ";" +
        polAbz() + WF1("μ" + WFInd1("φ"), true) + " = " + polTagPoleVvoda("mufi3vvod", null, "0") +
        " " + WF1(WFSkob1(WFDr1("рад", "мм"), 2, 2), true) + ";" +
        polAbz() + "– диаграмма зависимости изменения кинетической энергии механизма от приведенного " +
        "момента инерции " + WF1("ΔE" + WFSkob1(WFDiakr1("J", "~"), 1, 1), true) + ":" +
        polAbz() + WF1("μ" + WFInd1("ΔE"), true) + " = " + polTagPoleVvoda("mude2vvod", null, "0") +
        " " + WF1(WFSkob1(WFDr1("Дж", "мм"), 2, 2), true) + ";" +
        polAbz() + WF1("μ" + WFInd1(WFDiakr1("J", "~")), true) + " = " + polTagPoleVvoda("mujp2vvod", null, "0") +
        " " + WF1(WFSkob1(WFDr1("кг × м" + WFInd1(null, 2), "мм"), 2, 2), true) + "." +
        polAbz() + "Порядок построения диаграммы энергомасс Виттенбауэра:" +
        polAbz() + "– построить точки соответствия между кинетической энергией " +
        "механизма и его приведённым моментом инерции во всех положениях;" +
        polAbz() + "– соединить последовательно плавной кривой все точки.";
}

export function pol4_5(W1, ner) {
    return polAbz() + "4.5 Массовые характеристики махового колеса" +
        polAbz() + "Требуемая инертность механизма определяется предельно допустимыми " +
        "угловыми скоростями звена приведения. Минимальная и максимальная допустимые угловые " +
        "скорости звена приведения связаны с минимальным и макси-мальным углами наклона касательных " +
        "к диаграмме Виттенбауэра, пересекающихся в начале системы координат диаграммы формулами:" +
        polAbz() +
        polNumFormula(
            WF1("Ψ" + WFInd1("min") + " = ", true) +
            WF1(WFATan(WFDr1("μ" + WFInd1(WFDiakr1("J", "~")), 2 + " × μ" +
                WFInd1("∆E")) + " × ω" + WFInd1("1 min", 2)) + " = ", true) +
            WF1(WFATan(WFDr1("μ" + WFInd1(WFDiakr1("J", "~")), 2 + " × μ" +
                WFInd1("∆E")) + " × " + WFSkob1("ω" + WFInd1("1") + " × " +
                WFSkob1("1 - " + WFDr1("δ", 2), 1, 1), 1, 1) + WFInd1(null, 2)) + ",", true)
            , "31") +
        polNumFormula(
            WF1("Ψ" + WFInd1("max") + " = ", true) +
            WF1(WFATan(WFDr1("μ" + WFInd1(WFDiakr1("J", "~")), 2 + " × μ" +
                WFInd1("∆E")) + " × ω" + WFInd1("1 max", 2)) + " = ", true) +
            WF1(WFATan(WFDr1("μ" + WFInd1(WFDiakr1("J", "~")), 2 + " × μ" +
                WFInd1("∆E")) + " × " + WFSkob1("ω" + WFInd1("1") + " × " +
                WFSkob1("1 + " + WFDr1("δ", 2), 1, 1), 1, 1) + WFInd1(null, 2)) + ",", true)
            , "32") +
        polAbz() + WF1("Ψ" + WFInd1("min"), true) + ", " + WF1("Ψ" + WFInd1("max"), true) +
        " – углы наклона касательных к диаграмме Виттенбауэра, соответствующие " +
        "минимальной и максимальной частотам вращения кривошипа начального механизма;" +
        polAbz() + WF1("μ" + WFInd1(WFDiakr1("J", "~")), true) + ", " + WF1("μ" + WFInd1("∆E"), true) +
        "– масштабные коэффициенты диаграммы зависимости изменения кинетической " +
        "энергии механизма от угла поворота кривошипа начального механизма;" +
        polAbz() + WF1("ω" + WFInd1("1 min"), true) + ", " + WF1("ω" + WFInd1("1 max"), true) +
        " – минимальная и максимальная допустимые угловые скорости звена 1." +
        // polAbzac() +  WF1("Ψ" + WFInd1("min") + " = " + WFATan(WFDr1(3, 2 + " × " + 10) + " × " +
        //     WFSkob1(1 + " × " + WFSkob1("1 - " + 20, 1, 1), 1, 1) + WFInd1(null, 2)) + " = ", true) + "°;" +
        // polAbzac() +  WF1("Ψ" + WFInd1("max") + " = " + WFATan(WFDr1(3, 2 + " × " + 10) + " × " +
        //     WFSkob1(1 + " × " + WFSkob1("1 + " + 20, 1, 1), 1, 1) + WFInd1(null, 2)) + " = ", true) + "°." +
        polAbz() +
        WF1("Ψ" + WFInd1("min") + " = arctg(", true) + " <span id=\"mujp1\"></span> " +
        WF1(" / ( 2 × ", true) + " <span id=\"mude1\"></span>" +
        WF1(" ) × " + WFStep(WFSkob1(W1 + " × " + WFSkob1("1 - " + WFDr1(ner, 2), 1, 1), 1, 1), 2) + ") = ", true) +
        " <span id=\"psimin\"></span>°;" +
        polAbz() +
        WF1("Ψ" + WFInd1("min") + " = arctg(", true) + " <span id=\"mujp2\"></span> " +
        WF1(" / ( 2 × ", true) + " <span id=\"mude2\"></span>" +
        WF1(" ) × " + WFStep(WFSkob1(W1 + " × " + WFSkob1("1 + " + WFDr1(ner, 2), 1, 1), 1, 1), 2) + ") = ", true) +
        " <span id=\"psimax\"></span>°." +
        polAbz() + "Требуемый приведённый момент инерции махового колеса определяется " +
        "расстоянием от оси ординат системы координат диаграммы энергомасс Виттенбауэра до " +
        "точки пересечения касательных к диаграмме определяется по формуле:" +
        polNumFormula(WF1("J" + WFInd1("max") + " = " + WFDr1("T" + WFInd1("Δ") + " × μ" +
            WFInd1("ΔE"), "ω" + WFInd1(1, 2) + " × δ"), true) + ",", "33") +
        polAbz() + WF1("J" + WFInd1("max"), true) + " – приведенный момент инерции махового колеса;" +
        polAbz() + WF1("T" + WFInd1("Δ"), true) +
        " – длина отрезка, отсекаемого на оси ординат диаграммы касательными к диаграмме;" +
        polAbz() + WFText("δ") + " – коэффициент неравномерности вращения кривошипа." +
        polAbz() + WF1("J" + WFInd1("max") + " = ( ", true) + polTagPoleVvoda("otrdevvod", null, "0") +
        " × <span id=\"mude3\"></span> ) / " + WF1(WFSkob1(WFStep(W1, 2) + " × " + ner, 1, 1) + " = ", true) +
        " <span id=\"jmah1\"></span>" + WF1(WFSkob1("кг × " + WFStep("м", 2), 2, 2), true) + ".";
}

export function pol4_6() {
    return polAbz() + "4.6 Геометрические характеристики махового колеса" +
        polAbz() + "Средний диаметр обода махового колеса определяется по формуле:" +
        polNumFormula(WF1("D" + WFInd1("мах") + " = " + WFKor1(WFDr1("4 × J" + WFInd1("мах"), "K" +
            WFInd1(1) + " × K" + WFInd1(2) + " × π × ρ"), 5), true) + ",", "34") +
        polAbz() + WF1("D" + WFInd1("мах"), true) + " – средний диаметр махового колеса;" +
        polAbz() + WF1("K" + WFInd1(1), true) +
        " – отношение толщины обода маховика к его среднему диаметру;" +
        polAbz() + WF1("K" + WFInd1(2), true) +
        " – отношение ширины обода маховика к его среднему диаметру;" +
        polAbz() + WFText("ρ") + " – плотность материала обода маховика ( для стали " +
        WF1(" = 7800" + WFSkob1(WFDr1("кг", "м" + WFInd1(null, 3)), 2, 2), true) + ")." +
        polAbz() +
        WF1("D" + WFInd1("мах") + " = (( 4 ×", true) + "<span id=\"jmah2\"></span>" +
        WF1(" ) / " + WFSkob1("0,1 × 0,1 × π × 7800", 1, 1) + ")" + WFInd1(null, "0,2") + "=", true) +
        " <span id=\"dmah1\"></span> " + WF1(WFSkob1("м", 2, 2), true) + "." +
        // polAbzac() +
        // WF1("D" + WFInd1("мах") + " = " + WFKor1(WFDr1("4 × J" + WFInd1("мах"), " 0,1 × 0,1 × π × 7800"), 5), true) +
        // " = <span id=\"dmah1\"></span> [ м ]." +
        polAbz() + "Толщина обода маховика:" +
        polAbz() + WF1("a = D" + WFInd1("мах") + " × K" + WFInd1(1) + " = ", true) +
        " <span id=\"dmah2\"></span> " + WFText("× 0,1 =") + " <span id=\"a\"></span> " + WFSkob1("м", 2, 2, true) + "." +
        polAbz() + "Ширина обода маховика:" +
        polAbz() + WF1("b = D" + WFInd1("мах") + " × K" + WFInd1(1) + " = ", true) +
        " <span id=\"dmah3\"></span> " + WFText("× 0,1 =") + " <span id=\"b\"></span> " + WFSkob1("м", 2, 2, true) + ".";
}
