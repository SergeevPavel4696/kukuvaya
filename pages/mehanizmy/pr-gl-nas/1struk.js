import {Pi, polUgGrad, punktInter} from "../utils.js";
import {
    polFI1,
    polFI2,
    polFI3,
    polFI4,
    polFI5,
    polLevKr,
    polNizhKr,
    polPravKr,
    polSAX,
    polSAY,
    polSBX, polSBXKr,
    polSBY, polSBYKr,
    polSDX, polSDY,
    polSEX, polSEXKr,
    polSEY, polSEYKr, polSFX,
    polSFY,
    polSS2X,
    polSS2Y,
    polSS3X, polSS3XKr,
    polSS3Y, polSS3YKr,
    polSS4X,
    polSS4Y, polSS5X, polSS5XKr, polSS5Y, polSS5YKr,
    polVerhKr
} from "./analiz.js";
import {
    polTekVr,
    polTokAB,
    polTokAS2,
    polTokBC,
    polTokBD,
    polTokBE,
    polTokBS4,
    polTokCS3,
    polTokEF,
    polTokEK,
    polTokK,
    polTokKS5,
    polTokOA,
    polTokTakt,
    polTokToch,
    polTokX,
    polTokX1,
    polTokY,
    polTokY1
} from "./local_storage.js";
import {
    polTagTrCikl, polTagCMAkt, polTagCMNeissl, polTagOpVr, polTagRaspZv,
    polTagShAkt, polTagShNeissl, polTagTrDug, polTagTrOkr, polTagZvAkt, polTagZvNeissl, zadRisRazm
} from "../meh-svg-utils.js";
import {elNaStr} from "../../../scripts/utils.js";
import {
    pol1_1,
    pol1,
    pol1_2,
    pol1_3,
    pol1_4,
    pol1_6,
    polKinParu,
    polPlanPolozheniy,
    polPostrDvaOtrezka,
    polPostrCentrMassNaOtrezke,
    polPostrDuguTraektorii,
    polPostrKrivuyuTraektorii,
    polPostrOkruzhnostTraektorii,
    polPostrOtrezok,
    polPostrTochku,
    polPovtoritDeistviya,
    polPodpisRisunka,
    polStrukturnuyuGruppu,
    polZvenoKoromyslo,
    polZvenoKrivoship,
    polZvenoShatun,
    polZvenoStoiku,
    pol1_5,
    polPostrOtrezokObratnoOtTochki,
    pol1_7
} from "../pol-tag-1struk.js";
import {mehanismInter, nach, gr1, gr2} from "./ris.js";
import {polTagOkr, polTagPer} from "../../../scripts/utils-svg-geom.js";


