import React from "react";
import "./App.scss";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Experience from "./components/experience";
import Project from "./components/project";
import Contact from "./components/contact";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Home />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
};
export default App;
