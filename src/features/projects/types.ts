export type ProjectsState = {
	items: Project[];
	categories?: Category[]; //@@todo ?外す
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

type Category = {
	id: number;
	title: string;
};
