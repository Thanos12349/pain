import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HeroSection from '../components/HeroSection'
import Welcome from '../components/Welcome'
import LeftViewCard from './LeftViewCard';
import RightViewCard from './RightViewCard';
import '../Styles/PhysiotherapyDetail.css';

const serviceDetails = [
  {
    title: "Orthopedic Rehabilitation",
    desc: "Restore movement, relieve pain",
    img: "/images/3.JPG",
    slug: "Orthopedic Rehabilitation", // 👈 Added: URL-friendly identifier
  },
  {
    title: "Neurological Rehabilitation",
    desc: "Chiropractic, Rehab, Cryo Therapy, Cupping",
    img: "/images/13.jpg",
    slug: "Neurological Rehabilitation", // 👈 Added
  },
  {
    title: "Cardiorespiratory & Functional Wellness Care",
    desc: "Relieves disc pressure, restores mobility",
    img: "/images/11.jpg",
    slug: "spinal-decompression-therapy", // 👈 Added
  },
  {
    title: "General & Preventive Physiotherapy Services",
    desc: "Recover faster, perform better",
    img: "/images/6.JPG",
    slug: "sports-injury-rehab", // 👈 Added
  },
  {
    title: "IASTM,CUPPING THERAPY, DRY NEEDLING ,TAPING, PNF APPROCH ",
    desc: "Improve alignment and balance",
    img: "/images/7.JPG",
    slug: "posture-correction", // 👈 Added
  },

  // You may only need the one object if this page is 100% custom,
  // but if you're using 'find' to locate it, you need the array.
];

const OrthopedicService = [
  {
    title: "Post-surgical Rehab",
    desc: "Post-surgical rehabilitation focuses on helping patients regain strength, flexibility, and confidence after major surgeries such as joint replacements (knee, hip, shoulder) or spine procedures. Through personalized physiotherapy protocols, pain is managed, mobility is gradually restored, and complications like stiffness or muscle weakness are prevented. The goal is to ensure safe and effective recovery, helping patients return to their daily activities with improved function and independence.",
    img: "/images/postsurgicalrehab.jpg",
    slug: "post-surgical-rehab",
  },
  {
    title: "Fracture Recovery",
    desc: "Fracture rehabilitation plays a crucial role once the bone has healed sufficiently. Physiotherapy helps restore muscle strength, joint movement, and coordination in the affected limb—whether it’s an upper or lower limb fracture. Guided exercises and modalities reduce stiffness, swelling, and pain, promoting complete functional recovery and preventing long-term deformities or weakness.",
    img: "/images/fracturerecovery.jpg",
    slug: "fracture-recovery",
  },
  {
    title: "Sports Injuries",
    desc: "Sports injury rehabilitation focuses on managing and preventing injuries such as ligament tears, sprains, and muscle strains. The therapy involves pain control, strengthening, and sport-specific training to help athletes safely return to play. Physiotherapists also emphasize proper biomechanics, flexibility, and conditioning to reduce the risk of re-injury and enhance athletic performance.",
    img: "/images/sportsinjuries.jpg",
    slug: "sports-injuries",
  },
  {
    title: "Arthritis Management",
    desc: "Physiotherapy for arthritis aims to relieve pain, improve joint mobility, and enhance quality of life for individuals with osteoarthritis or rheumatoid arthritis. Gentle strengthening and range-of-motion exercises, combined with pain-relief modalities, help reduce stiffness and maintain functional independence. Education on joint protection and posture correction also supports long-term joint health and comfort.",
    img: "/images/3.JPG",
    slug: "arthritis-management",
  },
  {
    title: "Back & Neck Pain",
    desc: "Back and neck pain rehabilitation addresses common spine-related conditions such as disc herniation, spondylosis, and sciatica. The treatment plan includes manual therapy, stretching, core strengthening, and ergonomic guidance to reduce pain and prevent recurrence. By improving spinal alignment and muscle balance, patients experience better posture, reduced strain, and long-lasting relief.",
    img: "/images/backandneck.jpg",
    slug: "back-neck-pain",
  },
  {
    title: "Joint Stiffness & Mobility Issues",
    desc: "Restricted joint movement can result from injury, immobilization, or age-related changes. Physiotherapy uses targeted mobilization techniques, stretching, and strengthening exercises to restore flexibility and range of motion. Regular sessions not only ease discomfort but also enhance coordination, allowing smoother and pain-free movement in daily activities.",
    img: "/images/jointstiffness.jpg",
    slug: "joint-stiffness-mobility-issues",
  },
  {
    title: "Postural Correction & Ergonomic Training",
    desc: "Postural correction therapy identifies and corrects faulty postures that lead to pain, muscle imbalance, and fatigue. Physiotherapists guide patients in maintaining optimal alignment during daily activities, supported by ergonomic training for home and workplace setups. This approach reduces strain on muscles and joints, promotes spinal health, and enhances overall physical well-being.",
    img: "/images/posturalcorrection.jpg",
    slug: "postural-correction-ergonomic-training",
  },
];

export default function PhysiotherapyDetail() {
  const { serviceTitle } = useParams(); 
  const service = serviceDetails.find((s) => s.slug === 'Orthopedic Rehabilitation');

  return (
    <>
      <Header />
      {/* <HeroSection /> */}
      {/* <Welcome /> */}
      <LeftViewCard title={OrthopedicService[0].title} description={OrthopedicService[0].desc} img={OrthopedicService[0].img} />
      <RightViewCard title={OrthopedicService[1].title} description={OrthopedicService[1].desc} img={OrthopedicService[1].img} />
      <LeftViewCard title={OrthopedicService[2].title} description={OrthopedicService[2].desc} img={OrthopedicService[2].img} />
      <RightViewCard title={OrthopedicService[3].title} description={OrthopedicService[3].desc} img={OrthopedicService[3].img} />
      <LeftViewCard title={OrthopedicService[4].title} description={OrthopedicService[4].desc} img={OrthopedicService[4].img} />
      <RightViewCard title={OrthopedicService[5].title} description={OrthopedicService[5].desc} img={OrthopedicService[5].img} />
      <LeftViewCard title={OrthopedicService[6].title} description={OrthopedicService[6].desc} img={OrthopedicService[6].img} />
    <div className="physio-detail-page">
  <Link to="/" className="back-link">&larr; Back to Services</Link>
</div>

      <Footer />

    </>
  );
}