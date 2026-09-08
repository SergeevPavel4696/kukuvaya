import {WF1, WFInd1, WFSkob1, WFText} from "../web-formula.js";
import {polAbz, polAbzInt, polNumFormula} from "../razmetka.js";
import {polIndToch} from "./utils.js";

export function pol1(ris) {
    return ris +
        polAbz() + "1 Структурный анализ механизма" +
        polAbz() +
        "Задачей структурного анализа является построение структурной схемы механизма и классификация его звеньев, " +
        "кинематических пар, структурных групп и механизма в целом. При анализе механизма также определяется число " +
        "его подвижных звеньев и степень подвижности механизма. Структурная схема при заданном движении ведущего " +
        "звена даёт представление о работе механизма.";
}

export function pol1_1(mass) {
    let tag =
        polAbz() + "1.1 План положений механизма" +
        polAbz() +
        "План положений механизма представляет собой принципиальную кинематическую схему механизма соответствующую " +
        "нескольким положениям подвижного звена его начального механизма с использованием условных графических " +
        "обозначений. Положения механизма должны соответствовать равномерному изменению положения подвижного звена " +
        "начального механизма, либо ключевым моментам такта работы механизма. Принципиальная кинематическая схема " +
        "механизма представлена на рисунке 1." +
        polAbz() + "Порядок построения плана:";
    mass.forEach(i => tag += i);
    return tag;
}

export function polPostrTochku(id, t, pr) {
    return polAbzInt(id) + "– построить точку " + WFText(t) + (pr ? "." : ";");
}

export function polPostrOtrezok(id, t, otr, pr) {
    return polAbzInt(id) + "– построить из точки " + WFText(t) + " отрезок " + WFText(otr) + (pr ? "." : ";");
}

export function polPostrDvaOtrezka(id, t1, t2, t3, otr1, otr2, pr) {
    return polAbzInt(id) +
        "– построить из точек " + WFText(t1) + " и " + WFText(t2) + " до совпадения концами (точка " +
        WFText(t3) + ") отрезки " + WFText(otr1) + " и " + WFText(otr2) + " соответственно" + (pr ? "." : ";");
}

export function polPostrOtrezokVPolzun(id, t1, t2, zv, pr) {
    return polAbzInt(id) + "– построить из точки " + WFText(t1) + " в сторону точки " + WFText(t2) +
        " до звена " + zv + " отрезок " + WFText(t1 + "" + t2) + (pr ? "." : ";");
}

export function polPostrCentrMassNaOtrezke(id, otr, zv, pr) {
    return polAbzInt(id) +
        "– построить на отрезке " + WFText(otr) + " точку " + WF1("S" + WFInd1(zv), true) + (pr ? "." : ";");
}

export function polPostrCentrMassNaZvene(id, zv, pr) {
    return polAbzInt(id) +
        "– построить на звене " + WFText(zv) + " точку " + WF1("S" + WFInd1(zv), true) + (pr ? "." : ";");
}

export function polPostrTochkuNaOtrezke(id, otr, t, pr) {
    return polAbzInt(id) + "– построить на отрезке " + WFText(otr) + " точку " + WFText(t) + (pr ? "." : ";");
}

export function polPostrPryamuyuTraektorii(id, zv, pr) {
    return polAbzInt(id) + "– построить прямую движения звена " + WFText(zv) + (pr ? "." : ";");
}

export function polPostrOtrezokNaTraektoriyu(id, t, zv, otr, pr) {
    return polAbzInt(id) + "– построить из точки " + WFText(t) + " на прямую движения звена " +
        WFText(zv) + " отрезок " + WFText(otr) + (pr ? "." : ";");
}

export function polPostrOtrezokObratnoOtTochki(id, t1, t2, otr, pr) {
    return polAbzInt(id) + "– построить из точки " + WFText(t1) + " в сторону, противоположную точке " +
        WFText(t2) + ", отрезок " + WFText(otr) + (pr ? "." : ";");
}

export function polPostrOtrezokIzPolzuna(id, t1, t2, zv, otr, pr) {
    return polAbzInt(id) + "– построить из точки " + WFText(t1) + " от звена " + WFText(zv) + " в сторону, противоположную точке " +
        WFText(t2) + ", отрезок " + WFText(otr) + (pr ? "." : ";");
}

