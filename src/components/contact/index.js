import React from "react";
import "./contact.scss";
import emailIcon from "../../assets/emailIcon.png";
import linkedinIcon from "../../assets/linkedinIcon.png";
import githubIcon from "../../assets/githubIcon.png";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-left">
        <div className="contact-header">
          <h1>Contact</h1>
          Feel free to reach out !
        </div>
      </div>

      <div className="contact-right">
        <div className="detail-wrapper">
          <img src={emailIcon} />
          <div className="details">mail.rupamsaxena@gmail.com</div>
        </div>
        <div className="detail-wrapper">
          <img src={linkedinIcon} />
          <div className="details">linkedin.com/in/rsxdev/</div>
        </div>
        <div className="detail-wrapper">
          <img src={githubIcon} />
          <div className="details">github.com/Rupam1112</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
