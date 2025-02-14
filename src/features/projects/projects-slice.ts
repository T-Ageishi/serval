import { RootState } from "@/app/store.ts";
import { createAppAsyncThunk } from "@/common/utils/with-types.ts";
import { ProjectsDataSet, ProjectsState } from "@/features/projects/types.ts";
import { createSlice } from "@reduxjs/toolkit";

export const fetchDataSet = createAppAsyncThunk(
	"projects/fetchDataSet",
	async (): Promise<ProjectsDataSet> => {
		// @@todo 実際のデータ取得に置き換える
		await new Promise((resolve) => {
			setTimeout(() => {
				resolve(true);
			}, 1000);
		});
		return {
			projects: [
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
			],
			categories: [
				{ id: 1, title: "サンプルタグ１" },
				{ id: 2, title: "サンプルタグ２" },
				{ id: 3, title: "サンプルタグ３" },
				{ id: 4, title: "サンプルタグ４" },
				{ id: 5, title: "サンプルタグ５" },
				{ id: 6, title: "サンプルタグ６" },
			],
		};
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
	projects: [],
	categories: [],
	status: "idle",
	error: null,
};
const projectsSlice = createSlice({
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

export const selectProjects = (state: RootState) => state.projects.projects;
export const selectCategories = (state: RootState) => state.projects.categories;
export const selectProjectsStatus = (state: RootState) => state.projects.status;
export const selectProjectsError = (state: RootState) => state.projects.error;

export default projectsSlice.reducer;