//Добавить разметку страницы.
const content = document.getElementById("content");
let contentTag =
    pol1(mehanismInter) +
    pol1_1([
        polPostrTochku("postr_O", "O"),
        polPostrOtrezok("postr_OA", "O", "OA"),
        polPostrTochku("postr_C", "C"),
        polPostrDvaOtrezka("postr_AB_BC", "A", "C", "B", "AB", "CB"),
        polPostrCentrMassNaOtrezke("postr_S2", "AB", 2),
        polPostrCentrMassNaOtrezke("postr_S3", "BC", 3),
        polPostrTochku("postr_K", "K"),
        polPostrDvaOtrezka("postr_BE_EK", "B", "K", "E", "BE", "KE"),
        polPostrCentrMassNaOtrezke("postr_S4", "BE", 4),
        polPostrCentrMassNaOtrezke("postr_S5", "EK", 5),
        polPostrOtrezokObratnoOtTochki("postr_BD", "B", "E", "BD"),
        polPostrOtrezokObratnoOtTochki("postr_EF", "E", "B", "EF"),
        polPovtoritDeistviya(),
        polPostrOkruzhnostTraektorii("postr_tr_A", "O", "A"),
        polPostrDuguTraektorii("postr_tr_B", "C", "B"),
        polPostrDuguTraektorii("postr_tr_S3", "C", 3),
        polPostrDuguTraektorii("postr_tr_E", "K", "E"),
        polPostrDuguTraektorii("postr_tr_S5", "K", 5),
        polPostrKrivuyuTraektorii("postr_tr_S2", 2),
        polPostrKrivuyuTraektorii("postr_tr_D", "D"),
        polPostrKrivuyuTraektorii("postr_tr_S4", 4),
        polPostrKrivuyuTraektorii("postr_tr_F", "F", true),
        polPlanPolozheniy()
    ]) +
    pol1_2([
        polZvenoStoiku("zv_0"),
        polZvenoKrivoship("zv_1", 1),
        polZvenoShatun("zv_2", 2),
        polZvenoKoromyslo("zv_3", 3),
        polZvenoShatun("zv_4", 4),
        polZvenoKoromyslo("zv_5", 5, true)
    ]) +
    pol1_3([
        polKinParu("para_0-1", 0, 1, "O", "вр"),
        polKinParu("para_1-2", 1, 2, "A", "вр"),
        polKinParu("para_2-3", 2, 3, "B", "вр"),
        polKinParu("para_0-3", 0, 3, "C", "вр"),
        polKinParu("para_2-4", 2, 4, "B", "вр"),
        polKinParu("para_4-5", 4, 5, "E", "вр"),
        polKinParu("para_0-5", 0, 5, "K", "вр", true)
    ]) +
    pol1_4() +
    pol1_5([
        polPodpisRisunka(2, nach),
        polStrukturnuyuGruppu("gr_1", 1, 221),
        polPodpisRisunka(3, gr1),
        polStrukturnuyuGruppu("gr_2", 2, 221),
        polPodpisRisunka(4, gr2)
    ]) +
    pol1_6() +
    pol1_7();
content.innerHTML = contentTag;

//Активировать пункты на странице.
const
    postrO = elNaStr("postr_O"), postrOA = elNaStr("postr_OA"), postrC = elNaStr("postr_C"),
    postrABBC = elNaStr("postr_AB_BC"), postrS2 = elNaStr("postr_S2"), postrS3 = elNaStr("postr_S3"),
    postrK = elNaStr("postr_K"), postrBEEK = elNaStr("postr_BE_EK"), postrS4 = elNaStr("postr_S4"),
    postrS5 = elNaStr("postr_S5"), postrBD = elNaStr("postr_BD"), postrEF = elNaStr("postr_EF"),
    postrTrA = elNaStr("postr_tr_A"), postrTrB = elNaStr("postr_tr_B"), postrTrS3 = elNaStr("postr_tr_S3"),
    postrTrE = elNaStr("postr_tr_E"), postrTrS5 = elNaStr("postr_tr_S5"), postrTrD = elNaStr("postr_tr_D"),
    postrTrF = elNaStr("postr_tr_F"), postrTrS2 = elNaStr("postr_tr_S2"), postrTrS4 = elNaStr("postr_tr_S4");
//Пункты видов звеньев.
const
    zveno0 = elNaStr("zv_0"), zveno1 = elNaStr("zv_1"), zveno2 = elNaStr("zv_2"),
    zveno3 = elNaStr("zv_3"), zveno4 = elNaStr("zv_4"), zveno5 = elNaStr("zv_5");
//Пункты видов пар.
const
    para01 = elNaStr("para_0-1"), para12 = elNaStr("para_1-2"), para23 = elNaStr("para_2-3"),
    para03 = elNaStr("para_0-3"), para24 = elNaStr("para_2-4"), para45 = elNaStr("para_4-5"),
    para05 = elNaStr("para_0-5");
//Пункты групп Ассура.
const gr_0 = elNaStr("gr_0"), gr_1 = elNaStr("gr_1"), gr_2 = elNaStr("gr_2");
//Группы Ассура в формуле.
const fgr_0 = elNaStr("f-gr_0"), fgr_1 = elNaStr("f-gr_1"), fgr_2 = elNaStr("f-gr_2");
//Рисунок механизма.
const mehRis = elNaStr("meh_ris");
//Стойки на рисунке.
const st1 = elNaStr("st_1"), st3 = elNaStr("st_3"), st5 = elNaStr("st_5");
//Шарниры на рисунке.
const
    shO = elNaStr("sh_O"), shA = elNaStr("sh_A"), shB = elNaStr("sh_B"), shC = elNaStr("sh_C"),
    shD = elNaStr("sh_D"), shE = elNaStr("sh_E"), shF = elNaStr("sh_F"), shK = elNaStr("sh_K");
