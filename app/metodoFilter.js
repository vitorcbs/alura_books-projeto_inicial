import { exibirLivrosNaTela } from "./metodoForEach.js";

export function filtrarLivros(livrosSemFiltro) {
  const botoesFiltro = document.querySelectorAll(".btn");  //pega todos botoes com a classe .btn
  const listaLivros = [];  //cria uma lista que vai retornar depois

  botoesFiltro.forEach((btn) => {  //para cada botão achado...
    btn.addEventListener("click", () => {  //vai inserir um eventListener de click
      listaLivros.length = 0 //limpa a lista sempre que fizer o click em um botão diferente
      const elementoBtn = document.getElementById(btn.id);  //vai puxar o botão pelo id na hora do click
      const categoriaBotao = elementoBtn.value;  //vai pegar o value do botão achado pelo id
      const livrosFiltrados = livrosSemFiltro.filter(
        (livro) => livro.categoria === categoriaBotao //procura livro que tenha categoria pega no categoriaBotao
      ); 
      listaLivros.push(...livrosFiltrados); //adiciona os livros filtrados na lista de livros que vai retornar
      console.log(listaLivros);
      exibirLivrosNaTela(listaLivros)  //retorna a lista com os livros filtrados
    });
  });
}
