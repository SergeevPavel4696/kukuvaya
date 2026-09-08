import {
    polTagCMIssl, polTagNaprVr, polTagObTochInd, polTagObToch, polTagObZv, polTagOpVr, polPlSkTag,
    polPlUskTag, polTagPolzIssl, polTagShIssl, polTagZvIssl, polPlSilTag, polTagObInd, polTagOpSk1
} from "../meh-svg-utils.js";
import {
    polTagKrPu, polTagOkrPu, polTagOtr, polTagOtrPu, polTagOtrShPu, polTagPr, polTagStrelka
} from "../../../scripts/utils-svg-geom.js";


//Рисунок задания.
export const zadanie =
    "<svg viewBox=\"0 0 310 597\" width=\"310\" height=\"597\" class=\"risunok\">" +
    "<g transform=\"translate(108,77)\">" +
    "<!--Опоры вращения-->" +
    polTagOpVr(null, null, 180, null, null) +
    polTagOpVr(100, null, 225, null, null) +
    "<!--Опоры скольжения-->" +
    polTagOpSk1(70, -255, 90, null) +
    polTagOpSk1(70, -395, -90, null) +
    "<!--Звенья-->" +
    polTagZvIssl(null, null, 250, 150, 11, null) +
    polTagPolzIssl(-51.3030, -140.9539, 42.9719, null) +
    polTagZvIssl(-51.3030, -140.9539, 222.9719, 80, 41, null) +
    polTagZvIssl(-51.3030, -140.9539, 42.9719, 206.7864, 46, null) +
    polTagZvIssl(100, null, 42.9719, 100, 61, null) +
    polTagZvIssl(173.1688, 68.1640, 259.460, 400, 11, null) +
    polTagZvIssl(100, -325.0870, 180, 30, 12, null) +
    polTagZvIssl(70, -170, 270, 310, 23, null) +
    polTagZvIssl(70, -480, 180, 10, 33, null) +
    polTagZvIssl(60, -480, 270, 30, 33, null) +
    polTagZvIssl(60, -510, 225, 10, 33, null) +
    "<!--Шарниры-->" +
    polTagShIssl(-51.3030, -140.9539, null) +
    polTagShIssl(173.1688, 68.1640, null) +
    polTagShIssl(100, -325.0870, null) +
    "<!--Центр тяжести-->" +
    polTagCMIssl(136.5844, -128.4615, null) +
    "<!--Направление вращения кривошипа-->" +
    polTagNaprVr(null, null, -110, 45, 110, null) +
    "<!--Обозначения-->" +
    polTagObZv(-57, -65, 1, 15, -10, 35, 0) +
    polTagObZv(-18, -165, 2, 0, -10, -20, -25) +
    polTagObZv(53, -80, 3, 0, -10, -15, -25) +
    polTagObZv(105, -75, 4, 20, -10, 40, 0) +
    polTagObZv(35, -320, 5, 20, -10, 35, -20) +
    polTagObTochInd(-20, -12, "O,S", 1) +
    polTagObToch(-70, -120, "A") +
    polTagObTochInd(142, -33, "B,S", 3) +
    polTagObToch(192, 55, "C") +
    polTagObTochInd(165, -140, "S", 4) +
    polTagObToch(120, -335, "D") +
    polTagObTochInd(22, -27, "φ", 1) +
    polTagObTochInd(45, -265, "Y", 1) +
    polTagObTochInd(45, -405, "Y", 2) +
    polTagObToch(70, -165, "a") +
    polTagObToch(40, -515, "b") +
    polTagOtrShPu(null, null, null, 100, "#000", 1, "15 5 2 5", null) +
    polTagOtrShPu(100, null, 270, 325.087, "#000", 1, "15 5 2 5", null) +
    "</g>" +
    "</rect>";

//Подвижный механизм.
export const mehanismPodv =
    "<svg id=\"meh_ris\" class=\"meh__ris\">" +
    "<g id=\"meh_ris-1\">" +
    polTagOpVr(null, null, null, null, "shO_ris") +
    polTagOpVr(null, null, null, "st3_ris", "shB_ris") +
    polTagOpSk1(null, null, 180, "st5y1_ris") +
    polTagOpSk1(null, null, 180, "st5y2_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv1_ris") +
    polTagPolzIssl(null, null, null, "zv2_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv3C_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv3A1_ris") +
    polTagZvIssl(null, null, null, 50, 42, "zv3A2_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv4_ris") +
    polTagZvIssl(null, null, null, 0, 22, "zv5Y_ris") +
    polTagZvIssl(null, null, null, 0, 12, "zv5A_ris") +
    polTagZvIssl(null, null, null, 0, 32, "zv5B_ris") +
    polTagShIssl(0, 0, "shA_ris") +
    polTagShIssl(0, 0, "shC_ris") +
    polTagShIssl(0, 0, "shD_ris") +
    polTagCMIssl(0, 0, "s4_ris") +
    polTagOtrShPu(null, null, null, 0, "#000", 2, "15 5 2 5", "ob_ris") +
    polTagOtrShPu(null, null, null, 0, "#000", 2, "15 5 2 5", "tr5_ris") +
    "</g>" +
    "</svg>";

