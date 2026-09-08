import {
    polTokOA, polTokAB, polTokAS2, polTokBC, polTokBS3, polTokBD, polTokBS4, polTokX, polTokY,
    polTokM1, polTokM2, polTokM3, polTokM4, polTokM5, polTokMMat, polTokJs1, polTokJs2, polTokJs3,
    polTokJs4, polTokJsDv, polTokP5Pr, polTokP5Obr, polTokTakt, polTokW, polTokWDv, polTokK, polTokToch
} from "./local_storage.js";
import {
    dif,
    Pi,
    polGip,
    polIzmEnMeh,
    polIzmEnMeh1,
    polJpMeh,
    polJpZv,
    polKompSumVek,
    polMax,
    polMdvMeh,
    polMin,
    polMpF,
    polMpMeh,
    polMpMehMass,
    polPlecho,
    polUg2Vek,
    polUgGrad,
    polVes,
    polVesVek
} from "../utils.js";
import {polUgPo3St} from "../../../scripts/matematika/geom.js";


//
//Кинематический анализ.
//

//Перемещения звеньев.
export function polFI1(t) {
    return Pi + polTokW() * t;
}

export function polSAX(t) {
    return polTokOA() * Math.cos(polFI1(t));
}

export function polSAY(t) {
    return polTokOA() * Math.sin(polFI1(t));
}

function polACdl(t) {
    return polGip(polTokX() - polSAX(t), polTokY() - polSAY(t));
}

function polFIAC(t) {
    return Math.asin((polTokY() - polSAY(t)) / polACdl(t));
}

function polFIBAC(t) {
    return polUgPo3St(polTokBC(), polTokAB(), polACdl(t));
}

export function polFI2(t) {
    return polFIAC(t) + polFIBAC(t);
}

export function polSS2X(t) {
    return polSAX(t) + polTokAS2() * Math.cos(polFI2(t));
}

export function polSS2Y(t) {
    return polSAY(t) + polTokAS2() * Math.sin(polFI2(t));
}

export function polSBX(t) {
    return polSAX(t) + polTokAB() * Math.cos(polFI2(t));
}

export function polSBY(t) {
    return polSAY(t) + polTokAB() * Math.sin(polFI2(t));
}

export function polFI3(t) {
    return Math.acos((polSBX(t) - polTokX()) / polTokBC());
}

export function polSS3X(t) {
    return polTokX() + (polTokBC() - polTokBS3()) * Math.cos(polFI3(t));
}

export function polSS3Y(t) {
    return polTokY() + (polTokBC() - polTokBS3()) * Math.sin(polFI3(t));
}

export function polFI4(t) {
    return Math.asin((polTokY() - polSBY(t)) / polTokBD());
}

export function polSS4X(t) {
    return polSBX(t) + polTokBS4() * Math.cos(polFI4(t));
}

export function polSS4Y(t) {
    return polSBY(t) + polTokBS4() * Math.sin(polFI4(t));
}

export function polSDX(t) {
    return polSBX(t) + polTokBD() * Math.cos(polFI4(t));
}

export function polSDY(t) {
    return polTokY();
}

//Крайние положения механизма.
function polOC() {
    return polGip(polTokX(), polTokY());
}

function polOB(verh) {
    return verh ? polTokAB() + polTokOA() : polTokAB() - polTokOA();
}

function polFiOB(verh) {
    return Math.atan(polTokY() / polTokX()) + polUgPo3St(polTokBC(), polOC(), polOB(verh));
}

function polXB(verh) {
    return polOB(verh) * Math.cos(polFiOB(verh));
}

function polYB(verh) {
    return polOB(verh) * Math.sin(polFiOB(verh));
}

export function polLevKr() {
    let x;
    if (polYB(true) < polTokY()) {
        x = polXB(true);
    } else if (polYB() > polTokY()) {
        x = polXB();
    } else {
        x = polTokX() - polTokBC();
    }
    return polMin([-polTokOA(), x]);
}

