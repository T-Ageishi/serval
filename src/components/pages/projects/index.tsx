import NewProjectCard from "@/components/molecules/new-project-card";
import styles from "./index.module.css";
import ProjectsSearch from "@/components/organisms/projects-search";
import Hero from "@/components/atoms/hero";

// @@todo change component's name
export default function ProjectsPage() {
	return (
		<>
			<section style={{ paddingBottom: "24px" }}>
				<Hero label={"プロジェクト一覧"} />
			</section>
			<ProjectsSearch />
			<section className={styles["page__cards"]}>
				<NewProjectCard />
			</section>
		</>
	);
}
