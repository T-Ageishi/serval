import { reducers } from "@/features/theme/reducers.ts";
import { ThemeState } from "@/features/theme/types.ts";
import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
	name: "theme",
	initialState: (): ThemeState => {
		return {
			value: window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light",
		};
	},
	reducers,
});

export default slice.reducer;
