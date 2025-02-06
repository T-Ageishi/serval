import Button from "@/components/molecules/button/index.tsx";
import type { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Molecules/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Icon: Story = {
	args: {
		icon: "dark_mode",
	},
};
