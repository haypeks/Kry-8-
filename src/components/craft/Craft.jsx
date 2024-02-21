import React from "react";
import "./craft.css";

const Craft = ({ icon, text }) => {
  return (
    <div className="craft">
      <div className="craft__icon">{icon}</div>
      {text}
    </div>
  );
};

export default Craft;
