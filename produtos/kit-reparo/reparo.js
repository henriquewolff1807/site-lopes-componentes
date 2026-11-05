
const kitReparo = [

    {
        nome: "Kit de Reparo Cilindro ISO BELTON",
        imagens: [
            "../../imagens/kits-reparo/reparo-belton-1.webp",
            "../../imagens/kits-reparo/reparo-belton-2.webp",
            "../../imagens/kits-reparo/reparo-belton-3.webp",
            "../../imagens/kits-reparo/reparo-belton.webp",
        ],
        descricao: "Conjunto de componentes de reposição desenvolvido para realizar a manutenção e restaurar a vedação e o funcionamento de cilindros pneumáticos ISO BELTON.",
        diametro: ["32mm", "40mm", "50mm", "63mm", "80mm", "100mm", "125mm", "160mm"],
    },

    {
        nome: "Kit de Reparo Cilindro ISO Importado",
        imagens: [
            "../../imagens/kits-reparo/reparo-importado-2.webp",
            "../../imagens/kits-reparo/reparo-importado-1.webp",
            "../../imagens/kits-reparo/reparo-importado-3.webp",
            "../../imagens/kits-reparo/reparo-importado-4.webp",
            "../../imagens/kits-reparo/reparo-importado.webp",

        ],
        descricao: "Conjunto de peças de reposição para manutenção de cilindros pneumáticos, auxiliando na recuperação da vedação e do desempenho do equipamento.",
        diametro: ["32mm", "40mm", "50mm", "63mm", "80mm", "100mm", "125mm", "160mm", "200mm", "250mm", "320mm"],
    },

    {
        nome: "Kit de Reparo Cilindro ISO CNC",
        imagens: [
            "../../imagens/kits-reparo/reparo-cnc-1.webp",
            "../../imagens/kits-reparo/reparo-cnc-3.webp",
            "../../imagens/kits-reparo/reparo-cnc-4.webp",
            "../../imagens/kits-reparo/reparo-cnc.webp",
        ],
        descricao: "Conjunto de componentes destinados à manutenção de cilindros pneumáticos ISO, auxiliando na substituição de vedações desgastadas",
        diametro: ["32mm", "40mm", "50mm", "63mm", "80mm", "100mm", "125mm", "160mm", "200mm", "250mm", "320mm"],
    },


    {
        nome: "Kit de Reparo Cilindro ADVU",
        imagens: [
            "../../imagens/kits-reparo/reparo-advu-4.webp",
            "../../imagens/kits-reparo/reparo-advu-3.webp",
            "../../imagens/kits-reparo/reparo-advu-2.webp",
            "../../imagens/kits-reparo/reparo-advu-1.webp",
            "../../imagens/kits-reparo/reparo-advu.webp",
        ],
        descricao: "Conjunto de componentes de reposição para manutenção de cilindros pneumáticos ADVU, desenvolvido para auxiliar na recuperação da vedação e do funcionamento do equipamento.",
        diametro: ["16mm", "20mm", "25mm", "32mm", "40mm", "50mm", "63mm", "80mm"],
    },

    {
        nome: "Kit de Reparo Cilindro ADN",
        imagens: [
            "../../imagens/kits-reparo/reparo-adn-1.webp",
            "../../imagens/kits-reparo/reparo-adn-2.webp",
            "../../imagens/kits-reparo/reparo-adn.webp",
        ],
        descricao: "Conjunto de componentes de reposição para manutenção de cilindros pneumáticos ADN, auxiliando na recuperação da vedação e do funcionamento do equipamento.",
        diametro: ["16mm", "20mm", "25mm", "32mm", "40mm", "50mm", "63mm", "80mm", "100mm"],
    },

    {
        nome: "Kit de Reparo Cilindro SDA",
        imagens: [
            "../../imagens/kits-reparo/reparo-sda-1.webp",
            "../../imagens/kits-reparo/reparo-sda-2.webp",
            "../../imagens/kits-reparo/reparo-sda.webp",
        ],
        descricao: "Conjunto de vedações de reposição para manutenção de cilindros pneumáticos modelo SDA, contribuindo para a troca das vedações e do desempenho do cilindro.",
        diametro: ["12mm", "16mm", "20mm", "25mm", "32mm", "40mm", "50mm", "63mm", "80mm", "100mm"],
    },

]

//======================= DOM ========================//

const gridkitReparo = document.getElementById("kit-reparo");

//================== FUNÇÃO DO CARD ==================//

