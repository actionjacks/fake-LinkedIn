import React, { useState, useEffect } from "react";
import "../styles/Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import Post from "./Post";
//firebase
import firebase from "firebase";
import { db } from "../firebase";
// icons
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import EventIcon from "@material-ui/icons/Event";
import DescriptionIcon from "@material-ui/icons/Description";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "jacek",
      description: "lalalala",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
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
      {posts.map(
        ({ id, data: { name, description, message, photoUrl, timestamp } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        )
      )}
    </div>
  );
}

export default Feed;
