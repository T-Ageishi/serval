export type Project = {
	id: number;
	title: string;
	tags: Category["id"][];
	starts_at: number;
	ends_at: number;
};

export type Category = {
	id: number;
	title: string;
};
