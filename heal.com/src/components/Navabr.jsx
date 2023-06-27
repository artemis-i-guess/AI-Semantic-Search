import React, { useEffect } from "react";
import {
	AppBar,
	Container,
	Toolbar,
	Box,
	Stack,
	Button,
	Typography,
	Avatar,
} from "@mui/material";
import { NavLink, useLocation, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ userLocation, setUserLocation, user }) => {
	return (
		<div className="navbar">
			<div className="contents">
				<div className="logo">Heal.com</div>
				<div className="nav-links">
					<NavLink to="/">
						<div className="item">Home</div>
					</NavLink>
					<NavLink to="/about">
						<div className="item">About Us</div>
					</NavLink>
					<NavLink to="/dashboard">
						<div className="item">Dashboard</div>
					</NavLink>
					<NavLink to="/search">
						<div className="item">Search</div>
					</NavLink>
					{user ? (
						<div className="item">
							<Avatar alt = {user.name} src={user.image}></Avatar>
							{user.name}</div>
					) : (
						<NavLink to="/auth">
							<div className="button">
								<div className="item">Login &gt;</div>
							</div>
						</NavLink>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
