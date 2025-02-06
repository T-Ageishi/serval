import Footer from "@/components/molecules/footer/index";
import type { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Molecules/Footer",
	component: Footer,
	parameters: {
		layout: "padded",
	},
} satisfies Meta<typeof Footer>;

type Story = StoryObj<typeof Footer>;
export const Default: Story = {};
