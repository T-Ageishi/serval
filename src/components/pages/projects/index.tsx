import NewProjectCard from "@/components/molecules/new-project-card";
import styles from "./index.module.css";
import MainTemplate from "@/components/templates/main";
import ProjectsSearch from "@/components/organisms/projects-search";

// @@todo change component's name
export default function ProjectsPage() {
	return (
		<MainTemplate heroLabel={"プロジェクト一覧"}>
			<ProjectsSearch />
			<section className={styles["page__cards"]}>
				<NewProjectCard />
			</section>
		</MainTemplate>
	);
}
