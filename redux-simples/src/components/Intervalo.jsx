/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

// export default props => {
//     // const { min, max } = props
//     return (
//         <Card title="Intervalo de Números" red>
//             <div className="Intervalo" >
//                 <span>
//                     <strong>Mínimo:</strong>
//                     {/* <input type="number" value={min}
//                         onChange={e => props.onMinChanged(+e.target.value)}  /> */}
//                         <input type="number" value={0} readOnly />
//                 </span>
//                 <span>
//                     <strong>Máximo:</strong>
//                     {/* <input type="number" value={max} 
//                         onChange={e => props.onMaxChanged(+e.target.value)} /> */}
//                         <input type="number" value={10} readOnly />
//                 </span>
//             </div>
//         </Card>
//     )
// }

// function Intervalo(props) {
// const {min, max} = props
// props.alterarMinimo(10000)
//     return (
//         <Card title="Intervalo de Números" red >
//             <div className="Intervalo" >
//                 <span>
//                     <strong>Mínimo:</strong>
//                     <input type="number" value={min} readOnly />
//                 </span>
//                 <span>
//                     <strong>Máximo:</strong>
//                     <input type="number" value={max} readOnly />
//                 </span>
//             </div>
//         </Card>
//     )
// }

        
// function mapActionCreatorsToProps(dispatch) {
//   return {
//       alterarMinimo(novoNumero) {          
//         // action creator -> action
//            const action = alterarNumeroMinimo(novoNumero)
//            dispatch(action)
//         }
//     }
// }
        
                    
// export default connect(
//     mapStateToProps,
//     mapActionCreatorsToProps
// )(Intervalo)
    
                        
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numerosActions'
                        
                        
function Intervalo(props) {
const {min, max} = props

return (
    <Card title="Interado de Números" red >
        <div className="Intervalo" >
            <span>
                <strong>Mínimo:</strong>
                <input type="number" value={min}
                    onChange={e => props.alterarMinimo(+e.target.value)} />
            </span>
            <span>
                <strong>Máximo:</strong>
                <input type="number" value={max}
                    onChange={e => props.alterarMaximo(+e.target.value)} />
            </span>
        </div>
    </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}


function mapDispatchToProps(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        alterarMaximo(novoNumero) {
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Intervalo)
