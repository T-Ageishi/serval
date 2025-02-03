import type { Meta, StoryObj } from "@storybook/react";
import ListPage from "@/components/pages/projects/index";
import { Projects } from "@/components/molecules/navigation/navigation.stories";

export default {
	title: "Pages/ProjectsPage",
	component: ListPage,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof ListPage>;

type Story = StoryObj<typeof ListPage>;
export const Default: Story = {
	parameters: {
		...Projects.parameters,
	},
};
