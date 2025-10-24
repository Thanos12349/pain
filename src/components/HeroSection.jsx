import React from "react";
import "../Styles/HeroSecton.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        {/* <p className="trusted">⭐⭐⭐⭐⭐ TRUSTED BY 250,000+ PATIENTS</p> */}

        {<h1 className="hero-title">
          Bringing Healing, <br /> To Your Doorstep
        </h1>

        /* <p className="hero-subtitle">
          Pain ends here : Highly advanced Chiropractic and physiotherapy clinic in India.
        </p>

        <div className="hero-contact">
          <p>+91 987 037 9001</p>
          <a href="tel:+919870379001">Give Us a Call</a>
        </div>

        <div className="hero-hours">
          <p>Mon - Sat: 8:00am - 7:00pm</p>
          <p>Sun: 8:00am - 4:00pm</p>
        </div>

        <div className="hero-location">
          <p>P195, Medicity, Islampur Colony</p>
          <p>Sector 38, Gurugram, Haryana 122003</p>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
