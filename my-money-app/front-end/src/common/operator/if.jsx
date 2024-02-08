// Visibilidade das Abas (Parte 2)

import React from 'react'

export default props => {
    if(props.test) {
        return props.children
    } else {
        return false
    }
}