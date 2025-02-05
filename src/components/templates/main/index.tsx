import styles from "./index.module.css";
import Header from "@/components/organisms/header";
import Footer from "@/components/molecules/footer";
import { Outlet } from "react-router";

// @@todo refactor
export default function MainTemplate() {
	return (
		<div className={styles["container"]}>
			<Header />
			<main className={styles["body"]}>
				<section className={styles["body__contents"]}>
					<Outlet />
				</section>
			</main>
			<Footer />
		</div>
	);
}
