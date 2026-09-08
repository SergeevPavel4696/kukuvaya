import {
    polTagCMIssl,
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
    polTagObText,
    polTagText
} from "../meh-svg-utils.js";
import {
    polTagDug,
    polTagKrPu,
    polTagOkrPu, polTagOtr,
    polTagOtrPu,
    polTagOtrShPu,
    polTagPr,
    polTagStrelka
} from "../../../scripts/utils-svg-geom.js";


//Рисунок задания.
export const zadanie =
    "<svg viewBox=\"0 0 282 551\" width=\"282\" height=\"551\" class=\"risunok\">" +
    "<g transform=\"translate(220,164)\">" +
    "<!--Опоры вращения-->" +
    polTagOpVr(null,null,null,null,null) +
    polTagOpVr(-20,40,-90,null,null) +
    "<!--Опора скольжения-->" +
    polTagOpSk(-20, -201.2111, 270, 100, true, null, null) +
    "<!--Звенья-->" +
    polTagZvIssl(null,null, 195, 200, 11, null) +
    polTagZvIssl(-193.1852, -51.7638, 54.2598, 225, 11, null) +
    polTagZvIssl(-20,40, 114.6834, 100, 11, null) +
    polTagZvIssl(-20, 40, 24.6834, 60, 11, null) +
    polTagZvIssl(34.5178, 65.0562, 262.1665, 400, 11, null) +
    polTagPolzIssl(-20,-331.2111, 90, null) +
    "<!--Шарниры-->" +
    polTagShIssl(-193.1852, -51.7638, null) +
    polTagShIssl(-61.7604, 130.8629, null) +
    polTagShIssl(34.5178, 65.0562, null) +
    polTagShIssl(-20,-331.2111, null) +
    "<!--Центры тяжести-->" +
    polTagCMIssl(-127.4728, 39.5496, null) +
    polTagCMIssl(7.2589, -133.0775, null) +
    "<!--Обозначения-->" +
    polTagObZv(-120, -20, 1, 17, -10, 30, 5) +
    polTagObZv(-140, 80, 2, 20, -8, 35, 10) +
    polTagObZv(-23, 100, 3, -2, -10, -20, 5) +
    polTagObZv(40, -100, 4, -2, -10, -25, -25) +
    polTagObZv(5, -370, 5, -2, -10, -20, -20) +
    polTagObTochInd(17, 11, "O,S", 1) +
    polTagObToch(-210, -70, "A") +
    polTagObTochInd(-145, 40, "S", 2) +
    polTagObToch(-62, 142, "B") +
    polTagObTochInd(20, 70, "C,S", 3) +
    polTagObToch(52, 55, "D") +
    polTagObTochInd(35, -145, "S", 4) +
    polTagObTochInd(48, -340, "E,S", 5) +
    polTagOtrShPu(null, null, 180, 20, "#000", 1, "15 5 2 5", null) +
    polTagOtrShPu(-20, 40, 270, 241.2111, "#000", 1, "15 5 2 5", null) +
    "</g>" +
    "</svg>";

//Подвижный механизм.
export const mehanismPodv =
    "<svg id=\"meh_ris\" class=\"risunok\">" +
    "<g id=\"meh_ris-1\">" +
    polTagOpVr(null,null,null,null, "shO_ris") +
    polTagOpVr(null,null,null,"st3_ris", "shC_ris") +
    polTagOpSk(null, null, null, 0, false, false, "st5_ris", "tr5_ris") +
    polTagZvIssl(null,null, null, 0, 11, "zv1_ris") +
    polTagZvIssl(null,null, null, 0, 11, "zv2_ris") +
    polTagZvIssl(null,null, null, 0, 11, "zv3b_ris") +
    polTagZvIssl(null,null, null, 0, 11, "zv3d_ris") +
    polTagZvIssl(null,null, null, 0, 11, "zv4_ris") +
    polTagPolzIssl(null,null, null, "zv5_ris") +
    polTagShIssl(0, 0, "shA_ris") +
    polTagShIssl(0, 0, "shB_ris") +
    polTagShIssl(0, 0, "shD_ris") +
    polTagShIssl(0, 0, "shE_ris") +
    polTagCMIssl(0, 0, "s2_ris") +
    polTagCMIssl(0, 0, "s4_ris") +
    "</g>" +
    "</svg>";

