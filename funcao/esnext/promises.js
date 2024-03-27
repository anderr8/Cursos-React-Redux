// function falarDepoisDe(segundos, frase) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(frase) // Só aceita um parâmetro
//         }, segundos * 1000)
//     })
// }

// falarDepoisDe(3, 'Que Legal!')
//     .then(frase => frase.concat('?!?'))
//     .then(outraFrase => console.log(outraFrase))


// Tratando mensagem de erro
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(frase) // Só aceita um parâmetro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Algo está errado!!!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))