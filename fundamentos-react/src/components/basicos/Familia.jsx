// Componente com Filho #01
// Componente com Filho #02

//import React from 'react'
//import FamiliaMembro from './FamiliaMembro'
import React, {cloneElement} from 'react'


export default (props) => {
    {/*console.log(typeof props.children.map)*/}

    return (
        <div>
            {/*<FamiliaMembro nome="Anderson " sobrenome="Melo"/>
            <FamiliaMembro nome="Márcia " {...props}  /> 
            <FamiliaMembro nome="Fernanda " sobrenome={props.sobrenome} />
            */} 
            {/*{props.children}*/}
            {/*{30 * 10}*/}
            {/*{Array(10).fill(7)}*/}
            {/*{React.cloneElement(props.children)}*/}
            {/*{cloneElement(props.children, props)}*/}
            {/*{
                React.Children.map(props.children, child => {
                    return cloneElement(child, props)
                })
            }*/}
            {/*{
                props.children.map ((child) => {
                    return cloneElement(child, props)
                })
            }*/}
            {
                props.children.map((child, i) => {
                    return cloneElement(child, {...props, kei: i})
                })
            }
        </div>
    )
}