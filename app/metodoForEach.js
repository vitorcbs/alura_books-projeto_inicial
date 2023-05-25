export function exibirLivrosNaTela(listaComDesconto) {
  const listaLivrosHTML = document.getElementById("livros");
  listaLivrosHTML.innerHTML = "";
  //para cada item do array livros, ele vai adicionar na lista de livros o html abaixo
  listaComDesconto.forEach((livro) => {
    listaLivrosHTML.innerHTML += `
          <div class="livro">
          <img class="livro__imagens" src="${livro.imagem}" alt="${
      livro.alt
    }" />
          <h2 class="livro__titulo">
            ${livro.titulo}
          </h2>
          <p class="livro__descricao">${livro.autor}</p>
          <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
          <div class="tags">
            <span class="tag">${livro.categoria}</span>
          </div>
        </div>
          `;
  });
}
