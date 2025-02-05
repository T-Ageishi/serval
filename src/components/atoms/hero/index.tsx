import styles from "./index.module.css";
import { ComponentProps, ReactNode } from "react";
import { clsx } from "clsx";

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
