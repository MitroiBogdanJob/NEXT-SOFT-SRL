import React from "react";
import "./AboutUsPage.css";
import ImageSlider from "../ImageSlider/ImageSlider.tsx";

import desktopApp from "../ImageSlider/ImagesForSlider-AboutUsPage/desktopApp.jpg";
import webApp from "../ImageSlider/ImagesForSlider-AboutUsPage/webApp.PNG";
import apiApp from "../ImageSlider/ImagesForSlider-AboutUsPage/apiApp.PNG";
import erpApp from "../ImageSlider/ImagesForSlider-AboutUsPage/erpApp2.PNG";

import csds from "./Images-AboutUsPage/csds.png";
import support from "./Images-AboutUsPage/support.jpg";
import csdevelopment from "./Images-AboutUsPage/csdevelopment.png";

const sliderImages = [webApp, erpApp, desktopApp, apiApp];

function AboutUsPage() {
	return (
		<>
			<h6 className={`${"Who-We-Are"} ${"title-text"}`}>Who are we?</h6>
			<br />
			<br />

			<div className="we-transform-lives">
				- We transform lives through technology -
			</div>
			<br />
			<br />
			<ImageSlider images={sliderImages} />
			<p className="text-large homepage-text-large_homepage-text-lg__24_gZ">
				What we stand for Our purpose and values We exist to create an
				environment and a culture that breeds success by caring for our
				customers as individuals and enabling our people to be the best that
				they can be. What we strive for Building a sustainable future.
				<br />
				<br />
				{/* Imaginile cu efecte */}
				<div className="image-container">
					<img src={csds} alt="csds " className="rounded-img" />
					<img
						src={csdevelopment}
						alt="csdevelopment "
						className="rounded-img"
					/>
					<img src={support} alt=" support" className="rounded-img" />
				</div>
				<br />
				<br />
				We are committed to making a positive impact on our people, customers,
				communities and the environment. Discover how we're shaping a
				sustainable future. We exist to create an environment and a culture that
				breeds success by caring for our customers as individuals and enabling
				our people to be the best that they can be. Building a sustainable
				future We are committed to making a positive impact on our people,
				customers, communities and the environment. Discover how we're shaping a
				sustainable future.
				<br /> <br />
			</p>

			{/* Secțiunea nouă */}
			<div className="values-section">
				<div className="value-item">
					<div className="value-icon">
						<div className="dot-group">
							<span className="dot large"></span>
							<span className="dot medium"></span>
							<span className="dot small"></span>
						</div>
					</div>
					<h3>Smart</h3>
					<p>
						We employ clever people who bring skills, experience and talent to
						craft smart solutions for our customers.
					</p>
				</div>

				<div className="value-item">
					<div className="value-icon">
						<div className="dot-group">
							<span className="dot large"></span>
							<span className="dot medium"></span>
							<span className="dot small"></span>
						</div>
					</div>
					<h3>Thoughtful</h3>
					<p>
						We care deeply about people, whether they are our employees,
						customers or our broader communities.
					</p>
				</div>

				<div className="value-item">
					<div className="value-icon">
						<div className="dot-group">
							<span className="dot large"></span>
							<span className="dot medium"></span>
							<span className="dot small"></span>
						</div>
					</div>
					<h3>Open</h3>
					<p>
						We have confidence in our abilities, approach and people, so we are
						open and transparent.
					</p>
				</div>

				<div className="value-item">
					<div className="value-icon">
						<div className="dot-group">
							<span className="dot large"></span>
							<span className="dot medium"></span>
							<span className="dot small"></span>
						</div>
					</div>
					<h3>Adaptable</h3>
					<p>
						We embrace change and remain flexible, allowing us to operate
						successfully in complex environments.
					</p>
				</div>

				<div className="value-item">
					<div className="value-icon">
						<div className="dot-group">
							<span className="dot large"></span>
							<span className="dot medium"></span>
							<span className="dot small"></span>
						</div>
					</div>
					<h3>Trusted</h3>
					<p>We build our relationships on trust and integrity.</p>
				</div>
			</div>
		</>
	);
}

export default AboutUsPage;
