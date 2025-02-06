import styles from "./index.module.css";
import Footer from "@/components/molecules/footer";
import Header from "@/components/organisms/header";
import { Outlet } from "react-router";

// @@todo refactor
export default function MainTemplate() {
	return (
		<div className={styles["container"]}>
			<Header />
			<main className={styles["body"]}>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
