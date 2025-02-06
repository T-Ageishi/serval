import Card from "@/components/atoms/card/index";
import type { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Atoms/Card",
	component: Card,
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof Card>;
export const Default: Story = {
	decorators: [
		(Story) => (
			<div style={{ width: "300px", height: "150px" }}>
				<Story />
			</div>
		),
	],
	args: {
		children: "カード",
	},
};
