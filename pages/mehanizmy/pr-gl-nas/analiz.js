import {
    dif,
    Pi, polGip, polIzmEnMeh, polIzmEnMeh1,
    polJpMeh,
    polJpZv, polKompSumVek,
    polMax,
    polMdvMeh, polMin,
    polMpF,
    polMpMeh,
    polMpMehMass, polPlecho,
    polUg2Vek,
    polUgGrad,
    polVes,
    polVesVek
} from "../utils.js";
import {
    polTokAB,
    polTokAS2,
    polTokBC,
    polTokBD,
    polTokBE,
    polTokCS3,
    polTokBS4,
    polTokEF,
    polTokEK,
    polTokKS5,
    polTokJs1,
    polTokJs2,
    polTokJs3,
    polTokJs4,
    polTokJs5,
    polTokJsDv,
    polTokM1,
    polTokM2,
    polTokM3,
    polTokM4,
    polTokM5,
    polTokMPr,
    polTokMSht,
    polTokMZh,
    polTokOA,
    polTokTakt,
    polTokToch,
    polTokW,
    polTokWDv,
    polTokX,
    polTokX1,
    polTokY,
    polTokY1,
    polTokK
} from "./local_storage.js";
import {polUgPo3St} from "../../../scripts/matematika/geom.js";


//
//Кинематический анализ.
//

//Перемещения звеньев.
export function polFI1(t) {
    return 0.5 * Pi + polTokW() * t;
}

export function polSAX(t) {
    return polTokOA() * Math.cos(polFI1(t));
}

export function polSAY(t) {
    return polTokOA() * Math.sin(polFI1(t));
}

function polAC(t) {
    return polGip(-polTokX() - polSAX(t), polTokY() - polSAY(t));
}

function polFIAC(t) {
    return (polTokY() > polSAY(t) ? 1.0 : -1.0) * Math.acos((-polTokX() - polSAX(t)) / polAC(t));
}

function polFIBAC(t) {
    return polUgPo3St(polTokBC(), polTokAB(), polAC(t));
}

export function polFI2(t) {
    return polFIAC(t) - polFIBAC(t);
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
    return (polSBY(t) > polTokY() ? 1.0 : -1.0) * Math.acos((polSBX(t) + polTokX()) / polTokBC());
}

export function polSS3X(t) {
    return -polTokX() + polTokCS3() * Math.cos(polFI3(t));
}

export function polSS3Y(t) {
    return polTokY() + polTokCS3() * Math.sin(polFI3(t));
}

function polBK(t) {
    return polGip(polTokX1() - polSBX(t), -polTokY1() - polSBY(t));
}

function polFIBK(t) {
    return -Math.acos((polTokX1() - polSBX(t)) / polBK(t));
}

function polFIEBK(t) {
    return polUgPo3St(polTokEK(), polTokBE(), polBK(t));
}

export function polFI4(t) {
    return polFIBK(t) + polFIEBK(t);
}

export function polSDX(t) {
    return polSBX(t) - polTokBD() * Math.cos(polFI4(t));
}

export function polSDY(t) {
    return polSBY(t) - polTokBD() * Math.sin(polFI4(t));
}

export function polSS4X(t) {
    return polSBX(t) + polTokBS4() * Math.cos(polFI4(t));
}

export function polSS4Y(t) {
    return polSBY(t) + polTokBS4() * Math.sin(polFI4(t));
}

export function polSEX(t) {
    return polSBX(t) + polTokBE() * Math.cos(polFI4(t));
}

export function polSEY(t) {
    return polSBY(t) + polTokBE() * Math.sin(polFI4(t));
}

export function polSFX(t) {
    return polSBX(t) + (polTokBE() + polTokEF()) * Math.cos(polFI4(t));
}

export function polSFY(t) {
    return polSBY(t) + (polTokBE() + polTokEF()) * Math.sin(polFI4(t));
}

export function polFI5(t) {
    return Math.acos((polSEX(t) - polTokX1()) / polTokEK());
}

export function polSS5X(t) {
    return polTokX1() + polTokKS5() * Math.cos(polFI5(t));
}

export function polSS5Y(t) {
    return -polTokY1() + polTokKS5() * Math.sin(polFI5(t));
}

//Крайние положения механизма.
function polOC() {
    return polGip(polTokX(), polTokY());
}

function polOB(verh) {
    return verh ? polTokAB() + polTokOA() : polTokAB() - polTokOA();
}

function polFiOB(verh) {
    return Pi - Math.atan(polTokY() / polTokX()) - polUgPo3St(polTokBC(), polOB(verh), polOC());
}

