import NewProjectCard from "@/components/molecules/new-project-card";
import styles from "./index.module.css";
import ProjectsSearch from "@/components/organisms/projects-search";
import Hero from "@/components/atoms/hero";

// @@todo change component's name
export default function Projects() {
	return (
		<>
			<section style={{ paddingBottom: "24px" }}>
				<Hero>プロジェクト一覧</Hero>
			</section>
			<ProjectsSearch />
			<section className={styles["page__cards"]}>
				<NewProjectCard />
			</section>
		</>
	);
}
