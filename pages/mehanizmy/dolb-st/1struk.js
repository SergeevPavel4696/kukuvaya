import {aktInterPu, Pi, polUgGrad} from "../utils.js";
import {
    polABdl, polFI1, polFI2, polFI3, polFI4, polLevKr, polNizhKr, polPravKr,
    polSAX, polSAY, polSCX, polSCY, polSDY, polSS4X, polSS4Y, polVerhKr
} from "./analiz.js";
import {
    polTekVr, polTokA, polTokB, polTokBC, polTokCD, polTokK, polTokOA, polTokOB,
    polTokTakt, polTokToch, polTokY1, polTokY2, polTokZv5Y1, polTokZv5Y2
} from "./local_storage.js";
import {
    polTagTrCikl, polTagCMAkt, polTagCMNeissl, polTagOpVr, polTagPolzAkt, polTagPolzNeissl, polTagRaspZv,
    polTagShAkt, polTagShNeissl, polTagTrOkr, polTagZvAkt, polTagZvNeissl, zadRisRazm, polTagOpSk1
} from "../meh-svg-utils.js";
import {elNaStr} from "../../../scripts/utils.js";
import {
    pol1_1, pol1, pol1_2, pol1_3, pol1_4, pol1_6, polKinParu, polPlanPolozheniy, polPostrCentrMassNaOtrezke,
    polPostrKrivuyuTraektorii, polPostrOkruzhnostTraektorii, polPostrOtrezok, polPostrOtrezokNaTraektoriyu,
    polPostrPryamuyuTraektorii, polPostrTochku, polPovtoritDeistviya, polPodpisRisunka, polStrukturnuyuGruppu,
    polZvenoKrivoship, polZvenoPolzun, polZvenoShatun, polZvenoStoiku, pol1_5, pol1_7, polPostrOtrezokVPolzun,
    polPostrOtrezokObratnoOtTochki, polZvenoKamen
} from "../pol-tag-1struk.js";
import {mehanismInter, nach, gr1, gr2} from "./ris.js";
import {polTagPer} from "../../../scripts/utils-svg-geom.js";


