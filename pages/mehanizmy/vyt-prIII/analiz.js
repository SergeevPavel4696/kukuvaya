import {
    polTokA, polTokAB, polTokAS2, polTokB, polTokBC, polTokCD, polTokM1, polTokM2, polTokM3,
    polTokM4, polTokM5, polTokJs1, polTokJs2, polTokJs3, polTokJs4, polTokJsDv, polTokDE,
    polTokDS4, polTokP5Max, polTokOA, polTokTakt, polTokW, polTokWDv, polTokK, polTokToch, polTokFi0
} from "./local_storage.js";
import {
    dif, Pi, polGip, polIzmEnMeh, polIzmEnMeh1, polJpMeh, polJpZv, polKompSumVek, polMax, polMdvMeh, polMpF, polMpMeh,
    polMpMehMass, polPlecho, polUg2Vek, polUgGrad, polVes, polVesVek
} from "../utils.js";
import {polUgPo3St} from "../../../scripts/matematika/geom.js";


//
//Кинематический анализ.
//

//Перемещения звеньев.
export function polFI1(t) {
    return polTokFi0() + polTokW() * t;
}

export function polSAX(t) {
    return polTokOA() * Math.cos(polFI1(t));
}

export function polSAY(t) {
    return polTokOA() * Math.sin(polFI1(t));
}

function polACdl(t) {
    return polGip(-polTokA() - polSAX(t), polTokB() - polSAY(t));
}

function polFIAC(t) {
    const takt = polTokTakt(), T = Math.floor(t / takt);
    const A = -polTokA(), B = polTokB(), xA0 = polSAX(0);
    const xA = polSAX(t), yA = polSAY(t);
    if (yA < B) return Math.acos((A - xA) / polACdl(t)) + (xA >= xA0 ? T : ((t % takt) === 0 ? T : (T + 1))) * 2 * Pi;
    else return -Math.acos((A - xA) / polACdl(t)) + (T + 1) * 2 * Pi;
}

