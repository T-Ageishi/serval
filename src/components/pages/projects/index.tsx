import styles from "./index.module.css";
import NewProjectCard from "@/components/molecules/new-project-card";
import ProjectCard from "@/components/molecules/project-card";
import ProjectsSearch from "@/components/organisms/projects-search";
import WithHeroTemplate from "@/components/templates/with-hero";
import { useAppSelector } from "@/redux/hooks/use-app-selector.ts";
import {
	fetchProjects,
	Project,
	selectError,
	selectProjects,
	selectStatus,
} from "@/redux/slices/projects-slice.ts";
import { store } from "@/store.ts";

export default function Projects() {
	const status = useAppSelector(selectStatus);
	const projects = useAppSelector(selectProjects);
	const error = useAppSelector(selectError);

	if (status === "idle") {
		store.dispatch(fetchProjects());
	}

	return (
		<WithHeroTemplate heroLabel={"プロジェクト一覧"}>
			<ProjectsSearch />
			<section className={styles["page__cards"]}>
				{status === "succeeded" ? (
					<>
						<NewProjectCard />
						{projects.map((p) => (
							<ProjectCard key={p.id} {...makeProjectCardProps(p)} />
						))}
					</>
				) : status === "failed" ? (
					<div>
						<p>データ取得中にエラーが発生しました。</p>
						{error !== null && <p>{error}</p>}
					</div>
				) : (
					<p>データ取得中...</p>
				)}
			</section>
		</WithHeroTemplate>
	);
}

function makeProjectCardProps(project: Project) {
	return {
		title: project.title,
		tags: project.tags,
		startsAt: project.starts_at,
		endsAt: project.ends_at,
		//@@todo 消す
		tagMaster: [
			{ id: 1, title: "サンプルタグ１" },
			{ id: 2, title: "サンプルタグ２" },
			{ id: 3, title: "サンプルタグ３" },
			{ id: 4, title: "サンプルタグ４" },
			{ id: 5, title: "サンプルタグ５" },
			{ id: 6, title: "サンプルタグ６" },
		],
	};
}
