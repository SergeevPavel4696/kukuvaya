import {
    pol1,
    pol1_1, pol1_2, pol1_3, pol1_4, pol1_5, pol1_6, pol1_7, polKinParu, polPlanPolozheniy,
    polPostrCentrMassNaOtrezke, polPostrKrivuyuTraektorii, polPostrOkruzhnostTraektorii,
    polPostrOtrezok,
    polPostrOtrezokNaTraektoriyu, polPostrOtrezokTraektorii,
    polPostrPryamuyuTraektorii,
    polPostrTochku,
    polPovtoritDeistviya, polPodpisRisunka, polStrukturnuyuGruppu, polZvenoKrivoship, polZvenoPolzun, polZvenoShatun, polZvenoStoiku
} from "../pol-tag-1struk.js";
import {gr1, gr2, mehanismInter, nach} from "./ris.js";
import {elNaStr} from "../../../scripts/utils.js";
import {aktInterPu, polUgGrad} from "../utils.js";
import {
    polFI1,
    polFI2,
    polFI4,
    polLevKr, polNizhKr, polPravKr,
    polSAX,
    polSAY,
    polSBX,
    polSBY,
    polSCX, polSCY, polSS2X, polSS2Y, polSS4X, polSS4Y,
    polVerhKr
} from "./analiz.js";
import {polTokAB, polTokAC, polTokK, polTokOA, polTokTakt, polTokToch, polTekVr} from "./local_storage.js";
import {polTagPer} from "../../../scripts/utils-svg-geom.js";
import {
    polTagTrCikl, polTagCMAkt,
    polTagCMNeissl,
    polTagOpSk,
    polTagOpVr, polTagPolzAkt,
    polTagPolzNeissl, polTagShAkt,
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
        polPostrPryamuyuTraektorii("postr_tr_3", 3),
        polPostrOtrezokNaTraektoriyu("postr_AB", "A", 3, "AB"),
        polPostrCentrMassNaOtrezke("postr_S2", "AB", 2),
        polPostrPryamuyuTraektorii("postr_tr_5", 5),
        polPostrOtrezokNaTraektoriyu("postr_AC", "A", 5, "AC"),
        polPostrCentrMassNaOtrezke("postr_S4", "AC", 4),
        polPovtoritDeistviya(),
        polPostrOkruzhnostTraektorii("postr_tr_A", "O", "A"),
        polPostrOtrezokTraektorii("postr_tr_B", "B"),
        polPostrOtrezokTraektorii("postr_tr_C", "C"),
        polPostrKrivuyuTraektorii("postr_tr_S2", 2),
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
        polKinParu("para_0-1", 0,  1, "O", "вр"),
        polKinParu("para_1-2", 1, 2, "A", "вр"),
        polKinParu("para_2-3", 2, 3, "B", "вр"),
        polKinParu("para_0-3", 0, 3, "B", "по"),
        polKinParu("para_1-4", 1, 4, "A", "вр"),
        polKinParu("para_4-5", 4, 5, "C", "вр"),
        polKinParu("para_0-5", 0, 5, "C", "по", true)
    ]) +
    pol1_4() +
    pol1_5([
        polPodpisRisunka(2, nach),
        polStrukturnuyuGruppu("gr_1",  1, 221),
        polPodpisRisunka(3, gr1),
        polStrukturnuyuGruppu("gr_2", 2, 221),
        polPodpisRisunka(4, gr2)
    ]) +
    pol1_6() +
    pol1_7();
content.innerHTML = contentTag;


//Элементы рисунка.
const mehRis = elNaStr("meh_ris"), st1 = elNaStr("st_1"), st3 = elNaStr("st_3"), st5 = elNaStr("st_5"),
    shO = elNaStr("sh_O"), shA = elNaStr("sh_A"), shB = elNaStr("sh_B"), shC = elNaStr("sh_C"), zv1 = elNaStr("zv_OA"),
    zv2 = elNaStr("zv_AB"), zv3 = elNaStr("pol3"), zv4 = elNaStr("zv_AC"), zv5 = elNaStr("pol5"), s2 = elNaStr("S2"),
    s4 = elNaStr("S4"), trA = elNaStr("tr_A"), trS2 = elNaStr("tr_S2"), trB = elNaStr("tr_B"), trS4 = elNaStr("tr_S4"),
    trC = elNaStr("tr_C");


