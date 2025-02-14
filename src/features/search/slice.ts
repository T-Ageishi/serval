import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * 検索条件
 */

const initialState: SearchState = {
	keyword: "",
	categories: [],
};
const slice = createSlice({
	name: "search",
	initialState,
	reducers: {
		updateKeyword: (state, action: PayloadAction<string>) => {
			state.keyword = action.payload;
		},
		addCategory: (state, action: PayloadAction<number>) => {
			state.categories = [...state.categories, action.payload];
		},
		removeCategory: (state, action: PayloadAction<number>) => {
			state.categories = state.categories.filter((c) => c !== action.payload);
		},
	},
});
export const { updateKeyword, addCategory, removeCategory } = slice.actions;

export default slice.reducer;

export interface SearchState {
	keyword: string;
	categories: number[];
}
