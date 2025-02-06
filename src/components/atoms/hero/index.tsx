import styles from "./index.module.css";
import { clsx } from "clsx";
import { ComponentProps, ReactNode } from "react";

export default function Hero({ className, children, ...props }: HeroProps) {
	return (
		<h1 className={clsx([styles["hero"], className])} {...props}>
			{children}
		</h1>
	);
}

type HeroProps = ComponentProps<"h1"> & {
	children: ReactNode;
};
