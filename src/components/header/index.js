import React from "react";
import "./header.scss";
const Header = () => {
  const items = [
    { key: "about", label: "About" },
    { key: "experience", label: "Experience" },
    { key: "project", label: "Project" },
    { key: "contact", label: "Contact" },
  ];
  return (
    <div className="header-container">
      <span className="header">
        <h1>Portfolio</h1>
      </span>
      <div className="nav-items">
        {items.map((item) => (
          <a href={`#${item.key}`}>
            <button className="items">{item.label}</button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
