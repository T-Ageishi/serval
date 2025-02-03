import type { Meta, StoryObj } from "@storybook/react";
import NewProjectCard from "@/components/molecules/new-project-card/index";

export default {
	title: "Molecules/NewProjectCard",
	component: NewProjectCard,
} satisfies Meta<typeof NewProjectCard>;

type Story = StoryObj<typeof NewProjectCard>;

export const Default: Story = {
	decorators: [
		(Story) => <div style={{ height: "150px", width: "300px" }}>{Story()}</div>,
	],
};
