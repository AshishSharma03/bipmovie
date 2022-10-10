import { configureStore } from "@reduxjs/toolkit";
import WhatchLaterReducer from './whatchlaterSlice'
import MoviesReducer from './MovieSlice'
const store = configureStore({
    reducer :{
        Wacthlater : WhatchLaterReducer,
        Movies : MoviesReducer,
    }
})


export default store;