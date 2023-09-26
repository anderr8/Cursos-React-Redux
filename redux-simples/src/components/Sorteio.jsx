/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { connect } from 'react-redux'


import Card from './Card'

// {/* export default props => { */}
//     // Destructuring = desestruturação:
//     // const { min, max } = props
//     // const aleatorio = parseInt(Math.random() * (max - min)) + min
//     return (
//         <Card title="Sorteio de um Número" zambia>
//             <div>
//                 <span>
//                     <span>Resultado:</span>
//                     {/* <strong>{aleatorio}</strong> */}
//                     <strong>{10}</strong>
//                 </span>
//             </div>
//         </Card>
//     )
// }

function Sorteio(props) {
    const {min, max} = props
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <Card title="Sorteio de um Número" zambia >
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{aleatorio}</strong>
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

export default connect(mapStateToProps)(Sorteio)