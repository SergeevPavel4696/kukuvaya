import {
    polTagId,
    polTagOkr,
    polTagOtrPu,
    polTagOtr,
    polTagPer,
    polTagPr,
    polTagDugUg
} from "../../scripts/utils-svg-geom.js";
import {polMax, polMin, polUgGrad, polUgRad} from "./utils.js";


//
//Получить теги элементов механизма.
//

////Получить тег опоры.
function polTagOp(kol = 7, x = 1, y = 7.5) {
    let tag = "<path stroke-width=\"2\" d=\"";
    for (let i = 0; i < kol; i++) tag += (!i ? "m" + x + " " + y + " 7.5 -7.5" : " m0 7.5 7.5 -7.5");
    tag += "\"/>";
    return tag;
}

//Вращения.
export function polTagOpVr(x, y, fi, id_op, id_sh) {
    return "<g" + polTagId(id_op) + polTagPer(x, y, fi) + " stroke=\"#000\">" +
        polTagOp(7, -26, 50) +
        "<polyline points=\"-2.5,4.3 -25,43.3 25,43.3 2.5,4.3\"/ fill=\"none\" stroke-width=\"4\"/>" +
        polTagShIssl(0, 0, id_sh) +
        "</g>"
}

//Скольжения.
export function polTagOpSk(x, y, fi, dl, polz, napr, id_op, id_tr) {
    return "<g" + polTagId(id_op) + polTagPer(x, y, fi) + " stroke=\"#000\">" +
        polTagOp() +
        polTagOtr(0, 0, 0, 0, 0, dl, 0, null, 4, id_tr) +
        (polz ? polTagOtr(0, 0, 0, 60 + dl, 0, 85 + dl, 0, null, 4) : "") +
        "</g>";
}

export function polTagOpSk1(perX, perY, vrFi, id_op) {
    return "<g" + polTagId(id_op) + polTagPer(perX, perY, vrFi) + " stroke=\"#000\">" +
        "<path d=\"m0 -5 7.5 -7.5 m0 7.5 7.5 -7.5 m0 7.5 7.5 -7.5 m0 7.5 7.5 -7.5 " +
        "m0 7.5 7.5 -7.5 m0 7.5 7.5 -7.5 m0 7.5 7.5 -7.5\" fill=\"none\" stroke-width=\"2\"/>" +
        "<path d=\"m0 12.5 7.5 -7.5 m0 7.5 7.5 -7.5 m0 7.5 7.5 -7.5 m0 7.5 7.5 -7.5 " +
        "m0 7.5 7.5 -7.5 m0 7.5 7.5 -7.5 m0 7.5 7.5 -7.5\" fill=\"none\" stroke-width=\"2\"/>" +
        polTagOtr(0, 5, 0, 0, 0, 55, 0, null, 4, null) +
        polTagOtr(0, -5, 0, 0, 0, 55, 0, null, 4, null) +
        "</g>";
}

////Получить тег шарнира.
//В общем виде.
export function polTagSh(x, y, cvet, tol, id) {
    return polTagOkr(x, y, 5, "none", cvet, tol, id);
}

//В исследуемом положении.
export function polTagShIssl(X, Y, id) {
    return polTagSh(X, Y, "#000", 4, id);
}

//В неисследуемом положении.
export function polTagShNeissl(X, Y) {
    return polTagSh(X, Y, "#000", 2, null);
}

//В активном положении.
export function polTagShAkt(X, Y) {
    return polTagSh(X, Y, "#f00", 4);
}

////Получить тег втулки шарнира.
//В общем виде.
export function polTagVtSh(x, y, ug, cvet, tol, id) {
    return polTagDugUg(x, y, ug, cvet, 10, tol, id);
}

//В исследуемом положении.
export function polTagVtShIssl(x, y, ug, dug, id) {
    return polTagDugUg(x, y, ug, dug, "#000", 10, 4, id);
}

