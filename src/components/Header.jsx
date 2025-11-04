import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Hospital } from "lucide-react";
import "../Styles/Header.css";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation(); // 👈 Get current URL path

  // Helper function to check active link
  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/images/tuhituu.png" alt="Physiovera" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="nav-desktop">
        <ul className="nav-links">
          <li>
            <Link to="/" className={isActive("/") ? "active-link" : ""}>Home</Link>
          </li>
          <li>
            <Link to="/physiotherapy" className={isActive("/physiotherapy") ? "active-link" : ""}>Physiotherapy</Link>
          </li>
          <li>
            <Link to="/whychooseus" className={isActive("/whychooseus") ? "active-link" : ""}>Why Choose Us</Link>
          </li>
          <li>
            <Link to="/contactus" className={isActive("/contactus") ? "active-link" : ""}>Contact Us</Link>
          </li>
        </ul>
      </nav>

      {/* Appointment Button */}
      <div className="appointment">
        <Link to="/contactus">
          <button>Make Appointment</button>
        </Link>
      </div>

      {/* Mobile Sidebar */}
      <div className="hamburger" onClick={() => setSidebarOpen(true)}>
        <Hospital size={42} color="#b4a4a4ff" />
      </div>

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="close-btn" onClick={() => setSidebarOpen(false)}>×</div>
        <ul className="sidebar-links">
          <li><Link to="/" onClick={() => setSidebarOpen(false)} className={isActive("/") ? "active-link" : ""}>Home</Link></li>
          <li><Link to="/physiotherapy" onClick={() => setSidebarOpen(false)} className={isActive("/physiotherapy") ? "active-link" : ""}>Physiotherapy</Link></li>
          <li><Link to="/whychooseus" onClick={() => setSidebarOpen(false)} className={isActive("/whychooseus") ? "active-link" : ""}>Why Choose Us</Link></li>
          <li><Link to="/contactus" onClick={() => setSidebarOpen(false)} className={isActive("/contactus") ? "active-link" : ""}>Contact Us</Link></li>
          <li className="sidebar-appointment"><button>Make Appointment</button></li>
        </ul>
      </div>

      {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)}></div>}
    </header>
  );
};

export default Header;
