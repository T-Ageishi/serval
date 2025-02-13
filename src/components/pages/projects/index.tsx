import styles from "./index.module.css";
import Hero from "@/components/atoms/hero";
import Skeleton from "@/components/atoms/skeleton";
import NewProjectCard from "@/components/molecules/new-project-card";
import ProjectCard from "@/components/molecules/project-card";
import ProjectsSearch from "@/components/organisms/projects-search";
import { useAppSelector } from "@/redux/hooks";
import {
	fetchCategories,
	selectCategoriesStatus,
} from "@/redux/slices/category-slice.ts";
import {
	fetchProjects,
	Project,
	selectProjectsError,
	selectProjects,
	selectProjectsStatus,
} from "@/redux/slices/projects-slice.ts";
import {
	selectCategories,
	selectKeyword,
} from "@/redux/slices/search-slice.ts";
import { store } from "@/store.ts";
import { useEffect } from "react";

export default function Projects() {
	const projectsStatus = useAppSelector(selectProjectsStatus);
	const projects = useAppSelector(selectProjects);
	const error = useAppSelector(selectProjectsError);
	const categoriesStatus = useAppSelector(selectCategoriesStatus);
	const keyword = useAppSelector(selectKeyword);
	const categories = useAppSelector(selectCategories);

	useEffect(() => {
		if (projectsStatus === "idle") {
			store.dispatch(fetchProjects());
		}
		if (categoriesStatus === "idle") {
			store.dispatch(fetchCategories());
		}
	}, [projectsStatus, categoriesStatus]);

	return (
		<>
			<Hero children={"プロジェクト一覧"} />
			<ProjectsSearch />
			<section className={styles["page__cards"]}>
				{projectsStatus === "succeeded" && categoriesStatus === "succeeded" ? (
					<>
						<NewProjectCard />
						{projects.filter(createFilter(keyword, categories)).map((p) => (
							<ProjectCard key={p.id} {...makeProjectCardProps(p)} />
						))}
					</>
				) : projectsStatus === "failed" || categoriesStatus === "failed" ? (
					<div>
						<p>データ取得中にエラーが発生しました。</p>
						{error !== null && <p>{error}</p>}
					</div>
				) : (
					<>
						<Skeleton height={"auto"} width={"auto"} />
						<Skeleton height={"auto"} width={"auto"} />
						<Skeleton height={"auto"} width={"auto"} />
						<Skeleton height={"auto"} width={"auto"} />
						<Skeleton height={"auto"} width={"auto"} />
					</>
				)}
			</section>
		</>
	);
}

function createFilter(keyword: string, categories: Project["tags"]) {
	return (project: Project): boolean => {
		let ret = true;
		if (keyword !== "" && !project.title.includes(keyword)) {
			ret = false;
		}
		if (
			categories.length > 0 &&
			!project.tags.some((t) => categories.includes(t))
		) {
			ret = false;
		}
		return ret;
	};
}

function makeProjectCardProps(project: Project) {
	return {
		title: project.title,
		tags: project.tags,
		startsAt: project.starts_at,
		endsAt: project.ends_at,
	};
}
