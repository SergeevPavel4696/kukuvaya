import {
    polTagCMIssl, polTagObTochInd, polTagObToch, polTagObZv, polTagOpSk, polTagOpVr,
    polPlSkTag, polPlUskTag, polTagPolzIssl, polTagShIssl, polTagZvIssl, polTagText, polTagObInd, polPlSilTag
} from "../meh-svg-utils.js";
import {
    polTagKrPu, polTagOkrPu, polTagOtr, polTagOtrPu, polTagOtrShPu, polTagPr, polTagStrelka
} from "../../../scripts/utils-svg-geom.js";


//Рисунок задания.
export const zadanie =
    "<svg viewBox=\"0 0 448 499\" width=\"448\" height=\"499\" class=\"risunok\">" +
    "<g transform=\"translate(270,448)\">" +
    "<!--Опоры вращения-->" +
    polTagOpVr(null, null, null, null, null) +
    polTagOpVr(150, 300, null, null, null) +
    "<!--Опора скольжения-->" +
    polTagOpSk(-250, 133.0070, 90, 100, true, null, null) +
    "<!--Звенья-->" +
    polTagZvIssl(null, null, 135, 100, 11, null) +
    polTagZvIssl(-70.7107, 70.7107, 93.6814, 300, 11, null) +
    polTagZvIssl(150, 300, 163.7179, 250, 11, null) +
    polTagZvIssl(-89.9733, 370.0916, 163.7179, 150, 11, null) +
    polTagZvIssl(-233.9572, 412.1466, 263.8604, 150, 11, null) +
    polTagPolzIssl(-250, 263.0070, 90, null) +
    "<!--Шарниры-->" +
    polTagShIssl(-70.7107, 70.7107, null) +
    polTagShIssl(-89.9733, 370.0916, null) +
    polTagShIssl(-233.9572, 412.1466, null) +
    polTagShIssl(-250, 263.0070, null) +
    "<!--Центры тяжести-->" +
    polTagCMIssl(-80.3420, 220.4012, null) +
    polTagCMIssl(-41.9786, 356.0733, null) +
    polTagCMIssl(-241.9786, 337.5768, null) +
    "<!--Обозначения-->" +
    polTagObZv(-66, 10, 1, 17, -10, 30, -25) +
    polTagObZv(-70, 270, 2, 0, -8, -15, -5) +
    polTagObZv(50, 340, 3, -2, -10, -20, 5) +
    polTagObZv(-270, 375, 4, 17, -12, 35, -10) +
    polTagObZv(-220, 280, 5, -2, -10, -20, 0) +
    polTagObTochInd(60, 5, "O,S", 1) +
    polTagObToch(-88, 52, "A") +
    polTagObTochInd(-50, 210, "S", 2) +
    polTagObToch(-90, 382, "B") +
    polTagObToch(150, 315, "C") +
    polTagObTochInd(-30, 365, "S", 3) +
    polTagObToch(-232, 425, "D") +
    polTagObTochInd(-215, 325, "S", 4) +
    polTagObTochInd(-187, 245, "F,S", 5) +
    polTagOtrShPu(null, null, 90, 300, "#000", 1, "15 5 2 5", null) +
    polTagOtrShPu(null, 300, null, 150, "#000", 1, "15 5 2 5", null) +
    "</g>" +
    "</svg>";

//Подвижный механизм.
export const mehanismPodv =
    "<svg id=\"meh_ris\" class=\"risunok\">" +
    "<g id=\"meh_ris-1\">" +
    polTagOpVr(null, null, null, null, "shO_ris") +
    polTagOpVr(null, null, null, "st3_ris", "shC_ris") +
    polTagOpSk(null, null, null, 0, false, false, "st5_ris", "tr5_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv1_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv2_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv3b_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv3d_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv4_ris") +
    polTagPolzIssl(null, null, null, "zv5_ris") +
    polTagShIssl(0, 0, "shA_ris") +
    polTagShIssl(0, 0, "shB_ris") +
    polTagShIssl(0, 0, "shD_ris") +
    polTagShIssl(0, 0, "shF_ris") +
    polTagCMIssl(0, 0, "s2_ris") +
    polTagCMIssl(0, 0, "s3_ris") +
    polTagCMIssl(0, 0, "s4_ris") +
    "</g>" +
    "</svg>";

