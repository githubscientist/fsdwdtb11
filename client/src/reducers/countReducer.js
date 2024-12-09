const initialState = {
    count: 0,
    history: []
}

// returns the current state / updated state
const countReducer = (state, action) => {
    switch (action.type) {
        case "INCR":
            return {
                ...state,
                count: state.count + 1,
                history: [...state.history, 'I']
            }
        case "DECR":
            return {
                ...state,
                count: state.count - 1,
                history: [...state.history, 'D']
            }
        case 'RESET':
            return {
                count: 0,
                history: [...state.history, 'R']
            }
        default:
            return state
    }
}

export {
    countReducer,
    initialState
}