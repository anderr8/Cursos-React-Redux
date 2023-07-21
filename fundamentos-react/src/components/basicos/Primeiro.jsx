// Primeiro Componente #1

/*
export default function Primeiro(){ // (Primeiro) pode ser usado de forma anonima
    return 'Primeiro Componente'
}
*/

// Primeiro Componente #2

import React from 'react'

export default function Primeiro(){
    const msg = 'Seja bem vindo!'
    return (
        <div>
            <h2>Primeiro Componente</h2>
            <p>{msg}</p>
        </div>
        )
    
}