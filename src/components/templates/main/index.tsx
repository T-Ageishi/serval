import styles from "./index.module.css";
import Header from "@/components/organisms/header";
import Hero from "@/components/atoms/hero";
import Footer from "@/components/molecules/footer";

export default function MainTemplate({
	heroLabel,
	children,
}: MainTemplateProps) {
	return (
		<div className={styles["container"]}>
			<Header />
			<main className={styles["body"]}>
				<Hero label={heroLabel} />
				<section className={styles["body__contents"]}>{children}</section>
			</main>
			<Footer />
		</div>
	);
}

type MainTemplateProps = {
	heroLabel: string;
	children: React.ReactNode;
};
