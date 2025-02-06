import styles from "./index.module.css";
import "@/index.css";
import { store } from "@/store.ts";
import type { Preview } from "@storybook/react";
import { Provider } from "react-redux";
import { withRouter } from "storybook-addon-remix-react-router";

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
