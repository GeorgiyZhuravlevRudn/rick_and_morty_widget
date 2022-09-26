import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes} from "react-router-dom";
import { getRoutes, publicRoutes} from "../router/index";
const AppRouter = () => {
	const isAuth = 	useSelector( state => state.userReducer.isAuth);
	const {role} = 	useSelector( state => state.userReducer.user);
	const switcherFunction = () => {
		// getRoutesByRole
		const routes = getRoutes(role);
		return (
			routes.map((route) =>
				<Route
					path = {route.path}
					element = {<route.component/>}
					exact = {route.exact}
					key = {route.path}
				/>)
		)
	}
	return (
		<Routes>
			{
				isAuth
				? switcherFunction()
				: publicRoutes.map((route) =>
					<Route
						path = {route.path}
						element = {<route.component/>}
						exact = {route.exact}
						key = {route.path}
					/>)
			}
		</Routes>
	);
};
export default AppRouter;
