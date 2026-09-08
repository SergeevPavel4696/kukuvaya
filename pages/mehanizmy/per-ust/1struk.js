import {
    pol1,
    pol1_1,
    pol1_2,
    pol1_3,
    pol1_4,
    pol1_5,
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
    polPostrOtrezokObratnoOtTochki,
    polPostrTochkuNaOtrezke, pol1_7
} from "../pol-tag-1struk.js";
import {nach, gr1, gr2, mehanismInter} from "./ris.js";
import {elNaStr} from "../../../scripts/utils.js";
import {aktInterPu, polUgGrad} from "../utils.js";
import {
    polFI1, polFI2, polFI4, polLevKr, polNizhKr, polPravKr, polSAX, polSAY, polSBX,
    polSCX, polSCY, polSDY, polSS2X, polSS2Y, polSS4X, polSS4Y, polVerhKr
} from "./analiz.js";
import {
    polTekVr, polTokA, polTokAB, polTokAC, polTokCD, polTokK, polTokOA, polTokTakt, polTokToch
} from "./local_storage.js";
import {
    polTagTrCikl, polTagCMAkt, polTagCMNeissl, polTagOpSk, polTagOpVr, polTagPolzAkt, polTagPolzNeissl,
    polTagShAkt, polTagShNeissl, polTagTrOkr, polTagZvAkt, polTagZvNeissl, zadRisRazm
} from "../meh-svg-utils.js";
import {polTagPer} from "../../../scripts/utils-svg-geom.js";


