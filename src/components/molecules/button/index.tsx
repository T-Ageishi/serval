import { ComponentProps } from "react";
import Icon from "@/components/atoms/icon";
import styles from "./index.module.css";
import { clsx } from "clsx";

export default function Button({ icon, className, ...props }: ButtonProps) {
	return (
		<button
			className={clsx([
				className,
				styles["button"],
				styles["button--md"],
				styles["button--icon"],
			])}
			{...props}
		>
			<Icon name={icon} size={"lg"} />
		</button>
	);
}

type ButtonProps = ComponentProps<"button"> & {
	icon: string;
};