//В неисследуемом положении.
export function polTagVtShNeissl(x, y, ug, dug) {
    return polTagDugUg(x, y, ug, dug, "#000", 10, 2, null);
}

//В активном положении.
export function polTagVtShAkt(x, y, ug, dug) {
    return polTagDugUg(x, y, ug, dug, "#f00", 10, 4, null);
}

////Получить тег центра масс.
//В общем виде.
export function polTagCM(X, Y, cvet, tol, id) {
    return polTagOkr(X, Y, 3, "none", cvet, tol, id);
}

//В исследуемом положении.
export function polTagCMIssl(X, Y, id) {
    return polTagCM(X, Y, "#000", 4, id);
}

//В неисследуемом положении.
export function polTagCMNeissl(X, Y) {
    return polTagCM(X, Y, "#000", 4);
}

//В активном положении.
export function polTagCMAkt(X, Y) {
    return polTagCM(X, Y, "#f00", 4);
}

/////Получить тег звена.
//В общем виде.
export function polTagZv(perX, perY, vrFi, dlina, tip, cvet, tol, id) {
    let x1, dl;
    const tipT = Math.floor(tip / 10);
    const tipDl = tip % 10;
    if (tipT === 1) x1 = 5;
    else if (tipT === 2) x1 = 0;
    else if (tipT === 3) x1 = -2;
    else if (tipT === 4) x1 = 30;
    else if (tipT === 5) x1 = 10;
    else if (tipT === 6) x1 = 8;
    if (tipDl === 1) dl = 5;
    else if (tipDl === 2) dl = 0;
    else if (tipDl === 3) dl = -2;
    else if (tipDl === 4) dl = 30;
    else if (tipDl === 5) dl = 10;
    else if (tipDl === 6) dl = 8;
    return polTagOtr(perX, perY, vrFi, x1, 0, dlina - dl, 0, cvet, tol, id);
}

//В исследуемом положении.
export function polTagZvIssl(perX, perY, vrFi, dlina, tip, id) {
    return polTagZv(perX, perY, vrFi, dlina, tip, "#000", 4, id);
}

//В неисследуемом положении.
export function polTagZvNeissl(perX, perY, vrFi, dlina, tip) {
    return polTagZv(perX, perY, vrFi, dlina, tip, "#000", 2, null);
}

//В активном положении.
export function polTagZvAkt(perX, perY, vrFi, dlina, tip) {
    return polTagZv(perX, perY, vrFi, dlina, tip, "#f00", 4, null);
}

/////Получить тег ползуна.
//В общем виде.
export function polTagPolz(perX, perY, vrFi, cvet, tol, id) {
    return polTagPr(perX, perY, vrFi, -30, -15, 30, 60, "none", cvet, tol, id);
}

//В исследуемом положении.
export function polTagPolzIssl(perX, perY, vrFi, id) {
    return polTagPolz(perX, perY, vrFi, "#000", 4, id);
}

//В неисследуемом положении.
export function polTagPolzNeissl(perX, perY, vrFi) {
    return polTagPolz(perX, perY, vrFi, "#000", 2, null);
}

//В активном положении.
export function polTagPolzAkt(perX, perY, vrFi) {
    return polTagPolz(perX, perY, vrFi, "#f00", 4, null);
}

/////Получить тег подвижного звена.
//Скольжения.
export function polTagPodvOpSk(x, y, fi, dl, napr, T, takt, kol, id_op, id_tr) {
    let tag =
        "<g" + polTagId(id_op) + polTagPer(x, y, fi) + " stroke=\"#000\">" +
        "<line stroke=\"#000\" stroke-width=\"4\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"0\">" +
        "<animate attributeName=\"x2\" values=\"";
    for (let i = 0; i <= kol; i++) tag += dl(i * takt / kol).toFixed(1) + (i !== kol ? ";" : "");
    tag += "\" dur=\"" + T + "s\" repeatCount=\"indefinite\"/></line>" +
        "<path d=\"m0 " + (napr ? 0 : 7.5) + " 7.5 -7.5 m0 7.5 7.5 -7.5 m0 7.5 7.5 -7.5 m0 7.5 7.5 -7.5 " +
        "m0 7.5 7.5 -7.5 m0 7.5 7.5 -7.5 m0 7.5 7.5 -7.5\" fill=\"none\" stroke-width=\"2\"/>" +
        "</g>";
    return tag;
}

