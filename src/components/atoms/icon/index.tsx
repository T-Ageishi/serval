import { clsx } from "clsx";
import styles from "./index.module.css";
import { ComponentProps } from "react";

export default function Icon({
	name,
	size = "md",
	className,
	...props
}: IconProps) {
	return (
		<span
			className={clsx([
				"material-symbols-outlined",
				{
					[styles["icon--md"]]: size === "md",
					[styles["icon--lg"]]: size === "lg",
				},
				className,
			])}
			{...props}
		>
			{name}
		</span>
	);
}

type IconProps = ComponentProps<"span"> & {
	name: string;
	size?: "md" | "lg";
};
