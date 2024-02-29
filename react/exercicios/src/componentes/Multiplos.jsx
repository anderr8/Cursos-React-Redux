/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

// export const BoaTarde = props => <h1>Boa tarde, {props.nome}!</h1>

// export const BoaNoite = props => <h1>Boa Noite, {props.nome}!</h1>

const BoaTarde = props => <h1>Boa tarde, {props.nome}!</h1>

const BoaNoite = props => <h1>Boa Noite, {props.nome}!</h1>

// export default BoaTarde

export { BoaTarde, BoaNoite }
export default { BoaTarde, BoaNoite }