const produtos = [

{
    nome: "Válvula Pilotada 5/2 vias Piloto/Mola",

    imagens: [
        "../../imagens/pilotadas/piloto-mola-52-vias.WebP",
        "../../imagens/pilotadas/piloto-mola-52-vias(1).WebP"
    ],

    descricao: "Válvula 5/2 vias pilotada com retorno por mola, ideal para acionamento de cilindros de dupla ação.",

    roscas: [
        '1/8',
        '1/4',
        '3/8',
        '1/2',
        '3/4',
        '1',
    ]

}

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
            src"${produto.imagens[0]}"
            alt="${produto.nome}. ${produto.descricao}"
            class="product-image">

        <button class="next-image"
         →
         </button>

        </div>

        </div>

        `

    });


