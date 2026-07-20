const produtos = [

    {
        nome: "Válvula 5/2 vias Piloto/Mola",

        imagens: [
            "../../imagens/pilotadas/piloto-mola-52-vias.WebP",
            "../../imagens/pilotadas/piloto-mola-52-vias(1).WebP"
        ],

        descricao: "Válvula pilotada 5/2 vias com retorno por mola, ideal para acionamento eficiente de cilindros dupla ação.",

        roscas: [
            '1/8',
            '1/4',
            '3/8',
            '1/2',
            '3/4',
            '1',
        ]

    },


    {
        nome: "Válvula 5/2 vias Duplo Piloto",

        imagens: [
            "../../imagens/pilotadas/duplo-piloto-52-vias.WebP",
            "../../imagens/pilotadas/duplo-piloto-52-vias(1).WebP",
            "../../imagens/pilotadas/duplo-piloto-52-vias(2).WebP",
            "../../imagens/pilotadas/duplo-piloto-52-vias(3).WebP"
        ],

        descricao: "Válvula pilotada 5/2 vias duplo piloto, indicada para controle pneumático preciso e aplicações industriais.",

        roscas: [
            '1/8',
            '1/4',
            '3/8',
            '1/2',
            '3/4',
            '1',
        ]

    },


    {
        nome: "Válvula 5/3 vias Duplo Piloto Centro Fechado",

        imagens: [
            "../../imagens/pilotadas/duplo-piloto-53-vias-centro-fechado.WebP",
            "../../imagens/pilotadas/duplo-piloto-53-vias-centro-fechado(1).WebP",
            "../../imagens/pilotadas/duplo-piloto-53-vias-centro-fechado(2).WebP",
            "../../imagens/pilotadas/duplo-piloto-53-vias-centro-fechado(3).WebP"
        ],

        descricao: "Válvula pilotada 5/3 vias centro fechado, ideal para manter o cilindro parado com segurança.",

        roscas: [
            '1/8',
            '1/4',
            '3/8',
            '1/2',
            '3/4',
            '1',
        ]

    },

    {
        nome: "Válvula 2/2 vias ANGULAR",

        imagens: [
            "../../imagens/pilotadas/angular-piloto-mola-22-vias.WebP",
            "../../imagens/pilotadas/angular-piloto-mola-22-vias(1).WebP",
            "../../imagens/pilotadas/angular-piloto-mola-22-vias(2).WebP",
            "../../imagens/pilotadas/angular-piloto-mola-22-vias(3).WebP",
            "../../imagens/pilotadas/angular-piloto-mola-22-vias(4).WebP",
        ],

        descricao: "Válvula pilotada 5/3 vias centro fechado, ideal para manter o cilindro parado com segurança.",

        roscas: [
            '1/2',
            '3/4',
            '1',
            '1 1/4',
            '1 1/2',
            '2',
            '2 1/2',
            '3'
        ]

    },


];

// ===================== DOM =====================

const grid = document.getElementById("valvulas-pilotadas");

console.log(grid);

produtos.forEach((produto, index) => {

    grid.innerHTML += `

        <div class="product-card" data-index="${index}">

            <div class="product-image-btn">

                <button class="prev-image">
                    ←
                </button>

                <img
                    src="${produto.imagens[0]}"
                    alt="${produto.nome}. ${produto.descricao}"
                    class="product-image">

                <button class="next-image">
                    →
                </button>

                <div class="image-dots">

                    ${produto.imagens.map((img, i) => `

                    <span 
                    class="dot ${i === 0 ? "active" : ""}"
                    data-index="${i}">
                    </span>

                    `).join("")}

                </div>  

            </div>


            <div class="product-content">

                    <h3 class="product-title">
                    ${produto.nome}
                    </h3>

                    <p class="product-description">
                    ${produto.descricao}
                    </p>


                <div class="options-row">

                    <div class="option-group">

                        <p class="option-label">
                        Rosca
                        </p>

                        <select class="thread-select">

                            <option value="">
                            Selecione
                            </option>

                            ${produto.roscas.map(rosca => `

                            <option value="${rosca}">
                            ${rosca}"
                            </option>

                            `).join("")}


                        </select>

                    </div>

                </div>

                <button class="add-cart-button">
                Adicionar ao carrinho
                </button>

            </div>

        </div>

        `
});

// ===================== CARROSSEL =====================

