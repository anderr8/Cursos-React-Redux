import React from 'react'

export default (props) => {
/*    
    const min = props.min
    const max = props.max
*/
    // Operador Destruct:
    const { min, max } = props

    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return(
        <div>
            <h2>Valor Aleátorio</h2>
            <p><strong>Valor Mínimo: </strong> {min} </p>
            <p><strong>Valor Máximo: </strong> {max} </p>
            <p><strong>Valor Escolhido: </strong> {aleatorio} </p>
        </div>
    )
}