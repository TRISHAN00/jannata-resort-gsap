import {configureStore} from "@reduxjs/toolkit";
import postReducer from '../redux/post'

const store = configureStore({
    reducer: {
        posts: postReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store

