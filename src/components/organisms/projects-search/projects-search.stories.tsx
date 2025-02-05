import type { Meta, StoryObj } from "@storybook/react";
import ProjectsSearch from "@/components/organisms/projects-search/index";
import { useState } from "react";

export default {
	title: "Organisms/ProjectsSearch",
	component: ProjectsSearchWithHook,
	parameters: {
		layout: "padded",
	},
} satisfies Meta<typeof ProjectsSearchWithHook>;

type Story = StoryObj<typeof ProjectsSearchWithHook>;

export const Default: Story = {
	args: {},
};

function ProjectsSearchWithHook() {
	const [keyword, setKeyword] = useState<string>("");
	const [selectedChips, setSelectedChips] = useState<number[]>([]);
	return (
		<ProjectsSearch
			keyword={keyword}
			onChangeKeyword={(e) => setKeyword(e.target.value)}
			onChangeChips={(e) => {
				const value = Number(e.currentTarget.value);
				if (e.currentTarget.checked) {
					setSelectedChips([...selectedChips, value]);
				} else {
					setSelectedChips(selectedChips.filter((v) => v !== value));
				}
			}}
		/>
	);
}
