import React from "react";
import {
  HeartPulse,
  Users,
  Home,
  ShieldCheck,
  Clock,
  Cpu,
  Leaf,
  Stethoscope,
  HandHeart,
  Activity,
  Dumbbell,
  Footprints,
  Zap,
  Brain,
  Thermometer,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const benefits = [
    { icon: <HeartPulse className="benefit-icon" />, title: "Personalized 1-on-1 Care" },
    { icon: <Home className="benefit-icon" />, title: "Comfort of Your Home" },
    { icon: <ShieldCheck className="benefit-icon" />, title: "Reduced Risk of Infections" },
    { icon: <Cpu className="benefit-icon" />, title: "Family Involvement in Recovery" },
    { icon: <Clock className="benefit-icon" />, title: "Flexible Scheduling" },
  ];

  const techniques = [
    { icon: <HandHeart />, text: "Manual Therapy & Mobilization" },
    { icon: <Dumbbell />, text: "Therapeutic Exercises & Strength Training" },
    { icon: <Footprints />, text: "Gait Training & Balance Therapy" },
    { icon: <Zap />, text: "Electrotherapy (TENS, IFT, Ultrasound)" },
    { icon: <Brain />, text: "Neurodevelopmental Techniques" },
    { icon: <Thermometer />, text: "Pain Management Strategies" },
    { icon: <Activity />, text: "Functional Rehabilitation" },
  ];

  return (
    <>
      <Header />
      {/* <HeroSection /> */}

      {/* Why Choose Section */}
      <section className="why-choose-section" id="why-choose">
        <div className="container text-center">
          <h2 className="why-title">One Network, Complete Care</h2>
          <p className="why-subtitle">
            Experience compassionate, professional, and personalized physiotherapy designed around you.
          </p>

          <div className="row justify-content-center mt-5">
            {benefits.map((item, index) => (
              <div key={index} className="col-lg-2 col-md-4 col-sm-6 mb-4">
                <div className="benefit-card p-4">
                  <div className="icon-box mb-3">{item.icon}</div>
                  <p className="benefit-text">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="our-team-section">
        <div className="container text-center">
          <h2 className="section-title">👩‍⚕️ Our Team</h2>
          <p className="section-desc">
            Certified physiotherapists with expertise in ortho and neuro rehab, trained in
            evidence-based techniques and compassionate care.
          </p>
          <div className="team-icons mt-3">
            <Stethoscope className="team-icon" />
            <Users className="team-icon" />
            <HeartPulse className="team-icon" />
          </div>
        </div>
      </section>

      {/* Treatment Techniques Section */}
      <section className="techniques-section">
        <div className="container text-center">
          <h2 className="section-title">🛠️ Treatment Techniques We Use</h2>
          <div className="techniques-grid">
            {techniques.map((item, index) => (
              <div key={index} className="technique-card">
                {item.icon}
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WhyChooseUs;
