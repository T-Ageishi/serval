import styles from "./index.module.css";
import { clsx } from "clsx";

export default function Skeleton({
	width = 40,
	height = 40,
	variant = "rounded",
}: SkeletonProps) {
	return (
		<div
			className={clsx([styles["skeleton"], styles[`skeleton--${variant}`]])}
			style={{
				width: `${typeof width === "number" ? `${width}px` : width}`,
				height: `${typeof height === "number" ? `${height}px` : height}`,
			}}
		/>
	);
}

export type SkeletonProps = {
	width?: number | string;
	height?: number | string;
	variant?: "rounded";
};
