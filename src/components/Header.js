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
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
//firebase
import { auth } from "../firebase";

function Header() {
  //user from redux
  const user = useSelector(selectUser);
  //console.log(user);
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
          avatar={user?.photoUrl}
          title="Me"
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;
