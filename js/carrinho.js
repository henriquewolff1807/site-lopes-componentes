

// ===================== CARRINHO =====================

const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// ===================== RENDER CARRINHO =====================

function renderCarrinho() {

    const lista = document.getElementById("carrinho-lista");

if (!lista) return;

lista.innerHTML = "";


    if (carrinho.length === 0) {

        lista.innerHTML = `
            <li id="carrinho-vazio">
                Seu carrinho está vazio
            </li>
        `;

        return;
    }


    carrinho.forEach((item, index) => {


        lista.innerHTML += `

        <li class="cart-item">

            <h3 class="cart-item-title">
                ${item.nome}
            </h3>


            ${item.detalhes.map(detalhe => `

                <p>
                    ${detalhe}
                </p>

            `).join("")}


            <div class="cart-quantity">

                <button class="quantity-minus" data-index="${index}">
    -
</button>


<input 
    class="quantity-input"
    type="number"
    min="1"
    value="${item.quantidade}"
    data-index="${index}"
>


<button class="quantity-plus" data-index="${index}">
    +
</button>

            </div>


           <button class="remove-item" data-index="${index}">
    <img 
        class="trash-icon"
        width="20"
        height="20"
        src="https://img.icons8.com/small/20/fa314a/filled-trash.png"
        alt="trash">
</button>


        </li>

        `;

    });

}



// ===================== CONTADOR =====================

function atualizarContadorCarrinho(){


    const cartCount = document.querySelector(".cart-count");

    const cartTotalItems = document.querySelector(".cart-total-items");



    let total = 0;



    carrinho.forEach((item)=>{


        total += item.quantidade;


    });



    if(cartCount){

        cartCount.innerText = total;

    }


    if(cartTotalItems){

        cartTotalItems.innerText = total;

    }


}
// ===================== CART UI =====================
document.addEventListener("DOMContentLoaded", () => {

    const cartButton = document.querySelector(".cart-button");
    const cartSidebar = document.getElementById("cart-sidebar");

    renderCarrinho();

    atualizarContadorCarrinho();


    if(cartButton){

    cartButton.addEventListener("click", (event) => {
        event.stopPropagation();

        cartSidebar.style.right = "0";
    });

    }

    document.addEventListener("click", (event) => {

        const clicouNoBotao = event.target.closest(".cart-button");

        const clicouNoCarrinho = cartSidebar.contains(event.target);

        const clicouNaQuantidade = event.target.closest(".quantity-plus") || 
                           event.target.closest(".quantity-minus");
        const clicouNaRemocao = event.target.closest(".remove-item");


       if (!clicouNoBotao && !clicouNoCarrinho && !clicouNaQuantidade && !clicouNaRemocao) {
    cartSidebar.style.right = "-400px";
}

    });

});

// ===================== DIGITAR QUANTIDADE =====================

document.addEventListener("change", (event) => {

    if (!event.target.classList.contains("quantity-input")) return;


    const index = event.target.dataset.index;

    let quantidade = Number(event.target.value);


    if (quantidade < 1 || isNaN(quantidade)) {

        quantidade = 1;

    }


    carrinho[index].quantidade = quantidade;


    salvarCarrinho();

    renderCarrinho();

    atualizarContadorCarrinho();

});     

// ===================== INICIAR CARRINHO =====================

renderCarrinho();

atualizarContadorCarrinho();   

function salvarCarrinho() {

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

}

// ===================== ALTERAR QUANTIDADE =====================

document.addEventListener("click", (event) => {


    if (!event.target.classList.contains("quantity-plus") &&
        !event.target.classList.contains("quantity-minus")) {

        return;
    }

    const index = event.target.dataset.index;

    if (event.target.classList.contains("quantity-plus")) {

    carrinho[index].quantidade++;

    salvarCarrinho();

}


if (event.target.classList.contains("quantity-minus")) {

    if (carrinho[index].quantidade > 1) {

        carrinho[index].quantidade--;

        salvarCarrinho();

    }

}

renderCarrinho();

atualizarContadorCarrinho();

});

// ===================== REMOVER PRODUTO =====================

document.addEventListener("click", (event) => {

   if (!event.target.closest(".remove-item")) return;

    const index = event.target.closest(".remove-item").dataset.index;

    carrinho.splice(index, 1);

    salvarCarrinho();

    renderCarrinho();

atualizarContadorCarrinho();    

});

// ===================== LIMPAR CARRINHO =====================

document.addEventListener("click", (event) => {


    if (!event.target.classList.contains("clear-cart")) return;


    carrinho.length = 0;


    localStorage.removeItem("carrinho");


    renderCarrinho();

    atualizarContadorCarrinho();


});

// ===================== FINALIZAR ORÇAMENTO =====================

document.addEventListener("click", (event) => {


    if (!event.target.classList.contains("finish-budget")) return;



    if (carrinho.length === 0) {

        alert("Seu carrinho está vazio");

        return;

    }



    let mensagem = 
    "Olá, gostaria de solicitar um orçamento:%0A%0A";



    carrinho.forEach((item, index) => {


        mensagem += 
        `${index + 1} - ${item.nome}%0A`;


        item.detalhes.forEach((detalhe)=>{


            mensagem += 
            `• ${detalhe}%0A`;


        });



        mensagem += 
        `• Quantidade: ${item.quantidade}%0A%0A`;


    });



    mensagem += 
    "Aguardo retorno, obrigado!";



    const telefone = "5547988194176";


    const url =
    `https://wa.me/${5547988194176}?text=${mensagem}`;



    window.open(url, "_blank");


    // LIMPAR CARRINHO APÓS ENVIAR ORÇAMENTO

carrinho.length = 0;

salvarCarrinho();

renderCarrinho();

atualizarContadorCarrinho();

});