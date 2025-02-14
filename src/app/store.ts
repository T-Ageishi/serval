import searchReducer from "../features/search/ducks";
import projectsReducer from "@/features/projects/projects-slice";
import themeReducer from "@/features/theme/ducks";
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
