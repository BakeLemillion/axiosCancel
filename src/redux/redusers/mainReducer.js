import { TAKE_DATA } from '../types.js'

let initialState = {
    content: [],
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case TAKE_DATA:
            return { ...state, content: action.payload, };
        default: return state
    }
}