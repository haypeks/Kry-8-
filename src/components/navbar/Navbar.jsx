import React, { useState } from "react";
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
      link: "AI Writer",
    },

    {
      id: 3,
      link: "Features",
    },

    {
      id: 4,
      link: "Pricing",
    },
    {
      id: 5,
      link: "FAQ",
    },
  ];
  return (
    <div className="navbar">
      <div className="navbar__links">
        <div>
          <p class="navbar__links-logo">Kry-8</p>
        </div>
        <div className="navbar__section-links">
          {links.map(({ id, link }) => (
            <li key={link.id}>{link}</li>
          ))}
        </div>
      </div>
      <div className="navbar__sign">
        <p>Login</p>
        <button class="btn" type="button">
          Get Started
        </button>
      </div>
      <div className="navbar__menu">
        {toggleMenu ? (
          <FaTimes size={44} onClick={() => setToggleMenu(false)} />
        ) : (
          <GiHamburgerMenu size={44} onClick={() => setToggleMenu(true)} />
        )}{" "}
        {toggleMenu && (
          <div className="navbar__menu-container">
            <div className="navbar__menu_container-links">
              {links.map(({ id, link }) => (
                <li key={link.id}>{link}</li>
              ))}
            </div>
            <div className="navbar__menu_container-links-sign">
              <p>Login</p>
              <button type="button">Get Started</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
