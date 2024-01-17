'use client'
import { createSlice } from "@reduxjs/toolkit"


export const themeSelectorSlice = createSlice({
    name: "themeSelectorSlice",
    initialState: {
        theme: typeof window !== "undefined" && localStorage.getItem("theme") ? localStorage.getItem('theme') : 'light',
    },
    reducers: {
        setTheme(state, action) {
            state.theme = action.payload
            window.localStorage.setItem('theme', action.payload)
        }
    }
})

export const { setTheme } = themeSelectorSlice.actions