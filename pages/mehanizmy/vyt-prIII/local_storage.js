import {polUglSk, polPerIzHran, polTakt, polT, Pi, polGip, zadPerVHran} from "../utils.js";
import {polUgPo3St} from "../../../scripts/matematika/geom.js";

export const
    tokOA = "C8C9z079kT", tokAB = "tpMgBJkWg6", tokAS2 = "w25dWDj4Ph", tokBC = "n4DbFBO2ew", tokCD = "qIT3Hovzty",
    tokDE = "FEvBrjDFmG", tokDS4 = "1U5h6Pgn2y", tokA = "5UIXxxG4Qf", tokB = "xuyJ1Myr2X", tokM1 = "W23da28G3Y",
    tokM2 = "BwAWotVpGg", tokM3 = "W53vfFWlzV", tokM4 = "9KTyX9ZVQb", tokM5 = "KovmRHGl99", tokJS1 = "ZeKQHXCNhq",
    tokJS2 = "VKFUHN1uhu", tokJS3 = "VKFUHR4lNJ", tokJS4 = "9smQwzeEaK", tokJSDv = "eEaQwzK9sm",
    tokP5Max = "xk6mwDooyb", tokN1 = "sCuEhu0h3g", tokNDv = "5h6Pgu0h3g", tokFi = "cbAvaqoUh7", tokFi0 = "Ulw0OKJriu",
    tokK = "lfG1k3Huy8", tokToch = "oB1TKdjR1L", tokNerav = "HVTnzymxHN", tokMuV = "6MADgNAKsb", tokMuA = "p0CajyAV66",
    tokL012 = "7eXJABvkhd", tokMuDiS = "ZayN8di7RG", tokMuDiV = "6LR4lNJWxA", tokMuDiA = "TigxJBcQxk",
    tokMuF2 = "Z1CJkbS9jB", tokMuF1 = "ZccmkxXHxw", tokMuFNach = "o5udgrv6QF", tokMuMp = "nu3CvVGtwZ",
    tokMuFi1 = "UbleK23wEZ", tokMuDe = "8WRJKmnvAG", tokMuJp = "eJzSSsDa3y", tokMuFi2 = "cq8K41a2bY",
    tokOtrDe = "vmR23TKdd7";

const OA = 200, AB = 225, AS2 = 112.5, BC = 100, CD = 60, DE = 400, DS4 = 200, A = 20, B = 40;
const M1 = 0, M2 = 0, M3 = 0, M4 = 0, M5 = 0;
const JS1 = 0, JS2 = 0, JS3 = 0, JS4 = 0, JSDV = 0;
const P5MAX = 0;
const N1 = 60, NDV = 1000;
const FI = 180, FI0 = zadTokFi0();
const K = 12, TOCH = 100;
const NERAV = 0.1;
const MUV = 1, MUA = 1;
const L012 = 180;
const MUDIS = 1, MUDIV = 1, MUDIA = 1;
const MUF2 = 1, MUF1 = 1, MUFNach = 1;
const MUMP = 1, MUFI1 = 1, MUDE = 1, MUJP = 1, MUFI2 = 1;
const OTRDE = 1;


export function zadTokFi0() {
    const
        A = polTokA(), B = polTokB(), OA = polTokOA(), AB = polTokAB(),
        BC = polTokBC(), CD = polTokCD(), DE = polTokDE(), CE = DE + 0.2 * CD;
    const fiDCE = polUgPo3St(DE, CD, CE), fi3D0 = 1.5 * Pi - fiDCE, fi3B0 = fi3D0 + 0.5 * Pi;
    const x = -A + BC * Math.cos(fi3B0), y = B + BC * Math.sin(fi3B0), OB = polGip(x, y);
    const fiOB = -Math.acos(x / OB), fiBOA = polUgPo3St(AB, OA, OB), fi1 = fiOB + fiBOA + Pi;
    zadPerVHran(tokFi0, fi1);
    return fi1;
}

