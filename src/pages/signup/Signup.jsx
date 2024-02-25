import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./signup.css";

const Signup = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      className="gradient__bg signup section__padding"
    >
      <div className="signup__container">
        <h1>Create compelling content with ease.</h1>
        <button className="google__btn">
          <FcGoogle size={30} className="google" />
          <p>Sign up with Google</p>
          <FaArrowRight size={25} className="arrow__right" />
        </button>
        <p className="signup__container-continue">or continue with</p>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button className="signup__btn">Sign up</button>
        <p>
          Already have an account?
          <span>
            <Link to="/signin">Sign in</Link>
          </span>
        </p>
      </div>
    </motion.div>
  );
};

export default Signup;
