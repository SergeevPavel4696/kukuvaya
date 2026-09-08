import {
    polTagCMIssl, polTagNaprVr, polTagObTochInd, polTagObToch, polTagObZv, polTagOpSk,
    polTagOpVr, polPlSkTag, polPlUskTag, polTagPolzIssl, polTagShIssl, polTagZvIssl, polTagObInd, polPlSilTag
} from "../meh-svg-utils.js";
import {
    polTagDug,
    polTagKrPu, polTagOkrPu, polTagOtr, polTagOtrPu, polTagOtrShPu, polTagPr, polTagStrelka
} from "../../../scripts/utils-svg-geom.js";


//Рисунок задания.
export const zadanie =
    "<svg viewBox=\"0 0 532 218\" width=\"532\" height=\"218\" class=\"risunok\">" +
    "<g transform=\"translate(79,167)\">" +
    "<!--Опоры вращения-->" +
    polTagOpVr(null, null, null, null, null) +
    polTagOpVr(100, 25, null, null, null) +
    "<!--Опора скольжения-->" +
    polTagOpSk(225, 25, null, 142, true, false, null, null) +
    "<!--Звенья-->" +
    polTagZvIssl(null, null, 135, 50.0632, 11, null) +
    polTagZvIssl(-35.40, 35.40, 52.7082, 124.9434, 11, null) +
    polTagZvIssl(100, 25, 118.5336, 124.9805, 11, null) +
    polTagZvIssl(40.3, 134.8, 342.9759, 375.0333, 11, null) +
    polTagPolzIssl(398.9, 25, null, null) +
    "<!--Шарниры-->" +
    polTagShIssl(-35.4, 35.4, null) +
    polTagShIssl(40.3, 134.8, null) +
    polTagShIssl(398.9, 25, null) +
    "<!--Центры тяжести-->" +
    polTagCMIssl(2.5, 85, null) +
    polTagCMIssl(70.2, 79.9, null) +
    polTagCMIssl(219.6, 79.9, null) +
    "<!--Направление вращения кривошипа-->" +
    polTagNaprVr(null, null, 135, 42, 45, null) +
    "<!--Обозначения-->" +
    polTagObZv(-5, 26, 1, 0, -10, -15, 5) +
    polTagObZv(-10, 120, 2, 17, -10, 35, 5) +
    polTagObZv(55, 30, 3, 20, -10, 30, -20) +
    polTagObZv(270, 80, 4, 0, 0, -10, 15) +
    polTagObZv(350, -20, 5, 20, -15, 30, -40) +
    polTagObTochInd(55, 5, "O,S", 1) +
    polTagObToch(-55, 42, "A") +
    polTagObTochInd(-10, 90, "S", 2) +
    polTagObToch(40, 145, "B") +
    polTagObTochInd(95, 80, "S", 3) +
    polTagObToch(117, 27, "C") +
    polTagObTochInd(230, 90, "S", 4) +
    polTagObTochInd(420, 50, "D,S", 5) +
    polTagObTochInd(-60, 15, "φ", 1) +
    polTagObToch(42, -20, "x") +
    polTagObToch(125, 7, "y") +
    polTagOtrShPu(-65, null, null, 165, "#000", 1, "15 5 2 5", null) +
    polTagOtrShPu(100, null, 90, 25, "#000", 1, "15 5 2 5", null) +
    polTagOtrShPu(100, 25, null, 125, "#000", 1, "15 5 2 5", null) +
    "</g>" +
    "</svg>";

//Подвижный механизм.
export const mehanismPodv =
    "<svg id=\"meh_ris\" class=\"meh__ris\">" +
    "<g id=\"meh_ris-1\">" +
    polTagOpVr(null, null, null, null, "shO_ris") +
    polTagOpVr(null, null, null, "st3_ris", "shC_ris") +
    polTagOpSk(null, null, null, 0, false, false, "st5_ris", "tr5_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv1_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv2_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv3_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv4_ris") +
    polTagPolzIssl(null, null, null, "zv5_ris") +
    polTagShIssl(0, 0, "shA_ris") +
    polTagShIssl(0, 0, "shB_ris") +
    polTagShIssl(0, 0, "shD_ris") +
    polTagCMIssl(0, 0, "s2_ris") +
    polTagCMIssl(0, 0, "s3_ris") +
    polTagCMIssl(0, 0, "s4_ris") +
    polTagOtrShPu(null, null, null, 0, "#000", 2, "15 5 2 5", "x_ris") +
    polTagOtrShPu(null, null, null, 0, "#000", 2, "15 5 2 5", "y_ris") +
    "</g>" +
    "</svg>";

