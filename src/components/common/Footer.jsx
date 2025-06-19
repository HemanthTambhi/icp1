import React from 'react';
import footerlogo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="footer_wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="footer_left">
                <img src={footerlogo} alt="" />
                <p>Masterverses: The first AI-driven Web3 platform for spiritual discovery and experiences.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer_right">
                <div className="row">
                  <div className="col-lg-4"></div>
                  <div className="col-lg-4">
                    <ul>
                      <li>
                        <h6>About us</h6>
                        <a href="#">Home</a>
                        <a href="#Product">Features</a>
                        <a href="#Roadmap">Roadmap</a>
                        <a href="#Event">Events</a>
                        <a href="#Teams">Teams</a>
                        <a href="#Partners">Partners</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <ul>
                      <li>
                        <h6>Community</h6>
                        <a href="mailto:Support@masterverses.com" target="_blank">Email us</a>
                        <a href="https://x.com/Masterverses" target="_blank">Twitter</a>
                        <a href="https://t.me/Master_verses" target="_blank">Telegram</a>
                        <a href="https://www.instagram.com/masterverses/" target="_blank">Instagram</a>
                        <a href="https://www.linkedin.com/company/masterverses/" target="_blank">Linkedin</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_wrapper_bottom">
            <p>All right reserved. ©2025</p>
            <ul>
              <li>
                <a href="PrivacyPolicy.html" target="_blank">Privacy Policy</a>
                <a href="Terms&Condition.html" target="_blank">Terms & Condition</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;