import {
    polTagCMIssl, polTagNaprVr, polTagObTochInd, polTagObToch, polTagObZv, polTagOpSk,
    polTagOpVr, polPlSkTag, polPlUskTag, polTagPolzIssl, polTagShIssl, polTagZvIssl, polPlSilTag, polTagObInd
} from "../meh-svg-utils.js";
import {
    polTagKrPu, polTagOkrPu, polTagOtrShPu, polTagOtr, polTagPr, polTagStrelka, polTagDug
} from "../../../scripts/utils-svg-geom.js";


//Рисунок задания.
export const zadanie =
    "<svg viewBox=\"0 0 372 408\" width=\"372\" height=\"407\" class=\"risunok\">" +
    "<g transform=\"translate(94,357)\">" +
    "<!--Опора вращения-->" +
    polTagOpVr(null, null, null, null, null) +
    "<!--Опоры скольжения-->" +
    polTagOpSk(90.8369, null, null, 102, true, false, null, null) +
    polTagOpSk(200, 169.2755, 90, 102, true, true, null, null) +
    "<!--Звенья-->" +
    polTagZvIssl(null, null, 135, 100, 11, null) +
    polTagZvIssl(-70.7107, 70.7107, 346.3670, 300, 11, null) +
    polTagPolzIssl(220.8369, null, null, null) +
    polTagZvIssl(220.8369, null, 93.9828, 300, 11, null) +
    polTagPolzIssl(200, 299.2755, 90, null) +
    "<!--Шарниры-->" +
    polTagShIssl(-70.7107, 70.7107, null) +
    polTagShIssl(220.8369, 0, null) +
    polTagShIssl(200, 299.2755, null) +
    "<!--Центры тяжести-->" +
    polTagCMIssl(26.4719, 47.1405, null) +
    polTagCMIssl(213.8913, 99.7585, null) +
    "<!--Направление вращения кривошипа-->" +
    polTagNaprVr(null, null, 135, 62.5, 45, null) +
    "<!--Обозначения-->" +
    polTagObZv(-15, 27, 1, 0, -10, -10, 5) +
    polTagObZv(85, 45, 2, 0, -10, -15, 10) +
    polTagObZv(170, 25, 3, 20, -10, 40, 15) +
    polTagObZv(235, 150, 4, -5, -10, -25, 5) +
    polTagObZv(233, 290, 5, 0, -15, -25, 0) +
    polTagObTochInd(55, 5, "O,S", 1) +
    polTagObToch(-71, 80, "A") +
    polTagObTochInd(32, 58, "S", 2) +
    polTagObTochInd(270, 25, "B,S", 3) +
    polTagObTochInd(242, 90, "S", 4) +
    polTagObTochInd(170, 290, "D,S", 5) +
    polTagObTochInd(-75, 28, "φ", 1) +
    polTagOtrShPu(-70, null, null, 160.8369, "#000", 1, "15 5 2 5", null) +
    polTagOtrShPu(200, null, 90, 169.2755, "#000", 1, "15 5 2 5", null) +
    "</g>" +
    "</svg>";

