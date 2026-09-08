import {
    pol1,
    pol1_1,
    pol1_2,
    pol1_3,
    pol1_4,
    pol1_5,
    pol1_6,
    pol1_7,
    polKinParu,
    polPlanPolozheniy,
    polPostrDvaOtrezka,
    polPostrCentrMassNaOtrezke,
    polPostrDuguTraektorii,
    polPostrKrivuyuTraektorii,
    polPostrOkruzhnostTraektorii,
    polPostrOtrezok,
    polPostrOtrezokNaTraektoriyu,
    polPostrOtrezokTraektorii,
    polPostrPryamuyuTraektorii,
    polPostrTochku,
    polPovtoritDeistviya,
    polPodpisRisunka,
    polStrukturnuyuGruppu,
    polZvenoKoromyslo,
    polZvenoKrivoship,
    polZvenoPolzun,
    polZvenoShatun,
    polZvenoStoiku
} from "../pol-tag-1struk.js";
import {gr1, gr2, mehanismInter, nach} from "./ris.js";
import {elNaStr} from "../../../scripts/utils.js";
import {aktInterPu, polUgGrad} from "../utils.js";
import {
    polFI1,
    polFI2,
    polFI3,
    polFI4,
    polLevKr, polNizhKr, polPravKr,
    polSAX,
    polSAY,
    polSBX,
    polSBY, polSDX, polSS2X, polSS2Y, polSS3X, polSS3Y, polSS4X, polSS4Y,
    polVerhKr
} from "./analiz.js";
import {
    polTekVr,
    polTokA,
    polTokAB, polTokB,
    polTokBC,
    polTokBD,
    polTokK,
    polTokOA,
    polTokTakt,
    polTokToch
} from "./local_storage.js";
import {polTagPer} from "../../../scripts/utils-svg-geom.js";
import {
    polTagTrCikl, polTagCMAkt,
    polTagCMNeissl,
    polTagOpSk,
    polTagOpVr, polTagPolzAkt,
    polTagPolzNeissl, polTagRaspZv, polTagShAkt,
    polTagShNeissl, polTagTrOkr, polTagZvAkt,
    polTagZvNeissl, zadRisRazm
} from "../meh-svg-utils.js";


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
        polPostrPryamuyuTraektorii("postr_tr_5", 5),
        polPostrOtrezokNaTraektoriyu("postr_BD", "B", 5, "BD"),
        polPostrCentrMassNaOtrezke("postr_S4", "BD", 4),
        polPovtoritDeistviya(),
        polPostrOkruzhnostTraektorii("postr_tr_A", "O", "A"),
        polPostrDuguTraektorii("postr_tr_B", "C", "B"),
        polPostrDuguTraektorii("postr_tr_S3", "C", 3),
        polPostrOtrezokTraektorii("postr_tr_D", "D"),
        polPostrKrivuyuTraektorii("postr_tr_S2", 2),
        polPostrKrivuyuTraektorii("postr_tr_S4", 4, true),
        polPlanPolozheniy()
    ]) +
    pol1_2([
        polZvenoStoiku("zv_0"),
        polZvenoKrivoship("zv_1", 1),
        polZvenoShatun("zv_2", 2),
        polZvenoKoromyslo("zv_3", 3),
        polZvenoShatun("zv_4", 4),
        polZvenoPolzun("zv_5", 5, true)
    ]) +
    pol1_3([
        polKinParu("para_0-1", "0", 1, "O", "вр"),
        polKinParu("para_1-2", 1, 2, "A", "вр"),
        polKinParu("para_2-3", 2, 3, "B", "вр"),
        polKinParu("para_0-3", "0", 3, "C", "вр"),
        polKinParu("para_2-4", 2, 4, "B", "вр"),
        polKinParu("para_4-5", 4, 5, "D", "вр"),
        polKinParu("para_0-5", "0", 5, "D", "по", true)
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


//Элементы рисунка.
const mehRis = elNaStr("meh_ris"), st1 = elNaStr("st_1"), st3 = elNaStr("st_3"), st5 = elNaStr("st_5"),
    shO = elNaStr("sh_O"), shA = elNaStr("sh_A"), shB = elNaStr("sh_B"), shC = elNaStr("sh_C"), shD = elNaStr("sh_D"),
    zv1 = elNaStr("zv_OA"), zv2 = elNaStr("zv_AB"), zv3 = elNaStr("zv_BC"), zv4 = elNaStr("zv_BD"),
    zv5 = elNaStr("pol"), s2 = elNaStr("S2"), s3 = elNaStr("S3"), s4 = elNaStr("S4"), trA = elNaStr("tr_A"),
    trS2 = elNaStr("tr_S2"), trB = elNaStr("tr_B"), trS3 = elNaStr("tr_S3"), trS4 = elNaStr("tr_S4"),
    trD = elNaStr("tr_D"), a = elNaStr("A"), b = elNaStr("B");


//Активировать пункты на странице.
aktInterPu(mehRis, [
    ["postr_O", [shO]],
    ["postr_OA", [zv1, shO, shA]],
    ["postr_C", [shC, a, b]],
    ["postr_AB_BC", [zv2, shA, shB, zv3, shC]],
    ["postr_S2", [s2]],
    ["postr_S3", [s3]],
    ["postr_tr_5", [trD]],
    ["postr_BD", [zv4, shB, shD]],
    ["postr_S4", [s4]],
    ["postr_tr_A", [trA]],
    ["postr_tr_S2", [trS2]],
    ["postr_tr_B", [trB]],
    ["postr_tr_S3", [trS3]],
    ["postr_tr_S4", [trS4]],
    ["zv_0", [st1, st3, st5, shO, shC]],
    ["zv_1", [zv1, shO, shA]],
    ["zv_2", [zv2, shA, shB, s2]],
    ["zv_3", [zv3, shB, shC, s3]],
    ["zv_4", [zv4, shB, shD, s4]],
    ["zv_5", [zv5, shD]],
    ["para_0-1", [st1, zv1, shO]],
    ["para_1-2", [zv1, zv2, shA, s2]],
    ["para_2-3", [zv2, zv3, shB, s2, s3]],
    ["para_0-3", [st3, zv3, shC, s3]],
    ["para_2-4", [zv2, zv4, shB, s2, s4]],
    ["para_4-5", [zv4, zv5, shD, s4]],
    ["para_0-5", [st5, zv5]],
    ["gr_0", [st1, zv1, shO]],
    ["gr_1", [st3, zv2, zv3, shA, shB, shC, s2, s3]],
    ["gr_2", [st5, zv4, zv5, shB, shD, s4]],
    ["f-gr_0", [st1, zv1, shO]],
    ["f-gr_1", [st3, zv2, zv3, shA, shB, shC, s2, s3]],
    ["f-gr_2", [st5, zv4, zv5, shB, shD, s4]]
]);


const T = polTekVr();
const TAKT = polTokTakt();
const KOL = polTokK();
const TOCH = polTokToch();
const A = polTokA(), B = polTokB(), OA = polTokOA(), AB = polTokAB(), BC = polTokBC(), BD = polTokBD();
const planPol = elNaStr("plan-pol");


//Добавить план положений на страницу.
let planPolTag =
    "<g " + polTagPer(32 - polLevKr(), -polVerhKr() - 7) + ">" +
    polTagOpVr(null, null, null, null, null) +
    polTagOpVr(A, B, null, null, null) +
    polTagOpSk(A - 50, B, 180, BC + BD + 30, false, false, null, null);
for (let i = 0; i < KOL; i++) {
    const t = i * TAKT / KOL;
    planPolTag +=
        polTagZvNeissl(null, null, polUgGrad(polFI1(t)), OA, 11) +
        polTagZvNeissl(polSAX(t), polSAY(t), polUgGrad(polFI2(t)), AB, 11) +
        polTagZvNeissl(A, B, polUgGrad(polFI3(t)), BC, 11) +
        polTagZvNeissl(polSBX(t), polSBY(t), polUgGrad(polFI4(t)), BD, 11) +
        polTagPolzNeissl(polSDX(t), B, null) +
        polTagShNeissl(polSAX(t), polSAY(t)) +
        polTagShNeissl(polSBX(t), polSBY(t)) +
        polTagShNeissl(polSDX(t), B) +
        polTagCMNeissl(polSS2X(t), polSS2Y(t)) +
        polTagCMNeissl(polSS3X(t), polSS3Y(t)) +
        polTagCMNeissl(polSS4X(t), polSS4Y(t));
}
planPolTag +=
    polTagRaspZv(null, null, null, A) +
    polTagRaspZv(A, null, 90, B) +
    polTagTrOkr(0, 0, OA) +
    //polTrDugTag(polSBXLevKr(), polSBYLevKr(), polSBXPravKr(), polSBYPravKr(), BC) +
    polTagTrCikl(TOCH, TAKT, polSS2X, polSS2Y) +
    //polTrDugTag(polSS3XLevKr(), polSS3YLevKr(), polSS3XPravKr(), polSS3YPravKr(), BC - BS3) +
    polTagTrCikl(TOCH, TAKT, polSS4X, polSS4Y) +
    polTagZvAkt(null, null, polUgGrad(polFI1(T)), OA, 11) +
    polTagZvAkt(polSAX(T), polSAY(T), polUgGrad(polFI2(T)), AB, 11) +
    polTagZvAkt(A, B, polUgGrad(polFI3(T)), BC, 11) +
    polTagZvAkt(polSBX(T), polSBY(T), polUgGrad(polFI4(T)), BD, 11) +
    polTagPolzAkt(polSDX(T), B, null) +
    polTagShAkt(polSAX(T), polSAY(T)) +
    polTagShAkt(polSBX(T), polSBY(T)) +
    polTagShAkt(polSDX(T), B) +
    polTagCMAkt(polSS2X(T), polSS2Y(T)) +
    polTagCMAkt(polSS3X(T), polSS3Y(T)) +
    polTagCMAkt(polSS4X(T), polSS4Y(T)) +
    "</g>";
planPol.innerHTML = planPolTag;
zadRisRazm(planPol, null, 61 + polPravKr() - polLevKr(), 14 + polVerhKr() - polNizhKr(), 0, 0);