//Звенья на рисунке.
const
    zv1 = elNaStr("zv_OA"), zv2 = elNaStr("zv_AB"), zv3 = elNaStr("zv_BC"), zv4D = elNaStr("zv_BD"),
    zv4E = elNaStr("zv_BE"), zv4F = elNaStr("zv_EF"), zv5 = elNaStr("zv_EK");
//Центры тяжести на рисунке.
const s2 = elNaStr("S2"), s3 = elNaStr("S3"), s4 = elNaStr("S4"), s5 = elNaStr("S5");
//Траектории на рисунке.
const
    trA = elNaStr("tr_A"), trB = elNaStr("tr_B"), trD = elNaStr("tr_D"),
    trE = elNaStr("tr_E"), trF = elNaStr("tr_F"), trS2 = elNaStr("tr_S2"),
    trS3 = elNaStr("tr_S3"), trS4 = elNaStr("tr_S4"), trS5 = elNaStr("tr_S5");
//Расположение коромысел на рисунке.
const x = elNaStr("X"), y = elNaStr("Y"), x1 = elNaStr("X1"), y1 = elNaStr("Y1");


//Построение плана положений.
punktInter(mehRis, postrO, [shO]);
punktInter(mehRis, postrOA, [zv1, shO, shA]);
punktInter(mehRis, postrC, [shC, x, y]);
punktInter(mehRis, postrABBC, [zv2, zv3, shA, shB, shC]);
punktInter(mehRis, postrS2, [s2]);
punktInter(mehRis, postrS3, [s3]);
punktInter(mehRis, postrK, [shK, x1, y1]);
punktInter(mehRis, postrBEEK, [zv4E, zv5, shB, shE, shK]);
punktInter(mehRis, postrS4, [s4]);
punktInter(mehRis, postrS5, [s5]);
punktInter(mehRis, postrBD, [zv4D, shB, shD]);
punktInter(mehRis, postrEF, [zv4F, shE, shF]);
punktInter(mehRis, postrTrA, [trA]);
punktInter(mehRis, postrTrB, [trB]);
punktInter(mehRis, postrTrS3, [trS3]);
punktInter(mehRis, postrTrE, [trE]);
punktInter(mehRis, postrTrS5, [trS5]);
punktInter(mehRis, postrTrS2, [trS2]);
punktInter(mehRis, postrTrD, [trD]);
punktInter(mehRis, postrTrS4, [trS4]);
punktInter(mehRis, postrTrF, [trF]);
//Виды звеньев механизма.
punktInter(mehRis, zveno0, [st1, st3, st5, shO, shC, shK]);
punktInter(mehRis, zveno1, [zv1, shO, shA]);
punktInter(mehRis, zveno2, [zv2, shA, shB, s2]);
punktInter(mehRis, zveno3, [zv3, shB, shC, s3]);
punktInter(mehRis, zveno4, [zv4D, zv4E, zv4F, shB, shD, shE, shF, s4]);
punktInter(mehRis, zveno5, [zv5, shE, shK, s5]);
//Виды кинематических пар.
punktInter(mehRis, para01, [st1, zv1, shO]);
punktInter(mehRis, para12, [zv1, zv2, shA, s2]);
punktInter(mehRis, para23, [zv2, zv3, shB, s2, s3]);
punktInter(mehRis, para03, [st3, zv3, shC, s3]);
punktInter(mehRis, para24, [zv2, zv4D, zv4E, zv4F, shB, shD, shF, s2, s4]);
punktInter(mehRis, para45, [zv4D, zv4E, zv4F, zv5, shD, shE, shF, s4, s5]);
punktInter(mehRis, para05, [st5, zv5, shK, s5]);
//Группы Ассура.
punktInter(mehRis, gr_0, [st1, zv1, shO]);
punktInter(mehRis, gr_1, [st3, zv2, zv3, shA, shB, shC, s2, s3]);
punktInter(mehRis, gr_2, [st5, zv4D, zv4E, zv4F, zv5, shB, shD, shE, shF, shK, s4, s5]);
//Структурная формула.
punktInter(mehRis, fgr_0, [st1, zv1, shO]);
punktInter(mehRis, fgr_1, [st3, zv2, zv3, shA, shB, shC, s2, s3]);
punktInter(mehRis, fgr_2, [st5, zv4D, zv4E, zv4F, zv5, shB, shD, shE, shF, shK, s4, s5]);


