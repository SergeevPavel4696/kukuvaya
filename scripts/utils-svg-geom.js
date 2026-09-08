//Задать перемещение элемента.
export function zadPerEl(el, perX, perY) {
    el.setAttribute("transform", "translate(" + perX + "," + -perY + ")");
}

//Задать вращение элемента.
export function zadVrEl(el, vrFi) {
    el.setAttribute("transform", "rotate(" + -vrFi + ")");
}

//Задать перемещение и вращение элемента.
export function zadPerVrEl(el, perX, perY, vrFi) {
    el.setAttribute("transform", "translate(" + perX + "," + -perY + " ) rotate(" + -vrFi + ")");
}

//Задать толщину элемента.
export function zadTolEl(el, tol) {
    el.setAttribute("stroke-width", tol);
}

//Задать цвет элемента.
export function zadCvetEl(el, cvet) {
    el.setAttribute("stroke", cvet);
}

//Задать фон элемента.
export function zadFonEl(el, fon) {
    el.setAttribute("fill", fon);
}

//Задать радиус окружности.
export function zadOkrRad(okr, rad) {
    okr.setAttribute("r", rad);
}

//Задать длину отрезка.
export function zadOtrDlina(otr, dlina) {
    otr.setAttribute("x2", dlina);
}

//Задать размеры прямоугольника.
export function zadPryamRazm(pryam, vys, shir) {
    pryam.setAttribute("height", vys);
    pryam.setAttribute("width", shir);
}

//Задать центр прямоугольника.
export function zadPryamCentr(pryam, centrX, centrY) {
    pryam.setAttribute("x", centrX);
    pryam.setAttribute("y", centrY);
}

//Задать положение отрезка.
export function zadOtrPol(otr, x1, y1, x2, y2) {
    otr.setAttribute("x1", x1);
    otr.setAttribute("y1", y1);
    otr.setAttribute("x2", x2);
    otr.setAttribute("y2", y2);
}

//Задать положение вектора на плане.
export function zadVekPol(vek, x1, y1, x2, y2, koef) {
    zadOtrPol(vek, x1 * koef, -y1 * koef, x2 * koef, -y2 * koef);
}


//Получить параметры перемещения объекта.
export function polTagPer(perX, perY, vrFi) {
    let per = "";
    if (perX || perY || vrFi) {
        per += " transform=\"";
        if (perX || perY) per += "translate(" + (perX ? perX : 0) + "," + (perY ? -perY : 0) + ")";
        if (vrFi) per += "rotate(" + -vrFi + ")";
        per += "\"";
    }
    return per;
}

//Получить id элемента.
export function polTagId(id) {
    return (id ? " id=\"" + id + "\"" : "");
}

//Получить тег окружности.
export function polTagOkr(x, y, rad, fon, cvet, tol, id) {
    return "<circle" + polTagId(id) + " stroke=\"" + cvet + "\" stroke-width=\"" + tol + "\" fill=\"" + fon + "\" " +
        "cx=\"" + x + "\" cy=\"" + -y + "\" r=\"" + rad + "\" />";
}

//Получить тег пунктирной окружности.
export function polTagOkrPu(X, Y, rad, fon, cvet, tol, pu, id) {
    return "<circle" + polTagId(id) + " cx=\"" + X + "\" cy=\"" + -Y + "\" r=\"" + rad + "\" " +
        "fill=\"" + fon + "\" stroke=\"" + cvet + "\" stroke-width=\"" + tol + "\" stroke-dasharray=\"" + pu + "\"/>";
}

//Получить тег дуги.
export function polTagDug(xPrav, yPrav, xLev, yLev, cvet, rad, tol) {
    return "<path d=\"M " + xPrav + "," + -yPrav + " A " + rad + "," + rad + " 0 0,1 " + xLev + "," + -yLev +
        "\" fill=\"none\" stroke=\"" + cvet + "\" stroke-width=\"" + tol + "\"/>";
}

export function polTagDugUg(x, y, ug, dug, cvet, rad, tol, id) {
    return "<path id=\"" + id + "\" d=\"M " +



        (x + rad * Math.cos(ug)) + "," +
        (-y - rad * Math.sin(ug)) +


        " A " + rad + "," + rad + " 0 0,1 " +


        (x + rad * Math.cos(ug + dug)) + "," +
        (-y - rad * Math.sin(ug + dug)) +


        "\" fill=\"none\" stroke=\"" + cvet + "\" stroke-width=\"" + tol + "\"/>";
}

//Получить тег отрезка.
export function polTagOtr(perX, perY, vrFi, x1, y1, x2, y2, cvet, tol, id) {
    return "<line" + polTagId(id) + polTagPer(perX, perY, vrFi) + " x1=\"" + x1 + "\" y1=\"" + y1 + "\" " +
        "x2=\"" + x2 + "\" y2=\"" + y2 + "\" fill=\"none\" stroke=\"" + cvet + "\" stroke-width=\"" + tol + "\"/>";
}

//Получить тег пунктирного отрезка.
export function polTagOtrPu(perX, perY, vrFi, dlina, cvet, tol, pu, id) {
    return "<line" + polTagId(id) + polTagPer(perX, perY, vrFi) + " x1=\"0\" y1=\"0\" x2=\"" + dlina + "\" y2=\"0\" " +
        "fill=\"none\" stroke=\"" + cvet + "\" stroke-width=\"" + tol + "\" stroke-dasharray=\"" + pu + "\"/>";
}

//Получить тег штрихпунктирного отрезка.
export function polTagOtrShPu(perX, perY, vrFi, dlina, cvet, tol, shpu, id) {
    return "<line" + polTagId(id) + polTagPer(perX, perY, vrFi) + " x1=\"0\" y1=\"0\" x2=\"" + dlina + "\" y2=\"0\" " +
        "fill=\"none\" stroke=\"" + cvet + "\" stroke-width=\"" + tol + "\" stroke-dasharray=\"" + shpu + "\"/>";
}

//Получить тег прямоугольника.
export function polTagPr(perX, perY, vrFi, x, y, vys, shir, fon, cvet, tol, id) {
    return "<rect" + polTagId(id) + polTagPer(perX, perY, vrFi) + " x=\"" + x + "\" y=\"" + y + "\" height=\"" +
        vys + "\" width=\"" + shir + "\" fill=\"" + fon + "\" stroke=\"" + cvet + "\" stroke-width=\"" + tol + "\"/>";
}

//Получить тег стрелки.
export function polTagStrelka(id, dl, x, y, ug) {
    return "<g id=\"" + id + "\"" + polTagPer(x, y, ug) + ">" +
        polTagOtr(null, null, null, 0, 0, dl, 0, "#000", 1, null) +
        "<polygon" + polTagPer(dl, null, null) + " points=\"0,0 -25,5 -20,0 -25,-5\" stroke=\"#000\" " +
        "stroke-width=\"1\"/>" +
        "</g>"
}

//Получить тег ломаной линии.
export function polTagLom(id, tochki) {
    return "<path id=\"" + id + "\" d=\"M " + tochki + "\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"/>";
}
export function polTagLom1(id, tol, tochki) {
    return "<path id=\"" + id + "\" d=\"M " + tochki + "\" fill=\"none\" stroke=\"#000\" stroke-width=\"" + tol + "\"/>";
}

//Получить тег пунктирной кривой.
export function polTagKrPu(id, tochki) {
    return "<path id=\"" + id + "\" d=\"M " + tochki + "\" fill=\"none\" " +
        "stroke=\"#000\" stroke-width=\"2\" stroke-dasharray=\"15 5 2 5\"/>";
}
