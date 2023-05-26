import { exibirLivrosNaTela } from "./metodoForEach.js";
import { aplicarDesconto } from "./metodoMap.js";
import { filtrarLivros } from "./metodoFilter.js";
import { ordenarPorPreço } from "./metodoSort.js";


const urlApiLivros =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";
buscaLivrosDaApi();

async function buscaLivrosDaApi() {
  const resposta = await fetch(urlApiLivros);
  const livros = await resposta.json();
  const livrosComDesconto = aplicarDesconto(livros);
  exibirLivrosNaTela(livrosComDesconto)
  filtrarLivros(livrosComDesconto)
  ordenarPorPreço(livrosComDesconto)
}


