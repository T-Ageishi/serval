import { RootState } from "@/app/store.ts";
import { createSlice } from "@reduxjs/toolkit";

export type ThemeState = {
	value: "light" | "dark";
};

export const themeSlice = createSlice({
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

export default themeSlice.reducer;
export const { lighten, darken } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.value;
