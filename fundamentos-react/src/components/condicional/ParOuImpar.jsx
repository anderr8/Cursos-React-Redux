// Renderização Condicional #01
// Operação ternária => símbolo Ternário ?

import React from 'react'

export default props => {
    const isPar = props.numero % 2 === 0
    return (
        <div>
            { isPar ?
                <span>Par</span> :
                <span>Ímpar</span>
            }
        </div>
    )
}