import React from "react";
import "./dropdown.scss";
import menuIcon from "../../../assets/menuIcon.png";
const Dropdown = ({ items }) => {
  return (
    <div class="dropdown">
      <img src={menuIcon} />
      <div class="dropdown-content">
        {items.map((item) => (
          <a href={`#${item.key}`} className="items">
            {item.label}
          </a>
        
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
