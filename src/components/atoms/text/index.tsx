import styles from "./index.module.css";
import Icon from "@/components/atoms/icon";
import { clsx } from "clsx";
import { ComponentProps, ReactNode } from "react";

export default function Text({
	type = "text",
	className,
	prependIcon,
	...props
}: TextProps): ReactNode {
	return (
		<div className={styles["container"]}>
			{prependIcon && (
				<Icon name={prependIcon} className={styles["text__icon"]} />
			)}
			<input
				type={type}
				className={clsx([
					styles["text"],
					className,
					{ [styles["text--with-icon"]]: !!prependIcon },
				])}
				{...props}
			/>
		</div>
	);
}

type TextProps = ComponentProps<"input"> & {
	prependIcon?: string;
};
