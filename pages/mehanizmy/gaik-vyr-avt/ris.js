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
    polTagObInd,
    polTagText
} from "../meh-svg-utils.js";
import {
    polTagKrPu, polTagOkrPu, polTagOtr, polTagOtrPu, polTagOtrShPu, polTagPr, polTagStrelka
} from "../../../scripts/utils-svg-geom.js";


//Рисунок задания.
export const zadanie =
    "<svg viewBox=\"0 0 463 425\" width=\"463\" height=\"425\" class=\"risunok\">" +
    "<g transform=\"translate(260,374)\">" +
    "<!--Опоры вращения-->" +
    polTagOpVr(null, null, null, null, null) +
    polTagOpVr(175, 275, null, null, null) +
    "<!--Опора скольжения-->" +
    polTagOpSk(-72.5537, 275, 180, 102, true, true, null, null) +
    "<!--Звенья-->" +
    polTagZvIssl(null, null, 135, 60, 11, null) +
    polTagZvIssl(-42.4264, 42.4264, 84.52, 300, 11, null) +
    polTagZvIssl(175, 275, 160.7144, 200, 11, null) +
    polTagZvIssl(-13.7769, 341.0553, 199.2856, 200, 11, null) +
    polTagPolzIssl(-202.5537, 275, null, null) +
    "<!--Шарниры-->" +
    polTagShIssl(-42.4264, 42.4264, null) +
    polTagShIssl(-13.7769, 341.0553, null) +
    polTagShIssl(-202.5537, 275, null) +
    "<!--Центры тяжести-->" +
    polTagCMIssl(-28.1016, 191.7408, null) +
    polTagCMIssl(80.6116, 308.0276, null) +
    polTagCMIssl(-108.1653, 308.0276, null) +
    "<!--Направление вращения кривошипа-->" +
    polTagNaprVr(null, null, 180, 45, 90, true) +
    "<!--Обозначения-->" +
    polTagObZv(-40, -10, 1, 15, -10, 25, -25) +
    polTagObZv(-5, 230, 2, 0, -10, -20, -15) +
    polTagObZv(10, 290, 3, 18, -10, 30, -30) +
    polTagObZv(-72, 292, 4, 0, -10, -10, -25) +
    polTagObZv(-175, 233, 5, 0, -15, -15, -35) +
    polTagObTochInd(50, 8, "O,S", 1) +
    polTagObToch(-60, 32, "A") +
    polTagObTochInd(-45, 185, "S", 2) +
    polTagObToch(-15, 352, "B") +
    polTagObTochInd(88, 318, "S", 3) +
    polTagObToch(173, 285, "C") +
    polTagObTochInd(-102, 318, "S", 4) +
    polTagObTochInd(-182, 300, "D,S", 5) +
    polTagObToch(90, -20, "a") +
    polTagObToch(185, 110, "b") +
    polTagOtrShPu(-null, null, null, 175, "#000", 1, "15 5 2 5", null) +
    polTagOtrShPu(175, null, 90, 275, "#000", 1, "15 5 2 5", null) +
    polTagOtrShPu(175, 275, 180, 247.5537, "#000", 1, "15 5 2 5", null) +
    "</g>" +
    "</svg>";

//Подвижный механизм.
export const mehanismPodv =
    "<svg id=\"meh_ris\" class=\"meh__ris\">" +
    "<g id=\"meh_ris-1\">" +
    polTagOpVr(null, null, null, null, "shO_ris") +
    polTagOpVr(null, null, null, "st3_ris", "shC_ris") +
    polTagOpSk(null, null, null, 0, false, true, "st5_ris", "tr5_ris") +
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
    polTagOtrShPu(null, null, null, 0, "#000", 2, "15 5 2 5", "a_ris") +
    polTagOtrShPu(null, null, null, 0, "#000", 2, "15 5 2 5", "b_ris") +
    "</g>" +
    "</svg>";