function criarCard(produto, index) {
    return `

    <div class="product-card" data-index="${index}">    

        <div class="product-image-btn">

            <button class="prev-image">←</button>

            <img
                src="${produto.imagens[0]}"
                alt="${produto.nome}. ${produto.descricao}"
                class="product-image">

            <button class="next-image">→</button>

            <div class="image-dots">
                ${produto.imagens.map((img, i) => `
                    <span class="dot ${i === 0 ? "active" : ""}"
                        data-index="${i}"
                        data-src="${img}">
                    </span>  
                `).join("")}
            </div>

        </div>

        <div class="product-content">

            <h3 class="product-title">${produto.nome}</h3>

            <p class="product-description">${produto.descricao}</p>

        <p class="option-label">Diâmetro</p>
            <select class="diametro-select thread-select">
                <option value="">Selecione o diâmetro</option>
                ${produto.diametro.map(d => `
                    <option value="${d}">${d}</option>
                `).join("")}
            </select>
             
            <button class="add-cart-button">Adicionar ao carrinho</button>
        
        </div>

    </div>
    `;
}

//=================== RENDER ======================

kitReparo.forEach((produto, index) => {
    gridkitReparo.innerHTML += criarCard(produto, index);
});

//=================== CARROSSEL ====================

document.querySelectorAll(".product-card").forEach(card => {

    let imagemAtual = 0;

    const imagem = card.querySelector(".product-image");
    const botaoAnterior = card.querySelector(".prev-image");
    const botaoProximo = card.querySelector(".next-image");
    const bolinhas = card.querySelectorAll(".dot");

    const imagens = Array.from(bolinhas).map(dot => dot.dataset.src);

    function atualizarImagem() {
        imagem.src = imagens[imagemAtual];
        bolinhas.forEach((dot, i) => {
            dot.classList.toggle("active", i === imagemAtual);
        });
    }

    botaoProximo.addEventListener("click", (event) => {
        event.stopPropagation();
        imagemAtual = (imagemAtual + 1) % imagens.length;
        atualizarImagem();
    });

    botaoAnterior.addEventListener("click", (event) => {
        event.stopPropagation();
        imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length;
        atualizarImagem();
    });

    bolinhas.forEach((dot, index) => {
        dot.addEventListener("click", (event) => {
            event.stopPropagation();
            imagemAtual = index;
            atualizarImagem();
        });
    });

});

//================ VALIDAÇÃO + CARRINHO ===============

function tremerBotao(button) {
    button.classList.add("button-error");
    setTimeout(() => button.classList.remove("button-error"), 300);
}

function mostrarErro(campo) {
    campo.classList.add("input-error");
}

function removerErro(campo) {
    campo.classList.remove("input-error");
}

document.addEventListener("click", (event) => {

    if (!event.target.classList.contains("add-cart-button")) return;

    const card = event.target.closest(".product-card");
    const index = card.dataset.index;
    const produto = kitReparo[index];

    const seletorDiametro = card.querySelector(".diametro-select");

    const diametro = seletorDiametro ? seletorDiametro.value : null;

    let valido = true;

    if (seletorDiametro && !diametro) {
        mostrarErro(seletorDiametro);
        valido = false;
    } else if (seletorDiametro) {
        removerErro(seletorDiametro);
    }

    if (!valido) {
        tremerBotao(event.target);
        return;
    }

    const detalhes = [];

    if (diametro) detalhes.push(`Diâmetro: ${diametro}`);

    const itemCarrinho = {
        nome: produto.nome,
        quantidade: 1,
        detalhes: detalhes
    };

    carrinho.push(itemCarrinho);
    salvarCarrinho();
    renderCarrinho();
    atualizarContadorCarrinho();

    if (seletorDiametro) seletorDiametro.value = "";

});

// ===================== ZOOM IMAGEM =====================

const modal = document.querySelector(".image-modal");
const modalImage = document.querySelector(".modal-image");
const closeModal = document.querySelector(".close-modal");

let imagensModal = [];
let indexModal = 0;

function atualizarModalImagem() {
    modalImage.src = imagensModal[indexModal];
}

function abrirModal(imagens, indexInicial) {
    imagensModal = imagens;
    indexModal = indexInicial;
    atualizarModalImagem();
    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("active"), 10);
}

document.addEventListener("click", (event) => {
    const imagemClicada = event.target.closest(".product-image-btn img");
    if (!imagemClicada) return;

    const card = imagemClicada.closest(".product-card");
    const bolinhas = card.querySelectorAll(".dot");
    const imagens = Array.from(bolinhas).map(dot => dot.dataset.src);
    const indexInicial = Array.from(bolinhas).findIndex(dot => dot.dataset.src === imagemClicada.src);

    abrirModal(imagens, indexInicial >= 0 ? indexInicial : 0);
});

document.querySelector(".modal-next").addEventListener("click", () => {
    indexModal = (indexModal + 1) % imagensModal.length;
    atualizarModalImagem();
});

document.querySelector(".modal-prev").addEventListener("click", () => {
    indexModal = (indexModal - 1 + imagensModal.length) % imagensModal.length;
    atualizarModalImagem();
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
    setTimeout(() => modal.style.display = "none", 300);
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("active");
        setTimeout(() => modal.style.display = "none", 300);
    }
});
