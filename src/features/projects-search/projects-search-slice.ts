import { RootState } from "@/app/store.ts";
import { SearchState } from "@/features/projects-search/types.ts";
import { createSlice } from "@reduxjs/toolkit";

/**
 * 検索条件
 */
const initialState: SearchState = { keyword: "", categories: [] };
export const projectsSearchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		updateKeyword: (state, action) => {
			state.keyword = action.payload;
		},
		addCategory: (state, action) => {
			state.categories = [...state.categories, action.payload];
		},
		removeCategory: (state, action) => {
			state.categories = state.categories.filter((c) => c !== action.payload);
		},
	},
});

export default projectsSearchSlice.reducer;

export const { updateKeyword, addCategory, removeCategory } =
	projectsSearchSlice.actions;
export const selectKeyword = (state: RootState) => state.search.keyword;
export const selectCategories = (state: RootState) => state.search.categories;
