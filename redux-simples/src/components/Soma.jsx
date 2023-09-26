/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

// export default props => {
//     // Destructuring = desestruturação:
//     // const { min, max } = props
//     return (
//         <Card title="Soma dos Números" infinity>
//             <div>
//                 <span>
//                     <span>Resultado:</span>
//                     {/* <strong>{ max + min }</strong> */}
//                     <strong>{10}</strong>
//                 </span>
//             </div>
//         </Card>
//     )
// }

function Soma(props) {
    const {min, max} = props
    return (
        <Card title="Soma dos Números" infinity >
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{min + max}</strong>
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

export default connect(mapStateToProps)(Soma)