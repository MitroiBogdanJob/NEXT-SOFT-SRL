import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import DualSlider from "./DualSlider/DualSlider"; // Asigură-te că calea este corectă

function HomePage() {
	const imagesTop = [
		require("./DualSlider/Images-DualSlider/1.PNG"),
		require("./DualSlider/Images-DualSlider/2.PNG"),
		require("./DualSlider/Images-DualSlider/3.PNG"),
		require("./DualSlider/Images-DualSlider/4.PNG"),
		require("./DualSlider/Images-DualSlider/6.PNG"),
		require("./DualSlider/Images-DualSlider/1.PNG"),
		require("./DualSlider/Images-DualSlider/2.PNG"),
		require("./DualSlider/Images-DualSlider/3.PNG"),
		require("./DualSlider/Images-DualSlider/4.PNG"),
		require("./DualSlider/Images-DualSlider/6.PNG"),
		require("./DualSlider/Images-DualSlider/1.PNG"),
		require("./DualSlider/Images-DualSlider/2.PNG"),
		require("./DualSlider/Images-DualSlider/3.PNG"),
		require("./DualSlider/Images-DualSlider/4.PNG"),
		require("./DualSlider/Images-DualSlider/6.PNG"),
		require("./DualSlider/Images-DualSlider/1.PNG"),
		require("./DualSlider/Images-DualSlider/2.PNG"),
		require("./DualSlider/Images-DualSlider/3.PNG"),
		require("./DualSlider/Images-DualSlider/4.PNG"),
		require("./DualSlider/Images-DualSlider/6.PNG"),
		require("./DualSlider/Images-DualSlider/1.PNG"),
		require("./DualSlider/Images-DualSlider/2.PNG"),
		require("./DualSlider/Images-DualSlider/3.PNG"),
		require("./DualSlider/Images-DualSlider/4.PNG"),
		require("./DualSlider/Images-DualSlider/6.PNG"),
		require("./DualSlider/Images-DualSlider/1.PNG"),
		require("./DualSlider/Images-DualSlider/2.PNG"),
		require("./DualSlider/Images-DualSlider/3.PNG"),
		require("./DualSlider/Images-DualSlider/4.PNG"),
		require("./DualSlider/Images-DualSlider/6.PNG"),
		require("./DualSlider/Images-DualSlider/1.PNG"),
		require("./DualSlider/Images-DualSlider/2.PNG"),
		require("./DualSlider/Images-DualSlider/3.PNG"),
		require("./DualSlider/Images-DualSlider/4.PNG"),
		require("./DualSlider/Images-DualSlider/6.PNG"),
	];

	const imagesBottom = [
		require("./DualSlider/Images-DualSlider/1m.PNG"),
		require("./DualSlider/Images-DualSlider/2m.PNG"),
		require("./DualSlider/Images-DualSlider/3m.PNG"),
		require("./DualSlider/Images-DualSlider/4m.PNG"),
		require("./DualSlider/Images-DualSlider/6m.PNG"),
		require("./DualSlider/Images-DualSlider/1m.PNG"),
		require("./DualSlider/Images-DualSlider/2m.PNG"),
		require("./DualSlider/Images-DualSlider/3m.PNG"),
		require("./DualSlider/Images-DualSlider/4m.PNG"),
		require("./DualSlider/Images-DualSlider/6m.PNG"),
		require("./DualSlider/Images-DualSlider/1m.PNG"),
		require("./DualSlider/Images-DualSlider/2m.PNG"),
		require("./DualSlider/Images-DualSlider/3m.PNG"),
		require("./DualSlider/Images-DualSlider/4m.PNG"),
		require("./DualSlider/Images-DualSlider/6m.PNG"),
		require("./DualSlider/Images-DualSlider/1m.PNG"),
		require("./DualSlider/Images-DualSlider/2m.PNG"),
		require("./DualSlider/Images-DualSlider/3m.PNG"),
		require("./DualSlider/Images-DualSlider/4m.PNG"),
		require("./DualSlider/Images-DualSlider/6m.PNG"),
		require("./DualSlider/Images-DualSlider/1m.PNG"),
		require("./DualSlider/Images-DualSlider/2m.PNG"),
		require("./DualSlider/Images-DualSlider/3m.PNG"),
		require("./DualSlider/Images-DualSlider/4m.PNG"),
		require("./DualSlider/Images-DualSlider/6m.PNG"),
		require("./DualSlider/Images-DualSlider/1m.PNG"),
		require("./DualSlider/Images-DualSlider/2m.PNG"),
		require("./DualSlider/Images-DualSlider/3m.PNG"),
		require("./DualSlider/Images-DualSlider/4m.PNG"),
		require("./DualSlider/Images-DualSlider/6m.PNG"),
		require("./DualSlider/Images-DualSlider/1m.PNG"),
		require("./DualSlider/Images-DualSlider/2m.PNG"),
		require("./DualSlider/Images-DualSlider/3m.PNG"),
		require("./DualSlider/Images-DualSlider/4m.PNG"),
		require("./DualSlider/Images-DualSlider/6m.PNG"),
		require("./DualSlider/Images-DualSlider/1m.PNG"),
		require("./DualSlider/Images-DualSlider/2m.PNG"),
		require("./DualSlider/Images-DualSlider/3m.PNG"),
		require("./DualSlider/Images-DualSlider/4m.PNG"),
		require("./DualSlider/Images-DualSlider/6m.PNG"),
		require("./DualSlider/Images-DualSlider/1m.PNG"),
		require("./DualSlider/Images-DualSlider/2m.PNG"),
		require("./DualSlider/Images-DualSlider/3m.PNG"),
		require("./DualSlider/Images-DualSlider/4m.PNG"),
		require("./DualSlider/Images-DualSlider/6m.PNG"),
		require("./DualSlider/Images-DualSlider/1m.PNG"),
		require("./DualSlider/Images-DualSlider/2m.PNG"),
		require("./DualSlider/Images-DualSlider/3m.PNG"),
		require("./DualSlider/Images-DualSlider/4m.PNG"),
		require("./DualSlider/Images-DualSlider/6m.PNG"),
		require("./DualSlider/Images-DualSlider/1m.PNG"),
		require("./DualSlider/Images-DualSlider/2m.PNG"),
		require("./DualSlider/Images-DualSlider/3m.PNG"),
		require("./DualSlider/Images-DualSlider/4m.PNG"),
		require("./DualSlider/Images-DualSlider/6m.PNG"),
	];

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
					{/* Adăugăm DualSlider aici */}
					<DualSlider
						className="dual-slider"
						imagesTop={imagesTop}
						imagesBottom={imagesBottom}
					/>
					<br />
					<p style={{ fontSize: "22px" }}>
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
