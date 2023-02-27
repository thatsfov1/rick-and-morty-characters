import {configureStore} from "@reduxjs/toolkit";
import {charactersApi} from "./characters.api";

const store = configureStore({
    reducer:{
        [charactersApi.reducerPath]: charactersApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(charactersApi.middleware)
})

export default store
