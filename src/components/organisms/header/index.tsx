import styles from "./index.module.css";
import Button from "@/components/molecules/button";
import Navigation from "@/components/molecules/navigation";
import { selectTheme } from "@/features/theme";
import { darken, lighten } from "@/features/theme/theme-slice.ts";
import { useAppSelector } from "@/redux/hooks";
import { useAppDispatch } from "@/redux/hooks";
import { ReactNode } from "react";
import { NavLink } from "react-router";

export default function Header(): ReactNode {
	const theme = useAppSelector(selectTheme);
	const dispatch = useAppDispatch();

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
