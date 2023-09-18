/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import Card from './Card'

export default props => {
    // const min = props.min
    // const max = props.max

    // Destructuring = desestruturação:
    const { min, max } = props
    return (
        <Card title="Média dos Números" chocolate>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(max + min) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}