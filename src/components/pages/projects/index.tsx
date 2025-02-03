import NewProjectCard from "@/components/molecules/new-project-card";
import styles from "./index.module.css";
import MainTemplate from "@/components/templates/main";
import ProjectsSearch from "@/components/organisms/projects-search";

export default function ListPage({}: ListPageProps) {
	return (
		<MainTemplate heroLabel={"プロジェクト一覧"}>
			<ProjectsSearch />
			<section className={styles["page__cards"]}>
				<NewProjectCard />
			</section>
		</MainTemplate>
	);
}

type ListPageProps = {};