//Кривошипа.
export function polTagVrKr(x, y, dl, tip, nach, kon, vr, id) {
    return "<g id=\"" + id + "\" transform=\"translate(" + x + " " + y + ")\">" +
        polTagZvIssl(null, null, null, dl, tip, id) +
        polTagShIssl(dl, 0) +
        "<animateTransform attributeName=\"transform\" type=\"rotate\" from=\"" + nach + "\" to=\"" + kon + "\" dur=\"" + vr + "s\" " +
        "repeatCount=\"indefinite\"/ additive=\"sum\">" +
        "</g>";
}

//Шатуна.
export function polTagPodvShat(x, y, fi, dl, cm, T, takt, kol, id) {
    let tag =
        "<g id=\"" + id + "\">" +
        polTagZvIssl(null, null, null, dl, "11", id) +
        polTagShIssl(dl, 0) +
        polTagCMIssl(cm, 0) +
        "<animateTransform attributeName=\"transform\" values=\"";
    for (let i = 0; i <= kol; i++) tag += x(i * takt / kol).toFixed(1) + " " + -y(i * takt / kol).toFixed(1) + (i !== kol ? ";" : "");
    tag +=
        "\" dur=\"" + T + "s\" repeatCount=\"indefinite\"/>" +
        "<animateTransform attributeName=\"transform\" type=\"rotate\" values=\"";
    for (let i = 0; i <= kol; i++) tag += -polUgGrad(fi(i * takt / kol)).toFixed(1) + (i !== kol ? ";" : "");
    tag += "\" dur=\"" + T + "s\" repeatCount=\"indefinite\" additive=\"sum\"/></g>";
    return tag
}

//Ползуна.
export function polTagPodvPolz(x, y, fi, T, takt, kol, id) {
    let tag =
        "<g id=\"" + id + "\">" +
        polTagPolzIssl(null, null, fi, id) +
        "<animateTransform attributeName=\"transform\" values=\"";
    for (let i = 0; i <= kol; i++) tag += x(i * takt / kol).toFixed(1) + " " + -y(i * takt / kol).toFixed(1) + (i !== kol ? ";" : "");
    tag +=
        "\" dur=\"" + T + "s\" repeatCount=\"indefinite\"/></g>";
    return tag
}


//
//Получить теги траекторий и расположений.
//

//Получить тег расположения активного звена.
export function polTagRaspZv(perX, perY, vrFi, dlina) {
    return polTagOtrPu(perX, perY, vrFi, dlina, "#f00", 2, "15 5 2 5", null)
}

//Получить тег траектории-окружности.
export function polTagTrOkr(X, Y, rad) {
    return "<circle cx=\"" + X + "\" cy=\"" + Y + "\" r=\"" + rad + "\" " +
        "fill=\"none\" stroke=\"#f00\" stroke-width=\"2\" stroke-dasharray=\"15 5 2 5\"/>";
}

//Получить тег траектории-дуги.
export function polTagTrDug(xLev, yLev, xPrav, yPrav, rad) {
    return "<path d=\"M " + xLev + "," + -yLev + " A " + rad + "," + rad + " 0 0,1 " + xPrav + "," + -yPrav +
        "\" fill=\"none\" stroke=\"#f00\" stroke-width=\"2\" stroke-dasharray=\"15 5 2 5\"/>";
}

//Получить тег циклической траектории.
export function polTagTrCikl(toch, takt, polX, polY) {
    let trTag = "<path d=\"M";
    for (let i = 0; i <= toch; i++) trTag += polX(i * takt / toch) + " " + -polY(i * takt / toch) + " ";
    trTag += "\" fill=\"none\" stroke=\"#f00\" stroke-width=\"2\" stroke-dasharray=\"15 5 2 5\"/>";
    return trTag;
}


