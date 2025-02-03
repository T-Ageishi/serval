import type { Preview } from "@storybook/react";
import "@/index.css";
import styles from "./index.module.css";
import { withRouter } from "storybook-addon-remix-react-router";

const preview: Preview = {
	decorators: [
		withRouter,
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