//Механизм с интерактивными элементами.
export const mehanismInter =
    "<svg id=\"meh_ris\" viewBox=\"0 0 455 529\" width=\"455\" height=\"529\" visibility=\"hidden\" " +
    "class=\"risunok-inter\">" +
    polTagPr(null, null, null, 0, 0, 529, 455, "#fff", "#000", 3, null) +
    "<g transform=\"translate(272,422)\">" +
    polTagOpVr(null, null, null, "st_1", "sh_O") +
    polTagOpVr(150, 300, null, "st_3", "sh_C") +
    polTagOpSk(-250, 133.0070, 90, 100, false, false, "st_5", null) +
    polTagZvIssl(null, null, 135, 100, 11, "zv_OA") +
    polTagZvIssl(-70.7107, 70.7107, 93.6814, 300, 11, "zv_AB") +
    polTagZvIssl(150, 300, 163.7179, 250, 11, "zv_BC") +
    polTagZvIssl(-89.9733, 370.0916, 163.7179, 150, 11, "zv_BD") +
    polTagZvIssl(-233.9572, 412.1466, 263.8604, 150, 11, "zv_DF") +
    polTagPolzIssl(-250, 263.0070, 90, "pol") +
    polTagShIssl(-70.7107, 70.7107, "sh_A") +
    polTagShIssl(-89.9733, 370.0916, "sh_B") +
    polTagShIssl(-233.9572, 412.1466, "sh_D") +
    polTagShIssl(-250, 263.0070, "sh_F") +
    polTagCMIssl(-80.3420, 220.4012, "S2") +
    polTagCMIssl(-41.9786, 356.0733, "S3") +
    polTagCMIssl(-241.9786, 337.5768, "S4") +
    polTagOkrPu(0, 0, 100, "none", "#000", 2, "15 5 2 5", "tr_A") +
    polTagOtrPu(null, 300, null, 150, "#000", 2, "15 5 2 5", "A") +
    polTagOtrPu(null, null, 90, 300, "#000", 2, "15 5 2 5", "B") +
    polTagOtrPu(-250, null, 90, 133.0070, "#000", 2, "15 5 2 5", "tr_F") +
    polTagKrPu("tr_S2",
        "-6.1 -166.3 -7.9 -172.8 -9.8 -179.2 -11.7 -185.6 -13.6 -191.9 -15.5 -198.1 -17.5 -204 -19.5 " +
        "-209.7 -21.5 -215.1 -23.5 -220.1 -25.6 -224.8 -27.7 -229 -29.9 -232.8 -32.2 -236.1 -34.5 -238.9 -37 " +
        "-241.1 -39.6 -242.9 -42.3 -244.1 -45.2 -244.8 -48.1 -245 -51.1 -244.7 -54.2 -243.9 -57.4 -242.6 -60.5 " +
        "-240.9 -63.8 -238.7 -67 -236.2 -70.1 -233.2 -73.3 -229.8 -76.3 -226.1 -79.3 -222 -82.1 -217.6 -84.8 " +
        "-213 -87.3 -208 -89.6 -202.9 -91.7 -197.5 -93.6 -191.9 -95.3 -186.1 -96.8 -180.2 -97.9 -174.1 -98.9 " +
        "-168 -99.5 -161.8 -99.9 -155.5 -100 -149.2 -99.8 -143 -99.4 -136.7 -98.7 -130.5 -97.7 -124.4 -96.4 " +
        "-118.4 -94.9 -112.5 -93.2 -106.7 -91.2 -101.1 -89 -95.7 -86.6 -90.5 -84 -85.5 -81.3 -80.7 -78.3 -76.2 " +
        "-75.2 -72 -72.1 -68 -68.7 -64.3 -65.3 -60.9 -61.9 -57.9 -58.3 -55.1 -54.8 -52.6 -51.2 -50.5 -47.6 " +
        "-48.7 -44 -47.2 -40.5 -46 -37 -45.2 -33.5 -44.7 -30.1 -44.5 -26.8 -44.6 -23.6 -45 -20.5 -45.8 -17.6 " +
        "-46.8 -14.7 -48.2 -12.1 -49.8 -9.5 -51.8 -7.2 -54 -5 -56.5 -3 -59.2 -1.1 -62.3 0.5 -65.6 1.9 -69.1 3.1 " +
        "-72.9 4.2 -76.9 5 -81.1 5.5 -85.6 5.9 -90.3 6.1 -95.1 6 -100.2 5.8 -105.5 5.3 -110.9 4.7 -116.6 3.8 " +
        "-122.4 2.8 -128.3 1.6 -134.4 0.3 -140.6 -1.1 -146.9 -2.7 -153.3 -4.4 -159.8 -6.1 -166.3 ") +
    polTagKrPu("tr_B", "-72.7,-186.3 A 250,250 0 0,1 -82.7,-391.4") +
    polTagKrPu("tr_S3", "-28.1,-209.1 A 200,200 0 0,1 -36.2,-373.1") +
    polTagKrPu("tr_D", "-206.3,-118.1 A 400,400 0 0,1 -222.3,-446.2") +
    polTagKrPu("tr_S4",
        "-249.6 -198.8 -249.9 -211.1 -250 -223.5 -249.9 -236.1 -249.6 -248.8 -249.2 -261.4 -248.5 " +
        "-273.8 -247.7 -285.9 -246.7 -297.6 -245.6 -308.8 -244.4 -319.3 -243.2 -329 -241.9 -337.8 -240.8 " +
        "-345.8 -239.7 -352.7 -238.7 -358.6 -237.8 -363.5 -237.1 -367.3 -236.6 -370.1 -236.3 -371.8 -236.2 " +
        "-372.4 -236.2 -372.1 -236.5 -370.9 -236.9 -368.8 -237.4 -365.8 -238.1 -362.1 -238.8 -357.6 -239.7 " +
        "-352.4 -240.6 -346.5 -241.6 -340.1 -242.6 -333.2 -243.6 -325.8 -244.6 -317.9 -245.5 -309.6 -246.4 " +
        "-300.9 -247.2 -292 -247.9 -282.7 -248.5 -273.3 -249.1 -263.6 -249.5 -253.8 -249.8 -243.8 -250 -233.8 " +
        "-250 -223.8 -249.9 -213.7 -249.7 -203.7 -249.4 -193.8 -248.9 -184 -248.4 -174.4 -247.7 -164.9 -247 " +
        "-155.7 -246.1 -146.8 -245.2 -138.1 -244.2 -129.8 -243.2 -121.8 -242.1 -114.2 -241 -106.9 -239.9 " +
        "-100.1 -238.8 -93.6 -237.6 -87.6 -236.6 -82 -235.5 -76.8 -234.5 -72.1 -233.5 -67.8 -232.6 -63.9 " +
        "-231.8 -60.4 -231 -57.3 -230.3 -54.7 -229.7 -52.4 -229.2 -50.5 -228.8 -48.9 -228.5 -47.8 -228.3 " +
        "-47 -228.2 -46.5 -228.1 -46.4 -228.2 -46.6 -228.4 -47.2 -228.6 -48.2 -229 -49.5 -229.4 -51.1 -229.9 " +
        "-53.1 -230.5 -55.5 -231.2 -58.2 -232 -61.3 -232.8 -64.9 -233.7 -68.8 -234.7 -73.2 -235.7 -78 -236.8 " +
        "-83.3 -237.9 -89 -239.1 -95.3 -240.2 -102.1 -241.4 -109.3 -242.5 -117.2 -243.7 -125.5 -244.8 -134.5 " +
        "-245.8 -143.9 -246.8 -154 -247.7 -164.5 -248.5 -175.5 -249.1 -187 -249.6 -198.8 ") +
    "</g>" +
    "</svg>";

