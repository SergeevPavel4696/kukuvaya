import {polUglSk, polPerIzHran, polTakt, polT} from "../utils.js";

export const
    tokOA = "j55R6N7hOv", tokOB = "R4LJXkmLLw", tokBC = "fQBnO6fvXx", tokBS3 = "BbbO9BZk0g", tokCD = "71NuOGymG6",
    tokCS4 = "etm0elB9v3", tokDS5 = "O1NGdfF8Uq", tokH1 = "Ljj69AVAv7", tokH2 = "AnXwvDzBH4", tokL1 = "Derdm214tX",
    tokL2 = "vI3JGFgiMb", tokM1 = "xtj9c9GlII", tokM2 = "Ww327I6hrC", tokM3 = "UOJcvPoPdP", tokM4 = "VZJip3kuPZ",
    tokM5 = "dCQv3fumI1", tokJS1 = "8enmlS5t9t", tokJS2 = "DS2V28Ww5R", tokJS3 = "asGEP78j6w", tokJS4 = "7Ki83t6Wwv",
    tokJsDv = "X6f1NepGsV", tokP5Max = "vVGpQPnYpF", tokN1 = "aZQ0s9cGmH", tokNDv = "YzZWlXiPhJ", tokFi = "entdIE4XVB",
    tokK = "9lY53UH6uf", tokToch = "s1m5APsg93", tokNerav = "koqkxNwf75", tokMuV = "YjZdnPpVA3", tokMuA = "ITPdwSAnYr",
    tokL012 = "TxNV4iob0y", tokMuDiS = "2QxvR8Uz35", tokMuDiV = "CG4rAuI829", tokMuDiA = "jB60LvB5G3",
    tokMuF2 = "HRitfRjbTx", tokMuF1 = "BzUojYfIXq", tokMuFNach = "JKDq5VvdUL", tokMuMp = "myj4jLXDlP",
    tokMuFi1 = "bUlzXylQzo", tokMuDe = "0EOQCS5EZX", tokMuJp = "2XCXLKypf7", tokMuFi2 = "12Ow6uKeP7",
    tokOtrDe = "60TKXKBChw";

const OA = 50, OB = 200, BC = 400, BS3 = 200, CD = 150, CS4 = 75, DS5 = 75, H1 = 30, H2 = 175, L1 = 260, L2 = 150;
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

export function polTokBS3() {
    return polPerIzHran(tokBS3, BS3);
}

export function polTokCD() {
    return polPerIzHran(tokCD, CD);
}

export function polTokCS4() {
    return polPerIzHran(tokCS4, CS4);
}

export function polTokDS5() {
    return polPerIzHran(tokDS5, DS5);
}

export function polTokH1() {
    return polPerIzHran(tokH1, H1);
}

export function polTokH2() {
    return polPerIzHran(tokH2, H2);
}

export function polTokL1() {
    return polPerIzHran(tokL1, L1);
}

export function polTokL2() {
    return polPerIzHran(tokL2, L2);
}

// export function polTokZv5L1() {
//     return polTokBC() + polTokCD() - polTokL1() + 75;
// }
//
// export function polTokZv5L2() {
//     return polTokL2() + polTokBC() - polTokCD() + 75;
// }

export function polTokZv5D() {
    return polTokH1();
}

// export function polTokZv5Dl() {
//     return polTokZv5L1() + polTokZv5L2();
// }
//
// export function polTokZv5() {
//     return polTokH2() - polTokH1();
// }

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
