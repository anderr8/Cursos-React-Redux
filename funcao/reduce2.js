const alunos = [
    { nome: "Gigi", nota: 10, bolsista: true },
    { nome: "Caio", nota: 7.3, bolsista: false },
    { nome: "Jéssica", nota: 9.2, bolsista: true },
    { nome: "Natasha", nota: 8.7, bolsista: false }
]

// Desafio 1: Todos os alunos são bolsistas?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?

// const algumBolsista = (resultado, bolsista) => resultado || bolsista
// console.log(alunos.map(a => a.bolsista)) // Retorna um array

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista)) 