export function polVerhKr() {
    let y;
    if (polXB(true) < polTokX()) {
        y = polYB(true);
    } else if (polXB() > polTokX()) {
        y = polYB();
    } else {
        y = polTokY() + polTokBC();
    }
    return y;
}

export function polPravKr(verh) {
    const a = Math.acos((polXB(verh) - polTokX()) / polTokBC());
    const BC = polTokBC(), BD = polTokBD();
    return polTokX() + BD * Math.sin(a + Math.asin(Math.sin(a) * BC / BD)) / Math.sin(a);
}

export function polNizhKr() {
    return -polTokOA();
}

export function polLev5() {
    return polPravKr();
}

export function polPrav5() {
    return polPravKr(true);
}

function polDiap5() {
    return polPrav5() - polLev5();
}

export function polSBXLevKr() {
    return polXB();
}

export function polSBYLevKr() {
    return polYB();
}

export function polSBXPravKr() {
    return polXB(true);
}

export function polSBYPravKr() {
    return polYB(true);
}

export function polSS3XLevKr() {
    const xb = polXB(), xc = polTokX(), bc = polTokBC(), bs3 = polTokBS3(), cs3 = bc - bs3;
    return (xb * cs3 + xc * bs3) / bc;
}

export function polSS3YLevKr() {
    const yb = polYB(), yc = polTokY(), bc = polTokBC(), bs3 = polTokBS3(), cs3 = bc - bs3;
    return (yb * cs3 + yc * bs3) / bc;
}

export function polSS3XPravKr() {
    const xb = polXB(true), xc = polTokX(), bc = polTokBC(), bs3 = polTokBS3(), cs3 = bc - bs3;
    return (xb * cs3 + xc * bs3) / bc;
}

export function polSS3YPravKr() {
    const yb = polYB(true), yc = polTokY(), bc = polTokBC(), bs3 = polTokBS3(), cs3 = bc - bs3;
    return (yb * cs3 + yc * bs3) / bc;
}

//Скорости звеньев.
export function polW1(t) {
    return polTokW();
}

export function polW2(t) {
    return dif(polFI2, t, polTokTakt());
}

export function polW3(t) {
    return dif(polFI3, t, polTokTakt());
}

export function polW4(t) {
    return dif(polFI4, t, polTokTakt());
}

export function polWDv(t) {
    return polTokWDv();
}

export function polVAX(t) {
    return dif(polSAX, t, polTokTakt()) / 1000;
}

export function polVAY(t) {
    return dif(polSAY, t, polTokTakt()) / 1000;
}

export function polVA(t) {
    return polGip(polVAX(t), polVAY(t));
}

export function polVS2A(t) {
    return Math.abs(polW2(t) * polTokAS2() / 1000);
}

export function polVS2X(t) {
    return dif(polSS2X, t, polTokTakt()) / 1000;
}

export function polVS2Y(t) {
    return dif(polSS2Y, t, polTokTakt()) / 1000;
}

export function polVS2(t) {
    return polGip(polVS2X(t), polVS2Y(t));
}

export function polVBA(t) {
    return Math.abs(polW2(t) * polTokAB() / 1000);
}

export function polVBX(t) {
    return dif(polSBX, t, polTokTakt()) / 1000;
}

export function polVBY(t) {
    return dif(polSBY, t, polTokTakt()) / 1000;
}

export function polVB(t) {
    return polGip(polVBX(t), polVBY(t));
}

export function polVS3X(t) {
    return dif(polSS3X, t, polTokTakt()) / 1000;
}

export function polVS3Y(t) {
    return dif(polSS3Y, t, polTokTakt()) / 1000;
}

export function polVS3(t) {
    return polGip(polVS3X(t), polVS3Y(t));
}

export function polVS4B(t) {
    return Math.abs(polW4(t) * polTokBS4() / 1000);
}

