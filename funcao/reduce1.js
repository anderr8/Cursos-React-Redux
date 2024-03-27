const alunos = [
    { nome: "Gigi", nota: 10, bolsista: true },
    { nome: "Caio", nota: 7.3, bolsista: false },
    { nome: "Jéssica", nota: 9.2, bolsista: true },
    { nome: "Natasha", nota: 8.7, bolsista: false }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10) // Valor inicial 10

console.log(resultado)