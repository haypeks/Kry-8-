import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer section__padding" id="footer">
      <div className="footer__header">
        <h1 className="gradient__text">
          Elevate Your Content Quality and Cut Costs
        </h1>
        <button type="button">Get Started</button>
      </div>
      <div className="footer__flex">
        <div className="footer__flex__one">
          <p class="footer__logo">Kry-8</p>
          <div className="footer__socials">
            <FaLinkedinIn className="footer__socials-icon" size={30} />
            <FaTwitter className="footer__socials-icon" size={30} />
            <FaYoutube className="footer__socials-icon" size={30} />
          </div>
        </div>
        <div className="footer__flex__two">
          <div>
            <h3>Links</h3>
            <ul>
              <li>Home</li>
              <li>Ai Writer</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li>Contact</li>
              <li>Career</li>
              <li>About</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="copyright"> &#169; 2024 Kry-8 All rights reserved</p>
    </div>
  );
};

export default Footer;
