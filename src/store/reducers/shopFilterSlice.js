import { createSlice } from '@reduxjs/toolkit';

export const shopFilterSlice = createSlice({
    name: 'shopFilterSlice',
    initialState: {
        priceRange: null,
        category: [],
        color: [],
        size: []
    },
    reducers: {
        updatePriceRangeFilter: (state, action) => {
            state.priceRange = action.payload;
        },
        updateCategoryFilter: (state, action) => {
            state.category = action.payload
        },
        updateColorFilter: (state, action) => {
            state.color = action.payload;
        },
        updateSizeFilter: (state, action) => {
            state.size = action.payload;
        }
    },
});

export const { updatePriceRangeFilter, updateCategoryFilter, updateColorFilter, updateSizeFilter } = shopFilterSlice.actions