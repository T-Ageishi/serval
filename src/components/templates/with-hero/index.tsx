import styles from "./index.module.css";
import Hero from "@/components/atoms/hero";
import { ReactNode } from "react";

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