//Добавить разметку страницы.
const content = document.getElementById("content");
let contentTag =
    pol1(mehanismInter) +
    pol1_1([
        polPostrTochku("postr_O", "O"),
        polPostrOtrezok("postr_OA", "O", "OA"),
        polPostrPryamuyuTraektorii("postr_tr_3", 3),
        polPostrOtrezokNaTraektoriyu("postr_AB", "A", 3, "AB"),
        polPostrCentrMassNaOtrezke("postr_S2", "AB", 2),
        polPostrTochkuNaOtrezke("postr_C", "AB", "C"),
        polPostrPryamuyuTraektorii("postr_tr_5", 5),
        polPostrOtrezokNaTraektoriyu("postr_CD", "C", 5, "CD"),
        polPostrCentrMassNaOtrezke("postr_S4", "CD", 4),
        polPovtoritDeistviya(),
        polPostrOkruzhnostTraektorii("postr_tr_A", "O", "A"),
        polPostrOtrezokTraektorii("postr_tr_B", "B"),
        polPostrOtrezokTraektorii("postr_tr_D", "D"),
        polPostrKrivuyuTraektorii("postr_tr_S2", 2),
        polPostrKrivuyuTraektorii("postr_tr_C", "C"),
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
        polKinParu("para_2-4", 2, 4, "C", "вр"),
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


//Элементы рисунка.
const mehRis = elNaStr("meh_ris"), st1 = elNaStr("st_1"), st3 = elNaStr("st_3"), st5 = elNaStr("st_5"),
    shO = elNaStr("sh_O"), shA = elNaStr("sh_A"), shB = elNaStr("sh_B"), shC = elNaStr("sh_C"), shD = elNaStr("sh_D"),
    zv1 = elNaStr("zv_OA"), zv2C = elNaStr("zv_AC"), zv2B = elNaStr("zv_CB"), zv3 = elNaStr("pol3"),
    zv4 = elNaStr("zv_CD"), zv5 = elNaStr("pol5"), s2 = elNaStr("S2"), s4 = elNaStr("S4"), trA = elNaStr("tr_A"),
    trS2 = elNaStr("tr_S2"), trB = elNaStr("tr_B"), trC = elNaStr("tr_C"), trS4 = elNaStr("tr_S4"),
    trD = elNaStr("tr_D");


//Активировать пункты на странице.
aktInterPu(mehRis, [
    ["postr_O", [shO]],
    ["postr_OA", [zv1, shO, shA]],
    ["postr_tr_3", [trB]],
    ["postr_AB", [zv2C, zv2B, shA, shC, shB]],
    ["postr_S2", [s2]],
    ["postr_C", [shC]],
    ["postr_tr_5", [trD]],
    ["postr_CD", [zv4, shC, shD]],
    ["postr_S4", [s4]],
    ["postr_tr_A", [trA]],
    ["postr_tr_S2", [trS2]],
    ["postr_tr_C", [trC]],
    ["postr_tr_S4", [trS4]],
    ["zv_0", [st1, st3, st5, shO]],
    ["zv_1", [zv1, shO, shA]],
    ["zv_2", [zv2B, zv2C, shA, shB, shC, s2]],
    ["zv_3", [zv3, shB]],
    ["zv_4", [zv4, shC, shD, s4]],
    ["zv_5", [zv5, shD]],
    ["para_0-1", [st1, zv1, shO]],
    ["para_1-2", [zv1, zv2C, zv2B, shA, shB, shC, s2]],
    ["para_2-3", [zv2C, zv2B, zv3, shB, shC, s2]],
    ["para_0-3", [st3, zv3]],
    ["para_2-4", [zv2C, zv2B, zv4, shC, s2, s4]],
    ["para_4-5", [zv4, zv5, shD, s4]],
    ["para_0-5", [st5, zv5]],
    ["gr_0", [st1, zv1, shO]],
    ["gr_1", [st3, zv2B, zv2C, zv3, shA, shB, shC, s2]],
    ["gr_2", [st5, zv4, zv5, shC, shD, s4]],
    ["f-gr_0", [st1, zv1, shO]],
    ["f-gr_1", [st3, zv2B, zv2C, zv3, shA, shB, shC, s2]],
    ["f-gr_2", [st5, zv4, zv5, shC, shD, s4]]
]);


const T = polTekVr();
const TAKT = polTokTakt();
const KOL = polTokK();
const TOCH = polTokToch();
const OA = polTokOA(), AB = polTokAB(), AC = polTokAC(), CD = polTokCD();
const planPol = elNaStr("plan-pol");


//Добавить план положений на страницу.
let planPolTag =
    "<g " + polTagPer(7 - polLevKr(), -polVerhKr() - 7) + ">" +
    polTagOpVr(null, null, null, null, null) +
    polTagOpSk(polTokOA() + 10, null, null, OA + AB, false, true, null, null) +
    polTagOpSk(polTokA(), 0, -90, OA + CD, false, true, null, null);
for (let i = 0; i < KOL; i++) {
    const t = i * TAKT / KOL;
    planPolTag +=
        polTagZvNeissl(null, null, polUgGrad(polFI1(t)), OA, 11) +
        polTagZvNeissl(polSAX(t), polSAY(t), polUgGrad(polFI2(t)), AC, 11) +
        polTagZvNeissl(polSCX(t), polSCY(t), polUgGrad(polFI2(t)), AB - AC, 11) +
        polTagPolzNeissl(polSBX(t), null, null) +
        polTagZvNeissl(polSCX(t), polSCY(t), polUgGrad(polFI4(t)), CD, 11) +
        polTagPolzNeissl(polTokA(), polSDY(t), 90) +
        polTagShNeissl(polSAX(t), polSAY(t)) +
        polTagShNeissl(polSBX(t), 0) +
        polTagShNeissl(polSCX(t), polSCY(t),) +
        polTagShNeissl(polTokA(), polSDY(t)) +
        polTagCMNeissl(polSS2X(t), polSS2Y(t)) +
        polTagCMNeissl(polSS4X(t), polSS4Y(t));
}
planPolTag +=
    polTagTrOkr(0, 0, OA) +
    polTagTrCikl(TOCH, TAKT, polSS2X, polSS2Y) +
    polTagTrCikl(TOCH, TAKT, polSCX, polSCY) +
    polTagTrCikl(TOCH, TAKT, polSS4X, polSS4Y) +
    polTagZvAkt(null, null, polUgGrad(polFI1(T)), OA, 11) +
    polTagZvAkt(polSAX(T), polSAY(T), polUgGrad(polFI2(T)), AC, 11) +
    polTagZvAkt(polSCX(T), polSCY(T), polUgGrad(polFI2(T)), AB - AC, 11) +
    polTagPolzAkt(polSBX(T), null, null) +
    polTagZvAkt(polSCX(T), polSCY(T), polUgGrad(polFI4(T)), CD, 11) +
    polTagPolzAkt(polTokA(), polSDY(T), 90) +
    polTagShAkt(polSAX(T), polSAY(T)) +
    polTagShAkt(polSBX(T), null) +
    polTagShAkt(polSCX(T), polSCY(T)) +
    polTagShAkt(polTokA(), polSDY(T)) +
    polTagCMAkt(polSS2X(T), polSS2Y(T)) +
    polTagCMAkt(polSS4X(T), polSS4Y(T));
planPol.innerHTML = planPolTag;
zadRisRazm(planPol, null, 39 + polPravKr() - polLevKr(), 39 + polVerhKr() - polNizhKr(), 0, 0);
