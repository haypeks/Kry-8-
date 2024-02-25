import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMdCheckmark } from "react-icons/io";
import "./pricing.css";

const fadeInVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
      duration: 1,
    },
  },
};

const Pricing = () => {
  return (
    <div className="pricing section__padding" id="pricing">
      <h1 className="gradient__text">Plan & Pricing</h1>
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        className="pricing__container"
      >
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.01, border: "5px solid hsl(21, 43%, 44%)" }}
          className="pricing__card basic"
        >
          <h2>Basic</h2>
          <p className="pricing__price">
            <span>$0</span> per month
          </p>

          <div className="pricing__props">
            <p>
              <IoMdCheckmark className="pricing__checkmark" /> LLM Agnostic
              Model
            </p>
            <p>
              <IoMdCheckmark className="pricing__checkmark" /> 10,000words/month
            </p>
            <p>
              <IoMdCheckmark className="pricing__checkmark" /> AI Article Writer
              4.o
            </p>
            <p>
              <IoMdCheckmark className="pricing__checkmark" /> Complete Article
              Rewriter
            </p>
            <p>
              <IoMdCheckmark className="pricing__checkmark" /> 30 Languages
            </p>
            <p>
              <IoMdCheckmark className="pricing__checkmark" /> 100+ AI Templates
            </p>
            <p>
              <IoMdCheckmark className="pricing__checkmark" /> ChatGPT-like
              chatbot
            </p>
            <Link to="/signin" className="link">
              <button type="button">Get Started</button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.01, border: "5px solid hsl(21, 43%, 44%)" }}
          className="pricing__card pro"
        >
          <h2>Pro</h2>
          <p className="pricing__price">
            <span>$5</span> per month
          </p>
          <div className="pricing__props">
            <p>
              <IoMdCheckmark className="pricing__checkmark" /> GPT 3.5 Model
            </p>
            <p>
              <IoMdCheckmark className="pricing__checkmark" />{" "}
              100,000words/month
            </p>
            <p>
              <IoMdCheckmark className="pricing__checkmark" /> AI Article Writer
              4.o
            </p>
            <p>
              <IoMdCheckmark className="pricing__checkmark" /> Higher quality
              image
            </p>
            <p>
              <IoMdCheckmark className="pricing__checkmark" /> API Access
            </p>
            <p>
              <IoMdCheckmark className="pricing__checkmark" /> Priority support
            </p>
            <p>
              <IoMdCheckmark className="pricing__checkmark" />
              Bulk Processing
            </p>
            <Link to="/signin" className="link">
              <button type="button">Buy Now</button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.01, border: "5px solid hsl(21, 43%, 44%)" }}
          className="pricing__card unlimited"
        >
          <h2>Unlimited</h2>
          <p className="pricing__price">
            <span>$10</span> per month
          </p>
          <div className="pricing__props">
            <p>
              <IoMdCheckmark className="pricing__checkmark" /> GPT4.0 Model
            </p>
            <p>
              <IoMdCheckmark className="pricing__checkmark" /> Unlimited
              words/month
            </p>
            <p>
              <IoMdCheckmark className="pricing__checkmark" /> Bulk Processing
            </p>
            <p>
              <IoMdCheckmark className="pricing__checkmark" /> Training sessions
            </p>
            <p>
              <IoMdCheckmark className="pricing__checkmark" /> 50 Languages
            </p>
            <p>
              <IoMdCheckmark className="pricing__checkmark" /> Premium support
            </p>
            <p>
              <IoMdCheckmark className="pricing__checkmark" /> Workspace
              analytics
            </p>
            <Link to="/signin" className="link">
              <button type="button">Buy Now</button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Pricing;
