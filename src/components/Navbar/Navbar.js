import { Link } from "react-scroll";
import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link
          to="hero"
          className="navbar__logo-link"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          <h1 className="navbar__logo">raquelcodes.xyz</h1>
        </Link>
      </div>
      <ul className="navbar__right active">
        <li className="navbar__about navbar__item">
          <Link
            className="navbar__link"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            ABOUT
          </Link>
        </li>

        <li className="navbar__projects navbar__item">
          <Link
            className="navbar__link"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            PROJECTS
          </Link>
        </li>
        <li className="navbar__contact navbar__item">
          <Link
            className="navbar__link"
            to="contact"
            spy={true}
            smooth={true}
            offset={80}
            duration={500}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
