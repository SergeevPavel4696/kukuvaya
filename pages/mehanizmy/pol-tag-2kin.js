import {
    WF1, WFDiakr1, WFDr1, WFInd1, WFSk, WFSkob1, WFStep, WFText, WFUgSk, WFUgUsk, WFUsk, WFVekSk, WFVekUgSk, WFVekUsk
} from "../web-formula.js";
import {polTagStrelka} from "../../scripts/utils-svg-geom.js";
import {pol4Znach} from "./utils.js";
import {polAbz, polAbzInt, polNumFormula} from "../razmetka.js";
import {polTochOb} from "./pol-tag.js";

export function pol2(planSk, planUsk) {
    return planSk + planUsk +
        polAbz() + "2 Кинематический анализ механизма" +
        polAbz() +
        "Задачей кинематического анализа является определение перемещений, скоростей, ускорений характерных " +
        "точек механизма по заданным движениям подвижных звеньев начальных механизмов. В анализе " +
        "рассматриваются движения механизма без учета масс его звеньев и сил, воздействующих на него.";
}

export function pol2_1(massPu, massToch, tip, n1, w1, n, w) {
    let tag =
        polAbz() + "2.1 План скоростей механизма" +
        polAbz() + "План представляет собой векторное выражение, связывающее абсолютные " +
        "скорости характерных точек звеньев механизма через их относительные скорости. Связь " +
        "векторов скоростей двух характерных точек звеньев механизма определяется по формулам:" +
        polAbz() + "– для двух точек с постоянным расстоянием между ними:" +
        polNumFormula(WF1(WFVekSk("i" + WFInd1("x")) + " = " + WFVekSk("j" + WFInd1("x")) +
            " + " + WFVekSk("i" + WFInd1("x") + "j" + WFInd1("x")), true) + ",", 2.1) +
        polAbz() + WFVekSk("i" + WFInd1("x"), true) +
        " – вектор скорости " + WFText("i") + "-ой характерной точки " + WFText("x") + "-го звена механизма;" +
        polAbz() + WFVekSk("j" + WFInd1("x"), true) +
        " – вектор скорости " + WFText("j") + "-ой характерной точки " + WFText("x") + "-го звена механизма;" +
        polAbz() + WFVekSk("i" + WFInd1("x") + "j" + WFInd1("x"), true) + " – вектор скорости " +
        WFText("i") + "-ой характерной точки " + WFText("x") + "-го звена механизма относительно " +
        WFText("j") + "-ой характерной точки " + WFText("x") + "-го звена механизма." +
        polAbz() + "– для двух точек с переменным расстоянием между ними:" +
        polNumFormula(WF1(WFVekSk("i" + WFInd1("x")) + " = " + WFVekSk("i" + WFInd1("y")) +
            " + " + WFVekSk("i" + WFInd1("x") + "i" + WFInd1("y")), true) + ",", 2.2) +
        polAbz() + WFVekSk("i" + WFInd1("x"), true) +
        " – вектор скорости " + WFText("i") + "-ой характерной точки " + WFText("x") + "-го звена механизма;" +
        polAbz() + WFVekSk("i" + WFInd1("y"), true) +
        " – вектор скорости " + WFText("i") + "-ой характерной точки " + WFText("y") + "-го звена механизма;" +
        polAbz() + WFVekSk("i" + WFInd1("x") + "i" + WFInd1("y"), true) +
        " – вектор скорости " + WFText("i") + "-ой характерной точки " + WFText("x") + "-го звена механизма " +
        "относительно  " + WFText("i") + "-ой характерной точки " + WFText("y") + "-го звена механизма." +
        polAbz() + "Масштабный коэффициент плана скоростей:" +
        polAbz() + WF1("μ" + WFInd1("v"), true) + " = " +
        "<input id=\"muvvvod\" class=\"vvod-pole-par-meh\" type=\"number\" min=\"0\"> " +
        WF1(WFSkob1(WFDr1(WFDr1("м", "с", true), "мм"), 2, 2), true) + "." +
        polAbz() + "В технике в кинематических и динамических расчетах вместо частот вращения, как правило, " +
        "используют угловые скорости. Зависимость угловой скорости от частоты вращения определяется по формуле:" +
        polNumFormula(WF1("ω = " + WFDr1("2 × π × n", 60), true) + ",", 2.3) +
        polAbz() + WFText("ω") + " – угловая скорость;" +
        polAbz() + WFText("n") + " – частота вращения.";
    if (tip === 1) {
        tag +=
            polAbz() + "Угловые скорости кривошипа начального механизма и ротора двигателя:" +
            polAbz() + WF1("ω" + WFInd1(1) + " = " + WFDr1("2 × π × " + pol4Znach(n1), 60) +
                " = " + pol4Znach(w1) + WFSkob1(WFStep("с", -1), 2, 2), true) + ";" +
            polAbz() + WF1("ω" + WFInd1("дв") + " = " + WFDr1("2 × π × " + pol4Znach(n), 60) +
                " = " + pol4Znach(w) + WFSkob1(WFStep("с", -1), 2, 2), true) + ".";
    }
    if (tip === 2) {
        tag +=
            polAbz() + "Угловая скорость кривошипа начального механизма:" +
            polAbz() + WF1("ω" + WFInd1(1) + " = " + WFDr1("2 × π × " + pol4Znach(n1), 60) +
                " = " + pol4Znach(w1) + WFSkob1(WFStep("с", -1), 2, 2), true) + ".";
    }
    tag +=
        polAbz() + "Окружные скорости точек звеньев механизма определяются по формуле:" +
        polNumFormula(WF1("v" + WFInd1("i" + WFInd1("x") + "j" + WFInd1("x")) + " = " +
            WFUgSk("x") + " × I" + WFInd1("x") + "J" + WFInd1("x"), true) + ",", 2.4) +
        polAbz() + WF1("v" + WFInd1("i" + WFInd1("x") + "j" + WFInd1("x")), true) + " – скорость " + WFText("i") +
        "-ой характерной точки " + WFText("x") + "-го звена механизма, относительно " +
        WFText("j") + "-ой характерной точки " + WFText("x") + "-го звена механизма;" +
        polAbz() + WF1("ω" + WFInd1("x"), true) + " – угловая скорость " + WFText("x") + "-ого звена механизма;" +
        polAbz() + WFText("I" + WFInd1("x") + "J" + WFInd1("x")) + " – расстояние между " + WFText("i") +
        "-ой и " + WFText("j") + "-ой характерными точками " + WFText("x") + "-го звена механизма." +
        polAbz() + WF1("v" + WFInd1(massToch[0]) + " = " + pol4Znach(w1) + " × " + pol4Znach(massToch[1]) +
            " = " + pol4Znach(massToch[2]) + WFSkob1(WFDr1("м", "с"), 2, 2), true) + ".";
    tag += polAbz() + "Порядок построения плана:";
    massPu.forEach(pu => tag += pu);
    return tag;
}

