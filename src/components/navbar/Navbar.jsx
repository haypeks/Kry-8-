import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Location = useLocation();
  useEffect(() => {
    setToggleMenu(false);
  }, [Location]);

  // change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 5) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  const links = [
    {
      id: 1,
      link: "Home",
      href: "/",
    },

    {
      id: 2,
      link: "AI Writer",
      href: "https://kry-8.netlify.app/#writer",
    },

    {
      id: 3,
      link: "Features",
      href: "https://kry-8.netlify.app/#features",
    },

    {
      id: 4,
      link: "Pricing",
      href: "https://kry-8.netlify.app/#pricing",
    },
  ];
  return (
    <div className={color ? "navbar navbar-bg" : "navbar"}>
      <div className="navbar__links">
        <div>
          <p class="navbar__links-logo">
            <NavLink className="link" to="/">
              Kry-8
            </NavLink>
          </p>
        </div>
        <div className="navbar__section-links">
          {links.map(({ id, link, href }) => (
            <motion.li
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              key={link.id}
            >
              <a href={href}>{link}</a>
            </motion.li>
          ))}
        </div>
      </div>

      <div className="navbar__sign">
        <motion.p initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
          <NavLink className="link" to="/signin">
            Sign in
          </NavLink>
        </motion.p>
        <NavLink className="link" to="/signup">
          <button class="btn" type="button">
            Get Started
          </button>
        </NavLink>
      </div>
      <div className="navbar__menu">
        {toggleMenu ? (
          <FaTimes size={44} onClick={() => setToggleMenu(false)} />
        ) : (
          <GiHamburgerMenu size={44} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="navbar__menu-container">
            <div className="navbar__menu_container-links">
              {links.map(({ id, link, href }) => (
                <li key={link.id}>
                  <a href={href}>{link}</a>
                </li>
              ))}
              <div className="navbar__menu_container-links-sign">
                <p>
                  <NavLink className="link" to="/signin">
                    Sign in
                  </NavLink>
                </p>
                <NavLink className="link" to="/signup">
                  <button class="btn" type="button">
                    Get Started
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
