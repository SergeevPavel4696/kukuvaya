import {
    polTagCMIssl, polTagNaprVr, polTagObTochInd, polTagObToch, polTagObZv,
    polTagOpSk, polTagOpVr, polTagPolzIssl, polTagShIssl, polTagZvIssl, polPlSkTag, polPlUskTag, polPlSilTag
} from "../meh-svg-utils.js";
import {
    polTagOkrPu, polTagOkr, polTagOtrPu, polTagOtrShPu, polTagOtr, polTagPr, polTagKrPu
} from "../../../scripts/utils-svg-geom.js";


//Рисунок задания.
export const zadanie =
    "<svg viewBox=\"0 0 552 518\" width=\"552\" height=\"518\" class=\"risunok\">" +
    "<g transform=\"translate(194,377)\">" +
    "<!--Опоры вращения-->" +
    polTagOpVr(null, null, null, null, null) +
    polTagOpVr(-120, 200, null, null, null) +
    polTagOpVr(90, -90, null, null, null) +
    "<!--Звенья-->" +
    polTagZvIssl(null, null, 30, 60, 11, null) +
    polTagZvIssl(51.9615, 30, 111.1703, 235, 11, null) +
    polTagZvIssl(-120, 200, 29.4327, 100, 11, null) +
    polTagZvIssl(-32.9067, 249.1401, 148.6755, 180, 11, null) +
    polTagZvIssl(-32.9067, 249.1401, -31.3245, 200, 11, null) +
    polTagZvIssl(137.9406, 145.1631, -31.3245, 220, 14, null) +
    polTagZvIssl(90, -90, 78.4775, 240, 11, null) +
    "<!--Шарниры-->" +
    polTagShIssl(51.9615, 30, null) +
    polTagShIssl(-32.9067, 249.1401, null) +
    polTagShIssl(-186.6692, 342.7194, null) +
    polTagShIssl(137.9406, 145.1631, null) +
    "<!--Противовес-->" +
    polTagOkr(325.8726, 30.7885, 30, "none", "#000", 4, null) +
    "<!--Центры тяжести-->" +
    polTagCMIssl(9.5274, 139.5701, null) +
    polTagCMIssl(-76.4533, 224.5701, null) +
    polTagCMIssl(112.3135, 160.7597, null) +
    polTagCMIssl(113.9703, 27.5816, null) +
    "<!--Направление вращения кривошипа-->" +
    polTagNaprVr(null, null, 30, 50, 60, null) +
    "<!--Обозначения-->" +
    polTagObZv(-2, 20, 1, 17, -10, 25, 5) +
    polTagObZv(45, 100, 2, -5, -10, -20, 0) +
    polTagObZv(-130, 222, 3, 20, -10, 35, 10) +
    polTagObZv(230, 105, 4, -2, -10, -15, 5) +
    polTagObZv(133, -35, 5, -10, -15, -28, -25) +
    polTagObTochInd(-20, -5, "O,S", 1) +
    polTagObToch(70, 18, "A") +
    polTagObTochInd(35, 132, "S", 2) +
    polTagObToch(-30, 260, "B") +
    polTagObToch(-142, 190, "C") +
    polTagObTochInd(-75, 235, "S", 3) +
    polTagObToch(-185, 355, "D") +
    polTagObTochInd(125, 175, "S", 4) +
    polTagObToch(150, 157, "E") +
    polTagObTochInd(142, 17, "S", 5) +
    polTagObToch(110, -95, "K") +
    polTagObToch(330, 70, "F") +
    polTagObTochInd(20, 60, "φ", 1) +
    polTagObToch(-55, 175, "x") +
    polTagObToch(-12, 85, "y") +
    polTagObTochInd(50, -112, "x", 1) +
    polTagObTochInd(-12, -70, "y", 1) +
    polTagOtrShPu(null, null, 90, 200, "#000", 1, "15 5 2 5", null) +
    polTagOtrShPu(null, 200, 180, 120, "#000", 1, "15 5 2 5", null) +
    polTagOtrShPu(null, null, -90, 90, "#000", 1, "15 5 2 5", null) +
    polTagOtrShPu(null, -90, null, 90, "#000", 1, "15 5 2 5", null) +
    "</g>" +
    "</svg>";