export function polVS4X(t) {
    return dif(polSS4X, t, polTokTakt()) / 1000;
}

export function polVS4Y(t) {
    return dif(polSS4Y, t, polTokTakt()) / 1000;
}

export function polVS4(t) {
    return polGip(polVS4X(t), polVS4Y(t));
}

export function polVDB(t) {
    return Math.abs(polW4(t) * polTokBD() / 1000);
}

export function polVDX(t) {
    return dif(polSDX, t, polTokTakt()) / 1000;
}

export function polVDY(t) {
    return dif(polSDY, t, polTokTakt()) / 1000;
}

export function polVD(t) {
    return polGip(polVDX(t), polVDY(t));
}

//Ускорения звеньев.
export function polE1(t) {
    return 0;
}

export function polE2(t) {
    return dif(polW2, t, polTokTakt());
}

export function polE3(t) {
    return dif(polW3, t, polTokTakt());
}

export function polE4(t) {
    return dif(polW4, t, polTokTakt());
}

export function polAAX(t) {
    return dif(polVAX, t, polTokTakt());
}

export function polAAY(t) {
    return dif(polVAY, t, polTokTakt());
}

export function polAA(t) {
    return polGip(polAAX(t), polAAY(t));
}

export function polAS2An(t) {
    return Math.pow(polW2(t), 2) * polTokAS2() / 1000;
}

export function polAS2At(t) {
    return Math.abs(polE2(t) * polTokAS2() / 1000);
}

export function polAS2A(t) {
    return polGip(polAS2An(t), polAS2At(t));
}

export function polAS2X(t) {
    return dif(polVS2X, t, polTokTakt());
}

export function polAS2Y(t) {
    return dif(polVS2Y, t, polTokTakt());
}

export function polAS2(t) {
    return polGip(polAS2X(t), polAS2Y(t));
}

export function polABAn(t) {
    return Math.pow(polW2(t), 2) * polTokAB() / 1000;
}

export function polABAt(t) {
    return Math.abs(polE2(t) * polTokAB() / 1000);
}

export function polABA(t) {
    return polGip(polABAn(t), polABAt(t));
}

export function polAS3X(t) {
    return dif(polVS3X, t, polTokTakt());
}

export function polAS3Y(t) {
    return dif(polVS3Y, t, polTokTakt());
}

export function polAS3(t) {
    return polGip(polAS3X(t), polAS3Y(t));
}

export function polABCn(t) {
    return Math.pow(polW3(t), 2) * polTokBC() / 1000;
}

export function polABCt(t) {
    return Math.abs(polE3(t) * polTokBC() / 1000);
}

export function polABX(t) {
    return dif(polVBX, t, polTokTakt());
}

export function polABY(t) {
    return dif(polVBY, t, polTokTakt());
}

export function polAB(t) {
    return polGip(polABX(t), polABY(t));
}

export function polAS4Bn(t) {
    return Math.pow(polW4(t), 2) * polTokBS4() / 1000;
}

export function polAS4Bt(t) {
    return Math.abs(polE4(t) * polTokBS4() / 1000);
}

export function polAS4B(t) {
    return polGip(polAS4Bn(t), polAS4Bt(t));
}

export function polAS4X(t) {
    return dif(polVS4X, t, polTokTakt());
}

export function polAS4Y(t) {
    return dif(polVS4Y, t, polTokTakt());
}

export function polAS4(t) {
    return polGip(polAS4X(t), polAS4Y(t));
}

export function polADBn(t) {
    return Math.pow(polW4(t), 2) * polTokBD() / 1000;
}

export function polADBt(t) {
    return Math.abs(polE4(t) * polTokBD() / 1000);
}

export function polADB(t) {
    return polGip(polADBn(t), polADBt(t));
}

export function polADX(t) {
    return dif(polVDX, t, polTokTakt());
}

