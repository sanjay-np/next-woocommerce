import { configureStore } from "@reduxjs/toolkit";
import { themeSelectorSlice } from "./reducers/themeSelectorSlice";
import { shopFilterSlice } from "./reducers/shopFilterSlice";
import { sessionSlice } from "./reducers/sessionSlice";
import { productSlice } from "./reducers/productSlice";

export const store = configureStore({
    reducer: {
        [themeSelectorSlice.name]: themeSelectorSlice.reducer,
        [shopFilterSlice.name]: shopFilterSlice.reducer,
        [sessionSlice.name]:sessionSlice.reducer,
        [productSlice.name]:productSlice.reducer,
    },
})