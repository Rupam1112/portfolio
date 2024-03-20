import React from "react";
import "./project.scss";
import weatherApp from "../../assets/weather-app.png";
import portfolio from "../../assets/portfolio.png";
import edu from "../../assets/edu.jpeg";

const Project = () => {
  return (
    <div className="project-container" id="project">
      <div className="header">
        <h1>Projects</h1>
      </div>
      <div className="projects">
        <div className="detail-wrapper">
          <div className="details">
            <img src={weatherApp} className="img" />
            <b>Weather App</b>
            Weather app to get real time weather data from all around the globe.
            <div className="stack-wrapper">
              <div className="stack">React</div>
              <div className="stack">Scss</div>
              <div className="stack">OpenWeather</div>
            </div>
            <a
              href="https://github.com/Rupam1112/react-weather-app"
              target="_blank"
            >
              <button className="btn-source">Source</button>
            </a>
          </div>
        </div>

        <div className="detail-wrapper">
          <div className="details">
            <img src={portfolio} className="img" />
            <b>Portfolio</b>
            My own portfolio/resume site with downloadable resume.
            <div className="stack-wrapper">
              <div className="stack">React</div>
              <div className="stack">Scss</div>
              <div className="stack">Prettier</div>
            </div>
            <a
              href="https://github.com/Rupam1112/react-weather-app"
              target="_blank"
            >
              <button className="btn-source">Source</button>
            </a>
          </div>
        </div>

        <div className="detail-wrapper">
          <div className="details">
            <img src={edu} className="img" />
            <b>EduSmart</b>
            Education portal to manage multiple schools , teachers etc.
            <div className="stack-wrapper">
              <div className="stack">React</div>
              <div className="stack">Formik</div>
              <div className="stack">Python</div>
            </div>
            <a href="https://github.com/Rupam1112/edu-ui" target="_blank">
              <button className="btn-source">Source</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
