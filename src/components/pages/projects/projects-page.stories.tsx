import type { Meta, StoryObj } from "@storybook/react";
import ProjectsPage from "@/components/pages/projects/index";
import { Projects } from "@/components/molecules/navigation/navigation.stories";

export default {
	title: "Pages/Projects",
	component: ProjectsPage,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof Projects>;

type Story = StoryObj<typeof Projects>;
export const Default: Story = {
	parameters: {
		...Projects.parameters,
	},
};