export function polPostrSkKriv(id, t, zv, pr) {
    return polAbzInt(id) + "– построить из полюса вектор " + WFVekSk(t, true) + " скорости точки " + WFText(t) +
        " (перпендикулярно звену " + WFText(zv) + " в сторону движения звена " + WFText(zv) + ")" + (pr ? "." : ";");
}

export function polPostrSkTochkiKrivKor(id, t1, t2, t3, dl1, dl2, ug, pr) {
    const ugol = !ug ? "" : (ug > 0 ? WFSkob1("↺" + ug + "°", 1, 1) : WFSkob1("↻" + ug + "°", 1, 1));
    return polAbzInt(id) + "– построить из полюса вектор " + WFVekSk(t1, true) +
        " скорости точки " + WFText(t1) + ", пропорциональный отношению " + WFText(t2 + t1) +
        " к " + WFText(t2 + t3) + " и вектору " + WFVekSk(t3, true) + ":" +
        polAbz() +
        WF1(WFVekSk(t1) + " = ", true) +
        WF1(WFDr1(t2 + t1, t2 + t3) + " × ", true) +
        WF1(WFVekSk(t3) + ugol + " = ", true) +
        WF1(WFDr1(pol4Znach(dl1), pol4Znach(dl2)) + " × ", true) +
        WF1(WFVekSk(t3) + ugol + " = ", true) +
        WF1(pol4Znach(dl1 / dl2) + " × ", true) +
        WF1(WFVekSk(t3) + ugol, true) + (pr ? "." : ";");
}

export function polPostrSkParyVr(id, t1, t2, zv1, zv2, pr) {
    return polAbzInt(id) + "– построить из конца вектора " + WFVekSk(t1, true) + " и полюса до совпадения " +
        "концами вектор " + WFVekSk(t2 + t1, true) + " скорости точки " + WFText(t2) + " относительно точки " +
        WFText(t1) + " (перпендикулярно звену " + WFText(zv1) + ") и вектор " + WFVekSk(t2, true) +
        " скорости точки " + WFText(t2) + " (перпендикулярно звену " + WFText(zv2) + "), соответственно:" +
        polAbz() + WF1(WFVekSk(t2) + " = " + WFVekSk(t1) + " + " + WFVekSk(t2 + t1), true) + (pr ? "." : ";");
}

export function polPostrSkPolz(id, t1, t2, zv1, zv2, pr) {
    return polAbzInt(id) +
        "– построить из конца вектора " + WFVekSk(t1, true) + " и полюса до совпадения концами вектор " +
        WFVekSk(t2 + t1, true) + " скорости точки " + WFText(t2) + " относительно точки " + WFText(t1) +
        " (перпендикулярно звену " + WFText(zv1) + ") и вектор " + WFVekSk(t2, true) + " скорости точки " +
        WFText(t2) + " (вдоль движения звена " + WFText(zv2) + "), " + "соответственно:" +
        polAbz() + WF1(WFVekSk(t2) + " = " + WFVekSk(t1) + " + " + WFVekSk(t2 + t1), true) + (pr ? "." : ";");
}

export function polPostrSkKam(id, t, zv1, zv2, pr) {
    return polAbzInt(id) +
        "– построить из конца вектора " + WFVekSk(t + WFInd1(zv1), true) + " и полюса до совпадения концами вектор " +
        WFVekSk(t + WFInd1(zv2) + t + WFInd1(zv1), true) + " скорости точки " + WF1(t + WFInd1(zv2), true) +
        " относительно точки " + WF1(t + WFInd1(zv1), true) + " (параллельно звену " + WFText(zv2) + ") и вектор " +
        WFVekSk(t + WFInd1(zv2), true) + " скорости точки " + WF1(t + WFInd1(zv2), true) + " (перпендикулярно " +
        "звену " + WFText(zv2) + "), " + "соответственно:" + polAbz() + WF1(WFVekSk(t + WFInd1(zv2)) + " = " +
            WFVekSk(t + WFInd1(zv1)) + " + " + WFVekSk(t + WFInd1(zv2) + t + WFInd1(zv1)), true) + (pr ? "." : ";");
}

export function polPostrSkTochkiZvena(id, t1, t2, t3, dl1, dl2, zn, pr) {
    const znak = zn ? "-" : "+";
    const _t3 = (polTochOb(t3));
    return polAbzInt(id) + "– построить из полюса на вектор " + WFVekSk(t1 + t2, true) + " вектор " +
        WFVekSk(_t3, true) + " скорости точки " + WFText(_t3) + ", пропорциональный отношению " +
        WFText(t2 + _t3) + " к " + WFText(t2 + t1) + " и вектору " + WFVekSk(t1 + t2, true) + ":" +
        polAbz() +
        WF1(WFVekSk(_t3) + " = ", true) +
        WF1(WFVekSk(t2) + " + ", true) +
        WF1(WFVekSk(_t3 + t2) + " = ", true) +
        WF1(WFVekSk(t2) + znak, true) +
        WF1(WFDr1(t2 + _t3, t2 + t1) + " × ", true) +
        WF1(WFVekSk(t1 + t2) + " = ", true) +
        WF1(WFVekSk(t2) + znak, true) +
        WF1(WFDr1(pol4Znach(dl1), pol4Znach(dl2)) + " × ", true) +
        WF1(WFVekSk(t1 + t2) + " = ", true) +
        WF1(WFVekSk(t2) + znak, true) +
        WF1(pol4Znach(dl1 / dl2) + " × ", true) +
        WF1(WFVekSk(t1 + t2), true) + (pr ? "." : ";");
}

