import React, { useState } from "react";
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
    const imagesPerPage = 4;

    const prevSlide = () => {
        setStartIndex((prev) =>
            prev === 0 ? images.length - imagesPerPage : prev - 1
        );
    };

    const nextSlide = () => {
        setStartIndex((prev) =>
            prev + imagesPerPage >= images.length ? 0 : prev + 1
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
                        style={{ transform: `translateX(-${startIndex * 25}%)` }}
                    >
                        {images.map((src, index) => (
                            <img className="slider-image" src={src} alt={`slide-${index}`} key={index} />
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