export function polTokOA() {
    return polPerIzHran(tokOA, OA);
}

export function polTokAB() {
    return polPerIzHran(tokAB, AB);
}

export function polTokAS2() {
    return polPerIzHran(tokAS2, AS2);
}

export function polTokBC() {
    return polPerIzHran(tokBC, BC);
}

export function polTokCD() {
    return polPerIzHran(tokCD, CD);
}

export function polTokDE() {
    return polPerIzHran(tokDE, DE);
}

export function polTokDS4() {
    return polPerIzHran(tokDS4, DS4);
}

export function polTokA() {
    return polPerIzHran(tokA, A);
}

export function polTokB() {
    return polPerIzHran(tokB, B);
}

export function polTokM1() {
    return polPerIzHran(tokM1, M1);
}

export function polTokM2() {
    return polPerIzHran(tokM2, M2);
}

export function polTokM3() {
    return polPerIzHran(tokM3, M3);
}

export function polTokM4() {
    return polPerIzHran(tokM4, M4);
}

export function polTokM5() {
    return polPerIzHran(tokM5, M5);
}

export function polTokJs1() {
    return polPerIzHran(tokJS1, JS1);
}

export function polTokJs2() {
    return polPerIzHran(tokJS2, JS2);
}

export function polTokJs3() {
    return polPerIzHran(tokJS3, JS3);
}

export function polTokJs4() {
    return polPerIzHran(tokJS4, JS4);
}

export function polTokJsDv() {
    return polPerIzHran(tokJSDv, JSDV);
}

export function polTokP5Max() {
    return polPerIzHran(tokP5Max, P5MAX);
}

export function polTokN1() {
    return polPerIzHran(tokN1, N1);
}

export function polTokNDv() {
    return polPerIzHran(tokNDv, NDV);
}

export function polTokFi() {
    return polPerIzHran(tokFi, FI);
}

export function polTokFi0() {
    return polPerIzHran(tokFi0, FI0);
}

export function polTokK() {
    return polPerIzHran(tokK, K);
}

export function polTokToch() {
    return polPerIzHran(tokToch, TOCH);
}

export function polTokNerav() {
    return polPerIzHran(tokNerav, NERAV);
}

export function polTokMuV() {
    return polPerIzHran(tokMuV, MUV);
}

export function polTokMuA() {
    return polPerIzHran(tokMuA, MUA);
}

export function polTokL012() {
    return polPerIzHran(tokL012, L012);
}

export function polTokMuDiS() {
    return polPerIzHran(tokMuDiS, MUDIS);
}

export function polTokMuDiV() {
    return polPerIzHran(tokMuDiV, MUDIV);
}

export function polTokMuDiA() {
    return polPerIzHran(tokMuDiA, MUDIA);
}

export function polTokMuF2() {
    return polPerIzHran(tokMuF2, MUF2);
}

export function polTokMuF1() {
    return polPerIzHran(tokMuF1, MUF1);
}

export function polTokMuFNach() {
    return polPerIzHran(tokMuFNach, MUFNach);
}

export function polTokMuMP() {
    return polPerIzHran(tokMuMp, MUMP);
}

export function polTokMuFI1() {
    return polPerIzHran(tokMuFi1, MUFI1);
}

export function polTokMuDE() {
    return polPerIzHran(tokMuDe, MUDE);
}

export function polTokMuJP() {
    return polPerIzHran(tokMuJp, MUJP);
}

export function polTokMuFI2() {
    return polPerIzHran(tokMuFi2, MUFI2);
}

export function polTokOtrDe() {
    return polPerIzHran(tokOtrDe, OTRDE);
}

export function polTokW() {
    return polUglSk(polTokN1());
}

export function polTokWDv() {
    return polUglSk(polTokNDv());
}

export function polTokTakt() {
    return polTakt(Math.abs(polTokW()));
}

export function polTekVr() {
    return polT(polTokFi(), 0, Math.abs(polTokW()));
}
