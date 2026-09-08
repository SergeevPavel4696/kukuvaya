

//Получить тег блока нумерованной формулы.
export function polNumFormula(formula, num) {
    return "<div class=\"formula-blok\">" + "<p class=\"formula\"><p class=\"formula\">" +
        formula + "<p class=\"formula\">(" + num + ")</div>";
}

//Получиить тег абзаца.
export function polAbz(abz) {
    return "<p class=\"abzac\">" + (abz ? abz + "</p>" : "");
}

//Получиить тег интерактивного абзаца.
export function polAbzInt(id, abz) {
    return "<p id=\"" + id + "\" class=\"abzac abzac-inter\">" + (abz ? abz + "</p>" : "");
}


