import {elFocus, elNeFocus, polRazmVekPl, risNevid, risVid, zadRisRazm} from "./meh-svg-utils.js";
import {polUgPo3St} from "../../scripts/matematika/geom.js";
import {elNaStr, elNaStrText} from "../../scripts/utils.js";
import {zadPryamRazm, zadVekPol} from "../../scripts/utils-svg-geom.js";
import {WFInd1} from "../web-formula.js";

//Получить индекс точки механизма.
export function polIndToch(ind, step) {
    if (typeof ind === "number" || !isNaN(Number(ind))) return WFInd1("S" + WFInd1(ind), step);
    else if (ind.includes(" ")) {
        const inds = ind.split(" ");
        return WFInd1(inds[0], inds[1]);
    } else return WFInd1(ind, step);
}

//Получить плечо момента сил.
export function polPlecho(silX, silY, zvX, zvY) {
    return polGip(zvX, zvY) * Math.abs(Math.cos(0.5 * Pi - polUg2Vek(silX, silY, zvX, zvY)));
}

//Число ПИ.
export const Pi = Math.PI;

//Ускорение свободного падения.
const G = 9.80665;

//Производная функции в такте.
export function dif(func, t, takt) {
    const toch = 0.0001;
    return (func(t + toch * takt) - func(t - toch * takt)) / (2 * toch * takt);
}

//Интеграл функции на диапазоне в такте.
export function int(func, nach, kon, toch) {
    let vel = 0;
    const shag = (kon - nach) / toch;
    for (let i = 0; i < toch; i++) vel += 0.5 * (func(nach + i * shag) + func(nach + (i + 1) * shag)) * shag;
    return vel;
}

//Получить вес из массы.
export function polVes(m) {
    return G * m;
}

//Получить вектор веса из массы.
export function polVesVek(m) {
    return m ? -G * m : 0;
}

//Получить угловую скорость из частоты вращения.
export function polUglSk(n) {
    return Math.PI / 30 * n;
}

//Получить частоту вращения из угловой скорости.
export function polChVr(w) {
    return 30 / Pi * w;
}

//Получить угол в градусах.
export function polUgGrad(fi) {
    return 180 / Pi * fi;
}

//Получить угол в радианах.
export function polUgRad(fi) {
    return Pi / 180 * fi;
}

//Получить время из угла, начального угла и угловой скорости.
export function polT(fi, fi0, w) {
    return (polUgRad(fi) - fi0) / w;
}

//Получить такт из угловой скорости.
export function polTakt(w) {
    return Math.abs(2 * Pi / w);
}

//Сфокусироваться на поле ввода по элементу на картинке.
export function poleFocusByEl(el, pole) {
    el.addEventListener("mouseover", () => pole.focus());
}

//Задать стиль элемента на картинке при фокусе поля.
export function elFocusByPole(pole, el) {
    const tol = el.getAttribute("stroke-width");
    pole.addEventListener("focus", function () {
        el.setAttribute("stroke", "#f00");
        el.setAttribute("stroke-width", (tol === "4" ? "8" : "4"));
    });
    pole.addEventListener("blur", function () {
        el.setAttribute("stroke", "#000");
        el.setAttribute("stroke-width", (tol === "4" ? "4" : "2"));
    });
}

//Задать стиль положения на картинке в фокусе.
export function polFocus(pole, p) {
    pole.addEventListener("focus", function () {
        p.setAttribute("stroke", "#f00");
        p.setAttribute("stroke-width", "4");
    });
    pole.addEventListener("blur", function () {
        p.setAttribute("stroke", "#000");
        p.setAttribute("stroke-width", "2");
    });
}

//Задать стиль массы на картинке в фокусе.
export function massFocus(pole, s) {
    pole.addEventListener("focus", function () {
        s.setAttribute("stroke", "#f00");
        s.setAttribute("stroke-width", "8");
        s.setAttribute("fill", "#f00");
    });
    pole.addEventListener("blur", function () {
        s.setAttribute("stroke", "#000");
        s.setAttribute("stroke-width", "4");
        s.setAttribute("fill", "none");
    });
}

