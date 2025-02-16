import { useAppDispatch, useAppSelector } from "@/common/hooks/redux.ts";
import Hero from "@/components/atoms/hero";
import ProjectsList from "@/components/organisms/projects-list";
import ProjectsSearch from "@/components/organisms/projects-search";
import Stack from "@/components/templates/stack";
import {
	fetchDataSet,
	selectProjectsStatus,
} from "@/features/projects/projects-slice";
import { useEffect } from "react";

export default function Projects() {
	const projectsStatus = useAppSelector(selectProjectsStatus);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (projectsStatus === "idle") {
			dispatch(fetchDataSet());
		}
	}, [dispatch, projectsStatus]);

	return (
		<Stack>
			<Hero children={"プロジェクト一覧"} />
			<ProjectsSearch />
			<ProjectsList />
		</Stack>
	);
}
