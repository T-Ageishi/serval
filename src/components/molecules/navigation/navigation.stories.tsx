import type { Meta, StoryObj } from "@storybook/react";
import Navigation from ".";

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
		nextjs: {
			navigation: {
				pathname: "/",
			},
		},
	},
};

export const Projects: Story = {
	parameters: {
		nextjs: {
			navigation: {
				pathname: "/projects",
			},
		},
	},
};
