import styles from "./index.module.css";
import Card from "@/components/atoms/card";
import Chips from "@/components/atoms/chips";
import { selectCategories } from "@/features/projects";
import { ReactNode } from "react";
import { useSelector } from "react-redux";

export default function ProjectCard({
	title,
	tags,
	startsAt,
	endsAt,
}: ProjectCardProps): ReactNode {
	const categories = useSelector(selectCategories);

	return (
		<ProjectCardPresentation
			title={title}
			tagTitles={tags
				.filter((t) => categories.some((c) => c.id === t))
				.map((t) => ({
					label: categories.find((setting) => setting.id === t)?.title || "",
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
			{tagTitles.length > 0 && (
				<div className={styles["card__chips"]}>
					<Chips chipPropsList={tagTitles} />
				</div>
			)}
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

export type ProjectCardProps = {
	title: string;
	tags: number[];
	startsAt: number;
	endsAt: number;
};

type ProjectCardPresentationProps = {
	title: string;
	tagTitles: { label: string }[];
	startsDate: Date;
	endsDate: Date;
};
