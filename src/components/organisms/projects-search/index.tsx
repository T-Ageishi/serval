"use client";

import { ChangeEventHandler } from "react";
import Text from "@/components/atoms/text";
import Chips, { ChipProps } from "@/components/atoms/chips";
import styles from "./index.module.css";

export default function ProjectsSearch({
	keyword,
	onChangeKeyword,
	onChangeChips,
}: ProjectsSearchProps) {
	const props: ChipProps[] = [
		{ label: "その他", value: -99999, onChange: onChangeChips },
	];

	return (
		<section>
			<Text
				value={keyword}
				onChange={onChangeKeyword}
				prependIcon={"search"}
				placeholder={"プロジェクトを検索"}
			/>
			<div className={styles["chips-container"]}>
				<Chips chipPropsList={props} />
			</div>
		</section>
	);
}

type ProjectsSearchProps = {
	keyword: string;
	onChangeKeyword: ChangeEventHandler<HTMLInputElement>;
	onChangeChips: ChangeEventHandler<HTMLInputElement>;
};
