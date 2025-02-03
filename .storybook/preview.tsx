import type { Preview } from "@storybook/react";
import "@/index.css";
import styles from "./index.module.css";
import { BrowserRouter } from "react-router";

const preview: Preview = {
	decorators: [
		(Story) => (
			<BrowserRouter>
				<div className={`${styles["container"]}`}>
					<Story />
				</div>
			</BrowserRouter>
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