//Механизм с интерактивными элементами.
export const mehanismInter =
    "<svg id=\"meh_ris\" viewBox=\"0 0 448 433\" width=\"448\" height=\"433\" visibility=\"hidden\" " +
    "class=\"risunok-inter\">" +
    polTagPr(null, null, null, 0, 0, 433, 448, "#fff", "#000", 3, null) +
    "<g transform=\"translate(240,365)\">" +
    polTagOpVr(null, null, null, "st_1", "sh_O") +
    polTagOpVr(175, 275, null, "st_3", "sh_C") +
    polTagOpSk(-72.5537, 275, 180, 102, false, true, "st_5", null) +
    polTagZvIssl(null, null, 135, 60, 11, "zv_OA") +
    polTagZvIssl(-42.4264, 42.4264, 84.52, 300, 11, "zv_AB") +
    polTagZvIssl(175, 275, 160.7144, 200, 11, "zv_BC") +
    polTagZvIssl(-13.7769, 341.0553, 199.2856, 200, 11, "zv_BD") +
    polTagPolzIssl(-202.5537, 275, null, "pol") +
    polTagShIssl(-42.4264, 42.4264, "sh_A") +
    polTagShIssl(-13.7769, 341.0553, "sh_B") +
    polTagShIssl(-202.5537, 275, "sh_D") +
    polTagCMIssl(-28.1016, 191.7408, "S2") +
    polTagCMIssl(80.6116, 308.0276, "S3") +
    polTagCMIssl(-108.1653, 308.0276, "S4") +
    polTagOkrPu(0, 0, 60, "none", "#000", 2, "15 5 2 5", "tr_A") +
    polTagOtrPu(5, null, null, 170, "#000", 2, "15 5 2 5", "A") +
    polTagOtrPu(175, null, 90, 270, "#000", 2, "15 5 2 5", "B") +
    polTagOtrPu(170, 275, 180, 247.5537, "#000", 2, "15 5 2 5", "tr_D") +
    polTagKrPu("tr_S2", "17.7 -143.9 17.8 -147.7 17.8 -151.6 17.7 -155.5 17.6 -159.3 17.4 -163.2 17.1 " +
        "-167 16.8 -170.8 16.4 -174.5 15.9 -178.1 15.3 -181.5 14.7 -184.9 14 -188.1 13.2 -191.1 12.4 -194 11.4 " +
        "-196.6 10.4 -199.1 9.2 -201.3 8 -203.3 6.7 -205 5.3 -206.5 3.8 -207.7 2.2 -208.7 0.6 -209.4 -1.2 -209.8 " +
        "-3 -210 -4.9 -209.9 -6.9 -209.5 -8.9 -208.9 -10.9 -208.1 -13 -207 -15.1 -205.6 -17.2 -204.1 -19.3 -202.3 " +
        "-21.3 -200.3 -23.3 -198.1 -25.3 -195.7 -27.2 -193.1 -29 -190.3 -30.7 -187.4 -32.4 -184.4 -33.9 -181.2 " +
        "-35.4 -177.9 -36.7 -174.5 -37.8 -171 -38.9 -167.4 -39.8 -163.8 -40.5 -160.1 -41.1 -156.4 -41.6 -152.6 " +
        "-41.8 -148.9 -42 -145.2 -42 -141.4 -41.8 -137.8 -41.5 -134.2 -41 -130.6 -40.4 -127.1 -39.6 -123.7 -38.8 " +
        "-120.5 -37.7 -117.3 -36.6 -114.3 -35.4 -111.4 -34 -108.6 -32.6 -106 -31 -103.6 -29.4 -101.3 -27.7 -99.3 " +
        "-26 -97.4 -24.2 -95.7 -22.4 -94.2 -20.5 -92.9 -18.6 -91.8 -16.7 -91 -14.7 -90.3 -12.8 -89.8 -10.9 -89.6 " +
        "-9 -89.6 -7.1 -89.8 -5.3 -90.2 -3.5 -90.8 -1.7 -91.6 0 -92.6 1.7 -93.8 3.2 -95.2 4.8 -96.8 6.2 -98.6 7.6 " +
        "-100.6 8.9 -102.8 10.1 -105.1 11.2 -107.6 12.2 -110.3 13.2 -113.1 14 -116.1 14.8 -119.2 15.5 -122.4 16.1 " +
        "-125.7 16.6 -129.2 17 -132.8 17.3 -136.4 17.5 -140.1 17.7 -143.9") +
    polTagKrPu("tr_B", "-21.74,-239.01 A 200,200 0 0,1 -6.06,-359.95") +
    polTagKrPu("tr_S3", "76.63,-257.01 A 62.5,62.5 0 0,1 84.47,-317.47") +
    polTagKrPu("tr_S4", "-124.4 -281.4 -124 -283.4 -123.4 -285.3 -122.7 -287.4 -121.9 -289.4 -120.9 -291.4 " +
        "-119.8 -293.5 -118.6 -295.5 -117.3 -297.5 -115.9 -299.5 -114.3 -301.4 -112.8 -303.3 -111.1 -305.1 -109.5 " +
        "-306.8 -107.8 -308.4 -106.2 -309.9 -104.6 -311.2 -103.1 -312.5 -101.7 -313.6 -100.5 -314.6 -99.4 -315.4 " +
        "-98.4 -316.1 -97.7 -316.7 -97.1 -317.1 -96.8 -317.4 -96.6 -317.5 -96.6 -317.4 -96.9 -317.3 -97.3 -317 -97.9 " +
        "-316.5 -98.7 -315.9 -99.7 -315.2 -100.7 -314.4 -101.9 -313.5 -103.2 -312.4 -104.5 -311.3 -106 -310.1 -107.4 " +
        "-308.7 -108.9 -307.3 -110.4 -305.8 -111.9 -304.3 -113.3 -302.6 -114.7 -301 -116.1 -299.2 -117.3 -297.5 " +
        "-118.5 -295.7 -119.6 -293.8 -120.6 -292 -121.5 -290.1 -122.4 -288.3 -123 -286.4 -123.6 -284.5 -124.1 -282.7 " +
        "-124.5 -280.9 -124.7 -279.1 -124.9 -277.4 -125 -275.7 -125 -274 -124.9 -272.4 -124.7 -270.9 -124.5 -269.4 " +
        "-124.3 -268 -124 -266.6 -123.6 -265.4 -123.2 -264.2 -122.9 -263.1 -122.5 -262.1 -122.1 -261.2 -121.8 -260.3 " +
        "-121.4 -259.6 -121.1 -259 -120.8 -258.4 -120.6 -257.9 -120.4 -257.6 -120.3 -257.3 -120.2 -257.1 -120.1 -257 " +
        "-120.1 -257 -120.2 -257.1 -120.3 -257.3 -120.4 -257.6 -120.6 -258 -120.9 -258.4 -121.1 -259 -121.4 -259.6 " +
        "-121.8 -260.4 -122.1 -261.2 -122.5 -262.1 -122.9 -263.1 -123.3 -264.2 -123.6 -265.4 -124 -266.7 -124.3 -268 " +
        "-124.5 -269.4 -124.8 -270.9 -124.9 -272.5 -125 -274.2 -125 -275.9 -124.9 -277.7 -124.7 -279.5 -124.4 -281.4") +
    "</g>" +
    "</svg>";

