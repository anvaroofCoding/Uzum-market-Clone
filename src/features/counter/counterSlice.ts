import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
	value: number
}

const initialState: CounterState = {
	value: 0,
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		setSelectedProduct: (state, action: PayloadAction<CounterState>) =>
			action.payload,
		clearSelectedProduct: () => null,
	},
})

// Action creators are generated for each case reducer function
export const { setSelectedProduct, clearSelectedProduct } = counterSlice.actions

export default counterSlice.reducer
