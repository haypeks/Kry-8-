import React from "react";
import {
  Navbar,
  Hero,
  Chatbox,
  Brand,
  Writer,
  Features,
  Pricing,
  MarqueeCraft,
  Footer,
} from "../../components/index";

const Homepage = () => {
  return (
    <div className="home">
      <div className="gradient__bg">
        <Navbar />
        <Hero />
        <Chatbox />
      </div>
      <Brand />
      <Writer />
      <Features />
      <Pricing />
      <MarqueeCraft />
      <Footer />
    </div>
  );
};

export default Homepage;
