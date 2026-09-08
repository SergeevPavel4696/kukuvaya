import {
    polTagCMIssl, polTagNaprVr, polTagObTochInd, polTagObToch, polTagObZv, polTagOpSk, polTagOpVr,
    polPlSkTag, polPlUskTag, polTagPolzIssl, polTagShIssl, polTagZvIssl, polPlSilTag, polTagObInd
} from "../meh-svg-utils.js";
import {
    polTagKrPu, polTagOkrPu, polTagOtr, polTagOtrShPu, polTagPr, polTagStrelka
} from "../../../scripts/utils-svg-geom.js";


//Рисунок задания.
export const zadanie =
    "<svg viewBox=\"0 0 380 500\" width=\"380\" height=\"500\" class=\"risunok\">" +
    "<g transform=\"translate(102,420)\">" +
    "<!--Опора вращения-->" +
    polTagOpVr(null, null, null, null, null) +
    "<!--Опоры скольжения-->" +
    polTagOpSk(null, 232.2583, 90, 102, true, false, null, null) +
    polTagOpSk(90.8369, null, null, 102, true, true, null, null) +
    "<!--Звенья-->" +
    polTagZvIssl(null, null, 45, 100, 11, null) +
    polTagZvIssl(70.7107, 70.7107, 103.6330, 300, 11, null) +
    polTagPolzIssl(null, 362.2583, 90, null) +
    polTagZvIssl(null, null, 225, 100, 11, null) +
    polTagZvIssl(-70.7107, -70.7107, 13.6330, 300, 11, null) +
    polTagPolzIssl(220.8369, null, null, null) +
    "<!--Шарниры-->" +
    polTagShIssl(70.7107, 70.7107, null) +
    polTagShIssl(0, 362.2583, null) +
    polTagShIssl(-70.7107, -70.7107, null) +
    polTagShIssl(220.8369, 0, null) +
    "<!--Центры тяжести-->" +
    polTagCMIssl(47.1405, 167.8932, null) +
    polTagCMIssl(26.4719, -47.1405, null) +
    "<!--Направление вращения кривошипа-->" +
    polTagNaprVr(null, null, 45, 38, 135, true) +
    "<!--Обозначения-->" +
    polTagObZv(20, 62, 1, 15, -10, 35, 10) +
    polTagObZv(48, 245, 2, 0, -10, -20, 5) +
    polTagObZv(-47, 330, 3, 20, -10, 40, -20) +
    polTagObZv(120, -60, 4, -5, -10, -20, -30) +
    polTagObZv(245, -43, 5, -2, -10, -15, -35) +
    polTagObTochInd(-20, -5, "O,S", 1) +
    polTagObToch(90, 60, "A") +
    polTagObTochInd(30, 155, "S", 2) +
    polTagObTochInd(67, 350, "B,S", 3) +
    polTagObToch(-92, -80, "C") +
    polTagObTochInd(40, -78, "S", 4) +
    polTagObTochInd(240, 25, "D,S", 5) +
    polTagObTochInd(60, -25, "φ", 1) +
    polTagOtrShPu(null, -50, 90, 282.2583, "#000", 1, "15 5 2 5", null) +
    polTagOtrShPu(null, null, null, 90.8369, "#000", 1, "15 5 2 5", null) +
    "</g>" +
    "</svg>";

