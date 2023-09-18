/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import Card from './Card'

export default props => {
    // Destructuring = desestruturação:
    const { min, max } = props
    return (
        <Card title="Soma dos Números" infinity>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{ max + min }</strong>
                </span>
            </div>
        </Card>
    )
}