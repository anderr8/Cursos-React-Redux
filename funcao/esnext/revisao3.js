// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj)) // Retorna uma Matriz, um Array dentro de outro Array

// Melhorias no Notação Literal
const nome = 'Gigi,'
const pessoa = {
    nome,
    ola() {
        return 'hey guys!'
    }
} 

console.log(pessoa.nome, pessoa.ola())

//Class
class Animal {}
class Cachorro extends Animal {
    latir() {
        return 'Au Au!'
    }
}

console.log(new Cachorro().latir())