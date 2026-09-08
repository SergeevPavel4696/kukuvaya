import {
    polTagCMIssl, polTagNaprVr, polTagObTochInd, polTagObToch, polTagObZv, polTagOpVr, polPlSkTag,
    polPlUskTag, polTagPolzIssl, polTagShIssl, polTagZvIssl, polPlSilTag, polTagObInd, polTagOpSk1
} from "../meh-svg-utils.js";
import {
    polTagKrPu, polTagOkrPu, polTagOtr, polTagOtrPu, polTagOtrShPu, polTagPr, polTagStrelka
} from "../../../scripts/utils-svg-geom.js";


//Рисунок задания.
export const zadanie =
    "<svg viewBox=\"0 0 440 478\" width=\"440\" height=\"478\" class=\"risunok\">" +
    "<g transform=\"translate(235,227)\">" +
    "<!--Опоры вращения-->" +
    polTagOpVr(null, null, null, null, null) +
    polTagOpVr(null, -200, null, null, null) +
    "<!--Опоры скольжения-->" +
    polTagOpSk1(-180, 175, 180, null) +
    polTagOpSk1(150, 175, null, null) +
    "<!--Звенья-->" +
    polTagZvIssl(null, null, 45, 50, 11, null) +
    polTagPolzIssl(35.3553, 35.3553, 81.4568, null) +
    polTagZvIssl(null, -200, 81.4568, 237.9961, 14, null) +
    polTagZvIssl(35.3553, 35.3553, 81.4568, 162.0039, 41, null) +
    polTagZvIssl(59.4217, 195.5617, 187.8788, 150, 11, null) +
    polTagZvIssl(-235, 175, null, 145.8377, 26, null) +
    polTagZvIssl(-89.1623, 175, null, 294.1623, 62, null) +
    polTagZvIssl(100, 175, 270, 30, 32, null) +
    "<!--Шарниры-->" +
    polTagShIssl(35.3553, 35.3553, null) +
    polTagShIssl(59.4217, 195.5617, null) +
    polTagShIssl(-89.1623, 175, null) +
    "<!--Центр тяжести-->" +
    polTagCMIssl(29.7109, -2.2191, null) +
    polTagCMIssl(-14.8703, 185.2809, null) +
    polTagCMIssl(0, 175, null) +
    "<!--Направление вращения кривошипа-->" +
    polTagNaprVr(null, null, 45, 40, 225, null) +
    "<!--Обозначения-->" +
    polTagObZv(-25, 10, 1, 15, -10, 35, 0) +
    polTagObZv(-10, 55, 2, 20, -10, 40, 0) +
    polTagObZv(30, -120, 3, 0, -10, -15, -15) +
    polTagObZv(5, 195, 4, 20, -10, 30, 2) +
    polTagObZv(-150, 185, 5, 20, -10, 30, 10) +
    polTagObTochInd(-20, -12, "O,S", 1) +
    polTagObToch(65, 20, "A") +
    polTagObToch(20, -210, "B") +
    polTagObTochInd(52, -25, "S", 3) +
    polTagObToch(60, 205, "C") +
    polTagObTochInd(-15, 195, "S", 4) +
    polTagObToch(-88, 185, "D") +
    polTagObTochInd(10, 145, "S", 5) +
    polTagObTochInd(-35, 35, "φ", 1) +
    polTagOtrShPu(null, -225, 90, 250, "#000", 1, "15 5 2 5", null) +
    polTagOtrShPu(-25, -200, null, 50, "#000", 1, "15 5 2 5", null) +
    polTagOtrShPu(-25, null, null, 50, "#000", 1, "15 5 2 5", null) +
    "</g>" +
    "</rect>";

//Подвижный механизм.
export const mehanismPodv =
    "<svg id=\"meh_ris\" class=\"meh__ris\">" +
    "<g id=\"meh_ris-1\">" +
    polTagOpVr(null, null, null, null, "shO_ris") +
    polTagOpVr(null, null, null, "st3_ris", "shB_ris") +
    polTagOpSk1(null, null, null, "st5l1_ris") +
    polTagOpSk1(null, null, null, "st5l2_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv1_ris") +
    polTagPolzIssl(null, null, null, "zv2_ris") +
    polTagZvIssl(null, null, null, 0, 14, "zv3B_ris") +
    polTagZvIssl(null, null, null, 0, 41, "zv3A_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv4_ris") +
    polTagZvIssl(null, null, null, 0, 12, "zv5L1_ris") +
    polTagZvIssl(null, null, null, 0, 12, "zv5L2_ris") +
    polTagZvIssl(null, null, null, 0, 32, "zv5H_ris") +
    polTagShIssl(0, 0, "shA_ris") +
    polTagShIssl(0, 0, "shC_ris") +
    polTagShIssl(0, 0, "shD_ris") +
    polTagCMIssl(0, 0, "s3_ris") +
    polTagCMIssl(0, 0, "s4_ris") +
    polTagCMIssl(0, 0, "s5_ris") +
    polTagOtrShPu(null, null, 90, 0, "#000", 2, "15 5 2 5", "ob_ris") +
    polTagOtrShPu(null, null, 90, 0, "#000", 2, "15 5 2 5", "tr5_ris") +
    "</g>" +
    "</svg>";

