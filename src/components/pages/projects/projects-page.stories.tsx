import { App } from "@/app/app.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import {
	reactRouterOutlet,
	reactRouterParameters,
} from "storybook-addon-remix-react-router";

export default {
	title: "Pages/Projects",
	component: App,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof App>;

type Story = StoryObj<typeof App>;
export const Default: Story = {
	parameters: {
		reactRouter: reactRouterParameters({
			location: { path: "/" },
			routing: reactRouterOutlet({ path: "/" }),
		}),
	},
};
export const Projects: Story = {
	parameters: {
		reactRouter: reactRouterParameters({
			location: { path: "/projects" },
			routing: reactRouterOutlet({ path: "/projects" }),
		}),
	},
};
