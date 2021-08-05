import React from "react";
import logo from "../../images/DigiMantra-Labs-logo.png";
import { FaTimes, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
const Header = () => {
  return (
    <>
      {/* caution-bar */}
      <div class="caution_bar" id="caution_bar">
        <div class="container">
          <p>
            DigiMantra Labs is dedicated towards providing uninterrupted
            services to all its clients. Therefore, it remains fully operational
            during COVID-19.
          </p>
          <span className="times_icon">
            <FaTimes />
          </span>
        </div>
      </div>
      <header id="header" className="header_section">
        <div class="top_bar">
          <div className="container">
            <ul>
              <li>
                <a href="mailto:info@digimantra.com">
                  <span>
                    <FaEnvelope />
                  </span>
                  info@digimantra.com
                </a>
              </li>
              <li>
                <a href="tel:+91 172 6131700">
                  <span>
                    <FaPhoneAlt />
                  </span>
                  s +91 172-6131700
                </a>
              </li>
              <li>
                <a href="tel:+1 954 8690157">
                  <span>
                    <FaPhoneAlt />
                  </span>
                  +1 954-869-0157
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* --Header-section-- */}

        <div className="header_wrapper">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <nav className="navbar_wrapper">
            <button className="nav_btn">HamBurger</button>
            <div className="nav_menus">
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Case Studies</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Company</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
