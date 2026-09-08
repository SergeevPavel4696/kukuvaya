import {
    pol1_1,
    pol1,
    pol1_2,
    pol1_3,
    pol1_4,
    pol1_6,
    polKinParu,
    polPlanPolozheniy,
    polPostrCentrMassNaOtrezke,
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
    polZvenoKrivoship,
    polZvenoPolzun,
    polZvenoShatun,
    polZvenoStoiku,
    pol1_5,
    pol1_7
} from "../pol-tag-1struk.js";
import {elNaStr} from "../../../scripts/utils.js";
import {aktInterPu, polUgGrad} from "../utils.js";
import {
    polFI1A, polFI1C, polFI2, polFI4, polLevKr, polNizhKr, polPravKr, polSAX, polSAY, polSBX,
    polSBY, polSCX, polSCY, polSDX, polSDY, polSS2X, polSS2Y, polSS4X, polSS4Y, polVerhKr
} from "./analiz.js";
import {polTekVr, polTokAB, polTokCD, polTokK, polTokOA, polTokOC, polTokTakt, polTokToch} from "./local_storage.js";
import {
    polTagTrCikl, polTagCMAkt, polTagCMNeissl, polTagOpSk, polTagOpVr, polTagPolzAkt, polTagPolzNeissl,
    polTagShAkt, polTagShNeissl, polTagTrOkr, polTagZvAkt, polTagZvNeissl, zadRisRazm
} from "../meh-svg-utils.js";
import {polTagPer} from "../../../scripts/utils-svg-geom.js";
import {gr1, gr2, mehanismInter, nach} from "./ris.js";


