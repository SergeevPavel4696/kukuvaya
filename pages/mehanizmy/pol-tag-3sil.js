import {
    WF1, WFDiakr1, WFDr1, WFInd1, WFMass, WFMomIn, WFMomSil, WFMomSilIn, WFOpSum1, WFReak, WFSil, WFSkob1,
    WFText, WFVekMomSil, WFVekMomSilIn, WFVekReak, WFVekSil, WFVekSilIn, WFVekUgUsk, WFVekUsk, WFVekVes
} from "../web-formula.js";
import {pol4Znach, pol4ZnachVek, polIndToch} from "./utils.js";
import {polAbz, polAbzInt, polNumFormula} from "../razmetka.js";

export function pol3(ris, planSil2, planSil1, planSilNach, tip) {
    let tag = planSil2 + planSil1 + planSilNach +
        polAbz() + "3 Силовой анализ механизма" +
        polAbz() +
        "Задачей силового анализа является нахождение неизвестных сил, действующих на звенья механизма и " +
        "возникающие при его движении, при заданных законах движения ведущих звеньев. Силовой анализ производится " +
        "методом кинетостатического расчёта, основанном на принципе Д' Аламбера, согласно которому динамическую " +
        "систему можно рассматривать как статически уравновешенную, приложив к ней силы и моменты сил инерции тел, " +
        "входящих в эту систему.</p>";
    if (ris) {
        tag += ris + "<p class=\"risunok-podpis\">Рисунок 5 – ";
        if (tip === 1) tag += "Диаграмма изменения силы полезного сопротивления";
        else if (tip === 2) tag += "Диаграммы изменения сил полезного сопротивления";
        else if (tip === 3) tag += "Диаграмма изменения давления в цилиндрах";
        else if (tip === 4) tag += "Диаграммы изменения давлений в цилиндрах";
    }
    return tag;
}