//Механизм с интерактивными элементами.
export const mehanismInter =
    "<svg id=\"meh_ris\" viewBox=\"0 0 414 577\" width=\"414\" height=\"577\" visibility=\"hidden\" " +
    "class=\"risunok-inter\">" +
    polTagPr(null, null, null, 0, 0, 577, 414, "#fff", "#000", 3, null) +
    "<g transform=\"translate(207,207)\">" +
    polTagOpVr(null,null,null, "st_1", "sh_O") +
    polTagOpVr(-20,40,-90, "st_3", "sh_C") +
    polTagOpSk(-20, -201.2111, 270, 100, false, false, "st_5") +
    polTagZvIssl(null,null, 195, 200, 11, "zv_OA") +
    polTagZvIssl(-193.1852, -51.7638, 54.2598, 225, 11, "zv_AB") +
    polTagZvIssl(-20,40, 114.6834, 100, 11, "zv_BC") +
    polTagZvIssl(-20, 40, 24.6834, 60, 11, "zv_CD") +
    polTagZvIssl(34.5178, 65.0562, 262.1665, 400, 11, "zv_DE") +
    polTagPolzIssl(-20,-331.2111, 90, "pol5") +
    polTagShIssl(-193.1852, -51.7638, "sh_A") +
    polTagShIssl(-61.7604, 130.8629, "sh_B") +
    polTagShIssl(34.5178, 65.0562, "sh_D") +
    polTagShIssl(-20,-331.2111, "sh_E") +
    polTagCMIssl(-127.4728, 39.5496, "S2") +
    polTagCMIssl(7.2589, -133.0775, "S4") +
    polTagOkrPu(0, 0, 200, "none", "#000", 2, "15 5 2 5", "tr_A") +
    polTagOkrPu(-20, 40, 100, "none", "#000", 2, "15 5 2 5", "tr_B") +
    polTagOkrPu(-20, 40, 60, "none", "#000", 2, "15 5 2 5", "tr_D") +
    polTagOtrPu(null, null, 180, 20, "#000", 2, "15 5 2 5", "A") +
    polTagOtrPu(-20, null, 90, 40, "#000", 2, "15 5 2 5", "B") +
    polTagOtrPu(-20, 40, 270, 241.2111, "#000", 2, "15 5 2 5", "tr_E") +
    polTagKrPu("tr_S2", "-111.9 -70 -116.5 -63.3 -120.6 -56.2 -124.1 -48.7 -127 -40.9 -129.4 -32.8 -131 " +
        "-24.6 -132.1 -16.2 -132.5 -7.7 -132.2 0.8 -131.3 9.3 -129.7 17.7 -127.5 25.9 -124.7 34 -121.3 41.8 -117.4 " +
        "49.3 -113 56.5 -108 63.4 -102.6 69.8 -96.7 75.9 -90.5 81.4 -83.9 86.5 -77 91.1 -69.9 95.2 -62.5 98.8 -55 " +
        "101.8 -47.3 104.3 -39.5 106.3 -31.7 107.7 -23.8 108.6 -15.9 108.9 -8.2 108.7 -0.5 108 7.1 106.8 14.5 105.1 " +
        "21.7 102.9 28.7 100.3 35.4 97.3 41.9 93.8 48 90 53.9 85.8 59.4 81.3 64.5 76.4 69.3 71.3 73.7 65.9 77.7 " +
        "60.4 81.3 54.6 84.5 48.6 87.3 42.5 89.6 36.3 91.6 30 93.1 23.6 94.2 17.2 94.9 10.8 95.1 4.4 95 -1.9 94.5 " +
        "-8.2 93.6 -14.3 92.3 -20.4 90.7 -26.3 88.7 -32.1 86.4 -37.6 83.8 -43 80.9 -48.2 77.8 -53.2 74.3 -57.9 70.7 " +
        "-62.4 66.9 -66.7 62.9 -70.7 58.7 -74.5 54.4 -78 49.9 -81.2 45.4 -84.2 40.8 -87 36.1 -89.6 31.4 -92 26.6 " +
        "-94.2 21.8 -96.2 17 -98 12.1 -99.7 7.2 -101.3 2.1 -102.8 -3 -104.1 -8.2 -105.3 -13.6 -106.4 -19.2 -107.2 " +
        "-24.9 -107.9 -30.9 -108.2 -37 -108.3 -43.3 -108 -49.8 -107.2 -56.4 -106 -63 -104.3 -69.7 -102 -76.4 -99.2 " +
        "-82.9 -95.7 -89.3 -91.7 -95.5 -87.1 -101.3 -81.9 -106.8 -76.2 -111.9 -70 -106.8 -76.2 -111.9 -70") +
    polTagKrPu("tr_S4", "10 155.5 9.7 149.7 9.2 144.2 8.4 138.9 7.4 133.9 6.2 129.2 4.8 124.8 3.2 120.7 " +
        "1.5 117 -0.3 113.7 -2.3 110.8 -4.4 108.2 -6.5 106 -8.6 104.1 -10.8 102.7 -13 101.5 -15.2 100.7 -17.4 100.2 " +
        "-19.6 100 -21.7 100.1 -23.8 100.4 -25.8 101.1 -27.7 101.9 -29.6 102.9 -31.4 104.2 -33.1 105.6 -34.7 107.2 " +
        "-36.2 108.9 -37.7 110.7 -39 112.7 -40.3 114.8 -41.4 116.9 -42.5 119.1 -43.5 121.3 -44.4 123.6 -45.2 125.9 " +
        "-46 128.2 -46.6 130.6 -47.2 132.9 -47.7 135.2 -48.2 137.6 -48.6 139.9 -49 142.2 -49.2 144.5 -49.5 146.7 " +
        "-49.7 148.9 -49.8 151.1 -49.9 153.3 -50 155.4 -50 157.5 -50 159.6 -49.9 161.7 -49.9 163.7 -49.7 165.7 -49.6 " +
        "167.7 -49.4 169.7 -49.2 171.6 -49 173.6 -48.7 175.5 -48.4 177.5 -48 179.4 -47.7 181.3 -47.3 183.2 -46.8 " +
        "185.1 -46.3 187.1 -45.8 189 -45.2 191 -44.6 192.9 -43.9 194.9 -43.1 196.9 -42.3 198.9 -41.4 200.9 -40.4 203 " +
        "-39.3 205 -38.1 207 -36.8 209 -35.4 210.9 -33.8 212.8 -32.1 214.5 -30.3 216.1 -28.3 217.5 -26.1 218.6 -23.8 " +
        "219.5 -21.4 219.9 -18.8 220 -16.2 219.5 -13.5 218.5 -10.8 216.9 -8.1 214.7 -5.5 212 -2.9 208.6 -0.5 204.7 " +
        "1.7 200.3 3.7 195.5 5.4 190.3 6.9 184.8 8.1 179 9 173.2 9.6 167.2 9.9 161.3 10 155.5") +
    "</g>" +
    "</svg>";

