import React from "react";
import "./feature.css";

const Feature = ({ title, text, buttontext }) => {
  return (
    <div className="feature">
      <div className="feature__title">
        <h2 className="gradient__text">{title}</h2>
        <div />
      </div>
      <div className="feature__text">
        <p>{text}</p>
      </div>
      <button className="feature_button">{buttontext}</button>
    </div>
  );
};

export default Feature;
