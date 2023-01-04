import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import charactersReducer from "./reducers/characters-reducer.js";


const reducers = combineReducers({
    charactersReducer:charactersReducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)))


export default store