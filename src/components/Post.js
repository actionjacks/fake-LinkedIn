import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/Post.css";
import InputOption from "./InputOption";
// icons
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ShareIcon from "@material-ui/icons/Share";
import MarkunreadMailboxIcon from "@material-ui/icons/MarkunreadMailbox";

function Post({ name, description, message, photoUrl }) {
  return (
    <div class="post">
      <div className="post__header">
        <Avatar src={photoUrl} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltIcon} title="Like" />
        <InputOption Icon={ChatBubbleOutlineIcon} title="Comment" />
        <InputOption Icon={ShareIcon} title="Share" />
        <InputOption Icon={MarkunreadMailboxIcon} title="Send" />
      </div>
    </div>
  );
}

export default Post;
