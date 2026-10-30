// ============= DADOS ================

const conexoesPneumaticas = [
    {
        nome: "Conexão Reta Macho Tubo x Rosca",
        imagens: [
            "../../imagens/conexoes/reta-macho.webp",
            "../../imagens/conexoes/reta-macho(1).webp",
        ],
        descricao: "Permite conectar tubos pneumáticos a componentes com rosca fêmea, facilitando a montagem de circuitos de ar comprimido.",
        rosca: ["M5", "M6", '1/8"', '1/4"', '3/8"', '1/2"'],
        tubosPermitidos: {
            "M5": ["4mm", "6mm"],
            "M6": ["4mm", "6mm"],
            '1/8"': ["4mm", "6mm", "8mm", "10mm", "12mm"],
            '1/4"': ["4mm", "6mm", "8mm", "10mm", "12mm"],
            '3/8"': ["4mm", "6mm", "8mm", "10mm", "12mm", "16mm"],
            '1/2"': ["6mm", "8mm", "10mm", "12mm", "16mm"],
        }
    },

    {
        nome: "Conexão Reta Fêmea Tubo x Rosca",
        imagens: [
            "../../imagens/conexoes/reta-femea.webp",
            "../../imagens/conexoes/reta-femea(1).webp",
        ],
        descricao: "Permite conectar tubos pneumáticos a componentes com rosca macho, proporcionando uma ligação prática e segura.",
        rosca: ["M5", "M6", '1/8"', '1/4"', '3/8"', '1/2"'],
        tubosPermitidos: {
            "M5": ["4mm", "6mm"],
            "M6": ["4mm", "6mm"],
            '1/8"': ["4mm", "6mm", "8mm", "10mm"],
            '1/4"': ["4mm", "6mm", "8mm", "10mm", "12mm"],
            '3/8"': ["6mm", "8mm", "10mm", "12mm", "16mm"],
            '1/2"': ["6mm", "8mm", "10mm", "12mm", "16mm"],
        }
    },

    {
        nome: "Conexão Cotovelo Macho Tubo x Rosca",
        imagens: [
            "../../imagens/conexoes/cotovelo-macho.webp"
        ],
        descricao: "Realiza a conexão entre tubo pneumático e rosca fêmea em ângulo de 90°, facilitando instalações em espaços reduzidos.",
        rosca: ["M5", "M6", '1/8"', '1/4"', '3/8"', '1/2"'],
        tubosPermitidos: {
            "M5": ["4mm", "6mm"],
            "M6": ["4mm", "6mm"],
            '1/8"': ["4mm", "6mm", "8mm", "10mm", "12mm"],
            '1/4"': ["4mm", "6mm", "8mm", "10mm", "12mm"],
            '3/8"': ["4mm", "6mm", "8mm", "10mm", "12mm", "16mm"],
            '1/2"': ["6mm", "8mm", "10mm", "12mm", "16mm"],
        }
    },

    {
        nome: "Conexão Cotovelo Fêmea Tubo x Rosca",
        imagens: [
            "../../imagens/conexoes/cotovelo-femea.webp",
        ],
        descricao: "Permite conectar tubos pneumáticos a componentes com rosca macho em ângulo de 90°, otimizando o direcionamento das linhas.",
        rosca: ["M5", "M6", '1/8"', '1/4"', '3/8"', '1/2"'],
        tubosPermitidos: {
            "M5": ["4mm", "6mm"],
            "M6": ["4mm", "6mm"],
            '1/8"': ["4mm", "6mm", "8mm", "10mm"],
            '1/4"': ["4mm", "6mm", "8mm", "10mm", "12mm"],
            '3/8"': ["4mm", "6mm", "8mm", "10mm", "12mm"],
            '1/2"': ["6mm", "8mm", "10mm", "12mm"],
        }
    },

    {
        nome: "Conexão Regulador de Fluxo Tubo x Rosca",
        imagens: [
            "../../imagens/conexoes/regulador-fluxo-tubo-rosca.webp",
        ],
        descricao: "Permite ajustar a vazão de ar entre o tubo pneumático e a conexão roscada, auxiliando no controle da velocidade dos atuadores.",
        rosca: ["M5", "M6", '1/8"', '1/4"', '3/8"', '1/2"'],
        tubosPermitidos: {
            "M5": ["4mm", "6mm"],
            "M6": ["4mm", "6mm"],
            '1/8"': ["4mm", "6mm", "8mm", "10mm", "12mm"],
            '1/4"': ["4mm", "6mm", "8mm", "10mm", "12mm"],
            '3/8"': ["4mm", "6mm", "8mm", "10mm", "12mm"],
            '1/2"': ["6mm", "8mm", "10mm", "12mm"],
        }
    },

    {
        nome: "Conexão Passa Painel Tubo x Rosca",
        imagens: [
            "../../imagens/conexoes/passa-painel.webp",
        ],
        descricao: "Permite a passagem e a conexão de tubos pneumáticos através de painéis, com ligação roscada fêmea.",
        rosca: ["M5", "M6", '1/8"', '1/4"', '3/8"', '1/2"'],
        tubosPermitidos: {
            "M5": ["4mm", "6mm"],
            "M6": ["4mm", "6mm"],
            '1/8"': ["4mm", "6mm", "8mm", "10mm"],
            '1/4"': ["4mm", "6mm", "8mm", "10mm", "12mm"],
            '3/8"': ["4mm", "6mm", "8mm", "10mm", "12mm"],
            '1/2"': ["6mm", "8mm", "10mm", "12mm"],
        }
    },

    {
        nome: "Conexão União Para Painel Tubo x Tubo",
        imagens: [
            "../../imagens/conexoes/uniao-para-painel.webp",
        ],
        descricao: "Permite conectar tubos pneumáticos através de um painel, facilitando a organização e a distribuição das linhas.",
        tubo: ["4mm", "6mm", "8mm", "10mm", "12mm", "16mm"]
    },

    {
        nome: "Conexão Regulador de Fluxo Tubo x Tubo",
        imagens: [
            "../../imagens/conexoes/regulador-fluxo-tubo-tubo.webp",
        ],
        descricao: "Permite regular a vazão de ar entre dois tubos pneumáticos, contribuindo para o controle da velocidade dos movimentos pneumáticos.",
        tubo: ["4mm", "6mm", "8mm", "10mm", "12mm"]
    },



    {
        nome: "Conexão União Reta Tubo x Tubo",
        imagens: [
            "../../imagens/conexoes/uniao-reta.webp",
        ],
        descricao: "Conecta dois tubos pneumáticos em linha reta, permitindo a continuidade do circuito de ar comprimido.",
        tubo: ["4mm", "6mm", "8mm", "10mm", "12mm", "16mm"]
    },

    {
        nome: "Conexão União Reta com Redução Tubo x Tubo",
        imagens: [
            "../../imagens/conexoes/uniao-reta-com-reducao.webp",
        ],
        descricao: "Conecta tubos pneumáticos de diâmetros diferentes, permitindo a adaptação entre linhas de tamanhos distintos.",
        tubo: ["6mm x 4mm", "8mm x 4mm", "8mm x 6mm", "10mm x 6mm", "10mm x 8mm", "12mm x 8mm", "12mm x 10mm", "16mm x 12mm"],
    },

    {
        nome: 'Conexão União em "T" Tubo x Tubo',
        imagens: [
            "../../imagens/conexoes/uniao-em-t.webp"
        ],
        descricao: "Permite dividir ou reunir o fluxo de ar comprimido em três direções, conectando tubos pneumáticos.",
        tubo: ["4mm", "6mm", "8mm", "10mm", "12mm", "16mm"]
    },

    {
        nome: 'Conexão União em "T" com Redução Tubo x Tubo',
        imagens: [
            "../../imagens/conexoes/uniao-em-t-reducao.webp"
        ],
        descricao: "Permite distribuir o ar comprimido em três direções, conectando tubos de diâmetros diferentes.",
        tubo: ["6mm x 4mm", "8mm x 4mm", "8mm x 6mm", "10mm x 6mm", "10mm x 8mm", "12mm x 8mm", "12mm x 10mm", "16mm x 12mm"]
    },

    {
        nome: 'Conexão União em "T" Central Macho Tubo x Rosca',
        imagens: [
            "../../imagens/conexoes/uniao-em-t-central.webp"
        ],
        descricao: "Permite derivar uma linha pneumática por meio de uma conexão central com rosca macho, interligando tubos e componentes roscados.",
        rosca: ["M5", "M6", '1/8"', '1 / 4"', '3/8"', '1/2"'],
        tubosPermitidos: {
            "M5": ["4mm", "6mm"],
            "M6": ["4mm", "6mm"],
            '1/8"': ["4mm", "6mm", "8mm", "10mm"],
            '1/4"': ["4mm", "6mm", "8mm", "10mm", "12mm"],
            '3/8"': ["4mm", "6mm", "8mm", "10mm", "12mm"],
            '1/2"': ["6mm", "8mm", "10mm", "12mm"],
        }
    },

    {
        nome: 'Conexão União em "T" Central Fêmea Tubo x Rosca',
        imagens: [
            "../../imagens/conexoes/uniao-em-t-central-femea.webp"
        ],
        descricao: "Permite derivar uma linha pneumática por meio de uma conexão central com rosca fêmea, interligando tubos e componentes roscados.",
        rosca: ["M5", "M6", '1/8"', '1 / 4"', '3/8"', '1/2"'],
        tubosPermitidos: {
            "M5": ["4mm", "6mm"],
            "M6": ["4mm", "6mm"],
            '1/8"': ["4mm", "6mm", "8mm", "10mm"],
            '1/4"': ["4mm", "6mm", "8mm", "10mm", "12mm"],
            '3/8"': ["4mm", "6mm", "8mm", "10mm", "12mm"],
            '1/2"': ["6mm", "8mm", "10mm", "12mm"],
        }
    },

    {
        nome: 'Conexão União em "T" Lateral Macho Tubo x Rosca',
        imagens: [
            "../../imagens/conexoes/uniao-em-t-lateral.webp"
        ],
        descricao: "Permite realizar uma derivação lateral do circuito pneumático, conectando tubos a uma ligação roscada.",
        rosca: ["M5", "M6", '1/8"', '1/4"', '3/8"', '1/2"'],
        tubosPermitidos: {
            "M5": ["4mm", "6mm"],
            "M6": ["4mm", "6mm"],
            '1/8"': ["4mm", "6mm", "8mm", "10mm"],
            '1/4"': ["4mm", "6mm", "8mm", "10mm", "12mm"],
            '3/8"': ["4mm", "6mm", "8mm", "10mm", "12mm", "16mm"],
            '1/2"': ["6mm", "8mm", "10mm", "12mm", "16mm"],
        }
    },

    {
        nome: 'Conexão União em "L" Tubo x Tubo',
        imagens: [
            "../../imagens/conexoes/uniao-em-l.webp"
        ],
        descricao: "Conecta dois tubos pneumáticos em ângulo de 90°, facilitando mudanças de direção no circuito.",
        tubo: ["4mm", "6mm", "8mm", "10mm", "12mm", "16mm"]
    },

    {
        nome: 'Conexão União em "Y" Tubo x Tubo',
        imagens: [
            "../../imagens/conexoes/uniao-em-y.webp"
        ],
        descricao: "Permite dividir ou reunir o fluxo de ar em três ramificações, favorecendo a distribuição pneumática.",
        tubo: ["4mm", "6mm", "8mm", "10mm", "12mm", "16mm"]
    },

    {
        nome: 'Conexão União em "Y" com Redução Tubo x Tubo',
        imagens: [
            "../../imagens/conexoes/uniao-em-y-com-reducao.webp"
        ],
        descricao: "Permite dividir o fluxo de ar em três direções, conectando tubos de diâmetros diferentes.",
        tubo: ["6mm x 4mm", "8mm x 4mm", "8mm x 6mm", "10mm x 6mm", "10mm x 8mm", "12mm x 8mm", "12mm x 10mm"]
    },

    {
        nome: "Distribuidor com Redução Tubo x Tubo",
        imagens: [
            "../../imagens/conexoes/distribuidor-redutor.webp"
        ],
        descricao: "Distribui o ar comprimido entre diferentes linhas, permitindo conexões com tubos de diâmetros distintos.",
        tubo: ["6mm x 4mm", "8mm x 4mm", "8mm x 6mm", "10mm x 6mm", "10mm x 8mm"]
    },


    {
        nome: 'Conexão União em "X" Tubo x Tubo',
        imagens: [
            "../../imagens/conexoes/uniao-em-x.webp"
        ],
        descricao: "Permite interligar quatro linhas pneumáticas em uma única conexão, facilitando a distribuição do ar comprimido.",
        tubo: ["4mm", "6mm", "8mm", "10mm", "12mm"]
    },

    {
        nome: "Distribuidor Tubo x Tubo",
        imagens: [
            "../../imagens/conexoes/distribuidor-tubox-tubo.webp"
        ],
        descricao: "Permite distribuir o ar comprimido entre múltiplas saídas, conectando tubos pneumáticos em um único ponto",
        tubo: ["4mm", "6mm", "8mm", "10mm", "12mm"]
    },

    {
        nome: "Distribuidor Macho Tubo x Rosca",
        imagens: [
            "../../imagens/conexoes/distribuidor-tuboxrosca.webp"
        ],
        descricao: "Permite distribuir o ar comprimido para diferentes pontos do sistema por meio de conexões para tubos e roscas",
        rosca: ["M5", '1/8"', '1/4"', '3/8"'],
        tubosPermitidos: {
            "M5": ["4mm"],
            '1/8"': ["6mm", "8mm"],
            '1/4"': ["6mm", "8mm"],
            '3/8"': ["6mm", "8mm"],
        }
    },

    {
        nome: 'Conexão União em "Y" Central Macho Tubo x Rosca',
        imagens: [
            "../../imagens/conexoes/uniao-em-y-rosca-central.webp"
        ],
        descricao: "Permite realizar uma derivação em formato de Y entre tubos pneumáticos e uma conexão roscada central.",
        rosca: ["M5", "M6", '1/8"', '1/4"', '3/8"', '1/2"'],
        tubosPermitidos: {
            "M5": ["4mm", "6mm"],
            "M6": ["4mm", "6mm"],
            '1/8"': ["4mm", "6mm", "8mm", "10mm"],
            '1/4"': ["4mm", "6mm", "8mm", "10mm", "12mm"],
            '3/8"': ["4mm", "6mm", "8mm", "10mm", "12mm"],
            '1/2"': ["6mm", "8mm", "10mm", "12mm"],
        }
    },

    {
        nome: "Distribuidor Macho com Redução Tubo x Rosca",
        imagens: [
            "../../imagens/conexoes/distribuidor-rosca-redutor.webp"
        ],
        descricao: "Permite distribuir o ar comprimido entre conexões de tubos e roscas com diferentes dimensões.",
        rosca: ['1/8"', '1/4"', '3/8"'],
        tubosPermitidos: {
            '1/8"': ["4mm x 6mm"],
            '1/4"': ["8mm x 4mm", "8mm x 6mm"],
            '3/8"': ["10mm x 8mm"],
        }
    },

    {
        nome: "Válvula de Bloqueio Tubo x Tubo",
        imagens: [
            "../../imagens/conexoes/valvula-bloqueio.webp"
        ],
        descricao: "Permite interromper ou liberar manualmente a passagem de ar comprimido entre dois tubos pneumáticos.",
        tubo: ["4mm", "6mm", "8mm", "10mm", "12mm"]
    },

    {
        nome: "Conexão Redução Tipo Plug Tubo x Tubo",
        imagens: [
            "../../imagens/conexoes/reducao-tipo-plug.webp"
        ],
        descricao: "Permite adaptar conexões pneumáticas para tubos de diâmetros diferentes, facilitando a montagem de circuitos.",
        tubo: ["6mm x 4mm", "8mm x 4mm", "8mm x 6mm", "10mm x 6mm", "10mm x 8mm", "12mm x 6mm", "12mm x 8mm", "12mm x 10mm"]
    },
]

