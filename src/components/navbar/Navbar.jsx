import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },

    {
      id: 2,
      link: "Kry-8 AI writer",
    },

    {
      id: 3,
      link: "Creative",
    },

    {
      id: 4,
      link: "Testimonial",
    },
    {
      id: 5,
      link: "Pricing",
    },

    {
        id: 6,
        link: "FAQ",
      },
  ];
  return (
    <div className="navbar">
      <div>
        <img src={logo} alt="kry-8 logo" />
      </div>
      <div className="navbar__links">
        
      </div>
      <div className="navbar__sign">
        <p>Log in</p>
        <button type="button">Get Started</button>
      </div>
      <div className="navbar__menu">
        {toggleMenu ? (
          <FaTimes onClick={() => setToggleMenu(false)} />
        ) : (
          <GiHamburgerMenu onClick={() => setToggleMenu(true)} />
        )} {toggleMenu && (

        )}
      </div>
    </div>
  );
};

export default Navbar;
