"use client";

import React from "react";
import "./ImageSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ImageSliderProps {
	images?: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images = [] }) => {
	if (images.length === 0) {
		return <div className="a">No images available</div>;
	}

	return (
		<div className="slider-container">
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={20}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				className="slider"
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<div className="slider-image-container">
							<img
								src={image}
								alt={`Slide ${index + 1}`}
								className="slider-image"
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default ImageSlider;
