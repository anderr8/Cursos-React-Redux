// Componente com Propriedade 
// Usando a extensão JSX as tags serão auto-completadas

import React from 'react'

/*
export default function ComParametro() {
    return(
        <div>
            <h2>Título</h2>
            <h3>Subtítulo</h3>
        </div>
    )
}
*/

/*
export default function ComParametro(params) {
    console.log(params)
    return(
        <div>
            <h2>Título</h2>
            <h3>Subtítulo</h3>
        </div>
    )
}
*/

/*
export default function ComParametro(params) {
    return(
        <div>
            <h2>{params.Título}</h2>
            <h3>{params.Subtítulo}</h3>
        </div>
    )
}
*/

/*
export default function ComParametro(props) {
    return(
        <div>
            <h2>{props.Título}</h2>
            <p>{props.Subtítulo}</p>
        </div>
    )
}
*/

/*
export default function ComParametro(props) {
    const sub = props.Subtítulo
    return(
        <div>
            <h2>{props.Título}</h2>
            <p>{sub}</p>
        </div>
        
    )
}
*/

/*
export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado(a)' : 'Recuperação'
    return(
        <div>
            <h2>{props.Título}</h2>
            <p>
                <strong>{props.Aluno} </strong>
                tem nota 
                <strong> {props.nota} </strong>
                e está 
                <strong> {status}</strong>!
            </p>
        </div>
    )
}
*/

// Propriedades são somente leitura

export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    const notaInt = Math.ceil(props.nota)
    return(
        <div>
            <h2>{props.Título}</h2>
            <p>
                <strong>{props.aluno} </strong>
                tem nota
                <strong> {notaInt} </strong>
                e está
                <strong> {status}</strong>!

            </p>
        </div>
    )
}

