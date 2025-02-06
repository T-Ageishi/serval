import { ReactNode } from "react";
import Navigation from "@/components/molecules/navigation";
import { NavLink } from "react-router";
import Button from "@/components/molecules/button";
import styles from "./index.module.css";
import { useAppSelector } from "@/redux/hooks/use-app-selector.ts";
import { darken, lighten, selectTheme } from "@/redux/slices/theme-slice.ts";
import { useDispatch } from "react-redux";

export default function Header(): ReactNode {
	const theme = useAppSelector(selectTheme);
	const dispatch = useDispatch();

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
				<Button
					icon={theme === "light" ? "dark_mode" : "light_mode"}
					className={styles["header__theme-button"]}
					onClick={() => dispatch(theme === "light" ? darken() : lighten())}
				/>
			</div>
		</header>
	);
}
