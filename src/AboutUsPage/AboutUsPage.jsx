import React from "react";
import "./AboutUsPage.css";
import ImageSlider from "../ImageSlider/ImageSlider.tsx";

import desktopApp from "../ImageSlider/ImagesForSlider-AboutUsPage/desktopApp.jpg";
import webApp from "../ImageSlider/ImagesForSlider-AboutUsPage/webApp.PNG";
import apiApp from "../ImageSlider/ImagesForSlider-AboutUsPage/apiApp.PNG";
import erpApp from "../ImageSlider/ImagesForSlider-AboutUsPage/erpApp2.PNG";

const sliderImages = [apiApp, webApp, erpApp, desktopApp];

function AboutUsPage() {
	return (
		<>
			<h6>About Us</h6>
			<br />
			<br />
			<div className="Who-We-Are">Who We Are?</div>
			<div className="aboutU-first">
				-We transform lives through technology-
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
				We are committed to making a positive impact on our people, customers,
				communities and the environment. Discover how we're shaping a
				sustainable future. <br /> <br />
				At home all around the world We’re a global community of people who
				share, create and connect over projects and beyond. We work from over
				twenty-five countries across six continents to deliver best-in-class
				technical solutions and support to our customers.
			</p>
		</>
	);
}

export default AboutUsPage;
