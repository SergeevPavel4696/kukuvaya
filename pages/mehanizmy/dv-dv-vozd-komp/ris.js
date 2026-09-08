import {
    polTagCMIssl, polTagNaprVr, polTagObTochInd, polTagObToch, polTagObZv, polTagOpSk,
    polTagOpVr, polPlSkTag, polPlUskTag, polTagPolzIssl, polTagShIssl, polTagZvIssl, polPlSilTag, polTagObInd
} from "../meh-svg-utils.js";
import {
    polTagKrPu, polTagLom, polTagLom1, polTagOkrPu, polTagOtr, polTagOtrPu, polTagOtrShPu, polTagPr, polTagStrelka
} from "../../../scripts/utils-svg-geom.js";


//Рисунок задания.
export const zadanie =
    "<svg viewBox=\"0 0 230 455\" width=\"230\" height=\"455\" class=\"risunok\">" +
    "<g transform=\"translate(115,394)\">" +
    "<!--Опора вращения-->" +
    polTagOpVr(null,null,null,null,null) +
    "<!--Опоры скольжения-->" +
    polTagOpSk(3, 107.2281, 90, 200, true, false, null) +
    polTagOpSk(-3, 107.2281, 90, 100, true, true, null) +
    "<!--Звенья-->" +
    polTagZvIssl(null,null, 30, 100, 11, null) +
    polTagZvIssl(86.6025, 50, 106.7787, 300, 11, null) +
    polTagPolzIssl(null,337.2281, 90, null) +
    polTagZvIssl(null,null, 210, 100, 11, null) +
    polTagZvIssl(-86.6025, -50, 73.2213, 300, 11, null) +
    polTagPolzIssl(null,237.2281, 90, null) +
    "<!--Шарниры-->" +
    polTagShIssl(86.6025, 50, null) +
    polTagShIssl(0, 337.2281, null) +
    polTagShIssl(-86.6025, -50, null) +
    polTagShIssl(0, 237.2281, null) +
    "<!--Центры тяжести-->" +
    polTagCMIssl(57.7350, 145.7427, null) +
    polTagCMIssl(-57.7350, 45.7427, null) +
    "<!--Направление вращения кривошипа-->" +
    polTagNaprVr(null,null, 30, 50, 60, false) +
    "<!--Обозначения-->" +
    polTagObZv(72, 13, 1, 0, -10, -10, -25) +
    polTagObZv(55, 200, 2, 0, -10, -15, 0) +
    polTagObZv(25, 355, 3, 0, -10, -20, 0) +
    polTagObZv(-75, 100, 4, 20, -10, 35, 0) +
    polTagObZv(-45, 255, 5, 20, -10, 40, 0) +
    polTagObTochInd(65, -15, "O,S", 1) +
    polTagObToch(105, 40, "A") +
    polTagObTochInd(85, 140, "S", 2) +
    polTagObTochInd(65, 325, "B,S", 3) +
    polTagObToch(-105, -60, "C") +
    polTagObTochInd(-75, 40, "S", 4) +
    polTagObTochInd(-28, 225, "D,S", 5) +
    polTagObTochInd(35, 65, "φ", 1) +
    polTagOtrShPu(null, -60, 90, 453, "#000", 1, "15 5 2 5", null) +
    "</g>" +
    "</svg>";

//Подвижный механизм.
export const mehanismPodv =
    "<svg id=\"meh_ris\" class=\"risunok\">" +
    "<g id=\"meh_ris-1\">" +
    polTagOpVr(null,null,null,null, "shO_ris") +
    polTagOpSk(null, null, null, 0, false, false, "st3_ris", "tr3_ris") +
    polTagOpSk(null, null, null, 0, false, true, "st5_ris", "tr5_ris") +
    polTagZvIssl(null,null, null, 0, 11, "zv1a_ris") +
    polTagZvIssl(null,null, null, 0, 11, "zv2_ris") +
    polTagPolzIssl(null,null, null, "zv3_ris") +
    polTagZvIssl(null,null, null, 0, 11, "zv1c_ris") +
    polTagZvIssl(null,null, null, 0, 11, "zv4_ris") +
    polTagPolzIssl(null,null, null, "zv5_ris") +
    polTagShIssl(0, 0, "shA_ris") +
    polTagShIssl(0, 0, "shB_ris") +
    polTagShIssl(0, 0, "shC_ris") +
    polTagShIssl(0, 0, "shD_ris") +
    polTagCMIssl(0, 0, "s2_ris") +
    polTagCMIssl(0, 0, "s4_ris") +
    "</g>" +
    "</svg>";

