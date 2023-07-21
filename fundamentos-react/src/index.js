import './index.css' // Caminho Relativo
import ReactDOM from 'react-dom'
import React from 'react'




// Criando Projeto e Exibindo String na tela

// Exemplo:

/*
const el = document.getElementById('root') // JavaScrip
ReactDOM.render('Olá React!!!', el)
*/

// Exemplo :

/*
ReactDOM.render(
    'Olá React!!!',
    document.getElementById('root')
)
*/

// Conhecendo JSX
// Sempre que usar a extensão JSX é preciso usar o import React

// Exemplo:

/*
ReactDOM.render(
    <div>
       <strong>Olá React!!!</strong>
    </div>,
    document.getElementById('root')
)
*/

// Exemplo:

/*
const tag = <strong>Olá React!!!</strong>

ReactDOM.render(
    <div>
        {tag}
    </div>,
    document.getElementById('root')
)
*/

// Primeiro Componente #1:
// Componente com Propriedade
// React Fragment

//import Primeiro from './components/basicos/Primeiro' // Caminho Relativo
//import ComParametro from './components/basicos/ComParametro'
//import Fragmento from './components/basicos/Fragmento'

// As <tags> podem ser usadas sem a </tags> de fechamento, é só usar a barra invertida no final da primeira tag para fechar.

/*
ReactDOM.render(
    <div id="app">
        <Primeiro></Primeiro>
        <ComParametro 
        Título="Segundo Componente" 
        Subtítulo="Muito Legal!"/>
    </div>,
    document.getElementById('root')
)
*/

/*
ReactDOM.render(
    <div id="app">
        <Primeiro></Primeiro>
        <ComParametro 
            Título="Situação do Aluno"
            Aluno="Anderson" 
            nota={9.3}
        />

        <ComParametro 
            Título="Situação do Aluno"
            Aluno="Giovanna"  
            nota={9.9}
        />
        <Fragmento />
    </div>,
    document.getElementById('root')
)
*/

// Componente App

import App from './App'

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