//Подвижный механизм.
export const mehanismPodv =
    "<svg id=\"meh_ris\" class=\"meh__ris\">" +
    "<g id=\"meh_ris-1\">" +
    polTagOpVr(null, null, null, null, "shO_ris") +
    polTagOpVr(null, null, null, "st3_ris", "shC_ris") +
    polTagOpVr(null, null, null, "st5_ris", "shK_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv1_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv2_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv3_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv4D_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv4E_ris") +
    polTagZvIssl(null, null, null, 0, 14, "zv4F_ris") +
    polTagZvIssl(null, null, null, 0, 11, "zv5_ris") +
    polTagShIssl(0, 0, "shA_ris") +
    polTagShIssl(0, 0, "shB_ris") +
    polTagShIssl(0, 0, "shD_ris") +
    polTagShIssl(0, 0, "shE_ris") +
    polTagOkr(0, 0, 30, "none", "#000", 4, "shF_ris") +
    polTagCMIssl(0, 0, "s2_ris") +
    polTagCMIssl(0, 0, "s3_ris") +
    polTagCMIssl(0, 0, "s4_ris") +
    polTagCMIssl(0, 0, "s5_ris") +
    polTagOtrShPu(null, null, null, 0, "#000", 2, "15 5 2 5", "x_ris") +
    polTagOtrShPu(null, null, null, 0, "#000", 2, "15 5 2 5", "y_ris") +
    polTagOtrShPu(null, null, null, 0, "#000", 2, "15 5 2 5", "x1_ris") +
    polTagOtrShPu(null, null, null, 0, "#000", 2, "15 5 2 5", "y1_ris") +
    "</g>" +
    "</svg>";

