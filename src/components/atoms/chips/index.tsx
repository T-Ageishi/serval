import { ComponentProps, ReactNode } from "react";
import styles from "./index.module.css";

export default function Chips({
	chipPropsList = [],
}: {
	chipPropsList: ChipProps[];
}): ReactNode {
	return (
		<div className={styles["chips"]}>
			{chipPropsList.map((props) => (
				<Chip key={props.value} {...props} />
			))}
		</div>
	);
}

export function Chip({ label, value, ...props }: ChipProps): ReactNode {
	const isValidValue = typeof value === "string" || typeof value === "number";
	const Tag = isValidValue ? "label" : "div";
	return (
		<Tag className={styles["chip"]}>
			{value && (
				<input
					type={"checkbox"}
					value={value}
					className={styles["chip__checkbox"]}
					{...props}
				/>
			)}
			<div>{label}</div>
		</Tag>
	);
}

export type ChipProps = ComponentProps<"input"> & {
	value?: string | number;
	label: string;
};
