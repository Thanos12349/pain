import React, { useState } from "react";
import "../Styles/SpecialistServices.css";

const services = [
  {
    title: "Spine And Disc Problem",
    desc: `Spine and disc pain, including conditions such as slipped discs, sciatica, spinal stenosis, and cervical pain, can severely limit your daily activities and overall quality of life...`,
    img: "https://via.placeholder.com/400x200?text=Spine",
  },
  {
    title: "Postural Issue",
    desc: "Postural issues can cause discomfort and long-term spinal problems. Our therapies focus on correcting posture and improving musculoskeletal alignment.",
    img: "https://via.placeholder.com/400x200?text=Posture",
  },
  {
    title: "Sports Injury Rehabilitation",
    desc: "We provide specialized rehabilitation programs to help athletes recover from injuries and regain optimal performance.",
    img: "https://via.placeholder.com/400x200?text=Sports",
  },
  {
    title: "Migraine, Headache & Vertigo",
    desc: "Our therapies aim to reduce the frequency and intensity of migraines, headaches, and vertigo using non-invasive techniques.",
    img: "https://via.placeholder.com/400x200?text=Migraine",
  },
  {
    title: "Medicine Prevention Program",
    desc: "Our preventive medicine programs help you stay healthy and avoid chronic illnesses through proactive care.",
    img: "https://via.placeholder.com/400x200?text=Medicine",
  },
  {
    title: "Child Development Centre",
    desc: "We support children's growth and development with specialized programs for physical and cognitive well-being.",
    img: "https://via.placeholder.com/400x200?text=Child",
  },
  {
    title: "Online Consultation",
    desc: "Connect with our experts from anywhere in the world through online consultations.",
    img: "https://via.placeholder.com/400x200?text=Online",
  },
];

function SpecialistServices() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
<h1 className="d-flex justify-content-center align-items-center text-center">
  Specialized Treatments for Lasting Relief
</h1>
  <div className="services-container">
          <div className="services-left">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {service.title}
          </div>
        ))}
      </div>

      <div className="services-right">
        <img
          src={services[activeIndex].img}
          alt={services[activeIndex].title}
          className="service-image"
        />
        <h2 className="service-title">{services[activeIndex].title}</h2>
        <p className="service-desc">{services[activeIndex].desc}</p>
        <button className="connect-btn">Connect With Us →</button>
      </div>
    </div>
    </>
  );
}

export default SpecialistServices;
