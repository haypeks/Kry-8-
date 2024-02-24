import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/index";
import { Homepage, Signup, Signin } from "./pages/index";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
