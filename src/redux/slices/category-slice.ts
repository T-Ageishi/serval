import { RootState } from "@/store.ts";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
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
export const selectStatus = (state: RootState) => state.category.status;
export const selectCategories = (state: RootState) => state.category.items;
export const selectError = (state: RootState) => state.category.error;

export type Category = {
	id: number;
	title: string;
};

type CategoryState = {
	items: Category[];
	status: "idle" | "pending" | "succeeded" | "failed";
	error: string | null;
};
