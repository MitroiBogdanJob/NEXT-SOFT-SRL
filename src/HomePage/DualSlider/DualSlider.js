import React from "react";
import { motion } from "framer-motion";
import "./DualSlider.css";

const DualSlider = ({ imagesTop, imagesBottom }) => {
	return (
		<div className="dual-slider-container">
			{/* Slider pentru imaginile de sus */}
			<motion.div
				className="image-row"
				initial={{ x: "100%" }}
				animate={{ x: "-100%" }}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: "linear",
				}}
			>
				{imagesTop.map((image, index) => (
					<img key={index} src={image} alt={`Slide Top ${index + 1}`} />
				))}
			</motion.div>

			{/* Slider pentru imaginile de jos */}
			<motion.div
				className="image-row"
				initial={{ x: "-100%" }}
				animate={{ x: "100%" }}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: "linear",
				}}
			>
				{imagesBottom.map((image, index) => (
					<img key={index} src={image} alt={`Slide Bottom ${index + 1}`} />
				))}
			</motion.div>
		</div>
	);
};

export default DualSlider;
