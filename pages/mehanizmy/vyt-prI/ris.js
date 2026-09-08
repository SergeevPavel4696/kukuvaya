import {
    polTagCMIssl, polTagNaprVr, polTagObTochInd, polTagObToch, polTagObZv, polTagOpSk, polTagOpVr,
    polPlSkTag, polPlUskTag, polTagPolzIssl, polTagShIssl, polTagZvIssl, polPlSilTag, polTagObInd
} from "../meh-svg-utils.js";
import {
    polTagDug, polTagKrPu, polTagOkrPu, polTagOtr, polTagOtrPu, polTagOtrShPu, polTagPr, polTagStrelka
} from "../../../scripts/utils-svg-geom.js";


//Рисунок задания.
export const zadanie =
    "<svg viewBox=\"0 0 570 155\" width=\"570\" height=\"155\" class=\"risunok\">" +
    "<g transform=\"translate(296,104)\">" +
    "<!--Опора вращения-->" +
    polTagOpVr(null, null, null, null, null) +
    "<!--Опоры скольжения-->" +
    polTagOpSk(87.355, null, null, 100, true, false, null) +
    polTagOpSk(-109.7221, null, 180, 100, true, true, null) +
    "<!--Звенья-->" +
    polTagZvIssl(null, null, 45, 60, 11, null) +
    polTagZvIssl(42.4264, 42.4264, 346.3670, 180, 11, null) +
    polTagPolzIssl(217.355, null, null, null) +
    polTagZvIssl(42.4264, 42.4264, 166.3670, 120, 11, null) +
    polTagZvIssl(-74.1926, 70.7107, 203.1311, 180, 11, null) +
    polTagPolzIssl(-239.7221, null, null, null) +
    "<!--Шарниры-->" +
    polTagShIssl(42.4264, 42.4264, null) +
    polTagShIssl(217.355, 0, null) +
    polTagShIssl(-74.1926, 70.7107, null) +
    polTagShIssl(-239.7221, 0, null) +
    "<!--Центры тяжести-->" +
    polTagCMIssl(71.5811, 35.3554, null) +
    polTagCMIssl(-129.3691, 47.1404, null) +
    "<!--Направление вращения кривошипа-->" +
    polTagNaprVr(null, null, 45, 38, 135, null) +
    "<!--Обозначения-->" +
    polTagObZv(53, 5, 1, 0, -10, -20, -30) +
    polTagObZv(120, 40, 2, 0, -10, -15, 10) +
    polTagObZv(160, -40, 3, 20, -10, 40, -35) +
    polTagObZv(-200, 45, 4, 20, -10, 40, 10) +
    polTagObZv(-205, -40, 5, 0, -10, -20, -35) +
    polTagObTochInd(62, -17, "O,S", 1) +
    polTagObToch(42, 55, "A") +
    polTagObTochInd(80, 45, "S", 2) +
    polTagObTochInd(237, 25, "B,S", 3) +
    polTagObToch(-75, 82, "C") +
    polTagObTochInd(-125, 60, "S", 4) +
    polTagObTochInd(-217, 25, "D,S", 5) +
    polTagObTochInd(-26, 38, "φ", 1) +
    polTagOtrShPu(null, null, null, 87.355, "#000", 1, "15 5 2 5", null) +
    polTagOtrShPu(null, null, 180, 109.7221, "#000", 1, "15 5 2 5", null) +
    "</g>" +
    "</svg>";

