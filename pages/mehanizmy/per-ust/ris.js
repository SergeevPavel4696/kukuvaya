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
    polTagKrPu, polTagOkrPu, polTagOtr, polTagOtrShPu, polTagPr, polTagStrelka
} from "../../../scripts/utils-svg-geom.js";


//Рисунок задания.
export const zadanie =
    "<svg viewBox=\"0 0 487 382\" width=\"487\" height=\"382\" class=\"risunok\">" +
    "<g transform=\"translate(89, 123)\">" +
    "<!--Опора вращения-->" +
    polTagOpVr(null, null, null, null, null) +
    "<!--Опоры скольжения-->" +
    polTagOpSk(210.5125, null, null, 102, true, false, null, null) +
    polTagOpSk(200, -70.6313, -90, 102, true, true, null, null) +
    "<!--Звенья-->" +
    polTagZvIssl(null, null, 120, 100, 11, null) +
    polTagZvIssl(-50, 86.6025, 347.496, 200, 11, null) +
    polTagPolzIssl(340.5125, null, null, null) +
    polTagZvIssl(145.2562, 43.3013, 347.496, 200, 11, null) +
    polTagZvIssl(145.2562, 43.3013, 282.6488, 250, 11, null) +
    polTagPolzIssl(200, -200.6313, 90, null) +
    "<!--Шарниры-->" +
    polTagShIssl(-50, 86.60254, null) +
    polTagShIssl(340.5124, 0, null) +
    polTagShIssl(145.2562, 43.30127, null) +
    polTagShIssl(200, -200.6313, null) +
    "<!--Центры тяжести-->" +
    polTagCMIssl(47.6281, 64.9519, null) +
    polTagCMIssl(172.6281, -78.665, null) +
    "<!--Направление вращения кривошипа-->" +
    polTagNaprVr(null, null, 120, 62.5, 60, null) +
    "<!--Обозначения-->" +
    polTagObZv(0, 40, 1, 0, -10, -20, 5) +
    polTagObZv(235, 35, 2, 0, -10, -10, 10) +
    polTagObZv(375, 20, 3, 0, -10, -15, 10) +
    polTagObZv(118, -35, 4, 20, -10, 40, -15) +
    polTagObZv(150, -245, 5, 20, -15, 40, -25) +
    polTagObTochInd(55, 5, "O,S", 1) +
    polTagObToch(-50, 100, "A") +
    polTagObTochInd(52, 75, "S", 2) +
    polTagObToch(145, 55, "C") +
    polTagObTochInd(360, 25, "B,S", 3) +
    polTagObTochInd(155, -95, "S", 4) +
    polTagObTochInd(170, -210, "D,S", 5) +
    polTagObTochInd(-70, 30, "φ", 1) +
    polTagOtrShPu(-70, null, null, 280.5125, "#000", 1, "15 5 2 5", null) +
    "</g>" +
    "</svg>";

