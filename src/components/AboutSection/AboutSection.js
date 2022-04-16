import React from "react";
import "./AboutSection.scss";
import pfp from "../../assets/images/Raquel.png";

const AboutSection = () => {
  return (
    <div className="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-section">
        <img className="about-pfp" src={pfp} alt="profile picture" />
        <div className="about-bio">
          <p className="about-bio-text">
            Hello, my name is Raquel! <div className="spacing"></div>I am a
            Full-Stack Web Developer residing in sunny Miami, FL.{" "}
            <div className="spacing"></div>I got my first taste of coding back
            in 2005 during the MySpace era and more recently discovered that it
            was something I was very passionate about.{" "}
            <div className="spacing"></div>After serving 6 years in the Army as
            a Multi-Functional Logisticain, and almost 2 years with Amazon as an
            Operations Area Manager, I decided to take the plunge and make the
            career switch into tech. <div className="spacing"></div>
            Web development allows me to utilize the skills I love most;
            art/design, problem solving and logic to create solutions that can
            affect a large scale customer base and make their lives easier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