//Механизм с интерактивными элементами.
export const mehanismInter =
    "<svg id=\"meh_ris\" viewBox=\"0 0 310 630\" width=\"310\" height=\"630\" visibility=\"hidden\" " +
    "class=\"risunok-inter\">" +
    polTagPr(null, null, null, 0, 0, 630, 310, "#fff", "#000", 3, null) +
    "<g transform=\"translate(105,105)\">" +
    polTagOpVr(null, null, 180, "st_1", "sh_O") +
    polTagOpVr(100, null, 225, "st_3", "sh_B") +
    polTagOpSk1(70, -255, 90, "st_5y1") +
    polTagOpSk1(70, -395, -90, "st_5y2") +
    polTagZvIssl(null, null, 250, 150, 11, "zv_OA") +
    polTagPolzIssl(-51.3030, -140.9539, 42.9719, "pol2") +
    polTagZvIssl(-51.3030, -140.9539, 42.9719, 206.7864, 41, "zv_AB") +
    polTagZvIssl(100, null, 42.9719, 100, 11, "zv_BC") +
    polTagZvIssl(173.1688, 68.1640, 259.460, 400, 11, "zv_CD") +
    polTagZvIssl(100, -325.0870, 180, 30, 12, "zv_5D") +
    polTagZvIssl(70, -170, 270, 310, 23, "zv_5Y") +
    polTagZvIssl(70, -480, 180, 10, 33, "zv_5B1") +
    polTagZvIssl(60, -480, 270, 30, 33, "zv_5B2") +
    polTagZvIssl(60, -510, 225, 10, 33, "zv_5B3") +
    polTagShIssl(-51.3030, -140.9539, "sh_A") +
    polTagShIssl(173.1688, 68.1640, "sh_C") +
    polTagShIssl(100, -325.0870, "sh_D") +
    polTagCMIssl(136.5844, -128.4615, "S4") +
    polTagOkrPu(0, 0, 100, "none", "#000", 2, "15 5 2 5", "tr_A") +
    polTagOkrPu(100, 0, 100, "none", "#000", 2, "15 5 2 5", "tr_C") +
    polTagOtrPu(null, null, null, 100, "#000", 2, "15 5 2 5", "tr_B") +
    polTagOtrPu(100, null, 270, 325.087, "#000", 2, "15 5 2 5", "tr_D") +
    polTagKrPu("tr_S4", "50.0 193.6 50.9 175.3 53.3 158.5 57.0 144.3 61.4 132.7 66.1 123.5 70.9 116.5 " +
        "75.6 111.2 80.0 107.3 84.3 104.5 88.2 102.5 92.0 101.1 95.5 100.4 98.8 100.0 101.9 100.1 104.9 100.4 " +
        "107.7 101.0 110.3 101.9 112.9 103.0 115.3 104.2 117.6 105.6 119.8 107.2 121.9 108.9 123.9 110.8 125.9 " +
        "112.8 127.7 114.9 129.5 117.1 131.2 119.4 132.8 121.8 134.3 124.3 135.8 127.0 137.2 129.7 138.5 132.5 " +
        "139.7 135.3 140.9 138.3 142.0 141.3 143.0 144.4 144.0 147.6 144.9 150.9 145.7 154.2 146.5 157.5 147.1 " +
        "160.9 147.7 164.4 148.3 167.9 148.7 171.5 149.1 175.1 149.4 178.8 149.7 182.4 149.9 186.2 150.0 189.9 " +
        "150.0 193.6 150.0 197.4 149.9 201.2 149.7 205.0 149.4 208.8 149.1 212.6 148.7 216.4 148.3 220.2 147.7 " +
        "224.0 147.1 227.8 146.5 231.5 145.7 235.3 144.9 238.9 144.0 242.6 143.0 246.2 142.0 249.7 140.9 253.2 " +
        "139.7 256.7 138.5 260.0 137.2 263.3 135.8 266.6 134.3 269.7 132.8 272.8 131.2 275.7 129.5 278.5 127.7 " +
        "281.3 125.9 283.9 123.9 286.3 121.9 288.7 119.8 290.8 117.6 292.8 115.3 294.6 112.9 296.2 110.3 297.6 " +
        "107.7 298.7 104.9 299.5 101.9 299.9 98.8 300.0 95.5 299.5 92.0 298.5 88.2 296.8 84.3 294.3 80.0 290.7 " +
        "75.6 285.8 70.9 279.2 66.1 270.7 61.4 259.8 57.0 246.4 53.3 230.4 50.9 212.5 50.0 193.6 ") +
    "</g>" +
    "</rect>";