//Механизм с интерактивными элементами.
export const mehanismInter =
    "<svg id=\"meh_ris\" viewBox=\"0 0 603 563\" width=\"603\" height=\"563\" visibility=\"hidden\" " +
    "class=\"risunok-inter\">" +
    polTagPr(null, null, null, 0, 0, 563, 603, "#fff", "#000", 3, null) +
    "<g transform=\"translate(208,416)\">" +
    polTagOpVr(null, null, null, "st_1", "sh_O") +
    polTagOpVr(-120, 200, null, "st_3", "sh_C") +
    polTagOpVr(90, -90, null, "st_5", "sh_K") +
    polTagOkrPu(0, 0, 60, "none", "#000", 2, "15 5 2 5", "tr_A") +
    polTagKrPu("tr_S2", "-33.7 -172.6 -31.2 -172.1 -28.5 -171.4 -25.8 -170.5 -22.9 -169.4 -20.1 -168 " +
        "-17.2 -166.5 -14.3 -164.8 -11.5 -162.9 -8.7 -160.8 -6 -158.6 -3.3 -156.1 -0.8 -153.5 1.7 -150.8 4 -147.9 " +
        "6.2 -144.9 8.2 -141.7 10.1 -138.5 11.9 -135.1 13.4 -131.7 14.8 -128.2 16 -124.6 17 -121 17.9 -117.4 18.5 " +
        "-113.7 19 -110.1 19.2 -106.5 19.3 -102.9 19.2 -99.3 18.9 -95.9 18.5 -92.5 17.9 -89.1 17.1 -85.9 16.2 " +
        "-82.8 15.2 -79.9 14 -77 12.7 -74.4 11.3 -71.9 9.8 -69.5 8.2 -67.4 6.6 -65.4 4.8 -63.6 3.1 -62 1.3 -60.7 " +
        "-0.6 -59.5 -2.4 -58.6 -4.3 -57.8 -6.2 -57.3 -8 -56.9 -9.9 -56.8 -11.7 -56.9 -13.6 -57.2 -15.4 -57.7 -17.1 " +
        "-58.4 -18.8 -59.3 -20.5 -60.4 -22.1 -61.7 -23.7 -63.2 -25.2 -64.9 -26.7 -66.7 -28.1 -68.7 -29.5 -70.9 " +
        "-30.8 -73.3 -32 -75.8 -33.2 -78.5 -34.3 -81.4 -35.3 -84.3 -36.3 -87.5 -37.3 -90.7 -38.2 -94.1 -39 -97.6 " +
        "-39.8 -101.1 -40.6 -104.8 -41.3 -108.6 -42 -112.4 -42.7 -116.2 -43.4 -120.1 -44 -124 -44.7 -127.9 -45.3 " +
        "-131.7 -46 -135.5 -46.6 -139.2 -47.2 -142.8 -47.7 -146.3 -48.3 -149.6 -48.7 -152.8 -49 -155.7 -49.3 -158.4 " +
        "-49.3 -160.9 -49.3 -163.2 -49 -165.2 -48.5 -167 -47.7 -168.6 -46.8 -169.9 -45.6 -170.9 -44.1 -171.7 -42.4 " +
        "-172.3 -40.5 -172.7 -38.4 -172.9 -36.2 -172.8 -33.7 -172.6") +
    polTagKrPu("tr_B", "-70,-286.6 A 100,100 0 0,1 -23.6,-173.4") +
    polTagKrPu("tr_S3", "-95,-243.3 A 50,50 0 0,1 -71.8,-186.7") +
    polTagKrPu("tr_D", "-200.3 -207.7 -200.3 -207.8 -200.2 -208 -200.2 -208.2 -200.1 -208.7 -200 " +
        "-209 -199.8 -209.6 -199.7 -210.1 -199.5 -211 -199.4 -211.7 -199.2 -212.6 -198.9 -213.6 -198.7 -214.5 " +
        "-198.4 -215.8 -198.2 -216.8 -197.8 -218.5 -197.7 -219.3 -197.2 -221.5 -197.1 -222.1 -196.5 -224.9 " +
        "-196.4 -225.3 -195.7 -228.6 -195.7 -228.7 -195 -232.3 -194.9 -232.6 -194.2 -236.3 -194.1 -236.9 -193.4 " +
        "-240.5 -193.2 -241.5 -192.6 -244.9 -192.4 -246.4 -191.9 -249.6 -191.5 -251.5 -191.1 -254.6 -190.7 " +
        "-256.8 -190.3 -259.8 -189.9 -262.4 -189.5 -265.2 -189.2 -268 -188.8 -270.8 -188.5 -273.9 -188.1 -276.7 " +
        "-187.8 -279.8 -187.5 -282.7 -187.2 -285.8 -187 -289 -186.8 -291.9 -186.5 -295.4 -186.4 -298 -186.2 -302 " +
        "-186.1 -304.1 -185.9 -308.7 -185.9 -310.2 -185.8 -315.5 -185.8 -316.3 -185.8 -322.3 -185.8 -322.3 -185.9 " +
        "-328.2 -185.9 -329.2 -186.1 -334 -186.2 -336.1 -186.5 -339.8 -186.7 -343 -186.9 -345.4 -187.3 -349.7 " +
        "-187.4 -350.8 -188 -356.1 -188.1 -356.3 -188.7 -361.3 -189 -362.7 -189.5 -366.2 -190 -368.9 -190.4 -370.9 " +
        "-191.1 -374.8 -191.3 -375.5 -192.2 -379.8 -192.3 -380.3 -193.2 -383.9 -193.5 -385.4 -194.1 -387.7 -194.8 " +
        "-390.1 -195.1 -391.3 -196 -394.3 -196 -394.6 -197 -397.6 -197.1 -398 -197.8 -400.3 -198.1 -401.3 -198.6 " +
        "-402.7 -199 -404 -199.3 -404.8 -199.8 -406.1 -199.9 -406.6 -200.4 -407.8 -200.4 -408 -200.8 -409 -200.8 " +
        "-409 -201 -409.7 -201 -409.7 -201.1 -409.9 -201.1 -409.9") +
    polTagKrPu("tr_S4", "53.9 -170.1 53.9 -170.1 54.2 -170.1 54.2 -170.1 55.0 -170.1 55.1 -170.1 56.3 " +
        "-170.1 56.5 -170.1 58.1 -170.1 58.6 -170.1 60.2 -170.0 61.3 -170.0 62.7 -169.9 64.4 -169.8 65.5 -169.8 " +
        "68.0 -169.6 68.6 -169.5 71.8 -169.3 72.1 -169.2 75.2 -168.9 76.4 -168.8 78.7 -168.5 80.9 -168.2 82.3 " +
        "-168.0 85.5 -167.5 86.0 -167.4 89.7 -166.7 90.2 -166.6 93.3 -166.0 94.9 -165.6 97.0 -165.2 99.5 -164.5 " +
        "100.6 -164.3 103.9 -163.4 104.1 -163.3 107.5 -162.3 108.2 -162.1 110.8 -161.3 112.2 -160.8 114.0 -160.2 " +
        "115.9 -159.5 117.0 -159.1 119.4 -158.1 119.9 -157.9 122.6 -156.8 122.6 -156.8 125.2 -155.7 125.5 -155.5 " +
        "127.6 -154.5 128.2 -154.2 129.8 -153.4 130.6 -153.0 131.9 -152.3 132.7 -151.9 133.7 -151.2 134.6 -150.8 " +
        "135.4 -150.2 136.2 -149.7 136.9 -149.2 137.6 -148.8 138.3 -148.3 138.9 -147.9 139.4 -147.5 139.9 -147.0 " +
        "140.4 -146.6 140.8 -146.3 141.2 -145.9 141.5 -145.6 141.9 -145.2 142.1 -145.0 142.5 -144.6 142.6 -144.4 " +
        "142.9 -144.0 143.0 -143.9 143.2 -143.5 143.3 -141.1 143.3 -141.0 143.3 -141.0 143.3 -141.0 143.3 -141.0 " +
        "143.3 -141.1 143.3 -143.4 143.4 -143.1 143.4 -141.2 143.4 -141.1 143.4 -141.2 143.4 -143.0 143.5 -141.4 " +
        "143.5 -141.3 143.5 -141.3 143.6 -142.7 143.6 -142.3 143.6 -141.8 143.6 -141.6 143.6 -141.5 143.6 -141.7 " +
        "143.6 -142.4 143.6 -142.7 143.7 -142.0 143.7 -141.9 143.7 -142.1") +
    polTagKrPu("tr_E", "75.7,-149.6 A 240,240 0 0,1 172.9,-135.2") +
    polTagKrPu("tr_F", "236.0 1.1 236.0 1.1 236.4 1.0 236.4 1.0 237.7 0.5 237.8 0.5 239.7 -0.2 240.0 " +
        "-0.3 242.3 -1.1 243.2 -1.4 245.6 -2.3 247.2 -2.8 249.4 -3.6 252.0 -4.5 253.6 -5.1 257.4 -6.4 258.2 -6.7 " +
        "263.1 -8.3 263.5 -8.5 268.3 -10.1 270.0 -10.7 273.6 -11.9 276.9 -13.0 279.1 -13.8 284.0 -15.4 284.7 " +
        "-15.7 290.3 -17.6 291.2 -17.9 296.0 -19.6 298.4 -20.4 301.6 -21.5 305.5 -23.0 307.2 -23.6 312.5 -25.5 " +
        "312.7 -25.6 318.1 -27.7 319.2 -28.1 323.4 -29.8 325.6 -30.7 328.5 -31.9 331.8 -33.3 333.5 -34.1 337.5 " +
        "-35.9 338.3 -36.3 342.9 -38.6 342.9 -38.6 347.3 -40.9 347.9 -41.3 351.5 -43.3 352.5 -43.9 355.5 -45.8 " +
        "356.8 -46.6 359.2 -48.3 360.7 -49.3 362.7 -50.8 364.2 -52.0 365.9 -53.4 367.5 -54.7 368.9 -56.0 370.4 " +
        "-57.4 371.6 -58.7 372.9 -60.0 374.1 -61.3 375.3 -62.7 376.3 -64.0 377.3 -65.2 378.3 -66.6 379.1 -67.8 " +
        "380.1 -69.3 380.7 -70.2 381.7 -71.9 382.1 -72.6 383.0 -74.4 383.3 -74.9 384.1 -76.8 384.3 -77.2 385.1 " +
        "-79.1 385.2 -79.3 385.9 -81.3 385.9 -81.3 386.5 -83.2 386.6 -83.4 387.0 -84.9 387.1 -85.3 387.5 -86.5 " +
        "387.6 -87.0 387.8 -88.0 387.9 -88.5 388.1 -89.3 388.2 -89.9 388.3 -90.5 388.4 -91.0 388.4 -91.4 388.5 " +
        "-91.9 388.5 -92.2 388.6 -92.6 388.6 -92.8 388.7 -93.1 388.7 -93.3 388.7 -93.4 388.7 -93.2") +
    polTagKrPu("tr_S5", "82.9,-29.8 A 240,240 0 0,1 131.5,-22.6") +
    polTagOtrShPu(null, 200, 180, 120, "#000", 1, "15 5 2 5", "X") +
    polTagOtrShPu(null, null, 90, 200, "#000", 1, "15 5 2 5", "Y") +
    polTagOtrShPu(null, -90, null, 90, "#000", 1, "15 5 2 5", "X1") +
    polTagOtrShPu(null, null, -90, 90, "#000", 1, "15 5 2 5", "Y1") +
    polTagZvIssl(null, null, 30, 60, 11, "zv_OA") +
    polTagZvIssl(51.9615, 30, 111.1703, 235, 11, "zv_AB") +
    polTagZvIssl(-120, 200, 29.4327, 100, 11, "zv_BC") +
    polTagZvIssl(-32.9067, 249.1401, 148.6755, 180, 11, "zv_BD") +
    polTagZvIssl(-32.9067, 249.1401, -31.3245, 200, 11, "zv_BE") +
    polTagZvIssl(137.9406, 145.1631, -31.3245, 220, 14, "zv_EF") +
    polTagZvIssl(90, -90, 78.4775, 240, 11, "zv_EK") +
    polTagShIssl(51.9615, 30, "sh_A") +
    polTagShIssl(-32.9067, 249.1401, "sh_B") +
    polTagShIssl(-186.6692, 342.7194, "sh_D") +
    polTagShIssl(137.9406, 145.1631, "sh_E") +
    polTagOkr(325.8726, 30.7885, 30, "none", "#000", 4, "sh_F") +
    polTagCMIssl(9.5274, 139.5701, "S2") +
    polTagCMIssl(-76.4533, 224.5701, "S3") +
    polTagCMIssl(112.3135, 160.7597, "S4") +
    polTagCMIssl(113.9703, 27.5816, "S5") +
    "</g>" +
    "</svg>";

