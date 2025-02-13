import { RootState } from "@/app/store.ts";
import { createAppAsyncThunk } from "@/redux/with-types.ts";
import { createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAppAsyncThunk(
	"category/fetchCategories",
	async (): Promise<Category[]> => {
		//@@todo 実際のデータ取得に置き換える
		await new Promise((resolve) => {
			setTimeout(() => {
				resolve(true);
			}, 1000);
		});
		return [
			{ id: 1, title: "サンプルタグ１" },
			{ id: 2, title: "サンプルタグ２" },
			{ id: 3, title: "サンプルタグ３" },
			{ id: 4, title: "サンプルタグ４" },
			{ id: 5, title: "サンプルタグ５" },
			{ id: 6, title: "サンプルタグ６" },
		];
	},
	{
		condition(_, thunkApi) {
			const projectsStatus = selectCategoriesStatus(thunkApi.getState());
			if (projectsStatus !== "idle") {
				return false;
			}
		},
	}
);

const initialState: CategoryState = {
	items: [],
	status: "idle",
	error: null,
};

export const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCategories.pending, (state) => {
				state.status = "pending";
			})
			.addCase(fetchCategories.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.items.push(...action.payload);
			})
			.addCase(fetchCategories.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message ?? "Unknown Error";
			});
	},
});

export default categorySlice.reducer;
export const selectCategories = (state: RootState) => state.category.items;
export const selectCategoriesStatus = (state: RootState) =>
	state.category.status;
export const selectCategoriesError = (state: RootState) => state.category.error;

export type Category = {
	id: number;
	title: string;
};

type CategoryState = {
	items: Category[];
	status: "idle" | "pending" | "succeeded" | "failed";
	error: string | null;
};
