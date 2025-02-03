"use client";

import { ChangeEventHandler, useState } from "react";
import Text from "@/components/atoms/text";
import Chips, { ChipProps } from "@/components/atoms/chips";
import styles from "./index.module.css";

export default function ProjectsSearch({}: ProjectsSearchProps) {
	const [keyword, setKeyword] = useState<string>("");
	const [selectedChips, setSelectedChips] = useState<number[]>([]);

	const onChangeText: ChangeEventHandler<HTMLInputElement> = (e) => {
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
	const props: ChipProps[] = [
		{ label: "その他", value: -99999, onChange: onChangeChips },
	];

	return (
		<section>
			<Text
				value={keyword}
				onChange={onChangeText}
				prependIcon={"search"}
				placeholder={"プロジェクトを検索"}
			/>
			<div className={styles["chips-container"]}>
				<Chips chipPropsList={props} />
			</div>
		</section>
	);
}

type ProjectsSearchProps = {};
