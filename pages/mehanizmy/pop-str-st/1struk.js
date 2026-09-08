import {aktInterPu, polUgGrad} from "../utils.js";
import {
    polABdl, polDl5L1, polDl5L2, polFI1, polFI2, polFI3, polFI4, polKrD, polLevKr, polNizhKr,
    polPravKr, polSAX, polSAY, polSCX, polSCXLevKr, polSCXPravKr, polSCY, polSCYKr, polSDX, polSS3X,
    polSS3XLevKr, polSS3XPravKr, polSS3Y, polSS3YKr, polSS4X, polSS4Y, polSS5X, polVerhKr
} from "./analiz.js";
import {
    polTekVr, polTokH1, polTokH2, polTokBC, polTokCD, polTokK, polTokOA,
    polTokOB, polTokTakt, polTokToch, polTokL1, polTokL2, polTokBS3
} from "./local_storage.js";
import {
    polTagTrCikl, polTagCMAkt, polTagCMNeissl, polTagOpVr, polTagPolzAkt, polTagPolzNeissl, polTagRaspZv,
    polTagShAkt, polTagShNeissl, polTagTrOkr, polTagZvAkt, polTagZvNeissl, zadRisRazm, polTagOpSk1, polTagTrDug
} from "../meh-svg-utils.js";
import {elNaStr} from "../../../scripts/utils.js";
import {
    pol1_1, pol1, pol1_2, pol1_3, pol1_4, pol1_6, polKinParu, polPlanPolozheniy, polPostrCentrMassNaOtrezke,
    polPostrKrivuyuTraektorii, polPostrOkruzhnostTraektorii, polPostrOtrezok, polPostrOtrezokNaTraektoriyu,
    polPostrPryamuyuTraektorii, polPostrTochku, polPovtoritDeistviya, polPodpisRisunka, polStrukturnuyuGruppu,
    polZvenoKrivoship, polZvenoPolzun, polZvenoShatun, polZvenoStoiku, pol1_5, pol1_7, polPostrOtrezokVPolzun,
    polZvenoKamen, polPostrOtrezokIzPolzuna, polPostrDuguTraektorii, polPostrCentrMassNaZvene, polZvenoKoromyslo
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
        polPostrOtrezokIzPolzuna("postr_AC", "A", "B", 2, "AC") +
        polPostrCentrMassNaOtrezke("postr_S3", "BC", 3),
        polPostrPryamuyuTraektorii("postr_tr_5", 5),
        polPostrOtrezokNaTraektoriyu("postr_CD", "C", 5, "CD"),
        polPostrCentrMassNaOtrezke("postr_S4", "CD", 4),
        polPostrCentrMassNaZvene("postr_S5", 5),
        polPovtoritDeistviya(),
        polPostrOkruzhnostTraektorii("postr_tr_A", "O", "A"),
        polPostrDuguTraektorii("postr_tr_S3", "B", 3),
        polPostrDuguTraektorii("postr_tr_C", "B", "C"),
        polPostrKrivuyuTraektorii("postr_tr_S4", 4, true),
        polPlanPolozheniy()
    ]) +
    pol1_2([
        polZvenoStoiku("zv_0"),
        polZvenoKrivoship("zv_1", 1),
        polZvenoKamen("zv_2", 2),
        polZvenoKoromyslo("zv_3", 3),
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
    mehRis = elNaStr("meh_ris"), st1 = elNaStr("st_1"), st3 = elNaStr("st_3"), st5l1 = elNaStr("st_5l1"),
    st5l2 = elNaStr("st_5l2"), shO = elNaStr("sh_O"), shA = elNaStr("sh_A"), shB = elNaStr("sh_B"),
    shC = elNaStr("sh_C"), shD = elNaStr("sh_D"), zv1 = elNaStr("zv_OA"), zv2 = elNaStr("pol2"),
    zv3B = elNaStr("zv_BA"), zv3A = elNaStr("zv_AC"), s3 = elNaStr("S3"), zv4 = elNaStr("zv_CD"),
    s4 = elNaStr("S4"), zv5L1 = elNaStr("zv_5L1"), zv5L2 = elNaStr("zv_5L2"), zv5H = elNaStr("zv_5H"),
    s5 = elNaStr("S5"), trA = elNaStr("tr_A"), trS3 = elNaStr("tr_S3"), trC = elNaStr("tr_C"),
    trS4 = elNaStr("tr_S4");


//Активировать пункты на странице.
aktInterPu(mehRis, [
    ["postr_O", [shO]],
    ["postr_OA", [zv1, shO, shA]],
    ["postr_B", [shB]],
    ["postr_BA", [zv3B, shB, shA]],
    ["postr_AC", [zv3A, shA, shC]],
    ["postr_S3", [s3]],
    //["postr_tr_5", [trD]],
    ["postr_CD", [zv4, shC, shD]],
    ["postr_S4", [s4]],
    ["postr_S5", [s5]],
    ["postr_tr_A", [trA]],
    ["postr_tr_S3", [trS3]],
    ["postr_tr_C", [trC]],
    ["postr_tr_S4", [trS4]],
    ["zv_0", [st1, st3, st5l1, st5l2, shO, shB]],
    ["zv_1", [zv1, shO, shA]],
    ["zv_2", [zv2, shA]],
    ["zv_3", [zv3B, zv3A, shB, shC]],
    ["zv_4", [zv4, shC, shD, s4]],
    ["zv_5", [zv5L1, zv5L2, zv5H, shD, s5]],
    ["para_0-1", [st1, zv1, shO]],
    ["para_1-2", [zv1, zv2, shA]],
    ["para_2-3", [zv2, zv3B, zv3A, s3]],
    ["para_0-3", [st3, zv3B, zv3A, shB, s3]],
    ["para_3-4", [zv3B, zv3A, zv4, shC, s3, s4]],
    ["para_4-5", [zv4, zv5L1, zv5L2, zv5H, shD, s4, s5]],
    ["para_0-5", [st5l1, st5l2, zv5L1, zv5L2, zv5H, s5]],
    ["gr_0", [st1, zv1, shO]],
    ["gr_1", [st3, zv2, zv3B, zv3A, shA, shB, s3]],
    ["gr_2", [st5l1, st5l2, zv4, zv5L1, zv5L2, zv5H, shC, shD, s4, s5]],
    ["f-gr_0", [st1, zv1, shO]],
    ["f-gr_1", [st3, zv2, zv3B, zv3A, shA, shB, s3]],
    ["f-gr_2", [st5l1, st5l2, zv4, zv5L1, zv5L2, zv5H, shC, shD, s4, s5]]
]);


const T = polTekVr();
const TAKT = polTokTakt();
const KOL = polTokK();
const TOCH = polTokToch();
const OA = polTokOA(), OB = polTokOB(), AB = polABdl(T), BC = polTokBC(), BS3 = polTokBS3(), CD = polTokCD(),
    H1 = polTokH1(), H2 = polTokH2(),
    L1 = polTokL1(), L2 = polTokL2(), zv51 = polDl5L1(), zv52 = polDl5L2();
const planPol = elNaStr("plan-pol");


//Добавить план положений на страницу.
let planPolTag =
    "<g " + polTagPer(-polLevKr(), -polVerhKr()) + ">" +
    polTagOpVr(null, null, null, null, null) +
    polTagOpVr(null, -OB, null, null, null) +
    polTagOpSk1(-L1, H2, 180, null) +
    polTagOpSk1(L2, H2, null, null);
for (let i = 0; i < KOL; i++) {
    const t = i * TAKT / KOL;
    planPolTag +=
        polTagZvNeissl(null, null, polUgGrad(polFI1(t)), OA, 11) +
        polTagPolzNeissl(polSAX(t), polSAY(t), polUgGrad(polFI2(t))) +
        polTagZvNeissl(null, -OB, polUgGrad(polFI3(t)), polABdl(t), 14) +
        polTagZvNeissl(polSAX(t), polSAY(t), polUgGrad(polFI3(t)), BC - polABdl(t), 41) +
        polTagZvNeissl(polSCX(t), polSCY(t), polUgGrad(polFI4(t)), CD, 11) +
        polTagZvNeissl(polSDX(t), H2, 180, zv51, 12) +
        polTagZvNeissl(polSDX(t), H2, null, zv52, 12) +
        polTagZvNeissl(polSDX(t) + polTokL2() - polKrD(true), H2, 270, H1, 22) +
        polTagShNeissl(polSAX(t), polSAY(t)) +
        polTagShNeissl(polSCX(t), polSCY(t)) +
        polTagShNeissl(polSDX(t), H2) +
        polTagCMNeissl(polSS3X(t), polSS3Y(t)) +
        polTagCMNeissl(polSS4X(t), polSS4Y(t)) +
        polTagCMNeissl(polSS5X(t), H2);
}
planPolTag +=
    polTagRaspZv(null, null, 270, OB) +
    polTagTrOkr(0, 0, OA) +
    polTagTrDug(polSCXLevKr(), polSCYKr(), polSCXPravKr(), polSCYKr(), BC) +
    polTagTrDug(polSS3XLevKr(), polSS3YKr(), polSS3XPravKr(), polSS3YKr(), BS3) +
    polTagTrCikl(TOCH, TAKT, polSS4X, polSS4Y) +
    polTagZvAkt(null, null, polUgGrad(polFI1(T)), OA, 11) +
    polTagPolzAkt(polSAX(T), polSAY(T), polUgGrad(polFI2(T))) +
    polTagZvAkt(null, -OB, polUgGrad(polFI3(T)), AB, 14) +
    polTagZvAkt(polSAX(T), polSAY(T), polUgGrad(polFI3(T)), BC - AB, 41) +
    polTagZvAkt(polSCX(T), polSCY(T), polUgGrad(polFI4(T)), CD, 11) +
    polTagZvAkt(polSDX(T), H2, 180, zv51, 12) +
    polTagZvAkt(polSDX(T), H2, null, zv52, 12) +
    polTagZvAkt(polSDX(T) + polTokL2() - polKrD(true), H2, 270, H1, 22) +
    polTagShAkt(polSAX(T), polSAY(T)) +
    polTagShAkt(polSCX(T), polSCY(T)) +
    polTagShAkt(polSDX(T), H2) +
    polTagCMAkt(polSS3X(T), polSS3Y(T)) +
    polTagCMAkt(polSS4X(T), polSS4Y(T)) +
    polTagCMAkt(polSS5X(T), H2) +
    "</g>";
planPol.innerHTML = planPolTag;
zadRisRazm(planPol, null, polPravKr() - polLevKr(), polVerhKr() - polNizhKr(), 0, 0);
