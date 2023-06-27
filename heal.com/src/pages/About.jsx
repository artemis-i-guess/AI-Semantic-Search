import React from 'react';
import { Box, Typography, Stack, TextField } from "@mui/material";
import "./style.css";

const About = () => {
	return (
		<Stack
			className="section about"
			direction={"column"}
			sx={{
				width: "100%",
				maxWidth: "100%",
				marginTop: "100px",
				border: "0px solid red",
				alignItems: "center",
			}}
		>
			<div className="heading">
				30% of women do <a>NOT AVAIL</a> any care for reproductive
				health due to social stigma.
			</div>
			<div className="sub-heading">
				<p>
					When a young girl wants to see a doctor about her irregular
					periods, she has to face 3 other hospital staff before she
					can get to the doctor herself.
				</p>
				<p>
					It is unsafe for many unmarried women to seek reproductive
					healthcare due to familial pressure.
				</p>
			</div>
			<div className="cover">
				<img class="coverImage" src="/assets/about-cover.jpg" alt="" />
			</div>
			<div className="text">
				<p>
					All of this is a result of the ideas that society dictates
					regarding reproductive health.
				</p>

				<p>
					We at Heal recognize the issues that people face everyday
					due to this stigma. It is not in our hands to change
					millions of minds overnight. But it is within our hands to
					make healthcare services more accessible to those who need
					it. Heal strives to remove the middlemen when a person looks
					for reproductive healthcare services, to bring the patient
					directly to the doctor.
				</p>
				<p>
					Heal partners with certified NGOs to bring you the best
					doctors in the business. Heal cooperates with hospitals to
					cater to you the smoothest experience in case you need a
					medical procedure done. We make healing easier.
				</p>
			</div>
		</Stack>
	);
}
 
export default About;