let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // Return implícito
console.log(dobro(Math.PI))

ola = () => 'Olá'
ola = _ => 'Olá' // _ possui um parâmetro 
console.log(ola())