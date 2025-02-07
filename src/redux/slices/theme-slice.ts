import { RootState } from "@/store.ts";
import { createSlice } from "@reduxjs/toolkit";

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

export const { lighten, darken } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.value;
export default themeSlice.reducer;

export interface ThemeState {
	value: "light" | "dark";
}