export function pol3_1(massPuVes, massPuSilIn, massPuMomSilIn, davl) {
    let tag =
        polAbz() + "3.1. Силовые характеристики механизма" +
        polAbz() + "Векторы весов звеньев механизма определяются по формуле:" +
        polNumFormula(WF1(WFVekVes("i") + " = m" + WFInd1("i") + " × " + WFDiakr1("g", "->"), true) + ",", "16") +
        polAbz() + WFVekVes("i", true) + " – вектор веса " + WFText("i") + "-ого звена  механизма;" +
        polAbz() + WFMass("i", true) + " – масса " + WFText("i") + "-ого звена  механизма;" +
        polAbz() + WFDiakr1("g", "->", true) +
        " – вектор ускорения свободного падения (направлен вертикально вниз)." +
        polAbz() + "Веса звеньев механизма определяются по формуле:" +
        polNumFormula(WF1("G" + WFInd1("i") + " = m" + WFInd1("i") + " × g", true) + ",", "17") +
        polAbz() + WF1("G" + WFInd1("i"), true) + " – вес " + WFText("i") + "-ого звена  механизма;" +
        polAbz() + WFMass("i", true) + " – масса " + WFText("i") + "-ого звена  механизма;" +
        polAbz() + WFText("g") + " – ускорение свободного падения (для Земли " +
        WF1(" = 9,807" + WFSkob1(WFDr1("м", "с" + WFInd1(null, 2)), 2, 2), true) + ").";
    massPuVes.forEach((pu, i) => tag +=
        polAbz() + WF1("G" + WFInd1(pu[0]) + " = m" + WFInd1(pu[0]) + " × g = " + pol4Znach(pu[1]) + " × 9,807 = " +
            pol4Znach(pu[2]) + " " + WFSkob1("Н", 2, 2), true) + (i !== massPuVes.length - 1 ? ";" : "."));
    tag +=
        polAbz() + "Векторы сил инерции, действующих на звенья механизма, определяются по формуле:" +
        polNumFormula(WF1(WFVekSilIn("i") + " = -m" + WFInd1("i") + " × " + WFVekUsk("i"), true) + ",", "18") +
        polAbz() + WFVekSilIn("i", true) +
        " – вектор силы инерции, приложенной к центру масс " + WFText("i") + "-ого звена  механизма;" +
        polAbz() + WFMass("i", true) + " – масса " + WFText("i") + "-ого звена  механизма;" +
        polAbz() + WFVekUsk("i", null, true) +
        " – вектор ускорения цента масс " + WFText("i") + "-ого звена  механизма." +
        polAbz() + "Силы инерции, действующие на звенья механизма, определяются по формуле:" +
        polNumFormula(WF1("Φ" + WFInd1("i") + " = m" + WFInd1("i") + " × a" + WFInd1("i"), true) + ",", "19") +
        polAbz() + WF1("Φ" + WFInd1("i"), true) +
        " – сила инерции, приложенная к центру масс " + WFText("i") + "-ого звена  механизма;" +
        polAbz() + WFMass("i", true) + " – масса " + WFText("i") + "-ого звена  механизма;" +
        polAbz() + WF1("a" + WFInd1("i"), true) +
        " – ускорение цента масс " + WFText("i") + "-ого звена  механизма.";
    massPuSilIn.forEach((pu, i) => tag +=
        polAbz() + WF1("Φ" + WFInd1(pu[0]) + " = m" + WFInd1(pu[0]) + " × a" + polIndToch(pu[1]) +
            " = " + pol4Znach(pu[2]) + " × " + pol4Znach(pu[3]) + " = " + pol4Znach(pu[4]) + " " +
            WFSkob1("Н", 2, 2), true) + (i !== massPuSilIn.length - 1 ? ";" : "."));
    tag +=
        polAbz() + "Векторы моментов сил инерции, действующих на звенья механизма, определяются по формуле:" +
        polNumFormula(WF1(WFVekMomSilIn("i") +
            " = -J" + WFInd1("S" + WFInd1("i")) + " × " + WFVekUgUsk("i"), true) + ",", "20") +
        polAbz() + WFVekMomSilIn("i", true) +
        " – вектор момента сил инерции, приложеного к " + WFText("i") + "-му звену  механизма;" +
        polAbz() + WFMomIn("i", true) + " – момент инерции " + WFText("i") + "-ого звена  механизма;" +
        polAbz() + WFVekUgUsk("i", null, true) +
        " – вектор углового ускорения " + WFText("i") + "-ого звена  механизма." +
        polAbz() + "Моменты сил инерции, действующие на звенья механизма, определяются по формуле:" +
        polNumFormula(WF1("M" + WFInd1("Φ" + WFInd1("i")) +
            " = J" + WFInd1("S" + WFInd1("i")) + " × Ɛ" + WFInd1("i"), true) + ",", "21") +
        polAbz() + WF1("M" + WFInd1("Φ" + WFInd1("i")), true) +
        " – момент сил инерции, приложенный " + WFText("i") + "-му звену  механизма;" +
        polAbz() + WFMomIn("i", true) + " – момент инерции " + WFText("i") + "-ого звена  механизма;" +
        polAbz() + WF1("Ɛ" + WFInd1("i"), true) +
        " – угловое ускорение " + WFText("i") + "-ого звена  механизма.";
    massPuMomSilIn.forEach((pu, i) => tag +=
        polAbz() + WF1("M" + WFInd1("Φ" + WFInd1(pu[0])) + " = J" + WFInd1("S" + WFInd1(pu[0])) +
            " × Ɛ" + WFInd1(pu[0]) + " = " + pol4Znach(pu[1]) + " × " + pol4Znach(pu[2]) + " = " + pol4ZnachVek(pu[3]) +
            " " + WFSkob1("Н × м", 2, 2), true) + (i !== massPuMomSilIn.length - 1 ? ";" : "."));
    if (davl) {
        tag +=
            polAbz() + "Силы, действующие на поршни от давлений в цилиндрах, определяются по формуле:" +
            polNumFormula(WF1("F" + WFInd1("i", "max") + " = " + WFDr1("p" +
                WFInd1("i", "max") + " × π × d" + WFInd1("i", 2), 4), true) + ",", "22") +
            polAbz() + WF1("F" + WFInd1("i", "max"), true) +
            " – максимальная сила, действующая на поршень от давления в " + WFText("i") + "-ом цилиндре;" +
            polAbz() + WF1("p" + WFInd1("i", "max"), true) + " – максимальное давление в " + WFText("i") + "-ом цилиндре;" +
            polAbz() + WF1("d" + WFInd1("i"), true) + " – диаметр " + WFText("i") + "-ого цилиндра.";
        davl.forEach((p, i) => tag +=
            polAbz() + WF1("F" + WFInd1(p[0], "max") + " = " +
                WFDr1("p" + WFInd1(p[0], "max") + " × π × d" + WFInd1(p[0], 2), 4) + " = " +
                WFDr1(pol4Znach(p[1]) + " × π × " + pol4Znach(p[2]) + WFInd1(null, 2), 4) + " = " +
                pol4Znach(p[3]) + WFSkob1("Н", 2, 2), true) + (i !== davl.length - 1 ? ";" : "."));
    }
    tag += polAbz() +
        "Реакции звеньев механизма определяются из равновесий сил и моментов сил, действующих на механизм." +
        polAbz() + "Равновесие сил определяется по формуле:" +
        polNumFormula(WF1(WFOpSum1("i") + WFVekSil("i") + " = 0", true) + ",", "23") +
        polAbz() + WFVekSil("i", true) + " – вектор " + WFText("i") + "-ой силы, приложенной к механизму." +
        polAbz() + "Равновесие моментов сил определяется по формуле:" +
        polNumFormula(WF1(WFOpSum1("i") + WFVekMomSil("i") + " = " + WFOpSum1("j") + WFVekMomSil("j") + " + " +
            WFOpSum1("k") + WFVekSil("k") + " × " + WFDiakr1("l" + WFInd1("k"), "->") + " = 0", true) + ",", "24") +
        polAbz() + WFVekMomSil("i", true) + " – вектор " + WFText("i") + "-го момента сил, приложенного к механизму;" +
        polAbz() + WFVekMomSil("j", true) + " – вектор " + WFText("j") + "-го момента сил, приложенного к механизму;" +
        polAbz() + WFVekSil("k", true) + " – вектор " + WFText("k") + "-ой силы, приложенной к механизму;" +
        polAbz() + WFDiakr1("l" + WFInd1("k"), "->", true) + " – плечо приложения " + WFText("k") + "-ой силы.";
    return tag;
}