export function pol2_2(massSk, massUgSk) {
    let tag =
        polAbz() + "2.2 Скорости звеньев механизма" +
        polAbz() + "Линейные значения векторных величин определяются из плана векторов по формуле:" +
        polNumFormula(WF1("x" + WFInd1("i") + " = " + WFSkob1(WFDiakr1("x" + WFInd1("i"), "->"), 4, 4) +
            " × " + "μ" + WFInd1("x"), true) + ",", 2.5) +
        polAbz() + WF1("x" + WFInd1("i"), true) + " – величина " + WFText("i") + "-ого вектора плана;" +
        polAbz() + WFSkob1(WFDiakr1("x" + WFInd1("i"), "->"), 4, 4, true) +
        " – длина " + WFText("i") + "-ого вектора плана;" +
        polAbz() + WF1("μ" + WFInd1("x"), true) + " – масштабный коэффициент плана.";
    massSk.forEach(pu => tag += polSk(pu));
    tag +=
        polAbz() + "Угловые скорости звеньев механизма определяются по формуле:" +
        polNumFormula(WF1("ω" + WFInd1("x") + " = " + WFDr1("v" + WFInd1("i" + WFInd1("x") + "j" +
            WFInd1("x")), "I" + WFInd1("x") + "J" + WFInd1("x")), true) + ",", 2.6) +
        polAbz() + WF1("ω" + WFInd1("x"), true) + " – угловая скорость " + WFText("x") + "-ого звена механизма;" +
        polAbz() + WF1("v" + WFInd1("i" + WFInd1("x") + "j" + WFInd1("x")), true) + " – скорость " + WFText("i") +
        "-ой характерной точки " + WFText("x") + "-го звена механизма, относительно " +
        WFText("j") + "-ой характерной точки  " + WFText("x") + "-го звена механизма;" +
        polAbz() + WFText("I" + WFInd1("x") + "J" + WFInd1("x")) + " – расстояние между " +
        WFText("i") + "-ой и " + WFText("j") + "-ой характерными точками " + WFText("x") + "-го звена механизма.";
    massUgSk.forEach(pu => tag += polUgSk(pu));
    return tag;
}

export function polSk(pu) {
    return polAbz() + WF1("v" + WFInd1((polTochOb(pu[0]))) + " = ", true) +
        " <span id=\"" + pu[1] + "\"></span> × <span id=\"" + pu[2] + "\"></span> = " + pol4Znach(pu[3]) + " " +
        WF1(WFSkob1(WFDr1("м", "с"), 2, 2), true) + (pu[4] ? "." : ";");
}

export function polUgSk(pu) {
    return polAbz() + WF1("ω" + WFInd1(pu[0]) + " = " + WFDr1(pol4Znach(pu[1]), pol4Znach(pu[2])) +
        " = " + pol4Znach(pu[3]) + WFSkob1(WFStep("с", -1), 2, 2), true) + (pu[4] ? "." : ";");
}

