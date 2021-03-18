import React from "react";
import HeaderOptions from "./HeaderOptions";

import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../assets/linkEdinLogo.png";
//icons
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import WorkIcon from "@material-ui/icons/Work";
import EmailIcon from "@material-ui/icons/Email";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
//redux
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
//firebase
import { auth } from "../firebase";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="" />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions Icon={HomeWorkIcon} title="Home" />
        <HeaderOptions Icon={SupervisedUserCircleIcon} title="My Network" />
        <HeaderOptions Icon={WorkIcon} title="Jobs" />
        <HeaderOptions Icon={EmailIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsNoneIcon} title="Notification" />
        <HeaderOptions
          avatar="https://i.pinimg.com/originals/66/82/ee/6682eefea7e94a9a4336a4cbc0e741da.jpg"
          title="Me"
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;
