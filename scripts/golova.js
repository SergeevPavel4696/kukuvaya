//Тело страницы.
const telo = document.querySelector(".stranica");
//Голова страницы.
const golova = document.createElement("a");
//Тег головы.
const golovaTag = "<header class=\"golova\"><p class='golova-zagolovok'>СОВА</header>";
//Текущий адрес.
let adr = window.location.href.split("pages").length - 1;
if (adr) adr = window.location.href.split("pages")[1].split("/").length - 1;
// Добавить голову на страницу.
function dobGolova() {
    let href = "";
    for (let i = 0; i < adr; i++) href += "../";
    golova.href = href + "index.html";
    golova.classList.add("link");
    golova.innerHTML = golovaTag;
    telo.prepend(golova);
}

dobGolova();
