import React from "react";
import LikedIcon from "../assets/liked.png";
import UnlikedIcon from "../assets/unliked.png";
import { useNavigate } from "react-router-dom";

const Post = (props) => {
  const navigate = useNavigate();
  // props = { post: {...} }
  const isPostLikedByMe = props.post.likes.includes(props.myUsername);
  let likeButtonImg = UnlikedIcon;
  if (isPostLikedByMe) {
    likeButtonImg = LikedIcon;
  }

  return (
    <div className="post">
      <div
        onClick={() => {
          navigate("/details", { state: props.post });
        }}
      >
        <img className="post-img" src={props.post.imageUrl} />
      </div>
      <div className="post-buttons">
        <button
          onClick={() => {
            props.likeHandler(props.post.id);
          }}
          style={{ paddingRight: "10px", paddingLeft: "10px" }}
        >
          <img src={likeButtonImg} width="10px" />
        </button>
        <button
          onClick={() => {
            console.log("Comment");
          }}
        >
          Comment
        </button>
        <button
          onClick={() => {
            console.log("Share");
          }}
        >
          Share
        </button>
      </div>
      <div>
        <p className="post-likes">{props.post.likes.length} likes</p>
        <p className="post-description">
          <span className="username">{props.post.username}</span>{" "}
          <span>{props.post.description}</span>
        </p>
      </div>
    </div>
  );
};

export default Post;
