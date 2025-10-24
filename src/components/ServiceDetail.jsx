import React from 'react';
import PhysiotherapyDetail from './PhysiotherapyDetail';
import NeurologicalDetail from './NeurologicalDetail';
import CardiorespiratoryDetail from './CardiorespiratoryDetail';
import IastmDetail from './IastmDetails';
import GeneralDetail from './GeneralDetail';
import { useParams, Link } from 'react-router-dom';


const CUSTOM_DETAIL_COMPONENTS = {
    "Orthopedic Rehabilitation": PhysiotherapyDetail,
    "Neurological Rehabilitation": NeurologicalDetail,
    "Cardiorespiratory & Functional Wellness Care" : CardiorespiratoryDetail,
    "IASTM,CUPPING THERAPY, DRY NEEDLING ,TAPING, PNF APPROCH" : IastmDetail,
    "General & Preventive Physiotherapy Services":GeneralDetail,

};

const allServiceData = [
  { 
    title: "Orthopedic Rehabilitation",
    desc: "Restore movement, relieve pain",
    img: "/images/3.JPG",
    slug: "Orthopedic Rehabilitation", 
    fullDescription: "Detailed information for Orthopedic Rehabilitation...",
  },
  { 
    title: "Neurological Rehabilitation",
    desc: "Chiropractic, Rehab, Cryo Therapy, Cupping",
    img: "/images/13.jpg",
    slug: "Neurological Rehabilitation", 
    fullDescription: "Detailed information for Neurological Rehabilitation...",
  },
  {
    title: "Cardiorespiratory & Functional Wellness Care",
    desc: "Relieves disc pressure, restores mobility",
    img: "/images/11.jpg",
    slug: "Cardiorespiratory & Functional Wellness Care", // 👈 Added
  },
  {
    title: "General & Preventive Physiotherapy Services",
    desc: "Recover faster, perform better",
    img: "/images/6.JPG",
    slug: "General & Preventive Physiotherapy Services", // 👈 Added
  },
  {
    title: "IASTM,CUPPING THERAPY, DRY NEEDLING ,TAPING, PNF APPROCH ",
    desc: "Improve alignment and balance",
    img: "/images/7.JPG",
    slug: "IASTM,CUPPING THERAPY, DRY NEEDLING ,TAPING, PNF APPROCH", // 👈 Added
  },
  
  
];


export default function ServiceDetail() {
  const { serviceTitle } = useParams(); // Gets the slug from the URL

  // Check if a custom component exists for this slug
  const CustomComponent = CUSTOM_DETAIL_COMPONENTS[serviceTitle]; 

  // -----------------------------------------------------------------------
  // RENDER CUSTOM PAGE IF IT EXISTS
  // If we find a custom component in the map, render it immediately.
  // -----------------------------------------------------------------------
  if (CustomComponent) {
    return <CustomComponent />;
  }
  
  // -----------------------------------------------------------------------
  // RENDER GENERIC PAGE IF CUSTOM PAGE DOES NOT EXIST (Fallback)
  // -----------------------------------------------------------------------

  const service = allServiceData.find((s) => s.slug === serviceTitle);

  if (!service) {
    return <h1>404 - Service Not Found</h1>;
  }
  
  // Return the basic, generic rendering (for services without a custom page)
  return (
    <div className={`service-detail-page ${serviceTitle}-page`}>
      <Link to="/">← Back to Services</Link>
      
      <h1>{service.title}</h1>
      
      <p>NOTE: This is the generic detail view. Full custom design requires a separate component.</p>
      
      {/* Fallback to generic description */}
      <p>{service.fullDescription || service.desc}</p> 
      
      {/* Any remaining generic content */}
      
    </div>
  );
}