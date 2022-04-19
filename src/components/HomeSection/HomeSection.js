import React from "react";
import "./HomeSection.scss";
import arrow from "../../assets/icons/arrow_drop_down_white_48dp.svg";

const HomeSection = () => {
  return (
    <div>
      <div className="hero" id="hero"></div>
      <div className="hero-text">
        <h2 className="hero-title">Welcome</h2>
        <img className="hero-arrow" src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default HomeSection;
