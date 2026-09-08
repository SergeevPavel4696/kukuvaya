import {aktInterPu, polUgGrad} from "../utils.js";
import {
    polDiap5, polFI1, polFI2, polFI3, polFI4, polKr5, polLevKr, polNizhKr, polPravKr, polSAX,
    polSAY, polSBX, polSBXKr, polSBY, polSBYKr, polSDX, polSDXKr, polSDY, polSDYKr, polSFY,
    polSS2X, polSS2Y, polSS3X, polSS3XKr, polSS3Y, polSS3YKr, polSS4X, polSS4Y, polVerhKr
} from "./analiz.js";
import {
    polTekVr, polTokA, polTokAB, polTokB, polTokBC, polTokC, polTokCD,
    polTokCS3, polTokDF, polTokDS4, polTokK, polTokOA, polTokTakt, polTokToch
} from "./local_storage.js";
import {
    polTagTrCikl, polTagCMAkt, polTagCMNeissl, polTagOpSk, polTagOpVr, polTagPolzAkt, polTagPolzNeissl, polTagRaspZv,
    polTagShAkt, polTagShNeissl, polTagTrDug, polTagTrOkr, polTagZvAkt, polTagZvNeissl, zadRisRazm
} from "../meh-svg-utils.js";
import {elNaStr} from "../../../scripts/utils.js";
import {
    pol1_1, pol1, pol1_2, pol1_3, pol1_4, pol1_6, polKinParu, polPlanPolozheniy, polPostrDvaOtrezka,
    polPostrCentrMassNaOtrezke, polPostrDuguTraektorii, polPostrKrivuyuTraektorii, polPostrOkruzhnostTraektorii,
    polPostrOtrezok, polPostrOtrezokNaTraektoriyu, polPostrOtrezokTraektorii, polPostrPryamuyuTraektorii,
    polPostrTochku, polPovtoritDeistviya, polPodpisRisunka, polStrukturnuyuGruppu, polZvenoKoromyslo,
    polZvenoKrivoship, polZvenoPolzun, polZvenoShatun, polZvenoStoiku, pol1_5, polPostrOtrezokObratnoOtTochki, pol1_7
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
        polPostrTochku("postr_C", "C"),
        polPostrDvaOtrezka("postr_AB_BC", "A", "C", "B", "AB", "CB"),
        polPostrCentrMassNaOtrezke("postr_S2", "AB", 2),
        polPostrCentrMassNaOtrezke("postr_S3", "BC", 3),
        polPostrOtrezokObratnoOtTochki("postr_BD", "B", "C", "BD", ),
        polPostrPryamuyuTraektorii("postr_tr_5", 5),
        polPostrOtrezokNaTraektoriyu("postr_DF", "D", 5, "DF"),
        polPostrCentrMassNaOtrezke("postr_S4", "DF", 4),
        polPovtoritDeistviya(),
        polPostrOkruzhnostTraektorii("postr_tr_A", "O", "A"),
        polPostrDuguTraektorii("postr_tr_B", "C", "B"),
        polPostrDuguTraektorii("postr_tr_S3", "C", 3),
        polPostrDuguTraektorii("postr_tr_D", "C", "D"),
        polPostrOtrezokTraektorii("postr_tr_F", "F"),
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
        polKinParu("para_0-1", 0, 1, "O", "вр"),
        polKinParu("para_1-2", 1, 2, "A", "вр"),
        polKinParu("para_2-3", 2, 3, "B", "вр"),
        polKinParu("para_0-3", 0, 3, "C", "вр"),
        polKinParu("para_3-4", 3, 4, "D", "вр"),
        polKinParu("para_4-5", 4, 5, "F", "вр"),
        polKinParu("para_0-5", 0, 5, "F", "по", true)
    ]) +
    pol1_4() +
    pol1_5([
        polPodpisRisunka(2, nach),
        polStrukturnuyuGruppu("gr_1", 1, 221),
        polPodpisRisunka(3, gr1),
        polStrukturnuyuGruppu("gr_2", 2, 222),
        polPodpisRisunka(4, gr2)
    ]) +
    pol1_6() +
    pol1_7();