//Механизм с интерактивными элементами.
export const mehanismInter =
    "<svg id=\"meh_ris\" viewBox=\"0 0 450 466\" width=\"450\" height=\"466\" visibility=\"hidden\" " +
    "class=\"risunok-inter\">" +
    polTagPr(null, null, null, 0, 0, 466, 450, "#fff", "#000", 3, null) +
    "<g transform=\"translate(240,209)\">" +
    polTagOpVr(null, null, null, "st_1", "sh_O") +
    polTagOpVr(null, -200, null, "st_3", "sh_B") +
    polTagOpSk1(-180, 175, 180, "st_5l1") +
    polTagOpSk1(150, 175, null, "st_5l2") +
    polTagZvIssl(null, null, 45, 50, 11, "zv_OA") +
    polTagPolzIssl(35.3553, 35.3553, 81.4568, "pol2") +
    polTagZvIssl(null, -200, 81.4568, 237.9961, 14, "zv_BA") +
    polTagZvIssl(35.3553, 35.3553, 81.4568, 162.0039, 41, "zv_AC") +
    polTagZvIssl(59.4217, 195.5617, 187.8788, 150, 11, "zv_CD") +
    polTagZvIssl(-235, 175, null, 145.8377, 26, "zv_5L1") +
    polTagZvIssl(-89.1623, 175, null, 294.1623, 62, "zv_5L2") +
    polTagZvIssl(100, 175, 270, 30, 32, "zv_5H") +
    polTagShIssl(35.3553, 35.3553, "sh_A") +
    polTagShIssl(59.4217, 195.5617, "sh_C") +
    polTagShIssl(-89.1623, 175, "sh_D") +
    polTagCMIssl(29.7109, -2.2191, "S3") +
    polTagCMIssl(-14.8703, 185.2809, "S4") +
    polTagCMIssl(0, 175, "S5") +
    polTagOkrPu(0, 0, 50, "none", "#000", 2, "15 5 2 5", "tr_A") +
    polTagKrPu("tr_S3", "-50,6.3508 A 200,200 0 0,1 50,6.3508") +
    polTagKrPu("tr_C", "-100,-187.2983 A 400,400 0 0,1 100,-187.2983") +
    polTagKrPu("tr_S4", "-174.7 -181.1 -174.6 -181.2 -174.5 -181.2 -174.0 -181.2 -173.9 -181.3 -173.0 " +
        "-181.4 -172.9 -181.4 -171.7 -181.5 -171.4 -181.6 -170.1 -181.7 -169.4 -181.8 -168.2 -182.0 -166.9 -182.1 " +
        "-166.0 -182.2 -164.0 -182.4 -163.5 -182.5 -160.8 -182.8 -160.5 -182.8 -157.8 -183.1 -156.5 -183.3 -154.6 " +
        "-183.4 -151.9 -183.7 -151.2 -183.8 -147.6 -184.1 -146.9 -184.2 -143.9 -184.5 -141.3 -184.7 -139.9 -184.8 " +
        "-135.8 -185.1 -135.3 -185.2 -131.6 -185.4 -128.8 -185.6 -127.2 -185.7 -122.7 -186.0 -121.8 -186.1 -118.1 " +
        "-186.3 -114.5 -186.5 -113.4 -186.5 -108.7 -186.8 -106.8 -186.8 -103.8 -186.9 -98.9 -187.1 -98.8 -187.1 " +
        "-94.0 -187.2 -90.6 -187.3 -89.0 -187.4 -84.0 -187.4 -82.3 -187.5 -79.0 -187.5 -74.0 -187.5 -74.0 -187.5 " +
        "-74.0 -187.5 -68.9 -187.5 -65.6 -187.5 -63.9 -187.4 -58.9 -187.4 -57.3 -187.3 -54.0 -187.2 -49.2 -187.1 " +
        "-49.1 -187.1 -44.3 -186.9 -41.4 -186.8 -39.5 -186.8 -34.8 -186.5 -33.8 -186.5 -30.2 -186.3 -26.6 -186.1 " +
        "-25.7 -186.0 -21.3 -185.7 -19.7 -185.6 -17.0 -185.4 -13.3 -185.2 -12.8 -185.1 -8.8 -184.8 -7.4 -184.7 " +
        "-4.9 -184.5 -2.0 -184.2 -1.2 -184.1 2.3 -183.8 3.0 -183.7 5.6 -183.4 7.4 -183.3 8.7 -183.1 11.3 -182.8 " +
        "11.6 -182.8 14.3 -182.5 14.7 -182.4 16.7 -182.2 17.6 -182.1 18.9 -182.0 20.0 -181.8 20.7 -181.7 22.0 " +
        "-181.6 22.3 -181.5 23.4 -181.4 23.6 -181.4 24.5 -181.2 24.5 -181.3 25.1 -181.2 25.1 -181.2 25.3 -181.1") +
    "</g>" +
    "</rect>";

