import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName="Tavares">
        <Member name="ander" />
        <Member name="gigi" />
        <Member name="Felipão" />
        <Member name="Gil" />
    </Family>
, document.getElementById("app"))