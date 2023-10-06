import {  combineReducers } from 'redux'
import todoReducers from '../todo/todoReducers'

// const rootReducer = combineReducers({
//     todo: () => ({
//         description: 'Copa do Brasil',
//         list: [{
//             _id: 1,
//             description: 'Final no Estádio do MORUMBI SP dia 24/09/2023 às 16:00',
//             done: true
//         }, {
//             _id: 2,
//             description: 'São Paulo X Flamengo',
//             done: false
//         }, {
//             _id: 3,
//             description: 'Resultado: 1 X 1',
//             done: true
//         }, {
//             _id: 4,
//             description: 'São Paulo FC Campeão da Copa do Brasil!!!',
//             done: false
//         }]
//     })
// }) 

// export default rootReducer

import todoReducer from '../todo/todoReducers'

const rootReducer = combineReducers({
    todo: todoReducers
})

export default rootReducer