//Механизм с интерактивными элементами.
export const mehanismInter =
    "<svg id=\"meh_ris\" viewBox=\"0 0 214 481\" width=\"214\" height=\"481\" visibility=\"hidden\" " +
    "class=\"risunok-inter\">" +
    polTagPr(null, null, null, 0, 0, 481, 214, "#fff", "#000", 3, null) +
    "<g transform=\"translate(107,374)\">" +
    polTagOpVr(null,null,null,"st_1","sh_O") +
    polTagOpSk(3, 107.2281, 90, 200, false, false, "st_3") +
    polTagOpSk(-3, 107.2281, 90, 100, false, true, "st_5") +
    polTagZvIssl(null,null, 30, 100, 11, "zv_OA") +
    polTagZvIssl(86.6025, 50, 106.7787, 300, 11, "zv_AB") +
    polTagPolzIssl(null,337.2281, 90, "pol_3") +
    polTagZvIssl(null,null, 210, 100, 11, "zv_OC") +
    polTagZvIssl(-86.6025, -50, 73.2213, 300, 11, "zv_CD") +
    polTagPolzIssl(null,237.2281, 90, "pol_5") +
    polTagShIssl(86.6025, 50, "sh_A") +
    polTagShIssl(0, 337.2281, "sh_B") +
    polTagShIssl(-86.6025, -50, "sh_C") +
    polTagShIssl(0, 237.2281, "sh_D") +
    polTagCMIssl(57.7350, 145.7427, "S2") +
    polTagCMIssl(-57.7350, 45.7427, "S4") +
    polTagOkrPu(0, 0, 100, "none", "#000", 2, "15 5 2 5", "tr_AC") +
    polTagOtrPu(null, null, 90, 237.2281, "#000", 2, "15 5 2 5", "tr_B") +
    polTagOtrPu(null, 237.2281, 90, 100, "#000", 2, "15 5 2 5", "tr_D") +
    polTagKrPu("tr_S2S4", "0 -200 4.2 -199.8 8.4 -199.1 12.5 -198 16.6 -196.5 20.6 -194.6 24.5 -192.2 " +
        "28.4 -189.5 32.1 -186.3 35.7 -182.8 39.2 -179 42.5 -174.8 45.6 -170.3 48.6 -165.5 51.4 -160.4 53.9 " +
        "-155.1 56.3 -149.5 58.4 -143.8 60.3 -137.9 62 -131.9 63.4 -125.7 64.6 -119.5 65.5 -113.2 66.1 -106.9 " +
        "66.5 -100.6 66.7 -94.3 66.5 -88 66.1 -81.8 65.5 -75.7 64.6 -69.8 63.4 -63.9 62 -58.3 60.3 -52.8 58.4 " +
        "-47.5 56.3 -42.4 53.9 -37.5 51.4 -32.9 48.6 -28.5 45.6 -24.5 42.5 -20.7 39.2 -17.2 35.7 -14 32.1 -11.1 " +
        "28.4 -8.5 24.5 -6.3 20.6 -4.4 16.6 -2.8 12.5 -1.6 8.4 -0.7 4.2 -0.2 0 0 -4.2 -0.2 -8.4 -0.7 -12.5 -1.6 " +
        "-16.6 -2.8 -20.6 -4.4 -24.5 -6.3 -28.4 -8.5 -32.1 -11.1 -35.7 -14 -39.2 -17.2 -42.5 -20.7 -45.6 -24.5 " +
        "-48.6 -28.5 -51.4 -32.9 -53.9 -37.5 -56.3 -42.4 -58.4 -47.5 -60.3 -52.8 -62 -58.3 -63.4 -63.9 -64.6 " +
        "-69.8 -65.5 -75.7 -66.1 -81.8 -66.5 -88 -66.7 -94.3 -66.5 -100.6 -66.1 -106.9 -65.5 -113.2 -64.6 -119.5 " +
        "-63.4 -125.7 -62 -131.9 -60.3 -137.9 -58.4 -143.8 -56.3 -149.5 -53.9 -155.1 -51.4 -160.4 -48.6 -165.5 " +
        "-45.6 -170.3 -42.5 -174.8 -39.2 -179 -35.7 -182.8 -32.1 -186.3 -28.4 -189.5 -24.5 -192.2 -20.6 -194.6 " +
        "-16.6 -196.5 -12.5 -198 -8.4 -199.1 -4.2 -199.8 0 -200 ") +
    "</g>" +
    "</svg>";

