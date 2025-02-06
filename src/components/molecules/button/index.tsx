import styles from "./index.module.css";
import Icon from "@/components/atoms/icon";
import { clsx } from "clsx";
import { ComponentProps } from "react";

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
