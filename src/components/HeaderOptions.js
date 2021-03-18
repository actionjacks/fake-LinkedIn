import React from "react";
import "../styles/HeaderOptions.css";
import { Avatar } from "@material-ui/core";

function HeaderOptions({ avatar, title, Icon, onClick }) {
  return (
    <div onClick={onClick} className="headerOptions">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar src={avatar} className="headerOptions__icon" />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
