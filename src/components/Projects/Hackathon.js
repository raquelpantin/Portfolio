import React from "react";
import hackathon from "../../assets/videos/hackathon.mp4";
import github from "../../assets/icons/icons8-github.svg";
import "./Hackathon.scss";

const Hackathon = () => {
  const newWindow = (e) => {
    e.preventDefault();
    window.open("https://github.com/raquelpantin/hackathon-2", "_blank");
  };
  return (
    <div className="hackathon-container">
      <video className="hackathon" width="520" height="440" autoPlay loop muted>
        <source src={hackathon} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hackathon-text-container">
        <h3 className="hackathon-title">Paired Programming-24hr Hackathon</h3>
        <p className="hackathon-tech">
          <span className="bold">Tech Stack:</span> React, Sass, Axios, Web API
        </p>
        <p className="hackathon-description">
          <span className="bold">Description:</span> Utilized React and the
          seatgeek API to create a web application that allows users to search
          for events happening in their city.
        </p>
        <img
          className="hackathon-github"
          onClick={newWindow}
          src={github}
          alt="github"
        />
      </div>
    </div>
  );
};

export default Hackathon;