//Добавить разметку страницы.
const content = document.getElementById("content");
let contentTag =
    pol1(mehanismInter) +
    pol1_1([
        polPostrTochku("postr_O", "O"),
        polPostrOtrezok("postr_OA", "O", "OA"),
        polPostrTochku("postr_B", "B"),
        polPostrOtrezokVPolzun("postr_BA", "B", "A", 2),
        polPostrOtrezokObratnoOtTochki("postr_BC", "B", "A", "BC") +
        polPostrPryamuyuTraektorii("postr_tr_5", 5),
        polPostrOtrezokNaTraektoriyu("postr_CD", "C", 5, "CD"),
        polPostrCentrMassNaOtrezke("postr_S4", "CD", 4),
        polPovtoritDeistviya(),
        polPostrOkruzhnostTraektorii("postr_tr_A", "O", "A"),
        polPostrOkruzhnostTraektorii("postr_tr_C", "B", "C"),
        polPostrKrivuyuTraektorii("postr_tr_S4", 4, true),
        polPlanPolozheniy()
    ]) +
    pol1_2([
        polZvenoStoiku("zv_0"),
        polZvenoKrivoship("zv_1", 1),
        polZvenoKamen("zv_2", 2),
        polZvenoKrivoship("zv_3", 3),
        polZvenoShatun("zv_4", 4),
        polZvenoPolzun("zv_5", 5, true)
    ]) +
    pol1_3([
        polKinParu("para_0-1", 0, 1, "O", "вр"),
        polKinParu("para_1-2", 1, 2, "A", "вр"),
        polKinParu("para_2-3", 2, 3, "A", "по"),
        polKinParu("para_0-3", 0, 3, "B", "вр"),
        polKinParu("para_3-4", 3, 4, "C", "вр"),
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
const
    mehRis = elNaStr("meh_ris"), st1 = elNaStr("st_1"), st3 = elNaStr("st_3"), st5y1 = elNaStr("st_5y1"),
    st5y2 = elNaStr("st_5y2"), shO = elNaStr("sh_O"), shA = elNaStr("sh_A"), shB = elNaStr("sh_B"),
    shC = elNaStr("sh_C"), shD = elNaStr("sh_D"), zv1 = elNaStr("zv_OA"), zv2 = elNaStr("pol2"),
    zv3A = elNaStr("zv_AB"), zv3C = elNaStr("zv_BC"), zv4 = elNaStr("zv_CD"), zv5D = elNaStr("zv_5D"),
    zv5Y = elNaStr("zv_5Y"), zv5B1 = elNaStr("zv_5B1"), zv5B2 = elNaStr("zv_5B2"), zv5B3 = elNaStr("zv_5B3"),
    s4 = elNaStr("S4"), trA = elNaStr("tr_A"), trC = elNaStr("tr_C"), trS4 = elNaStr("tr_S4"),
    trB = elNaStr("tr_B"), trD = elNaStr("tr_D");


//Активировать пункты на странице.
aktInterPu(mehRis, [
    ["postr_O", [shO]],
    ["postr_OA", [zv1, shO, shA]],
    ["postr_B", [trB, shB]],
    ["postr_BA", [zv3A, shB, shA]],
    ["postr_BC", [zv3C, shB, shC]],
    ["postr_tr_5", [trD]],
    ["postr_CD", [zv4, shC, shD]],
    ["postr_S4", [s4]],
    ["postr_tr_A", [trA]],
    ["postr_tr_C", [trC]],
    ["postr_tr_S4", [trS4]],
    ["zv_0", [st1, st3, st5y1, st5y2, shO, shB]],
    ["zv_1", [zv1, shO, shA]],
    ["zv_2", [zv2, shA]],
    ["zv_3", [zv3A, zv3C, shB, shC]],
    ["zv_4", [zv4, shC, shD, s4]],
    ["zv_5", [zv5D, zv5Y, zv5B1, zv5B2, zv5B3, shD]],
    ["para_0-1", [st1, zv1, shO]],
    ["para_1-2", [zv1, zv2, shA]],
    ["para_2-3", [zv2, zv3A, zv3C]],
    ["para_0-3", [st3, zv3A, zv3C, shB]],
    ["para_3-4", [zv3A, zv3C, zv4, shC, s4]],
    ["para_4-5", [zv4, zv5D, zv5Y, zv5B1, zv5B2, zv5B3, shD, s4]],
    ["para_0-5", [st5y1, st5y2, zv5D, zv5Y, zv5B1, zv5B2, zv5B3]],
    ["gr_0", [st1, zv1, shO]],
    ["gr_1", [st3, zv2, zv3A, zv3C, shA, shB]],
    ["gr_2", [st5y1, st5y2, zv4, zv5D, zv5Y, zv5B1, zv5B2, zv5B3, shC, shD, s4]],
    ["f-gr_0", [st1, zv1, shO]],
    ["f-gr_1", [st3, zv2, zv3A, zv3C, shA, shB]],
    ["f-gr_2", [st5y1, st5y2, zv4, zv5D, zv5Y, zv5B1, zv5B2, zv5B3, shC, shD, s4]]
]);


const T = polTekVr();
const TAKT = polTokTakt();
const KOL = polTokK();
const TOCH = polTokToch();
const OA = polTokOA(), OB = polTokOB(), BC = polTokBC(), CD = polTokCD(), A = polTokA(),
    Y1 = polTokY1(), Y2 = polTokY2(), zv5Y1 = polTokZv5Y1(), zv5Y2 = polTokZv5Y2();
const planPol = elNaStr("plan-pol");


//Добавить план положений на страницу.
let planPolTag =
    "<g " + polTagPer(50 - polLevKr(), -50 - polVerhKr()) + ">" +
    polTagOpVr(null, null, null, null, null) +
    polTagOpVr(OB, null, null, null, null) +
    polTagOpSk1(OB - A, -Y1, 90, null) +
    polTagOpSk1(OB - A, -Y2, 270, null);
for (let i = 0; i < KOL; i++) {
    const t = i * TAKT / KOL;
    planPolTag +=
        polTagZvNeissl(null, null, polUgGrad(polFI1(t)), OA, 11) +
        polTagPolzNeissl(polSAX(t), polSAY(t), polUgGrad(polFI2(t))) +
        polTagZvNeissl(OB, null, polUgGrad(polFI3(t)), BC, 11) +
        polTagZvNeissl(OB, null, polUgGrad(polFI3(t) + Pi), polABdl(t), 14) +
        polTagZvNeissl(polSAX(t), polSAY(t), polUgGrad(polFI3(t) + Pi), 50, 42) +
        polTagZvNeissl(polSCX(t), polSCY(t), polUgGrad(polFI4(t)), CD, 11) +
        polTagZvNeissl(OB, polSDY(t), 180, A, 12) +
        polTagZvNeissl(OB - A, polSDY(t), 90, zv5Y1, 22) +
        polTagZvNeissl(OB - A, polSDY(t), -90, zv5Y2, 22) +
        polTagZvNeissl(OB - A, polSDY(t) - polTokZv5Y2(), 180, polTokB() - polTokA(), 22) +
        polTagShNeissl(polSAX(t), polSAY(t)) +
        polTagShNeissl(polSCX(t), polSCY(t)) +
        polTagShNeissl(OB, polSDY(t)) +
        polTagCMNeissl(polSS4X(t), polSS4Y(t));
}
planPolTag +=
    polTagRaspZv(null, null, null, OB) +
    polTagTrOkr(0, 0, OA) +
    polTagTrOkr(OB, 0, BC) +
    polTagTrCikl(TOCH, TAKT, polSS4X, polSS4Y) +
    polTagZvAkt(null, null, polUgGrad(polFI1(T)), OA, 11) +
    polTagPolzAkt(polSAX(T), polSAY(T), polUgGrad(polFI2(T))) +
    polTagZvAkt(OB, null, polUgGrad(polFI3(T)), BC, 11) +
    polTagZvAkt(OB, null, polUgGrad(polFI3(T) + Pi), polABdl(T), 14) +
    polTagZvAkt(polSAX(T), polSAY(T), polUgGrad(polFI3(T) + Pi), 50, 41) +
    polTagZvAkt(polSCX(T), polSCY(T), polUgGrad(polFI4(T)), CD, 11) +
    polTagZvAkt(OB, polSDY(T), 180, A, 12) +
    polTagZvAkt(OB - A, polSDY(T), 90, zv5Y1, 22) +
    polTagZvAkt(OB - A, polSDY(T), -90, zv5Y2, 22) +
    polTagZvAkt(OB - A, polSDY(T) - polTokZv5Y2(), 180, polTokB() - polTokA(), 32) +
    polTagShAkt(polSAX(T), polSAY(T)) +
    polTagShAkt(polSCX(T), polSCY(T)) +
    polTagShAkt(OB, polSDY(T)) +
    polTagCMAkt(polSS4X(T), polSS4Y(T)) +
    "</g>";
planPol.innerHTML = planPolTag;
zadRisRazm(planPol, null, 57 + polPravKr(true) - polLevKr(), 51 + polVerhKr() - polNizhKr(), 0, 0);
