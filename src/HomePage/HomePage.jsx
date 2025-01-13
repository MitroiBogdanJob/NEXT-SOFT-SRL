import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

import pcaps from "./Images-HomePage/pcaps.png";
import apiaps from "./Images-HomePage/apiaps.png";
import erpaps from "./Images-HomePage/erpaps.webp";

function HomePage() {
	return (
		<>
			<h6>Your Trusted Partner in Software Solutions</h6>
			<div className="first-text">
				No matter what software you need, our team can develop it.
				<br />
				<strong className="strong-font-normal highlight">
					{" "}
					Next Soft SRL
				</strong>{" "}
				is a leading provider of IT solutions.
				<br />
			</div>
			<div className="menu-contain-text-left">
				<p className="text-large homepage-text-large_homepage-text-lg__24_gZ">
					<div>
						{/* Link-ul stilizat ca buton */}
						<Link to="/ContactForm" className="transparent-button">
							Let’s start your first project together
						</Link>
						<br />
						<br />
					</div>
					<img className="pcaps" src={pcaps} alt="pcaps" />
					<img className="erpaps" src={erpaps} alt="erpaps" />
					<img className="apiaps" src={apiaps} alt="apiaps" />
					<br />
					Technology is our how. And people are our why!
					<br />
					<br />
					At <strong className="strong-font-normal highlight">NEXT SOFT</strong>
					, we bring your ideas to life through expert development and design
					services.
					<br />
					We specialize in{" "}
					<strong className="strong-font-normal">Desktop applications, </strong>
					<strong className="strong-font-normal">
						WEB applications, ERP systems
					</strong>
					<strong className="strong-font-normal"> and APIs</strong>.<br />
					We are committed to building long-term partnerships that evolve with
					your <strong className="strong-font-normal">business needs</strong>.
					We provide impactful, scalable, and{" "}
					<strong className="strong-font-normal">
						user-friendly digital products{" "}
					</strong>
					that drive your{" "}
					<strong className="strong-font-normal">business growth</strong>{" "}
					globally.
					<br />
					<br />
					We have been harnessing technology to drive meaningful change.
					Combining world-class engineering, industry expertise and a
					people-centric mindset, we consult and partner with our customers to
					create technological solutions that drive innovation and transform
					businesses.
				</p>
			</div>
		</>
	);
}

export default HomePage;
