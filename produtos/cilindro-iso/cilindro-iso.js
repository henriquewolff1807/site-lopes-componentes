// ===================== DADOS =====================

const cilindrosISO = [
    {
        nome: "Cilindro ISO Perfilado Dupla-ação",
        imagens: [
            "../../imagens/cilindro-iso/cilindro-iso-perfilado.webp",
        ],
        descricao: "Cilindro pneumático com corpo perfilado e canaletas para sensores, facilitando a montagem e o monitoramento do curso.",
        diametro: ["32mm", "40mm", "50mm", "63mm", "80mm", "100mm", "125mm"],
        material: ["Buna/AçoCromado", "Buna/AçoInox", "Viton/AçoCromado", "Viton/AçoInox"],
        cursoMax: 1800,
    },

    {
        nome: "Cilindro ISO Perfilado Dupla-ação Haste Passante",
        imagens: [
            "../../imagens/cilindro-iso/cilindro-iso-perfilado-haste-passante.webp",
        ],
        descricao: "Cilindro pneumático de corpo perfilado com haste passante, indicado para aplicações que exigem acionamento em ambas as extremidades.",
        diametro: ["32mm", "40mm", "50mm", "63mm", "80mm", "100mm", "125mm"],
        material: ["Buna/AçoCromado", "Buna/AçoInox", "Viton/AçoCromado", "Viton/AçoInox"],
        cursoMax: 1800,
    },


    {
        nome: "Cilindro ISO Tirantado Dupla-ação",
        imagens: [
            "../../imagens/cilindro-iso/cilindro-iso-tirantado.webp",
        ],
        descricao: "Cilindro pneumático com tubo redondo e cabeçotes fixados por tirantes, oferecendo construção robusta e resistente.",
        diametro: ["32mm", "40mm", "50mm", "63mm", "80mm", "100mm", "125mm", "160mm", "200mm", "250mm", "320mm"],
        material: ["Buna/AçoCromado", "Buna/AçoInox", "Buna/AçoInox + Tirantes Inox"],
        cursoMax: 1800,
    },


    {
        nome: "Cilindro ISO Tirantado Dupla-ação VITON",
        imagens: [
            "../../imagens/cilindro-iso/cilindro-iso-tirantado.webp",
        ],
        descricao: "Cilindro pneumático tirantado com vedações em Viton, indicado para aplicações que exigem maior resistência térmica e química.",
        diametro: ["32mm", "40mm", "50mm", "63mm", "80mm", "100mm", "125mm", "160mm", "200mm", "250mm"],
        material: ["Viton/AçoCromado", "Viton/AçoInox", "Viton/AçoInox + Tirantes Inox"],
        cursoMax: 1800,
    },

    {
        nome: "Cilindro ISO Tirantado Dupla-ação Haste Passante",
        imagens: [
            "../../imagens/cilindro-iso/cilindro-iso-tirantado-haste-passante.webp",
        ],
        descricao: "Cilindro pneumático tirantado com haste passante, indicado para aplicações que necessitam de acionamento nos dois sentidos.",
        diametro: ["32mm", "40mm", "50mm", "63mm", "80mm", "100mm", "125mm"],
        material: ["Buna/AçoCromado", "Buna/AçoInox", "Buna/AçoInox + Tirantes Inox", "Viton/AçoCromado", "Viton/AçoInox", "Viton/AçoInox + Tirantes Inox"],
        cursoMax: 1800,
    },


    {
        nome: "Cilindro ISO Mickey Mouse Dupla-ação",
        imagens: [
            "../../imagens/cilindro-iso/cilindro-iso-mickey-mouse.webp",
        ],
        descricao: "Cilindro pneumático compacto com corpo de alumínio, indicado para aplicações que exigem economia de espaço.",
        diametro: ["32mm", "40mm", "50mm", "63mm", "80mm", "100mm", "125mm"],
        material: ["Buna/AçoCromado", "Buna/AçoInox", "Viton/AçoCromado", "Viton/AçoInox"],
        cursoMax: 1800,
        canaleta: ["Sim", "Não"],
    },

    {
        nome: "Cilindro ISO Mickey Mouse Dupla-ação Haste Passante",
        imagens: [
            "../../imagens/cilindro-iso/cilindro-iso-mickey-mouse-haste-passante.webp",
        ],
        descricao: "Cilindro pneumático compacto com haste passante, indicado para aplicações que exigem economia de espaço e acionamento em ambas as extremidades.",
        diametro: ["32mm", "40mm", "50mm", "63mm", "80mm", "100mm", "125mm"],
        material: ["Buna/AçoCromado", "Buna/AçoInox", "Viton/AçoCromado", "Viton/AçoInox"],
        cursoMax: 1800,
        canaleta: ["Sim", "Não"],
    },

    {
        nome: "Cilindro ADVU Dupla-ação",
        imagens: [
            "../../imagens/cilindro-iso/cilindro-advu.webp",
        ],
        descricao: "Cilindro pneumático compacto de perfil quadrado, desenvolvido para aplicações que exigem praticidade e bom aproveitamento de espaço.",
        diametro: ["16mm", "20mm", "25mm", "32mm", "40mm", "50mm", "63mm", "80mm"],
        roscas: ["Rosca Macho", "Rosca Fêmea"],
        material: ["Buna/AçoCromado", "Buna/AçoInox", "Viton/AçoCromado", "Viton/AçoInox"],
        cursoMax: 1800
    },

    {
        nome: "Cilindro ADVU Dupla-ação Haste Passante",
        imagens: [
            "../../imagens/cilindro-iso/cilindro-advu-haste-passante.webp",
        ],
        descricao: "Cilindro pneumático compacto com haste passante, indicado para aplicações que exigem maior versatilidade de acionamento.",
        diametro: ["16mm", "20mm", "25mm", "32mm", "40mm", "50mm", "63mm", "80mm"],
        roscas: ["Rosca Macho", "Rosca Fêmea"],
        material: ["Buna/AçoCromado", "Buna/AçoInox"],
        cursoMax: 1800
    },

    {
        nome: "Cilindro ADN Dupla-ação",
        imagens: [
            "../../imagens/cilindro-iso/cilindro-adn.webp",
        ],
        descricao: "Cilindro pneumático compacto e versátil, indicado para automação industrial e aplicações com restrição de espaço.",
        diametro: ["16mm", "20mm", "25mm", "32mm", "40mm", "50mm", "63mm", "80mm", "100mm"],
        roscas: ["Rosca Macho", "Rosca Fêmea"],
        material: ["Buna/AçoCromado", "Buna/AçoInox", "Viton/AçoCromado", "Viton/AçoInox"],
        cursoMax: 1800
    },

    {
        nome: "Cilindro ADN Dupla-ação Haste Passante",
        imagens: [
            "../../imagens/cilindro-iso/cilindro-adn-haste-passante.webp",
        ],
        descricao: "Cilindro pneumático compacto com haste passante, indicado para automação e aplicações que exigem acionamento em ambas as extremidades.",
        diametro: ["16mm", "20mm", "25mm", "32mm", "40mm", "50mm", "63mm", "80mm", "100mm"],
        roscas: ["Rosca Macho", "Rosca Fêmea"],
        material: ["Buna/AçoCromado", "Buna/AçoInox"],
        cursoMax: 1800
    },

    {
        nome: "Cilindro SDA Dupla-ação",
        imagens: [
            "../../imagens/cilindro-iso/cilindro-sda.webp",
            "../../imagens/cilindro-iso/cilindro-sda(1).webp"
        ],
        descricao: "Cilindro pneumático compacto e leve, indicado para aplicações com espaço reduzido e montagem simplificada.",
        diametro: ["12mm", "16mm", "20mm", "25mm", "32mm", "40mm", "50mm", "63mm", "80mm", "100mm"],
        roscas: ["Rosca Macho", "Rosca Fêmea"],
        material: ["Buna/AçoCromado", "Buna/AçoInox"],
        cursoMax: 1800
    },
]