//Подвижный механизм.
export const mehanismPodv =
    "<svg id=\"meh_ris\" class=\"meh__ris\">" +
    "<g id=\"meh_ris-1\">" +
    polTagOpVr(null, null, null, null, "shO_ris") +
    polTagOpSk(null, null, null, 0, false, false, "st3_ris", "tr3_ris") +
    polTagOpSk(null, null, null, 0, false, true, "st5_ris", "tr5_ris") +
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
    "<svg id=\"meh_ris\" viewBox=\"0 0 450 445\" width=\"450\" height=\"445\" visibility=\"hidden\" " +
    "class=\"risunok-inter\">" +
    polTagPr(null, null, null, 0, 0, 445, 450, "#fff", "#000", 3, null) +
    "<g transform=\"translate(107,337)\">" +
    polTagOpVr(null, null, null, "st_1", "sh_O") +
    polTagOpSk(90.8369, null, null, 102, false, false, "st_3", null) +
    polTagOpSk(200, 169.2755, 90, 102, false, true, "st_5", null) +
    polTagZvIssl(null, null, 135, 100, 11, "zv_OA") +
    polTagZvIssl(-70.7107, 70.7107, 346.3670, 300, 11, "zv_AB") +
    polTagPolzIssl(220.8369, null, null, "pol3") +
    polTagZvIssl(220.8369, null, 93.9828, 300, 11, "zv_BD") +
    polTagPolzIssl(200, 299.2755, 90, "pol5") +
    polTagShIssl(-70.7107, 70.7107, "sh_A") +
    polTagShIssl(220.8369, 0, "sh_B") +
    polTagShIssl(200, 299.2755, "sh_D") +
    polTagCMIssl(26.4719, 47.1405, "S2") +
    polTagCMIssl(213.8913, 99.7585, "S4") +
    polTagOkrPu(0, 0, 100, "none", "#000", 2, "15 5 2 5", "tr_A") +
    polTagOtrShPu(null, null, null, 90.8369, "#000", 2, "15 5 2 5", "tr_B") +
    polTagOtrShPu(200, null, 90, 169.2755, "#000", 2, "15 5 2 5", "tr_D") +
    polTagKrPu("tr_S2", "0 0 0.2 4.2 0.7 8.4 1.6 12.5 2.8 16.6 4.4 20.6 6.3 24.5 8.5 28.4 11.1 32.1 14 " +
        "35.7 17.2 39.2 20.7 42.5 24.5 45.6 28.5 48.6 32.9 51.4 37.5 53.9 42.4 56.3 47.5 58.4 52.8 60.3 58.3 62 63.9 " +
        "63.4 69.8 64.6 75.7 65.5 81.8 66.1 88 66.5 94.3 66.7 100.6 66.5 106.9 66.1 113.2 65.5 119.5 64.6 125.7 63.4 " +
        "131.9 62 137.9 60.3 143.8 58.4 149.5 56.3 155.1 53.9 160.4 51.4 165.5 48.6 170.3 45.6 174.8 42.5 179 39.2 " +
        "182.8 35.7 186.3 32.1 189.5 28.4 192.2 24.5 194.6 20.6 196.5 16.6 198 12.5 199.1 8.4 199.8 4.2 200 0 199.8 " +
        "-4.2 199.1 -8.4 198 -12.5 196.5 -16.6 194.6 -20.6 192.2 -24.5 189.5 -28.4 186.3 -32.1 182.8 -35.7 179 -39.2 " +
        "174.8 -42.5 170.3 -45.6 165.5 -48.6 160.4 -51.4 155.1 -53.9 149.5 -56.3 143.8 -58.4 137.9 -60.3 131.9 -62 " +
        "125.7 -63.4 119.5 -64.6 113.2 -65.5 106.9 -66.1 100.6 -66.5 94.3 -66.7 88 -66.5 81.8 -66.1 75.7 -65.5 69.8 " +
        "-64.6 63.9 -63.4 58.3 -62 52.8 -60.3 47.5 -58.4 42.4 -56.3 37.5 -53.9 32.9 -51.4 28.5 -48.6 24.5 -45.6 20.7 " +
        "-42.5 17.2 -39.2 14 -35.7 11.1 -32.1 8.5 -28.4 6.3 -24.5 4.4 -20.6 2.8 -16.6 1.6 -12.5 0.7 -8.4 0.2 -4.2 0 0") +
    polTagKrPu("tr_S4", "200 -100 200.1 -100 200.4 -100 200.8 -100 201.4 -100 202.2 -100 203.2 -100 204.3 " +
        "-100 205.7 -100 207.2 -99.9 208.9 -99.9 210.7 -99.9 212.8 -99.8 215 -99.7 217.5 -99.6 220.1 -99.5 222.9 " +
        "-99.3 225.8 -99.2 229 -98.9 232.3 -98.7 235.7 -98.4 239.4 -98 243.1 -97.6 247.1 -97.2 251.1 -96.7 255.2 " +
        "-96.1 259.5 -95.5 263.8 -94.8 268.1 -94 272.5 -93.2 277 -92.3 281.4 -91.4 285.7 -90.3 290.1 -89.3 294.3 " +
        "-88.2 298.4 -87 302.5 -85.9 306.3 -84.7 310 -83.5 313.5 -82.3 316.7 -81.2 319.7 -80.1 322.5 -79.1 325 -78.1 " +
        "327.1 -77.2 329 -76.4 330.6 -75.8 331.8 -75.2 332.6 -74.8 333.2 -74.6 333.3 -74.5 333.2 -74.4") +
    "</g>" +
    "</svg>";

//Начальный механизм.
export const nach =
    "<svg viewBox=\"0 0 98 120\" width=\"98\" height=\"120\" class=\"risunok\">" +
    "<g transform=\"translate(69,69)\">" +
    polTagOpVr(null, null, null, null, null) +
    polTagZvIssl(null, null, 135, 100, 11, null) +
    polTagObZv(-15, 27, 1, 0, -10, -10, 5) +
    "</g>" +
    "</svg>";