//Активировать пункты на странице.
aktInterPu(mehRis, [
    ["postr_O", [shO]],
    ["postr_OA", [zv1, shO, shA]],
    ["postr_tr_3", [trB]],
    ["postr_AB", [zv2, shA, shB]],
    ["postr_S2", [s2]],
    ["postr_tr_5", [trC]],
    ["postr_AC", [zv4, shA, shC]],
    ["postr_S4", [s4]],
    ["postr_tr_A", [trA]],
    ["postr_tr_S2", [trS2]],
    ["postr_tr_S4", [trS4]],
    ["zv_0", [st1, st3, st5, shO]],
    ["zv_1", [zv1, shO, shA]],
    ["zv_2", [zv2, shA, shB, s2]],
    ["zv_3", [zv3, shB]],
    ["zv_4", [zv4, shA, shC, s4]],
    ["zv_5", [zv5, shC]],
    ["para_0-1", [st1, zv1, shO]],
    ["para_1-2", [zv1, zv2, shA, s2]],
    ["para_2-3", [zv2, zv3, shB, s2]],
    ["para_0-3", [st3, zv3]],
    ["para_1-4", [zv1, zv4, shA, s4]],
    ["para_4-5", [zv4, zv5, shC, s4]],
    ["para_0-5", [st5, zv5]],
    ["gr_0", [st1, zv1, shO]],
    ["gr_1", [st3, zv2, zv3, shA, shB, s2]],
    ["gr_2", [st5, zv4, zv5, shA, shC, s4]],
    ["f-gr_0", [st1, zv1, shO]],
    ["f-gr_1", [st3, zv2, zv3, shA, shB, s2]],
    ["f-gr_2", [st5, zv4, zv5, shA, shC, s4]]
]);


const T = polTekVr();
const TAKT = polTokTakt();
const KOL = polTokK();
const TOCH = polTokToch();
const OA = polTokOA(), AB = polTokAB(), AC = polTokAC();
const planPol = elNaStr("plan-pol");


//Добавить план положений на страницу.
let planPolTag =
    "<g " + polTagPer(35 - polLevKr(), -polVerhKr() - 35) + ">" +
    polTagOpVr(null, null, null, null, null) +
    polTagOpSk(-35.5, 35.5, 135, OA + AB, false, false, null, null) +
    polTagOpSk(35.5, 35.5, 45, OA + AC, false, false, null, null);
for (let i = 0; i < KOL; i++) {
    const t = i * TAKT / KOL;
    planPolTag +=
        polTagZvNeissl(null, null, polUgGrad(polFI1(t)), OA, 11) +
        polTagZvNeissl(polSAX(t), polSAY(t), polUgGrad(polFI2(t)), AB, 11) +
        polTagPolzNeissl(polSBX(t), polSBY(t), 135) +
        polTagZvNeissl(polSAX(t), polSAY(t), polUgGrad(polFI4(t)), AC, 11) +
        polTagPolzNeissl(polSCX(t), polSCY(t), 45) +
        polTagShNeissl(polSAX(t), polSAY(t)) +
        polTagShNeissl(polSBX(t), polSBY(t)) +
        polTagShNeissl(polSCX(t), polSCY(t)) +
        polTagCMNeissl(polSS2X(t), polSS2Y(t)) +
        polTagCMNeissl(polSS4X(t), polSS4Y(t));
}
planPolTag +=
    polTagTrOkr(0, 0, OA) +
    polTagTrCikl(TOCH, TAKT, polSS2X, polSS2Y) +
    polTagTrCikl(TOCH, TAKT, polSS4X, polSS4Y) +
    polTagZvAkt(null, null, polUgGrad(polFI1(T)), OA, 11) +
    polTagZvAkt(polSAX(T), polSAY(T), polUgGrad(polFI2(T)), AB, 11) +
    polTagPolzAkt(polSBX(T), polSBY(T), 135) +
    polTagZvAkt(polSAX(T), polSAY(T), polUgGrad(polFI4(T)), AC, 11) +
    polTagPolzAkt(polSCX(T), polSCY(T), 45) +
    polTagShAkt(polSAX(T), polSAY(T)) +
    polTagShAkt(polSBX(T), polSBY(T)) +
    polTagShAkt(polSCX(T), polSCY(T)) +
    polTagCMAkt(polSS2X(T), polSS2Y(T)) +
    polTagCMAkt(polSS4X(T), polSS4Y(T)) +
    "</g>";
planPol.innerHTML = planPolTag;
zadRisRazm(planPol, null, 70 + polPravKr() - polLevKr(), 42 + polVerhKr() - polNizhKr(), 0, 0);
