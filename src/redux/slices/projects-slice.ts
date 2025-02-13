import { RootState } from "@/app/store.ts";
import { Category } from "@/redux/slices/category-slice.ts";
import { createAppAsyncThunk } from "@/redux/with-types.ts";
import { createSlice } from "@reduxjs/toolkit";

export const fetchProjects = createAppAsyncThunk(
	"projects/fetchProjects",
	async (): Promise<Project[]> => {
		// @@todo 実際のデータ取得に置き換える
		await new Promise((resolve) => {
			setTimeout(() => {
				resolve(true);
			}, 1000);
		});
		return [
			{
				id: 1,
				title: "サンプルプロジェクト１",
				tags: [1],
				starts_at: Date.now(),
				ends_at: Date.now(),
			},
			{
				id: 2,
				title: "サンプルプロジェクト２",
				tags: [2],
				starts_at: Date.now(),
				ends_at: Date.now(),
			},
			{
				id: 3,
				title: "サンプルプロジェクト３",
				tags: [3],
				starts_at: Date.now(),
				ends_at: Date.now(),
			},
			{
				id: 4,
				title: "サンプルプロジェクト４",
				tags: [4],
				starts_at: Date.now(),
				ends_at: Date.now(),
			},
			{
				id: 5,
				title: "サンプルプロジェクト５",
				tags: [5],
				starts_at: Date.now(),
				ends_at: Date.now(),
			},
			{
				id: 6,
				title: "サンプルプロジェクト６",
				tags: [6],
				starts_at: Date.now(),
				ends_at: Date.now(),
			},
		];
	},
	{
		condition(_, thunkApi) {
			const projectsStatus = selectProjectsStatus(thunkApi.getState());
			if (projectsStatus !== "idle") {
				return false;
			}
		},
	}
);

const initialState: ProjectsState = {
	items: [],
	status: "idle",
	error: null,
};
export const projectsSlice = createSlice({
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

export default projectsSlice.reducer;
export const selectProjects = (state: RootState) => state.projects.items;
export const selectProjectsStatus = (state: RootState) => state.projects.status;
export const selectProjectsError = (state: RootState) => state.projects.error;

export type ProjectsState = {
	items: Project[];
	status: "idle" | "pending" | "succeeded" | "failed";
	error: string | null;
};

export type Project = {
	id: number;
	title: string;
	tags: Category["id"][];
	starts_at: number;
	ends_at: number;
};
