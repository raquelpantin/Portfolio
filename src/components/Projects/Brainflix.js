import React from "react";
import brainflix from "../../assets/videos/brainflix.mp4";
import github from "../../assets/icons/icons8-github.svg";
import "./Brainflix.scss";

const Brainflix = () => {
  const newWindow = (e) => {
    e.preventDefault();
    window.open("https://github.com/raquelpantin/brainflix", "_blank");
  };
  return (
    <div className="brainflix-container">
      <video className="brainflix" width="520" height="440" autoPlay loop muted>
        <source src={brainflix} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="brainflix-text-container">
        <h3 className="brainflix-title">Brainflix- Video Streaming Platform</h3>
        <p className="brainflix-tech">
          <span className="bold">Tech Stack:</span> React, Express, Node.js,
          Sass, Axios, Web API
        </p>
        <p className="brainflix-description">
          <span className="bold">Description:</span> A mock SPA (single page
          application) for streaming videos based on mockups given to
          BrainStation Web Development students. A culmination of three sprints
          intended to demonstrate proficiency in React, React-Router, Node,
          Express, and APIs using both GET and POST methods.
        </p>
        <img
          className="brainflix-github"
          onClick={newWindow}
          src={github}
          alt="github"
        />
      </div>
    </div>
  );
};

export default Brainflix;
