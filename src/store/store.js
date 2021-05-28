import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

const {createSlice} =require('@reduxjs/toolkit')

const counter = createSlice({
    name:'counter',
    initialState:{
        counter:0
    },
    reducers: {
        incrementCounter :(state,action)=>({...state,counter:action.payload}),
        setLoggedIn :(state)=>({...state,isLoggedIn:true}),
        setLoggedOut :(state)=>({...state,isLoggedOut:false})
    }
})
export const{setLoggedIn,setLoggedOut,incrementCounter}= counter.actions;
    const reducer = combineReducers({
        counter: counter.reducer
    })
export default configureStore({
    reducer
})