import { configureStore } from "@reduxjs/toolkit";
import { themeSelectorSlice } from "./reducers/themeSelectorSlice";

export const store = configureStore({
    reducer: {
        [themeSelectorSlice.name]: themeSelectorSlice.reducer
    },
})