export function polSBXKr(verh) {
    return polOB(verh) * Math.cos(polFiOB(verh));
}

export function polSBYKr(verh) {
    return polOB(verh) * Math.sin(polFiOB(verh));
}

function polFiCB(verh) {
    return polUgPo3St(polOB(verh), polTokBC(), polOC()) - Math.atan(polTokY() / polTokX());
}

export function polSS3XKr(verh) {
    const xb = polSBXKr(verh), xc = -polTokX(), bc = polTokBC(), cs3 = polTokCS3(), bs3 = bc - cs3;
    return (xb * cs3 + xc * bs3) / bc;
}

export function polSS3YKr(verh) {
    const yb = polSBYKr(verh), yc = polTokY(), bc = polTokBC(), cs3 = polTokCS3(), bs3 = bc - cs3;
    return (yb * cs3 + yc * bs3) / bc;
}

function polBKKr(verh) {
    return polGip(polTokX1() - polSBXKr(verh), polSBYKr(verh) + polTokY1());
}

function polFiDF(verh) {
    const EK = polTokEK();
    const BE = polTokBE();
    return polUgPo3St(EK, BE, polBKKr(verh)) - Math.atan((polSBYKr(verh) + polTokY1()) / (polTokX1() - polSBXKr(verh)));
}

export function polSDXKr(verh) {
    return polSBXKr(verh) - polTokBD() * Math.cos(polFiDF(verh));
}

export function polSDYKr(verh) {
    return polSBYKr(verh) - polTokBD() * Math.sin(polFiDF(verh));
}

export function polSEXKr(verh) {
    return polSBXKr(verh) + polTokBE() * Math.cos(polFiDF(verh));
}

export function polSEYKr(verh) {
    return polSBYKr(verh) + polTokBE() * Math.sin(polFiDF(verh));
}

export function polSFXKr(verh) {
    return polSBXKr(verh) + (polTokBE() + polTokEF()) * Math.cos(polFiDF(verh));
}

export function polSFYKr(verh) {
    return polSBYKr(verh) + (polTokBE() + polTokEF()) * Math.sin(polFiDF(verh));
}

export function polSS5XKr(verh) {
    const xe = polSEXKr(verh), xk = polTokX1(), ek = polTokEK(), ks5 = polTokKS5(), es5 = ek - ks5;
    return (xe * ks5 + xk * es5) / ek;
}

export function polSS5YKr(verh) {
    const ye = polSEYKr(verh), yk = -polTokY1(), ek = polTokEK(), ks5 = polTokKS5(), es5 = ek - ks5;
    return (ye * ks5 + yk * es5) / ek;
}

export function polLevKr() {
    return polMin([-polTokX(), polSDXKr(), polSDXKr(true)]);
}

export function polVerhKr() {
    return polMax([polTokY(), polSDYKr(true), polSFYKr()]);

}

export function polPravKr() {
    return polMax([polTokX1(), polSFXKr(), polSFXKr(true)]);
}