export function polADY(t) {
    return 0;
}

export function polAD(t) {
    return Math.abs(polADX(t));
}


//
//Силовой анализ.
//

//Веса звеньев и материала.
export function polG1(vek) {
    return vek ? polVesVek(polTokM1()) : polVes(polTokM1());
}

export function polG2(vek) {
    return vek ? polVesVek(polTokM2()) : polVes(polTokM2());
}

export function polG3(vek) {
    return vek ? polVesVek(polTokM3()) : polVes(polTokM3());
}

export function polG4(vek) {
    return vek ? polVesVek(polTokM4()) : polVes(polTokM4());
}

export function polG5(vek) {
    return vek ? polVesVek(polTokM5()) : polVes(polTokM5());
}

export function polMMat(t) {
    return polVDX(t) >= 0 ? polTokMMat() : 0;
}

export function polGMat(t, vek) {
    return vek ? polVesVek(polMMat(t)) : polVes(polMMat(t));
}

//Силы инерции.
export function polFIn2X(t) {
    return -polTokM2() * polAS2X(t);
}

export function polFIn2Y(t) {
    return -polTokM2() * polAS2Y(t);
}

export function polFIn2(t) {
    return polTokM2() * polAS2(t);
}

export function polFIn3X(t) {
    return -polTokM3() * polAS3X(t);
}

export function polFIn3Y(t) {
    return -polTokM3() * polAS3Y(t);
}

export function polFIn3(t) {
    return polTokM3() * polAS3(t);
}

export function polFIn4X(t) {
    return -polTokM4() * polAS4X(t);
}

export function polFIn4Y(t) {
    return -polTokM4() * polAS4Y(t);
}

export function polFIn4(t) {
    return polTokM4() * polAS4(t);
}

export function polFIn5X(t) {
    return -polTokM5() * polADX(t);
}

export function polFIn5Y(t) {
    return 0;
}

export function polFIn5(t) {
    return polTokM5() * polAD(t);
}

export function polFInMatX(t) {
    return -polMMat(t) * polADX(t);
}

export function polFInMatY(t) {
    return 0;
}

export function polFInMat(t) {
    return polMMat(t) * polAD(t);
}

//Моменты сил инерции.
export function polMIn2(t) {
    return -polTokJs2() * polE2(t);
}

export function polMIn3(t) {
    return -polTokJs3() * polE3(t);
}

export function polMIn4(t) {
    return -polTokJs4() * polE4(t);
}

//Сила полезного сопротивления.
export function polP5(t) {
    return (polVDX(t) > 0 ? -polTokP5Pr() : polTokP5Obr());
}

//Вторая группа Ассура.
export function polMomR05(t) {
    return -polR05(t) * (polSBX(t) - polSDX(t)) / 1000;
}

export function polMomP5(t) {
    return polP5(t) * (polSBY(t) - polSDY(t)) / 1000;
}

export function polMomFIn5(t) {
    return polFIn5X(t) * (polSBY(t) - polSDY(t)) / 1000;
}

export function polMomFInMat(t) {
    return polFInMatX(t) * (polSBY(t) - polSDY(t)) / 1000;
}

export function polMomG5(t) {
    return -polG5(true) * (polSBX(t) - polSDX(t)) / 1000;
}

export function polMomGMat(t) {
    return -polGMat(t, true) * (polSBX(t) - polSDX(t)) / 1000;
}

export function polMomFIn4(t) {
    return (polFIn4X(t) * (polSBY(t) - polSS4Y(t)) - polFIn4Y(t) * (polSBX(t) - polSS4X(t))) / 1000;
}

export function polMomG4(t) {
    return -polG4(true) * (polSBX(t) - polSS4X(t)) / 1000;
}

export function polPlA(t) {
    return (polSDX(t) - polSBX(t)) / 1000;
}

export function polPlB(t) {
    return (polSBY(t) - polSDY(t)) / 1000;
}

