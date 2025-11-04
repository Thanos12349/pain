import React from 'react';
import Header from './Header'; // Adjust path if Header is in a different directory
import Footer from './Footer';
import LeftViewCard from './LeftViewCard';
import RightViewCard from './RightViewCard';
import '../Styles/IastmDetail.css';
import HeroSection from '../components/HeroSection'
import Welcome from '../components/Welcome'
import { useParams, Link } from 'react-router-dom';

// 👈 DEFINE THE DATA HERE (or import it from a separate data file)
const serviceDetails = [
  
   {
    title: "IASTM,CUPPING THERAPY, DRY NEEDLING ,TAPING, PNF APPROCH ",
    desc: "Improve alignment and balance",
    img: "/images/7.JPG",
    slug: "IASTM,CUPPING THERAPY, DRY NEEDLING ,TAPING, PNF APPROCH", // 👈 Added
  },
  
];
const AdvancedTherapyService = [
  {
    title: "IASTM (Instrument-Assisted Soft Tissue Mobilization)",
    desc: "IASTM is a modern manual therapy technique that uses specially designed tools to release tight muscles and break down scar tissue or adhesions. It helps improve blood flow, reduce pain, and restore normal movement patterns. This therapy is highly effective for chronic muscle stiffness, tendon injuries, and post-surgical recovery.",
    img: "/images/iastm.jpg",
    slug: "iastm-instrument-assisted-soft-tissue-mobilization",
  },
  {
    title: "Cupping Therapy",
    desc: "Cupping therapy involves using suction cups on the skin to stimulate blood circulation, relieve muscle tension, and promote healing. It helps in reducing inflammation, easing pain, and improving tissue recovery in conditions like back pain, shoulder stiffness, and sports injuries. The technique also enhances relaxation and detoxification of soft tissues.",
    img: "/images/cupping.jpg",
    slug: "cupping-therapy",
  },
  {
    title: "Dry Needling",
    desc: "Dry needling targets specific trigger points or tight muscle bands using fine, sterile needles to relieve pain and release tension. It helps reduce muscle spasms, improve flexibility, and restore functional movement. This evidence-based approach is effective for chronic pain, sports injuries, and postural muscle imbalances.",
    img: "/images/niddle.jpg",
    slug: "dry-needling",
  },
  {
    title: "Taping (Kinesio Taping)",
    desc: "Taping therapy uses elastic adhesive tapes applied over muscles or joints to support movement, reduce pain, and prevent injury. It enhances blood flow, improves posture, and provides gentle stability without restricting motion. Commonly used by athletes and during rehabilitation, it promotes faster recovery and muscle activation.",
    img: "/images/tapping.jpg",
    slug: "taping-kinesio-taping",
  },
  {
    title: "PNF Approach (Proprioceptive Neuromuscular Facilitation)",
    desc: "The PNF approach is a specialized stretching and strengthening technique that enhances muscle coordination, flexibility, and neuromuscular control. It uses specific movement patterns and manual resistance to improve joint mobility and muscle performance. PNF is especially beneficial in neurological and orthopedic rehabilitation for restoring smooth, functional movement.",
    img: "/images/3.JPG",
    slug: "pnf-approach-proprioceptive-neuromuscular-facilitation",
  },
];


export default function IastmDetail() {
  const { serviceTitle } = useParams(); // Still useful for confirmation or generic components

  // If you are using serviceDetails.find, this is where the error occurs:
  const service = serviceDetails.find((s) => s.slug === 'IASTM,CUPPING THERAPY, DRY NEEDLING ,TAPING, PNF APPROCH');
  
  // Custom content rendering (Example)
  return (
    <> 
      {/* 1. GLOBAL HEADER */}
      <Header />
      {/* <HeroSection /> */}
      {/* <Welcome />  */}
      <LeftViewCard title={AdvancedTherapyService[0].title} description={AdvancedTherapyService[0].desc} img={AdvancedTherapyService[0].img} />
      <RightViewCard title={AdvancedTherapyService[1].title} description={AdvancedTherapyService[1].desc} img={AdvancedTherapyService[1].img} />
      <LeftViewCard title={AdvancedTherapyService[2].title} description={AdvancedTherapyService[2].desc} img={AdvancedTherapyService[2].img} />
      <RightViewCard title={AdvancedTherapyService[3].title} description={AdvancedTherapyService[3].desc} img={AdvancedTherapyService[3].img} />
      <LeftViewCard title={AdvancedTherapyService[4].title} description={AdvancedTherapyService[4].desc} img={AdvancedTherapyService[4].img} />
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