
const acessoriosParaCilindros = [

    {
        nome: "Ponteira Rotular Rosca Fêmea",
        imagens: [
            "../../imagens/acessorios/ponteira-rotular.webp",
            "../../imagens/acessorios/ponteira-rotular(1).webp",
            "../../imagens/acessorios/ponteira-rotular(2).webp",
        ],
        descricao: "Permite articulação da haste do cilindro, com rosca interna para diferentes aplicações.",
        diametro: ["8/10mm (Rosca: M4x0,7)", "12/16mm (Rosca: M6x1)", "20mm (Rosca: M8x1,25)", "25/32mm (Rosca: M10x1,25)", "40mm (Rosca: M12x1,25)", "50/63mm (Rosca: M16x1,5)",
            "80/100mm (Rosca: M20x1,5)", "125mm (Rosca: M27x2)", "160/200mm (Rosca: M36x2)", "250mm (Rosca: M42x2)"],
    },

    {
        nome: "Ponteira Garfo",
        imagens: [
            "../../imagens/acessorios/ponteira-femea.webp",
            "../../imagens/acessorios/ponteira-femea(1).webp",
            "../../imagens/acessorios/ponteira-femea(2).webp",
            "../../imagens/acessorios/ponteira-femea(3).webp",
            "../../imagens/acessorios/ponteira-femea(4).webp",
        ],
        descricao: "Facilita a fixação articulada da haste do cilindro em diferentes mecanismos.",
        diametro: ["8/10mm (Rosca: M4x0,7)", "12/16mm (Rosca: M6x1)", "20mm (Rosca: M8x1,25)", "25/32mm (Rosca: M10x1,25)", "40mm (Rosca: M12x1,25)", "50/63mm (Rosca: M16x1,5)",
            "80/100mm (Rosca: M20x1,5)", "125mm (Rosca: M27x2)", "160/200mm (Rosca: M36x2)", "250mm (Rosca: M42x2)"],
    },


    {
        nome: "Articulação Traseira Fêmea",
        imagens: [
            "../../imagens/acessorios/articulacao-femea.webp",
            "../../imagens/acessorios/articulacao-femea(1).webp",
        ],
        descricao: "Permite a montagem articulada do cilindro pela parte traseira, proporcionando maior liberdade de movimento",
        diametro: ["8/10mm", "12/16m", "20/25mm", "32mm", "40mm", "50mm", "63mm", "80mm", "100mm", "125mm", "16mm", "200mm", "250mm"],
    },

    {
        nome: "Articulação Traseira Macho",
        imagens: [
            "../../imagens/acessorios/articulacao-macho.webp",
        ],
        descricao: "Suporte traseiro para montagem articulada do cilindro em diferentes aplicações.",
        diametro: ["32mm", "40mm", "50mm", "63mm", "80mm", "100mm", "125mm", "160mm", "200mm", "250mm"],
    },

    {
        nome: "Junta Flutuante",
        imagens: [
            "../../imagens/acessorios/junta-flutuante.webp",
        ],
        descricao: "Compensa pequenos desalinhamentos entre a haste do cilindro e o mecanismo acionado.",
        diametro: ["8/10mm", "12/16m", "20mm", "25/32mm", "40mm", "50/63mm", "80/100mm", "125mm"],
    },

    {
        nome: "Cantoneira Mini ISO e ISO",
        imagens: [
            "../../imagens/acessorios/cantoneira-mini-iso-e-iso.webp",
        ],
        descricao: "Suporte para fixação de cilindros Mini ISO e ISO em diferentes posições de montagem.",
        diametro: ["8/10mm", "12/16m", "20/25mm", "32mm", "40mm", "50mm", "63mm", "80mm", "100mm", "125mm"],
    },

    {
        nome: "Suporte Oscilante ISO",
        imagens: [
            "../../imagens/acessorios/suporte-oscilante.webp",
        ],
        descricao: "Permite a montagem oscilante do cilindro, acompanhando o movimento durante o acionamento",
        diametro: ["32mm", "40mm", "50mm", "63mm", "80mm", "100mm", "125mm"],
    },

    {
        nome: "Articulação com Rotula ISO",
        imagens: [
            "../../imagens/acessorios/articulacao-traseria-femea-com-rotula.webp",
        ],
        descricao: "Proporciona articulação e compensação de desalinhamentos na fixação do cilindro.",
        diametro: ["32mm", "40mm", "50mm", "63mm", "80mm", "100mm"],
    },

    {
        nome: "Munhão Central para Mickey-Mouse",
        imagens: [
            "../../imagens/acessorios/munhao-central-mickey-mouse.webp",
        ],
        descricao: "Permite a fixação central e oscilante de cilindros tipo Mickey-Mouse.",
        diametro: ["32mm", "40mm", "50mm", "63mm", "80mm", "100mm"],
    },

    {
        nome: "Munhão Frontal",
        imagens: [
            "../../imagens/acessorios/munhao-frontal.webp",
        ],
        descricao: "Suporte frontal que permite a montagem oscilante do cilindro em diferentes aplicações.",
        diametro: ["32mm", "40mm", "50mm", "63mm", "80mm", "100mm", "125mm"],
    },

    {
        nome: "Válvula de Escape Rápido",
        imagens: [
            "../../imagens/acessorios/valvula-escape-rapido.webp",
            "../../imagens/acessorios/valvula-escape-rapido(1).webp",
        ],
        descricao: "Permite a rápida exaustão do ar próximo ao cilindro, aumentando a velocidade de acionamento",
        rosca: ['1/8"', '1/4"', '3/8"', '1/2"', '3/4"', '1"'],
    },

]

//======================= DOM ========================//

const gridAcessorios = document.getElementById("acessorios");

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

        ${produto.diametro ? `
            <p class="option-label">Diâmetro</p>
            <select class="diametro-select thread-select">
                <option value="">Selecione o diâmetro</option>
                ${produto.diametro.map(d => `
                    <option value="${d}">${d}</option>
                    `).join("")}
            </select>
        ` : ""}

        ${produto.rosca ? `
            <p class="option-label">Rosca</p>
            <select class="diametro-select thread-select">
                <option value="">Selecione o rosca</option>
                ${produto.rosca.map(rosca => `
                    <option value="${rosca}">${rosca}</option>
                    `).join("")}
            </select>
        ` : ""}
             
            <button class="add-cart-button">Adicionar ao carrinho</button>
        
        </div>

    </div>
    `;
}

//=================== RENDER ======================

acessoriosParaCilindros.forEach((produto, index) => {
    gridAcessorios.innerHTML += criarCard(produto, index);
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
    const produto = acessoriosParaCilindros[index];

    const seletorDiametro = card.querySelector(".diametro-select");
    const seletorRosca = card.querySelector(".rosca-select");

    const diametro = seletorDiametro ? seletorDiametro.value : null;
    const rosca = seletorRosca ? seletorRosca.value : null;

    let valido = true;

    if (seletorDiametro && !diametro) {
        mostrarErro(seletorDiametro);
        valido = false;
    } else if (seletorDiametro) {
        removerErro(seletorDiametro);
    }

    if (seletorRosca && !rosca) {
        mostrarErro(seletorRosca);
        valido = false;
    } else if (seletorRosca) {
        removerErro(seletorRosca);
    }

    if (!valido) {
        tremerBotao(event.target);
        return;
    }

    const detalhes = [];

    if (diametro) detalhes.push(`Diâmetro: ${diametro}`);
    if (rosca) detalhes.push(`Rosca: ${rosca}`);

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
    if (seletorRosca) seletorRosca.value = "";

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
