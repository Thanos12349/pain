import React from 'react';
import Header from './Header'; // Adjust path if Header is in a different directory
import Footer from './Footer';
import LeftViewCard from './LeftViewCard';
import RightViewCard from './RightViewCard';
import '../Styles/GeneralDetail.css';
import HeroSection from '../components/HeroSection'
import Welcome from '../components/Welcome'
import { useParams, Link } from 'react-router-dom';

// 👈 DEFINE THE DATA HERE (or import it from a separate data file)
const serviceDetails = [
  
  {
    title: "General & Preventive Physiotherapy Services",
    desc: "Recover faster, perform better",
    img: "/images/6.JPG",
    slug: "General & Preventive Physiotherapy Services", // 👈 Added
  },
  
];

const WellnessService = [
  {
    title: "Geriatric Physiotherapy (Elderly Care)",
    desc: "Geriatric physiotherapy focuses on improving strength, balance, flexibility, and endurance in older adults. It helps manage age-related issues like arthritis, osteoporosis, and limited mobility while reducing the risk of falls. The goal is to maintain independence, enhance daily function, and improve overall quality of life for seniors in the comfort of their home.",
    img: "/images/elderly.jpg",
    slug: "geriatric-physiotherapy-elderly-care",
  },
  {
    title: "Pediatric Physiotherapy",
    desc: "Pediatric physiotherapy supports children with developmental delays, neurological conditions, or musculoskeletal issues. Through playful, movement-based therapy, children improve strength, posture, coordination, and motor skills. Early intervention ensures better physical development, independence, and confidence in daily activities and play.",
    img: "/images/pediatric.jpg",
    slug: "pediatric-physiotherapy",
  },
  {
    title: "Women’s Health Physiotherapy",
    desc: "Women’s health physiotherapy addresses physical challenges during and after pregnancy, such as back pain, pelvic floor weakness, and posture changes. Tailored exercises help restore core strength, improve flexibility, and promote faster recovery. It empowers women to maintain comfort, stability, and wellness through all stages of life.",
    img: "/images/womenhealth.jpg",
    slug: "womens-health-physiotherapy",
  },
  {
    title: "Pain Management Therapy",
    desc: "Pain management physiotherapy provides non-invasive, drug-free relief for chronic pain conditions like back pain, fibromyalgia, or joint discomfort. Using manual therapy, stretching, electrotherapy, and strengthening exercises, it reduces pain intensity and improves mobility. The focus is on long-term pain control and restoring a better quality of movement.",
    img: "/images/pain.jpg",
    slug: "pain-management-therapy",
  },
  {
    title: "Weight Management & Fitness Rehabilitation",
    desc: "This program combines customized exercise routines with mobility training to promote healthy weight loss, flexibility, and strength. Physiotherapists design safe and effective workouts that consider individual health conditions, ensuring improved posture, metabolism, and endurance. It’s a sustainable approach to fitness and overall physical well-being.",
    img: "/images/weight.jpg",
    slug: "weight-management-fitness-rehabilitation",
  },
];


export default function GeneralDetail() {
  const { serviceTitle } = useParams(); // Still useful for confirmation or generic components

  // If you are using serviceDetails.find, this is where the error occurs:
  const service = serviceDetails.find((s) => s.slug === 'General & Preventive Physiotherapy Services');
  
  // Custom content rendering (Example)
  return (
    <> 
      {/* 1. GLOBAL HEADER */}
      <Header />
      {/* <HeroSection /> */}
      {/* <Welcome />  */}
      <LeftViewCard title={WellnessService[0].title} description={WellnessService[0].desc} img={WellnessService[0].img} />
      <RightViewCard title={WellnessService[1].title} description={WellnessService[1].desc} img={WellnessService[1].img} />
      <LeftViewCard title={WellnessService[2].title} description={WellnessService[2].desc} img={WellnessService[2].img} />  
      <RightViewCard title={WellnessService[3].title} description={WellnessService[3].desc} img={WellnessService[3].img} />
      <LeftViewCard title={WellnessService[4].title} description={WellnessService[4].desc} img={WellnessService[4].img} />
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