export function pol2_3(massPu) {
    let tag =
        polAbz() + "2.3 План ускорений механизма" +
        polAbz() + "План представляет собой векторное выражение, связывающее абсолютные " +
        "ускорения характерных точек звеньев механизма через их относительные ускорения. " +
        "Связь векторов ускорений двух характерных точек звеньев механизма определяется по формулам:" +
        polAbz() + "– для двух точек с постоянным расстоянием между ними:" +
        polNumFormula(WF1(WFVekUsk("i" + WFInd1("x")) + " = " + WFVekUsk("j" + WFInd1("x")) +
            " + " + WFVekUsk("i" + WFInd1("x") + "j" + WFInd1("x"), "n") + " + " +
            WFVekUsk("i" + WFInd1("x") + "j" + WFInd1("x"), "τ"), true) + ",", 2.7) +
        polAbz() + WFVekUsk("i" + WFInd1("x"), null, true) +
        " – вектор ускорения " + WFText("i") + "-ой характерной точки " + WFText("x") + "-го звена механизма;" +
        polAbz() + WFVekUsk("j" + WFInd1("x"), null, true) +
        " – вектор ускорения " + WFText("j") + "-ой характерной точки " + WFText("x") + "-го звена механизма;" +
        polAbz() + WFVekUsk("i" + WFInd1("x") + "j" + WFInd1("x"), "n", true) +
        " – вектор нормального ускорения " + WFText("i") + "-ой характерной точки " + WFText("x") + "-го звена " +
        "механизма относительно " + WFText("j") + "-ой характерной точки " + WFText("x") + "-го звена механизма;" +
        polAbz() + WFVekUsk("i" + WFInd1("x") + "j" + WFInd1("x"), "τ", true) +
        " – вектор тангенциального ускорения " + WFText("i") + "-ой характерной точки " + WFText("x") + "-го звена " +
        "механизма относительно " + WFText("j") + "-ой характерной точки " + WFText("x") + "-го звена механизма." +
        polAbz() + "Относительные нормальные ускорения точек звеньев механизма определяются по формуле:" +
        polNumFormula(WF1(WFUsk("i" + WFInd1("x") + "j" + WFInd1("x"), "n") +
            " = ω" + WFInd1("x", 2) + " × I" + WFInd1("x") + "J" + WFInd1("x"), true) + ",", 2.8) +
        polAbz() + WFUsk("i" + WFInd1("x") + "j" + WFInd1("x"), "n", true) + " – нормальное ускорение " +
        WFText("i") + "-ой характерной точки " + WFText("x") + "-го звена механизма относительно " +
        WFText("j") + "-ой характерной точки " + WFText("x") + "-го звена механизма;" +
        polAbz() + WFUgSk("x", true) + " – угловая скорость " + WFText("x") + "-го звена механизма;" +
        polAbz() + WFText("I" + WFInd1("x") + "J" + WFInd1("x"), true) + " – расстояние между " + WFText("i") +
        "-ой и " + WFText("j") + "-ой характерными точками " + WFText("x") + "-го звена механизма." +
        polAbz() + "Относительные тангенциальные ускорения точек звеньев механизма определяются по формуле:" +
        polNumFormula(WF1(WFUsk("i" + WFInd1("x") + "j" + WFInd1("x"), "τ") +
            " = " + WFUgUsk("x") + " × I" + WFInd1("x") + "J" + WFInd1("x"), true) + ",", 2.9) +
        polAbz() + WFUsk("i" + WFInd1("x") + "j" + WFInd1("x"), "τ", true) + " – тангенциальное ускорение " +
        WFText("i") + "-ой характерной точки " + WFText("x") + "-го звена механизма относительно " +
        WFText("j") + "-ой характерной точки " + WFText("x") + "-го звена механизма;" +
        polAbz() + WFUgUsk("x", null, true) + " – угловое ускорение " + WFText("x") + "-го звена механизма;" +
        polAbz() + WFText("I" + WFInd1("x") + "J" + WFInd1("x"), true) + " – расстояние между " + WFText("i") +
        "-ой и " + WFText("j") + "-ой характерными точками " + WFText("x") + "-го звена механизма." +
        polAbz() + "– для двух точек с переменным расстоянием между ними:" +
        polNumFormula(WF1(WFVekUsk("i" + WFInd1("x")) + " = " + WFVekUsk("i" + WFInd1("y")) +
            " + " + WFVekUsk("i" + WFInd1("x"), "k") +
            " + " + WFVekUsk("i" + WFInd1("x") + "i" + WFInd1("y")), true) + ",", "2.10") +
        polAbz() + WFVekUsk("i" + WFInd1("x"), null, true) + " – вектор ускорения " +
        WFText("i") + "-ой характерной точки " + WFText("x") + "-го звена механизма;" +
        polAbz() + WFVekUsk("i" + WFInd1("y"), null, true) + " – вектор ускорения " +
        WFText("i") + "-ой характерной точки " + WFText("y") + "-го звена механизма;" +
        polAbz() + WFVekUsk("i" + WFInd1("x"), "k", true) + " – вектор кориолисового " +
        "ускорения " + WFText("i") + "-ой характерной точки " + WFText("x") + "-го звена механизма;" +
        polAbz() + WFVekUsk("i" + WFInd1("x") + "i" + WFInd1("y"), null, true) +
        " – вектор ускорения " + WFText("i") + "-ой характерной точки " + WFText("x") + "-го звена " +
        "механизма относительно " + WFText("i") + "-ой характерной точки " + WFText("y") + "-го звена механизма." +
        polAbz() + "Вектор кориолисового ускорение определяется по формуле:" +
        polNumFormula(WF1(WFVekUsk("i" + WFInd1("x"), "k") + " = 2 × " + WFSkob1(WFVekUgSk("x") +
            " × " + WFVekSk("i" + WFInd1("x") + "i" + WFInd1("y")), 2, 2), true) + ",", 2.11) +
        polAbz() + WFVekUsk("i" + WFInd1("x"), "k", true) + " – вектор кориолисового " +
        "ускорения " + WFText("i") + "-ой характерной точки " + WFText("x") + "-го звена механизма;" +
        polAbz() + WFVekUgSk("x", true) + " – вектор угловой скорости " + WFText("x") + "-ого звена механизма;" +
        polAbz() + WFVekSk("i" + WFInd1("x") + "i" + WFInd1("y"), true) + " – вектор скорости " +
        WFText("i") + "-ой характерной точки " + WFText("x") + "-ого звена механизма относительно " +
        WFText("i") + "-ой характерной точки " + WFText("y") + "-ого звена механизма." +
        polAbz() + "Кориолисово ускорение определяется по формуле:" +
        polNumFormula(WF1(WFUsk("i" + WFInd1("x"), "k") + " = 2 × " + WFUgSk("x") +
            " × " + WFSk("i" + WFInd1("x") + "i" + WFInd1("y")), true) + ",", 2.12) +
        polAbz() + WFUsk("i" + WFInd1("x"), "k", true) + " – кориолисово " +
        "ускорение " + WFText("i") + "-ой характерной точки " + WFText("x") + "-го звена механизма;" +
        polAbz() + WFUgSk("x", true) + " – угловая скорость " + WFText("x") + "-ого звена механизма;" +
        polAbz() + WFSk("i" + WFInd1("x") + "i" + WFInd1("y"), true) + " – скорость " +
        WFText("i") + "-ой характерной точки " + WFText("x") + "-ого звена механизма относительно " +
        WFText("i") + "-ой характерной точки " + WFText("y") + "-ого звена механизма." +
        polAbz() + "Масштабный коэффициент плана ускорений:" +
        polAbz() + WF1("μ" + WFInd1("a") + " = ", true) +
        "<input id=\"muavvod\" class=\"vvod-pole-par-meh\" type=\"number\" min=\"0\"> " +
        WF1(WFSkob1(WFDr1(WFDr1("м", WFStep("с", 2), true), "мм"), 2, 2), true) + "." +
        polAbz() + "Порядок построения плана:";
    massPu.forEach(i => tag += i);
    return tag;
}