export function polFI2(t) {
    return polFIAC(t) + polUgPo3St(polTokBC(), polTokAB(), polACdl(t));
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

export function polFI3B(t) {
    const takt = polTokTakt();
    const T = Math.floor(t, takt);
    const A = -polTokA(), B = polTokB(), xB0 = polSBX(0), BC = polTokBC();
    const xB = polSBX(t), yB = polSBY(t);
    if (yB === B && xB < A) return Pi + T * 2 * Pi;
    else if (yB === B && xB > A) return (T + 1) * 2 * Pi;
    else if (yB > B) return Math.acos((xB - A) / BC) + (xB <= xB0 ? T : ((t % takt) === 0 ? T : (T + 1))) * 2 * Pi;
    else return -Math.acos((xB - A) / BC) + (T + 1) * 2 * Pi;
}

export function polFI3D(t) {
    return polFI3B(t) - 0.5 * Pi;
}

export function polSDX(t) {
    return -polTokA() + polTokCD() * Math.cos(polFI3D(t));
}

export function polSDY(t) {
    return polTokB() + polTokCD() * Math.sin(polFI3D(t));
}

export function polFI4(t) {
    return Math.acos((polSDX(t) + polTokA()) / polTokDE()) + Pi;
}

export function polSS4X(t) {
    return polSDX(t) + polTokDS4() * Math.cos(polFI4(t));
}

export function polSS4Y(t) {
    return polSDY(t) + polTokDS4() * Math.sin(polFI4(t));
}

export function polSEX(t) {
    return -polTokA();
}

export function polSEY(t) {
    return polSDY(t) + polTokDE() * Math.sin(polFI4(t));
}

//Крайние положения механизма.
export function polLevKr() {
    return -polMax([polTokOA(), polTokA() + polTokBC(), polTokA() + polTokCD()]);
}

export function polVerhKr() {
    return polMax([polTokOA(), polTokB() + polTokBC(), polTokB() + polTokCD()]);
}

export function polPravKr() {
    return polMax([polTokOA(), polTokBC() - polTokA(), polTokCD() - polTokA()]);
}

export function polNizhKr() {
    return -polMax([polTokOA(), polTokCD() + polTokDE() - polTokB(), polTokBC() - polTokB()]);
}

export function polNizh5() {
    return polTokB() - polTokCD() - polTokDE();
}

export function polVerh5() {
    return polTokB() + polTokCD() - polTokDE();
}

function polDiap() {
    return 2 * polTokCD();
}

//Скорости звеньев.
export function polW1(t) {
    return polTokW();
}

export function polW2(t) {
    return dif(polFI2, t, polTokTakt());
}

export function polW3(t) {
    return dif(polFI3B, t, polTokTakt());
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

export function polVDX(t) {
    return dif(polSDX, t, polTokTakt()) / 1000;
}

export function polVDY(t) {
    return dif(polSDY, t, polTokTakt()) / 1000;
}

export function polVD(t) {
    return polGip(polVDX(t), polVDY(t));
}

export function polVS4D(t) {
    return Math.abs(polW4(t) * polTokDS4() / 1000);
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

export function polVED(t) {
    return Math.abs(polW4(t) * polTokDE() / 1000);
}

export function polVEX(t) {
    return 0;
}

export function polVEY(t) {
    return dif(polSEY, t, polTokTakt()) / 1000;
}

export function polVE(t) {
    return Math.abs(polVEY(t));
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

export function polADCn(t) {
    return Math.pow(polW3(t), 2) * polTokCD() / 1000;
}

export function polADCt(t) {
    return Math.abs(polE3(t) * polTokCD() / 1000);
}

export function polADX(t) {
    return dif(polVDX, t, polTokTakt());
}

export function polADY(t) {
    return dif(polVDY, t, polTokTakt());
}

export function polAD(t) {
    return polGip(polADCn(t), polADCt(t));
}

export function polAS4Dn(t) {
    return Math.pow(polW4(t), 2) * polTokDS4() / 1000;
}

export function polAS4Dt(t) {
    return Math.abs(polE4(t) * polTokDS4() / 1000);
}

export function polAS4D(t) {
    return polGip(polAS4Dn(t), polAS4Dt(t));
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

export function polAEDn(t) {
    return Math.pow(polW4(t), 2) * polTokDE() / 1000;
}

export function polAEDt(t) {
    return Math.abs(polE4(t) * polTokDE() / 1000);
}

export function polAED(t) {
    return polGip(polAEDn(t), polAEDt(t));
}

export function polAEX(t) {
    return 0;
}

export function polAEY(t) {
    return dif(polVEY, t, polTokTakt());
}

export function polAE(t) {
    return Math.abs(polAEY(t));
}


//
//Силовой анализ.
//

//Веса звеньев.
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
    return 0;
}

export function polFIn5Y(t) {
    return -polTokM5() * polAEY(t);
}

export function polFIn5(t) {
    return polTokM5() * polAE(t);
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
    const S = polSEY(t);
    const P = polTokP5Max();
    const ni = polNizh5();
    const diap = polDiap();
    const v = polVEY(t);
    if (v <= 0) {
        if (S <= ni + 0.2 * diap) return P * (0.95 * (S - ni)) / (0.2 * diap);
        else if (S <= ni + 0.4 * diap) return P * (0.95 + 0.05 * (S - ni - 0.2 * diap) / (0.2 * diap));
        else if (S <= ni + 0.5 * diap) return P * (1 - (S - ni - 0.4 * diap) / (0.1 * diap));
        else return 0;
    } else return 0;
}

//Вторая группа Ассура.
export function polMomR05(t) {
    return polR05(t) * (polSDY(t) - polSEY(t)) / 1000;
}

export function polMomP5(t) {
    return -polP5(t) * (polSDX(t) - polSEX(t)) / 1000;
}

export function polMomFIn5(t) {
    return -polFIn5Y(t) * (polSDX(t) - polSEX(t)) / 1000;
}

export function polMomG5(t) {
    return -polG5(true) * (polSDX(t) - polSEX(t)) / 1000;
}

export function polMomFIn4(t) {
    return (polFIn4X(t) * (polSDY(t) - polSS4Y(t)) - polFIn4Y(t) * (polSDX(t) - polSS4X(t))) / 1000;
}

export function polMomG4(t) {
    return -polG4(true) * (polSDX(t) - polSS4X(t)) / 1000;
}

export function polPlA(t) {
    return (polSDY(t) - polSEY(t)) / 1000;
}

export function polPlB(t) {
    return Math.abs(polSDX(t) - polSEX(t)) / 1000;
}

export function polPlC(t) {
    return polPlecho(polFIn4X(t), polFIn4Y(t), polSDX(t) - polSS4X(t), polSDY(t) - polSS4Y(t)) / 1000;
}

export function polPlD(t) {
    return (polSDX(t) - polSS4X(t)) / 1000;
}

export function polR05(t) {
    return -(polMomP5(t) + polMomFIn5(t) + polMomG5(t) + polMomFIn4(t) + polMomG4(t) + polMIn4(t)) / ((polSDY(t) - polSEY(t)) / 1000);
}

export function polR45X(t) {
    return -polR05(t);
}

export function polR45Y(t) {
    return -polP5(t) - polFIn5Y(t) - polG5(true);
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

export function polMomR43(t) {
    return (polR43X(t) * (polSBY(t) - polSDY(t)) - polR43Y(t) * (polSBX(t) - polSDX(t))) / 1000;
}

export function polMomG3(t) {
    return -polG3(true) * (polSBX(t) + polTokA()) / 1000;
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

export function polPlE() {
    return polTokBC() / 1000;
}

export function polPlF(t) {
    return polPlecho(polR43X(t), polR43Y(t), polSBX(t) - polSDX(t), polSBY(t) - polSDY(t)) / 1000;
}

export function polPlG(t) {
    return Math.abs(-polTokA() - polSBX(t)) / 1000;
}

export function polPlH() {
    return polTokAB() / 1000;
}

export function polPlI(t) {
    return polPlecho(polFIn2X(t), polFIn2Y(t), polSBX(t) - polSS2X(t), polSBY(t) - polSS2Y(t)) / 1000;
}

export function polPlJ(t) {
    return Math.abs(polSBX(t) - polSS2X(t)) / 1000;
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
    return (polMomR43(t) + polMomG3(t) + polMIn3(t)) / (polTokBC() / 1000);
}

export function polR03TX(t) {
    return polR03T(t) * Math.cos(polFI3B(t) + 0.5 * Pi);
}

export function polR03TY(t) {
    return polR03T(t) * Math.sin(polFI3B(t) + 0.5 * Pi);
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

export function polR03N(t) {
    return polKompSumVek(
        polR12TX(t) + polFIn2X(t) + polR43X(t) + polR03TX(t),
        polR12TY(t) + polFIn2Y(t) + polG2(true) + polR43Y(t) + polG3(true) + polR03TY(t),
        polFI3B(t), polFI2(t)).L1;
}

export function polR03NX(t) {
    return polR03N(t) * Math.cos(polFI3B(t));
}

export function polR03NY(t) {
    return polR03N(t) * Math.sin(polFI3B(t));
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

export function polR12N(t) {
    return polKompSumVek(
        polR12TX(t) + polFIn2X(t) + polR43X(t) + polR03TX(t),
        polR12TY(t) + polFIn2Y(t) + polG2(true) + polR43Y(t) + polG3(true) + polR03TY(t),
        polFI3B(t), polFI2(t)).L2;
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

export function polJpM4(t) {
    return polJpZv(polTokM4(), polVS4(t), polW1(t));
}

export function polJpM5(t) {
    return polJpZv(polTokM5(), polVE(t), polW1(t));
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
        [polTokM2(), polVS2(t)], [polTokM4(), polVS4(t)], [polTokM5(), polVE(t)], [polTokJs1(), polW1(t)],
        [polTokJs2(), polW2(t)], [polTokJs3(), polW3(t)], [polTokJs4(), polW4(t)], [polTokJsDv(), polWDv(t)]
    ], polW1(t));
}

//Углы между силами и скоростями точек приложения сил.
export function polUgG2VS2(t) {
    return polUgGrad(polUg2Vek(0, polG2(true), polVS2X(t), polVS2Y(t)));
}

export function polUgG4VS4(t) {
    return polUgGrad(polUg2Vek(0, polG4(true), polVS4X(t), polVS4Y(t)));
}

export function polUgG5VE(t) {
    return (polVEY(t) >= 0 ? 180 : 0);
}

export function polUgP5VE(t) {
    return (polP5(t) !== 0 ? 180 : 0);

}

//Приведенные моменты сил.
export function polMpG2(t) {
    return polMpF(polG2(true), polVS2Y(t), Math.abs(polW1(t)));
}

export function polMpG4(t) {
    return polMpF(polG4(true), polVS4Y(t), Math.abs(polW1(t)));
}

export function polMpG5(t) {
    return polMpF(polG5(true), polVEY(t), Math.abs(polW1(t)));
}

export function polMpP5(t) {
    return polMpF(polP5(t), polVEY(t), Math.abs(polW1(t)));
}

export function polMp(t) {
    return polMpMeh([[polG2(true), polVS2Y(t)], [polG4(true), polVS4Y(t)],
        [polG5(true), polVEY(t)], [polP5(t), polVEY(t)]], Math.abs(polW1(t)));
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
