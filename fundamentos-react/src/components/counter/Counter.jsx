import "./Counter.css"
import React, {Component} from 'react'
import Display from "./Display"
import Buttons from "./Buttons"
import PassoForm from "./PassoForm"

class Counter extends Component{

    // Exemplo 1:
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
            
        })
    }

    dec = () => {
        this.setState({ 
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return(
            <div className="Counter">
                <h2>Counter</h2>

                <Display numero={this.state.numero}/>

                <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>

                {/* Normalmente é usado (on) no lugar do set */}
                <Buttons setInc={this.inc} setDec={this.dec}/>

            </div>
        )
    }
}

export default Counter