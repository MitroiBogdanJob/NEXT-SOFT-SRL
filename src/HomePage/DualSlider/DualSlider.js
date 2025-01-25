import React from "react";
import { motion } from "framer-motion";
import "./DualSlider.css";

const DualSlider = ({ imagesTop, imagesBottom }) => {
  const Slider = ({ images, direction, height, width }) => {
    return (
      <div
        className="slider"
        style={{ height: height, width: "100%", overflow: "hidden" }}
      >
        <motion.div
          className="slider-track"
          style={{ display: "flex" }}
          initial={{ x: direction === "left" ? 0 : -width * images.length }}
          animate={{ x: direction === "left" ? -width * images.length : 0 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              style={{ height: height, width: width, objectFit: "cover" }}
            />
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <div
      className="dual-slider"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Slider
        images={imagesTop}
        direction="left"
        height={"730px"}
        width={1502}
      />
      <Slider
        images={imagesBottom}
        direction="right"
        height={"646px"}
        width={304}
      />
    </div>
  );
};

export default DualSlider;
