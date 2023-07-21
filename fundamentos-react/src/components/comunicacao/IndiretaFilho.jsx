// Comunicação Indireta #10
// O filho irá fornecer as informações do pai.

import React from 'react'


export default props =>{
    const cb = props.quandoClicar

    // Gerando Uma Idade aleatória
    // const min = 50
    // const max = 70
    // const gerarIdade = () => parseInt(Math.random() * (max - min)) + min

    const gerarIdade = () => parseInt(Math.random() * (20) + 50)
    const gerarNerd = () => Math.random() > 0.5


    return(
        // e = evento
        // _ underline ignora o e de evento
    <div>
        {/* 
        <div>Filho</div>
        <button onClick={
            function(e){
                props.quandoClicar('Peter', 53, true)
            }
        }>
            Fornecer Informações
        </button> 
        */}

        {/* <div>Filho</div>
        <button onClick={_ => props.quandoClicar('Peter', 53, true)}> 
            Fornecer Informações
        </button> */}
        

        <button onClick={_ => cb('Peter', gerarIdade(), gerarNerd())}>
            Fornecer Informações
        </button> 
        
    </div>
    )
}