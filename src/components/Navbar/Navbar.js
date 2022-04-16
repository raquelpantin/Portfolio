import { NavLink, Link } from "react-router-dom";
import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll/modules";
import "./Navbar.scss";

const Navbar = () => {
  const toggleTop = () => {
    scroll.scrollToTop();
  };
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link onClick={toggleTop} to="/" className="navbar__logo-link">
          <h1 className="navbar__logo">raquelcodes.xyz</h1>
        </Link>
      </div>
      <ul className="navbar__right">
        <li className="navbar__about navbar__item">
          <NavLink className="navbar__link" to="about">
            ABOUT
          </NavLink>
        </li>

        <li className="navbar__projects navbar__item">
          <NavLink className="navbar__link" to="projects">
            PROJECTS
          </NavLink>
        </li>
        <li className="navbar__contact navbar__item">
          <NavLink className="navbar__link" to="contact">
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