//Начальный механизм.
export const nach =
    "<svg viewBox=\"0 0 219 60\" width=\"219\" height=\"60\" class=\"risunok\">" +
    "<g transform=\"translate(190,7)\">" +
    polTagOpVr(null,null,null,null,null) +
    polTagZvIssl(null,null, 195, 200, 11, null) +
    polTagObZv(-120, -20, 1, 17, -10, 30, 5) +
    "</g>" +
    "</svg>";

//Группа 1.
export const gr1 =
    "<svg viewBox=\"0 0 230 198\" width=\"230\" height=\"198\" class=\"risunok\">" +
    "<g transform=\"translate(200,139)\">" +
    polTagOpVr(-20,40,-90,null,null) +
    polTagZvIssl(-193.1852, -51.7638, 54.2598, 225, 11, null) +
    polTagZvIssl(-20,40, 114.6834, 100, 11, null) +
    polTagZvIssl(-20, 40, 24.6834, 60, 11, null) +
    polTagShIssl(-193.1852, -51.7638, null) +
    polTagShIssl(-61.7604, 130.8629, null) +
    polTagCMIssl(-127.4728, 39.5496, null) +
    polTagObZv(-140, 80, 2, 20, -8, 35, 10) +
    polTagObZv(-23, 100, 3, -2, -10, -20, 5) +
    "</g>" +
    "</svg>";

