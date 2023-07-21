// Componente Card #01

import './Card.css'
import React from 'react'

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || '#F00', // Colocando 2 barras retas deixa explícita um padrão
        borderColor: props.color || '#F00',
    }

    return (
        <div className='Card' style={cardStyle}>
            <div className='Title'>{props.titulo}</div>
            <div className='Content'>{props.children}</div>
        </div>

        // Exemplo:
        /*
        <div className='Card' style={{
            backgroundColor: props.color || '#008,
            borderColor: props.color || '#008
        }}>
            <div className='Title'>{props.titulo}</div>
            <div className='Content'>{props.children}</div>
        </div>*/

    )
}