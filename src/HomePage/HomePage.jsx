import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

import pcaps from "./Images-HomePage/pcaps.png";
import apiaps from "./Images-HomePage/apiaps.png";
import erpaps from "./Images-HomePage/erpaps.webp";

function HomePage() {
	return (
		<>
			<h6 className="title-text">Software Solutions</h6>
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
							Let’s start our first project together
						</Link>

						<br />
						<br />
					</div>
					<div className="applications-container">
						{/* Acesta este un comentariu în JSX <span className="applications-text">Desktop Applications</span><span className="web">WebSites</span>*/}
						<img className="pcaps" src={pcaps} alt="pcaps" />
						<img className="erpaps" src={erpaps} alt="erpaps" />
						<div className="applications-container">
							<div className="website-container"></div>
						</div>

						<span className="applications-text"></span>
					</div>
					<br />
					<p style={{ color: "rgb(29, 92, 168)", fontSize: "22px" }}>
						Technology is our how. And people are our why!
					</p>
					<br />
					<br />
					At <strong className="strong-font-normal highlight">NEXT SOFT</strong>
					, we bring your ideas to life through expert development and design
					services.
					<br />
					We specialize in{" "}
					<strong className="strong-font-normal">Desktop applications, </strong>
					<strong className="strong-font-normal">
						Web applications, Databases, ERP systems
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
