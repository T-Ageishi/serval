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
			style={{ width: `${width}px`, height: `${height}px` }}
		/>
	);
}

export type SkeletonProps = {
	width?: number;
	height?: number;
	variant?: "rounded";
};
