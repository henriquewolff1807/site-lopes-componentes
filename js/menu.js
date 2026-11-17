const RAIZ_SITE = new URL("../", document.currentScript.src);

const categorias = [
    { nome: "Válvulas Solenóide", pagina: "produtos/valvulas-solenoide/valvulas-solenoide.html" },
    { nome: "Válvulas Pilotadas", pagina: "produtos/valvulas-pilotadas/valvulas-pilotadas.html" },
    { nome: "Válvulas Mecânicas", pagina: "produtos/valvulas mecanicas/valvulas-mecanicas.html" },
    { nome: "Válvula Angular", pagina: "produtos/valvula-angular/valvula-angular.html" },
    { nome: "Cilindros ISO", pagina: "produtos/cilindro-iso/cilindro-iso.html" },
    { nome: "Cilindros Mini ISO", pagina: "produtos/cilindro-mini/cilindro-mini-iso.html" },
    { nome: "Acessórios para Cilindros", pagina: "produtos/acessorios/acessorios-cilindros.html" },
    { nome: "Válvula de Escape Rápido", pagina: "produtos/valvula-escape-rapido/escape-rapido.html" },
    { nome: "Preparação do Ar", pagina: "produtos/preparacao-do-ar/preparacao-do-ar.html" },
    { nome: "Conexões Pneumáticas", pagina: "produtos/conexoes/conexoes.html" },
    { nome: "Conexões em Latão", pagina: "produtos/latao/latao.html" },
    { nome: "Tubos em Poliuretano (PU)", pagina: "produtos/tubos/tubos.html" },
    { nome: "Tubos de Nylon PA6", pagina: "produtos/tubos-pa6/tubos-pa6.html" },
    { nome: "Tubos de Poliuretano em Espiral", pagina: "produtos/tubos-espiral/tubos-espiral.html" },
    { nome: "Kits de Reparo", pagina: "produtos/kit-reparo/reparo.html" },
];

const botaoProdutos = document.querySelector(".dropdown-toggle");
const menuProdutos = document.getElementById("menu-produtos");

categorias.forEach(categoria => {
    const destino = new URL(categoria.pagina, RAIZ_SITE).href;
    menuProdutos.innerHTML += `<li><a href="${destino}">${categoria.nome}</a></li>`;
});

function fecharMenu() {
    menuProdutos.classList.remove("aberto");
    botaoProdutos.setAttribute("aria-expanded", "false");
}

botaoProdutos.addEventListener("click", () => {
    const aberto = menuProdutos.classList.toggle("aberto");
    botaoProdutos.setAttribute("aria-expanded", aberto);
});

document.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown")) fecharMenu();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") fecharMenu();
});