content.innerHTML = contentTag;


//Элементы рисунка.
const mehRis = elNaStr("meh_ris"), st1 = elNaStr("st_1"), st3 = elNaStr("st_3"), st5 = elNaStr("st_5"),
    shO = elNaStr("sh_O"), shA = elNaStr("sh_A"), shB = elNaStr("sh_B"), shC = elNaStr("sh_C"), shD = elNaStr("sh_D"),
    shF = elNaStr("sh_F"), zv1 = elNaStr("zv_OA"), zv2 = elNaStr("zv_AB"), zv3C = elNaStr("zv_BC"),
    zv3D = elNaStr("zv_BD"), zv4 = elNaStr("zv_DF"), zv5 = elNaStr("pol"), s2 = elNaStr("S2"), s3 = elNaStr("S3"),
    s4 = elNaStr("S4"), trA = elNaStr("tr_A"), trS2 = elNaStr("tr_S2"), trB = elNaStr("tr_B"), trS3 = elNaStr("tr_S3"),
    trD = elNaStr("tr_D"), trS4 = elNaStr("tr_S4"), trF = elNaStr("tr_F"), a = elNaStr("A"), b = elNaStr("B");


//Активировать пункты на странице.
aktInterPu(mehRis, [
    ["postr_O", [shO]],
    ["postr_OA", [zv1, shO, shA]],
    ["postr_C", [shC, a, b]],
    ["postr_AB_BC", [zv2, shA, shB, zv3C, shC]],
    ["postr_S2", [s2]],
    ["postr_S3", [s3]],
    ["postr_BD", [shB, zv3D, shD]],
    ["postr_tr_5", [trF]],
    ["postr_DF", [shD, zv4, shF]],
    ["postr_S4", [s4]],
    ["postr_tr_A", [trA]],
    ["postr_tr_B", [trB]],
    ["postr_tr_S3", [trS3]],
    ["postr_tr_D", [trD]],
    ["postr_tr_S2", [trS2]],
    ["postr_tr_S4", [trS4]],
    ["zv_0", [st1, st3, st5, shO, shC]],
    ["zv_1", [zv1, shO, shA]],
    ["zv_2", [zv2, shA, shB, s2]],
    ["zv_3", [zv3C, zv3D, shB, shC, shD, s3]],
    ["zv_4", [zv4, shD, shF, s4]],
    ["zv_5", [zv5, shF]],
    ["para_0-1", [st1, zv1, shO]],
    ["para_1-2", [zv1, zv2, shA, s2]],
    ["para_2-3", [zv2, zv3C, zv3D, shB, s2, s3]],
    ["para_0-3", [st3, zv3C, zv3D, shC, s3]],
    ["para_3-4", [zv3C, zv3D, zv4, shD, s3, s4]],
    ["para_4-5", [zv4, zv5, shF, s4]],
    ["para_0-5", [st5, zv5]],
    ["gr_0", [st1, zv1, shO]],
    ["gr_1", [st3, zv2, zv3C, zv3D, shA, shB, shC, s2, s3]],
    ["gr_2", [st5, zv4, zv5, shD, shF, s4]],
    ["f-gr_0", [st1, zv1, shO]],
    ["f-gr_1", [st3, zv2, zv3C, zv3D, shA, shB, shC, s2, s3]],
    ["f-gr_2", [st5, zv4, zv5, shD, shF, s4]]
]);


const T = polTekVr();
const TAKT = polTokTakt();
const KOL = polTokK();
const TOCH = polTokToch();
const
    A = polTokA(), B = polTokB(), C = polTokC(), OA = polTokOA(), AB = polTokAB(), BC = polTokBC(), CS3 = polTokCS3(),
    CD = polTokCD(), DF = polTokDF(), DS4 = polTokDS4(), ni5 = polKr5(), ve5 = polKr5(true), di5 = polDiap5();
