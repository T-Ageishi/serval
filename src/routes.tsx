import { Route, Routes } from "react-router";
import ProjectsPage from "@/components/pages/projects";
import { Home } from "@/components/pages/home";
import MainTemplate from "@/components/templates/main";

export function AppRoutes() {
	return (
		<Routes>
			<Route element={<MainTemplate />}>
				<Route index element={<Home />}></Route>
				<Route path={"/projects"} element={<ProjectsPage />} />
			</Route>
		</Routes>
	);
}
