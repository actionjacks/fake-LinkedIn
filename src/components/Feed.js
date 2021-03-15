import React from "react";
import "../styles/Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import EventIcon from "@material-ui/icons/Event";
import DescriptionIcon from "@material-ui/icons/Description";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption
            Icon={PhotoSizeSelectActualIcon}
            title="Photo"
            color="#7085f9"
          />
          <InputOption
            Icon={VideogameAssetIcon}
            title="Video"
            color="#e7a33e"
          />
          <InputOption Icon={EventIcon} title="Event" color="#c0cbcd" />
          <InputOption Icon={DescriptionIcon} title="Write" color="#7fc15e" />
        </div>
      </div>
    </div>
  );
}

export default Feed;
