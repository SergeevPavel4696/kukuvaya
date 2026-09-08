import {
    dif, Pi, polGip, polIzmEnMeh, polIzmEnMeh1, polJpMeh, polJpZv, polKompSumVek, polKoordNaklSist, polMax, polMdvMeh,
    polMpF, polMpMeh, polMpMehMass, polPlecho, polUg2Vek, polUgGrad, polVes, polVesVek,
} from "../utils.js";
import {
    polTokOA, polTokOB, polTokBC, polTokCD, polTokCS4, polTokW, polTokTakt, polTokM1, polTokM2,
    polTokM3, polTokM4, polTokM5, polTokJs1, polTokJs2, polTokJs3, polTokJs4, polTokP5Max,
    polTokJsDv, polTokWDv, polTokB, polTokA, polTokY1, polTokY2, polTokZv5Y2, polTokK, polTokToch
} from "./local_storage.js";


//
//Кинематический анализ.
//

//Перемещения звеньев.
export function polFI1(t) {
    return polTokW() * t;
}

export function polSAX(t) {
    return polTokOA() * Math.cos(polFI1(t));
}

export function polSAY(t) {
    return polTokOA() * Math.sin(polFI1(t));
}

export function polABdl(t) {
    return polGip(polTokOB() - polSAX(t), polSAY(t));
}

export function polSCX(t) {
    return polTokOB() + (polTokOB() - polSAX(t)) * polTokBC() / polABdl(t);
}

export function polSCY(t) {
    return -polSAY(t) * polTokBC() / polABdl(t);
}

export function polFI2(t) {
    return polFI3(t);
}

export function polFI3(t) {
    const takt = polTokTakt();
    const T = Math.floor(t, takt);
    if ((polFI1(t) / Pi) % 2 === 0) return Pi - T * 2 * Pi;
    else if ((polFI1(t) / Pi) % 2 === 1) return -T * 2 * Pi;
    else if (polSCY(t) >= 0) return Math.acos((polSCX(t) - polTokOB()) / polTokBC()) - T * 2 * Pi;
    else return -Math.acos((polSCX(t) - polTokOB()) / polTokBC()) - T * 2 * Pi;
}

export function polFI4(t) {
    return Math.acos((polSCX(t) - polTokOB()) / polTokCD()) + Pi;
}

export function polSS4X(t) {
    return polSCX(t) + polTokCS4() * Math.cos(polFI4(t));
}

export function polSS4Y(t) {
    return polSCY(t) + polTokCS4() * Math.sin(polFI4(t));
}

export function polSDX() {
    return polTokOB();
}

export function polSDY(t) {
    return polSCY(t) + polTokCD() * Math.sin(polFI4(t));
}

//Крайние положения механизма.
export function polLevKr() {
    return -polTokOA();
}

export function polVerhKr() {
    return polMax([polTokOA(), polTokBC()]);

}

export function polPravKr() {
    return polTokOB() + polTokBC();
}

export function polNizhKr() {
    return -polTokBC() - polTokCD() - polTokZv5Y2();
}

export function polVerh5() {
    return polTokBC() - polTokCD();
}

export function polNizh5() {
    return -polTokBC() - polTokCD();
}

