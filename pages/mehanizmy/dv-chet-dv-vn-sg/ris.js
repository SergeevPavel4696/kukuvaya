import {
    polTagCMIssl, polTagNaprVr, polTagObTochInd, polTagObToch, polTagObZv, polTagOpSk,
    polTagOpVr, polPlSkTag, polPlUskTag, polTagPolzIssl, polTagShIssl, polTagZvIssl, polPlSilTag, polTagObInd
} from "../meh-svg-utils.js";
import {
    polTagKrPu, polTagLom, polTagOkrPu, polTagOtr, polTagOtrPu, polTagOtrShPu, polTagPr, polTagStrelka
} from "../../../scripts/utils-svg-geom.js";


//Рисунок задания.
export const zadanie =
    "<svg viewBox=\"0 0 574 225\" width=\"574\" height=\"225\" class=\"risunok\">" +
    "<g transform=\"translate(290,112)\">" +
    "<!--Опора вращения-->" +
    polTagOpVr(null,null,null,null,null) +
    "<!--Опоры скольжения-->" +
    polTagOpSk(-98.4436, null, 180, 100, true, true, null) +
    polTagOpSk(98.4436, null, null, 100, true, false, null) +
    "<!--Звенья-->" +
    polTagZvIssl(null,null, 52.5, 100, 11, null) +
    polTagZvIssl(60.8761, 79.3353, 195.3343, 300, 11, null) +
    polTagPolzIssl(-228.4436,null, null, null) +
    polTagZvIssl(null,null, 232.5, 100, 11, null) +
    polTagZvIssl(-60.8761, -79.3353, 15.3343, 300, 11, null) +
    polTagPolzIssl(228.4436,null, null, null) +
    "<!--Шарниры-->" +
    polTagShIssl(60.8761, 79.3353, null) +
    polTagShIssl(-228.4436, 0, null) +
    polTagShIssl(-60.8761, -79.3353, null) +
    polTagShIssl(228.4436, 0, null) +
    "<!--Центры тяжести-->" +
    polTagCMIssl(-35.5638, 52.8902, null) +
    polTagCMIssl(35.5638, -52.8902, null) +
    "<!--Направление вращения кривошипа-->" +
    polTagNaprVr(null,null, 52.5, 50, 127.5, false) +
    "<!--Обозначения-->" +
    polTagObZv(60, 25, 1, 0, -10, -20, -25) +
    polTagObZv(-130, 45, 2, 20, -10, 30, 10) +
    polTagObZv(-290, 20, 3, 20, -10, 40, 10) +
    polTagObZv(115, -65, 4, 0, -10, -10, -30) +
    polTagObZv(265, -40, 5, 0, -10, -15, -30) +
    polTagObTochInd(65, -10, "O,S", 1) +
    polTagObToch(62, 90, "A") +
    polTagObTochInd(-28, 65, "S", 2) +
    polTagObTochInd(-210, 25, "B,S", 3) +
    polTagObToch(-62, -113, "C") +
    polTagObTochInd(45, -85, "S", 4) +
    polTagObTochInd(250, -45, "D,S", 5) +
    polTagObTochInd(-55, 22, "φ", 1) +
    polTagOtrShPu(-98.4436, null, null, 196.8872, "#000", 1, "15 5 2 5", null) +
    "</g>" +
    "</svg>";

