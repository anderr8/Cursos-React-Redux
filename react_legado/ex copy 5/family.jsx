// Passando propriedades para Componentes Filhos (Parte 1)
// Passando propriedades para Componentes Filhos (Parte 2)

import React from 'react'

export default props => (
    <div>
        <h1>FAMÍLIA</h1>
        { React.Children.map(props.children,
            child => React.cloneElement(child, { ...props })) }
    </div>
)