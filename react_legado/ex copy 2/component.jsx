import React from 'react'

// Primeiro exemplo:

// export default function() {
//     return <h1>Primeiro Componente!</h1>
// }


// Segundo exemplo:

// export default () => <h1>Primeiro componente!</h1>

// terceiro exemplo com Arrow function:

//  export default (props) => (
//     <h1>{ props.value }</h1>
//  )


// Quarto exemplo exprotando mais um componente:

const Primeiro = props => (
    <h1>Primeiro Componente!</h1>
)

const Segundo = props => <h1>Segundo Componente!</h1>

export { Primeiro, Segundo }