import styles from "./index.module.css";
import Spinner from "@/components/atoms/spinner";
import NewProjectCard from "@/components/molecules/new-project-card";
import ProjectCard from "@/components/molecules/project-card";
import ProjectsSearch from "@/components/organisms/projects-search";
import WithHeroTemplate from "@/components/templates/with-hero";
import { useAppSelector } from "@/redux/hooks";
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
import { clsx } from "clsx";
import { useEffect } from "react";

export default function Projects() {
	const status = useAppSelector(selectProjectsStatus);
	const projects = useAppSelector(selectProjects);
	const error = useAppSelector(selectProjectsError);
	const keyword = useAppSelector(selectKeyword);
	const categories = useAppSelector(selectCategories);

	useEffect(() => {
		if (status === "idle") {
			store.dispatch(fetchProjects());
		}
	}, [status]);

	return (
		<WithHeroTemplate heroLabel={"プロジェクト一覧"}>
			<ProjectsSearch />
			<section
				className={clsx([
					styles["page__cards"],
					{
						[styles["page__cards--loading"]]:
							status === "idle" || status === "pending",
					},
				])}
			>
				{status === "succeeded" ? (
					<>
						<NewProjectCard />
						{projects.filter(createFilter(keyword, categories)).map((p) => (
							<ProjectCard key={p.id} {...makeProjectCardProps(p)} />
						))}
					</>
				) : status === "failed" ? (
					<div>
						<p>データ取得中にエラーが発生しました。</p>
						{error !== null && <p>{error}</p>}
					</div>
				) : (
					<div className={styles["page__spinner"]}>
						<Spinner />
					</div>
				)}
			</section>
		</WithHeroTemplate>
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