//Кинематическая схема механизма.
export const mehanismKinSh =
    "<svg viewBox=\"0 0 475 193\" width=\"475\" height=\"193\" class=\"risunok\">" +
    "<g transform=\"translate(43,142)\">" +
    polTagOpVr(null, null, null, null, null) +
    polTagOpVr(100, 25, null, null, null) +
    polTagOpSk(225, 25, null, 142, false, false, null) +
    polTagZvIssl(null, null, 135, 50.0632, 11, null) +
    polTagZvIssl(-35.40, 35.40, 52.7082, 124.9434, 11, null) +
    polTagZvIssl(100, 25, 118.5336, 124.9805, 11, null) +
    polTagZvIssl(40.3, 134.8, 342.9759, 375.0333, 11, null) +
    polTagPolzIssl(398.9, 25, null, null) +
    polTagShIssl(-35.4, 35.4, null) +
    polTagShIssl(40.3, 134.8, null) +
    polTagShIssl(398.9, 25, null) +
    polTagCMIssl(2.5, 85, null) +
    polTagCMIssl(70.2, 79.9, null) +
    polTagCMIssl(219.6, 79.9, null) +
    "</g>" +
    "</svg>";

//Начальный механизм.
export const nach =
    "<svg viewBox=\"0 0 78 93\" width=\"78\" height=\"93\" class=\"risunok\">" +
    "<g transform=\"translate(29,42)\">" +
    polTagOpVr(null, null, null, null, null) +
    polTagZvIssl(null, null, 30, 60, 11, null) +
    polTagObZv(-2, 20, 1, 17, -10, 25, 5) +
    "</g>" +
    "</svg>";