//Подвижный механизм.
export const mehanismPodv =
    "<svg id=\"meh_ris\" class=\"meh__ris\">" +
    "<g id=\"meh_ris-1\">" +
    polTagOpVr(null, null, null, null, "shO_ris") +
    polTagOpSk(null, null, null, 0, false, true, "st3_ris", "tr3_ris") +
    polTagOpSk(null, null, null, 0, false, true, "st5_ris", "tr5_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv1_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv2C_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv2B_ris") +
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
    "<svg id=\"meh_ris\" viewBox=\"0 0 485 345\" width=\"485\" height=\"345\" visibility=\"hidden\" " +
    "class=\"risunok-inter\">" +
    polTagPr(null, null, null, 0, 0, 345, 485, "#fff", "#000", 3, null) +
    "<g transform=\"translate(107, 107)\">" +
    polTagOpVr(null, null, null, "st_1", "sh_O") +
    polTagOpSk(210.5125, null, null, 102, false, false, "st_3", null) +
    polTagOpSk(200, -70.6313, -90, 102, false, true, "st_5", null) +
    polTagZvIssl(null, null, 120, 100, 11, "zv_OA") +
    polTagZvIssl(-50, 86.6025, 347.496, 200, 11, "zv_AC") +
    polTagPolzIssl(340.5125, null, null, "pol3") +
    polTagZvIssl(145.2562, 43.3013, 347.496, 200, 11, "zv_CB") +
    polTagZvIssl(145.2562, 43.3013, 282.6488, 250, 11, "zv_CD") +
    polTagPolzIssl(200, -200.6313, 90, "pol5") +
    polTagShIssl(-50, 86.60254, "sh_A") +
    polTagShIssl(340.5124, 0, "sh_B") +
    polTagShIssl(145.2562, 43.30127, "sh_C") +
    polTagShIssl(200, -200.6313, "sh_D") +
    polTagCMIssl(47.6281, 64.9519, "S2") +
    polTagCMIssl(172.6281, -78.665, "S4") +
    polTagOkrPu(0, 0, 100, "none", "#000", 2, "15 5 2 5", "tr_A") +
    polTagOtrShPu(null, null, null, 210.5125, "#000", 2, "15 5 2 5", "tr_B") +
    polTagOtrShPu(200, null, -90, 70.6313, "#000", 2, "15 5 2 5", "tr_D") +
    polTagKrPu("tr_S2", "0 0 0.2 -4.7 0.7 -9.4 1.7 -14.1 2.9 -18.7 4.6 -23.2 6.6 -27.6 8.9 -31.9 11.6 " +
        "-36.1 14.7 -40.2 18 -44.1 21.7 -47.8 25.6 -51.3 29.9 -54.7 34.4 -57.8 39.2 -60.7 44.2 -63.3 49.4 -65.7 " +
        "54.8 -67.9 60.4 -69.7 66.2 -71.3 72.2 -72.6 78.2 -73.7 84.3 -74.4 90.6 -74.9 96.8 -75 103.1 -74.9 109.4 " +
        "-74.4 115.7 -73.7 121.9 -72.6 128 -71.3 134.1 -69.7 140 -67.9 145.7 -65.7 151.3 -63.3 156.7 -60.7 161.9 " +
        "-57.8 166.8 -54.7 171.4 -51.3 175.8 -47.8 179.8 -44.1 183.5 -40.2 186.9 -36.1 189.9 -31.9 192.6 -27.6 " +
        "194.8 -23.2 196.7 -18.7 198.1 -14.1 199.2 -9.4 199.8 -4.7 200 0 199.8 4.7 199.2 9.4 198.1 14.1 196.7 18.7 " +
        "194.8 23.2 192.6 27.6 189.9 31.9 186.9 36.1 183.5 40.2 179.8 44.1 175.8 47.8 171.4 51.3 166.8 54.7 161.9 " +
        "57.8 156.7 60.7 151.3 63.3 145.7 65.7 140 67.9 134.1 69.7 128 71.3 121.9 72.6 115.7 73.7 109.4 74.4 103.1 " +
        "74.9 96.8 75 90.6 74.9 84.3 74.4 78.2 73.7 72.2 72.6 66.2 71.3 60.4 69.7 54.8 67.9 49.4 65.7 44.2 63.3 " +
        "39.2 60.7 34.4 57.8 29.9 54.7 25.6 51.3 21.7 47.8 18 44.1 14.7 40.2 11.6 36.1 8.9 31.9 6.6 27.6 4.6 23.2 " +
        "2.9 18.7 1.7 14.1 0.7 9.4 0.2 4.7 0 0") +
    polTagKrPu("tr_C", "100 0 100.2 -3.1 100.7 -6.3 101.6 -9.4 102.8 -12.4 104.3 -15.5 106.2 -18.4 108.4 " +
        "-21.3 110.9 -24.1 113.8 -26.8 116.9 -29.4 120.4 -31.9 124.2 -34.2 128.2 -36.4 132.5 -38.5 137.1 -40.5 141.9 " +
        "-42.2 147 -43.8 152.2 -45.2 157.7 -46.5 163.4 -47.6 169.2 -48.4 175.1 -49.1 181.2 -49.6 187.4 -49.9 193.6 " +
        "-50 200 -49.9 206.3 -49.6 212.6 -49.1 218.9 -48.4 225.2 -47.6 231.3 -46.5 237.4 -45.2 243.3 -43.8 249.1 " +
        "-42.2 254.6 -40.5 260 -38.5 265.1 -36.4 269.9 -34.2 274.5 -31.9 278.7 -29.4 282.6 -26.8 286.2 -24.1 289.3 " +
        "-21.3 292.1 -18.4 294.5 -15.5 296.5 -12.4 298 -9.4 299.1 -6.3 299.8 -3.1 300 0 299.8 3.1 299.1 6.3 298 9.4 " +
        "296.5 12.4 294.5 15.5 292.1 18.4 289.3 21.3 286.2 24.1 282.6 26.8 278.7 29.4 274.5 31.9 269.9 34.2 265.1 " +
        "36.4 260 38.5 254.6 40.5 249.1 42.2 243.3 43.8 237.4 45.2 231.3 46.5 225.2 47.6 218.9 48.4 212.6 49.1 206.3 " +
        "49.6 200 49.9 193.6 50 187.4 49.9 181.2 49.6 175.1 49.1 169.2 48.4 163.4 47.6 157.7 46.5 152.2 45.2 147 " +
        "43.8 141.9 42.2 137.1 40.5 132.5 38.5 128.2 36.4 124.2 34.2 120.4 31.9 116.9 29.4 113.8 26.8 110.9 24.1 " +
        "108.4 21.3 106.2 18.4 104.3 15.5 102.8 12.4 101.6 9.4 100.7 6.3 100.2 3.1 100 0") +
    polTagKrPu("tr_S4", "150 114.6 150.1 111.5 150.3 108.4 150.8 105.5 151.4 102.7 152.1 100 153.1 97.5 " +
        "154.2 95 155.5 92.7 156.9 90.5 158.5 88.5 160.2 86.6 162.1 84.9 164.1 83.3 166.3 81.8 168.5 80.5 171 79.4 " +
        "173.5 78.3 176.1 77.5 178.9 76.7 181.7 76.1 184.6 75.6 187.6 75.3 190.6 75 193.7 74.9 196.8 75 200 75.1 " +
        "203.1 75.4 206.3 75.7 209.5 76.2 212.6 76.8 215.7 77.5 218.7 78.4 221.7 79.3 224.5 80.4 227.3 81.5 230 82.8 " +
        "232.6 84.2 235 85.8 237.2 87.5 239.4 89.3 241.3 91.2 243.1 93.3 244.7 95.5 246.1 97.8 247.3 100.3 248.2 " +
        "102.9 249 105.6 249.6 108.5 249.9 111.5 250 114.6 249.9 117.8 249.6 121 249 124.4 248.2 127.8 247.3 131.2 " +
        "246.1 134.6 244.7 138 243.1 141.4 241.3 144.8 239.4 148 237.2 151.2 235 154.2 232.6 157.1 230 159.9 227.3 " +
        "162.4 224.5 164.8 221.7 166.9 218.7 168.8 215.7 170.5 212.6 171.9 209.5 173.1 206.3 174 203.1 174.6 200 " +
        "174.9 196.8 175 193.7 174.7 190.6 174.3 187.6 173.5 184.6 172.5 181.7 171.2 178.9 169.7 176.1 167.9 173.5 " +
        "166 171 163.8 168.5 161.4 166.3 158.9 164.1 156.2 162.1 153.3 160.2 150.4 158.5 147.3 156.9 144.1 155.5 " +
        "140.9 154.2 137.6 153.1 134.3 152.1 130.9 151.4 127.6 150.8 124.3 150.3 121 150.1 117.7 150 114.6") +
    "</g>" +
    "</svg>";

