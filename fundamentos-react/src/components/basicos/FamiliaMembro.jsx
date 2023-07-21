// Componente com Filho#01
import React from 'react'

export default (props) => {

    return (
        <span>
            <div>{props.nome}<strong>{props.sobrenome}</strong></div>
        </span>
    )
}