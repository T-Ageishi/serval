import styles from "./index.module.css";
import { useAppSelector } from "@/common/hooks/redux.ts";
import Skeleton from "@/components/atoms/skeleton";
import NewProjectCard from "@/components/molecules/new-project-card";
import ProjectCard from "@/components/molecules/project-card";
import {
	selectCategories,
	selectKeyword,
} from "@/features/projects-search/projects-search-slice";
import {
	selectProjects,
	selectProjectsError,
	selectProjectsStatus,
} from "@/features/projects/projects-slice";
import { Project } from "@/features/projects/types";
import { clsx } from "clsx";

export default function ProjectsList() {
	const projectsStatus = useAppSelector(selectProjectsStatus);
	const projects = useAppSelector(selectProjects);
	const projectsError = useAppSelector(selectProjectsError);
	const categoriesStatus = useAppSelector(selectProjectsStatus);

	//検索条件
	const keyword = useAppSelector(selectKeyword);
	const categories = useAppSelector(selectCategories);

	//データ取得完了
	if (projectsStatus === "succeeded" && categoriesStatus === "succeeded") {
		return (
			<section className={styles["list"]}>
				<NewProjectCard />
				{projects.filter(createFilter(keyword, categories)).map((p) => (
					<ProjectCard key={p.id} {...makeProjectCardProps(p)} />
				))}
			</section>
		);
	}

	//データ取得失敗
	if (projectsStatus === "failed" || categoriesStatus === "failed") {
		return (
			<section className={clsx([styles["list"], styles["list--error"]])}>
				<p>データ取得中にエラーが発生しました。</p>
				{projectsError !== null && <p>{projectsError}</p>}
			</section>
		);
	}

	//ローディング中
	return (
		<section className={styles["list"]}>
			<Skeleton height={"auto"} width={"auto"} />
			<Skeleton height={"auto"} width={"auto"} />
			<Skeleton height={"auto"} width={"auto"} />
		</section>
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
