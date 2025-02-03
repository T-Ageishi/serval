import type { Meta, StoryObj } from "@storybook/react";
import Footer from "@/components/molecules/footer/index";

export default {
	title: "Molecules/Footer",
	component: Footer,
	parameters: {
		layout: "padded",
	},
} satisfies Meta<typeof Footer>;

type Story = StoryObj<typeof Footer>;
export const Default: Story = {};
