import React from "react";
import "../Styles/WhyTestimonials.css";

const WhyTestimonials = () => {
  const stories = [
    {
      title: "Post-surgery recovery with physiotherapy",
      desc: "After surgery, Mr. Rajesh regained full mobility in just 3 weeks with guided physiotherapy sessions and holistic care.",
      img: "/images/T1.png",
    },
    {
      title: "Emergency ICU support during cardiac arrest",
      desc: "Quick ICU intervention saved Mrs. Sharma’s life. 24/7 monitoring and IoT alerts ensured her stable recovery.",
      img: "/images/T2.png",
    },
    {
      title: "Panchakarma detox & lifestyle reset",
      desc: "Through Ayurvedic Panchakarma and counseling, Ms. Aditi transformed her lifestyle and regained energy.",
      img: "/images/T3.png",
    },
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container text-center">
        <h2 className="testimonials-title">Testimonials & Success Stories</h2>

        <div className="row mt-5">
          {stories.map((story, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="testimonial-card ">
                <img src={story.img} alt={story.title} className="testimonial-img mb-3" />
                <h5 className="story-title p-1">{story.title}</h5>
                <p className="story-desc p-1">{story.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <video
            width="80%"
            height="auto"
            controls
            className="rounded shadow-sm"
          >
            <source src="/videos/patient-success.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default WhyTestimonials;