export function pol3_2(massPu) {
    let tag =
        polAbz() + "3.2. Вторая группа Ассура" +
        polAbz() + "Масштабный коэффициент плана сил второй группы Ассура:" +
        polAbz() + WF1("μ" + WFInd1("F" + WFInd1(2)), true) + " = " +
        "<input id=\"muf2vvod\" class=\"vvod-pole-par-meh\" type=\"number\" min=\"0\"> " +
        WF1(WFSkob1(WFDr1("Н", "мм"), 2, 2), true) + "." +
        polAbz() + "Порядок построения плана:";
    massPu.forEach(pu => tag += pu);
    return tag;
}

export function polRasschReak(reak, massMom, momin, obr, pr) {
    let tag =
        polAbz() + "– рассчитать " + (reak[3] === "τ" ? "тангенциальную " : "") + "реакцию " +
        WFReak(reak[0] + "" + reak[1], reak[3], true) + " (направлена " + (reak[3] === "τ" ?
            "перпендикулярно звену " : "перпендикулярно траектории движения звена ") + (obr ? reak[0] : reak[1]) +
        ") звена " + reak[0] + " на звено " + reak[1] + " из уравнения равновесия моментов сил " +
        (reak[2].split(" ")[1] ? ("на звене " + reak[2].split(" ")[1]) : "") + " относительно точки " +
        WFText(reak[2].split(" ")[0]) + ":" +
        polAbz() + WF1(WFOpSum1(null, null, true) + "M" + WFInd1(reak[2].split(" ")[0],
            (reak[2].split(" ")[1] ? "(" + reak[2].split(" ")[1] + ")" : "")) + " = ", true);
    massMom.forEach((mom, i) => tag +=
        WF1(((!i && mom[0] < 0) ? "-" : "") + mom[1].split(" ")[0] + WFInd1(mom[1].split(" ")[1], mom[1].split(" ")[2]) + "×", true) +
        WF1(mom[2] + ((i !== massMom.length - 1) ? (massMom[i + 1][0] < 0 ? "-" : "+") : (momin ? (momin[0][0] < 0 ? "-" : "+") : "=")), true)
    );
    if (momin) {
        momin.forEach((mom, i) => tag += WF1(WFMomSilIn(mom[1]) + (momin[i + 1] ? (momin[i + 1][0] < 0 ? "-" : "+") : "="), true));
        tag += WF1("0", true) + ";";
    }
    tag += polAbz() + WF1(massMom[0][1].split(" ")[0] + WFInd1(massMom[0][1].split(" ")[1], massMom[0][1].split(" ")[2]) + "=", true);
    massMom.forEach((mom, i) => tag += i ? (
        WF1(((i === 1) ? ((massMom[0][0] > 0 ? "-" : "") + "(" + (mom[0] < 0 ? "-" : "")) : "") +
            mom[1].split(" ")[0] + WFInd1(mom[1].split(" ")[1], mom[1].split(" ")[2]) + "×", true) +
        WF1(mom[2] + ((i !== massMom.length - 1) ? (massMom[i + 1][0] < 0 ? "-" : "+") : (momin ? (momin[0][0] < 0 ? "-" : "+") : ")/")), true)) : "");
    if (momin) {
        momin.forEach((mom, i) => tag += WF1(WFMomSilIn(mom[1]) + (momin[i + 1] ? (momin[i + 1][0] < 0 ? "-" : "+") : ")/"), true));
    }
    tag += WF1(massMom[0][2] + "=", true);
    massMom.forEach((mom, i) => tag += i ? (
        WF1(((i === 1) ? ((massMom[0][0] > 0 ? "-" : "") + "(" + (mom[0] < 0 ? "-" : "")) : "") + pol4Znach(mom[3]) + "×", true) +
        WF1(pol4Znach(mom[4]) + ((i !== massMom.length - 1) ? (massMom[i + 1][0] < 0 ? "-" : "+") : (momin ? (momin[0][0] < 0 ? "-" : "+") : ")/")), true)) : "");
    if (momin) {
        momin.forEach((mom, i) => tag += WF1(pol4Znach(mom[0]) + (momin[i + 1] ? (momin[i + 1][0] < 0 ? "-" : "+") : ")/"), true));
    }
    tag += WF1(pol4Znach(massMom[0][4]) + "=", true);
    tag += WF1(pol4Znach(massMom[0][3]), true) + " " + WFSkob1("Н", 2, 2, true) + (pr ? "." : ";");
    return tag;
}

