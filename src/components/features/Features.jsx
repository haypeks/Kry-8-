import React from "react";
import Feature from "../feature/Feature";
import { motion } from "framer-motion";
import "./features.css";

const fadeInVariants = {
  hidden: {
    opacity: 0,
    x: 100,
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

const Features = () => {
  return (
    <div className="features section__padding" id="features">
      <div>
        <h1 className="gradient__text">
          The potential extends far beyond what you can envision
        </h1>
        <p className="features__discover">Discover our featured product</p>
      </div>
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        className="features__feature"
      >
        <Feature
          title="DesktopGPT"
          text="Meet DesktopGPT, the GPT extension tailored for your personal device. Download and seamlessly integrate to unlock effortless content creation. With DesktopGPT as your dedicated writing companion, creativity knows no bounds. Elevate your writing experience and transform your desktop into a hub of inspiration with DesktopGPT where seamless integration meets limitless creativity."
          buttontext="Download Now"
        />
        <Feature
          title="BrowserGPT"
          text="Meet our BrowserGPT, the Chrome browser's innovative GPT extension. Seamlessly integrated, it transforms your writing experience, allowing effortless content creation within your browser. Say farewell to writer's block as BrowserGPT sparks creativity at your fingertips. Embrace the future of AI-driven writing with BrowserGPT where innovation meets your digital narrative."
          buttontext="Add to Chrome"
        />
        <Feature
          title="Kry-8 Bypass"
          text=" 
          Introducing Kry-8 Bypass, a cutting-edge feature that humanizes AI content to cleverly bypass detection systems. Seamlessly integrated across platforms, Kry-8 Bypass's advanced algorithms blur the lines between artificial and human-generated text, offering a revolutionary solution to evade AI detection. Embrace the future of undetectable content creation with Kry-8 Bypass."
          buttontext="Explore Kry-8 Bypass"
        />
      </motion.div>
    </div>
  );
};

export default Features;
