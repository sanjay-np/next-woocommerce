import { fetchQuery } from "@/utils/fetchQuery"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const API_URL = process.env.API_URL

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
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(query),
	})
	const response = await res.json()
	return response?.data?.products
})

export const productSlice = createSlice({
	name: "productSlice",
	initialState: {
		products: []
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchProductsSlice.pending, (state, action) => {

		});
		builder.addCase(fetchProductsSlice.fulfilled, (state, action) => {
			state.products = action.payload
		})
	}
})
export default productSlice.reducer