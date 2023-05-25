export function aplicarDesconto(livros) {
  const desconto = 0.3;
  let livrosComDesconto = livros.map(livro => {
    return { ...livro, preco: livro.preco - (livro.preco * desconto) }; //separa os elementos do objeto livro, captura o preco e muda o valor
  });
  return livrosComDesconto
}
