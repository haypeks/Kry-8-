import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./hero.css";

const fadeInVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
      duration: 1,
    },
  },
};

const Hero = () => {
  return (
    <div id="home" className="hero">
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        className="hero__content"
      >
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
        <Link to="/signin" className="link">
          <button type="button">Get Started</button>
        </Link>
        <div className="hero__payment">
          <div>
            <IoCheckmarkCircleOutline />
          </div>
          No payment Required
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
