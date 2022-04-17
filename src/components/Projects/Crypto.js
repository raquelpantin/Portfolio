import React from "react";
import "./Crypto.scss";
import cryptomobile from "../../assets/videos/cryptomobile.mp4";
import github from "../../assets/icons/icons8-github.svg";

const Crypto = () => {
  const newWindow = (e) => {
    e.preventDefault();
    window.open("https://github.com/raquelpantin/CryptoTracker", "_blank");
  };
  return (
    <div className="crypto-container">
      <video className="crypto" width="520" height="440" autoPlay loop muted>
        <source src={cryptomobile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="crypto-text-container">
        <h3 className="crypto-title">Cryptocurrency Tracker</h3>
        <p className="crypto-tech">
          <span className="bold">Tech Stack:</span> React, Sass, Axios, Web API
        </p>
        <p className="crypto-description">
          <span className="bold">Description:</span> A real-time cryptocurrency
          tracker with search functionality by both coin name and ticker symbol.
        </p>
        <img
          className="crypto-github"
          onClick={newWindow}
          src={github}
          alt="github"
        />
      </div>
    </div>
  );
};

export default Crypto;
