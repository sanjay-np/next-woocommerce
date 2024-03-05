'use client'
import { createSlice } from "@reduxjs/toolkit"

export const sessionSlice = createSlice({
    name: "sessionSlice",
    initialState: {
        isAuthenticated: false,
        hasCredentials: false,
        cart: typeof window !== "undefined" && localStorage.getItem("cart") ? JSON.parse(localStorage.getItem('cart')) : {},
        customer: typeof window !== "undefined" && localStorage.getItem("customer") ? JSON.parse(localStorage.getItem('customer')) : {},
        cartUrl: '',
        checkoutUrl: '',
        accountUrl: '',
    },
    reducers: {
        setWoocommerceSession(state, action) {
            localStorage.setItem('woo-session', action.payload?.customer.sessionToken)
            localStorage.setItem('cart', JSON.stringify(action.payload?.cart))
            localStorage.setItem('customer', JSON.stringify(action.payload?.customer))
            state.cart = action.payload?.cart
            state.customer = action.payload?.customer
        },
        updateCustomer(state, action) {
            console.log(action.payload);
            localStorage.setItem('customer', JSON.stringify(action.payload))
            localStorage.setItem('woo-session', action.payload?.sessionToken)
            state.customer = action.payload
        },
        updateCart(state, action) {
            localStorage.setItem('cart', JSON.stringify(action.payload))
            state.cart = action.payload
            state.isAuthenticated = true
        }
    }
})
export const { setWoocommerceSession, updateCart, updateCustomer } = sessionSlice.actions