export function polPostrUskKriv(id, t1, t2, zv, w, dlzv, a_vel, pr) {
    return polAbzInt(id) +
        "– построить из полюса вектор " + WFVekUsk(t1, null, true) + " ускорения точки " + WFText(t1) +
        " (параллельно звену " + WFText(zv) + " в направлении от точки " + WFText(t1) + " к точке " + WFText(t2) +
        "). Поскольку звено " + WFText(zv) + " движется с постоянной скоростью и тангенциальное ускорение точки " +
        WFText(t1) + " относительно точки " + WFText(t2) + " равно нулю, то полное ускорение точки " + WFText(t1) +
        " совпадает с её нормальным ускорением относительно точки " + WFText(t2) + ":" +
        polAbz() + WF1(WFVekUsk(t1) + " = " + WFVekUsk(t1 + t2, "n") + " + " + WFVekUsk(t1 + t2, "τ"), true) + ";" +
        polAbz() + WF1("a" + WFInd1(t1 + t2, "n") + " = ω" + WFInd1(zv, 2) + " × " +
            t2 + t1 + " = " + WFStep(pol4Znach(w), 2) + " × " + pol4Znach(dlzv) + " = " +
            pol4Znach(a_vel) + WFSkob1(WFDr1("м", WFStep("с", 2)), 2, 2), true) + ";" +
        polAbz() +
        WF1("ω" + WFInd1(zv) + " = const ⟶ ε" + WFInd1(zv) + " = 0 " + WFSkob1(WFStep("с", -2), 2, 2), true) + ";" +
        polAbz() + WF1("a" + WFInd1(t1 + t2, "τ") + " = ε" + WFInd1(zv) + " × " + t2 + t1 +
            " = 0 × " + pol4Znach(dlzv) + " = 0 " + WFSkob1(WFDr1("м", WFStep("с", 2)), 2, 2), true) + ";" +
        polAbz() + WF1(WFVekUsk(t1) + " = " + WFVekUsk(t1 + t2, "n"), true) + ";" +
        polAbz() + WF1("a" + WFInd1(t1) + " = a" + WFInd1(t1 + t2, "n") + " = " + pol4Znach(a_vel) +
            " " + WFSkob1(WFDr1("м", WFStep("c", 2)), 2, 2), true) + (pr ? "." : ";");
}

export function polPostrUskTochkiKrivKor(id, t1, t2, t3, dl1, dl2, ug, pr) {
    const ugol = !ug ? "" : (ug > 0 ? WFSkob1("↺" + ug + "°", 1, 1) : WFSkob1("↻" + ug + "°", 1, 1));
    return polAbzInt(id) + "– построить из полюса вектор " +
        WFVekUsk(polTochOb(t1), null, true) + " ускорения точки " +
        WFText(polTochOb(t1)) + ", пропорциональный отношению " +
        WFText(t2 + polTochOb(t1)) + " к " + WFText(t2 + t3) + " и вектору " +
        WFVekUsk(t3, null, true) + ":" +
        polAbz() + WF1(WFVekUsk(polTochOb(t1)) + " = " +
            WFDr1(t2 + polTochOb(t1), t2 + t3) + " × " + WFVekUsk(t3) +
            ugol + " = " + WFDr1(pol4Znach(dl1), pol4Znach(dl2)) + " × " + WFVekUsk(t3) + ugol + " = " +
            pol4Znach(dl1 / dl2) + " × " + WFVekUsk(t3) + ugol, true) + (pr ? "." : ";");
}

export function polPostrNormUsk(id, t1, t2, zv, w, dl, a_vel, pr) {
    return polAbzInt(id) + "– построить из полюса вектор " + WFVekUsk(t1 + t2, " n", true) +
        " нормального ускорения точки " + WFText(t1) + " относительно точки " + WFText(t2) + " (параллельно звену " +
        WFText(zv) + " в направлении от точки " + WFText(t1) + " к точке " + WFText(t2) + "):" +
        polAbz() + WF1("a" + WFInd1(t1 + t2, "n") + " = ω" + WFInd1(zv, 2) + " × " +
            t1 + t2 + " = " + WFStep(pol4Znach(w), 2) + " × " + pol4Znach(dl) + " = " + pol4Znach(a_vel) +
            WFSkob1(WFDr1("м", WFStep("с", 2)), 2, 2), true) + (pr ? "." : ";");
}

export function polPostrNormOtnUsk(id, t1, t2, zv, w, dl, a_vel, pr) {
    return polAbzInt(id) +
        "– построить из конца вектора " + WFVekUsk(t1, null, true) + " вектор " + WFVekUsk(t2 + t1, " n", true) +
        " нормального ускорения точки " + WFText(t2) + " относительно точки " + WFText(t1) + " (параллельно звену " +
        WFText(zv) + " в направлении от точки " + WFText(t2) + " к точке " + WFText(t1) + "):" +
        polAbz() + WF1("a" + WFInd1(t2 + t1, "n") + " = ω" + WFInd1(zv, 2) + " × " +
            t1 + t2 + " = " + WFStep(pol4Znach(w), 2) + " × " + pol4Znach(dl) + " = " + pol4Znach(a_vel) +
            WFSkob1(WFDr1("м", WFStep("с", 2)), 2, 2), true) + (pr ? "." : ";");
}

export function polPostrKorOtnUsk(id, t, tip, zv1, zv2, w, v, a_vel, pr) {
    return polAbzInt(id) +
        "– построить из конца вектора " + WFVekUsk(t + WFInd1(zv1), tip, true) + " вектор " + WFVekUsk(t + WFInd1(zv2), "k", true) +
        " кориолисова ускорения точки " + WFText(t) + " звена " + WFText(zv2) + " (перпендикулярно звену " +
        WFText(zv2) + " в направлении по правилу правой руки для векторного произведения векторов):" +
        polAbz() + WF1(WFUsk(t + WFInd1(zv2), "k") + " = 2 × " + WFUgSk(zv2) + " × " +
            WFSk(t + WFInd1(zv2) + t + WFInd1(zv1)) + " = 2 × " + pol4Znach(w) + " × " + pol4Znach(v) + " = " + pol4Znach(a_vel) +
            WFSkob1(WFDr1("м", WFStep("с", 2)), 2, 2), true) + (pr ? "." : ";");
}

