import React from "react";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { Navbar } from "./components/index";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <AnimatedRoutes />
    </div>
  );
};

export default App;
