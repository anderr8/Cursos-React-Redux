import React from 'react'
import './Button.css'


/* Primeiro exemplo: */

// export default props => {
//     return (
//         <button 
//             onclick={e => props.click && props.click(props.label)}
//             className={classes}>
//             {props.label}
//         </button>

//     )
// } 

/* Segundo exemplo:  */

// export default props =>
//     <button className='button'>
//         {props.label}
//     </button>

//  Terceiro exemplo:

// export default props =>
//     <button className={`
//         button
//         ${props.operation ? 'operation' : ''}
//         ${props.double ? 'double' : ''}
//         ${props.triple ? 'triple' : ''}
//     `}>
//         {props.label}
//     </button>


/* Construindo fora do JSX, criando dentro da própria classe: */

 export default props => {
    let classes = 'button'     
    classes += props.Operation ? 'Operation' : ''
    classes += props.Single ? 'Single' : ''
    classes += props.Double ? 'Double' : ''
    classes += props.Triple ? 'Triple' : ''

    return (
        <button 
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}
            