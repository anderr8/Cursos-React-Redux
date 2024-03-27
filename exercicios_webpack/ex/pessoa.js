// Exercício: 5

// Sistema de módulos ECMAScript2015
export default class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    toString() {
        return `Pessoa: ${ this.nome }`
    }
}