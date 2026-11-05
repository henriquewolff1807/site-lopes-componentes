// ================= DADOS =================

const TubosPneumaticos = [

    {
        nome: "Tubo de Poliuretano/PU Azul",
        imagens: ["../../imagens/tubos/tubo-poliuretano.webp",

        ],
        descricao: "Tubo flexível desenvolvido para condução de ar comprimido, oferecendo flexibilidade e resistência para aplicações pneumáticas industriais.",
        diametro: ["4mm", "6mm", "8mm", "10mm", "12mm", "16mm"],
    },

    {
        nome: "Tudo de Poliuretano/PU Preto",
        imagens: ["../../imagens/tubos/tubo-poliuretano-preto.webp",
        ],
        descricao: "Tubo flexível para condução de ar comprimido, indicado para instalações pneumáticas que exigem flexibilidade e resistência.",
        diametro: ["4mm", "6mm", "8mm"],
    },

    {
        nome: "Tubo de Nylon PA6 Preto",
        imagens: ["../../imagens/tubos/tubo-nylon.webp",
        ],
        descricao: "Tubo de nylon com boa resistência mecânica e rigidez, indicado para condução de ar comprimido em sistemas pneumáticos.",
        diametro: ["6mm", "8mm", "10mm", "12mm"],
    },

    {
        nome: "Tubo de Poliuretano/PU Espiral 8mm",
        imagens: ["../../imagens/tubos/tubo-poliuretano-espiral.webp",
            "../../imagens/tubos/tubo-poliuretano-azul-1.webp",
        ],
        descricao: "Tubo espiral flexível de poliuretano, ideal para conexões pneumáticas móveis que exigem extensão e retorno automático do tubo.",
        comprimento: ["7 Metros", "10 Metros", "15 Metros"],
    },

];

// ================= DOM =====================

const gridtubos = document.getElementById("tubos");


// ============= FUNÇÃO DO CARD =================   

function criarCard(produto, index) {
    return `

    <div class="product-card product-card" data-index="${index}">

        <div class="product-image-btn">

            <button class="prev-image">←</button>

            <img
                src="${produto.imagens[0]}"
                alt="${produto.nome}"
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

            ${produto.diametro ? `
            <p class="option-label">Diâmetro</p>
            <select class="diametro-select thread-select">
                <option value="">Selecione o diametro</option>
                ${produto.diametro.map(diametro => `
                    <option value="${diametro}">${diametro}</option>
                `).join("")}
            </select>
        ` : ""}

        ${produto.comprimento ? `
            <p class="option-label">Comprimento</p>
            <select class="comprimento-select thread-select">
                <option value="">Selecione o comprimento</option>
                ${produto.comprimento.map(comprimento => `
                    <option value="${comprimento}">${comprimento}</option>
                `).join("")}
            </select>
        ` : ""}

            ${!produto.comprimento ? `
            <p class="option-label">Metragem (metros)</p>
            <input
                type="number"
                min="1"
                step="1"
                placeholder="Quantos metros?"
                class="metragem-input thread-select">
        ` : ""}
    

            <button class="add-cart-button">Adicionar ao carrinho</button>

        </div>

    </div>
    `;
}


// ===================== RENDER =====================

TubosPneumaticos.forEach((produto, index) => {
    gridtubos.innerHTML += criarCard(produto, index);
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

    const seletorDiametro = card.querySelector(".diametro-select");
    const seletorComprimento = card.querySelector(".comprimento-select");
    const inputMetragem = card.querySelector(".metragem-input");

    const diametro = seletorDiametro?.value || "";
    const comprimento = seletorComprimento?.value || "";
    const metragem = inputMetragem?.value || "";

    const nome = card.querySelector(".product-title").textContent.trim();

    let valido = true;

    // Validação do diâmetro
    if (seletorDiametro && !diametro) {
        mostrarErro(seletorDiametro);
        valido = false;
    } else if (seletorDiametro) {
        removerErro(seletorDiametro);
    }

    // Validação do comprimento
    if (seletorComprimento && !comprimento) {
        mostrarErro(seletorComprimento);
        valido = false;
    } else if (seletorComprimento) {
        removerErro(seletorComprimento);
    }

    // Validação da metragem
    if (inputMetragem && (!metragem || Number(metragem) < 1)) {
        mostrarErro(inputMetragem);
        valido = false;
    } else if (inputMetragem) {
        removerErro(inputMetragem);
    }

    if (!valido) {
        tremerBotao(event.target);
        return;
    }

    const detalhes = [];

    if (diametro) detalhes.push(`Diâmetro: ${diametro}`);
    if (comprimento) detalhes.push(`Comprimento: ${comprimento}`);
    if (metragem) detalhes.push(`Metragem: ${metragem}m`);

    const itemCarrinho = {
        nome: nome,
        quantidade: 1,
        detalhes: detalhes
    };

    carrinho.push(itemCarrinho);
    salvarCarrinho();
    renderCarrinho();
    atualizarContadorCarrinho();

    if (seletorDiametro) seletorDiametro.value = "";
    if (seletorComprimento) seletorComprimento.value = "";
    if (inputMetragem) inputMetragem.value = "";

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
