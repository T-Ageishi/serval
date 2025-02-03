import type { Meta, StoryObj } from "@storybook/react";
import ProjectsPage from "@/components/pages/projects/index";
import { Projects } from "@/components/molecules/navigation/navigation.stories";

export default {
	title: "Pages/ProjectsPage",
	component: ProjectsPage,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof ProjectsPage>;

type Story = StoryObj<typeof ProjectsPage>;
export const Default: Story = {
	parameters: {
		...Projects.parameters,
	},
};