export function polPovtoritDeistviya(pr) {
    return polAbz() + "– повторить действия для всех исследуемых положений механизма" + (pr ? "." : ";");
}

export function polPostrOkruzhnostTraektorii(id, t1, t2, pr) {
    return polAbzInt(id) +
        "– построить из точки " + WFText(t1) + " окружность траектории точки " + WFText(t2) + (pr ? "." : ";");
}

export function polPostrDuguTraektorii(id, t1, t2, pr) {
    return polAbzInt(id) + "– построить из точки " + WFText(t1) + " дугу траектории точки " +
        WF1(typeof t2 === "number" ? "S" + WFInd1(t2) : t2, true) + (pr ? "." : ";");
}

export function polPostrOtrezokTraektorii(id, t, pr) {
    return polAbzInt(id) + "– построить, соединением крайних положений точки " +
        WFText(t) + ", отрезок траектории точки " + WFText(t) + (pr ? "." : ";");
}

export function polPostrKrivuyuTraektorii(id, t, pr) {
    const toch = WF1("S" + WFInd1(t), true);
    return polAbzInt(id) + "– построить, соединением во всех положениях " +
        "точки " + toch + " кривую траектории точки " + toch + (pr ? "." : ";");
}

export function polPlanPolozheniy() {
    return polAbz() + "<svg id=\"plan-pol\" class=\"meh__ris\"/>";
}

export function pol1_2(mass) {
    let tag =
        polAbz() + "1.2 Виды звеньев механизма и движения, совершаемые ими" +
        polAbz() +
        "Для плоских механизмов характерны три вида движения. Вращательное – движение, при котором все точки звена " +
        "движутся по окружностям относительно оси вращения в плоскостях, параллельных друг другу. Поступательное – " +
        "движение, при котором отрезок, соединяющий две любые точки звена, остается параллельным себе в любом " +
        "положении механизма. Плоскопараллельное – движение, при котором все точки звена движутся в параллельных " +
        "плоскостях. Механизм состоит из пяти подвижных и одного неподвижного звеньев:";
    mass.forEach(i => tag += i);
    return tag;
}

export function polZvenoStoiku(id, pr) {
    return polAbzInt(id) + "– стойка 0 – неподвижная" + (pr ? "." : ";");
}

export function polZvenoKrivoship(id, zv, pr) {
    return polAbzInt(id) +
        "– кривошип " + WFText(zv) + " – вращательное движение" + (pr ? "." : ";");
}

export function polZvenoShatun(id, zv, pr) {
    return polAbzInt(id) +
        "– шатун " + WFText(zv) + " – плоскопараллельное движение" + (pr ? "." : ";");
}

export function polZvenoKoromyslo(id, zv, pr) {
    return polAbzInt(id) +
        "– коромысло " + WFText(zv) + " – вращательно-колебательное движение" + (pr ? "." : ";");
}

export function polZvenoPolzun(id, zv, pr) {
    return polAbzInt(id) +
        "– ползун " + WFText(zv) + " – прямолинейное поступательное движение" + (pr ? "." : ";");
}

export function polZvenoKamen(id, zv, pr) {
    return polAbzInt(id) +
        "– камень " + WFText(zv) + " – плоскопараллельное движение" + (pr ? "." : ";");
}

export function pol1_3(mass) {
    let tag =
        polAbz() + "1.3 Виды кинематических пар звеньев механизма" +
        polAbz() +
        "Кинематические пары характеризуются по: характеру контакта (низшие – поверхностью; " +
        "высшие – линией, точкой); виду относительного движения звеньев в паре (вращательное, " +
        "поступательное); степени подвижности (количеству степеней свободы пары):";
    mass.forEach(i => tag += i);
    return tag;
}

export function polKinParu(id, zv1, zv2, t, dv, pr) {
    let dvi = "";
    if (dv === "вр") {
        dvi = "вращательная";
    } else if (dv === "по") {
        dvi = "поступательная";
    }
    return polAbzInt(id) + "– пара " + WF1(zv1 + "–" + zv2 +
        WFSkob1(t, 1, 1), true) + " – низшая, " + dvi + ", одноподвижная" + (pr ? "." : ";");
}

