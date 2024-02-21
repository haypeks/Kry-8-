import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import "./pricing.css";

const Pricing = () => {
  return (
    <div className="pricing section__padding">
      <h1 className="gradient__text">Plan & Pricing</h1>
      <div className="pricing__container">
        <div className="pricing__card basic">
          <h2>Basic</h2>
          <p className="pricing__price">
            <span>$0</span> per month
          </p>
          <div className="pricing__props">
            <p>
              <IoMdCheckmark /> LLM Agnostic Model
            </p>
            <p>
              <IoMdCheckmark /> 10,000words/month
            </p>
            <p>
              <IoMdCheckmark /> AI Article Writer 4.o
            </p>
            <p>
              <IoMdCheckmark /> Complete Article Rewriter
            </p>
            <p>
              <IoMdCheckmark /> 30 Languages
            </p>
            <p>
              <IoMdCheckmark /> 100+ AI Templates
            </p>
            <p>
              <IoMdCheckmark /> ChatGPT-like chatbot
            </p>
          </div>
          <button type="button">Get Started</button>
        </div>

        <div className="pricing__card pro">
          <h2>Pro</h2>
          <p className="pricing__price">
            <span>$5</span> per month
          </p>
          <div className="pricing__props">
            <p>
              <IoMdCheckmark /> LLM Agnostic Model
            </p>
            <p>
              <IoMdCheckmark /> 10,000words/month
            </p>
            <p>
              <IoMdCheckmark /> AI Article Writer 4.o
            </p>
            <p>
              <IoMdCheckmark /> Complete Article Rewriter
            </p>
            <p>
              <IoMdCheckmark /> 30 Languages
            </p>
            <p>
              <IoMdCheckmark /> 100+ AI Templates
            </p>
            <p>
              <IoMdCheckmark /> ChatGPT-like chatbot
            </p>
          </div>
          <button type="button">Buy Now</button>
        </div>

        <div className="pricing__card unlimited">
          <h2>Unlimited</h2>
          <p className="pricing__price">
            <span>$10</span> per month
          </p>
          <div className="pricing__props">
            <p>
              <IoMdCheckmark /> LLM Agnostic Model
            </p>
            <p>
              <IoMdCheckmark /> 10,000words/month
            </p>
            <p>
              <IoMdCheckmark /> AI Article Writer 4.o
            </p>
            <p>
              <IoMdCheckmark /> Complete Article Rewriter
            </p>
            <p>
              <IoMdCheckmark /> 30 Languages
            </p>
            <p>
              <IoMdCheckmark /> 100+ AI Templates
            </p>
            <p>
              <IoMdCheckmark /> ChatGPT-like chatbot
            </p>
          </div>
          <button type="button">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
