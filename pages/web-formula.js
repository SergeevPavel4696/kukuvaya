

//Получить тег формулы.
export function WF(form, math, bl) {
    return (math ? "<math " + (bl ? "display=\"block\"" : "") + ">" + form + "</math>" : form);
}

export function WF1(form, blok) {
    return blok ? "$$" + form + "$$" : form;
}

//Получить тег текста.
export function WFText(text) {
    return "$$\{" + text + "}$$";
}

//Получить тег простой дроби.
export function WFDr(chis, znam, slash, math, bl) {
    return WF("<mfrac bevelled=\"" + slash + "\">" + "<mrow>" + chis + "</mrow>" + "<mrow>" + znam + "</mrow>" + "</mfrac>", math, bl);
}

export function WFDr1(chis, znam, slash, blok) {
    const form = slash ? chis + " / " + znam : "\\frac{" + chis + "}{" + znam + "}";
    return WF1(form, blok);
}

//Получить тег корня n-степени.
export function WFKor(form, n, math, bl) {
    return WF1((n ? "<mroot>" + form + "" + n + "</mroot>" : "<msqrt>" + form + "</msqrt>"), math, bl);
}

export function WFKor1(chis, step, blok) {
    const form = "\\sqrt" + (step !== 2 ? "[" + step + "]" : "") +"{" + chis + "}";
    return WF(form, blok);
}

//Получить тег квадратного корня.
export function WFKvKor(form, math, bl) {
    return WF("<msqrt>" + form + "</msqrt>", math, bl);
}

export function WFKvKor1(chis, blok) {
    return WFKor1(chis, 2, blok);
}

//Получить тег степени
export function WFStep(form, step, blok) {
    return WF1(form + WFInd1(null, step), blok);
}

//Получить тег с индексом.
export function WFInd(form, ni, ve, math, bl) {
    let ind = "";
    if (ni && ve) {
        ind = "<msubsup>" + form + "" + ni + "" + ve + "</msubsup>";
    } else if (ni) {
        ind += "<msub>" + form + "" + ni + "</msub>";
    } else if (ve) {
        ind += "<msup>" + form + "" + ve + "</msup>";
    }
    return WF(ind, math, bl);
}

export function WFInd1(ni, ve, blok) {
    const form = (ni ? "_{" + ni + "}" : "") + (ve ? "^{" + ve + "}" : "");
    return WF1(form, blok);
}

//Получить тег с под(над)писью.
export function WFPN(form, pod, nad, math, bl) {
    let pn = "";
    if (pod && nad) {
        pn = "<munderover>" + form + "" + pod + "" + nad + "</munderover>";
    } else if (pod) {
        pn = "<munder>" + form + "" + pod + "</munder>";
    } else if (nad) {
        pn = "<mover>" + form + "" + nad + "</mover>";
    }
    return WF(pn, math, bl);
}

export function WFPN1(vel, pod, nad, blok) {
    const form = "\\mathop{" + vel + "}\\limits" + (pod ? "_{" + pod + "}" : "") + (nad ? "^{" + nad + "}" : "");
    return WF1(form, blok);
}

//Получить тег скобок.
export function WFSkob(form, ot, za, math, bl) {
    return WF("<mfenced open=\"" + ot + "\" close=\"" + za + "\">" + form + "</mfenced>", math, bl);
}

export function WFSkob1(vel, tip1, tip2, blok) {
    let lev = "\\left";
    let prav = "\\right";
    let form = "";
    if (!tip1) lev = "";
    else if (tip1 === 1) lev += "(";
    else if (tip1 === 2) lev += "[";
    else if (tip1 === 3) lev += "{";
    else if (tip1 === 4) lev += "|";
    else if (tip1 === 5) lev += "\\langle";
    else lev += tip1;

    if (!tip2) prav = "";
    else if (tip2 === 1) prav += ")";
    else if (tip2 === 2) prav += "]";
    else if (tip2 === 3) prav += "}";
    else if (tip2 === 4) prav += "|";
    else if (tip2 === 5) prav += "\\rangle";
    else prav += tip2;

    form = lev + vel + prav;
    return WF1(form, blok);
}

//Получить тег матрицы.
export function WFMatr(mass, math, bl) {
    let matr = "<mtable>";
    mass.forEach(i => {
        matr += "<mtr>";
        i.forEach(j => matr += "<mtd>" + j + "</mtd>")
        matr += "</mtr>";
    })
    matr += "/<mtable>";
    return WF(matr, math, bl);
}

export function WFMatr1(mass, blok) {
    let matr = "\\begin{array}{} ";
    mass.forEach((gor, i) => {
        gor.forEach((vert, j) => matr += vert + ((j !== gor.length - 1) ? " & " : ""));
        matr += ((i !== mass.length - 1) ? " \\\\ " : "");
    });
    matr += " \\end{array}";
    return WF1(matr, blok);
}

