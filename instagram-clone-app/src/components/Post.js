import React from "react";

const Post = (props) => {
  // props = { post: {...} }
  const isPostLikedByMe = props.post.likes.includes(props.myUsername);
  let likeButtonText = "Like";
  if (isPostLikedByMe) {
    likeButtonText = "Liked";
  }

  return (
    <div className="post">
      <div>
        <img className="post-img" src={props.post.imageUrl} />
      </div>
      <div className="post-buttons">
        <button
          onClick={() => {
            props.likeHandler(props.post.id);
          }}
        >
          {likeButtonText}
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
