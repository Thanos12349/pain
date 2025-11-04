import React from 'react';
import {
  Activity,
  HeartPulse,
  Dumbbell,
  StretchHorizontal,
  Bone,
  HandHeart,
  Accessibility,
  Armchair,
  MoveRight,
  Shield,
  User,
  Brain,
  Thermometer,
  Scale,
  Syringe,
  Wand2,
  Wind,
} from "lucide-react";
import { FaBaby, FaTape } from "react-icons/fa6"; // ✅ safer fallbacks for Baby, Female, Tape
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import "./PhysiotherapySection.css";

const Physiotherapy = () => {
  return (
    <>
      <Header />
      {/* <HeroSection /> */}
      <section className="physio-section">
        <div className="container">
          <div className="text-center">
            <h2 className="headline">Our Mission</h2>
            <p className="subheadline">
              To deliver expert, compassionate physiotherapy care in the comfort of your home —
              empowering recovery, restoring mobility, and enhancing quality of life.
            </p>
            <div className="physio-visual">
              <img
                src="/images/imgp.jpg"
                alt="Modern Physiotherapy Clinic"
                className="physio-image"
              />
            </div>
          </div>

          <div className="services">
            <h3>Our Services</h3>
            <ul>
              <li>Orthopedic Rehabilitation</li>
              <li>Neurological Rehabilitation</li>
              <li>Cardiorespiratory & Functional Wellness Care</li>
              <li>General & Preventive Physiotherapy Services</li>
              <li>IASTM, Cupping Therapy, Dry Needling, Taping, PNF Approach</li>
            </ul>
          </div>

          <div className="conditions">
            <h3>Conditions We Treat</h3>
            <div className="condition-grid">
              <div><HandHeart /> <p>Post-surgical Rehab</p></div>
              <div><Activity /> <p>Fracture Recovery</p></div>
              <div><Bone /> <p>Sports Injuries</p></div>
              <div><StretchHorizontal /> <p>Arthritis Management</p></div>
              <div><Shield /> <p>Back & Neck Pain</p></div>
              <div><Accessibility /> <p>Joint Stiffness & Mobility Issues</p></div>
              <div><Armchair /> <p>Postural Correction & Ergonomic Training</p></div>
              <div><Brain /> <p>Stroke Recovery</p></div>
              <div><HeartPulse /> <p>Parkinson’s Disease</p></div>
              <div><Brain /> <p>Multiple Sclerosis (MS)</p></div>
              <div><Accessibility /> <p>Cerebral Palsy</p></div>
              <div><Activity /> <p>Spinal Cord Injuries</p></div>
              <div><Wind /> <p>Peripheral Neuropathy</p></div>
              <div><Brain /> <p>Traumatic Brain Injuries (TBI)</p></div>
              <div><MoveRight /> <p>Balance & Coordination Disorders</p></div>
              <div><Armchair /> <p>Geriatric Physiotherapy (Elderly Care)</p></div>
              <div><FaBaby /> <p>Pediatric Physiotherapy</p></div>
              <div><FaTape /> <p>Women’s Health Physiotherapy</p></div>
              <div><Thermometer /> <p>Pain Management Therapy</p></div>
              <div><Scale /> <p>Weight Management & Fitness Rehabilitation</p></div>
              <div><Syringe /> <p>IASTM (Instrument-Assisted Soft Tissue Mobilization)</p></div>
              <div><Wand2 /> <p>Cupping Therapy</p></div>
              <div><Syringe /> <p>Dry Needling</p></div>
              <div><FaTape /> <p>Taping (Kinesio Taping)</p></div>
              <div><Dumbbell /> <p>PNF Approach (Proprioceptive Neuromuscular Facilitation)</p></div>
            </div>
          </div>

          <div className="doctor-highlight">
            <div className="doctor-card">
              <User className="doctor-icon" />
              <div>
                <h4>📌 Dr. Shally Pandey</h4>
                <p>
                  Experienced physiotherapist with expertise in orthopedic,
                  neurological, cardiac, and rheumatology rehab. <br />
                  Trained at <strong>Medanta Medicity</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="cta text-center">
            <button className="btn-book">Book Your Session</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Physiotherapy;