//Подвижный механизм.
export const mehanismPodv =
    "<svg id=\"meh_ris\" class=\"meh__ris\">" +
    "<g id=\"meh_ris-1\">" +
    polTagOpVr(null, null, null, null, "shO_ris") +
    polTagOpSk(null, null, null, 0, false, false, "st3_ris", "tr3_ris") +
    polTagOpSk(null, null, null, 0, false, true, "st5_ris", "tr5_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv1A_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv1C_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv2_ris") +
    polTagPolzIssl(null, null, null, "zv3_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv4_ris") +
    polTagPolzIssl(null, null, null, "zv5_ris") +
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
    "<svg id=\"meh_ris\" viewBox=\"0 0 368 510\" width=\"368\" height=\"510\" visibility=\"hidden\" " +
    "class=\"risunok-inter\">" +
    polTagPr(null, null, null, 0, 0, 510, 368, "#fff", "#000", 3, null) +
    "<g transform=\"translate(108,402)\">" +
    polTagOpVr(null, null, null, "st_1", "sh_O") +
    polTagOpSk(null, 232.2583, 90, 102, false, false, "st_3", null) +
    polTagOpSk(90.8369, null, null, 102, false, true, "st_5", null) +
    polTagZvIssl(null, null, 45, 100, 11, "zv_OA") +
    polTagZvIssl(70.7107, 70.7107, 103.6330, 300, 11, "zv_AB") +
    polTagPolzIssl(null, 362.2583, 90, "pol3") +
    polTagZvIssl(null, null, 225, 100, 11, "zv_OC") +
    polTagZvIssl(-70.7107, -70.7107, 13.6330, 300, 11, "zv_CD") +
    polTagPolzIssl(220.8369, null, null, "pol5") +
    polTagShIssl(70.7107, 70.7107, "sh_A") +
    polTagShIssl(0, 362.2583, "sh_B") +
    polTagShIssl(-70.7107, -70.7107, "sh_C") +
    polTagShIssl(220.8369, 0, "sh_D") +
    polTagCMIssl(47.1405, 167.8932, "S2") +
    polTagCMIssl(26.4719, -47.1405, "S4") +
    polTagOkrPu(0, 0, 100, "none", "#000", 2, "15 5 2 5", "tr_AC") +
    polTagOtrShPu(null, null, 90, 232.2583, "#000", 2, "15 5 2 5", "tr_B") +
    polTagOtrShPu(null, null, null, 90.8369, "#000", 2, "15 5 2 5", "tr_D") +
    polTagKrPu("tr_S2", "0 0 4.2 -0.2 8.4 -0.7 12.5 -1.6 16.6 -2.8 20.6 -4.4 24.5 -6.3 28.4 -8.5 32.1 -11.1 " +
        "35.7 -14 39.2 -17.2 42.5 -20.7 45.6 -24.5 48.6 -28.5 51.4 -32.9 53.9 -37.5 56.3 -42.4 58.4 -47.5 60.3 -52.8 " +
        "62 -58.3 63.4 -63.9 64.6 -69.8 65.5 -75.7 66.1 -81.8 66.5 -88 66.7 -94.3 66.5 -100.6 66.1 -106.9 65.5 -113.2 " +
        "64.6 -119.5 63.4 -125.7 62 -131.9 60.3 -137.9 58.4 -143.8 56.3 -149.5 53.9 -155.1 51.4 -160.4 48.6 -165.5 " +
        "45.6 -170.3 42.5 -174.8 39.2 -179 35.7 -182.8 32.1 -186.3 28.4 -189.5 24.5 -192.2 20.6 -194.6 16.6 -196.5 " +
        "12.5 -198 8.4 -199.1 4.2 -199.8 0 -200 -4.2 -199.8 -8.4 -199.1 -12.5 -198 -16.6 -196.5 -20.6 -194.6 -24.5 " +
        "-192.2 -28.4 -189.5 -32.1 -186.3 -35.7 -182.8 -39.2 -179 -42.5 -174.8 -45.6 -170.3 -48.6 -165.5 -51.4 -160.4 " +
        "-53.9 -155.1 -56.3 -149.5 -58.4 -143.8 -60.3 -137.9 -62 -131.9 -63.4 -125.7 -64.6 -119.5 -65.5 -113.2 -66.1 " +
        "-106.9 -66.5 -100.6 -66.7 -94.3 -66.5 -88 -66.1 -81.8 -65.5 -75.7 -64.6 -69.8 -63.4 -63.9 -62 -58.3 -60.3 " +
        "-52.8 -58.4 -47.5 -56.3 -42.4 -53.9 -37.5 -51.4 -32.9 -48.6 -28.5 -45.6 -24.5 -42.5 -20.7 -39.2 -17.2 -35.7 " +
        "-14 -32.1 -11.1 -28.4 -8.5 -24.5 -6.3 -20.6 -4.4 -16.6 -2.8 -12.5 -1.6 -8.4 -0.7 -4.2 -0.2 0 0") +
    polTagKrPu("tr_S4", "94.3 -66.7 88 -66.5 81.8 -66.1 75.7 -65.5 69.8 -64.6 63.9 -63.4 58.3 -62 52.8 " +
        "-60.3 47.5 -58.4 42.4 -56.3 37.5 -53.9 32.9 -51.4 28.5 -48.6 24.5 -45.6 20.7 -42.5 17.2 -39.2 14 -35.7 11.1 " +
        "-32.1 8.5 -28.4 6.3 -24.5 4.4 -20.6 2.8 -16.6 1.6 -12.5 0.7 -8.4 0.2 -4.2 0 0 0.2 4.2 0.7 8.4 1.6 12.5 2.8 " +
        "16.6 4.4 20.6 6.3 24.5 8.5 28.4 11.1 32.1 14 35.7 17.2 39.2 20.7 42.5 24.5 45.6 28.5 48.6 32.9 51.4 37.5 " +
        "53.9 42.4 56.3 47.5 58.4 52.8 60.3 58.3 62 63.9 63.4 69.8 64.6 75.7 65.5 81.8 66.1 88 66.5 94.3 66.7 100.6 " +
        "66.5 106.9 66.1 113.2 65.5 119.5 64.6 125.7 63.4 131.9 62 137.9 60.3 143.8 58.4 149.5 56.3 155.1 53.9 160.4 " +
        "51.4 165.5 48.6 170.3 45.6 174.8 42.5 179 39.2 182.8 35.7 186.3 32.1 189.5 28.4 192.2 24.5 194.6 20.6 196.5 " +
        "16.6 198 12.5 199.1 8.4 199.8 4.2 200 0 199.8 -4.2 199.1 -8.4 198 -12.5 196.5 -16.6 194.6 -20.6 192.2 -24.5 " +
        "189.5 -28.4 186.3 -32.1 182.8 -35.7 179 -39.2 174.8 -42.5 170.3 -45.6 165.5 -48.6 160.4 -51.4 155.1 -53.9 " +
        "149.5 -56.3 143.8 -58.4 137.9 -60.3 131.9 -62 125.7 -63.4 119.5 -64.6 113.2 -65.5 106.9 -66.1 100.6 -66.5 " +
        "94.3 -66.7") +
    "</g>" +
    "</svg>";

