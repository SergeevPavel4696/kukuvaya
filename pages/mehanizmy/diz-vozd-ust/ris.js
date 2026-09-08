import {
    polTagCMIssl, polTagNaprVr, polTagObTochInd, polTagObToch, polTagObZv, polTagOpSk,
    polTagOpVr, polPlSkTag, polPlUskTag, polTagPolzIssl, polTagShIssl, polTagUg, polTagZvIssl, polPlSilTag, polTagObInd
} from "../meh-svg-utils.js";
import {
    polTagKrPu, polTagLom, polTagOkrPu, polTagOtr, polTagOtrPu, polTagOtrShPu, polTagPr, polTagStrelka
} from "../../../scripts/utils-svg-geom.js";


//Рисунок задания.
export const zadanie =
    "<svg viewBox=\"0 0 563 387\" width=\"563\" height=\"387\" class=\"risunok\">" +
    "<g transform=\"translate(233,332)\">" +
    "<!--Опора вращения-->" +
    polTagOpVr(null, null, null, null, null) +
    "<!--Опоры скольжения-->" +
    polTagOpSk(-90.6104, 90.6104, 135, 100, true, true, null) +
    polTagOpSk(187.7185, 187.7185, 45, 100, true, true, null) +
    "<!--Звенья-->" +
    polTagZvIssl(null, null, 30, 100, 11, null) +
    polTagZvIssl(86.6025, 50, 153.7824, 300, 11, null) +
    polTagPolzIssl(-182.5343, 182.5343, 135, null) +
    polTagZvIssl(86.6025, 50, 49.9492, 300, 11, null) +
    polTagPolzIssl(279.6424, 279.6424, 45, null) +
    "<!--Шарниры-->" +
    polTagShIssl(86.6025, 50, null) +
    polTagShIssl(-182.5343, 182.5343, null) +
    polTagShIssl(279.6424, 279.6424, null) +
    "<!--Центры тяжести-->" +
    polTagCMIssl(-3.1097, 94.1781, null) +
    polTagCMIssl(150.9492, 126.5475, null) +
    "<!--Направление вращения кривошипа и угол между осями ползунов-->" +
    polTagNaprVr(null, null, 30, 55, 105, null) +
    polTagUg(null, null, 135, 135, 90) +
    "<!--Обозначения-->" +
    polTagObZv(55, -10, 1, 0, -10, -20, -30) +
    polTagObZv(-100, 160, 2, 0, -10, -20, 10) +
    polTagObZv(-220, 140, 3, 20, -10, 40, -30) +
    polTagObZv(220, 155, 4, 0, -10, -20, -30) +
    polTagObZv(300, 240, 5, 0, -10, -20, -30) +
    polTagObTochInd(-20, -10, "O,S", 1) +
    polTagObToch(105, 35, "A") +
    polTagObTochInd(5, 105, "S", 2) +
    polTagObTochInd(-120, 200, "B,S", 3) +
    polTagObTochInd(175, 100, "S", 4) +
    polTagObTochInd(265, 300, "C,S", 5) +
    polTagObTochInd(5, 65, "φ", 1) +
    polTagObToch(5, 140, "90°") +
    polTagOtrShPu(null, null, 135, 138.1425, "#000", 1, "15 5 2 5", null) +
    polTagOtrShPu(null, null, 45, 265.4740, "#000", 1, "15 5 2 5", null) +
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
    polTagShIssl(0, 0, "shC_ris") +
    polTagCMIssl(0, 0, "s2_ris") +
    polTagCMIssl(0, 0, "s4_ris") +
    "</g>" +
    "</svg>";