//Текущее время.
const T = polTekVr();
//Такт работы механизма.
const TAKT = polTokTakt();
//Количество положений механизма.
const KOL = polTokK();
//Точность расчета.
const TOCH = polTokToch();
//Размеры механизма.
const
    X = polTokX(), Y = polTokY(), X1 = polTokX1(), Y1 = polTokY1(), OA = polTokOA(),
    AB = polTokAB(), AS2 = polTokAS2(), BC = polTokBC(), BS3 = polTokCS3(), BD = polTokBD(),
    BS4 = polTokBS4(), BE = polTokBE(), EF = polTokEF(), EK = polTokEK(), KS5 = polTokKS5();
//План положений на странице.
const planPol = elNaStr("plan-pol");
//Тег плана положений в картинке.
let planPolTag = "";


//Добавить начало тега плана положений.
function dobNachTag() {
    //Открыть тег изображения.
    planPolTag += "<g " + polTagPer(7 - polLevKr(), -7 - polVerhKr()) + ">";
}

//Добавить стойки.
function dobSt() {
    planPolTag +=
        //Добавить стойки звеньев 1, 3, 5.
        polTagOpVr(null, null, null, null, null) +
        polTagOpVr(-X, Y, null, null, null) +
        polTagOpVr(X1, -Y1, null, null, null);
}

//Добавить звенья.
function dobZv() {
    if (KOL !== 0) {
        for (let i = 0; i < KOL; i++) {
            planPolTag +=
                //Добавить положения звеньев 1, 2, 3, 4, 5.
                polTagZvNeissl(null, null, polUgGrad(polFI1(i * TAKT / KOL)), OA, 11) +
                polTagZvNeissl(polSAX(i * TAKT / KOL), polSAY(i * TAKT / KOL), polUgGrad(polFI2(i * TAKT / KOL)), AB, 11) +
                polTagZvNeissl(-X, Y, polUgGrad(polFI3(i * TAKT / KOL)), BC, 11) +
                polTagZvNeissl(polSBX(i * TAKT / KOL), polSBY(i * TAKT / KOL), polUgGrad(polFI4(i * TAKT / KOL) + Pi), BD, 11) +
                polTagZvNeissl(polSEX(i * TAKT / KOL), polSEY(i * TAKT / KOL), polUgGrad(polFI4(i * TAKT / KOL) + Pi), BE, 11) +
                polTagZvNeissl(polSEX(i * TAKT / KOL), polSEY(i * TAKT / KOL), polUgGrad(polFI4(i * TAKT / KOL)), EF, 14) +
                polTagZvNeissl(X1, -Y1, polUgGrad(polFI5(i * TAKT / KOL)), EK, 11);
        }
    }
}

//Добавить шарниры.
function dobSh() {
    if (KOL !== 0) {
        for (let i = 0; i < KOL; i++) {
            planPolTag +=
                //Добавить положения шарниров A, B, D.
                polTagShNeissl(polSAX(i * TAKT / KOL), polSAY(i * TAKT / KOL)) +
                polTagShNeissl(polSBX(i * TAKT / KOL), polSBY(i * TAKT / KOL)) +
                polTagShNeissl(polSDX(i * TAKT / KOL), polSDY(i * TAKT / KOL)) +
                polTagShNeissl(polSEX(i * TAKT / KOL), polSEY(i * TAKT / KOL)) +
                polTagOkr(polSFX(i * TAKT / KOL), polSFY(i * TAKT / KOL), 30, "none", "#000", 2, null);
        }
    }
}

