import { Box, Typography, Stack, TextField } from "@mui/material";
import React, { useEffect } from "react";
import CustomTextField from "../components/CustomTextField";
import { displayMap } from "../utils/mapbox";
import "./style.css";
import locations from "../assets/dev-data/records.json";
import { useState } from "react";

const Dashboard = () => {
	const bookings = [];
    return (
        <Stack
            className="section dashboard"
            direction={"column"}
            sx={{
                width: "100%",
                maxWidth: "100%",
                marginTop: "100px",
                border: "0px solid red",
                alignItems: "center",
            }}
        >
            <div className="heading">Appointments</div>
            <div className="sub-heading">
                See all your upcoming and past appointments
            </div>

            <div className="main">
                
				{
					bookings.length > 0 ? (
					<div></div>
					) : (
							<p className="no-booking">No bookings right now. </p>
					)
				}
            </div>
        </Stack>
    );
};

export default Dashboard;