//Добавить разметку страницы.
const content = document.getElementById("content");
let contentTag =
    pol1(mehanismInter) +
    pol1_1([
        polPostrTochku("postr_O", "O"),
        polPostrOtrezok("postr_OA", "O", "OA"),
        polPostrPryamuyuTraektorii("postr_tr_3", 3),
        polPostrOtrezokNaTraektoriyu("postr_AB", "A", 3, "AB"),
        polPostrCentrMassNaOtrezke("postr_S2", "AB", 3),
        polPostrOtrezok("postr_OC", "O", "OC"),
        polPostrPryamuyuTraektorii("postr_tr_5", 5),
        polPostrOtrezokNaTraektoriyu("postr_CD", "C", 5, "CD"),
        polPostrCentrMassNaOtrezke("postr_S4", "CD", 4),
        polPovtoritDeistviya(),
        polPostrOkruzhnostTraektorii("postr_tr_A", "O", "A"),
        polPostrOtrezokTraektorii("postr_tr_B", "B"),
        polPostrKrivuyuTraektorii("postr_tr_S2", 2),
        polPostrOkruzhnostTraektorii("postr_tr_C", "O", "C"),
        polPostrOtrezokTraektorii("postr_tr_D", "D"),
        polPostrKrivuyuTraektorii("postr_tr_S4", 4, true),
        polPlanPolozheniy()
    ]) +
    pol1_2([
        polZvenoStoiku("zv_0"),
        polZvenoKrivoship("zv_1", 1),
        polZvenoShatun("zv_2", 2),
        polZvenoPolzun("zv_3", 3),
        polZvenoShatun("zv_4", 4),
        polZvenoPolzun("zv_5", 5, true)
    ]) +
    pol1_3([
        polKinParu("para_0-1", 0, 1, "O", "вр"),
        polKinParu("para_1-2", 1, 2, "A", "вр"),
        polKinParu("para_2-3", 2, 3, "B", "вр"),
        polKinParu("para_0-3", 0, 3, "B", "по"),
        polKinParu("para_1-4", 1, 4, "C", "вр"),
        polKinParu("para_4-5", 4, 5, "D", "вр"),
        polKinParu("para_0-5", 0, 5, "D", "по", true)
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


//Рисунок механизма.
const mehRis = elNaStr("meh_ris"), st1 = elNaStr("st_1"), st3 = elNaStr("st_3"), st5 = elNaStr("st_5"),
    shO = elNaStr("sh_O"), shA = elNaStr("sh_A"), shB = elNaStr("sh_B"), shC = elNaStr("sh_C"), shD = elNaStr("sh_D"),
    zv1a = elNaStr("zv_OA"), zv2 = elNaStr("zv_AB"), zv3 = elNaStr("pol_3"), zv1c = elNaStr("zv_OC"),
    zv4 = elNaStr("zv_CD"), zv5 = elNaStr("pol_5"), s2 = elNaStr("S2"), s4 = elNaStr("S4"), trAC = elNaStr("tr_AC"),
    trS2 = elNaStr("tr_S2"), trB = elNaStr("tr_B"), trS4 = elNaStr("tr_S4"), trD = elNaStr("tr_D");


//Активировать пункты на странице.
aktInterPu(mehRis, [
    ["postr_O", [shO]],
    ["postr_OA", [zv1a, shO, shA]],
    ["postr_tr_3", [trB]],
    ["postr_AB", [zv2, shA, shB]],
    ["postr_S2", [s2]],
    ["postr_OC", [zv1c, shO, shC]],
    ["postr_tr_5", [trD]],
    ["postr_CD", [zv4, shC, shD]],
    ["postr_S4", [s4]],
    ["postr_tr_A", [trAC]],
    ["postr_tr_C", [trAC]],
    ["postr_tr_S2", [trS2]],
    ["postr_tr_S4", [trS4]],
    ["zv_0", [st1, st3, st5, shO]],
    ["zv_1", [zv1a, zv1c, shO, shA, shC]],
    ["zv_2", [zv2, shA, shB, s2]],
    ["zv_3", [zv3, shB]],
    ["zv_4", [zv4, shC, shD, s4]],
    ["zv_5", [zv5, shD]],
    ["para_0-1", [st1, zv1a, zv1c, shO]],
    ["para_1-2", [zv1a, zv1c, zv2, shA, s2]],
    ["para_2-3", [zv2, zv3, shB, s2]],
    ["para_0-3", [st3, zv3]],
    ["para_1-4", [zv1a, zv1c, zv4, shC, s4]],
    ["para_4-5", [zv4, zv5, shD, s4]],
    ["para_0-5", [st5, zv5]],
    ["gr_0", [st1, zv1a, zv1c, shO]],
    ["gr_1", [st3, zv2, zv3, shA, shB, s2]],
    ["gr_2", [st5, zv4, zv5, shC, shD, s4]],
    ["f-gr_0", [st1, zv1a, zv1c, shO]],
    ["f-gr_1", [st3, zv2, zv3, shA, shB, s2]],
    ["f-gr_2", [st5, zv4, zv5, shC, shD, s4]]
]);


const T = polTekVr();
const TAKT = polTokTakt();
const KOL = polTokK();
const TOCH = polTokToch();
const OA = polTokOA(), AB = polTokAB(), OC = polTokOC(), CD = polTokCD();
const planPol = elNaStr("plan-pol");


//Добавить план положений на страницу.
let planPolTag =
    "<g " + polTagPer(32 - polLevKr(), -7 - polVerhKr()) + ">" +
    polTagOpVr(null, null, null, null, null) +
    polTagOpSk(-75, null, 180, OA + AB, false, false, null, null) +
    polTagOpSk(75, null, null, OC + CD, false, false, null, null);
for (let i = 0; i < KOL; i++) {
    const t = i * 2 * TAKT / KOL;
    planPolTag +=
        polTagZvNeissl(null, null, polUgGrad(polFI1A(t)), OA, 11) +
        polTagZvNeissl(null, null, polUgGrad(polFI1C(t)), OC, 11) +
        polTagZvNeissl(polSAX(t), polSAY(t), polUgGrad(polFI2(t)), AB, 11) +
        polTagPolzNeissl(polSBX(t), null, null) +
        polTagZvNeissl(polSCX(t), polSCY(t), polUgGrad(polFI4(t)), CD, 11) +
        polTagPolzNeissl(polSDX(t), null, null) +
        polTagShNeissl(polSAX(t), polSAY(t)) +
        polTagShNeissl(polSBX(t), polSBY(t)) +
        polTagShNeissl(polSCX(t), polSCY(t)) +
        polTagShNeissl(polSDX(t), polSDY(t)) +
        polTagCMNeissl(polSS2X(t), polSS2Y(t)) +
        polTagCMNeissl(polSS4X(t), polSS4Y(t));
}
planPolTag +=
    polTagTrOkr(0, 0, OA) +
    polTagTrOkr(0, 0, OC) +
    polTagTrCikl(TOCH, TAKT, polSS2X, polSS2Y) +
    polTagTrCikl(TOCH, TAKT, polSS4X, polSS4Y) +
    polTagZvAkt(null, null, polUgGrad(polFI1A(T)), OA, 11) +
    polTagZvAkt(polSAX(T), polSAY(T), polUgGrad(polFI2(T)), AB, 11) +
    polTagPolzAkt(polSBX(T), null, null) +
    polTagShAkt(polSAX(T), polSAY(T)) +
    polTagShAkt(polSBX(T), polSBY(T)) +
    polTagZvAkt(null, null, polUgGrad(polFI1C(T)), OC, 11) +
    polTagZvAkt(polSCX(T), polSCY(T), polUgGrad(polFI4(T)), CD, 11) +
    polTagPolzAkt(polSDX(T), null, 180) +
    polTagShAkt(polSCX(T), polSCY(T)) +
    polTagShAkt(polSDX(T), polSDY(T)) +
    polTagCMAkt(polSS2X(T), polSS2Y(T)) +
    polTagCMAkt(polSS4X(T), polSS4Y(T)) +
    "</g>";
planPol.innerHTML = planPolTag;
zadRisRazm(planPol, null, 64 + polPravKr() - polLevKr(), 14 + polVerhKr() - polNizhKr())
