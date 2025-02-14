import { reducers } from "@/features/search/ducks/reducers.ts";
import { SearchState } from "@/features/search/ducks/types.ts";
import { createSlice } from "@reduxjs/toolkit";

/**
 * 検索条件
 */
const initialState: SearchState = { keyword: "", categories: [] };
export const slice = createSlice({
	name: "search",
	initialState,
	reducers,
});

export default slice.reducer;
