import { RootState } from "@/app/store.ts";

export const selectProjects = (state: RootState) => state.projects.projects;
export const selectCategories = (state: RootState) => state.projects.categories;
export const selectProjectsStatus = (state: RootState) => state.projects.status;
export const selectProjectsError = (state: RootState) => state.projects.error;
