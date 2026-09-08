import {
    polTagCMIssl, polTagNaprVr, polTagObTochInd, polTagObToch, polTagObZv, polTagOpSk,
    polTagOpVr, polPlSkTag, polPlUskTag, polTagPolzIssl, polTagShIssl, polTagZvIssl, polPlSilTag, polTagObInd
} from "../meh-svg-utils.js";
import {
    polTagKrPu, polTagOkrPu, polTagOtr, polTagOtrPu, polTagOtrShPu, polTagPr, polTagStrelka
} from "../../../scripts/utils-svg-geom.js";


//Рисунок задания.
export const zadanie =
    "<svg viewBox=\"0 0 263 395\" width=\"263\" height=\"395\" class=\"risunok\">" +
    "<g transform=\"translate(117,258)\">" +
    "<!--Опора вращения-->" +
    polTagOpVr(null,null,null,null,null) +
    "<!--Опоры скольжения-->" +
    polTagOpSk(null, 72.3369, 90, 100, true, false, null, null) +
    polTagOpSk(-40.0597, -120, null, 100, true, null, null, null) +
    "<!--Звенья-->" +
    polTagZvIssl(null,null, 150, 60, 11, null) +
    polTagZvIssl(-51.9615, 30, 73.2213, 180, 11, null) +
    polTagPolzIssl(null, 202.3369, 90, null) +
    polTagZvIssl(-51.9615, 30, 253.2213, 120, 11, null) +
    polTagZvIssl(-86.6025, -84.8913, 348.7524, 180, 11, null) +
    polTagPolzIssl(89.9403, -120, null, null) +
    "<!--Шарниры-->" +
    polTagShIssl(-51.9615, 30, null) +
    polTagShIssl(0, 202.3369, null) +
    polTagShIssl(-86.6025, -84.8913, null) +
    polTagShIssl(89.9403, -120, null) +
    "<!--Центры тяжести-->" +
    polTagCMIssl(-43.3013, 58.7228, null) +
    polTagCMIssl(1.6689, -102.4456, null) +
    "<!--Направление вращения кривошипа-->" +
    polTagNaprVr(null,null, 150, 40, 120, null) +
    "<!--Обозначения-->" +
    polTagObZv(-20, 37, 1, 0, -10, -20, 15) +
    polTagObZv(-65, 120, 2, 20, -10, 40, 0) +
    polTagObZv(-45, 215, 3, 20, -10, 40, 0) +
    polTagObZv(40, -90, 4, 0, 0, -10, 20) +
    polTagObZv(125, -100, 5, 0, -10, -20, 15) +
    polTagObTochInd(62, -10, "O,S", 1) +
    polTagObToch(-72, 20, "A") +
    polTagObTochInd(-60, 55, "S", 2) +
    polTagObTochInd(68, 192, "B,S", 3) +
    polTagObToch(-107, -97, "C") +
    polTagObTochInd(5, -90, "S", 4) +
    polTagObTochInd(110, -95, "D,S", 5) +
    polTagObTochInd(-41, -36, "φ", 1) +
    polTagOtrShPu(null, -50, 90, 122.3369, "#000", 1, "15 5 2 5", null) +
    "</g>" +
    "</svg>";