//Начальный механизм.
export const nach =
    "<svg viewBox=\"0 0 168 100\" width=\"168\" height=\"100\" class=\"risunok\">" +
    "<g transform=\"translate(84,49)\">" +
    polTagOpVr(null,null,null,null,null) +
    polTagZvIssl(null,null, 30, 100, 11, null) +
    polTagZvIssl(null,null, 210, 100, 11, null) +
    polTagObZv(-55, -8, 1, 15, -10, 30, 5) +
    "</g>" +
    "</svg>";

//Группа 1.
export const gr1 =
    "<svg viewBox=\"0 0 111 351\" width=\"111\" height=\"351\" class=\"risunok\">" +
    "<g transform=\"translate(17,394)\">" +
    polTagOpSk(3, 107.2281, 90, 200, true, false, null) +
    polTagZvIssl(86.6025, 50, 106.7787, 300, 11, null) +
    polTagPolzIssl(null,337.2281, 90, null) +
    polTagShIssl(86.6025, 50, null) +
    polTagShIssl(0, 337.2281, null) +
    polTagCMIssl(57.7350, 145.7427, null) +
    polTagObZv(55, 200, 2, 0, -10, -15, 0) +
    polTagObZv(25, 355, 3, 0, -10, -20, 0) +
    "</g>" +
    "</svg>";

//Группа 2.
export const gr2 =
    "<svg viewBox=\"0 0 111 351\" width=\"111\" height=\"351\" class=\"risunok\">" +
    "<g transform=\"translate(94,294)\">" +
    polTagOpSk(-3, 107.2281, 90, 100, true, true, null) +
    polTagZvIssl(-86.6025, -50, 73.2213, 300, 11, null) +
    polTagPolzIssl(null,237.2281, 90, null) +
    polTagShIssl(-86.6025, -50, null) +
    polTagShIssl(0, 237.2281, null) +
    polTagCMIssl(-57.7350, 45.7427, null) +
    polTagObZv(-75, 100, 4, 20, -10, 35, 0) +
    polTagObZv(-45, 255, 5, 20, -10, 40, 0) +
    "</g>" +
    "</svg>";

