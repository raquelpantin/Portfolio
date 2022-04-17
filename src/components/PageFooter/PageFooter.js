import React from "react";
import { Link } from "react-router-dom";
import "./PageFooter.scss";

const PageFooter = () => {
  return (
    <div className="footer">
      <Link to="/" className="footer-link">
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