//
//Получить теги оформления.
//

//Получить тег направления вращения.
export function polTagNaprVr(perX, perY, vrFi, r, fi, napr) {
    return "<g " + polTagPer(perX, perY, vrFi) + " stroke=\"#000\">" +
        "<path stroke-width=\"2\" fill=\"none\" " +
        "d=\"M " + r + " 0 A " + r + "  " + r + " 1 " + (fi < 180 ? 0 : 1) + " " + (napr ? 1 : 0) + " " + r * Math.cos(polUgRad(fi)) + " " +
        (napr ? r : -r) * Math.sin(polUgRad(fi)) + "\"/>" +
        "<polygon " + polTagPer(r, 0, (napr ? 79 : -79)) + " stroke-width=\"1\" points=\"0,0 -30,7 -20,0 -30,-7\"/>" +
        "</g>";
}

//Получить тег угла.
export function polTagUg(perX, perY, vrFi, r, fi) {
    return "<g " + polTagPer(perX, perY, vrFi) + " stroke=\"#000\">" +
        "<path stroke-width=\"2\" fill=\"none\" " +
        "d=\"M " + r + " 0 A " + r + "  " + r + " 1 0 " + 1 + " " + r * Math.cos(polUgRad(fi)) + " " +
        r * Math.sin(polUgRad(fi)) + "\"/>" +
        "<polygon " + polTagPer(r, 0, 86) + " stroke-width=\"1\" points=\"0,0 -30,7 -20,0 -30,-7\"/>" +
        "<polygon " + polTagPer(r * Math.cos(polUgRad(fi)), -r * Math.sin(polUgRad(fi)), fi + 94) +
        " stroke-width=\"1\" points=\"0,0 -30,7 -20,0 -30,-7\"/>" +
        "</g>";
}

//Получить тег текста обозначения.
export function polTagObText(text, size, align) {
    let al = "";
    if (align === 0) al = "start";
    else if (align === 1) al = "middle";
    else if (align === 2) al = "end";
    return "<text font-size=\"" + size + "\" font-family=\"Arial\" text-anchor=\"" + al + "\"" + ">" + text + "</text>";
}

export function polTagText(text, size, align, perX, perY, vrFi) {
    let al = "";
    if (align === 0) al = "start";
    else if (align === 1) al = "middle";
    else if (align === 2) al = "end";
    return "<text " + polTagPer(perX, perY, vrFi) + " font-size=\"" + size + "\" font-family=\"Arial\" text-anchor=\"" + al + "\"" + ">" + text + "</text>";
}

//Получить тег обозначения звена.
export function polTagObZv(perX, perY, num, x1, y1, x2, y2) {
    return "<g " + polTagPer(perX, perY, null) + ">" +
        polTagObText(num, 30, 0) +
        polTagOtr(null, null, null, x1, y1, x2, y2, "#000", 2) +
        "</g>";
}

//Получить тег обозначения точки.
export function polTagObToch(perX, perY, text, vrFi) {
    return "<g " + polTagPer(perX, perY, vrFi) + ">" + polTagObText(text, 30, 1) + "</g>";
}

//Получить тег обозначения точки с индексом.
export function polTagObTochInd(perX, perY, text, ind) {
    return polTagObInd(perX, perY, null, text, ind);
}

//Получить тег обозначения с индексом.
export function polTagObInd(perX, perY, ug, text, ind) {
    return "<g " + polTagPer(perX, perY, ug) + ">" + polTagObText(text, 30, 2) + polTagObText(ind, 15, 0) + "</g>";
}


//
//Задать размеры и положения элементов механизма.
//

