// const INITIAL_STATE = {
//    description: '', list: []
    // description: 'Copa do Brasil',
    // list: [{
    //     _id: 1,
    //     description: 'Final no Estádio do MORUMBI SP dia 24/09/2023 às 16:00',
    //     done: true
    // }, {
    //     _id: 2,
    //     description: 'São Paulo X Flamengo',
    //     done: false
    // }, {
    //     _id: 3,
    //     description: 'Resultado: 1 X 1',
    //     done: true
    // }, {
    //     _id: 4,
    //     description: 'São Paulo FC Campeão da Copa do Brasil!!!',
    //     done: false
    // }]
// }

const INITIAL_STATE = { description: '', list: [] }


export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            // return { ...state, list: action.payload.data }
            return { ...state, list: action.payload }
        // case 'TODO_ADDED':
        case 'TODO_CLEAR':
            return { ...state, description: '' }
        default:
            return state
    }
}