import { createSlice } from "@reduxjs/toolkit"

export const productSlice = createSlice({
	name: "productSlice",
	initialState: {
		product: []
	},
	reducers: {
		setSingleProduct(state, action) {
			state.product = action.payload
		}
	},

})
export const {setSingleProduct} = productSlice.actions