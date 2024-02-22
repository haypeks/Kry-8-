import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import "./App.css";
import Chatbox from "./components/chatbox/Chatbox";
import MarqueeCraft from "./components/marquee/MarqueeCraft";
import Brand from "./components/brand/Brand";
import Pricing from "./components/pricing/Pricing";
import Footer from "./components/footer/Footer";
import Writer from "./components/writer/Writer";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Hero />
        <Chatbox />
      </div>
      <Brand />
      <Writer />
      <Pricing />
      <MarqueeCraft />
      <Footer />
    </div>
  );
};

export default App;
