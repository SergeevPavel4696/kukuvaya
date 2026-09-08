import {
    polTagCMIssl,
    polTagNaprVr,
    polTagObTochInd,
    polTagObToch,
    polTagObZv,
    polTagOpSk,
    polTagOpVr,
    polPlSkTag,
    polPlUskTag,
    polTagPolzIssl,
    polTagShIssl,
    polTagZvIssl,
    polPlSilTag,
    polTagObInd
} from "../meh-svg-utils.js";
import {
    polTagKrPu, polTagOkrPu, polTagOtr, polTagOtrPu, polTagOtrShPu, polTagPr, polTagStrelka
} from "../../../scripts/utils-svg-geom.js";


//Рисунок задания.
export const zadanie =
    "<svg viewBox=\"0 0 178 696\" width=\"178\" height=\"696\" class=\"risunok\">" +
    "<g transform=\"translate(77,419)\">" +
    "<!--Опора вращения-->" +
    polTagOpVr(null, null, null, null, null) +
    "<!--Опоры скольжения-->" +
    polTagOpSk(null, 232.2583, 90, 100, true, true, null) +
    polTagOpSk(null, -90.8369, -90, 100, true, false, null) +
    "<!--Звенья-->" +
    polTagZvIssl(null, null, 45, 100, 11, null) +
    polTagZvIssl(70.7107, 70.7107, 103.6330, 300, 11, null) +
    polTagPolzIssl(null, 362.2583, 90, null) +
    polTagZvIssl(70.7107, 70.7107, 256.3670, 300, 11, null) +
    polTagPolzIssl(null, -220.8369, 90, null) +
    "<!--Шарниры-->" +
    polTagShIssl(70.7107, 70.7107, null) +
    polTagShIssl(0, 362.2583, null) +
    polTagShIssl(0, -220.8369, null) +
    "<!--Центры тяжести-->" +
    polTagCMIssl(47.1405, 167.8932, null) +
    polTagCMIssl(47.1405, -26.4719, null) +
    "<!--Направление вращения кривошипа-->" +
    polTagNaprVr(null, null, 45, 85, 45, null) +
    "<!--Обозначения-->" +
    polTagObZv(0, 45, 1, 15, -10, 35, 10) +
    polTagObZv(50, 250, 2, 0, -10, -20, 10) +
    polTagObZv(27, 385, 3, 0, -10, -20, 10) +
    polTagObZv(50, -130, 4, 0, -10, -20, -30) +
    polTagObZv(27, -262, 5, 0, -10, -20, -30) +
    polTagObTochInd(-20, -10, "O,S", 1) +
    polTagObToch(90, 60, "A") +
    polTagObTochInd(75, 160, "S", 2) +
    polTagObTochInd(-30, 355, "B,S", 3) +
    polTagObTochInd(75, -35, "S", 4) +
    polTagObTochInd(-30, -230, "D,S", 5) +
    polTagObTochInd(40, 90, "φ", 1) +
    polTagOtrShPu(null, null, 90, 232.2583, "#000", 1, "15 5 2 5", null) +
    polTagOtrShPu(null, null, -90, 90.8369, "#000", 1, "15 5 2 5", null) +
    "</g>" +
    "</svg>";

//Подвижный механизм.
export const mehanismPodv =
    "<svg id=\"meh_ris\" class=\"risunok\">" +
    "<g id=\"meh_ris-1\">" +
    polTagOpVr(null, null, null, null, "shO_ris") +
    polTagOpSk(null, null, null, 0, false, false, "st3_ris", "tr3_ris") +
    polTagOpSk(null, null, null, 0, false, false, "st5_ris", "tr5_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv1_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv2_ris") +
    polTagPolzIssl(null, null, null, "zv3_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv4_ris") +
    polTagPolzIssl(null, null, null, "zv5_ris") +
    polTagShIssl(0, 0, "shA_ris") +
    polTagShIssl(0, 0, "shB_ris") +
    polTagShIssl(0, 0, "shD_ris") +
    polTagCMIssl(0, 0, "s2_ris") +
    polTagCMIssl(0, 0, "s4_ris") +
    "</g>" +
    "</svg>";