//Задать длину звена.
export function zadDlZv(otr, dlina, tip) {
    let dl;
    if (tip === 1) dl = 5;
    else if (tip === 2) dl = 0;
    else if (tip === 3) dl = -2;
    else if (tip === 4) dl = 30;
    otr.setAttribute("x2", dlina - dl);
}


//Задать цвет элемента на рисунке в фокусе.
export function elFocus(el, tol) {
    el.setAttribute("stroke", "#f00");
    tol && el.setAttribute("stroke-width", "4");
}

//Задать цвет элемента на рисунке в нефокусе.
export function elNeFocus(el, tol) {
    el.setAttribute("stroke", "#000");
    tol && el.setAttribute("stroke-width", "2");
}

//Сделать рисунок видимым.
export function risVid(ris) {
    ris.setAttribute("visibility", "visible");
}

//Сделать рисунок невидимым.
export function risNevid(ris) {
    ris.setAttribute("visibility", "hidden");
}

//Задать размеры изображения.
export function zadRisRazm(ris, ris1, shir, vys, x, y) {
    ris.setAttribute("width", shir);
    ris.setAttribute("height", vys);
    ris.setAttribute("viewBox", "0 0 " + shir + " " + vys);
    ris1 !== null && ris1.setAttribute("transform", "translate(" + x + "," + y + ")");
}


//Получить тег плана скоростей.
export function polPlSkTag(mass) {
    let tag =
        "<svg id=\"plan-sk-ris\" visibility=\"hidden\" class=\"risunok-inter\">" +
        polTagPr(null, null, null, 0, 0, 0, 0, "#fff", "#000", 3, "plan-sk-ris2") +
        "<g id=\"plan-sk-ris1\">";
    mass.forEach(id => tag += polTagOtr(null, null, null, 0, 0, 0, 0, "#000", 2, id));
    tag += polTagOkr(0, 0, 2, "none", "#000", 4, null) + "</g></svg>";
    return tag;
}

//Получить тег плана ускорений.
export function polPlUskTag(mass) {
    let tag =
        "<svg id=\"plan-usk-ris\" visibility=\"hidden\" class=\"risunok-inter\">" +
        polTagPr(null, null, null, 0, 0, 0, 0, "#fff", "#000", 3, "plan-usk-ris2") +
        "<g id=\"plan-usk-ris1\">";
    mass.forEach(id => tag += polTagOtr(null, null, null, 0, 0, 0, 0, "#000", 2, id));
    tag += polTagOkr(0, 0, 2, "none", "#000", 4, null) + "</g></svg>";
    return tag;
}

//Получить тег плана сил.
export function polPlSilTag(id, mass) {
    let tag =
        "<svg id=\"plan-sil" + id + "-ris\" visibility=\"hidden\" class=\"risunok-inter\">" +
        polTagPr(null, null, null, 0, 0, 0, 0, "#fff", "#000", 3, "plan-sil" + id + "-ris2") +
        "<g id=\"plan-sil" + id + "-ris1\">";
    mass.forEach(id => tag += polTagOtr(null, null, null, 0, 0, 0, 0, "#000", 2, id));
    tag += polTagOkr(0, 0, 2, "none", "#000", 4, null) + "</g></svg>";
    return tag;
}

//Получить размеры векторного плана.
export function polRazmVekPl(gorMass, vertMass, razm, zamk) {
    let lev = 0, prav = 0, niz = 0, verh = 0, gor, vert, koef, x = 0, y = 0;
    gorMass.forEach(gor => {
        if (zamk) {
            x += gor;
            if (x < lev) lev = x;
            if (x > prav) prav = x;
        } else {
            if (gor < lev) lev = gor;
            if (gor > prav) prav = gor;
        }
    });
    vertMass.forEach(vert => {
        if (zamk) {
            y += vert;
            if (y < niz) niz = y;
            if (y > verh) verh = y;
        } else {
            if (vert < niz) niz = vert;
            if (vert > verh) verh = vert;
        }
    });
    gor = prav - lev;
    vert = verh - niz;
    koef = (gor > vert ? razm / gor : razm / vert);
    return {lev, prav, niz, verh, shir: gor, vys: vert, koef};
}

