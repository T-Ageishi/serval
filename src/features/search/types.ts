import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

export type SearchState = {
	keyword: string;
	categories: number[];
};

export type Reducers = {
	updateKeyword: CaseReducer<SearchState, PayloadAction<string>>;
	addCategory: CaseReducer<SearchState, PayloadAction<number>>;
	removeCategory: CaseReducer<SearchState, PayloadAction<number>>;
};
