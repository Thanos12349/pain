// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import "../Styles/Services.css";

// const services = [
//   {
//     title: "Physiotherapy",
//     desc: "Restore movement, relieve pain",
//     img: "/images/3.JPG",
//   },
//   {
//     title: "Osteopathy",
//     desc: "Chiropractic, Rehab, Cryo Therapy, Cupping",
//     img: "/images/13.jpg",
//   },
//   {
//     title: "Spinal Decompression Therapy",
//     desc: "Relieves disc pressure, restores mobility",
//     img: "/images/11.jpg",
//   },
//   {
//     title: "Sports Injury Rehab",
//     desc: "Recover faster, perform better",
//     img: "/images/6.JPG",
//   },
//   {
//     title: "Posture Correction",
//     desc: "Improve alignment and balance",
//     img: "/images/7.JPG",
//   },
//   {
//     title: "Massage Therapy",
//     desc: "Reduce stress, increase flexibility",
//     img: "/images/5.JPG",
//   },
// ];

// export default function ServicesCarousel() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const cardsPerPage = 4;
//   const totalPages = Math.ceil(services.length / cardsPerPage);

//   const handleDotClick = (newIndex) => {
//     setActiveIndex(newIndex);
//   };

//   const startIdx = activeIndex * cardsPerPage;
//   const endIdx = startIdx + cardsPerPage;
//   const visibleServices = services.slice(startIdx, endIdx);

//   return (
//     <div className="carousel-container">
//       <h2 className="carousel-heading">Our Services</h2>
//       <div className="carousel-card-wrapper">
//         <motion.div
//           className="carousel-inner"
//           animate={{ x: 0 }}
//           transition={{ duration: 2, ease: "easeInOut" }}
//         >
//           {visibleServices.map((service, i) => (
//             <div className="service-card" key={i}>
//               <img
//                 src={service.img}
//                 alt={service.title}
//                 className="service-img"
//               />
//               <div className="card-overlay">
//                 <h3 className="service-title">{service.title}</h3>
//                 <p className="service-desc">{service.desc}</p>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//       <div className="carousel-dots">
//         {Array.from({ length: totalPages }).map((_, i) => (
//           <button
//             key={i}
//             onClick={() => handleDotClick(i)}
//             className={`dot ${i === activeIndex ? "active" : ""}`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// }import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import "../Styles/Services.css";
import { ChevronLeft, ChevronRight } from "lucide-react"; // nice icons

const services = [
  { title: "Orthopedic Rehabilitation", desc: "Restore movement, relieve pain", img: "/images/ara.jpg", slug: "physiotherapy" },
  { title: "Neurological Rehabilitation", desc: "Chiropractic, Rehab, Cryo Therapy, Cupping", img: "/images/arc.jpg", slug: "NeurologicalDetail" },
  { title: "Cardiorespiratory & Functional Wellness Care", desc: "Relieves disc pressure, restores mobility", img: "/images/are.jpg", slug: "CardiorespiratoryDetail" },
  { title: "General & Preventive Physiotherapy Services", desc: "Recover faster, perform better", img: "/images/ard.jpg", slug: "GeneralDetail" },
  { title: "IASTM, Cupping Therapy, Dry Needling, Taping, PNF Approach", desc: "Improve alignment and balance", img: "/images/arz.jpg", slug: "IastmDetails" },
];
 
export default function ServicesCarousel() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -375, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 375, behavior: "smooth" });
  };

  const [cardsPerPage, setCardsPerPage] = useState(4);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) setCardsPerPage(1);
      else if (window.innerWidth < 768) setCardsPerPage(2);
      else if (window.innerWidth < 1024) setCardsPerPage(3);
      else setCardsPerPage(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="carousel-container">
      <h2 className="carousel-heading">Our Services</h2>

      <div className="carousel-card-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>
          <ChevronLeft size={32} />
        </button>

        <motion.div
          className="carousel-inner"
          ref={carouselRef}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {services.map((service, i) => (
            <Link to={`/services/${service.slug}`} className="service-card-link" key={i}>
              <div className="service-card">
                <img src={service.img} alt={service.title} className="service-img" />
                <div className="card-overlay">
                  <h3 className="service-title">{service.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>

        <button className="scroll-btn right" onClick={scrollRight}>
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}
