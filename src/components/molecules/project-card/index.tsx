import { ReactNode } from "react";
import styles from "./index.module.css";
import Card from "@/components/atoms/card";
import Chips from "@/components/atoms/chips";

export default function ProjectCard({
	title,
	tags,
	startsAt,
	endsAt,
	tagMaster,
}: ProjectCardProps): ReactNode {
	return (
		<ProjectCardPresentation
			title={title}
			tagTitles={tags.map((tag) => ({
				label: tagMaster.find((setting) => setting.id === tag)?.title || "",
			}))}
			startsDate={new Date(startsAt)}
			endsDate={new Date(endsAt)}
		/>
	);
}

function ProjectCardPresentation({
	title,
	tagTitles,
	startsDate,
	endsDate,
}: ProjectCardPresentationProps): ReactNode {
	return (
		<Card className={styles["card"]}>
			<h3 className={styles["card__title"]}>
				<span className={styles["card__title-inner"]}>{title}</span>
			</h3>
			<p className={styles["card__duration"]}>
				<span>
					{formatDate(startsDate)} ~ {formatDate(endsDate)}
				</span>
			</p>
			<div className={styles["card__chips"]}>
				<Chips chipPropsList={tagTitles} />
			</div>
		</Card>
	);
}

/**
 * 日付をフォーマットする
 */
function formatDate(date: Date): string {
	const formatOptions: Intl.DateTimeFormatOptions = {
		dateStyle: "short",
		timeZone: "Asia/Tokyo",
	};
	const formatter = new Intl.DateTimeFormat("ja", formatOptions);
	return formatter.format(date);
}

// TODO 型定義を見直す
type ProjectCardProps = {
	title: string;
	tags: string[];
	startsAt: number;
	endsAt: number;
	tagMaster: { id: string; title: string }[];
};

type ProjectCardPresentationProps = {
	title: string;
	tagTitles: { label: string }[];
	startsDate: Date;
	endsDate: Date;
};
