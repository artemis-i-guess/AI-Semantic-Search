import { Box, Typography, Stack, TextField } from "@mui/material";
import React, { useEffect } from "react";
import CustomTextField from "../components/CustomTextField";
import { displayMap } from "../utils/mapbox";
import { alert } from "../components/CustomAlert/alert";
import "./style.css";
// import locations from "../assets/dev-data/records.json";
import { getAllLocations } from "../services/api";
import { useState } from "react";
import {search} from "../services/semanticapi"

const Search = ({ setUserLocation, userLocation }) => {
	const [locations, setLocations] = useState([]);
	const [state, setState] = useState(null);
	const [city, setCity] = useState(null);
	const [district, setDistrict] = useState(null);
	const [specialization, setSpecialization] = useState(null);
	const [search, setSearch] = useState(null);
	const [warning, setWarning] = useState("Type something to see results");

	useEffect(() => {
		const refreshData = async () => {
			try {
				const query = search + specialization + district + city + state
				const res = await search(query)
				console.log(res);
				setLocations(res.data.data.doctors);
			} catch (err) {
				console.log(err);
				alert({ message: err.response.data.message, type: "error" });
			}
		};

		refreshData();
	}, []);

	
	

	return (
		<Stack
			className="section search"
			direction={"column"}
			sx={{
				width: "100%",
				maxWidth: "100%",
				marginTop: "100px",
				border: "0px solid red",
				alignItems: "center",
			}}
		>
			<div className="heading">Search Doctors, Make an Appointment</div>
			<div className="sub-heading">
				Discover all the best doctors, clinics and hospitals near you
				that have taken up the pledge to protect your privacy
			</div>

			<div className="main">
				<div className="left-col">
					{/* <TextField></TextField> */}
					<div className="filter-item">
						<label htmlFor="">Search</label>
						<CustomTextField
							fullWidth={true}
							placeholder="Search for Doctors, Hopitals, etc"
							onInput={(e) => setSearch(e.target.value)}
						></CustomTextField>
					</div>
					<div className="filter-item">
						<label htmlFor="">State</label>
						<CustomTextField
							fullWidth={true}
							placeholder="West Bengal"
							onInput={(e) => setState(e.target.value)}
						></CustomTextField>
					</div>
					<div className="filter-item">
						<label htmlFor="">District</label>
						<CustomTextField
							fullWidth={true}
							placeholder="Howrah, Hoogly, etc"
							onInput={(e) => setDistrict(e.target.value)}
						></CustomTextField>
					</div>
					<div className="filter-item">
						<label htmlFor="">Specialization</label>
						<CustomTextField
							fullWidth={true}
							placeholder="Oncology, cardiology, etc"
							onInput={(e) => setSpecialization(e.target.value)}
						></CustomTextField>
					</div>
				</div>
				<div className="right-col">
					{locations.length > 0 ? (
						<>
							<div className="heading">Search results</div>
							<div className="map">
								<div id="map" data-location={locations}></div>
							</div>
							<div className="results">
								{locations.map((loc) => (
									<div className="item">
										<div className="content">
											<div>
												<h3>{loc.metadeta.hospitalInfo[0]}</h3>
												<div className="specs">
													{loc.metadata.hospitalInfo.splice(1)
														.map((spec) => (
															<div className="spec">
																{spec}
															</div>
														))}
												</div>
											</div>

											{/* <div className="address">
												{loc.address}, {loc.district}
											</div> */}
											<a href="https://cal.com/rishabdugar/30min">
												<div className="btn">
													Make an appointment {">"}
												</div>
											</a>
										</div>
										<div className="logo"></div>
									</div>
								))}
							</div>
						</>
					) : (
						<div className="warning">{warning}</div>
					)}
				</div>
			</div>
		</Stack>
	);
};

export default Search;
