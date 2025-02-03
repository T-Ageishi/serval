import type { Meta, StoryObj } from "@storybook/react";
import Navigation from ".";
import {
	reactRouterParameters,
	withRouter,
} from "storybook-addon-remix-react-router";

export default {
	title: "Molecules/Navigation",
	component: Navigation,
	parameters: {
		layout: "padded",
	},
} satisfies Meta<typeof Navigation>;

type Story = StoryObj<typeof Navigation>;
export const Home: Story = {
	decorators: [withRouter],
	parameters: {
		reactRouter: reactRouterParameters({
			location: {
				path: "/",
			},
		}),
	},
};

export const Projects: Story = {
	decorators: [withRouter],
	parameters: {
		reactRouter: reactRouterParameters({
			location: {
				path: "/projects",
			},
		}),
	},
};
