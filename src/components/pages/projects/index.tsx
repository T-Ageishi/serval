import Hero from "@/components/atoms/hero";
import ProjectsList from "@/components/organisms/projects-list";
import ProjectsSearch from "@/components/organisms/projects-search";
import Stack from "@/components/templates/stack";
import { useAppSelector } from "@/redux/hooks";
import {
	fetchCategories,
	selectCategoriesStatus,
} from "@/redux/slices/category-slice.ts";
import {
	fetchProjects,
	selectProjectsStatus,
} from "@/redux/slices/projects-slice.ts";
import { store } from "@/store.ts";
import { useEffect } from "react";

export default function Projects() {
	const projectsStatus = useAppSelector(selectProjectsStatus);
	const categoriesStatus = useAppSelector(selectCategoriesStatus);

	useEffect(() => {
		if (projectsStatus === "idle") {
			store.dispatch(fetchProjects());
		}
		if (categoriesStatus === "idle") {
			store.dispatch(fetchCategories());
		}
	}, [projectsStatus, categoriesStatus]);

	return (
		<Stack>
			<Hero children={"プロジェクト一覧"} />
			<ProjectsSearch />
			<ProjectsList />
		</Stack>
	);
}
