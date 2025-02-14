import { Reducers } from "@/features/search/ducks/types.ts";

export const reducers: Reducers = {
	updateKeyword: (state, action) => {
		state.keyword = action.payload;
	},
	addCategory: (state, action) => {
		state.categories = [...state.categories, action.payload];
	},
	removeCategory: (state, action) => {
		state.categories = state.categories.filter((c) => c !== action.payload);
	},
};