//Начальный механизм.
export const nach =
    "<svg viewBox=\"0 0 62 85\" width=\"62\" height=\"85\" class=\"risunok\">" +
    "<g transform=\"translate(29,34)\">" +
    polTagOpVr(null, null, null, null, null) +
    polTagZvIssl(null, null, 45, 50, 11, null) +
    polTagObZv(-25, 10, 1, 15, -10, 35, 0) +
    "</g>" +
    "</rect>";

//Группа 1.
export const gr1 =
    "<svg viewBox=\"0 0 90 442\" width=\"90\" height=\"442\" class=\"risunok\">" +
    "<g transform=\"translate(29,191)\">" +
    polTagOpVr(null, -200, null, null, null) +
    polTagPolzIssl(35.3553, 35.3553, 81.4568, null) +
    polTagZvIssl(null, -200, 81.4568, 237.9961, 14, null) +
    polTagZvIssl(35.3553, 35.3553, 81.4568, 162.0039, 41, null) +
    polTagShIssl(35.3553, 35.3553, null) +
    polTagCMIssl(29.7109, -2.2191, null) +
    polTagObZv(-10, 55, 2, 20, -10, 40, 0) +
    polTagObZv(30, -120, 3, 0, -10, -15, -15) +
    "</g>" +
    "</rect>";

//Группа 2.
export const gr2 =
    "<svg viewBox=\"0 0 440 73\" width=\"440\" height=\"73\" class=\"risunok\">" +
    "<g transform=\"translate(235,218)\">" +
    polTagOpSk1(-180, 175, 180, null) +
    polTagOpSk1(150, 175, null, null) +
    polTagZvIssl(59.4217, 195.5617, 187.8788, 150, 11, null) +
    polTagZvIssl(-235, 175, null, 145.8377, 26, null) +
    polTagZvIssl(-89.1623, 175, null, 294.1623, 62, null) +
    polTagZvIssl(100, 175, 270, 30, 32, null) +
    polTagShIssl(59.4217, 195.5617, null) +
    polTagShIssl(-89.1623, 175, null) +
    polTagCMIssl(-14.8703, 185.2809, null) +
    polTagCMIssl(0, 175, null) +
    polTagObZv(5, 195, 4, 20, -10, 30, 2) +
    polTagObZv(-150, 185, 5, 20, -10, 30, 10) +
    "</g>" +
    "</rect>";

//План скоростей.
export const planSk = polPlSkTag(["sk_VA1", "sk_VA3A1", "sk_VA3", "sk_VS3", "sk_VC", "sk_VDC", "sk_VD", "sk_VS4C", "sk_VS4"]);

//План ускорений.
export const planUsk = polPlUskTag(["usk_AA1", "usk_AA3K", "usk_AA3A1", "usk_AA3BN", "usk_AA3BT",
    "usk_AA3", "usk_AS3", "usk_AC", "usk_ADCN", "usk_ADCT", "usk_ADC", "usk_AD", "usk_AS4C", "usk_AS4"]);

//Диаграмма изменения силы полезного сопротивления.
export const diSil =
    "<svg viewBox=\"0 0 400 360\" width=\"400\" height=\"360\" class=\"risunok\">" +
    "<g transform=\"translate(60,340)\">" +
    polTagStrelka(null, 360, -20, null) +
    polTagStrelka(null, 360, null, -20, 90) +
    polTagOtr(30, 300, 0, 0, 0, 240, 0, "#000", 4) +
    polTagOtr(30, 0, 0, 0, 0, 0, -300, "#000", 2) +
    polTagOtr(270, 0, 0, 0, 0, 0, -300, "#000", 2) +
    polTagObInd(-40, 290, null, "P", "рез") +
    "</g>" +
    "</svg>";

//План сил второй группы Ассура.
export const planSil2 = polPlSilTag(2, ["sil_R05L1", "sil_R05L2", "sil_P5",
    "sil_FI5", "sil_G5", "sil_FI4", "sil_G4", "sil_R34", "sil_R54", "sil_R45"]);

//План сил первой группы Ассура.
export const planSil1 = polPlSilTag(1, ["sil_R43", "sil_R03", "sil_FI3", "sil_G3",
    "sil_FI2", "sil_G2", "sil_R12", "sil_R12T", "sil_R12N", "sil_R32", "sil_R23"]);

//План сил начального механизма.
export const planSilNach = polPlSilTag("nach", ["sil_R21", "sil_G1", "sil_R01"]);
