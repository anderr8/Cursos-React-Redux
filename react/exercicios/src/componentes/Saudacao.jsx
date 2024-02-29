/* eslint-disable react/require-render-return */
// import React, { Component } from 'react'

// export default class Saudacao extends Component {
//     render() {
//         const { tipo, nome } = this.props
//         return (
//             <div>
//                 <h1>{ tipo } { nome }</h1>
//                 <hr />
//                 <input type='text' placeholder='Tipo...' value={ tipo } />
//                 <input type='text' placeholder='Nome...' value={ nome } />
//             </div>
//         )
//     }
// }



import React, { Component } from 'react'

export default class Saudacao extends Component {

    // Estado fixo:
    // state = {
    //     tipo: 'Fala',
    //     nome: 'ander'
    // }

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props)

        // Melhor Forma
        this.setTipo = this.setTipo.bind(this)
    }

    setTipo(e) {
        console.log(e.target.value)
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        // const { tipo, nome } = this.props
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{ tipo }, { nome }!</h1>
                <hr />
                <input type='text' placeholder='Tipo...' 
                    value={ tipo } onChange={ this.setTipo } />
                <input type='text' placeholder='Nome...' 
                    value={ nome } onChange={ e => this.setNome(e) } />
            </div>
        )
    }
}