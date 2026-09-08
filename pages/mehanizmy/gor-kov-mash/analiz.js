import {
    dif, Pi, polGip, polIzmEnMeh, polIzmEnMeh1, polJpMeh, polJpZv, polKat, polMax, polMdvMeh, polMin, polMpF, polMpMeh,
    polMpMehMass, polPlecho, polUg2Vek, polUgGrad, polVes, polVesVek
} from "../utils.js";
import {
    polTokA, polTokAB, polTokAS2, polTokBD, polTokBS4, polTokOA,
    polTokM1, polTokM2, polTokM3, polTokM4, polTokM5, polTokJs2,
    polTokJs4, polTokP5Max, polTokK, polTokTakt, polTokToch, polTokW, polTokWDv, polTokP3Max, polTokJs1, polTokJsDv
} from "./local_storage.js";


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

export function polFI2(t) {
    return Math.asin(-polSAY(t) / polTokAB());
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

export function polSBY() {
    return 0;
}

export function polFI4(t) {
    return Math.acos((polTokA() - polSBX(t)) / polTokBD(t));
}

export function polSS4X(t) {
    return polSBX(t) + polTokBS4() * Math.cos(polFI4(t));
}

export function polSS4Y(t) {
    return polSBY(t) + polTokBS4() * Math.sin(polFI4(t));
}

export function polSDX() {
    return polTokA();
}

export function polSDY(t) {
    return polSBY(t) + polTokBD() * Math.sin(polFI4(t));
}

//Крайние положения механизма.
export function polLevKr() {
    return -polTokOA();
}

export function polVerhKr() {
    const OA = polTokOA(), AB = polTokAB(), BD = polTokBD(), A = polTokA();
    let v2;
    if (AB + OA < A) {
        v2 = polKat(BD, A - (AB + OA));
    } else if (AB - OA > A) {
        v2 = polKat(BD, (AB - OA) - A);
    } else {
        v2 = BD;
    }
    return polMax([OA, v2]);
}

export function polPravKr() {
    return polMax([polTokOA() + polTokAB(), polTokA()]);
}

export function polNizhKr() {
    return -polTokOA();
}

export function polLev3() {
    return -polTokOA() + polTokAB();
}

export function polPrav3() {
    return polTokOA() + polTokAB();
}

export function polDiap3() {
    return 2 * polTokOA();
}

export function polNizh5() {
    const OA = polTokOA(), AB = polTokAB(), BD = polTokBD(), A = polTokA();
    let v1;
    let v2;
    if (AB + OA < A) return polKat(BD, A - (AB - OA));
    else if (AB - OA > A) return polKat(BD, (AB + OA) - A);
    else {
        v1 = polKat(BD, A - (AB - OA));
        v2 = polKat(BD, (AB + OA) - A);
    }
    return polMin([v1, v2]);
}

export function polVerh5() {
    return polVerhKr();
}

export function polDiap5() {
    return polVerh5() - polNizh5();
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

export function polWDv() {
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
    return 0;
}

export function polVB(t) {
    return Math.abs(polVBX(t));
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
    return dif(polVBX, t, polTokTakt());
}

export function polABY(t) {
    return 0;
}

export function polAB(t) {
    return Math.abs(polABX(t));
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
    return -polTokM2() * polAS2X(t);
}

export function polFIn2Y(t) {
    return -polTokM2() * polAS2Y(t);
}

export function polFIn2(t) {
    return polTokM2() * polAS2(t);
}

export function polFIn3X(t) {
    return -polTokM3() * polABX(t);
}

export function polFIn3Y(t) {
    return 0;
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

export function polMIn4(t) {
    return -polTokJs4() * polE4(t);
}

//Силы полезного сопротивления.
export function polP3(t) {
    if (polVBX(t) >= 0) {
        return -1.425219281 * polTokP3Max() * Math.sqrt(1 -
                Math.pow((polSBX(t) - polLev3() - 1.375 * polDiap3()) / (1.425219281 * polDiap3()), 2)) +
            0.375 * polTokP3Max();
    } else {
        return 0;
    }
}

export function polP5(t) {
    return (polVDY(t) >= 0 ? -polTokP5Max() : 0);
}

//Вторая группа Ассура.
export function polMomR05(t) {
    return polR05(t) * (polSBY(t) - polSDY(t)) / 1000;
}

export function polMomP5(t) {
    return -polP5(t) * (polSBX(t) - polSDX(t)) / 1000;
}

export function polMomFIn5(t) {
    return -polFIn5Y(t) * (polSBX(t) - polSDX(t)) / 1000;
}

export function polMomG5(t) {
    return -polG5(true) * (polSBX(t) - polSDX(t)) / 1000;
}

export function polMomFIn4(t) {
    return (polFIn4X(t) * (polSBY(t) - polSS4Y(t)) - polFIn4Y(t) * (polSBX(t) - polSS4X(t))) / 1000;
}

export function polMomG4(t) {
    return -polG4(true) * (polSBX(t) - polSS4X(t)) / 1000;
}

export function polPlA(t) {
    return (polSDY(t) - polSBY(t)) / 1000;
}

export function polPlB(t) {
    return Math.abs(polSBX(t) - polSDX(t)) / 1000;
}

export function polPlC(t) {
    return polPlecho(polFIn4X(t), polFIn4Y(t), polSBX(t) - polSS4X(t), polSBY(t) - polSS4Y(t)) / 1000;
}

export function polPlD(t) {
    return Math.abs(polSBX(t) - polSS4X(t)) / 1000;
}

export function polR05(t) {
    return -(polMomP5(t) + polMomG5(t) + polMomFIn5(t) + polMomG4(t) + polMomFIn4(t) + polMIn4(t)) /
        ((polSBY(t) - polSDY(t)) / 1000);
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
export function polR43X(t) {
    return -polR34X(t);
}

export function polR43Y(t) {
    return -polR34Y(t);
}

export function polR43(t) {
    return polGip(polR43X(t), polR43Y(t));
}

export function polMomR43(t) {
    return (polR43X(t) * (polSAY(t) - polSBY(t)) - polR43Y(t) * (polSAX(t) - polSBX(t))) / 1000;
}

export function polMomR03(t) {
    return -polR03(t) * (polSAX(t) - polSBX(t)) / 1000;
}

export function polMomP3(t) {
    return polP3(t) * (polSAY(t) - polSBY(t)) / 1000;
}

export function polMomFIn3(t) {
    return polFIn3X(t) * (polSAY(t) - polSBY(t)) / 1000;
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

export function polPlE(t) {
    return (polSBX(t) - polSAX(t)) / 1000;
}

export function polPlF(t) {
    return polPlecho(polR43X(t), polR43Y(t), polSAX(t) - polSBX(t), polSAY(t) - polSBY(t)) / 1000;
}

export function polPlG(t) {
    return Math.abs(polSAY(t)) / 1000;
}

export function polPlH(t) {
    return polPlecho(polFIn2X(t), polFIn2Y(t), polSAX(t) - polSS2X(t), polSAY(t) - polSS2Y(t)) / 1000;
}

export function polPlI(t) {
    return Math.abs(polSS2X(t) - polSAX(t)) / 1000;
}

export function polR03(t) {
    return (polMomR43(t) + polMomP3(t) + polMomG3(t) + polMomFIn3(t) + polMomG2(t) + polMomFIn2(t) + polMIn2(t)) /
        ((polSAX(t) - polSBX(t)) / 1000);
}

export function polR23X(t) {
    return -polR43X(t) - polP3(t) - polFIn3X(t);
}

export function polR23Y(t) {
    return -polR43Y(t) - polR03(t) - polG3(true);
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
export function polMomR21(t) {
    return (-polR21X(t) * polSAY(t) + polR21Y(t) * polSAX(t)) / 1000;
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

export function polPlJ(t) {
    return polPlecho(polR21X(t), polR21Y(t), -polSAX(t), -polSAY(t)) / 1000;
}

export function polR01X(t) {
    return -polR21X(t);
}

export function polR01Y(t) {
    return -polR21Y(t) - polG1(true);
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
    return 90;
}

export function polUgG4VS4(t) {
    return polUgGrad(polUg2Vek(0, polG4(true), polVS4X(t), polVS4Y(t)));
}

export function polUgG5VD(t) {
    return (polVDY(t) > 0 ? 180 : 0);
}

export function polUgP3VB(t) {
    return (polP3(t) !== 0 ? 180 : 0);
}

export function polUgP5VD(t) {
    return (polP5(t) !== 0 ? 180 : 0);
}

//Приведенные моменты сил.
export function polMpG2(t) {
    return polMpF(polG2(true), polVS2Y(t), Math.abs(polW1()));
}

export function polMpG3(t) {
    return 0;
}

export function polMpG4(t) {
    return polMpF(polG4(true), polVS4Y(t), Math.abs(polW1()));
}

export function polMpG5(t) {
    return polMpF(polG5(true), polVDY(t), Math.abs(polW1()));
}

export function polMpP3(t) {
    return polMpF(polP3(t), polVBX(t), Math.abs(polW1()));
}

export function polMpP5(t) {
    return polMpF(polP5(t), polVDY(t), Math.abs(polW1()));
}

export function polMp(t) {
    return polMpMeh([[polG2(true), polVS2Y(t)], [polG4(true), polVS4Y(t)],
        [polG5(true), polVDY(t)], [polP3(t), polVBX(t)], [polP5(t), polVDY(t)]], Math.abs(polW1(t)));
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