export function polDiap() {
    return 2 * polTokBC();
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

export function polVA1X(t) {
    return dif(polSAX, t, polTokTakt()) / 1000;
}

export function polVA1Y(t) {
    return dif(polSAY, t, polTokTakt()) / 1000;
}

export function polVA1(t) {
    return polGip(polVA1X(t), polVA1Y(t));
}

export function polVA3X(t) {
    return polVA1X(t) + polVA3A1(t) * Math.cos(polFI3(t));
}

export function polVA3Y(t) {
    return polVA1Y(t) + polVA3A1(t) * Math.sin(polFI3(t));
}

export function polVA3(t) {
    return -polVA1X(t) * Math.sin(polFI3(t)) + polVA1Y(t) * Math.cos(polFI3(t));
}

export function polVA3A1(t) {
    return -(polVA1X(t) * Math.cos(polFI3(t)) + polVA1Y(t) * Math.sin(polFI3(t)));
}

export function polVCX(t) {
    return dif(polSCX, t, polTokTakt()) / 1000;
}

export function polVCY(t) {
    return dif(polSCY, t, polTokTakt()) / 1000;
}

export function polVC(t) {
    return polGip(polVCX(t), polVCY(t));
}

export function polVS4C(t) {
    return Math.abs(polW4(t) * polTokCS4() / 1000);
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

export function polVDC(t) {
    return Math.abs(polW4(t) * polTokCD() / 1000);
}

export function polVDX(t) {
    return 0;
}

export function polVDY(t) {
    return dif(polSDY, t, polTokTakt()) / 1000;
}

export function polVD(t) {
    return Math.abs(polVDY(t));
}

//Ускорения звеньев.
export function polE1(t) {
    return dif(polW1, t, polTokTakt());
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

export function polAA1X(t) {
    return dif(polVA1X, t, polTokTakt());
}

export function polAA1Y(t) {
    return dif(polVA1Y, t, polTokTakt());
}

export function polAA1(t) {
    return polGip(polAA1X(t), polAA1Y(t));
}

export function polAA3Bn(t) {
    return Math.pow(polW3(t), 2) * polABdl(t) / 1000;
}

export function polAA3Bt(t) {
    return polE3(t) * polABdl(t) / 1000;
}

export function polAA3A1(t) {
    return dif(polVA3A1, t, polTokTakt());
}

export function polAA3k(t) {
    return 2 * polW3(t) * polVA3A1(t);
}

export function polAA3X(t) {
    return polAA1X(t) + polAA3k(t) * Math.cos(polFI3(t) + 0.5 * Pi) + polAA3A1(t) * Math.cos(polFI3(t));
}

export function polAA3Y(t) {
    return polAA1Y(t) + polAA3k(t) * Math.sin(polFI3(t) + 0.5 * Pi) + polAA3A1(t) * Math.sin(polFI3(t));
}

export function polAA3(t) {
    return polGip(polAA3X(t), polAA3Y(t));
}

export function polACX(t) {
    return dif(polVCX, t, polTokTakt());
}

export function polACY(t) {
    return dif(polVCY, t, polTokTakt());
}

export function polAC(t) {
    return polGip(polACX(t), polACY(t));
}

export function polAS4Cn(t) {
    return Math.pow(polW4(t), 2) * polTokCS4() / 1000;
}

export function polAS4Ct(t) {
    return Math.abs(polE4(t) * polTokCS4() / 1000);
}

export function polAS4C(t) {
    return polGip(polAS4Cn(t), polAS4Ct(t));
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

export function polADCn(t) {
    return Math.pow(polW4(t), 2) * polTokCD() / 1000;
}

export function polADCt(t) {
    return Math.abs(polE4(t) * polTokCD() / 1000);
}

export function polADC(t) {
    return polGip(polADCn(t), polADCt(t));
}

export function polADX(t) {
    return 0;
}

export function polADY(t) {
    return dif(polVDY, t, polTokTakt());
}

export function polAD(t) {
    return Math.abs(polADY(t));
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
    return -polTokM2() * polAA1X(t);
}

export function polFIn2Y(t) {
    return -polTokM2() * polAA1Y(t);
}

export function polFIn2(t) {
    return polTokM2() * polAA1(t);
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
    return -polTokM5() * polADY(t);
}

export function polFIn5(t) {
    return polTokM5() * polAD(t);
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
    if (polVDY(t) <= 0 && (polSDY(t) <= (polVerh5() - 0.05 * polDiap())) && (polSDY(t) >= (polNizh5() + 0.05 * polDiap()))) {
        return polTokP5Max();
    } else {
        return 0;
    }
}

//Вторая группа Ассура.
export function polMomP5(t) {
    return -polP5(t) * (polTokB() - polTokA()) / 1000;
}

export function polMomR45Y1Gor(t) {
    return polR45X(t) * (-polTokY1() - polSDY(t)) / 1000;
}

export function polMomR45Y2Gor(t) {
    return polR45X(t) * (-polTokY2() - polSDY(t)) / 1000;
}

export function polMomR45Vert(t) {
    return polR45Y(t) * polTokA() / 1000;
}

export function polMomRY1Y2(t) {
    return polRY1(t) * (polTokY1() - polTokY2()) / 1000;
}

export function polMomRY2Y1(t) {
    return polRY2(t) * (polTokY2() - polTokY1()) / 1000;
}

export function polMomFIn4(t) {
    return (polFIn4X(t) * (polSCY(t) - polSS4Y(t)) - polFIn4Y(t) * (polSCX(t) - polSS4X(t))) / 1000;
}

export function polMomG4(t) {
    return -polG4(true) * (polSCX(t) - polSS4X(t)) / 1000;
}

export function polMomR54X(t) {
    return polR54X(t) * (polSCY(t) - polSDY(t)) / 1000;
}

export function polMomR54Y(t) {
    return -polR54Y(t) * (polSCX(t) - polSDX(t)) / 1000;
}

export function polPlA(t) {
    return (polSCY(t) - polSDY(t)) / 1000;
}

export function polPlB(t) {
    return Math.abs(polSCX(t) - polTokOB()) / 1000;
}

export function polPlC(t) {
    return polPlecho(polFIn4X(t), polFIn4Y(t), polSCX(t) - polSS4X(t), polSCY(t) - polSS4Y(t)) / 1000;
}

export function polPlD(t) {
    return Math.abs(polSCX(t) - polSS4X(t)) / 1000;
}

export function polPlE(t) {
    return (polTokY2() - polTokY1()) / 1000;
}

export function polPlF(t) {
    return (polTokB() - polTokA()) / 1000;
}

export function polPlG(t) {
    return polTokA() / 1000;
}

export function polPlH(t) {
    return (polSDY(t) + polTokY2()) / 1000;
}

export function polPlI(t) {
    return (-polTokY1() - polSDY(t)) / 1000;
}

export function polR45X(t) {
    return -polR54X(t);
}

export function polR45Y(t) {
    return -polP5(t) - polFIn5Y(t) - polG5(true);
}

export function polR45(t) {
    return polGip(polR45X(t), polR45Y(t));
}

export function polR54X(t) {
    return -(polMomR54Y(t) + polMomFIn4(t) + polMomG4(t) + polMIn4(t)) / ((polSCY(t) - polSDY(t)) / 1000);
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

export function polRY1(t) {
    return -(polMomP5(t) + polMomR45Vert(t) + polMomR45Y2Gor(t)) / ((polTokY1() - polTokY2()) / 1000);
}

export function polRY2(t) {
    return -(polMomP5(t) + polMomR45Vert(t) + polMomR45Y1Gor(t)) / ((polTokY2() - polTokY1()) / 1000);
}

//Первая группа Ассура.
export function polMomR43(t) {
    return (polR43X(t) * (0 - polSCY(t)) - polR43Y(t) * (polTokOB() - polSCX(t))) / 1000;
}

export function polMomFIn2(t) {
    return (polFIn2X(t) * (0 - polSAY(t)) - polFIn2Y(t) * (polTokOB() - polSAX(t))) / 1000;
}

export function polMomG2(t) {
    return -polG2(true) * (polTokOB() - polSAX(t)) / 1000;
}

export function polMomR12(t) {
    return -polR12T(t) * polABdl(t) / 1000;
}

export function polPlJ(t) {
    return polABdl(t) / 1000;
}

export function polPlK(t) {
    return polPlecho(polR43X(t), polR43Y(t), polTokOB() - polSCX(t), 0 - polSCY(t)) / 1000;
}

export function polPlL(t) {
    return polPlecho(polFIn2X(t), polFIn2Y(t), polTokOB() - polSAX(t), 0 - polSAY(t)) / 1000;
}

export function polPlM(t) {
    return Math.abs(polTokOB() - polSAX(t)) / 1000;
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

export function polR12T(t) {
    return (polMomR43(t) + polMomFIn2(t) + polMomG2(t) + polMIn3(t) + polMIn2(t)) / (polABdl(t) / 1000);
}

export function polR12TX(t) {
    return polR12T(t) * Math.cos(polFI3(t) + 0.5 * Pi);
}

export function polR12TY(t) {
    return polR12T(t) * Math.sin(polFI3(t) + 0.5 * Pi);
}

export function polR12N(t) {
    return polKompSumVek(polFIn2X(t) + polR12TX(t), polFIn2Y(t) + polG2(true) + polR12TY(t),
        polFI3(t), polFI3(t) + 0.5 * Pi).L1;
}

export function polR12NX(t) {
    return polR12N(t) * Math.cos(polFI3(t));
}

export function polR12NY(t) {
    return polR12N(t) * Math.sin(polFI3(t));
}

export function polR12X(t) {
    return polKoordNaklSist(polR12N(t), polR12T(t), -polFI3(t)).X;
}

export function polR12Y(t) {
    return polKoordNaklSist(polR12N(t), polR12T(t), -polFI3(t)).Y;
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

export function polR03X(t) {
    return -(polR43X(t) + polR23X(t));
}

export function polR03Y(t) {
    return -(polR43Y(t) + polR23Y(t) + polG3(true));
}

export function polR03(t) {
    return polGip(polR03X(t), polR03Y(t));
}

//Начальный механизм.
export function polMomR21(t) {
    return (-polR21X(t) * polSAY(t) + polR21Y(t) * polSAX(t)) / 1000;
}

export function polPlN(t) {
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
    return polJpZv(polTokM2(), polVA1(t), polW1(t));
}

export function polJpM4(t) {
    return polJpZv(polTokM4(), polVS4(t), polW1(t));
}

export function polJpM5(t) {
    return polJpZv(polTokM5(), polVD(t), polW1(t));
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
    return polJpZv(polTokJsDv(), polTokWDv(t), polW1(t));
}

export function polJp(t) {
    return polJpMeh([
        [polTokM2(), polVA1(t)], [polTokM4(), polVS4(t)], [polTokM5(), polVD(t)], [polTokJs1(), polW1(t)],
        [polTokJs2(), polW2(t)], [polTokJs3(), polW3(t)], [polTokJs4(), polW4(t)], [polTokJsDv(), polWDv(t)]
    ], polW1(t));
}

//Углы между силами и скоростями точек приложения сил.
export function polUgG2VA1(t) {
    return polUgGrad(polUg2Vek(0, polG2(true), polVA1X(t), polVA1Y(t)));
}

export function polUgG4VS4(t) {
    return polUgGrad(polUg2Vek(0, polG4(true), polVS4X(t), polVS4Y(t)));
}

export function polUgG5VD(t) {
    return (polVDY(t) > 0 ? 180 : 0);
}

export function polUgP5VD(t) {
    return (polP5(t) !== 0 ? 180 : 0);
}

//Приведенные моменты сил.
export function polMpG2(t) {
    return polMpF(polG2(true), polVA1Y(t), Math.abs(polW1(t)));
}

export function polMpG4(t) {
    return polMpF(polG4(true), polVS4Y(t), Math.abs(polW1(t)));
}

export function polMpG5(t) {
    return polMpF(polG5(true), polVDY(t), Math.abs(polW1(t)));
}

export function polMpP5(t) {
    return polMpF(polP5(t), polVDY(t), Math.abs(polW1(t)));
}

export function polMp(t) {
    return polMpMeh([[polG2(true), polVA1Y(t)], [polG4(true), polVS4Y(t)],
            [polG5(true), polVDY(t)], [polP5(t), polVDY(t)]],
        Math.abs(polW1(t)));
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