export function polPlC(t) {
    return polPlecho(polFIn4X(t), polFIn4Y(t), polSBX(t) - polSS4X(t), polSBY(t) - polSS4Y(t)) / 1000;
}

export function polPlD(t) {
    return (polSS4X(t) - polSBX(t)) / 1000;
}

export function polR05(t) {
    return (polMomP5(t) + polMomFIn5(t) + polMomFInMat(t) + polMomG5(t) + polMomGMat(t) +
        polMomFIn4(t) + polMomG4(t) + polMIn4(t)) / ((polSBX(t) - polSDX(t)) / 1000);
}

export function polR45X(t) {
    return -polP5(t) - polFIn5X(t) - polFInMatX(t);
}

export function polR45Y(t) {
    return -polR05(t) - polG5(true) - polGMat(t, true);
}

export function polR45(t) {
    return polGip(polR45X(t), polR45Y(t));
}

export function polR54X(t) {
    return -polR45X(t);
}

export function polR54Y(t) {
    return -polR45Y(t);
}

export function polR54(t) {
    return polGip(polR54X(t), polR54Y(t));
}

export function polR34X(t) {
    return -polR54X(t) - polFIn4X(t);
}

export function polR34Y(t) {
    return -polR54Y(t) - polFIn4Y(t) - polG4(true);
}

export function polR34(t) {
    return polGip(polR34X(t), polR34Y(t));
}

//Первая группа Ассура.
export function polMomR03t(t) {
    return -polR03T(t) * polTokBC() / 1000;
}

export function polMomFIn3(t) {
    return (polFIn3X(t) * (polSBY(t) - polSS3Y(t)) - polFIn3Y(t) * (polSBX(t) - polSS3X(t))) / 1000;
}

export function polMomG3(t) {
    return -polG3(true) * (polSBX(t) - polSS3X(t)) / 1000;
}

export function polMomR12t(t) {
    return -polR12T(t) * polTokAB() / 1000;
}

export function polMomFIn2(t) {
    return (polFIn2X(t) * (polSBY(t) - polSS2Y(t)) - polFIn2Y(t) * (polSBX(t) - polSS2X(t))) / 1000;
}

export function polMomG2(t) {
    return -polG2(true) * (polSBX(t) - polSS2X(t)) / 1000;
}

export function polPlE(t) {
    return polTokBC() / 1000;
}

export function polPlF(t) {
    return polPlecho(polFIn3X(t), polFIn3Y(t), polSBX(t) - polSS3X(t), polSBY(t) - polSS3Y(t)) / 1000;
}

export function polPlG(t) {
    return Math.abs(polSS3X(t) - polSBX(t)) / 1000;
}

export function polPlH(t) {
    return polTokAB() / 1000;
}

export function polPlI(t) {
    return polPlecho(polFIn2X(t), polFIn2Y(t), polSBX(t) - polSS2X(t), polSBY(t) - polSS2Y(t)) / 1000;
}

export function polPlJ(t) {
    return Math.abs(polSS2X(t) - polSBX(t)) / 1000;
}

export function polR43X(t) {
    return -polR34X(t);
}

export function polR43Y(t) {
    return -polR34Y(t);
}

export function polR43(t) {
    return polGip(polR43X(t), polR43Y(t));
}

export function polR03T(t) {
    return (polMomFIn3(t) + polMomG3(t) + polMIn3(t)) / (polTokBC() / 1000);
}

export function polR03TX(t) {
    return polR03T(t) * Math.cos(polFI3(t) + 0.5 * Pi);
}

export function polR03TY(t) {
    return polR03T(t) * Math.sin(polFI3(t) + 0.5 * Pi);
}

export function polR03N(t) {
    return polKompSumVek(
        polR12TX(t) + polFIn2X(t) + polR43X(t) + polFIn3X(t) + polR03TX(t),
        polR12TY(t) + polFIn2Y(t) + polG2(true) + polR43Y(t) + polFIn3Y(t) + polG3(true) + polR03TY(t),
        polFI3(t), polFI2(t)).L1;
}