//Подвижный механизм.
export const mehanismPodv =
    "<svg id=\"meh_ris\" class=\"risunok\">" +
    "<g id=\"meh_ris-1\">" +
    polTagOpVr(null,null,null,null, "shO_ris") +
    polTagOpSk(null, null, null, 0, false, false, "st3_ris", "tr3_ris") +
    polTagOpSk(null, null, null, 0, false, false, "st5_ris", "tr5_ris") +
    polTagZvIssl(null,null, null, 0, 11, "zv1a_ris") +
    polTagZvIssl(null,null, null, 0, 11, "zv2_ris") +
    polTagPolzIssl(null,null, null, "zv3_ris") +
    polTagZvIssl(null,null, null, 0, 11, "zv1c_ris") +
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
    "<svg id=\"meh_ris\" viewBox=\"0 0 530 214\" width=\"530\" height=\"214\" visibility=\"hidden\" " +
    "class=\"risunok-inter\">" +
    polTagPr(null, null, null, 0, 0, 214, 530, "#fff", "#000", 3, null) +
    "<g transform=\"translate(265,107)\">" +
    polTagOpVr(null,null,null,"st_1","sh_O") +
    polTagOpSk(-98.4436, null, 180, 100, false, true, "st_3") +
    polTagOpSk(98.4436, null, null, 100, false, false, "st_5") +
    polTagZvIssl(null,null, 52.5, 100, 11, "zv_OA") +
    polTagZvIssl(60.8761, 79.3353, 195.3343, 300, 11, "zv_AB") +
    polTagPolzIssl(-228.4436,null, null, "pol_3") +
    polTagZvIssl(null,null, 232.5, 100, 11, "zv_OC") +
    polTagZvIssl(-60.8761, -79.3353, 15.3343, 300, 11, "zv_CD") +
    polTagPolzIssl(228.4436,null, null, "pol_5") +
    polTagShIssl(60.8761, 79.3353, "sh_A") +
    polTagShIssl(-228.4436, 0, "sh_B") +
    polTagShIssl(-60.8761, -79.3353, "sh_C") +
    polTagShIssl(228.4436, 0, "sh_D") +
    polTagCMIssl(-35.5638, 52.8902, "S2") +
    polTagCMIssl(35.5638, -52.8902, "S4") +
    polTagOkrPu(0, 0, 100, "none", "#000", 2, "15 5 2 5", "tr_AC") +
    polTagOtrPu(null, null, 180, 98.4436, "#000", 2, "15 5 2 5", "tr_B") +
    polTagOtrPu(null, null, null, 98.4436, "#000", 2, "15 5 2 5", "tr_D") +
    polTagKrPu("tr_S2", "-200 0 -199.8 -4.2 -199.1 -8.4 -198 -12.5 -196.5 -16.6 -194.6 -20.6 -192.2 -24.5 " +
        "-189.5 -28.4 -186.3 -32.1 -182.8 -35.7 -179 -39.2 -174.8 -42.5 -170.3 -45.6 -165.5 -48.6 -160.4 -51.4 " +
        "-155.1 -53.9 -149.5 -56.3 -143.8 -58.4 -137.9 -60.3 -131.9 -62 -125.7 -63.4 -119.5 -64.6 -113.2 -65.5 " +
        "-106.9 -66.1 -100.6 -66.5 -94.3 -66.7 -88 -66.5 -81.8 -66.1 -75.7 -65.5 -69.8 -64.6 -63.9 -63.4 -58.3 -62 " +
        "-52.8 -60.3 -47.5 -58.4 -42.4 -56.3 -37.5 -53.9 -32.9 -51.4 -28.5 -48.6 -24.5 -45.6 -20.7 -42.5 -17.2 -39.2 " +
        "-14 -35.7 -11.1 -32.1 -8.5 -28.4 -6.3 -24.5 -4.4 -20.6 -2.8 -16.6 -1.6 -12.5 -0.7 -8.4 -0.2 -4.2 0 0 -0.2 " +
        "4.2 -0.7 8.4 -1.6 12.5 -2.8 16.6 -4.4 20.6 -6.3 24.5 -8.5 28.4 -11.1 32.1 -14 35.7 -17.2 39.2 -20.7 42.5 " +
        "-24.5 45.6 -28.5 48.6 -32.9 51.4 -37.5 53.9 -42.4 56.3 -47.5 58.4 -52.8 60.3 -58.3 62 -63.9 63.4 -69.8 64.6 " +
        "-75.7 65.5 -81.8 66.1 -88 66.5 -94.3 66.7 -100.6 66.5 -106.9 66.1 -113.2 65.5 -119.5 64.6 -125.7 63.4 " +
        "-131.9 62 -137.9 60.3 -143.8 58.4 -149.5 56.3 -155.1 53.9 -160.4 51.4 -165.5 48.6 -170.3 45.6 -174.8 42.5 " +
        "-179 39.2 -182.8 35.7 -186.3 32.1 -189.5 28.4 -192.2 24.5 -194.6 20.6 -196.5 16.6 -198 12.5 -199.1 8.4 " +
        "-199.8 4.2 -200 0") +
    polTagKrPu("tr_S4", "200 0 199.8 4.2 199.1 8.4 198 12.5 196.5 16.6 194.6 20.6 192.2 24.5 189.5 28.4 " +
        "186.3 32.1 182.8 35.7 179 39.2 174.8 42.5 170.3 45.6 165.5 48.6 160.4 51.4 155.1 53.9 149.5 56.3 143.8 58.4 " +
        "137.9 60.3 131.9 62 125.7 63.4 119.5 64.6 113.2 65.5 106.9 66.1 100.6 66.5 94.3 66.7 88 66.5 81.8 66.1 75.7 " +
        "65.5 69.8 64.6 63.9 63.4 58.3 62 52.8 60.3 47.5 58.4 42.4 56.3 37.5 53.9 32.9 51.4 28.5 48.6 24.5 45.6 20.7 " +
        "42.5 17.2 39.2 14 35.7 11.1 32.1 8.5 28.4 6.3 24.5 4.4 20.6 2.8 16.6 1.6 12.5 0.7 8.4 0.2 4.2 0 0 0.2 -4.2 " +
        "0.7 -8.4 1.6 -12.5 2.8 -16.6 4.4 -20.6 6.3 -24.5 8.5 -28.4 11.1 -32.1 14 -35.7 17.2 -39.2 20.7 -42.5 24.5 " +
        "-45.6 28.5 -48.6 32.9 -51.4 37.5 -53.9 42.4 -56.3 47.5 -58.4 52.8 -60.3 58.3 -62 63.9 -63.4 69.8 -64.6 75.7 " +
        "-65.5 81.8 -66.1 88 -66.5 94.3 -66.7 100.6 -66.5 106.9 -66.1 113.2 -65.5 119.5 -64.6 125.7 -63.4 131.9 -62 " +
        "137.9 -60.3 143.8 -58.4 149.5 -56.3 155.1 -53.9 160.4 -51.4 165.5 -48.6 170.3 -45.6 174.8 -42.5 179 -39.2 " +
        "182.8 -35.7 186.3 -32.1 189.5 -28.4 192.2 -24.5 194.6 -20.6 196.5 -16.6 198 -12.5 199.1 -8.4 199.8 -4.2 200 0") +
    "</g>" +
    "</svg>";

