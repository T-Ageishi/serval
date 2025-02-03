import { ReactNode } from "react";
import Card from "@/components/atoms/card";
import Icon from "@/components/atoms/icon";
import styles from "./index.module.css";

export default function NewProjectCard(): ReactNode {
	return (
		<Card className={styles["new-project-card"]}>
			<div className={styles["new-project-card__body"]}>
				<Icon className={styles["icon"]} name={"library_add"} size={"lg"} />
				<span className={styles["new-project-card__label"]}>新規登録</span>
			</div>
		</Card>
	);
}
