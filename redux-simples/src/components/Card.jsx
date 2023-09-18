/* eslint-disable import/no-anonymous-default-export */
import './Card.css'
import React from 'react'

function getColor(props) {
    if(props.red) return "Red"
    if(props.green) return "Green"
    if(props.blue) return "Blue"
    if(props.orange) return "Orange"
    if(props.chocolate) return "Chocolate"
    if(props.infinity) return "Infinity"
    if(props.zambia) return "Zambia"
    return ""
}

export default props => {
    return (
        <div className={`Card ${getColor(props)}`} >
            <div className="Header">
                <span className="Title">{props.title}</span>
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}