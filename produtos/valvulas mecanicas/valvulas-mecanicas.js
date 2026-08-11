
// ===================== DADOS =====================

//================= PEDAIS =================

const valvulasPedais = [
    {
        nome: "Válvula Pedal/Mola 5/2 vias Série 4F",
        imagens: [
            "../../imagens/mecanicas/pedal-mola-52-vias-4f.WebP",
            "../../imagens/mecanicas/pedal-mola-52-vias-4f(1).WebP",
            "../../imagens/mecanicas/pedal-mola-52-vias-4f(2).WebP"
        ],
        descricao: "Acionamento por pedal com retorno por mola, ideal para operações manuais em sistemas pneumáticos.",
        roscas: ['1/4"']
    },

    {
        nome: "Válvula Pedal/Trava 5/2 vias Série 4F",
        imagens: [
            "../../imagens/mecanicas/pedal-mola-52-vias-4f.WebP",
            "../../imagens/mecanicas/pedal-mola-52-vias-4f(1).WebP",
            "../../imagens/mecanicas/pedal-mola-52-vias-4f(2).WebP"
        ],
        descricao: "Acionamento por pedal com trava, ideal para operações manuais em sistemas pneumáticos.",
        roscas: ['1/4"']
    },

    {
        nome: "Válvula Pedal/Mola 5/2 vias Série FS",
        imagens: [
            "../../imagens/mecanicas/pedal-trava-52-vias-fs.WebP",
            "../../imagens/mecanicas/pedal-trava-52-vias-fs(1).WebP",
            "../../imagens/mecanicas/pedal-trava-52-vias-fs(2).WebP",
            "../../imagens/mecanicas/pedal-trava-52-vias-fs(3).WebP"
        ],
        descricao: "Acionamento por pedal com retorno por mola, ideal para operações manuais em sistemas pneumáticos.",
        roscas: ['1/4"']
    },

    {
        nome: "Válvula Pedal/Trava 5/2 vias Série FS",
        imagens: [
            "../../imagens/mecanicas/pedal-trava-52-vias-fs.WebP",
            "../../imagens/mecanicas/pedal-trava-52-vias-fs(1).WebP",
            "../../imagens/mecanicas/pedal-trava-52-vias-fs(2).WebP",
            "../../imagens/mecanicas/pedal-trava-52-vias-fs(3).WebP"
        ],
        descricao: "Acionamento por pedal com trava, ideal para operações manuais em sistemas pneumáticos.",
        roscas: ['1/4"']
    },

    {
        nome: "Válvula Pedal/Mola 5/2 vias BELTON",
        imagens: [
            "../../imagens/mecanicas/pedal-mola-52-vias-belton(3).WebP",
            "../../imagens/mecanicas/pedal-mola-52-vias-belton.WebP",
            "../../imagens/mecanicas/pedal-mola-52-vias-belton(1).WebP",
            "../../imagens/mecanicas/pedal-mola-52-vias-belton(2).WebP",
        ],
        descricao: "Pedal mola modelo nacional Belton, ideal para operações que necessitam de acionamento manual ",
        roscas: ['1/4"']
    },

    {
        nome: "Válvula Pedal/Trava 3/2 vias BELTON",
        imagens: [
            "../../imagens/mecanicas/pedal-trava-32-vias-belton(1).WebP",
            "../../imagens/mecanicas/pedal-trava-32-vias-belton.WebP",
            "../../imagens/mecanicas/pedal-trava-32-vias-belton(2).WebP",
        ],
        descricao: "Pedal trava modelo nacional Belton, ideal para operações que necessitam de acionamento manual ",
        roscas: ['1/4"']
    },

];

//============ ALAVANCAS =============

