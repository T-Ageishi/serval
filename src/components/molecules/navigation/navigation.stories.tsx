import Navigation from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";

export default {
	title: "Molecules/Navigation",
	component: Navigation,
	parameters: {
		layout: "padded",
	},
} satisfies Meta<typeof Navigation>;

type Story = StoryObj<typeof Navigation>;
export const Home: Story = {
	parameters: {
		reactRouter: reactRouterParameters({
			location: {
				path: "/",
			},
		}),
	},
};

export const Projects: Story = {
	parameters: {
		reactRouter: reactRouterParameters({
			location: {
				path: "/projects",
			},
		}),
	},
};
