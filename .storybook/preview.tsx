import type { Preview } from "@storybook/react";
import "@/index.css";
import styles from "./index.module.css";
import { withRouter } from "storybook-addon-remix-react-router";
import { Provider } from "react-redux";
import { store } from "@/store.ts";

const preview: Preview = {
	decorators: [
		withRouter,
		(Story) => (
			<Provider store={store}>
				<div className={`${styles["container"]}`}>
					<Story />
				</div>
			</Provider>
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
