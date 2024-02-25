import React from "react";
import { motion } from "framer-motion";
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

const fadeInVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      delay: 0.1,
      duration: 1,
    },
  },
};

const Brand = () => {
  return (
    <div className="brand section__padding">
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        className="brand__container"
      >
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
      </motion.div>
    </div>
  );
};

export default Brand;