export function polRasschGorVertReak(reak, massSil, pr) {
    const plus = massSil[0][0] < 0;
    let tag =
        polAbz() + "– рассчитать реакцию " + WFReak(reak[0] + "" + reak[1], reak[2], true) +
        " (направлена параллельно траектории движения звена " + reak[1] + ") звена " + reak[0] +
        " на звено " + reak[1] + " из уравнения равновесия сил:" +
        polAbz() + WF1(WFOpSum1(null, null, true) + "F" + WFInd1(reak[2]) + " = ", true);
    massSil.forEach((sil, i) => tag +=
        WF1(((!i && plus) ? "-" : "") + sil[1].split(" ")[0] + WFInd1(sil[1].split(" ")[1], sil[1].split(" ")[2]), true) +
        WF1(((i !== massSil.length - 1) ? (massSil[i + 1][0] < 0 ? "-" : "+") : "="), true)
    );
    tag += WF1("0", true) + ";" +
        polAbz() + WF1(massSil[0][1].split(" ")[0] + WFInd1(massSil[0][1].split(" ")[1], massSil[0][1].split(" ")[2]) + "=", true);
    massSil.forEach((sil, i) => {
        tag += i ? (
            WF1(((i === 1) ? ((massSil[0][0] * sil[0] <= 0) ? "" : "-") : ""), true) +
            WF1(sil[1].split(" ")[0] + WFInd1(sil[1].split(" ")[1], sil[1].split(" ")[2]) + ((i !== massSil.length - 1) ?
                ((plus && (massSil[i + 1][0]) > 0) || (!plus && !((massSil[i + 1][0]) > 0)) ? "+" : "-") : "="), true)) : ""

    });
    massSil.forEach((sil, i) => tag += i ? (
        WF1(((i === 1) ? ((massSil[0][0] * sil[0] <= 0) ? "" : "-") : ""), true) +
        WF1(pol4Znach(sil[0]) + ((i !== massSil.length - 1) ?
            ((plus && (massSil[i + 1][0]) > 0) || (!plus && !((massSil[i + 1][0]) > 0)) ? "+" : "-") : "="), true)) : "");
    tag += WF1(pol4Znach(massSil[0][0]), true) + " " + WFSkob1("Н", 2, 2, true) + (pr ? "." : ";");
    return tag;
}