//Получить тег диакритического знака.
export function WFDiakr(form, tip, math, bl) {
    //Вектор.
    if (tip === 0) return WFPN(form, null, "<mo>&#x2192;</mo>", math, bl);
    //Тильда.
    if (tip === 1) return WFPN(form, null, "<mo>~</mo>", math, bl);
    //Точка.
    if (tip === 2) return WFPN(form, null, "<mo>&#x2d9;</mo>", math, bl);
    //Две точки.
    if (tip === 3) return WFPN(form, null, "<mo>&#xa8;</mo>", math, bl);
    //Три точки.
    if (tip === 4) return WFPN(form, null, "<mo>&#x20db;</mo>", math, bl);
    //Надчеркивание.
    if (tip === 5) return WFPN(form, null, "<mo>&#x2212;</mo>", math, bl);
    //Двойное надчеркивание.
    if (tip === 6) return WFPN(form, null, "<mo>&#x33f;</mo>", math, bl);
    //Подчеркивание.
    if (tip === 7) return WFPN(form, "<mo>_</mo>", null, math, bl);
    //Уголок.
    if (tip === 8) return WFPN(form, null, "<mo>^</mo>", math, bl);
}

export function WFDiakr1(form, tip, blok) {
    //Вектор.
    if (tip === "->") return WF1("\\overrightarrow{" + form + "}", blok);
    //Тильда.
    if (tip === "~") return WF1("\\widetilde{" + form + "}", blok);
    //Точка.
    if (tip === ".") return WF1("\\dot{" + form + "}", blok);
    //Две точки.
    if (tip === "..") return WF1("\\ddot{" + form + "}", blok);
    //Три точки.
    if (tip === "...") return WF1("\\dddot{" + form + "}", blok);
    //Надчеркивание.
    if (tip === "^-") return WF1("\\bar{" + form + "}", blok);
    //Двойное надчеркивание.
    if (tip === "^--") return WF1("\\bar{\\bar{" + form + "}}", blok);
    //Подчеркивание.
    if (tip === "_") return WF1("\\underline{" + form + "}", blok);
    //Двойное подчеркивание.
    if (tip === "__") return WF1("\\underline{\\underline{" + form + "}}", blok);
    //Уголок.
    if (tip === "^") return WF1("\\widehat{" + form + "}", blok);
}

//Получить тег оператора суммы.
export function WFOpSum1(pod, nad, tip, blok) {
    let form;
    tip ? form = "{\\sum}" + WFInd1(pod, nad) : form = "\\sum" + WFInd1(pod, nad);
    return WF1(form, blok);
}

//Получить тег оператора произведения.
export function WFOpPr(pod, nad, tip, math, bl) {
    const form = "<mo>&#x220f;</mo>";
    return (tip ? WFPN(form, pod, nad, math, bl) : WFInd(form, pod, nad, math, bl));
}

export function WFOpPr1(pod, nad, tip, blok) {
    let form;
    if (tip === 0) form = "\\prod" + "_{" + pod + "}^{" + nad + "}";
    else if (tip === 1) form = "{\\prod}" + WFInd1(pod, nad);
    return WF1(form, blok);
}







//Получить тег оператора объединения.
export function WFOpOb(pod, nad, tip, math, bl) {
    const form = "<mo>&#x22c3;</mo>";
    return (tip ? WFPN(form, pod, nad, math, bl) : WFInd(form, pod, nad, math, bl));
}

export function WFOpOb1(pod, nad, tip, math, bl) {
    const form = "<mo>&#x22c3;</mo>";
    return (tip ? WFPN(form, pod, nad, math, bl) : WFInd(form, pod, nad, math, bl));
}

//Получить тег оператора пересечения.
export function WFOpPe(pod, nad, tip, math, bl) {
    const form = "<mo>&#x22c2;</mo>";
    return (tip ? WFPN(form, pod, nad, math, bl) : WFInd(form, pod, nad, math, bl));
}

//Получить тег оператора логического И.
export function WFOpLogI(pod, nad, tip, math, bl) {
    const form = "<mo>&#x22c1;</mo>";
    return (tip ? WFPN(form, pod, nad, math, bl) : WFInd(form, pod, nad, math, bl));
}

//Получить тег оператора логического ИЛИ.
export function WFOpLogIli(pod, nad, tip, math, bl) {
    const form = "<mo>&#x22c0;</mo>";
    return (tip ? WFPN(form, pod, nad, math, bl) : WFInd(form, pod, nad, math, bl));
}

//Получить тег косинуса угла.
export function WFCos(ug, grad, blok) {
    const form = "\\cos" + WFSkob1(ug + (grad ? "°" : ""), 1, 1);
    return WF1(form, blok);
}

//Получить тег тангенса угла.
export function WFTan(ug, grad, blok) {
    const form = "\\tan" + WFSkob1(ug + (grad ? "°" : ""), 1, 1);
    return WF1(form, blok);
}

