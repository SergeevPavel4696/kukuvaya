import {
    pol1, pol1_1, pol1_2, pol1_3, pol1_4, pol1_5, pol1_6, pol1_7, polKinParu, polPlanPolozheniy, polPostrDvaOtrezka,
    polPostrCentrMassNaOtrezke, polPostrKrivuyuTraektorii, polPostrOkruzhnostTraektorii, polPostrOtrezok,
    polPostrOtrezokNaTraektoriyu, polPostrOtrezokTraektorii, polPostrPryamuyuTraektorii, polPostrTochku,
    polPovtoritDeistviya, polPodpisRisunka, polStrukturnuyuGruppu, polZvenoKrivoship, polZvenoPolzun, polZvenoShatun,
    polZvenoStoiku
} from "../pol-tag-1struk.js";
import {gr1, gr2, mehanismInter, nach} from "./ris.js";
import {elNaStr} from "../../../scripts/utils.js";
import {aktInterPu, polUgGrad} from "../utils.js";
import {
    polFI1, polFI2, polFI3B, polFI3D, polFI4, polLevKr, polNizhKr, polPravKr, polSAX, polSAY,
    polSBX, polSBY, polSDX, polSDY, polSEY, polSS2X, polSS2Y, polSS4X, polSS4Y, polVerhKr
} from "./analiz.js";
import {
    polTekVr,
    polTokA, polTokAB, polTokB, polTokBC, polTokCD, polTokDE, polTokK, polTokOA, polTokTakt, polTokToch
} from "./local_storage.js";
import {polTagPer} from "../../../scripts/utils-svg-geom.js";
import {
    polTagTrCikl, polTagCMAkt, polTagCMNeissl, polTagOpSk, polTagOpVr, polTagPolzAkt, polTagPolzNeissl,
    polTagShAkt, polTagShNeissl, polTagTrOkr, polTagZvAkt, polTagZvNeissl, zadRisRazm
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
        polPostrOtrezok("postr_CD", "C", "CD"),
        polPostrPryamuyuTraektorii("postr_tr_5", 5),
        polPostrOtrezokNaTraektoriyu("postr_DE", "D", 5, "DE"),
        polPostrCentrMassNaOtrezke("postr_S4", "DE", 4),
        polPovtoritDeistviya(),
        polPostrOkruzhnostTraektorii("postr_tr_A", "O", "A"),
        polPostrOkruzhnostTraektorii("postr_tr_B", "C", "B"),
        polPostrOkruzhnostTraektorii("postr_tr_D", "C", "D"),
        polPostrOtrezokTraektorii("postr_tr_E", "E"),
        polPostrKrivuyuTraektorii("postr_tr_S2", 2),
        polPostrKrivuyuTraektorii("postr_tr_S4", 4, true),
        polPlanPolozheniy()
    ]) +
    pol1_2([
        polZvenoStoiku("zv_0"),
        polZvenoKrivoship("zv_1", 1),
        polZvenoShatun("zv_2", 2),
        polZvenoKrivoship("zv_3", 3),
        polZvenoShatun("zv_4", 4),
        polZvenoPolzun("zv_5", 5, true)
    ]) +
    pol1_3([
        polKinParu("para_0-1", 0, 1, "O", "вр"),
        polKinParu("para_1-2", 1, 2, "A", "вр"),
        polKinParu("para_2-3", 2, 3, "B", "вр"),
        polKinParu("para_0-3", 0, 3, "C", "вр"),
        polKinParu("para_3-4", 3, 4, "D", "вр"),
        polKinParu("para_4-5", 4, 5, "E", "вр"),
        polKinParu("para_0-5", 0, 5, "E", "по", true)
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
    shE = elNaStr("sh_E"), zv1 = elNaStr("zv_OA"), zv2 = elNaStr("zv_AB"), zv3B = elNaStr("zv_BC"),
    zv3D = elNaStr("zv_CD"), zv4 = elNaStr("zv_DE"), zv5 = elNaStr("pol5"), s2 = elNaStr("S2"), s4 = elNaStr("S4"),
    trA = elNaStr("tr_A"), trS2 = elNaStr("tr_S2"), trB = elNaStr("tr_B"), trD = elNaStr("tr_D"),
    trS4 = elNaStr("tr_S4"), trE = elNaStr("tr_E"), a = elNaStr("A"), b = elNaStr("B");


//Активировать пункты на странице.
aktInterPu(mehRis, [
    ["postr_O", [shO]],
    ["postr_OA", [zv1, shO, shA]],
    ["postr_C", [shC, a, b]],
    ["postr_AB_BC", [zv2, shA, shB, zv3B, shC]],
    ["postr_S2", [s2]],
    ["postr_CD", [zv3D, shC, shD]],
    ["postr_tr_5", [trE]],
    ["postr_DE", [zv4, shD, shE]],
    ["postr_S4", [s4]],
    ["postr_tr_A", [trA]],
    ["postr_tr_S2", [trS2]],
    ["postr_tr_B", [trB]],
    ["postr_tr_D", [trD]],
    ["postr_tr_S4", [trS4]],
    ["zv_0", [st1, st3, st5, shO, shC]],
    ["zv_1", [zv1, shO, shA]],
    ["zv_2", [zv2, shA, shB, s2]],
    ["zv_3", [zv3B, zv3D, shB, shC, shD]],
    ["zv_4", [zv4, shD, shE, s4]],
    ["zv_5", [zv5, shE]],
    ["para_0-1", [st1, zv1, shO]],
    ["para_1-2", [zv1, zv2, shA, s2]],
    ["para_2-3", [zv2, zv3B, zv3D, shB, s2]],
    ["para_0-3", [st3, zv3B, zv3D, shC]],
    ["para_3-4", [zv3B, zv3D, zv4, shD, s4]],
    ["para_4-5", [zv4, zv5, shE, s4]],
    ["para_0-5", [st5, zv5]],
    ["gr_0", [st1, zv1, shO]],
    ["gr_1", [st3, zv2, zv3B, zv3D, shA, shB, shC, s2]],
    ["gr_2", [st5, zv4, zv5, shD, shE, s4]],
    ["f-gr_0", [st1, zv1, shO]],
    ["f-gr_1", [st3, zv2, zv3B, zv3D, shA, shB, shC, s2]],
    ["f-gr_2", [st5, zv4, zv5, shD, shE, s4]]
]);


const T = polTekVr();
const TAKT = polTokTakt();
const KOL = polTokK();
const TOCH = polTokToch();
const OA = polTokOA(), AB = polTokAB(), BC = polTokBC(), CD = polTokCD(), DE = polTokDE(), A = polTokA(), B = polTokB();
const planPol = elNaStr("plan-pol");


//Добавить план положений на страницу.
let planPolTag =
    "<g " + polTagPer(7 - polLevKr(), -polVerhKr() - 7) + ">" +
    polTagOpVr(null, null, null, null, null) +
    polTagOpVr(-A, B, -90, null, null) +
    polTagOpSk(-A, -75, -90, CD + DE, false, 1, null, null);
for (let i = 0; i < KOL; i++) {
    const t = i * TAKT / KOL;
    planPolTag +=
        polTagZvNeissl(null, null, polUgGrad(polFI1(t)), OA, 11) +
        polTagZvNeissl(polSAX(t), polSAY(t), polUgGrad(polFI2(t)), AB, 11) +
        polTagZvNeissl(-A, B, polUgGrad(polFI3B(t)), BC, 11) +
        polTagZvNeissl(-A, B, polUgGrad(polFI3D(t)), CD, 11) +
        polTagZvNeissl(polSDX(t), polSDY(t), polUgGrad(polFI4(t)), DE, 11) +
        polTagPolzNeissl(-A, polSEY(t), 90) +
        polTagShNeissl(polSAX(t), polSAY(t)) +
        polTagShNeissl(polSBX(t), polSBY(t)) +
        polTagShNeissl(polSDX(t), polSDY(t)) +
        polTagShNeissl(-A, polSEY(t)) +
        polTagCMNeissl(polSS2X(t), polSS2Y(t)) +
        polTagCMNeissl(polSS4X(t), polSS4Y(t));
}
planPolTag +=
    polTagTrOkr(0, 0, OA) +
    polTagTrOkr(-A, B, BC) +
    polTagTrOkr(-A, B, CD) +
    polTagTrCikl(TOCH, TAKT, polSS2X, polSS2Y) +
    polTagTrCikl(TOCH, TAKT, polSS4X, polSS4Y) +
    polTagZvAkt(null, null, polUgGrad(polFI1(T)), OA, 11) +
    polTagZvAkt(polSAX(T), polSAY(T), polUgGrad(polFI2(T)), AB, 11) +
    polTagZvAkt(-A, B, polUgGrad(polFI3B(T)), BC, 11) +
    polTagZvAkt(-A, B, polUgGrad(polFI3D(T)), CD, 11) +
    polTagZvAkt(polSDX(T), polSDY(T), polUgGrad(polFI4(T)), DE, 11) +
    polTagPolzAkt(-A, polSEY(T), 90) +
    polTagShAkt(polSAX(T), polSAY(T)) +
    polTagShAkt(polSBX(T), polSBY(T)) +
    polTagShAkt(polSDX(T), polSDY(T)) +
    polTagShAkt(-A, polSEY(T)) +
    polTagCMAkt(polSS2X(T), polSS2Y(T)) +
    polTagCMAkt(polSS4X(T), polSS4Y(T));
planPol.innerHTML = planPolTag;
zadRisRazm(planPol, null, 14 + polPravKr() - polLevKr(), 39 + polVerhKr() - polNizhKr(), 0, 0);