export function polR03NX(t) {
    return polR03N(t) * Math.cos(polFI3(t));
}

export function polR03NY(t) {
    return polR03N(t) * Math.sin(polFI3(t));
}

export function polR03X(t) {
    return polR03TX(t) + polR03NX(t);
}

export function polR03Y(t) {
    return polR03TY(t) + polR03NY(t);
}

export function polR03(t) {
    return polGip(polR03X(t), polR03Y(t));
}

export function polR12T(t) {
    return (polMomFIn2(t) + polMomG2(t) + polMIn2(t)) / (polTokAB() / 1000);
}

export function polR12TX(t) {
    return polR12T(t) * Math.cos(polFI2(t) + 0.5 * Pi);
}

export function polR12TY(t) {
    return polR12T(t) * Math.sin(polFI2(t) + 0.5 * Pi);
}

export function polR12N(t) {
    return polKompSumVek(
        polR12TX(t) + polFIn2X(t) + polR43X(t) + polFIn3X(t) + polR03TX(t),
        polR12TY(t) + polFIn2Y(t) + polG2(true) + polR43Y(t) + polFIn3Y(t) + polG3(true) + polR03TY(t),
        polFI3(t), polFI2(t)).L2;
}

export function polR12NX(t) {
    return polR12N(t) * Math.cos(polFI2(t));
}

export function polR12NY(t) {
    return polR12N(t) * Math.sin(polFI2(t));
}

export function polR12X(t) {
    return polR12TX(t) + polR12NX(t);
}

export function polR12Y(t) {
    return polR12TY(t) + polR12NY(t);
}

export function polR12(t) {
    return polGip(polR12X(t), polR12Y(t));
}

export function polR32X(t) {
    return -(polR12X(t) + polFIn2X(t));
}

export function polR32Y(t) {
    return -(polR12Y(t) + polFIn2Y(t) + polG2(true));
}

export function polR32(t) {
    return polGip(polR32X(t), polR32Y(t));
}

export function polR23X(t) {
    return -polR32X(t);
}

export function polR23Y(t) {
    return -polR32Y(t);
}

export function polR23(t) {
    return polGip(polR23X(t), polR23Y(t));
}

//Начальный механизм.
export function polMomR21(t) {
    return (-polR21X(t) * polSAY(t) + polR21Y(t) * polSAX(t)) / 1000;
}

export function polPlK(t) {
    return polPlecho(polR21X(t), polR21Y(t), -polSAX(t), -polSAY(t)) / 1000;
}

export function polR21X(t) {
    return -polR12X(t);
}

export function polR21Y(t) {
    return -polR12Y(t);
}

export function polR21(t) {
    return polGip(polR21X(t), polR21Y(t));
}

export function polR01X(t) {
    return -polR21X(t);
}

export function polR01Y(t) {
    return -(polR21Y(t) + polG1(true));
}

export function polR01(t) {
    return polGip(polR01X(t), polR01Y(t));
}

export function polMomUr(t) {
    return (polR21X(t) * polSAY(t) - polR21Y(t) * polSAX(t)) / 1000;
}


//
//Динамический анализ.
//

//Приведенные моменты инерции.
export function polJpM2(t) {
    return polJpZv(polTokM2(), polVS2(t), polW1(t));
}

export function polJpM3(t) {
    return polJpZv(polTokM3(), polVS3(t), polW1(t));
}

export function polJpM4(t) {
    return polJpZv(polTokM4(), polVS4(t), polW1(t));
}

export function polJpM5(t) {
    return polJpZv(polTokM5(), polVD(t), polW1(t));
}

export function polJpMMat(t) {
    return polJpZv(polMMat(t), polVD(t), polW1(t));
}