//Задать стиль момента инерции на картинке в фокусе.
export function momInFocus(pole, zv, s) {
    zv.forEach(i => elFocusByPole(pole, i));
    massFocus(pole, s);
}

//Задать переменную в хранилище.
export function zadPerVHran(tok, zn) {
    localStorage.setItem(tok, zn);
    return zn;
}

//Получить переменную из хранилища.
export function polPerIzHran(tok, per) {
    return (localStorage.getItem(tok) ? Number(localStorage.getItem(tok)) : Number(per));
}

//Задать значение в поле.
export function zadPole(pole, per) {
    pole.value = per;
}

//Преобразовать число в строку с заданным числом знаков после запятой.
function strToChisSToch(chis, toch) {
    return String(Math.abs(chis.toFixed(toch))).replace(".", ",");
}

//Преобразовать число в строку с заданным числом знаков после запятой.
function strToChisSTochVek(chis, toch, zn) {
    return (chis > 0 ? (zn ? "+ " : "") : (zn ? "– " : "–")) + String(Math.abs(chis.toFixed(toch))).replace(".", ",");
}

//Получить число с четырьмя значащими знаками.
export function pol4Znach(chis) {
    const chisNum = Number(chis);
    if (chisNum === 0 || (chis < 10E-10 && chis > -10E-10)) {
        return String(0);
    } else if (Math.abs(chisNum) > 1000) {
        return strToChisSToch(Number(chisNum), 0);
    } else {
        return strToChisSToch(Number(chisNum), 4 - Math.ceil(Math.log10(Math.abs(chisNum))));
    }
}

//Получить число с десятью значащими знаками.
export function pol10Znach(chis) {
    const chisNum = Number(chis);
    if (chisNum === 0) {
        return String(0);
    } else if (Math.abs(chisNum) > 1000) {
        return strToChisSToch(Number(chisNum), 0);
    } else {
        return strToChisSToch(Number(chisNum), 10 - Math.ceil(Math.log10(Math.abs(chisNum))));
    }
}

//Получить вектор с четырьмя значащими знаками.
export function pol4ZnachVek(chis, zn) {
    const chisNum = Number(chis);
    if (chisNum === 0 || (chis < 10E-10 && chis > -10E-10)) {
        return String(0);
    } else if (Math.abs(chisNum) > 1000) {
        return strToChisSTochVek(Number(chisNum), 0, zn);
    } else {
        return strToChisSTochVek(Number(chisNum), 4 - Math.ceil(Math.log10(Math.abs(chisNum))), zn);
    }
}

//Получить минимум из массива.
export function polMin(mass) {
    let min = 10E100000;
    mass.forEach(i => {
        if (i < min) min = i;
    });
    return min;
}

//Получить максимум из массива.
export function polMax(mass) {
    let max = -10E100000;
    mass.forEach(i => {
        if (i > max) max = i;
    });
    return max;
}

//Получить гипотенузу прямоугольного треугольника.
export function polGip(kat1, kat2) {
    return Math.sqrt(Math.pow(kat1, 2) + Math.pow(kat2, 2));
}

//Получить катет прямоугольного треугольника.
export function polKat(gip, kat) {
    return Math.sqrt(Math.pow(gip, 2) - Math.pow(kat, 2));
}

//Задать цвет пункта в фокусе.
export function punktFocus(punkt) {
    punkt.classList.add("abzac-opis");
}

//Задать цвет пункта в нефокусе.
export function punktNeFocus(punkt) {
    punkt.classList.remove("abzac-opis");
}

//Отобразить рисунок на странице при наведении на абзац.
export function punktInter(ris, punkt, elMass, tol) {
    punkt.addEventListener("mouseover", function () {
        punktFocus(punkt);
        elMass.forEach(i => elFocus(i, tol));
        risVid(ris);
    });
    punkt.addEventListener("mouseout", function () {
        punktNeFocus(punkt);
        elMass.forEach(i => elNeFocus(i, tol));
        risNevid(ris);
    });
}