//Механизм с интерактивными элементами.
export const mehanismInter =
    "<svg id=\"meh_ris\" viewBox=\"0 0 493 213\" width=\"493\" height=\"213\" visibility=\"hidden\" " +
    "class=\"risunok-inter\">" +
    polTagPr(null, null, null, 0, 0, 213, 493, "#fff", "#000", 3, null) +
    "<g transform=\"translate(56.5,156.5)\">" +
    polTagOpVr(null, null, null, "st_1", "sh_O") +
    polTagOpVr(100, 25, null, "st_3", "sh_C") +
    polTagOpSk(225, 25, null, 142, false, false, "st_5", null) +
    polTagZvIssl(null, null, 135, 50.0632, 11, "zv_OA") +
    polTagZvIssl(-35.40, 35.40, 52.7082, 124.9434, 11, "zv_AB") +
    polTagZvIssl(100, 25, 118.5336, 124.9805, 11, "zv_BC") +
    polTagZvIssl(40.3, 134.8, 342.9759, 375.0333, 11, "zv_BD") +
    polTagPolzIssl(398.9, 25, null, "pol") +
    polTagShIssl(-35.4, 35.4, "sh_A") +
    polTagShIssl(40.3, 134.8, "sh_B") +
    polTagShIssl(398.9, 25, "sh_D") +
    polTagCMIssl(2.5, 85, "S2") +
    polTagCMIssl(70.2, 79.9, "S3") +
    polTagCMIssl(219.6, 79.9, "S4") +
    polTagOkrPu(0, 0, 50, "none", "#000", 2, "15 5 2 5", "tr_A") +
    polTagOtrPu(5, null, null, 95, "#000", 2, "15 5 2 5", "X") +
    polTagOtrPu(100, null, 90, 25, "#000", 2, "15 5 2 5", "Y") +
    polTagOtrPu(105, 25, null, 120, "#000", 2, "15 5 2 5", "tr_D") +
    polTagKrPu("tr_S2",
        "-20.7 -55.2 -19.6 -57.8 -18.4 -60.4 -17.0 -63.0 -15.6 -65.6 -13.9 -68.1 -12.1 -70.6 -10.2 -73.1 -8.2 " +
        "-75.4 -6.0 -77.7 -3.7 -80.0 -1.3 -82.1 1.2 -84.1 3.8 -86.0 6.5 -87.9 9.3 -89.6 12.1 -91.1 15.0 -92.6 18.0 " +
        "-93.9 21.0 -95.0 24.0 -96.0 27.0 -96.9 30.0 -97.7 33.0 -98.2 35.9 -98.7 38.8 -99.0 41.6 -99.2 44.3 -99.2 " +
        "46.9 -99.1 49.4 -98.8 51.7 -98.5 53.8 -98.0 55.7 -97.4 57.3 -96.7 58.7 -95.9 59.8 -95.0 60.6 -94.0 61.0 " +
        "-92.9 61.0 -91.7 60.6 -90.3 59.8 -88.8 58.5 -87.1 56.9 -85.2 54.8 -83.1 52.4 -80.6 49.7 -77.9 46.9 -74.9 " +
        "43.9 -71.7 40.9 -68.2 38.0 -64.5 35.3 -60.7 32.6 -56.9 30.2 -53.1 27.9 -49.4 25.8 -45.8 23.9 -42.4 22.0 " +
        "-39.1 20.3 -36.0 18.6 -33.1 17.0 -30.4 15.4 -27.9 13.9 -25.6 12.4 -23.5 10.9 -21.5 9.3 -19.8 7.8 -18.2 6.3 " +
        "-16.8 4.8 -15.6 3.2 -14.6 1.7 -13.7 0.2 -13.0 -1.4 -12.5 -2.9 -12.2 -4.5 -12.0 -6.0 -11.9 -7.5 -12.1 -8.9 " +
        "-12.3 -10.4 -12.8 -11.8 -13.3 -13.2 -14.1 -14.5 -14.9 -15.7 -16.0 -16.9 -17.1 -18.0 -18.4 -19.1 -19.8 -20.0 " +
        "-21.3 -20.9 -23.0 -21.7 -24.8 -22.3 -26.7 -22.9 -28.6 -23.4 -30.7 -23.7 -32.9 -23.9 -35.2 -24.0 -37.5 -23.9 " +
        "-39.9 -23.7 -42.3 -23.4 -44.8 -22.9 -47.4 -22.3 -50.0 -21.6 -52.6 -20.7 -55.2") +
    polTagKrPu("tr_B", "-15.2,-73.4 A 125,125 0 0,1 90.7,-149.7") +
    polTagKrPu("tr_S3", "42.4,-49.2 A 62.5,62.5 0 0,1 95.3,-87.3") +
    polTagKrPu("tr_S4",
        "170.7 -49.2 170.7 -49.2 170.7 -49.3 170.8 -49.3 170.8 -49.4 170.9 -49.5 170.9 -49.6 171.1 " +
        "-49.7 171.1 -49.8 171.3 -50.0 171.3 -50.1 171.6 -50.4 171.6 -50.4 171.8 -50.8 172.0 -50.9 172.2 -51.2 " +
        "172.4 -51.5 172.6 -51.7 173.0 -52.2 173.0 -52.2 173.5 -52.8 173.7 -53.1 174.0 -53.4 174.5 -54.0 174.6 " +
        "-54.1 175.2 -54.8 175.5 -55.1 175.9 -55.5 176.6 -56.3 176.7 -56.3 177.5 -57.1 178.0 -57.7 178.3 -57.9 " +
        "179.3 -58.8 179.7 -59.2 180.3 -59.7 181.4 -60.6 181.6 -60.8 182.5 -61.6 183.8 -62.6 183.9 -62.6 185.1 " +
        "-63.6 186.5 -64.5 186.5 -64.6 188.0 -65.6 189.6 -66.6 189.6 -66.6 191.3 -67.7 191.3 -67.7 193.0 -68.7 " +
        "193.1 -68.8 194.9 -69.8 196.8 -70.8 197.1 -71.0 198.9 -71.9 201.0 -72.9 201.7 -73.2 203.2 -73.9 205.5 " +
        "-74.9 206.8 -75.4 207.9 -75.9 210.4 -76.8 212.3 -77.5 212.9 -77.8 215.5 -78.7 218.1 -79.5 218.2 -79.5 " +
        "221.0 -80.3 223.8 -81.1 224.2 -81.2 226.6 -81.8 229.5 -82.5 230.3 -82.7 232.4 -83.1 235.3 -83.7 236.3 " +
        "-83.9 238.2 -84.3 241.1 -84.8 242.0 -84.9 244.0 -85.2 246.8 -85.6 247.3 -85.7 249.6 -85.9 252.1 -86.2 " +
        "252.2 -86.2 254.8 -86.5 256.2 -86.6 257.2 -86.7 259.4 -86.9 259.7 -86.9 261.4 -87.0 262.5 -87.1 263.2 " +
        "-87.1 264.7 -87.2 264.8 -87.2 266.0 -87.3 266.2 -87.3 266.9 -87.3 267.1 -87.3 267.4 -87.3 267.5 -87.3") +
    "</g>" +
    "</svg>";