const valvulasAlavancas = [
    {
        nome: "Válvula Alavanca/Mola 5/2 vias",
        imagens: [
            "../../imagens/mecanicas/alavanca-mola-52-vias.WebP",
            "../../imagens/mecanicas/alavanca-mola-52-vias(1).WebP"
        ],
        descricao: "Acionamento por alavanca com retorno por mola para controle manual de sistemas pneumáticos.",
        roscas: ['1/8"', '1/4"', '3/8"', '1/2"']
    },

    {
        nome: "Válvula Alavanca/Mola 5/3 vias Centro Fechado",
        imagens: [
            "../../imagens/mecanicas/alavanca-mola-53-vias-centro-fechado.WebP",
            "../../imagens/mecanicas/alavanca-mola-53-vias-centro-fechado(1).WebP"
        ],
        descricao: "Alavanca com retorno ao centro por mola para controle manual de sistemas pneumáticos.",
        roscas: ['1/8"', '1/4"', '3/8"', '1/2"']
    },

    {
        nome: "Válvula Alavanca/Trava 5/2 vias",
        imagens: [
            "../../imagens/mecanicas/alavanca-trava-52-vias.WebP",
            "../../imagens/mecanicas/alavanca-trava-52-vias(1).WebP"
        ],
        descricao: "Válvula alavanca trava, ideal para controle manual de sistemas pneumáticos.",
        roscas: ['1/8"', '1/4"', '3/8"', '1/2"']
    },

    {
        nome: "Válvula Alavanca/Trava 5/3 vias Centro Fechado",
        imagens: [
            "../../imagens/mecanicas/alavanca-trava-53-vias-centro-fechado.WebP",
            "../../imagens/mecanicas/alavanca-trava-53-vias-centro-fechado(1).WebP"
        ],
        descricao: "Válvula alavanca trava com centro fechado, ideal para controle manual de sistemas pneumáticos.",
        roscas: ['1/8"', '1/4"', '3/8"', '1/2"']
    },

    {
        nome: "Válvula Alavanca/Trava 4/3 vias Centro Fechado",
        imagens: [
            "../../imagens/mecanicas/rotativa-43-vias-centro-fechado.WebP",
            "../../imagens/mecanicas/rotativa-43-vias-centro-fechado(1).WebP"
        ],
        descricao: "Válvula Rotativa alavanca trava com centro fechado, ideal para controle manual de sistemas pneumáticos.",
        roscas: ['1/4"', '3/8"', '1/2"']
    },
];

//============ BOTÕES =============

const valvulasBotao = [

    {
        nome: "Válvula Botão/Mola 3/2 vias",
        imagens: [
            "../../imagens/mecanicas/botao-mola-32-vias.WebP",
            "../../imagens/mecanicas/botao-mola-32-vias(1).WebP"
        ],
        descricao: "Acionamento por botão com retorno por mola para comando manual de circuitos pneumáticos.",
        roscas: ['1/8"', '1/4"', '3/8"']
    },
];

//============ PINO =============

const valvulasPino = [
    {
        nome: "Válvula Pino/Mola 3/2 vias",
        imagens: [
            "../../imagens/mecanicas/pino-mola-32-vias.WebP",
            "../../imagens/mecanicas/pino-mola-32-vias(1).WebP"
        ],
        descricao: "Acionamento por pino para detecção de posição e fim de curso em sistemas pneumáticos.",
        roscas: ['1/8"', '1/4"']
    },
];

//============ ROLETE =============

const valvulasRolete = [
    {
        nome: "Válvula Rolete/Mola 3/2 vias",
        imagens: [
            "../../imagens/mecanicas/rolete-mola-32-vias.WebP",
            "../../imagens/mecanicas/rolete-mola-32-vias(1).WebP"
        ],
        descricao: "Acionamento por rolete para detecção de posição e fim de curso em sistemas pneumáticos.",
        roscas: ['1/8"']
    },
];


//============ GATILHO =============

const valvulasGatilho = [
    {
        nome: "Válvula Gatilho/Mola 3/2 vias",
        imagens: [
            "../../imagens/mecanicas/gatilho-mola-32-vias-m5-belton.WebP",
            "../../imagens/mecanicas/gatilho-mola-32-vias-m5-belton(1).WebP"
        ],
        descricao: "Acionamento por gatilho para controle manual de ferramentas e sistemas pneumáticos.",
        roscas: ['M5"']
    },
];


