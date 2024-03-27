// Operador ... rest(juntar)/spread(espalhar)

// Usar spread com objeto

const funcionario = { nome: 'gigi', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// Usar spread com array

const groupA = ['ander', 'gigi', 'felipão']
const groupFinal = ['Natasha', ...groupA, 'Rafaella']
console.log(groupFinal)