//Начальный механизм.
export const nach =
    "<svg viewBox=\"0 0 78 135\" width=\"78\" height=\"135\" class=\"risunok\">" +
    "<g transform=\"translate(50, 84)\">" +
    polTagOpVr(null, null, null, null, null) +
    polTagZvIssl(null, null, 120, 100, 11, null) +
    polTagObZv(0, 40, 1, 0, -10, -20, 5) +
    "</g>" +
    "</svg>";

//Группа 1.
export const gr1 =
    "<svg viewBox=\"0 0 455 111\" width=\"455\" height=\"111\" class=\"risunok\">" +
    "<g transform=\"translate(57, 94)\">" +
    polTagOpSk(210.5125, null, null, 102, true, false, null, null) +
    polTagZvIssl(-50, 86.6025, 347.496, 200, 11, null) +
    polTagZvIssl(145.2562, 43.3013, 347.496, 200, 11, null) +
    polTagPolzIssl(340.5125, null, null, null) +
    polTagShIssl(-50, 86.60254, null) +
    polTagShIssl(340.5124, 0, null) +
    polTagShIssl(145.2562, 43.30127, null) +
    polTagCMIssl(47.6281, 64.9519, null) +
    polTagObZv(235, 35, 2, 0, -10, -10, 10) +
    polTagObZv(375, 20, 3, 0, -10, -15, 10) +
    "</g>" +
    "</svg>";

//Группа 2.
export const gr2 =
    "<svg viewBox=\"0 0 99 308\" width=\"99\" height=\"308\" class=\"risunok\">" +
    "<g transform=\"translate(-118, 51)\">" +
    polTagOpSk(200, -70.6313, -90, 102, true, true, null, null) +
    polTagZvIssl(145.2562, 43.3013, 282.6488, 250, 11, null) +
    polTagPolzIssl(200, -200.6313, 90, null) +
    polTagShIssl(145.2562, 43.30127, null) +
    polTagShIssl(200, -200.6313, null) +
    polTagCMIssl(172.6281, -78.665, null) +
    polTagObZv(118, -35, 4, 20, -10, 40, -15) +
    polTagObZv(150, -245, 5, 20, -15, 40, -25) +
    "</g>" +
    "</svg>";

//Диаграмма изменения силы полезного сопротивления.
export const diSil =
    "<svg viewBox=\"0 0 400 360\" width=\"400\" height=\"360\" class=\"risunok\">" +
    "<g transform=\"translate(60,340)\">" +
    polTagStrelka(null, 360, -20, null) +
    polTagStrelka(null, 360, null, -20, 90) +
    polTagOtr(0, 0, 0, 0, 0, 150, -300, "#000", 4) +
    polTagOtr(0, 0, 0, 150, -300, 225, -300, "#000", 4) +
    polTagOtr(0, 0, 0, 225, -300, 300, 0, "#000", 4) +
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
export const planSk = polPlSkTag(["sk_VA", "sk_VBA", "sk_VB", "sk_VS2",
    "sk_VS2A", "sk_VCA", "sk_VC", "sk_VDC", "sk_VD", "sk_VS4C", "sk_VS4"]);

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
