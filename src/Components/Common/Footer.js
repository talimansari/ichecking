import React from "react";
import wave from "../../images/footer-wave.png";
import appfutura from "../../images/appfutura.png";
import clutch from "../../images/clutch.png";
import { FaSuitcase, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="footer_section">
        <div class="wave_image">
          <img src={wave} alt="" />
        </div>
        <section className="footer_wrapper">
          <div className="container">
            <div className="footer_first_row">
              <div className="row">
                <div className="col-md-6">
                  <div class="newsletter_wrapper">
                    <h4>NewsLetter</h4>
                    <p>
                      Get Hooked! Sign to get the latest catch sent to your
                      inbox.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="sub_form">
                    <input type="text" placeholder="Your Email Address" />
                    <div className="subs_btn">
                      <a href="#">subscribe</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="second_first_row">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="services_menu">
                    <h3 class="menu-title">SERVICES</h3>
                    <ul>
                      <li>
                        <a href="#">UI/UX Design</a>
                      </li>
                      <li>
                        <a href="#">Website Development</a>
                      </li>
                      <li>
                        <a href="#">Mobile App Development</a>
                      </li>
                      <li>
                        <a href="#">Game Design & Development</a>
                      </li>
                      <li>
                        <a href="#">Digital Marketing</a>
                      </li>
                      <li>
                        <a href="#">E2E eCommerce Services</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="navigation_menu">
                    <h3 class="menu-title">NAVIGATION</h3>
                    <ul>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Website Development</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Portfolio</a>
                      </li>
                      <li>
                        <a href="#">Case Study</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Company</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="contact_menu">
                    <h3 class="menu-title">CONTACT US</h3>
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
                <div className="col-md-3 col-sm-6">
                  <h3 class="menu-title">CONTACT US</h3>
                  <div className="digitian_menu">
                    <ul>
                      <li>
                        <a href="mailto:info@digimantra.com">
                          <span>
                            <FaSuitcase />
                          </span>
                          Work With Us
                        </a>
                      </li>
                      <li>
                        <div className="footer_brands_icon">
                          <img src={appfutura} alt="appfutura" />
                          <img src={clutch} alt="clutch" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