//Механизм с интерактивными элементами.
export const mehanismInter =
    "<svg id=\"meh_ris\" viewBox=\"0 0 595 405\" width=\"595\" height=\"405\" visibility=\"hidden\" " +
    "class=\"risunok-inter\">" +
    polTagPr(null, null, null, 0, 0, 405, 595, "#fff", "#000", 3, null) +
    "<g transform=\"translate(297.5,297.5)\">" +
    polTagOpVr(null, null, null, "st_1", "sh_O") +
    polTagOpSk(-106.1, 106.1, 135, 182.25, false, false, "st_3", null) +
    polTagOpSk(106.1, 106.1, 45, 182.25, false, false, "st_5", null) +
    polTagZvIssl(null, null, 90, 100, 11, "zv_OA") +
    polTagZvIssl(null, 100, 148.63, 300, 11, "zv_AB") +
    polTagPolzIssl(-256.16, 256.16, 135, "pol3") +
    polTagZvIssl(null, 100, 31.37, 300, 11, "zv_AC") +
    polTagPolzIssl(256.16, 256.16, 45, "pol5") +
    polTagShIssl(0, 100, "sh_A") +
    polTagShIssl(-256.16, 256.16, "sh_B") +
    polTagShIssl(256.16, 256.16, "sh_C") +
    polTagCMIssl(-85.39, 152.05, "S2") +
    polTagCMIssl(85.39, 152.05, "S4") +
    polTagOkrPu(0, 0, 100, "none", "#000", 2, "15 5 2 5", "tr_A") +
    polTagOtrPu(-3.5, 3.5, 135, 150, "#000", 2, "15 5 2 5", "tr_B") +
    polTagOtrPu(3.5, 3.5, 45, 150, "#000", 2, "15 5 2 5", "tr_C") +
    polTagKrPu("tr_S2", "-141.4 -141.4 -138.3 -144.2 -134.9 -146.7 -131.2 -148.9 -127.2 -150.7 -123 -152.2 " +
        "-118.6 -153.3 -113.9 -154 -109 -154.5 -104 -154.5 -98.8 -154.3 -93.5 -153.6 -88.1 -152.7 -82.6 -151.4 " +
        "-77.1 -149.7 -71.5 -147.8 -65.9 -145.5 -60.4 -143 -54.9 -140.2 -49.4 -137.1 -44.1 -133.7 -38.8 -130.2 " +
        "-33.8 -126.4 -28.8 -122.4 -24.1 -118.2 -19.5 -113.8 -15.2 -109.3 -11.1 -104.6 -7.3 -99.9 -3.7 -95 -0.4 " +
        "-90 2.6 -85 5.3 -80 7.7 -74.9 9.8 -69.8 11.6 -64.7 13.1 -59.6 14.2 -54.6 15 -49.6 15.4 -44.7 15.6 -39.8 " +
        "15.4 -35.1 14.9 -30.5 14.1 -26.1 12.9 -21.8 11.5 -17.7 9.7 -13.7 7.7 -9.9 5.4 -6.4 2.8 -3.1 0 0 -3.1 2.8 " +
        "-6.4 5.4 -9.9 7.7 -13.7 9.7 -17.7 11.5 -21.8 12.9 -26.1 14.1 -30.5 14.9 -35.1 15.4 -39.8 15.6 -44.7 15.4 " +
        "-49.6 15 -54.6 14.2 -59.6 13.1 -64.7 11.6 -69.8 9.8 -74.9 7.7 -80 5.3 -85 2.6 -90 -0.4 -95 -3.7 -99.9 -7.3 " +
        "-104.6 -11.1 -109.3 -15.2 -113.8 -19.5 -118.2 -24.1 -122.4 -28.8 -126.4 -33.8 -130.2 -38.8 -133.7 -44.1 " +
        "-137.1 -49.4 -140.2 -54.9 -143 -60.4 -145.5 -65.9 -147.8 -71.5 -149.7 -77.1 -151.4 -82.6 -152.7 -88.1 " +
        "-153.6 -93.5 -154.3 -98.8 -154.5 -104 -154.5 -109 -154 -113.9 -153.3 -118.6 -152.2 -123 -150.7 -127.2 " +
        "-148.9 -131.2 -146.7 -134.9 -144.2 -138.3 -141.4 -141.4") +
    polTagKrPu("tr_S4", "141.4 -141.4 138.3 -144.2 134.9 -146.7 131.2 -148.9 127.2 -150.7 123 -152.2 118.6 " +
        "-153.3 113.9 -154 109 -154.5 104 -154.5 98.8 -154.3 93.5 -153.6 88.1 -152.7 82.6 -151.4 77.1 -149.7 71.5 " +
        "-147.8 65.9 -145.5 60.4 -143 54.9 -140.2 49.4 -137.1 44.1 -133.7 38.8 -130.2 33.8 -126.4 28.8 -122.4 24.1 " +
        "-118.2 19.5 -113.8 15.2 -109.3 11.1 -104.6 7.3 -99.9 3.7 -95 0.4 -90 -2.6 -85 -5.3 -80 -7.7 -74.9 -9.8 " +
        "-69.8 -11.6 -64.7 -13.1 -59.6 -14.2 -54.6 -15 -49.6 -15.4 -44.7 -15.6 -39.8 -15.4 -35.1 -14.9 -30.5 -14.1 " +
        "-26.1 -12.9 -21.8 -11.5 -17.7 -9.7 -13.7 -7.7 -9.9 -5.4 -6.4 -2.8 -3.1 0 0 3.1 2.8 6.4 5.4 9.9 7.7 13.7 9.7 " +
        "17.7 11.5 21.8 12.9 26.1 14.1 30.5 14.9 35.1 15.4 39.8 15.6 44.7 15.4 49.6 15 54.6 14.2 59.6 13.1 64.7 11.6 " +
        "69.8 9.8 74.9 7.7 80 5.3 85 2.6 90 -0.4 95 -3.7 99.9 -7.3 104.6 -11.1 109.3 -15.2 113.8 -19.5 118.2 -24.1 " +
        "122.4 -28.8 126.4 -33.8 130.2 -38.8 133.7 -44.1 137.1 -49.4 140.2 -54.9 143 -60.4 145.5 -65.9 147.8 -71.5 " +
        "149.7 -77.1 151.4 -82.6 152.7 -88.1 153.6 -93.5 154.3 -98.8 154.5 -104 154.5 -109 154 -113.9 153.3 -118.6 " +
        "152.2 -123 150.7 -127.2 148.9 -131.2 146.7 -134.9 144.2 -138.3 141.4 -141.4") +
    "</g>" +
    "</svg>";

