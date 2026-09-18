//=========== DADOS ===============

const cilindrosMiniISO = [
    {
        nome: "Cilindro Mini ISO Dupla-ação",
        imagens: ["../../imagens/cilindro-mini/cilindro-mini-iso.webp"],
        descricao: "Cilindro compacto de dupla ação, ideal para aplicações pneumáticas com espaço reduzido. ",
        diametro: ["8mm", "10mm", "12mm", "16mm", "20mm", "25mm", "32mm", "40mm"],
        material: ["Buna/AçoCromado", "Buna/AçoInox"],
    },

    {
        nome: "Cilindro Mini ISO Dupla-ação com Regulagem de Amortecimento",
        imagens: ["../../imagens/cilindro-mini/cilindro-mini-iso-com-regulagem-de-amortecimento.webp"],
        descricao: "Cilindro de dupla ação com regulagem de amortecimento, proporcionando maior controle no final do curso.",
        diametro: ["16mm", "20mm", "25mm", "32mm", "40mm"],
        material: ["Buna/AçoCromado", "Buna/AçoInox"],
    },

    {
        nome: "Cilindro Mini ISO Simples-ação com Retorno por Mola",
        imagens: ["../../imagens/cilindro-mini/cilindro-mini-iso-simples-acao.webp"],
        descricao: "Cilindro compacto de simples ação com retorno por mola para aplicações pneumáticas.",
        diametro: ["8mm", "10mm", "12mm", "16mm", "20mm", "25mm", "32mm"],
        material: ["Buna/AçoCromado", "Buna/AçoInox"],
    },

    {
        nome: "Cilindro Mini ISO Dupla-ação Haste Passante",
        imagens: ["../../imagens/cilindro-mini/cilindro-mini-iso-haste-passante.webp"],
        descricao: "Cilindro de dupla ação com haste passante, indicado para aplicações que exigem acionamento nos dois lados.",
        diametro: ["16mm", "20mm", "25mm", "32mm"],
        material: ["Buna/AçoCromado", "Buna/AçoInox"],
    },
]

// ===================== DOM =====================

const gridMiniISO = document.getElementById("cilindros-mini-iso");


// ===================== FUNÇÃO DO CARD =====================

function criarCardMiniISO(produto, index) {
    return `

    <div class="product-card product-card-horizontal" data-index="${index}">

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

            <p class="option-label">Diâmetro</p>
            <select class="diametro-select thread-select">
                <option value="">Selecione o diâmetro</option>
                ${produto.diametro.map(d => `
                    <option value="${d}">${d}</option>
                `).join("")}
            </select>

            <p class="option-label">Material</p>
            <select class="material-select thread-select">
                <option value="">Selecione o material</option>
                ${produto.material.map(m => `
                    <option value="${m}">${m}</option>
                `).join("")}
            </select>

            <p class="option-label">Curso (mm)</p>
            <input
                type="number"
                min="1"
                max="1800"
                placeholder="Selecione o diâmetro primeiro"
                class="curso-input thread-select"
                disabled>

            <button class="add-cart-button">Adicionar ao carrinho</button>

        </div>

    </div>
    `;
}


// ===================== RENDER =====================

cilindrosMiniISO.forEach((produto, index) => {
    gridMiniISO.innerHTML += criarCardMiniISO(produto, index);
});


// ===================== LÓGICA DO DIÂMETRO =====================

document.querySelectorAll("#cilindros-mini-iso .product-card").forEach(card => {

    const seletorDiametro = card.querySelector(".diametro-select");
    const inputCurso = card.querySelector(".curso-input");

    seletorDiametro.addEventListener("change", () => {

        const diametro = seletorDiametro.value;

        if (!diametro) {
            inputCurso.disabled = true;
            inputCurso.placeholder = "Selecione o diâmetro primeiro";
            return;
        }

        inputCurso.disabled = false;

        if (diametro === "8mm" || diametro === "10mm") {
            inputCurso.min = 10;
            inputCurso.max = 100;
            inputCurso.placeholder = "Digite o curso (10mm a 100mm)";
        } else {
            inputCurso.min = 1;
            inputCurso.max = 1800;
            inputCurso.placeholder = "Digite o curso (máx 1800mm)";
        }

        inputCurso.value = "";
        removerErro(inputCurso);

    });

});


// ===================== CARROSSEL =====================

document.querySelectorAll("#cilindros-mini-iso .product-card").forEach(card => {

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

    if (!card.closest("#cilindros-mini-iso")) return;

    const seletorDiametro = card.querySelector(".diametro-select");
    const seletorMaterial = card.querySelector(".material-select");
    const inputCurso = card.querySelector(".curso-input");

    const diametro = seletorDiametro.value;
    const material = seletorMaterial.value;
    const curso = inputCurso.value;

    let cursoMin;
    let cursoMax;

    if (diametro === "8mm" || diametro === "10mm") {
        cursoMin = 10;
        cursoMax = 100;
    } else {
        cursoMin = 1;
        cursoMax = 1800;
    }

    let valido = true;

    if (!diametro) {
        mostrarErro(seletorDiametro);
        valido = false;
    } else {
        removerErro(seletorDiametro);
    }

    if (!material) {
        mostrarErro(seletorMaterial);
        valido = false;
    } else {
        removerErro(seletorMaterial);
    }

    if (!curso) {
        mostrarErro(inputCurso);
        valido = false;
    } else if (Number(curso) < cursoMin || Number(curso) > cursoMax) {
        mostrarErro(inputCurso);
        valido = false;
    } else {
        removerErro(inputCurso);
    }

    if (!valido) {
        tremerBotao(event.target);
        return;
    }

    const detalhes = [
        `Diâmetro: ${diametro}`,
        `Material: ${material}`,
        `Curso: ${curso}mm`,
    ];

    const itemCarrinho = {
        nome: cilindrosMiniISO[card.dataset.index].nome,
        quantidade: 1,
        detalhes: detalhes
    };

    carrinho.push(itemCarrinho);
    salvarCarrinho();
    renderCarrinho();
    atualizarContadorCarrinho();

    seletorDiametro.value = "";
    seletorMaterial.value = "";
    inputCurso.value = "";
    inputCurso.disabled = true;
    inputCurso.placeholder = "Selecione o diâmetro primeiro";

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



