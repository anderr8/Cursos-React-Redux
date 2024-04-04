import React from 'react'
import ReactDOM from 'react-dom'
// import Component from './component'
import { Primeiro, Segundo } from './component'

// Primeiro mexemplo:

// ReactDOM.render(<Component />, document.getElementById('app'))

// Terceiro exemplo:

// ReactDOM.render(<Component value="Show!" />, document.getElementById("app"))

// Quarto exemplo:

ReactDOM.render(
    <div>
        <Primeiro />
        <Segundo/>
    </div>
, document.getElementById("app"))