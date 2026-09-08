import {polTokK, polTokTakt} from "./local_storage.js";
import {polRez} from "../pol-tag-rez.js";
import {
    polAA,
    polAB, polABA, polABAn, polABAt, polABCn, polABCt,
    polADB, polADBn, polADBt, polADX, polAS2, polAS2A, polAS3,
    polAS4, polAS4B,
    polE1,
    polE2, polE3,
    polE4,
    polFI1,
    polFI2,
    polFI3,
    polFI4,
    polFIn2, polFIn3,
    polFIn4,
    polFIn5,
    polIzmEn1,
    polJp,
    polJpJs1,
    polJpJs2, polJpJs3,
    polJpJs4, polJpJsDv,
    polJpM2, polJpM3,
    polJpM4,
    polJpM5, polJpMMat,
    polMIn2, polMIn3,
    polMIn4,
    polMomUr,
    polMp,
    polMpG2, polMpG3,
    polMpG4,
    polMpG5, polMpGMat,
    polMpP5,
    polP5,
    polR01,
    polR03, polR03N, polR03T, polR05,
    polR12, polR12N, polR12T,
    polR21, polR23, polR32,
    polR34,
    polR43, polR45,
    polR54, polSDX,
    polUgG2VS2, polUgG3VS3,
    polUgG4VS4, polUgG5VD,
    polUgP5VD,
    polVA,
    polVB, polVBA,
    polVD, polVDB,
    polVS2, polVS2A, polVS3, polVS4, polVS4B,
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
    [["D", polSDX]],
    [[1, polW1], [2, polW2], [3, polW3], [4, polW4]],
    [["A ", polVA], ["2 A", polVS2A], ["2 ", polVS2], ["B A", polVBA], ["B ", polVB], ["3 ", polVS3],
        ["4 B", polVS4B], ["4 ", polVS4], ["D B", polVDB], ["D ", polVD]],
    [[1, polE1], [2, polE2], [3, polE3], [4, polE4]],
    [["A ", polAA], ["2 A", polAS2A], ["2 ", polAS2], ["BA n", polABAn], ["BA t", polABAt], ["B A", polABA],
        ["BC n", polABCn], ["BC t", polABCt],["B ", polAB], ["3 ", polAS3], ["4 B", polAS4B], ["4 ", polAS4],
        ["D B n", polADBn], ["D B τ", polADBt], ["D B", polADB], ["D ", polADX]],
    [[2, polFIn2], [3, polFIn3], [4, polFIn4], [5, polFIn5]],
    [[2, polMIn2], [3, polMIn3], [4, polMIn4]],
    [[5, polP5]],
    [["05 ", polR05], ["45 ", polR45], ["54 ", polR54], ["34", polR34], ["43", polR43],
        ["12 t", polR12T], ["12 n", polR12N], ["12 ", polR12], ["03 t", polR03T], ["03 n", polR03N],
        ["03", polR03], ["23", polR23], ["32", polR32], ["21", polR21], ["01", polR01]],
    [polMomUr],
    [[2, polJpM2], [3, polJpM3], [4, polJpM4], [5, polJpM5], ["мат", polJpMMat]],
    [[1, polJpJs1], [2, polJpJs2], [3, polJpJs3], [4, polJpJs4], ["дв", polJpJsDv]],
    [polJp],
    [["G 2 2", polUgG2VS2], ["G 3 3", polUgG3VS3], ["G 4 4", polUgG4VS4], ["G 5 D", polUgG5VD], ["P 5 D", polUgP5VD]],
    [[2, polMpG2], [3, polMpG3], [4, polMpG4], [5, polMpG5], ["мат", polMpGMat]],
    [[5, polMpP5]],
    [polMp],
    [polIzmEn1]
);
content.innerHTML = contentTag;
