import React from "react";
import { Link } from "react-router-dom";
import "./PageFooter.scss";

const PageFooter = () => {
  return (
    <div className="footer">
      <Link
        to="/"
        className="footer-link"
        onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        <p className="footer-link-text">back to top ^</p>
      </Link>
      <div className="footer-text-container">
        <p className="footer-site">raquelcodes.xyz</p>
        <p className="footer-year">2022</p>
      </div>
    </div>
  );
};

export default PageFooter;