//Задать разметку для диаграмм.
export function zadRazmKinDi(kol, razmet) {
    let razmlTeg = "";
    for (let i = 0; i <= kol; i++) razmlTeg += polTagOtr(720 * i / kol, 0, null, 0, 0, 0, -1200, "#000", 1, null);
    for (let i = 0; i <= kol; i++) {
        razmlTeg += "<text" + polTagPer((720 * i / kol), 1220, null) +
            " font-size=\"20\" font-family=\"Arial\" text-anchor=\"middle\">" + i + "</text>";
    }
    razmet.innerHTML = razmlTeg;
}

//Получить кинематические диаграммы.
export function polKinDi(takt, kol, toch, kinDi, di, os, func, sdvig, p, nakl, gor, shir, vys, ug, nach) {
    //Массив значений функции.
    let mass = [];
    for (let i = 0; i <= toch; i++) mass[i] = func(takt * i / toch) / Math.cos(ug);
    //Крайние значения и диапазон функции.
    const min = polMin(mass), max = polMax(mass), diap = max - min;
    //Точки диаграммы.
    let tochki = "M";
    for (let i = 0; i <= toch; i++) tochki += " " + shir * i / toch + " " + -(func(takt * i / toch) / Math.cos(ug) - min) * vys / diap;
    //Передать диаграмме точки.
    di.setAttribute("d", tochki);
    //Задать расположение оси относительно диаграммы.
    os.setAttribute("transform", "translate(0," + (nach ? ((-func(0) / Math.cos(ug) + min)) : min) * vys / diap + ")");
    //Задать расположение диаграммы на рисунке.
    kinDi.setAttribute("transform", "translate(0," + sdvig + ")");
    //Задать расположение полюса диаграммы относительно диаграммы.
    if (p) p.setAttribute("transform", "translate(-100," + ((min * vys / diap) + 10) + ")");
    //Построить касательные отрезки из полюса к оси.
    if (nakl) {
        let naklTeg = ""
        for (let i = 0; i <= kol; i++) naklTeg += polTagOtr(null, null, null, 0, 0, 70, (-func(takt * i / kol) / Math.cos(ug) * vys / diap), "#000", 1);
        nakl.innerHTML = naklTeg;
        nakl.setAttribute("transform", "translate(-70," + min * vys / diap + ")");
    }
    //Построить горизонтальные отрезки от оси к диаграмме.
    if (gor) {
        let gorTeg = ""
        for (let i = 1; i <= kol; i++) gorTeg += "<line " +
            "x1=\"0\" y1=\"" + ((-func(takt * i / kol) / Math.cos(ug) + min) * vys / diap) + "\" " +
            "x2=\"" + (shir * i / kol) + "\" y2=\"" + ((-func(takt * i / kol) / Math.cos(ug) + min) * vys / diap) + "\" " +
            "fill=\"none\" stroke=\"#000\" stroke-width=\"1\" stroke-dasharray=\"0 5 0\"/>";
        gor.innerHTML = gorTeg;
    }
}

//Построить кинематические диаграммы.
export function postrKinDi(KOL, razmetka, TAKT, TOCH, per, sk, usk, pv, pa, skNakl, uskNakl, skGor, uskGor, osPer, osSk, osUsk, mass) {
    zadRazmKinDi(KOL, razmetka);
    mass.forEach(di => {
        const shir = 720, vys = 300;
        polKinDi(TAKT, KOL, TOCH, per, di[0], osPer, di[1], -850, null, null, null, shir, vys, di[6], true);
        polKinDi(TAKT, KOL, TOCH, sk, di[2], osSk, di[3], -450, pv, skNakl, skGor, shir, vys, di[6]);
        polKinDi(TAKT, KOL, TOCH, usk, di[4], osUsk, di[5], -50, pa, uskNakl, uskGor, shir, vys, di[6]);
    });
}
