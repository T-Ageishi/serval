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
	reducers: {
		lighten(state) {
			state.value = "light";
		},
		darken(state) {
			state.value = "dark";
		},
	},
});

export default slice.reducer;
