import type { Preview } from "@storybook/react";
import "@/index.css";
import styles from "./index.module.css";

const preview: Preview = {
	decorators: [
		(Story) => (
			<div className={`${styles["container"]}`}>
				<Story />
			</div>
		),
	],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		options: {
			storySort: {
				order: ["Atoms", "Molecules", "Organisms", "Templates", "Pages"],
			},
		},
	},
};

export default preview;