//Начальный механизм.
export const nach =
    "<svg viewBox=\"0 0 138 153\" width=\"138\" height=\"153\" class=\"risunok\">" +
    "<g transform=\"translate(69,84)\">" +
    polTagOpVr(null, null, null, null, null) +
    polTagZvIssl(null, null, 45, 100, 11, null) +
    polTagZvIssl(null, null, 225, 100, 11, null) +
    polTagObZv(20, 62, 1, 15, -10, 35, 10) +
    "</g>" +
    "</svg>";

//Группа 1.
export const gr1 =
    "<svg viewBox=\"0 0 124 357\" width=\"124\" height=\"357\" class=\"risunok\">" +
    "<g transform=\"translate(46,420)\">" +
    polTagOpSk(null, 232.2583, 90, 102, true, false, null, null) +
    polTagZvIssl(70.7107, 70.7107, 103.6330, 300, 11, null) +
    polTagPolzIssl(null, 362.2583, 90, null) +
    polTagShIssl(70.7107, 70.7107, null) +
    polTagShIssl(0, 362.2583, null) +
    polTagCMIssl(47.1405, 167.8932, null) +
    polTagObZv(48, 245, 2, 0, -10, -20, 5) +
    polTagObZv(-47, 330, 3, 20, -10, 40, -20) +
    "</g>" +
    "</svg>";