//Активировать интерактивные пункты.
export function aktInterPu(ris, mass, tol) {
    mass.forEach(pu => punktInter(ris, elNaStr(pu[0]), pu[1], tol));
}

//Задать величины в тексте.
export function zadVel(mass, mu) {
    mass.forEach(vel => elNaStrText(vel[0], pol4Znach(vel[1] / mu)));
}

//Добавить план на страницу.
export function zadPlNaStrZamk(gorMass, vertMass, razm, planRis, plan1, plan2, mass) {
    let {lev, verh, shir, vys, koef} = polRazmVekPl(gorMass, vertMass, razm, true);
    zadRisRazm(planRis, plan1, 20 + shir * koef, 20 + vys * koef, 10 - lev * koef, 10 + verh * koef);
    zadPryamRazm(plan2, 20 + vys * koef, 20 + shir * koef);
    let x = 0, y = 0;
    let zamk = {};
    mass.forEach(vek => {
        if (vek[3]) {
            vek[3].forEach(oboz => {
                if (!zamk[oboz.ob]) zamk[oboz.ob] = {ris: oboz.ris, nx: 0, ny: 0, kx: 0, ky: 0};
                if (oboz.nach) {
                    zamk[oboz.ob].nx = x;
                    zamk[oboz.ob].ny = y;
                } else {
                    zamk[oboz.ob].kx = x;
                    zamk[oboz.ob].ky = y;
                }
            })
        }
        zadVekPol(vek[0], x, y, x += vek[1], y += vek[2], koef);
        if (vek[4]) {
            vek[4].forEach(oboz => {
                if (!zamk[oboz.ob]) zamk[oboz.ob] = {ris: oboz.ris, nx: 0, ny: 0, kx: 0, ky: 0};
                if (oboz.nach) {
                    zamk[oboz.ob].nx = x;
                    zamk[oboz.ob].ny = y;
                } else {
                    zamk[oboz.ob].kx = x;
                    zamk[oboz.ob].ky = y;
                }
            })
        }
    });
    Object.values(zamk).forEach(vek => {
        zadVekPol(vek.ris, vek.nx, vek.ny, vek.kx, vek.ky, koef);
    })
}

export function zadPlNaStr(gorMass, vertMass, razm, planRis, plan1, plan2, mass) {
    let {lev, verh, shir, vys, koef} = polRazmVekPl(gorMass, vertMass, razm);
    zadRisRazm(planRis, plan1, 20 + shir * koef, 20 + vys * koef, 10 - lev * koef, 10 + verh * koef);
    zadPryamRazm(plan2, 20 + vys * koef, 20 + shir * koef);
    mass.forEach(vek => zadVekPol(vek[0], vek[1], vek[2], vek[3], vek[4], koef));
}

//Задать масштабный коэффициент плана скоростей и длины векторов скоростей на плане в тексте.
export function zadMuSk(mu, mass) {
    for (let i = 1; i <= mass.length; i++) elNaStrText("muv" + i, pol4Znach(mu));
    zadVel(mass, mu);
}

//Задать масштабный коэффициент плана ускорений и длины векторов ускорений на плане в тексте.
export function zadMuUsk(mu, mass) {
    for (let i = 1; i <= mass.length; i++) elNaStrText("mua" + i, pol4Znach(mu));
    zadVel(mass, mu);
}

//Задать масштабный коэффициент плана сил и длины векторов сил на плане в тексте.
export function zadMuSil(id, mu, mass) {
    for (let i = 1; i <= mass.length; i++) elNaStrText("mur" + id + i, pol4Znach(mu));
    zadVel(mass, mu);
}

//Получить приведенный момент инерции.
export function polJpZv(iner, skor, wp) {
    return iner * Math.pow(skor, 2) / Math.pow(wp, 2);
}

//Получить приведенный момент инерции механизма.
export function polJpMeh(mass, wp) {
    let jp = 0;
    mass.forEach(i => jp += polJpZv(i[0], i[1], wp));
    return jp;
}

