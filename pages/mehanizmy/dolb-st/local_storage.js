import {polUglSk, polPerIzHran, polTakt, polT} from "../utils.js";

export const
    tokOA = "OmGA8sb6jp", tokOB = "nzMPYKfDWd", tokBC = "MSkSaME3g1", tokCD = "Y0vKKH59l1", tokCS4 = "fdRrZgnqdx",
    tokA = "uI1Ps6iDR6", tokB = "y1wPNsD8Bj", tokY1 = "LnTGJDFqde", tokY2 = "tIGdGUbBiq", tokM1 = "QoHNW0RutS",
    tokM2 = "Vokt7dCpQo", tokM3 = "UDU71lTwWt", tokM4 = "oiqLO3JWBa", tokM5 = "qtCmrkcEAa", tokJS1 = "AChpzYqHJC",
    tokJS2 = "aeBZy51huG", tokJS3 = "vO17QEcdtE", tokJS4 = "pGMFCyx4Rq", tokJsDv = "aLTMD4Hv23",
    tokP5Max = "Z3tthhepKi", tokN1 = "yLZECXiKJq", tokNDv = "K9uVMHx6N0", tokFi = "y5T2LQt0M5", tokK = "Ju17GT952x",
    tokToch = "wIuKQMkc8L", tokNerav = "Ft8M6QacHZ", tokMuV = "MpPMtHO64d", tokMuA = "SxVqw0dFiV",
    tokL012 = "5jDnnS1E3s", tokMuDiS = "p8Tmq0DSAv", tokMuDiV = "35GEO5iqcI", tokMuDiA = "cUVFpk9fuN",
    tokMuF2 = "yLJUABwOkD", tokMuF1 = "vlHuj0QGkN", tokMuFNach = "o8s9RDBPsA", tokMuMp = "jCATLp5Hqw",
    tokMuFi1 = "jaby1ZmDSF", tokMuDe = "W7MXzXG8eJ", tokMuJp = "cR7qF9NwfE", tokMuFi2 = "8wBLlm6oMP",
    tokOtrDe = "SX4XjR442B";

const OA = 150, OB = 100, BC = 100, CD = 400, CS4 = 200, A = 20, B = 40, Y1 = 280, Y2 = 520;
const M1 = 0, M2 = 0, M3 = 0, M4 = 0, M5 = 0;
const JS1 = 0, JS2 =0, JS3 = 0, JS4 = 0, JSDV = 0;
const P5MAX = 0;
const N1 = 60, NDV = 1000;
const FI = 0;
const K = 12, TOCH = 100;
const NERAV = 0.1;
const MUV = 1, MUA = 1;
const L012 = 180;
const MUDIS = 1, MUDIV = 1, MUDIA = 1;
const MUF2 = 1, MUF1 = 1, MUFNach = 1;
const MUMP = 1, MUFI1 = 1, MUDE = 1, MUJP = 1, MUFI2 = 1;
const OTRDE = 1;


export function polTokOA() {
    return polPerIzHran(tokOA, OA);
}

export function polTokOB() {
    return polPerIzHran(tokOB, OB);
}

export function polTokBC() {
    return polPerIzHran(tokBC, BC);
}

export function polTokCD() {
    return polPerIzHran(tokCD, CD);
}

export function polTokCS4() {
    return polPerIzHran(tokCS4, CS4);
}

export function polTokA() {
    return polPerIzHran(tokA, A);
}

export function polTokB() {
    return polPerIzHran(tokB, B);
}

export function polTokY1() {
    return polPerIzHran(tokY1, Y1);
}

export function polTokY2() {
    return polPerIzHran(tokY2, Y2);
}

export function polTokZv5Y1() {
    return polTokBC() + polTokCD() - polTokY1() + 75;
}

export function polTokZv5Y2() {
    return polTokY2() + polTokBC() - polTokCD() + 75;
}

export function polTokZv5D() {
    return polTokA();
}

export function polTokZv5Dl() {
    return polTokZv5Y1() + polTokZv5Y2();
}

export function polTokZv5() {
    return polTokB() - polTokA();
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
    return polPerIzHran(tokJsDv, JSDV);
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
    return -polUglSk(polTokN1());
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