const planPol = elNaStr("plan-pol");


//Добавить план положений на страницу.
let planPolTag =
    "<g " + polTagPer(7 - polLevKr(), -7 - polVerhKr()) + ">" +
    polTagOpVr(null, null, null, null, null) +
    polTagOpVr(A, B, null, null, null) +
    polTagOpSk(A - C, ni5 - 90, 90, di5 + 90, false, null, null, null);
for (let i = 0; i < KOL; i++) {
    const t = i * TAKT / KOL;
    planPolTag +=
        //Добавить положения звеньев.
        polTagZvNeissl(null, null, polUgGrad(polFI1(t)), OA, 11) +
        polTagZvNeissl(polSAX(t), polSAY(t), polUgGrad(polFI2(t)), AB, 11) +
        polTagZvNeissl(A, B, polUgGrad(polFI3(t)), BC, 11) +
        polTagZvNeissl(polSBX(t), polSBY(t), polUgGrad(polFI3(t)), CD - BC, 11) +
        polTagZvNeissl(polSDX(t), polSDY(t), polUgGrad(polFI4(t)), DF, 11) +
        polTagPolzNeissl(A - C, polSFY(t), 90) +
        polTagShNeissl(polSAX(t), polSAY(t)) +
        polTagShNeissl(polSBX(t), polSBY(t)) +
        polTagShNeissl(polSDX(t), polSDY(t)) +
        polTagShNeissl(A - C, polSFY(t)) +
        polTagCMNeissl(polSS2X(t), polSS2Y(t)) +
        polTagCMNeissl(polSS3X(t), polSS3Y(t)) +
        polTagCMNeissl(polSS4X(t), polSS4Y(t));
}
planPolTag +=
    polTagRaspZv(null, B, null, A) +
    polTagRaspZv(null, null, 90, B) +
    polTagTrOkr(0, 0, OA) +
    polTagTrCikl(TOCH, TAKT, polSS2X, polSS2Y) +
    polTagTrDug(polSBXKr(), polSBYKr(), polSBXKr(true), polSBYKr(true), BC) +
    polTagTrDug(polSS3XKr(), polSS3YKr(), polSS3XKr(true), polSS3YKr(true), CS3) +
    polTagTrDug(polSDXKr(), polSDYKr(), polSDXKr(true), polSDYKr(true), CD) +
    polTagTrCikl(TOCH, TAKT, polSS4X, polSS4Y) +
    polTagZvAkt(null, null, polUgGrad(polFI1(T)), OA, 11) +
    polTagZvAkt(polSAX(T), polSAY(T), polUgGrad(polFI2(T)), AB, 11) +
    polTagZvAkt(A, B, polUgGrad(polFI3(T)), BC, 11) +
    polTagZvAkt(polSBX(T), polSBY(T), polUgGrad(polFI3(T)), CD - BC, 11) +
    polTagZvAkt(polSDX(T), polSDY(T), polUgGrad(polFI4(T)), DF, 11) +
    polTagPolzAkt(A - C, polSFY(T), 90) +
    polTagShAkt(polSAX(T), polSAY(T)) +
    polTagShAkt(polSBX(T), polSBY(T)) +
    polTagShAkt(polSDX(T), polSDY(T)) +
    polTagShAkt(A - C, polSFY(T)) +
    polTagCMAkt(polSS2X(T), polSS2Y(T)) +
    polTagCMAkt(polSS3X(T), polSS3Y(T)) +
    polTagCMAkt(polSS4X(T), polSS4Y(T)) +
    "</g>";
planPol.innerHTML = planPolTag;
zadRisRazm(planPol, null, 35 + polPravKr(true) - polLevKr(), 14 + polVerhKr() - polNizhKr(), 0, 0);
