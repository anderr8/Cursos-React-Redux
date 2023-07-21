// Comunicação Direta #9

import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props =>{
    return(
        <div>
            <DiretaFilho nome="Sofia" idade={20} nerd={true} /> 
            <DiretaFilho nome="Jenifer" idade={17} nerd={false}/>

        </div>
    )
}