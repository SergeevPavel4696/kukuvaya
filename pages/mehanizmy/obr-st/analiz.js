import {
    dif, Pi, polGip, polIzmEnMeh, polIzmEnMeh1, polJpMeh, polJpZv, polMax, polMdvMeh, polMpF, polMpMeh,
    polMpMehMass, polPlecho, polUg2Vek, polUgGrad, polVes, polVesVek
} from "../utils.js";
import {
    polTokOA, polTokAB, polTokAS2, polTokW, polTokTakt, polTokCD, polTokCS4,
    polTokOC, polTokM1, polTokM2, polTokM3, polTokM4, polTokM5, polTokJs1, polTokJs2,
    polTokJs4, polTokJsDv, polTokP3Max, polTokP5Max, polTokWDv, polTokK, polTokToch
} from "./local_storage.js";


//
//Кинематический анализ.
//

//Перемещения звеньев.
export function polFI1A(t) {
    return -0.5 * Pi + polTokW() * t;
}

export function polSAX(t) {
    return polTokOA() * Math.cos(polFI1A(t));
}

export function polSAY(t) {
    return polTokOA() * Math.sin(polFI1A(t));
}

export function polFI2(t) {
    return Math.acos(-polSAX(t) / polTokAB());
}

export function polSS2X(t) {
    return polSAX(t) + polTokAS2() * Math.cos(polFI2(t));
}

export function polSS2Y(t) {
    return polSAY(t) + polTokAS2() * Math.sin(polFI2(t));
}

export function polSBX(t) {
    return 0;
}

export function polSBY(t) {
    return polSAY(t) + polTokAB() * Math.sin(polFI2(t));
}

export function polFI1C(t) {
    return polFI1A(t) + Pi;
}

export function polSCX(t) {
    return polTokOC() * Math.cos(polFI1C(t));
}

export function polSCY(t) {
    return polTokOC() * Math.sin(polFI1C(t));
}

export function polFI4(t) {
    return Math.asin(-polSCY(t) / polTokCD(t));
}

export function polSS4X(t) {
    return polSCX(t) + polTokCS4() * Math.cos(polFI4(t));
}

export function polSS4Y(t) {
    return polSCY(t) + polTokCS4() * Math.sin(polFI4(t));
}

export function polSDX(t) {
    return polSCX(t) + polTokCD() * Math.cos(polFI4(t));
}

export function polSDY() {
    return 0;
}

//Крайние положения механизма.
export function polLevKr() {
    return -polMax([polTokOA(), polTokOC()]);
}

export function polVerhKr() {
    return polTokOA() + polTokAB();
}

export function polPravKr() {
    return polTokOC() + polTokCD();
}

export function polNizhKr() {
    return -polMax([polTokOA(), polTokOC()]);
}

export function polNizh3() {
    return -polTokOA() + polTokAB() ;
}

export function polVerh3() {
    return polTokOA() + polTokAB() ;
}

export function polDiap3() {
    return 2 * polTokOA();
}

export function polLev5() {
    return -polTokOC() + polTokCD() ;
}

export function polPrav5() {
    return polTokOC() + polTokCD() ;
}

export function polDiap5() {
    return 2 * polTokOC();
}

//Скорости звеньев.
export function polW1(t) {
    return polTokW();
}

export function polW2(t) {
    return dif(polFI2, t, polTokTakt());
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
    return 0;
}

export function polVBY(t) {
    return dif(polSBY, t, polTokTakt()) / 1000;
}

export function polVB(t) {
    return Math.abs(polVBY(t));
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
    return dif(polSDX, t, polTokTakt()) / 1000;
}

export function polVDY(t) {
    return 0;
}

export function polVD(t) {
    return Math.abs(polVDX(t));
}

//Ускорения звеньев.
export function polE1(t) {
    return 0;
}