//Группа 2.
export const gr2 =
    "<svg viewBox=\"0 0 93 442\" width=\"93\" height=\"442\" class=\"risunok\">" +
    "<g transform=\"translate(37,72)\">" +
    polTagOpSk(-20, -201.2111, 270, 100, false, null, null) +
    polTagZvIssl(34.5178, 65.0562, 262.1665, 400, 11, null) +
    polTagPolzIssl(-20,-331.2111, 90, null) +
    polTagShIssl(34.5178, 65.0562, null) +
    polTagShIssl(-20,-331.2111, null) +
    polTagCMIssl(7.2589, -133.0775, null) +
    polTagObZv(40, -100, 4, -2, -10, -25, -25) +
    polTagObZv(5, -370, 5, -2, -10, -20, -20) +
    "</g>" +
    "</svg>";

//Диаграмма изменения силы полезного сопротивления.
export const diSil =
    "<svg viewBox=\"0 0 386 370\" width=\"386\" height=\"370\" class=\"risunok\">" +
    "<g transform=\"translate(340,30)\">" +
    polTagStrelka(null, 360, 20, null, 180) +
    polTagStrelka(null, 360, null, 20, 270) +
    polTagOtr(0, -150, 0, 0, 0, -300, 30, "#000", 4) +
    polTagOtr(-300, -180, 0, 0, 0, 15, 60, "#000", 4) +
    polTagOtr(-285, -240, 0, 0, 0, 285, 60, "#000", 4) +
    polTagOtr(-300, 0, 0, 0, 0, 0, 180, "#000", 2) +
    polTagOtr(-285, 0, 0, 0, 0, 0, 240, "#000", 2) +
    polTagOtr(0, -180, 0, 0, 0, -300, 0, "#000", 2) +
    polTagOtr(0, -240, 0, 0, 0, -285, 0, "#000", 2) +
    polTagText("1", 30, 1, -303, 7) +
    polTagText("0,95", 30, 0, -290, 7) +
    polTagText("0,5", 30, 0, 5, -160) +
    polTagText("0,6", 30, 0, 5, -190) +
    polTagText("0,8", 30, 0, 5, -250) +
    polTagText("1,0", 30, 0, 5, -310) +
    polTagObInd(-150, 7, null, "P", 5) +
    polTagObInd(-112, 7, null, "/P", "5 max") +
    polTagObInd(-7, -103, 90, "S", 5) +
    polTagObInd(-7, -65, 90, "/S", "5 max") +
    "</g>" +
    "</svg>";

//План скоростей.
export const planSk = polPlSkTag(["sk_VA", "sk_VBA", "sk_VB", "sk_VS2A", "sk_VS2", "sk_VD", "sk_VED", "sk_VE", "sk_VS4D", "sk_VS4"]);

//План ускорений.
export const planUsk = polPlUskTag(["usk_AA", "usk_ABAN", "usk_ABCN", "usk_ABAT", "usk_ABCT", "usk_ABA",
    "usk_AB", "usk_AS2A", "usk_AS2", "usk_AD", "usk_AEDN", "usk_AEDT", "usk_AED", "usk_AE", "usk_AS4D", "usk_AS4"]);

//План сил второй группы Ассура.
export const planSil2 = polPlSilTag(2, ["sil_R05", "sil_P5", "sil_FI5", "sil_G5",
    "sil_FI4", "sil_G4", "sil_R34", "sil_R54", "sil_R45"]);

//План сил первой группы Ассура.
export const planSil1 = polPlSilTag(1, ["sil_R43", "sil_R03T",  "sil_R03N",  "sil_R03",
    "sil_G3", "sil_R12T",  "sil_R12N",  "sil_R12", "sil_FI2", "sil_G2", "sil_R32", "sil_R23"]);

//План сил начального механизма.
export const planSilNach = polPlSilTag("nach", ["sil_R21", "sil_G1", "sil_R01"]);
