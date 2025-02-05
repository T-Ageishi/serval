import type { Meta, StoryObj } from "@storybook/react";
import ProjectsSearch from "@/components/organisms/projects-search/index";
import { ChangeEventHandler, useState } from "react";

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
	const onChangeKeyword: ChangeEventHandler<HTMLInputElement> = (e) => {
		setKeyword(e.target.value);
	};
	const onChangeChips: ChangeEventHandler<HTMLInputElement> = (e) => {
		const value = Number(e.currentTarget.value);
		if (e.currentTarget.checked) {
			setSelectedChips([...selectedChips, value]);
		} else {
			setSelectedChips(selectedChips.filter((v) => v !== value));
		}
	};
	return (
		<ProjectsSearch
			keyword={keyword}
			onChangeKeyword={onChangeKeyword}
			onChangeChips={onChangeChips}
		/>
	);
}