//Начальный механизм.
export const nach =
    "<svg viewBox=\"0 0 98 120\" width=\"98\" height=\"120\" class=\"risunok\">" +
    "<g transform=\"translate(69,69)\">" +
    polTagOpVr(null, null, null, null, null) +
    polTagZvIssl(null, null, 135, 100, 11, null) +
    polTagObZv(-66, 10, 1, 17, -10, 30, -25) +
    "</g>" +
    "</svg>";

//Группа 1.
export const gr1 =
    "<svg viewBox=\"0 0 408 351\" width=\"408\" height=\"351\" class=\"risunok\">" +
    "<g transform=\"translate(230,414)\">" +
    polTagOpVr(150, 300, null, null, null) +
    polTagZvIssl(-70.7107, 70.7107, 93.6814, 300, 11, null) +
    polTagZvIssl(150, 300, 163.7179, 250, 11, null) +
    polTagZvIssl(-89.9733, 370.0916, 163.7179, 150, 11, null) +
    polTagShIssl(-70.7107, 70.7107, null) +
    polTagShIssl(-89.9733, 370.0916, null) +
    polTagCMIssl(-80.3420, 220.4012, null) +
    polTagCMIssl(-41.9786, 356.0733, null) +
    polTagObZv(-70, 270, 2, 0, -8, -15, -5) +
    polTagObZv(50, 340, 3, -2, -10, -20, 5) +
    "</g>" +
    "</svg>";

