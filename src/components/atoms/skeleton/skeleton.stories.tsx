import Skeleton from "@/components/atoms/skeleton/index.tsx";
import { Meta, StoryObj } from "@storybook/react";

export default {
	component: Skeleton,
	title: "Atoms/Skeleton",
} satisfies Meta<typeof Skeleton>;

type Story = StoryObj<typeof Skeleton>;
export const Default: Story = {};
