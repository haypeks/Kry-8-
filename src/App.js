import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import "./App.css";
import Chatbox from "./components/chatbox/Chatbox";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Hero />
        <Chatbox />
      </div>
    </div>
  );
};

export default App;
