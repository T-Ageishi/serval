import styles from "./index.module.css";
import { clsx } from "clsx";
import { ComponentProps, ReactNode } from "react";

export default function Card({
	children,
	className,
	...props
}: CardProps): ReactNode {
	return (
		<div className={clsx([styles["card"], className])} {...props}>
			{children}
		</div>
	);
}

type CardProps = ComponentProps<"div"> & {
	children: ReactNode;
};