//Механизм с интерактивными элементами.
export const mehanismInter =
    "<svg id=\"meh_ris\" viewBox=\"0 0 216 663\" width=\"216\" height=\"663\" visibility=\"hidden\" " +
    "class=\"risunok-inter\">" +
    polTagPr(null, null, null, 0, 0, 663, 216, "#fff", "#000", 3, null) +
    "<g transform=\"translate(108,402)\">" +
    polTagOpVr(null, null, null, "st_1", "sh_O") +
    polTagOpSk(null, 232.2583, 90, 100, false, true, "st_3", null) +
    polTagOpSk(null, -90.8369, -90, 100, false, false, "st_5", null) +
    polTagZvIssl(null, null, 45, 100, 11, "zv_OA") +
    polTagZvIssl(70.7107, 70.7107, 103.6330, 300, 11, "zv_AB") +
    polTagPolzIssl(null, 362.2583, 90, "pol3") +
    polTagZvIssl(70.7107, 70.7107, 256.3670, 300, 11, "zv_AD") +
    polTagPolzIssl(null, -220.8369, 90, "pol5") +
    polTagShIssl(70.7107, 70.7107, "sh_A") +
    polTagShIssl(0, 362.2583, "sh_B") +
    polTagShIssl(0, -220.8369, "sh_D") +
    polTagCMIssl(47.1405, 167.8932, "S2") +
    polTagCMIssl(47.1405, -26.4719, "S4") +
    polTagOkrPu(0, 0, 100, "none", "#000", 2, "15 5 2 5", "tr_A") +
    polTagOtrPu(null, 5, 90, 232.2583, "#000", 2, "15 5 2 5", "tr_B") +
    polTagOtrPu(null, 5, -90, 90.8369, "#000", 2, "15 5 2 5", "tr_D") +
    polTagKrPu("tr_S2", "0 -200 4.2 -199.8 8.4 -199.1 12.5 -198 16.6 -196.5 20.6 -194.6 24.5 -192.2 28.4 " +
        "-189.5 32.1 -186.3 35.7 -182.8 39.2 -179 42.5 -174.8 45.6 -170.3 48.6 -165.5 51.4 -160.4 53.9 -155.1 56.3 " +
        "-149.5 58.4 -143.8 60.3 -137.9 62 -131.9 63.4 -125.7 64.6 -119.5 65.5 -113.2 66.1 -106.9 66.5 -100.6 66.7 " +
        "-94.3 66.5 -88 66.1 -81.8 65.5 -75.7 64.6 -69.8 63.4 -63.9 62 -58.3 60.3 -52.8 58.4 -47.5 56.3 -42.4 53.9 " +
        "-37.5 51.4 -32.9 48.6 -28.5 45.6 -24.5 42.5 -20.7 39.2 -17.2 35.7 -14 32.1 -11.1 28.4 -8.5 24.5 -6.3 20.6 " +
        "-4.4 16.6 -2.8 12.5 -1.6 8.4 -0.7 4.2 -0.2 0 0 -4.2 -0.2 -8.4 -0.7 -12.5 -1.6 -16.6 -2.8 -20.6 -4.4 -24.5 " +
        "-6.3 -28.4 -8.5 -32.1 -11.1 -35.7 -14 -39.2 -17.2 -42.5 -20.7 -45.6 -24.5 -48.6 -28.5 -51.4 -32.9 -53.9 " +
        "-37.5 -56.3 -42.4 -58.4 -47.5 -60.3 -52.8 -62 -58.3 -63.4 -63.9 -64.6 -69.8 -65.5 -75.7 -66.1 -81.8 -66.5 " +
        "-88 -66.7 -94.3 -66.5 -100.6 -66.1 -106.9 -65.5 -113.2 -64.6 -119.5 -63.4 -125.7 -62 -131.9 -60.3 -137.9 " +
        "-58.4 -143.8 -56.3 -149.5 -53.9 -155.1 -51.4 -160.4 -48.6 -165.5 -45.6 -170.3 -42.5 -174.8 -39.2 -179 -35.7 " +
        "-182.8 -32.1 -186.3 -28.4 -189.5 -24.5 -192.2 -20.6 -194.6 -16.6 -196.5 -12.5 -198 -8.4 -199.1 -4.2 -199.8 0 " +
        "-200") +
    polTagKrPu("tr_S4", "0 0 4.2 0.2 8.4 0.7 12.5 1.6 16.6 2.8 20.6 4.4 24.5 6.3 28.4 8.5 32.1 11.1 35.7 " +
        "14 39.2 17.2 42.5 20.7 45.6 24.5 48.6 28.5 51.4 32.9 53.9 37.5 56.3 42.4 58.4 47.5 60.3 52.8 62 58.3 63.4 " +
        "63.9 64.6 69.8 65.5 75.7 66.1 81.8 66.5 88 66.7 94.3 66.5 100.6 66.1 106.9 65.5 113.2 64.6 119.5 63.4 125.7 " +
        "62 131.9 60.3 137.9 58.4 143.8 56.3 149.5 53.9 155.1 51.4 160.4 48.6 165.5 45.6 170.3 42.5 174.8 39.2 179 " +
        "35.7 182.8 32.1 186.3 28.4 189.5 24.5 192.2 20.6 194.6 16.6 196.5 12.5 198 8.4 199.1 4.2 199.8 0 200 -4.2 " +
        "199.8 -8.4 199.1 -12.5 198 -16.6 196.5 -20.6 194.6 -24.5 192.2 -28.4 189.5 -32.1 186.3 -35.7 182.8 -39.2 179 " +
        "-42.5 174.8 -45.6 170.3 -48.6 165.5 -51.4 160.4 -53.9 155.1 -56.3 149.5 -58.4 143.8 -60.3 137.9 -62 131.9 " +
        "-63.4 125.7 -64.6 119.5 -65.5 113.2 -66.1 106.9 -66.5 100.6 -66.7 94.3 -66.5 88 -66.1 81.8 -65.5 75.7 -64.6 " +
        "69.8 -63.4 63.9 -62 58.3 -60.3 52.8 -58.4 47.5 -56.3 42.4 -53.9 37.5 -51.4 32.9 -48.6 28.5 -45.6 24.5 -42.5 " +
        "20.7 -39.2 17.2 -35.7 14 -32.1 11.1 -28.4 8.5 -24.5 6.3 -20.6 4.4 -16.6 2.8 -12.5 1.6 -8.4 0.7 -4.2 0.2 0 0") +
    "</g>" +
    "</svg>";

