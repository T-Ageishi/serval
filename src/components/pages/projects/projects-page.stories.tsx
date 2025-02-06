import { Projects } from "@/components/molecules/navigation/navigation.stories";
import ProjectsPage from "@/components/pages/projects/index";
import type { Meta, StoryObj } from "@storybook/react";

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