//Подвижный механизм.
export const mehanismPodv =
    "<svg id=\"meh_ris\" class=\"meh__ris\">" +
    "<g id=\"meh_ris-1\">" +
    polTagOpVr(null, null, null, null, "shO_ris") +
    polTagOpSk(null, null, null, 0, false, false, "st3_ris", "tr3_ris") +
    polTagOpSk(null, null, 180, 0, false, true, "st5_ris", "tr5_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv1_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv2B_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv2C_ris") +
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
    "<svg id=\"meh_ris\" viewBox=\"0 0 535 214\" width=\"535\" height=\"214\" visibility=\"hidden\" " +
    "class=\"risunok-inter\">" +
    polTagPr(null, null, null, 0, 0, 214, 535, "#fff", "#000", 3, null) +
    "<g transform=\"translate(278,107)\">" +
    polTagOpVr(null, null, null, "st_1", "sh_O") +
    polTagOpSk(87.355, null, null, 100, false, false, "st_3", null) +
    polTagOpSk(-109.7221, null, 180, 100, false, true, "st_5", null) +
    polTagZvIssl(null, null, 45, 60, 11, "zv_OA") +
    polTagZvIssl(42.4264, 42.4264, 346.3670, 180, 11, "zv_AB") +
    polTagPolzIssl(217.355, null, null, "pol3") +
    polTagZvIssl(42.4264, 42.4264, 166.3670, 120, 11, "zv_AC") +
    polTagZvIssl(-74.1926, 70.7107, 203.1311, 180, 11, "zv_CD") +
    polTagPolzIssl(-239.7221, null, null, "pol5") +
    polTagShIssl(42.4264, 42.4264, "sh_A") +
    polTagShIssl(217.355, 0, "sh_B") +
    polTagShIssl(-74.1926, 70.7107, "sh_C") +
    polTagShIssl(-239.7221, 0, "sh_D") +
    polTagCMIssl(71.5811, 35.3554, "S2") +
    polTagCMIssl(-129.3691, 47.1404, "S4") +
    polTagOkrPu(0, 0, 60, "none", "#000", 2, "15 5 2 5", "tr_A") +
    polTagOtrPu(5, null, null, 82.355, "#000", 2, "15 5 2 5", "tr_B") +
    polTagOtrPu(-5, null, 180, 104.7221, "#000", 2, "15 5 2 5", "tr_D") +
    polTagKrPu("tr_S2", "-30 0 -29.9 3.1 -29.6 6.3 -29 9.4 -28.2 12.4 -27.2 15.5 -26 18.4 -24.6 21.3 -23 " +
        "24.1 -21.1 26.8 -19.1 29.4 -16.9 31.9 -14.5 34.2 -12 36.4 -9.3 38.5 -6.4 40.5 -3.4 42.2 -0.2 43.8 3.1 45.2 " +
        "6.4 46.5 9.9 47.6 13.5 48.4 17.1 49.1 20.8 49.6 24.5 49.9 28.3 50 32.1 49.9 35.8 49.6 39.6 49.1 43.3 48.4 " +
        "47 47.6 50.6 46.5 54.1 45.2 57.6 43.8 60.9 42.2 64.2 40.5 67.2 38.5 70.2 36.4 72.9 34.2 75.5 31.9 78 29.4 " +
        "80.2 26.8 82.2 24.1 84 21.3 85.6 18.4 86.9 15.5 88 12.4 88.9 9.4 89.5 6.3 89.9 3.1 90 0 89.9 -3.1 89.5 -6.3 " +
        "88.9 -9.4 88 -12.4 86.9 -15.5 85.6 -18.4 84 -21.3 82.2 -24.1 80.2 -26.8 78 -29.4 75.5 -31.9 72.9 -34.2 70.2 " +
        "-36.4 67.2 -38.5 64.2 -40.5 60.9 -42.2 57.6 -43.8 54.1 -45.2 50.6 -46.5 47 -47.6 43.3 -48.4 39.6 -49.1 35.8 " +
        "-49.6 32.1 -49.9 28.3 -50 24.5 -49.9 20.8 -49.6 17.1 -49.1 13.5 -48.4 9.9 -47.6 6.4 -46.5 3.1 -45.2 -0.2 " +
        "-43.8 -3.4 -42.2 -6.4 -40.5 -9.3 -38.5 -12 -36.4 -14.5 -34.2 -16.9 -31.9 -19.1 -29.4 -21.1 -26.8 -23 -24.1 " +
        "-24.6 -21.3 -26 -18.4 -27.2 -15.5 -28.2 -12.4 -29 -9.4 -29.6 -6.3 -29.9 -3.1 -30 0") +
    polTagKrPu("tr_S4", "-240 0 -239.8 4.2 -239.3 8.4 -238.4 12.5 -237.1 16.6 -235.5 20.6 -233.6 24.5 " +
        "-231.4 28.4 -228.8 32.1 -226 35.7 -222.9 39.2 -219.6 42.5 -216.1 45.6 -212.3 48.6 -208.4 51.4 -204.4 53.9 " +
        "-200.3 56.3 -196.1 58.4 -191.8 60.3 -187.6 62 -183.3 63.4 -179.1 64.6 -174.9 65.5 -170.8 66.1 -166.9 66.5 " +
        "-163 66.7 -159.3 66.5 -155.8 66.1 -152.4 65.5 -149.2 64.6 -146.2 63.4 -143.4 62 -140.7 60.3 -138.3 58.4 " +
        "-136 56.3 -133.9 53.9 -132 51.4 -130.2 48.6 -128.6 45.6 -127.1 42.5 -125.8 39.2 -124.7 35.7 -123.7 32.1 " +
        "-122.8 28.4 -122 24.5 -121.4 20.6 -120.9 16.6 -120.5 12.5 -120.2 8.4 -120.1 4.2 -120 0 -120.1 -4.2 -120.2 " +
        "-8.4 -120.5 -12.5 -120.9 -16.6 -121.4 -20.6 -122 -24.5 -122.8 -28.4 -123.7 -32.1 -124.7 -35.7 -125.8 -39.2 " +
        "-127.1 -42.5 -128.6 -45.6 -130.2 -48.6 -132 -51.4 -133.9 -53.9 -136 -56.3 -138.3 -58.4 -140.7 -60.3 -143.4 " +
        "-62 -146.2 -63.4 -149.2 -64.6 -152.4 -65.5 -155.8 -66.1 -159.3 -66.5 -163 -66.7 -166.9 -66.5 -170.8 -66.1 " +
        "-174.9 -65.5 -179.1 -64.6 -183.3 -63.4 -187.6 -62 -191.8 -60.3 -196.1 -58.4 -200.3 -56.3 -204.4 -53.9 " +
        "-208.4 -51.4 -212.3 -48.6 -216.1 -45.6 -219.6 -42.5 -222.9 -39.2 -226 -35.7 -228.8 -32.1 -231.4 -28.4 " +
        "-233.6 -24.5 -235.5 -20.6 -237.1 -16.6 -238.4 -12.5 -239.3 -8.4 -239.8 -4.2 -240 0") +
    polTagKrPu("tr_C", "-180 0 -179.9 6.3 -179.4 12.5 -178.7 18.7 -177.7 24.9 -176.4 30.9 -174.9 36.8 " +
        "-173.1 42.6 -171 48.2 -168.7 53.6 -166.2 58.8 -163.5 63.7 -160.6 68.5 -157.5 72.9 -154.2 77.1 -150.8 " +
        "80.9 -147.3 84.4 -143.7 87.6 -140 90.5 -136.2 93 -132.4 95.1 -128.5 96.9 -124.6 98.2 -120.8 99.2 -116.9 " +
        "99.8 -113.1 100 -109.4 99.8 -105.7 99.2 -102.1 98.2 -98.7 96.9 -95.3 95.1 -92 93 -88.9 90.5 -85.9 87.6 " +
        "-83 84.4 -80.3 80.9 -77.7 77.1 -75.3 72.9 -73.1 68.5 -71 63.7 -69.1 58.8 -67.4 53.6 -65.9 48.2 -64.5 " +
        "42.6 -63.3 36.8 -62.3 30.9 -61.5 24.9 -60.8 18.7 -60.4 12.5 -60.1 6.3 -60 0 -60.1 -6.3 -60.4 -12.5 " +
        "-60.8 -18.7 -61.5 -24.9 -62.3 -30.9 -63.3 -36.8 -64.5 -42.6 -65.9 -48.2 -67.4 -53.6 -69.1 -58.8 -71 " +
        "-63.7 -73.1 -68.5 -75.3 -72.9 -77.7 -77.1 -80.3 -80.9 -83 -84.4 -85.9 -87.6 -88.9 -90.5 -92 -93 -95.3 " +
        "-95.1 -98.7 -96.9 -102.1 -98.2 -105.7 -99.2 -109.4 -99.8 -113.1 -100 -116.9 -99.8 -120.8 -99.2 -124.6 " +
        "-98.2 -128.5 -96.9 -132.4 -95.1 -136.2 -93 -140 -90.5 -143.7 -87.6 -147.3 -84.4 -150.8 -80.9 -154.2 " +
        "-77.1 -157.5 -72.9 -160.6 -68.5 -163.5 -63.7 -166.2 -58.8 -168.7 -53.6 -171 -48.2 -173.1 -42.6 -174.9 " +
        "-36.8 -176.4 -30.9 -177.7 -24.9 -178.7 -18.7 -179.4 -12.5 -179.9 -6.3 -180 0") +
    "</g>" +
    "</svg>";

