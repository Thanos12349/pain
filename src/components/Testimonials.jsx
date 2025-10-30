import React from "react";
import TestimonialCard from "./TestimonialCard";
import "../Styles/Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      image: "/images/T1.png", 
      text: "Great experience with Dr. Ranjana, relieved my 8-year gastric and bloating issues.",
      name: "Amit",
      session: "Navel Adjustment",
    },
    {
      image: "/images/T2.png",
      text: "Life-changing experience! Dr. Saurabh’s expert care relieved my pain completely. Forever thankful!",
      name: "Apoorva",
      session: "chiropractic session",
    },
    {
      image: "/images/T3.png",
      text: "They have been so good to me, I’m so glad they helped me.",
      name: "Rohit",
      session: "chiropractic session",
    },
  ];

  return (
    <section className="testimonials">
      <h2 className="testimonials-title">Real People, Real Results</h2>
      <div className="testimonials-container">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
