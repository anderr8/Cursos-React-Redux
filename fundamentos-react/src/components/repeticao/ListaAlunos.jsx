// Repetição

import React from 'react'
import alunos from '../../data/alunos'

export default props => {

// Exemplo 1:    
{/*
    const li1 = (
        <li> 
            {alunos[0].id}) {alunos.[0].nome} -> {alunos[0].nota}
        </li>
    )
*/}

    const lis = alunos.map((aluno) => {
        return (
        <li key={aluno.id}>
            {aluno.id}) {aluno.nome} → {aluno.nota}
        </li>
        )
    })


        return (
            <div>
                <ul style={{listStyle: 'none'}}>
                    {lis}
                </ul>
            </div>
        )



// Exemplo 1:
{/*
    return (
        <div>
            <ul>
                <li>Ana - 9.7</li>
                <li>Rodolfo - 8.4</li>
                <li>Laura - 6.9</li>
            </ul>
        </div>
    )
*/}
}