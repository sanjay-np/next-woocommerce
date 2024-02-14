import { createSlice } from "@reduxjs/toolkit"

export const productSlice = createSlice({
	name: "productSlice",
	initialState: {
		product: null,
		isVariableProduct: false,
		hasSelectedVariation: false,
		selectedVariation: null,
	},
	reducers: {
		setProduct(state, action) {
			state.product = action.payload
		},
		setIsVariableProduct(state, action) {
			if (action.payload === 'VARIABLE')
				state.isVariableProduct = true
		},
		setHasSelectedVariation(state, action) {
			state.hasSelectedVariation = action.payload
		},
		setSelectedVariation(state, action) {
			state.selectedVariation = action.payload
		},
	},

})
export const { setProduct, setIsVariableProduct, setHasSelectedVariation, setSelectedVariation } = productSlice.actions