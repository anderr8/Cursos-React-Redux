import "./Contador.css"
import React, {Component} from 'react'

class Contador extends Component{

    // Exemplo 1:
    state = {
         // numero: 0
        //  numero: this.props.numeroInicial
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    // Função para alterar o estado (setState):
    // inc(){
    //     this.setState({
    //         numero: this.state.numero + 1
    //     })
    // }

    // Exemplo 2:
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         numero: props.numeroInicial
    //     }
    // }

    // Uma das forma de forçar o (this) a apontar para o inc (Incremento) tem muito do JavaScript:

    // constructor(props){
    //     super(props)
    //     this.inc = this.inc.bind(this)
    // }

    // Uma das melhores formas do (this) apontar para o inc, usando a função Arrow :

    inc = () => {
        this.setState({
            // numero: this.state.numero + 1 
            numero: this.state.numero + this.state.passo
            
        })
    }

    dec = () => {
        this.setState({
            // numero: this.state.numero - 1  
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (event) => {
        this.setState({
            passo: +event.target.value
        })
    }

    render() {
        return(
            <div className="Contador">
                <h2>Contador</h2>
                {/* <p>Valor Inicial: {this.props.numeroInicial}</p> */}

                <h3>{this.state.numero}</h3>
                {/* <p>{this.state.numero}</p> */}

                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input 
                        id="passoInput" 
                        type="number" 
                        value={this.state.passo} 
                        onChange={this.setPasso}/>
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>

                {/* ( _ ) underline sinal para ignorando o evento */}
                {/* <button onClick={_ => this.inc()}>+</button>  */}
                
            </div>
        )
    }
}

export default Contador