import styles from "./index.module.css";
import NewProjectCard from "@/components/molecules/new-project-card";
import ProjectsSearch from "@/components/organisms/projects-search";
import WithHeroTemplate from "@/components/templates/with-hero";

export default function Projects() {
	return (
		<WithHeroTemplate heroLabel={"プロジェクト一覧"}>
			<ProjectsSearch />
			<section className={styles["page__cards"]}>
				<NewProjectCard />
			</section>
		</WithHeroTemplate>
	);
}
