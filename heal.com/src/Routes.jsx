import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Search from "./pages/Search";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";

const AllRoutes = ({userLocation, setUserLocation, user, login, logout}) => {
	return (
		<Routes>
			<Route
				exact
				path="/"
				element={
					<Home login={login} logout={logout} user={user}></Home>
				}
			></Route>
			<Route
				exact
				path="/about"
				element={
					<About login={login} logout={logout} user={user}></About>
				}
			></Route>
			<Route
				exact
				path="/search"
				element={
					<Search
						login={login}
						logout={logout}
						user={user}
						userLocation={userLocation}
						setUserLocation={setUserLocation}
					></Search>
				}
			></Route>
			<Route
				exact
				path="/dashboard"
				element={
					<Dashboard
						login={login}
						logout={logout}
						user={user}
						userLocation={userLocation}
						setUserLocation={setUserLocation}
					></Dashboard>
				}
			></Route>
			<Route
				exact
				path="/auth"
				element={
					<Auth
						login={login}
						logout={logout}
						user={user}
						userLocation={userLocation}
						setUserLocation={setUserLocation}
					></Auth>
				}
			></Route>
		</Routes>
	);
}

export default AllRoutes;