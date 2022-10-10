import { createSlice } from "@reduxjs/toolkit";


const initialState =[];


const watchlistSlice = createSlice({
    name:'WhatchLater',
    initialState,
    reducers :{
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter((item )=> item.id !== action.payload)
        }
    }
})


export const {add ,remove} = watchlistSlice.actions;
export default watchlistSlice.reducer