//Начальный механизм.
export const nach =
    "<svg viewBox=\"0 0 63 99\" width=\"63\" height=\"99\" class=\"risunok\">" +
    "<g transform=\"translate(34,48)\">" +
    polTagOpVr(null, null, null, null, null) +
    polTagZvIssl(null, null, 135, 50.0632, 11, null) +
    polTagObZv(-5, 26, 1, 0, -10, -15, 5) +
    "</g>" +
    "</svg>";

//Группа 1.
export const gr1 =
    "<svg viewBox=\"0 0 172 168\" width=\"172\" height=\"168\" class=\"risunok\">" +
    "<g transform=\"translate(43,142)\">" +
    polTagOpVr(100, 25, null, null, null) +
    polTagZvIssl(-35.40, 35.40, 52.7082, 124.9434, 11, null) +
    polTagZvIssl(100, 25, 118.5336, 124.9805, 11, null) +
    polTagShIssl(-35.4, 35.4, null) +
    polTagShIssl(40.3, 134.8, null) +
    polTagCMIssl(2.5, 85, null) +
    polTagCMIssl(70.2, 79.9, null) +
    polTagObZv(-10, 120, 2, 17, -10, 35, 5) +
    polTagObZv(55, 30, 3, 20, -10, 30, -20) +
    "</g>" +
    "</svg>";

