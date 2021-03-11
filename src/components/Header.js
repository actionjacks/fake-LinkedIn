import React from "react";
import HeaderOptions from "./HeaderOptions";

import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../assets/linkEdinLogo.png";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions title="Home" />
        <HeaderOptions title="My Network" />
      </div>
    </div>
  );
}

export default Header;
