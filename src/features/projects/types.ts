import { Category } from "@/redux/slices/category-slice.ts";

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