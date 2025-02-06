import Home from "@/components/pages/home";
import Projects from "@/components/pages/projects";
import MainTemplate from "@/components/templates/main";
import { useAppSelector } from "@/redux/hooks/use-app-selector.ts";
import { selectTheme } from "@/redux/slices/theme-slice.ts";
import { Outlet, Route, Routes } from "react-router";

export function App() {
	return (
		<Routes>
			<Route element={<AppRoot />}>
				<Route element={<MainTemplate />}>
					<Route index element={<Home />}></Route>
					<Route path={"/projects"} element={<Projects />} />
				</Route>
			</Route>
		</Routes>
	);
}

function AppRoot() {
	const theme = useAppSelector(selectTheme);
	return (
		<div className={`app ${theme}`}>
			<Outlet />
		</div>
	);
}
