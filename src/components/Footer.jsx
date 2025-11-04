import React from "react";
import "../Styles/Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section footer-logo">
          <h2 className="footer-brand">Physiovera</h2>
          <p className="footer-subtext">Spine and posture</p>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaPinterestP /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
       
          <ul>
            <li><a href="/">Home</a></li> 
            <li><a href="/physiotherapy">Physiotherapy</a></li>
            <li><a href="/whychooseus">Why Choose Us</a></li>
            <li><a href="/contactus">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li><a href="/services/physiotherapy">Orthopedic Rehabilitation</a></li>
            <li><a href="/services/NeurologicalDetail">Neurological Rehabilitation</a></li>
            <li><a href="/services/CardiorespiratoryDetail">Cardiorespiratory & Functional Wellness Care</a></li>
            <li><a href="/services/GeneralDetail">General & Preventive Physiotherapy Services</a></li>
            <li><a href="/services/IastmDetails">IASTM, CUPPING THERAPY, DRY NEEDLING, TAPING, PNF APPROACH</a></li>
            
          </ul>
        </div>

        {/* <div className="footer-section">
          <h3>Treatments</h3>
          <ul>
            <li><a href="#">Back Pain</a></li>
            <li><a href="#">Sports Injury</a></li>
            <li><a href="#">Paralysis</a></li>
            <li><a href="#">Sciatica</a></li>
            <li><a href="#">Slip Disc</a></li>
            <li><a href="#">Ligament Injury</a></li>
          </ul>
        </div> */}

        <div className="footer-section">
          <p>Gurugram, Haryana</p>
          <a className="text-decoration-none" href="#">View Directions</a>
          <p>+91 8409008311</p>
          <p>contactus@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 by Physiovera. - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
