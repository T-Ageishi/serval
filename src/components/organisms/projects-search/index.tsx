"use client";

import styles from "./index.module.css";
import Chips, { ChipProps } from "@/components/atoms/chips";
import Text from "@/components/atoms/text";
import { useAppSelector } from "@/redux/hooks";
import { useAppDispatch } from "@/redux/hooks";
import {
	fetchCategories,
	selectCategories,
	selectCategoriesStatus,
} from "@/redux/slices/category-slice.ts";
import {
	selectKeyword,
	updateKeyword,
	addCategory,
	removeCategory,
} from "@/redux/slices/search-slice.ts";
import { store } from "@/store.ts";
import { ChangeEvent, useEffect } from "react";

export default function ProjectsSearch() {
	const keyword = useAppSelector(selectKeyword);
	const categories = useAppSelector(selectCategories);
	const categoriesStatus = useAppSelector(selectCategoriesStatus);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (categoriesStatus === "pending") {
			store.dispatch(fetchCategories());
		}
	}, [categoriesStatus]);

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
				<Chips chipPropsList={chipProps} />
			</div>
		</section>
	);
}

/**
 * カテゴリーの選択状態が変化したときの処理
 */
function onChangeChips(e: ChangeEvent<HTMLInputElement>) {
	if (e.currentTarget.checked) {
		addCategory(Number(e.currentTarget.value));
	} else {
		removeCategory(Number(e.currentTarget.value));
	}
}
