import React from "react";
import "../styles/HeaderOptions.css";

function HeaderOptions({ title, Icon }) {
  return (
    <div className="headerOptions">
      {Icon && <Icon className="headerOption__icon" />}
      <h3>{title}</h3>
    </div>
  );
}

export default HeaderOptions;
