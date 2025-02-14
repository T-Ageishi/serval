import { RootState } from "@/app/store.ts";

export const selectProjects = (state: RootState) => state.projects.projects;
export const selectProjectsStatus = (state: RootState) => state.projects.status;
export const selectProjectsError = (state: RootState) => state.projects.error;
export const selectCategories = (state: RootState) => state.category.items;
export const selectCategoriesStatus = (state: RootState) =>
	state.category.status;
export const selectCategoriesError = (state: RootState) => state.category.error;
