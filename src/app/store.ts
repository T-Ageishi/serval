import searchReducer from "../features/search/slice.ts";
import projectsReducer from "@/features/projects/slice.ts";
import themeReducer from "@/redux/slices/theme-slice.ts";
import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		search: searchReducer,
		theme: themeReducer,
		projects: projectsReducer,
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
