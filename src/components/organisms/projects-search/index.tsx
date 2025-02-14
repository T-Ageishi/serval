import styles from "./index.module.css";
import { useAppDispatch, useAppSelector } from "@/common/hooks/redux.ts";
import Chips, { ChipProps } from "@/components/atoms/chips";
import Skeleton from "@/components/atoms/skeleton";
import Text from "@/components/atoms/text";
import {
	selectCategories,
	selectProjectsStatus,
} from "@/features/projects/ducks";
import { selectKeyword } from "@/features/search/ducks";
import {
	updateKeyword,
	addCategory,
	removeCategory,
} from "@/features/search/ducks";
import { ChangeEvent } from "react";

export default function ProjectsSearch() {
	const keyword = useAppSelector(selectKeyword);
	const categories = useAppSelector(selectCategories);
	const categoriesStatus = useAppSelector(selectProjectsStatus);
	const dispatch = useAppDispatch();

	//カテゴリーの選択状態が変化したときの処理
	const onChangeChips = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget.checked) {
			dispatch(addCategory(Number(e.currentTarget.value)));
		} else {
			dispatch(removeCategory(Number(e.currentTarget.value)));
		}
	};
	const chipProps: ChipProps[] = categories.map((c) => ({
		value: c.id,
		label: c.title,
		onChange: onChangeChips,
	}));

	return (
		<section>
			<Text
				value={keyword}
				onChange={(e) => dispatch(updateKeyword(e.target.value))}
				className={styles["search__text"]}
				prependIcon={"search"}
				placeholder={"プロジェクトを検索"}
			/>
			<div className={styles["search__chips-container"]}>
				{categoriesStatus === "succeeded" ? (
					<Chips chipPropsList={chipProps} />
				) : (
					<div style={{ display: "flex", gap: "8px" }}>
						<Skeleton height={25} width={100} />
						<Skeleton height={25} width={100} />
						<Skeleton height={25} width={100} />
					</div>
				)}
			</div>
		</section>
	);
}
