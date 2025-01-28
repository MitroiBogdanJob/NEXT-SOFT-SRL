import React from "react";
import { motion } from "framer-motion";
import "./DualSlider.css";

const DualSlider = ({ imagesTop, imagesBottom }) => {
	// Combina imagini Top și Bottom
	const combinedImagesTop = [...imagesTop].reverse();
	const combinedImagesBottom = [...imagesBottom];

	return (
		<div className="dual-slider-container">
			{/* Slider pentru imaginile de sus */}
			<motion.div
				className="image-row"
				initial={{ x: "0%" }}
				animate={{ x: "-100%" }}
				transition={{
					duration: 25, // Mișcare lină și mai lentă
					repeat: Infinity,
					ease: "linear",
				}}
			>
				{combinedImagesTop.map((image, index) => (
					<img key={index} src={image} alt={`Slide Top ${index + 1}`} />
				))}
			</motion.div>

			{/* Slider pentru imaginile de jos */}
			<motion.div
				className="image-row"
				initial={{ x: "-100%" }}
				animate={{ x: "0%" }}
				transition={{
					duration: 25,
					repeat: Infinity,
					ease: "linear",
				}}
			>
				{combinedImagesBottom.map((image, index) => (
					<img key={index} src={image} alt={`Slide Bottom ${index + 1}`} />
				))}
			</motion.div>
		</div>
	);
};

export default DualSlider;