//Группа 2.
export const gr2 =
    "<svg viewBox=\"0 0 356 95\" width=\"356\" height=\"95\" class=\"risunok\">" +
    "<g transform=\"translate(78,17)\">" +
    polTagOpSk(90.8369, null, null, 102, true, true, null, null) +
    polTagZvIssl(-70.7107, -70.7107, 13.6330, 300, 11, null) +
    polTagPolzIssl(220.8369, null, null, null) +
    polTagShIssl(-70.7107, -70.7107, null) +
    polTagShIssl(220.8369, 0, null) +
    polTagCMIssl(26.4719, -47.1405, null) +
    polTagObZv(120, -60, 4, -5, -10, -20, -30) +
    polTagObZv(245, -43, 5, -2, -10, -15, -35) +
    "</g>" +
    "</svg>";

//Диаграмма изменения силы полезного сопротивления.
export const diSil =
    "<svg viewBox=\"0 0 360 370\" width=\"360\" height=\"370\" class=\"risunok\">" +
    "<g transform=\"translate(20,340)\">" +
    polTagStrelka(null, 360, -20, null) +
    polTagStrelka(null, 360, null, -20, 90) +
    polTagOtr(0, 0, 0, 0, 0, 300, -225, "#000", 4) +
    polTagOtr(0, 0, 0, 300, -225, 0, -300, "#000", 4) +
    polTagOtr(75, 0, 0, 0, 0, 0, -300, "#000", 2) +
    polTagOtr(150, 0, 0, 0, 0, 0, -300, "#000", 2) +
    polTagOtr(225, 0, 0, 0, 0, 0, -300, "#000", 2) +
    polTagOtr(300, 0, 0, 0, 0, 0, -300, "#000", 2) +
    polTagOtr(0, 75, 0, 0, 0, 300, 0, "#000", 2) +
    polTagOtr(0, 150, 0, 0, 0, 300, 0, "#000", 2) +
    polTagOtr(0, 225, 0, 0, 0, 300, 0, "#000", 2) +
    polTagOtr(0, 300, 0, 0, 0, 300, 0, "#000", 2) +
    polTagObInd(25, 315, null, "h", 3) +
    polTagObInd(330, 10, null, "P", 3) +
    polTagObInd(295, -30, null, "P", 3 + "max") +
    "</g>" +
    "</svg>";

//План скоростей.
export const planSk = polPlSkTag(["sk_VA", "sk_VBA", "sk_VB", "sk_VS2A", "sk_VS2", "sk_VC", "sk_VDC", "sk_VD", "sk_VS4C", "sk_VS4"]);

//План ускорений.
export const planUsk = polPlUskTag(["usk_AA", "usk_ABAN", "usk_ABAT", "usk_ABA", "usk_AB", "usk_AS2A",
    "usk_AS2", "usk_AC", "usk_ADCN", "usk_ADCT", "usk_ADC", "usk_AD", "usk_AS4C", "usk_AS4"]);

//План сил второй группы Ассура.
export const planSil2 = polPlSilTag(2, ["sil_R05", "sil_P5", "sil_FI5",
    "sil_G5", "sil_FI4", "sil_G4", "sil_R14", "sil_R54", "sil_R45"]);

//План сил первой группы Ассура.
export const planSil1 = polPlSilTag(1, ["sil_R03", "sil_P3", "sil_FI3",
    "sil_G3", "sil_FI2", "sil_G2", "sil_R12", "sil_R32", "sil_R23"]);

//План сил начального механизма.
export const planSilNach = polPlSilTag("nach", ["sil_R41", "sil_R21", "sil_G1", "sil_R01"]);
