import React from "react";
import azul from "../../assets/videos/azul.mp4";
import github from "../../assets/icons/icons8-github.svg";
import "./Azul.scss";

const Azul = () => {
  const newWindow = (e) => {
    e.preventDefault();
    window.open("https://github.com/raquelpantin/azul-artsourcing", "_blank");
  };
  return (
    <div className="azul-container">
      <video className="azul" width="520" height="440" autoPlay loop muted>
        <source src={azul} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="azul-text-container">
        <h3 className="azul-title">Azul- Art Sourcing</h3>
        <p className="azul-tech">
          <span className="bold">Tech Stack:</span> MongoDB, Express, React,
          Node.js, JWT, Sass, Axios, Web API
        </p>
        <p className="azul-description">
          <span className="bold">Description:</span> A full-stack art-sourcing
          application that connects artists with potential customers. Customers
          can create an account, login, search and view artists profiles based
          on location, skillset or name.
        </p>
        <img
          className="azul-github"
          onClick={newWindow}
          src={github}
          alt="github"
        />
      </div>
    </div>
  );
};

export default Azul;
