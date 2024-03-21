import React from "react";
import "./about.scss";
import aboutLogo from "../../assets/aboutImage.png";
import serverIcon from "../../assets/serverIcon.png";
import cursorIcon from "../../assets/cursorIcon.png";
import uiIcon from "../../assets/uiIcon.png";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-left">
        <div className="about-header">
          <h1>About</h1>
        </div>
        <img src={aboutLogo} className="about-img" />
      </div>

      <div className="about-right">
        <div className="about-detail">
          <div className="detail-wrapper">
            <img src={cursorIcon} />
            <div className="details">
              <p>
                <b>Frontend Developer</b>
                <br />
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </div>
          <div className="detail-wrapper">
            <img src={serverIcon} />
            <div className="details">
              <p>
                <b>Backend Developer</b>
                <br />I have experience devloping fast and optimised back-end
                systems and APIs.
              </p>
            </div>
          </div>
          <div className="detail-wrapper">
            <img src={uiIcon} />
            <div className="details">
              <p>
                <b>Ui / Ux Enthusiast</b>
                <br />
                Passionate about building impressive yet user friendly websites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