//Подвижный механизм.
export const mehanismPodv =
    "<svg id=\"meh_ris\" class=\"meh__ris\">" +
    "<g id=\"meh_ris-1\">" +
    polTagOpVr(null,null,null,null, "shO_ris") +
    polTagOpSk(null, null, null, 0, false, false, "st3_ris", "tr3_ris") +
    polTagOpSk(null, null, 180, 0, false, false, "st5_ris", "tr5_ris") +
    polTagZvIssl(null,null, null, 0, 11, "zv1_ris") +
    polTagZvIssl(null,null, null, 0, 11, "zv2b_ris") +
    polTagZvIssl(null,null, null, 0, 11, "zv2c_ris") +
    polTagPolzIssl(null,null, null, "zv3_ris") +
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
    "<svg id=\"meh_ris\" viewBox=\"0 0 300 425\" width=\"300\" height=\"425\" visibility=\"hidden\" " +
    "class=\"risunok-inter\">" +
    polTagPr(null, null, null, 0, 0, 425, 300, "#fff", "#000", 3, null) +
    "<g transform=\"translate(105,240)\">" +
    polTagOpVr(null,null,null,"st_1","sh_O") +
    polTagOpSk(null, 72.3369, 90, 100, false, false, "st_3", null) +
    polTagOpSk(-40.0597, -120, null, 100, false, null, "st_5", null) +
    polTagZvIssl(null,null, 150, 60, 11, "zv_OA") +
    polTagZvIssl(-51.9615, 30, 73.2213, 180, 11, "zv_AB") +
    polTagPolzIssl(null, 202.3369, 90, "pol3") +
    polTagZvIssl(-51.9615, 30, 253.2213, 120, 11, "zv_AC") +
    polTagZvIssl(-86.6025, -84.8913, 348.7524, 180, 11, "zv_CD") +
    polTagPolzIssl(89.9403, -120, null, "pol5") +
    polTagShIssl(-51.9615, 30, "sh_A") +
    polTagShIssl(0, 202.3369, "sh_B") +
    polTagShIssl(-86.6025, -84.8913, "sh_C") +
    polTagShIssl(89.9403, -120, "sh_D") +
    polTagCMIssl(-43.3013, 58.7228, "S2") +
    polTagCMIssl(1.6689, -102.4456, "S4") +
    polTagOkrPu(0, 0, 60, "none", "#000", 2, "15 5 2 5", "tr_A") +
    polTagKrPu("tr_S2", "0 30 -3.1 29.9 -6.3 29.6 -9.4 29 -12.4 28.2 -15.5 27.2 -18.4 26 -21.3 24.6 -24.1 " +
        "23 -26.8 21.1 -29.4 19.1 -31.9 16.9 -34.2 14.5 -36.4 12 -38.5 9.3 -40.5 6.4 -42.2 3.4 -43.8 0.2 -45.2 -3.1 " +
        "-46.5 -6.4 -47.6 -9.9 -48.4 -13.5 -49.1 -17.1 -49.6 -20.8 -49.9 -24.5 -50 -28.3 -49.9 -32.1 -49.6 -35.8 " +
        "-49.1 -39.6 -48.4 -43.3 -47.6 -47 -46.5 -50.6 -45.2 -54.1 -43.8 -57.6 -42.2 -60.9 -40.5 -64.2 -38.5 -67.2 " +
        "-36.4 -70.2 -34.2 -72.9 -31.9 -75.5 -29.4 -78 -26.8 -80.2 -24.1 -82.2 -21.3 -84 -18.4 -85.6 -15.5 -86.9 " +
        "-12.4 -88 -9.4 -88.9 -6.3 -89.5 -3.1 -89.9 0 -90 3.1 -89.9 6.3 -89.5 9.4 -88.9 12.4 -88 15.5 -86.9 18.4 " +
        "-85.6 21.3 -84 24.1 -82.2 26.8 -80.2 29.4 -78 31.9 -75.5 34.2 -72.9 36.4 -70.2 38.5 -67.2 40.5 -64.2 42.2 " +
        "-60.9 43.8 -57.6 45.2 -54.1 46.5 -50.6 47.6 -47 48.4 -43.3 49.1 -39.6 49.6 -35.8 49.9 -32.1 50 -28.3 49.9 " +
        "-24.5 49.6 -20.8 49.1 -17.1 48.4 -13.5 47.6 -9.9 46.5 -6.4 45.2 -3.1 43.8 0.2 42.2 3.4 40.5 6.4 38.5 9.3 " +
        "36.4 12 34.2 14.5 31.9 16.9 29.4 19.1 26.8 21.1 24.1 23 21.3 24.6 18.4 26 15.5 27.2 12.4 28.2 9.4 29 6.3 " +
        "29.6 3.1 29.9 0 30") +
    polTagKrPu("tr_C", "0 180 -6.3 179.9 -12.5 179.4 -18.7 178.7 -24.9 177.7 -30.9 176.4 -36.8 174.9 -42.6 " +
        "173.1 -48.2 171 -53.6 168.7 -58.8 166.2 -63.7 163.5 -68.5 160.6 -72.9 157.5 -77.1 154.2 -80.9 150.8 -84.4 " +
        "147.3 -87.6 143.7 -90.5 140 -93 136.2 -95.1 132.4 -96.9 128.5 -98.2 124.6 -99.2 120.8 -99.8 116.9 -100 " +
        "113.1 -99.8 109.4 -99.2 105.7 -98.2 102.1 -96.9 98.7 -95.1 95.3 -93 92 -90.5 88.9 -87.6 85.9 -84.4 83 -80.9 " +
        "80.3 -77.1 77.7 -72.9 75.3 -68.5 73.1 -63.7 71 -58.8 69.1 -53.6 67.4 -48.2 65.9 -42.6 64.5 -36.8 63.3 -30.9 " +
        "62.3 -24.9 61.5 -18.7 60.8 -12.5 60.4 -6.3 60.1 0 60 6.3 60.1 12.5 60.4 18.7 60.8 24.9 61.5 30.9 62.3 36.8 " +
        "63.3 42.6 64.5 48.2 65.9 53.6 67.4 58.8 69.1 63.7 71 68.5 73.1 72.9 75.3 77.1 77.7 80.9 80.3 84.4 83 87.6 " +
        "85.9 90.5 88.9 93 92 95.1 95.3 96.9 98.7 98.2 102.1 99.2 105.7 99.8 109.4 100 113.1 99.8 116.9 99.2 120.8 " +
        "98.2 124.6 96.9 128.5 95.1 132.4 93 136.2 90.5 140 87.6 143.7 84.4 147.3 80.9 150.8 77.1 154.2 72.9 157.5 " +
        "68.5 160.6 63.7 163.5 58.8 166.2 53.6 168.7 48.2 171 42.6 173.1 36.8 174.9 30.9 176.4 24.9 177.7 18.7 178.7 " +
        "12.5 179.4 6.3 179.9 0 180") +
    polTagKrPu("tr_S4", "84.9 150 78.6 149.9 72.4 149.7 66.3 149.4 60.4 148.9 54.6 148.2 48.9 147.4 43.4 " +
        "146.5 38.1 145.5 33.1 144.4 28.2 143.1 23.6 141.7 19.2 140.3 15.1 138.7 11.3 137.1 7.8 135.4 4.5 133.6 1.6 " +
        "131.8 -1 130 -3.3 128.1 -5.3 126.2 -7 124.2 -8.3 122.3 -9.2 120.4 -9.8 118.5 -10.1 116.6 -10 114.7 -9.5 " +
        "112.9 -8.7 111.1 -7.5 109.3 -6 107.6 -4.1 106 -1.8 104.4 0.7 102.9 3.6 101.5 6.9 100.1 10.4 98.9 14.3 97.7 " +
        "18.4 96.5 22.9 95.5 27.6 94.6 32.5 93.7 37.7 92.9 43 92.2 48.6 91.7 54.3 91.1 60.2 90.7 66.3 90.4 72.4 90.2 " +
        "78.6 90 84.9 90 91.1 90 97.5 90.2 103.7 90.4 110 90.7 116.2 91.1 122.2 91.7 128.2 92.2 134 92.9 139.7 93.7 " +
        "145.1 94.6 150.3 95.5 155.3 96.5 160.1 97.7 164.5 98.9 168.7 100.1 172.5 101.5 176 102.9 179.1 104.4 181.9 " +
        "106 184.3 107.6 186.2 109.3 187.8 111.1 188.9 112.9 189.6 114.7 189.9 116.6 189.8 118.5 189.2 120.4 188.2 " +
        "122.3 186.8 124.2 184.9 126.2 182.6 128.1 179.9 130 176.8 131.8 173.4 133.6 169.6 135.4 165.4 137.1 160.9 " +
        "138.7 156.1 140.3 151.1 141.7 145.8 143.1 140.2 144.4 134.5 145.5 128.6 146.5 122.5 147.4 116.4 148.2 110.1 " +
        "148.9 103.8 149.4 97.5 149.7 91.2 149.9 84.9 150") +
    polTagOtrPu(null, null, 90, 72.3369, "#000", 2, "15 5 2 5", "tr_B") +
    polTagOtrPu(-90.0597, -120, null, 50, "#000", 2, "15 5 2 5", "tr_D") +
    "</g>" +
    "</svg>";

