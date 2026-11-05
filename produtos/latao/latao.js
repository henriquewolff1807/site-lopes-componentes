// ================= DADOS =================

const latao = [

    {
        nome: "Nipple Duplo em Latão",
        imagens: [
            "../../imagens/latao/nipple-duplo.webp",
            "../../imagens/latao/nipple-duplo(1).webp",
            "../../imagens/latao/nipple-duplo(2).webp",
        ],
        descricao: "Permite unir dois componentes com rosca fêmea, proporcionando uma conexão roscada entre tubulações e acessórios.",
        rosca: ['1/8"', '1/4"', '3/8"', '1/2"', '3/4"'],
    },

    {
        nome: "Nipple com Redução em Latão",
        imagens: [
            "../../imagens/latao/nipple-com-reducao.webp",
            "../../imagens/latao/nipple-com-reducao(1).webp",
            "../../imagens/latao/nipple-com-reducao(2).webp",
            "../../imagens/latao/nipple-com-reducao(3).webp",
        ],
        descricao: "Permite conectar componentes com roscas de diferentes dimensões, facilitando a adaptação entre conexões.",
        rosca: ['1/4" x 1/8"', '3/8" x 1/8"', '3/8" x 1/4"', '1/2" x 1/4"', '1/2" x 3/8"', '3/4" x 1/2"'],
    },

    {
        nome: "Adaptador Macho/Fêmea em Latão",
        imagens: [
            "../../imagens/latao/adaptador-latao (1).webp",
            "../../imagens/latao/adaptador-latao (2).webp",
            "../../imagens/latao/adaptador-latao (3).webp",
        ],
        descricao: "Permite adaptar conexões roscadas macho e fêmea, facilitando a montagem de diferentes componentes.",
        rosca: ['1/8"', '1/4"', '3/8"', '1/2"', '1/4" x 1/8"', '3/8" x 1/8"', '3/8" x 1/4"', '1/2" x 1/4"', '1/2" x 3/8"'],
    },

    {
        nome: "Acoplador/Luva em Latão",
        imagens: [
            "../../imagens/latao/acoplador-luva.webp",
            "../../imagens/latao/acoplador-luva(1).webp",
            "../../imagens/latao/acoplador-luva(2).webp",
        ],
        descricao: "Utilizado para unir dois componentes com rosca macho, proporcionando uma ligação roscada segura.",
        rosca: ['1/8"', '1/4"', '3/8"', '1/2"'],
    },

    {
        nome: "Acoplador/Luva com Redução em Latão",
        imagens: [
            "../../imagens/latao/acoplador-com-reducao.webp",
            "../../imagens/latao/acoplador-com-reducao(1).webp",
            "../../imagens/latao/acoplador-com-reducao(2).webp",
        ],
        descricao: "Permite unir componentes com roscas de diferentes dimensões, adaptando as conexões conforme a necessidade da instalação.",
        rosca: ['1/4" x 1/8"', '3/8" x 1/4"', '1/2" x 1/4"', '1/2" x 3/8"', '3/4" x 1/2"'],
    },


    {
        nome: "Tampão em Latão",
        imagens: [
            "../../imagens/latao/tampao.webp",
            "../../imagens/latao/tampao(1).webp",
        ],
        descricao: "Utilizado para vedar saídas e conexões roscadas, impedindo a passagem de ar",
        rosca: ['1/8"', '1/4"', '3/8"', '1/2"', '3/4"'],
    },

    {
        nome: "Bucha em Latão",
        imagens: [
            "../../imagens/latao/bucha.webp",
            "../../imagens/latao/bucha(1).webp",
            "../../imagens/latao/bucha(2).webp",
        ],
        descricao: "Permite adaptar conexões roscadas de diferentes diâmetros, facilitando a montagem de tubulações e acessórios.",
        rosca: ['1/4" x 1/8"', '3/8" x 1/8"', '3/8" x 1/4"', '1/2" x 1/4"', '1/2" x 3/8"', '3/4" x 3/8"', '3/4" x 1/2"', '1" x 3/4"'],
    },

    {
        nome: "Cotovelo 90° Macho/Fêmea em Latão",
        imagens: [
            "../../imagens/latao/cotovelo-macho-femea-latao.webp",
            "../../imagens/latao/cotovelo-macho-femea-latao(1).webp",
            "../../imagens/latao/cotovelo-macho-femea-latao(2).webp",
        ],
        descricao: "Permite conectar componentes com roscas macho e fêmea em ângulo de 90°, facilitando mudanças de direção na instalação.",
        rosca: ['1/8"', '1/4"', '3/8"', '1/2"', '3/4"'],
    },

    {
        nome: "Cotovelo 90° Fêmea/Fêmea em Latão",
        imagens: [
            "../../imagens/latao/cotovelo-femea-latao (1).webp",
            "../../imagens/latao/cotovelo-femea-latao (2).webp",
        ],
        descricao: "Conecta dois componentes com rosca macho em ângulo de 90°, permitindo mudanças de direção em tubulações.",
        rosca: ['1/8"', '1/4"', '3/8"', '1/2"', '3/4"'],
    },

    {
        nome: "T Fêmea em Latão",
        imagens: [
            "../../imagens/latao/t-latao (1).webp",
            "../../imagens/latao/t-latao (2).webp",
            "../../imagens/latao/t-latao (3).webp",
        ],
        descricao: "Permite distribuir ou derivar o fluxo em três direções, conectando componentes por meio de roscas fêmea.",
        rosca: ['1/8"', '1/4"', '3/8"', '1/2"', '3/4"'],
    },

];

// ================= DOM =====================

const gridlatao = document.getElementById("latao");

// ============= FUNÇÃO DO CARD =================

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
                        ${produto.rosca.map(rosca => `
                            <option value="${rosca.replace(/"/g, "&quot;")}">${rosca}</option>
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

latao.forEach((produto, index) => {
    gridlatao.innerHTML += criarCard(produto, index);
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
