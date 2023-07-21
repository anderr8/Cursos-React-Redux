// Desafio da Mega Sena #1

function gerarNumeroNaoContido(min, max, array){
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
    return array.includes(aleatorio) ? 
    gerarNumeroNaoContido(min, max, array) :
    aleatorio
}


function gerarNumeros(qtde){
    const numeros = Array(qtde)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums)
            console.log([ ...nums, novoNumero])
            return [ ...nums, novoNumero]
        }, [])
        //Ordem Decrescente
        .sort((n1, n2) => n2 - n1) 

    // return [3, 13, 43, 51, 53, 55, 59]

    return numeros

}

console.log(gerarNumeros(7))


//console.log(gerarNumeroNaoContido(1, 5, [1, 2, 3]))
//console.log(gerarNumeroNaoContido(1, 60, [0, 0, 0, 0, 0, 0]))