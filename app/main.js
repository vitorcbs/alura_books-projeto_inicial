let livros = []
const urlApiLivros = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
const listaLivrosHTML = document.getElementById('livros')
buscaLivrosDaApi()


async function buscaLivrosDaApi() {
    const resposta = await fetch(urlApiLivros)
    livros = await resposta.json()
    exibirLivrosNaTela(livros)
}

function exibirLivrosNaTela(listaDeLivros){ //para cada item do array livros, ele vai adicionar na lista de livros o html abaixo
    listaDeLivros.forEach(livro => {
        listaLivrosHTML.innerHTML += `
        <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${livro.preco}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
    })
}