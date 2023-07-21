// React Fragment
// Os elementos tem que serem envolvidos por uma tag ou por fragmentos (<> </>), para evitar o erro.

import React from 'react'

/*
export default function Fragmento(props){
    return(
        <React.Fragment>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </React.Fragment>
    )
}
*/

/*
export default function Fragmento(props){
    return(
        <React.Fragment Key="1">
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </React.Fragment>
    )
}
*/


export default function Fragmento(props){
    return(
        <>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </>
    )
}
