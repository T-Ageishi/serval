import { ReactNode } from "react";
import Navigation from "@/components/molecules/navigation";
import styles from "./index.module.css";
import { NavLink } from "react-router";

export default function Header(): ReactNode {
	return (
		<header className={styles["header"]}>
			<div className={styles["header__contents"]}>
				<NavLink to={"/"}>
					<img
						className={styles["logo"]}
						src="/logo.svg"
						alt="Next.js logo"
						width={32}
						height={32}
					/>
				</NavLink>
				<Navigation />
			</div>
		</header>
	);
}