//Группа 2.
export const gr2 =
    "<svg viewBox=\"0 0 66 288\" width=\"66\" height=\"288\" class=\"risunok\">" +
    "<g transform=\"translate(270,420)\">" +
    polTagOpSk(-250, 133.0070, 90, 100, true, null, null) +
    polTagZvIssl(-233.9572, 412.1466, 263.8604, 150, 11, null) +
    polTagPolzIssl(-250, 263.0070, 90, null) +
    polTagShIssl(-233.9572, 412.1466, null) +
    polTagShIssl(-250, 263.0070, null) +
    polTagCMIssl(-241.9786, 337.5768, null) +
    polTagObZv(-270, 375, 4, 17, -12, 35, -10) +
    polTagObZv(-220, 280, 5, -2, -10, -20, 0) +
    "</g>" +
    "</svg>";

//Диаграмма изменения силы полезного сопротивления.
export const diSil =
    "<svg viewBox=\"0 0 386 370\" width=\"386\" height=\"370\" class=\"risunok\">" +
    "<g transform=\"translate(340,30)\">" +
    polTagStrelka(null, 360, 20, null, 180) +
    polTagStrelka(null, 360, null, 20, 270) +
    polTagOtr(0, -180, 0, 0, 0, -300, 30, "#000", 4) +
    polTagOtr(-300, -210, 0, 0, 0, 30, 60, "#000", 4) +
    polTagOtr(-270, -270, 0, 0, 0, 270, 30, "#000", 4) +
    polTagOtr(-300, 0, 0, 0, 0, 0, 210, "#000", 2) +
    polTagOtr(-270, 0, 0, 0, 0, 0, 270, "#000", 2) +
    polTagOtr(0, -210, 0, 0, 0, -300, 0, "#000", 2) +
    polTagOtr(0, -270, 0, 0, 0, -270, 0, "#000", 2) +
    polTagText("1", 30, 1, -300, 7) +
    polTagText("0,9", 30, 0, -290, 7) +
    polTagText("0,6", 30, 0, 5, -190) +
    polTagText("0,7", 30, 0, 5, -220) +
    polTagText("0,9", 30, 0, 5, -280) +
    polTagText("1,0", 30, 0, 5, -310) +
    polTagObInd(-150, 7, null, "P", 5) +
    polTagObInd(-112, 7, null, "/P", "5 max") +
    polTagObInd(-7, -103, 90, "S", 5) +
    polTagObInd(-7, -65, 90, "/S", "5 max") +
    "</g>" +
    "</svg>";

//План скоростей.
export const planSk = polPlSkTag(["sk_VA", "sk_VBA", "sk_VB", "sk_VS2A",
    "sk_VS2", "sk_VS3", "sk_VD", "sk_VFD", "sk_VF", "sk_VS4D", "sk_VS4"]);

//План ускорений.
export const planUsk = polPlUskTag(["usk_AA", "usk_ABAN", "usk_ABCN", "usk_ABAT", "usk_ABCT", "usk_ABA", "usk_AB",
    "usk_AS2A", "usk_AS2", "usk_AS3", "usk_AD", "usk_AFDN", "usk_AFDT", "usk_AFD", "usk_AF", "usk_AS4D", "usk_AS4"]);

//План сил второй группы Ассура.
export const planSil2 = polPlSilTag(2, ["sil_R05", "sil_P5", "sil_FI5", "sil_G5",
    "sil_FI4", "sil_G4", "sil_R34", "sil_R54", "sil_R45"]);

//План сил первой группы Ассура.
export const planSil1 = polPlSilTag(1, ["sil_R43", "sil_R03T", "sil_R03N", "sil_R03",
    "sil_FI3", "sil_G3", "sil_R12T", "sil_R12N", "sil_R12", "sil_FI2", "sil_G2", "sil_R32", "sil_R23"]);

//План сил начального механизма.
export const planSilNach = polPlSilTag("nach", ["sil_R21", "sil_G1", "sil_R01"]);
