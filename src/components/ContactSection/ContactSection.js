import React, { useState } from "react";
import "./ContactSection.scss";
import emailicon from "../../assets/icons/email_white_24dp.svg";
import github from "../../assets/icons/icons8-github.svg";
import linkedin from "../../assets/icons/linkedin.png";
import location from "../../assets/icons/place_white_24dp.svg";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function sendEmail(event) {
    event.preventDefault();

    if (!name || !email || !message) {
      alert("Please ensure all fields are filled");
    } else {
      emailjs
        .sendForm(
          "service_mo9zthu",
          "template_x7qjoph",
          event.target,
          "fhAnQfKtqBLjy2Db3",
          alert("Thank you! I look forward to getting in contact with you!"),
          setName(""),
          setEmail(""),
          setMessage("")
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  }

  const toGithub = (e) => {
    e.preventDefault();
    window.open("https://github.com/raquelpantin", "_blank");
  };

  const toLinkedin = (e) => {
    e.preventDefault();
    window.open("https://www.linkedin.com/in/raquelpantin/", "_blank");
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-info">
        <h3 className="contact-name">Raquel Pantin</h3>
        <div className="contact-row">
          <img className="contact-email" src={emailicon} alt="email" />
          <p className="contact-email-text">raquel.pantin@gmail.com</p>
        </div>
        <div className="contact-row">
          <img
            onClick={toGithub}
            className="contact-github"
            src={github}
            alt="email"
          />
          <p className="contact-github-text">github.com/raquelpantin</p>
        </div>
        <div className="contact-row">
          <img
            onClick={toLinkedin}
            className="contact-linkedin"
            src={linkedin}
            alt="email"
          />
          <p className="contact-linkedin-text">linkedin.com/in/raquelpantin</p>
        </div>
        <div className="contact-row">
          <img className="contact-location" src={location} alt="email" />
          <p className="contact-location-text">Miami, FL</p>
        </div>
      </div>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="contact-form-section">
          <label htmlFor="name">Name</label>
          <input
            className="contact-input"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </div>
        <div className="contact-form-section">
          <label htmlFor="email">Email</label>
          <input
            className="contact-input"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </div>
        <textarea
          className="contact-message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button className="contact-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
