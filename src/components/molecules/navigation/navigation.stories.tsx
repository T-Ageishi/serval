import Navigation from ".";
import ProjectsPage from "@/components/pages/projects/index";
import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";

export default {
	title: "Molecules/Navigation",
	component: Navigation,
	parameters: {
		layout: "padded",
	},
} satisfies Meta<typeof Navigation>;

type Story = StoryObj<typeof Navigation>;
export const Home: Story = {
	parameters: {
		reactRouter: reactRouterParameters({
			location: {
				path: "/",
			},
		}),
	},
};

export const Projects: Story = {
	parameters: {
		reactRouter: reactRouterParameters({
			routing: {
				path: "/projects",
				handle: <ProjectsPage />,
			},
		}),
	},
};