//Начальный механизм.
export const nach =
    "<svg viewBox=\"0 0 112 101\" width=\"112\" height=\"101\" class=\"risunok\">" +
    "<g transform=\"translate(29,50)\">" +
    polTagOpVr(null, null, null, null, null) +
    polTagZvIssl(null, null, 30, 100, 11, null) +
    polTagObZv(55, -10, 1, 0, -10, -20, -30) +
    "</g>" +
    "</svg>";

//Группа 1.
export const gr1 =
    "<svg viewBox=\"0 0 317 180\" width=\"317\" height=\"180\" class=\"risunok\">" +
    "<g transform=\"translate(223,223)\">" +
    polTagOpSk(-90.6104, 90.6104, 135, 100, true, true, null) +
    polTagZvIssl(86.6025, 50, 153.7824, 300, 11, null) +
    polTagPolzIssl(-182.5343, 182.5343, 135, null) +
    polTagShIssl(86.6025, 50, null) +
    polTagShIssl(-182.5343, 182.5343, null) +
    polTagCMIssl(-3.1097, 94.1781, null) +
    polTagObZv(-100, 160, 2, 0, -10, -20, 10) +
    polTagObZv(-220, 140, 3, 20, -10, 40, -30) +
    "</g>" +
    "</svg>";

//Группа 2.
export const gr2 =
    "<svg viewBox=\"0 0 240 277\" width=\"240\" height=\"277\" class=\"risunok\">" +
    "<g transform=\"translate(-80,320)\">" +
    polTagOpSk(187.7185, 187.7185, 45, 100, true, true, null) +
    polTagZvIssl(86.6025, 50, 49.9492, 300, 11, null) +
    polTagPolzIssl(279.6424, 279.6424, 45, null) +
    polTagShIssl(86.6025, 50, null) +
    polTagShIssl(279.6424, 279.6424, null) +
    polTagCMIssl(150.9492, 126.5475, null) +
    polTagObZv(220, 155, 4, 0, -10, -20, -30) +
    polTagObZv(300, 240, 5, 0, -10, -20, -30) +
    "</g>" +
    "</svg>";

//Диаграмма изменения давлений в цилиндрах.
export const diDavl =
    "<svg viewBox=\"0 0 395 360\" width=\"395\" height=\"360\" class=\"risunok\">" +
    "<g transform=\"translate(55,340)\">" +
    polTagStrelka(null, 360, -20, null) +
    polTagStrelka(null, 360, null, -20, 90) +
    polTagLom(null, "240.0 0 300.0 -6 237.0 -15 165.0 -30 102.0 -60 69.0 -90 51.0 " +
        "-120 39.0 -150 30.0 -180 24.0 -210 18.0 -240 6.0 -270 0.0 -300 0.0 -270 0.9 -240 3.0 " +
        "-210 6.0 -180 9.0 -150 15.0 -120 24.0 -90 36.0 -60 66.0 -30 105.0 -15 150.0 -6 240.0 0") +
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
export const planSk =
    polPlSkTag(["sk_VA", "sk_VBA", "sk_VB", "sk_VS2A", "sk_VS2", "sk_VCA", "sk_VC", "sk_VS4A", "sk_VS4"]);

//План ускорений.
export const planUsk = polPlUskTag(["usk_AA", "usk_ABAN", "usk_ABAT", "usk_ABA", "usk_AB",
    "usk_AS2A", "usk_AS2", "usk_ACAN", "usk_ACAT", "usk_ACA", "usk_AC", "usk_AS4A", "usk_AS4"]);

//План сил второй группы Ассура.
export const planSil2 =
    polPlSilTag(2, ["sil_R05", "sil_P5", "sil_FI5", "sil_G5", "sil_FI4", "sil_G4", "sil_R14", "sil_R54", "sil_R45"]);

//План сил первой группы Ассура.
export const planSil1 =
    polPlSilTag(1, ["sil_R03", "sil_P3", "sil_FI3", "sil_G3", "sil_FI2", "sil_G2", "sil_R12", "sil_R32", "sil_R23"]);

//План сил начального механизма.
export const planSilNach = polPlSilTag("nach", ["sil_R41", "sil_R21", "sil_G1", "sil_R01"]);