export function pol1_4() {
    return polAbz() + "1.4 Подвижность механизма" +
        polAbz() +
        "Подвижность механизма представляет собой количество движений, которые необходимо сообщить ему для того, " +
        "чтобы он имел однозначно заданное движение. Для плоского механизма определяется по формуле Чебышева:" +
        polNumFormula(WF1("W = 3 × n – 2 × p" + WFInd1("н") + " – 1 × p" + WFInd1("в"), true) + ",", 1.1) +
        polAbz() +  WFText("W") + " – степень подвижности механизма;" +
        polAbz() +  WFText("n") + " – число подвижных звеньев механизма;" +
        polAbz() +  WF1("p" + WFInd1("н"), true) + " – число низших пар механизма;" +
        polAbz() +  WF1("p" + WFInd1("в"), true) + " – число высших пар механизма." +
        polAbz() +  WFText("W = 3 × 5 – 2 × 7 – 1 × 0 = 1") + "."
}

export function pol1_5(mass) {
    let tag =
        polAbz() + "1.5 Структурные группы Ассура механизма" +
        polAbz() +
        "Структурная группа представляет собой кратчайшую кинематическая цепь, присоединение которой к механизму не " +
        "изменит его степени подвижности. Класс группы определяется максимальным количеством пар, входящих в " +
        "замкнутый контур. Порядок группы определяется числом элементов, которыми она присоединяется к остальному " +
        "механизму. Вид группы определяется комбинацией вращательных и поступательных кинематических пар." +
        polAbz() + "Расчленение механизма начинается с начального механизма." +
        polAbzInt("gr_0") + "Начальный механизм – первого класса." +
        polAbz() +  WFText("W = 3 × 1 – 2 × 1 – 1 × 0 = 1") + ".</p>";
    mass.forEach(i => tag += i);
    return tag;
}

export function polPodpisRisunka(num, ris) {
    if (num === 2) return ris + "<p class=\"risunok-podpis\">Рисунок " + num + " – Начальный механизм";
    if (num === 3) return ris + "<p class=\"risunok-podpis\">Рисунок " + num + " – Первая группа";
    if (num === 4) return ris + "<p class=\"risunok-podpis\">Рисунок " + num + " – Вторая группа";
}

export function polStrukturnuyuGruppu(id, n, N) {
    let number;
    let num = Array.from(String(N), Number);
    let num1, num2, num3;
    if (n === 1) {
        number = "Первая";
    } else if (n === 2) {
        number = "Вторая";
    }
    if (num[0] === 1) {
        num1 = "первого";
    } else if (num[0] === 2) {
        num1 = "второго";
    }
    if (num[1] === 1) {
        num2 = "первого";
    } else if (num[1] === 2) {
        num2 = "второго";
    }
    if (num[2] === 1) {
        num3 = "первого";
    } else if (num[2] === 2) {
        num3 = "второго";
    }
    return polAbzInt(id) + number + " группа – " + num1 + " класса, " + num2 + " порядка, " + num3 + " вида." +
        polAbz() +  WFText("W = 3 × 2 – 2 × 3 – 1 × 0 = 0") + ".</p>";
}

export function pol1_6() {
    return polAbz() + "1.6 Структурная формула механизма" +
        polAbz() + "Структурная формула описывает связь между количеством степеней свободы механизма, " +
        "количеством его звеньев, видом и количеством кинематических пар, входящих в его состав." +
        polAbz() +
        "<span id=\"f-gr_0\" class=\"abzac-inter\">" + WF1("I" + WFSkob1("0,1", 1, 1), true) + "</span> → " +
        "<span id=\"f-gr_1\" class=\"abzac-inter\">" + WF1("II" + WFSkob1("2,3", 1, 1), true) + "</span> → " +
        "<span id=\"f-gr_2\" class=\"abzac-inter\">" + WF1("II" + WFSkob1("4,5", 1, 1), true) + "</span>."
}

export function pol1_7() {
    return polAbz() + "1.7 Класс механизма" +
    polAbz() + "Класс механизма определяется наивысшим классом группы Ассура, входящей в его состав." +
    polAbz() + "Заданный механизм является механизмом второго класса.";
}
