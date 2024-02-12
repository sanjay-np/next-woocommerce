import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        cartItems: [],
        cartTotal: '',
    },
    reducers: {
        setCartItem(state, action) {

        },
        updateCartItem(state, action) {

        }
    }
})

export const { setCartItem, updateCartItem } = cartSlice.actions