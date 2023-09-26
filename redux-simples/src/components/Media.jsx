/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

// export default props => {
   
//     return (
//         <Card title="Média dos Números" chocolate>
//             <div>
//                 <span>
//                     <span>Resultado:</span>                    
//                     <strong>{10}</strong>                    
//                 </span>
//             </div>
//         </Card>
//     )
// }

function Media(props) {
    // console.log(props.numeros)
    // console.log(props.min)
    // console.log(props.max)
    // console.log(props)
    const {min, max} = props
    return (
        <Card title="Média dos Números" chocolate>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(min + max) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        // numeros: state.numeros
        min: state.numeros.min,
        max: state.numeros.max,
        // primeiroNome: state.nomes[0]
    }
}

export default connect(mapStateToProps)(Media)
