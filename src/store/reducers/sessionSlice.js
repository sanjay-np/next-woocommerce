'use client'
import { createSlice } from "@reduxjs/toolkit"

export const sessionSlice = createSlice({
    name:"sessionSlice",
    initialState:{
        customer:''
    },
    reducers:{
        setSession(state,action){
            state.customer = action.payload 
        }
    }
})
export const {setSession} = sessionSlice.actions