document.querySelectorAll(".product-card").forEach(card => {


    const indexProduto = card.dataset.index;


    const produto = produtos[indexProduto];


    let imagemAtual = 0;



    const imagem = card.querySelector(".product-image");


    const botaoAnterior = card.querySelector(".prev-image");


    const botaoProximo = card.querySelector(".next-image");


    const bolinhas = card.querySelectorAll(".dot");



    function atualizarImagem() {


        imagem.src = produto.imagens[imagemAtual];



        bolinhas.forEach((dot, index) => {


            dot.classList.remove("active");


            if (index === imagemAtual) {

                dot.classList.add("active");

            }


        });


    }




    botaoProximo.addEventListener("click", (event) => {


        event.stopPropagation();


        imagemAtual++;



        if (imagemAtual >= produto.imagens.length) {

            imagemAtual = 0;

        }


        atualizarImagem();


    });





    botaoAnterior.addEventListener("click", (event) => {


        event.stopPropagation();


        imagemAtual--;



        if (imagemAtual < 0) {

            imagemAtual = produto.imagens.length - 1;

        }


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


// ===================== EVENTOS DOS PRODUTOS =====================

document.querySelectorAll(".product-card").forEach(card => {

    const seletorRosca =
        card.querySelector(".thread-select");

    seletorRosca.addEventListener("change", () => {

        removerErro(seletorRosca);

        const button = card.querySelector(".add-cart-button");

        button.classList.remove("button-error");

    });

});


// ===================== FUNCTION =====================
function tremerBotao(button) {

    button.classList.add("button-error");

    setTimeout(() => {

        button.classList.remove("button-error");

    }, 300);

}


function mostrarErro(campo) {
    campo.classList.add("input-error");
}

function removerErro(campo) {
    campo.classList.remove("input-error");
}



// ===================== ADD TO CART =====================
document.addEventListener("click", (event) => {

    if (!event.target.classList.contains("add-cart-button")) return;

    const card = event.target.closest(".product-card");
    const index = card.dataset.index;

    let valido = true;

    const produto = produtos[index];

    const seletorRosca = card.querySelector(".thread-select");
    const rosca = seletorRosca.value;

    // Validação da rosca
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
        nome: produto.nome,
        quantidade: 1,
        detalhes: [
            `Rosca: ${rosca}`
        ]
    };

    carrinho.push(itemCarrinho);

    salvarCarrinho();
    renderCarrinho();
    atualizarContadorCarrinho();

    // Resetar
    seletorRosca.value = "";

});

// ===================== ZOOM IMAGEM =====================

const modal = document.querySelector(".image-modal");
const modalImage = document.querySelector(".modal-image");
const closeModal = document.querySelector(".close-modal");

let imagensModal = [];
let indexModal = 0;

// Atualiza a imagem exibida no modal
function atualizarModalImagem() {
    modalImage.src = imagensModal[indexModal];
}

// Abre o modal
function abrirModal(imagens, indexInicial) {
    imagensModal = imagens;
    indexModal = indexInicial;

    atualizarModalImagem();

    modal.style.display = "flex";

    setTimeout(() => {
        modal.classList.add("active");
    }, 10);
}

// ===================== ABRIR MODAL =====================

document.addEventListener("click", (event) => {

    const imagemClicada = event.target.closest(".product-image-btn img");

    if (!imagemClicada) return;

    const card = imagemClicada.closest(".product-card");

    const index = card.dataset.index;

    const produto = produtos[index];

    const imagemAtualSrc = imagemClicada.src;

    const indexInicial = produto.imagens.findIndex(img =>
        imagemAtualSrc.includes(img.split("/").pop())
    );

    abrirModal(produto.imagens, indexInicial >= 0 ? indexInicial : 0);

});

// ===================== PRÓXIMA IMAGEM =====================

document.querySelector(".modal-next").addEventListener("click", () => {

    indexModal = (indexModal + 1) % imagensModal.length;

    atualizarModalImagem();

});

// ===================== IMAGEM ANTERIOR =====================

document.querySelector(".modal-prev").addEventListener("click", () => {

    indexModal = (indexModal - 1 + imagensModal.length) % imagensModal.length;

    atualizarModalImagem();

});

// ===================== FECHAR MODAL =====================

closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

    setTimeout(() => {
        modal.style.display = "none";
    }, 300);

});

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.classList.remove("active");

        setTimeout(() => {
            modal.style.display = "none";
        }, 300);

    }

});
