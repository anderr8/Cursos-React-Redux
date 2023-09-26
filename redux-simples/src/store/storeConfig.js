/* eslint-disable no-unused-vars */
import { legacy_createStore as createStore, combineReducers } from 'redux'

import numerosReducers from './reducers/numerosReducers'

// const reducers = combineReducers ({
//     numeros: function(state, action) {
//         // console.log('Reducer Numeros...')
//         // console.log(state, ' ', action)
//         switch(action.type) {
//             case 'NUM_MIN_ALTERADO':
//                return {
//                    ...state,
//                    min: action.payload
//                 }
//             case 'NUM_MAX_ALTERADO':
//                 return {
//                     ...state,
//                     max: action.payload
//                 }
                
//             default: 
//                return {
//                    min: 7,
//                    max: 31
//                 }
//         }

//         // return {
//         //     min: 7,
//         //     max: 31
//         // }
//     },
//     nomes: function(state, action) {
//         console.log('Reducer Nomes...')
//         console.log(state, ' ', action)
//         return [
//             'Giovanna',
//             'Anderson',
//             'Felipão'
//         ]
//     }
// })

const reducers = combineReducers({
    numeros: numerosReducers,
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig