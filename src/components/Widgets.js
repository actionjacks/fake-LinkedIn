import React from "react";
import "../styles/Widgets.css";
//icons
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newArticle = (heading, subtitle) => (
    <div className="widget__article">
      <div className="widgets__articleleft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newArticle("javaScript", "love js")}
      {newArticle("php", "love js")}
      {newArticle("C#", "love js")}
      {newArticle("python", "love js")}
      {newArticle("java", "love js")}
    </div>
  );
}

export default Widgets;
