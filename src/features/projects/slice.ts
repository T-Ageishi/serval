import { fetchProjects } from "@/features/projects/operations.ts";
import { ProjectsState } from "@/features/projects/types.ts";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProjectsState = {
	items: [],
	status: "idle",
	error: null,
};
export const slice = createSlice({
	name: "projects",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProjects.pending, (state) => {
				state.status = "pending";
			})
			.addCase(fetchProjects.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.items.push(...action.payload);
			})
			.addCase(fetchProjects.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message ?? "Unknown Error";
			});
	},
});

export default slice.reducer;