//Начальный механизм.
export const nach =
    "<svg viewBox=\"0 0 83 187\" width=\"83\" height=\"187\" class=\"risunok\">" +
    "<g transform=\"translate(55,50)\">" +
    polTagOpVr(null, null, 180, null, null) +
    polTagZvIssl(null, null, 250, 150, 11, null) +
    polTagObZv(-57, -65, 1, 15, -10, 35, 0) +
    "</g>" +
    "</rect>";

//Группа 1.
export const gr1 =
    "<svg viewBox=\"0 0 280 260\" width=\"280\" height=\"260\" class=\"risunok\">" +
    "<g transform=\"translate(108,67)\">" +
    polTagOpVr(100, null, 225, null, null) +
    polTagPolzIssl(-51.3030, -140.9539, 42.9719, null) +
    polTagZvIssl(-51.3030, -140.9539, 222.9719, 80, 41, null) +
    polTagZvIssl(-51.3030, -140.9539, 42.9719, 206.7864, 41, null) +
    polTagZvIssl(100, null, 42.9719, 100, 11, null) +
    polTagShIssl(-51.3030, -140.9539, null) +
    polTagObZv(-18, -165, 2, 0, -10, -20, -25) +
    polTagObZv(53, -80, 3, 0, -10, -15, -25) +
    "</g>" +
    "</rect>";

//Группа 2.
export const gr2 =
    "<svg viewBox=\"0 0 143 597\" width=\"143\" height=\"597\" class=\"risunok\">" +
    "<g transform=\"translate(-37,77)\">" +
    polTagOpSk1(70, -255, 90, null) +
    polTagOpSk1(70, -395, -90, null) +
    polTagZvIssl(173.1688, 68.1640, 259.460, 400, 11, null) +
    polTagZvIssl(100, -325.0870, 180, 30, 12, null) +
    polTagZvIssl(70, -170, 270, 310, 23, null) +
    polTagZvIssl(70, -480, 180, 10, 33, null) +
    polTagZvIssl(60, -480, 270, 30, 33, null) +
    polTagZvIssl(60, -510, 225, 10, 33, null) +
    polTagShIssl(173.1688, 68.1640, null) +
    polTagShIssl(100, -325.0870, null) +
    polTagCMIssl(136.5844, -128.4615, null) +
    polTagObZv(105, -75, 4, 20, -10, 40, 0) +
    polTagObZv(35, -320, 5, 20, -10, 35, -20) +
    "</g>" +
    "</rect>";

//Диаграмма изменения силы полезного сопротивления.
export const diSil =
    "<svg viewBox=\"0 0 400 360\" width=\"400\" height=\"360\" class=\"risunok\">" +
    "<g transform=\"translate(60,340)\">" +
    polTagStrelka(null, 360, -20, null) +
    polTagStrelka(null, 360, null, -20, 90) +
    polTagOtr(15, 300, 0, 0, 0, 270, 0, "#000", 4) +
    polTagOtr(15, 0, 0, 0, 0, 0, -300, "#000", 2) +
    polTagOtr(285, 0, 0, 0, 0, 0, -300, "#000", 2) +
    polTagObInd(-40, 290, null, "P", "рез") +
    "</g>" +
    "</svg>";

//План скоростей.
export const planSk = polPlSkTag(["sk_VA1", "sk_VA3A1", "sk_VA3", "sk_VC", "sk_VDC", "sk_VD", "sk_VS4C", "sk_VS4"]);

//План ускорений.
export const planUsk = polPlUskTag(["usk_AA1", "usk_AA3K", "usk_AA3A1", "usk_AA3BN", "usk_AA3BT",
    "usk_AA3", "usk_AC", "usk_ADCN", "usk_ADCT", "usk_ADC", "usk_AD", "usk_AS4C", "usk_AS4"]);

//План сил второй группы Ассура.
export const planSil2 = polPlSilTag(2, ["sil_R05Y1", "sil_R05Y2", "sil_P5",
    "sil_FI5", "sil_G5", "sil_FI4", "sil_G4", "sil_R34", "sil_R54", "sil_R45"]);

//План сил первой группы Ассура.
export const planSil1 = polPlSilTag(1, ["sil_R43", "sil_R03", "sil_G3",
    "sil_FI2", "sil_G2", "sil_R12", "sil_R12T", "sil_R12N", "sil_R32", "sil_R23"]);

//План сил начального механизма.
export const planSilNach = polPlSilTag("nach", ["sil_R21", "sil_G1", "sil_R01"]);
