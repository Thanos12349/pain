import React from "react";
import "../Styles/Testimonials.css";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ image, text, name, session }) => {
  return (
    <div className="testimonial-card">
      <img src={image} alt={name} className="testimonial-img" />
      <div className="testimonial-content">
        <div className="testimonial-stars">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <p className="testimonial-text">“{text}”</p>
        <p className="testimonial-name">
          <strong>{name}</strong> on {session}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
