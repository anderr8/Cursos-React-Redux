import './Input.css'
import React, {useState} from 'react'

export default props =>{

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e){
        {/* Componente Controlado, Estado*/}
        setValor(e.target.value)

        {/*console.log(e.target.value)*/}
    }

    return(
        <div className="Input">
            
            <h2>{valor}</h2> {/* Tudo que é digitado é mostrado em cima*/}
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <input value={valor} onChange={quandoMudar}/>
            <input value={valor} readOnly/> {/* Somente Leitura*/}
            <input value={undefined}/> {/* Componente não Controlado*/}
            </div>
        </div>
    )
}