export function polPostrUskParyVr(id, t1, t2, t3, zv1, zv2, pr) {
    return polAbzInt(id) + "– построить из конца вектора " +
        WFVekUsk(t1 + t2, "n", true) + " и конца вектора " + WFVekUsk(t1 + t3, "n", true) + " до совпадения " +
        "концами вектор " + WFVekUsk(t1 + t2, "τ", true) + " тангенциального ускорения точки " + WFText(t1) +
        " относительно точки " + WFText(t2) + " (перпендикулярно звену " + WFText(zv1) + ") и вектор " +
        WFVekUsk(t1 + t3, "τ", true) + " тангенциального ускорения точки " + WFText(t1) + " относительно " +
        "точки " + WFText(t3) + " (перпендикулярно звену " + WFText(zv2) + "), соответственно:" +
        polAbz() + WF1(WFVekUsk(t2) + " + " + WFVekUsk(t1 + t2, "n") + " + " + WFVekUsk(t1 + t2, "τ") +
            " = " + WFVekUsk(t1 + t3, "n") + " + " + WFVekUsk(t1 + t3, "τ"), true) + (pr ? "." : ";");
}

export function polPostrUskParyPolz(id, t1, t2, zv1, zv2, pr) {
    return polAbzInt(id) +
        "– построить из конца вектора " + WFVekUsk(t1 + t2, "n", true) + " и полюса до совпадения концами вектор " +
        WFVekUsk(t1 + t2, "τ", true) + " тангенциального ускорения точки " + WFText(t1) + " относительно точки " +
        WFText(t2) + " (перпендикулярно звену " + WFText(zv1) + ") и вектор " + WFVekUsk(t1, null, true) +
        " ускорения точки " + WFText(t1) + " (вдоль движения звена " + WFText(zv2) + "), соответственно:" +
        polAbz() + WF1(WFVekUsk(t1) + " = " + WFVekUsk(t2) + " + " +
            WFVekUsk(t1 + t2, "n") + " + " + WFVekUsk(t1 + t2, "τ"), true) + (pr ? "." : ";");
}

export function polPostrUskParyKam(id, t1, t2, zv1, zv2, pr) {
    return polAbzInt(id) +
        "– построить из концов векторов " + WFVekUsk(t1 + WFInd1(zv1), "k", true) + " и " +
        WFVekUsk(t1 + WFInd1(zv1) + t2, "n", true) + " до совпадения концами вектор " +
        WFVekUsk(t1 + WFInd1(zv1) + t1 + WFInd1(zv2), null, true) + " ускорения точки " +
        WFText(t1) + " звена " + WFText(zv1) + " относительно точки " + WFText(t1) + " звена " + WFText(zv2) +
        " (параллельно звену " + WFText(zv1) + ") и вектор " + WFVekUsk(t1 + WFInd1(zv1) + t2, "τ", true) +
        " тангенциального ускорения точки " + WFText(t1) + " звена " + WFText(zv1) + " относительно точки " +
        WFText(t2) + " (перпендикулярно звену " + WFText(zv1) + "), соответственно:" +
        polAbz() + WF1(WFVekUsk(t1 + WFInd1(zv2)) + " + " + WFVekUsk(t1 + WFInd1(zv1), "k") + " + " +
            WFVekUsk(t1 + WFInd1(zv1) + t1 + WFInd1(zv2)) + " = " + WFVekUsk(t1 + WFInd1(zv1) + t2, "n") +
            " + " + WFVekUsk(t1 + WFInd1(zv1) + t2, "τ"), true) + (pr ? "." : ";");
}

export function polPostrOtnUsk(id, t1, t2, pr) {
    return polAbzInt(id) + "– построить из начала вектора " +
        WFVekUsk(t1 + t2, "n", true) + " в конец вектора " + WFVekUsk(t1 + t2, "τ", true) + " вектор " +
        WFVekUsk(t1 + t2, null, true) + " ускорения точки " + WFText(t1) + " относительно точки " + WFText(t2) + ":" +
        polAbz() + WF1(WFVekUsk(t1 + t2) + " = " + WFVekUsk(t1 + t2, "n") +
            " + " + WFVekUsk(t1 + t2, "τ"), true) + (pr ? "." : ";");
}

export function polPostrAbsUsk(id, t1, t2, pr) {
    return polAbzInt(id) +
        "– построить из полюса в конец вектора " + WFVekUsk(t1 + t2, "τ", true) +
        " вектор " + WFVekUsk(t1, null, true) + " ускорения точки " + WFText(t1) + ":" +
        polAbz() + WF1(WFVekUsk(t1) + " = " + WFVekUsk(t1 + t2, "n") +
            " + " + WFVekUsk(t1 + t2, "τ"), true) + (pr ? "." : ";");
}

export function polPostrUskTochkiZvena(id, t1, t2, t3, dl1, dl2, zn, pr) {
    const znak = zn ? "–" : "+";
    return polAbzInt(id) +
        "– построить из полюса на вектор " + WFVekUsk(t1 + t2, null, true) + " вектор " +
        WFVekUsk(polTochOb(t3), null, true) + " ускорения точки " + WFText(polTochOb(t3)) +
        ", пропорциональный отношению " + WFText(t2 + (polTochOb(t3))) +
        " к " + WFText(t2 + t1) + " и вектору " + WFVekUsk(t1 + t2, null, true) + ":" +
        polAbz() +
        WF1(WFVekUsk(polTochOb(t3)) + " = ", true) +
        WF1(WFVekUsk(t2) + " + ", true) +
        WF1(WFVekUsk(polTochOb(t3) + t2) + " = ", true) +
        WF1(WFVekUsk(t2) + znak, true) +
        WF1(WFDr1(t2 + (polTochOb(t3)), t2 + t1) + " × ", true) +
        WF1(WFVekUsk(t1 + t2) + " = ", true) +
        WF1(WFVekUsk(t2) + znak, true) +
        WF1(WFDr1(pol4Znach(dl1), pol4Znach(dl2)) + " × ", true) +
        WF1(WFVekUsk(t1 + t2) + " = ", true) +
        WF1(WFVekUsk(t2) + znak, true) +
        WF1(pol4Znach(dl1 / dl2) + " × ", true) +
        WF1(WFVekUsk(t1 + t2), true) +
        (pr ? "." : ";");
}

