import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import charactersReducer from "./reducers/characters-reducer.js";


const reducers = combineReducers({
    charactersReducer:charactersReducer
})

const store = createStore(reducers,applyMiddleware(thunk))


export default store