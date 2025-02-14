import styles from "./app.module.css";
import { useAppSelector } from "@/common/hooks/redux.ts";
import Home from "@/components/pages/home";
import Projects from "@/components/pages/projects";
import MainTemplate from "@/components/templates/main";
import { selectTheme } from "@/features/theme/";
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
		<div className={`${styles["app"]} ${theme}`}>
			<Outlet />
		</div>
	);
}