//Начальный механизм.
export const nach =
    "<svg viewBox=\"0 0 77 111\" width=\"77\" height=\"111\" class=\"risunok\">" +
    "<g transform=\"translate(49,60)\">" +
    polTagOpVr(null,null,null,null,null) +
    polTagZvIssl(null,null, 150, 60, 11, null) +
    polTagObZv(-20, 37, 1, 0, -10, -20, 15) +
    "</g>" +
    "</svg>";

//Группа 1.
export const gr1 =
    "<svg viewBox=\"0 0 105 339\" width=\"105\" height=\"339\" class=\"risunok\">" +
    "<g transform=\"translate(87,258)\">" +
    polTagOpSk(null, 72.3369, 90, 100, true, false, null) +
    polTagZvIssl(-51.9615, 30, 73.2213, 180, 11, null) +
    polTagZvIssl(-51.9615, 30, 253.2213, 120, 11, null) +
    polTagPolzIssl(null, 202.3369, 90, null) +
    polTagShIssl(-51.9615, 30, null) +
    polTagShIssl(0, 202.3369, null) +
    polTagCMIssl(-43.3013, 58.7228, null) +
    polTagObZv(-65, 120, 2, 20, -10, 40, 0) +
    polTagObZv(-45, 215, 3, 20, -10, 40, 0) +
    "</g>" +
    "</svg>";

