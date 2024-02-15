'use client'
import { createSlice } from "@reduxjs/toolkit"

export const sessionSlice = createSlice({
    name: "sessionSlice",
    initialState: {
        isAuthenticated: false,
        hasCredentials: false,
        cart: {},
        customer: {},
        cartUrl: '',
        checkoutUrl: '',
        accountUrl: '',
    },
    reducers: {
        setWoocommerceSession(state, action) {
            console.log(action.payload);
            sessionStorage.setItem('woo-session', action.payload?.customer.sessionToken)
            state.cart = action.payload?.cart
            state.customer = action.payload?.customer
        },
        updateCustomer(state, action) {

        },
        updateCart(state, action) {

        }
    }
})
export const { setWoocommerceSession } = sessionSlice.actions