//Начальный механизм.
export const nach =
    "<svg viewBox=\"0 0 98 121\" width=\"98\" height=\"121\" class=\"risunok\">" +
    "<g transform=\"translate(29,70)\">" +
    polTagOpVr(null, null, null, null, null) +
    polTagZvIssl(null, null, 45, 100, 11, null) +
    polTagObZv(0, 45, 1, 15, -10, 35, 10) +
    "</g>" +
    "</svg>";

//Группа 1.
export const gr1 =
    "<svg viewBox=\"0 0 95 355\" width=\"95\" height=\"355\" class=\"risunok\">" +
    "<g transform=\"translate(17,419)\">" +
    polTagOpSk(null, 232.2583, 90, 100, true, true, null) +
    polTagZvIssl(70.7107, 70.7107, 103.6330, 300, 11, null) +
    polTagPolzIssl(null, 362.2583, 90, null) +
    polTagShIssl(70.7107, 70.7107, null) +
    polTagShIssl(0, 362.2583, null) +
    polTagCMIssl(47.1405, 167.8932, null) +
    polTagObZv(50, 250, 2, 0, -10, -20, 10) +
    polTagObZv(27, 385, 3, 0, -10, -20, 10) +
    "</g>" +
    "</svg>";

//Группа 2.
export const gr2 =
    "<svg viewBox=\"0 0 95 355\" width=\"95\" height=\"355\" class=\"risunok\">" +
    "<g transform=\"translate(17,78)\">" +
    polTagOpSk(null, -90.8369, -90, 100, true, false, null) +
    polTagZvIssl(70.7107, 70.7107, 256.3670, 300, 11, null) +
    polTagPolzIssl(null, -220.8369, 90, null) +
    polTagShIssl(70.7107, 70.7107, null) +
    polTagShIssl(0, -220.8369, null) +
    polTagCMIssl(47.1405, -26.4719, null) +
    polTagObZv(50, -130, 4, 0, -10, -20, -30) +
    polTagObZv(27, -262, 5, 0, -10, -20, -30) +
    "</g>" +
    "</svg>";