//Начальный механизм.
export const nach =
    "<svg viewBox=\"0 0 68 91\" width=\"68\" height=\"91\" class=\"risunok\">" +
    "<g transform=\"translate(40,40)\">" +
    polTagOpVr(null, null, null, null, null) +
    polTagZvIssl(null, null, 135, 60, 11, null) +
    polTagObZv(-40, -10, 1, 15, -10, 25, -25) +
    "</g>" +
    "</svg>";

//Группа 1.
export const gr1 =
    "<svg viewBox=\"0 0 253 314\" width=\"253\" height=\"314\" class=\"risunok\">" +
    "<g transform=\"translate(50,349)\">" +
    polTagOpVr(175, 275, null, null, null) +
    polTagZvIssl(-42.4264, 42.4264, 84.52, 300, 11, null) +
    polTagZvIssl(175, 275, 160.7144, 200, 11, null) +
    polTagShIssl(-42.4264, 42.4264, null) +
    polTagShIssl(-13.7769, 341.0553, null) +
    polTagCMIssl(-28.1016, 191.7408, null) +
    polTagCMIssl(80.6116, 308.0276, null) +
    polTagObZv(-5, 230, 2, 0, -10, -20, -15) +
    polTagObZv(10, 290, 3, 18, -10, 30, -30) +
    "</g>" +
    "</svg>";

//Группа 2.
export const gr2 =
    "<svg viewBox=\"0 0 253 117\" width=\"253\" height=\"117\" class=\"risunok\">" +
    "<g transform=\"translate(260,349)\">" +
    polTagOpSk(-72.5537, 275, 180, 102, true, true, null, null) +
    polTagZvIssl(-13.7769, 341.0553, 199.2856, 200, 11, null) +
    polTagPolzIssl(-202.5537, 275, null, null) +
    polTagShIssl(-13.7769, 341.0553, null) +
    polTagShIssl(-202.5537, 275, null) +
    polTagCMIssl(-108.1653, 308.0276, null) +
    polTagObZv(-72, 292, 4, 0, -10, -10, -25) +
    polTagObZv(-175, 233, 5, 0, -15, -15, -35) +
    "</g>" +
    "</svg>";

