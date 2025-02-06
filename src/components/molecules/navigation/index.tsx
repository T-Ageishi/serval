"use client";

import styles from "./index.module.css";
import { clsx } from "clsx";
import { ReactNode } from "react";
import { NavLink, useLocation } from "react-router";

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