export function polJpJs1(t) {
    return polTokJs1();
}

export function polJpJs2(t) {
    return polJpZv(polTokJs2(), polW2(t), polW1(t));
}

export function polJpJs3(t) {
    return polJpZv(polTokJs3(), polW3(t), polW1(t));
}

export function polJpJs4(t) {
    return polJpZv(polTokJs4(), polW4(t), polW1(t));
}

export function polJpJsDv(t) {
    return polJpZv(polTokJsDv(), polWDv(t), polW1(t));
}

export function polJp(t) {
    return polJpMeh([
        [polTokM2(), polVS2(t)], [polTokM3(), polVS3(t)], [polTokM4(), polVS4(t)], [polTokM5(), polVD(t)], [polMMat(t), polVD(t)],
        [polTokJs1(), polW1(t)], [polTokJs2(), polW2(t)], [polTokJs3(), polW3(t)], [polTokJs4(), polW4(t)], [polTokJsDv(), polWDv(t)]
    ], polW1(t));
}

//Углы между силами и скоростями точек приложения сил.
export function polUgG2VS2(t) {
    return polUgGrad(polUg2Vek(0, polG2(true), polVS2X(t), polVS2Y(t)));
}

export function polUgG3VS3(t) {
    return polUgGrad(polUg2Vek(0, polG3(true), polVS3X(t), polVS3Y(t)));
}

export function polUgG4VS4(t) {
    return polUgGrad(polUg2Vek(0, polG4(true), polVS4X(t), polVS4Y(t)));
}

export function polUgG5VD(t) {
    return 90;
}

export function polUgGMatVD(t) {
    return 90;
}

export function polUgP5VD(t) {
    return 180;
}

//Приведенные моменты сил.
export function polMpG2(t) {
    return polMpF(polG2(true), polVS2Y(t), Math.abs(polW1(t)));
}

export function polMpG3(t) {
    return polMpF(polG3(true), polVS3Y(t), Math.abs(polW1(t)));
}

export function polMpG4(t) {
    return polMpF(polG4(true), polVS4Y(t), Math.abs(polW1(t)));
}

export function polMpG5(t) {
    return 0;
}

export function polMpGMat(t) {
    return 0;
}

export function polMpP5(t) {
    return polMpF(polP5(t), polVDX(t), Math.abs(polW1(t)));
}

export function polMp(t) {
    return polMpMeh([[polG2(true), polVS2Y(t)], [polG3(true), polVS3Y(t)],
        [polG4(true), polVS4Y(t)], [polP5(t), polVDX(t)]], Math.abs(polW1(t)));
}

//Массив приведенных моментов сил.
export function polMpMass() {
    const kol = polTokK();
    const takt = polTokTakt();
    return polMpMehMass(kol, takt, polMp);
}

//Движущий момент.
export function polMdv() {
    return polMdvMeh(polTokToch(), polMp, polTokTakt());
}

//Изменение кинетической энергии.
export function polIzmEn(t) {
    return polIzmEnMeh(polMp, polMdv, t, polTokToch(), polTokW());
}

//Массив изменений кинетической энергии.
export function polIzmEn1(t) {
    return polIzmEnMeh1(polTokK(), polTokTakt(), polMp, polMdv, polTokToch(), polTokW(), t);
}



//Получить угол наклона касательной к диаграмме Виттенбауэра.
export function polUgPsi(muJp, muDe, ner, min) {
    if (min) {
        return polUgGrad(Math.atan(0.5 * Math.pow(polTokW() * (1 - ner / 2), 2) * muJp / muDe));
    } else {
        return polUgGrad(Math.atan(0.5 * Math.pow(polTokW() * (1 + ner / 2), 2) * muJp / muDe));
    }
}

//Получить длину отрезка, отсекаемого на оси ординат касательными к диаграмме энергомасс Виттенбауэра.
export function polTd() {
    return 0;
}