// ===================== DOM =====================

const gridCilindrosISO = document.getElementById("cilindros-iso")

// ===================== FUNÇÃO DO CARD =====================

function criarCardCilindro(produto, index) {
    return `

    <div class="product-card product-card-horizontal" data-index="${index}">

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

        </div > 

        <div class="product-content">

            <h3 class="product-title">${produto.nome}</h3>

            <p class="products-description">${produto.descricao}</p>

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

        ${produto.roscas ? `
            <p class="option-label">Rosca</p>
            <select class="rosca-select thread-select">
                <option value="">Selecione a rosca</option>
                ${produto.roscas.map(rosca => `
                    <option value="${rosca}">${rosca}</option>
                `).join("")}
            </select>
        ` : ""}

        ${produto.canaleta ? `
            <p class="option-label">Canaleta</p>
            <select class="canaleta-select thread-select">
                <option value="">Canaleta para sensor</option>
                ${produto.canaleta.map(canaleta => `
                    <option value="${canaleta}">${canaleta}</option>
                `).join("")}   
            </select>
        ` : ""}

            <p class="option-label">Curso (mm)</p>
            <input
                type="number"
                min="1"
                max="${produto.cursoMax}"
                placeholder="Digite o curso desejado (máx ${produto.cursoMax}mm)"
                class="curso-input thread-select">

            <button class="add-cart-button">Adicionar ao carrinho</button>

        </div>

    </div>
    `;
}


//================= RENDER ====================

cilindrosISO.forEach((produto, index) => {
    gridCilindrosISO.innerHTML += criarCardCilindro(produto, index);
});

//================= CARROSEL ====================

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

// ============ VALIDAÇÃO + CARRINHO =============

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
    const produto = cilindrosISO[index];

    const seletorDiametro = card.querySelector(".diametro-select");
    const seletorMaterial = card.querySelector(".material-select");
    const seletorRosca = card.querySelector(".rosca-select");
    const seletorCanaleta = card.querySelector(".canaleta-select");
    const inputCurso = card.querySelector(".curso-input");

    const diametro = seletorDiametro.value;
    const material = seletorMaterial.value;
    const rosca = seletorRosca ? seletorRosca.value : null;
    const canaleta = seletorCanaleta ? seletorCanaleta.value : null;
    const curso = inputCurso.value;

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

    if (seletorRosca && !rosca) {
        mostrarErro(seletorRosca);
        valido = false;
    } else if (seletorRosca) {
        removerErro(seletorRosca);
    }

    if (seletorCanaleta && !canaleta) {
        mostrarErro(seletorCanaleta);
        valido = false;
    } else if (seletorCanaleta) {
        removerErro(seletorCanaleta);
    }

    if (!curso) {
        mostrarErro(inputCurso);
        valido = false;
    } else if (curso < 1 || curso > produto.cursoMax) {
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

    if (rosca) detalhes.push(`Rosca: ${rosca}`);
    if (canaleta) detalhes.push(`Canaleta: ${canaleta}`);

    const itemCarrinho = {
        nome: produto.nome,
        quantidade: 1,
        detalhes: detalhes
    };

    carrinho.push(itemCarrinho);
    salvarCarrinho();
    renderCarrinho();
    atualizarContadorCarrinho();

    seletorDiametro.value = "";
    seletorMaterial.value = "";
    if (seletorRosca) seletorRosca.value = "";
    if (seletorCanaleta) seletorCanaleta.value = "";
    inputCurso.value = "";

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
