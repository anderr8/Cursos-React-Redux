// Passando propriedades para Componentes Filhos (Parte 1)
// Passando propriedades para Componentes Filhos (Parte 2)

import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default props => (
    <div>
        <h1>FAMÍLIA</h1>
        { childrenWithProps(props.children, props) }
    </div>
)