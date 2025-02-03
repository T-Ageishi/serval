"use client";

import { ReactNode } from "react";
import styles from "./index.module.css";
import { NavLink, useLocation } from "react-router";
import { clsx } from "clsx";

const navSetting = [
	{ label: "Home", href: "/" },
	{ label: "Projects", href: "/projects" },
];

export default function Navigation(): ReactNode {
	const location = useLocation();

	return (
		<nav className={styles["navigation"]}>
			{navSetting.map(({ label, href }) => (
				<NavLink
					key={href}
					to={href}
					className={clsx([
						styles["navigation__item"],
						{
							[styles["navigation__item--active"]]: href === location.pathname,
						},
					])}
				>
					{label}
				</NavLink>
			))}
		</nav>
	);
}
