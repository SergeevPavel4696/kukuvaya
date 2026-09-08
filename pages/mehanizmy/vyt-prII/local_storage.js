import {polUglSk, polPerIzHran, polTakt, polT, Pi, polGip, zadPerVHran} from "../utils.js";
import {polUgPo3St} from "../../../scripts/matematika/geom.js";
import {polDiap5, polKr5} from "./analiz.js";

export const
    tokOA = "Spo5QQF0", tokAB = "D6ROxf6W", tokAS2 = "Xo0KjcrY", tokBC = "KulZC4i8", tokCD = "TqiIXnAG",
    tokCS3 = "QorRWIOc", tokDF = "i8ARwZlp", tokDS4 = "W0shnSKQ", tokA = "oIH8cLNN", tokB = "PThcdgdK",
    tokC = "ZbMFNeMM", tokM1 = "PytYvrso", tokM2 = "aB3iCseJ", tokM3 = "EVDipNVK", tokM4 = "3zVFARtw",
    tokM5 = "iuA6Yx7D", tokJS1 = "s9bfp1fJ", tokJS2 = "BuBOeIVf", tokJS3 = "BIVfeg1Q", tokJS4 = "etXP7WAA",
    tokJSDv = "lK2i5x1X", tokP5Max = "463uLGie", tokN1 = "6KB39jFF", tokNDv = "dI86Rbbo", tokFi = "2CmO56BoC4",
    tokFi0 = "GgBlMAZmSQ", tokK = "4S3DE54sFx", tokToch = "98bkM76ZMa", tokNerav = "NqwnKg5jlU", tokMuV = "sUZn3gUeYO",
    tokMuA = "RH8tj6fntq", tokL012 = "cyAZ4fwuh4", tokMuDiS = "4ma4s6sT9L", tokMuDiV = "xFtnSdgTE8",
    tokMuDiA = "j3Qifsg1QU", tokMuF2 = "zIQCGUd12T", tokMuF1 = "bsmIwpwPVJ", tokMuFNach = "iWR6zgCI4g", tokMuMp = "e0Ngr7gulN", tokMuFi1 = "dvSXRsdRWy", tokMuDe = "CaoXey43EG",
    tokMuJp = "lWd9uT4gLc", tokMuFi2 = "Vn6mRm2dOD", tokOtrDe = "G8dS9w64Lk";

const OA = 100, AB = 300, AS2 = 150, BC = 250, CD = 400, CS3 = 200, DF = 150, DS4 = 75, A = 150, B = 300, C = 400;
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
    const A = polTokA(), B = polTokB(), C = polTokC(), BC = polTokBC(), CD = polTokCD(), DF = polTokDF();
    const pol = polKr5() + 0.3 * polDiap5();
    const fiCF = Math.atan((B - pol) / C) + Pi, fiDCF = polUgPo3St(DF, CD, polGip(C, B - pol)), fi3 = fiCF- fiDCF;
    const xb = A + BC * Math.cos(fi3), yb = B + BC * Math.sin(fi3);
    const fiOB = Math.acos(xb / polGip(xb, yb)), fiAOB = polUgPo3St(AB, OA, polGip(xb, yb)), fi1 = fiOB + fiAOB - Pi;
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

export function polTokCS3() {
    return polPerIzHran(tokCS3, CS3);
}

export function polTokDF() {
    return polPerIzHran(tokDF, DF);
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

export function polTokC() {
    return polPerIzHran(tokC, C);
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
