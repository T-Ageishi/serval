import Header from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";

export default {
	title: "Organisms/Header",
	component: Header,
	parameters: {
		layout: "padded",
	},
} satisfies Meta<typeof Header>;

type Story = StoryObj<typeof Header>;
export const Default: Story = {
	parameters: {
		reactRouter: reactRouterParameters({
			routing: {
				path: "/",
			},
		}),
	},
};

export const Projects: Story = {
	parameters: {
		reactRouter: reactRouterParameters({
			routing: {
				path: "/projects",
			},
		}),
	},
};
