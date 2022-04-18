import React from "react";
import "./ContactSection.scss";
import email from "../../assets/icons/email_white_24dp.svg";
import github from "../../assets/icons/icons8-github.svg";
import linkedin from "../../assets/icons/linkedin.png";
import location from "../../assets/icons/place_white_24dp.svg";
import emailjs from "emailjs-com";

const ContactSection = () => {
  return (
    <div className="contact">
      <div className="contact-info">
        <h3 className="contact-name">Raquel Pantin</h3>
        <div className="contact-row">
          <img className="contact-email" src={email} alt="email" />
          <p className="contact-email-text">raquel.pantin@gmail.com</p>
        </div>
        <div className="contact-row">
          <img className="contact-github" src={github} alt="email" />
          <p className="contact-github-text">github.com/raquelpantin</p>
        </div>
        <div className="contact-row">
          <img className="contact-linkedin" src={linkedin} alt="email" />
          <p className="contact-linkedin-text">linkedin.com/in/raquelpantin</p>
        </div>
        <div className="contact-row">
          <img className="contact-location" src={location} alt="email" />
          <p className="contact-location-text">Miami, FL</p>
        </div>
      </div>
      <form className="contact-form">
        <div className="contact-form-section">
          <label htmlFor="name">Name</label>
          <input className="contact-input" name="name"></input>
        </div>
        <div className="contact-form-section">
          <label htmlFor="email">Email</label>
          <input className="contact-input" name="email"></input>
        </div>
        <textarea name="name" />
      </form>
    </div>
  );
};

export default ContactSection;
