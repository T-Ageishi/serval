import type { Meta, StoryObj } from "@storybook/react";
import ProjectsSearch from "@/components/organisms/projects-search/index";

export default {
	title: "Organisms/ProjectsSearch",
	component: ProjectsSearch,
	parameters: {
		layout: "padded",
	},
} satisfies Meta<typeof ProjectsSearch>;

type Story = StoryObj<typeof ProjectsSearch>;

export const Default: Story = {
	args: {},
};
