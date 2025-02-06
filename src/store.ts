import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./redux/slices/search-slice.ts";
import themeReducer from "@/redux/slices/theme-slice.ts";

export const store = configureStore({
	reducer: {
		search: SearchReducer,
		theme: themeReducer,
	},
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
	ThunkReturnType,
	RootState,
	unknown,
	Action
>;