//Получить тег арктангенса угла.
export function WFATan(ug, grad, blok) {
    const form = "\\arctan" + WFSkob1(ug + (grad ? "°" : ""), 1, 1);
    return WF1(form, blok);
}







//Получить тег неопределенного интеграла.
export function WFIntNe(tip, math, bl) {
   let int = "";
    if (tip === 1) return WF("<mo>&#x222b;</mo>", math, bl);
    if (tip === 2) return WF("<mo>&#x222c;</mo>", math, bl);
    if (tip === 3) return WF("<mo>&#x222d;</mo>", math, bl);
    if (tip === 11) return WF("<mo>&#x222e;</mo>", math, bl);
    if (tip === 12) return WF("<mo>&#x222f;</mo>", math, bl);
    if (tip === 13) return WF("<mo>&#x2230;</mo>", math, bl);
}

//Получить тег определенного интеграла.
export function WFIntOp(tip, na, ko, math, bl) {
    return WFPN(WFIntNe(tip), na, ko, math, bl);
}







//Получить вектор скорости.
export function WFVekSk(ind, blok) {
    const form = WFDiakr1("v" + WFInd1(ind), "->");
    return WF1(form, blok);
}

//Получить скорость.
export function WFSk(ind, blok) {
    const form = "v" + WFInd1(ind);
    return WF1(form, blok);
}

//Получить вектор угловой скорости.
export function WFVekUgSk(ind, blok) {
    const form = WFDiakr1("ω" + WFInd1(ind), "->");
    return WF1(form, blok);
}

//Получить угловую скорость.
export function WFUgSk(ind, blok) {
    const form = "ω" + WFInd1(ind);
    return WF1(form, blok);
}

//Получить вектор ускорения.
export function WFVekUsk(ind, tip, blok) {
    const form = WFDiakr1("a" + WFInd1(ind, tip), "->");
    return WF1(form, blok);
}

//Получить ускорение.
export function WFUsk(ind, tip, blok) {
    const form = "a" + WFInd1(ind, tip);
    return WF1(form, blok);
}

//Получить вектор углового ускорения.
export function WFVekUgUsk(ind, tip, blok) {
    const form = WFDiakr1("Ɛ" + WFInd1(ind, tip), "->");
    return WF1(form, blok);
}

//Получить угловое ускорение.
export function WFUgUsk(ind, tip, blok) {
    const form = "Ɛ" + WFInd1(ind, tip);
    return WF1(form, blok);
}

//Получить вектор момента силы инерции.
export function WFVekMomSilIn(ind, blok) {
    const form = WFDiakr1("M" + WFInd1("Φ" + WFInd1(ind)), "->");
    return WF1(form, blok);
}

//Получить момент силы инерции.
export function WFMomSilIn(ind, blok) {
    const form = "M" + WFInd1("Φ" + WFInd1(ind));
    return WF1(form, blok);
}

//Получить вектор веса.
export function WFVekVes(ind, blok) {
    const form = WFDiakr1("G" + WFInd1(ind), "->");
    return WF1(form, blok);
}

//Получить вес.
export function WFVes(ind, blok) {
    const form = "G" + WFInd1(ind);
    return WF1(form, blok);
}

//Получить вектор силы инерции.
export function WFVekSilIn(ind, blok) {
    const form = WFDiakr1("Φ" + WFInd1(ind), "->");
    return WF1(form, blok);
}

//Получить силу инерции.
export function WFSilIn(ind, blok) {
    const form = "Φ" + WFInd1(ind);
    return WF1(form, blok);
}

//Получить вектор силы.
export function WFVekSil(ind, blok) {
    const form = WFDiakr1("F" + WFInd1(ind), "->");
    return WF1(form, blok);
}

//Получить силу.
export function WFSil(ind, blok) {
    const form = "F" + WFInd1(ind);
    return WF1(form, blok);
}

//Получить вектор момента сил.
export function WFVekMomSil(ind, blok) {
    const form = WFDiakr1("M" + WFInd1(ind), "->");
    return WF1(form, blok);
}

//Получить момент сил.
export function WFMomSil(ind, blok) {
    const form = "M" + WFInd1(ind);
    return WF1(form, blok);
}

//Получить вектор реакции.
export function WFVekReak(ind, tip, blok) {
    const form = WFDiakr1("R" + WFInd1(ind, tip), "->");
    return WF1(form, blok);
}

//Получить реакцию.
export function WFReak(ind, tip, blok) {
    const form = "R" + WFInd1(ind, tip);
    return WF1(form, blok);
}





//Получить массу.
export function WFMass(ind, blok) {
    const form = "m" + WFInd1(ind);
    return WF1(form, blok);
}

//Получить момент инерции.
export function WFMomIn(ind, blok) {
    const form = "J" + WFInd1("S" + WFInd1(ind));
    return WF1(form, blok);
}