export function pol2_4(massUsk, massUgUsk) {
    let tag = polAbz() + "2.4 Ускорения звеньев механизма";
    massUsk.forEach(pu => tag += polUsk(pu));
    tag +=
        polAbz() + "Угловые ускорения звеньев механизма определяются по формуле:" +
        polNumFormula(WF1("ε" + WFInd1("x") + " = " + WFDr1(WFUsk("i" + WFInd1("x") + "j" +
            WFInd1("x"), "τ"), "I" + WFInd1("x") + "J" + WFInd1("x")), true) + ",", 2.13) +
        polAbz() +
        WF1("ε" + WFInd1("x"), true) + " – угловое ускорение " + WFText("x") + "-ого звена механизма;" +
        polAbz() + WFUsk("i" + WFInd1("x") + "j" + WFInd1("x"), "τ", true) + " – тангенциальное ускорение " +
        WFText("i") + "-ой характерной точки " + WFText("x") + "-го звена механизма, относительно " + WFText("j") +
        "-ой характерной точки " + WFText("x") + "-го звена механизма;" +
        polAbz() + WFText("I" + WFInd1("x") + "J" + WFInd1("x")) + " – расстояние между " + WFText("i") +
        "-ой и " + WFText("j") + "-ой характерными точками " + WFText("x") + "-го звена механизма.";
    massUgUsk.forEach(pu => tag += polUgUsk(pu));
    return tag;
}

export function polUsk(pu) {
    let ind;
    if (typeof pu[0] === "number") {
        ind = WFInd1("S" + WFInd1(pu[0]));
    } else if (pu[0].includes(" ")) {
        ind = WFInd1(pu[0].split(" ")[0], pu[0].split(" ")[1]);
    } else {
        ind = WFInd1(pu[0]);
    }
    return polAbz() + WF1("a" + ind + " = ", true) + " <span id=\"" + pu[1] + "\"></span> " +
        WFText("×") + " <span id=\"" + pu[2] + "\"></span>" + WF1(" = " + pol4Znach(pu[3]) +
            WFSkob1(WFDr1("м", WFStep("с", 2)), 2, 2), true) + (pu[4] ? "." : ";");
}

export function polUgUsk(pu) {
    return polAbz() + WF1("ε" + WFInd1(pu[0]) + " = " + WFDr1(pol4Znach(pu[1]), pol4Znach(pu[2])) +
        " = " + pol4Znach(pu[3]) + WFSkob1(WFStep("с", -2), 2, 2), true) + (pu[4] ? "." : ";");
}


export function pol2_5(w1) {
    return polAbz() + "2.5 Кинематические диаграммы рабочего органа механизма" +
        polAbz() +
        "Метод кинематических диаграмм применяется для определения перемещений, скоростей и ускорений " +
        "звеньев механизма в случаях, когда невозможно определить закон движения звеньев, либо он плохо " +
        "поддаётся аналитическому дифференцированию. Метод основан на графическом дифференцировании." +
        polAbz() + "Порядок построения диаграмм:" +
        polAbz() + "– построить диаграмму перемещений по времени;" +
        polAbz() + "– построить из полюса скоростей отрезки до оси ординат (скоростей), " +
        "параллельные касательным к диаграмме перемещений в соответствующих положениях механизма;" +
        polAbz() + "– построить из концов построенных отрезков на оси ординат " +
        "горизонтальные отрезки до соответствующих точек положений механизма;" +
        polAbz() + "– построить по построенным точкам диаграмму скоростей по времени;" +
        polAbz() + "– построить из полюса ускорений отрезки до оси ординат (ускорений), " +
        "параллельные касательным к диаграмме скоростей в соответствующих положениях механизма;" +
        polAbz() + "– построить из концов построенных отрезков на оси ординат " +
        "горизонтальные отрезки до соответствующих точек положения механизма;" +
        polAbz() + "– построить по построенным точкам диаграмму ускорений по времени." +
        polAbz() + "Масштабные коэффициенты диаграмм:" +
        polAbz() + "– коэффициент времени. Определяется по формуле:" +
        polNumFormula(WF1("μ" + WFInd1("T") + " = " + WFDr1("T", "l" + WFInd1("0-12")) + " = " +
            WFDr1("2 × π", "ω" + WFInd1(1) + " × l" + WFInd1("0-12")), true) + ",", 2.14) +
        polAbz() + WFText("T") + " – период одного такта работы механизма;" +
        polAbz() + WFText("l" + WFInd1("0-12")) +
        " – длина отрезка периода одного такта работы механизма на диаграмме;" +
        polAbz() + WF1("μ" + WFInd1("T") + " = " + WFSkob1("2 × π", 1, 1) + "/(", true) +
        pol4Znach(w1) + WF1(" × ", true) + "<input id=\"l012\" class=\"vvod-pole-par-meh\" type=\"number\" min=\"0\">" +
        WF1(") = ", true) + "<span id=\"di-mut1\"></span> " + WF1(WFSkob1(WFDr1("с", "мм"), 2, 2), true) + ";" +
        polAbz() + "– коэффициент перемещений:" +
        polAbz() + WF1("μ" + WFInd1("s"), true) +
        " = <input id=\"mudisvvod\" class=\"vvod-pole-par-meh\" type=\"number\" min=\"0\"> " +
        WF1(WFSkob1(WFDr1("м", "мм"), 2, 2), true) + ";" +
        polAbz() + "– коэффициент скоростей. Определяется по формуле:" +
        polNumFormula(WF1("μ" + WFInd1("v") + " = " + WFDr1("μ" + WFInd1("s"), "μ" +
            WFInd1("T") + " × OP" + WFInd1("v")), true) + ",", 2.15) +
        polAbz() + WF1("OP" + WFInd1("v"), true) +
        " – расстояние от полюса диаграммы скоростей до начала её координат;" +
        polAbz() + WF1("μ" + WFInd1("v") + " = ", true) + "<span id=\"di-mus\"></span>" +
        WFText(" / (") + "<span id=\"di-mut2\"></span>" + WFText("×") + "<span id=\"OPv\"></span>" +
        WFText(" ) = ") + " <input id=\"mudivvvod\" class=\"vvod-pole-par-meh\" type=\"number\" min=\"0\"> " +
        WF1(WFSkob1(WFDr1(WFDr1("м", "с", true), "мм"), 2, 2), true) + ";" +
        polAbz() + "– коэффициент ускорений. Определяется по формуле:" +
        polNumFormula(WF1("μ" + WFInd1("a") + " = " + WFDr1("μ" + WFInd1("v"), "μ" +
            WFInd1("T") + " × OP" + WFInd1("a")), true) + ",", 2.16) +
        polAbz() + WF1("OP" + WFInd1("a"), true) +
        " – расстояние от полюса диаграммы ускорений до начала её координат;" +
        polAbz() + WF1("μ" + WFInd1("a") + " = ", true) + "<span id=\"di-muv\"></span>" +
        WFText(" / (") + "<span id=\"di-mut3\"></span>" + WFText(" × ") + "<span id=\"OPa\"></span>" +
        WFText(" ) = ") + " <input id=\"mudiavvod\" class=\"vvod-pole-par-meh\" type=\"number\" min=\"0\"> " +
        WF1(WFSkob1(WFDr1(WFDr1("м", WFStep("с", 2), true), "мм"), 2, 2), true) + ".";
}