export function polPostrCepVekIzPol(massVek, id, pr) {
    let tag = polAbzInt(id) + "– построить последовательно из полюса цепь известных силовых векторов:" + polAbz();
    massVek.forEach((vek, i) => tag +=
        "<span id=\"vek" + vek.split(" ")[0] + vek.split(" ")[1] + (vek.split(" ")[2] ? vek.split(" ")[2] : "") + "\">" +
        WF1(WFDiakr1(WFDiakr1(vek.split(" ")[0] + WFInd1(vek.split(" ")[1], vek.split(" ")[2]), "->"), "__"), true) +
        "</span>" + ((i !== massVek.length - 1) ? "+" : ""));
    tag += (pr ? "." : ";");
    return tag;
}

export function polZamkCep(zv1, zv2, massVek, id, pr) {
    let tag = polAbzInt(id) + "– замкнуть цепь вектором " + WFVekReak(zv1 + "" + zv2, null, true) +
        " реакции звена " + zv1 + " на звено " + zv2 + ":" + polAbz();
    massVek.forEach((vek) => tag += WF1(WFDiakr1(WFDiakr1(vek.split(" ")[0] +
        WFInd1(vek.split(" ")[1], vek.split(" ")[2]), "->"), "__") + "+", true));
    tag += WF1(WFVekReak(zv1 + "" + zv2) + "=", true) + WFText(0) + (pr ? "." : ";");
    return tag;
}

export function polZamkCep2Zv2Vek(reak1, reak2, massVek, id, pr) {
    let tag = polAbzInt(id) + "– замкнуть цепь векторами " + WFVekReak(reak1.split(" ")[0], reak1.split(" ")[1], true) +
        " нормальной реакции звена " + reak1.split(" ")[0].split("")[0] + " на звено " + reak1.split(" ")[0].split("")[1] + " и " +
        WFVekReak(reak2.split(" ")[0], reak2.split(" ")[1], true) + " нормальной реакции звена " + reak2.split(" ")[0].split("")[0] +
        " на звено " + reak2.split(" ")[0].split("")[1] + ":" + polAbz();
    massVek.forEach((vek) => tag += WF1(WFDiakr1(WFDiakr1(vek.split(" ")[0] +
        WFInd1(vek.split(" ")[1], vek.split(" ")[2]), "->"), "__") + "+", true));
    tag += WF1(WFDiakr1(WFVekReak(reak1.split(" ")[0], reak1.split(" ")[1]), "_") + "+", true) +
        WF1(WFDiakr1(WFVekReak(reak2.split(" ")[0], reak2.split(" ")[1]), "_") + "=", true) + WF1("0", true);
    return tag;
}

