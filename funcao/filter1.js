const produtos = [
    { nome: 'Notebook', preço: 2499, frágil: true },
    { nome: 'iPad', preço: 4199, frágil: true },
    { nome: 'Copo de Vidro', preço: 12.49, frágil: true },
    { nome: 'Copo de Plástico', preço: 18.99, frágil: false }
]   

console.log(produtos.filter(function(p) {
    return false
}))

const caro = produto => produto.preço >= 500
const frágil = produto => produto.frágil

console.log(produtos.filter(caro).filter(frágil))