//Начальный механизм.
export const nach =
    "<svg viewBox=\"0 0 93 92\" width=\"93\" height=\"92\" class=\"risunok\">" +
    "<g transform=\"translate(29,41)\">" +
    polTagOpVr(null, null, null, null, null) +
    polTagZvIssl(null, null, 45, 60, 11, null) +
    polTagObZv(53, 5, 1, 0, -10, -20, -30) +
    "</g>" +
    "</svg>";

//Группа 1.
export const gr1 =
    "<svg viewBox=\"0 0 320 112\" width=\"320\" height=\"112\" class=\"risunok\">" +
    "<g transform=\"translate(70,72)\">" +
    polTagOpSk(87.355, null, null, 100, false, false, null) +
    polTagZvIssl(42.4264, 42.4264, 346.3670, 180, 11, null) +
    polTagZvIssl(42.4264, 42.4264, 166.3670, 120, 11, null) +
    polTagPolzIssl(217.355, null, null, null) +
    polTagShIssl(42.4264, 42.4264, null) +
    polTagShIssl(217.355, 0, null) +
    polTagCMIssl(71.5811, 35.3554, null) +
    polTagObZv(120, 40, 2, 0, -10, -15, 10) +
    polTagObZv(160, -40, 3, 20, -10, 40, -35) +
    "</g>" +
    "</svg>";

//Группа 2.
export const gr2 =
    "<svg viewBox=\"0 0 205 118\" width=\"205\" height=\"118\" class=\"risunok\">" +
    "<g transform=\"translate(272,78)\">" +
    polTagOpSk(-109.7221, null, 180, 100, false, true, null) +
    polTagZvIssl(-74.1926, 70.7107, 203.1311, 180, 11, null) +
    polTagPolzIssl(-239.7221, null, null, null) +
    polTagShIssl(-74.1926, 70.7107, null) +
    polTagShIssl(-239.7221, 0, null) +
    polTagCMIssl(-129.3691, 47.1404, null) +
    polTagObZv(-200, 45, 4, 20, -10, 40, 10) +
    polTagObZv(-205, -40, 5, 0, -10, -20, -35) +
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
