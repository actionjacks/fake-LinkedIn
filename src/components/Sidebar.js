import React, { useEffect } from "react";
import { Avatar } from "@material-ui/core";
import "../styles/Sidebar.css";
//redux
import { useSelector } from "react-redux";
import { selectUser } from "./../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  //dev
  useEffect(() => {
    console.log(user);
  }, []);

  //email displayName , photoUrl

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  const { email, displayName, photoUrl } = user;

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://www.miamibeachfl.gov/wp-content/uploads/2017/12/explore-2-547-392.jpg"
          alt=""
        />
        <Avatar src={photoUrl} className="sidebar__avatar">
          {email[0]}
          {/* if no photo url use email first letter */}
        </Avatar>

        <h2>{displayName}</h2>
        <h4>{email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Who on post</p>
          <p className="sidebar__statNumber">99</p>
        </div>
      </div>
      <div className="sidebar__botton">
        <p>Recent</p>
        {recentItem("javascript")}
        {recentItem("python")}
        {recentItem("C# my love")}
        {recentItem("flexbox")}
        {recentItem("dance")}
      </div>
    </div>
  );
}

export default Sidebar;
