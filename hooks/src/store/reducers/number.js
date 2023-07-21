export function numberReducer(state, action) {
    switch (action.type){
        case 'numberAddN':
            return { ...state, number: state.number + 2}
        case 'numberMulti7':
            return { ...state, number: state.number * 7}
        case 'numberDiv25':
            return { ...state, number: state.number / 25}
        case 'numberInt':
            return { ...state, number: parseInt(state.number)}
        case 'numberNeg9':
            return { ...state, number: state.number + action.payload}
        case 'numberPos11':
            return { ...state, number: state.number + action.payload}
        default:
            return state
    }
}