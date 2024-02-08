import { configureStore } from "@reduxjs/toolkit";
import { themeSelectorSlice } from "./reducers/themeSelectorSlice";
import { shopFilterSlice } from "./reducers/shopFilterSlice";
import { productSlice } from "./reducers/productsSlice";

export const store = configureStore({
    reducer: {
        [themeSelectorSlice.name]: themeSelectorSlice.reducer,
        [shopFilterSlice.name]: shopFilterSlice.reducer,
        [productSlice.name]: productSlice.reducer
    },
})