//Группа 2.
export const gr2 =
    "<svg viewBox=\"0 0 239 70\" width=\"239\" height=\"70\" class=\"risunok\">" +
    "<g transform=\"translate(94,-67)\">" +
    polTagOpSk(-40.0597, -120, null, 100, true, null, null) +
    polTagZvIssl(-86.6025, -84.8913, 348.7524, 180, 11, null) +
    polTagPolzIssl(89.9403, -120, null, null) +
    polTagShIssl(-86.6025, -84.8913, null) +
    polTagShIssl(89.9403, -120, null) +
    polTagCMIssl(1.6689, -102.4456, null) +
    polTagObZv(40, -90, 4, 0, 0, -10, 20) +
    polTagObZv(125, -100, 5, 0, -10, -20, 15) +
    "</g>" +
    "</svg>";

//Диаграмма изменения силы полезного сопротивления.
export const diSil =
    "<svg viewBox=\"0 0 360 370\" width=\"360\" height=\"370\" class=\"risunok\">" +
    "<g transform=\"translate(20,340)\">" +
    polTagStrelka(null, 360, -20, null) +
    polTagStrelka(null, 360, null, -20, 90) +
    polTagOtr(0, 0, 0, 0, 0, 300, -180, "#000", 4) +
    polTagOtr(0, 0, 0, 300, -180, 300, -300, "#000", 4) +
    polTagOtr(0, 60, 0, 0, 0, 300, 0, "#000", 2) +
    polTagOtr(0, 120, 0, 0, 0, 300, 0, "#000", 2) +
    polTagOtr(0, 180, 0, 0, 0, 300, 0, "#000", 2) +
    polTagOtr(0, 240, 0, 0, 0, 300, 0, "#000", 2) +
    polTagOtr(0, 300, 0, 0, 0, 300, 0, "#000", 2) +
    polTagOtr(60, 0, 0, 0, 0, 0, -300, "#000", 2) +
    polTagOtr(120, 0, 0, 0, 0, 0, -300, "#000", 2) +
    polTagOtr(180, 0, 0, 0, 0, 0, -300, "#000", 2) +
    polTagOtr(240, 0, 0, 0, 0, 0, -300, "#000", 2) +
    polTagOtr(300, 0, 0, 0, 0, 0, -300, "#000", 2) +
    polTagObInd(25, 315, null, "h", 3) +
    polTagObInd(330, 10, null, "P", 3) +
    polTagObInd(295, -30, null, "P", 3 + "max") +
    "</g>" +
    "</svg>";

//План скоростей.
export const planSk = polPlSkTag(["sk_VA", "sk_VBA", "sk_VB", "sk_VS2A",
    "sk_VS2", "sk_VCA", "sk_VC", "sk_VDC", "sk_VD", "sk_VS4C", "sk_VS4"]);

//План ускорений.
export const planUsk = polPlUskTag(["usk_AA", "usk_ABAN", "usk_ABAT", "usk_ABA", "usk_AB", "usk_AS2A",
    "usk_AS2", "usk_ACA", "usk_AC", "usk_ADCN", "usk_ADCT", "usk_ADC", "usk_AD", "usk_AS4C", "usk_AS4"]);

//План сил второй группы Ассура.
export const planSil2 = polPlSilTag(2, ["sil_R05", "sil_P5", "sil_FI5",
    "sil_G5", "sil_FI4", "sil_G4", "sil_R24", "sil_R54", "sil_R45"]);

//План сил первой группы Ассура.
export const planSil1 = polPlSilTag(1, ["sil_R42", "sil_R03", "sil_P3",
    "sil_FI3", "sil_G3", "sil_FI2", "sil_G2", "sil_R12", "sil_R32", "sil_R23"]);

//План сил начального механизма.
export const planSilNach = polPlSilTag("nach", ["sil_R21", "sil_G1", "sil_R01"]);
