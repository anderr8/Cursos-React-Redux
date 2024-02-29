import React from 'react'
import ReactDOM from 'react-dom'

// ReactDOM.render(<h1>React</h1>, document.getElementById('root'))


// const elemento = <h1>React</h1>
// ReactDOM.render(elemento, document.getElementById('root'))


// import Primeiro from './componentes/Primeiro'

// ReactDOM.render(<Primeiro />, document.getElementById('root'))

// import BomDia from './componentes/BomDia'

// ReactDOM.render(<BomDia nome='ander'/>, document.getElementById('root'))


// Importando Múltiplos Componentes

// import { BoaTarde, BoaNoite } from './componentes/Multiplos'

// ReactDOM.render(
//     <div>
//         <BoaTarde nome='ander' />
//         <BoaNoite nome='gigi' />
//     </div>
// , document.getElementById('root'))


// import BoaTarde, { BoaNoite } from './componentes/Multiplos'

// ReactDOM.render(
//     <div>
//         <BoaTarde nome='ander' />
//         <BoaNoite nome='gigi' />
//     </div>
// , document.getElementById('root'))


// import Multi from './componentes/Multiplos'

// ReactDOM.render(
//     <div>
//         <Multi.BoaTarde nome='ander' />
//         <Multi.BoaNoite nome='gigi' />
//     </div>
// , document.getElementById('root'))


// import Saudacao from './componentes/Saudacao'

// ReactDOM.render(
//     <div>
//         <Saudacao tipo='Bom dia' nome='ander' />
//     </div>
// , document.getElementById('root'))


// import Interval from './componentes/Interval'

// ReactDOM.render(
//     <div>
//         <Interval tipo='Bom dia,' nome='ander!' />
//     </div>
// , document.getElementById('root'))

// import Pai from './componentes/Pai'

// ReactDOM.render(
//     <div>
//         <Pai nome='ander' sobrenome='ander' />
//         {/* Como passo os componentes filhos aui? */}
//     </div>
// , document.getElementById('root'))



// import Pai from './componentes/Pai'
// import Filho from './componentes/Filho'

// ReactDOM.render(
//     <div>
//         <Pai nome='Ander' sobrenome='ander'>
//             <Filho nome='ander' sobrenome='ander' />
//             <Filho nome='gigi' sobrenome='ander' />
//             <Filho nome='Felipão' sobrenome='ander' />
//         </Pai>
//     </div>
// , document.getElementById('root'))


import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome='Ander' sobrenome='ander'>
            <Filho nome='ander' />
            <Filho nome='gigi' />
            <Filho nome='Felipão' />
        </Pai>
    </div>
, document.getElementById('root'))