//Группа 2.
export const gr2 =
    "<svg viewBox=\"0 0 419 163\" width=\"419\" height=\"163\" class=\"risunok\">" +
    "<g transform=\"translate(-33,142)\">" +
    polTagOpSk(225, 25, null, 142, true, false, null, null) +
    polTagZvIssl(40.3, 134.8, 342.9759, 375.0333, 11, null) +
    polTagPolzIssl(398.9, 25, null, null) +
    polTagShIssl(40.3, 134.8, null) +
    polTagShIssl(398.9, 25, null) +
    polTagCMIssl(219.6, 79.9, null) +
    polTagObZv(270, 80, 4, 0, 0, -10, 15) +
    polTagObZv(350, -20, 5, 20, -15, 30, -40) +
    "</g>" +
    "</svg>";

//Диаграмма изменения силы полезного сопротивления.
export const diSil =
    "<svg viewBox=\"0 0 390 360\" width=\"390\" height=\"360\" class=\"risunok\">" +
    "<g transform=\"translate(50,240)\">" +
    polTagStrelka(null, 360, -20, null) +
    polTagStrelka(null, 360, null, -120, 90) +
    polTagOtr(0, 200, 0, 0, 0, 300, 0, "#000", 4) +
    polTagOtr(0, -100, 0, 0, 0, 300, 0, "#000", 4) +
    polTagOtr(300, -100, 0, 0, 0, 0, -300, "#000", 2) +
    polTagObInd(330, 10, null, "h", 5) +
    polTagObInd(-20, 195, null, "P", "пр") +
    polTagObInd(-30, -105, null, "P", "обр") +
    "</g>" +
    "</svg>";

//План скоростей.
export const planSk = polPlSkTag(["sk_VA", "sk_VBA", "sk_VB", "sk_VS2A", "sk_VS2", "sk_VS3", "sk_VDB", "sk_VD", "sk_VS4B", "sk_VS4"]);

//План ускорений.
export const planUsk = polPlUskTag(["usk_AA", "usk_ABAN", "usk_ABCN", "usk_ABAT", "usk_ABCT", "usk_ABA",
    "usk_AB", "usk_AS2A", "usk_AS2", "usk_AS3", "usk_ADBN", "usk_ADBT", "usk_ADB", "usk_AD", "usk_AS4B", "usk_AS4"]);

//План сил второй группы Ассура.
export const planSil2 = polPlSilTag(2, ["sil_R05", "sil_P5", "sil_FI5", "sil_G5",
    "sil_FIMAT", "sil_GMAT", "sil_FI4", "sil_G4", "sil_R34", "sil_R54", "sil_R45"]);

//План сил первой группы Ассура.
export const planSil1 = polPlSilTag(1, ["sil_R43", "sil_R03T",  "sil_R03N",  "sil_R03", "sil_FI3",
    "sil_G3", "sil_R12T",  "sil_R12N",  "sil_R12", "sil_FI2", "sil_G2", "sil_R32", "sil_R23"]);

//План сил начального механизма.
export const planSilNach = polPlSilTag("nach", ["sil_R21", "sil_G1", "sil_R01"]);
