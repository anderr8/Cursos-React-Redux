import React, {Component} from 'react'
import './Calculator.css'

import Button from '../components/Button' 
import Display from '../components/Display'

// Criando um Estado:

const initialState = {
    displayValue: '0', //Valor que será exibido no painel da calculadora
    clearDisplay:false, // Propriedade para informar se precisa ou não limpar o display
    Operation: null, // Variável para armazenar as operações 
    values: [0, 0], // Array para dois valores 
    current: 0 // Para informar qual valor do array está sendo manipulado index 0 ou index 1
}

export default class Calculator extends Component{

    // ... operador spread 
    state = {...initialState}


    // Exemplo 2:

    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    // Exemplo 1:

    clearMemory() {
        // console.log('limpar')

        // Clonando o estado inicial:
        this.setState({...initialState})
    }

    // /* Para definir as operações: */

    setOperation(Operation) {
        // console.log(Operation)

        if (this.state.current === 0) {
            this.setState({Operation, current: 1, clearDisplay: true})
        } else {
            const equals = Operation === '='
            const currentOperation = this.state.Operation

            const values = [...this.state.values]
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch(e) {
                values[0] = this.state.values[0]
            }

            values[1] = 0

            this.setState({
                displayValue: values[0], 
                Operation: equals ? null : Operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    // /* Adicionando Dígito: */

    addDigit(n) {
        // console.log(n)

        // Regra do Ponto:
        if (n === '.' && this.state.displayValue.includes('.')){
            return
        }

        // Regra do Zero:
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue 
        const displayValue = currentValue + n
        // Mudando o Estado:
        this.setState({displayValue, clearDisplay: false})

        // Validando o Ponto:
        if (n != '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue)

            // Clonando o array:
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values})
            console.log(values)
        }
    }



    render(){
        // Exemplo 1:
        // const addDigit = n => this.addDigit(n) 
        // const setOperation = op => this.setOperation(op)
        return(
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <Button label="AC" click={this.clearMemory} Triple/>
                <Button label="/" click={this.setOperation} Operation />
                <Button label="7" click={this.addDigit} Single/>
                <Button label="8" click={this.addDigit} Single/>
                <Button label="9" click={this.addDigit} Single/>
                <Button label="*" click={this.setOperation} Operation/>
                <Button label="4" click={this.addDigit} Single/>
                <Button label="5" click={this.addDigit} Single/>
                <Button label="6" click={this.addDigit} Single/>
                <Button label="-" click={this.setOperation} Operation/>
                <Button label="1" click={this.addDigit} Single/>
                <Button label="2" click={this.addDigit} Single/>
                <Button label="3" click={this.addDigit} Single/>
                <Button label="+" click={this.setOperation} Operation/>
                <Button label="0" click={this.addDigit} Double/>
                <Button label="." click={this.addDigit}  Single/>
                <Button label="=" click={this.setOperation} Operation/>                
            </div>
        )
    }
}