/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
// import React, { Fragment } from 'react'

// export default () => <h1>Bom dia!</h1>

export default props => 
    <div>
        <h1>Bom dia, {props.nome}!</h1>
        <h2>Até breve!</h2>
    </div>

// export default props =>
//     <React.Fragment>
//         <h1>Bom dia, {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </React.Fragment>


// export default props =>
//     <Fragment>
//         <h1>Bom dia, {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </Fragment>


// export default props => [
//         <h1 key='h1'>Bom dia, {props.nome}!</h1>,
//         <h2 key='h2'>Até breve!</h2>
// ]