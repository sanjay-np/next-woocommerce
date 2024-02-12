import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProductsSlice = createAsyncThunk("fetchProductsSlice", async (props) => {
	const query = {
		query: `{
			products(first: ${props?.first}, after:"${props?.after}",where:{${props?.where}}) {
				pageInfo {
					endCursor
					hasNextPage
					total
				}
				nodes{
					id
					databaseId
					name
					slug
					type
					reviewCount
					image {
						mediaItemUrl
					}
					... on SimpleProduct {
						price(format: RAW)
						regularPrice(format: RAW)
						soldIndividually
					}
					... on VariableProduct {
						price(format: RAW)
						regularPrice(format: RAW)
						soldIndividually
					}
				}
			}
		}`
	}
	const res = await fetch('https://cgs.sanjay-chaudhary.com.np/graphql', {
		method: 'POST',
		headers: {'Content-Type': 'application/json',},
		body: JSON.stringify(query),
	})
	const response = await res.json()
	return response?.data?.products
})

export const shopFilterSlice = createSlice({
    name: 'shopFilterSlice',
    initialState: {
        priceRange: null,
        category: [],
        color: [],
        size: [],
        products: []
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
    extraReducers: (builder) => {
		builder.addCase(fetchProductsSlice.pending, (state, action) => {

		});
		builder.addCase(fetchProductsSlice.fulfilled, (state, action) => {
			state.products = action.payload
		})
	}
});

export const { updatePriceRangeFilter, updateCategoryFilter, updateColorFilter, updateSizeFilter } = shopFilterSlice.actions