import {combineReducers, createStore} from "redux";
import todoReducer from "./todoReducer";

let reducers = combineReducers({
    todo: todoReducer
})

// noinspection JSDeprecatedSymbols
let store = createStore(reducers)

window.store = store

export default store