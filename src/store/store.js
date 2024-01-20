import { configureStore } from "@reduxjs/toolkit";
import { themeSelectorSlice } from "./reducers/themeSelectorSlice";
import { productsApi } from "./reducers/ProductsSlice";

export const store = configureStore({
    reducer: {
        [themeSelectorSlice.name]: themeSelectorSlice.reducer,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})