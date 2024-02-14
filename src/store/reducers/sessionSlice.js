'use client'
import { createSlice } from "@reduxjs/toolkit"

export const sessionSlice = createSlice({
    name: "sessionSlice",
    initialState: {
        isAuthenticated: false,
        hasCredentials: false,
        cart: null,
        customer: null,
        cartUrl: '',
        checkoutUrl: '',
        accountUrl: '',
    },
    reducers: {
        setSession(state, action) {
            // state.customer = action.payload
        }
    }
})
export const { setSession } = sessionSlice.actions