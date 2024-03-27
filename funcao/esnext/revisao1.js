// let e const
{
    var a = 2
    let b = 3
    console.log(b)  // Só funciona dentro 
}

console.log(a) 

// Template String
const produto = 'iPad'
console.log(`${ produto } 
é 
caro!`)  // Usando o Backticks é possível quebrar a frase.

// Destructuring

// Estrutura String
const [l, e, ...tras] = "Cod3r" // Separa as palavras
console.log(l, e, tras)

// Estrutura Array
const [x, y] = [1, 2, 3]
console.log(x, y)

// Estrutura Objeto
const [c, , d] = [1, 2, 3]
console.log(c, d)

const { idade, nome } = { nome: 'Gigi', idade: 27 }
console.log(i, nome)