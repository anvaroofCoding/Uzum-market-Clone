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
		setSelectedProduct: (state, action: PayloadAction<number>) => {
			state.value = action.payload
		},
		clearSelectedProduct: state => {
			state.value = 0
		},
	},
})

export const { setSelectedProduct, clearSelectedProduct } = counterSlice.actions

export default counterSlice.reducer
