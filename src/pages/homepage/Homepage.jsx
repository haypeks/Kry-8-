import React from "react";
import { motion } from "framer-motion";
import {
  Hero,
  Chatbox,
  Brand,
  Writer,
  Features,
  Pricing,
  MarqueeCraft,
  Footer,
  FAQ,
} from "../../components/index";

const Homepage = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      className="home"
    >
      <div className="gradient__bg">
        <Hero />
        <Chatbox />
      </div>
      <Brand />
      <Writer />
      <Features />
      <Pricing />
      <FAQ />
      <MarqueeCraft />
      <Footer />
    </motion.div>
  );
};

export default Homepage;