//Диаграмма изменения силы полезного сопротивления.
export const diSil =
    "<svg viewBox=\"0 0 523 357\" width=\"523\" height=\"357\" class=\"risunok\">" +
    "<g transform=\"translate(112,220)\">" +
    polTagStrelka(null, 430, -20, null) +
    polTagStrelka(null, 240, null, -20, 90) +
    polTagOtr(90, null, 0, 0, 0, 30, -54, "#000", 4) +
    polTagOtr(120, 54, 0, 0, 0, 30, 54, "#000", 4) +
    polTagOtr(210, null, 0, 0, 0, 75, -180, "#000", 4) +
    polTagOtr(285, 180, 0, 0, 0, 15, 162, "#000", 4) +
    polTagOtr(120, null, 90, 0, 0, 54, 0, "#000", 2) +
    polTagOtr(285, null, 90, 0, 0, 180, 0, "#000", 2) +
    polTagOtr(300, null, 90, 0, 0, 30, 0, "#000", 2) +
    polTagOtr(null, 18, null, 0, 0, 300, 0, "#000", 2) +
    polTagOtr(null, 54, null, 0, 0, 120, 0, "#000", 2) +
    polTagOtr(null, 180, null, 0, 0, 285, 0, "#000", 2) +
    polTagText("0", 25, 2, -3, -23, 0) +
    polTagText("0,1", 25, 2, -3, 10, 0) +
    polTagText("0,3", 25, 2, -3, 46, 0) +
    polTagText("1", 25, 2, -3, 172, 0) +
    polTagText("0,3", 25, 1, 75, -23, 0) +
    polTagText("0,4", 25, 1, 120, -23, 0) +
    polTagText("0,5", 25, 1, 165, -23, 0) +
    polTagText("0,7", 25, 1, 215, -23, 0) +
    polTagText("0,95", 25, 1, 265, -23, 0) +
    polTagText("1", 25, 1, 300, -23, 0) +
    polTagObInd(-93, 195, null, "P", 5) +
    polTagObInd(-55, 195, null, "/P", "5 макс") +
    polTagObInd(325, 10, null, "S", 5) +
    polTagObInd(363, 10, null, "/S", "5 макс") +
    "</g>" +
    "<g transform=\"translate(112,330)\">" +
    polTagStrelka(null, 280, -20, null) +
    polTagStrelka(null, 96, null, -20, 90) +
    polTagOtr(75, 36, 0, 0, 0, 75, 0, "#000", 4) +
    polTagOtr(null, 36, null, 0, 0, 75, 0, "#000", 2) +
    polTagOtr(75, null, 90, 0, 0, 36, 0, "#000", 2) +
    polTagOtr(150, null, 90, 0, 0, 36, 0, "#000", 2) +
    polTagText("0", 25, 2, -3, -23, 0) +
    polTagText("0,2", 25, 2, -3, 28, 0) +
    polTagText("0,5", 25, 1, 75, -23, 0) +
    polTagText("1", 25, 1, 150, -23, 0) +
    polTagObInd(-93, 51, null, "P", 5) +
    polTagObInd(-55, 51, null, "/P", "5 макс") +
    polTagObInd(175, 10, null, "S", 5) +
    polTagObInd(213, 10, null, "/S", "5 макс") +
    "</g>" +
    "</svg>";

//План скоростей.
export const planSk = polPlSkTag(["sk_VA", "sk_VBA", "sk_VB", "sk_VS2A", "sk_VS2", "sk_VS3", "sk_VDB", "sk_VD", "sk_VS4B", "sk_VS4"]);

//План ускорений.
export const planUsk = polPlUskTag(["usk_AA", "usk_ABAN", "usk_ABCN", "usk_ABAT", "usk_ABCT", "usk_ABA",
    "usk_AB", "usk_AS2A", "usk_AS2", "usk_AS3", "usk_ADBN", "usk_ADBT", "usk_ADB", "usk_AD", "usk_AS4B", "usk_AS4"]);

//План сил второй группы Ассура.
export const planSil2 = polPlSilTag(2, ["sil_R05", "sil_P5", "sil_FI5",
    "sil_G5", "sil_FI4", "sil_G4", "sil_R34", "sil_R54", "sil_R45"]);

//План сил первой группы Ассура.
export const planSil1 = polPlSilTag(1, ["sil_R43", "sil_R03T", "sil_R03N", "sil_R03", "sil_FI3",
    "sil_G3", "sil_R12T", "sil_R12N", "sil_R12", "sil_FI2", "sil_G2", "sil_R32", "sil_R23"]);

//План сил начального механизма.
export const planSilNach = polPlSilTag("nach", ["sil_R21", "sil_G1", "sil_R01"]);