//Группа 1.
export const gr1 =
    "<svg viewBox=\"0 0 211 235\" width=\"211\" height=\"235\" class=\"risunok\">" +
    "<g transform=\"translate(150,257)\">" +
    polTagOpVr(-120, 200, null, null, null) +
    polTagZvIssl(51.9615, 30, 111.1703, 235, 11, null) +
    polTagZvIssl(-120, 200, 29.4327, 100, 11, null) +
    polTagShIssl(51.9615, 30, null) +
    polTagShIssl(-32.9067, 249.1401, null) +
    polTagObZv(45, 100, 2, -5, -10, -20, 0) +
    polTagObZv(-130, 222, 3, 20, -10, 35, 10) +
    "</g>" +
    "</svg>";

//Группа 2.
export const gr2 =
    "<svg viewBox=\"0 0 552 491\" width=\"552\" height=\"491\" class=\"risunok\">" +
    "<g transform=\"translate(194,350)\">" +
    polTagOpVr(90, -90, null, null, null) +
    polTagZvIssl(-32.9067, 249.1401, 148.6755, 180, 11, null) +
    polTagZvIssl(-32.9067, 249.1401, -31.3245, 200, 11, null) +
    polTagZvIssl(137.9406, 145.1631, -31.3245, 220, 14, null) +
    polTagZvIssl(90, -90, 78.4775, 240, 11, null) +
    polTagShIssl(-32.9067, 249.1401, null) +
    polTagShIssl(-186.6692, 342.7194, null) +
    polTagShIssl(137.9406, 145.1631, null) +
    polTagOkr(325.8726, 30.7885, 30, "none", "#000", 4, null) +
    polTagObZv(230, 105, 4, -2, -10, -15, 5) +
    polTagObZv(133, -35, 5, -10, -15, -28, -25) +
    "</g>" +
    "</svg>";

