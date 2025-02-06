import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store.ts";

export const themeSlice = createSlice({
	name: "theme",
	initialState: {
		value: "light",
	} as ThemeState,
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
