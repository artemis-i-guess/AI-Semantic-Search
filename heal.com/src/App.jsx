import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { GoogleOAuthProvider } from "@react-oauth/google";

import "./App.css";
import Navbar from "./components/Navabr";
import AllRoutes from "./Routes";
import { useState } from "react";
import Footer from "./components/Footer";

export const themeOptions = {
	palette: {
		type: "dark",
		primary: {
			main: "#ff5252",
		},
		secondary: {
			main: "#ff8a80",
		},
		background: {
			paper: "rgb(15, 15, 15)",
			default: "rgb(15, 15, 15)",
		},
		success: {
			main: "#27c52f",
		},
		inactive: {
			main: "rgb(150, 150, 150)",
		},
		black: {
			main: "rgb(0, 0, 0)",
		},
		warning: {
			main: "#ff9800",
		},
		error: {
			main: "#FF4242",
		},
	},
	typography: {
		fontFamily: "Poppins",
		// color: "white"
	},
	overrides: {
		MuiAppBar: {
			colorInherit: {
				backgroundColor: "#111111",
				color: "#fff",
			},
		},
	},
	props: {
		MuiAppBar: {
			color: "secondary",
		},
	},
};

const theme = createTheme(themeOptions);

function App() {
	const [userLocation, setUserLocation] = useState();

	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);

	const login = (userData) => {
		setUser(userData);
		localStorage.setItem("user", JSON.stringify(userData));
	};
	const logout = () => {
		setUser(null);
		localStorage.setItem("user", JSON.stringify(null));
	};

	return (
		<ThemeProvider theme={theme}>
			<GoogleOAuthProvider clientId="163584497548-6uovpebrvioqdepje90dinuagvi60ulc.apps.googleusercontent.com">
				<div className="App">
					<Router>
						<Navbar
							user={user}
							userLocation={userLocation}
							setUserLocation={setUserLocation}
						></Navbar>
						<AllRoutes
							user={user}
							login={login}
							logout={logout}
							userLocation={userLocation}
							setUserLocation={setUserLocation}
						></AllRoutes>
						<Footer></Footer>
					</Router>
				</div>
			</GoogleOAuthProvider>
		</ThemeProvider>
	);
}

export default App;
