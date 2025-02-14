import { CaseReducer } from "@reduxjs/toolkit";

export type ThemeState = {
	value: "light" | "dark";
};

export type Reducers = {
	lighten: CaseReducer<ThemeState>;
	darken: CaseReducer<ThemeState>;
};
