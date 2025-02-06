import Hero from "@/components/atoms/hero/index";
import type { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Atoms/Hero",
	component: Hero,
} satisfies Meta<typeof Hero>;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
	args: {
		children: "プロジェクト一覧",
	},
};