//Группа 1.
export const gr1 =
    "<svg viewBox=\"0 0 330 95\" width=\"330\" height=\"95\" class=\"risunok\">" +
    "<g transform=\"translate(77,78)\">" +
    polTagOpSk(90.8369, null, null, 102, false, false, null, null) +
    polTagZvIssl(-70.7107, 70.7107, 346.3670, 300, 11, null) +
    polTagPolzIssl(220.8369, null, null, null) +
    polTagShIssl(-70.7107, 70.7107, null) +
    polTagShIssl(220.8369, 0, null) +
    polTagCMIssl(26.4719, 47.1405, null) +
    polTagObZv(85, 45, 2, 0, -10, -15, 10) +
    polTagObZv(170, 25, 3, 20, -10, 40, 15) +
    "</g>" +
    "</svg>";

//Группа 2.
export const gr2 =
    "<svg viewBox=\"0 0 67 339\" width=\"67\" height=\"339\" class=\"risunok\">" +
    "<g transform=\"translate(-183,332)\">" +
    polTagOpSk(200, 169.2755, 90, 102, false, true, null, null) +
    polTagZvIssl(220.8369, null, 93.9828, 300, 11, null) +
    polTagPolzIssl(200, 299.2755, 90, null) +
    polTagShIssl(220.8369, 0, null) +
    polTagShIssl(200, 299.2755, null) +
    polTagCMIssl(213.8913, 99.7585, null) +
    polTagObZv(235, 150, 4, -5, -10, -25, 5) +
    polTagObZv(233, 290, 5, 0, -15, -25, 0) +
    "</g>" +
    "</svg>";

//Диаграмма изменения силы полезного сопротивления.
export const diSil =
    "<svg viewBox=\"0 0 400 360\" width=\"400\" height=\"360\" class=\"risunok\">" +
    "<g transform=\"translate(60,340)\">" +
    polTagStrelka(null, 360, -20, null) +
    polTagStrelka(null, 360, null, -20, 90) +
    polTagDug(0, 0, 300, 300, "#000", 412.5, 4) +
    polTagOtr(0, 75, 0, 0, 0, 300, 0, "#000", 2) +
    polTagOtr(0, 150, 0, 0, 0, 300, 0, "#000", 2) +
    polTagOtr(0, 225, 0, 0, 0, 300, 0, "#000", 2) +
    polTagOtr(0, 300, 0, 0, 0, 300, 0, "#000", 2) +
    polTagOtr(75, 0, 0, 0, 0, 0, -300, "#000", 2) +
    polTagOtr(150, 0, 0, 0, 0, 0, -300, "#000", 2) +
    polTagOtr(225, 0, 0, 0, 0, 0, -300, "#000", 2) +
    polTagOtr(300, 0, 0, 0, 0, 0, -300, "#000", 2) +
    polTagObInd(330, 10, null, "h", 3) +
    polTagObInd(25, 315, null, "P", 3) +
    polTagObInd(-40, 290, null, "P", 3 + "max") +
    "</g>" +
    "</svg>";

//План скоростей.
export const planSk = polPlSkTag(["sk_VA", "sk_VBA", "sk_VB",
    "sk_VS2A", "sk_VS2", "sk_VDB", "sk_VD", "sk_VS4B", "sk_VS4"]);

//План ускорений.
export const planUsk = polPlUskTag(["usk_AA", "usk_ABAN", "usk_ABAT", "usk_ABA", "usk_AB",
    "usk_AS2A", "usk_AS2", "usk_ADBN", "usk_ADBT", "usk_ADB", "usk_AD", "usk_AS4B", "usk_AS4"]);

//План сил второй группы Ассура.
export const planSil2 = polPlSilTag(2, ["sil_R05", "sil_P5", "sil_FI5",
    "sil_G5", "sil_FI4", "sil_G4", "sil_R34", "sil_R54", "sil_R45"]);

//План сил первой группы Ассура.
export const planSil1 = polPlSilTag(1, ["sil_R43", "sil_R03", "sil_P3",
    "sil_FI3", "sil_G3", "sil_FI2", "sil_G2", "sil_R12", "sil_R32", "sil_R23"]);

//План сил начального механизма.
export const planSilNach = polPlSilTag("nach", ["sil_R21", "sil_G1", "sil_R01"]);

