export function exibirLivrosNaTela(listaComDesconto) {
  const listaLivrosHTML = document.getElementById("livros");
  const valorTotalLivrosHTML = document.getElementById('valor_total_livros_disponiveis')
  valorTotalLivrosHTML.innerHTML = ""
  listaLivrosHTML.innerHTML = "";
  //para cada item do array livros, ele vai adicionar na lista de livros o html abaixo
  
  listaComDesconto.forEach((livro) => {
    
    let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
    let disponibilidadePreco = livro.quantidade > 0 ? `R$${livro.preco.toFixed(2)}` : 'ESGOTADO'
    
    listaLivrosHTML.innerHTML += `
          <div class="livro">
          <img class="${disponibilidade}" src="${livro.imagem}" alt="${
      livro.alt
    }" />
          <h2 class="livro__titulo">
            ${livro.titulo}
          </h2>
          <p class="livro__descricao">${livro.autor}</p>
          <p class="livro__preco" id="preco">${disponibilidadePreco}</p>
          <div class="tags">
            <span class="tag">${livro.categoria}</span>
          </div>
        </div>
          `;
  });
}

