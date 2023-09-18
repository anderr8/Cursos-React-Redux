/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './App.css'


import Intervalo from './components/Intervalo'
import Card from './components/Card'
import Media from './components/Media'
import Soma from './components/Soma'
import Sorteio from './components/Sorteio'

function App() {

  const [min, setMin] = useState(10)
  const [max, setMax] = useState(20)

  return (
    <div className="App">
      <h1>Exercício  React-Redux (Simples)</h1>
      <div className="linha">
        {/* <Card title="Card 1" red>X</Card> */}
        {/* <Intervalo title="Card 1" ></Intervalo> */}
        <Intervalo min={min} max={max}
          onMinChanged={setMin} onMaxChanged={setMax} ></Intervalo>
      </div>
      <div className="linha">
        <Card title="Card 2" green>X</Card>
        <Card title="Card 3" blue>Y</Card>
        <Card title="Card 4" orange>Y</Card>
      </div>
      <div className="linha" >
        <Media min={min} max={max}></Media>
        <Soma min={min} max={max}></Soma>
        <Sorteio min={min} max={max}></Sorteio> 
      </div>
    </div>
  )
}

export default App;
