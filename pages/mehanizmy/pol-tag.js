import {WFInd1} from "../web-formula.js";

export function polTochOb(t) {
    return typeof t === "number" || !isNaN(Number(t)) ? "S" + WFInd1(t) : t;
}
