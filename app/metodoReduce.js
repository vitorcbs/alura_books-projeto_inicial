export function somarTodosValores(livros) {
    const precoTotal = livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
    console.log(precoTotal)
    return precoTotal
}