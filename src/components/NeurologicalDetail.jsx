import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header'; // Adjust path if Header is in a different directory
import Footer from './Footer';
import HeroSection from '../components/HeroSection'
import Welcome from '../components/Welcome'
import LeftViewCard from './LeftViewCard';
import RightViewCard from './RightViewCard';
import '../Styles/NeurologicalDetail.css';


// 👈 DEFINE THE DATA HERE (or import it from a separate data file)
const serviceDetails = [
   {
    title: "Neurological Rehabilitation",
    desc: "Chiropractic, Rehab, Cryo Therapy, Cupping",
    img: "/images/13.jpg",
    slug: "Neurological Rehabilitation", // 👈 Added
  },
  // You may only need the one object if this page is 100% custom,
  // but if you're using 'find' to locate it, you need the array.
];
// Note: If you're creating a completely custom page, you might not even need useParams or the 'find' logic!
const NeuroService = [
  {
    title: "Stroke Recovery",
    desc: "Stroke rehabilitation focuses on restoring lost movement, balance, and coordination caused by brain damage after a stroke. Through specialized physiotherapy, patients work to regain strength, relearn motor skills, and improve speech and functional independence. Regular guided exercises, gait training, and neuro-muscular re-education help the brain form new connections, promoting long-term recovery and better quality of life.",
    img: "/images/strokerecovery.jpg",
    slug: "stroke-recovery",
  },
  {
    title: "Parkinson’s Disease",
    desc: "Physiotherapy for Parkinson’s disease aims to manage symptoms like stiffness, tremors, and movement difficulties. Treatment emphasizes exercises that improve balance, posture, and walking patterns while enhancing coordination and flexibility. With consistent therapy, patients can maintain independence, reduce the risk of falls, and experience improved mobility and confidence in daily activities.",
    img: "/images/parkinsondisease.jpg",
    slug: "parkinsons-disease",
  },
  {
    title: "Multiple Sclerosis (MS)",
    desc: "In multiple sclerosis, the body’s nervous system is affected, leading to weakness, fatigue, and coordination issues. Physiotherapy helps manage these symptoms through strength training, balance exercises, and energy-conservation techniques. The goal is to preserve physical function, minimize fatigue, and enhance overall mobility, allowing patients to stay active and self-reliant.",
    img: "/images/multiplesclerosis.jpg",
    slug: "multiple-sclerosis",
  },
  {
    title: "Cerebral Palsy",
    desc: "Physiotherapy plays a vital role in improving motor function and quality of life for individuals with cerebral palsy. Through targeted exercises, stretching, and gait training, muscle tone is regulated and movement patterns are refined. Early and consistent rehabilitation encourages better posture, balance, and coordination, helping children and adults achieve their fullest physical potential.",
    img: "/images/cerebralpalsy.jpg",
    slug: "cerebral-palsy",
  },
  {
    title: "Spinal Cord Injuries",
    desc: "Rehabilitation for spinal cord injuries focuses on restoring as much function and independence as possible. Physiotherapists assist patients in strengthening unaffected muscles, improving mobility through assistive devices, and preventing complications such as contractures or pressure sores. The therapy encourages adaptation, promotes neural recovery, and enhances quality of life despite physical limitations.",
    img: "/images/spinalcordinjury.jpg",
    slug: "spinal-cord-injuries",
  },
  {
    title: "Peripheral Neuropathy",
    desc: "Peripheral neuropathy rehabilitation targets nerve damage that causes weakness, numbness, or pain in the hands and feet. Physiotherapy uses balance training, strengthening, and sensory re-education exercises to improve coordination and reduce discomfort. Regular therapy helps patients restore safe movement, minimize fall risk, and maintain independence in daily activities.",
    img: "/images/peripheral.jpg",
    slug: "peripheral-neuropathy",
  },
  {
    title: "Traumatic Brain Injuries (TBI)",
    desc: "Physiotherapy after a traumatic brain injury focuses on retraining the body and brain to restore lost functions. Treatment involves balance exercises, strength and mobility training, and cognitive-motor integration to improve coordination and control. A structured rehabilitation plan enhances recovery, helping individuals regain independence and reintegrate into everyday life.",
    img: "/images/tbi.jpg",
    slug: "traumatic-brain-injuries",
  },
  {
    title: "Balance & Coordination Disorders",
    desc: "Rehabilitation for balance and coordination disorders involves exercises that retrain the body’s sensory and motor systems. Physiotherapists use vestibular training, core strengthening, and gait correction techniques to improve stability and spatial awareness. This therapy reduces dizziness, prevents falls, and enhances confidence in performing daily movements safely.",
    img: "/images/balanceandcoordination.jpg",
    slug: "balance-coordination-disorders",
  },
];

export default function NeurologicalDetail() {
  const { serviceTitle } = useParams(); // Still useful for confirmation or generic components

  // If you are using serviceDetails.find, this is where the error occurs:
  const service = serviceDetails.find((s) => s.slug === 'neurological-rehabilitation');
  
  // Custom content rendering (Example)
  return (
    <> 
      {/* 1. GLOBAL HEADER */}
      <Header />
      {/* <HeroSection /> */}
      {/* <Welcome />  */}
      <LeftViewCard title={NeuroService[0].title} description={NeuroService[0].desc} img={NeuroService[0].img} />
      <RightViewCard title={NeuroService[1].title} description={NeuroService[1].desc} img={NeuroService[1].img} />
      <LeftViewCard title={NeuroService[2].title} description={NeuroService[2].desc} img={NeuroService[2].img} />
      <RightViewCard title={NeuroService[3].title} description={NeuroService[3].desc} img={NeuroService[3].img} />
      <LeftViewCard title={NeuroService[4].title} description={NeuroService[4].desc} img={NeuroService[4].img} />
      <RightViewCard title={NeuroService[5].title} description={NeuroService[5].desc} img={NeuroService[5].img} />
      <LeftViewCard title={NeuroService[6].title} description={NeuroService[6].desc} img={NeuroService[6].img} />
      <RightViewCard title={NeuroService[7].title} description={NeuroService[7].desc} img={NeuroService[7].img} />
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