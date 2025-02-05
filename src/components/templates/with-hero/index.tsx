import { ReactNode } from "react";
import Hero from "@/components/atoms/hero";
import styles from "./index.module.css";

export default function WithHeroTemplate({
	heroLabel,
	children,
}: {
	heroLabel: string;
	children: ReactNode;
}) {
	return (
		<section>
			<Hero className={styles["hero"]}>{heroLabel}</Hero>
			{children}
		</section>
	);
}
