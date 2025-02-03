import type { Meta, StoryObj } from "@storybook/react";
import Hero from "@/components/atoms/hero/index";

export default {
	title: "Atoms/Hero",
	component: Hero,
} satisfies Meta<typeof Hero>;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
	args: {
		label: "プロジェクト一覧",
	},
};