export function polE2(t) {
    return dif(polW2, t, polTokTakt());
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

export function polABX(t) {
    return 0;
}

export function polABY(t) {
    return dif(polVBY, t, polTokTakt());
}

export function polAB(t) {
    return polGip(polABX(t), polABY(t));
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

export function polFIn3X(t) {
    return 0;
}

export function polFIn3Y(t) {
    return -polTokM3() * polABY(t);
}

export function polFIn3(t) {
    return polTokM3() * polAB(t);
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

//Моменты сил инерции.
export function polMIn2(t) {
    return -polTokJs2() * polE2(t);
}

export function polMIn4(t) {
    return -polTokJs4() * polE4(t);
}

//Силы полезного сопротивления.
export function polP3(t) {
    const min = polNizh3();
    const P = polTokP3Max();
    const diap = polDiap3();
    const S = polSBY(t);
    const v = polVBY(t);
    if (v >= 0 && S <= min + 0.75 * diap) return -P * (S - min) / (0.75 * diap);
    else if (v >= 0 && min + 0.75 * diap < S) return -P * (1 - (S - min - 0.75 * diap) / (0.25 * diap));
    else return 0;
}

export function polP5(t) {
    return (polVDX(t) >= 0 || (polFI1A(t) % Pi === 0) ? -polTokP5Max() : 0)
}

//Вторая группа Ассура.
export function polMomP5(t) {
    return polP5(t) * (polSCY(t) - polSDY(t)) / 1000;
}

export function polMomFIn5(t) {
    return polFIn5X(t) * (polSCY(t) - polSDY(t)) / 1000;
}

export function polMomG5(t) {
    return -polG5(true) * (polSCX(t) - polSDX(t)) / 1000;
}

export function polMomFIn4(t) {
    return (polFIn4X(t) * (polSCY(t) - polSS4Y(t)) - polFIn4Y(t) * (polSCX(t) - polSS4X(t))) / 1000;
}

export function polMomG4(t) {
    return -polG4(true) * (polSCX(t) - polSS4X(t)) / 1000;
}

export function polMomR05(t) {
    return -polR05(t) * (polSCX(t) - polSDX(t)) / 1000;
}

export function polPlA(t) {
    return (polSDX(t) - polSCX(t)) / 1000;
}

export function polPlB(t) {
    return Math.abs(polSCY(t) - polSDY(t)) / 1000;
}

export function polPlC(t) {
    return polPlecho(polFIn4X(t), polFIn4Y(t), polSCX(t) - polSS4X(t), polSCY(t) - polSS4Y(t)) / 1000;
}

export function polPlD(t) {
    return (polSS4X(t) - polSCX(t)) / 1000;
}

export function polR05(t) {
    return (polMomP5(t) + polMomG5(t) + polMomFIn5(t) + polMomG4(t) + polMomFIn4(t) + polMIn4(t)) /
        ((polSCX(t) - polSDX(t)) / 1000);
}

export function polR45X(t) {
    return -polP5(t) - polFIn5X(t);
}

export function polR45Y(t) {
    return -polR05(t) - polG5(true);
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

export function polR14X(t) {
    return -polR54X(t) - polFIn4X(t);
}

export function polR14Y(t) {
    return -polR54Y(t) - polFIn4Y(t) - polG4(true);
}

export function polR14(t) {
    return polGip(polR14X(t), polR14Y(t));
}

//Первая группа Ассура.
export function polMomP3(t) {
    return -polP3(t) * (polSAX(t) - polSBX(t)) / 1000;
}

export function polMomFIn3(t) {
    return -polFIn3Y(t) * (polSAX(t) - polSBX(t)) / 1000;
}

export function polMomG3(t) {
    return -polG3(true) * (polSAX(t) - polSBX(t)) / 1000;
}

export function polMomFIn2(t) {
    return (polFIn2X(t) * (polSAY(t) - polSS2Y(t)) - polFIn2Y(t) * (polSAX(t) - polSS2X(t))) / 1000;
}

export function polMomG2(t) {
    return -polG2(true) * (polSAX(t) - polSS2X(t)) / 1000;
}

export function polMomR03(t) {
    return -polR03(t) * (polSAX(t) - polSBX(t)) / 1000;
}

export function polPlE(t) {
    return (polSBY(t) - polSAY(t)) / 1000;
}

export function polPlF(t) {
    return Math.abs(polSAX(t)) / 1000;
}

export function polPlG(t) {
    return polPlecho(polFIn2X(t), polFIn2Y(t), polSAX(t) - polSS2X(t), polSAY(t) - polSS2Y(t)) / 1000;
}

export function polPlH(t) {
    return Math.abs(polSAX(t) - polSS2X(t)) / 1000;
}

export function polR03(t) {
    return -(polMomP3(t) + polMomFIn3(t) + polMomG3(t) + polMomFIn2(t) + polMomG2(t) + polMIn2(t)) /
        ((polSAY(t) - polSBY(t)) / 1000);
}

export function polR23X(t) {
    return -polR03(t);
}

export function polR23Y(t) {
    return -polP3(t) - polFIn3Y(t) - polG3(true);
}

export function polR23(t) {
    return polGip(polR23X(t), polR23Y(t));
}

export function polR32X(t) {
    return -polR23X(t);
}

export function polR32Y(t) {
    return -polR23Y(t);
}

export function polR32(t) {
    return polGip(polR32X(t), polR32Y(t));
}

export function polR12X(t) {
    return -polR32X(t) - polFIn2X(t);
}

export function polR12Y(t) {
    return -polR32Y(t) - polFIn2Y(t) - polG2(true);
}

export function polR12(t) {
    return polGip(polR12X(t), polR12Y(t));
}

//Начальный механизм.
export function polR41X(t) {
    return -polR14X(t);
}

export function polR41Y(t) {
    return -polR14Y(t);
}

export function polR41(t) {
    return polGip(polR41X(t), polR41Y(t));
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

export function polMomR41(t) {
    return (-polR41X(t) * polSCY(t) + polR41Y(t) * polSCX(t)) / 1000;
}

export function polMomR21(t) {
    return (-polR21X(t) * polSAY(t) + polR21Y(t) * polSAX(t)) / 1000;
}

export function polPlI(t) {
    return polPlecho(polR41X(t), polR41Y(t), -polSCX(t), -polSCY(t)) / 1000;
}

export function polPlJ(t) {
    return polPlecho(polR21X(t), polR21Y(t), -polSAX(t), -polSAY(t)) / 1000;
}

export function polR01X(t) {
    return -polR41X(t) - polR21X(t);
}

export function polR01Y(t) {
    return -polR41Y(t) - polR21Y(t) - polG1(true);
}

export function polR01(t) {
    return polGip(polR01X(t), polR01Y(t));
}

export function polMomUr(t) {
    return (polR21X(t) * polSAY(t) - polR21Y(t) * polSAX(t) + polR41X(t) * polSCY(t) - polR41Y(t) * polSCX(t)) / 1000;
}


//
//Динамический анализ.
//

//Приведенные моменты инерции.
export function polJpM2(t) {
    return polJpZv(polTokM2(), polVS2(t), polW1(t));
}

export function polJpM3(t) {
    return polJpZv(polTokM3(), polVB(t), polW1(t));
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

export function polJpJs4(t) {
    return polJpZv(polTokJs4(), polW4(t), polW1(t));
}

export function polJpJsDv(t) {
    return polJpZv(polTokJsDv(), polWDv(t), polW1(t));
}

export function polJp(t) {
    return polJpMeh([
        [polTokM2(), polVS2(t)], [polTokM3(), polVB(t)], [polTokM4(), polVS4(t)], [polTokM5(), polVD(t)],
        [polTokJs1(), polW1(t)], [polTokJs2(), polW2(t)], [polTokJs4(), polW4(t)], [polTokJsDv(), polWDv(t)]
    ], polW1(t));
}

//Углы между силами и скоростями точек приложения сил.
export function polUgG2VS2(t) {
    return polUgGrad(polUg2Vek(0, polG2(true), polVS2X(t), polVS2Y(t)));
}

export function polUgG3VB(t) {
    return (polVBY(t) > 0 ? 180 : 0);
}

export function polUgG4VS4(t) {
    return polUgGrad(polUg2Vek(0, polG4(true), polVS4X(t), polVS4Y(t)));
}

export function polUgG5VD(t) {
    return 90;
}

export function polUgP3VB(t) {
    return (polP3(t) !== 0 ? 180 : 0);
}

export function polUgP5VD(t) {
    return (polP5(t) !== 0 ? 180 : 0);
}

//Приведенные моменты сил.
export function polMpG2(t) {
    return polMpF(polG2(true), polVS2Y(t), Math.abs(polW1(t)));
}

export function polMpG3(t) {
    return polMpF(polG3(true), polVBY(t), Math.abs(polW1(t)));
}

export function polMpG4(t) {
    return polMpF(polG4(true), polVS4Y(t), Math.abs(polW1(t)));
}

export function polMpG5(t) {
    return 0;
}

export function polMpP3(t) {
    return polMpF(polP3(t), polVBY(t), Math.abs(polW1(t)));
}

export function polMpP5(t) {
    return polMpF(polP5(t), polVDX(t), Math.abs(polW1(t)));
}

export function polMp(t) {
    return polMpMeh([[polG2(true), polVS2Y(t)], [polG3(true), polVBY(t)], [polG4(true), polVS4Y(t)],
        [polG5(true), polVDY(t)], [polP3(t), polVBY(t)], [polP5(t), polVDX(t)]], Math.abs(polW1(t)));
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
