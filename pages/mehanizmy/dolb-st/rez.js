import {polTokK, polTokTakt} from "./local_storage.js";
import {polRez} from "../pol-tag-rez.js";
import {
    polAA1, polAA3, polAA3A1, polAA3Bn, polAA3Bt, polAA3k,
    polAC,
    polAD, polADC, polADCn, polADCt,
    polAS4,
    polAS4C,
    polE1,
    polE2, polE3,
    polE4,
    polFI1,
    polFI2,
    polFI3,
    polFI4,
    polFIn2,
    polFIn4,
    polFIn5,
    polIzmEn1,
    polJp,
    polJpJs1,
    polJpJs2, polJpJs3,
    polJpJs4, polJpJsDv,
    polJpM2,
    polJpM4,
    polJpM5,
    polMIn2, polMIn3,
    polMIn4,
    polMomUr,
    polMp,
    polMpG2,
    polMpG4,
    polMpG5,
    polMpP5,
    polP5,
    polR01,
    polR03,
    polR12, polR12N, polR12T,
    polR21, polR23,
    polR32, polR34,
    polR43,
    polR45X, polR45Y,
    polR54X, polR54Y, polRY1, polRY2,
    polSDY, polUgG2VA1,
    polUgG4VS4,
    polUgG5VD,
    polUgP5VD,
    polVA1, polVA3, polVA3A1,
    polVC,
    polVDC, polVDY,
    polVS4,
    polVS4C,
    polW1,
    polW2, polW3,
    polW4
} from "./analiz.js";


//Такт работы механизма.
const TAKT = polTokTakt();
//Количество положений механизма.
const KOL = polTokK();


//Добавить разметку страницы.
const content = document.getElementById("content");
let contentTag = polRez(TAKT, KOL,
    [[1, polFI1], [2, polFI2], [3, polFI3], [4, polFI4]],
    [["D", polSDY]],
    [[1, polW1], [2, polW2], [3, polW3], [4, polW4]],
    [["A1 ", polVA1], ["A3 A1", polVA3A1], ["A3 ", polVA3], ["C ", polVC],
        ["4 C", polVS4C], ["4 ", polVS4], ["D C", polVDC], ["D ", polVDY]],
    [[1, polE1], [2, polE2], [3, polE3], [4, polE4]],
    [["A1 ", polAA1], ["A3 Bn", polAA3Bn], ["A3 Bt", polAA3Bt], ["A3 A1", polAA3A1],
        ["A3 k", polAA3k], ["A3 ", polAA3], ["C ", polAC], ["4 C", polAS4C], ["4 ", polAS4],
        ["D C n", polADCn], ["D C τ", polADCt], ["D C", polADC], ["D ", polAD]],
    [[2, polFIn2], [4, polFIn4], [5, polFIn5]],
    [[2, polMIn2], [3, polMIn3], [4, polMIn4]],
    [[5, polP5]],
    [["05 Y1", polRY1], ["05 Y2", polRY2], ["45 гор", polR45X], ["45 верт", polR45Y], ["54 гор", polR54X],
        ["54 верт", polR54Y], ["34", polR34], ["43", polR43], ["12 t", polR12T], ["12 n", polR12N],
        ["12 ", polR12], ["32", polR32], ["23", polR23], ["03", polR03], ["21", polR21], ["01", polR01]],
    [polMomUr],
    [[2, polJpM2], [4, polJpM4], [5, polJpM5]],
    [[1, polJpJs1], [2, polJpJs2], [3, polJpJs3], [4, polJpJs4], ["дв", polJpJsDv]],
    [polJp],
    [["G 2 A1", polUgG2VA1], ["G 4 4", polUgG4VS4], ["G 5 D", polUgG5VD], ["P 5 D", polUgP5VD]],
    [[2, polMpG2], [4, polMpG4], [5, polMpG5]],
    [[5, polMpP5]],
    [polMp],
    [polIzmEn1]
);
content.innerHTML = contentTag;
