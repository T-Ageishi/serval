import NewProjectCard from "@/components/molecules/new-project-card";
import styles from "./index.module.css";
import ProjectsSearch from "@/components/organisms/projects-search";
import WithHeroTemplate from "@/components/templates/with-hero";
import { ChangeEventHandler } from "react";
import {
	selectKeyword,
	updateKeyword,
	addCategory,
	removeCategory,
} from "@/features/search/search-slice.ts";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/hooks/use-app-selector.ts";

export default function Projects() {
	const keyword = useAppSelector(selectKeyword);
	const dispatch = useDispatch();

	const onChangeChips: ChangeEventHandler<HTMLInputElement> = (e) => {
		if (e.currentTarget.checked) {
			addCategory(Number(e.currentTarget.value));
		} else {
			removeCategory(Number(e.currentTarget.value));
		}
	};

	return (
		<WithHeroTemplate heroLabel={"プロジェクト一覧"}>
			<ProjectsSearch
				keyword={keyword}
				onChangeKeyword={(e) => dispatch(updateKeyword(e.target.value))}
				onChangeChips={onChangeChips}
			/>
			<section className={styles["page__cards"]}>
				<NewProjectCard />
			</section>
		</WithHeroTemplate>
	);
}
