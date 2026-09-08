import {pol4Znach, pol4ZnachVek, polIndToch, polUgGrad} from "./utils.js";
import {polAbz} from "../razmetka.js";
import {WF1, WFDiakr1, WFInd1} from "../web-formula.js";
import {polTochOb} from "./pol-tag.js";

function vekVel(ob, kol, takt) {
    let rez = "<tr><td class=\"kletka\">" + ob[0] + "</td>";
    for (let j = 0; j <= kol; j++) rez += "<td class=\"kletka\">" +
        (ob[2] ? pol4ZnachVek(ob[1](j * takt / kol)) : pol4Znach(ob[1](j * takt / kol))) + "</td>";
    rez += "</tr>";
    return rez;
}

export function polRez(takt, kol, FI, S, W, V, E, A, FIN, MFIN, P, R, MU, JPM, JPJS, JP, UG, MPG, MPP, MP, DE) {
    let rez = polAbz() + "Результаты<table><thead><tr><td class=\"kletka\"></td>";
    for (let i = 0; i <= kol; i++) rez += "<td class=\"kletka\">" + i + "</td>";
    rez += "</tr></thead><tbody>";
    FI.forEach(fi => rez += vekVel([WF1("φ" + WFInd1(fi[0]), true), (t) => polUgGrad(fi[1](t)), true], kol, takt));
    S.forEach(s => rez += vekVel([WF1("S" + WFInd1(s[0]), true), s[1], true], kol, takt));
    W.forEach(w => rez += vekVel([WF1("ω" + WFInd1(w[0]), true), w[1], true], kol, takt));
    V.forEach(v => rez += vekVel([WF1("v" + WFInd1(polTochOb(v[0].split(" ")[0]) + v[0].split(" ")[1]), true), v[1], true], kol, takt));
    E.forEach(e => rez += vekVel([WF1("ε" + WFInd1(e[0]), true), e[1], true], kol, takt));
    A.forEach(a => rez += vekVel([WF1("a" + WFInd1(polTochOb(a[0].split(" ")[0]) + a[0].split(" ")[1], a[0].split(" ")[2]), true), a[1], true], kol, takt));
    FIN.forEach(fin => rez += vekVel([WF1("Φ" + WFInd1(fin[0]), true), fin[1]], kol, takt));
    MFIN.forEach(mfin => rez += vekVel([WF1("M" + WFInd1("Φ" + mfin[0]), true), mfin[1], true], kol, takt));
    P.forEach(p => rez += vekVel([WF1("P" + WFInd1(p[0]), true), p[1], true], kol, takt));
    R.forEach(r => rez += vekVel([WF1("R" + WFInd1(r[0]), true), r[1]], kol, takt));
    MU.forEach(mu => rez += vekVel([WF1("M" + WFInd1("ур"), true), mu, true], kol, takt));
    JPM.forEach(jpm => rez += vekVel([WF1("J" + WFInd1("p", "m" + WFInd1(jpm[0])), true), jpm[1]], kol, takt));
    JPJS.forEach(jpjs => rez += vekVel([WF1("J" + WFInd1("p", "J" + WFInd1("S" + WFInd1(jpjs[0]))), true), jpjs[1]], kol, takt));
    JP.forEach(jp => rez += vekVel([WF1("J" + WFInd1("p"), true), jp], kol, takt));
    UG.forEach(ug => rez += vekVel([WF1(WFDiakr1(WFDiakr1(ug[0].split(" ")[0] + WFInd1(ug[0].split(" ")[1]), "->") +
        "," + WFDiakr1("v" + polIndToch(ug[0].split(" ")[2]), "->"), "^"), true), ug[1]], kol, takt));
    MPG.forEach(mpg => rez += vekVel([WF1("M" + WFInd1("p", "G" + WFInd1(mpg[0])), true), mpg[1], true], kol, takt));
    MPP.forEach(mpp => rez += vekVel([WF1("M" + WFInd1("p", "P" + WFInd1(mpp[0])), true), mpp[1], true], kol, takt));
    MP.forEach(mp => rez += vekVel([WF1("M" + WFInd1("p"), true), mp, true], kol, takt));
    DE.forEach(de => rez += vekVel([WF1("ΔE", true), de, true], kol, takt));
    rez += "</tbody></table>";
    return rez;
}
