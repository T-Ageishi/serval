import { Category } from "@/redux/slices/category-slice.ts";
import { RootState } from "@/store.ts";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProjects = createAsyncThunk(
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
				title: "サンプルプロジェクト１",
				tags: [2],
				starts_at: Date.now(),
				ends_at: Date.now(),
			},
			{
				id: 3,
				title: "サンプルプロジェクト２",
				tags: [3],
				starts_at: Date.now(),
				ends_at: Date.now(),
			},
			{
				id: 4,
				title: "サンプルプロジェクト３",
				tags: [4],
				starts_at: Date.now(),
				ends_at: Date.now(),
			},
			{
				id: 5,
				title: "サンプルプロジェクト４",
				tags: [5],
				starts_at: Date.now(),
				ends_at: Date.now(),
			},
			{
				id: 6,
				title: "サンプルプロジェクト５",
				tags: [6],
				starts_at: Date.now(),
				ends_at: Date.now(),
			},
		];
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
export const selectStatus = (state: RootState) => state.projects.status;
export const selectProjects = (state: RootState) => state.projects.items;
export const selectError = (state: RootState) => state.projects.error;

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
