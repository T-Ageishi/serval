import { reducers } from "@/features/theme/ducks/reducers.ts";
import { ThemeState } from "@/features/theme/ducks/types.ts";
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
