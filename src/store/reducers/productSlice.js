import { createSlice } from "@reduxjs/toolkit"

export const productSlice = createSlice({
	name: "productSlice",
	initialState: {
		product: null,
		isVariableProduct: false,
		selectedVariation: null,
		selectedAttributes: {},
		hasSelectedVariation: false,
		isAvailable: false
	},
	reducers: {
		setProduct(state, action) {
			state.product = action.payload
		},
		setIsVariableProduct(state, action) {
			if (action.payload === 'VARIABLE')
				state.isVariableProduct = true
		},
		setSelectedVariation(state, action) {
			state.selectedVariation = action.payload
		},
		setSelectedAttributes(state, action) {
			state.selectedAttributes = action.payload
		},
		setHasSelectedVariation(state, action) {
			state.hasSelectedVariation = action.payload
		},
		setIsAvailable(state, action) {
			state.isAvailable = action.payload
		}
	},
})
export const { setProduct, setIsVariableProduct, setSelectedVariation, setSelectedAttributes, setHasSelectedVariation, setIsAvailable } = productSlice.actions