//Получить угол между двумя векторами.
export function polUg2Vek(vek1X, vek1Y, vek2X, vek2Y) {
    if (!vek1X && !vek1Y || !vek2X && !vek2Y) return 0;
    const x3 = vek2X - vek1X;
    const y3 = vek2Y - vek1Y;
    const dl1 = Math.sqrt(Math.pow(x3, 2) + Math.pow(y3, 2));
    const dl2 = Math.sqrt(Math.pow(vek1X, 2) + Math.pow(vek1Y, 2));
    const dl3 = Math.sqrt(Math.pow(vek2X, 2) + Math.pow(vek2Y, 2));
    if (x3 === 0 && vek1Y * vek2Y < 0 || y3 === 0 && vek1X * vek2X < 0) {
        return Pi;
    } else if (x3 === 0 && vek1Y * vek2Y >= 0 || y3 === 0 && vek1X * vek2X >= 0) {
        return 0;
    } else {
        return polUgPo3St(dl1, dl2, dl3);
    }
}

//Получить компоненты суммы векторов по координатам суммарного вектора и углам компонент.
export function polKompSumVek(x, y, fi1, fi2) {
    let L1;
    let L2;
    L1 = (-y + x * Math.sin(fi2) / Math.cos(fi2)) / (Math.sin(fi1) - Math.cos(fi1) * Math.sin(fi2) / Math.cos(fi2));
    L2 = (y - x * Math.sin(fi1) / Math.cos(fi1)) / (-Math.sin(fi2) + Math.cos(fi2) * Math.sin(fi1) / Math.cos(fi1));
    return {L1, L2};
}

//Получить координаты в наклоненной системе координат.
export function polKoordNaklSist(x, y, fi) {
    let X = x * Math.cos(fi) + y * Math.sin(fi);
    let Y = -x * Math.sin(fi) + y * Math.cos(fi);
    return {X,Y};
}

//Получить приведенный момент сил.
export function polMpF(sila, vf, wp) {
    return sila * vf / wp;
}

//Получить приведенный момент сил механизма.
export function polMpMeh(nagr, wp) {
    let mp = 0;
    nagr.forEach(i => mp += i[0] * i[1] / wp)
    return mp;
}

//Получить массив приведенных моментов сил.
export function polMpMehMass(kol, takt, polMp) {
    let mass = [];
    for (let i = 0; i < kol; i++) mass[i] = polMp(i * takt / kol);
    return mass;
}

//Получить движущий момент механизма.
export function polMdvMeh(toch, polMpMeh, takt) {
    let m = 0;
    for (let i = 0; i < toch; i++) m += polMpMeh(i * takt / toch);
    return -m / toch;
}

//Получить изменение энергии механизма в такте.
export function polIzmEnMeh(MpMeh, MDv, t, toch, W) {
    return Math.abs(W) * int((t) => MpMeh(t) + MDv(), 0, t, toch);
}

//Получить массив изменений энергии механизма в такте.
export function polIzmEnMeh1(kol, takt, MpMeh, MDv, toch, W, t) {
    return Math.abs(W) * int((t) => MpMeh(t) + MDv(), t, t + takt / kol, toch);
}




//Получить момент инерции маховика.
export function polJMah(otrDE, mue, W1, ner) {
    return otrDE * mue / (Math.pow(W1, 2) * ner);
}


//Получить средний диаметр маховика.
export function polDMahSr(otrDE, mue, W1, ner) {
    return Math.pow((4 * polJMah(otrDE, mue, W1, ner)) / (0.1 * 0.2 * Pi * 7800), 0.2);
}

//Получить
export function polPsiMin(polDE, polJP, psiMax, W, toch, takt) {
    let DEMass = [];
    let JPMass = [];
    let n;
    let b = -10E1000;
    for (let i = 0; i <= toch; i++) DEMass[i] = polDE(takt * i / toch, takt);
    for (let i = 0; i <= toch; i++) JPMass[i] = polJP(takt * i / toch, takt);
    for (let i = 0; i <= toch; i++) {
        if (DEMass[i] - JPMass[i] * Math.tan(psiMax) > b) {
            n = i;
            b = DEMass[i] - JPMass[i] * Math.tan(psiMax);
        }
    }
}
