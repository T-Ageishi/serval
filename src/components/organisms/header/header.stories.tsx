import Header from ".";
import type { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Organisms/Header",
	component: Header,
	parameters: {
		layout: "padded",
	},
} satisfies Meta<typeof Header>;

type Story = StoryObj<typeof Header>;
export const Default: Story = {
	args: {},
};
