import styles from "./index.module.css";
import Icon from "@/components/atoms/icon";
import { clsx } from "clsx";
import { ComponentProps } from "react";

export default function Button({
	icon,
	className,
	type = "button",
	...props
}: ButtonProps) {
	return (
		<button
			type={type}
			className={clsx([
				className,
				styles["button"],
				styles["button--sm"],
				styles["button--icon"],
			])}
			{...props}
		>
			<Icon name={icon} />
		</button>
	);
}

type ButtonProps = ComponentProps<"button"> & {
	icon: string;
};
