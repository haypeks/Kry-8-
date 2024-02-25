import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./signin.css";

const Signin = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <div className="gradient__bg signin section__padding">
        <div className="signin__container">
          <h1>Sign in your Kry-8 Account</h1>
          <button>
            <FcGoogle size={30} className="google" /> <p>Sign in with Google</p>
          </button>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <p className="forgot__password">Forgot password?</p>
          <button>Sign up</button>
          <p>
            New to Kry-8?
            <span>
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Signin;
