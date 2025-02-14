import { fetchDataSet } from "@/features/projects/operations.ts";
import { ProjectsState } from "@/features/projects/types.ts";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProjectsState = {
	projects: [],
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
			})
			.addCase(fetchDataSet.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message ?? "Unknown Error";
			});
	},
});

export default slice.reducer;
