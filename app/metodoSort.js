import { exibirLivrosNaTela } from "./metodoForEach.js";

export function ordenarPorPreço(livros) { //recebe o array de livros
  let btnOrderPreco = document.getElementById("btnOrdenarPorPreco");  //encontra o botão de ordenação
  btnOrderPreco.addEventListener("click", () => {  //adiciona o event listner de click ao botao
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco); //variavel LivrosOrdenados recebe o valor após a ordenação vinda dos livros recebidos
    exibirLivrosNaTela(livrosOrdenados);  //exibe os livros ordenados na tela
  });
}