//Диаграмма изменения сил полезного сопротивления.
export const diSil =
    "<svg viewBox=\"0 0 720 380\" width=\"720\" height=\"380\" class=\"risunok\">" +
    "<g transform=\"translate(20,340)\">" +
    polTagStrelka(null, 360, -20, null) +
    polTagStrelka(null, 360, null, -20, 90) +
    polTagOtr(0, 0, 0, 0, 0, 300, -300, "#000", 4) +
    polTagOtr(300, 0, 0, 0, 0, 0, -300, "#000", 2) +
    polTagOtr(0, 300, 0, 0, 0, 300, 0, "#000", 2) +
    polTagObInd(25, 315, null, "h", 3) +
    polTagObInd(330, 10, null, "P", 3) +
    polTagObInd(295, -30, null, "P", 3 + "max") +
    "</g>" +
    "<g transform=\"translate(380,40)\">" +
    polTagStrelka(null, 360, -20, null) +
    polTagStrelka(null, 360, null, 20, -90) +
    polTagOtr(0, 0, 0, 0, 0, 300, 300, "#000", 4) +
    polTagOtr(300, 0, 0, 0, 0, 0, 300, "#000", 2) +
    polTagOtr(0, -300, 0, 0, 0, 300, 0, "#000", 2) +
    polTagObInd(25, -340, null, "h", 5) +
    polTagObInd(330, -30, null, "P", 5) +
    polTagObInd(295, 10, null, "P", 5 + "max") +
    "</g>" +
    "</svg>";

//План скоростей.
export const planSk = polPlSkTag(["sk_VA", "sk_VBA", "sk_VB", "sk_VS2A", "sk_VS2", "sk_VDA", "sk_VD", "sk_VS4A", "sk_VS4"]);

//План ускорений.
export const planUsk = polPlUskTag(["usk_AA", "usk_ABAN", "usk_ABAT", "usk_ABA", "usk_AB",
    "usk_AS2A", "usk_AS2", "usk_ADAN", "usk_ADAT", "usk_ADA", "usk_AD", "usk_AS4A", "usk_AS4"]);

//План сил второй группы Ассура.
export const planSil2 =
    polPlSilTag(2, ["sil_R05", "sil_P5", "sil_FI5", "sil_G5", "sil_FI4", "sil_G4", "sil_R14", "sil_R54", "sil_R45"]);

//План сил первой группы Ассура.
export const planSil1 =
    polPlSilTag(1, ["sil_R03", "sil_P3", "sil_FI3", "sil_G3", "sil_FI2", "sil_G2", "sil_R12", "sil_R32", "sil_R23"]);

//План сил начального механизма.
export const planSilNach = polPlSilTag("nach", ["sil_R41", "sil_R21", "sil_G1", "sil_R01"]);
