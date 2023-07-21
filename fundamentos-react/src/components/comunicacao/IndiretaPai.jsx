// Comunicação Indireta #10

import React, {useState} from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props =>{

    //Pai fornecendo as próprias informações

    // let nome = '?'
    // let idade = 0
    // let nerd = false
    // function fornecerInformacoes(nomeParam, idadeParam, nerdParam){
    //     nome = nomeParam
    //     idade = idadeParam
    //     nerd = nerdParam

    //     console.log(nomeParam, idadeParam, nerdParam)

    const [a,b] = [1, 2]
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    
    // nome idade nerd
    
    // O filho irá dizer se o pai tem estas características
    // nome idade nerd 
    // function fornecerInformacoes(nome, idade, nerd){
    //     console.log(nome, idade, nerd)
    //  }

    function fornecerInformacoes(nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return(
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong></span>
                <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>

            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}