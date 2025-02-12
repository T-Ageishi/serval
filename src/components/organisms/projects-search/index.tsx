"use client";

import styles from "./index.module.css";
import Chips, { ChipProps } from "@/components/atoms/chips";
import Text from "@/components/atoms/text";
import { useAppSelector } from "@/redux/hooks";
import { useAppDispatch } from "@/redux/hooks";
import {
	selectKeyword,
	updateKeyword,
	addCategory,
	removeCategory,
} from "@/redux/slices/search-slice.ts";
import { ChangeEvent, useEffect, useMemo, useState } from "react";

export default function ProjectsSearch() {
	const [categories, setCategories] = useState<Category[]>([]);
	const keyword = useAppSelector(selectKeyword);
	const dispatch = useAppDispatch();

	useEffect(() => {
		// @@todo データ取得
		setTimeout(() => setCategories([{ value: -99999, label: "その他" }]), 5000);
		return () => setCategories([]);
	}, []);

	const chipProps: ChipProps[] = useMemo(() => {
		return categories.map((c) => ({ ...c, onChange: onChangeChips }));
	}, [categories]);

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

type Category = { value: number; label: string };
