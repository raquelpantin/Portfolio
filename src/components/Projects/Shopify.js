import React from "react";
import shopify from "../../assets/videos/shopify.mp4";
import github from "../../assets/icons/icons8-github.svg";
import "./Shopify.scss";

const Shopify = () => {
  const newWindow = (e) => {
    e.preventDefault();
    window.open(
      "https://github.com/raquelpantin/Industry-Project-Shopify",
      "_blank"
    );
  };
  return (
    <div className="shopify-container">
      <video className="shopify" width="520" height="440" autoPlay loop muted>
        <source src={shopify} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="shopify-text-container">
        <h3 className="shopify-title">Shopify Industry Project</h3>
        <p className="shopify-tech">
          <span className="bold">Tech Stack:</span> React, Sass
        </p>
        <p className="shopify-description">
          <span className="bold">Description:</span> Worked in a
          cross-functional team composed of UI/UX, Data Science, and Web
          Development to provide a solution to Shopify on how they can better
          leverage their ecosystem to make entrepreneurship more accessible.
          Meet Shopy- your personal marketing assistant!
        </p>
        <img
          className="shopify-github"
          onClick={newWindow}
          src={github}
          alt="github"
        />
      </div>
    </div>
  );
};

export default Shopify;
