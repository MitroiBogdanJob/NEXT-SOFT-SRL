import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import DualSlider from "./DualSlider/DualSlider"; // Asigură-te că calea este corectă

function HomePage() {
	const imagesTop = [
		require("./DualSlider/Images-DualSlider/1.PNG"),
		require("./DualSlider/Images-DualSlider/1m.PNG"),
		require("./DualSlider/Images-DualSlider/2.PNG"),
		require("./DualSlider/Images-DualSlider/2m.PNG"),
		require("./DualSlider/Images-DualSlider/3.PNG"),
		require("./DualSlider/Images-DualSlider/3m.PNG"),
		require("./DualSlider/Images-DualSlider/4.PNG"),
		require("./DualSlider/Images-DualSlider/4m.PNG"),
		require("./DualSlider/Images-DualSlider/1.PNG"),
		require("./DualSlider/Images-DualSlider/1m.PNG"),
	];

	const imagesBottom = [
		require("./DualSlider/Images-DualSlider/1.PNG"),
		require("./DualSlider/Images-DualSlider/1m.PNG"),
		require("./DualSlider/Images-DualSlider/2.PNG"),
		require("./DualSlider/Images-DualSlider/2m.PNG"),
		require("./DualSlider/Images-DualSlider/3.PNG"),
		require("./DualSlider/Images-DualSlider/3m.PNG"),
		require("./DualSlider/Images-DualSlider/4.PNG"),
		require("./DualSlider/Images-DualSlider/4m.PNG"),
		require("./DualSlider/Images-DualSlider/1.PNG"),
		require("./DualSlider/Images-DualSlider/1m.PNG"),
	];

	return (
		<>
			<h6 className="title-text">Software Solutions</h6>
			<div className="first-text">
				Unlock Your Business Potential with Custom Websites, Desktop
				Applications, API Solutions and Video Editing. Let's Build Your Online
				Success Together!
				<br />
				<br />
				No matter what software you need, our team can develop it.
				<br />
				<div>
					{/* Link-ul stilizat ca buton */}
					<Link to="/ContactForm" className="transparent-button">
						Let’s start our first project together
					</Link>
					<br />
					<br />
				</div>
			</div>
			<div className="menu-contain-text-left">
				<p className="text-large homepage-text-large_homepage-text-lg__24_gZ">
					{/* Adăugăm DualSlider aici */}
					<DualSlider
						className="dual-slider"
						imagesTop={imagesTop}
						imagesBottom={imagesBottom}
					/>

					<br />
					<br />
					<p style={{ fontSize: "1.7rem" }}>We specialize in: </p>
					<br />
					<p className="first-text10">Presentation Websites </p>
					<p className="first-text10"> E-commerce Websites </p>
					<p className="first-text10">Costum Web Applications</p>
					<p className="first-text10">API Solutions</p>
					<p className="first-text10">SEO optimization</p>
					<p className="first-text10">Desktop applications </p>
					<p className="first-text10">Databases </p>
					<p className="first-text10">Video editing </p>
					<br />
					<p>
						{" "}
						We are committed to building long-term partnerships that evolve with
						your business needs. We provide impactful, scalable, and{" "}
						user-friendly digital products that drive your business growth
						globally.
						<br />
						<br />
						We have been harnessing technology to drive meaningful change.
						Combining world-class engineering, industry expertise and a
						people-centric mindset, we consult and partner with our customers to
						create technological solutions that drive innovation and transform
						businesses.
					</p>
				</p>
			</div>
		</>
	);
}

export default HomePage;