//Начальный механизм.
export const nach =
    "<svg viewBox=\"0 0 132 155\" width=\"132\" height=\"155\" class=\"risunok\">" +
    "<g transform=\"translate(60,78)\">" +
    polTagOpVr(null,null,null,null,null) +
    polTagZvIssl(null,null, 52.5, 100, 11, null) +
    polTagZvIssl(null,null, 232.5, 100, 11, null) +
    polTagObZv(60, 25, 1, 0, -10, -20, -25) +
    "</g>" +
    "</svg>";

//Группа 1.
export const gr1 =
    "<svg viewBox=\"0 0 358 104\" width=\"358\" height=\"104\" class=\"risunok\">" +
    "<g transform=\"translate(290,87)\">" +
    polTagOpSk(-98.4436, null, 180, 100, true, true, null) +
    polTagZvIssl(60.8761, 79.3353, 195.3343, 300, 11, null) +
    polTagPolzIssl(-228.4436,null, null, null) +
    polTagShIssl(60.8761, 79.3353, null) +
    polTagShIssl(-228.4436, 0, null) +
    polTagCMIssl(-35.5638, 52.8902, null) +
    polTagObZv(-130, 45, 2, 20, -10, 30, 10) +
    polTagObZv(-290, 20, 3, 20, -10, 40, 10) +
    "</g>" +
    "</svg>";