export function polNizhKr() {
    return polMin([-polTokY1() - 44, polSDYKr(), polSFYKr(true) - 30]);
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

export function polW5(t) {
    return dif(polFI5, t, polTokTakt());
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

export function polVEB(t) {
    return Math.abs(polW4(t) * polTokBE() / 1000);
}

export function polVEX(t) {
    return dif(polSEX, t, polTokTakt()) / 1000;
}

export function polVEY(t) {
    return dif(polSEY, t, polTokTakt()) / 1000;
}

export function polVE(t) {
    return polGip(polVEX(t), polVEY(t));
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

export function polVFB(t) {
    return Math.abs(polW4(t) * (polTokBE() + polTokEF()) / 1000);
}

export function polVFX(t) {
    return dif(polSFX, t, polTokTakt()) / 1000;
}

export function polVFY(t) {
    return dif(polSFY, t, polTokTakt()) / 1000;
}

export function polVF(t) {
    return polGip(polVFX(t), polVFY(t));
}

export function polVS5X(t) {
    return dif(polSS5X, t, polTokTakt()) / 1000;
}

export function polVS5Y(t) {
    return dif(polSS5Y, t, polTokTakt()) / 1000;
}

export function polVS5(t) {
    return polGip(polVS5X(t), polVS5Y(t));
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

export function polE5(t) {
    return dif(polW5, t, polTokTakt());
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
    return polE3(t) * polTokBC() / 1000;
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

export function polAS3X(t) {
    return dif(polVS3X, t, polTokTakt());
}

export function polAS3Y(t) {
    return dif(polVS3Y, t, polTokTakt());
}

export function polAS3(t) {
    return polGip(polAS3X(t), polAS3Y(t));
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

export function polAEBn(t) {
    return Math.pow(polW4(t), 2) * polTokBE() / 1000;
}

export function polAEBt(t) {
    return Math.abs(polE4(t) * polTokBE() / 1000);
}

export function polAEB(t) {
    return polGip(polAEBn(t), polAEBt(t));
}

export function polAEKn(t) {
    return Math.pow(polW5(t), 2) * polTokEK() / 1000;
}

export function polAEKt(t) {
    return polE5(t) * polTokEK() / 1000;
}

export function polAEX(t) {
    return dif(polVEX, t, polTokTakt());
}

export function polAEY(t) {
    return dif(polVEY, t, polTokTakt());
}

export function polAE(t) {
    return polGip(polAEX(t), polAEY(t));
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
    return dif(polVDY, t, polTokTakt());
}

export function polAD(t) {
    return polGip(polADX(t), polADY(t));
}

export function polAFBn(t) {
    return Math.pow(polW4(t), 2) * (polTokBE() + polTokEF()) / 1000;
}

export function polAFBt(t) {
    return polE4(t) * (polTokBE() + polTokEF()) / 1000;
}

export function polAFB(t) {
    return polGip(polAFBn(t), polAFBt(t));
}

export function polAFX(t) {
    return dif(polVFX, t, polTokTakt());
}

export function polAFY(t) {
    return dif(polVFY, t, polTokTakt());
}

export function polAF(t) {
    return polGip(polAFX(t), polAFY(t));
}

export function polAS5X(t) {
    return dif(polVS5X, t, polTokTakt());
}

export function polAS5Y(t) {
    return dif(polVS5Y, t, polTokTakt());
}

export function polAS5(t) {
    return polGip(polAS5X(t), polAS5Y(t));
}


//
//Силовой анализ.
//

//Веса звеньев, штанги, противовеса и жидкости.
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

export function polGSht(vek) {
    return vek ? polVesVek(polTokMSht()) : polVes(polTokMSht());
}

export function polGPr(vek) {
    return vek ? polVesVek(polTokMPr()) : polVes(polTokMPr());
}

export function polMZh(t) {
    return polVDY(t) >= 0 ? polTokMZh() : 0;
}

export function polGZh(vek, t) {
    return vek ? polVesVek(polMZh(t)) : polVes(polMZh(t));
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
    return -polTokM5() * polAS5X(t);
}

export function polFIn5Y(t) {
    return -polTokM5() * polAS5Y(t);
}

export function polFIn5(t) {
    return polTokM5() * polAS5(t);
}

export function polFInShtX(t) {
    return 0;
}

export function polFInShtY(t) {
    return -polTokMSht() * polADY(t);
}

export function polFInSht(t) {
    return Math.abs(polFInShtY(t));
}

export function polFInPrX(t) {
    return -polTokMPr() * polAFX(t);
}

export function polFInPrY(t) {
    return -polTokMPr() * polAFY(t);
}

export function polFInPr(t) {
    return polTokMPr() * polAF(t);
}

export function polFInZhX(t) {
    return 0;
}

export function polFInZhY(t) {
    return -polMZh(t) * polADY(t);
}

export function polFInZh(t) {
    return Math.abs(polFInZhY(t));
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

export function polMIn5(t) {
    return -polTokJs5() * polE5(t);
}

//Вторая группа Ассура.
export function polMomR05(t) {
    return -polR05T(t) * polTokEK() / 1000;
}

export function polMomFIn5(t) {
    return (polFIn5X(t) * (polSEY(t) - polSS5Y(t)) - polFIn5Y(t) * (polSEX(t) - polSS5X(t))) / 1000;
}

export function polMomG5(t) {
    return -polG5(true) * (polSEX(t) - polSS5X(t)) / 1000;
}

export function polMomR34(t) {
    return -polR34T(t) * polTokBE() / 1000;
}

export function polMomFIn4(t) {
    return (polFIn4X(t) * (polSEY(t) - polSS4Y(t)) - polFIn4Y(t) * (polSEX(t) - polSS4X(t))) / 1000;
}

export function polMomG4(t) {
    return -polG4(true) * (polSEX(t) - polSS4X(t)) / 1000;
}

export function polMomFInSht(t) {
    return -polFInShtY(t) * (polSEX(t) - polSDX(t)) / 1000;
}

export function polMomGSht(t) {
    return -polGSht(true) * (polSEX(t) - polSDX(t)) / 1000;
}

export function polMomFInPr(t) {
    return (polFInPrX(t) * (polSEY(t) - polSFY(t)) - polFInPrY(t) * (polSEX(t) - polSFX(t))) / 1000;
}

export function polMomGPr(t) {
    return -polGPr(true) * (polSEX(t) - polSFX(t)) / 1000;
}

export function polMomFInZh(t) {
    return -polFInZhY(t) * (polSEX(t) - polSDX(t)) / 1000;
}

export function polMomGZh(t) {
    return -polGZh(true, t) * (polSEX(t) - polSDX(t)) / 1000;
}

export function polPlA() {
    return polTokEK() / 1000;
}

export function polPlB(t) {
    return polPlecho(polFIn5X(t), polFIn5Y(t), polSEX(t) - polSS5X(t), polSEY(t) - polSS5Y(t)) / 1000;
}

export function polPlC(t) {
    return Math.abs(polSEX(t) - polSS5X(t)) / 1000;
}

export function polPlD() {
    return polTokBE() / 1000;
}

export function polPlE(t) {
    return polPlecho(polFIn4X(t), polFIn4Y(t), polSEX(t) - polSS4X(t), polSEY(t) - polSS4Y(t)) / 1000;
}

export function polPlF(t) {
    return Math.abs(polSEX(t) - polSS4X(t)) / 1000;
}

export function polPlG(t) {
    return Math.abs(polSEX(t) - polSDX(t)) / 1000;
}

export function polPlH(t) {
    return polPlecho(polFInPrX(t), polFInPrY(t), polSEX(t) - polSFX(t), polSEY(t) - polSFY(t)) / 1000;
}

export function polPlI(t) {
    return Math.abs(polSEX(t) - polSFX(t)) / 1000;
}

export function polR05T(t) {
    return (polMomFIn5(t) + polMomG5(t) + polMIn5(t)) / (polTokEK() / 1000);
}

export function polR05TX(t) {
    return polR05T(t) * Math.cos(polFI5(t) + 0.5 * Pi);
}

export function polR05TY(t) {
    return polR05T(t) * Math.sin(polFI5(t) + 0.5 * Pi);
}

export function polR05N(t) {
    return polKompSumVek(
        polR05TX(t) + polFIn5X(t) + polFIn4X(t) + polFInPrX(t) + polR34TX(t),
        polR05TY(t) + polFIn5Y(t) + polG5(true) + polFIn4Y(t) + polG4(true) + polFInShtY(t) +
        polGSht(true) + polFInPrY(t) + polGPr(true) + polFInZhY(t) + polGZh(true, t) + polR34TY(t),
        polFI4(t), polFI5(t)).L2;
}

export function polR05NX(t) {
    return polR05N(t) * Math.cos(polFI5(t));
}

export function polR05NY(t) {
    return polR05N(t) * Math.sin(polFI5(t));
}

export function polR05X(t) {
    return polR05TX(t) + polR05NX(t);
}

export function polR05Y(t) {
    return polR05TY(t) + polR05NY(t);
}

export function polR05(t) {
    return polGip(polR05X(t), polR05Y(t));
}

export function polR34T(t) {
    return (polMomFIn4(t) + polMomG4(t) + polMomFInSht(t) + polMomGSht(t) + polMomFInPr(t) +
        polMomGPr(t) + polMomFInZh(t) + polMomGZh(t) + polMIn4(t)) / (polTokBE() / 1000);
}

export function polR34TX(t) {
    return polR34T(t) * Math.cos(polFI4(t) + 0.5 * Pi);
}

export function polR34TY(t) {
    return polR34T(t) * Math.sin(polFI4(t) + 0.5 * Pi);
}

export function polR34N(t) {
    return polKompSumVek(
        polR05TX(t) + polFIn5X(t) + polFIn4X(t) + polFInPrX(t) + polR34TX(t),
        polR05TY(t) + polFIn5Y(t) + polG5(true) + polFIn4Y(t) + polG4(true) + polFInShtY(t) +
        polGSht(true) + polFInPrY(t) + polGPr(true) + polFInZhY(t) + polGZh(true, t) + polR34TY(t),
        polFI4(t), polFI5(t)).L1;
}

export function polR34NX(t) {
    return polR34N(t) * Math.cos(polFI4(t));
}

export function polR34NY(t) {
    return polR34N(t) * Math.sin(polFI4(t));
}

export function polR34X(t) {
    return polR34TX(t) + polR34NX(t);
}

export function polR34Y(t) {
    return polR34TY(t) + polR34NY(t);
}

export function polR34(t) {
    return polGip(polR34X(t), polR34Y(t));
}

export function polR45X(t) {
    return polR05X(t) + polFIn5X(t);
}

export function polR45Y(t) {
    return polR05Y(t) + polFIn5Y(t) + polG5(true);
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

export function polPlJ() {
    return polTokBC() / 1000;
}

export function polPlK(t) {
    return polPlecho(polFIn3X(t), polFIn3Y(t), polSBX(t) - polSS3X(t), polSBY(t) - polSS3Y(t)) / 1000;
}

export function polPlL(t) {
    return Math.abs(polSBX(t) - polSS3X(t)) / 1000;
}

export function polPlM() {
    return polTokAB() / 1000;
}

export function polPlN(t) {
    return polPlecho(polFIn2X(t), polFIn2Y(t), polSBX(t) - polSS2X(t), polSBY(t) - polSS2Y(t)) / 1000;
}

export function polPlO(t) {
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
        polR03TX(t) + polFIn3X(t) + polR43X(t) + polFIn2X(t) + polR12TX(t),
        polR03TY(t) + polFIn3Y(t) + polG3(true) + polR43Y(t) + polFIn2Y(t) + polG2(true) + polR12TY(t),
        polFI2(t), polFI3(t)).L2;
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

export function polR23X(t) {
    return polR03X(t) + polFIn3X(t) + polR43X(t);
}

export function polR23Y(t) {
    return polR03Y(t) + polFIn3Y(t) + polG3(true) + polR43Y(t);
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

//Начальный механизм.
export function polMomR21(t) {
    return (-polR21X(t) * polSAY(t) + polR21Y(t) * polSAX(t)) / 1000;
}

export function polPlP(t) {
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
    return polJpZv(polTokM5(), polVS5(t), polW1(t));
}

export function polJpMSh(t) {
    return polJpZv(polTokMSht(), polVDY(t), polW1(t));
}

export function polJpMPr(t) {
    return polJpZv(polTokMPr(), polVF(t), polW1(t));
}

export function polJpMZh(t) {
    return polJpZv(polMZh(t), polVDY(t), polW1(t));
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

export function polJpJs5(t) {
    return polJpZv(polTokJs5(), polW5(t), polW1(t));
}

export function polJpJsDv(t) {
    return polJpZv(polTokJsDv(), polWDv(t), polW1(t));
}

export function polJp(t) {
    return polJpMeh([
        [polTokM2(), polVS2(t)], [polTokM3(), polVS3(t)], [polTokM4(), polVS4(t)], [polTokM5(), polVS5(t)],
        [polTokMSht(), polVDY(t)], [polTokMPr(), polVF(t)], [polMZh(t), polVDY(t)], [polTokJs1(), polW1(t)],
        [polTokJs2(), polW2(t)], [polTokJs3(), polW3(t)], [polTokJs4(), polW4(t)], [polTokJs5(), polW5(t)],
        [polTokJsDv(), polWDv()]], polW1(t));
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

export function polUgG5VS5(t) {
    return polUgGrad(polUg2Vek(0, polG5(true), polVS5X(t), polVS5Y(t)));
}

export function polUgGShtVD(t) {
    return polVDY(t) <= 0 ? 0 : 180;
}

export function polUgGPrVF(t) {
    return polUgGrad(polUg2Vek(0, polGPr(true), polVFX(t), polVFY(t)));
}

export function polUgGZhidVD(t) {
    return polGZh(true, t) === 0 ? 0 : 180;
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
    return polMpF(polG5(true), polVS5Y(t), Math.abs(polW1(t)));
}

export function polMpGSht(t) {
    return polMpF(polGSht(true), polVDY(t), Math.abs(polW1(t)));
}

export function polMpGPr(t) {
    return polMpF(polGPr(true), polVFY(t), Math.abs(polW1(t)));
}

export function polMpGZh(t) {
    return polMpF(polGZh(true, t), polVDY(t), Math.abs(polW1(t)));
}

export function polMp(t) {
    return polMpMeh([
        [polG2(true), polVS2Y(t)], [polG3(true), polVS3Y(t)], [polG4(true), polVS4Y(t)], [polG5(true), polVS5Y(t)],
        [polGSht(true), polVDY(t)], [polGPr(true), polVFY(t)], [polGZh(true, t), polVDY(t)],
    ], Math.abs(polW1(t)));
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
