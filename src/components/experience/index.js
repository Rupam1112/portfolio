import React from "react";
import "./experience.scss";
import "../../App.scss";
import televox from "../../assets/televox.png";
import tcs from "../../assets/tcs.jpg";
import pdfUrl from "../../assets/RupamSaxena-Resume.pdf";

const Experience = () => {
  const fileName = "RupamSaxena-Resume.pdf";
  const download = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName;
    link.click();
  };
  return (
    <div className="experience-container" id="experience">
      <div className="experience-left">
        <div className="experience-header">
          <h1>Experience</h1>
        </div>
        <div className="experience-detail">
          <div className="detail-wrapper">
            <div className="details">
              <p>
                <div className="details-header-wrapper">
                  <img src={televox} className="img" />
                  <div className="details-header">
                    <b>Software Engineer</b>
                    <span className="company"> TeleVox Healthcare</span>
                    <span className="date">Jun 2021 - Jun 2023 </span>
                  </div>
                </div>
                <ul className="list">
                  <li> Developed reusable responsive UI components </li>
                  <li> Designed APIs for CRUD operations </li>
                  <li>Reduced code duplication by 21%. </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="detail-wrapper">
            <div className="details">
              <p>
                <div className="details-header-wrapper">
                  <img src={tcs} className="img" />
                  <div className="details-header">
                    <b>Associate Systems Engineer </b>
                    <span className="company">
                      Tata Consultancy Services
                    </span>{" "}
                    <span className="date">Jun 2019 – Jun 2021</span>{" "}
                  </div>
                </div>
                <ul className="list">
                  <li>Added new data fields as per requirement </li>
                  <li>Created db scripts for backfilling and migration. </li>
                  <li>Handled prod issues </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="experience-right">
        <button className="btn" onClick={download}>
          Get CV !
        </button>
      </div>
    </div>
  );
};

export default Experience;