//Добавить положения центров масс.
function dobCM() {
    if (KOL !== 0) {
        for (let i = 0; i < KOL; i++) {
            planPolTag +=
                //Добавить положения центров масс звеньев 2, 3, 4.
                polTagCMNeissl(polSS2X(i * TAKT / KOL), polSS2Y(i * TAKT / KOL)) +
                polTagCMNeissl(polSS3X(i * TAKT / KOL), polSS3Y(i * TAKT / KOL)) +
                polTagCMNeissl(polSS4X(i * TAKT / KOL), polSS4Y(i * TAKT / KOL)) +
                polTagCMNeissl(polSS5X(i * TAKT / KOL), polSS5Y(i * TAKT / KOL));
        }
    }
}

//Добавить траектории.
function dobTr() {
    planPolTag +=
        //Добавить расположение шарниров C и K.
        polTagRaspZv(null, Y, 180, X) +
        polTagRaspZv(null, null, 90, Y) +
        polTagRaspZv(null, -Y1, null, X1) +
        polTagRaspZv(null, null, -90, Y1) +
        //Добавить траектории шарниров A, B, D, E, F.
        polTagTrOkr(0, 0, OA) +
        polTagTrDug(polSBXKr(), polSBYKr(), polSBXKr(true), polSBYKr(true), BC) +
        polTagTrCikl(TOCH, TAKT, polSDX, polSDY) +
        polTagTrDug(polSEXKr(), polSEYKr(), polSEXKr(true), polSEYKr(true), EK) +
        polTagTrCikl(TOCH, TAKT, polSFX, polSFY) +
        //Добавить траектории центров масс звеньев 2, 3, 4, 5.
        polTagTrCikl(TOCH, TAKT, polSS2X, polSS2Y) +
        polTagTrDug(polSS3XKr(), polSS3YKr(), polSS3XKr(true), polSS3YKr(true), BC - BS3) +
        polTagTrCikl(TOCH, TAKT, polSS4X, polSS4Y) +
        polTagTrDug(polSS5XKr(), polSS5YKr(), polSS5XKr(true), polSS5YKr(true), EK - KS5);
}

//Добавить исследуемое положение механизма.
function dobIsslPol() {
    planPolTag +=
        polTagZvAkt(null, null, polUgGrad(polFI1(T)), OA, 11) +
        polTagZvAkt(polSAX(T), polSAY(T), polUgGrad(polFI2(T)), AB, 11) +
        polTagZvAkt(-X, Y, polUgGrad(polFI3(T)), BC, 11) +
        polTagZvAkt(polSBX(T), polSBY(T), polUgGrad(polFI4(T) + Pi), BD, 11) +
        polTagZvAkt(polSEX(T), polSEY(T), polUgGrad(polFI4(T) + Pi), BE, 11) +
        polTagZvAkt(polSEX(T), polSEY(T), polUgGrad(polFI4(T)), EF, 14) +
        polTagZvAkt(X1, -Y1, polUgGrad(polFI5(T)), EK, 11) +
        polTagShAkt(polSAX(T), polSAY(T)) +
        polTagShAkt(polSBX(T), polSBY(T)) +
        polTagShAkt(polSDX(T), polSDY(T)) +
        polTagShAkt(polSEX(T), polSEY(T)) +
        polTagOkr(polSFX(T), polSFY(T), 30, "none", "#f00", 4, null) +
        polTagCMAkt(polSS2X(T), polSS2Y(T)) +
        polTagCMAkt(polSS3X(T), polSS3Y(T)) +
        polTagCMAkt(polSS4X(T), polSS4Y(T)) +
        polTagCMAkt(polSS5X(T), polSS5Y(T));
}

//Добавить конец тега изображения.
function dobKonTag() {
    planPolTag += "</g>";
}


//Построить план положений.
dobNachTag();
dobSt();
dobZv();
dobSh();
dobCM();
dobTr();
dobIsslPol();
dobKonTag();
planPol.innerHTML = planPolTag;
zadRisRazm(planPol, null, 39 + polPravKr() - polLevKr(), 14 + polVerhKr() - polNizhKr(), 0, 0);
