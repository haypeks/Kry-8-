import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import "./hero.css";

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <div className="hero__content">
        <h1 className="gradient__text">
          Elevate Your Writing with Precision and Ease
        </h1>
        <p>
          Craft compelling content effortlessly, refine your prose, and boost
          your creativity with our state-of-the-art AI writing assistant.
          Unleash the power of words, guided by innovation, for an unparalleled
          writing experience. Your words, our expertise – a seamless partnership
          for unparalleled writing excellence.
        </p>
        <button type="button">Get Started</button>
        <div className="hero__payment">
          <div>
            <IoCheckmarkCircleOutline />
          </div>
          No payment Required
        </div>
      </div>
    </div>
  );
};

export default Hero;
