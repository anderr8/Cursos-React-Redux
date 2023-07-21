import React, {useEffect, useRef, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from './../../components/layout/SectionTitle';

// Current = Atual
// UseRef = Referência

// Função para fundir Value1 e value2, e mostrar no Value:
const merge = function(s1, s2){
    //return s1 + s2

    // return [...s1].map(function(e, i){
        //     return `${e}${s2[i] || ""}`
        // }).join("")

    //Exemplo Simplificado:
    return [...s1].map((e, i) => `${e}${s2[i] || ""}`).join("")
}    

const UseRef = (props) => {
    // const [value1, setValue1] = useState("")
    // const count = useRef(0)

    // //Só será modificado o valor de current quando o value1 for mudificado:
    // useEffect(function(){
    //     count.current = count.current + 1
    // }, [value1])
    
    // //Controlando todas as Renderizações do Componente:
    // //count.current = count.current + 1
    


    // return (
    //     <div className="UseRef">
    //        <PageTitle            
    //              title="Hook UseRef"
    //              subtitle="Retorna um objeto mutável com a propriedade .current!"
    //       />

    //         <SectionTitle title="Execício #01"/>
    //         <div className="center">
    //             <div>
    //                 <span className="text">Value: </span>
    //                 <span className="text">{value1} [</span>
    //                 <span className="text red">{count.current}</span>
    //                 <span className="text">]</span>
    //             </div>

    //             <input type="text" className="input" 
    //                 value={value1} onChange={e => setValue1(e.target.value)}/>
    //         </div>
    //     </div>
    // )

    
    // Outro exemplo de Componente:

    const [value1, setValue1] = useState("")
    const [value2, setvalue2] = useState("")
    
    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    // console.log(myInput1.current)

    // useEffect(function(){
    //     count.current = count.current +1
    // }, [value1, value2])

    useEffect(function(){
        count.current = count.current +1
        myInput2.current.focus()
    }, [value1])

    useEffect(function(){
        count.current++
        myInput1.current.focus()
    }, [value2])


    return (
        <div className="UserRef">
            <PageTitle              
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Execício #01"/>
            <div className="center">
                <div>
                    <span className="text">Value: </span>
                    {/* <span className="text">{value1} [</span> */}
                    <span className="text">{merge(value1, value2)}</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>

                <input type="text" className="input"
                    ref={myInput1}
                    value={value1} onChange={e=> setValue1(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <input type="text" className="input"
                    ref={myInput2}
                    value={value2} onChange={e => setvalue2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
