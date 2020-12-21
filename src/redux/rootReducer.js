import { combineReducers } from "redux";
import { mainReducer } from './redusers/mainReducer'

export const rootReduceer = combineReducers({
    main: mainReducer,
})