//План скоростей.
export const planSk = polPlSkTag(["sk_VA", "sk_VBA", "sk_VB", "sk_VS2A", "sk_VS2", "sk_VS3",
    "sk_VDB", "sk_VD", "sk_VS4B", "sk_VS4", "sk_VEB", "sk_VE", "sk_VFB", "sk_VF", "sk_VS5"]);

//План ускорений.
export const planUsk = polPlUskTag(["usk_AA", "usk_ABAN", "usk_ABCN", "usk_ABAT", "usk_ABCT",
    "usk_ABA", "usk_AB", "usk_AS2A", "usk_AS2", "usk_AS3", "usk_AEBN", "usk_AEKN", "usk_AEBT", "usk_AEKT",
    "usk_AEB", "usk_AE", "usk_ADB", "usk_AD", "usk_AS4B", "usk_AS4", "usk_AFB", "usk_AF", "usk_AS5"]);

//План сил второй группы Ассура.
export const planSil2 = polPlSilTag(2, ["sil_R05T", "sil_R05N", "sil_R05",
    "sil_FI5", "sil_G5", "sil_FI4", "sil_G4", "sil_FISHT", "sil_GSHT", "sil_FIPR",
    "sil_GPR",  "sil_FIZH", "sil_GZH", "sil_R34T", "sil_R34N", "sil_R34", "sil_R54", "sil_R45"]);

//План сил первой группы Ассура.
export const planSil1 = polPlSilTag(1, ["sil_R43", "sil_R03T",  "sil_R03N",  "sil_R03", "sil_FI3",
    "sil_G3", "sil_R12T",  "sil_R12N",  "sil_R12", "sil_FI2", "sil_G2", "sil_R32", "sil_R23"]);

//План сил начального механизма.
export const planSilNach = polPlSilTag("nach", ["sil_R21", "sil_G1", "sil_R01"]);

