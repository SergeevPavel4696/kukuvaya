//Подвал страницы.
const podval = document.createElement("a");
//Тег подвала.
const podvalTag = "<footer class=\"podval\">Подвал</footer>";
//Добавить подвал на страницу.
function dobFooter() {
    podval.href = "index.html";
    podval.classList.add("link");
    podval.innerHTML = podvalTag;
    telo.append(podval);
}

dobFooter();
