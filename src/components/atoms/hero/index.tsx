import styles from "./index.module.css";

export default function Hero({ label }: HeroProps) {
	return <h1 className={styles["hero"]}>{label}</h1>;
}

type HeroProps = {
	label: string;
};
