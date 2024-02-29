/* eslint-disable import/no-anonymous-default-export */
// import React from 'react'
// import Filho from './Filho'

// export default props =>
//     <div>
//         <h1>{ props.nome } { props.sobrenome }</h1>
//         <h2>Filhos</h2>
//         <ul>
//             <Filho nome='ander' sobrenome={ props.sobrenome } />
//             <Filho { ...props } />
//             <Filho { ...props } nome='ander' />
//         </ul>
//     </div>


// import React from 'react'

// export default props =>
//     <div>
//         <h1>{ props.nome } { props.sobrenome }</h1>
//         <h2>Filhos</h2>
//         <ul>
//             {/* { props.children } */}
//             { 
//                 React.Children.map(props.children, child => {
//                     return React.cloneElement(child, { 
//                         ...props, ...child.props 
//                     }) 
//                 })
//             }
//         </ul>
//     </div>


import React from 'react'
import { childrenWithProps } from '../utils/utils'

export default props =>
    <div>
        <h1>{ props.nome } { props.sobrenome }</h1>
        <h2>Filhos</h2>
        <ul>
            { childrenWithProps(props) }
        </ul>
    </div>