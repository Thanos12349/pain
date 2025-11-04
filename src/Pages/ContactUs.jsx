import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <>
      <Header />
      {/* <HeroSection /> */}
    <Header />
     <section className="contact-section" id="contact">
      <div className="container text-center">
        <h2 className="contact-title">Let’s Start Your Healing Journey Today</h2>

        <div className="row mt-4">
          <div className="col-md-6">
            <form className="contact-form">
              <input type="text" className="form-control mb-3" placeholder="Name" required />
              <input type="tel" className="form-control mb-3" placeholder="Phone" required />
              <input type="email" className="form-control mb-3" placeholder="Email" required />
              <textarea className="form-control mb-3" rows="4" placeholder="Message" required></textarea>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
          <div className="col-md-6 map-container">
            <iframe
              title="Service Coverage Areas"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d17874.3268637458!2d77.03041060243804!3d28.510304538002565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s2599%2C%20F%20Block%20Road%2C%20Om%20Vihar%2C%20Palam%20Vihar%20Extension%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1761802035247!5m2!1sen!2sins"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
            ></iframe>

            <div className="contact-buttons mt-4">
              <a href="tel:+918409008311" className="btn btn-outline-dark me-2">📞 Call Us</a>
              <a
                href="https://wa.me/918409008311"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default ContactUs
