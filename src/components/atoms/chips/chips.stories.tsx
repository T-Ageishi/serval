import type { Meta, StoryObj } from "@storybook/react";
import Chips, { ChipProps } from "@/components/atoms/chips/index";
import { ChangeEventHandler, useState } from "react";

export default {
	title: "Atoms/Chips",
	component: Chips,
} satisfies Meta<typeof Chips>;

type Story = StoryObj<typeof Chips>;

export const Default: Story = {
	render: () => {
		const [selectedChips, setSelectedChips] = useState<number[]>([]);
		const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
			const value = Number(e.currentTarget.value);
			if (e.currentTarget.checked) {
				setSelectedChips([...selectedChips, value]);
			} else {
				setSelectedChips(selectedChips.filter((v) => v !== value));
			}
		};
		const props: ChipProps[] = [
			{ label: "プロジェクトA", value: 1, onChange },
			{ label: "プロジェクトB", value: 2, onChange },
			{ label: "プロジェクトC", value: 3, onChange },
			{ label: "プロジェクトD", value: 4, onChange },
			{ label: "Project E", value: 5, onChange },
			{ label: "Project F", value: 6, onChange },
			{ label: "Project G", value: 7, onChange },
			{ label: "Project H", value: 8, onChange },
			{ label: "Project I", value: 9, onChange },
			{ label: "Project J", value: 10, onChange },
		];
		return <Chips chipPropsList={props} />;
	},
};
