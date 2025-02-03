import type { Meta, StoryObj } from "@storybook/react";
import Icon from ".";

export default {
	title: "Atoms/Icon",
	component: Icon,
} satisfies Meta<typeof Icon>;

type Story = StoryObj<typeof Icon>;
export const Add: Story = {
	args: {
		name: "add",
	},
};