export function polZamkCep2Zv1Vek(zv1, zv2, massVek1, massVek2, id, pr) {
    let tag = polAbzInt(id) + "– замкнуть цепи сил на звеньях " + zv1 + " и " + zv2 + " векторами " +
        WFVekReak(zv2 + "" + zv1, null, true) + " и " + WFVekReak(zv1 + "" + zv2, null, true) + " реакций звена " +
        zv2 + " на звено " + zv1 + " и звена " + zv1 + " на звено " + zv2 + " соответственно:" + polAbz();
    massVek1.forEach((vek, i) => tag += WF1(WFDiakr1(WFDiakr1(vek.split(" ")[0] +
        WFInd1(vek.split(" ")[1], vek.split(" ")[2]), "->"), "__") + "+", true));
    tag += WF1(WFVekReak(zv2 + "" + zv1) + "=", true) + WFText(0) + ";" +
        polAbz();
    massVek2.forEach((vek, i) => tag += WF1(WFDiakr1(WFDiakr1(vek.split(" ")[0] +
        WFInd1(vek.split(" ")[1], vek.split(" ")[2]), "->"), "__") + "+", true));
    tag += WF1(WFVekReak(zv1 + "" + zv2) + "=", true) + WFText(0) + (pr ? "." : ";");
    return tag;
}

export function polZamkCep1Zv1Vek(zv1, zv2, massVek, id, pr) {
    let tag = polAbzInt(id) + "– замкнуть цепь сил на звене " + zv2 + " вектором " +
        WFVekReak(zv1 + "" + zv2, null, true) + " реакции звена " + zv1 + " на звено " + zv2 + ":" + polAbz();
    massVek.forEach((vek, i) => tag += WF1(WFDiakr1(WFDiakr1(vek.split(" ")[0] +
        WFInd1(vek.split(" ")[1], vek.split(" ")[2]), "->"), "__") + "+", true));
    tag += WF1(WFVekReak(zv1 + "" + zv2) + "=", true) + WFText(0) + (pr ? "." : ";");
    return tag;
}

export function polPolnReak(zv1, zv2, id, obr, pr) {
    return polAbzInt(id) + "– определить полную реакцию " + WFVekReak(zv1 + "" + zv2, null, true) +
        " звена " + zv1 + " на звено " + zv2 + ":" + polAbz() +
        WF1(WFVekReak(zv1 + "" + zv2, null) + "=" + WFDiakr1(WFVekReak(zv1 + "" + zv2, (obr ? "n" : "τ")), "__") +
            "+" + WFDiakr1(WFVekReak(zv1 + "" + zv2, (obr ? "τ" : "n")), "__"), true) + (pr ? "." : ";");
}

export function polZamkCep1Zv2Vek(zv1, zv2, zv3, vek1, vek2, massVek, id, pr) {
    let tag = polAbzInt(id) + "– замкнуть цепь сил на звене " + zv1 + " векторами " +
        WFVekReak(vek1.split(" ")[0], vek1.split(" ")[1], true) + " нормальной реакции звена " + zv2 + " на звено " +
        zv1 + " (направлена параллельно звену " + zv3 + ") и " + WFVekReak(vek2.split(" ")[0], vek2.split(" ")[1], true) +
        " реакции звена " + zv3 + " на звено " + zv1 + " (направлена перпендикулярно звену " +
        zv3 + ") соответственно:" + polAbz();
    massVek.forEach((vek, i) => tag += WF1(WFDiakr1(WFDiakr1(vek.split(" ")[0] +
        WFInd1(vek.split(" ")[1], vek.split(" ")[2]), "->"), "__") + "+", true));
    tag += WF1(WFDiakr1(WFVekReak(vek1.split(" ")[0], vek1.split(" ")[1]), "_") + "+", true) +
        WF1(WFDiakr1(WFVekReak(vek2.split(" ")[0], vek2.split(" ")[1]), "_") + "=", true) + WFText(0) + (pr ? "." : ";");
    return tag;
}

export function pol3_3(massReak) {
    let tag = polAbz() + "3.3 Реакции звеньев механизма";
    massReak.forEach(pu => tag += polReak(pu));
    return tag;
}

export function polReak(pu) {
    return polAbz() + WF1(WFReak(pu[0].split(" ")[0], pu[0].split(" ")[1]) + " = ", true) +
        " <span id=\"" + pu[1] + "\"></span> " + WFText("×") + " <span id=\"" + pu[2] + "\"></span>" +
        WF1(" = " + pol4Znach(pu[3]) + WFSkob1("Н", 2, 2), true) + (pu[4] ? "." : ";");
}

