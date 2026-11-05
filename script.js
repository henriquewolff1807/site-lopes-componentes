lucide.createIcons();

const produtos = [

  {
    nome: "Válvulas Solenóide e Bobinas",
    imagem: "imagens/valvulas-solenoide/valvula-52.webp",
    alt: "Válvula solenóide pneumática industrial",
    descricao: "Controle preciso do fluxo de ar por acionamento elétrico, ideal para automação industrial e sistemas pneumáticos",
    link: "produtos/valvulas-solenoide/valvulas-solenoide.html"
  },

  {
    nome: "Válvulas Pilotadas",
    imagem: "imagens/pilotadas/duplo-piloto-52-vias.webp",
    alt: "Válvula pilotada pneumática industrial",
    descricao: "Indicadas para sistemas lógicos que exigem acionamento da válvula através de sinal pneumático.",
    link: "produtos/valvulas-pilotadas/valvulas-pilotadas.html"
  },

  {
    nome: "Válvulas Mecânicas",
    imagem: "imagens/mecanicas/pedal-mola-52-vias-4f(2).webp",
    alt: "Válvula mecânica pneumática industrial",
    descricao: "Acionamento manual ou mecânico para controle seguro e prático do fluxo de ar comprimido.",
    link: "produtos/valvulas mecanicas/valvulas-mecanicas.html"
  },

  {
    nome: "Cilindros ISO",
    imagem: "imagens/cilindro-iso/cilindroiso.webp",
    alt: "Cilindro ISO pneumático industrial",
    descricao: "Cilindros padronizados com alta durabilidade e desempenho para aplicações industriais variadas.",
    link: "produtos/cilindro-iso/cilindro-iso.html"
  },

  {
    nome: "Cilindros Mini ISO",
    imagem: "imagens/cilindro-mini/cilindrosminiiso.webp",
    alt: "Cilindro mini ISO pneumático industrial",
    descricao: "Compacto e eficiente, ideal para sistemas com espaço reduzido sem perder performance.",
    link: "produtos/cilindro-mini/cilindro-mini-iso.html"
  },

  {
    nome: "Acessórios para Cilindros",
    imagem: "imagens/acessorios/acessorios.webp",
    alt: "Acessórios para Cilindros pneumáticos industrial",
    descricao: "Linha completa de suportes, ponteiras e fixações para montagem e melhor funcionamento dos cilindros.",
    link: "produtos/acessorios/acessorios-cilindros.html"
  },

  {
    nome: "Conjunto Preparação do Ar",
    imagem: "imagens/lubrefil/lubrefil.webp",
    alt: "Conjunto preparação de ar, filtro, regulador e lubrificador pneumático industrial",
    descricao: "Equipamentos que filtram, regulam e lubrificam o ar comprimido, garantindo maior vida útil ao sistema.",
    link: "produtos/preparacao-do-ar/preparacao-do-ar.html"
  },

  {
    nome: "Conexões Pneumáticas",
    imagem: "imagens/conexoes/conexoes.webp",
    alt: "Conexões pneumáticas industriais",
    descricao: "Conexões práticas e resistentes para montagem segura e eficiente de sistemas pneumáticos.",
    link: "produtos/conexoes/conexoes.html"
  },

  {
    nome: "Conexões Em Latão",
    imagem: "imagens/latao/latao.webp",
    alt: "Conexões em latão pneumáticas industriais",
    descricao: "Resistente à corrosão para aplicações pneumáticas e industriais.",
    link: "produtos/latao/latao.html"
  },

  {
    nome: "Tubos em Poliuretano (PU)",
    imagem: "imagens/tubos/tubos.webp",
    alt: "Tubos pneumáticos em poliuretano PU",
    descricao: "Tubos flexíveis e resistentes, ideais para condução de ar comprimido em sistemas pneumáticos.",
    link: "produtos/tubos/tubos.html"
  },

  {
    nome: "Kits de Reparo",
    imagem: "imagens/kits-reparo/reparo-belton-1.webp",
    alt: "Kits reparo de Cilindros ISO",
    descricao: "Conjunto de vedações específicas para cada modelo de cilindro, utilizado para efetuar a troca das vedações desgastadas",
    link: "produtos/kit-reparo/reparo.html"
  },
];

const productsGrid = document.getElementById('products-grid');

produtos.forEach(produto => {

  productsGrid.innerHTML += `

  <div class="product-card home-card">

    <a 
href="${produto.link}"  
class="product-image-link">


<img
src="${produto.imagem}"
alt="${produto.alt}"
class="product-image">


</a>

    <div class="product-content">

      <h3 class="product-title">
        ${produto.nome}
      </h3>

      <p class="product-description">
        ${produto.descricao}
      </p>

      <a
  href="${produto.link}"
  class="product-button">

  Ver Modelos

</a>

    </div>

  </div>

`;

});

const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalClose = document.querySelector('.modal-close');

function ativarModal() {

  document.querySelectorAll('.product-image-btn').forEach(btn => {

    btn.addEventListener('click', function () {

      const img = this.querySelector('img');

      modalImage.src = img.src;

      modal.classList.add('active');

    });

  });

}

ativarModal();

modalClose.addEventListener('click', function () {

  modal.classList.remove('active');

});

modal.addEventListener('click', function (e) {

  if (e.target === modal) {

    modal.classList.remove('active');

  }

});

document.addEventListener('keydown', function (e) {

  if (e.key === 'Escape') {

    modal.classList.remove('active');

  }

});

document.getElementById('contact-form').addEventListener('submit', function (e) {

  e.preventDefault();

  const name = document.getElementById('form-name').value.trim();

  const phone = document.getElementById('form-phone').value.trim();

  const message = document.getElementById('form-message').value.trim();

  if (name && phone && message) {

    const text =
      `Nome: ${name}
Telefone: ${phone}
Mensagem: ${message}`;

    window.open(
      `https://wa.me/5547988194176?text=${encodeURIComponent(text)}`,
      '_blank'
    );

    this.reset();

  }

});