//============ COMPACTAS =============

const valvulasCompactas = [
    {
        nome: "Válvula Botão/Mola 5/2 vias COMPACTA",
        imagens: [

            "../../imagens/mecanicas/gatilho-mola-32-vias-m5-belton.WebP",
            "../../imagens/mecanicas/gatilho-mola-32-vias-m5-belton(1).WebP"
        ],
        descricao: "Acionamento por gatilho para controle manual de ferramentas e sistemas pneumáticos.",
        roscas: ['M5"']
    },
];


// ===================== DOM =====================

const gridPedais = document.getElementById("valvulas-pedais");
const gridAlavancas = document.getElementById("valvulas-alavancas");
const gridBotao = document.getElementById("valvulas-botao");
const gridPino = document.getElementById("valvulas-pino");
const gridRolete = document.getElementById("valvulas-rolete");
const gridGatilho = document.getElementById("valvulas-gatilho");
const gridCompactas = document.getElementById("valvulas-compactas");


// ===================== FUNÇÃO DO CARD =====================

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
                    <span
                        class="dot ${i === 0 ? "active" : ""}"
                        data-index="${i}"
                        data-src="${img}">
                    </span>
                `).join("")}
            </div>

        </div>

        <div class="product-content">

            <h3 class="product-title">${produto.nome}</h3>

            <p class="product-description">${produto.descricao}</p>

            <div class="options-row">
                <div class="option-group">
                    <p class="option-label">Rosca</p>
                    <select class="thread-select">
                        <option value="">Selecione</option>
                        ${produto.roscas.map(rosca => `
                            <option value="${rosca}">${rosca}</option>
                        `).join("")}
                    </select>
                </div>
            </div>

            <button class="add-cart-button">Adicionar ao carrinho</button>

        </div>

    </div>
    `;
}


// ===================== RENDER =====================

valvulasPedais.forEach((produto, index) => {
    gridPedais.innerHTML += criarCard(produto, index);
});

valvulasAlavancas.forEach((produto, index) => {
    gridAlavancas.innerHTML += criarCard(produto, index);
});

valvulasBotao.forEach((produto, index) => {
    gridBotao.innerHTML += criarCard(produto, index);
});

valvulasPino.forEach((produto, index) => {
    gridPino.innerHTML += criarCard(produto, index);
});

valvulasRolete.forEach((produto, index) => {
    gridRolete.innerHTML += criarCard(produto, index);
});

valvulasGatilho.forEach((produto, index) => {
    gridGatilho.innerHTML += criarCard(produto, index);
});

valvulasCompactas.forEach((produto, index) => {
    gridCompactas.innerHTML += criarCard(produto, index);
});


// ===================== CARROSSEL =====================

document.querySelectorAll(".product-card").forEach(card => {

    let imagemAtual = 0;

    const imagem = card.querySelector(".product-image");
    const botaoAnterior = card.querySelector(".prev-image");
    const botaoProximo = card.querySelector(".next-image");
    const bolinhas = card.querySelectorAll(".dot");

    // pega as imagens direto das bolinhas
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


// ===================== VALIDAÇÃO + CARRINHO =====================

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
    const seletorRosca = card.querySelector(".thread-select");
    const rosca = seletorRosca.value;
    const nome = card.querySelector(".product-title").textContent.trim();

    let valido = true;

    if (!rosca) {
        mostrarErro(seletorRosca);
        valido = false;
    } else {
        removerErro(seletorRosca);
    }

    if (!valido) {
        tremerBotao(event.target);
        return;
    }

    const itemCarrinho = {
        nome: nome,
        quantidade: 1,
        detalhes: [`Rosca: ${rosca}`]
    };

    carrinho.push(itemCarrinho);
    salvarCarrinho();
    renderCarrinho();
    atualizarContadorCarrinho();

    seletorRosca.value = "";

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