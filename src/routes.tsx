import { Route, Routes } from "react-router";
import ProjectsPage from "@/components/pages/projects";
import { HomePage } from "@/components/pages/home";

export function AppRoutes() {
	return (
		<Routes>
			<Route path={"/"} element={<HomePage />} />
			<Route path={"/projects"} element={<ProjectsPage />} />
		</Routes>
	);
}
