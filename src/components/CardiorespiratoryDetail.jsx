import React from 'react';
import Header from './Header'; // Adjust path if Header is in a different directory
import Footer from './Footer';
import LeftViewCard from './LeftViewCard';
import RightViewCard from './RightViewCard';
import '../Styles/CardiorespiratoryDetail.css';
import HeroSection from '../components/HeroSection'
import Welcome from '../components/Welcome'
import { useParams, Link } from 'react-router-dom';

// 👈 DEFINE THE DATA HERE (or import it from a separate data file)
const serviceDetails = [
   {
    title: "Cardiorespiratory & Functional Wellness Care",
    desc: "Relieves disc pressure, restores mobility",
    img: "/images/11.jpg",
    slug: "Cardiorespiratory & Functional Wellness Care", // 👈 Added
  },
  // You may only need the one object if this page is 100% custom,
  // but if you're using 'find' to locate it, you need the array.
];
// Note: If you're creating a completely custom page, you might not even need useParams or the 'find' logic!

export default function CardiorespiratoryDetail() {
  const { serviceTitle } = useParams(); // Still useful for confirmation or generic components

  // If you are using serviceDetails.find, this is where the error occurs:
  const service = serviceDetails.find((s) => s.slug === 'Cardiorespiratory & Functional Wellness Care');
  const CardioWellnessService = {
  title: "Cardiorespiratory & Functional Wellness Care",
  desc: "Our Cardiorespiratory and Functional Wellness programs are designed to restore strength, stamina, and daily independence for individuals recovering from illness, surgery, or chronic health conditions. Physiotherapy at home focuses on improving heart and lung efficiency, functional movement, and overall well-being.\n\nWe offer Cardiac Rehabilitation for post-surgery or post-cardiac event patients to safely rebuild endurance through guided exercise and breathing training. Respiratory and Post-COVID Therapy strengthens lung function, reduces fatigue, and enhances breathing capacity for patients recovering from respiratory illnesses like COPD, asthma, or long COVID.\n\nAlongside medical recovery, our team provides Functional and Lifestyle Support—including ergonomic correction, postural alignment, and fall-prevention training—to ensure comfort and safety in everyday life. Personalized programs such as Functional Independence Training help patients regain confidence in daily tasks, while Massage and Myofascial Release Therapy relieves muscular tightness and promotes relaxation.\n\nThis holistic approach blends physical recovery with lifestyle enhancement, empowering patients to move, breathe, and live better right in the comfort of their home.",
  img: "/images/cardio.jpg",
  slug: "cardiorespiratory-functional-wellness-care",
};

  
  // Custom content rendering (Example)
  return (
    <> 
      {/* 1. GLOBAL HEADER */}
      <Header />
      {/* <HeroSection /> */}
      {/* <Welcome />  */}
      <LeftViewCard title={CardioWellnessService.title} description={CardioWellnessService.desc} img={CardioWellnessService.img} /> 
        <div className="physio-detail-page">
        <Link to="/" className="back-link">&larr; Back to Services</Link>
      </div>
     <Footer />
      
      {/* NOTE: Do NOT add HeroSection, Welcome, Service, SpecialistServices, 
        ImageSlider, or Testimonials here unless you explicitly want the 
        entire homepage to appear below your detail content.
      */}
    </>
  );
}