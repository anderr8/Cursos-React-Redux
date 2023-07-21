import './App.css'
import React from 'react'
// A partir da versão do React Router Dom 6  os comandos mudaram:
import {BrowserRouter} from 'react-router-dom' // Essa importação mudou


import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'




const App = props => (
    <div className="App">
        <BrowserRouter>
            <Menu />
            <Content />
        </BrowserRouter>
    </div>
)

export default App