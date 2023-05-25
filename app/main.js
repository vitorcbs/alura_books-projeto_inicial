import { exibirLivrosNaTela } from "./metodoForEach.js";
import { aplicarDesconto } from "./metodoMap.js";
import { filtrarLivros } from "./metodoFilter.js";


let livros = [];
const urlApiLivros =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";
buscaLivrosDaApi();

async function buscaLivrosDaApi() {
  const resposta = await fetch(urlApiLivros);
  const livros = await resposta.json();
  let livrosComDesconto = aplicarDesconto(livros);
  filtrarLivros(livrosComDesconto)

}


