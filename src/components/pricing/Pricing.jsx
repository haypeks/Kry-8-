import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import "./pricing.css";

const Pricing = () => {
  return (
    <div className="pricing section__padding" id="#pricing">
      <h1 className="gradient__text">Plan & Pricing</h1>
      <div className="pricing__container">
        <div className="pricing__card basic">
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
            <button type="button">Get Started</button>
          </div>
        </div>

        <div className="pricing__card pro">
          <h2>Pro</h2>
          <p className="pricing__price">
            <span>$5</span> per month
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
            <button type="button">Buy Now</button>
          </div>
        </div>

        <div className="pricing__card unlimited">
          <h2>Unlimited</h2>
          <p className="pricing__price">
            <span>$10</span> per month
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
            <button type="button">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
