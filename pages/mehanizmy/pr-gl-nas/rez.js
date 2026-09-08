import {polTokK, polTokTakt} from "./local_storage.js";
import {polRez} from "../pol-tag-rez.js";
import {
    polAA,
    polAB, polABA, polABAn, polABAt, polABCn, polABCt,
    polADB, polADY, polAE, polAEB, polAEBn, polAEBt, polAF, polAFB, polAS2, polAS2A, polAS3,
    polAS4, polAS4B, polAS5,
    polE1,
    polE2, polE3,
    polE4, polE5,
    polFI1,
    polFI2,
    polFI3,
    polFI4, polFI5,
    polFIn2, polFIn3,
    polFIn4,
    polFIn5, polFInPr, polFInSht, polFInZh,
    polIzmEn1,
    polJp,
    polJpJs1,
    polJpJs2, polJpJs3,
    polJpJs4, polJpJs5, polJpJsDv,
    polJpM2, polJpM3,
    polJpM4,
    polJpM5, polJpMPr, polJpMSh, polJpMZh,
    polMIn2, polMIn3,
    polMIn4, polMIn5,
    polMomUr,
    polMp,
    polMpG2, polMpG3,
    polMpG4,
    polMpG5, polMpGPr, polMpGSht, polMpGZh,
    polR01,
    polR03, polR03N, polR03T, polR05, polR05N, polR05T,
    polR12, polR12N, polR12T,
    polR21, polR23, polR32,
    polR34, polR34N, polR34T,
    polR43, polR45,
    polR54, polSDY,
    polUgG2VS2, polUgG3VS3,
    polUgG4VS4, polUgG5VS5, polUgGPrVF, polUgGShtVD, polUgGZhidVD,
    polVA,
    polVB, polVBA,
    polVD, polVDB, polVE, polVEB, polVF, polVFB,
    polVS2, polVS2A, polVS3, polVS4, polVS4B, polVS5,
    polW1,
    polW2, polW3,
    polW4, polW5
} from "./analiz.js";


//Такт работы механизма.
const TAKT = polTokTakt();
//Количество положений механизма.
const KOL = polTokK();


//Добавить разметку страницы.
const content = document.getElementById("content");
let contentTag = polRez(TAKT, KOL,
    [[1, polFI1], [2, polFI2], [3, polFI3], [4, polFI4], [5, polFI5]],
    [["D", polSDY]],
    [[1, polW1], [2, polW2], [3, polW3], [4, polW4], [5, polW5]],
    [["A ", polVA], ["2 A", polVS2A], ["2 ", polVS2], ["B A", polVBA], ["B ", polVB],
        ["3 ", polVS3], ["4 B", polVS4B], ["4 ", polVS4], ["E B", polVEB], ["E ", polVE],
        ["D B", polVDB], ["D ", polVD], ["F B", polVFB], ["F ", polVF], ["5 ", polVS5]],
    [[1, polE1], [2, polE2], [3, polE3], [4, polE4], [5, polE5]],
    [["A ", polAA], ["2 A", polAS2A], ["2 ", polAS2], ["BA n", polABAn], ["BA t", polABAt],
        ["B A", polABA], ["BC n", polABCn], ["BC t", polABCt], ["B ", polAB], ["3 ", polAS3],
        ["4 B", polAS4B], ["4 ", polAS4], ["E B n", polAEBn], ["E B τ", polAEBt], ["E B", polAEB],
        ["E ", polAE], ["D B", polADB], ["D ", polADY], ["F B", polAFB], ["F ", polAF], ["5 ", polAS5]],
    [[2, polFIn2], [3, polFIn3], [4, polFIn4], [5, polFIn5], ["шт", polFInSht], ["пр", polFInPr], ["жид", polFInZh]],
    [[2, polMIn2], [3, polMIn3], [4, polMIn4], [5, polMIn5]],
    [],
    [["05 t", polR05T], ["05 n", polR05N], ["05 ", polR05], ["45 ", polR45], ["54 ", polR54],
        ["34 t", polR34T], ["34 n", polR34N], ["34 ", polR34], ["43", polR43], ["12 t", polR12T],
        ["12 n", polR12N], ["12 ", polR12], ["03 t", polR03T], ["03 n", polR03N], ["03", polR03],
        ["23", polR23], ["32", polR32], ["21", polR21], ["01", polR01]],
    [polMomUr],
    [[2, polJpM2], [3, polJpM3], [4, polJpM4], [5, polJpM5], ["шт", polJpMSh], ["пр", polJpMPr], ["жид", polJpMZh]],
    [[1, polJpJs1], [2, polJpJs2], [3, polJpJs3], [4, polJpJs4], [5, polJpJs5], ["дв", polJpJsDv]],
    [polJp],
    [["G 2 2", polUgG2VS2], ["G 3 3", polUgG3VS3], ["G 4 4", polUgG4VS4], ["G 5 5", polUgG5VS5],
        ["G шт D", polUgGShtVD], ["G пр F", polUgGPrVF], ["G жид D", polUgGZhidVD]],
    [[2, polMpG2], [3, polMpG3], [4, polMpG4], [5, polMpG5], ["шт", polMpGSht], ["пр", polMpGPr], ["жид", polMpGZh]],
    [],
    [polMp],
    [polIzmEn1]
);
content.innerHTML = contentTag;