export function pol3_4(massPu) {
    let tag =
        polAbz() + "3.4. Первая группа Ассура" +
        polAbz() + "Масштабный коэффициент плана сил первой группы Ассура:" +
        polAbz() + WF1("μ" + WFInd1("F" + WFInd1(1)), true) + " = " +
        "<input id=\"muf1vvod\" class=\"vvod-pole-par-meh\" type=\"number\" min=\"0\"> " +
        WF1(WFSkob1(WFDr1("Н", "мм"), 2, 2), true) + "." +
        polAbz() + "Порядок построения плана:";
    massPu.forEach(pu => tag += pu);
    return tag;
}

export function pol3_5(massReak) {
    let tag = polAbz() + "3.5 Реакции звеньев механизма";
    massReak.forEach(pu => tag += polReak(pu));
    return tag;
}

export function pol3_6(massPu) {
    let tag =
        polAbz() + "3.6. Начальный механизм" +
        polAbz() + "Масштабный коэффициент плана сил начального механизма:" +
        polAbz() + WF1("μ" + WFInd1("F" + WFInd1("нач")), true) + " = " +
        "<input id=\"mufnachvvod\" class=\"vvod-pole-par-meh\" type=\"number\" min=\"0\"> " +
        WF1(WFSkob1(WFDr1("Н", "мм"), 2, 2), true) + "." +
        polAbz() + "Порядок построения плана:";
    massPu.forEach(pu => tag += pu);
    return tag;
}

export function polOprObrReak(massReak) {
    let tag;
    if (massReak.length === 1) {
        tag = polAbz() + "– определить реакцию " + WFVekReak(massReak[0][0] + "" + massReak[0][1], massReak[0][2], true) +
            " звена " + massReak[0][0] + " на звено " + massReak[0][1] + ";"
    } else {
        tag = polAbz() + "– определить реакции ";
        massReak.forEach((reak, i) => {
            tag += WFVekReak(reak[0] + "" + reak[1], reak[2], true);
            if (i === massReak.length - 2) tag += " и ";
            else if (i !== massReak.length - 1) tag += ", ";
        });
        tag += " звеньев ";
        massReak.forEach((reak, i) => {
            tag += reak[0];
            if (i === massReak.length - 2) tag += " и ";
            else if (i !== massReak.length - 1) tag += ", ";
        });
        tag += " на звено " + massReak[0][1] + ":";
    }
    massReak.forEach(reak => tag += polAbz() + WF1(WFVekReak(reak[0] + "" + reak[1], reak[2]) +
        "=-" + WFVekReak(reak[1] + "" + reak[0], reak[2]), true) + ";");
    return tag;
}

export function pol3_7(massReak) {
    let tag = polAbz() + "3.7 Реакции звеньев механизма";
    massReak.forEach(pu => tag += polReak(pu));
    return tag;
}

export function pol3_8(massMom, momur) {
    let tag =
        polAbz() + "3.8 Уравновешивающий момент" +
        polAbz() + WF1("M" + WFInd1("у") + " = ", true);
    massMom.forEach((mom, i) => tag +=
        WF1((!i ? "-(" : "") + ((!i && mom[0] < 0) ? "-" : "") + mom[1].split(" ")[0] + WFInd1(mom[1].split(" ")[1]) + "×", true) +
        WF1(mom[2] + ((i !== massMom.length - 1) ? (massMom[i + 1][0] < 0 ? "-" : "+") : ")="), true)
    );
    massMom.forEach((mom, i) => tag +=
        WF1((!i ? "-(" : "") + ((!i && mom[0] < 0) ? "-" : "") + pol4Znach(mom[3]) + "×", true) +
        WF1(pol4Znach(mom[4]) + ((i !== massMom.length - 1) ? (massMom[i + 1][0] < 0 ? "-" : "+") : ")="), true)
    );
    tag += WFText(pol4ZnachVek(momur)) + " " + WFSkob1("Н × м", 2, 2, true) + ".";
    return tag;
}
