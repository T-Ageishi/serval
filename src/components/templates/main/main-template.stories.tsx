import type { Meta, StoryObj } from "@storybook/react";
import MainTemplate from "@/components/templates/main/index";
import { Projects } from "@/components/molecules/navigation/navigation.stories";

export default {
	title: "Templates/MainTemplate",
	component: MainTemplate,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof MainTemplate>;

type Story = StoryObj<typeof MainTemplate>;

export const Default: Story = {
	args: {
		heroLabel: "プロジェクト一覧",
		children: <div>メインのコンテンツ</div>,
	},
	parameters: {
		...Projects.parameters,
	},
};
