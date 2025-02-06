import { Projects } from "@/components/molecules/navigation/navigation.stories";
import MainTemplate from "@/components/templates/main/index";
import type { Meta, StoryObj } from "@storybook/react";

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
		...Projects.parameters,
	},
};
