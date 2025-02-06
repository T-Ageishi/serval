import MainTemplate from "@/components/templates/main/index";
import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";

export default {
	title: "Templates/MainTemplate",
	component: MainTemplate,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof MainTemplate>;

type Story = StoryObj<typeof MainTemplate>;

export const Default: Story = {
	parameters: {
		parameters: {
			reactRouter: reactRouterParameters({
				location: { path: "/" },
			}),
		},
	},
};
