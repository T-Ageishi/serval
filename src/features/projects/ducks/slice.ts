import { fetchDataSet } from "@/features/projects/ducks/operations.ts";
import { ProjectsState } from "@/features/projects/ducks/types.ts";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProjectsState = {
	projects: [],
	categories: [],
	status: "idle",
	error: null,
};
const slice = createSlice({
	name: "projects",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchDataSet.pending, (state) => {
				state.status = "pending";
			})
			.addCase(fetchDataSet.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.projects.push(...action.payload.projects);
				state.categories.push(...action.payload.categories);
			})
			.addCase(fetchDataSet.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message ?? "Unknown Error";
			});
	},
});

export default slice.reducer;
