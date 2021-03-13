import React from "react";
import { Avatar } from "@material-ui/core";
import "../styles/Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://www.miamibeachfl.gov/wp-content/uploads/2017/12/explore-2-547-392.jpg"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Jacek Zed</h2>
        <h4>actionjacks@o2.pl</h4>
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
        {recentItem('javascript')}
        {recentItem('python')}
        {recentItem('C# my love')}
        {recentItem('flexbox')}
        {recentItem('dance')}
      </div>
    </div>
  );
}

export default Sidebar;
