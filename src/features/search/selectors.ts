import { RootState } from "@/app/store.ts";

export const selectKeyword = (state: RootState) => state.search.keyword;
export const selectCategories = (state: RootState) => state.search.categories;