const _ = require('lodash')

const alunos = [{
    nome: 'Anderson',
    nota: 10
}, {
    nome: 'Giovanna',
    nota: 10
}, {
    nome: 'Jéssica',
    nota: 7.6
}, {
    nome: 'Melissa',
    nota: 8.7
}]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log(media)