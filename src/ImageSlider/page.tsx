import React from "react";
import ImageSlider from "./ImageSlider";

const sliderImages = []; // Adaugă alte imagini

const Page = () => {
	return (
		<div>
			<ImageSlider images={sliderImages} />
		</div>
	);
};

export default Page;
