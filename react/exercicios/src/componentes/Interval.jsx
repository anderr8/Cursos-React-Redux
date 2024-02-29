import React, { Component } from 'react'

// Ao colocar uma letra a contagem começa no input. 

export default class Saudacao extends Component {

    state ={
        tipo: 'Fala',
        nome: 'ander'
    }

    setTipo(e) {
        let i = 1
        setInterval(() => {
            this.setState({ tipo: ++i })
        }, 1000)
        this.setState({ tipo: e.target.value })
    }

    render() {
        // const { tipo, nome } = this.props
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{ tipo }, { nome }!</h1>
                <hr />
                <input type='text' placeholder='Tipo...' 
                    value={ tipo } onChange={ e => this.setTipo(e) } />
                <input type='text' placeholder='Nome...' value={ nome } />
            </div>
        )
    }
}