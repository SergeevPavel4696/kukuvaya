//Получить элемент на странице.
export const elNaStr = (id) => document.getElementById(id);

//Задать текст элемента на странице.
export const elNaStrText = (id, text) => document.getElementById(id).textContent = text;

//Получить тег поля ввода.
export function polTagPoleVvoda(id, tip, min, max, blok, opis) {
    return (blok ? "<label class=\"vvod-par-meh\">" : "") + "<input class=\"vvod-pole-par-meh\" id=\"" + id +
        "\" type=\"" + (tip ? tip : "number") + "\"" + (min ? " min=\"" + min + "\"" : "") + (max ? " max=\"" + max + "\"" : "") +
        ">" + (opis ? "<p class=\"vvod-opis-par-meh\">" + opis + "</p>" : "") + (blok ? "</label>" : "");
}
