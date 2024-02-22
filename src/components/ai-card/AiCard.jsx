import React from "react";
import "./aicard.css";

const AiCard = ({ icon, heading, text }) => {
  return (
    <div className="card">
      <div className="card__icon">{icon}</div>
      <div className="card__heading">{heading}</div>
      <div className="card__text">{text}</div>
    </div>
  );
};

export default AiCard;