// ================= DOM =====================

const gridconexoesPneumaticas = document.getElementById("conexoes-pneumaticas");

// ============= FUNÇÃO DO CARD =================

function criarCardConexoes(produto, index) {
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

                ${produto.rosca ? `
                    <label>Rosca:</label>
                    <select class="thread-select">
                        <option value="">Selecione a rosca</option>
                        ${produto.rosca.map(rosca => `
                            <option value="${rosca.replace(/"/g, '&quot;')}">${rosca}</option>
                        `).join("")}
                    </select>

                    <label>Tubo:</label>
                    <select class="tube-select" disabled>
                        <option value="">Selecione primeiro a rosca</option>
                    </select>
                ` : ""}

                ${produto.tubo ? `
                    <label>Tamanho do tubo:</label>
                    <select class="tube-select">
                        <option value="">Selecione o tubo</option>
                        ${produto.tubo.map(tubo => `
                            <option value="${tubo}">${tubo}</option>
                        `).join("")}
                    </select>
                ` : ""}

                <button class="add-cart-button">Adicionar ao carrinho</button>

        </div>

    </div>
    `;
};

// ===================== RENDER =====================

conexoesPneumaticas.forEach((produto, index) => {
    gridconexoesPneumaticas.innerHTML += criarCardConexoes(produto, index);
});

// ============= EVENTOS ===========================

document.querySelectorAll("#conexoes-pneumaticas .product-card")
    .forEach(card => {

        const index = Number(card.dataset.index);
        const produto = conexoesPneumaticas[index];

        const seletorRosca = card.querySelector(".thread-select");
        const seletorTubo = card.querySelector(".tube-select");

        if (!seletorRosca || !seletorTubo || !produto.tubosPermitidos) return;

        seletorRosca.addEventListener("change", () => {

            const roscaSelecionada = seletorRosca.value.replace(/&quot;/g, '"');

            seletorTubo.innerHTML = `<option value="">Selecione o tubo</option>`;
            seletorTubo.disabled = true;

            if (!roscaSelecionada) return;

            const tubos = produto.tubosPermitidos[roscaSelecionada] || [];

            tubos.forEach(tubo => {
                seletorTubo.innerHTML += `<option value="${tubo}">${tubo}</option>`;
            });

            seletorTubo.disabled = false;

        });

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
    const nome = card.querySelector(".product-title").textContent.trim();

    const seletorRosca = card.querySelector(".thread-select");
    const seletorTubo = card.querySelector(".tube-select");

    const rosca = seletorRosca ? seletorRosca.value : null;
    const tubo = seletorTubo ? seletorTubo.value : null;

    let valido = true;

    if (seletorRosca && !rosca) {
        mostrarErro(seletorRosca);
        valido = false;
    } else if (seletorRosca) {
        removerErro(seletorRosca);
    }

    if (seletorTubo && !tubo) {
        mostrarErro(seletorTubo);
        valido = false;
    } else if (seletorTubo) {
        removerErro(seletorTubo);
    }

    if (!valido) {
        tremerBotao(event.target);
        return;
    }

    const detalhes = [];
    if (rosca) detalhes.push(`Rosca: ${rosca}`);
    if (tubo) detalhes.push(`Tubo: ${tubo}`);

    const itemCarrinho = {
        nome: nome,
        quantidade: 1,
        detalhes: detalhes
    };

    carrinho.push(itemCarrinho);
    salvarCarrinho();
    renderCarrinho();
    atualizarContadorCarrinho();

    if (seletorRosca) seletorRosca.value = "";
    if (seletorTubo) {
        seletorTubo.innerHTML = `<option value="">Selecione o tubo</option>`;
        seletorTubo.disabled = true;
    }

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


