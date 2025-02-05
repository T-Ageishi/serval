import NewProjectCard from "@/components/molecules/new-project-card";
import styles from "./index.module.css";
import ProjectsSearch from "@/components/organisms/projects-search";
import WithHeroTemplate from "@/components/templates/with-hero";
import { ChangeEventHandler, useState } from "react";

export default function Projects() {
	const [keyword, setKeyword] = useState<string>("");
	const [selectedChips, setSelectedChips] = useState<number[]>([]);

	const onChangeKeyword: ChangeEventHandler<HTMLInputElement> = (e) => {
		setKeyword(e.target.value);
	};

	const onChangeChips: ChangeEventHandler<HTMLInputElement> = (e) => {
		const value = Number(e.currentTarget.value);
		if (e.currentTarget.checked) {
			setSelectedChips([...selectedChips, value]);
		} else {
			setSelectedChips(selectedChips.filter((v) => v !== value));
		}
	};

	return (
		<WithHeroTemplate heroLabel={"プロジェクト一覧"}>
			<ProjectsSearch
				keyword={keyword}
				onChangeKeyword={onChangeKeyword}
				onChangeChips={onChangeChips}
			/>
			<section className={styles["page__cards"]}>
				<NewProjectCard />
			</section>
		</WithHeroTemplate>
	);
}
