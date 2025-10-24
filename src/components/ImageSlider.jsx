import React, { useState, useEffect } from "react";
import "../Styles/ImageSlider.css";

const images = [
  "/images/1.JPG",
  "/images/2.JPG",
  "/images/3.JPG",
  "/images/6.JPG",
  "/images/7.JPG",
  "/images/8.JPG",
];

export default function ImageSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [imagesPerPage, setImagesPerPage] = useState(4);

  // Update imagesPerPage based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) setImagesPerPage(1);
      else if (window.innerWidth <= 768) setImagesPerPage(2);
      else if (window.innerWidth <= 1024) setImagesPerPage(2);
      else setImagesPerPage(2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="slider-container">
      <h2 className="slider-heading">
        Your Health, Our Mission.<br />
        Dedicated To Your Best Recovery
      </h2>
      <div className="slider-wrapper">
        <button className="slider-btn left" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="slider">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${(100 / imagesPerPage) * startIndex}%)`,
              width: `${(100 / imagesPerPage) * images.length}%`,
            }}
          >
            {images.map((src, index) => (
              <img
                className="slider-image"
                src={src}
                alt={`slide-${index}`}
                key={index}
                style={{ width: `${100 / images.length}%` }}
              />
            ))}
          </div>
        </div>

        <button className="slider-btn right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
}