//Диаграммы изменения давлений в цилиндрах.
export const diDavl =
    "<svg viewBox=\"0 0 730 370\" width=\"730\" height=\"370\" class=\"risunok\">" +
    "<g transform=\"translate(20,30)\">" +
    polTagStrelka(null, 360, -20, null) +
    polTagStrelka(null, 360, null, 20, -90) +
    polTagLom1(null, 4, "300.0 0.0 300.0 60.0 165.0 90.0 114.0 120.0 " +
        "81.0 150.0 54.0 180.0 36.0 210.0 0.0 300.0 0.0 60.0 90.0 30.0 300.0 0.0 ") +
    polTagOtr(0, -60, 0, 0, 0, 300, 0, "#000", 2) +
    polTagOtr(0, -120, 0, 0, 0, 300, 0, "#000", 2) +
    polTagOtr(0, -180, 0, 0, 0, 300, 0, "#000", 2) +
    polTagOtr(0, -240, 0, 0, 0, 300, 0, "#000", 2) +
    polTagOtr(0, -300, 0, 0, 0, 300, 0, "#000", 2) +
    polTagOtr(60, 0, 0, 0, 0, 0, 300, "#000", 2) +
    polTagOtr(120, 0, 0, 0, 0, 0, 300, "#000", 2) +
    polTagOtr(180, 0, 0, 0, 0, 0, 300, "#000", 2) +
    polTagOtr(240, 0, 0, 0, 0, 0, 300, "#000", 2) +
    polTagOtr(300, 0, 0, 0, 0, 0, 300, "#000", 2) +
    polTagObInd(25, -330, null, "S", 3) +
    polTagObInd(330, -25, null, "p", 3) +
    polTagObInd(285, 10, null, "p", "3max") +
    "</g>" +
    "<g transform=\"translate(390,30)\">" +
    polTagStrelka(null, 360, -20, null) +
    polTagStrelka(null, 360, null, 20, -90) +
    polTagLom1(null, 4, "300.0 0.0 300.0 60.0 210.0 90.0 177.0 120.0 " +
        "150.0 150.0 126.0 180.0 111.0 210.0 102.0 240.0 90.0 300.0 90.0 60.0 162.0 30.0 300.0 0.0") +
    polTagOtr(0, -60, 0, 0, 0, 300, 0, "#000", 2) +
    polTagOtr(0, -120, 0, 0, 0, 300, 0, "#000", 2) +
    polTagOtr(0, -180, 0, 0, 0, 300, 0, "#000", 2) +
    polTagOtr(0, -240, 0, 0, 0, 300, 0, "#000", 2) +
    polTagOtr(0, -300, 0, 0, 0, 300, 0, "#000", 2) +
    polTagOtr(60, 0, 0, 0, 0, 0, 300, "#000", 2) +
    polTagOtr(120, 0, 0, 0, 0, 0, 300, "#000", 2) +
    polTagOtr(180, 0, 0, 0, 0, 0, 300, "#000", 2) +
    polTagOtr(240, 0, 0, 0, 0, 0, 300, "#000", 2) +
    polTagOtr(300, 0, 0, 0, 0, 0, 300, "#000", 2) +
    polTagObInd(25, -330, null, "S", 5) +
    polTagObInd(330, -25, null, "p", 5) +
    polTagObInd(285, 10, null, "p", "5max") +
    "</g>" +
    "</svg>";

//План скоростей.
export const planSk = polPlSkTag(["sk_VA", "sk_VBA", "sk_VB", "sk_VS2A", "sk_VS2", "sk_VC", "sk_VDC", "sk_VD", "sk_VS4C", "sk_VS4"]);

//План ускорений.
export const planUsk = polPlUskTag(["usk_AA", "usk_ABAN", "usk_ABAT", "usk_ABA", "usk_AB", "usk_AS2A",
    "usk_AS2", "usk_AC", "usk_ADCN", "usk_ADCT", "usk_ADC", "usk_AD", "usk_AS4C", "usk_AS4"]);

//План сил второй группы Ассура.
export const planSil2 =
    polPlSilTag(2, ["sil_R05", "sil_P5", "sil_FI5", "sil_G5", "sil_FI4", "sil_G4", "sil_R14", "sil_R54", "sil_R45"]);

//План сил первой группы Ассура.
export const planSil1 =
    polPlSilTag(1, ["sil_R03", "sil_P3", "sil_FI3", "sil_G3", "sil_FI2", "sil_G2", "sil_R12", "sil_R32", "sil_R23"]);

//План сил начального механизма.
export const planSilNach = polPlSilTag("nach", ["sil_R41", "sil_R21", "sil_G1", "sil_R01"]);

