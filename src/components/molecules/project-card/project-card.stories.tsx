import type { Meta, StoryObj } from "@storybook/react";
import ProjectCard from ".";

export default {
	title: "Molecules/ProjectCard",
	component: ProjectCard,
} satisfies Meta<typeof ProjectCard>;

type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
	args: {
		title: "プロジェクトのタイトル",
		tags: [
			"f5417143-c1f8-47e9-bd56-8bd31a50756a",
			"x5417143-c1f8-47e9-bd56-8bd31a50756b",
		],
		startsAt: Date.now(),
		endsAt: Date.now(),
		tagMaster: [
			{ id: "f5417143-c1f8-47e9-bd56-8bd31a50756a", title: "資格試験" },
			{ id: "x5417143-c1f8-47e9-bd56-8bd31a50756b", title: "技術" },
		],
	},
	decorators: [
		(Story) => (
			<div style={{ width: "300px", height: "150px" }}>
				<Story />
			</div>
		),
	],
};