export function pol2_6(kol) {
    let tag =
        polAbz() + "2.6 Перемещения, скорости, ускорения рабочего органа механизма" +
        polAbz() + "Перемещения, скорости и ускорения определяются из кинематических диаграмм по формулам:" +
        polNumFormula(WF1("s" + WFInd1("д") + " = l" + WFInd1("s") + " × μ" + WFInd1("s"), true) + ",", 2.17) +
        polNumFormula(WF1("v" + WFInd1("д") + " = l" + WFInd1("v") + " × μ" + WFInd1("v"), true) + ",", 2.18) +
        polNumFormula(WF1("a" + WFInd1("д") + " = l" + WFInd1("a") + " × μ" + WFInd1("a"), true) + ",", 2.19) +
        polAbz() + WF1("s" + WFInd1("д"), true) + ", " + WF1("v" + WFInd1("д"), true) + ", " +
        WF1("a" + WFInd1("д"), true) + " – перемещения, скорости и ускорения на кинематических диаграммах;" +
        polAbz() + WF1("l" + WFInd1("s"), true) + ", " +
        WF1("l" + WFInd1("v"), true) + ", " + WF1("l" + WFInd1("a"), true) +
        " – расстояния от оси абсцисс соответствующей системы координат диаграммы до диаграммы;" +
        polAbz() + WF1("μ" + WFInd1("s"), true) + ", " +
        WF1("μ" + WFInd1("v"), true) + ", " + WF1("μ" + WFInd1("a"), true) +
        "– масштабные коэффициенты диаграмм перемещений, скоростей, ускорений." +
        "<svg id=\"kin-di\" width=\"850\" height=\"1250\" viewBox=\"0 0 850 1250\" class=\"meh-rez__ris\">" +
        "<g transform=\"translate(100 1250)\">" +
        "<g id=\"razm\"/>" +
        "<g id=\"per\">" +
        polTagStrelka("os-per", 750);
    if (kol) {
        for (let i = 1; i <= kol; i++) tag += "<path id=\"di-per" + i + "\" d=\"\" fill=\"none\" stroke=\"#000\" stroke-width=\"4\"/>";
    } else {
        tag += "<path id=\"di-per\" d=\"\" fill=\"none\" stroke=\"#000\" stroke-width=\"4\"/>";
    }
    tag += "</g><g id=\"sk\">" + polTagStrelka("os-sk", 750);
    if (kol) {
        for (let i = 1; i <= kol; i++) tag += "<path id=\"di-sk" + i + "\" d=\"\" fill=\"none\" stroke=\"#000\" stroke-width=\"4\"/>";
    } else {
        tag += "<path id=\"di-sk\" d=\"\" fill=\"none\" stroke=\"#000\" stroke-width=\"4\"/>";
    }
    tag +=
        "<g id=\"Pv\">" +
        "<text font-size=\"30\" font-family=\"Arial\">P</text>" +
        "<text font-size=\"15\" font-family=\"Arial\" transform=\"translate(15,0)\">v</text>" +
        "</g>" +
        "<g id=\"nakl-sk\"/>" +
        "<g id=\"gor-sk\"/>" +
        "</g>" +
        "<g id=\"usk\">" +
        polTagStrelka("os-usk", 750);
    if (kol) {
        for (let i = 1; i <= kol; i++) tag += "<path id=\"di-usk" + i + "\" d=\"\" fill=\"none\" stroke=\"#000\" stroke-width=\"4\"/>";
    } else {
        tag += "<path id=\"di-usk\" d=\"\" fill=\"none\" stroke=\"#000\" stroke-width=\"4\"/>";
    }
    tag +=
        "<g id=\"Pa\">" +
        "<text font-size=\"30\" font-family=\"Arial\">P</text>" +
        "<text font-size=\"15\" font-family=\"Arial\" transform=\"translate(15,0)\">a</text>" +
        "</g><g id=\"nakl-usk\"/><g id=\"gor-usk\"/></g></g></svg>";
    return tag;
}
