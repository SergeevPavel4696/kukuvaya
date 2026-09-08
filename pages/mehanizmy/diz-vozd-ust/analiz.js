import {
    dif, Pi, polGip, polIzmEnMeh, polIzmEnMeh1, polJpMeh, polJpZv, polMax, polMdvMeh, polMpF,
    polMpMeh, polMpMehMass, polPlecho, polUg2Vek, polUgGrad, polVes, polVesVek,
} from "../utils.js";
import {
    polTokOA, polTokAB, polTokAS2, polTokAC, polTokAS4, polTokW, polTokTakt, polTokM1,
    polTokM2, polTokM3, polTokM4, polTokM5, polTokJs1, polTokJs2, polTokJs4, polTokJsVozd,
    polTokD3, polTokP3Max, polTokP5Max, polTokD5, polTokWVozd, polTokK, polTokToch
} from "./local_storage.js";


//
//Кинематический анализ.
//

//Перемещения звеньев.
export function polFI1(t) {
    return 0.75 * Pi + polTokW() * t;
}

export function polSAX(t) {
    return polTokOA() * Math.cos(polFI1(t));
}

export function polSAY(t) {
    return polTokOA() * Math.sin(polFI1(t));
}

export function polFI2(t) {
    return Math.acos(-polSAX(t + 0.125 * polTokTakt()) / polTokAB()) + 0.25 * Pi;
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

export function polSB(t) {
    return Math.abs(polSBX(t) / Math.cos(0.25 * Pi));
}

export function polFI4(t) {
    return Math.asin(-polSAY(t + 0.125 * polTokTakt()) / polTokAC()) + 0.25 * Pi;
}

export function polSS4X(t) {
    return polSAX(t) + polTokAS4() * Math.cos(polFI4(t));
}

export function polSS4Y(t) {
    return polSAY(t) + polTokAS4() * Math.sin(polFI4(t));
}

export function polSCX(t) {
    return polSAX(t) + polTokAC() * Math.cos(polFI4(t));
}

export function polSCY(t) {
    return polSAY(t) + polTokAC() * Math.sin(polFI4(t));
}

export function polSC(t) {
    return polSCX(t) / Math.cos(0.25 * Pi);
}

//Крайние положения механизма.
export function polLevKr() {
    return (polTokOA() + polTokAB()) * Math.cos(0.75 * Pi);
}

export function polVerhKr() {
    return polMax([(polTokOA() + polTokAB()) * Math.sin(0.25 * Pi), (polTokOA() + polTokAC()) * Math.sin(0.75 * Pi)]);
}

export function polPravKr() {
    return (polTokOA() + polTokAC()) * Math.cos(0.25 * Pi);
}

export function polNizhKr() {
    return -polTokOA();
}

export function polPrav3() {
    return (-polTokOA() + polTokAB()) * Math.cos(0.75 * Pi);
}

export function polLev3() {
    return (polTokOA() + polTokAB()) * Math.cos(0.75 * Pi);
}

export function polNizh3() {
    return (-polTokOA() + polTokAB()) * Math.sin(0.75 * Pi);
}

export function polVerh3() {
    return (polTokOA() + polTokAB()) * Math.sin(0.75 * Pi);
}

export function polMin3() {
    return -polTokOA() + polTokAB();
}

export function polMax3() {
    return polTokOA() + polTokAB();
}

export function polLev5() {
    return (-polTokOA() + polTokAC()) * Math.cos(0.25 * Pi);
}

export function polPrav() {
    return (polTokOA() + polTokAC()) * Math.cos(0.25 * Pi);
}

export function polNizh5() {
    return (-polTokOA() + polTokAC()) * Math.sin(0.25 * Pi);
}

export function polVerh5() {
    return (polTokOA() + polTokAC()) * Math.sin(0.25 * Pi);
}

export function polMin5() {
    return -polTokOA() + polTokAC();
}

export function polMax5() {
    return polTokOA() + polTokAC();
}

export function polDiap() {
    return 2 * polTokOA();
}

//Скорости звеньев.
export function polW1(t) {
    return dif(polFI1, t, polTokTakt());
}

export function polW2(t) {
    return dif(polFI2, t, polTokTakt());
}

export function polW4(t) {
    return dif(polFI4, t, polTokTakt());
}

export function polWVozd(t) {
    return polTokWVozd();
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

export function polVS4A(t) {
    return Math.abs(polW4(t) * polTokAS4() / 1000);
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

export function polVCA(t) {
    return Math.abs(polW4(t) * polTokAC() / 1000);
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

//Ускорения.
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

export function polAS2A(t) {
    return polABA(t) * polTokAS2() / polTokAB();
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
    return dif(polVBY, t, polTokTakt());
}

export function polAB(t) {
    return polGip(polABX(t), polABY(t));
}

export function polAS4A(t) {
    return polACA(t) * polTokAS4() / polTokAC();
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

export function polACAn(t) {
    return Math.pow(polW4(t), 2) * polTokAC() / 1000;
}

export function polACAt(t) {
    return Math.abs(polE4(t) * polTokAC() / 1000);
}

export function polACA(t) {
    return polGip(polACAn(t), polACAt(t));
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
    return -polTokM5() * polACX(t);
}

export function polFIn5Y(t) {
    return -polTokM5() * polACY(t);
}

export function polFIn5(t) {
    return polTokM5() * polAC(t);
}

//Моменты сил инерции.
export function polMIn2(t) {
    return -polTokJs2() * polE2(t);
}

export function polMIn4(t) {
    return -polTokJs4() * polE4(t);
}

//Силы полезного сопротивления.
export function polP3Max() {
    return polTokP3Max() * Math.pow(polTokD3(), 2) * Pi / 4;
}

export function polP5Max() {
    return polTokP5Max() * Math.pow(polTokD5(), 2) * Pi / 4;
}

export function polP(vVek, Smin, SVek, P, ug) {
    const v = vVek / Math.cos(ug);
    const min = Smin / Math.cos(ug);
    const S = SVek / Math.cos(ug);
    const diap = polDiap();
    if (v >= 0) {
        if (S <= min + 0.1 * diap) {
            return 0;
        } else if (min + 0.1 * diap <= S && S <= min + 0.2 * diap) {
            return P * (0.003 * (S - min - 0.1 * diap) / (0.1 * diap));
        } else if (min + 0.2 * diap <= S && S <= min + 0.3 * diap) {
            return P * (0.003 + 0.007 * (S - min - 0.2 * diap) / (0.1 * diap));
        } else if (min + 0.3 * diap <= S && S <= min + 0.5 * diap) {
            return P * (0.01 + 0.02 * (S - min - 0.3 * diap) / (0.2 * diap));
        } else if (min + 0.5 * diap <= S && S <= min + 0.6 * diap) {
            return P * (0.03 + 0.02 * (S - min - 0.5 * diap) / (0.1 * diap));
        } else if (min + 0.6 * diap <= S && S <= min + 0.7 * diap) {
            return P * (0.05 + 0.03 * (S - min - 0.6 * diap) / (0.1 * diap));
        } else if (min + 0.7 * diap <= S && S <= min + 0.8 * diap) {
            return P * (0.08 + 0.04 * (S - min - 0.7 * diap) / (0.1 * diap));
        } else if (min + 0.8 * diap <= S && S <= min + 0.9 * diap) {
            return P * (0.12 + 0.1 * (S - min - 0.8 * diap) / (0.1 * diap));
        } else if (min + 0.9 * diap <= S && S <= min + 0.95 * diap) {
            return P * (0.22 + 0.13 * (S - min - 0.9 * diap) / (0.05 * diap));
        } else if (min + 0.95 * diap <= S && S <= min + 0.98 * diap) {
            return P * (0.35 + 0.15 * (S - min - 0.95 * diap) / (0.03 * diap));
        } else if (min + 0.98 * diap <= S) {
            return P * (0.5 + 0.3 * (S - min - 0.98 * diap) / (0.02 * diap));
        }
    } else {
        if (S <= min + 0.1 * diap) {
            return P * (0.02 * (S - min) / (0.1 * diap));
        } else if (min + 0.1 * diap <= S && S <= min + 0.2 * diap) {
            return P * (0.02 + 0.04 * (S - min - 0.1 * diap) / (0.1 * diap));
        } else if (min + 0.2 * diap <= S && S <= min + 0.4 * diap) {
            return P * (0.06 + 0.04 * (S - min - 0.2 * diap) / (0.2 * diap));
        } else if (min + 0.4 * diap <= S && S <= min + 0.5 * diap) {
            return P * (0.1 + 0.03 * (S - min - 0.4 * diap) / (0.1 * diap));
        } else if (min + 0.5 * diap <= S && S <= min + 0.6 * diap) {
            return P * (0.13 + 0.04 * (S - min - 0.5 * diap) / (0.1 * diap));
        } else if (min + 0.6 * diap <= S && S <= min + 0.7 * diap) {
            return P * (0.17 + 0.06 * (S - min - 0.6 * diap) / (0.1 * diap));
        } else if (min + 0.7 * diap <= S && S <= min + 0.8 * diap) {
            return P * (0.23 + 0.11 * (S - min - 0.7 * diap) / (0.1 * diap));
        } else if (min + 0.8 * diap <= S && S <= min + 0.9 * diap) {
            return P * (0.34 + 0.21 * (S - min - 0.8 * diap) / (0.1 * diap));
        } else if (min + 0.9 * diap <= S && S <= min + 0.95 * diap) {
            return P * (0.55 + 0.24 * (S - min - 0.9 * diap) / (0.05 * diap));
        } else if (min + 0.95 * diap <= S && S <= min + 0.98 * diap) {
            return P * (0.79 + 0.21 * (S - min - 0.95 * diap) / (0.03 * diap));
        } else if (min + 0.98 * diap <= S) {
            return P * (1 - 0.2 * (S - min - 0.98 * diap) / (0.02 * diap));
        }
    }
}

export function polP3(t) {
    return polP(polVBX(t), polPrav3(), polSBX(t), polP3Max(), 0.75 * Pi);
}

export function polP3X(t) {
    return  polP3(t) * Math.cos(-0.25 * Pi);
}

export function polP3Y(t) {
    return  polP3(t) * Math.sin(-0.25 * Pi);
}

export function polP5(t) {
    return polP(polVCX(t), polLev5(), polSCX(t), polP5Max(), 0.25 * Pi);
}

export function polP5X(t) {
    return  polP5(t) * Math.cos(-0.75 * Pi);
}

export function polP5Y(t) {
    return  polP5(t) * Math.sin(-0.75 * Pi);
}

//Вторая группа Ассура.
export function polMomP5(t) {
    return polP5(t) * polTokAC() * Math.sin(polFI4(t) - 0.25 * Pi) / 1000;
}

export function polMomFIn5(t) {
    return (polFIn5X(t) * (polSAY(t) - polSCY(t)) - polFIn5Y(t) * (polSAX(t) - polSCX(t))) / 1000;
}

export function polMomG5(t) {
    return -polG5(true) * (polSAX(t) - polSCX(t)) / 1000;
}

export function polMomFIn4(t) {
    return (polFIn4X(t) * (polSAY(t) - polSS4Y(t)) - polFIn4Y(t) * (polSAX(t) - polSS4X(t))) / 1000;
}

export function polMomG4(t) {
    return -polG4(true) * (polSAX(t) - polSS4X(t)) / 1000;
}

export function polMomR05(t) {
    return polR05(t) * polTokAC() * Math.cos(0.25 * Pi - polFI4(t)) / 1000;
}

export function polPlA(t) {
    return polTokAC() * Math.cos(0.25 * Pi - polFI4(t)) / 1000;
}

export function polPlB(t) {
    return Math.abs(polTokAC() * Math.sin(0.25 * Pi - polFI4(t))) / 1000;
}

export function polPlC(t) {
    return (polSCX(t) - polSAX(t)) / 1000;
}

export function polPlD(t) {
    return polPlecho(polFIn4X(t), polFIn4Y(t), polSAX(t) - polSS4X(t), polSAY(t) - polSS4Y(t)) / 1000;
}

export function polPlE(t) {
    return (polSS4X(t) - polSAX(t)) / 1000;
}

export function polR05(t) {
    return -(polMomP5(t) + polMomFIn5(t) + polMomG5(t) + polMomFIn4(t) + polMomG4(t) + polMIn4(t)) /
        (polTokAC() * Math.cos(polFI4(t) - 0.25 * Pi) / 1000);
}

export function polR05X(t) {
    return polR05(t) * Math.cos(0.75 * Pi);
}

export function polR05Y(t) {
    return polR05(t) * Math.sin(0.75 * Pi);
}

export function polR45X(t) {
    return -polP5X(t) - polR05X(t) - polFIn5X(t);
}

export function polR45Y(t) {
    return -polP5Y(t) - polR05Y(t) - polFIn5Y(t) - polG5(true);
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
    return polP3(t) * polTokAB() * Math.sin(polFI2(t) - 0.75 * Pi) / 1000;
}

export function polMomFIn3(t) {
    return (polFIn3X(t) * (polSAY(t) - polSBY(t)) - polFIn3Y(t) * (polSAX(t) - polSBX(t))) / 1000;
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
    return -polR03(t) * polTokAB() * Math.cos(0.75 * Pi - polFI2(t)) / 1000;
}

export function polPlF(t) {
    return polTokAB() * Math.cos(0.75 * Pi - polFI2(t)) / 1000;
}

export function polPlG(t) {
    return Math.abs(polTokAB() * Math.sin(0.75 * Pi - polFI2(t))) / 1000;
}

export function polPlH(t) {
    return (polSAX(t) - polSBX(t)) / 1000;
}

export function polPlI(t) {
    return polPlecho(polFIn2X(t), polFIn2Y(t), polSAX(t) - polSS2X(t), polSAY(t) - polSS2Y(t)) / 1000;
}

export function polPlJ(t) {
    return (polSAX(t) - polSS2X(t)) / 1000;
}

export function polR03(t) {
    return (polMomP3(t) + polMomG3(t) + polMomFIn3(t) + polMomG2(t) + polMomFIn2(t) + polMIn2(t)) /
        (polTokAB() * Math.cos(polFI2(t) - 0.75 * Pi) / 1000);
}

export function polR03X(t) {
    return polR03(t) * Math.cos(0.25 * Pi);
}

export function polR03Y(t) {
    return polR03(t) * Math.sin(0.25 * Pi);
}

export function polR23X(t) {
    return -polP3X(t) - polR03X(t) - polFIn3X(t);
}

export function polR23Y(t) {
    return -polP3Y(t) - polR03Y(t) - polFIn3Y(t) - polG3(true);
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
export function polMomR41(t) {
    return (-polR41X(t) * polSAY(t) + polR41Y(t) * polSAX(t)) / 1000;
}

export function polMomR21(t) {
    return (-polR21X(t) * polSAY(t) + polR21Y(t) * polSAX(t)) / 1000;
}

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

export function polPlK(t) {
    return polPlecho(polR41X(t), polR41Y(t), -polSAX(t), -polSAY(t)) / 1000;
}

export function polPlL(t) {
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
    return (polR41X(t) * polSAY(t) - polR41Y(t) * polSAX(t) + polR21X(t) * polSAY(t) - polR21Y(t) * polSAX(t)) / 1000;
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
    return polJpZv(polTokM5(), polVC(t), polW1(t));
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

export function polJpJsVozd(t) {
    return polJpZv(polTokJsVozd(), polWVozd(t), polW1(t));
}

export function polJp(t) {
    return polJpMeh([
        [polTokM2(), polVS2(t)], [polTokM3(), polVB(t)], [polTokM4(), polVS4(t)], [polTokM5(), polVC(t)],
        [polTokJs1(), polW1(t)], [polTokJs2(), polW2(t)], [polTokJs4(), polW4(t)], [polTokJsVozd(), polWVozd(t)]
    ], polW1(t));
}

//Углы между силами и скоростями точек приложения сил.
export function polUgG2VS2(t) {
    return polUgGrad(polUg2Vek(0, polG2(true), polVS2X(t), polVS2Y(t)));
}

export function polUgG3VB(t) {
    return (polVBX(t) >= 0 ? 45 : 135);
}

export function polUgG4VS4(t) {
    return polUgGrad(polUg2Vek(0, polG4(true), polVS4X(t), polVS4Y(t)));
}

export function polUgG5VC(t) {
    return (polVCX(t) <= 0 ? 45 : 135);
}

export function polUgP3VB(t) {
    return (polVBX(t) / Math.cos(0.75 * Pi) > 0 ? 180 : 0);
}

export function polUgP5VC(t) {
    return (polVCX(t) / Math.cos(0.25 * Pi) > 0 ? 180 : 0);
}

//Прведенные моменты сил.
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
    return polMpF(polG5(true), polVCY(t), Math.abs(polW1(t)));
}

export function polMpP3(t) {
    return polMpF(-polP3(t), polVBX(t) / Math.cos(0.75 * Pi), Math.abs(polW1(t)));
}

export function polMpP5(t) {
    return polMpF(-polP5(t), polVCX(t) / Math.cos(0.25 * Pi), Math.abs(polW1(t)));
}

export function polMp(t) {
    return polMpMeh([[polG2(true), polVS2Y(t)], [polG3(true), polVBY(t)], [polG4(true), polVS4Y(t)],
            [polG5(true), polVCY(t)], [-polP3(t), polVBX(t) / Math.cos(0.75 * Pi)], [-polP5(t), polVCX(t) / Math.cos(0.25 * Pi)]],
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
