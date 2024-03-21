import React from "react";
import "./home.scss";
import "../../App.scss";
import mainLogo from "../../assets/heroImage.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home">
        <div className="home-header">
          <h1>Hi,I'm Rupam</h1>
        </div>
        <span className="home-details">
          <h3>
            I'm a full stack developer with 4 years of experience <br />
            using React and NodeJS . <br />
            Reach out if you'd like to know more.
          </h3>
        </span>
        <a href="#contact">
          {" "}
          <button className="btn">Contact Me</button>
        </a>
      </div>

      <img src={mainLogo} className="img" />
    </div>
  );
};

export default Home;
