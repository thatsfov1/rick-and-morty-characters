import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import charactersReducer from "./reducers/characters-reducer.js";
import locationsReducer from "./reducers/locations-reducer.js";
import episodesReducer from "./reducers/episodes-reducer.js";


const reducers = combineReducers({
    charactersReducer:charactersReducer,
    locationsReducer:locationsReducer,
    episodesReducer:episodesReducer,
})

const store = createStore(reducers,applyMiddleware(thunk))


export default store