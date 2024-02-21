import React from "react";
import {
  google,
  facebook,
  linkedin,
  oracle,
  yamaha,
  youtube,
  office365,
  amazon,
  netflix,
} from "./imports";
import "./brand.css";

const Brand = () => {
  return (
    <div className="brand section__padding">
      <div>
        <img src={google} alt="" />
      </div>
      <div>
        <img src={facebook} alt="" />
      </div>
      <div>
        <img src={yamaha} alt="" />
      </div>
      <div>
        <img src={youtube} alt="" />
      </div>

      <div>
        <img src={office365} alt="" />
      </div>
      <div>
        <img src={amazon} alt="" />
      </div>
      <div>
        <img src={netflix} alt="" />
      </div>
      <div>
        <img src={oracle} alt="" />
      </div>
      <div>
        <img src={linkedin} alt="" />
      </div>
    </div>
  );
};

export default Brand;