//Группа 2.
export const gr2 =
    "<svg viewBox=\"0 0 352 104\" width=\"352\" height=\"104\" class=\"risunok\">" +
    "<g transform=\"translate(68,17)\">" +
    polTagOpSk(98.4436, null, null, 100, true, false, null) +
    polTagZvIssl(-60.8761, -79.3353, 15.3343, 300, 11, null) +
    polTagPolzIssl(228.4436,null, null, null) +
    polTagShIssl(-60.8761, -79.3353, null) +
    polTagShIssl(228.4436, 0, null) +
    polTagCMIssl(35.5638, -52.8902, null) +
    polTagObZv(115, -65, 4, 0, -10, -10, -30) +
    polTagObZv(265, -40, 5, 0, -10, -15, -30) +
    "</g>" +
    "</svg>";

//Диаграмма изменения давлений в цилиндрах.
export const diDavl =
    "<svg viewBox=\"0 0 395 360\" width=\"395\" height=\"360\" class=\"risunok\">" +
    "<g transform=\"translate(55,340)\">" +
    polTagStrelka(null, 360, -20, null) +
    polTagStrelka(null, 360, null, -20, 90) +
    polTagLom(null, "0.0 -3.0 7.5 0.0 15.0 3.0 30.0 3.0 60.0 3.0 90.0 3.0 120.0 3.0 150.0 3.0 " +
        "180.0 3.0 210.0 3.0 240.0 3.0 270.0 3.0 300.0 3.0 270.0 1.5 240.0 0.0 210.0 -2.1 180.0 -4.2 " +
        "150.0 -9.0 120.0 -12.0 90.0 -18.0 60.0 -30.0 30.0 -48.0 15.0 -60.0 7.5 -69.0 0.0 -87.0 7.5 " +
        "-300.0 15.0 -270.0 30.0 -210.0 60.0 -150.0 90.0 -108.0 120.0 -87.0 150.0 -72.0 180.0 -57.0 " +
        "210.0 -51.0 240.0 -42.0 270.0 -36.0 300.0 -15.0 270.0 -3.0 240.0 -3.0 210.0 -3.0 180.0 -3.0 " +
        "150.0 -3.0 120.0 -3.0 90.0 -3.0 60.0 -3.0 30.0 -3.0 15.0 -3.0 7.5 -3.0 0.0 -3.0 ") +
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
    polTagObInd(330, 10, null, "S", "i") +
    polTagObInd(25, 315, null, "p", "i") +
    polTagObInd(-40, 290, null, "p", "i max") +
    "</g>" +
    "</svg>";

//План скоростей.
export const planSk = polPlSkTag(["sk_VA", "sk_VBA", "sk_VB", "sk_VS2A", "sk_VS2", "sk_VC", "sk_VDC", "sk_VD", "sk_VS4", "sk_VS4C"]);

//План ускорений.
export const planUsk = polPlUskTag(["usk_AA", "usk_ABAN", "usk_ABAT", "usk_ABA", "usk_AB", "usk_AS2A",
    "usk_AS2", "usk_AC", "usk_ADCN", "usk_ADCT", "usk_ADC", "usk_AD", "usk_AS4C", "usk_AS4"]);

//План сил второй группы Ассура.
export const planSil2 =
    polPlSilTag(2, ["sil_R05", "sil_P5", "sil_FI5", "sil_G5", "sil_FI4", "sil_G4", "sil_R14", "sil_R54", "sil_R45"]);

//План сил первой группы Ассура.
export const planSil1 =
    polPlSilTag(1, ["sil_R03", "sil_P3", "sil_FI3", "sil_G3", "sil_FI2", "sil_G2", "sil_R12", "sil_R32", "sil_R23"]);

//План сил начального механизма.
export const planSilNach = polPlSilTag("nach", ["sil_R41", "sil_R21", "sil_G1", "sil_R01"]);
