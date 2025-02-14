import { selectProjectsStatus } from "@/features/projects/selectors.ts";
import { Project } from "@/features/projects/types.ts";
import { createAppAsyncThunk } from "@/redux/with-types.ts";

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
