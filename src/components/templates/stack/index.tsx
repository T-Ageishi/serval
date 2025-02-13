import styles from "./index.module.css";
import { ReactNode } from "react";

export default function Stack({ children }: StackProps) {
	return <div className={styles["stack"]}>{children}</div>;
}

type StackProps = {
	children: ReactNode;
};
