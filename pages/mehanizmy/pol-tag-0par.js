import {polAbz} from "../razmetka.js";

export function pol0(opis, ris) {
    return polAbz() + "Параметры механизма" +
        polAbz() + opis + "</p>" + ris + "</p>" +
        "<p class=\"risunok-podpis\">Рисунок 1 – Механизм по заданию";
}

export function pol0par(mass) {
    let tag = "<div class=\"meh\"><form name=\"param\" id=\"param\" class=\"meh__params\">";
    mass.forEach(i => {
        let min;
        if (i[2]) min = " min=\"" + i[2] + "\"";
        tag +=
            "<label class=\"vvod-par-meh\">" +
            "<input class=\"vvod-pole-par-meh\" id=\"" + i[0] + "\" type=\"number\"" + min + ">" +
            "<p class=\"vvod-opis-par-meh\">" + i[1] + "</p>" +
            "</label>";
    });
    tag += "</form>";
    return tag;
}

export function pol0ris(ris) {
    return ris + "</div>";
}
