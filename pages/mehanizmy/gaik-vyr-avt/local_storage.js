import {polUglSk, polPerIzHran, polTakt, polT, Pi, polGip, zadPerVHran} from "../utils.js";
import {polDiap5, polPrav5} from "./analiz.js";
import {polUgPo3St} from "../../../scripts/matematika/geom.js";

export const
    tokOA = "qUFSXVXe0g", tokAB = "GLn1ysdg1B", tokAS2 = "NDd66Ci7xY", tokBC = "p5P0a0UfNE", tokBS3 = "GRDrIr6jR9",
    tokBD = "93ONsMr4lR", tokBS4 = "Mb44MaYRXO", tokA = "epISGBW9zm", tokB = "FgcUF1cE0v", tokM1 = "pp7VPIl1sn",
    tokM2 = "aOZRbMcsLx", tokM3 = "w8gHAablfM", tokM4 = "Qj6STZEpt4", tokM5 = "5j0bhlrSY2", tokJS1 = "owsKNmwJ4e",
    tokJS2 = "sHUTF41o1W", tokJS3 = "XmoImD6BeP", tokJS4 = "4lM0qeuhoY", tokJSDv = "DYJlKlnGaz",
    tokP5Max = "a52g7S8SUU", tokN1 = "hySxTQX07T", tokNDv = "Z9z1ISrnlL", tokFi = "Kmxv8WXifc", tokFi0 = "uKzhsyQRbi",
    tokK = "HLiBNfldCV", tokToch = "ZMZa5C0aji", tokNerav = "g2BRbJFgm6", tokMuV = "nYuAnGerEE", tokMuA = "2DT5xWyBkN",
    tokL012 = "dl05sKnI4J", tokMuDiS = "SmGBaEBbvS", tokMuDiV = "wF6ZgCATIo", tokMuDiA = "Ff3xOTEHbi",
    tokMuF2 = "9ATCTr8WJU", tokMuF1 = "XmdCZnJIVS", tokMuFNach = "TLar28Jpep", tokMuMp = "VfmlQOcMch",
    tokMuFi1 = "r3Rf3khnow", tokMuDe = "sKVXq3ZJCs", tokMuJp = "kq76dOcpO3", tokMuFi2 = "pHgDMrp9jq",
    tokOtrDe = "kkYH6krQ4p";

const OA = 60, AB = 290, AS2 = 150, BC = 200, BS3 = 100, BD = 200, BS4 = 100, A = 175, B = 300;
const M1 = 0, M2 = 0, M3 = 0, M4 = 0, M5 = 0;
const JS1 = 0, JS2 = 0, JS3 = 0, JS4 = 0, JSDV = 0;
const P5MAX = 0;
const N1 = 60, NDV = 1000;
const FI = 0, FI0 = zadTokFi0();
const K = 12, TOCH = 100;
const NERAV = 0.1;
const MUV = 1, MUA = 1;
const L012 = 180;
const MUDIS = 1, MUDIV = 1, MUDIA = 1;
const MUF2 = 1, MUF1 = 1, MUFNach = 1;
const MUMP = 1, MUFI1 = 1, MUDE = 1, MUJP = 1, MUFI2 = 1;
const OTRDE = 1;


export function zadTokFi0() {
    const A = polTokA(), B = polTokB(), OA = polTokOA(), AB = polTokAB(), BC = polTokBC(), BD = polTokBD();
    const pol = polPrav5() - (0.05 * polDiap5());
    const fi3 =  polUgPo3St(BD, BC, A - pol) + Pi;
    const xb = A + BC * Math.cos(fi3), yb = B + BC * Math.sin(fi3);
    const fiOB = Math.acos(xb / polGip(xb, yb)), fiAOB = polUgPo3St(AB, OA, polGip(xb, yb)), fi1 = fiOB - fiAOB + Pi;
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

export function polTokBS3() {
    return polPerIzHran(tokBS3, BS3);
}

export function polTokBD() {
    return polPerIzHran(tokBD, BD);
}

export function polTokBS4() {
    return polPerIzHran(tokBS4, BS4);
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
